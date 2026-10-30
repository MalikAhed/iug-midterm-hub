var e={id:`calculus-1.3`,title:`Thomas Calculus §1.3 Practice`,summary:`Thomas' Calculus §1.3 · original textbook exercises and verified practice.`,subjectId:`mathematics`,reward:0,status:`published`,authoringSource:`:::mcq
id: thomas-1-3-5
title: Thomas §1.3 · Exercise 5
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 5 · PDF p. 45](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: For the five original angles in order, which row gives sin(θ)? (The full table is explained after answering.)
- [ ] a | \\(-1,-1/2,1,0,-\\sqrt2/2\\)
- [ ] b | \\(0,\\sqrt3/2,0,1,-\\sqrt2/2\\)
- [ ] c | \\(0,-\\sqrt3/2,1,0,\\sqrt2/2\\)
- [x] d | \\(0,-\\sqrt3/2,0,1,\\sqrt2/2\\)
explanation: Use angle order −π,−2π/3,0,π/2,3π/4. The complete rows are: sin=(0,−√3/2,0,1,√2/2); cos=(−1,−1/2,1,0,−√2/2); tan=(0,√3,0,UND,−1); cot=(UND,√3/3,UND,0,−1); sec=(−1,−2,1,UND,−√2); csc=(UND,−2√3/3,UND,1,√2). Take sine/cosine from the unit circle; use their quotient and reciprocals, marking every zero denominator undefined.
hint: Work through every subpart in the original question.
example:
![Thomas §1.3 · Exercise 5 · PDF p. 45](assets/recommended/math/thomas-1-3-5-question.webp)
solution:
**Plan — we are going to…**

1. Find sine and cosine at each of the five angles.
2. Use quotients and reciprocals to complete all six rows.
3. Mark every division by zero as undefined.

**The trick**

The question asks for the **whole table**. A zero sine makes cosecant and cotangent undefined; a zero cosine makes secant and tangent undefined.

**What you need to know**

Angles here are in radians. The unit-circle coordinates are cosine horizontally and sine vertically.

\\[
\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta},\\qquad\\cot\\theta=\\frac{\\cos\\theta}{\\sin\\theta}.
\\]



\\[
\\sec\\theta=\\frac1{\\cos\\theta},\\qquad\\csc\\theta=\\frac1{\\sin\\theta}.
\\]

UND means undefined, not zero.

**Step-by-step solution**

1. **Fix the column order.** Keep this same order in every row:

\\[
-\\pi,\\quad-\\frac{2\\pi}{3},\\quad0,\\quad\\frac\\pi2,\\quad\\frac{3\\pi}4.
\\]

2. **Locate the unit-circle coordinates.** At the negative half-turn, cosine is −1 and sine is zero. The negative two-thirds-turn lies in quadrant III, so both coordinates are negative. The remaining angles lie on the axes or in quadrant II.

\\[
\\sin\\theta:\\quad 0,\\ -\\frac{\\sqrt3}{2},\\ 0,\\ 1,\\ \\frac{\\sqrt2}{2}.
\\]



\\[
\\cos\\theta:\\quad -1,\\ -\\frac12,\\ 1,\\ 0,\\ -\\frac{\\sqrt2}{2}.
\\]

3. **Divide to obtain tangent.** For example, in the second column, dividing two negatives gives a positive value:

\\[
\\frac{-\\sqrt3/2}{-1/2}=\\sqrt3.
\\]



\\[
\\tan\\theta:\\quad0,\\ \\sqrt3,\\ 0,\\ \\mathrm{UND},\\ -1.
\\]

4. **Reverse the quotient to obtain cotangent.** A zero sine now makes the quotient undefined:

\\[
\\cot\\theta:\\quad\\mathrm{UND},\\ \\frac{\\sqrt3}{3},\\ \\mathrm{UND},\\ 0,\\ -1.
\\]

5. **Take the reciprocal of cosine.**

\\[
\\sec\\theta:\\quad-1,\\ -2,\\ 1,\\ \\mathrm{UND},\\ -\\sqrt2.
\\]

6. **Take the reciprocal of sine.** Rationalize the nonzero radical denominators:

\\[
\\frac1{-\\sqrt3/2}=-\\frac{2\\sqrt3}{3}.
\\]



\\[
\\csc\\theta:\\quad\\mathrm{UND},\\ -\\frac{2\\sqrt3}{3},\\ \\mathrm{UND},\\ 1,\\ \\sqrt2.
\\]

**Use this method again**

Unit-circle sine/cosine first → quotient rows → reciprocal rows → check zero denominators.

**Check**

In the second column the squared sine and cosine add to one:

\\[
\\left(-\\frac{\\sqrt3}{2}\\right)^2+\\left(-\\frac12\\right)^2=\\frac34+\\frac14=1.
\\]

The sine–cosecant product is also one:

\\[
\\left(-\\frac{\\sqrt3}{2}\\right)\\left(-\\frac{2\\sqrt3}{3}\\right)=1.
\\]

At the vertical-axis angle, cosine is zero, explaining both undefined entries in that column.
:::

:::mcq
id: thomas-1-3-7
title: Thomas §1.3 · Exercise 7
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 7 · PDF p. 45](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Given the original sine and quadrant, what are cos(x) and tan(x)?
- [ ] a | \\(\\cos x=-3/5,\\ \\tan x=-4/3\\)
- [x] b | \\(\\cos x=-4/5,\\ \\tan x=-3/4\\)
- [ ] c | \\(\\cos x=4/5,\\ \\tan x=3/4\\)
- [ ] d | \\(\\cos x=-4/5,\\ \\tan x=3/4\\)
explanation: sin x=3/5 and x is in quadrant II. From cos²x=1−9/25=16/25 choose the negative root −4/5. Dividing sine by cosine gives −3/4.
hint: Work through every subpart in the original question.
example:
![Thomas §1.3 · Exercise 7 · PDF p. 45](assets/recommended/math/thomas-1-3-7-context-1.webp)

![Thomas §1.3 · Exercise 7 · PDF p. 45](assets/recommended/math/thomas-1-3-7-question.webp)
solution:
**Plan — we are going to…**

1. Use the given sine to find cosine squared.
2. Choose cosine’s sign from quadrant II.
3. Divide sine by cosine to obtain tangent.

**The trick**

Taking a square root gives two possible signs. **Quadrant II requires negative cosine**, even though sine is positive.

**What you need to know**

On the unit circle, the squared coordinates add to one.

\\[
\\sin^2x+\\cos^2x=1.
\\]

Tangent is sine divided by cosine, provided cosine is nonzero.

\\[
\\tan x=\\frac{\\sin x}{\\cos x}.
\\]



**Step-by-step solution**

1. **Record the given value and sign information.**

\\[
\\sin x=\\frac35,\\qquad \\frac\\pi2<x<\\pi.
\\]

2. **Subtract the sine square from one.**

\\[
\\cos^2x=1-\\left(\\frac35\\right)^2=1-\\frac9{25}=\\frac{16}{25}.
\\]

3. **Select the negative square root.** The point lies left of the vertical axis:

\\[
\\cos x=-\\sqrt{\\frac{16}{25}}=-\\frac45.
\\]

4. **Form the tangent quotient.** Dividing fractions means multiplying by the reciprocal:

\\[
\\tan x=\\frac{3/5}{-4/5}=\\frac35\\left(-\\frac54\\right)=-\\frac34.
\\]

**Use this method again**

Known sine → Pythagorean identity → quadrant sign → tangent quotient.

**Check**

Both checks recover the given sine:

\\[
\\frac9{25}+\\frac{16}{25}=1.
\\]



\\[
\\left(-\\frac34\\right)\\left(-\\frac45\\right)=\\frac35.
\\]

Cosine and tangent are negative, as required in quadrant II.
:::

:::mcq
id: thomas-1-3-9
title: Thomas §1.3 · Exercise 9
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 9 · PDF p. 45](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Given the original cosine and interval, what are sin(x) and tan(x)?
- [ ] a | \\(\\sin x=2\\sqrt2/3,\\ \\tan x=2\\sqrt2\\)
- [ ] b | \\(\\sin x=-\\sqrt2/3,\\ \\tan x=-\\sqrt2\\)
- [ ] c | \\(\\sin x=-2\\sqrt2,\\ \\tan x=-2\\sqrt2/3\\)
- [x] d | \\(\\sin x=-2\\sqrt2/3,\\ \\tan x=-2\\sqrt2\\)
explanation: cos x=1/3 and −π/2≤x≤0 put x in quadrant IV, so sine is negative. sin²x=1−1/9=8/9 gives sin x=−2√2/3; dividing by 1/3 gives tan x=−2√2.
hint: Work through every subpart in the original question.
example:
![Thomas §1.3 · Exercise 9 · PDF p. 45](assets/recommended/math/thomas-1-3-9-context-1.webp)

![Thomas §1.3 · Exercise 9 · PDF p. 45](assets/recommended/math/thomas-1-3-9-question.webp)
solution:
**Plan — we are going to…**

1. Locate the angle in quadrant IV.
2. Find sine squared from the given cosine.
3. Choose the negative sine and form tangent.

**The trick**

The negative-angle interval is below the horizontal axis. **Sine is negative; cosine is positive.**

**What you need to know**

On the unit circle, the squared coordinates add to one.

\\[
\\sin^2x+\\cos^2x=1.
\\]

Tangent is sine divided by cosine, provided cosine is nonzero.

\\[
\\tan x=\\frac{\\sin x}{\\cos x}.
\\]



**Step-by-step solution**

1. **Write the given cosine and interval.**

\\[
\\cos x=\\frac13,\\qquad-\\frac\\pi2\\le x\\le0.
\\]

The given cosine excludes both endpoints, leaving quadrant IV.

2. **Find sine squared.**

\\[
\\sin^2x=1-\\frac19=\\frac89.
\\]

3. **Take the negative square root.**

\\[
\\sin x=-\\sqrt{\\frac89}=-\\frac{2\\sqrt2}{3}.
\\]

4. **Divide by cosine.**

\\[
\\tan x=\\frac{-2\\sqrt2/3}{1/3}=-2\\sqrt2.
\\]

**Use this method again**

Identify the quadrant before choosing a square-root sign.

**Check**

The identity and tangent quotient both check:

\\[
\\frac89+\\frac19=1.
\\]



\\[
(-2\\sqrt2)\\left(\\frac13\\right)=-\\frac{2\\sqrt2}{3}.
\\]

Both sine and tangent are negative in quadrant IV.
:::

:::mcq
id: thomas-1-3-11
title: Thomas §1.3 · Exercise 11
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 11 · PDF p. 45](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Given the original tangent and quadrant, what are sin(x) and cos(x)?
- [ ] a | \\(\\sin x=1/\\sqrt5,\\ \\cos x=-2/\\sqrt5\\)
- [x] b | \\(\\sin x=-1/\\sqrt5,\\ \\cos x=-2/\\sqrt5\\)
- [ ] c | \\(\\sin x=1/\\sqrt5,\\ \\cos x=2/\\sqrt5\\)
- [ ] d | \\(\\sin x=-2/\\sqrt5,\\ \\cos x=-1/\\sqrt5\\)
explanation: tan x=1/2 and π≤x≤3π/2 put x in quadrant III. A reference triangle with legs 1 and 2 has hypotenuse √5; both sine and cosine are negative, giving −1/√5 and −2/√5.
hint: Work through every subpart in the original question.
example:
![Thomas §1.3 · Exercise 11 · PDF p. 45](assets/recommended/math/thomas-1-3-11-context-1.webp)

![Thomas §1.3 · Exercise 11 · PDF p. 45](assets/recommended/math/thomas-1-3-11-question.webp)
solution:
**Plan — we are going to…**

1. Build a reference triangle from the tangent ratio.
2. Calculate its hypotenuse.
3. Give sine and cosine the signs required in quadrant III.

**The trick**

**A positive tangent does not mean positive sine and cosine.** In quadrant III, both are negative and their quotient is positive.

**What you need to know**

For a reference triangle, tangent is opposite divided by adjacent; sine is opposite divided by hypotenuse; cosine is adjacent divided by hypotenuse. The hypotenuse is a positive length.

**Step-by-step solution**

1. **Choose triangle side lengths from the given ratio.**

\\[
\\tan x=\\frac12,\\qquad\\pi\\le x\\le\\frac{3\\pi}{2}.
\\]

Use opposite length 1 and adjacent length 2. The endpoints are excluded by the given finite, nonzero tangent.

2. **Apply the Pythagorean theorem.**

\\[
h=\\sqrt{1^2+2^2}=\\sqrt5.
\\]

3. **Attach quadrant-III signs to the coordinates.**

\\[
\\sin x=-\\frac1{\\sqrt5},\\qquad\\cos x=-\\frac2{\\sqrt5}.
\\]

**Use this method again**

Tangent ratio → reference triangle → positive hypotenuse → coordinate signs.

**Check**

The ratio recovers the given tangent, and the squares add to one:

\\[
\\frac{-1/\\sqrt5}{-2/\\sqrt5}=\\frac12.
\\]



\\[
\\frac15+\\frac45=1.
\\]
:::

:::mcq
id: thomas-1-3-13
title: Thomas §1.3 · Exercise 13
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 13 · PDF p. 45](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the period of the original sine function?
- [ ] a | \\(2\\pi\\)
- [ ] b | \\(\\pi/2\\)
- [ ] c | \\(4\\pi\\)
- [x] d | \\(\\pi\\)
explanation: y=sin 2x has amplitude 1 and period 2π/2=π. A cycle passes through (0,0),(π/4,1),(π/2,0),(3π/4,−1),(π,0); repeat periodically to graph it.
hint: Work through every subpart in the original question.
example:
![Thomas §1.3 · Exercise 13 · PDF p. 45](assets/recommended/math/thomas-1-3-13-context-1.webp)

![Thomas §1.3 · Exercise 13 · PDF p. 45](assets/recommended/math/thomas-1-3-13-question.webp)
solution:
**Plan — we are going to…**

1. Read the coefficient multiplying the input.
2. Calculate the period and quarter-cycle spacing.
3. Plot one cycle and repeat it.

**The trick**

The coefficient 2 compresses the graph horizontally; it does not double its amplitude.

**What you need to know**

A period is the smallest positive input change that repeats the entire graph. Sine and cosine repeat after their argument increases by a full turn.

\\[
T=\\frac{2\\pi}{|B|}\\quad\\text{for}\\quad A\\sin(Bx+C)+D\\ \\text{or}\\ A\\cos(Bx+C)+D.
\\]



**Step-by-step solution**

1. **Identify the amplitude and input coefficient.**

\\[
y=\\sin(2x)
\\]



\\[
A_{\\text{magnitude}}=1,\\qquad B=2.
\\]

2. **Calculate the period.**

\\[
T=\\frac{2\\pi}{2}=\\pi.
\\]

3. **Use five quarter-cycle landmarks.** Read each pair as input followed by output:

\\[
(0,0),\\ (\\pi/4,1),\\ (\\pi/2,0),\\ (3\\pi/4,-1),\\ (\\pi,0).
\\]

Join them with the smooth sine or cosine curve, then repeat the cycle.

**Use this method again**

Coefficient inside → period; coefficient outside → amplitude/reflection. Use quarter-cycle points to sketch.

**Check**

Increasing the input by the proposed period adds exactly one full turn to the trigonometric argument:

\\[
\\sin(2(x+\\pi))=\\sin(2x+2\\pi)=\\sin(2x).
\\]
:::

:::mcq
id: thomas-1-3-15
title: Thomas §1.3 · Exercise 15
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 15 · PDF p. 45](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the period of the original cosine function?
- [ ] a | \\(\\pi\\)
- [x] b | 2
- [ ] c | \\(2\\pi\\)
- [ ] d | 1
explanation: y=cos(πx) has amplitude 1 and period 2π/π=2. One cycle is (0,1),(1/2,0),(1,−1),(3/2,0),(2,1).
hint: Work through every subpart in the original question.
example:
![Thomas §1.3 · Exercise 15 · PDF p. 45](assets/recommended/math/thomas-1-3-15-context-1.webp)

![Thomas §1.3 · Exercise 15 · PDF p. 45](assets/recommended/math/thomas-1-3-15-question.webp)
solution:
**Plan — we are going to…**

1. Read the coefficient multiplying the input.
2. Calculate the period and quarter-cycle spacing.
3. Plot one cycle and repeat it.

**The trick**

The input coefficient is π. Dividing the usual full-turn period by π leaves the number 2.

**What you need to know**

A period is the smallest positive input change that repeats the entire graph. Sine and cosine repeat after their argument increases by a full turn.

\\[
T=\\frac{2\\pi}{|B|}\\quad\\text{for}\\quad A\\sin(Bx+C)+D\\ \\text{or}\\ A\\cos(Bx+C)+D.
\\]



**Step-by-step solution**

1. **Identify the amplitude and input coefficient.**

\\[
y=\\cos(\\pi x)
\\]



\\[
A_{\\text{magnitude}}=1,\\qquad B=\\pi.
\\]

2. **Calculate the period.**

\\[
T=\\frac{2\\pi}{\\pi}=2.
\\]

3. **Use five quarter-cycle landmarks.** Read each pair as input followed by output:

\\[
(0,1),\\ (1/2,0),\\ (1,-1),\\ (3/2,0),\\ (2,1).
\\]

Join them with the smooth sine or cosine curve, then repeat the cycle.

**Use this method again**

Coefficient inside → period; coefficient outside → amplitude/reflection. Use quarter-cycle points to sketch.

**Check**

Increasing the input by the proposed period adds exactly one full turn to the trigonometric argument:

\\[
\\cos(\\pi(x+2))=\\cos(\\pi x+2\\pi)=\\cos(\\pi x).
\\]
:::

:::mcq
id: thomas-1-3-17
title: Thomas §1.3 · Exercise 17
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 17 · PDF p. 45](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the period of the original function?
- [ ] a | 3
- [ ] b | \\(6\\pi\\)
- [ ] c | \\(2\\pi/3\\)
- [x] d | 6
explanation: y=−sin(πx/3) has amplitude 1 and period 2π/(π/3)=6. Its reflected sine cycle is (0,0),(3/2,−1),(3,0),(9/2,1),(6,0).
hint: Work through every subpart in the original question.
example:
![Thomas §1.3 · Exercise 17 · PDF p. 45](assets/recommended/math/thomas-1-3-17-context-1.webp)

![Thomas §1.3 · Exercise 17 · PDF p. 45](assets/recommended/math/thomas-1-3-17-question.webp)
solution:
**Plan — we are going to…**

1. Read the coefficient multiplying the input.
2. Calculate the period and quarter-cycle spacing.
3. Plot one cycle and repeat it.

**The trick**

The outside minus sign reflects the graph vertically. It does not change the period.

**What you need to know**

A period is the smallest positive input change that repeats the entire graph. Sine and cosine repeat after their argument increases by a full turn.

\\[
T=\\frac{2\\pi}{|B|}\\quad\\text{for}\\quad A\\sin(Bx+C)+D\\ \\text{or}\\ A\\cos(Bx+C)+D.
\\]



**Step-by-step solution**

1. **Identify the amplitude and input coefficient.**

\\[
y=-\\sin(\\pi x/3)
\\]



\\[
A_{\\text{magnitude}}=1,\\qquad B=\\pi/3.
\\]

2. **Calculate the period.**

\\[
T=\\frac{2\\pi}{\\pi/3}=6.
\\]

3. **Use five quarter-cycle landmarks.** Read each pair as input followed by output:

\\[
(0,0),\\ (3/2,-1),\\ (3,0),\\ (9/2,1),\\ (6,0).
\\]

Join them with the smooth sine or cosine curve, then repeat the cycle.

**Use this method again**

Coefficient inside → period; coefficient outside → amplitude/reflection. Use quarter-cycle points to sketch.

**Check**

Increasing the input by the proposed period adds exactly one full turn to the trigonometric argument:

\\[
-\\sin(\\pi(x+6)/3)=-\\sin(\\pi x/3+2\\pi)=-\\sin(\\pi x/3).
\\]
:::

:::mcq
id: thomas-1-3-19
title: Thomas §1.3 · Exercise 19
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 19 · PDF p. 45](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which graph and period match the original function?
- [ ] a | \\(y=\\cos x\\), period \\(\\pi/2\\)
- [x] b | \\(y=\\sin x\\), period \\(2\\pi\\)
- [ ] c | \\(y=-\\sin x\\), period \\(2\\pi\\)
- [ ] d | \\(y=\\sin x\\), period \\(\\pi\\)
explanation: cos(x−π/2)=sin x. The graph is the unit-amplitude sine wave, passing upward through the origin, with period 2π. Equivalently shift cos x right by π/2.
hint: Work through every subpart in the original question.
example:
![Thomas §1.3 · Exercise 19 · PDF p. 45](assets/recommended/math/thomas-1-3-19-context-1.webp)

![Thomas §1.3 · Exercise 19 · PDF p. 45](assets/recommended/math/thomas-1-3-19-question.webp)
solution:
**Plan — we are going to…**

1. Expand the shifted cosine using the subtraction formula.
2. Recognize the resulting sine curve.
3. Use its standard landmarks and period.

**The trick**

A cosine shifted right by a quarter-turn becomes positive sine, not negative sine.

**What you need to know**

Use the angle addition or subtraction formula before substituting special-angle values.

\\[
\\cos(A-B)=\\cos A\\cos B+\\sin A\\sin B.
\\]



**Step-by-step solution**

1. **Expand before simplifying.**

\\[
y=\\cos(x-\\pi/2)=\\cos x\\cos(\\pi/2)+\\sin x\\sin(\\pi/2).
\\]

2. **Insert the special-angle values.**

\\[
y=\\cos x(0)+\\sin x(1)=\\sin x.
\\]

3. **Sketch the unit sine curve.** It passes upward through the origin. A cycle is:

\\[
(0,0),\\ (\\pi/2,1),\\ (\\pi,0),\\ (3\\pi/2,-1),\\ (2\\pi,0).
\\]



\\[
T=2\\pi.
\\]

**Use this method again**

Quarter-turn shifts can often be simplified with an addition formula before graphing.

**Check**

At the first maximum, both descriptions give one:

\\[
\\cos(\\pi/2-\\pi/2)=\\cos0=1=\\sin(\\pi/2).
\\]

The argument coefficient is one, so the period remains a full turn.
:::

:::mcq
id: thomas-1-3-21
title: Thomas §1.3 · Exercise 21
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 21 · PDF p. 46](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which description gives the original shifted sine graph and period?
- [ ] a | Shift left \\(\\pi/4\\), up 1; period \\(2\\pi\\)
- [ ] b | Shift right \\(\\pi/4\\), down 1; period \\(2\\pi\\)
- [ ] c | Shift right \\(\\pi/4\\), up 1; period \\(\\pi\\)
- [x] d | Shift right \\(\\pi/4\\), up 1; period \\(2\\pi\\)
explanation: y=sin(x−π/4)+1 shifts the usual sine curve right by π/4 and upward by 1. Its midline is y=1, range [0,2], amplitude 1 and period 2π. It crosses its midline upward at x=π/4, reaches a maximum at 3π/4 and a minimum at 7π/4.
hint: Work through every subpart in the original question.
example:
![Thomas §1.3 · Exercise 21 · PDF p. 45](assets/recommended/math/thomas-1-3-21-context-1.webp)

![Thomas §1.3 · Exercise 21 · PDF p. 46](assets/recommended/math/thomas-1-3-21-question.webp)
solution:
**Plan — we are going to…**

1. Read the horizontal and vertical shifts.
2. Find the unchanged amplitude and period.
3. Shift the five sine landmarks to sketch a cycle.

**The trick**

**Subtracting inside shifts right; adding outside shifts up.** Neither operation changes the period.

**What you need to know**

In a shifted sine expression, h moves the curve right and D moves it vertically:

\\[
y=\\sin(x-h)+D.
\\]

A period is the smallest positive input change that repeats the entire graph. Sine and cosine repeat after their argument increases by a full turn.

\\[
T=\\frac{2\\pi}{|B|}\\quad\\text{for}\\quad A\\sin(Bx+C)+D\\ \\text{or}\\ A\\cos(Bx+C)+D.
\\]



**Step-by-step solution**

1. **Identify the shifts.**

\\[
y=\\sin(x-\\pi/4)+1,\\qquad h=\\frac\\pi4,\\quad D=1.
\\]

The graph shifts right by a quarter of π and up by one.

2. **Record amplitude, period, midline and range.**

\\[
A=1,\\quad T=2\\pi,\\quad\\text{midline }y=1,\\quad0\\le y\\le2.
\\]

3. **Shift each standard sine point.** Add the horizontal shift to the input and one to the output:

\\[
(\\pi/4,1),\\ (3\\pi/4,2),\\ (5\\pi/4,1),\\ (7\\pi/4,0),\\ (9\\pi/4,1).
\\]

Draw a smooth cycle through these landmarks and repeat it.

**Use this method again**

Write the input as x minus a shift → move the standard graph → move its midline.

**Check**

Evaluate the maximum and minimum directly:

\\[
\\sin(3\\pi/4-\\pi/4)+1=\\sin(\\pi/2)+1=2.
\\]



\\[
\\sin(7\\pi/4-\\pi/4)+1=\\sin(3\\pi/2)+1=0.
\\]
:::

:::mcq
id: thomas-1-3-23
title: Thomas §1.3 · Exercise 23
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 23 · PDF p. 46](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What are the period and origin/y-axis symmetry of the original cotangent graph?
- [ ] a | Period \\(2\\pi\\); vertical-axis symmetry (even)
- [x] b | Period \\(\\pi/2\\); origin symmetry (odd)
- [ ] c | Period \\(\\pi\\); origin symmetry (odd)
- [ ] d | Period \\(\\pi/2\\); vertical-axis symmetry (even)
explanation: s=cot(2t) repeats when 2t advances π, so the period is π/2. It is odd: cot(−2t)=−cot(2t). Vertical asymptotes are t=kπ/2; zeros are t=π/4+kπ/2. Each branch decreases from +∞ to −∞. Repetition also gives point symmetry about every zero and reflection-related branches about asymptotes.
hint: Work through every subpart in the original question.
example:
![Thomas §1.3 · Exercise 23 · PDF p. 46](assets/recommended/math/thomas-1-3-23-context-1.webp)

![Thomas §1.3 · Exercise 23 · PDF p. 46](assets/recommended/math/thomas-1-3-23-question.webp)
solution:
**Plan — we are going to…**

1. Find cotangent’s period after the input is doubled.
2. Locate asymptotes and zeros for the sketch.
3. Test reflection through the origin.

**The trick**

Cotangent’s basic period is **π, not 2π**. Its denominator is sine, so sine zeros become vertical asymptotes.

**What you need to know**

Cotangent is cosine divided by sine. It repeats after a half-turn and is odd:

\\[
\\cot u=\\frac{\\cos u}{\\sin u},\\qquad\\cot(u+\\pi)=\\cot u.
\\]



\\[
\\cot(-u)=-\\cot u.
\\]



**Step-by-step solution**

1. **Find the period.** The argument must increase by a half-turn:

\\[
2T=\\pi\\quad\\Longrightarrow\\quad T=\\frac\\pi2.
\\]

2. **Locate all vertical asymptotes.** Sine is zero at integer multiples of a half-turn:

\\[
\\sin(2t)=0\\quad\\Longrightarrow\\quad t=\\frac{k\\pi}{2},\\quad k\\in\\mathbb Z.
\\]

3. **Locate the zeros.** Cosine is zero while sine remains nonzero:

\\[
2t=\\frac\\pi2+k\\pi\\quad\\Longrightarrow\\quad t=\\frac\\pi4+\\frac{k\\pi}{2}.
\\]

4. **Sketch a branch between neighboring asymptotes.** Between zero and the period, it decreases from positive infinity, passes through its zero, and falls to negative infinity. Useful points are:

\\[
(\\pi/8,1),\\quad(\\pi/4,0),\\quad(3\\pi/8,-1).
\\]

5. **Test symmetry.**

\\[
s(-t)=\\cot(-2t)=-\\cot(2t)=-s(t).
\\]

Thus the graph has **origin symmetry**. Repetition gives point symmetry about every zero and reflection-related branches on opposite sides of each asymptote.

**Use this method again**

For cotangent, divide π by the input coefficient, find sine zeros, then test oddness.

**Check**

Adding the period adds π to the argument:

\\[
\\cot\\bigl(2(t+\\pi/2)\\bigr)=\\cot(2t+\\pi)=\\cot(2t).
\\]

The plotted first and third landmarks have opposite signs, matching origin symmetry.
:::

:::mcq
id: thomas-1-3-25
title: Thomas §1.3 · Exercise 25
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 25 · PDF p. 46](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What are the period and symmetry of the original secant graph?
- [ ] a | Period 2; vertical s-axis symmetry (even)
- [ ] b | Period 4; origin symmetry (odd)
- [ ] c | Period \\(4\\pi\\); no symmetry
- [x] d | Period 4; vertical s-axis symmetry (even)
explanation: s=sec(πt/2)=1/cos(πt/2) has period 4 and is even. Its vertical asymptotes are t=1+2k. At t=2k it equals (−1)^k, giving alternating upward/downward branches with range (−∞,−1]∪[1,∞). The graph also has reflection axes t=2k and point symmetry about (1+2k,0).
hint: Work through every subpart in the original question.
example:
![Thomas §1.3 · Exercise 25 · PDF p. 46](assets/recommended/math/thomas-1-3-25-context-1.webp)

![Thomas §1.3 · Exercise 25 · PDF p. 46](assets/recommended/math/thomas-1-3-25-question.webp)
solution:
**Plan — we are going to…**

1. Write secant as a reciprocal of cosine.
2. Calculate its period, asymptotes and vertices.
3. Test whether the graph is even.

**The trick**

**Reciprocating cosine keeps its period**, but its zeros become secant’s vertical asymptotes.

**What you need to know**

Secant is defined only where cosine is nonzero. It is even because cosine is even:

\\[
\\sec u=\\frac1{\\cos u},\\qquad\\sec(-u)=\\sec u.
\\]



**Step-by-step solution**

1. **Read the argument coefficient and find the period.**

\\[
s(t)=\\sec(\\pi t/2),\\qquad T=\\frac{2\\pi}{\\pi/2}=4.
\\]

2. **Find the forbidden inputs.**

\\[
\\frac{\\pi t}{2}=\\frac\\pi2+k\\pi\\quad\\Longrightarrow\\quad t=1+2k,\\quad k\\in\\mathbb Z.
\\]

Draw a vertical asymptote at each of these inputs.

3. **Find the branch vertices.** At even integers cosine equals positive or negative one:

\\[
t=2k\\quad\\Longrightarrow\\quad s(t)=\\sec(k\\pi)=(-1)^k.
\\]

An upward branch has vertex at zero with height one. The next downward branch has vertex at two with height negative one. Repeat every four input units.

4. **Find the range and symmetry.** The reciprocal of a cosine cannot lie strictly between negative one and one:

\\[
\\text{Range}=(-\\infty,-1]\\cup[1,\\infty).
\\]



\\[
s(-t)=\\sec(-\\pi t/2)=\\sec(\\pi t/2)=s(t).
\\]

The graph is **even**, symmetric about the vertical s-axis. Repetition gives reflection axes at even integers and point symmetry about the asymptote intersections with the horizontal axis.

**Use this method again**

Sketch cosine first → take reciprocal values → turn cosine zeros into asymptotes → retain period/evenness.

**Check**

At input one, cosine is zero and secant is undefined; at input four the value repeats the value at zero:

\\[
\\cos(\\pi/2)=0,\\qquad s(4)=\\sec(2\\pi)=1=s(0).
\\]
:::

:::mcq
id: thomas-1-3-31
title: Thomas §1.3 · Exercise 31
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 31 · PDF p. 46](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which expression results from the requested addition-formula derivation?
- [ ] a | \\(-\\cos x\\)
- [x] b | \\(\\sin x\\)
- [ ] c | \\(-\\sin x\\)
- [ ] d | \\(\\cos x\\)
explanation: Apply cos(A−B)=cos A cos B+sin A sin B with B=π/2. Then cos(x−π/2)=cos x·0+sin x·1=sin x, proving the printed identity.
hint: Work through every subpart in the original question.
example:
![Thomas §1.3 · Exercise 31 · PDF p. 46](assets/recommended/math/thomas-1-3-31-context-1.webp)

![Thomas §1.3 · Exercise 31 · PDF p. 46](assets/recommended/math/thomas-1-3-31-question.webp)
solution:
**Plan — we are going to…**

1. Expand the cosine difference.
2. Insert the quarter-turn sine and cosine.
3. Simplify to the requested identity.

**The trick**

Use the plus sign in the cosine-difference formula; changing it to minus would produce the wrong sign.

**What you need to know**

Use the angle addition or subtraction formula before substituting special-angle values.

\\[
\\cos(A-B)=\\cos A\\cos B+\\sin A\\sin B.
\\]



**Step-by-step solution**

1. **Choose the two angles.**

\\[
A=x,\\qquad B=\\frac\\pi2.
\\]

2. **Expand the difference.**

\\[
\\cos(x-\\pi/2)=\\cos x\\cos(\\pi/2)+\\sin x\\sin(\\pi/2).
\\]

3. **Use cosine zero and sine one at the quarter-turn.**

\\[
\\cos(x-\\pi/2)=\\cos x(0)+\\sin x(1)=\\sin x.
\\]

**Use this method again**

Identify sum or difference → expand with the matching rule → insert exact fixed-angle values → simplify signs.

**Check**

The derivation proves the identity for every real angle. A special-angle test also detects a sign error:

\\[
x=0:\\quad\\cos(-\\pi/2)=0=\\sin0.
\\]
:::

:::mcq
id: thomas-1-3-33
title: Thomas §1.3 · Exercise 33
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 33 · PDF p. 46](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which expression results from the requested addition-formula derivation?
- [ ] a | \\(-\\cos x\\)
- [ ] b | \\(\\sin x\\)
- [ ] c | \\(-\\sin x\\)
- [x] d | \\(\\cos x\\)
explanation: sin(x+π/2)=sin x cos(π/2)+cos x sin(π/2)=sin x·0+cos x·1=cos x.
hint: Work through every subpart in the original question.
example:
![Thomas §1.3 · Exercise 33 · PDF p. 46](assets/recommended/math/thomas-1-3-33-context-1.webp)

![Thomas §1.3 · Exercise 33 · PDF p. 46](assets/recommended/math/thomas-1-3-33-question.webp)
solution:
**Plan — we are going to…**

1. Expand the sine sum.
2. Insert the quarter-turn values.
3. Simplify to cosine.

**The trick**

The sine-sum formula has a plus sign. The term containing cosine of the quarter-turn vanishes.

**What you need to know**

Use the angle addition or subtraction formula before substituting special-angle values.

\\[
\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B.
\\]



**Step-by-step solution**

1. **Choose the angles.**

\\[
A=x,\\qquad B=\\frac\\pi2.
\\]

2. **Expand the sum.**

\\[
\\sin(x+\\pi/2)=\\sin x\\cos(\\pi/2)+\\cos x\\sin(\\pi/2).
\\]

3. **Evaluate the fixed-angle factors.**

\\[
\\sin(x+\\pi/2)=\\sin x(0)+\\cos x(1)=\\cos x.
\\]

**Use this method again**

Identify sum or difference → expand with the matching rule → insert exact fixed-angle values → simplify signs.

**Check**

The derivation proves the identity for every real angle. A special-angle test also detects a sign error:

\\[
x=0:\\quad\\sin(\\pi/2)=1=\\cos0.
\\]
:::

:::mcq
id: thomas-1-3-35
title: Thomas §1.3 · Exercise 35
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 35 · PDF p. 46](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which expansion proves the original cosine-difference identity?
- [ ] a | \\(\\sin A\\cos B+\\cos A\\sin B\\)
- [x] b | \\(\\cos A\\cos B+\\sin A\\sin B\\)
- [ ] c | \\(\\cos A\\cos B-\\sin A\\sin B\\)
- [ ] d | \\(\\sin A\\cos B-\\cos A\\sin B\\)
explanation: Use the cosine-sum formula on A+(−B): cos(A−B)=cos A cos(−B)−sin A sin(−B). Since cosine is even and sine is odd, this becomes cos A cos B+sin A sin B.
hint: Work through every subpart in the original question.
example:
![Thomas §1.3 · Exercise 35 · PDF p. 46](assets/recommended/math/thomas-1-3-35-context-1.webp)

![Thomas §1.3 · Exercise 35 · PDF p. 46](assets/recommended/math/thomas-1-3-35-question.webp)
solution:
**Plan — we are going to…**

1. Rewrite subtraction as addition of a negative angle.
2. Apply the cosine-sum formula.
3. Use even cosine and odd sine to simplify.

**The trick**

The minus sign from sine of a negative angle cancels the minus sign in the cosine-sum formula.

**What you need to know**

Use the angle addition or subtraction formula before substituting special-angle values.

\\[
\\cos(A+C)=\\cos A\\cos C-\\sin A\\sin C.
\\]



**Step-by-step solution**

1. **Replace the second angle by its negative.**

\\[
\\cos(A-B)=\\cos(A+(-B)).
\\]

2. **Expand with the cosine-sum rule.**

\\[
\\cos(A-B)=\\cos A\\cos(-B)-\\sin A\\sin(-B).
\\]

3. **Use the parity identities.**

\\[
\\cos(-B)=\\cos B,\\qquad\\sin(-B)=-\\sin B.
\\]

4. **Simplify the two minus signs.**

\\[
\\cos(A-B)=\\cos A\\cos B+\\sin A\\sin B.
\\]

**Use this method again**

Identify sum or difference → expand with the matching rule → insert exact fixed-angle values → simplify signs.

**Check**

The derivation proves the identity for every real angle. A special-angle test also detects a sign error:

\\[
A=B=\\frac\\pi4:\\quad\\cos0=1=\\frac12+\\frac12.
\\]
:::

:::mcq
id: thomas-1-3-37
title: Thomas §1.3 · Exercise 37
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 37 · PDF p. 46](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What identity results from setting B=A in the original formula?
- [ ] a | \\(0=\\cos^2A-\\sin^2A\\)
- [ ] b | \\(1=2\\sin A\\cos A\\)
- [ ] c | \\(0=\\cos A+\\sin A\\)
- [x] d | \\(1=\\cos^2A+\\sin^2A\\)
explanation: With B=A, the left side is cos 0=1 and the right is cos²A+sin²A. This agrees with the familiar Pythagorean identity from the unit circle.
hint: Work through every subpart in the original question.
example:
![Thomas §1.3 · Exercise 37 · PDF p. 46](assets/recommended/math/thomas-1-3-37-question.webp)
solution:
**Plan — we are going to…**

1. Set both angles equal in the cosine-difference identity.
2. Evaluate cosine of zero.
3. Recognize the Pythagorean identity.

**The trick**

Setting the two angles equal makes their difference zero; it does not turn both cosine factors into zero.

**What you need to know**

Use the angle addition or subtraction formula before substituting special-angle values.

\\[
\\cos(A-B)=\\cos A\\cos B+\\sin A\\sin B.
\\]



**Step-by-step solution**

1. **Set the second angle equal to the first.**

\\[
B=A.
\\]

2. **Substitute on both sides.**

\\[
\\cos(A-A)=\\cos A\\cos A+\\sin A\\sin A.
\\]

3. **Evaluate and combine repeated factors.**

\\[
1=\\cos^2A+\\sin^2A.
\\]

**Use this method again**

Identify sum or difference → expand with the matching rule → insert exact fixed-angle values → simplify signs.

**Check**

The derivation proves the identity for every real angle. A special-angle test also detects a sign error:

\\[
A=0:\\quad1=1^2+0^2.
\\]
:::

:::mcq
id: thomas-1-3-39
title: Thomas §1.3 · Exercise 39
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 39 · PDF p. 46](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Express the original quantity in terms of sin(x) and cos(x).
- [ ] a | \\(-\\sin x\\)
- [x] b | \\(-\\cos x\\)
- [ ] c | \\(\\cos x\\)
- [ ] d | \\(\\sin x\\)
explanation: cos(π+x)=cosπ cosx−sinπ sinx=(−1)cosx−0=−cosx.
hint: Work through every subpart in the original question.
example:
![Thomas §1.3 · Exercise 39 · PDF p. 46](assets/recommended/math/thomas-1-3-39-context-1.webp)

![Thomas §1.3 · Exercise 39 · PDF p. 46](assets/recommended/math/thomas-1-3-39-question.webp)
solution:
**Plan — we are going to…**

1. Expand the cosine of a sum.
2. Evaluate sine and cosine of the half-turn.
3. Simplify the remaining term.

**The trick**

Adding a half-turn reverses the cosine sign; it does not change cosine into sine.

**What you need to know**

Use the angle addition or subtraction formula before substituting special-angle values.

\\[
\\cos(A+B)=\\cos A\\cos B-\\sin A\\sin B.
\\]



**Step-by-step solution**

1. **Choose the fixed and variable angles.**

\\[
A=\\pi,\\qquad B=x.
\\]

2. **Expand the original quantity.**

\\[
\\cos(\\pi+x)=\\cos\\pi\\cos x-\\sin\\pi\\sin x.
\\]

3. **Use the half-turn values.**

\\[
\\cos(\\pi+x)=(-1)\\cos x-0\\sin x=-\\cos x.
\\]

**Use this method again**

Identify sum or difference → expand with the matching rule → insert exact fixed-angle values → simplify signs.

**Check**

The derivation proves the identity for every real angle. A special-angle test also detects a sign error:

\\[
x=0:\\quad\\cos\\pi=-1=-\\cos0.
\\]
:::

:::mcq
id: thomas-1-3-41
title: Thomas §1.3 · Exercise 41
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 41 · PDF p. 46](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Express the original quantity in terms of sin(x) and cos(x).
- [ ] a | \\(\\cos x\\)
- [ ] b | \\(\\sin x\\)
- [ ] c | \\(-\\sin x\\)
- [x] d | \\(-\\cos x\\)
explanation: sin(3π/2−x)=sin(3π/2)cosx−cos(3π/2)sinx=−cosx.
hint: Work through every subpart in the original question.
example:
![Thomas §1.3 · Exercise 41 · PDF p. 46](assets/recommended/math/thomas-1-3-41-context-1.webp)

![Thomas §1.3 · Exercise 41 · PDF p. 46](assets/recommended/math/thomas-1-3-41-question.webp)
solution:
**Plan — we are going to…**

1. Use the sine-difference formula.
2. Evaluate the three-quarter-turn constants.
3. Keep the negative sine value attached to cosine.

**The trick**

Sine of the three-quarter-turn is −1. Keeping that sign is the whole decision in this simplification.

**What you need to know**

Use the angle addition or subtraction formula before substituting special-angle values.

\\[
\\sin(A-B)=\\sin A\\cos B-\\cos A\\sin B.
\\]



**Step-by-step solution**

1. **Expand the given difference.**

\\[
\\sin(3\\pi/2-x)=\\sin(3\\pi/2)\\cos x-\\cos(3\\pi/2)\\sin x.
\\]

2. **Evaluate the fixed-angle values.**

\\[
\\sin(3\\pi/2)=-1,\\qquad\\cos(3\\pi/2)=0.
\\]

3. **Simplify.**

\\[
\\sin(3\\pi/2-x)=-\\cos x-0\\sin x=-\\cos x.
\\]

**Use this method again**

Identify sum or difference → expand with the matching rule → insert exact fixed-angle values → simplify signs.

**Check**

The derivation proves the identity for every real angle. A special-angle test also detects a sign error:

\\[
x=\\pi:\\quad\\sin(\\pi/2)=1=-\\cos\\pi.
\\]
:::

:::mcq
id: thomas-1-3-43
title: Thomas §1.3 · Exercise 43
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 43 · PDF p. 46](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the exact value requested in the original exercise?
- [ ] a | \\(\\sqrt3/2\\)
- [x] b | \\((\\sqrt6+\\sqrt2)/4\\)
- [ ] c | \\((\\sqrt6-\\sqrt2)/4\\)
- [ ] d | \\(-(\\sqrt6+\\sqrt2)/4\\)
explanation: sin(7π/12)=sin(π/4+π/3)=sin(π/4)cos(π/3)+cos(π/4)sin(π/3)=(√2/2)(1/2)+(√2/2)(√3/2)=(√2+√6)/4.
hint: Work through every subpart in the original question.
example:
![Thomas §1.3 · Exercise 43 · PDF p. 46](assets/recommended/math/thomas-1-3-43-question.webp)
solution:
**Plan — we are going to…**

1. Split the angle into two familiar special angles.
2. Use the sine-sum formula.
3. Multiply the exact values and combine the fractions.

**The trick**

The angle is not a standard table angle, but it is the sum of a quarter-turn and a third-turn. **Do not add their sine values.**

**What you need to know**

Use the angle addition or subtraction formula before substituting special-angle values.

\\[
\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B.
\\]



**Step-by-step solution**

1. **Split the angle.**

\\[
\\frac{7\\pi}{12}=\\frac\\pi4+\\frac\\pi3.
\\]

2. **Expand sine of the sum.**

\\[
\\sin(7\\pi/12)=\\sin(\\pi/4)\\cos(\\pi/3)+\\cos(\\pi/4)\\sin(\\pi/3).
\\]

3. **Insert the exact special-angle values.**

\\[
\\sin(7\\pi/12)=\\frac{\\sqrt2}{2}\\frac12+\\frac{\\sqrt2}{2}\\frac{\\sqrt3}{2}.
\\]

4. **Combine over the common denominator.**

\\[
\\sin(7\\pi/12)=\\frac{\\sqrt2}{4}+\\frac{\\sqrt6}{4}=\\frac{\\sqrt6+\\sqrt2}{4}.
\\]

**Use this method again**

Unfamiliar angle → sum/difference of familiar angles → addition formula → exact arithmetic.

**Check**

The angle is 105°, in quadrant II, so sine must be positive and close to one. Both exact and numerical evaluations give approximately 0.9659:

\\[
\\frac{\\sqrt6+\\sqrt2}{4}\\approx0.9659=\\sin(105^\\circ).
\\]
:::

:::mcq
id: thomas-1-3-45
title: Thomas §1.3 · Exercise 45
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 45 · PDF p. 46](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the exact value requested in the original exercise?
- [ ] a | \\((\\sqrt6-\\sqrt2)/4\\)
- [ ] b | \\(\\sqrt2/2\\)
- [ ] c | \\(\\sqrt3/2\\)
- [x] d | \\((\\sqrt6+\\sqrt2)/4\\)
explanation: cos(π/12)=cos(π/4−π/6)=cos(π/4)cos(π/6)+sin(π/4)sin(π/6)=(√6+√2)/4.
hint: Work through every subpart in the original question.
example:
![Thomas §1.3 · Exercise 45 · PDF p. 46](assets/recommended/math/thomas-1-3-45-question.webp)
solution:
**Plan — we are going to…**

1. Write the small angle as a difference of special angles.
2. Expand using the cosine-difference identity.
3. Evaluate exactly.

**The trick**

The cosine-difference identity has a **plus** between its two products. Subtracting them would give the wrong exact value.

**What you need to know**

Use the angle addition or subtraction formula before substituting special-angle values.

\\[
\\cos(A-B)=\\cos A\\cos B+\\sin A\\sin B.
\\]



**Step-by-step solution**

1. **Split the angle.**

\\[
\\frac\\pi{12}=\\frac\\pi4-\\frac\\pi6.
\\]

2. **Expand the difference.**

\\[
\\cos(\\pi/12)=\\cos(\\pi/4)\\cos(\\pi/6)+\\sin(\\pi/4)\\sin(\\pi/6).
\\]

3. **Substitute exact values.**

\\[
\\cos(\\pi/12)=\\frac{\\sqrt2}{2}\\frac{\\sqrt3}{2}+\\frac{\\sqrt2}{2}\\frac12.
\\]

4. **Combine the products.**

\\[
\\cos(\\pi/12)=\\frac{\\sqrt6+\\sqrt2}{4}.
\\]

**Use this method again**

Break the angle into standard pieces, then apply the correct signed addition formula.

**Check**

Cosine of 15° equals sine of 75°, whose sine-sum calculation gives the same result:

\\[
\\sin(\\pi/4+\\pi/6)=\\frac{\\sqrt6+\\sqrt2}{4}=\\cos(\\pi/12).
\\]
:::

:::mcq
id: thomas-1-3-47
title: Thomas §1.3 · Exercise 47
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 47 · PDF p. 46](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the exact squared-cosine value requested?
- [ ] a | \\((2+\\sqrt3)/4\\)
- [x] b | \\((2+\\sqrt2)/4\\)
- [ ] c | \\((2-\\sqrt2)/4\\)
- [ ] d | \\(\\sqrt2/2\\)
explanation: Use cos²u=(1+cos2u)/2 with u=π/8. This gives [1+cos(π/4)]/2=(2+√2)/4.
hint: Work through every subpart in the original question.
example:
![Thomas §1.3 · Exercise 47 · PDF p. 46](assets/recommended/math/thomas-1-3-47-context-1.webp)

![Thomas §1.3 · Exercise 47 · PDF p. 46](assets/recommended/math/thomas-1-3-47-question.webp)
solution:
**Plan — we are going to…**

1. Use the matching squared-trigonometric identity.
2. Double the given angle.
3. Insert the exact cosine and simplify the fraction.

**The trick**

The requested quantity is already squared. Use the power-reduction identity directly; do not take another square root.

**What you need to know**

The power-reduction formula replaces a square by cosine of the doubled angle:

\\[
\\cos^2u=\\frac{1+\\cos(2u)}2.
\\]



**Step-by-step solution**

1. **Choose the angle in the identity.**

\\[
u=\\pi/8,\\qquad2u=\\pi/4.
\\]

2. **Apply the formula to the requested quantity.**

\\[
\\cos^2(\\pi/8)=\\frac{1+\\cos(\\pi/4)}2.
\\]

3. **Insert the known cosine and put the numerator over denominator two.**

\\[
\\cos^2(\\pi/8)=\\frac{1+\\frac{\\sqrt2}{2}}2=\\frac{2+\\sqrt2}{4}.
\\]

**Use this method again**

Squared sine/cosine → power reduction → evaluate cosine at twice the angle → simplify.

**Check**

A numerical check of the squared expression, rather than the unsquared function, gives:

\\[
\\cos^2(22.5^\\circ)\\approx0.853553.
\\]



\\[
\\frac{2+\\sqrt2}{4}\\approx0.853553.
\\]
:::

:::mcq
id: thomas-1-3-49
title: Thomas §1.3 · Exercise 49
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 49 · PDF p. 46](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the exact squared-sine value requested?
- [ ] a | \\((2+\\sqrt3)/4\\)
- [ ] b | \\((2-\\sqrt2)/4\\)
- [ ] c | \\((\\sqrt6-\\sqrt2)/4\\)
- [x] d | \\((2-\\sqrt3)/4\\)
explanation: Use sin²u=(1−cos2u)/2 with u=π/12. This gives [1−cos(π/6)]/2=(2−√3)/4. The last alternative is sin(π/12), not its square.
hint: Work through every subpart in the original question.
example:
![Thomas §1.3 · Exercise 49 · PDF p. 46](assets/recommended/math/thomas-1-3-49-context-1.webp)

![Thomas §1.3 · Exercise 49 · PDF p. 46](assets/recommended/math/thomas-1-3-49-question.webp)
solution:
**Plan — we are going to…**

1. Use the matching squared-trigonometric identity.
2. Double the given angle.
3. Insert the exact cosine and simplify the fraction.

**The trick**

The question asks for sine squared, not sine. The squared answer is smaller than sine itself for this acute angle.

**What you need to know**

The power-reduction formula replaces a square by cosine of the doubled angle:

\\[
\\sin^2u=\\frac{1-\\cos(2u)}2.
\\]



**Step-by-step solution**

1. **Choose the angle in the identity.**

\\[
u=\\pi/12,\\qquad2u=\\pi/6.
\\]

2. **Apply the formula to the requested quantity.**

\\[
\\sin^2(\\pi/12)=\\frac{1-\\cos(\\pi/6)}2.
\\]

3. **Insert the known cosine and put the numerator over denominator two.**

\\[
\\sin^2(\\pi/12)=\\frac{1-\\frac{\\sqrt3}{2}}2=\\frac{2-\\sqrt3}{4}.
\\]

**Use this method again**

Squared sine/cosine → power reduction → evaluate cosine at twice the angle → simplify.

**Check**

A numerical check of the squared expression, rather than the unsquared function, gives:

\\[
\\sin^2(15^\\circ)\\approx0.0669873.
\\]



\\[
\\frac{2-\\sqrt3}{4}\\approx0.0669873.
\\]
:::

:::mcq
id: thomas-1-3-51
title: Thomas §1.3 · Exercise 51
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 51 · PDF p. 46](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which list contains all solutions in the original interval 0≤θ≤2π?
- [ ] a | \\(0,\\pi,2\\pi\\)
- [x] b | \\(\\pi/3,2\\pi/3,4\\pi/3,5\\pi/3\\)
- [ ] c | \\(\\pi/3,2\\pi/3\\)
- [ ] d | \\(\\pi/6,5\\pi/6,7\\pi/6,11\\pi/6\\)
explanation: sin²θ=3/4 requires sinθ=±√3/2. The positive values occur at π/3 and 2π/3; the negative values at 4π/3 and 5π/3. Neither endpoint is a solution.
hint: Work through every subpart in the original question.
example:
![Thomas §1.3 · Exercise 51 · PDF p. 46](assets/recommended/math/thomas-1-3-51-context-1.webp)

![Thomas §1.3 · Exercise 51 · PDF p. 46](assets/recommended/math/thomas-1-3-51-question.webp)
solution:
**Plan — we are going to…**

1. Take both possible square roots of the sine square.
2. Find all unit-circle angles for each sign.
3. Check endpoints and list every solution in order.

**The trick**

**Squaring hides the sign.** Include both positive and negative sine values, which produce four angles.

**What you need to know**

For a positive square, taking square roots gives both signs. Sine is the unit-circle vertical coordinate.

\\[
\\sin^2\\theta=\\frac34\\quad\\Longrightarrow\\quad\\sin\\theta=\\pm\\frac{\\sqrt3}{2}.
\\]



**Step-by-step solution**

1. **Find the reference angle.**

\\[
\\sin(\\pi/3)=\\frac{\\sqrt3}{2}.
\\]

2. **List the positive-sine angles in quadrants I and II.**

\\[
\\theta=\\frac\\pi3,\\quad\\pi-\\frac\\pi3=\\frac{2\\pi}{3}.
\\]

3. **List the negative-sine angles in quadrants III and IV.**

\\[
\\theta=\\pi+\\frac\\pi3=\\frac{4\\pi}{3},\\quad2\\pi-\\frac\\pi3=\\frac{5\\pi}{3}.
\\]

4. **Check the closed interval’s endpoints.** Both have sine zero, so neither solves the equation. The complete solution set is:

\\[
\\left\\{\\frac\\pi3,\\frac{2\\pi}{3},\\frac{4\\pi}{3},\\frac{5\\pi}{3}\\right\\}.
\\]

**Use this method again**

Square root with both signs → reference angle → all matching quadrants → interval endpoints.

**Check**

For every listed angle, squaring the sine removes its sign:

\\[
\\left(\\pm\\frac{\\sqrt3}{2}\\right)^2=\\frac34.
\\]

There are exactly two positive-sine and two negative-sine intersections in one full turn.
:::

:::mcq
id: thomas-1-3-53
title: Thomas §1.3 · Exercise 53
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 53 · PDF p. 46](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which list contains all solutions in the original interval 0≤θ≤2π?
- [ ] a | \\(\\pi/6,5\\pi/6\\)
- [ ] b | \\(\\pi/2,3\\pi/2\\)
- [ ] c | \\(0,\\pi,2\\pi\\)
- [x] d | \\(\\pi/6,\\pi/2,5\\pi/6,3\\pi/2\\)
explanation: Use sin2θ=2sinθ cosθ: the equation becomes cosθ(2sinθ−1)=0. Thus cosθ=0 gives π/2,3π/2, while sinθ=1/2 gives π/6,5π/6. Do not divide by cosθ and lose the first pair.
hint: Work through every subpart in the original question.
example:
![Thomas §1.3 · Exercise 53 · PDF p. 46](assets/recommended/math/thomas-1-3-53-context-1.webp)

![Thomas §1.3 · Exercise 53 · PDF p. 46](assets/recommended/math/thomas-1-3-53-question.webp)
solution:
**Plan — we are going to…**

1. Rewrite the double-angle sine as a product.
2. Move all terms to one side and factor.
3. Solve each factor separately over the stated interval.

**The trick**

**Do not divide by cosine.** Cosine can be zero, and that gives two of the required solutions.

**What you need to know**

Use the sine double-angle identity and the zero-product rule:

\\[
\\sin(2\\theta)=2\\sin\\theta\\cos\\theta.
\\]



\\[
AB=0\\quad\\Longrightarrow\\quad A=0\\ \\text{or}\\ B=0.
\\]



**Step-by-step solution**

1. **Rewrite the original equation.**

\\[
\\sin(2\\theta)=\\cos\\theta\\quad\\Longrightarrow\\quad2\\sin\\theta\\cos\\theta=\\cos\\theta.
\\]

2. **Subtract cosine from both sides and factor it out.**

\\[
2\\sin\\theta\\cos\\theta-\\cos\\theta=0.
\\]



\\[
\\cos\\theta(2\\sin\\theta-1)=0.
\\]

3. **Solve the cosine-zero factor.**

\\[
\\cos\\theta=0\\quad\\Longrightarrow\\quad\\theta=\\frac\\pi2,\\frac{3\\pi}{2}.
\\]

4. **Solve the sine factor.**

\\[
2\\sin\\theta-1=0\\quad\\Longrightarrow\\quad\\sin\\theta=\\frac12.
\\]



\\[
\\theta=\\frac\\pi6,\\frac{5\\pi}{6}.
\\]

5. **Combine and order the solutions.** Neither zero nor a full turn satisfies the original equation:

\\[
\\theta\\in\\left\\{\\frac\\pi6,\\frac\\pi2,\\frac{5\\pi}{6},\\frac{3\\pi}{2}\\right\\}.
\\]

**Use this method again**

Double-angle identity → one side zero → factor → solve every factor → enforce interval.

**Check**

When cosine is zero, both sides of the original equation are zero. For the other pair, sine equals one-half, so:

\\[
\\sin(2\\theta)=2\\left(\\frac12\\right)\\cos\\theta=\\cos\\theta.
\\]

Thus all four candidates satisfy the original equation.
:::

:::mcq
id: past-calculus-2013-q4-2
title: Past paper · IUG Calculus A 2013 · First midterm · Q4(2) · 2013
kicker: PAST PAPER · Calculus Exam: Islamic University of Gaza (first midterm, 23 Oct 2013)
reference: [Calculus Exam: Islamic University of Gaza (first midterm, 23 Oct 2013), p. 4](https://studylib.net/doc/25638836/calculus-a-first-2013)
question: For f(x)=sec x, which classification is correct?
- [x] a | It is trigonometric and transcendental
- [ ] b | It is algebraic only
- [ ] c | It is trigonometric only
- [ ] d | It is neither trigonometric nor transcendental
explanation: Correct answer: It is trigonometric and transcendental
hint: Review the original paper and the lesson concepts before retrying.
solution:
**Plan — we are going to…**

1. Identify secant’s function family.
2. Apply the algebraic/transcendental classification.
3. Combine the two valid descriptions.

**The trick**

**Trigonometric and transcendental are compatible descriptions.** A function can have both labels.

**What you need to know**

Secant is one of the six trigonometric functions. Transcendental functions include the nonalgebraic trigonometric functions; taking a reciprocal does not make cosine algebraic.

**Step-by-step solution**

1. **Use the definition of secant.**

\\[
f(x)=\\sec x=\\frac1{\\cos x},\\qquad\\cos x\\ne0.
\\]

2. **Identify its named family.** The definition uses cosine, so secant is **trigonometric**.

3. **Apply the wider classification.** Secant is not an algebraic function; it belongs to the **transcendental** group. Therefore both descriptions apply: **trigonometric and transcendental**.

**Use this method again**

Identify the named family first, then ask whether it is algebraic or transcendental.

**Check**

The reciprocal identity confirms the family and its restrictions:

\\[
\\sec x\\cos x=1\\quad(\\cos x\\ne0).
\\]

For example, secant is undefined at the quarter-turn where cosine is zero. A reciprocal of a trigonometric function remains in the trigonometric family.
:::

:::mcq
id: past-calculus-2013-q4-4
title: Past paper · IUG Calculus A 2013 · First midterm · Q4(4) · 2013
kicker: PAST PAPER · Calculus Exam: Islamic University of Gaza (first midterm, 23 Oct 2013)
reference: [Calculus Exam: Islamic University of Gaza (first midterm, 23 Oct 2013), p. 4](https://studylib.net/doc/25638836/calculus-a-first-2013)
question: What is the period of cot((3/5)x+3)?
- [x] a | 5π/3
- [ ] b | 3π/5
- [ ] c | π/3
- [ ] d | 5π
explanation: Correct answer: 5π/3
hint: Review the original paper and the lesson concepts before retrying.
solution:
**Plan — we are going to…**

1. Use cotangent’s half-turn period.
2. Find the input change that adds one half-turn to the argument.
3. Ignore the constant shift when calculating period.

**The trick**

The constant 3 changes the graph’s horizontal position. **Only the coefficient three-fifths stretches the period.**

**What you need to know**

Cotangent repeats when its argument increases by π. Let T be the smallest positive repeating input change:

\\[
\\cot(u+\\pi)=\\cot u.
\\]



**Step-by-step solution**

1. **Write the change in the argument when the input increases by T.**

\\[
\\left(\\frac35(x+T)+3\\right)-\\left(\\frac35x+3\\right)=\\frac35T.
\\]

2. **Set this argument change equal to the basic period.**

\\[
\\frac35T=\\pi.
\\]

3. **Multiply both sides by five-thirds.**

\\[
T=\\frac53\\pi=\\frac{5\\pi}{3}.
\\]

**Use this method again**

For tangent/cotangent, divide π by the absolute input coefficient. Constant shifts cancel.

**Check**

Substituting the proposed period adds exactly π to the argument:

\\[
\\frac35\\left(x+\\frac{5\\pi}{3}\\right)+3=\\frac35x+3+\\pi.
\\]

Cotangent therefore returns to the same value wherever it is defined.
:::

:::mcq
id: past-calculus-2013-q1-1
title: Past paper · IUG Calculus A 2013 · First midterm · Q1(i) · 2013
kicker: PAST PAPER · Calculus Exam: Islamic University of Gaza (first midterm, 23 Oct 2013)
reference: [Calculus Exam: Islamic University of Gaza (first midterm, 23 Oct 2013), p. 1](https://studylib.net/doc/25638836/calculus-a-first-2013)
question: On [0,2π], solve 2sin²x+sin x=1.
- [x] a | π/6, 5π/6, 3π/2
- [ ] b | π/3, 2π/3, π
- [ ] c | π/6, 5π/6 only
- [ ] d | 0, π/2, π, 3π/2
explanation: Correct answer: π/6, 5π/6, 3π/2
hint: Review the original paper and the lesson concepts before retrying.
solution:
**Plan — we are going to…**

1. Treat sine as one variable in a quadratic.
2. Factor and recover the two possible sine values.
3. Find every corresponding angle in the closed interval.

**The trick**

**Solve the quadratic in sine before finding angles.** The negative root supplies an additional angle that is easy to miss.

**What you need to know**

The zero-product rule applies to factored trigonometric equations. Sine must remain between negative one and one.

\\[
(2u-1)(u+1)=2u^2+u-1.
\\]



**Step-by-step solution**

1. **Move one to the left and substitute a temporary variable.**

\\[
u=\\sin x,\\qquad2u^2+u-1=0.
\\]

2. **Factor the quadratic.**

\\[
(2u-1)(u+1)=0.
\\]

3. **Set each factor equal to zero.**

\\[
2u-1=0\\quad\\Longrightarrow\\quad u=\\frac12.
\\]



\\[
u+1=0\\quad\\Longrightarrow\\quad u=-1.
\\]

4. **Convert the sine values back to angles.** Positive one-half occurs in quadrants I and II; negative one occurs at the bottom of the unit circle:

\\[
\\sin x=\\frac12:\\quad x=\\frac\\pi6,\\frac{5\\pi}{6}.
\\]



\\[
\\sin x=-1:\\quad x=\\frac{3\\pi}{2}.
\\]

5. **Check the interval endpoints.** Their sine is zero and the original left side is zero, not one. The full answer is:

\\[
x\\in\\left\\{\\frac\\pi6,\\frac{5\\pi}{6},\\frac{3\\pi}{2}\\right\\}.
\\]

**Use this method again**

One trigonometric function squared → temporary variable → factor → unit-circle angles → endpoints.

**Check**

Check both possible sine values in the original equation:

\\[
2\\left(\\frac12\\right)^2+\\frac12=\\frac12+\\frac12=1.
\\]



\\[
2(-1)^2+(-1)=2-1=1.
\\]
:::

:::mcq
id: past-calculus-2013-q2-range
title: Past paper · IUG Calculus A 2013 · First midterm · Q2(i) · 2013
kicker: PAST PAPER · Calculus Exam: Islamic University of Gaza (first midterm, 23 Oct 2013)
reference: [Calculus Exam: Islamic University of Gaza (first midterm, 23 Oct 2013), p. 2](https://studylib.net/doc/25638836/calculus-a-first-2013)
question: For f(x)=3cos(2x−π)+1, what is the range?
- [ ] a | [−3,3]
- [ ] b | [−1,5]
- [x] c | [−2,4]
- [ ] d | [−2,3]
explanation: Correct answer: [−2,4]
hint: Review the original paper and the lesson concepts before retrying.
solution:
**Plan — we are going to…**

1. Start with cosine’s output bounds.
2. Apply the outside multiplication and addition.
3. Verify that both new endpoints occur.

**The trick**

**Changes inside cosine do not change its output bounds** when the input ranges over all real numbers. The outside 3 and +1 determine the range.

**What you need to know**

Cosine has every output between negative one and one. Multiplying an inequality by a positive number preserves its direction.

\\[
-1\\le\\cos u\\le1.
\\]



**Step-by-step solution**

1. **Use the given argument without changing cosine’s bounds.**

\\[
-1\\le\\cos(2x-\\pi)\\le1.
\\]

2. **Multiply every term by positive three.**

\\[
-3\\le3\\cos(2x-\\pi)\\le3.
\\]

3. **Add one to every term.**

\\[
-2\\le3\\cos(2x-\\pi)+1\\le4.
\\]

4. **State the range, including both attained endpoints.**

\\[
\\text{Range}=[-2,4].
\\]

**Use this method again**

Start from the standard trig range → apply only outside scaling/shifting → check endpoint attainment.

**Check**

Direct substitution reaches each endpoint:

\\[
f(0)=3\\cos(-\\pi)+1=-2.
\\]



\\[
f(\\pi/2)=3\\cos0+1=4.
\\]

Cosine takes every intermediate value, so no outputs between the endpoints are missing.
:::

:::mcq
id: past-calculus-2006-q4-1
title: Past paper · IUG Calculus A 2006 · First midterm · Q4(a) · 2006
kicker: PAST PAPER · The Islamic University of Gaza Calculus A first midterm (5 Nov 2006)
reference: [The Islamic University of Gaza Calculus A first midterm (5 Nov 2006), p. 4](https://www.scribd.com/document/963105786/fm-5-11-2006)
question: Solve 2cos x−1=0 for x∈[0,2π].
- [x] a | π/3 and 5π/3
- [ ] b | π/6 and 5π/6
- [ ] c | π/2 and 3π/2
- [ ] d | 0 and 2π
explanation: Correct answer: π/3 and 5π/3
hint: Review the original paper and the lesson concepts before retrying.
solution:
**Plan — we are going to…**

1. Isolate cosine.
2. Find the reference angle for positive one-half.
3. Use both positive-cosine quadrants and check endpoints.

**The trick**

**Cosine is positive in two quadrants.** Giving only the first-quadrant angle loses a solution.

**What you need to know**

Cosine is the horizontal unit-circle coordinate. A half-value occurs at reference angle one-third of π.

\\[
\\cos(\\pi/3)=\\frac12.
\\]



**Step-by-step solution**

1. **Add one and divide by two.**

\\[
2\\cos x-1=0\\quad\\Longrightarrow\\quad2\\cos x=1.
\\]



\\[
\\cos x=\\frac12.
\\]

2. **Use quadrants I and IV.**

\\[
x=\\frac\\pi3\\quad\\text{or}\\quad x=2\\pi-\\frac\\pi3=\\frac{5\\pi}{3}.
\\]

3. **Check the closed interval endpoints.** At zero and a full turn cosine is one, so the original left side equals one rather than zero. The two angles listed above are the complete answer.

**Use this method again**

Isolate the trig value → reference angle → every quadrant with the correct sign → endpoints.

**Check**

Both candidate angles have cosine one-half, and each makes the original equation true:

\\[
2\\left(\\frac12\\right)-1=0.
\\]
:::`};export{e as default};