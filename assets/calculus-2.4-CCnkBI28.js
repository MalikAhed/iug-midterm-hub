var e={id:`calculus-2.4`,title:`Thomas Calculus §2.4 Practice`,summary:`Thomas' Calculus §2.4 · original textbook exercises and verified practice.`,subjectId:`mathematics`,reward:0,status:`published`,authoringSource:`:::mcq
id: thomas-2-4-1
title: Thomas §2.4 · Exercise 1
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 1 · PDF p. 88](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | True: a, c, d, g, h, j. False: b, e, f, i, k, l.
- [ ] b | True: b, d, e, f, h, i, l. False: a, c, g, j, k.
- [ ] c | True: a, b, c, d, f, h, i. False: e, g, j, k, l.
- [x] d | True: a, b, d, f, h, i, k. False: c, e, g, j, l.
explanation: At −1 only the right limit exists and equals 1. At 0 the two-sided limit is 0, despite f(0)=1. At 1 the left and right limits are 1 and 0, so the two-sided limit fails. At 2 only the left limit exists, and it is 0. These give the indicated truth values for all twelve statements.
hint: Work through every subpart in the original question.
example:
![Thomas §2.4 · Exercise 1 · PDF p. 88](assets/recommended/math/thomas-2-4-1-question.webp)
solution:
**Plan — we are going to…**

1. Read each branch as the input approaches the four marked inputs.
2. Separate function values from one-sided and two-sided limits.
3. Judge each of the twelve statements from those readings.

**The trick**

The filled dot at zero is the function value; the neighboring curve approaches the open dot. At an endpoint there is only one available side.

**What you need to know**

A right-hand limit follows inputs greater than the target. A left-hand limit follows smaller inputs. A two-sided limit exists only when both sides exist and agree.

**Step-by-step solution**

1. **At the left endpoint.** Only the right branch is present: 

\\[
\\lim_{x\\to-1^+}f(x)=1.
\\]

 Therefore (a) is true.

2. **At zero.** Both branches approach the open dot at height zero, while the filled dot has height one: 

\\[
\\lim_{x\\to0^-}f(x)=\\lim_{x\\to0^+}f(x)=0,\\qquad f(0)=1.
\\]

 Thus (b), (d), (f) are true and (c) is false.

3. **At one.** The curve on the left tends to one; the horizontal branch on the right tends to zero: 

\\[
\\lim_{x\\to1^-}f(x)=1,\\qquad\\lim_{x\\to1^+}f(x)=0.
\\]

 The two-sided limit does not exist. Hence (e), (g) are false; (h), (i), (k) are true.

4. **At the right endpoint.** The horizontal branch approaches zero from the left. 

\\[
\\lim_{x\\to2^-}f(x)=0.
\\]

 Thus (j) is false. Finally the two-sided limit at zero is zero, so (l), which claims one, is false.

5. **Collect the answers.** True: a, b, d, f, h, i, k. False: c, e, g, j, l.

**Use this method again**

Read left and right heights separately, then compare them; read a filled dot only when asked for the function value.

**Check**

The jump at one must destroy its two-sided limit, while moving just the dot at zero cannot change its limit. These two graph features verify the classifications.
:::

:::mcq
id: thomas-2-4-3
title: Thomas §2.4 · Exercise 3
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 3 · PDF p. 89](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | (a) 1, 2; (b) 2; (c) 2, 2; (d) 2
- [x] b | (a) 2, 1; (b) DNE; (c) 3, 3; (d) 3
- [ ] c | (a) 1, 1; (b) 1; (c) 3, 3; (d) 3
- [ ] d | (a) 2, 1; (b) DNE; (c) 1, 3; (d) DNE
explanation: Part (a) asks right then left at2: x/2+1 gives2 from the right and3−x gives1 from the left. These differ, so (b) DNE. Near4 both sides use x/2+1, giving3 for both one-sided limits and the two-sided limit.
hint: Work through every subpart in the original question.
example:
![Thomas §2.4 · Exercise 3 · PDF p. 89](assets/recommended/math/thomas-2-4-3-question.webp)
solution:
**Plan — we are going to…**

1. Choose the formula for each side of two.
2. Compare the resulting heights.
3. Use the single formula valid near four.

**The trick**

Part (a) asks for the RIGHT limit first. Do not interchange the order of the two answers.

**What you need to know**

For a piecewise function, a limit uses the formula valid near the target on the requested side, even if the function is undefined at the joining point.

**Step-by-step solution**

1. **Part (a), approach from the right.** For inputs above two use the second formula: 

\\[
\\lim_{x\\to2^+}f(x)=\\lim_{x\\to2^+}\\left(\\frac x2+1\\right)=2.
\\]

2. **Part (a), approach from the left.** For inputs below two use the first formula: 

\\[
\\lim_{x\\to2^-}f(x)=\\lim_{x\\to2^-}(3-x)=1.
\\]

 The requested ordered pair is right then left: 2, 1.

3. **Part (b).** Because two is not one, the two-sided limit at two does not exist.

4. **Part (c).** On both sides of four, inputs remain greater than two: 

\\[
\\lim_{x\\to4^-}f(x)=\\lim_{x\\to4^+}f(x)=\\frac42+1=3.
\\]

5. **Part (d).** Both sides agree, so the two-sided limit at four is three.

**Use this method again**

Identify the side → choose its branch → substitute → compare. Keep the answer order used in the question.

**Check**

At inputs 1.99 and 2.01 the branch values are 1.01 and 2.005, confirming left height one and right height two.
:::

:::mcq
id: thomas-2-4-5
title: Thomas §2.4 · Exercise 5
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 5 · PDF p. 89](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | (a) 0; (b) 0; (c) 0
- [ ] b | (a) 1; (b) 0; (c) 1
- [ ] c | (a) DNE; (b) DNE; (c) DNE
- [x] d | (a) DNE; (b) 0; (c) DNE
explanation: For positive x approaching 0, sin(1/x) oscillates between −1 and 1 without approaching one value. On the negative side f=0, so the left limit is 0. The two-sided limit therefore does not exist.
hint: Work through every subpart in the original question.
example:
![Thomas §2.4 · Exercise 5 · PDF p. 89](assets/recommended/math/thomas-2-4-5-question.webp)
solution:
**Plan — we are going to…**

1. Check whether the oscillating right branch settles.
2. Evaluate the constant left branch.
3. Decide whether a common two-sided value is possible.

**The trick**

An oscillation that stays between minus one and one need not have a limit. Its amplitude must shrink to force convergence.

**What you need to know**

A limit fails if two input sequences approach the same target from the same side but their outputs approach different values.

**Step-by-step solution**

1. **Part (a), right side.** Use positive inputs 

\\[
x_n=\\frac1{\\pi/2+2\\pi n},\\qquad z_n=\\frac1{3\\pi/2+2\\pi n}.
\\]

 Both approach zero from above, but 

\\[
\\sin(1/x_n)=1,\\qquad\\sin(1/z_n)=-1.
\\]

 Therefore the right-hand limit does not exist.

2. **Part (b), left side.** The left branch is constantly zero, so 

\\[
\\lim_{x\\to0^-}f(x)=0.
\\]

3. **Part (c).** A two-sided limit needs both one-sided limits. The missing right-hand limit makes the two-sided limit nonexistent.

**Use this method again**

For oscillating functions, find two approaching sequences with different outputs; evaluate other branches separately.

**Check**

The two explicit sequences never agree in output, however large their index becomes. This proves failure rather than merely relying on the crowded sketch.
:::

:::mcq
id: thomas-2-4-7
title: Thomas §2.4 · Exercise 7
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 7 · PDF p. 89](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | The left limit is 1 and right limit is 0.
- [x] b | Hole at (1,1), point at (1,0); both one-sided limits and the limit equal 1.
- [ ] c | Hole at (1,0), point at (1,1); the limit equals 0.
- [ ] d | Both one-sided limits are 0 because f(1)=0.
explanation: Graph y=x³ with its point at (1,1) removed and a filled point at (1,0). The value at 1 changes neither neighboring branch, so both one-sided limits are 1 and the two-sided limit is 1.
hint: Work through every subpart in the original question.
example:
![Thomas §2.4 · Exercise 7 · PDF p. 89](assets/recommended/math/thomas-2-4-7-question.webp)
solution:
**Plan — we are going to…**

1. Draw the cubic away from the exceptional input.
2. Place the replacement function value.
3. Read both neighboring heights.

**The trick**

Changing a function at one isolated point changes its value there, not its limit.

**What you need to know**

Polynomial functions are continuous. A limit depends on neighboring inputs, excluding the target itself.

**Step-by-step solution**

1. **Part (a), draw the ordinary branch.** Sketch 

\\[
y=x^3.
\\]

 Remove the ordinary point at 

\\[
 (1,1).
\\]

 Mark this with an open circle.

2. **Place the exceptional value.** The second rule assigns 

\\[
f(1)=0.
\\]

 Put a filled dot at 

\\[
(1,0).
\\]

3. **Part (b), follow the cubic from both sides.** 

\\[
\\lim_{x\\to1^-}f(x)=1^3=1,\\qquad\\lim_{x\\to1^+}f(x)=1.
\\]

4. **Part (c).** Equal one-sided limits give 

\\[
\\lim_{x\\to1}f(x)=1.
\\]

 This differs from the value at the point.

**Use this method again**

Draw the ordinary formula first; then remove or replace isolated points. Compute limits using the ordinary neighboring branch.

**Check**

For example, the neighboring cubic values at 0.99 and 1.01 are 0.970299 and 1.030301, surrounding one rather than approaching the isolated value zero.
:::

:::mcq
id: thomas-2-4-9
title: Thomas §2.4 · Exercise 9
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 9 · PDF p. 89](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | Domain [0,2]; range [0,2]; limits exist throughout (0,2).
- [ ] b | Domain (0,2); range (0,1); left only at 0, right only at 2.
- [ ] c | Domain [0,2]; range [0,1]; the limit at 1 is 1.
- [x] d | Domain [0,2]; range (0,1]∪{2}; two-sided limits on (0,1)∪(1,2); left only at 2, right only at 0.
explanation: The graph is the upper quarter-circle from (0,1) to the open point (1,0), then y=1 on [1,2), plus (2,2). Thus the range is (0,1]∪{2}. The jump at 1 prevents a two-sided limit; other interior points have limits. Only a left limit exists at 2, and only a right limit at 0.
hint: Work through every subpart in the original question.
example:
![Thomas §2.4 · Exercise 9 · PDF p. 89](assets/recommended/math/thomas-2-4-9-context-1.webp)

![Thomas §2.4 · Exercise 9 · PDF p. 89](assets/recommended/math/thomas-2-4-9-question.webp)
solution:
**Plan — we are going to…**

1. Sketch each of the three rules on its own interval.
2. Read the complete domain and range.
3. Check interior joins and the endpoints for available limits.

**The trick**

The quarter-circle approaches height zero but never reaches it. The isolated height two belongs to the range without changing the limit from the left at two.

**What you need to know**

The upper unit circle has equation 

\\[
y=\\sqrt{1-x^2}.
\\]

 Domain means included inputs; range means attained outputs. A two-sided limit requires approach from both sides.

**Step-by-step solution**

1. **Draw the pieces.** On the first interval draw the quarter-circle, with its right endpoint open: 

\\[
0\\le x<1,\\qquad y=\\sqrt{1-x^2}.
\\]

 Next draw the horizontal segment 

\\[
1\\le x<2,\\qquad y=1.
\\]

 Add the isolated filled point 

\\[
(2,2).
\\]

2. **Part (a), domain and range.** The intervals together include every input from zero to two. 

\\[
D=[0,2].
\\]

 The quarter-circle gives positive heights through one; the final point adds two: 

\\[
R=(0,1]\\cup\\{2\\}.
\\]

3. **Part (b), two-sided limits.** At one, left height zero and right height one disagree. All other interior points lie on a continuous branch: 

\\[
c\\in(0,1)\\cup(1,2).
\\]

4. **Parts (c), (d), endpoints.** Only a left approach exists at two, with limit one. Only a right approach exists at zero, also with limit one.

**Use this method again**

Build the graph one interval at a time; track open endpoints before listing outputs and limits.

**Check**

Zero cannot be an output: its only possible quarter-circle location is excluded. Yet inputs approaching one from below make outputs approach zero, confirming the distinction between range and limit.
:::

:::mcq
id: thomas-2-4-11
title: Thomas §2.4 · Exercise 11
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 11 · PDF p. 89](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(\\sqrt2\\)
- [x] b | \\(\\sqrt3\\)
- [ ] c | \\(3\\)
- [ ] d | \\(\\frac1{\\sqrt3}\\)
explanation: The expression is continuous near −1/2. Its ratio tends to (3/2)/(1/2)=3, so the square root tends to √3.
hint: Work through every subpart in the original question.
example:
![Thomas §2.4 · Exercise 11 · PDF p. 89](assets/recommended/math/thomas-2-4-11-context-1.webp)

![Thomas §2.4 · Exercise 11 · PDF p. 89](assets/recommended/math/thomas-2-4-11-question.webp)
solution:
**Plan — we are going to…**

1. Check the denominator and radicand near minus one-half.
2. Substitute in the inner quotient.
3. Take the positive square root.

**The trick**

The approach is from the left, but the denominator stays nonzero and the radicand positive nearby, so ordinary substitution works.

**What you need to know**

A quotient of continuous functions is continuous where its denominator is nonzero. The principal square root is continuous on nonnegative inputs.

**Step-by-step solution**

1. **Write the limit.** 

\\[
\\lim_{x\\to-1/2^-}\\sqrt{\\frac{x+2}{x+1}}.
\\]

2. **Evaluate the inner numerator and denominator.** 

\\[
x+2\\longrightarrow\\frac32,\\qquad x+1\\longrightarrow\\frac12.
\\]

 In particular the denominator is not zero.

3. **Divide, then take the root.** 

\\[
\\sqrt{\\frac{3/2}{1/2}}=\\sqrt3.
\\]

**Use this method again**

Check the inner expression is defined near the target, then substitute through continuous outer operations.

**Check**

At an input of −0.501, the radicand is about 3.004, close to three and positive; the square root is close to 1.732.
:::

:::mcq
id: thomas-2-4-13
title: Thomas §2.4 · Exercise 13
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 13 · PDF p. 89](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(0\\)
- [ ] b | \\(2\\)
- [ ] c | \\(-1\\)
- [x] d | \\(1\\)
explanation: At x=−2 all denominators are nonzero: x/(x+1)=2 and (2x+5)/(x²+x)=1/2. Their product is 1.
hint: Work through every subpart in the original question.
example:
![Thomas §2.4 · Exercise 13 · PDF p. 89](assets/recommended/math/thomas-2-4-13-context-1.webp)

![Thomas §2.4 · Exercise 13 · PDF p. 89](assets/recommended/math/thomas-2-4-13-question.webp)
solution:
**Plan — we are going to…**

1. Evaluate the two quotient factors at minus two.
2. Check their denominators.
3. Multiply the resulting finite values.

**The trick**

A one-sided arrow does not automatically mean a jump or infinity. Both denominators are nonzero here.

**What you need to know**

Use the product and quotient limit laws whenever the denominator limits are nonzero.

**Step-by-step solution**

1. **Check the denominators.** At the target, 

\\[
x+1=-1,\\qquad x^2+x=4-2=2.
\\]

2. **Evaluate the two factors.** 

\\[
\\frac{x}{x+1}\\longrightarrow\\frac{-2}{-1}=2.
\\]

 

\\[
\\frac{2x+5}{x^2+x}\\longrightarrow\\frac{-4+5}{4-2}=\\frac12.
\\]

3. **Multiply.** 

\\[
\\lim_{x\\to-2^+}\\left(\\frac{x}{x+1}\\right)\\left(\\frac{2x+5}{x^2+x}\\right)=2\\cdot\\frac12=1.
\\]

**Use this method again**

For products of quotients, test each denominator before substituting factor by factor.

**Check**

Combining the factors first gives numerator 

\\[
x(2x+5)=-2
\\]

 and denominator 

\\[
(x+1)(x^2+x)=-2
\\]

 at the target; their ratio is again one.
:::

:::mcq
id: thomas-2-4-15
title: Thomas §2.4 · Exercise 15
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 15 · PDF p. 89](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(0\\)
- [x] b | \\(\\frac2{\\sqrt5}\\)
- [ ] c | \\(\\frac1{\\sqrt5}\\)
- [ ] d | \\(\\sqrt5\\)
explanation: Rationalization gives (h+4)/[√(h²+4h+5)+√5], whose right-hand limit is 4/(2√5)=2/√5.
hint: Work through every subpart in the original question.
example:
![Thomas §2.4 · Exercise 15 · PDF p. 89](assets/recommended/math/thomas-2-4-15-context-1.webp)

![Thomas §2.4 · Exercise 15 · PDF p. 89](assets/recommended/math/thomas-2-4-15-question.webp)
solution:
**Plan — we are going to…**

1. Recognize the zero-over-zero form.
2. Multiply by the conjugate and cancel the common factor.
3. Substitute in the resulting continuous quotient.

**The trick**

The difference of square roots hides a factor of the small input. Rationalizing exposes it.

**What you need to know**

The conjugate identity is 

\\[
(A-B)(A+B)=A^2-B^2.
\\]

 Cancellation is valid for nonzero approaching inputs, even when the original expression is undefined at the target.

**Step-by-step solution**

1. **Write the expression and diagnose.** 

\\[
\\frac{\\sqrt{h^2+4h+5}-\\sqrt5}{h}.
\\]

 Both numerator and denominator tend to zero.

2. **Multiply by one in conjugate form.** 

\\[
\\frac{(\\sqrt{h^2+4h+5}-\\sqrt5)(\\sqrt{h^2+4h+5}+\\sqrt5)}{h(\\sqrt{h^2+4h+5}+\\sqrt5)}=\\frac{h^2+4h}{h(\\sqrt{h^2+4h+5}+\\sqrt5)}.
\\]

3. **Factor and cancel for nonzero inputs.** 

\\[
\\frac{h(h+4)}{h(\\sqrt{h^2+4h+5}+\\sqrt5)}=\\frac{h+4}{\\sqrt{h^2+4h+5}+\\sqrt5}.
\\]

4. **Take the right-hand limit.** 

\\[
\\frac4{\\sqrt5+\\sqrt5}=\\frac2{\\sqrt5}.
\\]

**Use this method again**

For a radical difference giving zero over zero, rationalize before substituting.

**Check**

The final denominator tends to a positive nonzero quantity. With a small positive input, the original numerator is positive, so the positive answer is also sign-consistent.
:::

:::mcq
id: thomas-2-4-17
title: Thomas §2.4 · Exercise 17
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 17 · PDF p. 90](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | (a) −1; (b) 1
- [ ] b | (a) 1; (b) 1
- [ ] c | (a) 0; (b) 0
- [x] d | (a) 1; (b) −1
explanation: |x+2|/(x+2) is +1 to the right of −2 and −1 to the left. The remaining factor x+3 tends to 1, giving 1 and −1.
hint: Work through every subpart in the original question.
example:
![Thomas §2.4 · Exercise 17 · PDF p. 89](assets/recommended/math/thomas-2-4-17-context-1.webp)

![Thomas §2.4 · Exercise 17 · PDF p. 90](assets/recommended/math/thomas-2-4-17-question.webp)
solution:
**Plan — we are going to…**

1. Replace the absolute value separately on each side of minus two.
2. Cancel the signed common factor.
3. Evaluate the remaining factor.

**The trick**

Absolute value changes its formula at minus two: the same symbol creates opposite signs on the two sides.

**What you need to know**

For positive input absolute value leaves it unchanged; for negative input it reverses its sign.

**Step-by-step solution**

1. **Part (a), right side.** When the input exceeds minus two, 

\\[
x+2>0,\\qquad |x+2|=x+2.
\\]

 Therefore 

\\[
 (x+3)\\frac{|x+2|}{x+2}=x+3\\longrightarrow1.
\\]

2. **Part (b), left side.** Below minus two, 

\\[
x+2<0,\\qquad |x+2|=-(x+2).
\\]

 Thus 

\\[
 (x+3)\\frac{|x+2|}{x+2}=-(x+3)\\longrightarrow-1.
\\]

**Use this method again**

Find where the expression inside absolute value changes sign, then use its side-specific formula.

**Check**

At inputs −1.99 and −2.01 the expression gives 1.01 and −0.99 respectively, confirming the right and left signs.
:::

:::mcq
id: thomas-2-4-19
title: Thomas §2.4 · Exercise 19
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 19 · PDF p. 90](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | (a) 0; (b) 0
- [x] b | (a) 1; (b) 2/3
- [ ] c | (a) 1; (b) 1
- [ ] d | (a) 2/3; (b) 1
explanation: Immediately above 3, floor(θ)=3, so floor(θ)/θ tends to 1. Immediately below 3 the floor is 2, so the left-hand limit is 2/3.
hint: Work through every subpart in the original question.
example:
![Thomas §2.4 · Exercise 19 · PDF p. 90](assets/recommended/math/thomas-2-4-19-context-1.webp)

![Thomas §2.4 · Exercise 19 · PDF p. 22](assets/recommended/math/thomas-2-4-19-context-2.webp)

![Thomas §2.4 · Exercise 19 · PDF p. 90](assets/recommended/math/thomas-2-4-19-question.webp)
solution:
**Plan — we are going to…**

1. Find the constant floor value on each side of three.
2. Replace the floor symbol by that integer.
3. Divide by the approaching denominator.

**The trick**

The floor is three just above three, but two just below it; substituting three into the floor misses the left side.

**What you need to know**

The floor function gives the greatest integer less than or equal to its input. It is constant between consecutive integers.

**Step-by-step solution**

1. **Part (a), right side.** Immediately above three the input lies between three and four, so 

\\[
\\lfloor\\theta\\rfloor=3.
\\]

 Consequently 

\\[
\\lim_{\\theta\\to3^+}\\frac{\\lfloor\\theta\\rfloor}{\\theta}=\\lim_{\\theta\\to3^+}\\frac3\\theta=1.
\\]

2. **Part (b), left side.** Immediately below three the input lies between two and three, so 

\\[
\\lfloor\\theta\\rfloor=2.
\\]

 Therefore 

\\[
\\lim_{\\theta\\to3^-}\\frac{\\lfloor\\theta\\rfloor}{\\theta}=\\frac23.
\\]

**Use this method again**

Locate the interval on the requested side, freeze the floor value there, then evaluate the ordinary quotient.

**Check**

The ratios at 3.001 and 2.999 are about 0.99967 and 0.66689, approaching the two distinct answers.
:::

:::mcq
id: thomas-2-4-21
title: Thomas §2.4 · Exercise 21
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 21 · PDF p. 90](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(0\\)
- [ ] b | \\(2\\)
- [ ] c | \\(\\frac12\\)
- [x] d | \\(1\\)
explanation: Let u=√(2θ). As θ→0 within the domain, u→0 and sin u/u→1.
hint: Work through every subpart in the original question.
example:
![Thomas §2.4 · Exercise 21 · PDF p. 90](assets/recommended/math/thomas-2-4-21-context-1.webp)

![Thomas §2.4 · Exercise 21 · PDF p. 90](assets/recommended/math/thomas-2-4-21-question.webp)
solution:
**Plan — we are going to…**

1. Name the square-root argument of sine.
2. Match the denominator to that same argument.
3. Apply the sine-over-angle limit.

**The trick**

The denominator is already exactly the sine argument, even though that argument is a square root.

**What you need to know**

Use radians. The basic small-angle limit and its reciprocal are 

\\[
\\lim_{u\\to0}\\frac{\\sin u}{u}=1,\\qquad\\lim_{u\\to0}\\frac{u}{\\sin u}=1.
\\]

 Cosine tends to one at zero.

**Step-by-step solution**

1. **Set a new variable.** 

\\[
u=\\sqrt{2\\theta}.
\\]

 The real domain requires nonnegative input, and as the original input tends to zero through its domain the new variable tends to zero from above.

2. **Rewrite the entire quotient.** 

\\[
\\frac{\\sin\\sqrt{2\\theta}}{\\sqrt{2\\theta}}=\\frac{\\sin u}{u}.
\\]

3. **Apply the basic limit.** The result is 

\\[
1.
\\]

**Use this method again**

Look for the exact sine argument in the denominator before expanding or differentiating.

**Check**

The real-domain approach becomes the right-hand version of the basic limit, which also equals one; there is no need to invent undefined negative square-root inputs.
:::

:::mcq
id: thomas-2-4-23
title: Thomas §2.4 · Exercise 23
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 23 · PDF p. 90](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(0\\)
- [x] b | \\(\\frac34\\)
- [ ] c | \\(\\frac43\\)
- [ ] d | \\(3\\)
explanation: Write sin(3y)/(4y)=(3/4)[sin(3y)/(3y)]. The bracket tends to 1.
hint: Work through every subpart in the original question.
example:
![Thomas §2.4 · Exercise 23 · PDF p. 90](assets/recommended/math/thomas-2-4-23-context-1.webp)

![Thomas §2.4 · Exercise 23 · PDF p. 90](assets/recommended/math/thomas-2-4-23-question.webp)
solution:
**Plan — we are going to…**

1. Create the matching denominator for sine of three times the input.
2. Keep the correcting constant outside.
3. Evaluate the basic limit.

**The trick**

The denominator has coefficient four, but sine has coefficient three. Correct this mismatch rather than discarding both coefficients.

**What you need to know**

Use radians. The basic small-angle limit and its reciprocal are 

\\[
\\lim_{u\\to0}\\frac{\\sin u}{u}=1,\\qquad\\lim_{u\\to0}\\frac{u}{\\sin u}=1.
\\]

 Cosine tends to one at zero.

**Step-by-step solution**

1. **Multiply and divide by three.** 

\\[
\\frac{\\sin(3y)}{4y}=\\frac34\\frac{\\sin(3y)}{3y}.
\\]

2. **Apply the basic limit.** Because the sine argument tends to zero, 

\\[
\\lim_{y\\to0}\\frac{\\sin(3y)}{3y}=1.
\\]

3. **Keep the prefactor.** 

\\[
\\lim_{y\\to0}\\frac{\\sin(3y)}{4y}=\\frac34.
\\]

**Use this method again**

For sine of a multiple divided by another multiple, match its argument and retain the ratio of coefficients.

**Check**

At input 0.001 the quotient is approximately 0.749999, close to three-quarters.
:::

:::mcq
id: thomas-2-4-25
title: Thomas §2.4 · Exercise 25
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 25 · PDF p. 90](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(1\\)
- [ ] b | \\(0\\)
- [ ] c | \\(\\frac12\\)
- [x] d | \\(2\\)
explanation: tan(2x)/x=2[sin(2x)/(2x)]/cos(2x), which tends to 2.
hint: Work through every subpart in the original question.
example:
![Thomas §2.4 · Exercise 25 · PDF p. 90](assets/recommended/math/thomas-2-4-25-context-1.webp)

![Thomas §2.4 · Exercise 25 · PDF p. 90](assets/recommended/math/thomas-2-4-25-question.webp)
solution:
**Plan — we are going to…**

1. Express tangent as sine divided by cosine.
2. Make sine and its denominator match.
3. Evaluate the two factors.

**The trick**

Tangent has the same first-order small-angle behavior as its argument, but its cosine denominator must still be accounted for.

**What you need to know**

Use radians. The basic small-angle limit and its reciprocal are 

\\[
\\lim_{u\\to0}\\frac{\\sin u}{u}=1,\\qquad\\lim_{u\\to0}\\frac{u}{\\sin u}=1.
\\]

 Cosine tends to one at zero. Also 

\\[
\\tan u=\\frac{\\sin u}{\\cos u}.
\\]

**Step-by-step solution**

1. **Expand tangent.** 

\\[
\\frac{\\tan(2x)}x=\\frac{\\sin(2x)}{x\\cos(2x)}.
\\]

2. **Create the matching sine quotient.** 

\\[
\\frac{\\sin(2x)}{x\\cos(2x)}=2\\frac{\\sin(2x)}{2x}\\frac1{\\cos(2x)}.
\\]

3. **Take each limit.** 

\\[
2\\cdot1\\cdot1=2.
\\]

**Use this method again**

Turn tangent into sine/cosine, match the sine argument, then use continuity of cosine.

**Check**

At input 0.001 the quotient is approximately 2.000003, approaching two from above.
:::

:::mcq
id: thomas-2-4-27
title: Thomas §2.4 · Exercise 27
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 27 · PDF p. 90](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(0\\)
- [x] b | \\(\\frac12\\)
- [ ] c | \\(2\\)
- [ ] d | \\(1\\)
explanation: x csc(2x)/cos(5x)=[x/sin(2x)]/cos(5x), tending to (1/2)/1.
hint: Work through every subpart in the original question.
example:
![Thomas §2.4 · Exercise 27 · PDF p. 90](assets/recommended/math/thomas-2-4-27-context-1.webp)

![Thomas §2.4 · Exercise 27 · PDF p. 90](assets/recommended/math/thomas-2-4-27-question.webp)
solution:
**Plan — we are going to…**

1. Replace cosecant by reciprocal sine.
2. Extract the coefficient two to form an angle-over-sine limit.
3. Evaluate the cosine factor.

**The trick**

Cosecant is reciprocal sine; the coefficient two produces a factor one-half rather than two.

**What you need to know**

Use radians. The basic small-angle limit and its reciprocal are 

\\[
\\lim_{u\\to0}\\frac{\\sin u}{u}=1,\\qquad\\lim_{u\\to0}\\frac{u}{\\sin u}=1.
\\]

 Cosine tends to one at zero. The reciprocal identity is 

\\[
\\csc u=\\frac1{\\sin u}.
\\]

**Step-by-step solution**

1. **Rewrite the expression.** 

\\[
\\frac{x\\csc(2x)}{\\cos(5x)}=\\frac{x}{\\sin(2x)\\cos(5x)}.
\\]

2. **Match the argument.** 

\\[
\\frac{x}{\\sin(2x)\\cos(5x)}=\\frac12\\frac{2x}{\\sin(2x)}\\frac1{\\cos(5x)}.
\\]

3. **Evaluate.** 

\\[
\\frac12\\cdot1\\cdot1=\\frac12.
\\]

**Use this method again**

Invert cosecant, match the angle with its sine, and keep the reciprocal coefficient.

**Check**

For a small input 0.001, the value is about 0.500007, agreeing with one-half.
:::

:::mcq
id: thomas-2-4-29
title: Thomas §2.4 · Exercise 29
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 29 · PDF p. 90](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(1\\)
- [ ] b | \\(0\\)
- [ ] c | \\(\\frac12\\)
- [x] d | \\(2\\)
explanation: Factor x(1+cos x)/(sin x cos x). Since x/sin x→1 and cos x→1, the limit is 2.
hint: Work through every subpart in the original question.
example:
![Thomas §2.4 · Exercise 29 · PDF p. 90](assets/recommended/math/thomas-2-4-29-context-1.webp)

![Thomas §2.4 · Exercise 29 · PDF p. 90](assets/recommended/math/thomas-2-4-29-question.webp)
solution:
**Plan — we are going to…**

1. Factor the shared input from the numerator.
2. Separate the basic reciprocal-sine factor.
3. Evaluate the remaining cosine quotient.

**The trick**

The two numerator terms both contain the input. Factoring exposes a standard limit.

**What you need to know**

Use radians. The basic small-angle limit and its reciprocal are 

\\[
\\lim_{u\\to0}\\frac{\\sin u}{u}=1,\\qquad\\lim_{u\\to0}\\frac{u}{\\sin u}=1.
\\]

 Cosine tends to one at zero.

**Step-by-step solution**

1. **Factor.** 

\\[
\\frac{x+x\\cos x}{\\sin x\\cos x}=\\frac{x(1+\\cos x)}{\\sin x\\cos x}.
\\]

2. **Separate the factors.** 

\\[
\\frac{x}{\\sin x}\\frac{1+\\cos x}{\\cos x}.
\\]

3. **Evaluate their limits.** 

\\[
1\\cdot\\frac{1+1}{1}=2.
\\]

**Use this method again**

Factor first, then separate a standard small-angle quotient from factors continuous at zero.

**Check**

For a small positive input both factors are positive and close to one and two; the quotient at 0.001 is about 2.000001.
:::

:::mcq
id: thomas-2-4-31
title: Thomas §2.4 · Exercise 31
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 31 · PDF p. 90](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(2\\)
- [x] b | \\(0\\)
- [ ] c | \\(1\\)
- [ ] d | \\(\\frac12\\)
explanation: Using 1−cosθ=2sin²(θ/2), the numerator is second-order while sin(2θ) is first-order. Equivalently rationalize and use sinθ/θ→1; the quotient tends to 0.
hint: Work through every subpart in the original question.
example:
![Thomas §2.4 · Exercise 31 · PDF p. 90](assets/recommended/math/thomas-2-4-31-context-1.webp)

![Thomas §2.4 · Exercise 31 · PDF p. 90](assets/recommended/math/thomas-2-4-31-question.webp)
solution:
**Plan — we are going to…**

1. Use the double-angle formula in the denominator.
2. Rationalize the cosine difference in the numerator.
3. Cancel a sine and evaluate.

**The trick**

The numerator vanishes more rapidly than the denominator. A conjugate makes the extra shrinking sine factor visible.

**What you need to know**

Use radians. The basic small-angle limit and its reciprocal are 

\\[
\\lim_{u\\to0}\\frac{\\sin u}{u}=1,\\qquad\\lim_{u\\to0}\\frac{u}{\\sin u}=1.
\\]

 Cosine tends to one at zero. Useful identities are 

\\[
\\sin(2\\theta)=2\\sin\\theta\\cos\\theta,\\qquad1-\\cos^2\\theta=\\sin^2\\theta.
\\]

**Step-by-step solution**

1. **Multiply by the conjugate.** 

\\[
\\frac{1-\\cos\\theta}{\\sin(2\\theta)}=\\frac{\\sin^2\\theta}{(1+\\cos\\theta)\\sin(2\\theta)}.
\\]

2. **Use the double-angle identity and cancel.** For sufficiently small nonzero inputs, 

\\[
\\frac{\\sin^2\\theta}{(1+\\cos\\theta)2\\sin\\theta\\cos\\theta}=\\frac{\\sin\\theta}{2\\cos\\theta(1+\\cos\\theta)}.
\\]

3. **Substitute in the new quotient.** The denominator tends to four, so 

\\[
\\frac0{2(1)(2)}=0.
\\]

**Use this method again**

Rationalize a cosine difference and simplify with a double-angle identity before substituting.

**Check**

The simplified denominator tends to four and stays positive near zero, while the numerator changes sign through zero. Both sides therefore tend to zero, not to an infinite value.
:::

:::mcq
id: thomas-2-4-33
title: Thomas §2.4 · Exercise 33
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 33 · PDF p. 90](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(0\\)
- [ ] b | \\(\\frac12\\)
- [ ] c | \\(2\\)
- [x] d | \\(1\\)
explanation: Set u=1−cos t. Then u→0 and the quotient becomes sin u/u, which tends to 1.
hint: Work through every subpart in the original question.
example:
![Thomas §2.4 · Exercise 33 · PDF p. 90](assets/recommended/math/thomas-2-4-33-context-1.webp)

![Thomas §2.4 · Exercise 33 · PDF p. 90](assets/recommended/math/thomas-2-4-33-question.webp)
solution:
**Plan — we are going to…**

1. Treat one minus cosine as a single variable.
2. Verify that variable tends to zero.
3. Apply sine-over-angle directly.

**The trick**

The entire expression one minus cosine, not the original input, is the matching angle.

**What you need to know**

Use radians. The basic small-angle limit and its reciprocal are 

\\[
\\lim_{u\\to0}\\frac{\\sin u}{u}=1,\\qquad\\lim_{u\\to0}\\frac{u}{\\sin u}=1.
\\]

 Cosine tends to one at zero.

**Step-by-step solution**

1. **Name the repeated expression.** 

\\[
u=1-\\cos t.
\\]

 Continuity of cosine gives 

\\[
u\\longrightarrow0.
\\]

2. **Rewrite.** 

\\[
\\frac{\\sin(1-\\cos t)}{1-\\cos t}=\\frac{\\sin u}{u}.
\\]

3. **Evaluate.** The basic limit gives 

\\[
1.
\\]

**Use this method again**

Whenever sine contains exactly the denominator as its argument, substitute that entire expression as the angle.

**Check**

Near zero the new variable is nonnegative and tends to zero; the right-hand sine-over-angle limit is one as well.
:::

:::mcq
id: thomas-2-4-35
title: Thomas §2.4 · Exercise 35
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 35 · PDF p. 90](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(0\\)
- [x] b | \\(\\frac12\\)
- [ ] c | \\(2\\)
- [ ] d | \\(1\\)
explanation: sin(2θ)=2sinθ cosθ, so the quotient reduces to 1/(2cosθ) and tends to 1/2.
hint: Work through every subpart in the original question.
example:
![Thomas §2.4 · Exercise 35 · PDF p. 90](assets/recommended/math/thomas-2-4-35-context-1.webp)

![Thomas §2.4 · Exercise 35 · PDF p. 90](assets/recommended/math/thomas-2-4-35-question.webp)
solution:
**Plan — we are going to…**

1. Expand sine of twice the angle.
2. Cancel the common sine at nonzero nearby inputs.
3. Evaluate the remaining cosine.

**The trick**

Both numerator and denominator vanish, but the double-angle identity reveals an exact cancellation.

**What you need to know**

The sine double-angle identity is 

\\[
\\sin(2\\theta)=2\\sin\\theta\\cos\\theta.
\\]

 A limit permits cancellation away from the target.

**Step-by-step solution**

1. **Rewrite the denominator.** 

\\[
\\frac{\\sin\\theta}{\\sin(2\\theta)}=\\frac{\\sin\\theta}{2\\sin\\theta\\cos\\theta}.
\\]

2. **Cancel at nearby nonzero inputs.** 

\\[
\\frac{\\sin\\theta}{2\\sin\\theta\\cos\\theta}=\\frac1{2\\cos\\theta}.
\\]

3. **Take the limit.** 

\\[
\\frac1{2\\cos0}=\\frac12.
\\]

**Use this method again**

Check for a double-angle identity before using a longer standard-limit factorization.

**Check**

The original quotient at 0.001 is about 0.50000025, consistent with the limiting half.
:::

:::mcq
id: thomas-2-4-37
title: Thomas §2.4 · Exercise 37
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 37 · PDF p. 90](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(1\\)
- [ ] b | \\(-1\\)
- [ ] c | \\(2\\)
- [x] d | \\(0\\)
explanation: θ→0 and cosθ→1, so their product tends to 0.
hint: Work through every subpart in the original question.
example:
![Thomas §2.4 · Exercise 37 · PDF p. 90](assets/recommended/math/thomas-2-4-37-context-1.webp)

![Thomas §2.4 · Exercise 37 · PDF p. 90](assets/recommended/math/thomas-2-4-37-question.webp)
solution:
**Plan — we are going to…**

1. Identify the two continuous factors.
2. Take their individual limits.
3. Multiply the results.

**The trick**

There is no indeterminate quotient here. The bounded cosine factor cannot stop the angle factor from shrinking to zero.

**What you need to know**

The product law permits multiplying finite limits; cosine is continuous at zero.

**Step-by-step solution**

1. **Evaluate the angle factor.** 

\\[
\\theta\\longrightarrow0.
\\]

2. **Evaluate cosine.** 

\\[
\\cos\\theta\\longrightarrow1.
\\]

3. **Multiply.** 

\\[
\\lim_{\\theta\\to0}\\theta\\cos\\theta=0\\cdot1=0.
\\]

**Use this method again**

For a product containing a factor tending to zero and a bounded factor, use the product law or squeeze estimate.

**Check**

Independently, 

\\[
|\\theta\\cos\\theta|\\le|\\theta|.
\\]

 The bound tends to zero, confirming the result by squeezing.
:::

:::mcq
id: thomas-2-4-39
title: Thomas §2.4 · Exercise 39
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 39 · PDF p. 90](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(0\\)
- [x] b | \\(\\frac38\\)
- [ ] c | \\(\\frac83\\)
- [ ] d | \\(3\\)
explanation: tan(3x)/sin(8x)=[sin(3x)/(3x)]·[8x/sin(8x)]·(3/8)/cos(3x), tending to 3/8.
hint: Work through every subpart in the original question.
example:
![Thomas §2.4 · Exercise 39 · PDF p. 90](assets/recommended/math/thomas-2-4-39-context-1.webp)

![Thomas §2.4 · Exercise 39 · PDF p. 90](assets/recommended/math/thomas-2-4-39-question.webp)
solution:
**Plan — we are going to…**

1. Expand tangent.
2. Create the standard sine quotients for both angles.
3. Keep the coefficient ratio.

**The trick**

The two angle multipliers differ. Their ratio three-eighths survives the limit.

**What you need to know**

Use radians. The basic small-angle limit and its reciprocal are 

\\[
\\lim_{u\\to0}\\frac{\\sin u}{u}=1,\\qquad\\lim_{u\\to0}\\frac{u}{\\sin u}=1.
\\]

 Cosine tends to one at zero. Use the sine/cosine definition of tangent.

**Step-by-step solution**

1. **Expand and regroup.** 

\\[
\\frac{\\tan(3x)}{\\sin(8x)}=\\frac{\\sin(3x)}{\\cos(3x)\\sin(8x)}.
\\]

2. **Match each sine with its argument.** 

\\[
\\frac38\\frac{\\sin(3x)}{3x}\\frac{8x}{\\sin(8x)}\\frac1{\\cos(3x)}.
\\]

3. **Evaluate.** 

\\[
\\frac38\\cdot1\\cdot1\\cdot1=\\frac38.
\\]

**Use this method again**

Convert tangent, then normalize each sine separately; carry the ratio of angle coefficients.

**Check**

At input 0.001 the original ratio is about 0.375005, close to 0.375.
:::

:::mcq
id: thomas-2-4-41
title: Thomas §2.4 · Exercise 41
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 41 · PDF p. 90](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(1\\)
- [ ] b | \\(\\frac13\\)
- [ ] c | \\(0\\)
- [x] d | \\(3\\)
explanation: Write the expression as [tanθ/θ]·[tan(3θ)/θ]. The factors tend to 1 and 3.
hint: Work through every subpart in the original question.
example:
![Thomas §2.4 · Exercise 41 · PDF p. 90](assets/recommended/math/thomas-2-4-41-context-1.webp)

![Thomas §2.4 · Exercise 41 · PDF p. 90](assets/recommended/math/thomas-2-4-41-question.webp)
solution:
**Plan — we are going to…**

1. Replace reciprocal cotangent by tangent.
2. Split the square of the input between two factors.
3. Normalize both tangent quotients.

**The trick**

The cotangent is in the denominator. Replacing it by tangent converts the expression into a product, not a quotient of two tangent functions.

**What you need to know**

Use radians. The basic small-angle limit and its reciprocal are 

\\[
\\lim_{u\\to0}\\frac{\\sin u}{u}=1,\\qquad\\lim_{u\\to0}\\frac{u}{\\sin u}=1.
\\]

 Cosine tends to one at zero. From the reciprocal identity, 

\\[
1/\\cot u=\\tan u.
\\]

**Step-by-step solution**

1. **Rewrite.** 

\\[
\\frac{\\tan\\theta}{\\theta^2\\cot(3\\theta)}=\\frac{\\tan\\theta\\tan(3\\theta)}{\\theta^2}.
\\]

2. **Split the denominator.** 

\\[
\\frac{\\tan\\theta}{\\theta}\\frac{\\tan(3\\theta)}{\\theta}=3\\frac{\\tan\\theta}{\\theta}\\frac{\\tan(3\\theta)}{3\\theta}.
\\]

3. **Apply the tangent-over-angle limit to both factors.** Each tends to one because tangent equals sine divided by cosine. The result is 

\\[
3.
\\]

**Use this method again**

Invert a cotangent denominator, distribute powers of the input, then normalize each tangent factor.

**Check**

Both factors are positive near zero on either side. At input 0.001 their product is approximately 3.000010.
:::

:::mcq
id: thomas-2-4-43
title: Thomas §2.4 · Exercise 43
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 43 · PDF p. 90](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | Yes: the limit must be 0.
- [x] b | Yes: compare both one-sided limits; their common value is the limit if equal, otherwise it does not exist.
- [ ] c | Yes: the limit must equal f(a).
- [ ] d | No: the right-hand behavior is still unknown.
explanation: Both one-sided limits are given. A two-sided limit exists exactly when they agree, and then equals their common value. Unequal sides show that it does not exist; f(a) is irrelevant.
hint: Work through every subpart in the original question.
example:
![Thomas §2.4 · Exercise 43 · PDF p. 90](assets/recommended/math/thomas-2-4-43-question.webp)
solution:
**Plan — we are going to…**

1. Name the two known one-sided limits.
2. Compare their values.
3. State precisely when the two-sided limit exists.

**The trick**

The original question gives BOTH one-sided limits, not the function value and only one side. That is enough information to decide the two-sided behavior.

**What you need to know**

At an interior point a finite two-sided limit exists exactly when the finite one-sided limits agree: 

\\[
\\lim_{x\\to a}f(x)=L\\iff\\lim_{x\\to a^-}f(x)=\\lim_{x\\to a^+}f(x)=L.
\\]

**Step-by-step solution**

1. **Record the known results.** Call the left-hand limit 

\\[
L_-
\\]

 and the right-hand limit 

\\[
L_+.
\\]

2. **If they agree, give the common value.** If 

\\[
L_-=L_+=L,
\\]

 then the two-sided limit exists and equals that number.

3. **If they differ, state nonexistence.** If 

\\[
L_-\\ne L_+,
\\]

 the two-sided limit does not exist.

4. **Answer.** Yes: knowing both sides lets us determine the two-sided behavior by this comparison. Their existence alone does not guarantee that they are equal.

**Use this method again**

For any interior two-sided limit, calculate or read both one-sided values and compare them.

**Check**

For example, equal one-sided values two and two give limit two. Values two and three give no two-sided limit. These cover the two possible comparisons.
:::

:::mcq
id: thomas-2-4-44
title: Thomas §2.4 · Exercise 44
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 44 · PDF p. 90](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [x] a | Yes: the right-hand limit equals the given two-sided limit.
- [ ] b | No: the right limit can be arbitrary.
- [ ] c | Yes: it must equal f(c).
- [ ] d | Only when the limit is 0.
explanation: Existence of a finite two-sided limit means both one-sided limits exist and equal that same number. Thus lim(x→c⁺)f(x)=lim(x→c)f(x), regardless of f(c).
hint: Work through every subpart in the original question.
example:
![Thomas §2.4 · Exercise 44 · PDF p. 90](assets/recommended/math/thomas-2-4-44-question.webp)
solution:
**Plan — we are going to…**

1. Use the given existence of the two-sided limit.
2. Apply its necessary one-sided consequence.
3. Read the common value from the right-hand side.

**The trick**

The two-sided limit is already known to exist. That assumption guarantees the right-hand limit is the same value.

**What you need to know**

If a two-sided limit is finite, both one-sided limits must equal it.

**Step-by-step solution**

1. **Name the given limit.** Suppose 

\\[
\\lim_{x\\to c}f(x)=L.
\\]

2. **Restrict the approach to inputs on the right.** They are among the nearby inputs already covered by the two-sided limit, so 

\\[
\\lim_{x\\to c^+}f(x)=L.
\\]

3. **Answer.** Yes: calculating the right-hand limit finds the value of the existing two-sided limit. The function value at the target need not equal it.

**Use this method again**

When existence is given, either one-sided calculation supplies its value; otherwise compare both sides first.

**Check**

A right-hand value different from the two-sided value would contradict the definition, because right-side inputs can be chosen arbitrarily close to the target.
:::

:::mcq
id: thomas-2-4-45
title: Thomas §2.4 · Exercise 45
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 45 · PDF p. 90](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | The left-hand limit at 0 is 3.
- [ ] b | The left-hand limit must fail to exist.
- [ ] c | The two-sided limit is 3.
- [x] d | The left-hand limit at 0 is −3.
explanation: For an odd function f(−x)=−f(x). As x→0⁺, −x→0⁻, so the given right limit 3 forces the left limit −3. The unequal one-sided limits imply no two-sided limit.
hint: Work through every subpart in the original question.
example:
![Thomas §2.4 · Exercise 45 · PDF p. 90](assets/recommended/math/thomas-2-4-45-question.webp)
solution:
**Plan — we are going to…**

1. Reflect a negative approaching input into a positive one.
2. Use odd symmetry to reverse the output sign.
3. Compare the resulting one-sided values.

**The trick**

Odd symmetry reverses the sign of the output as well as the input.

**What you need to know**

An odd function satisfies 

\\[
f(-u)=-f(u).
\\]

 Under input reflection, a right-side approach to zero becomes a left-side approach.

**Step-by-step solution**

1. **Introduce a positive input tending to zero.** Set 

\\[
x=-u,\\qquad u\\to0^+.
\\]

 Then the original input approaches from the left.

2. **Apply oddness before taking the limit.** 

\\[
\\lim_{x\\to0^-}f(x)=\\lim_{u\\to0^+}f(-u)=-\\lim_{u\\to0^+}f(u)=-3.
\\]

3. **Compare.** The right-hand limit is three while the left-hand limit is minus three; the two-sided limit at zero does not exist.

**Use this method again**

Reflect the approach direction explicitly, then apply the even or odd output rule.

**Check**

The opposite signs are required by odd symmetry. Equal positive values on both sides would contradict the stated symmetry and nonzero right-hand limit.
:::

:::mcq
id: thomas-2-4-46
title: Thomas §2.4 · Exercise 46
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 46 · PDF p. 90](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | At −2: right limit 7; left limit not determined.
- [ ] b | At −2: left limit −7; right limit 7.
- [x] c | At −2: left limit 7; right limit not determined.
- [ ] d | At −2: both limits 7.
explanation: Evenness gives f(−x)=f(x). The approach x→2⁺ reflects to −x→−2⁻, so the left-hand limit at −2 is 7. The right-hand limit at −2 would depend on the unspecified left-hand limit at 2.
hint: Work through every subpart in the original question.
example:
![Thomas §2.4 · Exercise 46 · PDF p. 90](assets/recommended/math/thomas-2-4-46-question.webp)
solution:
**Plan — we are going to…**

1. Reflect inputs just greater than two.
2. Identify the corresponding side at minus two.
3. Separate the determined limit from the undetermined one.

**The trick**

Reflection reverses the side: right of positive two becomes LEFT of negative two.

**What you need to know**

An even function satisfies 

\\[
f(-u)=f(u).
\\]

 Reflecting an input reverses left and right approaches.

**Step-by-step solution**

1. **Reflect the known approach.** If 

\\[
u\\to2^+,
\\]

 then 

\\[
-u\\to-2^-.
\\]

2. **Use evenness.** 

\\[
\\lim_{x\\to-2^-}f(x)=\\lim_{u\\to2^+}f(-u)=\\lim_{u\\to2^+}f(u)=7.
\\]

3. **Analyze the other side.** Inputs approaching minus two from above reflect to inputs approaching two from below. That limit was not supplied, so 

\\[
\\lim_{x\\to-2^+}f(x)
\\]

 cannot be determined from the information given.

**Use this method again**

For symmetry limit questions, reflect a nearby sample input to identify the new side before copying or reversing output signs.

**Check**

An input 2.01 reflects to −2.01, which lies below −2. By contrast −1.99 reflects to 1.99, a side whose behavior remains unspecified.
:::`};export{e as default};