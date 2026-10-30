var e={id:`calculus-3.2`,title:`Thomas Calculus §3.2 Practice`,summary:`Thomas' Calculus §3.2 · original textbook exercises and verified practice.`,subjectId:`mathematics`,reward:0,status:`published`,authoringSource:`:::mcq
id: thomas-3-2-1
title: Thomas §3.2 · Exercise 1
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 1 · PDF p. 129](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the first derivative requested for the original function?
- [ ] a | \\(4 - x^{2}\\)
- [ ] b | \\(2 x\\)
- [ ] c | \\(- 4 x\\)
- [x] d | \\(- 2 x\\)
explanation: The original function is \\(4 - x^{2}\\). Differentiate with respect to \\(x\\): its first derivative is \\(- 2 x\\). The difference quotient is −2x−h, whose limit as h→0 is −2x. The requested values are f′(−3)=6, f′(0)=0 and f′(1)=−2.
hint: Work through every subpart in the original question.
example:
![Thomas §3.2 · Exercise 1 · PDF p. 129](assets/recommended/math/thomas-3-2-1-context-1.webp)

![Thomas §3.2 · Exercise 1 · PDF p. 129](assets/recommended/math/thomas-3-2-1-question.webp)
solution:
**Plan — we are going to…**

1. Expand the square in the difference quotient.

2. Cancel the increment, take the limit, and evaluate the three requested slopes.

**The trick**

The minus sign applies to the entire square. Subtract the whole original function in parentheses.

**What you need to know**

The derivative is a limiting secant slope. Keep the increment nonzero while simplifying; take its limit only afterward.

\\[
f\\prime(a)=\\lim_{h\\to0}\\frac{f(a+h)-f(a)}h
\\]

**Step-by-step solution**

1. **Form the quotient.**

\\[
f(x)=4-x^2
\\]

\\[
\\frac{f(x+h)-f(x)}h=\\frac{4-(x+h)^2-(4-x^2)}h
\\]

2. **Expand and cancel for nonzero increment.**

\\[
\\frac{-2xh-h^2}h=-2x-h
\\]

3. **Take the limit.**

\\[
f\\prime(x)=\\lim_{h\\to0}(-2x-h)=-2x
\\]

4. **Evaluate all requested inputs.**

\\[
f\\prime(-3)=6
\\]

\\[
f\\prime(0)=0
\\]

\\[
f\\prime(1)=-2
\\]

**Use this method again**

Expand shifted powers → subtract in parentheses → factor the increment → take the limit → substitute requested inputs.

**Check**

At input zero, the original parabola has its maximum, so a horizontal tangent is expected. The exact secant quotient there is minus the increment, which tends to zero.

\\[
\\frac{f(h)-f(0)}h=-h\\longrightarrow0
\\]
:::

:::mcq
id: thomas-3-2-3
title: Thomas §3.2 · Exercise 3
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 3 · PDF p. 129](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the first derivative requested for the original function?
- [ ] a | \\(- \\frac{4}{t^{3}}\\)
- [x] b | \\(- \\frac{2}{t^{3}}\\)
- [ ] c | \\(\\frac{1}{t^{2}}\\)
- [ ] d | \\(\\frac{2}{t^{3}}\\)
explanation: The original function is \\(\\frac{1}{t^{2}}\\). Differentiate with respect to \\(t\\): its first derivative is \\(- \\frac{2}{t^{3}}\\). The difference quotient simplifies to \\(-(2t+h)/[t^2(t+h)^2]\\), tending to −2/t³. Values: g′(−1)=2, g′(2)=−1/4 and \\(g\\prime(\\sqrt3)=-2/(3\\sqrt3)\\).
hint: Work through every subpart in the original question.
example:
![Thomas §3.2 · Exercise 3 · PDF p. 129](assets/recommended/math/thomas-3-2-3-context-1.webp)

![Thomas §3.2 · Exercise 3 · PDF p. 129](assets/recommended/math/thomas-3-2-3-question.webp)
solution:
**Plan — we are going to…**

1. Combine the reciprocal-square fractions.

2. Factor and cancel the increment, then evaluate the three slopes.

**The trick**

Use a common denominator before cancellation. The original input cannot be zero.

**What you need to know**

The derivative is a limiting secant slope. Keep the increment nonzero while simplifying; take its limit only afterward.

\\[
f\\prime(a)=\\lim_{h\\to0}\\frac{f(a+h)-f(a)}h
\\]

**Step-by-step solution**

1. **State the function and its restriction.**

\\[
g(t)=\\frac1{t^2},\\qquad t\\ne0
\\]

2. **Combine the fractions.**

\\[
\\frac{g(t+h)-g(t)}h=\\frac{t^2-(t+h)^2}{h\\,t^2(t+h)^2}
\\]

3. **Expand, factor and cancel.**

\\[
\\frac{-2th-h^2}{h\\,t^2(t+h)^2}=\\frac{-(2t+h)}{t^2(t+h)^2}
\\]

4. **Take the limit.**

\\[
g\\prime(t)=-\\frac{2t}{t^4}=-\\frac2{t^3}
\\]

5. **Evaluate all requested inputs.**

\\[
g\\prime(-1)=2
\\]

\\[
g\\prime(2)=-\\frac14
\\]

\\[
g\\prime(\\sqrt3)=-\\frac2{3\\sqrt3}
\\]

**Use this method again**

For reciprocal powers, combine fractions first; cancellation becomes visible after expanding the numerator.

**Check**

At input one the exact quotient is the following expression. Its limit is minus two, matching the formula, and the negative sign agrees with the decreasing positive branch.

\\[
\\frac{g(1+h)-g(1)}h=-\\frac{2+h}{(1+h)^2}\\longrightarrow-2
\\]
:::

:::mcq
id: thomas-3-2-5
title: Thomas §3.2 · Exercise 5
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 5 · PDF p. 129](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the first derivative requested for the original function?
- [ ] a | \\(\\sqrt{3} \\sqrt{\\theta}\\)
- [ ] b | \\(- \\frac{\\sqrt{3}}{2 \\sqrt{\\theta}}\\)
- [ ] c | \\(\\frac{\\sqrt{3}}{\\sqrt{\\theta}}\\)
- [x] d | \\(\\frac{\\sqrt{3}}{2 \\sqrt{\\theta}}\\)
explanation: The original function is \\(\\sqrt{3} \\sqrt{\\theta}\\). Differentiate with respect to \\(\\theta\\): its first derivative is \\(\\frac{\\sqrt{3}}{2 \\sqrt{\\theta}}\\). Rationalize the difference quotient to obtain \\(3/[\\sqrt{3(\\theta+h)}+\\sqrt{3\\theta}]\\). The requested values are p′(1)=√3/2, p′(3)=1/2 and p′(2/3)=3/(2√2).
hint: Work through every subpart in the original question.
example:
![Thomas §3.2 · Exercise 5 · PDF p. 129](assets/recommended/math/thomas-3-2-5-context-1.webp)

![Thomas §3.2 · Exercise 5 · PDF p. 129](assets/recommended/math/thomas-3-2-5-question.webp)
solution:
**Plan — we are going to…**

1. Rationalize the square-root difference.

2. Take the limit and evaluate all three requested inputs.

**The trick**

Substitution first gives zero divided by zero. The conjugate exposes the increment that can be canceled. The finite derivative is defined only for positive input.

**What you need to know**

The derivative is a limiting secant slope. Keep the increment nonzero while simplifying; take its limit only afterward.

\\[
f\\prime(a)=\\lim_{h\\to0}\\frac{f(a+h)-f(a)}h
\\]

Multiply a radical difference by its conjugate. The difference of squares removes the roots from the numerator.

\\[
(A-B)(A+B)=A^2-B^2
\\]

**Step-by-step solution**

1. **Start with the original radical.**

\\[
p(\\theta)=\\sqrt{3\\theta}
\\]

\\[
\\frac{p(\\theta+h)-p(\\theta)}h=\\frac{\\sqrt{3\\theta+3h}-\\sqrt{3\\theta}}h
\\]

2. **Multiply top and bottom by the conjugate.**

\\[
\\frac{(3\\theta+3h)-3\\theta}{h(\\sqrt{3\\theta+3h}+\\sqrt{3\\theta})}
\\]

\\[
=\\frac3{\\sqrt{3\\theta+3h}+\\sqrt{3\\theta}}
\\]

3. **Let the increment tend to zero.**

\\[
p\\prime(\\theta)=\\frac3{2\\sqrt{3\\theta}}=\\frac{\\sqrt3}{2\\sqrt\\theta},\\quad\\theta>0
\\]

4. **Evaluate the requested slopes.**

\\[
p\\prime(1)=\\frac{\\sqrt3}2
\\]

\\[
p\\prime(3)=\\frac12
\\]

\\[
p\\prime\\left(\\frac23\\right)=\\frac3{2\\sqrt2}
\\]

**Use this method again**

Radical difference → multiply by the conjugate → cancel the increment → take the limit.

**Check**

At input three, the rationalized quotient tends to three divided by six, namely one half. All slopes are positive, consistent with an increasing square root.

\\[
\\frac3{\\sqrt{9+3h}+3}\\longrightarrow\\frac36=\\frac12
\\]
:::

:::mcq
id: thomas-3-2-9
title: Thomas §3.2 · Exercise 9
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 9 · PDF p. 129](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the first derivative requested for the original function?
- [ ] a | \\(\\frac{t}{2 t + 1}\\)
- [ ] b | \\(- \\frac{1}{\\left(2 t + 1\\right)^{2}}\\)
- [ ] c | \\(\\frac{2}{\\left(2 t + 1\\right)^{2}}\\)
- [x] d | \\(\\frac{1}{\\left(2 t + 1\\right)^{2}}\\)
explanation: The original function is \\(\\frac{t}{2 t + 1}\\). Differentiate with respect to \\(t\\): its first derivative is \\(\\frac{1}{\\left(2 t + 1\\right)^{2}}\\).
hint: Work through every subpart in the original question.
example:
![Thomas §3.2 · Exercise 9 · PDF p. 129](assets/recommended/math/thomas-3-2-9-context-1.webp)

![Thomas §3.2 · Exercise 9 · PDF p. 129](assets/recommended/math/thomas-3-2-9-question.webp)
solution:
**Plan — we are going to…**

1. Combine the two rational expressions in the quotient.

2. Cancel the increment and take the limit.

**The trick**

The terms involving twice the input cancel in the numerator, leaving just the increment. Exclude input minus one half.

**What you need to know**

The derivative is a limiting secant slope. Keep the increment nonzero while simplifying; take its limit only afterward.

\\[
f\\prime(a)=\\lim_{h\\to0}\\frac{f(a+h)-f(a)}h
\\]

**Step-by-step solution**

1. **Write the quotient with a common denominator.**

\\[
s(t)=\\frac t{2t+1},\\qquad t\\ne-\\frac12
\\]

\\[
\\frac{s(t+h)-s(t)}h=\\frac{(t+h)(2t+1)-t(2t+2h+1)}{h(2t+2h+1)(2t+1)}
\\]

2. **Expand the numerator.**

\\[
(2t^2+t+2th+h)-(2t^2+2th+t)=h
\\]

3. **Cancel and take the limit.**

\\[
\\frac{s(t+h)-s(t)}h=\\frac1{(2t+2h+1)(2t+1)}
\\]

\\[
\\frac{ds}{dt}=\\frac1{(2t+1)^2}
\\]

**Use this method again**

Rational difference quotient → common denominator → expand the numerator carefully → cancel → limit.

**Check**

At zero, the original function is zero and the exact quotient is one divided by one plus twice the increment; it tends to one.

\\[
\\frac{s(h)-s(0)}h=\\frac1{1+2h}\\longrightarrow1=s\\prime(0)
\\]
:::

:::mcq
id: thomas-3-2-13
title: Thomas §3.2 · Exercise 13
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 13 · PDF p. 129](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the first derivative requested for the original function?
- [ ] a | \\(x + \\frac{9}{x}\\)
- [ ] b | \\(- \\frac{\\left(x - 3\\right) \\left(x + 3\\right)}{x^{2}}\\)
- [ ] c | \\(\\frac{2 \\left(x - 3\\right) \\left(x + 3\\right)}{x^{2}}\\)
- [x] d | \\(\\frac{\\left(x - 3\\right) \\left(x + 3\\right)}{x^{2}}\\)
explanation: The original function is \\(x + \\frac{9}{x}\\). Differentiate with respect to \\(x\\): its first derivative is \\(\\frac{\\left(x - 3\\right) \\left(x + 3\\right)}{x^{2}}\\). At x=−3 the slope is 1−9/9=0, so the tangent is horizontal.
hint: Work through every subpart in the original question.
example:
![Thomas §3.2 · Exercise 13 · PDF p. 129](assets/recommended/math/thomas-3-2-13-context-1.webp)

![Thomas §3.2 · Exercise 13 · PDF p. 129](assets/recommended/math/thomas-3-2-13-question.webp)
solution:
**Plan — we are going to…**

1. Find the derivative from the difference quotient.

2. Evaluate the slope and point at input minus three, then write the tangent line.

**The trick**

The tangent is horizontal when the derivative is zero; its height comes from the original function, not the derivative.

**What you need to know**

The derivative is a limiting secant slope. Keep the increment nonzero while simplifying; take its limit only afterward.

\\[
f\\prime(a)=\\lim_{h\\to0}\\frac{f(a+h)-f(a)}h
\\]

A tangent at a given input passes through the corresponding point of the curve, with slope equal to the derivative.

\\[
y-f(a)=f\\prime(a)(x-a)
\\]

**Step-by-step solution**

1. **Form and simplify the quotient.**

\\[
f(x)=x+\\frac9x,\\qquad x\\ne0
\\]

\\[
\\frac{f(x+h)-f(x)}h=1+\\frac9h\\left(\\frac1{x+h}-\\frac1x\\right)
\\]

\\[
=1-\\frac9{x(x+h)}
\\]

2. **Take the limit.**

\\[
f\\prime(x)=1-\\frac9{x^2}=\\frac{(x-3)(x+3)}{x^2}
\\]

3. **Find the point and its slope.**

\\[
f(-3)=-3+\\frac9{-3}=-6
\\]

\\[
f\\prime(-3)=1-\\frac99=0
\\]

4. **Write the tangent.**

\\[
y+6=0(x+3)
\\]

\\[
y=-6
\\]

**Use this method again**

Differentiate → evaluate slope at the given input → evaluate the original height → use point-slope form.

**Check**

At the point, the tangent gives minus six, exactly the function value. The original curve minus the tangent simplifies to an expression with a squared zero, confirming tangency.

\\[
f(x)+6=\\frac{(x+3)^2}{x}
\\]
:::

:::mcq
id: thomas-3-2-15
title: Thomas §3.2 · Exercise 15
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 15 · PDF p. 129](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the first derivative requested for the original function?
- [ ] a | \\(2 t \\left(3 t - 2\\right)\\)
- [x] b | \\(t \\left(3 t - 2\\right)\\)
- [ ] c | \\(t^{3} - t^{2}\\)
- [ ] d | \\(- t \\left(3 t - 2\\right)\\)
explanation: The original function is \\(t^{3} - t^{2}\\). Differentiate with respect to \\(t\\): its first derivative is \\(t \\left(3 t - 2\\right)\\). At t=−1 the slope is 3+2=5.
hint: Work through every subpart in the original question.
example:
![Thomas §3.2 · Exercise 15 · PDF p. 129](assets/recommended/math/thomas-3-2-15-context-1.webp)

![Thomas §3.2 · Exercise 15 · PDF p. 129](assets/recommended/math/thomas-3-2-15-question.webp)
solution:
**Plan — we are going to…**

1. Expand the difference quotient for position.

2. Evaluate the slope and position at time minus one, then write the tangent.

**The trick**

The minus sign before the squared term applies to its entire expansion.

**What you need to know**

The derivative is a limiting secant slope. Keep the increment nonzero while simplifying; take its limit only afterward.

\\[
f\\prime(a)=\\lim_{h\\to0}\\frac{f(a+h)-f(a)}h
\\]

\\[
s-s(a)=s\\prime(a)(t-a)
\\]

**Step-by-step solution**

1. **Expand the numerator.**

\\[
s(t)=t^3-t^2
\\]

\\[
s(t+h)-s(t)=3t^2h+3th^2+h^3-2th-h^2
\\]

2. **Divide by the nonzero increment.**

\\[
\\frac{s(t+h)-s(t)}h=3t^2-2t+3th-h+h^2
\\]

3. **Take the limit and evaluate.**

\\[
\\frac{ds}{dt}=3t^2-2t=t(3t-2)
\\]

\\[
s\\prime(-1)=3+2=5
\\]

\\[
s(-1)=-1-1=-2
\\]

4. **Write the tangent.**

\\[
s+2=5(t+1)
\\]

\\[
s=5t+3
\\]

**Use this method again**

Expand powers with their signs, cancel the increment, take the limit, then use the original position for the tangent point.

**Check**

The tangent gives minus two at time minus one. At that input the exact secant slope is the following expression, whose limit is five.

\\[
5-4h+h^2\\longrightarrow5
\\]
:::

:::mcq
id: thomas-3-2-17
title: Thomas §3.2 · Exercise 17
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 17 · PDF p. 129](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the first derivative requested for the original function?
- [ ] a | \\(\\frac{8}{\\sqrt{x - 2}}\\)
- [ ] b | \\(\\frac{4}{\\left(x - 2\\right)^{\\frac{3}{2}}}\\)
- [ ] c | \\(- \\frac{8}{\\left(x - 2\\right)^{\\frac{3}{2}}}\\)
- [x] d | \\(- \\frac{4}{\\left(x - 2\\right)^{\\frac{3}{2}}}\\)
explanation: The original function is \\(\\frac{8}{\\sqrt{x - 2}}\\). Differentiate with respect to \\(x\\): its first derivative is \\(- \\frac{4}{\\left(x - 2\\right)^{\\frac{3}{2}}}\\). At (6,4), the derivative is −1/2. The tangent line is \\(y-4=-\\tfrac12(x-6)\\).
hint: Work through every subpart in the original question.
example:
![Thomas §3.2 · Exercise 17 · PDF p. 129](assets/recommended/math/thomas-3-2-17-context-1.webp)

![Thomas §3.2 · Exercise 17 · PDF p. 129](assets/recommended/math/thomas-3-2-17-question.webp)
solution:
**Plan — we are going to…**

1. Rationalize the reciprocal-root difference quotient.

2. Take the limit, evaluate the slope at six, and write the tangent through the given point.

**The trick**

The square root is in a denominator: combine fractions before conjugating. The allowed inputs are greater than two.

**What you need to know**

The derivative is a limiting secant slope. Keep the increment nonzero while simplifying; take its limit only afterward.

\\[
f\\prime(a)=\\lim_{h\\to0}\\frac{f(a+h)-f(a)}h
\\]

Multiply a radical difference by its conjugate. The difference of squares removes the roots from the numerator.

\\[
(A-B)(A+B)=A^2-B^2
\\]

A tangent at a given input passes through the corresponding point of the curve, with slope equal to the derivative.

\\[
y-f(a)=f\\prime(a)(x-a)
\\]

**Step-by-step solution**

1. **Form one fraction.**

\\[
f(x)=\\frac8{\\sqrt{x-2}},\\qquad x>2
\\]

\\[
\\frac{f(x+h)-f(x)}h=\\frac{8(\\sqrt{x-2}-\\sqrt{x+h-2})}{h\\sqrt{x-2}\\sqrt{x+h-2}}
\\]

2. **Conjugate and cancel.** The difference of the radicands is minus the increment.

\\[
\\frac{f(x+h)-f(x)}h=-\\frac8{\\sqrt{x-2}\\sqrt{x+h-2}(\\sqrt{x-2}+\\sqrt{x+h-2})}
\\]

3. **Take the limit.**

\\[
f\\prime(x)=-\\frac8{2(x-2)\\sqrt{x-2}}=-\\frac4{(x-2)^{3/2}}
\\]

4. **Evaluate and write the tangent.**

\\[
f\\prime(6)=-\\frac4{4^{3/2}}=-\\frac12
\\]

\\[
y-4=-\\frac12(x-6)
\\]

\\[
y=7-\\frac x2
\\]

**Use this method again**

Reciprocal radical → common denominator → conjugate → cancel → limit → point-slope tangent.

**Check**

Both the curve and the tangent give four at input six. The derivative is negative, as expected because the positive denominator grows.

\\[
f(6)=\\frac8{\\sqrt4}=4
\\]

\\[
7-\\frac62=4
\\]
:::

:::mcq
id: thomas-3-2-25
title: Thomas §3.2 · Exercise 25
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 25 · PDF p. 129](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the first derivative requested for the original function?
- [ ] a | \\(\\frac{x}{x - 1}\\)
- [ ] b | \\(\\frac{1}{\\left(x - 1\\right)^{2}}\\)
- [ ] c | \\(- \\frac{2}{\\left(x - 1\\right)^{2}}\\)
- [x] d | \\(- \\frac{1}{\\left(x - 1\\right)^{2}}\\)
explanation: The original function is \\(\\frac{x}{x - 1}\\). Differentiate with respect to \\(x\\): its first derivative is \\(- \\frac{1}{\\left(x - 1\\right)^{2}}\\). The alternative quotient reduces to \\(-1/[(z-1)(x-1)]\\); let z→x.
hint: Work through every subpart in the original question.
example:
![Thomas §3.2 · Exercise 25 · PDF p. 129](assets/recommended/math/thomas-3-2-25-context-1.webp)

![Thomas §3.2 · Exercise 25 · PDF p. 129](assets/recommended/math/thomas-3-2-25-question.webp)
solution:
**Plan — we are going to…**

1. Use the alternative two-input derivative definition.

2. Combine fractions, cancel the input difference, and take the limit.

**The trick**

The cross terms cancel, leaving the negative input difference. Do not reverse the subtraction in just the numerator.

**What you need to know**

The alternative definition holds the first input fixed and moves the second toward it.

\\[
f\\prime(x)=\\lim_{z\\to x}\\frac{f(z)-f(x)}{z-x}
\\]

**Step-by-step solution**

1. **State the original function and restriction.**

\\[
g(x)=\\frac x{x-1}
\\]

\\[
x\\ne1
\\]

2. **Combine over a common denominator.**

\\[
\\frac{g(z)-g(x)}{z-x}=\\frac{z(x-1)-x(z-1)}{(z-x)(z-1)(x-1)}
\\]

3. **Cancel the negative input difference while the inputs differ.**

\\[
=\\frac{-(z-x)}{(z-x)(z-1)(x-1)}=-\\frac1{(z-1)(x-1)}
\\]

4. **Let the second input approach the first.**

\\[
g\\prime(x)=-\\frac1{(x-1)^2}
\\]

**Use this method again**

Choose either increment form or two-input form; keep the same subtraction order, combine fractions, cancel, then take the limit.

**Check**

At input zero, the exact simplified two-input quotient tends to minus one. This agrees with the formula.

\\[
\\lim_{z\\to0}-\\frac1{(z-1)(-1)}=-1
\\]
:::

:::mcq
id: thomas-3-2-37
title: Thomas §3.2 · Exercise 37
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 37 · PDF p. 131](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What are the left and right derivatives at P, and is the function differentiable there?
- [ ] a | Left 1; right 0; not differentiable
- [ ] b | Both 0; differentiable
- [ ] c | Both 1; differentiable
- [x] d | Left 0; right 1; not differentiable
explanation: At P=(0,0), the left branch is x² and the right branch is x. Thus the left difference quotient tends to 0 and the right quotient is 1. Since the one-sided limits disagree, f′(0) does not exist.
hint: Work through every subpart in the original question.
example:
![Thomas §3.2 · Exercise 37 · PDF p. 131](assets/recommended/math/thomas-3-2-37-context-1.webp)

![Thomas §3.2 · Exercise 37 · PDF p. 131](assets/recommended/math/thomas-3-2-37-question.webp)
solution:
**Plan — we are going to…**

1. Evaluate the difference quotient from each branch at the origin.

2. Compare the two slopes to decide differentiability.

**The trick**

Both branches reach the same point, but meeting does not ensure a common slope.

**What you need to know**

The derivative is a limiting secant slope. Keep the increment nonzero while simplifying; take its limit only afterward.

\\[
f\\prime(a)=\\lim_{h\\to0}\\frac{f(a+h)-f(a)}h
\\]

**Step-by-step solution**

1. **Use the shared value.**

\\[
f(0)=0
\\]

2. **Approach from the left branch.**

\\[
f(x)=x^2\\quad(x<0)
\\]

\\[
f\\prime_-(0)=\\lim_{h\\to0^-}\\frac{h^2-0}h=\\lim_{h\\to0^-}h=0
\\]

3. **Approach from the right branch.**

\\[
f(x)=x\\quad(x>0)
\\]

\\[
f\\prime_+(0)=\\lim_{h\\to0^+}\\frac{h-0}h=1
\\]

4. **Compare.** The slopes differ, so the derivative at the origin does not exist.

\\[
0\\ne1
\\]

**Use this method again**

At a join, check the function value first, then compute left and right difference quotients using their own branches.

**Check**

The left parabola is flat at the origin, while the right straight line has slope one. This visible corner agrees with the unequal limits.
:::

:::mcq
id: thomas-3-2-39
title: Thomas §3.2 · Exercise 39
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 39 · PDF p. 131](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What are the left and right derivatives at P=(1,1)?
- [ ] a | Both 2; differentiable
- [x] b | Left 1/2; right 2; not differentiable
- [ ] c | Left 2; right 1/2; not differentiable
- [ ] d | Both 1/2; differentiable
explanation: For the left branch √x, rationalizing \\((\\sqrt{1+h}-1)/h\\) gives a limit of 1/2. For the right branch 2x−1, the quotient is 2. The unequal limits show that f′(1) does not exist.
hint: Work through every subpart in the original question.
example:
![Thomas §3.2 · Exercise 39 · PDF p. 131](assets/recommended/math/thomas-3-2-39-context-1.webp)

![Thomas §3.2 · Exercise 39 · PDF p. 131](assets/recommended/math/thomas-3-2-39-question.webp)
solution:
**Plan — we are going to…**

1. Rationalize the left-hand difference quotient at input one.

2. Compute the right-hand slope and compare.

**The trick**

Each side uses a different branch. A common function value of one does not make their slopes equal.

**What you need to know**

The derivative is a limiting secant slope. Keep the increment nonzero while simplifying; take its limit only afterward.

\\[
f\\prime(a)=\\lim_{h\\to0}\\frac{f(a+h)-f(a)}h
\\]

Multiply a radical difference by its conjugate. The difference of squares removes the roots from the numerator.

\\[
(A-B)(A+B)=A^2-B^2
\\]

**Step-by-step solution**

1. **Use the shared point.**

\\[
f(1)=1
\\]

2. **Compute the left derivative from the square root.**

\\[
f\\prime_-(1)=\\lim_{h\\to0^-}\\frac{\\sqrt{1+h}-1}h
\\]

\\[
=\\lim_{h\\to0^-}\\frac1{\\sqrt{1+h}+1}=\\frac12
\\]

3. **Compute the right derivative from the line.**

\\[
f\\prime_+(1)=\\lim_{h\\to0^+}\\frac{2(1+h)-1-1}h=2
\\]

4. **Decide differentiability.** The left slope is one half and the right slope is two, so the function is not differentiable at the point.

**Use this method again**

For a root-to-line join, rationalize the root side, compute the line slope, and require equality.

**Check**

The left secant slope at increment minus 0.01 is approximately 0.5013, whereas every right secant slope is two. They cannot converge to one common value.
:::

:::mcq
id: thomas-3-2-41
title: Thomas §3.2 · Exercise 41
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 41 · PDF p. 131](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Is the given piecewise function differentiable at the origin?
- [ ] a | Yes: both branch derivatives approach 2
- [ ] b | No: its right derivative is infinite
- [ ] c | Yes: f(0)=7 and the function is continuous
- [x] d | No: its left limit is 7 and f(0)=−1
explanation: The left-hand limit of x²+2x+7 at 0 is 7, while f(0)=−1 from the branch 2x−1. The function is discontinuous at 0, so it cannot be differentiable there; matching branch derivative limits do not repair this jump.
hint: Work through every subpart in the original question.
example:
![Thomas §3.2 · Exercise 41 · PDF p. 131](assets/recommended/math/thomas-3-2-41-context-1.webp)

![Thomas §3.2 · Exercise 41 · PDF p. 131](assets/recommended/math/thomas-3-2-41-question.webp)
solution:
**Plan — we are going to…**

1. Compare the left limit with the actual value at zero.

2. Use the continuity requirement to decide differentiability.

**The trick**

The derivatives of the branch formulas both approach two, but the graph jumps. Comparing branch derivatives alone misses the discontinuity.

**What you need to know**

Differentiability implies continuity. A discontinuity is enough to rule out a derivative; no slope calculation can repair it.

**Step-by-step solution**

1. **Read the actual value from the branch containing zero.**

\\[
f(0)=2(0)-1=-1
\\]

2. **Find the left limit.**

\\[
\\lim_{x\\to0^-}(x^2+2x+7)=7
\\]

3. **Compare and conclude.**

\\[
7\\ne-1
\\]

The function is discontinuous, so it is not differentiable at zero.

**Use this method again**

Check continuity before matching slopes at a piecewise join.

**Check**

The left difference quotient contains an unbounded jump term, which directly prevents a finite derivative.

\\[
\\frac{f(h)-f(0)}h=\\frac{h^2+2h+8}h=h+2+\\frac8h\\quad(h<0)
\\]
:::

:::mcq
id: thomas-3-2-43
title: Thomas §3.2 · Exercise 43
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 43 · PDF p. 131](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Using the book’s one-sided convention at endpoints, which classification matches the graph?
- [ ] a | Discontinuous at x=−1 and x=1
- [x] b | Differentiable on [−3,2]; no other categories
- [ ] c | Differentiable only on (−3,2); endpoints discontinuous
- [ ] d | Continuous but nondifferentiable at 0
explanation: The graph is a single smooth straight segment throughout D=[−3,2], including one-sided derivatives at the domain endpoints. Thus (a) every point of D; (b) none; (c) none.
hint: Work through every subpart in the original question.
example:
![Thomas §3.2 · Exercise 43 · PDF p. 131](assets/recommended/math/thomas-3-2-43-context-1.webp)

![Thomas §3.2 · Exercise 43 · PDF p. 131](assets/recommended/math/thomas-3-2-43-question.webp)
solution:
**Plan — we are going to…**

1. Inspect the domain and exceptional points on the graph.

2. Classify smooth, continuous-but-sharp and discontinuous inputs separately.

**The trick**

Use the book’s one-sided derivative convention at the domain endpoints. Do not classify an endpoint as discontinuous merely because the graph stops there.

**What you need to know**

A differentiable graph must be continuous and have one finite tangent slope. A corner, cusp or vertical tangent can prevent differentiability while continuity survives. Here endpoint derivatives use only the side inside the domain.

**Step-by-step solution**

1. **Read the domain.**

\\[
D=[-3,2]
\\]

2. **Inspect the graph.** The plotted graph is one straight segment with no holes, jumps, corners or vertical tangents. Every interior input has the same finite line slope.

3. **Answer all three categories.**

\\[
\\text{(a) Differentiable on }[-3,2]
\\]

\\[
\\text{(b) Continuous but not differentiable: }\\varnothing
\\]

\\[
\\text{(c) Discontinuous: }\\varnothing
\\]

**Use this method again**

Read the domain → locate breaks → locate sharp or vertical tangents → classify the remaining smooth portions.

**Check**

The three categories cover the entire stated domain: the first contains every input and the other two are empty.
:::

:::mcq
id: thomas-3-2-45
title: Thomas §3.2 · Exercise 45
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 45 · PDF p. 131](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which points in D are neither continuous nor differentiable?
- [ ] a | Only x=−3 and x=3
- [ ] b | No points
- [ ] c | Every point of D
- [x] d | Only x=0
explanation: The open branch endpoints at x=0 and the separate filled value create a discontinuity. Thus (a) differentiable for −3≤x<0 and 0<x≤3; (b) no points continuous but nondifferentiable; (c) only x=0 is neither. At domain endpoints use one-sided derivatives as in the book.
hint: Work through every subpart in the original question.
example:
![Thomas §3.2 · Exercise 45 · PDF p. 131](assets/recommended/math/thomas-3-2-45-context-1.webp)

![Thomas §3.2 · Exercise 45 · PDF p. 131](assets/recommended/math/thomas-3-2-45-question.webp)
solution:
**Plan — we are going to…**

1. Inspect the domain and exceptional points on the graph.

2. Classify smooth, continuous-but-sharp and discontinuous inputs separately.

**The trick**

A filled point gives the function value, while nearby open endpoints determine the approach. Use both to detect the discontinuity.

**What you need to know**

A differentiable graph must be continuous and have one finite tangent slope. A corner, cusp or vertical tangent can prevent differentiability while continuity survives. Here endpoint derivatives use only the side inside the domain.

**Step-by-step solution**

1. **Read the domain.**

\\[
D=[-3,3]
\\]

2. **Inspect the graph.** Each branch is smooth away from zero. At zero the open branch endpoints do not agree with the separate filled value, so continuity fails there.

3. **Answer all three categories.**

\\[
\\text{(a) Differentiable on }[-3,0)\\cup(0,3]
\\]

\\[
\\text{(b) Continuous but not differentiable: }\\varnothing
\\]

\\[
\\text{(c) Neither: }\\{0\\}
\\]

**Use this method again**

Read the domain → locate breaks → locate sharp or vertical tangents → classify the remaining smooth portions.

**Check**

Every nonzero input lies on a smooth branch. Zero is excluded from both differentiability intervals and is exactly the discontinuous input.
:::

:::mcq
id: thomas-3-2-47
title: Thomas §3.2 · Exercise 47
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 47 · PDF p. 131](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Where is the graph continuous but not differentiable?
- [ ] a | Nowhere
- [x] b | Only x=0
- [ ] c | Only x=−1
- [ ] d | Only x=2
explanation: The graph has a continuous sharp point at x=0. Therefore (a) differentiable on [−1,0) and (0,2]; (b) continuous but nondifferentiable at 0; (c) nowhere discontinuous. Endpoint derivatives are one-sided.
hint: Work through every subpart in the original question.
example:
![Thomas §3.2 · Exercise 47 · PDF p. 131](assets/recommended/math/thomas-3-2-47-context-1.webp)

![Thomas §3.2 · Exercise 47 · PDF p. 131](assets/recommended/math/thomas-3-2-47-question.webp)
solution:
**Plan — we are going to…**

1. Inspect the domain and exceptional points on the graph.

2. Classify smooth, continuous-but-sharp and discontinuous inputs separately.

**The trick**

A sharp point is a failure of differentiability, not a break in continuity. Keep those classifications separate.

**What you need to know**

A differentiable graph must be continuous and have one finite tangent slope. A corner, cusp or vertical tangent can prevent differentiability while continuity survives. Here endpoint derivatives use only the side inside the domain.

**Step-by-step solution**

1. **Read the domain.**

\\[
D=[-1,2]
\\]

2. **Inspect the graph.** Both sides meet at zero, so the graph is continuous there. The meeting point is sharp, so no single finite tangent slope exists there.

3. **Answer all three categories.**

\\[
\\text{(a) Differentiable on }[-1,0)\\cup(0,2]
\\]

\\[
\\text{(b) Continuous but not differentiable: }\\{0\\}
\\]

\\[
\\text{(c) Discontinuous: }\\varnothing
\\]

**Use this method again**

Read the domain → locate breaks → locate sharp or vertical tangents → classify the remaining smooth portions.

**Check**

The two smooth intervals plus the sharp input zero cover the domain. There is no hole or jump to put in the discontinuous category.
:::

:::mcq
id: thomas-3-2-58
title: Thomas §3.2 · Exercise 58
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 58 · PDF p. 132](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which conclusion follows from −x²≤f(x)≤x² near 0?
- [ ] a | f′(0)=1
- [ ] b | The bounds imply f(x)=0 everywhere
- [x] c | f(0)=0 and f′(0)=0; the oscillatory example also has derivative 0
- [ ] d | f(0)=0, but no derivative can exist
explanation: (a) The bound at 0 forces f(0)=0. For h≠0, \\(|[f(h)-f(0)]/h|\\le|h|\\), so the squeeze theorem gives f′(0)=0. (b) For f(x)=x²sin(1/x) when x≠0 and f(0)=0, use |sin(1/x)|≤1 to obtain the same bound; directly, h sin(1/h)→0.
hint: Work through every subpart in the original question.
example:
![Thomas §3.2 · Exercise 58 · PDF p. 132](assets/recommended/math/thomas-3-2-58-question.webp)
solution:
**Plan — we are going to…**

1. Use the bounds to find the function value at zero.

2. Bound the difference quotient and apply the squeeze theorem.

3. Apply the same argument to the oscillating example.

**The trick**

Dividing an inequality by a negative increment can reverse its signs. Use an absolute-value bound to handle both sides at once.

**What you need to know**

A quantity whose absolute value is bounded by something tending to zero must also tend to zero. The sine of any real angle has absolute value at most one.

\\[
|\\sin u|\\le1
\\]

**Step-by-step solution**

1. **Part (a): evaluate the bound at zero.**

\\[
|f(x)|\\le x^2\\quad(-1\\le x\\le1)
\\]

\\[
|f(0)|\\le0\\quad\\Longrightarrow\\quad f(0)=0
\\]

2. **Bound the difference quotient for nonzero increment.**

\\[
\\left|\\frac{f(h)-f(0)}h\\right|=\\frac{|f(h)|}{|h|}\\le\\frac{h^2}{|h|}=|h|
\\]

3. **Squeeze to obtain the derivative.**

\\[
|h|\\longrightarrow0\\quad\\Longrightarrow\\quad f\\prime(0)=0
\\]

4. **Part (b): use the prescribed value at zero.**

\\[
f(x)=\\begin{cases}x^2\\sin\\frac1x,&x\\ne0,\\\\0,&x=0.\\end{cases}
\\]

\\[
\\frac{f(h)-f(0)}h=h\\sin\\frac1h
\\]

5. **Bound the oscillation.**

\\[
\\left|h\\sin\\frac1h\\right|\\le|h|\\longrightarrow0
\\]

\\[
f\\prime(0)=0
\\]

**Use this method again**

For a small oscillating expression, bound its absolute value and squeeze the difference quotient instead of trying to find the oscillation’s own limit.

**Check**

Even though sine of the reciprocal input does not settle to one value, at increment 0.001 the slope’s magnitude is at most 0.001; at increment 0.000001 it is at most 0.000001. These bounds force slope zero.
:::`};export{e as default};