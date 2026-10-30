var e={id:`physics-ch2`,title:`Motion in One Dimension`,summary:`Serway/Jewett 9e · Chapter 2 · original textbook exercises and verified practice.`,subjectId:`physics`,reward:0,status:`published`,authoringSource:`:::mcq
id: phys-ch2-p9
title: Serway/Jewett · Problem 2.9
reference: [Serway/Jewett 9e · Problem 2.9](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the complete original problem?
- [x] a | (a) +5.0; (b) −2.5; (c) 0; (d) +5.0 m/s
- [ ] b | (a) +5.0; (b) +2.5; (c) 0; (d) −5.0 m/s
- [ ] c | (a) 5.0; (b) 7.5; (c) 5.0; (d) −2.5 m/s
- [ ] d | (a) 0; (b) 0; (c) 0; (d) 0 m/s
explanation: Instantaneous velocity is the slope of each straight segment of Figure P2.1. The relevant slopes are \\(10/2=5\\), \\((5-10)/(4-2)=-2.5\\), 0, and \\((0+5)/(8-7)=5\\) m/s.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 2.9 — complete original problem](assets/lessons/physics/recommended/ch2-p9.webp)

![Original shared Figure P2.1](assets/lessons/physics/recommended/figure-ch2-p1.webp)
solution:
**Plan — we are going to…**

1. Find which straight piece of the position–time graph contains each requested time.
2. Read two points on that piece.
3. Divide the change in position by the change in time, keeping its sign.

**The trick**

**Graph height = position. Slope = velocity.** Positive position does not necessarily mean positive velocity.

**What you need to know**

- **Position:** location in meters.
- **Velocity:** position change per second.

On each straight section of a position–time graph, velocity is constant:

\\[
v_x=\\frac{x_2-x_1}{t_2-t_1}.
\\]

- Rising → **positive velocity**.
- Falling → **negative velocity**.
- Horizontal → **zero velocity**.

**Step-by-step solution**

1. **At 1.0 s:** use the rising section from **(0 s, 0 m)** to **(2 s, 10 m)**. Subtract final minus initial:

\\[
\\Delta x=10-0=10\\ \\mathrm{m}
\\]

\\[
\\Delta t=2-0=2\\ \\mathrm{s}
\\]

\\[
v_x=\\frac{10}{2}=+5.0\\ \\mathrm{m/s}.
\\]

2. **At 3.0 s:** use the falling piece between 2 s and 4 s. Its endpoints are 10 m and 5 m:

\\[
v_x=\\frac{5-10}{4-2}=\\frac{-5}{2}=-2.5\\ \\mathrm{m/s}.
\\]

The minus sign means the position is decreasing.

3. **At 4.5 s:** the graph is horizontal from 4 s to 5 s, at 5 m:

\\[
v_x=\\frac{5-5}{5-4}=0\\ \\mathrm{m/s}.
\\]

4. **At 7.5 s:** use the last rising piece, from 7 s at −5 m to 8 s at 0 m:

\\[
v_x=\\frac{0-(-5)}{8-7}=\\frac{5}{1}=+5.0\\ \\mathrm{m/s}.
\\]

Subtracting a negative position produces a positive change.

**Use this method again**

Read axes → locate the section containing the requested instant → calculate its slope. Do not average across other sections.

**Check**

The four answers are positive, negative, zero, positive—matching the graph rising, falling, flat, rising. Each slope has units of meters divided by seconds.
:::

:::mcq
id: phys-ch2-p11
title: Serway/Jewett · Problem 2.11
reference: [Serway/Jewett 9e · Problem 2.11](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the complete original problem?
- [ ] a | (a) 200 m; (b) 4 900 s
- [ ] b | (a) 5.00 m; (b) 5 000 s
- [ ] c | (a) 25.0 m; (b) 4 875 s
- [x] d | (a) 5.00 m; (b) 4 875 s (about 4.88 ks)
explanation: The tortoise takes \\(1000/0.200=5000\\) s. The hare needs 25 s for the last 200 m, during which the tortoise covers 5 m. The hare moves for \\(1000/8=125\\) s, so its rest time is 4875 s.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 2.11 — complete original problem](assets/lessons/physics/recommended/ch2-p11.webp)
solution:
**Plan — we are going to…**

1. Convert the race distances to meters.
2. Find the tortoise’s total race time.
3. Find how long the hare needs for its final run.
4. Use that same final interval to find the tortoise’s remaining distance, then subtract the hare’s running time from the total time.

**The trick**

**Finish together → same time remaining.** Use this at the hare's restart, even though the remaining distances differ.

**What you need to know**

For steady speed:

\\[
d=vt,\\qquad t=\\frac{d}{v}.
\\]

One kilometer is 1 000 meters. Total elapsed time includes both moving and resting.

**Step-by-step solution**

1. Convert the distances and find the hare’s last distance:

\\[
d_{\\mathrm{race}}=1.00(1000)=1000\\ \\mathrm{m}
\\]

\\[
d_{\\mathrm{hare,first}}=0.800(1000)=800\\ \\mathrm{m}
\\]

\\[
d_{\\mathrm{hare,last}}=1000-800=200\\ \\mathrm{m}.
\\]

2. The tortoise moves throughout the race at 0.200 m/s. Its total time is:

\\[
T=\\frac{1000}{0.200}=5000\\ \\mathrm{s}.
\\]

3. The hare’s final 200 m, at 8.00 m/s, requires:

\\[
t_{\\mathrm{last}}=\\frac{200}{8.00}=25.0\\ \\mathrm{s}.
\\]

4. **Part (a):** the tortoise also has 25.0 s left when the hare restarts. The distance it covers in those last seconds is its distance from the finish at restart:

\\[
d_{\\mathrm{tortoise,left}}=(0.200)(25.0)=5.00\\ \\mathrm{m}.
\\]

5. **Part (b):** find the hare’s first running time:

\\[
t_{\\mathrm{first}}=\\frac{800}{8.00}=100\\ \\mathrm{s}.
\\]

6. Add both running intervals, then subtract them from the common total race time:

\\[
t_{\\mathrm{running}}=100+25.0=125\\ \\mathrm{s}
\\]

\\[
t_{\\mathrm{stationary}}=5000-125=4875\\ \\mathrm{s}.
\\]

This is about 4.88 kiloseconds. The 4 875 s value is the unrounded arithmetic result.

**Use this method again**

For simultaneous finishes, work backward: **same remaining time** connects the different remaining distances.

**Check**

The hare restarts at 4 975 s and finishes 25 s later. By 4 975 s the tortoise has traveled 995 m, leaving 5 m. The hare’s 100 s running, 4 875 s resting, and 25 s final run total 5 000 s.
:::

:::mcq
id: phys-ch2-p13
title: Serway/Jewett · Problem 2.13
reference: [Serway/Jewett 9e · Problem 2.13](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the complete original problem?
- [ ] a | (a) 2.80 h; (b) 251 km
- [x] b | (a) 2.80 h; (b) 218 km
- [ ] c | (a) 0.367 h; (b) 32.8 km
- [ ] d | (a) 2.44 h; (b) 218 km
explanation: Let total time be T hours. \\(77.8T=89.5(T-22/60)\\), so \\(T=2.80484\\) h and \\(d=77.8T=218.217\\) km. Total trip time includes the stop.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 2.13 — complete original problem](assets/lessons/physics/recommended/ch2-p13.webp)
solution:
**Plan — we are going to…**

1. Convert the rest time to hours.
2. Call the whole trip time T, including the stop.
3. Write the same distance using the average speed and using the driving speed.
4. Solve for T, then calculate distance.

**The trick**

**Driving speed excludes the stop; average speed includes it.** Both describe the same distance but use different times.

**What you need to know**

- **Average speed:** total distance ÷ total time.
- **Driving distance:** driving speed × moving time.
- **Stop:** adds time, no distance.

\\[
t_{\\mathrm{moving}}=T-t_{\\mathrm{rest}}.
\\]

**Step-by-step solution**

1. Convert the stop to hours because both speeds are in kilometers per hour:

\\[
t_{\\mathrm{rest}}=22.0\\left(\\frac{1\\ \\mathrm{h}}{60\\ \\mathrm{min}}\\right)=0.366667\\ \\mathrm{h}.
\\]

2. Using the whole-trip average speed, the distance is:

\\[
d=77.8T.
\\]

3. Using the speed only while driving, the same distance is:

\\[
d=89.5(T-0.366667).
\\]

4. Equate the two distance expressions and distribute the multiplication:

\\[
77.8T=89.5T-89.5(0.366667)
\\]

\\[
77.8T=89.5T-32.8167.
\\]

5. Subtract 77.8T from both sides, then add 32.8167 to both sides:

\\[
32.8167=(89.5-77.8)T=11.7T.
\\]

6. Divide both sides by 11.7:

\\[
T=\\frac{32.8167}{11.7}=2.80484\\ \\mathrm{h}\\approx2.80\\ \\mathrm{h}.
\\]

7. **Part (b):** multiply the whole-trip average speed by the whole-trip time. Keep the unrounded time until the end:

\\[
d=(77.8)(2.80484)=218.217\\ \\mathrm{km}\\approx218\\ \\mathrm{km}.
\\]

**Use this method again**

Total time − stop time = moving time. Write distance using both average speed and driving speed, then equate.

**Check**

The moving time is about 2.438 h; multiplying it by 89.5 km/h also gives about 218 km. The whole-trip average speed is lower than the driving speed, as a rest stop requires.
:::

:::mcq
id: phys-ch2-p14
title: Serway/Jewett · Problem 2.14
reference: [Serway/Jewett 9e · Problem 2.14](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the complete original problem?
- [x] a | \\(1.34\\times10^4\\,\\mathrm{m/s^2}\\)
- [ ] b | \\(8.57\\times10^2\\,\\mathrm{m/s^2}\\)
- [ ] c | \\(13.4\\,\\mathrm{m/s^2}\\)
- [ ] d | \\(6.71\\times10^3\\,\\mathrm{m/s^2}\\)
explanation: The velocity reverses direction: \\(|\\Delta v|=|-22-25|=47\\) m/s. Divide by \\(3.50\\times10^{-3}\\) s.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 2.14 — complete original problem](assets/lessons/physics/recommended/ch2-p14.webp)
solution:
**Plan — we are going to…**

1. Choose the positive direction.
2. Give the incoming and outgoing velocities opposite signs.
3. Convert milliseconds to seconds.
4. Divide velocity change by contact time, then report the magnitude.

**The trick**

**Rebound → opposite velocity signs.** Subtract signed velocities, not positive speeds. The change includes slowing to zero and reversing.

**What you need to know**

Average acceleration is:

\\[
a_{\\mathrm{avg}}=\\frac{v_f-v_i}{\\Delta t}.
\\]

- **Velocity:** signed; includes direction.
- **Magnitude:** size, never negative.
- **1 ms:** 0.001 s.
- **Mass:** not needed here.

**Step-by-step solution**

1. Choose motion toward the wall as positive. The incoming velocity is positive and the rebound velocity is negative:

\\[
v_i=+25.0\\ \\mathrm{m/s},\\qquad v_f=-22.0\\ \\mathrm{m/s}.
\\]

2. Calculate final velocity minus initial velocity:

\\[
\\Delta v=-22.0-(+25.0)=-47.0\\ \\mathrm{m/s}.
\\]

3. Convert the contact time:

\\[
\\Delta t=3.50\\ \\mathrm{ms}=3.50\\times10^{-3}\\ \\mathrm{s}=0.00350\\ \\mathrm{s}.
\\]

4. Divide the signed velocity change by the elapsed time:

\\[
a_{\\mathrm{avg}}=\\frac{-47.0}{0.00350}=-13428.6\\ \\mathrm{m/s^2}.
\\]

5. The question asks for magnitude. Remove the directional minus sign and round to three significant figures:

\\[
|a_{\\mathrm{avg}}|=1.34\\times10^4\\ \\mathrm{m/s^2}.
\\]

**Use this method again**

Draw before/after arrows → assign opposite signs → subtract velocities → convert time → take magnitude only if requested.

**Check**

The change has size 47 m/s, equal to 25 m/s lost toward the wall plus 22 m/s gained away from it. A very short contact time explains the large acceleration.
:::

:::mcq
id: phys-ch2-p15
title: Serway/Jewett · Problem 2.15
reference: [Serway/Jewett 9e · Problem 2.15](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the complete original problem?
- [ ] a | (a) constant +1.6 m/s² throughout; (b) +1.60; (c) +1.60 m/s².
- [ ] b | (a) 0, then −1.6, then 0 m/s²; (b) −1.60; (c) −0.800 m/s².
- [ ] c | (a) −8, then 0, then +8 m/s²; (b) 0; (c) 0 m/s².
- [x] d | (a) approximately 0, then +1.6, then 0 m/s² on 0–5, 5–15, 15–20 s; (b) +1.60 m/s²; (c) +0.800 m/s².
explanation: The acceleration graph is the slope of the velocity graph, with smooth transition regions at its rounded corners. Average accelerations are \\([8-(-8)]/(15-5)=1.60\\) and \\([8-(-8)]/(20-0)=0.800\\) m/s².
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 2.15 — complete original problem](assets/lessons/physics/recommended/ch2-p15.webp)
solution:
**Plan — we are going to…**

1. Read this as a velocity–time graph.
2. Sketch acceleration by looking at where the velocity graph is flat, rising, and flattening again.
3. For each average acceleration, subtract the two endpoint velocities and divide by the interval length.

**The trick**

**Acceleration = velocity-graph slope**, not graph height. Average acceleration also depends on the chosen interval, even for similar velocity changes.

**What you need to know**

On a velocity–time graph:

- **Tangent slope:** acceleration at one instant.
- **Flat section:** zero acceleration, even if velocity is nonzero.
- **Average acceleration:** endpoint velocity change ÷ elapsed time.

\\[
a_{\\mathrm{avg}}=\\frac{v_f-v_i}{t_f-t_i}.
\\]

The printed graph has rounded joins. The simple values in the answer choices approximate the lower and upper velocities by −8 and +8 m/s.

**Step-by-step solution**

1. **Part (a), first flat portion:** before the rounded bend near 5 s, the velocity stays approximately −8 m/s. Since it is not changing, sketch acceleration at zero.

2. **Part (a), rising section (about 5–15 s):** slope is positive. Sketch acceleration rising smoothly from zero, staying near **+1.6 m/s²** through the nearly straight middle, then falling smoothly to zero at the rounded exit.

3. **Part (a), final flat section:** velocity stays near +8 m/s, so acceleration returns to zero.

**Overall sketch:** zero → positive middle → zero, with smooth transitions.

4. **Part (b):** for the 5–15 s estimate used in the choices, read the endpoints approximately as −8 and +8 m/s. Subtract them:

\\[
\\Delta v\\approx8-(-8)=16\\ \\mathrm{m/s}.
\\]

The elapsed time is:

\\[
\\Delta t=15.0-5.00=10.0\\ \\mathrm{s}.
\\]

Divide:

\\[
a_{\\mathrm{avg}}\\approx\\frac{16}{10.0}=+1.60\\ \\mathrm{m/s^2}.
\\]

**Graph precision:** at exactly 5 and 15 s, rounded joins place velocities slightly inside ±8 m/s. About **1.5 m/s²** is a reasonable reading; the choice **1.60** is an idealized estimate.

5. **Part (c):** at 0 and 20 s the graph is on the flat plateaus. The velocity change is 16 m/s, while the full elapsed time is 20 s:

\\[
a_{\\mathrm{avg}}=\\frac{8-(-8)}{20.0-0}=\\frac{16}{20.0}=+0.800\\ \\mathrm{m/s^2}.
\\]

**Use this method again**

- **Acceleration sketch:** translate each section's slope.
- **Average acceleration:** use only endpoint velocities and elapsed time.

**Check**

The 20 s average is smaller than the 10 s estimate because the longer interval includes time spent at constant velocity. Negative velocity on the first plateau does not mean negative acceleration: its slope is zero.
:::

:::mcq
id: phys-ch2-p17
title: Serway/Jewett · Problem 2.17
reference: [Serway/Jewett 9e · Problem 2.17](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the complete original problem?
- [ ] a | (a) 0; (b) zero everywhere; (c) all times; (d) zero everywhere.
- [x] b | (a) ≈1.3 m/s²; (b) near 3 s, ≈+2 m/s²; (c) at the initial horizontal tangent (t=0), at 6 s, and on the flat part from about 10–11 s onward; (d) near 9 s, ≈−1.5 m/s².
- [ ] c | (a) ≈8 m/s²; (b) at 6 s, +8 m/s²; (c) only at 0 s; (d) at 12 s, +4 m/s².
- [ ] d | (a) ≈1.3 m/s²; (b) near 3 s, ≈−2 m/s²; (c) only at 3 s; (d) near 9 s, ≈+1.5 m/s².
explanation: Average acceleration on 0–6 s is \\((8-0)/6\\approx1.3\\) m/s². Tangent slopes show the largest positive acceleration near 3 s, zero at the initial horizontal tangent, the 6 s maximum, and the later flat segment, and the steepest negative slope near 9 s. Tangent estimates are approximate.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 2.17 — complete original problem](assets/lessons/physics/recommended/ch2-p17.webp)
solution:
**Plan — we are going to…**

1. Use the start and 6 s velocities to find the average acceleration.
2. Find the steepest rising tangent for the largest positive acceleration.
3. Find horizontal tangents for zero acceleration.
4. Find the steepest falling tangent for the most negative acceleration.

**The trick**

**Highest point → greatest velocity, zero acceleration** because its tangent is horizontal. Greatest acceleration occurs at the steepest slope.

**What you need to know**

Average acceleration uses two times:

\\[
a_{\\mathrm{avg}}=\\frac{v_f-v_i}{t_f-t_i}.
\\]

**Instantaneous acceleration:** tangent slope.

1. Draw a tangent touching the curve at the requested time.
2. Read two points on that line.
3. Calculate rise ÷ run.

Printed-graph estimates are approximate.

**Step-by-step solution**

1. **Part (a):** read the graph at the two specified endpoints. At 0 s the motorcyclist is at rest; at 6 s the velocity is about 8 m/s:

\\[
a_{\\mathrm{avg}}=\\frac{8-0}{6.00-0}=\\frac{8}{6.00}\\approx+1.3\\ \\mathrm{m/s^2}.
\\]

2. **Part (b): steepest upward tangent**, near 3 s. Read two approximate tangent points: **(2 s, 2 m/s)** and **(4 s, 6 m/s)**. Calculate its slope:

\\[
a_{\\mathrm{largest,+}}\\approx\\frac{6-2}{4-2}=\\frac{4}{2}\\approx+2\\ \\mathrm{m/s^2}.
\\]

These are approximate tangent readings. Do not use the entire 0–6 s interval for this instantaneous value.

3. **Part (c): horizontal tangent → zero acceleration.** This occurs:

- At **0 s**, the initial endpoint.
- Near **6 s**, the velocity maximum.
- From about **10–11 s onward**, the flat section.

4. **Part (d): steepest downward tangent**, near 9 s. Approximate tangent points: **(8 s, 6.4 m/s)** and **(10 s, 3.4 m/s)**. Its slope is:

\\[
a_{\\mathrm{most,-}}\\approx\\frac{3.4-6.4}{10-8}=\\frac{-3.0}{2}\\approx-1.5\\ \\mathrm{m/s^2}.
\\]

The negative sign means velocity decreases. The motorcyclist still moves forward because the velocity remains above zero.

**Use this method again**

Mark horizontal tangents, then steepest rising/falling tangents. Use endpoints for an interval average; tangents for an instant.

**Check**

The motorcyclist speeds up before 6 s, slows down after 6 s, and later maintains about 4 m/s. Positive, negative, then zero acceleration agrees with those three behaviors.
:::

:::mcq
id: phys-ch2-p35
title: Serway/Jewett · Problem 2.35
reference: [Serway/Jewett 9e · Problem 2.35](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the complete original problem?
- [ ] a | 11.8 m/s
- [x] b | 3.10 m/s
- [ ] c | 26.6 m/s
- [ ] d | 14.9 m/s
explanation: For constant acceleration, \\(\\Delta x=v_ft-\\tfrac12at^2\\). Hence \\(v_f=62.4/4.20+(-5.60)(4.20)/2=3.097\\) m/s.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 2.35 — complete original problem](assets/lessons/physics/recommended/ch2-p35.webp)
solution:
**Plan — we are going to…**

1. Choose the car’s forward motion as positive.
2. Use the displacement equation to find the speed when braking began.
3. Use the velocity equation to find the impact speed.
4. Check that the car has not stopped before reaching the tree.

**The trick**

**Braking does not mean stopped.** Calculate final velocity; do not set it to zero. The skid length is displacement over the 4.20 s braking interval.

**What you need to know**

For constant acceleration:

\\[
\\Delta x=v_i t+\\frac12at^2
\\]

\\[
v_f=v_i+at.
\\]

Here the car moves forward but slows down, so its acceleration is negative.

**Step-by-step solution**

1. List the signed values:

\\[
\\Delta x=+62.4\\ \\mathrm{m},\\qquad t=4.20\\ \\mathrm{s},\\qquad a=-5.60\\ \\mathrm{m/s^2}.
\\]

2. Substitute into the displacement equation. Square the time before multiplying:

\\[
62.4=v_i(4.20)+\\frac12(-5.60)(4.20)^2
\\]

\\[
(4.20)^2=17.64
\\]

\\[
\\frac12(-5.60)(17.64)=-49.392.
\\]

Therefore:

\\[
62.4=4.20v_i-49.392.
\\]

3. Add 49.392 to both sides, then divide by 4.20:

\\[
111.792=4.20v_i
\\]

\\[
v_i=\\frac{111.792}{4.20}=26.6171\\ \\mathrm{m/s}.
\\]

4. Use this initial velocity to find the impact velocity. Keep extra digits until the final answer:

\\[
v_f=26.6171+(-5.60)(4.20)
\\]

\\[
v_f=26.6171-23.520=3.0971\\ \\mathrm{m/s}.
\\]

5. Since the final velocity is still positive, the car is still moving forward when it strikes the tree. Its impact **speed** is the magnitude:

\\[
\\mathrm{impact\\ speed}=3.10\\ \\mathrm{m/s}.
\\]

**Use this method again**

Known displacement/time/acceleration → solve displacement equation for initial velocity → calculate final velocity.

**Check**

For constant acceleration the average velocity is the mean of the endpoint velocities. Their mean is about 14.857 m/s; multiplied by 4.20 s, it gives the required 62.4 m. The impact speed is smaller than the initial speed but greater than zero.
:::

:::mcq
id: phys-quiz-ch2-1-1-1
title: IUG Chapter 2 Quiz · 1.1.1
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.1.1](../../../books/54811-1.pdf#page=1)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [ ] a | gram
- [ ] b | pound
- [x] c | kilogram
explanation: The SI base unit of mass is the kilogram. The original repeats the same correct option; the selectable responses are deduplicated.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.1.1](assets/lessons/physics/recommended/quiz-ch2-1-1-1.webp)
solution:
**Plan — we are going to…**

1. Identify the unit system.
2. Identify the physical quantity.
3. Match mass to its SI base unit.

**The trick**

**Base unit** means the system's standard unit—not any unit measuring the quantity.

**What you need to know**

**SI** = International System of Units. Its base units include:

- **Mass:** kilogram (kg).
- **Length:** meter (m).
- **Time:** second (s).

**Step-by-step solution**

1. **System:** SI. **Quantity:** mass. Match these to **kilogram (kg)**. A gram measures mass too, but is only 1/1000 kg.

2. Choose **kilogram**. Its duplicated appearance in the original choices does not create a second physical answer.

**Use this method again**

Underline both the system name and quantity before recalling the unit. SI mass and cgs mass have different base units.

**Check**

Kilogram is a mass unit. Meter and second would describe different quantities.
:::

:::mcq
id: phys-quiz-ch2-1-1-2
title: IUG Chapter 2 Quiz · 1.1.2
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.1.2](../../../books/54811-1.pdf#page=1)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [ ] a | kilometer
- [x] b | meter
- [ ] c | foot
- [ ] d | centimeter
explanation: The SI base unit of length is the meter.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.1.2](assets/lessons/physics/recommended/quiz-ch2-1-1-2.webp)
solution:
**Plan — we are going to…**

1. Identify the system as SI.
2. Identify the quantity as length.
3. Choose its base unit.

**The trick**

**SI base length unit = meter.** Centimeter and kilometer are prefixed length units.

**What you need to know**

- **Length:** separation or size.
- **SI base length unit:** meter (m).
- **centi-, kilo-:** prefixes for smaller/larger units.

**Step-by-step solution**

1. **System:** SI. **Quantity:** length. The base unit is **meter (m)**.

2. Reject centimeter/kilometer as prefixed units and foot as a non-SI unit. Choose **meter**.

**Use this method again**

For a base-unit question, distinguish the base name from prefixed versions of that name.

**Check**

An ordinary ruler can measure a distance in centimeters, but converting its result into SI base length units gives meters.
:::

:::mcq
id: phys-quiz-ch2-1-1-3
title: IUG Chapter 2 Quiz · 1.1.3
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.1.3](../../../books/54811-1.pdf#page=1)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [x] a | centimeter
- [ ] b | meter
- [ ] c | foot
- [ ] d | kilometer
explanation: The cgs base unit of length is the centimeter.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.1.3](assets/lessons/physics/recommended/quiz-ch2-1-1-3.webp)
solution:
**Plan — we are going to…**

1. Expand the abbreviation cgs.
2. Find the part referring to length.
3. Select that unit.

**The trick**

**cgs is not SI.** Its length unit is centimeter, not meter.

**What you need to know**

**cgs** names its base units in order:

- **c:** centimeter → length.
- **g:** gram → mass.
- **s:** second → time.

**Step-by-step solution**

1. Expand **cgs → centimeter, gram, second**.

2. Length uses the first unit: **centimeter (cm)**. Gram measures mass; second measures time. Meter is the SI base length unit.

**Use this method again**

Use the name cgs as a memory aid: c for centimeter, g for gram, s for second.

**Check**

A centimeter is a unit of length, so its physical quantity matches the question.
:::

:::exam-question
id: phys-quiz-ch2-1-1-4
title: IUG Chapter 2 Quiz · 1.1.4
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.1.4](../../../books/54811-1.pdf#page=1)
question: Check the original question and its options.
answer-label: Source correction
body:
![Original IUG PHYSA1301 quiz question 1.1.4](assets/lessons/physics/recommended/quiz-ch2-1-1-4.webp)
solution:
**Plan — we are going to…**

1. Identify the cgs mass unit.
2. Compare it with every printed option.
3. State the source error instead of selecting a length unit.

**The trick**

**The options are wrong:** all measure length, but the question asks for mass.

**What you need to know**

**cgs base units:**

- **Length:** centimeter.
- **Mass:** gram.
- **Time:** second.

**Step-by-step solution**

1. **cgs + mass → gram (g).**

2. The choices—meter, foot, centimeter, kilometer—all measure length. Gram is missing: **none of the printed options is correct**.

**Use this method again**

First determine the physical quantity a unit measures. If every option has the wrong physical quantity, the question may contain a source error.

**Check**

You cannot describe the mass of an object in meters or feet; the mismatch confirms the error.
:::

:::exam-question
id: phys-quiz-ch2-1-1-5
title: IUG Chapter 2 Quiz · 1.1.5
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.1.5](../../../books/54811-1.pdf#page=1)
question: Check the original question and its options.
answer-label: Source correction
body:
![Original IUG PHYSA1301 quiz question 1.1.5](assets/lessons/physics/recommended/quiz-ch2-1-1-5.webp)
solution:
**Plan — we are going to…**

1. Recall the Gaussian system’s mechanical length unit.
2. Compare it with the printed choices.
3. Record the missing correct unit.

**The trick**

**The correct unit is missing.** Another length unit does not become correct just because it appears among the choices.

**What you need to know**

**Gaussian mechanical units = cgs:** centimeter, gram, second.

**Length unit:** centimeter (cm).

**Step-by-step solution**

1. **Gaussian + length → centimeter (cm).** Its mechanical units follow cgs.

2. The choices—meter, foot, mile, inch—omit centimeter. **None of the printed choices is correct.**

**Use this method again**

A unit must match both the physical quantity and the specified unit system. Check both before choosing.

**Check**

Centimeter matches Gaussian length. Meter matches SI length, while foot, mile, and inch belong to other conventional length systems.
:::

:::mcq
id: phys-quiz-ch2-1-2-1
title: IUG Chapter 2 Quiz · 1.2.1
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.2.1](../../../books/54811-1.pdf#page=1)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [ ] a | m·s
- [x] b | m/s
- [ ] c | m
- [ ] d | m/s²
explanation: From x = vt, [v] = [x]/[t] = m/s.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.2.1](assets/lessons/physics/recommended/quiz-ch2-1-2-1.webp)
solution:
**Plan — we are going to…**

1. Start with the given position equation.
2. Isolate the constant v.
3. Replace position and time by their units.

**The trick**

**Find units from the equation**, not from the symbol's name.

**What you need to know**

- **Position:** meters.
- **Time:** seconds.

Isolate v, then divide its units in the same way as its quantities.

**Step-by-step solution**

1. Write the given equation:

\\[
x=vt.
\\]

2. Divide both sides by time to isolate v:

\\[
v=\\frac{x}{t}.
\\]

3. Substitute units only:

\\[
[v]=\\frac{\\mathrm{m}}{\\mathrm{s}}=\\mathrm{m/s}.
\\]

4. Choose meters per second.

**Use this method again**

For an unknown coefficient’s units, isolate the coefficient algebraically and replace each known quantity with its unit.

**Check**

Multiplying the result by seconds gives the required position unit:

\\[
(\\mathrm{m/s})(\\mathrm{s})=\\mathrm{m}.
\\]
:::

:::mcq
id: phys-quiz-ch2-1-2-2
title: IUG Chapter 2 Quiz · 1.2.2
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.2.2](../../../books/54811-1.pdf#page=1)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [x] a | m/s²
- [ ] b | m
- [ ] c | m/s
- [ ] d | m·s
explanation: From x = at² + b, [a] = [x]/[t]² = m/s².
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.2.2](assets/lessons/physics/recommended/quiz-ch2-1-2-2.webp)
solution:
**Plan — we are going to…**

1. Require each added term to have position units.
2. Isolate the units of a from the term containing time squared.
3. Simplify.

**The trick**

**Time is squared**, so the coefficient needs two inverse-second factors.

**What you need to know**

**Added terms need matching units.** Since position is in meters, both the time-dependent term and b must be in meters.

**Step-by-step solution**

1. Write the position equation:

\\[
x=at^2+b.
\\]

2. The first term must have units of meters:

\\[
[a](\\mathrm{s})^2=\\mathrm{m}.
\\]

3. Divide both sides by seconds squared:

\\[
[a]=\\frac{\\mathrm{m}}{\\mathrm{s}^2}=\\mathrm{m/s^2}.
\\]

4. Choose meters per second squared.

**Use this method again**

Look at the power of time multiplying the unknown coefficient. Divide the target term’s units by that power of seconds.

**Check**

The reconstructed term has length units:

\\[
(\\mathrm{m/s^2})(\\mathrm{s^2})=\\mathrm{m}.
\\]
:::

:::mcq
id: phys-quiz-ch2-1-2-3
title: IUG Chapter 2 Quiz · 1.2.3
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.2.3](../../../books/54811-1.pdf#page=1)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [ ] a | m/s
- [ ] b | m/s²
- [ ] c | m·s
- [x] d | m
explanation: The two terms at² and b must each have the same unit as x: meters.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.2.3](assets/lessons/physics/recommended/quiz-ch2-1-2-3.webp)
solution:
**Plan — we are going to…**

1. Identify the units on the left side.
2. Require every term added on the right side to have those same units.
3. Select the units of b.

**The trick**

**b is added directly to position.** It must already have position units.

**What you need to know**

**Addition needs matching dimensions:** meters + meters is valid; meters + meters/second is not.

**Step-by-step solution**

1. The position equation is:

\\[
x=at^2+b.
\\]

2. Position x is measured in meters. Both terms on the right must therefore be lengths.

3. The constant b has no accompanying factor of time, so its unit is simply:

\\[
[b]=[x]=\\mathrm{m}.
\\]

4. Choose meter.

**Use this method again**

For a constant added directly to a quantity, give the constant the same units as that quantity.

**Check**

At zero time, the time-squared term vanishes and the equation gives position equal to b. Therefore b must be a position.
:::

:::mcq
id: phys-quiz-ch2-1-2-4
title: IUG Chapter 2 Quiz · 1.2.4
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.2.4](../../../books/54811-1.pdf#page=1)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [ ] a | m/s²
- [ ] b | None of these
- [x] c | m/s
- [ ] d | m
explanation: The constant b is added to a velocity, so its unit is m/s.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.2.4](assets/lessons/physics/recommended/quiz-ch2-1-2-4.webp)
solution:
**Plan — we are going to…**

1. Identify the equation as a velocity equation.
2. Apply matching units to its added terms.
3. Choose the units of b.

**The trick**

Read the left side: this equation gives **velocity**, not position.

**What you need to know**

**Velocity unit = m/s.** Every term added to velocity needs that unit.

**Step-by-step solution**

1. Start from:

\\[
v=at+b.
\\]

2. The whole right side must have the same unit as v, which is m/s.

3. Since b is added directly, without a time factor:

\\[
[b]=[v]=\\mathrm{m/s}.
\\]

4. Choose meters per second.

**Use this method again**

For unit questions with similar-looking equations, identify whether the left side is position, velocity, or acceleration first.

**Check**

At zero time, the equation says velocity equals b. Thus b is the initial velocity and needs velocity units.
:::

:::mcq
id: phys-quiz-ch2-1-2-5
title: IUG Chapter 2 Quiz · 1.2.5
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.2.5](../../../books/54811-1.pdf#page=2)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [ ] a | None of these
- [x] b | m/s²
- [ ] c | m
- [ ] d | m/s
explanation: In v = at + b, [a] = [v]/[t] = m/s².
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.2.5](assets/lessons/physics/recommended/quiz-ch2-1-2-5.webp)
solution:
**Plan — we are going to…**

1. Require the product at to have velocity units.
2. Divide those units by seconds.
3. Simplify.

**The trick**

**a × time = velocity**, so a has velocity-per-time units: acceleration.

**What you need to know**

**Every added term must match velocity's units.** The product a × t must therefore be in m/s.

**Step-by-step solution**

1. Write the given equation:

\\[
v=at+b.
\\]

2. Match the units of its time-dependent term:

\\[
[a](\\mathrm{s})=\\mathrm{m/s}.
\\]

3. Divide by seconds:

\\[
[a]=\\frac{\\mathrm{m/s}}{\\mathrm{s}}=\\mathrm{m/s^2}.
\\]

4. Choose meters per second squared.

**Use this method again**

Isolate a multiplying constant’s units by dividing the whole term’s units by the units of everything multiplying it.

**Check**

Multiplication restores velocity units:

\\[
(\\mathrm{m/s^2})(\\mathrm{s})=\\mathrm{m/s}.
\\]
:::

:::mcq
id: phys-quiz-ch2-1-2-6
title: IUG Chapter 2 Quiz · 1.2.6
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.2.6](../../../books/54811-1.pdf#page=2)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [x] a | Adding them
- [ ] b | Multiplying them
- [ ] c | Dividing them
- [ ] d | None of these
explanation: Quantities must be expressed in compatible units before they can be added.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.2.6](assets/lessons/physics/recommended/quiz-ch2-1-2-6.webp)
solution:
**Plan — we are going to…**

1. Compare addition with multiplication and division.
2. Find which operation requires matching kinds of quantities.
3. Choose that operation.

**The trick**

**Addition needs matching quantities.** Multiplication and division may combine different quantities to form a new one.

**What you need to know**

- **Add/subtract:** same physical quantity, converted to matching units.
- **Multiply/divide:** different quantities allowed; units combine.

Examples: speed × time = distance; distance ÷ time = speed.

**Step-by-step solution**

1. Consider addition. Two lengths can be added after a unit conversion if necessary:

\\[
1\\ \\mathrm{m}+20\\ \\mathrm{cm}=1\\ \\mathrm{m}+0.20\\ \\mathrm{m}=1.20\\ \\mathrm{m}.
\\]

2. A length and a time cannot be added meaningfully. They describe different physical quantities.

3. Multiplication does allow unlike units. Speed multiplied by time gives distance. Division also allows unlike units: distance divided by time gives speed.

4. Choose **adding them**. Here “same units” means convert to compatible matching units before performing the numerical addition.

**Use this method again**

Ask whether the operation combines measurements of the same quantity or constructs a different physical quantity.

**Check**

Adding 2 meters to 3 seconds has no physical meaning, while dividing 2 meters by 3 seconds does.
:::

:::mcq
id: phys-quiz-ch2-1-2-7
title: IUG Chapter 2 Quiz · 1.2.7
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.2.7](../../../books/54811-1.pdf#page=2)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [ ] a | Adding them only
- [ ] b | Subtracting them only
- [ ] c | Equating them only
- [x] d | All of the listed operations
explanation: Addition, subtraction and equality all require matching dimensions.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.2.7](assets/lessons/physics/recommended/quiz-ch2-1-2-7.webp)
solution:
**Plan — we are going to…**

1. Recall what dimensions mean.
2. Check addition, subtraction, and equality separately.
3. Choose the response that includes every valid case.

**The trick**

**Dimensions = physical kind**, such as length. Meters and centimeters have the same dimension but different units.

**What you need to know**

- **Add, subtract, equate:** matching dimensions required.
- **Multiply, divide:** new dimensions allowed.

**Step-by-step solution**

1. **Addition:** adding two lengths is meaningful; adding a length and a time is not. Matching dimensions are required.

2. **Subtraction:** a change in position is final position minus initial position. Both must be lengths. Matching dimensions are required.

3. **Equality:** both sides of a physical equation must describe the same kind of quantity. A length cannot equal a time. Matching dimensions are required.

4. Since all three listed operations require matching dimensions, choose **all of the listed operations**.

**Use this method again**

Check each operation independently before selecting “all.” Remember that unit conversion changes unit names without changing physical dimensions.

**Check**

You may equate 1 meter to 100 centimeters because both are lengths. You cannot equate 1 meter to 100 seconds.
:::

:::mcq
id: phys-quiz-ch2-1-3-1
title: IUG Chapter 2 Quiz · 1.3.1
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.3.1](../../../books/54811-1.pdf#page=2)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [x] a | Distance divided by elapsed time
- [ ] b | Magnitude of average velocity
- [ ] c | Acceleration multiplied by elapsed time
- [ ] d | Displacement divided by elapsed time
explanation: Average speed equals total distance traveled divided by elapsed time.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.3.1](assets/lessons/physics/recommended/quiz-ch2-1-3-1.webp)
solution:
**Plan — we are going to…**

1. Identify that the question asks for average speed.
2. Recall the distance-based definition.
3. Select the expression that includes the whole elapsed time.

**The trick**

**Speed uses total distance.** Returning toward the start does not erase distance traveled.

**What you need to know**

Average speed is a scalar: it has size but no direction. It is defined over the whole interval by:

\\[
\\mathrm{average\\ speed}=\\frac{\\mathrm{total\\ distance}}{\\mathrm{elapsed\\ time}}.
\\]

**Step-by-step solution**

1. Read the requested quantity: average speed.

2. Add all path lengths traveled during the interval to obtain total distance.

3. Divide by the entire elapsed time, including any stops if they are part of the interval.

4. Choose **distance divided by elapsed time**. Displacement divided by time defines average velocity instead. The two have the same magnitude only for travel without reversals.

**Use this method again**

Underline “speed” or “velocity” before choosing a numerator: speed uses distance, velocity uses displacement.

**Check**

Average speed cannot be negative. A round trip can have a positive average speed even though it has zero average velocity.
:::

:::mcq
id: phys-quiz-ch2-1-3-2
title: IUG Chapter 2 Quiz · 1.3.2
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.3.2](../../../books/54811-1.pdf#page=2)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [ ] a | Distance divided by elapsed time
- [ ] b | Half the sum of initial and final speeds
- [ ] c | Acceleration multiplied by elapsed time
- [x] d | Displacement divided by elapsed time
explanation: Average velocity equals vector displacement divided by elapsed time.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.3.2](assets/lessons/physics/recommended/quiz-ch2-1-3-2.webp)
solution:
**Plan — we are going to…**

1. Identify that the question asks for average velocity.
2. Find the change in position, including direction.
3. Divide by the elapsed time.

**The trick**

**Average velocity uses start and finish**, not total path length.

**What you need to know**

In one dimension, displacement is final position minus initial position. Average velocity is:

\\[
v_{\\mathrm{avg}}=\\frac{\\Delta x}{\\Delta t}=\\frac{x_f-x_i}{t_f-t_i}.
\\]

Its sign tells you the direction of the net displacement.

**Step-by-step solution**

1. Read the requested quantity: average velocity.

2. Take final position minus initial position to obtain displacement.

3. Divide that signed displacement by the full time interval.

4. Choose **displacement ÷ elapsed time**.

- Distance ÷ time → average speed.
- Mean of endpoint velocities → valid for constant acceleration, not the general definition.

**Use this method again**

For average velocity, write the two endpoint positions first. The details of the path do not affect displacement.

**Check**

If the start and finish positions coincide, the numerator is zero, so the average velocity is zero regardless of the path traveled.
:::

:::mcq
id: phys-quiz-ch2-1-3-3
title: IUG Chapter 2 Quiz · 1.3.3
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.3.3](../../../books/54811-1.pdf#page=2)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [ ] a | Both are scalars
- [ ] b | Distance is always strictly greater than displacement magnitude
- [x] c | Displacement depends only on the initial and final positions
- [ ] d | Both are vectors
explanation: Displacement is final position minus initial position. Distance can equal displacement magnitude on a direct path, so the word always makes that option false.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.3.3](assets/lessons/physics/recommended/quiz-ch2-1-3-3.webp)
solution:
**Plan — we are going to…**

1. Define distance and displacement separately.
2. Test whether each depends on the path.
3. Reject any claim using “always greater” when equality is possible.

**The trick**

A direct trip can have **distance = displacement magnitude**. Therefore “always greater” is false.

**What you need to know**

Distance is the accumulated path length and is a scalar. Displacement is the change in position and includes direction:

\\[
\\Delta x=x_f-x_i.
\\]

In general:

\\[
\\mathrm{distance}\\ge|\\mathrm{displacement}|.
\\]

**Step-by-step solution**

1. Distance counts every part of the journey. Taking a detour can increase it.

2. Displacement compares only the final and initial positions. Changing the route without changing those endpoints leaves displacement unchanged.

3. The “both vectors” option fails because distance is scalar. The “both scalars” option fails because displacement is a vector.

4. On a straight 5 m trip without reversing, distance and displacement magnitude are both 5 m, so strict inequality is not always true.

5. Choose **displacement depends only on the initial and final positions**.

**Use this method again**

Test statements containing “always” with a simple straight trip and with a round trip. These two cases expose many distance/displacement errors.

**Check**

Two people can take different routes between the same endpoints and have different distances but identical displacements.
:::

:::mcq
id: phys-quiz-ch2-1-3-4
title: IUG Chapter 2 Quiz · 1.3.4
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.3.4](../../../books/54811-1.pdf#page=2)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [ ] a | The particle moves in +x without reversing
- [x] b | The particle moves in +x and then reverses direction
- [ ] c | Under no conditions
- [ ] d | The particle moves in −x without reversing
explanation: A reversal makes path length greater than the magnitude of the net displacement, so average speed exceeds average-velocity magnitude.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.3.4](assets/lessons/physics/recommended/quiz-ch2-1-3-4.webp)
solution:
**Plan — we are going to…**

1. Write the two average definitions.
2. Notice that both divide by the same time.
3. Identify when distance is greater than displacement magnitude.

**The trick**

**Reversal adds distance but cancels displacement.** This makes average speed exceed average-velocity magnitude.

**What you need to know**

For the same time interval:

\\[
|v_{\\mathrm{avg}}|=\\frac{|\\Delta x|}{\\Delta t}
\\]

\\[
\\mathrm{average\\ speed}=\\frac{\\mathrm{distance}}{\\Delta t}.
\\]

**Step-by-step solution**

1. The denominators are identical and positive. Therefore compare only the two numerators.

2. If the particle moves without reversing, the distance equals displacement magnitude, whether motion is in the positive or negative direction.

3. If it travels 5 m in the positive direction and then 2 m back, total distance is:

\\[
d=5+2=7\\ \\mathrm{m}.
\\]

Its displacement magnitude is:

\\[
|\\Delta x|=|5-2|=3\\ \\mathrm{m}.
\\]

4. Dividing 3 and 7 by the same time makes average-velocity magnitude smaller than average speed. Choose **the particle moves in +x and then reverses direction**.

**Use this method again**

When comparing these averages over one interval, compare distance with displacement magnitude; do not get distracted by whether the first direction is positive or negative.

**Check**

The chosen example has a longer traveled path than net separation. The inequality has the required direction.
:::

:::mcq
id: phys-quiz-ch2-1-3-5
title: IUG Chapter 2 Quiz · 1.3.5
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.3.5](../../../books/54811-1.pdf#page=3)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [x] a | Under no conditions
- [ ] b | The particle moves in −x without reversing
- [ ] c | The particle moves in +x and then reverses direction
- [ ] d | The particle moves in +x without reversing
explanation: Displacement magnitude never exceeds total distance, so average-velocity magnitude never exceeds average speed.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.3.5](assets/lessons/physics/recommended/quiz-ch2-1-3-5.webp)
solution:
**Plan — we are going to…**

1. Recall the distance–displacement inequality.
2. Divide both sides by the same positive elapsed time.
3. Determine whether the proposed greater-than condition can occur.

**The trick**

Over the **same interval**, average-velocity magnitude cannot exceed average speed.

**What you need to know**

Net separation cannot exceed the path traveled:

\\[
|\\Delta x|\\le d_{\\mathrm{total}}.
\\]

Elapsed time is positive, so division preserves the inequality.

**Step-by-step solution**

1. Start with displacement magnitude no greater than total distance:

\\[
|\\Delta x|\\le d_{\\mathrm{total}}.
\\]

2. Divide both sides by the same elapsed time:

\\[
\\frac{|\\Delta x|}{\\Delta t}\\le\\frac{d_{\\mathrm{total}}}{\\Delta t}.
\\]

3. Identify the two ratios:

\\[
|v_{\\mathrm{avg}}|\\le\\mathrm{average\\ speed}.
\\]

4. Equality is possible without reversing, and strict less-than is possible with a reversal. Greater-than is impossible. Choose **under no conditions**.

**Use this method again**

Use the basic distance inequality to compare the averages. It applies without knowing the detailed motion.

**Check**

A round trip gives zero average-velocity magnitude and positive average speed, while a direct trip gives equality. Neither case violates the inequality.
:::

:::mcq
id: phys-quiz-ch2-1-3-6
title: IUG Chapter 2 Quiz · 1.3.6
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.3.6](../../../books/54811-1.pdf#page=3)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [ ] a | 80 km/h
- [ ] b | 160 km/h
- [ ] c | 40 km/h
- [x] d | 0 km/h
explanation: The round trip ends at the starting point. Displacement and average velocity are zero.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.3.6](assets/lessons/physics/recommended/quiz-ch2-1-3-6.webp)
solution:
**Plan — we are going to…**

1. Choose the start as the position origin.
2. Find the final position after the round trip.
3. Divide displacement by the two-hour elapsed time.

**The trick**

**Round trip → zero displacement → zero average velocity**, despite nonzero distance traveled.

**What you need to know**

Average velocity uses displacement, not total distance:

\\[
v_{\\mathrm{avg}}=\\frac{x_f-x_i}{\\Delta t}.
\\]

**Step-by-step solution**

1. Set the starting position in Gaza to zero. After returning to Gaza, the final position is also zero.

2. Calculate displacement:

\\[
\\Delta x=0-0=0\\ \\mathrm{km}.
\\]

3. Divide by the stated round-trip time:

\\[
v_{\\mathrm{avg}}=\\frac{0\\ \\mathrm{km}}{2.0\\ \\mathrm{h}}=0\\ \\mathrm{km/h}.
\\]

4. The magnitude of zero is zero. Choose **0 km/h**.

**Use this method again**

For a complete round trip, endpoint positions coincide, so average velocity is zero over that trip.

**Check**

The positive distance traveled does not enter the average-velocity numerator. It would enter average speed instead.
:::

:::mcq
id: phys-quiz-ch2-1-3-8
title: IUG Chapter 2 Quiz · 1.3.8
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.3.8](../../../books/54811-1.pdf#page=3)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [ ] a | 0.33 m/s
- [x] b | 2.3 m/s
- [ ] c | 1.7 m/s
- [ ] d | 1.6 m/s
explanation: Total distance is 3.0 + 4.0 = 7.0 m; 7.0/3.0 = 2.33 m/s.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.3.8](assets/lessons/physics/recommended/quiz-ch2-1-3-8.webp)
solution:
**Plan — we are going to…**

1. Add both path lengths without directional cancellation.
2. Add both time intervals.
3. Divide total distance by total time.

**The trick**

**Add distances and times separately.** Opposite directions do not cancel distance; do not average the two segment speeds.

**What you need to know**

**Average speed = total distance ÷ total time.** Every path length counts positively.

**Step-by-step solution**

1. The particle travels 3.0 m east, then 4.0 m west. Total distance is:

\\[
d=3.0+4.0=7.0\\ \\mathrm{m}.
\\]

2. Add the segment times:

\\[
\\Delta t=2.0+1.0=3.0\\ \\mathrm{s}.
\\]

3. Divide:

\\[
\\mathrm{average\\ speed}=\\frac{7.0}{3.0}=2.333\\ldots\\ \\mathrm{m/s}.
\\]

4. Round to the choice precision: **2.3 m/s**.

**Use this method again**

For a multileg average speed, add distances first and times second. Take only one ratio at the end.

**Check**

An average speed of about 2.33 m/s for 3 s produces the 7 m traveled. The opposite directions do not reduce this distance.
:::

:::mcq
id: phys-quiz-ch2-1-3-9
title: IUG Chapter 2 Quiz · 1.3.9
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.3.9](../../../books/54811-1.pdf#page=3)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [x] a | 0.33 m/s
- [ ] b | 1.7 m/s
- [ ] c | 2.3 m/s
- [ ] d | 1.6 m/s
explanation: Net displacement is 1.0 m west in 3.0 s, giving average-velocity magnitude 0.333 m/s.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.3.9](assets/lessons/physics/recommended/quiz-ch2-1-3-9.webp)
solution:
**Plan — we are going to…**

1. Choose east as positive.
2. Add the signed displacements.
3. Divide by the total time.
4. Take the magnitude requested.

**The trick**

**3 m east, 4 m west → 1 m west overall.** Use this net displacement for average velocity.

**What you need to know**

- **Displacement:** signed; assign directions before adding.
- **Average velocity:** displacement ÷ elapsed time.
- **Magnitude:** size without a directional sign.

**Step-by-step solution**

1. Choose east as positive. The two displacements are +3.0 m and −4.0 m.

2. Add with signs:

\\[
\\Delta x=3.0+(-4.0)=-1.0\\ \\mathrm{m}.
\\]

3. Add the travel times:

\\[
\\Delta t=2.0+1.0=3.0\\ \\mathrm{s}.
\\]

4. Divide to get average velocity:

\\[
v_{\\mathrm{avg}}=\\frac{-1.0}{3.0}=-0.333\\ldots\\ \\mathrm{m/s}.
\\]

5. The minus sign means west. The requested magnitude is **0.33 m/s**.

**Use this method again**

For average velocity with a reversal, use signed displacements. If the question asks for magnitude, take the absolute value after calculating the signed answer.

**Check**

The particle finishes west of where it started, so westward average velocity is sensible. Its magnitude is smaller than the 2.3 m/s average speed for the same trip.
:::

:::mcq
id: phys-quiz-ch2-1-3-10
title: IUG Chapter 2 Quiz · 1.3.10
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.3.10](../../../books/54811-1.pdf#page=3)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [x] a | 12 m/s
- [ ] b | 16 m/s
- [ ] c | 6 m/s
- [ ] d | 10 m/s
explanation: For x = 3t² + 4, v = dx/dt = 6t; at t = 2 s, v = 12 m/s.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.3.10](assets/lessons/physics/recommended/quiz-ch2-1-3-10.webp)
solution:
**Plan — we are going to…**

1. Recognize that an instantaneous velocity is requested.
2. Differentiate the position equation with respect to time.
3. Substitute the requested time.

**The trick**

**Instantaneous velocity = slope at one time.** Substituting into position directly gives location instead.

**What you need to know**

Velocity is the time derivative of position. For a power of time, differentiation multiplies by the exponent and reduces that exponent by one. A constant has zero derivative:

\\[
\\frac{d}{dt}(Ct^n)=nCt^{n-1},\\qquad \\frac{d}{dt}(C)=0.
\\]

**Step-by-step solution**

1. Write the position equation, whose numerical coefficients carry the units needed for meters:

\\[
x(t)=3t^2+4.
\\]

2. Differentiate each term. The derivative of the squared term is coefficient 3 times exponent 2 times time to power 1; the constant 4 contributes zero:

\\[
v(t)=\\frac{dx}{dt}=3(2)t^{2-1}+0=6t.
\\]

3. Substitute the requested time of 2 s:

\\[
v(2)=6(2)=12\\ \\mathrm{m/s}.
\\]

4. Choose **12 m/s**.

**Use this method again**

When given position as a time function, differentiate once for instantaneous velocity, then substitute time. Keep average-velocity questions separate.

**Check**

The positive slope means position is increasing. The constant 4 shifts the starting position but does not change velocity.
:::

:::mcq
id: phys-quiz-ch2-1-3-11
title: IUG Chapter 2 Quiz · 1.3.11
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.3.11](../../../books/54811-1.pdf#page=3)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [ ] a | 6 m/s
- [ ] b | 4 m/s
- [ ] c | 10 m/s
- [x] d | 8 m/s
explanation: For x = 2t³ + 4, x(2) − x(0) = 16 m; dividing by 2 s gives 8 m/s.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.3.11](assets/lessons/physics/recommended/quiz-ch2-1-3-11.webp)
solution:
**Plan — we are going to…**

1. Identify the start and end times.
2. Evaluate the position at each time.
3. Subtract positions and divide by elapsed time.

**The trick**

**Average velocity uses two endpoint positions.** Instantaneous velocity at the end is a different answer.

**What you need to know**

Average velocity is:

\\[
v_{\\mathrm{avg}}=\\frac{x(t_f)-x(t_i)}{t_f-t_i}.
\\]

The numerical coefficients of the position function carry the units needed to make position meters.

**Step-by-step solution**

1. Write the given position function:

\\[
x(t)=2t^3+4.
\\]

2. Evaluate the starting position at 0 s:

\\[
x(0)=2(0)^3+4=4\\ \\mathrm{m}.
\\]

3. Evaluate the final position at 2 s. Cube 2 before multiplying:

\\[
x(2)=2(2)^3+4=2(8)+4=20\\ \\mathrm{m}.
\\]

4. Subtract positions and times:

\\[
\\Delta x=20-4=16\\ \\mathrm{m}
\\]

\\[
\\Delta t=2-0=2\\ \\mathrm{s}.
\\]

5. Divide:

\\[
v_{\\mathrm{avg}}=\\frac{16}{2}=8\\ \\mathrm{m/s}.
\\]

The requested magnitude is **8 m/s**.

**Use this method again**

For average velocity from a position function, evaluate both endpoint positions first. Do not substitute only the final time into a derivative.

**Check**

The particle advances 16 m in 2 s, so the interval average is 8 m/s. The 4 m initial offset cancels when positions are subtracted.
:::

:::mcq
id: phys-quiz-ch2-1-4-1
title: IUG Chapter 2 Quiz · 1.4.1
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.4.1](../../../books/54811-1.pdf#page=3)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [ ] a | 0 m/s²
- [ ] b | 6 m/s²
- [ ] c | 16 m/s²
- [x] d | 12 m/s²
explanation: For x = 2t³ + 4, v = 6t² and a = 12t; at t = 1 s, a = 12 m/s².
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.4.1](assets/lessons/physics/recommended/quiz-ch2-1-4-1.webp)
solution:
**Plan — we are going to…**

1. Differentiate position once to get velocity.
2. Differentiate velocity to get acceleration.
3. Evaluate acceleration at 1 s.

**The trick**

**Position → velocity → acceleration:** two time derivatives, not one.

**What you need to know**

Velocity measures the rate of change of position. Acceleration measures the rate of change of velocity:

\\[
v=\\frac{dx}{dt},\\qquad a=\\frac{dv}{dt}.
\\]

For each power of time, multiply by its exponent and reduce that exponent by one. Constants differentiate to zero.

**Step-by-step solution**

1. Begin with the position function, with coefficients carrying the units needed for meters:

\\[
x(t)=2t^3+4.
\\]

2. Differentiate each term to obtain velocity:

\\[
v(t)=2(3)t^{3-1}+0=6t^2.
\\]

3. Differentiate velocity to obtain acceleration:

\\[
a(t)=6(2)t^{2-1}=12t.
\\]

4. Only now substitute the requested time:

\\[
a(1)=12(1)=12\\ \\mathrm{m/s^2}.
\\]

Choose **12 m/s²**.

**Use this method again**

Write the chain position → velocity → acceleration. Move one step along that chain for each derivative, then substitute the time.

**Check**

Acceleration has units of meters per second squared. Substituting into the position function directly would give meters and answer a different question.
:::

:::mcq
id: phys-quiz-ch2-1-4-2
title: IUG Chapter 2 Quiz · 1.4.2
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.4.2](../../../books/54811-1.pdf#page=4)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [ ] a | 6 m/s²
- [ ] b | 16 m/s²
- [x] c | 12 m/s²
- [ ] d | 0 m/s²
explanation: v(t) = 6t², so [v(2) − v(0)]/2 = 24/2 = 12 m/s².
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.4.2](assets/lessons/physics/recommended/quiz-ch2-1-4-2.webp)
solution:
**Plan — we are going to…**

1. Differentiate position to find velocity as a function of time.
2. Evaluate velocity at 0 and 2 s.
3. Divide the velocity change by the elapsed time.

**The trick**

**Average acceleration uses endpoint velocities.** Endpoint position change ÷ time gives average velocity instead.

**What you need to know**

Average acceleration is:

\\[
a_{\\mathrm{avg}}=\\frac{v(t_f)-v(t_i)}{t_f-t_i}.
\\]

Differentiate position once to obtain velocity before applying this definition.

**Step-by-step solution**

1. The position function and its derivative are:

\\[
x(t)=2t^3+4
\\]

\\[
v(t)=\\frac{dx}{dt}=2(3)t^2+0=6t^2.
\\]

2. Evaluate the initial velocity:

\\[
v(0)=6(0)^2=0\\ \\mathrm{m/s}.
\\]

3. Evaluate the final velocity:

\\[
v(2)=6(2)^2=6(4)=24\\ \\mathrm{m/s}.
\\]

4. Subtract velocities, then divide by the time interval:

\\[
a_{\\mathrm{avg}}=\\frac{24-0}{2-0}=12\\ \\mathrm{m/s^2}.
\\]

The requested magnitude is **12 m/s²**.

**Use this method again**

For average acceleration from a position function, first obtain velocity, then evaluate it at both endpoints. Do not use a single-time acceleration unless that is what was asked.

**Check**

Velocity increases by 24 m/s over 2 s. The average rate of increase is therefore 12 m/s each second.
:::

:::mcq
id: phys-quiz-ch2-1-4-3
title: IUG Chapter 2 Quiz · 1.4.3
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.4.3](../../../books/54811-1.pdf#page=4)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [ ] a | Neither eastward nor westward
- [x] b | Westward
- [ ] c | Eastward
- [ ] d | Eastward then westward
explanation: Slowing down requires acceleration opposite the eastward velocity: westward.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.4.3](assets/lessons/physics/recommended/quiz-ch2-1-4-3.webp)
solution:
**Plan — we are going to…**

1. Draw the velocity direction.
2. Translate “slowing down” into a decreasing speed.
3. Point acceleration opposite the velocity.

**The trick**

**Slowing → acceleration opposite velocity.** Acceleration need not point along motion.

**What you need to know**

- **Velocity:** direction of motion.
- **Acceleration:** direction of velocity change.

In one-dimensional motion:

- Same direction → **speeds up**.
- Opposite directions → **slows down**.

**Step-by-step solution**

1. The car travels east, so draw a velocity arrow eastward.

2. To illustrate slowing down, imagine the eastward velocity changing from +10 m/s to +8 m/s, with east chosen positive:

\\[
\\Delta v=8-10=-2\\ \\mathrm{m/s}.
\\]

3. A negative velocity change in this convention points west. Dividing by positive elapsed time keeps that westward direction.

4. Therefore acceleration points **westward**. Choose westward.

**Use this method again**

For direction questions, draw the velocity arrow first. If speed decreases, acceleration points against it; if speed increases, acceleration points with it.

**Check**

A westward acceleration reduces an eastward velocity toward zero, which is exactly what slowing down requires.
:::

:::exam-question
id: phys-quiz-ch2-1-4-4
title: IUG Chapter 2 Quiz · 1.4.4
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.4.4](../../../books/54811-1.pdf#page=4)
question: Check the original question and its options.
answer-label: Source correction
body:
![Original IUG PHYSA1301 quiz question 1.4.4](assets/lessons/physics/recommended/quiz-ch2-1-4-4.webp)
solution:
**Plan — we are going to…**

1. Check whether a velocity direction fixes acceleration direction.
2. Check whether “negative” depends on the chosen axis.
3. Distinguish stopping for an instant from staying stopped.
4. Identify the missing condition in the source.

**The trick**

The intended statement needs **nonzero** constant acceleration. Zero is also constant, so the printed wording fails.

**What you need to know**

Constant acceleration obeys:

\\[
v(t)=v_0+at.
\\]

- **Stopped:** velocity = 0 at an instant.
- **Stays stopped:** velocity remains 0 over an interval.
- **Positive/negative:** determined by the chosen axis.

**Step-by-step solution**

1. Traveling east does not force acceleration to be east: a slowing eastward car accelerates west. So the first statement is not generally true.

2. Slowing down does not always mean negative acceleration. A westward car slowing while east is positive has positive acceleration. So the second statement is not generally true.

3. Nonzero constant acceleration can bring velocity to zero at one instant. For example, with initial velocity +2 m/s and acceleration −1 m/s²:

\\[
v(t)=2-t.
\\]

At 2 s the object is instantaneously stopped. Later its velocity becomes negative. Thus “can never stop” is false.

4. If acceleration is nonzero and remains constant, velocity changes after the stopping instant, so the object cannot **stay** stopped.

5. However, if acceleration is zero and initial velocity is zero:

\\[
v(t)=0+0t=0.
\\]

The particle stays stopped, despite having constant acceleration. Therefore the original final option needs the word **nonzero**. As printed, no statement is universally correct.

**Use this method again**

When a statement says “constant,” check the special case zero. Also separate a condition at one instant from a condition lasting over an interval.

**Check**

The zero-acceleration counterexample disproves the original universal wording. The corrected nonzero-acceleration statement agrees with the velocity equation.
:::

:::mcq
id: phys-quiz-ch2-1-4-5
title: IUG Chapter 2 Quiz · 1.4.5
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.4.5](../../../books/54811-1.pdf#page=4)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [ ] a | 0.4 m/s²
- [ ] b | 1.3 m/s²
- [ ] c | 4.9 m/s²
- [x] d | 2.5 m/s²
explanation: Starting at rest, Δx = ½at², so a = 2(20)/4² = 2.5 m/s².
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.4.5](assets/lessons/physics/recommended/quiz-ch2-1-4-5.webp)
solution:
**Plan — we are going to…**

1. Translate “initially at rest” into zero initial velocity.
2. Select the constant-acceleration displacement equation.
3. Isolate acceleration and substitute the numbers.

**The trick**

**Initially at rest → initial velocity = 0**, not acceleration = 0. The accelerating car travels farther each second.

**What you need to know**

For constant acceleration:

\\[
\\Delta x=v_0t+\\frac12at^2.
\\]

“At rest” means the initial velocity is zero.

**Step-by-step solution**

1. List the givens:

\\[
v_0=0,\\qquad \\Delta x=20\\ \\mathrm{m},\\qquad t=4\\ \\mathrm{s}.
\\]

2. Substitute zero for the initial velocity:

\\[
20=0(4)+\\frac12a(4)^2.
\\]

3. Square the time, then multiply by one half:

\\[
20=\\frac12a(16)=8a.
\\]

4. Divide both sides by 8:

\\[
a=\\frac{20}{8}=2.5\\ \\mathrm{m/s^2}.
\\]

Choose **2.5 m/s²**.

**Use this method again**

For motion starting from rest with known distance and time, use the displacement equation; multiply the distance by two and divide by time squared.

**Check**

Substitution reproduces the distance:

\\[
\\frac12(2.5)(4)^2=20\\ \\mathrm{m}.
\\]
:::

:::mcq
id: phys-quiz-ch2-1-4-6
title: IUG Chapter 2 Quiz · 1.4.6
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.4.6](../../../books/54811-1.pdf#page=4)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [ ] a | 5.0 s
- [ ] b | 8.0 s
- [x] c | 2.0 s
- [ ] d | 4.0 s
explanation: Constant acceleration gives average velocity (10 + 50)/2 = 30 m/s; t = 60/30 = 2.0 s.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.4.6](assets/lessons/physics/recommended/quiz-ch2-1-4-6.webp)
solution:
**Plan — we are going to…**

1. Use constant acceleration to find the mean velocity.
2. Relate distance to that mean velocity and time.
3. Solve for time.

**The trick**

**Constant acceleration → average velocity is the mean of endpoint velocities.** Without that condition, this shortcut may fail.

**What you need to know**

For constant acceleration with motion continuing in one direction:

\\[
v_{\\mathrm{avg}}=\\frac{v_i+v_f}{2}
\\]

\\[
\\Delta x=v_{\\mathrm{avg}}t.
\\]

**Step-by-step solution**

1. The car increases speed from 10 to 50 m/s without reversing, so use positive velocities in its forward direction.

2. Calculate the average velocity:

\\[
v_{\\mathrm{avg}}=\\frac{10+50}{2}=\\frac{60}{2}=30\\ \\mathrm{m/s}.
\\]

3. Divide the displacement by the average velocity:

\\[
t=\\frac{\\Delta x}{v_{\\mathrm{avg}}}=\\frac{60\\ \\mathrm{m}}{30\\ \\mathrm{m/s}}=2.0\\ \\mathrm{s}.
\\]

4. Choose **2.0 s**.

**Use this method again**

If constant acceleration, initial velocity, final velocity, and distance are known, try the mean-velocity relation before solving for acceleration separately.

**Check**

An average of 30 m/s for 2 s gives 60 m. The mean velocity lies between the initial 10 and final 50 m/s.
:::

:::mcq
id: phys-quiz-ch2-1-4-7
title: IUG Chapter 2 Quiz · 1.4.7
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.4.7](../../../books/54811-1.pdf#page=4)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [ ] a | 36 m
- [x] b | 54 m
- [ ] c | 12 m
- [ ] d | 24 m
explanation: Both velocity and acceleration point west: distance = 12(3) + ½(4)(3²) = 54 m.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.4.7](assets/lessons/physics/recommended/quiz-ch2-1-4-7.webp)
solution:
**Plan — we are going to…**

1. Choose west as positive.
2. Assign positive signs to both velocity and acceleration.
3. Calculate displacement with the constant-acceleration equation.
4. Identify distance because no reversal occurs.

**The trick**

Both arrows point west, so the object **speeds up westward**. West's sign depends on your chosen positive direction.

**What you need to know**

For constant acceleration:

\\[
\\Delta x=v_0t+\\frac12at^2.
\\]

If velocity keeps the same direction, distance equals displacement magnitude.

**Step-by-step solution**

1. Choose west as positive. Then:

\\[
v_0=+12\\ \\mathrm{m/s},\\qquad a=+4\\ \\mathrm{m/s^2},\\qquad t=3\\ \\mathrm{s}.
\\]

2. Substitute into the displacement equation:

\\[
\\Delta x=12(3)+\\frac12(4)(3)^2.
\\]

3. Evaluate the initial-velocity contribution:

\\[
12(3)=36\\ \\mathrm{m}.
\\]

4. Square the time and evaluate the acceleration contribution:

\\[
\\frac12(4)(9)=18\\ \\mathrm{m}.
\\]

5. Add the two contributions:

\\[
\\Delta x=36+18=54\\ \\mathrm{m}\\ \\mathrm{west}.
\\]

The object never reverses, so the traveled distance is **54 m**.

**Use this method again**

Choose a positive direction explicitly. When initial velocity and acceleration point the same way, speed increases and there is no reversal during positive elapsed time.

**Check**

The final velocity is 24 m/s west, so the mean speed is 18 m/s. Over 3 s this produces the same 54 m.
:::

:::mcq
id: phys-quiz-ch2-1-4-9
title: IUG Chapter 2 Quiz · 1.4.9
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.4.9](../../../books/54811-1.pdf#page=4)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [ ] a | 1 m/s
- [ ] b | 12.5 m/s
- [ ] c | 50 m/s
- [x] d | 25 m/s
explanation: v = v₀ + at = 0 + 5(5) = 25 m/s.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.4.9](assets/lessons/physics/recommended/quiz-ch2-1-4-9.webp)
solution:
**Plan — we are going to…**

1. Translate “starts from rest.”
2. Use the velocity–time equation.
3. Multiply acceleration by elapsed time and add initial velocity.

**The trick**

This asks for **speed after a time**, not distance. Use the velocity equation, with time to the first power.

**What you need to know**

Constant acceleration means the velocity changes by the same amount each second:

\\[
v_f=v_0+at.
\\]

Starting from rest means initial velocity is zero.

**Step-by-step solution**

1. List the values:

\\[
v_0=0,\\qquad a=5\\ \\mathrm{m/s^2},\\qquad t=5\\ \\mathrm{s}.
\\]

2. Substitute into the velocity equation:

\\[
v_f=0+(5)(5).
\\]

3. Multiply:

\\[
v_f=25\\ \\mathrm{m/s}.
\\]

4. The car moves in the acceleration direction, so the speed is **25 m/s**.

**Use this method again**

For final velocity with known initial velocity, acceleration, and time, use initial velocity plus acceleration multiplied by time.

**Check**

Acceleration adds 5 m/s every second. After 5 s, a car starting from zero has gained 25 m/s.
:::

:::mcq
id: phys-quiz-ch2-1-5-1
title: IUG Chapter 2 Quiz · 1.5.1
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.5.1](../../../books/54811-1.pdf#page=4)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [ ] a | Upward during ascent, downward during descent
- [ ] b | Downward except zero at the top
- [x] c | Downward during both ascent and descent
- [ ] d | Downward during ascent, upward during descent
explanation: Near Earth, free-fall acceleration is downward throughout the motion, including the top.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.5.1](assets/lessons/physics/recommended/quiz-ch2-1-5-1.webp)
solution:
**Plan — we are going to…**

1. Identify the force responsible for free-fall motion.
2. Keep its direction throughout ascent, the top, and descent.
3. Choose the matching acceleration statement.

**The trick**

**Free fall includes upward motion after release.** Only gravity acts; motion need not already be downward.

**What you need to know**

Near Earth’s surface, neglecting air resistance, a freely moving ball has gravitational acceleration of magnitude:

\\[
g\\approx9.8\\ \\mathrm{m/s^2}.
\\]

Gravity points downward throughout the flight.

**Step-by-step solution**

1. Once the ball is released, gravity accelerates it downward.

2. During ascent, downward acceleration reduces the upward velocity.

3. At the highest point, velocity is instantaneously zero, but gravity still acts, so acceleration remains downward.

4. During descent, downward acceleration increases the downward speed.

5. Choose **downward during both ascent and descent**.

**Use this method again**

For ideal vertical flight, draw one downward acceleration arrow and keep it unchanged throughout the motion. Draw a separate velocity arrow that can change direction.

**Check**

The ball’s motion turns from upward to downward because its acceleration stays downward through the turning point.
:::

:::mcq
id: phys-quiz-ch2-1-5-2
title: IUG Chapter 2 Quiz · 1.5.2
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.5.2](../../../books/54811-1.pdf#page=5)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [ ] a | Decreases and then increases
- [x] b | Stays constant
- [ ] c | Increases
- [ ] d | Decreases
explanation: In the near-surface, no-air-resistance model used by the quiz, acceleration remains constant at g downward.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.5.2](assets/lessons/physics/recommended/quiz-ch2-1-5-2.webp)
solution:
**Plan — we are going to…**

1. Identify the ideal free-fall model used by the question.
2. Recall its acceleration.
3. Decide whether that acceleration changes during the flight.

**The trick**

**Free fall: velocity changes; acceleration stays constant** in the near-surface, no-drag model.

**What you need to know**

For ideal free fall near Earth’s surface, neglecting air resistance, gravitational acceleration has constant magnitude about 9.8 m/s² and points downward. With upward positive:

\\[
a_y=-g.
\\]

**Step-by-step solution**

1. The quiz uses the near-surface, no-air-resistance free-fall model.

2. That model assigns the same downward acceleration at each instant, including when the object changes its direction of motion.

3. A changing velocity is consistent with constant acceleration: acceleration is the rate of velocity change.

4. Choose **stays constant**.

**Use this method again**

Keep the three quantities separate: position changes, velocity changes, but ideal gravitational acceleration remains constant over the flight.

**Check**

If upward is positive, the velocity loses about 9.8 m/s each second. The size of that change per second is constant.
:::

:::exam-question
id: phys-quiz-ch2-1-5-3
title: IUG Chapter 2 Quiz · 1.5.3
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.5.3](../../../books/54811-1.pdf#page=5)
question: Check the original question and its options.
answer-label: Source correction
body:
![Original IUG PHYSA1301 quiz question 1.5.3](assets/lessons/physics/recommended/quiz-ch2-1-5-3.webp)
solution:
**Plan — we are going to…**

1. Identify whether “velocity” means a signed quantity.
2. Check what positive direction the question specifies.
3. Compare velocity with speed and explain the missing information.

**The trick**

**Signed velocity depends on the positive direction.** The question gives neither that direction nor the initial motion.

**What you need to know**

With upward positive, ideal free-fall motion obeys:

\\[
v_y=v_{0y}-gt.
\\]

With downward positive, it obeys:

\\[
v_y=v_{0y}+gt.
\\]

Speed is the magnitude of velocity; it does not carry the directional sign.

**Step-by-step solution**

1. Choose upward as positive temporarily. Downward acceleration is negative, so the signed velocity decreases with time. It becomes less positive on ascent, zero at the top, then increasingly negative on descent.

2. Choose downward as positive instead. The same physical acceleration is positive, so the signed velocity increases with time.

3. If the question intended **speed** for an upward-thrown ball, speed decreases during ascent and increases during descent. If the ball is released from rest and falls, its speed increases from the start.

4. The source specifies neither the sign convention nor initial motion, and it says velocity rather than speed. Therefore **no single printed response is unambiguously correct**.

**Use this method again**

When an “increases/decreases” velocity statement is ambiguous, choose a sign convention explicitly and distinguish signed velocity from speed.

**Check**

Changing the coordinate direction changes the signs but not the physical motion. A correct physical explanation must remain consistent under either coordinate choice.
:::

:::mcq
id: phys-quiz-ch2-1-5-4
title: IUG Chapter 2 Quiz · 1.5.4
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.5.4](../../../books/54811-1.pdf#page=5)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [ ] a | Zero
- [ ] b | 9.8 m/s² upward
- [ ] c | 19.6 m/s² downward
- [x] d | 9.8 m/s² downward
explanation: At the top the instantaneous velocity is zero, but gravity still produces 9.8 m/s² downward acceleration.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.5.4](assets/lessons/physics/recommended/quiz-ch2-1-5-4.webp)
solution:
**Plan — we are going to…**

1. Separate velocity at the top from acceleration at the top.
2. Recall the direction and magnitude of gravity.
3. Choose the acceleration value.

**The trick**

**At the top: velocity = 0, acceleration still downward.** Zero velocity does not mean zero acceleration.

**What you need to know**

Ideal free-fall acceleration remains gravitational acceleration throughout the flight. With upward positive:

\\[
a_y=-9.8\\ \\mathrm{m/s^2}.
\\]

Acceleration is a rate of change of velocity, not the current velocity itself.

**Step-by-step solution**

1. On ascent the ball has upward velocity. At the highest point it momentarily has zero velocity.

2. Gravity still acts downward at that instant. The ball has not been supported or held in place.

3. Its acceleration therefore retains magnitude 9.8 m/s² and direction downward.

4. Choose **9.8 m/s² downward**.

**Use this method again**

At a turning point, set the relevant velocity component to zero. Keep the acceleration specified by the physical model.

**Check**

A downward acceleration at the top starts the ball’s downward motion. Zero acceleration would not explain the immediate reversal in velocity.
:::

:::mcq
id: phys-quiz-ch2-1-5-5
title: IUG Chapter 2 Quiz · 1.5.5
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.5.5](../../../books/54811-1.pdf#page=5)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [ ] a | Both downward
- [ ] b | Velocity downward and acceleration upward
- [x] c | Velocity upward and acceleration downward
- [ ] d | Both upward
explanation: While rising, velocity points upward while gravitational acceleration points downward.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.5.5](assets/lessons/physics/recommended/quiz-ch2-1-5-5.webp)
solution:
**Plan — we are going to…**

1. Read the phrase “while rising.”
2. Point the velocity arrow along the motion.
3. Point the acceleration arrow along gravity.

**The trick**

**Rising: velocity up, acceleration down.** Opposite directions make the ball slow.

**What you need to know**

- **Velocity:** points along motion.
- **Free-flight acceleration:** points down, regardless of velocity.

Assume motion near Earth with no air resistance.

**Step-by-step solution**

1. “While rising” means the ball moves upward, so velocity points upward.

2. Gravity points downward, so acceleration points downward.

3. Because the two arrows oppose each other, the upward speed decreases.

4. Choose **velocity upward and acceleration downward**.

**Use this method again**

Answer motion-direction questions with two separate arrows: one for velocity and one for acceleration. Do not assume that motion forces both arrows to match.

**Check**

The stated directions explain slowing ascent. Two upward arrows would instead describe increasing upward speed.
:::

:::mcq
id: phys-quiz-ch2-1-5-6
title: IUG Chapter 2 Quiz · 1.5.6
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.5.6](../../../books/54811-1.pdf#page=5)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [ ] a | 1.2 s
- [x] b | 1.8 s
- [ ] c | 0.6 s
- [ ] d | 2.4 s
explanation: Taking upward as positive, v₀ = +6 and v = −12 m/s: t = (−12 − 6)/(−9.8) = 1.84 s.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.5.6](assets/lessons/physics/recommended/quiz-ch2-1-5-6.webp)
solution:
**Plan — we are going to…**

1. Choose upward as positive.
2. Assign signs to the launch and landing velocities.
3. Use the velocity–time equation to solve for flight time.

**The trick**

**Landing speed is 12 m/s downward.** Its velocity needs the opposite sign from the upward launch.

**What you need to know**

For constant gravitational acceleration:

\\[
v_f=v_0+at.
\\]

With upward positive, gravitational acceleration is negative. “Speed” gives only magnitude; attach direction before using a velocity equation.

**Step-by-step solution**

1. Choose upward as positive. Then:

\\[
v_0=+6\\ \\mathrm{m/s},\\qquad v_f=-12\\ \\mathrm{m/s},\\qquad a=-9.8\\ \\mathrm{m/s^2}.
\\]

2. Substitute into the equation:

\\[
-12=6-9.8t.
\\]

3. Subtract 6 from both sides:

\\[
-18=-9.8t.
\\]

4. Divide both sides by −9.8:

\\[
t=\\frac{-18}{-9.8}=1.8367\\ldots\\ \\mathrm{s}.
\\]

5. Round to the offered precision: **1.8 s**.

**Use this method again**

For a vertical trip described by endpoint speeds, attach signs using direction first, then use the velocity–time equation. Initial and final speeds need not be equal if the endpoints have different heights.

**Check**

Time is positive. The downward final speed exceeds the upward launch speed, which is consistent with landing below the launch point; equal launch and landing heights were not stated.
:::

:::mcq
id: phys-quiz-ch2-1-5-7
title: IUG Chapter 2 Quiz · 1.5.7
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.5.7](../../../books/54811-1.pdf#page=5)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [x] a | 127.5 m
- [ ] b | 125 m
- [ ] c | 245 m
- [ ] d | 250 m
explanation: Distance downward = 1.0(5.0) + ½(9.8)(5.0²) = 127.5 m.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.5.7](assets/lessons/physics/recommended/quiz-ch2-1-5-7.webp)
solution:
**Plan — we are going to…**

1. Choose downward as positive.
2. Include both the initial downward motion and gravity’s contribution.
3. Use the displacement equation and add the two terms.

**The trick**

**Thrown downward is not dropped from rest.** Keep the 1.0 m/s initial-velocity term.

**What you need to know**

For constant acceleration:

\\[
\\Delta y=v_0t+\\frac12at^2.
\\]

With downward positive, both initial velocity and gravitational acceleration are positive. There is no reversal, so distance equals downward displacement.

**Step-by-step solution**

1. List the values in the downward-positive convention:

\\[
v_0=+1.0\\ \\mathrm{m/s},\\qquad a=+9.8\\ \\mathrm{m/s^2},\\qquad t=5.0\\ \\mathrm{s}.
\\]

2. Substitute:

\\[
\\Delta y=(1.0)(5.0)+\\frac12(9.8)(5.0)^2.
\\]

3. Calculate the initial-motion term:

\\[
(1.0)(5.0)=5.0\\ \\mathrm{m}.
\\]

4. Square the time and evaluate gravity’s contribution:

\\[
\\frac12(9.8)(25.0)=122.5\\ \\mathrm{m}.
\\]

5. Add:

\\[
\\Delta y=5.0+122.5=127.5\\ \\mathrm{m}.
\\]

Choose the offered answer **127.5 m**. This is the unrounded calculation; the quiz options retain more digits than the given measurements warrant.

**Use this method again**

Before setting initial velocity to zero, check whether the wording says “dropped from rest” or “thrown.” A throw requires its initial-velocity contribution.

**Check**

Without the initial downward speed, gravity alone gives 122.5 m. The throw adds 5.0 m, so the total must be larger.
:::

:::mcq
id: phys-quiz-ch2-1-5-8
title: IUG Chapter 2 Quiz · 1.5.8
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.5.8](../../../books/54811-1.pdf#page=5)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [ ] a | 84 m/s upward
- [ ] b | 84 m/s downward
- [ ] c | 14 m/s upward
- [x] d | 14 m/s downward
explanation: With upward positive, v = 35 − 9.8(5) = −14 m/s, or 14 m/s downward.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.5.8](assets/lessons/physics/recommended/quiz-ch2-1-5-8.webp)
solution:
**Plan — we are going to…**

1. Choose upward as positive.
2. Keep gravity negative.
3. Calculate velocity after 5 s.
4. Translate the final sign into direction.

**The trick**

**Thrown upward does not mean still rising.** Calculate velocity at 5 s; its sign gives direction.

**What you need to know**

Ideal vertical motion obeys:

\\[
v=v_0-gt
\\]

when upward is positive. A negative answer means downward motion; its magnitude is speed.

**Step-by-step solution**

1. List the signed quantities:

\\[
v_0=+35\\ \\mathrm{m/s},\\qquad a=-9.8\\ \\mathrm{m/s^2},\\qquad t=5.0\\ \\mathrm{s}.
\\]

2. Substitute into the velocity equation:

\\[
v=35+(-9.8)(5.0).
\\]

3. Multiply the acceleration by time, then add:

\\[
v=35-49=-14\\ \\mathrm{m/s}.
\\]

4. The minus sign means downward in our convention. Choose **14 m/s downward**.

**Use this method again**

Choose a sign convention, calculate the signed velocity, and interpret the sign at the end. Do not force the final velocity to keep the launch direction.

**Check**

The time to the top is about 3.57 s, so at 5.0 s the ball has already started descending. The downward result agrees.
:::

:::mcq
id: phys-quiz-ch2-1-5-9
title: IUG Chapter 2 Quiz · 1.5.9
reference: [IUG PHYSA1301 Chapter 2 Quiz · 1.5.9](../../../books/54811-1.pdf#page=5)
kicker: PHYSA1301 · university quiz
question: Choose the correct response to the original quiz question.
- [ ] a | 9.8 m
- [ ] b | 38.8 m
- [x] c | 19.4 m
- [ ] d | 4.9 m
explanation: At maximum height v = 0, so h = v₀²/(2g) = 19.5²/19.6 = 19.4 m.
hint: Use the definition or motion equation stated in the original question.
example:
![Original IUG PHYSA1301 quiz question 1.5.9](assets/lessons/physics/recommended/quiz-ch2-1-5-9.webp)
solution:
**Plan — we are going to…**

1. Use zero vertical velocity at the highest point.
2. Choose the kinematics equation that does not require time.
3. Isolate the rise in height and substitute.

**The trick**

**Maximum height → vertical velocity = 0**, while acceleration remains downward.

**What you need to know**

For constant acceleration without needing elapsed time:

\\[
v_f^2=v_0^2+2a\\Delta y.
\\]

Choose upward as positive. The rise is positive, and acceleration is negative.

**Step-by-step solution**

1. At the top, use final velocity zero. The launch speed is 19.5 m/s upward:

\\[
v_f=0,\\qquad v_0=+19.5\\ \\mathrm{m/s},\\qquad a=-9.8\\ \\mathrm{m/s^2}.
\\]

2. Let h be the height gained above the launch point. Substitute:

\\[
0=(19.5)^2+2(-9.8)h.
\\]

3. Square the launch speed and multiply the acceleration factor:

\\[
0=380.25-19.6h.
\\]

4. Add the height term to both sides and divide by 19.6:

\\[
19.6h=380.25
\\]

\\[
h=\\frac{380.25}{19.6}=19.4005\\ldots\\ \\mathrm{m}.
\\]

5. Round to three significant figures. The maximum **rise above the launch point** is **19.4 m**.

**Use this method again**

For maximum height without a given time, set final vertical velocity to zero and use the equation relating squared velocities, acceleration, and displacement.

**Check**

The height is positive. Doubling launch speed would quadruple the rise because launch speed appears squared.
:::

:::mcq
id: past-physics-2007-q1
title: Past paper · IUG PHYSA 1301 2007 final · Q1 · 2007
kicker: PAST PAPER · PHYSA 1301 Final Exam, Islamic University of Gaza (8 Jan 2007)
reference: [PHYSA 1301 Final Exam, Islamic University of Gaza (8 Jan 2007), p. 1](https://studyres.com/doc/10675286/final-exam)
question: If F=−bv, what are the SI units of the constant b?
- [x] a | kg/s
- [ ] b | N·m
- [ ] c | N/m
- [ ] d | N·m/s
explanation: Correct answer: kg/s
hint: Review the original paper and the lesson concepts before retrying.
solution:
**Plan — we are going to…**

1. Isolate b in the force equation.
2. Replace force and velocity with their SI units.
3. Expand the newton into base units and cancel.

**The trick**

**Minus sign → force opposes velocity; no effect on units.** Units of b = force units ÷ velocity units.

**What you need to know**

A newton is the SI force unit, with base-unit form:

\\[
1\\ \\mathrm{N}=1\\ \\mathrm{kg\\,m/s^2}.
\\]

Velocity is measured in meters per second. When dividing units, multiply by the reciprocal of the denominator.

**Step-by-step solution**

1. Begin with the given relation:

\\[
F=-bv.
\\]

2. Divide both sides by the velocity, with the minus sign retained in the algebra:

\\[
b=-\\frac{F}{v}.
\\]

3. The minus sign is dimensionless, so it does not alter the unit calculation:

\\[
[b]=\\frac{\\mathrm{N}}{\\mathrm{m/s}}.
\\]

4. Replace the newton with its base units:

\\[
[b]=\\frac{\\mathrm{kg\\,m/s^2}}{\\mathrm{m/s}}.
\\]

5. Multiply by the reciprocal of meters per second, then cancel meters and one factor of seconds:

\\[
[b]=\\left(\\frac{\\mathrm{kg\\,m}}{\\mathrm{s^2}}\\right)\\left(\\frac{\\mathrm{s}}{\\mathrm{m}}\\right)=\\frac{\\mathrm{kg}}{\\mathrm{s}}.
\\]

6. Choose **kg/s**.

**Use this method again**

For an unknown coefficient’s units, isolate it, replace each quantity by its SI units, expand derived units, and cancel factors.

**Check**

Multiply the obtained unit by a velocity unit:

\\[
(\\mathrm{kg/s})(\\mathrm{m/s})=\\mathrm{kg\\,m/s^2}=\\mathrm{N}.
\\]

The result is a force, as the original equation requires.
:::

:::mcq
id: past-physics-2007-q4
title: Past paper · IUG PHYSA 1301 2007 final · Q4 · 2007
kicker: PAST PAPER · PHYSA 1301 Final Exam, Islamic University of Gaza (8 Jan 2007)
reference: [PHYSA 1301 Final Exam, Islamic University of Gaza (8 Jan 2007), p. 1](https://studyres.com/doc/10675286/final-exam)
question: A particle has x(t)=12−3t² metres. What is its acceleration?
- [ ] a | 6 m/s²
- [x] b | −6 m/s²
- [ ] c | 12 m/s²
- [ ] d | −12 m/s²
explanation: Correct answer: −6 m/s²
hint: Review the original paper and the lesson concepts before retrying.
solution:
**Plan — we are going to…**

1. Differentiate position to obtain velocity.
2. Differentiate velocity to obtain acceleration.
3. Keep the negative sign and report the acceleration unit.

**The trick**

**Constant position differentiates to zero.** The negative t² coefficient gives negative acceleration; keep that sign.

**What you need to know**

For time derivatives:

\\[
v=\\frac{dx}{dt},\\qquad a=\\frac{dv}{dt}.
\\]

The derivative of a constant is zero. For a power of time, multiply by the exponent and lower the exponent by one.

**Step-by-step solution**

1. Write the given position function. The coefficients carry the units needed to make x meters when t is seconds:

\\[
x(t)=12-3t^2.
\\]

2. Differentiate once. The constant 12 gives zero, and the squared term gives coefficient −3 times exponent 2 times time:

\\[
v(t)=0-3(2)t^{2-1}=-6t.
\\]

3. Differentiate velocity once more:

\\[
a(t)=-6\\frac{dt}{dt}=-6\\ \\mathrm{m/s^2}.
\\]

4. There is no time remaining in the expression, so acceleration is constant. Choose **−6 m/s²**.

**Use this method again**

For acceleration from a position function, take two time derivatives in order. Keep coefficient signs throughout both derivatives.

**Check**

Compare with the constant-acceleration position form:

\\[
x=x_0+v_0t+\\frac12at^2.
\\]

Matching the coefficient of time squared gives:

\\[
\\frac12a=-3\\quad\\Rightarrow\\quad a=-6\\ \\mathrm{m/s^2}.
\\]

This independently confirms the derivative result.
:::`};export{e as default};