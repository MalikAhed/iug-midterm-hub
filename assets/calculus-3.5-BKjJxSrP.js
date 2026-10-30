var e={id:`calculus-3.5`,title:`Thomas Calculus §3.5 Practice`,summary:`Thomas' Calculus §3.5 · original textbook exercises and verified practice.`,subjectId:`mathematics`,reward:0,status:`published`,authoringSource:`:::mcq
id: thomas-3-5-5
title: Thomas §3.5 · Exercise 5
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 5 · PDF p. 156](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the first derivative requested for the original function?
- [ ] a | \\(- 4 \\sqrt{x} + \\csc{\\left(x \\right)} + 7\\)
- [ ] b | \\(\\frac{\\sqrt{x} \\cot{\\left(x \\right)} \\csc{\\left(x \\right)} + 2}{\\sqrt{x}}\\)
- [ ] c | \\(- \\frac{2 \\left(\\sqrt{x} \\cot{\\left(x \\right)} \\csc{\\left(x \\right)} + 2\\right)}{\\sqrt{x}}\\)
- [x] d | \\(- \\frac{\\sqrt{x} \\cot{\\left(x \\right)} \\csc{\\left(x \\right)} + 2}{\\sqrt{x}}\\)
explanation: The original function is \\(- 4 \\sqrt{x} + \\csc{\\left(x \\right)} + 7\\). Differentiate with respect to \\(x\\): its first derivative is \\(- \\frac{\\sqrt{x} \\cot{\\left(x \\right)} \\csc{\\left(x \\right)} + 2}{\\sqrt{x}}\\).
hint: Work through every subpart in the original question.
example:
![Thomas §3.5 · Exercise 5 · PDF p. 156](assets/recommended/math/thomas-3-5-5-context-1.webp)

![Thomas §3.5 · Exercise 5 · PDF p. 156](assets/recommended/math/thomas-3-5-5-question.webp)
solution:
**Plan — we are going to…**

1. Recognize the separate terms and their derivative rules.

2. Calculate the derivative and simplify its signs and common terms.

**The trick**

The constant seven disappears. Both the negative-root contribution and the cosecant derivative retain negative signs.

**What you need to know**

Trigonometric derivative rules use **radians**. Retain any exclusions from the original trigonometric denominators. The derivative is taken with respect to the question’s input variable.

\\[
\\frac d{dx}\\csc x=-\\csc x\\cot x
\\]

For a power, multiply by its exponent and lower the exponent by one. Differentiate sums term by term; constants give zero.

\\[
\\frac d{dx}x^n=nx^{n-1}
\\]

**Step-by-step solution**

1. **Write the original function.**

\\[
f(x)=-4\\sqrt x+\\csc x+7
\\]

2. **Differentiate each changing term or factor.**

\\[
f\\prime(x)=-4\\left(\\frac1{2\\sqrt x}\\right)-\\csc x\\cot x+0
\\]

3. **Combine and simplify.**

\\[
f\\prime(x)=-\\frac2{\\sqrt x}-\\csc x\\cot x
\\]

4. **Keep the original domain.** For a finite derivative, require positive input and nonzero sine.

**Use this method again**

Use radians, simplify identities when useful, keep the original domain, and apply the derivative rule to the full expression before collecting terms.

**Check**

Independently estimate the slope from two nearby values of the original function, using a small symmetric increment. The central secant slope agrees with the derivative at this allowed input.

\\[
\\frac{f(1.0001)-f(0.9999)}{0.0002}\\approx-2.76306
\\]

\\[
f\\prime(1)\\approx-2.76306
\\]
:::

:::mcq
id: thomas-3-5-7
title: Thomas §3.5 · Exercise 7
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 7 · PDF p. 156](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the first derivative requested for the original function?
- [ ] a | \\(2 \\sin{\\left(x \\right)} \\tan^{2}{\\left(x \\right)} + 2 \\sin{\\left(x \\right)} + 2 \\cos{\\left(x \\right)} \\tan{\\left(x \\right)}\\)
- [x] b | \\(\\sin{\\left(x \\right)} \\tan^{2}{\\left(x \\right)} + \\sin{\\left(x \\right)} + \\cos{\\left(x \\right)} \\tan{\\left(x \\right)}\\)
- [ ] c | \\(\\sin{\\left(x \\right)} \\tan{\\left(x \\right)}\\)
- [ ] d | \\(- \\sin{\\left(x \\right)} \\tan^{2}{\\left(x \\right)} - \\sin{\\left(x \\right)} - \\cos{\\left(x \\right)} \\tan{\\left(x \\right)}\\)
explanation: The original function is \\(\\sin{\\left(x \\right)} \\tan{\\left(x \\right)}\\). Differentiate with respect to \\(x\\): its first derivative is \\(\\sin{\\left(x \\right)} \\tan^{2}{\\left(x \\right)} + \\sin{\\left(x \\right)} + \\cos{\\left(x \\right)} \\tan{\\left(x \\right)}\\).
hint: Work through every subpart in the original question.
example:
![Thomas §3.5 · Exercise 7 · PDF p. 156](assets/recommended/math/thomas-3-5-7-context-1.webp)

![Thomas §3.5 · Exercise 7 · PDF p. 156](assets/recommended/math/thomas-3-5-7-question.webp)
solution:
**Plan — we are going to…**

1. Recognize the changing factors and use the product rule.

2. Calculate the derivative and simplify its signs and common terms.

**The trick**

Differentiate one factor at a time. The expanded option uses the identity relating secant squared to tangent squared.

**What you need to know**

Trigonometric derivative rules use **radians**. Retain any exclusions from the original trigonometric denominators. The derivative is taken with respect to the question’s input variable.

\\[
\\frac d{dx}\\sin x=\\cos x
\\]

\\[
\\frac d{dx}\\tan x=\\sec^2x
\\]

Differentiate a product by differentiating one factor at a time and adding both contributions.

\\[
(uv)\\prime=u\\prime v+uv\\prime
\\]

\\[
\\sec^2x=1+\\tan^2x
\\]

**Step-by-step solution**

1. **Write the original function.**

\\[
f(x)=\\sin x\\tan x
\\]

2. **Differentiate each changing term or factor.**

\\[
f\\prime(x)=\\cos x\\tan x+\\sin x\\sec^2x
\\]

3. **Combine and simplify.**

\\[
f\\prime(x)=\\cos x\\tan x+\\sin x(1+\\tan^2x)
\\]

4. **Keep the original domain.** 

\\[
\\cos x\\ne0
\\]

**Use this method again**

Use radians, simplify identities when useful, keep the original domain, and apply the derivative rule to the full expression before collecting terms.

**Check**

Independently estimate the slope from two nearby values of the original function, using a small symmetric increment. The central secant slope agrees with the derivative at this allowed input.

\\[
\\frac{f(1.0001)-f(0.9999)}{0.0002}\\approx3.72395
\\]

\\[
f\\prime(1)\\approx3.72395
\\]
:::

:::mcq
id: thomas-3-5-9
title: Thomas §3.5 · Exercise 9
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 9 · PDF p. 156](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the first derivative requested for the original function?
- [ ] a | \\(\\left(- \\tan{\\left(x \\right)} + \\sec{\\left(x \\right)}\\right) \\left(\\tan{\\left(x \\right)} + \\sec{\\left(x \\right)}\\right)\\)
- [ ] b | \\(2 \\left(- \\tan^{2}{\\left(x \\right)} + \\sec^{2}{\\left(x \\right)} - 1\\right) \\tan{\\left(x \\right)} - 1\\)
- [ ] c | \\(2\\)
- [x] d | \\(2 \\left(- \\tan^{2}{\\left(x \\right)} + \\sec^{2}{\\left(x \\right)} - 1\\right) \\tan{\\left(x \\right)}\\)
explanation: The original function is \\(\\left(- \\tan{\\left(x \\right)} + \\sec{\\left(x \\right)}\\right) \\left(\\tan{\\left(x \\right)} + \\sec{\\left(x \\right)}\\right)\\). Differentiate with respect to \\(x\\): its first derivative is \\(2 \\left(- \\tan^{2}{\\left(x \\right)} + \\sec^{2}{\\left(x \\right)} - 1\\right) \\tan{\\left(x \\right)}\\).
hint: Work through every subpart in the original question.
example:
![Thomas §3.5 · Exercise 9 · PDF p. 156](assets/recommended/math/thomas-3-5-9-context-1.webp)

![Thomas §3.5 · Exercise 9 · PDF p. 156](assets/recommended/math/thomas-3-5-9-question.webp)
solution:
**Plan — we are going to…**

1. Recognize an identity that simplifies the original expression.

2. Calculate the derivative and simplify its signs and common terms.

**The trick**

Recognize a difference of squares before doing a long product rule. On its original domain, this expression is exactly one.

**What you need to know**

Trigonometric derivative rules use **radians**. Retain any exclusions from the original trigonometric denominators. The derivative is taken with respect to the question’s input variable.

\\[
\\frac d{dx}\\tan x=\\sec^2x
\\]

\\[
\\frac d{dx}\\sec x=\\sec x\\tan x
\\]

\\[
\\sec^2x-\\tan^2x=1
\\]

**Step-by-step solution**

1. **Write the original function.**

\\[
f(x)=(\\sec x-\\tan x)(\\sec x+\\tan x)
\\]

2. **Simplify using an identity first.**

\\[
f(x)=\\sec^2x-\\tan^2x=1
\\]

3. **Differentiate each changing term or factor.**

\\[
f\\prime(x)=\\frac d{dx}(1)=0
\\]

4. **Combine and simplify.**

\\[
f\\prime(x)=0
\\]

5. **Keep the original domain.** 

\\[
\\cos x\\ne0
\\]

The unsimplified option also equals zero because its factor of secant squared minus tangent squared minus one is zero.

**Use this method again**

Use radians, simplify identities when useful, keep the original domain, and apply the derivative rule to the full expression before collecting terms.

**Check**

Independently estimate the slope from two nearby values of the original function, using a small symmetric increment. The central secant slope agrees with the derivative at this allowed input.

\\[
\\frac{f(1.0001)-f(0.9999)}{0.0002}\\approx0.00000
\\]

\\[
f\\prime(1)\\approx0.00000
\\]
:::

:::mcq
id: thomas-3-5-13
title: Thomas §3.5 · Exercise 13
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 13 · PDF p. 157](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the first derivative requested for the original function?
- [ ] a | \\(\\frac{1}{\\tan{\\left(x \\right)}} + \\frac{4}{\\cos{\\left(x \\right)}}\\)
- [ ] b | \\(\\frac{- 4 \\sin{\\left(x \\right)} \\tan^{2}{\\left(x \\right)} + \\cos^{2}{\\left(x \\right)} \\tan^{2}{\\left(x \\right)} + \\cos^{2}{\\left(x \\right)}}{\\cos^{2}{\\left(x \\right)} \\tan^{2}{\\left(x \\right)}}\\)
- [ ] c | \\(- \\frac{2 \\left(- 4 \\sin{\\left(x \\right)} \\tan^{2}{\\left(x \\right)} + \\cos^{2}{\\left(x \\right)} \\tan^{2}{\\left(x \\right)} + \\cos^{2}{\\left(x \\right)}\\right)}{\\cos^{2}{\\left(x \\right)} \\tan^{2}{\\left(x \\right)}}\\)
- [x] d | \\(- \\frac{- 4 \\sin{\\left(x \\right)} \\tan^{2}{\\left(x \\right)} + \\cos^{2}{\\left(x \\right)} \\tan^{2}{\\left(x \\right)} + \\cos^{2}{\\left(x \\right)}}{\\cos^{2}{\\left(x \\right)} \\tan^{2}{\\left(x \\right)}}\\)
explanation: The original function is \\(\\frac{1}{\\tan{\\left(x \\right)}} + \\frac{4}{\\cos{\\left(x \\right)}}\\). Differentiate with respect to \\(x\\): its first derivative is \\(- \\frac{- 4 \\sin{\\left(x \\right)} \\tan^{2}{\\left(x \\right)} + \\cos^{2}{\\left(x \\right)} \\tan^{2}{\\left(x \\right)} + \\cos^{2}{\\left(x \\right)}}{\\cos^{2}{\\left(x \\right)} \\tan^{2}{\\left(x \\right)}}\\).
hint: Work through every subpart in the original question.
example:
![Thomas §3.5 · Exercise 13 · PDF p. 156](assets/recommended/math/thomas-3-5-13-context-1.webp)

![Thomas §3.5 · Exercise 13 · PDF p. 157](assets/recommended/math/thomas-3-5-13-question.webp)
solution:
**Plan — we are going to…**

1. Recognize an identity that simplifies the original expression.

2. Calculate the derivative and simplify its signs and common terms.

**The trick**

Reciprocal tangent is cotangent, and reciprocal cosine is secant. Rewriting first makes both derivatives direct.

**What you need to know**

Trigonometric derivative rules use **radians**. Retain any exclusions from the original trigonometric denominators. The derivative is taken with respect to the question’s input variable.

\\[
\\frac d{dx}\\cot x=-\\csc^2x
\\]

\\[
\\frac d{dx}\\sec x=\\sec x\\tan x
\\]

**Step-by-step solution**

1. **Write the original function.**

\\[
f(x)=\\frac1{\\tan x}+\\frac4{\\cos x}
\\]

2. **Simplify using an identity first.**

\\[
f(x)=\\cot x+4\\sec x
\\]

3. **Differentiate each changing term or factor.**

\\[
f\\prime(x)=-\\csc^2x+4\\sec x\\tan x
\\]

4. **Combine and simplify.**

\\[
f\\prime(x)=-\\csc^2x+4\\sec x\\tan x
\\]

5. **Keep the original domain.** 

\\[
\\sin x\\ne0,\\qquad\\cos x\\ne0
\\]

**Use this method again**

Use radians, simplify identities when useful, keep the original domain, and apply the derivative rule to the full expression before collecting terms.

**Check**

Independently estimate the slope from two nearby values of the original function, using a small symmetric increment. The central secant slope agrees with the derivative at this allowed input.

\\[
\\frac{f(1.0001)-f(0.9999)}{0.0002}\\approx10.11762
\\]

\\[
f\\prime(1)\\approx10.11762
\\]
:::

:::mcq
id: thomas-3-5-15
title: Thomas §3.5 · Exercise 15
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 15 · PDF p. 157](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the first derivative requested for the original function?
- [ ] a | \\(2 x^{2} \\cos{\\left(x \\right)}\\)
- [x] b | \\(x^{2} \\cos{\\left(x \\right)}\\)
- [ ] c | \\(x^{2} \\sin{\\left(x \\right)} + 2 x \\cos{\\left(x \\right)} - 2 \\sin{\\left(x \\right)}\\)
- [ ] d | \\(- x^{2} \\cos{\\left(x \\right)}\\)
explanation: The original function is \\(x^{2} \\sin{\\left(x \\right)} + 2 x \\cos{\\left(x \\right)} - 2 \\sin{\\left(x \\right)}\\). Differentiate with respect to \\(x\\): its first derivative is \\(x^{2} \\cos{\\left(x \\right)}\\).
hint: Work through every subpart in the original question.
example:
![Thomas §3.5 · Exercise 15 · PDF p. 156](assets/recommended/math/thomas-3-5-15-context-1.webp)

![Thomas §3.5 · Exercise 15 · PDF p. 157](assets/recommended/math/thomas-3-5-15-question.webp)
solution:
**Plan — we are going to…**

1. Recognize the changing factors and use the product rule.

2. Calculate the derivative and simplify its signs and common terms.

**The trick**

Apply the product rule to both products before canceling. The sine contributions and the constant-multiple cosine contributions then cancel in pairs.

**What you need to know**

Trigonometric derivative rules use **radians**. Retain any exclusions from the original trigonometric denominators. The derivative is taken with respect to the question’s input variable.

\\[
\\frac d{dx}\\sin x=\\cos x
\\]

\\[
\\frac d{dx}\\cos x=-\\sin x
\\]

Differentiate a product by differentiating one factor at a time and adding both contributions.

\\[
(uv)\\prime=u\\prime v+uv\\prime
\\]

For a power, multiply by its exponent and lower the exponent by one. Differentiate sums term by term; constants give zero.

\\[
\\frac d{dx}x^n=nx^{n-1}
\\]

**Step-by-step solution**

1. **Write the original function.**

\\[
f(x)=x^2\\sin x+2x\\cos x-2\\sin x
\\]

2. **Differentiate each changing term or factor.**

\\[
f\\prime(x)=2x\\sin x+x^2\\cos x+2\\cos x-2x\\sin x-2\\cos x
\\]

3. **Combine and simplify.**

\\[
f\\prime(x)=x^2\\cos x
\\]

**Use this method again**

Use radians, simplify identities when useful, keep the original domain, and apply the derivative rule to the full expression before collecting terms.

**Check**

Independently estimate the slope from two nearby values of the original function, using a small symmetric increment. The central secant slope agrees with the derivative at this allowed input.

\\[
\\frac{f(1.0001)-f(0.9999)}{0.0002}\\approx0.54030
\\]

\\[
f\\prime(1)\\approx0.54030
\\]
:::

:::mcq
id: thomas-3-5-17
title: Thomas §3.5 · Exercise 17
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 17 · PDF p. 157](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the first derivative requested for the original function?
- [ ] a | \\(x^{3} \\sin{\\left(x \\right)} \\cos{\\left(x \\right)}\\)
- [ ] b | \\(- x^{2} \\left(- x \\sin^{2}{\\left(x \\right)} + x \\cos^{2}{\\left(x \\right)} + 3 \\sin{\\left(x \\right)} \\cos{\\left(x \\right)}\\right)\\)
- [ ] c | \\(2 x^{2} \\left(- x \\sin^{2}{\\left(x \\right)} + x \\cos^{2}{\\left(x \\right)} + 3 \\sin{\\left(x \\right)} \\cos{\\left(x \\right)}\\right)\\)
- [x] d | \\(x^{2} \\left(- x \\sin^{2}{\\left(x \\right)} + x \\cos^{2}{\\left(x \\right)} + 3 \\sin{\\left(x \\right)} \\cos{\\left(x \\right)}\\right)\\)
explanation: The original function is \\(x^{3} \\sin{\\left(x \\right)} \\cos{\\left(x \\right)}\\). Differentiate with respect to \\(x\\): its first derivative is \\(x^{2} \\left(- x \\sin^{2}{\\left(x \\right)} + x \\cos^{2}{\\left(x \\right)} + 3 \\sin{\\left(x \\right)} \\cos{\\left(x \\right)}\\right)\\).
hint: Work through every subpart in the original question.
example:
![Thomas §3.5 · Exercise 17 · PDF p. 156](assets/recommended/math/thomas-3-5-17-context-1.webp)

![Thomas §3.5 · Exercise 17 · PDF p. 157](assets/recommended/math/thomas-3-5-17-question.webp)
solution:
**Plan — we are going to…**

1. Recognize the changing factors and use the product rule.

2. Calculate the derivative and simplify its signs and common terms.

**The trick**

There are three changing factors. Differentiate each one once while leaving the other two unchanged. The cosine derivative produces the negative sine-square term.

**What you need to know**

Trigonometric derivative rules use **radians**. Retain any exclusions from the original trigonometric denominators. The derivative is taken with respect to the question’s input variable.

\\[
\\frac d{dx}\\sin x=\\cos x
\\]

\\[
\\frac d{dx}\\cos x=-\\sin x
\\]

Differentiate a product by differentiating one factor at a time and adding both contributions.

\\[
(uv)\\prime=u\\prime v+uv\\prime
\\]

For a power, multiply by its exponent and lower the exponent by one. Differentiate sums term by term; constants give zero.

\\[
\\frac d{dx}x^n=nx^{n-1}
\\]

**Step-by-step solution**

1. **Write the original function.**

\\[
f(x)=x^3\\sin x\\cos x
\\]

2. **Differentiate each changing term or factor.**

\\[
f\\prime(x)=3x^2\\sin x\\cos x+x^3\\cos^2x-x^3\\sin^2x
\\]

3. **Combine and simplify.**

\\[
f\\prime(x)=x^2\\left[3\\sin x\\cos x+x(\\cos^2x-\\sin^2x)\\right]
\\]

**Use this method again**

Use radians, simplify identities when useful, keep the original domain, and apply the derivative rule to the full expression before collecting terms.

**Check**

Independently estimate the slope from two nearby values of the original function, using a small symmetric increment. The central secant slope agrees with the derivative at this allowed input.

\\[
\\frac{f(1.0001)-f(0.9999)}{0.0002}\\approx0.94780
\\]

\\[
f\\prime(1)\\approx0.94780
\\]
:::

:::mcq
id: thomas-3-5-21
title: Thomas §3.5 · Exercise 21
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 21 · PDF p. 157](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the first derivative requested for the original function?
- [ ] a | \\(\\frac{\\csc{\\left(t \\right)} + 1}{1 - \\csc{\\left(t \\right)}}\\)
- [ ] b | \\(\\frac{2 \\cot{\\left(t \\right)} \\csc{\\left(t \\right)}}{\\left(\\csc{\\left(t \\right)} - 1\\right)^{2}}\\)
- [ ] c | \\(- \\frac{4 \\cot{\\left(t \\right)} \\csc{\\left(t \\right)}}{\\left(\\csc{\\left(t \\right)} - 1\\right)^{2}}\\)
- [x] d | \\(- \\frac{2 \\cot{\\left(t \\right)} \\csc{\\left(t \\right)}}{\\left(\\csc{\\left(t \\right)} - 1\\right)^{2}}\\)
explanation: The original function is \\(\\frac{\\csc{\\left(t \\right)} + 1}{1 - \\csc{\\left(t \\right)}}\\). Differentiate with respect to \\(t\\): its first derivative is \\(- \\frac{2 \\cot{\\left(t \\right)} \\csc{\\left(t \\right)}}{\\left(\\csc{\\left(t \\right)} - 1\\right)^{2}}\\).
hint: Work through every subpart in the original question.
example:
![Thomas §3.5 · Exercise 21 · PDF p. 157](assets/recommended/math/thomas-3-5-21-context-1.webp)

![Thomas §3.5 · Exercise 21 · PDF p. 157](assets/recommended/math/thomas-3-5-21-question.webp)
solution:
**Plan — we are going to…**

1. Recognize the numerator and denominator and use the quotient rule.

2. Calculate the derivative and simplify its signs and common terms.

**The trick**

Differentiating the denominator changes its minus cosecant into plus cosecant times cotangent. The numerator then simplifies to minus twice that product.

**What you need to know**

Trigonometric derivative rules use **radians**. Retain any exclusions from the original trigonometric denominators. The derivative is taken with respect to the question’s input variable.

\\[
\\frac d{dx}\\csc x=-\\csc x\\cot x
\\]

For a quotient, keep the numerator order exactly as shown and square the entire original denominator. Exclude zeros of the original denominator.

\\[
\\left(\\frac uv\\right)\\prime=\\frac{u\\prime v-uv\\prime}{v^2}
\\]

**Step-by-step solution**

1. **Write the original function.**

\\[
f(t)=\\frac{\\csc t+1}{1-\\csc t}
\\]

2. **Differentiate each changing term or factor.**

\\[
f\\prime(t)=\\frac{(-\\csc t\\cot t)(1-\\csc t)-(\\csc t+1)(\\csc t\\cot t)}{(1-\\csc t)^2}
\\]

3. **Combine and simplify.**

\\[
f\\prime(t)=-\\frac{2\\csc t\\cot t}{(1-\\csc t)^2}
\\]

4. **Keep the original domain.** 

\\[
\\sin t\\ne0,\\qquad\\csc t\\ne1
\\]

**Use this method again**

Use radians, simplify identities when useful, keep the original domain, and apply the derivative rule to the full expression before collecting terms.

**Check**

Independently estimate the slope from two nearby values of the original function, using a small symmetric increment. The central secant slope agrees with the derivative at this allowed input.

\\[
\\frac{f(1.0001)-f(0.9999)}{0.0002}\\approx-42.99811
\\]

\\[
f\\prime(1)\\approx-42.99810
\\]
:::

:::mcq
id: thomas-3-5-27
title: Thomas §3.5 · Exercise 27
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 27 · PDF p. 157](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the first derivative requested for the original function?
- [ ] a | \\(\\frac{2 \\left(\\cot^{2}{\\left(q \\right)} + 1\\right)}{\\cot^{2}{\\left(q \\right)}}\\)
- [x] b | \\(\\frac{\\cot^{2}{\\left(q \\right)} + 1}{\\cot^{2}{\\left(q \\right)}}\\)
- [ ] c | \\(5 + \\frac{1}{\\cot{\\left(q \\right)}}\\)
- [ ] d | \\(- \\frac{\\cot^{2}{\\left(q \\right)} + 1}{\\cot^{2}{\\left(q \\right)}}\\)
explanation: The original function is \\(5 + \\frac{1}{\\cot{\\left(q \\right)}}\\). Differentiate with respect to \\(q\\): its first derivative is \\(\\frac{\\cot^{2}{\\left(q \\right)} + 1}{\\cot^{2}{\\left(q \\right)}}\\).
hint: Work through every subpart in the original question.
example:
![Thomas §3.5 · Exercise 27 · PDF p. 157](assets/recommended/math/thomas-3-5-27-context-1.webp)

![Thomas §3.5 · Exercise 27 · PDF p. 157](assets/recommended/math/thomas-3-5-27-question.webp)
solution:
**Plan — we are going to…**

1. Recognize an identity that simplifies the original expression.

2. Calculate the derivative and simplify its signs and common terms.

**The trick**

Reciprocal cotangent equals tangent where the original expression is defined. The rewritten expression does not restore inputs excluded by the original cotangent.

**What you need to know**

Trigonometric derivative rules use **radians**. Retain any exclusions from the original trigonometric denominators. The derivative is taken with respect to the question’s input variable.

\\[
\\frac d{dx}\\tan x=\\sec^2x
\\]

**Step-by-step solution**

1. **Write the original function.**

\\[
f(q)=5+\\frac1{\\cot q}
\\]

2. **Simplify using an identity first.**

\\[
f(q)=5+\\tan q
\\]

3. **Differentiate each changing term or factor.**

\\[
f\\prime(q)=0+\\sec^2q
\\]

4. **Combine and simplify.**

\\[
f\\prime(q)=\\sec^2q=\\frac{1+\\cot^2q}{\\cot^2q}
\\]

5. **Keep the original domain.** 

\\[
\\sin q\\ne0,\\qquad\\cos q\\ne0
\\]

**Use this method again**

Use radians, simplify identities when useful, keep the original domain, and apply the derivative rule to the full expression before collecting terms.

**Check**

Independently estimate the slope from two nearby values of the original function, using a small symmetric increment. The central secant slope agrees with the derivative at this allowed input.

\\[
\\frac{f(1.0001)-f(0.9999)}{0.0002}\\approx3.42552
\\]

\\[
f\\prime(1)\\approx3.42552
\\]
:::

:::mcq
id: thomas-3-5-31
title: Thomas §3.5 · Exercise 31
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 31 · PDF p. 157](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the first derivative requested for the original function?
- [ ] a | \\(\\frac{2 \\left(q^{3} \\cos{\\left(q \\right)} - q^{2} \\sin{\\left(q \\right)} - q \\cos{\\left(q \\right)} - \\sin{\\left(q \\right)}\\right)}{\\left(q - 1\\right)^{2} \\left(q + 1\\right)^{2}}\\)
- [x] b | \\(\\frac{q^{3} \\cos{\\left(q \\right)} - q^{2} \\sin{\\left(q \\right)} - q \\cos{\\left(q \\right)} - \\sin{\\left(q \\right)}}{\\left(q - 1\\right)^{2} \\left(q + 1\\right)^{2}}\\)
- [ ] c | \\(\\frac{q \\sin{\\left(q \\right)}}{q^{2} - 1}\\)
- [ ] d | \\(- \\frac{q^{3} \\cos{\\left(q \\right)} - q^{2} \\sin{\\left(q \\right)} - q \\cos{\\left(q \\right)} - \\sin{\\left(q \\right)}}{\\left(q - 1\\right)^{2} \\left(q + 1\\right)^{2}}\\)
explanation: The original function is \\(\\frac{q \\sin{\\left(q \\right)}}{q^{2} - 1}\\). Differentiate with respect to \\(q\\): its first derivative is \\(\\frac{q^{3} \\cos{\\left(q \\right)} - q^{2} \\sin{\\left(q \\right)} - q \\cos{\\left(q \\right)} - \\sin{\\left(q \\right)}}{\\left(q - 1\\right)^{2} \\left(q + 1\\right)^{2}}\\).
hint: Work through every subpart in the original question.
example:
![Thomas §3.5 · Exercise 31 · PDF p. 157](assets/recommended/math/thomas-3-5-31-context-1.webp)

![Thomas §3.5 · Exercise 31 · PDF p. 157](assets/recommended/math/thomas-3-5-31-question.webp)
solution:
**Plan — we are going to…**

1. Recognize the numerator and denominator and use the quotient rule.

2. Calculate the derivative and simplify its signs and common terms.

**The trick**

The numerator is itself a product: differentiate it before inserting it into the quotient rule. Keep the outer quotient subtraction grouped.

**What you need to know**

Trigonometric derivative rules use **radians**. Retain any exclusions from the original trigonometric denominators. The derivative is taken with respect to the question’s input variable.

\\[
\\frac d{dx}\\sin x=\\cos x
\\]

For a quotient, keep the numerator order exactly as shown and square the entire original denominator. Exclude zeros of the original denominator.

\\[
\\left(\\frac uv\\right)\\prime=\\frac{u\\prime v-uv\\prime}{v^2}
\\]

For a power, multiply by its exponent and lower the exponent by one. Differentiate sums term by term; constants give zero.

\\[
\\frac d{dx}x^n=nx^{n-1}
\\]

**Step-by-step solution**

1. **Write the original function.**

\\[
f(q)=\\frac{q\\sin q}{q^2-1}
\\]

2. **Differentiate each changing term or factor.**

\\[
\\frac d{dq}(q\\sin q)=\\sin q+q\\cos q
\\]

\\[
f\\prime(q)=\\frac{(\\sin q+q\\cos q)(q^2-1)-(q\\sin q)(2q)}{(q^2-1)^2}
\\]

3. **Combine and simplify.**

\\[
f\\prime(q)=\\frac{q(q^2-1)\\cos q-(q^2+1)\\sin q}{(q^2-1)^2}
\\]

4. **Keep the original domain.** 

\\[
q\\ne-1,\\qquad q\\ne1
\\]

**Use this method again**

Use radians, simplify identities when useful, keep the original domain, and apply the derivative rule to the full expression before collecting terms.

**Check**

Independently estimate the slope from two nearby values of the original function, using a small symmetric increment. The central secant slope agrees with the derivative at this allowed input.

\\[
\\frac{f(2.0001)-f(1.9999)}{0.0002}\\approx-0.78260
\\]

\\[
f\\prime(2)\\approx-0.78260
\\]
:::

:::mcq
id: thomas-3-5-33
title: Thomas §3.5 · Exercise 33
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 33 · PDF p. 157](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What are the second derivatives in parts (a) and (b)?
- [ ] a | \\(-2\\csc^3x+\\csc x;\\quad-2\\sec^3x+\\sec x\\)
- [ ] b | \\(-\\csc x\\cot x;\\quad\\sec x\\tan x\\)
- [ ] c | \\(\\csc^2x;\\quad\\sec^2x\\)
- [x] d | \\(2\\csc^3x-\\csc x;\\quad2\\sec^3x-\\sec x\\)
explanation: (a) For y=csc x, y′=−csc x cot x and y″=csc x cot²x+csc³x=2csc³x−csc x. (b) For y=sec x, y′=sec x tan x and y″=sec x tan²x+sec³x=2sec³x−sec x.
hint: Work through every subpart in the original question.
example:
![Thomas §3.5 · Exercise 33 · PDF p. 157](assets/recommended/math/thomas-3-5-33-question.webp)
solution:
**Plan — we are going to…**

1. Differentiate cosecant once, then apply the product rule for its second derivative.

2. Repeat for secant and simplify both using Pythagorean identities.

**The trick**

A second derivative requires differentiating every factor of the first derivative. In the cosecant calculation two negative derivatives produce positive contributions.

**What you need to know**

Use radians and the product rule.Differentiate a product by differentiating one factor at a time and adding both contributions.

\\[
(uv)\\prime=u\\prime v+uv\\prime
\\]

\\[
(\\csc x)\\prime=-\\csc x\\cot x
\\]

\\[
(\\cot x)\\prime=-\\csc^2x
\\]

\\[
(\\sec x)\\prime=\\sec x\\tan x
\\]

\\[
(\\tan x)\\prime=\\sec^2x
\\]

**Step-by-step solution**

1. **Part (a): first derivative of cosecant.**

\\[
y=\\csc x
\\]

\\[
y\\prime=-\\csc x\\cot x
\\]

2. **Differentiate that product.**

\\[
y\\prime\\prime=-\\left[(-\\csc x\\cot x)\\cot x+\\csc x(-\\csc^2x)\\right]
\\]

\\[
y\\prime\\prime=\\csc x\\cot^2x+\\csc^3x
\\]

3. **Use the cosecant identity.**

\\[
\\cot^2x=\\csc^2x-1
\\]

\\[
y\\prime\\prime=\\csc x(\\csc^2x-1)+\\csc^3x=2\\csc^3x-\\csc x
\\]

4. **Part (b): first and second derivatives of secant.**

\\[
y=\\sec x,\\qquad y\\prime=\\sec x\\tan x
\\]

\\[
y\\prime\\prime=\\sec x\\tan^2x+\\sec^3x
\\]

5. **Use the secant identity.**

\\[
\\tan^2x=\\sec^2x-1
\\]

\\[
y\\prime\\prime=\\sec x(\\sec^2x-1)+\\sec^3x=2\\sec^3x-\\sec x
\\]

**Use this method again**

Write the complete first derivative, apply the product rule to it, and only then replace squared trig terms with identities.

**Check**

Check where the original functions have simple local minima. At a right angle cosecant is one and its second derivative is one; at zero secant is one and its second derivative is one. Both positive curvatures match those minima.

\\[
2\\csc^3\\frac\\pi2-\\csc\\frac\\pi2=2-1=1
\\]

\\[
2\\sec^3(0)-\\sec(0)=2-1=1
\\]
:::

:::mcq
id: thomas-3-5-35
title: Thomas §3.5 · Exercise 35
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 35 · PDF p. 157](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which tangent lines correspond, in order, to x=−π, 0, 3π/2?
- [ ] a | y=−x−π; y=−x; y=0
- [x] b | y=−x−π; y=x; y=−1
- [ ] c | y=x+π; y=−x; y=1
- [ ] d | y=−x+π; y=x; y=1
explanation: For y=sin x, y′=cos x. At x=−π the point is (−π,0), slope −1, giving y=−x−π. At 0 the point is (0,0), slope 1, giving y=x. At 3π/2 the point is (3π/2,−1), slope 0, giving y=−1. Graph these with sin x over [−3π/2,2π]; the complete textbook sketch is included below.
hint: Work through every subpart in the original question.
example:
![Thomas §3.5 · Exercise 35 · PDF p. 157](assets/recommended/math/thomas-3-5-35-context-1.webp)

![Thomas §3.5 · Exercise 35 · PDF p. 157](assets/recommended/math/thomas-3-5-35-question.webp)
solution:
**Plan — we are going to…**

1. Find the sine derivative and each requested contact point.

2. Use point-slope form to write the three tangent lines.

3. Sketch the sine curve and label all three lines.

**The trick**

A horizontal tangent occurs where cosine is zero; its equation uses the sine height at that input, not zero automatically.

**What you need to know**

Use radians. A tangent has derivative slope and passes through the point on the original curve.

\\[
y=\\sin x,\\qquad y\\prime=\\cos x
\\]

A tangent at a given input passes through the corresponding point of the curve, with slope equal to the derivative.

\\[
y-f(a)=f\\prime(a)(x-a)
\\]

**Step-by-step solution**

1. **At input minus pi.**

\\[
\\sin(-\\pi)=0,\\qquad\\cos(-\\pi)=-1
\\]

\\[
y-0=-1(x+\\pi)
\\]

\\[
y=-x-\\pi
\\]

2. **At input zero.**

\\[
\\sin0=0,\\qquad\\cos0=1
\\]

\\[
y=x
\\]

3. **At input three pi over two.**

\\[
\\sin\\frac{3\\pi}2=-1,\\qquad\\cos\\frac{3\\pi}2=0
\\]

\\[
y+1=0\\left(x-\\frac{3\\pi}2\\right)
\\]

\\[
y=-1
\\]

4. **Sketch all requested objects.** Draw the sine curve on the stated closed interval; mark the three contact points. Draw a descending slope-minus-one line at the first, an ascending slope-one line at the origin, and the horizontal line at the final minimum. Label each line with its equation.

\\[
-\\frac{3\\pi}2\\le x\\le2\\pi
\\]

**Use this method again**

For each requested tangent, separately find the original height and derivative slope; then plot the curve, point and line together.

**Check**

Each line gives the correct height at its contact input. Their slopes are respectively minus one, one and zero, equal to cosine at those inputs.

\\[
-(-\\pi)-\\pi=0
\\]

\\[
0=\\sin0
\\]

\\[
-1=\\sin\\frac{3\\pi}2
\\]
:::

:::mcq
id: thomas-3-5-37
title: Thomas §3.5 · Exercise 37
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 37 · PDF p. 157](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What are the tangent slopes at x=−π/3 and x=π/4, respectively?
- [ ] a | \\(2\\sqrt3,\\ -\\sqrt2\\)
- [ ] b | \\(-\\sqrt3,\\ 1\\)
- [ ] c | \\(2,\\ \\sqrt2\\)
- [x] d | \\(-2\\sqrt3,\\ \\sqrt2\\)
explanation: For y=sec x, y′=sec x tan x. At (−π/3,2), the slope is −2√3 and tangent is \\(y-2=-2\\sqrt3(x+\\pi/3)\\). At (π/4,√2), slope √2 gives \\(y-\\sqrt2=\\sqrt2(x-\\pi/4)\\). Draw these with the secant curve on (−π/2,π/2); the full book sketch is included.
hint: Work through every subpart in the original question.
example:
![Thomas §3.5 · Exercise 37 · PDF p. 157](assets/recommended/math/thomas-3-5-37-context-1.webp)

![Thomas §3.5 · Exercise 37 · PDF p. 157](assets/recommended/math/thomas-3-5-37-question.webp)
solution:
**Plan — we are going to…**

1. Use secant times tangent for the derivative.

2. Evaluate both slopes and write the two tangent lines.

3. Sketch the secant branch and label the tangents.

**The trick**

The first input is negative: tangent is negative there, while secant is positive. The first slope must therefore be negative.

**What you need to know**

Use radians. Secant is reciprocal cosine, tangent is sine divided by cosine, and the derivative is their product.

\\[
(\\sec x)\\prime=\\sec x\\tan x
\\]

A tangent at a given input passes through the corresponding point of the curve, with slope equal to the derivative.

\\[
y-f(a)=f\\prime(a)(x-a)
\\]

**Step-by-step solution**

1. **At input minus pi over three.**

\\[
\\sec\\left(-\\frac\\pi3\\right)=2
\\]

\\[
\\tan\\left(-\\frac\\pi3\\right)=-\\sqrt3
\\]

\\[
m_1=2(-\\sqrt3)=-2\\sqrt3
\\]

\\[
y-2=-2\\sqrt3\\left(x+\\frac\\pi3\\right)
\\]

2. **At input pi over four.**

\\[
\\sec\\frac\\pi4=\\sqrt2,\\qquad\\tan\\frac\\pi4=1
\\]

\\[
m_2=\\sqrt2
\\]

\\[
y-\\sqrt2=\\sqrt2\\left(x-\\frac\\pi4\\right)
\\]

3. **Sketch the requested branch.** Draw the positive U-shaped secant branch, with minimum at the point with input zero and height one. Its vertical asymptotes bound the open interval. Mark both contact points; draw and label the descending left tangent and ascending right tangent.

\\[
-\\frac\\pi2<x<\\frac\\pi2
\\]

**Use this method again**

Use the unit circle to get exact secant and tangent values, multiply for the slope, then use the original secant height for the line.

**Check**

The signs agree with the graph: secant decreases on the negative side and increases on the positive side. Each point-slope equation gives the exact stated height when the input equals its contact input.

\\[
m_1=-2\\sqrt3<0,\\qquad m_2=\\sqrt2>0
\\]
:::

:::mcq
id: thomas-3-5-43
title: Thomas §3.5 · Exercise 43
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 43 · PDF p. 157](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: At which points is the tangent parallel to y=2x?
- [ ] a | \\((-\\pi/4,1)\\) and \\((\\pi/4,-1)\\)
- [x] b | \\((-\\pi/4,-1)\\) and \\((\\pi/4,1)\\)
- [ ] c | \\((0,0)\\) only
- [ ] d | \\((-\\pi/3,-\\sqrt3)\\) and \\((\\pi/3,\\sqrt3)\\)
explanation: For y=tan x on (−π/2,π/2), y′=sec²x. Setting the slope equal to 2 gives x=±π/4. The tangent lines are \\(y=2x+\\pi/2-1\\) at (−π/4,−1) and \\(y=2x-\\pi/2+1\\) at (π/4,1). The included book sketch shows both with the curve.
hint: Work through every subpart in the original question.
example:
![Thomas §3.5 · Exercise 43 · PDF p. 157](assets/recommended/math/thomas-3-5-43-question.webp)
solution:
**Plan — we are going to…**

1. Set the tangent derivative equal to the required line slope.

2. Solve within the given branch, find both points and tangent lines.

3. Sketch both tangents with the curve.

**The trick**

The secant-squared equation has two solutions on this branch. Retain both signs of the input.

**What you need to know**

Parallel lines have equal slopes. Tangent’s derivative is secant squared, and the identity below converts the slope equation to a tangent value.

\\[
(\\tan x)\\prime=\\sec^2x
\\]

\\[
\\sec^2x=1+\\tan^2x
\\]

A tangent at a given input passes through the corresponding point of the curve, with slope equal to the derivative.

\\[
y-f(a)=f\\prime(a)(x-a)
\\]

**Step-by-step solution**

1. **Translate parallelism to slope two.**

\\[
\\sec^2x=2
\\]

\\[
1+\\tan^2x=2\\quad\\Longrightarrow\\quad\\tan x=\\pm1
\\]

2. **Restrict to the stated branch.**

\\[
-\\frac\\pi2<x<\\frac\\pi2
\\]

\\[
x=-\\frac\\pi4\\quad\\text{or}\\quad x=\\frac\\pi4
\\]

3. **Find both contact points.**

\\[
\\left(-\\frac\\pi4,-1\\right)\\quad\\text{and}\\quad\\left(\\frac\\pi4,1\\right)
\\]

4. **Write the tangent lines.**

\\[
y+1=2\\left(x+\\frac\\pi4\\right)
\\]

\\[
y=2x+\\frac\\pi2-1
\\]

\\[
y-1=2\\left(x-\\frac\\pi4\\right)
\\]

\\[
y=2x-\\frac\\pi2+1
\\]

5. **Sketch and label.** Draw the increasing tangent curve between its two vertical asymptotes. Mark the two contact points and draw the two parallel slope-two lines with the equations above.

**Use this method again**

Required line direction → derivative condition → solve in the stated interval → original heights → point-slope equations.

**Check**

At each contact input cosine has magnitude square root two over two, so its reciprocal square equals two. Both lines pass through their respective curve points.

\\[
\\sec^2\\left(\\pm\\frac\\pi4\\right)=2
\\]
:::

:::mcq
id: thomas-3-5-45
title: Thomas §3.5 · Exercise 45
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 45 · PDF p. 157](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which equations give (a) the tangent at P and (b) the horizontal tangent at Q?
- [ ] a | \\(y=x-\\pi/2+2;\\quad y=4+\\sqrt3\\)
- [ ] b | \\(y=-x+2;\\quad y=2\\)
- [ ] c | \\(y=-x+\\pi/2+2;\\quad y=4+\\sqrt3\\)
- [x] d | \\(y=-x+\\pi/2+2;\\quad y=4-\\sqrt3\\)
explanation: The curve is y=4+cot x−2csc x, so y′=−csc²x+2csc x cot x. (a) At P=(π/2,2), slope −1 gives y=−x+π/2+2. (b) In the pictured branch, a horizontal tangent requires 2cos x−1=0, so Q has x=π/3 and y=4−√3; its tangent is y=4−√3.
hint: Work through every subpart in the original question.
example:
![Thomas §3.5 · Exercise 45 · PDF p. 157](assets/recommended/math/thomas-3-5-45-context-1.webp)

![Thomas §3.5 · Exercise 45 · PDF p. 157](assets/recommended/math/thomas-3-5-45-question.webp)
solution:
**Plan — we are going to…**

1. Differentiate the cotangent-cosecant curve.

2. Evaluate the tangent at the marked point.

3. Set the derivative to zero for the horizontal tangent on the pictured branch.

**The trick**

For a horizontal tangent set the slope to zero, not the function height. Multiply by sine squared only where the original curve is defined.

**What you need to know**

Use radians and the derivatives of cotangent and cosecant. A horizontal tangent has derivative zero.

\\[
(\\cot x)\\prime=-\\csc^2x
\\]

\\[
(\\csc x)\\prime=-\\csc x\\cot x
\\]

A tangent at a given input passes through the corresponding point of the curve, with slope equal to the derivative.

\\[
y-f(a)=f\\prime(a)(x-a)
\\]

**Step-by-step solution**

1. **Find the derivative.**

\\[
y=4+\\cot x-2\\csc x
\\]

\\[
y\\prime=-\\csc^2x+2\\csc x\\cot x
\\]

2. **Part (a): tangent at the marked point.**

\\[
P=\\left(\\frac\\pi2,2\\right)
\\]

\\[
y\\prime\\left(\\frac\\pi2\\right)=-1+0=-1
\\]

\\[
y-2=-\\left(x-\\frac\\pi2\\right)
\\]

\\[
y=-x+\\frac\\pi2+2
\\]

3. **Part (b): solve the zero-slope condition.**

\\[
y\\prime=\\frac{-1+2\\cos x}{\\sin^2x}
\\]

\\[
-1+2\\cos x=0\\quad\\Longrightarrow\\quad\\cos x=\\frac12
\\]

\\[
x=\\frac\\pi3\\quad\\text{on the pictured branch}
\\]

4. **Find the height and horizontal line.**

\\[
y\\left(\\frac\\pi3\\right)=4+\\frac1{\\sqrt3}-\\frac4{\\sqrt3}=4-\\sqrt3
\\]

\\[
Q=\\left(\\frac\\pi3,4-\\sqrt3\\right)
\\]

\\[
y=4-\\sqrt3
\\]

**Use this method again**

Differentiate once; use point-slope form at a specified point, and solve derivative zero for a horizontal tangent within the requested branch.

**Check**

At the horizontal contact input, twice cosine minus one is zero while sine squared is nonzero. At the marked point, the sloped line gives height two.

\\[
2\\cos\\frac\\pi3-1=0
\\]

\\[
-\\frac\\pi2+\\frac\\pi2+2=2
\\]
:::

:::mcq
id: thomas-3-5-49
title: Thomas §3.5 · Exercise 49
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 49 · PDF p. 157](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which value answers the original question?
- [ ] a | \\(- \\frac{\\sqrt{3}}{2}\\)
- [ ] b | \\(\\sqrt{3}\\)
- [ ] c | \\(\\frac{\\sqrt{3}}{4}\\)
- [x] d | \\(\\frac{\\sqrt{3}}{2}\\)
explanation: This is the derivative of sin θ at θ=π/6, because sin(π/6)=1/2. The limit is cos(π/6)=√3/2.
hint: Work through every subpart in the original question.
example:
![Thomas §3.5 · Exercise 49 · PDF p. 157](assets/recommended/math/thomas-3-5-49-context-1.webp)

![Thomas §3.5 · Exercise 49 · PDF p. 157](assets/recommended/math/thomas-3-5-49-question.webp)
solution:
**Plan — we are going to…**

1. Recognize the expression as a sine difference quotient at a fixed angle.

2. Evaluate the sine derivative at that angle.

**The trick**

The subtracted one half is exactly the sine of pi over six. This identifies a derivative definition rather than an ordinary quotient substitution.

**What you need to know**

A difference quotient approaching a fixed input gives the derivative there; the sine derivative is cosine when angles are in radians.

\\[
f\\prime(a)=\\lim_{\\theta\\to a}\\frac{f(\\theta)-f(a)}{\\theta-a}
\\]

\\[
(\\sin\\theta)\\prime=\\cos\\theta
\\]

**Step-by-step solution**

1. **Identify the base angle and height.**

\\[
a=\\frac\\pi6,\\qquad\\sin a=\\frac12
\\]

2. **Rewrite as the derivative definition.**

\\[
\\lim_{\\theta\\to\\pi/6}\\frac{\\sin\\theta-\\frac12}{\\theta-\\frac\\pi6}=\\left.\\frac d{d\\theta}\\sin\\theta\\right|_{\\theta=\\pi/6}
\\]

3. **Evaluate exactly.**

\\[
\\cos\\frac\\pi6=\\frac{\\sqrt3}2
\\]

**Use this method again**

Match the numerator’s fixed function value and denominator’s fixed input to recognize a derivative limit.

**Check**

The unit circle gives the cosine value square root three over two, approximately 0.86603. A symmetric secant of sine centered at pi over six with small increment 0.0001 also gives approximately 0.86603.

\\[
\\frac{\\sin(\\frac\\pi6+0.0001)-\\sin(\\frac\\pi6-0.0001)}{0.0002}\\approx0.86603
\\]
:::

:::mcq
id: thomas-3-5-51
title: Thomas §3.5 · Exercise 51
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 51 · PDF p. 157](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which value answers the original question?
- [ ] a | \\(- \\frac{1}{2}\\)
- [x] b | \\(-1\\)
- [ ] c | \\(1\\)
- [ ] d | \\(-2\\)
explanation: As x→0, cos x→1 and sec x→1. The inner expression tends to 1+π tan(π/4)−1=π. Since sec is continuous at π, the limit is sec π=−1.
hint: Work through every subpart in the original question.
example:
![Thomas §3.5 · Exercise 51 · PDF p. 157](assets/recommended/math/thomas-3-5-51-context-1.webp)

![Thomas §3.5 · Exercise 51 · PDF p. 157](assets/recommended/math/thomas-3-5-51-question.webp)
solution:
**Plan — we are going to…**

1. Evaluate the inner reciprocal-secant argument.

2. Evaluate tangent, then the whole argument of the outer secant.

3. Check the outer cosine is nonzero and substitute.

**The trick**

Work from the innermost expression outward. Secant can only be evaluated continuously when its cosine denominator does not vanish.

**What you need to know**

Use radians and evaluate nested continuous functions from inside to outside. Secant is reciprocal cosine.

\\[
\\sec u=\\frac1{\\cos u}
\\]

**Step-by-step solution**

1. **Find the innermost limit.**

\\[
\\cos x\\longrightarrow1,\\qquad\\sec x\\longrightarrow1\\quad(x\\to0)
\\]

\\[
\\frac\\pi{4\\sec x}\\longrightarrow\\frac\\pi4
\\]

2. **Evaluate tangent and the outer argument.**

\\[
\\tan\\left(\\frac\\pi{4\\sec x}\\right)\\longrightarrow\\tan\\frac\\pi4=1
\\]

\\[
\\cos x+\\pi\\tan\\left(\\frac\\pi{4\\sec x}\\right)-1\\longrightarrow1+\\pi-1=\\pi
\\]

3. **Apply the outer secant.**

\\[
\\cos\\pi=-1\\ne0
\\]

\\[
\\lim_{x\\to0}\\sec\\left[\\cos x+\\pi\\tan\\left(\\frac\\pi{4\\sec x}\\right)-1\\right]=\\sec\\pi=-1
\\]

**Use this method again**

Nested trigonometric limit → innermost limit → next function → outer argument → check the outer denominator → final value.

**Check**

At input zero the full expression is already defined: inner secant is one, tangent is one, and outer secant is reciprocal cosine of pi. The expression therefore equals minus one at the limiting input.
:::

:::mcq
id: thomas-3-5-53
title: Thomas §3.5 · Exercise 53
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 53 · PDF p. 157](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which value answers the original question?
- [ ] a | \\(1\\)
- [ ] b | \\(-1\\)
- [ ] c | \\(2\\)
- [x] d | \\(0\\)
explanation: Use sin t/t→1 as t→0. The tangent argument 1−sin t/t tends to 0, hence the limit is tan 0=0.
hint: Work through every subpart in the original question.
example:
![Thomas §3.5 · Exercise 53 · PDF p. 157](assets/recommended/math/thomas-3-5-53-context-1.webp)

![Thomas §3.5 · Exercise 53 · PDF p. 157](assets/recommended/math/thomas-3-5-53-question.webp)
solution:
**Plan — we are going to…**

1. Apply the standard sine-over-angle limit.

2. Evaluate the resulting tangent argument and use tangent continuity.

**The trick**

The inner quotient has no value at zero, but it has limit one. Use that limit before evaluating the outer tangent.

**What you need to know**

The standard sine quotient limit uses radians. Tangent is continuous at zero because cosine there is one.

\\[
\\lim_{t\\to0}\\frac{\\sin t}{t}=1
\\]

**Step-by-step solution**

1. **Find the argument limit.**

\\[
1-\\frac{\\sin t}t\\longrightarrow1-1=0
\\]

2. **Evaluate the outer limit.**

\\[
\\lim_{t\\to0}\\tan\\left(1-\\frac{\\sin t}t\\right)=\\tan0=0
\\]

**Use this method again**

Evaluate a known inner quotient limit first, then check continuity of the outer function at that argument.

**Check**

At input 0.01 the tangent argument is approximately 0.00001667; at input 0.001 it is approximately 0.0000001667. Tangent of these small arguments approaches zero from both sides.
:::

:::mcq
id: thomas-3-5-57
title: Thomas §3.5 · Exercise 57
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 57 · PDF p. 157](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What value of c makes the function continuous at x=0?
- [ ] a | \\(-9\\)
- [ ] b | \\(18\\)
- [ ] c | \\(\\frac{9}{2}\\)
- [x] d | \\(9\\)
explanation: For x≠0, sin²(3x)/x²=9[sin(3x)/(3x)]²→9. Continuity at the origin requires c=9.
hint: Work through every subpart in the original question.
example:
![Thomas §3.5 · Exercise 57 · PDF p. 157](assets/recommended/math/thomas-3-5-57-question.webp)
solution:
**Plan — we are going to…**

1. Rewrite the nonzero branch using a standard sine quotient.

2. Find its limit and match it to the value assigned at zero.

**The trick**

The sine argument is three times the input. Compensate by a factor nine when squaring the standard sine quotient.

**What you need to know**

Continuity at zero requires the function’s assigned value to equal the two-sided branch limit. The standard sine-over-angle limit uses radians.

\\[
\\lim_{u\\to0}\\frac{\\sin u}u=1
\\]

**Step-by-step solution**

1. **Rewrite the branch for nonzero input.**

\\[
\\frac{\\sin^2(3x)}{x^2}=9\\left(\\frac{\\sin(3x)}{3x}\\right)^2
\\]

2. **Take the limit.**

\\[
\\lim_{x\\to0}9\\left(\\frac{\\sin(3x)}{3x}\\right)^2=9(1)^2=9
\\]

3. **Match the assigned value.**

\\[
f(0)=c=9
\\]

Yes: this coefficient makes the function continuous at zero.

**Use this method again**

Scale the sine argument and denominator together, track the resulting coefficient, then match the assigned point value.

**Check**

The branch is nonnegative and even, so both sides approach the same nonnegative value. At input 0.001 its value is approximately 8.999973, approaching nine.

\\[
\\frac{\\sin^2(0.003)}{0.001^2}\\approx8.999973
\\]
:::

:::mcq
id: thomas-3-5-58
title: Thomas §3.5 · Exercise 58
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 58 · PDF p. 157](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: For which b is the function continuous at 0, and can it be differentiable there?
- [ ] a | b=1 gives continuity and differentiability
- [ ] b | No b gives even continuity
- [x] c | b=1 gives continuity; no b gives differentiability
- [ ] d | b=0 gives continuity and differentiability
explanation: The left limit of x+b is b; the value and right limit of cos x are 1. Continuity forces b=1. Then the left derivative is 1 whereas the right derivative is −sin 0=0, so the function cannot be differentiable at 0 for any b.
hint: Work through every subpart in the original question.
example:
![Thomas §3.5 · Exercise 58 · PDF p. 157](assets/recommended/math/thomas-3-5-58-question.webp)
solution:
**Plan — we are going to…**

1. Match left and right values for continuity at zero.

2. For the continuous candidate, compare the two derivative limits.

**The trick**

Only one coefficient makes the branches meet, but meeting is insufficient: their slopes still disagree.

**What you need to know**

Differentiability at a join requires continuity and equal one-sided difference quotients. A cosine derivative uses radians.

\\[
(\\cos x)\\prime=-\\sin x
\\]

**Step-by-step solution**

1. **Find the value and right limit.**

\\[
g(0)=\\cos0=1
\\]

\\[
\\lim_{x\\to0^+}\\cos x=1
\\]

2. **Find and match the left limit.**

\\[
\\lim_{x\\to0^-}(x+b)=b
\\]

\\[
b=1
\\]

3. **For this coefficient, calculate the left derivative.**

\\[
g\\prime_-(0)=\\lim_{h\\to0^-}\\frac{h+1-1}h=1
\\]

4. **Calculate the right derivative.**

\\[
g\\prime_+(0)=\\left.-\\sin x\\right|_{x=0}=0
\\]

5. **State both conclusions.** The function is continuous precisely when the coefficient is one. It is differentiable for no coefficient: that candidate has unequal slopes, and every other coefficient fails continuity.

**Use this method again**

Find the only continuous parameter choice first; test its one-sided derivatives, and reject every discontinuous choice automatically.

**Check**

The left branch is a slope-one line. The cosine curve is horizontal at zero. Those distinct geometric slopes confirm the computed corner, even when both heights equal one.

\\[
1\\ne0
\\]
:::`};export{e as default};