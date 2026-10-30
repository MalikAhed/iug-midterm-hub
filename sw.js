// Only opened PDFs are stored. No course library is downloaded at installation.
const PDF_REVISIONS = {"books/395945.pdf":"6a005a07316fdc6eece0","books/395948.pdf":"05cf8971ef147861fb0f","books/395951.pdf":"9026e8b0b714e6a3bb62","books/136371.pdf":"e73a9e4d9877566fc26c","books/147397.pdf":"c2b2d35ac8906da31799","books/151718.pdf":"a409372a9c722f365faf","books/392329.pdf":"1d8216e56414b9b40881","books/392334.pdf":"1d0050786452119562a9","books/392343.pdf":"45fb70a8ecc0e1650ad7","books/392349.pdf":"9d6730f2ed6112026e4b","books/396704.pdf":"c84c82784d3fee99f98d","books/396712.pdf":"c3a7ff8fada0d7215741","books/157252.pdf":"3d8d10db4506c1481eab","books/396723.pdf":"0d2d164c1db6d5293ca7","books/396728.pdf":"65db617ec66bb12c4235","books/392357.pdf":"3de63646603bba0db373","books/392363.pdf":"347503494782db859e26","books/376360.pdf":"55389024bfb9b8e1d4f0","books/163702.pdf":"7291ec0662735434ccc2","books/395310.pdf":"8bc6c84f8e90848cec24","books/395313.pdf":"13c091e5a21a18e482ba","books/395315.pdf":"80001c9a2097322f11e9","books/395314.pdf":"19d48858ffbeed76cf01","books/371266.pdf":"9d8d0b6802195fa90d50","books/376361.pdf":"47febe4f012fff79bff7","books/376544.pdf":"f64b6e5178e74ec1a8d0"};
const ROOT = new URL('./', self.location.href);
const CACHE_NAME = 'iug-midterm-pdfs-v1:' + ROOT.pathname;
const pending = new Map();

function pdfLocation(raw) {
  const url = new URL(raw, ROOT);
  const relative = url.pathname.slice(ROOT.pathname.length);
  if (url.origin !== ROOT.origin || !url.pathname.startsWith(ROOT.pathname) || !PDF_REVISIONS[relative]) return null;
  url.search = ''; url.hash = '';
  const key = new URL(url);
  key.searchParams.set('revision', PDF_REVISIONS[relative]);
  return { url, key:key.href };
}

function loadPdf(location) {
  if (pending.has(location.key)) return pending.get(location.key);
  // A complete 200 response is needed for durable storage. Native PDF viewers
  // may begin with a Range request; fetch the full document once and stream it.
  const response = fetch(location.url.href, { credentials:'same-origin' });
  const stored = response.then(async result => {
    if (result.status !== 200 || !/application\/pdf/i.test(result.headers.get('Content-Type') || '')) return false;
    const cache = await caches.open(CACHE_NAME);
    await cache.put(location.key, result.clone());
    for (const old of await cache.keys()) {
      if (new URL(old.url).pathname === location.url.pathname && old.url !== location.key) await cache.delete(old);
    }
    return true;
  }).catch(() => false).finally(() => pending.delete(location.key));
  const record = { response, stored };
  pending.set(location.key, record);
  return record;
}

async function rangeResponse(response, request) {
  const range = request.headers.get('Range');
  if (!range) return response;
  const match = /^bytes=(\d*)-(\d*)$/.exec(range.trim());
  if (!match || (!match[1] && !match[2])) return response;
  const bytes = await response.arrayBuffer();
  const length = bytes.byteLength;
  const start = match[1] ? Number(match[1]) : Math.max(0, length - Number(match[2]));
  const end = match[1] && match[2] ? Math.min(length - 1, Number(match[2])) : length - 1;
  if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start > end || start >= length) {
    return new Response(null, { status:416, headers:{ 'Content-Range':`bytes */${length}` } });
  }
  const headers = new Headers(response.headers);
  headers.delete('Content-Encoding');
  headers.delete('Transfer-Encoding');
  headers.set('Content-Range', `bytes ${start}-${end}/${length}`);
  headers.set('Content-Length', String(end - start + 1));
  headers.set('Accept-Ranges', 'bytes');
  return new Response(bytes.slice(start, end + 1), { status:206, headers });
}

async function openPdf(request, location) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(location.key);
  if (cached) return { response:await rangeResponse(cached, request), stored:Promise.resolve(true) };
  const record = loadPdf(location);
  try {
    return { response:(await record.response).clone(), stored:record.stored };
  } catch (error) {
    // An older saved edition remains usable offline until its replacement has
    // actually loaded. Do not discard students' saved files on an app update.
    const old = (await cache.keys()).find(key => new URL(key.url).pathname === location.url.pathname);
    if (old) return { response:await rangeResponse(await cache.match(old), request), stored:Promise.resolve(true) };
    throw error;
  }
}

self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => {
  const location = event.request.method === 'GET' && pdfLocation(event.request.url);
  if (!location) return;
  const activity = openPdf(event.request, location);
  event.respondWith(activity.then(result => result.response));
  event.waitUntil(activity.then(result => result.stored).catch(() => false));
});
self.addEventListener('message', event => {
  if (event.data?.type !== 'CACHE_PDF') return;
  const location = pdfLocation(event.data.url);
  if (!location) return;
  event.waitUntil(openPdf(new Request(location.url.href), location).then(async result => {
    const saved = await result.stored;
    event.ports?.[0]?.postMessage({ cached:saved, url:location.url.href });
  }).catch(() => event.ports?.[0]?.postMessage({ cached:false, url:location.url.href })));
});
