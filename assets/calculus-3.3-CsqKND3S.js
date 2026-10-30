var e={id:`calculus-3.3`,title:`Thomas Calculus §3.3 Practice`,summary:`Thomas' Calculus §3.3 · original textbook exercises and verified practice.`,subjectId:`mathematics`,reward:0,status:`published`,authoringSource:`:::mcq
id: thomas-3-3-3
title: Thomas §3.3 · Exercise 3
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 3 · PDF p. 139](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the first derivative requested for the original function?
- [ ] a | \\(- 30 t^{2} \\left(t - 1\\right) \\left(t + 1\\right)\\)
- [x] b | \\(- 15 t^{2} \\left(t - 1\\right) \\left(t + 1\\right)\\)
- [ ] c | \\(- 3 t^{5} + 5 t^{3}\\)
- [ ] d | \\(15 t^{2} \\left(t - 1\\right) \\left(t + 1\\right)\\)
explanation: The original function is \\(- 3 t^{5} + 5 t^{3}\\). Differentiate with respect to \\(t\\): its first derivative is \\(- 15 t^{2} \\left(t - 1\\right) \\left(t + 1\\right)\\). The second derivative is \\(- 30 t \\left(2 t^{2} - 1\\right)\\).
hint: Work through every subpart in the original question.
example:
![Thomas §3.3 · Exercise 3 · PDF p. 139](assets/recommended/math/thomas-3-3-3-context-1.webp)

![Thomas §3.3 · Exercise 3 · PDF p. 139](assets/recommended/math/thomas-3-3-3-question.webp)
solution:
**Plan — we are going to…**

1. Identify the terms and choose the power rule after simplifying.

2. Compute and simplify the first derivative, then the additional requested derivatives.

**The trick**

Keep the minus sign on the fifth-power term. Differentiate the expanded first derivative for the second derivative.

**What you need to know**

For a power, multiply by its exponent and lower the exponent by one. Differentiate sums term by term; constants give zero.

\\[
\\frac d{dx}x^n=nx^{n-1}
\\]

**Step-by-step solution**

1. **Read the original function and simplify only by valid algebra.**

\\[
f(t)=-3t^5+5t^3
\\]

2. **Apply the differentiation rule.**

\\[
f\\prime(t)=(-3)(5)t^4+(5)(3)t^2
\\]

3. **Simplify the first derivative.**

\\[
f\\prime(t)=-15t^4+15t^2=-15t^2(t-1)(t+1)
\\]

4. **Differentiate the first derivative again.**

\\[
f\\prime\\prime(t)=-60t^3+30t=-30t(2t^2-1)
\\]

**Use this method again**

Keep the original domain, simplify products or powers when useful, apply the appropriate rule, and repeat differentiation only for the requested orders.

**Check**

Independently estimate the slope from two nearby values of the original function, using a small symmetric increment. The central secant slope agrees with the derivative at this allowed input.

\\[
\\frac{f(1.0001)-f(0.9999)}{0.0002}\\approx-0.00000
\\]

\\[
f\\prime(1)\\approx0.00000
\\]
:::

:::mcq
id: thomas-3-3-9
title: Thomas §3.3 · Exercise 9
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 9 · PDF p. 139](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the first derivative requested for the original function?
- [ ] a | \\(6 x^{2} - 10 x - \\frac{5}{x^{2}}\\)
- [ ] b | \\(- \\frac{2 \\left(6 x^{4} - 5 x^{3} + 5\\right)}{x^{3}}\\)
- [ ] c | \\(\\frac{4 \\left(6 x^{4} - 5 x^{3} + 5\\right)}{x^{3}}\\)
- [x] d | \\(\\frac{2 \\left(6 x^{4} - 5 x^{3} + 5\\right)}{x^{3}}\\)
explanation: The original function is \\(6 x^{2} - 10 x - \\frac{5}{x^{2}}\\). Differentiate with respect to \\(x\\): its first derivative is \\(\\frac{2 \\left(6 x^{4} - 5 x^{3} + 5\\right)}{x^{3}}\\). The second derivative is \\(\\frac{6 \\left(2 x^{4} - 5\\right)}{x^{4}}\\).
hint: Work through every subpart in the original question.
example:
![Thomas §3.3 · Exercise 9 · PDF p. 139](assets/recommended/math/thomas-3-3-9-context-1.webp)

![Thomas §3.3 · Exercise 9 · PDF p. 139](assets/recommended/math/thomas-3-3-9-question.webp)
solution:
**Plan — we are going to…**

1. Identify the terms and choose the power rule after simplifying.

2. Compute and simplify the first derivative, then the additional requested derivatives.

**The trick**

The derivative of the negative reciprocal-square term is positive. On the next differentiation its sign becomes negative again.

**What you need to know**

For a power, multiply by its exponent and lower the exponent by one. Differentiate sums term by term; constants give zero.

\\[
\\frac d{dx}x^n=nx^{n-1}
\\]

**Step-by-step solution**

1. **Read the original function and simplify only by valid algebra.**

\\[
f(x)=6x^2-10x-\\frac5{x^2}
\\]

2. **Rewrite into easier terms.**

\\[
f(x)=6x^2-10x-5x^{-2},\\qquad x\\ne0
\\]

3. **Apply the differentiation rule.**

\\[
f\\prime(x)=12x-10+10x^{-3}
\\]

4. **Simplify the first derivative.**

\\[
f\\prime(x)=12x-10+\\frac{10}{x^3}=\\frac{2(6x^4-5x^3+5)}{x^3}
\\]

5. **Differentiate the first derivative again.**

\\[
f\\prime\\prime(x)=12-\\frac{30}{x^4}
\\]

**Use this method again**

Keep the original domain, simplify products or powers when useful, apply the appropriate rule, and repeat differentiation only for the requested orders.

**Check**

Independently estimate the slope from two nearby values of the original function, using a small symmetric increment. The central secant slope agrees with the derivative at this allowed input.

\\[
\\frac{f(2.0001)-f(1.9999)}{0.0002}\\approx15.25000
\\]

\\[
f\\prime(2)\\approx15.25000
\\]
:::

:::mcq
id: thomas-3-3-15
title: Thomas §3.3 · Exercise 15
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 15 · PDF p. 139](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the first derivative requested for the original function?
- [ ] a | \\(\\frac{2 \\left(3 x^{4} + 10 x^{3} + 2 x^{2} - 1\\right)}{x^{2}}\\)
- [x] b | \\(\\frac{3 x^{4} + 10 x^{3} + 2 x^{2} - 1}{x^{2}}\\)
- [ ] c | \\(\\left(x^{2} + 1\\right) \\left(x + 5 + \\frac{1}{x}\\right)\\)
- [ ] d | \\(- \\frac{3 x^{4} + 10 x^{3} + 2 x^{2} - 1}{x^{2}}\\)
explanation: The original function is \\(\\left(x^{2} + 1\\right) \\left(x + 5 + \\frac{1}{x}\\right)\\). Differentiate with respect to \\(x\\): its first derivative is \\(\\frac{3 x^{4} + 10 x^{3} + 2 x^{2} - 1}{x^{2}}\\). The product rule and expansion followed by the power rule give the same derivative; expand the displayed original product to verify the second method.
hint: Work through every subpart in the original question.
example:
![Thomas §3.3 · Exercise 15 · PDF p. 139](assets/recommended/math/thomas-3-3-15-context-1.webp)

![Thomas §3.3 · Exercise 15 · PDF p. 139](assets/recommended/math/thomas-3-3-15-question.webp)
solution:
**Plan — we are going to…**

1. Identify the terms and choose the product rule.

2. Compute and simplify the first derivative.

**The trick**

The reciprocal term makes input zero invalid even if you expand the product. Use the product rule, or expand into powers as an independent route.

**What you need to know**

For a power, multiply by its exponent and lower the exponent by one. Differentiate sums term by term; constants give zero.

\\[
\\frac d{dx}x^n=nx^{n-1}
\\]

Differentiate a product by differentiating one factor at a time and adding both contributions.

\\[
(uv)\\prime=u\\prime v+uv\\prime
\\]

**Step-by-step solution**

1. **Read the original function and simplify only by valid algebra.**

\\[
f(x)=(x^2+1)\\left(x+5+\\frac1x\\right)
\\]

2. **Apply the differentiation rule.**

\\[
f\\prime(x)=2x\\left(x+5+\\frac1x\\right)+(x^2+1)\\left(1-\\frac1{x^2}\\right)
\\]

3. **Simplify the first derivative.**

\\[
f\\prime(x)=3x^2+10x+2-\\frac1{x^2}=\\frac{3x^4+10x^3+2x^2-1}{x^2}
\\]

**Use this method again**

Keep the original domain, simplify products or powers when useful, apply the appropriate rule, and repeat differentiation only for the requested orders.

**Check**

Independently estimate the slope from two nearby values of the original function, using a small symmetric increment. The central secant slope agrees with the derivative at this allowed input.

\\[
\\frac{f(1.0001)-f(0.9999)}{0.0002}\\approx14.00000
\\]

\\[
f\\prime(1)\\approx14.00000
\\]
:::

:::mcq
id: thomas-3-3-23
title: Thomas §3.3 · Exercise 23
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 23 · PDF p. 139](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the first derivative requested for the original function?
- [ ] a | \\(\\frac{2}{\\sqrt{s} \\left(\\sqrt{s} + 1\\right)^{2}}\\)
- [x] b | \\(\\frac{1}{\\sqrt{s} \\left(\\sqrt{s} + 1\\right)^{2}}\\)
- [ ] c | \\(\\frac{\\sqrt{s} - 1}{\\sqrt{s} + 1}\\)
- [ ] d | \\(- \\frac{1}{\\sqrt{s} \\left(\\sqrt{s} + 1\\right)^{2}}\\)
explanation: The original function is \\(\\frac{\\sqrt{s} - 1}{\\sqrt{s} + 1}\\). Differentiate with respect to \\(s\\): its first derivative is \\(\\frac{1}{\\sqrt{s} \\left(\\sqrt{s} + 1\\right)^{2}}\\).
hint: Work through every subpart in the original question.
example:
![Thomas §3.3 · Exercise 23 · PDF p. 139](assets/recommended/math/thomas-3-3-23-context-1.webp)

![Thomas §3.3 · Exercise 23 · PDF p. 139](assets/recommended/math/thomas-3-3-23-question.webp)
solution:
**Plan — we are going to…**

1. Identify the terms and choose the quotient rule.

2. Compute and simplify the first derivative.

**The trick**

Both numerator and denominator contain the same root derivative. Factor it first so their difference simplifies to two. The formula is finite for positive input.

**What you need to know**

For a power, multiply by its exponent and lower the exponent by one. Differentiate sums term by term; constants give zero.

\\[
\\frac d{dx}x^n=nx^{n-1}
\\]

For a quotient, keep the numerator order exactly as shown and square the entire original denominator. Exclude zeros of the original denominator.

\\[
\\left(\\frac uv\\right)\\prime=\\frac{u\\prime v-uv\\prime}{v^2}
\\]

**Step-by-step solution**

1. **Read the original function and simplify only by valid algebra.**

\\[
f(s)=\\frac{\\sqrt s-1}{\\sqrt s+1}
\\]

2. **Apply the differentiation rule.**

\\[
f\\prime(s)=\\frac{\\frac1{2\\sqrt s}(\\sqrt s+1)-(\\sqrt s-1)\\frac1{2\\sqrt s}}{(\\sqrt s+1)^2}
\\]

3. **Simplify the first derivative.**

\\[
f\\prime(s)=\\frac{(\\sqrt s+1)-(\\sqrt s-1)}{2\\sqrt s(\\sqrt s+1)^2}=\\frac1{\\sqrt s(\\sqrt s+1)^2}
\\]

**Use this method again**

Keep the original domain, simplify products or powers when useful, apply the appropriate rule, and repeat differentiation only for the requested orders.

**Check**

Independently estimate the slope from two nearby values of the original function, using a small symmetric increment. The central secant slope agrees with the derivative at this allowed input.

\\[
\\frac{f(1.0001)-f(0.9999)}{0.0002}\\approx0.25000
\\]

\\[
f\\prime(1)\\approx0.25000
\\]
:::

:::mcq
id: thomas-3-3-25
title: Thomas §3.3 · Exercise 25
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 25 · PDF p. 139](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the first derivative requested for the original function?
- [ ] a | \\(\\frac{- 4 \\sqrt{x} + x + 1}{x}\\)
- [ ] b | \\(- \\frac{- x^{\\frac{3}{2}} + 2 x^{2}}{x^{\\frac{7}{2}}}\\)
- [ ] c | \\(\\frac{2 \\left(- x^{\\frac{3}{2}} + 2 x^{2}\\right)}{x^{\\frac{7}{2}}}\\)
- [x] d | \\(\\frac{- x^{\\frac{3}{2}} + 2 x^{2}}{x^{\\frac{7}{2}}}\\)
explanation: The original function is \\(\\frac{- 4 \\sqrt{x} + x + 1}{x}\\). Differentiate with respect to \\(x\\): its first derivative is \\(\\frac{- x^{\\frac{3}{2}} + 2 x^{2}}{x^{\\frac{7}{2}}}\\).
hint: Work through every subpart in the original question.
example:
![Thomas §3.3 · Exercise 25 · PDF p. 139](assets/recommended/math/thomas-3-3-25-context-1.webp)

![Thomas §3.3 · Exercise 25 · PDF p. 139](assets/recommended/math/thomas-3-3-25-question.webp)
solution:
**Plan — we are going to…**

1. Identify the terms and choose the power rule after simplifying.

2. Compute and simplify the first derivative.

**The trick**

Divide every numerator term by the input first. This avoids a long quotient rule and keeps the square-root restriction visible.

**What you need to know**

For a power, multiply by its exponent and lower the exponent by one. Differentiate sums term by term; constants give zero.

\\[
\\frac d{dx}x^n=nx^{n-1}
\\]

**Step-by-step solution**

1. **Read the original function and simplify only by valid algebra.**

\\[
f(x)=\\frac{x-4\\sqrt x+1}{x}
\\]

2. **Rewrite into easier terms.**

\\[
f(x)=1-4x^{-1/2}+x^{-1},\\qquad x>0
\\]

3. **Apply the differentiation rule.**

\\[
f\\prime(x)=0+(-4)\\left(-\\frac12\\right)x^{-3/2}-x^{-2}
\\]

4. **Simplify the first derivative.**

\\[
f\\prime(x)=\\frac2{x^{3/2}}-\\frac1{x^2}
\\]

**Use this method again**

Keep the original domain, simplify products or powers when useful, apply the appropriate rule, and repeat differentiation only for the requested orders.

**Check**

Independently estimate the slope from two nearby values of the original function, using a small symmetric increment. The central secant slope agrees with the derivative at this allowed input.

\\[
\\frac{f(1.0001)-f(0.9999)}{0.0002}\\approx1.00000
\\]

\\[
f\\prime(1)\\approx1.00000
\\]
:::

:::mcq
id: thomas-3-3-27
title: Thomas §3.3 · Exercise 27
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 27 · PDF p. 139](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the first derivative requested for the original function?
- [ ] a | \\(- \\frac{2 \\left(4 x^{3} + 3 x^{2} - 1\\right)}{\\left(x - 1\\right)^{2} \\left(x + 1\\right)^{2} \\left(x^{2} + x + 1\\right)^{2}}\\)
- [x] b | \\(- \\frac{4 x^{3} + 3 x^{2} - 1}{\\left(x - 1\\right)^{2} \\left(x + 1\\right)^{2} \\left(x^{2} + x + 1\\right)^{2}}\\)
- [ ] c | \\(\\frac{1}{\\left(x^{2} - 1\\right) \\left(x^{2} + x + 1\\right)}\\)
- [ ] d | \\(\\frac{4 x^{3} + 3 x^{2} - 1}{\\left(x - 1\\right)^{2} \\left(x + 1\\right)^{2} \\left(x^{2} + x + 1\\right)^{2}}\\)
explanation: The original function is \\(\\frac{1}{\\left(x^{2} - 1\\right) \\left(x^{2} + x + 1\\right)}\\). Differentiate with respect to \\(x\\): its first derivative is \\(- \\frac{4 x^{3} + 3 x^{2} - 1}{\\left(x - 1\\right)^{2} \\left(x + 1\\right)^{2} \\left(x^{2} + x + 1\\right)^{2}}\\).
hint: Work through every subpart in the original question.
example:
![Thomas §3.3 · Exercise 27 · PDF p. 139](assets/recommended/math/thomas-3-3-27-context-1.webp)

![Thomas §3.3 · Exercise 27 · PDF p. 139](assets/recommended/math/thomas-3-3-27-question.webp)
solution:
**Plan — we are going to…**

1. Identify the terms and choose the quotient rule.

2. Compute and simplify the first derivative.

**The trick**

First differentiate the whole denominator with the product rule, then use the quotient rule with constant numerator one. Exclude inputs plus and minus one.

**What you need to know**

For a power, multiply by its exponent and lower the exponent by one. Differentiate sums term by term; constants give zero.

\\[
\\frac d{dx}x^n=nx^{n-1}
\\]

For a quotient, keep the numerator order exactly as shown and square the entire original denominator. Exclude zeros of the original denominator.

\\[
\\left(\\frac uv\\right)\\prime=\\frac{u\\prime v-uv\\prime}{v^2}
\\]

Differentiate a product by differentiating one factor at a time and adding both contributions.

\\[
(uv)\\prime=u\\prime v+uv\\prime
\\]

**Step-by-step solution**

1. **Read the original function and simplify only by valid algebra.**

\\[
f(x)=\\frac1{(x^2-1)(x^2+x+1)}
\\]

2. **Rewrite into easier terms.**

\\[
f(x)=\\frac1{v(x)},\\qquad v(x)=(x^2-1)(x^2+x+1)
\\]

3. **Apply the differentiation rule.**

\\[
v\\prime(x)=2x(x^2+x+1)+(x^2-1)(2x+1)=4x^3+3x^2-1
\\]

4. **Use the constant-numerator quotient rule.**

\\[
f\\prime(x)=\\frac{0\\cdot v-1\\cdot v\\prime}{v^2}=-\\frac{v\\prime}{v^2}
\\]

5. **Simplify the first derivative.**

\\[
f\\prime(x)=-\\frac{4x^3+3x^2-1}{(x^2-1)^2(x^2+x+1)^2}
\\]

**Use this method again**

Keep the original domain, simplify products or powers when useful, apply the appropriate rule, and repeat differentiation only for the requested orders.

**Check**

Independently estimate the slope from two nearby values of the original function, using a small symmetric increment. The central secant slope agrees with the derivative at this allowed input.

\\[
\\frac{f(2.0001)-f(1.9999)}{0.0002}\\approx-0.09751
\\]

\\[
f\\prime(2)\\approx-0.09751
\\]
:::

:::mcq
id: thomas-3-3-31
title: Thomas §3.3 · Exercise 31
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 31 · PDF p. 139](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the first derivative requested for the original function?
- [ ] a | \\(6 x^{2} + 8 x - 16\\)
- [x] b | \\(3 x^{2} + 4 x - 8\\)
- [ ] c | \\(\\left(x - 1\\right) \\left(x^{2} + 3 x - 5\\right)\\)
- [ ] d | \\(- 3 x^{2} - 4 x + 8\\)
explanation: The original function is \\(\\left(x - 1\\right) \\left(x^{2} + 3 x - 5\\right)\\). Differentiate with respect to \\(x\\): its first derivative is \\(3 x^{2} + 4 x - 8\\). The remaining derivatives are y″=6x+4, y‴=6, and every derivative of order n≥4 is zero.
hint: Work through every subpart in the original question.
example:
![Thomas §3.3 · Exercise 31 · PDF p. 139](assets/recommended/math/thomas-3-3-31-context-1.webp)

![Thomas §3.3 · Exercise 31 · PDF p. 139](assets/recommended/math/thomas-3-3-31-question.webp)
solution:
**Plan — we are going to…**

1. Identify the terms and choose the power rule after simplifying.

2. Compute and simplify the first derivative, then the additional requested derivatives.

**The trick**

Expand the cubic before repeated differentiation. This is shorter than applying the product rule at every order.

**What you need to know**

For a power, multiply by its exponent and lower the exponent by one. Differentiate sums term by term; constants give zero.

\\[
\\frac d{dx}x^n=nx^{n-1}
\\]

**Step-by-step solution**

1. **Read the original function and simplify only by valid algebra.**

\\[
f(x)=(x-1)(x^2+3x-5)
\\]

2. **Rewrite into easier terms.**

\\[
f(x)=x^3+2x^2-8x+5
\\]

3. **Apply the differentiation rule.**

\\[
y\\prime=3x^2+4x-8
\\]

4. **Simplify the first derivative.**

\\[
f\\prime(x)=3x^2+4x-8
\\]

5. **Differentiate the first derivative again.**

\\[
f\\prime\\prime(x)=6x+4
\\]

6. **Complete the remaining derivative orders.**

\\[
y\\prime\\prime\\prime=6
\\]

\\[
y^{(n)}=0\\quad(n\\ge4)
\\]

**Use this method again**

Keep the original domain, simplify products or powers when useful, apply the appropriate rule, and repeat differentiation only for the requested orders.

**Check**

Independently estimate the slope from two nearby values of the original function, using a small symmetric increment. The central secant slope agrees with the derivative at this allowed input.

\\[
\\frac{f(1.0001)-f(0.9999)}{0.0002}\\approx-1.00000
\\]

\\[
f\\prime(1)\\approx-1.00000
\\]
:::

:::mcq
id: thomas-3-3-35
title: Thomas §3.3 · Exercise 35
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 35 · PDF p. 139](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the first derivative requested for the original function?
- [ ] a | \\(\\frac{6}{\\theta^{4}}\\)
- [x] b | \\(\\frac{3}{\\theta^{4}}\\)
- [ ] c | \\(\\frac{\\left(\\theta - 1\\right) \\left(\\theta^{2} + \\theta + 1\\right)}{\\theta^{3}}\\)
- [ ] d | \\(- \\frac{3}{\\theta^{4}}\\)
explanation: The original function is \\(\\frac{\\left(\\theta - 1\\right) \\left(\\theta^{2} + \\theta + 1\\right)}{\\theta^{3}}\\). Differentiate with respect to \\(\\theta\\): its first derivative is \\(\\frac{3}{\\theta^{4}}\\). The second derivative is \\(- \\frac{12}{\\theta^{5}}\\).
hint: Work through every subpart in the original question.
example:
![Thomas §3.3 · Exercise 35 · PDF p. 139](assets/recommended/math/thomas-3-3-35-context-1.webp)

![Thomas §3.3 · Exercise 35 · PDF p. 139](assets/recommended/math/thomas-3-3-35-question.webp)
solution:
**Plan — we are going to…**

1. Identify the terms and choose the power rule after simplifying.

2. Compute and simplify the first derivative, then the additional requested derivatives.

**The trick**

Recognize the difference-of-cubes factorization. It turns a product-over-power expression into a constant minus one power.

**What you need to know**

For a power, multiply by its exponent and lower the exponent by one. Differentiate sums term by term; constants give zero.

\\[
\\frac d{dx}x^n=nx^{n-1}
\\]

**Step-by-step solution**

1. **Read the original function and simplify only by valid algebra.**

\\[
f(\\theta)=\\frac{(\\theta-1)(\\theta^2+\\theta+1)}{\\theta^3}
\\]

2. **Rewrite into easier terms.**

\\[
f(\\theta)=\\frac{\\theta^3-1}{\\theta^3}=1-\\theta^{-3},\\qquad\\theta\\ne0
\\]

3. **Apply the differentiation rule.**

\\[
f\\prime(\\theta)=0-(-3)\\theta^{-4}
\\]

4. **Simplify the first derivative.**

\\[
f\\prime(\\theta)=\\frac3{\\theta^4}
\\]

5. **Differentiate the first derivative again.**

\\[
f\\prime\\prime(\\theta)=-\\frac{12}{\\theta^5}
\\]

**Use this method again**

Keep the original domain, simplify products or powers when useful, apply the appropriate rule, and repeat differentiation only for the requested orders.

**Check**

Independently estimate the slope from two nearby values of the original function, using a small symmetric increment. The central secant slope agrees with the derivative at this allowed input.

\\[
\\frac{f(1.0001)-f(0.9999)}{0.0002}\\approx3.00000
\\]

\\[
f\\prime(1)\\approx3.00000
\\]
:::

:::mcq
id: thomas-3-3-39
title: Thomas §3.3 · Exercise 39
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 39 · PDF p. 139](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the first derivative requested for the original function?
- [ ] a | \\(\\frac{q^{6} + q^{2} + 6}{3 q^{5}}\\)
- [x] b | \\(\\frac{q^{6} + q^{2} + 6}{6 q^{5}}\\)
- [ ] c | \\(\\frac{\\left(q^{2} + 3\\right) \\left(q^{4} - 1\\right)}{12 q^{4}}\\)
- [ ] d | \\(- \\frac{q^{6} + q^{2} + 6}{6 q^{5}}\\)
explanation: The original function is \\(\\frac{\\left(q^{2} + 3\\right) \\left(q^{4} - 1\\right)}{12 q^{4}}\\). Differentiate with respect to \\(q\\): its first derivative is \\(\\frac{q^{6} + q^{2} + 6}{6 q^{5}}\\). The second derivative is \\(\\frac{q^{6} - 3 q^{2} - 30}{6 q^{6}}\\).
hint: Work through every subpart in the original question.
example:
![Thomas §3.3 · Exercise 39 · PDF p. 139](assets/recommended/math/thomas-3-3-39-context-1.webp)

![Thomas §3.3 · Exercise 39 · PDF p. 139](assets/recommended/math/thomas-3-3-39-question.webp)
solution:
**Plan — we are going to…**

1. Identify the terms and choose the power rule after simplifying.

2. Compute and simplify the first derivative, then the additional requested derivatives.

**The trick**

Distribute and divide by the fourth power before differentiating. The negative powers then use the ordinary power rule twice.

**What you need to know**

For a power, multiply by its exponent and lower the exponent by one. Differentiate sums term by term; constants give zero.

\\[
\\frac d{dx}x^n=nx^{n-1}
\\]

**Step-by-step solution**

1. **Read the original function and simplify only by valid algebra.**

\\[
f(q)=\\frac{(q^2+3)(q^4-1)}{12q^4}
\\]

2. **Rewrite into easier terms.**

\\[
f(q)=\\frac1{12}(q^2+3-q^{-2}-3q^{-4}),\\qquad q\\ne0
\\]

3. **Apply the differentiation rule.**

\\[
f\\prime(q)=\\frac1{12}(2q+2q^{-3}+12q^{-5})
\\]

4. **Simplify the first derivative.**

\\[
f\\prime(q)=\\frac q6+\\frac1{6q^3}+\\frac1{q^5}=\\frac{q^6+q^2+6}{6q^5}
\\]

5. **Differentiate the first derivative again.**

\\[
f\\prime\\prime(q)=\\frac16-\\frac1{2q^4}-\\frac5{q^6}=\\frac{q^6-3q^2-30}{6q^6}
\\]

**Use this method again**

Keep the original domain, simplify products or powers when useful, apply the appropriate rule, and repeat differentiation only for the requested orders.

**Check**

Independently estimate the slope from two nearby values of the original function, using a small symmetric increment. The central secant slope agrees with the derivative at this allowed input.

\\[
\\frac{f(1.0001)-f(0.9999)}{0.0002}\\approx1.33333
\\]

\\[
f\\prime(1)\\approx1.33333
\\]
:::

:::mcq
id: thomas-3-3-41
title: Thomas §3.3 · Exercise 41
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 41 · PDF p. 139](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which ordered values answer parts (a)–(d)?
- [ ] a | 7, 13, −7/25, −20
- [ ] b | −13, 7, −7/25, 20
- [ ] c | 13, −7, 25/7, −20
- [x] d | 13, −7, 7/25, 20
explanation: At x=0 use u=5, u′=−3, v=−1, v′=2. (a) (uv)′=u′v+uv′=3+10=13. (b) (u/v)′=(u′v−uv′)/v²=3−10=−7. (c) (v/u)′=(v′u−vu′)/u²=(10−3)/25=7/25. (d) (7v−2u)′=14+6=20.
hint: Work through every subpart in the original question.
example:
![Thomas §3.3 · Exercise 41 · PDF p. 139](assets/recommended/math/thomas-3-3-41-question.webp)
solution:
**Plan — we are going to…**

1. Use the supplied values and derivatives at zero.

2. Apply the product, quotient and linearity rules to all four expressions.

**The trick**

A function value and its derivative are different data. Use the correct one in each product, and reverse the quotient-rule numerator when reversing the quotient.

**What you need to know**

Differentiate a product by differentiating one factor at a time and adding both contributions.

\\[
(uv)\\prime=u\\prime v+uv\\prime
\\]

For a quotient, keep the numerator order exactly as shown and square the entire original denominator. Exclude zeros of the original denominator.

\\[
\\left(\\frac uv\\right)\\prime=\\frac{u\\prime v-uv\\prime}{v^2}
\\]

**Step-by-step solution**

1. **List the data at the requested input.**

\\[
u=5,\\quad u\\prime=-3
\\]

\\[
v=-1,\\quad v\\prime=2
\\]

2. **Part (a): product.**

\\[
(uv)\\prime=u\\prime v+uv\\prime=(-3)(-1)+(5)(2)=13
\\]

3. **Part (b): first quotient.**

\\[
\\left(\\frac uv\\right)\\prime=\\frac{(-3)(-1)-(5)(2)}{(-1)^2}=\\frac{3-10}1=-7
\\]

4. **Part (c): reversed quotient.**

\\[
\\left(\\frac vu\\right)\\prime=\\frac{(2)(5)-(-1)(-3)}{5^2}=\\frac{10-3}{25}=\\frac7{25}
\\]

5. **Part (d): linear combination.**

\\[
(7v-2u)\\prime=7v\\prime-2u\\prime=7(2)-2(-3)=20
\\]

**Use this method again**

Write the rule symbolically, then insert function values and derivative values in their distinct places.

**Check**

The reciprocal identity gives an independent relation between the two quotient answers. The value of the first quotient is minus five.

\\[
\\left(\\frac vu\\right)\\prime=-\\frac{(u/v)\\prime}{(u/v)^2}=-\\frac{-7}{(-5)^2}=\\frac7{25}
\\]
:::

:::mcq
id: thomas-3-3-43
title: Thomas §3.3 · Exercise 43
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 43 · PDF p. 140](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the normal line requested in part (a)?
- [ ] a | \\(y=4x-7\\)
- [x] b | \\(y=-x/8+5/4\\)
- [ ] c | \\(y=8x-15\\)
- [ ] d | \\(y=-x/8+1\\)
explanation: For y=x³−4x+1, y′=3x²−4. (a) At (2,1) the tangent slope is 8, so the normal has slope −1/8 and equation y−1=−(x−2)/8. (b) The smallest tangent slope is −4, attained at x=0, point (0,1). (c) Slope 8 requires x=±2; the tangent lines are y=8x−15 at (2,1) and y=8x+17 at (−2,1).
hint: Work through every subpart in the original question.
example:
![Thomas §3.3 · Exercise 43 · PDF p. 140](assets/recommended/math/thomas-3-3-43-question.webp)
solution:
**Plan — we are going to…**

1. Find the derivative of the cubic.

2. Write the normal line, minimize the tangent slope and find both tangents of slope eight.

**The trick**

A normal is perpendicular to the tangent, so its slope is the negative reciprocal. Minimizing the slope means minimizing the derivative, not the original curve.

**What you need to know**

For a power, multiply by its exponent and lower the exponent by one. Differentiate sums term by term; constants give zero.

\\[
\\frac d{dx}x^n=nx^{n-1}
\\]

A tangent at a given input passes through the corresponding point of the curve, with slope equal to the derivative.

\\[
y-f(a)=f\\prime(a)(x-a)
\\]

\\[
m_{N}=-\\frac1{m_{T}}
\\]

**Step-by-step solution**

1. **Differentiate the curve.**

\\[
y=x^3-4x+1
\\]

\\[
y\\prime=3x^2-4
\\]

2. **Part (a): use the point with input two.**

\\[
y(2)=8-8+1=1
\\]

\\[
m_{T}=3(2)^2-4=8
\\]

\\[
m_{N}=-\\frac18
\\]

\\[
y-1=-\\frac18(x-2)
\\]

\\[
y=-\\frac x8+\\frac54
\\]

3. **Part (b): find the smallest slope.** A square is nonnegative, so the derivative is at least minus four. Equality occurs at input zero.

\\[
3x^2-4\\ge-4
\\]

\\[
(x,y)=(0,1)
\\]

4. **Part (c): solve for slope eight.**

\\[
3x^2-4=8\\quad\\Longrightarrow\\quad x^2=4
\\]

\\[
x=-2\\quad\\text{or}\\quad x=2
\\]

5. **Write both tangents.** Both curve heights equal one.

\\[
y-1=8(x-2)\\quad\\Longrightarrow\\quad y=8x-15
\\]

\\[
y-1=8(x+2)\\quad\\Longrightarrow\\quad y=8x+17
\\]

**Use this method again**

For normal lines use the negative reciprocal slope; for slope conditions solve an equation or inequality involving the derivative.

**Check**

The normal and tangent slopes multiply to minus one. Substituting each contact input into its tangent gives the original height one.

\\[
8\\left(-\\frac18\\right)=-1
\\]

\\[
8(2)-15=1
\\]

\\[
8(-2)+17=1
\\]
:::

:::mcq
id: thomas-3-3-45
title: Thomas §3.3 · Exercise 45
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 45 · PDF p. 140](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which two tangent lines are requested?
- [ ] a | y=4x+2 and y=0
- [ ] b | y=2x and y=4
- [ ] c | y=−4x and y=−2
- [x] d | y=4x and y=2
explanation: Newton’s serpentine is y=4x/(1+x²). Its derivative is 4(1−x²)/(1+x²)². At the origin, slope 4 gives y=4x; at (1,2), slope 0 gives the horizontal tangent y=2.
hint: Work through every subpart in the original question.
example:
![Thomas §3.3 · Exercise 45 · PDF p. 140](assets/recommended/math/thomas-3-3-45-question.webp)
solution:
**Plan — we are going to…**

1. Differentiate Newton’s serpentine using the quotient rule.

2. Evaluate the slopes at the two given points and write the tangents.

**The trick**

The denominator is squared as a whole. The tangent at input one is horizontal because the numerator of the derivative vanishes.

**What you need to know**

For a quotient, keep the numerator order exactly as shown and square the entire original denominator. Exclude zeros of the original denominator.

\\[
\\left(\\frac uv\\right)\\prime=\\frac{u\\prime v-uv\\prime}{v^2}
\\]

A tangent at a given input passes through the corresponding point of the curve, with slope equal to the derivative.

\\[
y-f(a)=f\\prime(a)(x-a)
\\]

**Step-by-step solution**

1. **Apply the quotient rule.**

\\[
f(x)=\\frac{4x}{1+x^2}
\\]

\\[
f\\prime(x)=\\frac{4(1+x^2)-(4x)(2x)}{(1+x^2)^2}
\\]

\\[
f\\prime(x)=\\frac{4(1-x^2)}{(1+x^2)^2}
\\]

2. **At the origin.**

\\[
f(0)=0,\\qquad f\\prime(0)=4
\\]

\\[
y=4x
\\]

3. **At the point with input one.**

\\[
f(1)=2,\\qquad f\\prime(1)=0
\\]

\\[
y-2=0(x-1)\\quad\\Longrightarrow\\quad y=2
\\]

**Use this method again**

Differentiate the rational curve, then separately substitute each contact input for its point and slope.

**Check**

Near the origin the original function divided by the input approaches four. Near input one, subtracting the horizontal tangent gives a negative square, confirming the curve touches that height.

\\[
\\frac{f(x)}x=\\frac4{1+x^2}\\longrightarrow4\\quad(x\\to0)
\\]

\\[
f(x)-2=-\\frac{2(x-1)^2}{1+x^2}
\\]
:::

:::mcq
id: thomas-3-3-47
title: Thomas §3.3 · Exercise 47
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 47 · PDF p. 140](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What are a, b and c?
- [ ] a | a=0, b=1, c=1
- [x] b | a=1, b=1, c=0
- [ ] c | a=2, b=0, c=0
- [ ] d | a=1, b=0, c=1
explanation: Tangency to y=x at the origin gives f(0)=c=0 and f′(0)=b=1. Passing through (1,2) gives a+b+c=2, so a=1.
hint: Work through every subpart in the original question.
example:
![Thomas §3.3 · Exercise 47 · PDF p. 140](assets/recommended/math/thomas-3-3-47-question.webp)
solution:
**Plan — we are going to…**

1. Translate tangency at the origin into a value and a slope condition.

2. Use the second point to determine the last coefficient.

**The trick**

Tangency to a line supplies two conditions: the curve shares the contact point and the line’s slope.

**What you need to know**

For a power, multiply by its exponent and lower the exponent by one. Differentiate sums term by term; constants give zero.

\\[
\\frac d{dx}x^n=nx^{n-1}
\\]

A tangent at a given input passes through the corresponding point of the curve, with slope equal to the derivative.

\\[
y-f(a)=f\\prime(a)(x-a)
\\]

**Step-by-step solution**

1. **Write the quadratic and its derivative.**

\\[
f(x)=ax^2+bx+c
\\]

\\[
f\\prime(x)=2ax+b
\\]

2. **Use the point and slope at the origin.** The line through the origin with equation shown below has slope one.

\\[
y=x
\\]

\\[
f(0)=c=0
\\]

\\[
f\\prime(0)=b=1
\\]

3. **Use the remaining point.**

\\[
f(1)=a+b+c=2
\\]

\\[
a+1+0=2\\quad\\Longrightarrow\\quad a=1
\\]

4. **State all coefficients and the curve.**

\\[
a=1,\\qquad b=1,\\qquad c=0
\\]

\\[
f(x)=x^2+x
\\]

**Use this method again**

Tangent line → contact value and derivative value; extra point → remaining coefficient equation.

**Check**

The final curve passes through both stated points, and its slope at the origin equals that of the line.

\\[
f(0)=0,\\qquad f(1)=2
\\]

\\[
f\\prime(0)=2(0)+1=1
\\]
:::

:::mcq
id: thomas-3-3-51
title: Thomas §3.3 · Exercise 51
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 51 · PDF p. 140](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which points have tangents perpendicular to y=2x+3?
- [ ] a | Only (0,0)
- [x] b | (0,0) and (4,2)
- [ ] c | (1,−1) and (3,3)
- [ ] d | (−2,1/2) and (2,0)
explanation: The required tangent slope is −1/2. For y=x/(x−2), y′=−2/(x−2)². Setting this to −1/2 yields (x−2)²=4, so x=0 or 4, giving (0,0) and (4,2).
hint: Work through every subpart in the original question.
example:
![Thomas §3.3 · Exercise 51 · PDF p. 140](assets/recommended/math/thomas-3-3-51-question.webp)
solution:
**Plan — we are going to…**

1. Find the derivative and set it equal to the required slope.

2. Solve both square-root possibilities and evaluate their curve heights.

**The trick**

An equation involving a square normally has two roots. Keep both inputs unless the original domain excludes one.

**What you need to know**

For a quotient, keep the numerator order exactly as shown and square the entire original denominator. Exclude zeros of the original denominator.

\\[
\\left(\\frac uv\\right)\\prime=\\frac{u\\prime v-uv\\prime}{v^2}
\\]

A tangent at a given input passes through the corresponding point of the curve, with slope equal to the derivative.

\\[
y-f(a)=f\\prime(a)(x-a)
\\]

**Step-by-step solution**

1. **Differentiate the rational curve.**

\\[
f(x)=\\frac x{x-2},\\qquad x\\ne2
\\]

\\[
f\\prime(x)=\\frac{(x-2)-x}{(x-2)^2}=-\\frac2{(x-2)^2}
\\]

2. **Set the slope condition.**

\\[
-\\frac2{(x-2)^2}=-\\frac12
\\]

\\[
(x-2)^2=4
\\]

3. **Take both square roots.**

\\[
x-2=2\\quad\\text{or}\\quad x-2=-2
\\]

\\[
x=4\\quad\\text{or}\\quad x=0
\\]

4. **Find both points.**

\\[
f(0)=0,\\qquad f(4)=2
\\]

\\[
(0,0)\\quad\\text{and}\\quad(4,2)
\\]

**Use this method again**

Convert a tangent direction into a derivative condition; solve every root and retain only allowed curve points.

**Check**

Both candidate denominators have square four, so both give the required slope minus one half. Neither input equals the excluded input two.

\\[
f\\prime(0)=f\\prime(4)=-\\frac24=-\\frac12
\\]
:::

:::mcq
id: thomas-3-3-58
title: Thomas §3.3 · Exercise 58
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 58 · PDF p. 140](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which values of a and b make the function differentiable at x=−1?
- [ ] a | a=3, b=3/2
- [ ] b | a=−3, b=−3/2
- [x] c | a=3, b=−3/2
- [ ] d | a=−3, b=3/2
explanation: Continuity at −1 equates −a+b with b−3, so a=3. The right derivative is a and the left derivative is −2b. Matching them gives b=−3/2. Both branches then have value −9/2 and derivative 3 at the join; elsewhere they are polynomials.
hint: Work through every subpart in the original question.
example:
![Thomas §3.3 · Exercise 58 · PDF p. 140](assets/recommended/math/thomas-3-3-58-question.webp)
solution:
**Plan — we are going to…**

1. Use continuity at input minus one to determine the linear slope coefficient.

2. Match one-sided slopes to determine the other coefficient.

**The trick**

Two unknown coefficients require both a value equation and a slope equation. Matching slopes alone can leave a jump.

**What you need to know**

Each polynomial branch is differentiable away from the join. At the join, require equal branch values and equal branch slopes.For a power, multiply by its exponent and lower the exponent by one. Differentiate sums term by term; constants give zero.

\\[
\\frac d{dx}x^n=nx^{n-1}
\\]

**Step-by-step solution**

1. **Write the value condition.** The linear branch has value minus the first coefficient plus the second; the quadratic branch has value the second coefficient minus three.

\\[
-a+b=b-3
\\]

\\[
-a=-3\\quad\\Longrightarrow\\quad a=3
\\]

2. **Write the slope condition.** The right linear slope is the first coefficient; the left quadratic derivative at minus one is minus twice the second coefficient.

\\[
a=-2b
\\]

3. **Solve the second coefficient.**

\\[
3=-2b\\quad\\Longrightarrow\\quad b=-\\frac32
\\]

4. **State both values.**

\\[
a=3,\\qquad b=-\\frac32
\\]

**Use this method again**

Piecewise differentiability with parameters → match values → match slopes → verify both after substitution.

**Check**

The substituted values agree on both sides, and so do the slopes.

\\[
-a+b=-3-\\frac32=-\\frac92
\\]

\\[
b-3=-\\frac32-3=-\\frac92
\\]

\\[
a=3=-2\\left(-\\frac32\\right)
\\]
:::`};export{e as default};