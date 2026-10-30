var e={id:`calculus-2.6`,title:`Thomas Calculus §2.6 Practice`,summary:`Thomas' Calculus §2.6 · original textbook exercises and verified practice.`,subjectId:`mathematics`,reward:0,status:`published`,authoringSource:`:::mcq
id: thomas-2-6-1
title: Thomas §2.6 · Exercise 1
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 1 · PDF p. 111](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | (a) 0; (b) 2; (c) −2; (d) 0; (e) −1; (f) +∞; (g) +∞; (h) 1; (i) 0.
- [ ] b | (a) 2; (b) −2; (c) 2; (d) DNE; (e) 0; (f) 0; (g) 0; (h) 0; (i) 1.
- [ ] c | (a) 0; (b) −2; (c) 2; (d) DNE; (e) +∞; (f) −1; (g) DNE; (h) 1; (i) 0.
- [x] d | (a) 0; (b) −2; (c) 2; (d) DNE; (e) −1; (f) +∞; (g) DNE; (h) 1; (i) 0.
explanation: The graph crosses the axis at x=2. At −3 its right and left branches approach −2 and 2, so the two-sided limit fails. At 0 the right branch approaches −1 and the left branch grows without bound; again there is no two-sided limit. The horizontal end behavior is y=1 to the right and y=0 to the left.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 1 · PDF p. 111](assets/recommended/math/thomas-2-6-1-question.webp)
solution:
**Plan — we are going to…**

1. Read the crossing and the one-sided branch heights.
2. Compare one-sided limits at each break.
3. Read the far-left and far-right end behavior.

**The trick**

Keep the two graph breaks separate: there is a jump at minus three, and an unbounded left branch at zero.

**What you need to know**

For graph limits, follow the curve on the requested side. A two-sided limit needs matching one-sided behavior; an end limit follows the graph toward the corresponding infinite input.

**Step-by-step solution**

1. **Part (a), approach two.** The curve crosses the horizontal axis there, so 

\\[
\\lim_{x\\to2}f(x)=0.
\\]

2. **Parts (b), (c), (d), approach minus three.** The lower branch on the right approaches minus two, while the upper branch on the left approaches two: 

\\[
\\lim_{x\\to-3^+}f(x)=-2,\\qquad\\lim_{x\\to-3^-}f(x)=2.
\\]

 Because they differ, the two-sided limit in part (d) does not exist.

3. **Parts (e), (f), (g), approach zero.** The right branch approaches minus one; the left branch rises without bound: 

\\[
\\lim_{x\\to0^+}f(x)=-1,\\qquad\\lim_{x\\to0^-}f(x)=+\\infty.
\\]

 Therefore the two-sided limit in part (g) does not exist.

4. **Parts (h), (i), follow the tails.** 

\\[
\\lim_{x\\to+\\infty}f(x)=1,\\qquad\\lim_{x\\to-\\infty}f(x)=0.
\\]

**Use this method again**

Read each arrow independently; compare sides only after recording both. Use tails, rather than nearby point values, for infinite inputs.

**Check**

The graph has a visible jump at minus three and incompatible behaviors on the two sides of zero, so both corresponding two-sided limits must fail. The two tail heights are different, as the graph shows.
:::

:::mcq
id: thomas-2-6-3
title: Thomas §2.6 · Exercise 3
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 3 · PDF p. 111](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What are the limits as x→∞ and x→−∞, respectively?
- [ ] a | (a) 2; (b) 2
- [x] b | (a) −3; (b) −3
- [ ] c | (a) 3; (b) 3
- [ ] d | (a) 0; (b) 0
explanation: The term 2/x tends to zero at both ends, leaving −3.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 3 · PDF p. 111](assets/recommended/math/thomas-2-6-3-context-1.webp)

![Thomas §2.6 · Exercise 3 · PDF p. 111](assets/recommended/math/thomas-2-6-3-question.webp)
solution:
**Plan — we are going to…**

1. Isolate the shrinking reciprocal term.
2. Take each infinite-end limit.
3. Keep the constant offset.

**The trick**

The input tends to either infinity; the reciprocal tends to zero on both ends, even though its sign differs.

**What you need to know**

For every positive power, reciprocal powers vanish at either infinite end: 

\\[
\\lim_{x\\to\\pm\\infty}\\frac1{x^n}=0\\quad(n>0).
\\]

 Finite limit laws apply once the denominator tends to a nonzero number.

**Step-by-step solution**

1. **Write the function.** 

\\[
f(x)=\\frac2x-3.
\\]

2. **Part (a), positive infinity.** 

\\[
\\lim_{x\\to+\\infty}f(x)=0-3=-3.
\\]

3. **Part (b), negative infinity.** The reciprocal approaches zero from below, but the limiting sum is still 

\\[
\\lim_{x\\to-\\infty}f(x)=-3.
\\]

**Use this method again**

For a constant plus reciprocal powers, send the reciprocal terms to zero and retain the constant.

**Check**

At inputs one thousand and minus one thousand the outputs are −2.998 and −3.002. They approach the same height from opposite sides.
:::

:::mcq
id: thomas-2-6-5
title: Thomas §2.6 · Exercise 5
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 5 · PDF p. 111](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What are the limits as x→∞ and x→−∞, respectively?
- [ ] a | (a) 2; (b) 2
- [ ] b | (a) 0; (b) 0
- [ ] c | (a) 1; (b) 1
- [x] d | (a) 1/2; (b) 1/2
explanation: At both infinities 1/x→0, so the denominator tends to 2.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 5 · PDF p. 111](assets/recommended/math/thomas-2-6-5-context-1.webp)

![Thomas §2.6 · Exercise 5 · PDF p. 111](assets/recommended/math/thomas-2-6-5-question.webp)
solution:
**Plan — we are going to…**

1. Take the limit of the reciprocal term in the denominator.
2. Verify the denominator tends to a nonzero number.
3. Invert the result at both ends.

**The trick**

The reciprocal is inside the denominator. Let the whole denominator approach two before taking its reciprocal.

**What you need to know**

For every positive power, reciprocal powers vanish at either infinite end: 

\\[
\\lim_{x\\to\\pm\\infty}\\frac1{x^n}=0\\quad(n>0).
\\]

 Finite limit laws apply once the denominator tends to a nonzero number.

**Step-by-step solution**

1. **Write the function.** 

\\[
g(x)=\\frac1{2+1/x}.
\\]

2. **Part (a).** At positive infinity, 

\\[
2+\\frac1x\\longrightarrow2,
\\]

 so the quotient tends to one-half.

3. **Part (b).** At negative infinity the reciprocal term also tends to zero, so 

\\[
\\lim_{x\\to+\\infty}g(x)=\\lim_{x\\to-\\infty}g(x)=\\frac12.
\\]

**Use this method again**

Evaluate inner reciprocal powers first, check the outer denominator, then apply the quotient law.

**Check**

At inputs one thousand and minus one thousand the values are approximately 0.499750 and 0.500250, both close to one-half.
:::

:::mcq
id: thomas-2-6-7
title: Thomas §2.6 · Exercise 7
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 7 · PDF p. 111](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What are the limits as x→∞ and x→−∞, respectively?
- [ ] a | (a) −3/5; (b) −3/5
- [x] b | (a) −5/3; (b) −5/3
- [ ] c | (a) 5/3; (b) 5/3
- [ ] d | (a) 0; (b) 0
explanation: All terms involving 1/x or 1/x² vanish at either infinity, leaving −5/3.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 7 · PDF p. 111](assets/recommended/math/thomas-2-6-7-context-1.webp)

![Thomas §2.6 · Exercise 7 · PDF p. 111](assets/recommended/math/thomas-2-6-7-question.webp)
solution:
**Plan — we are going to…**

1. Send both reciprocal corrections to zero.
2. Keep the remaining numerator and denominator constants.
3. Use the same calculation for both infinite ends.

**The trick**

The denominator contains the SQUARE of the input in its reciprocal. That term still vanishes at either end.

**What you need to know**

For every positive power, reciprocal powers vanish at either infinite end: 

\\[
\\lim_{x\\to\\pm\\infty}\\frac1{x^n}=0\\quad(n>0).
\\]

 Finite limit laws apply once the denominator tends to a nonzero number.

**Step-by-step solution**

1. **Write the function.** 

\\[
h(x)=\\frac{-5+7/x}{3-1/x^2}.
\\]

2. **Take the individual limits.** 

\\[
-5+\\frac7x\\longrightarrow-5,\\qquad3-\\frac1{x^2}\\longrightarrow3.
\\]

3. **Parts (a), (b).** Since the denominator limit is nonzero, 

\\[
\\lim_{x\\to+\\infty}h(x)=\\lim_{x\\to-\\infty}h(x)=-\\frac53.
\\]

**Use this method again**

Discard only terms proven to vanish; divide the remaining finite numerator and denominator limits.

**Check**

For large inputs the numerator is negative and denominator positive, so a negative limiting ratio is consistent. At input one thousand the value is about −1.66433.
:::

:::mcq
id: thomas-2-6-9
title: Thomas §2.6 · Exercise 9
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 9 · PDF p. 111](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(2\\)
- [ ] b | \\(1\\)
- [ ] c | \\(+\\infty\\)
- [x] d | \\(0\\)
explanation: |sin(2x)/x|≤1/|x|, and the bound tends to zero. Apply squeezing.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 9 · PDF p. 111](assets/recommended/math/thomas-2-6-9-question.webp)
solution:
**Plan — we are going to…**

1. Bound sine between minus one and one.
2. Divide the bound by the growing positive input.
3. Use the Squeeze Theorem.

**The trick**

Sine never settles to a limit at infinity, but its bounded oscillation divided by a growing denominator does settle.

**What you need to know**

The Squeeze Theorem gives a zero limit whenever the absolute value is bounded above by a quantity tending to zero. For every real angle, 

\\[
|\\sin u|\\le1.
\\]

**Step-by-step solution**

1. **Bound the expression.** For positive inputs, 

\\[
\\left|\\frac{\\sin(2x)}x\\right|\\le\\frac1x.
\\]

2. **Take the bound limit.** 

\\[
\\lim_{x\\to+\\infty}\\frac1x=0.
\\]

3. **Squeeze.** The absolute value tends to zero, hence 

\\[
\\lim_{x\\to+\\infty}\\frac{\\sin(2x)}x=0.
\\]

**Use this method again**

For a bounded oscillation over a growing denominator, use an absolute-value bound rather than assigning the oscillation its own limit.

**Check**

At every input greater than one thousand, the absolute output is less than 0.001 regardless of the oscillation phase. This confirms the size goes to zero.
:::

:::mcq
id: thomas-2-6-11
title: Thomas §2.6 · Exercise 11
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 11 · PDF p. 111](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(0\\)
- [x] b | \\(-1\\)
- [ ] c | \\(1\\)
- [ ] d | \\(2\\)
explanation: Divide numerator and denominator by t. Both bounded trigonometric terms divided by t tend to 0, leaving −1/1.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 11 · PDF p. 111](assets/recommended/math/thomas-2-6-11-question.webp)
solution:
**Plan — we are going to…**

1. Divide numerator and denominator by the large input.
2. Show the bounded trigonometric corrections vanish.
3. Take the ratio of the remaining constants.

**The trick**

Dividing by a negative input is valid in this equality. The bounded sine and cosine terms disappear after that division.

**What you need to know**

For every positive power, reciprocal powers vanish at either infinite end: 

\\[
\\lim_{x\\to\\pm\\infty}\\frac1{x^n}=0\\quad(n>0).
\\]

 Finite limit laws apply once the denominator tends to a nonzero number. Also 

\\[
|\\sin t|\\le1,\\qquad|\\cos t|\\le1.
\\]

**Step-by-step solution**

1. **Normalize the expression.** 

\\[
\\frac{2-t+\\sin t}{t+\\cos t}=\\frac{2/t-1+\\sin t/t}{1+\\cos t/t}.
\\]

2. **Bound the oscillatory terms.** 

\\[
\\left|\\frac{\\sin t}t\\right|\\le\\frac1{|t|},\\qquad\\left|\\frac{\\cos t}t\\right|\\le\\frac1{|t|}.
\\]

 Both bounds tend to zero as the input tends to negative infinity.

3. **Take the quotient limit.** 

\\[
\\lim_{t\\to-\\infty}\\frac{2-t+\\sin t}{t+\\cos t}=\\frac{-1}{1}=-1.
\\]

**Use this method again**

Divide by the dominant input power and bound any oscillating corrections that remain.

**Check**

For large negative inputs the original numerator is positive and denominator negative, so the limiting ratio must be negative, consistent with minus one.
:::

:::mcq
id: thomas-2-6-19
title: Thomas §2.6 · Exercise 19
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 19 · PDF p. 111](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What are the limits as x→∞ and x→−∞, respectively?
- [ ] a | (a) −∞; (b) −∞
- [x] b | (a) 0; (b) 0
- [ ] c | (a) 10; (b) 10
- [ ] d | (a) ∞; (b) ∞
explanation: Dividing by x⁶ gives 10/x+1/x²+31/x⁶. Every term tends to zero.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 19 · PDF p. 111](assets/recommended/math/thomas-2-6-19-context-1.webp)

![Thomas §2.6 · Exercise 19 · PDF p. 111](assets/recommended/math/thomas-2-6-19-question.webp)
solution:
**Plan — we are going to…**

1. Divide each numerator term by the denominator power.
2. Rewrite as negative powers.
3. Take the limit of each term at both ends.

**The trick**

The highest numerator degree is five and the denominator degree is six, so every resulting term still contains a reciprocal input power.

**What you need to know**

For every positive power, reciprocal powers vanish at either infinite end: 

\\[
\\lim_{x\\to\\pm\\infty}\\frac1{x^n}=0\\quad(n>0).
\\]

 Finite limit laws apply once the denominator tends to a nonzero number.

**Step-by-step solution**

1. **Divide term by term.** 

\\[
\\frac{10x^5+x^4+31}{x^6}=\\frac{10}x+\\frac1{x^2}+\\frac{31}{x^6}.
\\]

2. **Take the limits.** All three terms tend to zero at either positive or negative infinity.

3. **Parts (a), (b).** 

\\[
\\lim_{x\\to+\\infty}g(x)=\\lim_{x\\to-\\infty}g(x)=0.
\\]

**Use this method again**

When the numerator degree is smaller, divide every term by the denominator power to exhibit the vanishing terms.

**Check**

At input one thousand the leading correction is 0.01; at minus one thousand it is −0.01. Both shrink with magnitude of input, while the smaller even-power terms also vanish.
:::

:::mcq
id: thomas-2-6-21
title: Thomas §2.6 · Exercise 21
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 21 · PDF p. 111](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What are the limits as x→∞ and x→−∞, respectively?
- [ ] a | (a) 2/3; (b) 2/3
- [ ] b | (a) −3/2; (b) −3/2
- [ ] c | (a) 0; (b) 0
- [x] d | (a) −2/3; (b) −2/3
explanation: Divide both polynomials by x³. The leading-coefficient ratio is −2/3 at either end.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 21 · PDF p. 111](assets/recommended/math/thomas-2-6-21-context-1.webp)

![Thomas §2.6 · Exercise 21 · PDF p. 111](assets/recommended/math/thomas-2-6-21-question.webp)
solution:
**Plan — we are going to…**

1. Divide both polynomials by the cubic power.
2. Let the reciprocal corrections vanish.
3. Use the leading-coefficient ratio at both ends.

**The trick**

The numerator and denominator have the same highest degree. The coefficient ratio survives; the lower terms do not.

**What you need to know**

For every positive power, reciprocal powers vanish at either infinite end: 

\\[
\\lim_{x\\to\\pm\\infty}\\frac1{x^n}=0\\quad(n>0).
\\]

 Finite limit laws apply once the denominator tends to a nonzero number.

**Step-by-step solution**

1. **Normalize all terms.** 

\\[
\\frac{-2x^3-2x+3}{3x^3+3x^2-5x}=\\frac{-2-2/x^2+3/x^3}{3+3/x-5/x^2}.
\\]

2. **Take numerator and denominator limits.** They approach minus two and three respectively.

3. **Parts (a), (b).** 

\\[
\\lim_{x\\to+\\infty}h(x)=\\lim_{x\\to-\\infty}h(x)=-\\frac23.
\\]

**Use this method again**

For equal polynomial degrees, divide by the shared highest power and retain the coefficient ratio.

**Check**

The limiting denominator is three rather than zero, validating the quotient law. For negative large input both leading cubic terms change signs, preserving the same ratio.
:::

:::mcq
id: thomas-2-6-23
title: Thomas §2.6 · Exercise 23
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 23 · PDF p. 111](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(0\\)
- [x] b | \\(2\\)
- [ ] c | \\(4\\)
- [ ] d | \\(\\frac12\\)
explanation: Divide inside the square root by x²: (8−3/x²)/(2+1/x)→4. Its square root tends to 2.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 23 · PDF p. 111](assets/recommended/math/thomas-2-6-23-context-1.webp)

![Thomas §2.6 · Exercise 23 · PDF p. 111](assets/recommended/math/thomas-2-6-23-question.webp)
solution:
**Plan — we are going to…**

1. Normalize the rational expression inside the root.
2. Take its limit.
3. Use continuity of the positive square root.

**The trick**

The radical surrounds the entire quotient. Its limit is the square root of the leading-coefficient ratio.

**What you need to know**

For every positive power, reciprocal powers vanish at either infinite end: 

\\[
\\lim_{x\\to\\pm\\infty}\\frac1{x^n}=0\\quad(n>0).
\\]

 Finite limit laws apply once the denominator tends to a nonzero number. The square-root function is continuous at every positive number.

**Step-by-step solution**

1. **Divide the inner numerator and denominator by the square of the input.** 

\\[
\\sqrt{\\frac{8x^2-3}{2x^2+x}}=\\sqrt{\\frac{8-3/x^2}{2+1/x}}.
\\]

2. **Take the inner limit.** 

\\[
\\frac{8-3/x^2}{2+1/x}\\longrightarrow\\frac82=4.
\\]

3. **Take the principal root.** 

\\[
\\lim_{x\\to+\\infty}\\sqrt{\\frac{8x^2-3}{2x^2+x}}=\\sqrt4=2.
\\]

**Use this method again**

Normalize inside an outer continuous function before evaluating the outer function.

**Check**

At input one hundred, the radicand is about 3.980 and the positive root about 1.995. Its sign and magnitude agree with a limit of positive two.
:::

:::mcq
id: thomas-2-6-25
title: Thomas §2.6 · Exercise 25
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 25 · PDF p. 111](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(-\\infty\\)
- [ ] b | \\(0\\)
- [ ] c | \\(1\\)
- [x] d | \\(+\\infty\\)
explanation: The ratio (1−x³)/(x²+7x) behaves like −x. As x→−∞ this tends to +∞, and raising to the fifth power preserves that positive divergence.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 25 · PDF p. 111](assets/recommended/math/thomas-2-6-25-context-1.webp)

![Thomas §2.6 · Exercise 25 · PDF p. 111](assets/recommended/math/thomas-2-6-25-question.webp)
solution:
**Plan — we are going to…**

1. Separate the growth of the inner quotient.
2. Determine its sign at negative infinity.
3. Apply the odd fifth power.

**The trick**

The quotient behaves like minus the input, which is POSITIVE when the input tends to negative infinity.

**What you need to know**

Factor the dominant powers to expose a growing input factor multiplied by a factor with a nonzero finite limit. A positive quantity tending to infinity remains so after a positive power.

**Step-by-step solution**

1. **Extract the growing factor.** 

\\[
\\frac{1-x^3}{x^2+7x}=(-x)\\frac{1-1/x^3}{1+7/x}.
\\]

2. **Determine the sign and growth.** The fractional factor tends to one; the factor minus the input tends to positive infinity as the input tends to negative infinity. Thus the quotient tends to positive infinity.

3. **Raise to the fifth power.** 

\\[
\\lim_{x\\to-\\infty}\\left(\\frac{1-x^3}{x^2+7x}\\right)^5=+\\infty.
\\]

**Use this method again**

For unequal degrees, factor the leftover input power and determine its sign before applying an outer power.

**Check**

For inputs below minus seven, numerator and denominator are both positive. The quotient grows roughly like the positive magnitude of the input; no negative divergence is possible there.
:::

:::mcq
id: thomas-2-6-27
title: Thomas §2.6 · Exercise 27
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 27 · PDF p. 111](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(+\\infty\\)
- [x] b | \\(0\\)
- [ ] c | \\(\\frac23\\)
- [ ] d | \\(1\\)
explanation: Dividing by x leaves (2/√x+1/x²)/(3−7/x), whose numerator tends to 0 and denominator to 3.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 27 · PDF p. 111](assets/recommended/math/thomas-2-6-27-context-1.webp)

![Thomas §2.6 · Exercise 27 · PDF p. 111](assets/recommended/math/thomas-2-6-27-question.webp)
solution:
**Plan — we are going to…**

1. Divide by the linear denominator power.
2. Rewrite the root and reciprocal terms as negative powers.
3. Evaluate the normalized numerator and denominator.

**The trick**

The square root grows more slowly than the linear denominator. Dividing by the input turns it into a vanishing reciprocal root.

**What you need to know**

For every positive power, reciprocal powers vanish at either infinite end: 

\\[
\\lim_{x\\to\\pm\\infty}\\frac1{x^n}=0\\quad(n>0).
\\]

 Finite limit laws apply once the denominator tends to a nonzero number.

**Step-by-step solution**

1. **Normalize.** 

\\[
\\frac{2\\sqrt x+x^{-1}}{3x-7}=\\frac{2/\\sqrt x+1/x^2}{3-7/x}.
\\]

2. **Take limits.** The numerator tends to zero and the denominator to three.

3. **Divide.** 

\\[
\\lim_{x\\to+\\infty}\\frac{2\\sqrt x+x^{-1}}{3x-7}=0.
\\]

**Use this method again**

Compare powers rather than the visual size of terms; divide by the dominant denominator power.

**Check**

At input one million the leading normalized numerator is 0.002 and the denominator almost three, giving a small positive value about 0.000667.
:::

:::mcq
id: thomas-2-6-29
title: Thomas §2.6 · Exercise 29
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 29 · PDF p. 111](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(0\\)
- [ ] b | \\(-1\\)
- [ ] c | \\(+\\infty\\)
- [x] d | \\(1\\)
explanation: Divide numerator and denominator by x^(1/3): (1−x^(−2/15))/(1+x^(−2/15))→1.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 29 · PDF p. 111](assets/recommended/math/thomas-2-6-29-context-1.webp)

![Thomas §2.6 · Exercise 29 · PDF p. 111](assets/recommended/math/thomas-2-6-29-question.webp)
solution:
**Plan — we are going to…**

1. Divide by the cube-root term.
2. Simplify the fifth-root/cube-root ratio.
3. Evaluate the remaining quotient at negative infinity.

**The trick**

Odd roots are real for negative inputs. Their ratio here becomes a positive reciprocal even power, which still tends to zero.

**What you need to know**

For real odd roots use real-root powers. With the real fifteenth root, 

\\[
\\frac{x^{1/5}}{x^{1/3}}=x^{-2/15}=\\frac1{(\\sqrt[15]x)^2}.
\\]

**Step-by-step solution**

1. **Normalize by the real cube root.** 

\\[
\\frac{\\sqrt[3]x-\\sqrt[5]x}{\\sqrt[3]x+\\sqrt[5]x}=\\frac{1-x^{-2/15}}{1+x^{-2/15}}.
\\]

2. **Take the correction limit.** As the input tends to negative infinity, its real fifteenth root grows in magnitude, so 

\\[
x^{-2/15}\\longrightarrow0.
\\]

3. **Evaluate.** 

\\[
\\lim_{x\\to-\\infty}\\frac{\\sqrt[3]x-\\sqrt[5]x}{\\sqrt[3]x+\\sqrt[5]x}=\\frac{1-0}{1+0}=1.
\\]

**Use this method again**

With fractional powers at negative infinity, use the real odd-root convention and simplify ratios before taking limits.

**Check**

Both roots are negative on the far-left branch, and the cube root has the larger magnitude. Numerator and denominator are therefore both negative and their ratio positive, approaching one from below.
:::

:::mcq
id: thomas-2-6-31
title: Thomas §2.6 · Exercise 31
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 31 · PDF p. 111](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(1\\)
- [x] b | \\(+\\infty\\)
- [ ] c | \\(0\\)
- [ ] d | \\(\\frac14\\)
explanation: The original leading terms are 2x^(5/3) and x^(8/5), so their ratio is 2x^(1/15), which grows without bound. Dividing through by x^(8/5) shows all lower-power terms vanish.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 31 · PDF p. 111](assets/recommended/math/thomas-2-6-31-context-1.webp)

![Thomas §2.6 · Exercise 31 · PDF p. 111](assets/recommended/math/thomas-2-6-31-question.webp)
solution:
**Plan — we are going to…**

1. Compare the fractional leading exponents.
2. Factor the dominant powers from numerator and denominator.
3. Check the positive growing power that remains.

**The trick**

The numerator exponent exceeds the denominator exponent by only one-fifteenth. The quotient still grows without bound, although slowly.

**What you need to know**

For positive inputs, exponent subtraction gives 

\\[
\\frac{x^a}{x^b}=x^{a-b}.
\\]

 Here 

\\[
\\frac53-\\frac85=\\frac1{15}>0.
\\]

**Step-by-step solution**

1. **Write the full expression.** 

\\[
\\frac{2x^{5/3}-x^{1/3}+7}{x^{8/5}+3x+\\sqrt x}.
\\]

2. **Factor the leading powers.** 

\\[
x^{1/15}\\frac{2-x^{-4/3}+7x^{-5/3}}{1+3x^{-3/5}+x^{-11/10}}.
\\]

3. **Take the finite factor limit.** The fraction tends to two, while the positive factor 

\\[
x^{1/15}\\longrightarrow+\\infty.
\\]

4. **Conclude.** The limit is positive infinity. The leading multiplier is two, not one-quarter.

**Use this method again**

Compare exact fractional exponents, factor their difference, then check the sign of the remaining finite coefficient.

**Check**

All denominator terms are positive for positive inputs, and the leading numerator term is positive. The expression is eventually positive, confirming positive rather than negative divergence.
:::

:::mcq
id: thomas-2-6-33
title: Thomas §2.6 · Exercise 33
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 33 · PDF p. 111](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(-1\\)
- [ ] b | \\(0\\)
- [ ] c | \\(+\\infty\\)
- [x] d | \\(1\\)
explanation: For positive large x, √(x²+1)=x√(1+1/x²). Divide numerator and denominator by x to get limit 1.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 33 · PDF p. 111](assets/recommended/math/thomas-2-6-33-context-1.webp)

![Thomas §2.6 · Exercise 33 · PDF p. 111](assets/recommended/math/thomas-2-6-33-question.webp)
solution:
**Plan — we are going to…**

1. Extract the magnitude of the input from the square root.
2. Use the positive-infinity sign.
3. Divide by the input and evaluate.

**The trick**

Taking the square root of the input squared gives its absolute value. It equals the input here only because the approach is positive infinity.

**What you need to know**

The correct identity is 

\\[
\\sqrt{x^2}=|x|.
\\]

 At positive infinity the input is eventually positive, so its absolute value equals itself.

**Step-by-step solution**

1. **Factor the radical.** 

\\[
\\sqrt{x^2+1}=|x|\\sqrt{1+1/x^2}=x\\sqrt{1+1/x^2}.
\\]

2. **Divide numerator and denominator by the input.** 

\\[
\\frac{\\sqrt{x^2+1}}{x+1}=\\frac{\\sqrt{1+1/x^2}}{1+1/x}.
\\]

3. **Evaluate.** 

\\[
\\lim_{x\\to+\\infty}\\frac{\\sqrt{x^2+1}}{x+1}=\\frac11=1.
\\]

**Use this method again**

Extract the absolute value from a quadratic radical, choose its correct sign from the approach direction, then normalize.

**Check**

At input one hundred the quotient is approximately 0.99015, close to positive one; the original quotient is positive on the positive tail.
:::

:::mcq
id: thomas-2-6-35
title: Thomas §2.6 · Exercise 35
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 35 · PDF p. 111](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(-\\frac12\\)
- [x] b | \\(\\frac12\\)
- [ ] c | \\(2\\)
- [ ] d | \\(0\\)
explanation: For x→+∞, divide by x to obtain (1−3/x)/√(4+25/x²)→1/2.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 35 · PDF p. 111](assets/recommended/math/thomas-2-6-35-context-1.webp)

![Thomas §2.6 · Exercise 35 · PDF p. 111](assets/recommended/math/thomas-2-6-35-question.webp)
solution:
**Plan — we are going to…**

1. Factor the input squared from the radical.
2. Replace the absolute value for a positive infinite approach.
3. Normalize and take the ratio.

**The trick**

The leading coefficient four is under a square root and becomes two, not four.

**What you need to know**

At positive infinity, 

\\[
\\sqrt{4x^2+25}=x\\sqrt{4+25/x^2}.
\\]

 The positive-root convention controls the sign.

**Step-by-step solution**

1. **Normalize.** 

\\[
\\frac{x-3}{\\sqrt{4x^2+25}}=\\frac{1-3/x}{\\sqrt{4+25/x^2}}.
\\]

2. **Take the limits.** The numerator tends to one and the denominator tends to positive two.

3. **Divide.** 

\\[
\\lim_{x\\to+\\infty}\\frac{x-3}{\\sqrt{4x^2+25}}=\\frac12.
\\]

**Use this method again**

Normalize radicals using the input magnitude, and take the square root of the leading coefficient.

**Check**

At input one thousand the expression is approximately 0.498498, consistent with an approach to one-half.
:::

:::mcq
id: thomas-2-6-37
title: Thomas §2.6 · Exercise 37
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 37 · PDF p. 111](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(-\\infty\\)
- [ ] b | \\(0\\)
- [ ] c | \\(3\\)
- [x] d | \\(+\\infty\\)
explanation: As x→0⁺, 3x is positive and approaches zero, so its reciprocal grows without bound.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 37 · PDF p. 111](assets/recommended/math/thomas-2-6-37-context-1.webp)

![Thomas §2.6 · Exercise 37 · PDF p. 111](assets/recommended/math/thomas-2-6-37-question.webp)
solution:
**Plan — we are going to…**

1. Determine the numerator sign near the target.
2. Determine the denominator sign on each required side.
3. Combine signs with the growing reciprocal magnitude.

**The trick**

The approach is from above zero, so the denominator is small and positive.

**What you need to know**

A nonzero numerator divided by a denominator tending to zero has unbounded magnitude. Determine the signs on the requested side before choosing positive or negative infinity.

**Step-by-step solution**

1. **Write the requested limit.** 

\\[
\\lim_{x\\to0^+}\\frac1{3x}.
\\]

2. **Check signs separately.** 

\\[
1>0.
\\]

 

\\[
3x\\to0^+.
\\]

3. **Combine.** The quotient has unbounded magnitude with the signs just found. The limit is 

\\[
+\\infty.
\\]

**Use this method again**

Use numerator sign and side-specific denominator sign; squares and even powers of odd roots may make both sides agree.

**Check**

At positive inputs 0.01 and 0.001 the values are about 33.3 and 333.3, positive and increasing without bound.
:::

:::mcq
id: thomas-2-6-39
title: Thomas §2.6 · Exercise 39
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 39 · PDF p. 111](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(3\\)
- [x] b | \\(-\\infty\\)
- [ ] c | \\(+\\infty\\)
- [ ] d | \\(0\\)
explanation: Approaching 2 from the left makes x−2 negative and arbitrarily close to zero. The positive numerator 3 therefore produces −∞.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 39 · PDF p. 111](assets/recommended/math/thomas-2-6-39-context-1.webp)

![Thomas §2.6 · Exercise 39 · PDF p. 111](assets/recommended/math/thomas-2-6-39-question.webp)
solution:
**Plan — we are going to…**

1. Determine the numerator sign near the target.
2. Determine the denominator sign on each required side.
3. Combine signs with the growing reciprocal magnitude.

**The trick**

An input just BELOW two makes the denominator negative.

**What you need to know**

A nonzero numerator divided by a denominator tending to zero has unbounded magnitude. Determine the signs on the requested side before choosing positive or negative infinity.

**Step-by-step solution**

1. **Write the requested limit.** 

\\[
\\lim_{x\\to2^-}\\frac3{x-2}.
\\]

2. **Check signs separately.** 

\\[
3>0.
\\]

 

\\[
x-2\\to0^-.
\\]

3. **Combine.** The quotient has unbounded magnitude with the signs just found. The limit is 

\\[
-\\infty.
\\]

**Use this method again**

Use numerator sign and side-specific denominator sign; squares and even powers of odd roots may make both sides agree.

**Check**

At inputs 1.99 and 1.999 the values are −300 and −3000, confirming negative divergence.
:::

:::mcq
id: thomas-2-6-41
title: Thomas §2.6 · Exercise 41
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 41 · PDF p. 111](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(+\\infty\\)
- [ ] b | \\(0\\)
- [ ] c | \\(-2\\)
- [x] d | \\(-\\infty\\)
explanation: As x→−8⁺, the numerator tends to −16 while the denominator tends to zero through positive values, giving −∞.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 41 · PDF p. 111](assets/recommended/math/thomas-2-6-41-context-1.webp)

![Thomas §2.6 · Exercise 41 · PDF p. 111](assets/recommended/math/thomas-2-6-41-question.webp)
solution:
**Plan — we are going to…**

1. Determine the numerator sign near the target.
2. Determine the denominator sign on each required side.
3. Combine signs with the growing reciprocal magnitude.

**The trick**

The numerator approaches minus sixteen, while the right-side denominator is positive.

**What you need to know**

A nonzero numerator divided by a denominator tending to zero has unbounded magnitude. Determine the signs on the requested side before choosing positive or negative infinity.

**Step-by-step solution**

1. **Write the requested limit.** 

\\[
\\lim_{x\\to-8^+}\\frac{2x}{x+8}.
\\]

2. **Check signs separately.** 

\\[
2x\\to-16<0.
\\]

 

\\[
x+8\\to0^+.
\\]

3. **Combine.** The quotient has unbounded magnitude with the signs just found. The limit is 

\\[
-\\infty.
\\]

**Use this method again**

Use numerator sign and side-specific denominator sign; squares and even powers of odd roots may make both sides agree.

**Check**

At input −7.999 the numerator is approximately −16 and denominator is 0.001, giving a large negative quotient.
:::

:::mcq
id: thomas-2-6-43
title: Thomas §2.6 · Exercise 43
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 43 · PDF p. 111](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(4\\)
- [x] b | \\(+\\infty\\)
- [ ] c | \\(-\\infty\\)
- [ ] d | \\(0\\)
explanation: (x−7)² is positive on both sides and tends to zero. Dividing the positive numerator 4 by it gives +∞.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 43 · PDF p. 111](assets/recommended/math/thomas-2-6-43-context-1.webp)

![Thomas §2.6 · Exercise 43 · PDF p. 111](assets/recommended/math/thomas-2-6-43-question.webp)
solution:
**Plan — we are going to…**

1. Determine the numerator sign near the target.
2. Determine the denominator sign on each required side.
3. Combine signs with the growing reciprocal magnitude.

**The trick**

The squared denominator is positive on BOTH sides, so there is one common infinite limit.

**What you need to know**

A nonzero numerator divided by a denominator tending to zero has unbounded magnitude. Determine the signs on the requested side before choosing positive or negative infinity.

**Step-by-step solution**

1. **Write the requested limit.** 

\\[
\\lim_{x\\to7}\\frac4{(x-7)^2}.
\\]

2. **Check signs separately.** 

\\[
4>0.
\\]

 

\\[
(x-7)^2\\to0^+.
\\]

3. **Combine.** The quotient has unbounded magnitude with the signs just found. The limit is 

\\[
+\\infty.
\\]

**Use this method again**

Use numerator sign and side-specific denominator sign; squares and even powers of odd roots may make both sides agree.

**Check**

At inputs 6.99 and 7.01 the denominator is 0.0001 and the quotient is forty thousand on either side.
:::

:::mcq
id: thomas-2-6-45
title: Thomas §2.6 · Exercise 45
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 45 · PDF p. 111](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | (a) −∞; (b) +∞
- [ ] b | (a) +∞; (b) +∞
- [ ] c | (a) 0; (b) 0
- [x] d | (a) +∞; (b) −∞
explanation: The cube root has the same sign as x. Thus 2/(3x^(1/3)) diverges positively from the right of 0 and negatively from the left.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 45 · PDF p. 111](assets/recommended/math/thomas-2-6-45-context-1.webp)

![Thomas §2.6 · Exercise 45 · PDF p. 111](assets/recommended/math/thomas-2-6-45-question.webp)
solution:
**Plan — we are going to…**

1. Read the real cube-root sign on each side.
2. Keep the positive numerator and coefficient.
3. State the two one-sided infinite limits.

**The trick**

The real cube root changes sign with its input. Unlike an even power, it does not make the two sides positive.

**What you need to know**

A nonzero numerator divided by a denominator tending to zero has unbounded magnitude. Determine the signs on the requested side before choosing positive or negative infinity. The real cube root is negative for negative inputs and positive for positive inputs.

**Step-by-step solution**

1. **Part (a), right approach.** 

\\[
3x^{1/3}\\longrightarrow0^+.
\\]

 Therefore 

\\[
\\lim_{x\\to0^+}\\frac2{3x^{1/3}}=+\\infty.
\\]

2. **Part (b), left approach.** 

\\[
3x^{1/3}\\longrightarrow0^-.
\\]

 Hence 

\\[
\\lim_{x\\to0^-}\\frac2{3x^{1/3}}=-\\infty.
\\]

3. **Compare.** The sides disagree, so no two-sided limit exists.

**Use this method again**

Keep real odd-root signs and analyze both approaches independently.

**Check**

At inputs plus or minus one-millionth, the denominator is plus or minus 0.03, giving approximately plus or minus 66.7. The reciprocal grows with these opposite signs.
:::

:::mcq
id: thomas-2-6-47
title: Thomas §2.6 · Exercise 47
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 47 · PDF p. 112](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(4\\)
- [x] b | \\(+\\infty\\)
- [ ] c | \\(-\\infty\\)
- [ ] d | \\(0\\)
explanation: x^(2/5)=(fifth-root(x))² is positive on both sides of zero and tends to zero, so the quotient diverges to +∞.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 47 · PDF p. 111](assets/recommended/math/thomas-2-6-47-context-1.webp)

![Thomas §2.6 · Exercise 47 · PDF p. 112](assets/recommended/math/thomas-2-6-47-question.webp)
solution:
**Plan — we are going to…**

1. Determine the numerator sign near the target.
2. Determine the denominator sign on each required side.
3. Combine signs with the growing reciprocal magnitude.

**The trick**

The denominator is the square of a real fifth root; it stays positive even for negative inputs.

**What you need to know**

A nonzero numerator divided by a denominator tending to zero has unbounded magnitude. Determine the signs on the requested side before choosing positive or negative infinity.

**Step-by-step solution**

1. **Write the requested limit.** 

\\[
\\lim_{x\\to0}\\frac4{x^{2/5}}.
\\]

2. **Check signs separately.** 

\\[
4>0.
\\]

 

\\[
x^{2/5}=(\\sqrt[5]x)^2\\to0^+.
\\]

3. **Combine.** The quotient has unbounded magnitude with the signs just found. The limit is 

\\[
+\\infty.
\\]

**Use this method again**

Use numerator sign and side-specific denominator sign; squares and even powers of odd roots may make both sides agree.

**Check**

At inputs plus or minus 0.00001 the fifth roots have magnitudes 0.1; squaring gives 0.01 and the quotient is four hundred on both sides.
:::

:::mcq
id: thomas-2-6-49
title: Thomas §2.6 · Exercise 49
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 49 · PDF p. 112](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(-\\infty\\)
- [ ] b | \\(0\\)
- [ ] c | \\(1\\)
- [x] d | \\(+\\infty\\)
explanation: As x approaches π/2 from below, sin x→1 while cos x→0⁺. Their quotient tends to +∞.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 49 · PDF p. 112](assets/recommended/math/thomas-2-6-49-question.webp)
solution:
**Plan — we are going to…**

1. Write tangent as sine over cosine.
2. Read sine and cosine signs just below pi over two.
3. Combine the finite numerator with the small denominator.

**The trick**

Just below pi over two, cosine is POSITIVE. Crossing to the other side would reverse the divergence.

**What you need to know**

A nonzero numerator divided by a denominator tending to zero has unbounded magnitude. Determine the signs on the requested side before choosing positive or negative infinity. Use radians and 

\\[
\\tan x=\\frac{\\sin x}{\\cos x}.
\\]

**Step-by-step solution**

1. **Numerator.** As the input approaches pi over two from below, 

\\[
\\sin x\\longrightarrow1.
\\]

2. **Denominator.** Cosine approaches zero through positive values: 

\\[
\\cos x\\longrightarrow0^+.
\\]

3. **Divide.** 

\\[
\\lim_{x\\to(\\pi/2)^-}\\tan x=+\\infty.
\\]

**Use this method again**

For trigonometric infinite limits, use reciprocal/quotient identities and the unit-circle signs on the requested side.

**Check**

At an angle just smaller than a right angle in the first quadrant, sine is near one and cosine small positive, so the tangent is large positive as required.
:::

:::mcq
id: thomas-2-6-51
title: Thomas §2.6 · Exercise 51
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 51 · PDF p. 112](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(1\\)
- [x] b | \\(-\\infty\\)
- [ ] c | \\(+\\infty\\)
- [ ] d | \\(0\\)
explanation: As θ→0⁻, sinθ approaches 0 through negative values, so cscθ→−∞. Adding 1 does not change the divergence.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 51 · PDF p. 112](assets/recommended/math/thomas-2-6-51-question.webp)
solution:
**Plan — we are going to…**

1. Express cosecant as reciprocal sine.
2. Determine the sine sign for small negative angles.
3. Add the finite constant after finding divergence.

**The trick**

Adding one cannot cancel a divergence. The sign is determined by sine on the left of zero.

**What you need to know**

A nonzero numerator divided by a denominator tending to zero has unbounded magnitude. Determine the signs on the requested side before choosing positive or negative infinity. Cosecant equals reciprocal sine.

**Step-by-step solution**

1. **Sine sign.** For small negative angles, 

\\[
\\sin\\theta\\longrightarrow0^-.
\\]

2. **Invert.** 

\\[
\\csc\\theta=\\frac1{\\sin\\theta}\\longrightarrow-\\infty.
\\]

3. **Add the constant.** 

\\[
\\lim_{\\theta\\to0^-}(1+\\csc\\theta)=-\\infty.
\\]

**Use this method again**

Find the unbounded reciprocal term first; a bounded additive term does not change its infinite limit.

**Check**

At angle −0.001 radians the expression is approximately −999.0002. It becomes more negative as the magnitude of the angle shrinks.
:::

:::mcq
id: thomas-2-6-53
title: Thomas §2.6 · Exercise 53
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 53 · PDF p. 112](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | (a) +∞; (b) +∞; (c) −∞; (d) −∞
- [ ] b | (a) −∞; (b) +∞; (c) +∞; (d) −∞
- [ ] c | All four limits are +∞.
- [x] d | (a) +∞; (b) −∞; (c) −∞; (d) +∞
explanation: Factor x²−4=(x−2)(x+2). At 2⁺ the product is positive, at 2⁻ negative, at −2⁺ negative, and at −2⁻ positive. The numerator is 1, giving the four signed infinities.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 53 · PDF p. 112](assets/recommended/math/thomas-2-6-53-context-1.webp)

![Thomas §2.6 · Exercise 53 · PDF p. 112](assets/recommended/math/thomas-2-6-53-question.webp)
solution:
**Plan — we are going to…**

1. Factor the difference of squares.
2. Make a sign table near the two denominator zeros.
3. Report each side in the original part order.

**The trick**

The factor that tends to zero changes sign, but the OTHER factor has different signs near positive two and negative two.

**What you need to know**

A nonzero numerator divided by a denominator tending to zero has unbounded magnitude. Determine the signs on the requested side before choosing positive or negative infinity.

**Step-by-step solution**

1. **Factor the denominator.** 

\\[
x^2-4=(x-2)(x+2).
\\]

2. **Part (a), right of two.** Both factors are positive and the first shrinks to zero. 

\\[
\\lim_{x\\to2^+}\\frac1{x^2-4}=+\\infty.
\\]

3. **Part (b), left of two.** The first factor is negative, the second positive. 

\\[
\\lim_{x\\to2^-}\\frac1{x^2-4}=-\\infty.
\\]

4. **Part (c), right of minus two.** The first factor is negative and the second positive. 

\\[
\\lim_{x\\to-2^+}\\frac1{x^2-4}=-\\infty.
\\]

5. **Part (d), left of minus two.** Both factors are negative. 

\\[
\\lim_{x\\to-2^-}\\frac1{x^2-4}=+\\infty.
\\]

**Use this method again**

Factor each denominator and record the signs of every factor separately near each zero.

**Check**

The whole function is even. Reflecting the approach to positive two from the right gives the approach to negative two from the left; both limits are positive infinity, confirming the paired signs.
:::

:::mcq
id: thomas-2-6-55
title: Thomas §2.6 · Exercise 55
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 55 · PDF p. 112](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | (a) 0; (b) 0; (c) 1; (d) 1
- [x] b | (a) −∞; (b) +∞; (c) 0; (d) 3/2
- [ ] c | (a) +∞; (b) −∞; (c) 0; (d) 3/2
- [ ] d | (a) −∞; (b) +∞; (c) 2; (d) −1/2
explanation: Near zero the term −1/x dominates x²/2, producing −∞ from the right and +∞ from the left. At x=∛2, x³=2 makes x²/2=1/x, so the limit is 0. At x=−1 the value is 1/2+1=3/2.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 55 · PDF p. 112](assets/recommended/math/thomas-2-6-55-context-1.webp)

![Thomas §2.6 · Exercise 55 · PDF p. 112](assets/recommended/math/thomas-2-6-55-question.webp)
solution:
**Plan — we are going to…**

1. Separate the bounded quadratic from the reciprocal near zero.
2. Evaluate the two infinite one-sided limits.
3. Substitute at the two nonzero targets.

**The trick**

The reciprocal term controls behavior near zero; at nonzero targets ordinary substitution is valid.

**What you need to know**

A nonzero numerator divided by a denominator tending to zero has unbounded magnitude. Determine the signs on the requested side before choosing positive or negative infinity. For a sum, a bounded term cannot cancel an unbounded one.

**Step-by-step solution**

1. **Write the expression.** 

\\[
\\frac{x^2}2-\\frac1x.
\\]

2. **Part (a), zero from above.** The quadratic tends to zero and the negative reciprocal tends to negative infinity. The answer is 

\\[
-\\infty.
\\]

3. **Part (b), zero from below.** The negative reciprocal is positive and unbounded. The answer is 

\\[
+\\infty.
\\]

4. **Part (c), cube root of two.** Let the target be 

\\[
r=\\sqrt[3]2.
\\]

 Then 

\\[
r^3=2\\quad\\Longrightarrow\\quad\\frac{r^2}2=\\frac1r.
\\]

 The difference, and hence the limit, is zero.

5. **Part (d), minus one.** 

\\[
\\frac{(-1)^2}2-\\frac1{-1}=\\frac12+1=\\frac32.
\\]

**Use this method again**

Use dominance only at singular inputs; at regular nonzero points evaluate directly and simplify exactly.

**Check**

Multiplying the expression by twice the nonzero input gives 

\\[
2x\\left(\\frac{x^2}2-\\frac1x\\right)=x^3-2.
\\]

 This verifies the zero at the cube root of two.
:::

:::mcq
id: thomas-2-6-57
title: Thomas §2.6 · Exercise 57
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 57 · PDF p. 112](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | (a) +∞; (b) DNE; (c) DNE; (d) DNE; (e) DNE
- [ ] b | (a) −∞; (b) 1/2; (c) 1/2; (d) 1/2; (e) +∞
- [ ] c | (a) 0; (b) 0; (c) 0; (d) 0; (e) 0
- [x] d | (a) −∞; (b) 1/4; (c) 1/4; (d) 1/4; (e) −∞
explanation: Cancel x−2 to obtain (x−1)/x² for x≠0,2. At 2 this tends to 1/4 from both sides. At 0 the numerator tends to −1 and the squared denominator to 0⁺, giving −∞ from both sides and hence the infinite two-sided limit −∞.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 57 · PDF p. 112](assets/recommended/math/thomas-2-6-57-context-1.webp)

![Thomas §2.6 · Exercise 57 · PDF p. 112](assets/recommended/math/thomas-2-6-57-question.webp)
solution:
**Plan — we are going to…**

1. Factor numerator and denominator.
2. Cancel the common factor away from its zero.
3. Distinguish the removable hole at two from the vertical divergence at zero.

**The trick**

Cancelling the factor at two removes that singularity from the limit, but the squared denominator at zero remains.

**What you need to know**

Cancellation is valid for neighboring inputs where the cancelled factor is nonzero. Infinite two-sided limits exist when both one-sided limits have the same sign of infinity.

**Step-by-step solution**

1. **Factor and simplify.** 

\\[
\\frac{x^2-3x+2}{x^3-2x^2}=\\frac{(x-1)(x-2)}{x^2(x-2)}=\\frac{x-1}{x^2}\\quad(x\\ne0,2).
\\]

2. **Part (a), zero from above.** The numerator tends to minus one and the squared denominator to positive zero, so the limit is negative infinity.

3. **Parts (b), (c), (d), approaches to two.** The simplified formula is continuous there: 

\\[
\\lim_{x\\to2^+}\\frac{x-1}{x^2}=\\lim_{x\\to2^-}\\frac{x-1}{x^2}=\\lim_{x\\to2}\\frac{x-1}{x^2}=\\frac14.
\\]

4. **Part (e), two-sided behavior at zero.** From below, the same squared denominator is positive and tends to zero while the numerator stays negative. Both sides tend to negative infinity: 

\\[
\\lim_{x\\to0}\\frac{x^2-3x+2}{x^3-2x^2}=-\\infty.
\\]

**Use this method again**

Factor first, then classify each remaining denominator zero separately from cancelled holes.

**Check**

At inputs plus or minus 0.001 the simplified numerator is approximately minus one and denominator 0.000001, giving a large negative value on both sides. At two the simplified value is finite.
:::

:::mcq
id: thomas-2-6-59
title: Thomas §2.6 · Exercise 59
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 59 · PDF p. 112](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | Both are −∞.
- [x] b | (a) −∞; (b) +∞
- [ ] c | (a) +∞; (b) −∞
- [ ] d | (a) 2; (b) 2
explanation: The cube root t^(1/3) changes sign with t. Therefore −3/t^(1/3) diverges to −∞ from the right and +∞ from the left; adding 2 does not change this.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 59 · PDF p. 112](assets/recommended/math/thomas-2-6-59-question.webp)
solution:
**Plan — we are going to…**

1. Keep the real cube-root sign.
2. Invert it and multiply by minus three.
3. Add the bounded constant two.

**The trick**

The negative numerator reverses the reciprocal cube-root signs: the right limit is negative infinity.

**What you need to know**

A nonzero numerator divided by a denominator tending to zero has unbounded magnitude. Determine the signs on the requested side before choosing positive or negative infinity.

**Step-by-step solution**

1. **Part (a), right side.** 

\\[
t^{1/3}\\longrightarrow0^+\\quad\\Longrightarrow\\quad-\\frac3{t^{1/3}}\\longrightarrow-\\infty.
\\]

 Therefore the expression two minus this positive reciprocal magnitude tends to negative infinity.

2. **Part (b), left side.** 

\\[
t^{1/3}\\longrightarrow0^-\\quad\\Longrightarrow\\quad-\\frac3{t^{1/3}}\\longrightarrow+\\infty.
\\]

 Adding two leaves positive infinity.

3. **State the limits.** 

\\[
\\lim_{t\\to0^+}\\left(2-\\frac3{t^{1/3}}\\right)=-\\infty,\\qquad\\lim_{t\\to0^-}\\left(2-\\frac3{t^{1/3}}\\right)=+\\infty.
\\]

**Use this method again**

Find the odd-root sign, apply the coefficient sign, then ignore only the bounded additive correction.

**Check**

For inputs plus and minus one-millionth, the cube roots are plus and minus 0.01. The full values are −298 and 302, confirming the two divergence directions.
:::

:::mcq
id: thomas-2-6-61
title: Thomas §2.6 · Exercise 61
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 61 · PDF p. 112](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | All four limits are −∞.
- [ ] b | (a) +∞; (b) −∞; (c) +∞; (d) −∞
- [ ] c | All four limits are 0.
- [x] d | All four limits are +∞.
explanation: Both denominators are squares of real cube roots. Each reciprocal is nonnegative. At 0 the first term diverges to +∞ on both sides; at 1 the second term does. The other term stays finite and positive.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 61 · PDF p. 112](assets/recommended/math/thomas-2-6-61-question.webp)
solution:
**Plan — we are going to…**

1. Interpret the two-thirds powers as squared cube roots.
2. Identify which term diverges at zero.
3. Repeat at one and check whether the other term stays finite.

**The trick**

Both singular terms are nonnegative on BOTH sides; they cannot cancel each other.

**What you need to know**

For real inputs, 

\\[
x^{2/3}=(\\sqrt[3]x)^2.
\\]

 It is positive away from zero. A positive reciprocal tends to positive infinity when its denominator tends to zero.

**Step-by-step solution**

1. **Write the two terms.** 

\\[
f(x)=\\frac1{x^{2/3}}+\\frac2{(x-1)^{2/3}}.
\\]

2. **Parts (a), (b), near zero.** The first denominator tends to positive zero on either side. The second term tends to two. Thus 

\\[
\\lim_{x\\to0^+}f(x)=\\lim_{x\\to0^-}f(x)=+\\infty.
\\]

3. **Parts (c), (d), near one.** The first term tends to one. The second denominator tends to positive zero on either side. Hence 

\\[
\\lim_{x\\to1^+}f(x)=\\lim_{x\\to1^-}f(x)=+\\infty.
\\]

**Use this method again**

For a sum of singular terms, inspect the sign and finite/infinite status of each term at each target.

**Check**

Every term is positive wherever defined. Near either singular input, one term alone grows arbitrarily large, so their sum must also grow positively; cancellation is impossible.
:::

:::mcq
id: thomas-2-6-63
title: Thomas §2.6 · Exercise 63
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 63 · PDF p. 112](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which asymptotes belong to the graph required in the original exercise?
- [ ] a | Vertical x=0; no horizontal asymptote.
- [x] b | Vertical x=1; horizontal y=0.
- [ ] c | Vertical x=−1; horizontal y=0.
- [ ] d | Vertical x=2; horizontal y=0.
explanation: y=1/(x−1) is a right shift of 1/x. Its vertical asymptote is x=1 and horizontal asymptote y=0; the branches are negative to the left and positive to the right. It passes through (0,−1), has no x-intercept and decreases on each side. The course excludes the dominant-term request.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 63 · PDF p. 112](assets/recommended/math/thomas-2-6-63-context-1.webp)

![Thomas §2.6 · Exercise 63 · PDF p. 112](assets/recommended/math/thomas-2-6-63-question.webp)
solution:
**Plan — we are going to…**

1. Rewrite the quotient as a shifted reciprocal.
2. Find its vertical and horizontal asymptotes.
3. Plot intercepts and use one-sided signs to draw both branches.

**The trick**

A denominator zero locates the vertical line, while the constant outside the reciprocal sets the horizontal line. Read branch orientation from the reciprocal coefficient.

**What you need to know**

For a shifted reciprocal, 

\\[
y=b+\\frac{k}{x-a},\\quad k\\ne0,
\\]

 the vertical asymptote is the excluded input and the horizontal asymptote is the constant height. The sign of the reciprocal correction tells which side of that height contains each branch.

**Step-by-step solution**

1. **Rewrite.** 

\\[
f(x)=\\frac1{x-1}=0+\\frac1{x-1}.
\\]

2. **Vertical behavior.** The denominator vanishes at one without cancellation. The vertical asymptote is 

\\[
x=1.
\\]

 The one-sided limits are 

\\[
\\lim_{x\\to1^-}f(x)=-\\infty,\\qquad\\lim_{x\\to1^+}f(x)=+\\infty.
\\]

3. **Horizontal behavior.** The reciprocal correction tends to zero at either infinite end. Hence the horizontal asymptote is 

\\[
y=0.
\\]

4. **Plot and sketch.** 

\\[
f(0)=-1.
\\]

 There is no horizontal-axis intercept because the numerator is one. Draw a negative left branch and positive right branch, both decreasing on their separate intervals.

**Use this method again**

Reduce a simple rational graph to a shifted reciprocal; draw its asymptotes first, then anchor each branch with a point and the sign of its correction.

**Check**

At inputs zero and two the outputs are minus one and one, giving one anchor on each side of the vertical asymptote.
:::

:::mcq
id: thomas-2-6-64
title: Thomas §2.6 · Exercise 64
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 64 · PDF p. 112](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which asymptotes belong to the graph required in the original exercise?
- [x] a | Vertical x=−1; horizontal y=0.
- [ ] b | Vertical x=1; horizontal y=0.
- [ ] c | Vertical x=0; horizontal y=0.
- [ ] d | Vertical x=2; no horizontal asymptote.
explanation: y=1/(x+1) shifts 1/x left by one. Asymptotes are x=−1 and y=0, with a negative left branch and positive right branch. The y-intercept is 1, no x-intercept exists, and both branches decrease. The course excludes the dominant-term request.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 64 · PDF p. 112](assets/recommended/math/thomas-2-6-64-context-1.webp)

![Thomas §2.6 · Exercise 64 · PDF p. 112](assets/recommended/math/thomas-2-6-64-question.webp)
solution:
**Plan — we are going to…**

1. Rewrite the quotient as a shifted reciprocal.
2. Find its vertical and horizontal asymptotes.
3. Plot intercepts and use one-sided signs to draw both branches.

**The trick**

A denominator zero locates the vertical line, while the constant outside the reciprocal sets the horizontal line. Read branch orientation from the reciprocal coefficient.

**What you need to know**

For a shifted reciprocal, 

\\[
y=b+\\frac{k}{x-a},\\quad k\\ne0,
\\]

 the vertical asymptote is the excluded input and the horizontal asymptote is the constant height. The sign of the reciprocal correction tells which side of that height contains each branch.

**Step-by-step solution**

1. **Rewrite.** 

\\[
f(x)=\\frac1{x+1}=0+\\frac1{x+1}.
\\]

2. **Vertical behavior.** The denominator vanishes at minus one without cancellation. The vertical asymptote is 

\\[
x=-1.
\\]

 The one-sided limits are 

\\[
\\lim_{x\\to-1^-}f(x)=-\\infty,\\qquad\\lim_{x\\to-1^+}f(x)=+\\infty.
\\]

3. **Horizontal behavior.** The reciprocal correction tends to zero at either infinite end. Hence the horizontal asymptote is 

\\[
y=0.
\\]

4. **Plot and sketch.** 

\\[
f(0)=1.
\\]

 There is no horizontal-axis intercept. Draw a negative branch to the left of minus one and a positive branch to its right; each decreases toward its asymptotic direction.

**Use this method again**

Reduce a simple rational graph to a shifted reciprocal; draw its asymptotes first, then anchor each branch with a point and the sign of its correction.

**Check**

At inputs minus two and zero the outputs are minus one and one. These place the two branches on the correct sides.
:::

:::mcq
id: thomas-2-6-65
title: Thomas §2.6 · Exercise 65
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 65 · PDF p. 112](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which asymptotes belong to the graph required in the original exercise?
- [ ] a | Vertical x=2; horizontal y=0.
- [ ] b | Vertical x=−4; horizontal y=0.
- [ ] c | Vertical x=0; no horizontal asymptote.
- [x] d | Vertical x=−2; horizontal y=0.
explanation: y=(1/2)/(x+2) has vertical asymptote x=−2 and horizontal asymptote y=0. Its left branch is negative and its right branch positive; it passes through (0,1/4), has no x-intercept, and decreases on each side. The course excludes the dominant-term request.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 65 · PDF p. 112](assets/recommended/math/thomas-2-6-65-context-1.webp)

![Thomas §2.6 · Exercise 65 · PDF p. 112](assets/recommended/math/thomas-2-6-65-question.webp)
solution:
**Plan — we are going to…**

1. Rewrite the quotient as a shifted reciprocal.
2. Find its vertical and horizontal asymptotes.
3. Plot intercepts and use one-sided signs to draw both branches.

**The trick**

A denominator zero locates the vertical line, while the constant outside the reciprocal sets the horizontal line. Read branch orientation from the reciprocal coefficient.

**What you need to know**

For a shifted reciprocal, 

\\[
y=b+\\frac{k}{x-a},\\quad k\\ne0,
\\]

 the vertical asymptote is the excluded input and the horizontal asymptote is the constant height. The sign of the reciprocal correction tells which side of that height contains each branch.

**Step-by-step solution**

1. **Rewrite.** 

\\[
f(x)=\\frac1{2x+4}=\\frac{1/2}{x+2}.
\\]

2. **Vertical behavior.** The denominator vanishes at minus two without cancellation. The vertical asymptote is 

\\[
x=-2.
\\]

 The one-sided limits are 

\\[
\\lim_{x\\to-2^-}f(x)=-\\infty,\\qquad\\lim_{x\\to-2^+}f(x)=+\\infty.
\\]

3. **Horizontal behavior.** The reciprocal correction tends to zero at either infinite end. Hence the horizontal asymptote is 

\\[
y=0.
\\]

4. **Plot and sketch.** 

\\[
f(0)=\\frac14.
\\]

 There is no horizontal-axis intercept. Draw a negative left branch and positive right branch, each decreasing; the factor one-half compresses the standard reciprocal vertically.

**Use this method again**

Reduce a simple rational graph to a shifted reciprocal; draw its asymptotes first, then anchor each branch with a point and the sign of its correction.

**Check**

At inputs minus three and minus one the outputs are minus one-half and one-half. They verify the vertical compression and branch signs.
:::

:::mcq
id: thomas-2-6-66
title: Thomas §2.6 · Exercise 66
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 66 · PDF p. 112](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which asymptotes belong to the graph required in the original exercise?
- [ ] a | Vertical x=0; horizontal y=0.
- [ ] b | Vertical x=1; no horizontal asymptote.
- [x] c | Vertical x=3; horizontal y=0.
- [ ] d | Vertical x=−3; horizontal y=0.
explanation: y=−3/(x−3) has vertical asymptote x=3 and horizontal asymptote y=0. The left branch is positive and the right negative. It passes through (0,1), has no x-intercept and increases on each side. The course excludes the dominant-term request.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 66 · PDF p. 112](assets/recommended/math/thomas-2-6-66-context-1.webp)

![Thomas §2.6 · Exercise 66 · PDF p. 112](assets/recommended/math/thomas-2-6-66-question.webp)
solution:
**Plan — we are going to…**

1. Rewrite the quotient as a shifted reciprocal.
2. Find its vertical and horizontal asymptotes.
3. Plot intercepts and use one-sided signs to draw both branches.

**The trick**

A denominator zero locates the vertical line, while the constant outside the reciprocal sets the horizontal line. Read branch orientation from the reciprocal coefficient.

**What you need to know**

For a shifted reciprocal, 

\\[
y=b+\\frac{k}{x-a},\\quad k\\ne0,
\\]

 the vertical asymptote is the excluded input and the horizontal asymptote is the constant height. The sign of the reciprocal correction tells which side of that height contains each branch.

**Step-by-step solution**

1. **Rewrite.** 

\\[
f(x)=-\\frac3{x-3}=0+\\frac{-3}{x-3}.
\\]

2. **Vertical behavior.** The denominator vanishes at three without cancellation. The vertical asymptote is 

\\[
x=3.
\\]

 The one-sided limits are 

\\[
\\lim_{x\\to3^-}f(x)=+\\infty,\\qquad\\lim_{x\\to3^+}f(x)=-\\infty.
\\]

3. **Horizontal behavior.** The reciprocal correction tends to zero at either infinite end. Hence the horizontal asymptote is 

\\[
y=0.
\\]

4. **Plot and sketch.** 

\\[
f(0)=1.
\\]

 The negative numerator reverses the usual reciprocal branch signs. There is no horizontal-axis intercept. Draw a positive increasing left branch and a negative increasing right branch.

**Use this method again**

Reduce a simple rational graph to a shifted reciprocal; draw its asymptotes first, then anchor each branch with a point and the sign of its correction.

**Check**

At inputs two and four the outputs are three and minus three. These anchors verify the sign reversal.
:::

:::mcq
id: thomas-2-6-67
title: Thomas §2.6 · Exercise 67
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 67 · PDF p. 112](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which asymptotes belong to the graph required in the original exercise?
- [ ] a | Vertical x=0; no horizontal asymptote.
- [x] b | Vertical x=−2; horizontal y=1.
- [ ] c | Vertical x=2; horizontal y=1.
- [ ] d | Vertical x=−3; horizontal y=1.
explanation: y=1+1/(x+2) has asymptotes x=−2 and y=1. Its intercepts are (−3,0) and (0,3/2). It lies below the horizontal asymptote on the left branch and above on the right, and decreases on both branches. The course excludes the dominant-term request.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 67 · PDF p. 112](assets/recommended/math/thomas-2-6-67-context-1.webp)

![Thomas §2.6 · Exercise 67 · PDF p. 112](assets/recommended/math/thomas-2-6-67-question.webp)
solution:
**Plan — we are going to…**

1. Rewrite the quotient as a shifted reciprocal.
2. Find its vertical and horizontal asymptotes.
3. Plot intercepts and use one-sided signs to draw both branches.

**The trick**

A denominator zero locates the vertical line, while the constant outside the reciprocal sets the horizontal line. Read branch orientation from the reciprocal coefficient.

**What you need to know**

For a shifted reciprocal, 

\\[
y=b+\\frac{k}{x-a},\\quad k\\ne0,
\\]

 the vertical asymptote is the excluded input and the horizontal asymptote is the constant height. The sign of the reciprocal correction tells which side of that height contains each branch.

**Step-by-step solution**

1. **Rewrite.** 

\\[
f(x)=\\frac{x+3}{x+2}=1+\\frac1{x+2}.
\\]

2. **Vertical behavior.** The denominator vanishes at minus two without cancellation. The vertical asymptote is 

\\[
x=-2.
\\]

 The one-sided limits are 

\\[
\\lim_{x\\to-2^-}f(x)=-\\infty,\\qquad\\lim_{x\\to-2^+}f(x)=+\\infty.
\\]

3. **Horizontal behavior.** The reciprocal correction tends to zero at either infinite end. Hence the horizontal asymptote is 

\\[
y=1.
\\]

4. **Plot and sketch.** 

\\[
f(0)=\\frac32,\\qquad f(-3)=0.
\\]

 The numerator zero gives the horizontal-axis intercept at minus three. Draw the left branch below the horizontal asymptote and the right branch above it; each decreases.

**Use this method again**

Reduce a simple rational graph to a shifted reciprocal; draw its asymptotes first, then anchor each branch with a point and the sign of its correction.

**Check**

At input minus three, the value zero lies below the horizontal asymptote one. At zero, the value three-halves lies above it, checking both branch placements.
:::

:::mcq
id: thomas-2-6-68
title: Thomas §2.6 · Exercise 68
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 68 · PDF p. 112](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which asymptotes belong to the graph required in the original exercise?
- [x] a | Vertical x=−1; horizontal y=2.
- [ ] b | Vertical x=1; horizontal y=2.
- [ ] c | Vertical x=0; horizontal y=2.
- [ ] d | Vertical x=−2; no horizontal asymptote.
explanation: y=2−2/(x+1) has asymptotes x=−1 and y=2 and passes through the origin. It lies above y=2 to the left and below y=2 to the right, increasing on both branches. The course excludes the dominant-term request.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 68 · PDF p. 112](assets/recommended/math/thomas-2-6-68-context-1.webp)

![Thomas §2.6 · Exercise 68 · PDF p. 112](assets/recommended/math/thomas-2-6-68-question.webp)
solution:
**Plan — we are going to…**

1. Rewrite the quotient as a shifted reciprocal.
2. Find its vertical and horizontal asymptotes.
3. Plot intercepts and use one-sided signs to draw both branches.

**The trick**

A denominator zero locates the vertical line, while the constant outside the reciprocal sets the horizontal line. Read branch orientation from the reciprocal coefficient.

**What you need to know**

For a shifted reciprocal, 

\\[
y=b+\\frac{k}{x-a},\\quad k\\ne0,
\\]

 the vertical asymptote is the excluded input and the horizontal asymptote is the constant height. The sign of the reciprocal correction tells which side of that height contains each branch.

**Step-by-step solution**

1. **Rewrite.** 

\\[
f(x)=\\frac{2x}{x+1}=2-\\frac2{x+1}.
\\]

2. **Vertical behavior.** The denominator vanishes at minus one without cancellation. The vertical asymptote is 

\\[
x=-1.
\\]

 The one-sided limits are 

\\[
\\lim_{x\\to-1^-}f(x)=+\\infty,\\qquad\\lim_{x\\to-1^+}f(x)=-\\infty.
\\]

3. **Horizontal behavior.** The reciprocal correction tends to zero at either infinite end. Hence the horizontal asymptote is 

\\[
y=2.
\\]

4. **Plot and sketch.** 

\\[
f(0)=0.
\\]

 Both axis intercepts are the origin. Draw the left branch above the horizontal asymptote two and the right branch below it; each increases on its own side.

**Use this method again**

Reduce a simple rational graph to a shifted reciprocal; draw its asymptotes first, then anchor each branch with a point and the sign of its correction.

**Check**

At input minus two the output is four, above the asymptote. At zero the output is zero, below it. These confirm the reversed reciprocal orientation.
:::

:::mcq
id: thomas-2-6-69
title: Thomas §2.6 · Exercise 69
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 69 · PDF p. 112](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which function supplies a valid example for the required sketch?
- [ ] a | \\(f(x)=x\\)
- [ ] b | \\(f(x)=2x/(1+x^2)\\)
- [ ] c | \\(f(x)=1/(1+x^2)\\)
- [x] d | \\(f(x)=\\frac{x}{\\sqrt{1+x^2}}+\\frac{(4-\\sqrt2)x}{1+x^2}\\)
explanation: The first expression is odd and has f(0)=0, f(1)=1/√2+(4−√2)/2=2 and f(−1)=−2. Its second term tends to zero at both ends, while x/√(1+x²) tends to −1 and 1. Thus its graph passes through all three marked points and has the required horizontal end behavior. A sketch of any graph with these properties is valid.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 69 · PDF p. 112](assets/recommended/math/thomas-2-6-69-context-1.webp)

![Thomas §2.6 · Exercise 69 · PDF p. 112](assets/recommended/math/thomas-2-6-69-question.webp)
solution:
**Plan — we are going to…**

1. Construct a bounded term with the required opposite tail heights.
2. Add a term that vanishes at infinity but adjusts the marked points.
3. Check all three values and both tails before sketching.

**The trick**

Many sketches are valid. The extra rational term changes the finite point values without changing the two horizontal tail limits.

**What you need to know**

An odd function has opposite outputs at opposite inputs. A term tending to zero at both infinite ends can adjust finite values without changing horizontal asymptotes.

**Step-by-step solution**

1. **Choose a valid example.** 

\\[
f(x)=\\frac{x}{\\sqrt{1+x^2}}+\\frac{(4-\\sqrt2)x}{1+x^2}.
\\]

 Both denominators are nonzero for every real input.

2. **Check the origin and positive point.** 

\\[
f(0)=0.
\\]

 At one, 

\\[
f(1)=\\frac1{\\sqrt2}+\\frac{4-\\sqrt2}{2}=\\frac{\\sqrt2}{2}+2-\\frac{\\sqrt2}{2}=2.
\\]

3. **Check the negative point.** Each numerator is odd and each denominator even, so the whole function is odd. Therefore 

\\[
f(-1)=-f(1)=-2.
\\]

4. **Check the tails.** For the first term, 

\\[
\\frac{x}{\\sqrt{1+x^2}}=\\frac{x}{|x|}\\frac1{\\sqrt{1+1/x^2}}.
\\]

 It tends to one at positive infinity and minus one at negative infinity. The second term tends to zero after division by the square of the input.

5. **Sketch.** Draw a continuous odd curve through the three checked points, with right tail approaching height one and left tail approaching height minus one. It may cross its horizontal asymptotes.

**Use this method again**

Build a convenient tail function, then use vanishing correction terms to fit finite points; verify every condition separately.

**Check**

The three point substitutions and two tail calculations establish all five original conditions. The formula is one construction; the problem does not require uniqueness or forbid overshooting a horizontal asymptote.
:::

:::mcq
id: thomas-2-6-71
title: Thomas §2.6 · Exercise 71
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 71 · PDF p. 112](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which function supplies a valid example for the required sketch?
- [ ] a | \\(f(x)=x^2-1\\) with f(0)=0.
- [x] b | \\(f(x)=1/(1-x^2)\\) for x≠0,±1, with f(0)=0.
- [ ] c | \\(f(x)=1/(x^2-1)\\) for x≠0,±1, with f(0)=0.
- [ ] d | \\(f(x)=1/(1+x^2)\\) with f(0)=0.
explanation: The first graph has horizontal asymptote y=0 and vertical asymptotes x=±1. It tends to +∞ on the inside of each asymptote and −∞ on the outside, exactly as specified. Remove its point (0,1) and put the filled point at (0,0). These changes leave all required limits intact.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 71 · PDF p. 112](assets/recommended/math/thomas-2-6-71-context-1.webp)

![Thomas §2.6 · Exercise 71 · PDF p. 112](assets/recommended/math/thomas-2-6-71-question.webp)
solution:
**Plan — we are going to…**

1. Choose a rational graph with vertical asymptotes at plus and minus one.
2. Check the signs of its four one-sided divergences.
3. Replace its origin value without changing nearby limits.

**The trick**

The assigned value at zero is separate from the neighboring curve. An isolated redefinition leaves all required infinite-end and vertical-asymptote limits unchanged.

**What you need to know**

A rational function approaches zero at both infinite ends when its numerator degree is smaller. Factor the denominator to determine signs around its zeros.

**Step-by-step solution**

1. **Choose the ordinary curve.** 

\\[
g(x)=\\frac1{1-x^2}=\\frac1{(1-x)(1+x)}\\quad(x\\ne-1,1).
\\]

 The denominator is positive between the two singular inputs and negative outside them.

2. **Approach the vertical lines from inside.** 

\\[
\\lim_{x\\to1^-}g(x)=+\\infty,\\qquad\\lim_{x\\to-1^+}g(x)=+\\infty.
\\]

3. **Approach from outside.** 

\\[
\\lim_{x\\to1^+}g(x)=-\\infty,\\qquad\\lim_{x\\to-1^-}g(x)=-\\infty.
\\]

4. **Check the tails.** 

\\[
\\lim_{x\\to\\pm\\infty}g(x)=0.
\\]

5. **Set the required point and sketch.** Define the function to equal this curve at nonzero permitted inputs, but set 

\\[
f(0)=0.
\\]

 Draw an open point at 

\\[
(0,1)
\\]

 and a filled point at 

\\[
(0,0).
\\]

 Use vertical asymptotes at minus one and one, and horizontal asymptote at height zero.

**Use this method again**

Factor a candidate denominator, test every one-sided sign, and handle isolated assigned values with open and filled points.

**Check**

The denominator approaches positive zero on the inner sides and negative zero on the outer sides, producing exactly the four required infinities. The new value at zero satisfies the remaining condition without moving those branches.
:::

:::mcq
id: thomas-2-6-73
title: Thomas §2.6 · Exercise 73
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 73 · PDF p. 112](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which function satisfies all conditions and provides the requested graph?
- [ ] a | \\(f(x)=1/(x-2)\\)
- [ ] b | \\(f(x)=(x-2)^2\\)
- [ ] c | \\(f(x)=-1/(x-2)^2\\)
- [x] d | \\(f(x)=1/(x-2)^2\\)
explanation: The graph of 1/(x−2)² has positive branches, tends to zero as x→±∞ and tends to +∞ from both sides of x=2. It is one valid answer; uniqueness is not required.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 73 · PDF p. 112](assets/recommended/math/thomas-2-6-73-context-1.webp)

![Thomas §2.6 · Exercise 73 · PDF p. 112](assets/recommended/math/thomas-2-6-73-question.webp)
solution:
**Plan — we are going to…**

1. Choose a positive reciprocal-square curve centered at two.
2. Check both sides of the vertical singularity.
3. Check both infinite tails and sketch.

**The trick**

A squared denominator makes both branches positive and forces the same positive divergence on both sides.

**What you need to know**

The square of a nonzero real number is positive. A reciprocal square approaches zero for large magnitude inputs and grows without bound near its zero denominator.

**Step-by-step solution**

1. **Choose a function.** 

\\[
f(x)=\\frac1{(x-2)^2}.
\\]

2. **Check the singular input.** On either side of two, the squared denominator tends to positive zero. Thus 

\\[
\\lim_{x\\to2^-}f(x)=\\lim_{x\\to2^+}f(x)=+\\infty.
\\]

3. **Check the tails.** The denominator grows without bound at both ends, giving 

\\[
\\lim_{x\\to\\pm\\infty}f(x)=0.
\\]

4. **Sketch.** Draw vertical asymptote at two and horizontal asymptote at zero. Both branches lie above the horizontal axis; sample points are 

\\[
(1,1),\\qquad(3,1).
\\]

**Use this method again**

Use a reciprocal square when both one-sided singular limits must be positive; translate its center to the required input.

**Check**

The candidate satisfies all three stated limits, and its symmetry about the vertical line through two explains why the two singular approaches agree.
:::

:::mcq
id: thomas-2-6-75
title: Thomas §2.6 · Exercise 75
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 75 · PDF p. 112](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which piecewise function satisfies every given limit?
- [ ] a | h(x)=1 for every x.
- [x] b | h(x)=−1 for x<0 and h(x)=1 for x≥0.
- [ ] c | h(x)=1 for x<0 and h(x)=−1 for x≥0.
- [ ] d | h(x)=−1 for every x.
explanation: Two horizontal rays suffice: y=−1 to the left of0, and y=1 to the right. The value at0 may be chosen freely. This gives end limits−1 and1 and the specified left/right limits at0.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 75 · PDF p. 112](assets/recommended/math/thomas-2-6-75-context-1.webp)

![Thomas §2.6 · Exercise 75 · PDF p. 112](assets/recommended/math/thomas-2-6-75-question.webp)
solution:
**Plan — we are going to…**

1. Use constant branches matching the left and right desired heights.
2. Join the branches at the original target zero.
3. Check both one-sided limits and both tail limits.

**The trick**

The original exercise gives the one-sided limits at ZERO. A jump at three would not satisfy those conditions.

**What you need to know**

A constant branch has that same value as its limit anywhere approached within the branch. The value assigned at a single join does not change one-sided limits.

**Step-by-step solution**

1. **Choose the function.** 

\\[
h(x)=\\begin{cases}-1,&x<0,\\\\1,&x\\ge0.\\end{cases}
\\]

2. **Check the left side and tail.** Every negative input has output minus one, so 

\\[
\\lim_{x\\to0^-}h(x)=-1,\\qquad\\lim_{x\\to-\\infty}h(x)=-1.
\\]

3. **Check the right side and tail.** Every positive input has output one, so 

\\[
\\lim_{x\\to0^+}h(x)=1,\\qquad\\lim_{x\\to+\\infty}h(x)=1.
\\]

4. **Sketch.** Draw a left horizontal ray at height minus one with an open endpoint at zero, and a right horizontal ray at height one with a filled endpoint at zero. The join value could be chosen differently without changing any of the four limits.

**Use this method again**

For different prescribed constant side and tail limits, a two-branch step function is often the shortest valid construction.

**Check**

All four required limits have been evaluated directly from their constant branches. A jump at three would give left and right limits both minus one at zero, so it would fail the original question.
:::

:::mcq
id: thomas-2-6-81
title: Thomas §2.6 · Exercise 81
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 81 · PDF p. 112](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(26\\)
- [ ] b | \\(13\\)
- [ ] c | \\(1\\)
- [x] d | \\(0\\)
explanation: Rationalize to 26/[√(x²+25)+√(x²−1)]. The denominator grows without bound, so the limit is zero.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 81 · PDF p. 112](assets/recommended/math/thomas-2-6-81-context-1.webp)

![Thomas §2.6 · Exercise 81 · PDF p. 112](assets/recommended/math/thomas-2-6-81-question.webp)
solution:
**Plan — we are going to…**

1. Recognize cancellation between two growing square roots.
2. Multiply by the conjugate.
3. Evaluate the bounded numerator over the growing denominator.

**The trick**

Two quantities each tending to infinity do not determine the limit of their difference. Rationalize before deciding.

**What you need to know**

The difference-of-squares identity is 

\\[
(A-B)(A+B)=A^2-B^2.
\\]

**Step-by-step solution**

1. **Rationalize.** 

\\[
\\sqrt{x^2+25}-\\sqrt{x^2-1}=\\frac{(x^2+25)-(x^2-1)}{\\sqrt{x^2+25}+\\sqrt{x^2-1}}.
\\]

2. **Simplify the numerator.** 

\\[
\\frac{26}{\\sqrt{x^2+25}+\\sqrt{x^2-1}}.
\\]

3. **Take the limit.** At positive infinity the denominator tends to positive infinity while the numerator is fixed. Thus the original limit is 

\\[
0.
\\]

**Use this method again**

For a difference of growing radicals, use the conjugate to expose what actually remains after cancellation.

**Check**

The expression is positive because the first radicand is larger. Its rationalized form approaches zero through positive values, with no sign ambiguity.
:::

:::mcq
id: thomas-2-6-83
title: Thomas §2.6 · Exercise 83
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 83 · PDF p. 112](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(-\\frac32\\)
- [x] b | \\(-\\frac34\\)
- [ ] c | \\(\\frac34\\)
- [ ] d | \\(0\\)
explanation: Rationalizing gives (3x−2)/[√(4x²+3x−2)−2x]. For x→−∞, √(4x²+3x−2)/x=−√(4+3/x−2/x²). Dividing by x yields 3/(−2−2)=−3/4.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 83 · PDF p. 112](assets/recommended/math/thomas-2-6-83-context-1.webp)

![Thomas §2.6 · Exercise 83 · PDF p. 112](assets/recommended/math/thomas-2-6-83-question.webp)
solution:
**Plan — we are going to…**

1. Multiply by the conjugate of the growing radical sum.
2. Divide the resulting quotient by the negative input.
3. Keep the absolute-value sign of the square root.

**The trick**

At NEGATIVE infinity the square root behaves like minus twice the input, not twice the input. Losing that sign produces an incorrect finite limit.

**What you need to know**

Always use 

\\[
\\sqrt{x^2}=|x|.
\\]

 For negative inputs, 

\\[
|x|=-x.
\\]

**Step-by-step solution**

1. **Rationalize the original sum.** 

\\[
2x+\\sqrt{4x^2+3x-2}=\\frac{(4x^2+3x-2)-4x^2}{\\sqrt{4x^2+3x-2}-2x}=\\frac{3x-2}{\\sqrt{4x^2+3x-2}-2x}.
\\]

2. **Divide numerator and denominator by the input.** For negative inputs, 

\\[
\\frac{\\sqrt{4x^2+3x-2}}x=-\\sqrt{4+3/x-2/x^2}.
\\]

 Therefore the quotient becomes 

\\[
\\frac{3-2/x}{-\\sqrt{4+3/x-2/x^2}-2}.
\\]

3. **Evaluate.** 

\\[
\\lim_{x\\to-\\infty}(2x+\\sqrt{4x^2+3x-2})=\\frac3{-2-2}=-\\frac34.
\\]

**Use this method again**

Rationalize first, then explicitly evaluate the absolute-value/input ratio at the requested infinite end.

**Check**

For negative large inputs, the added terms nearly cancel. Because the radicand is slightly smaller than four times the input squared, the radical is slightly less than minus twice the input, so the small remaining sum is negative, consistent with minus three-quarters.
:::

:::mcq
id: thomas-2-6-85
title: Thomas §2.6 · Exercise 85
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 85 · PDF p. 113](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(5\\)
- [ ] b | \\(\\frac12\\)
- [ ] c | \\(0\\)
- [x] d | \\(\\frac52\\)
explanation: Rationalize to 5x/[√(x²+3x)+√(x²−2x)]. For positive large x, divide by x to get 5/(√(1+3/x)+√(1−2/x))→5/2.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 85 · PDF p. 112](assets/recommended/math/thomas-2-6-85-context-1.webp)

![Thomas §2.6 · Exercise 85 · PDF p. 113](assets/recommended/math/thomas-2-6-85-question.webp)
solution:
**Plan — we are going to…**

1. Rationalize the difference of the two radicals.
2. Cancel the quadratic leading terms.
3. Normalize using the positive input.

**The trick**

The shared quadratic term cancels exactly, leaving a linear numerator. This can give a nonzero finite limit even though each radical grows.

**What you need to know**

Use the conjugate and the positive-infinity identity 

\\[
\\sqrt{x^2+ax}=x\\sqrt{1+a/x}.
\\]

**Step-by-step solution**

1. **Rationalize.** 

\\[
\\sqrt{x^2+3x}-\\sqrt{x^2-2x}=\\frac{(x^2+3x)-(x^2-2x)}{\\sqrt{x^2+3x}+\\sqrt{x^2-2x}}.
\\]

2. **Simplify and divide by the positive input.** 

\\[
\\frac{5x}{\\sqrt{x^2+3x}+\\sqrt{x^2-2x}}=\\frac5{\\sqrt{1+3/x}+\\sqrt{1-2/x}}.
\\]

3. **Evaluate.** 

\\[
\\lim_{x\\to+\\infty}(\\sqrt{x^2+3x}-\\sqrt{x^2-2x})=\\frac5{1+1}=\\frac52.
\\]

**Use this method again**

Conjugate first, then compare the remaining numerator and denominator growth. Equal linear growth can leave a finite nonzero constant.

**Check**

The original first radicand exceeds the second by five times the positive input, so the difference is positive. At input one thousand its value is about 2.49938, close to the positive result 2.5.
:::

:::mcq
id: thomas-2-6-99
title: Thomas §2.6 · Exercise 99
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 99 · PDF p. 113](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which asymptotes must appear on the requested graph?
- [ ] a | No vertical asymptote; oblique y=x.
- [x] b | Vertical x=1; oblique y=x+1.
- [ ] c | Vertical x=−1; oblique y=x−1.
- [ ] d | Vertical x=1; horizontal y=1.
explanation: Division gives y=x+1+1/(x−1). Thus x=1 is vertical and y=x+1 oblique; the graph lies below the line for x<1 and above for x>1. It passes through (0,0), a local maximum on the left branch, and has local minimum (2,4) on the right. Both one-sided infinities at x=1 follow the sign of 1/(x−1).
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 99 · PDF p. 113](assets/recommended/math/thomas-2-6-99-context-1.webp)

![Thomas §2.6 · Exercise 99 · PDF p. 113](assets/recommended/math/thomas-2-6-99-question.webp)
solution:
**Plan — we are going to…**

1. Use polynomial division to expose the slanted line.
2. Read vertical behavior from the reciprocal remainder.
3. Find intercepts and turning points for the sketch.

**The trick**

A numerator one degree higher gives a slanted asymptote. The small reciprocal remainder measures the graph’s distance above or below that line.

**What you need to know**

The line is an oblique asymptote when the difference between the function and the line tends to zero at infinity. A noncancelled denominator zero may give a vertical asymptote.

**Step-by-step solution**

1. **Divide.** Since 

\\[
x^2=(x-1)(x+1)+1,
\\]

 we get 

\\[
f(x)=\\frac{x^2}{x-1}=x+1+\\frac1{x-1}.
\\]

2. **Find the asymptotes.** The reciprocal difference tends to zero at both infinite ends, so the oblique asymptote is 

\\[
y=x+1.
\\]

 The denominator zero is not cancelled, giving vertical asymptote 

\\[
x=1.
\\]

3. **Check the vertical signs and line position.** 

\\[
\\lim_{x\\to1^-}f(x)=-\\infty,\\qquad\\lim_{x\\to1^+}f(x)=+\\infty.
\\]

 The remainder is negative to the left and positive to the right, so the graph lies below the slanted line on the left and above it on the right.

4. **Plot the intercept.** The numerator vanishes only at zero, giving the single axis crossing/contact point 

\\[
(0,0).
\\]

5. **Locate the turns.** Differentiating the divided form gives 

\\[
f^{\\prime}(x)=1-\\frac1{(x-1)^2}.
\\]

 It is positive for inputs below zero, negative from zero to one and from one to two, and positive above two. Thus the left branch has a local maximum at 

\\[
(0,0)
\\]

 and the right branch has a local minimum at 

\\[
(2,4).
\\]

 Use these points and the asymptotes to finish both branches.

**Use this method again**

For a rational graph with one extra numerator degree, divide first; use the remainder’s sign, intercepts and turning points to place the branches.

**Check**

The distance from the slanted line is exactly 

\\[
f(x)-(x+1)=\\frac1{x-1},
\\]

 which tends to zero at both ends. Also the original formula gives zero at zero and four at two, verifying both turning-point heights.
:::

:::mcq
id: thomas-2-6-101
title: Thomas §2.6 · Exercise 101
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 101 · PDF p. 113](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which asymptotes must appear on the requested graph?
- [ ] a | Vertical x=1; oblique y=x−1.
- [ ] b | Vertical x=−1; oblique y=x+1.
- [ ] c | No vertical asymptote because x−1 cancels.
- [x] d | Vertical x=1; oblique y=x+1.
explanation: Division gives y=x+1−3/(x−1). The asymptotes are x=1 and y=x+1; the graph lies above the slant line for x<1 and below for x>1. Its x-intercepts are ±2 and y-intercept is 4. Since y′=1+3/(x−1)²>0 it increases on each side, with limits +∞ at 1⁻ and −∞ at 1⁺.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 101 · PDF p. 113](assets/recommended/math/thomas-2-6-101-context-1.webp)

![Thomas §2.6 · Exercise 101 · PDF p. 113](assets/recommended/math/thomas-2-6-101-question.webp)
solution:
**Plan — we are going to…**

1. Divide the numerator by the denominator.
2. Find the vertical and slanted asymptotes.
3. Plot intercepts and determine branch direction.

**The trick**

The reciprocal remainder is NEGATIVE, reversing the branch placement relative to the slanted line compared with a positive remainder.

**What you need to know**

An oblique asymptote is a line whose difference from the function tends to zero as the input tends to infinity. A noncancelled denominator zero is checked with one-sided limits.

**Step-by-step solution**

1. **Divide.** 

\\[
x^2-4=(x-1)(x+1)-3.
\\]

 Therefore 

\\[
f(x)=\\frac{x^2-4}{x-1}=x+1-\\frac3{x-1}.
\\]

2. **Read the asymptotes.** The denominator gives 

\\[
x=1,
\\]

 and the reciprocal correction tends to zero at infinity, giving 

\\[
y=x+1.
\\]

3. **Check signs.** To the left of one the reciprocal correction is positive, so the graph lies above the line. To the right it is negative, so the graph lies below. The corresponding singular limits are 

\\[
\\lim_{x\\to1^-}f(x)=+\\infty,\\qquad\\lim_{x\\to1^+}f(x)=-\\infty.
\\]

4. **Plot intercepts.** Factoring the numerator gives zeros at plus and minus two, neither excluded by the denominator. The vertical-axis value is four. Plot 

\\[
(-2,0),\\qquad(2,0),\\qquad(0,4).
\\]

5. **Draw each branch increasing.** The derivative is 

\\[
f^{\\prime}(x)=1+\\frac3{(x-1)^2}>0.
\\]

 Thus there are no turning points on either permitted interval.

**Use this method again**

Divide, use the reciprocal coefficient to place branches relative to the line, then check intercepts and monotonic direction.

**Check**

At each infinite end, 

\\[
f(x)-(x+1)=-\\frac3{x-1}\\longrightarrow0.
\\]

 The original formula at zero gives negative four divided by negative one, confirming the intercept four.
:::

:::mcq
id: thomas-2-6-103
title: Thomas §2.6 · Exercise 103
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 103 · PDF p. 113](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which asymptotes must appear on the requested graph?
- [ ] a | Vertical x=0; oblique y=−x.
- [x] b | Vertical x=0; oblique y=x.
- [ ] c | Vertical x=1; oblique y=x+1.
- [ ] d | No vertical asymptote; horizontal y=1.
explanation: y=x−1/x has vertical asymptote x=0 and oblique asymptote y=x. The graph is odd, has x-intercepts ±1 and no y-intercept. It lies above y=x on the negative branch and below on the positive branch. Its derivative 1+1/x² is positive on each branch, and the one-sided limits at zero are +∞ from the left and −∞ from the right.
hint: Work through every subpart in the original question.
example:
![Thomas §2.6 · Exercise 103 · PDF p. 113](assets/recommended/math/thomas-2-6-103-context-1.webp)

![Thomas §2.6 · Exercise 103 · PDF p. 113](assets/recommended/math/thomas-2-6-103-question.webp)
solution:
**Plan — we are going to…**

1. Divide by the input to expose the line and remainder.
2. Use reciprocal signs near zero and at infinity.
3. Plot the symmetric intercepts and sketch both increasing branches.

**The trick**

There is a slanted asymptote and a vertical one; no horizontal asymptote is expected because the function grows linearly at infinity.

**What you need to know**

A line is an oblique asymptote when the difference from it tends to zero. An odd function has origin symmetry.

**Step-by-step solution**

1. **Rewrite.** 

\\[
f(x)=\\frac{x^2-1}x=x-\\frac1x,\\qquad x\\ne0.
\\]

2. **Find the asymptotes.** Near zero the reciprocal term is unbounded, giving vertical asymptote 

\\[
x=0.
\\]

 At infinity the reciprocal correction tends to zero, giving slanted asymptote 

\\[
y=x.
\\]

3. **Read the singular signs and line position.** 

\\[
\\lim_{x\\to0^-}f(x)=+\\infty,\\qquad\\lim_{x\\to0^+}f(x)=-\\infty.
\\]

 For negative inputs the graph lies above the line; for positive inputs it lies below it.

4. **Plot intercepts.** The numerator zeros give 

\\[
(-1,0),\\qquad(1,0).
\\]

 There is no vertical-axis intercept because input zero is excluded.

5. **Draw the branch direction.** The function is odd. Its derivative is 

\\[
f^{\\prime}(x)=1+\\frac1{x^2}>0.
\\]

 Both branches increase, with origin symmetry and the asymptotic directions already found.

**Use this method again**

Split an improper rational function into its polynomial line and reciprocal correction; use the correction’s sign for precise branch placement.

**Check**

The graph’s difference from its candidate slanted line is exactly 

\\[
f(x)-x=-\\frac1x,
\\]

 which tends to zero at both ends. Substitution at plus and minus one verifies the two axis intercepts.
:::`};export{e as default};