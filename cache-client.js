(() => {
  if (!('serviceWorker' in navigator) || !document.currentScript?.src) return;
  const root = new URL('./', document.currentScript.src);
  const ready = navigator.serviceWorker.register(new URL('sw.js', root), {
    scope:root.pathname, updateViaCache:'none',
  }).then(() => navigator.serviceWorker.ready).catch(() => null);
  // Also cover a student's very first PDF click, before this page has acquired
  // a controller. The link still opens normally in the browser.
  document.addEventListener('click', event => {
    const link = event.target.closest?.('a[href]');
    if (!link) return;
    const url = new URL(link.href);
    if (url.origin !== root.origin || !url.pathname.startsWith(root.pathname + 'books/') || !url.pathname.endsWith('.pdf')) return;
    void ready.then(registration => registration?.active?.postMessage({ type:'CACHE_PDF', url:url.href }));
  }, { capture:true });
})();
