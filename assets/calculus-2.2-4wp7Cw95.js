var e={id:`calculus-2.2`,title:`Thomas Calculus §2.2 Practice`,summary:`Thomas' Calculus §2.2 · original textbook exercises and verified practice.`,subjectId:`mathematics`,reward:0,status:`published`,authoringSource:`:::mcq
id: thomas-2-2-1
title: Thomas §2.2 · Exercise 1
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 1 · PDF p. 71](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | (a) 1; (b) 1; (c) 0; (d) 1/2
- [ ] b | (a) 0; (b) 1; (c) 1; (d) 1/2
- [ ] c | (a) DNE; (b) 0; (c) DNE; (d) 1
- [x] d | (a) DNE; (b) 1; (c) 0; (d) 1/2
explanation: At x=1 the left and right limits are 1 and 0, so the limit does not exist. Both branches approach 1 at x=2 and 0 at x=3. At x=2.5 the descending line has height 1/2.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 1 · PDF p. 71](assets/recommended/math/thomas-2-2-1-question.webp)
solution:
**Plan — we are going to…**

1. Read the graph from each side of every requested input.
2. Compare the one-sided approach heights.
3. Ignore isolated filled dots when reading limits.

**The trick**

**Follow the nearby curve, not an isolated dot.** At input three the filled dot has height one, but both nearby curve pieces approach height zero.

**What you need to know**

A two-sided limit exists when approaching from smaller and larger inputs gives the same output. The value exactly at the input is a separate question.

\\[
\\lim_{x\\to a}f(x)=L\\quad\\Longleftrightarrow\\quad\\lim_{x\\to a^-}f(x)=L=\\lim_{x\\to a^+}f(x).
\\]



**Step-by-step solution**

1. **Part (a): approach one from the left and right.** The left line approaches height one; the segment beginning at one approaches height zero:

\\[
\\lim_{x\\to1^-}g(x)=1,\\qquad\\lim_{x\\to1^+}g(x)=0.
\\]

The heights differ, so the two-sided limit **does not exist**.

2. **Part (b): approach two.** Both adjoining segments meet at height one:

\\[
\\lim_{x\\to2}g(x)=1.
\\]

3. **Part (c): approach three along the curve.** The descending and ascending segments both approach the open circle at height zero:

\\[
\\lim_{x\\to3}g(x)=0.
\\]

The separate filled dot at height one does not change this.

4. **Part (d): read the middle of the descending line.** Between the points with coordinates (2,1) and (3,0), the line is:

\\[
g(x)=3-x\\quad(2<x<3).
\\]



\\[
\\lim_{x\\to2.5}g(x)=3-2.5=\\frac12.
\\]

**Use this method again**

At each input, trace left and right branches separately → compare heights → disregard isolated point values.

**Check**

The descending segment drops one vertical unit per horizontal unit. Halfway from two to three, its height must be halfway from one to zero. This confirms the half-value. At one the two branch heights disagree; at two and three they agree.
:::

:::mcq
id: thomas-2-2-3
title: Thomas §2.2 · Exercise 3
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 3 · PDF p. 71](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | True: a, b, d, e. False: c, f, g.
- [x] b | True: a, b, f, g. False: c, d, e.
- [ ] c | True: a, c, d, f. False: b, e, g.
- [ ] d | True: b, e, f. False: a, c, d, g.
explanation: The two branches approach 0 at x=0 even though f(0)=1. At x=1 the left limit is −1 and the right limit is 0, so the two-sided limit does not exist. At every point of (−1,1), the two-sided limit exists, including the removable hole at 0.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 3 · PDF p. 71](assets/recommended/math/thomas-2-2-3-question.webp)

![Thomas §2.2 · Exercise 3 · PDF p. 71](assets/recommended/math/thomas-2-2-3-continuation.webp)
solution:
**Plan — we are going to…**

1. Read the approach behavior at zero and at one.
2. Separate approach values from the filled point at zero.
3. Judge all seven statements individually.

**The trick**

**A hole can still have a limit.** At zero the curve approaches height zero even though the filled point gives function value one. At one the two approach heights disagree.

**What you need to know**

A two-sided limit exists when approaching from smaller and larger inputs gives the same output. The value exactly at the input is a separate question.

\\[
\\lim_{x\\to a}f(x)=L\\quad\\Longleftrightarrow\\quad\\lim_{x\\to a^-}f(x)=L=\\lim_{x\\to a^+}f(x).
\\]



**Step-by-step solution**

1. **Read the graph at zero.** Both segments approach the open circle at the origin, while a filled dot is above it:

\\[
\\lim_{x\\to0}f(x)=0,\\qquad f(0)=1.
\\]

2. **Read the graph at one from each side.**

\\[
\\lim_{x\\to1^-}f(x)=-1,\\qquad\\lim_{x\\to1^+}f(x)=0.
\\]

Therefore the two-sided limit at one does not exist.

3. **Statements (a), (b) and (c).** (a) **True**: the limit at zero exists. (b) **True**: it is zero. (c) **False**: the filled point’s height one is the function value, not the limit.

4. **Statements (d) and (e).** Both are **False**. Neither one nor zero is a two-sided limit at one, because the two one-sided values are different.

5. **Statement (f).** **True**. At every interior point of the interval from negative one to one, the graph has matching approach heights. This includes the hole at zero.

\\[
-1<x_0<1.
\\]

6. **Statement (g).** **True**: the two-sided limit at one does not exist. The complete true list is (a), (b), (f), (g); the false list is (c), (d), (e).

**Use this method again**

Record left limit, right limit and function value separately before judging graph statements.

**Check**

Near zero, the two line formulas are x on the left and negative x on the right; both tend to zero. Near one, negative x tends to negative one from the left while x minus one tends to zero from the right. These formulas confirm every classification.
:::

:::mcq
id: thomas-2-2-5
title: Thomas §2.2 · Exercise 5
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 5 · PDF p. 71](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | The limit is 0.
- [ ] b | The limit is 1.
- [ ] c | The limit is −1.
- [x] d | No two-sided limit: left −1, right 1.
explanation: For x<0, x/|x|=−1; for x>0 it is 1. Different one-sided limits prevent a two-sided limit.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 5 · PDF p. 71](assets/recommended/math/thomas-2-2-5-question.webp)
solution:
**Plan — we are going to…**

1. Rewrite the absolute value separately on each side of zero.
2. Simplify each one-sided quotient.
3. Compare the resulting constants.

**The trick**

**Absolute value changes formula at zero.** A negative input has absolute value equal to its negative, not to itself.

**What you need to know**

Absolute value is nonnegative and obeys this piecewise definition:

\\[
|x|=\\begin{cases}-x,&x<0,\\\\x,&x>0.\\end{cases}
\\]

A two-sided limit exists when approaching from smaller and larger inputs gives the same output. The value exactly at the input is a separate question.

\\[
\\lim_{x\\to a}f(x)=L\\quad\\Longleftrightarrow\\quad\\lim_{x\\to a^-}f(x)=L=\\lim_{x\\to a^+}f(x).
\\]



**Step-by-step solution**

1. **Approach from negative inputs.**

\\[
\\frac{x}{|x|}=\\frac{x}{-x}=-1\\quad(x<0).
\\]



\\[
\\lim_{x\\to0^-}\\frac{x}{|x|}=-1.
\\]

2. **Approach from positive inputs.**

\\[
\\frac{x}{|x|}=\\frac{x}{x}=1\\quad(x>0).
\\]



\\[
\\lim_{x\\to0^+}\\frac{x}{|x|}=1.
\\]

3. **Compare.** Negative one and positive one are unequal, so the two-sided limit **does not exist**.

**Use this method again**

Absolute value at a sign change → split into sides → simplify → compare one-sided limits.

**Check**

For example, a small negative input gives negative one and a small positive input gives positive one:

\\[
\\frac{-0.001}{|-0.001|}=-1,\\qquad\\frac{0.001}{|0.001|}=1.
\\]

Getting closer does not shrink the difference between these two outputs.
:::

:::mcq
id: thomas-2-2-7
title: Thomas §2.2 · Exercise 7
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 7 · PDF p. 71](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | Yes: the limit must be infinite.
- [x] b | No: being undefined at the point does not determine the limit.
- [ ] c | Yes: the limit must fail to exist.
- [ ] d | Yes: the limit must equal zero.
explanation: A limit concerns nearby values, not the value at the point. For example, f(x)=1 for x≠x₀ has limit 1 while being undefined at x₀; an oscillating example can have no limit.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 7 · PDF p. 71](assets/recommended/math/thomas-2-2-7-question.webp)
solution:
**Plan — we are going to…**

1. Recall what a limit uses.
2. Give an undefined-at-the-point function that has a limit.
3. Contrast it with an undefined-at-the-point function without a limit.

**The trick**

**Undefined at the point does not mean no limit.** Limits depend on nearby values rather than the missing value itself.

**What you need to know**

A two-sided limit exists when approaching from smaller and larger inputs gives the same output. The value exactly at the input is a separate question.

\\[
\\lim_{x\\to a}f(x)=L\\quad\\Longleftrightarrow\\quad\\lim_{x\\to a^-}f(x)=L=\\lim_{x\\to a^+}f(x).
\\]



**Step-by-step solution**

1. **State the answer to the question.** **No**: knowing only that the function is undefined at the target input is insufficient to decide whether a limit exists.

2. **Give a counterexample with an existing limit.** Define the function everywhere except the target input by a constant:

\\[
f(x)=1\\quad(x\\ne x_0).
\\]

Every nearby output is one, so:

\\[
\\lim_{x\\to x_0}f(x)=1.
\\]

3. **Give the contrasting behavior.** A function can instead have different constants on the two sides:

\\[
g(x)=\\begin{cases}-1,&x<x_0,\\\\1,&x>x_0.\\end{cases}
\\]

It is also undefined at the target input, but its one-sided limits are negative one and positive one, so it has no two-sided limit.

**Use this method again**

When a claim links a function value to a limit, test the claim using a hole in a constant graph.

**Check**

The first example has identical nearby outputs on both sides. The second keeps two distinct nearby outputs no matter how close the inputs are. Both omit the exact target value, proving that omission alone decides nothing.
:::

:::mcq
id: thomas-2-2-9
title: Thomas §2.2 · Exercise 9
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 9 · PDF p. 72](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | Yes; f(1) must equal 5.
- [ ] b | No; f(1) must be undefined.
- [ ] c | No; f(1) must equal 0.
- [x] d | No; f(1) may be 5, a different number, or undefined.
explanation: Changing or removing a single function value does not affect the limit. The limit 5 at x=1 alone gives no information about f(1).
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 9 · PDF p. 72](assets/recommended/math/thomas-2-2-9-question.webp)
solution:
**Plan — we are going to…**

1. Separate the given limit from the value at one.
2. Consider different choices for that single point.
3. Decide what the limit forces.

**The trick**

**A limit of five does not require the value at one to equal five.** That additional equality would require continuity, which has not been assumed.

**What you need to know**

A two-sided limit exists when approaching from smaller and larger inputs gives the same output. The value exactly at the input is a separate question.

\\[
\\lim_{x\\to a}f(x)=L\\quad\\Longleftrightarrow\\quad\\lim_{x\\to a^-}f(x)=L=\\lim_{x\\to a^+}f(x).
\\]



**Step-by-step solution**

1. **Record the given nearby behavior.**

\\[
\\lim_{x\\to1}f(x)=5.
\\]

2. **Construct a family with exactly this limit.** Keep every nearby output equal to five, and choose any value A at the point:

\\[
f(x)=\\begin{cases}5,&x\\ne1,\\\\A,&x=1.\\end{cases}
\\]

Every real choice of A gives the same limit five.

3. **Include a missing point as another possibility.** Leaving the function undefined at one also keeps the same nearby outputs. Therefore **no**, the limit alone does not determine the function value. It may be five, another number, or undefined.

**Use this method again**

Do not infer a point value from a limit unless continuity is explicitly given or established.

**Check**

Choose A equal to zero in the example. Then the function value is zero but every sufficiently close distinct input has output five. Choosing A equal to five or deleting the point leaves those nearby values unchanged.
:::

:::mcq
id: thomas-2-2-11
title: Thomas §2.2 · Exercise 11
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 11 · PDF p. 72](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(12\\)
- [x] b | \\(19\\)
- [ ] c | \\(7\\)
- [ ] d | \\(14\\)
explanation: Direct substitution gives 2(7)+5=19.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 11 · PDF p. 72](assets/recommended/math/thomas-2-2-11-context-1.webp)

![Thomas §2.2 · Exercise 11 · PDF p. 72](assets/recommended/math/thomas-2-2-11-question.webp)
solution:
**Plan — we are going to…**

1. Check that substitution is legal at the approaching input.
2. Evaluate the inside operations in order.
3. State the resulting limit.

**The trick**

There is no denominator, root restriction or discontinuity to repair. Direct substitution is enough.

**What you need to know**

Polynomials are continuous. A quotient of continuous functions is continuous wherever its denominator is nonzero. At such an input, substitute directly.

**Step-by-step solution**

1. **Record the original limit.**

\\[
\\lim_{x\\to7}(2x+5).
\\]

2. **Use continuity of the linear polynomial.**

\\[
\\lim_{x\\to7}(2x+5)=2(7)+5.
\\]

3. **Multiply first, then add.**

\\[
2(7)+5=14+5=19.
\\]

**Use this method again**

Continuous expression → check any denominator/root restrictions → substitute → follow arithmetic order.

**Check**

An independent check confirms the calculation:

\\[
x=6.99:\\ 2x+5=18.98,\\qquad x=7.01:\\ 2x+5=19.02.
\\]
:::

:::mcq
id: thomas-2-2-13
title: Thomas §2.2 · Exercise 13
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 13 · PDF p. 72](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(8\\)
- [ ] b | \\(0\\)
- [ ] c | \\(48\\)
- [x] d | \\(-8\\)
explanation: The polynomial is continuous: 8(6−5)(6−7)=−8.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 13 · PDF p. 72](assets/recommended/math/thomas-2-2-13-context-1.webp)

![Thomas §2.2 · Exercise 13 · PDF p. 72](assets/recommended/math/thomas-2-2-13-question.webp)
solution:
**Plan — we are going to…**

1. Check that substitution is legal at the approaching input.
2. Evaluate the inside operations in order.
3. State the resulting limit.

**The trick**

The two factors have opposite signs at the target input, so the result must be negative.

**What you need to know**

Polynomials are continuous. A quotient of continuous functions is continuous wherever its denominator is nonzero. At such an input, substitute directly.

**Step-by-step solution**

1. **Record the original limit.**

\\[
\\lim_{t\\to6}8(t-5)(t-7).
\\]

2. **Evaluate each factor at the target input.**

\\[
6-5=1,\\qquad6-7=-1.
\\]

3. **Multiply the three factors, retaining the negative sign.**

\\[
\\lim_{t\\to6}8(t-5)(t-7)=8(1)(-1)=-8.
\\]

**Use this method again**

Continuous expression → check any denominator/root restrictions → substitute → follow arithmetic order.

**Check**

An independent check confirms the calculation:

\\[
8(t-5)(t-7)=8\\bigl((t-6)^2-1\\bigr)\\longrightarrow8(0-1)=-8.
\\]
:::

:::mcq
id: thomas-2-2-15
title: Thomas §2.2 · Exercise 15
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 15 · PDF p. 72](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(\\frac38\\)
- [x] b | \\(\\frac58\\)
- [ ] c | \\(\\frac85\\)
- [ ] d | \\(1\\)
explanation: The denominator is nonzero at x=2, so substitute: (2+3)/(2+6)=5/8.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 15 · PDF p. 72](assets/recommended/math/thomas-2-2-15-context-1.webp)

![Thomas §2.2 · Exercise 15 · PDF p. 72](assets/recommended/math/thomas-2-2-15-question.webp)
solution:
**Plan — we are going to…**

1. Check that substitution is legal at the approaching input.
2. Evaluate the inside operations in order.
3. State the resulting limit.

**The trick**

A rational expression needs a denominator check before substitution. Here the denominator becomes eight, not zero.

**What you need to know**

Polynomials are continuous. A quotient of continuous functions is continuous wherever its denominator is nonzero. At such an input, substitute directly.

**Step-by-step solution**

1. **Record the original limit.**

\\[
\\lim_{x\\to2}\\frac{x+3}{x+6}.
\\]

2. **Check the denominator.**

\\[
2+6=8\\ne0.
\\]

3. **Evaluate numerator and denominator.**

\\[
2+3=5,\\qquad2+6=8.
\\]

4. **Use the quotient limit law.**

\\[
\\lim_{x\\to2}\\frac{x+3}{x+6}=\\frac58.
\\]

**Use this method again**

Continuous expression → check any denominator/root restrictions → substitute → follow arithmetic order.

**Check**

An independent check confirms the calculation:

\\[
\\frac{1.99+3}{1.99+6}\\approx0.62453,\\qquad\\frac{2.01+3}{2.01+6}\\approx0.62547.
\\]
:::

:::mcq
id: thomas-2-2-17
title: Thomas §2.2 · Exercise 17
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 17 · PDF p. 72](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(3\\)
- [ ] b | \\(9\\)
- [ ] c | \\(-27\\)
- [x] d | \\(27\\)
explanation: Substitute x=−1: 3(2(−1)−1)²=3(−3)²=27.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 17 · PDF p. 72](assets/recommended/math/thomas-2-2-17-context-1.webp)

![Thomas §2.2 · Exercise 17 · PDF p. 72](assets/recommended/math/thomas-2-2-17-question.webp)
solution:
**Plan — we are going to…**

1. Check that substitution is legal at the approaching input.
2. Evaluate the inside operations in order.
3. State the resulting limit.

**The trick**

Square the entire negative quantity inside parentheses before multiplying by three.

**What you need to know**

Polynomials are continuous. A quotient of continuous functions is continuous wherever its denominator is nonzero. At such an input, substitute directly.

**Step-by-step solution**

1. **Record the original limit.**

\\[
\\lim_{x\\to-1}3(2x-1)^2.
\\]

2. **Evaluate the inside expression first.**

\\[
2(-1)-1=-2-1=-3.
\\]

3. **Square, then multiply.**

\\[
3(-3)^2=3(9)=27.
\\]

4. **State the limit.**

\\[
\\lim_{x\\to-1}3(2x-1)^2=27.
\\]

**Use this method again**

Continuous expression → check any denominator/root restrictions → substitute → follow arithmetic order.

**Check**

An independent check confirms the calculation:

\\[
3(2x-1)^2=12x^2-12x+3\\longrightarrow12+12+3=27.
\\]
:::

:::mcq
id: thomas-2-2-19
title: Thomas §2.2 · Exercise 19
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 19 · PDF p. 72](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(-16\\)
- [x] b | \\(16\\)
- [ ] c | \\(8\\)
- [ ] d | \\(4\\)
explanation: At y=−3, (5−y)^(4/3)=8^(4/3)=2⁴=16.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 19 · PDF p. 72](assets/recommended/math/thomas-2-2-19-context-1.webp)

![Thomas §2.2 · Exercise 19 · PDF p. 72](assets/recommended/math/thomas-2-2-19-question.webp)
solution:
**Plan — we are going to…**

1. Check that substitution is legal at the approaching input.
2. Evaluate the inside operations in order.
3. State the resulting limit.

**The trick**

The fractional power means cube root followed by the fourth power; it does not mean multiplying by four-thirds.

**What you need to know**

The inside expression is positive near the given input, so the root-and-power function is continuous there.

\\[
a^{4/3}=\\left(\\sqrt[3]{a}\\right)^4\\quad(a>0).
\\]



**Step-by-step solution**

1. **Record the original limit.**

\\[
\\lim_{y\\to-3}(5-y)^{4/3}.
\\]

2. **Evaluate the positive base.**

\\[
5-(-3)=8.
\\]

3. **Take the cube root before the fourth power.**

\\[
8^{4/3}=\\left(\\sqrt[3]8\\right)^4=2^4=16.
\\]

4. **State the limit.**

\\[
\\lim_{y\\to-3}(5-y)^{4/3}=16.
\\]

**Use this method again**

Continuous expression → check any denominator/root restrictions → substitute → follow arithmetic order.

**Check**

An independent check confirms the calculation:

\\[
16^3=4096=8^4.
\\]
:::

:::mcq
id: thomas-2-2-21
title: Thomas §2.2 · Exercise 21
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 21 · PDF p. 72](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(3\\)
- [ ] b | \\(0\\)
- [ ] c | \\(\\frac12\\)
- [x] d | \\(\\frac32\\)
explanation: At h=0 the denominator is √1+1=2, so the limit is 3/2.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 21 · PDF p. 72](assets/recommended/math/thomas-2-2-21-context-1.webp)

![Thomas §2.2 · Exercise 21 · PDF p. 72](assets/recommended/math/thomas-2-2-21-question.webp)
solution:
**Plan — we are going to…**

1. Check that substitution is legal at the approaching input.
2. Evaluate the inside operations in order.
3. State the resulting limit.

**The trick**

The denominator is a sum, so it becomes two. There is no zero-over-zero form to rationalize.

**What you need to know**

A square root is continuous at a positive radicand. The quotient law is valid if the denominator’s limit is nonzero.

**Step-by-step solution**

1. **Record the original limit.**

\\[
\\lim_{h\\to0}\\frac3{\\sqrt{3h+1}+1}.
\\]

2. **Check the radicand and denominator at zero.**

\\[
3(0)+1=1>0,\\qquad\\sqrt1+1=2\\ne0.
\\]

3. **Substitute into the quotient.**

\\[
\\lim_{h\\to0}\\frac3{\\sqrt{3h+1}+1}=\\frac3{\\sqrt1+1}=\\frac32.
\\]

**Use this method again**

Continuous expression → check any denominator/root restrictions → substitute → follow arithmetic order.

**Check**

An independent check confirms the calculation:

\\[
h=0.001:\\ \\frac3{\\sqrt{1.003}+1}\\approx1.49888,\\qquad h=-0.001:\\ \\frac3{\\sqrt{0.997}+1}\\approx1.50113.
\\]
:::

:::mcq
id: thomas-2-2-23
title: Thomas §2.2 · Exercise 23
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 23 · PDF p. 72](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(\\frac15\\)
- [x] b | \\(\\frac1{10}\\)
- [ ] c | \\(0\\)
- [ ] d | \\(10\\)
explanation: Factor x²−25=(x−5)(x+5). For x≠5 the quotient is 1/(x+5), whose limit is 1/10.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 23 · PDF p. 72](assets/recommended/math/thomas-2-2-23-context-1.webp)

![Thomas §2.2 · Exercise 23 · PDF p. 72](assets/recommended/math/thomas-2-2-23-question.webp)
solution:
**Plan — we are going to…**

1. Test direct substitution and recognize the zero-over-zero form.
2. Factor or combine fractions to expose a common factor.
3. Cancel at nearby inputs and evaluate the simplified expression.

**The trick**

The numerator is a factor of a difference of squares. Cancel the common factor only for nearby inputs different from five.

**What you need to know**

A limit uses nearby inputs, so a common nonzero factor may be cancelled for inputs different from the approaching value. An initial zero-over-zero form is not the answer.

**Step-by-step solution**

1. **Write the original limit.**

\\[
\\lim_{x\\to5}\\frac{x-5}{x^2-25}.
\\]

Direct substitution gives zero divided by zero, so simplify before evaluating.

2. **Factor the denominator.**

\\[
x^2-25=(x-5)(x+5).
\\]

3. **Cancel the common nonzero factor away from five.**

\\[
\\frac{x-5}{(x-5)(x+5)}=\\frac1{x+5}\\quad(x\\ne5).
\\]

4. **Take the limit of the simplified expression.**

\\[
\\lim_{x\\to5}\\frac1{x+5}=\\frac1{10}.
\\]

**Use this method again**

Zero-over-zero → factor every relevant part → cancel only common factors → substitute into the continuous remainder.

**Check**

Nearby values on opposite sides approach the same result:

\\[
x=4.99:\\ \\frac1{x+5}\\approx0.100100,\\qquad x=5.01:\\ \\frac1{x+5}\\approx0.099900.
\\]
:::

:::mcq
id: thomas-2-2-25
title: Thomas §2.2 · Exercise 25
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 25 · PDF p. 72](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(7\\)
- [ ] b | \\(-5\\)
- [ ] c | \\(0\\)
- [x] d | \\(-7\\)
explanation: x²+3x−10=(x+5)(x−2). Cancel x+5 away from x=−5, then evaluate x−2=−7.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 25 · PDF p. 72](assets/recommended/math/thomas-2-2-25-context-1.webp)

![Thomas §2.2 · Exercise 25 · PDF p. 72](assets/recommended/math/thomas-2-2-25-question.webp)
solution:
**Plan — we are going to…**

1. Test direct substitution and recognize the zero-over-zero form.
2. Factor or combine fractions to expose a common factor.
3. Cancel at nearby inputs and evaluate the simplified expression.

**The trick**

The cancelled factor removes a hole near negative five; it does not make the original function defined there.

**What you need to know**

A limit uses nearby inputs, so a common nonzero factor may be cancelled for inputs different from the approaching value. An initial zero-over-zero form is not the answer.

**Step-by-step solution**

1. **Write the original limit.**

\\[
\\lim_{x\\to-5}\\frac{x^2+3x-10}{x+5}.
\\]

Direct substitution gives zero divided by zero, so simplify before evaluating.

2. **Find two numbers with product negative ten and sum three.**

\\[
x^2+3x-10=(x+5)(x-2).
\\]

3. **Cancel the common factor at nearby allowed inputs.**

\\[
\\frac{(x+5)(x-2)}{x+5}=x-2\\quad(x\\ne-5).
\\]

4. **Evaluate the reduced expression.**

\\[
\\lim_{x\\to-5}(x-2)=-5-2=-7.
\\]

**Use this method again**

Zero-over-zero → factor every relevant part → cancel only common factors → substitute into the continuous remainder.

**Check**

Nearby values on opposite sides approach the same result:

\\[
x=-5.01:\\ x-2=-7.01,\\qquad x=-4.99:\\ x-2=-6.99.
\\]
:::

:::mcq
id: thomas-2-2-27
title: Thomas §2.2 · Exercise 27
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 27 · PDF p. 72](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(3\\)
- [x] b | \\(\\frac32\\)
- [ ] c | \\(1\\)
- [ ] d | \\(\\frac23\\)
explanation: Factor numerator (t+2)(t−1) and denominator (t−1)(t+1). The reduced expression tends to 3/2.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 27 · PDF p. 72](assets/recommended/math/thomas-2-2-27-context-1.webp)

![Thomas §2.2 · Exercise 27 · PDF p. 72](assets/recommended/math/thomas-2-2-27-question.webp)
solution:
**Plan — we are going to…**

1. Test direct substitution and recognize the zero-over-zero form.
2. Factor or combine fractions to expose a common factor.
3. Cancel at nearby inputs and evaluate the simplified expression.

**The trick**

Both numerator and denominator contain the factor t minus one. Factor each completely before cancelling.

**What you need to know**

A limit uses nearby inputs, so a common nonzero factor may be cancelled for inputs different from the approaching value. An initial zero-over-zero form is not the answer.

**Step-by-step solution**

1. **Write the original limit.**

\\[
\\lim_{t\\to1}\\frac{t^2+t-2}{t^2-1}.
\\]

Direct substitution gives zero divided by zero, so simplify before evaluating.

2. **Factor the numerator and denominator.**

\\[
t^2+t-2=(t+2)(t-1).
\\]

3. **Use the difference-of-squares denominator.**

\\[
t^2-1=(t-1)(t+1).
\\]

4. **Cancel the common factor near one.**

\\[
\\frac{(t+2)(t-1)}{(t-1)(t+1)}=\\frac{t+2}{t+1}\\quad(t\\ne1).
\\]

5. **Check the remaining denominator and substitute.**

\\[
\\lim_{t\\to1}\\frac{t+2}{t+1}=\\frac{1+2}{1+1}=\\frac32.
\\]

**Use this method again**

Zero-over-zero → factor every relevant part → cancel only common factors → substitute into the continuous remainder.

**Check**

Nearby values on opposite sides approach the same result:

\\[
t=0.99:\\ \\frac{t+2}{t+1}\\approx1.50251,\\qquad t=1.01:\\ \\frac{t+2}{t+1}\\approx1.49751.
\\]
:::

:::mcq
id: thomas-2-2-29
title: Thomas §2.2 · Exercise 29
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 29 · PDF p. 72](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(\\frac12\\)
- [ ] b | \\(-2\\)
- [ ] c | \\(0\\)
- [x] d | \\(-\\frac12\\)
explanation: Cancel x+2 in −2(x+2)/[x²(x+2)], leaving −2/x². At x=−2 this is −1/2.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 29 · PDF p. 72](assets/recommended/math/thomas-2-2-29-context-1.webp)

![Thomas §2.2 · Exercise 29 · PDF p. 72](assets/recommended/math/thomas-2-2-29-question.webp)
solution:
**Plan — we are going to…**

1. Test direct substitution and recognize the zero-over-zero form.
2. Factor or combine fractions to expose a common factor.
3. Cancel at nearby inputs and evaluate the simplified expression.

**The trick**

Factor the common power from the denominator and the negative coefficient from the numerator. Keep the remaining negative sign.

**What you need to know**

A limit uses nearby inputs, so a common nonzero factor may be cancelled for inputs different from the approaching value. An initial zero-over-zero form is not the answer.

**Step-by-step solution**

1. **Write the original limit.**

\\[
\\lim_{x\\to-2}\\frac{-2x-4}{x^3+2x^2}.
\\]

Direct substitution gives zero divided by zero, so simplify before evaluating.

2. **Factor both parts.**

\\[
-2x-4=-2(x+2),\\qquad x^3+2x^2=x^2(x+2).
\\]

3. **Cancel the common factor for nearby allowed inputs.**

\\[
\\frac{-2(x+2)}{x^2(x+2)}=-\\frac2{x^2}\\quad(x\\ne-2,0).
\\]

4. **Substitute into the simplified quotient.**

\\[
-\\frac2{(-2)^2}=-\\frac24=-\\frac12.
\\]

**Use this method again**

Zero-over-zero → factor every relevant part → cancel only common factors → substitute into the continuous remainder.

**Check**

Nearby values on opposite sides approach the same result:

\\[
x=-2.01:\\ -\\frac2{x^2}\\approx-0.49504,\\qquad x=-1.99:\\ -\\frac2{x^2}\\approx-0.50504.
\\]
:::

:::mcq
id: thomas-2-2-31
title: Thomas §2.2 · Exercise 31
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 31 · PDF p. 72](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(2\\)
- [x] b | \\(-1\\)
- [ ] c | \\(1\\)
- [ ] d | \\(0\\)
explanation: (1/x−1)/(x−1)=(1−x)/[x(x−1)]=−1/x for x≠1. The limit is −1.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 31 · PDF p. 72](assets/recommended/math/thomas-2-2-31-context-1.webp)

![Thomas §2.2 · Exercise 31 · PDF p. 72](assets/recommended/math/thomas-2-2-31-question.webp)
solution:
**Plan — we are going to…**

1. Test direct substitution and recognize the zero-over-zero form.
2. Factor or combine fractions to expose a common factor.
3. Cancel at nearby inputs and evaluate the simplified expression.

**The trick**

First combine the numerator fractions. The factor one minus x is the negative of x minus one.

**What you need to know**

A limit uses nearby inputs, so a common nonzero factor may be cancelled for inputs different from the approaching value. An initial zero-over-zero form is not the answer.

**Step-by-step solution**

1. **Write the original limit.**

\\[
\\lim_{x\\to1}\\frac{1/x-1}{x-1}.
\\]

Direct substitution gives zero divided by zero, so simplify before evaluating.

2. **Write the numerator over one denominator.**

\\[
\\frac1x-1=\\frac{1-x}{x}.
\\]

3. **Divide by the original denominator.**

\\[
\\frac{1/x-1}{x-1}=\\frac{1-x}{x(x-1)}.
\\]

4. **Factor the sign and cancel.**

\\[
1-x=-(x-1).
\\]

5. **Simplify at nearby nonzero inputs.**

\\[
\\frac{-(x-1)}{x(x-1)}=-\\frac1x\\quad(x\\ne0,1).
\\]

6. **Evaluate the limit.**

\\[
\\lim_{x\\to1}\\left(-\\frac1x\\right)=-1.
\\]

**Use this method again**

Zero-over-zero → factor every relevant part → cancel only common factors → substitute into the continuous remainder.

**Check**

Nearby values on opposite sides approach the same result:

\\[
x=0.99:\\ -\\frac1x\\approx-1.01010,\\qquad x=1.01:\\ -\\frac1x\\approx-0.99010.
\\]
:::

:::mcq
id: thomas-2-2-33
title: Thomas §2.2 · Exercise 33
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 33 · PDF p. 72](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(\\frac34\\)
- [ ] b | \\(1\\)
- [ ] c | \\(4\\)
- [x] d | \\(\\frac43\\)
explanation: Cancel u−1 after factoring both differences of powers. The remaining numerator at 1 is 4 and denominator is 3.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 33 · PDF p. 72](assets/recommended/math/thomas-2-2-33-context-1.webp)

![Thomas §2.2 · Exercise 33 · PDF p. 72](assets/recommended/math/thomas-2-2-33-question.webp)
solution:
**Plan — we are going to…**

1. Test direct substitution and recognize the zero-over-zero form.
2. Factor or combine fractions to expose a common factor.
3. Cancel at nearby inputs and evaluate the simplified expression.

**The trick**

The differences of powers share u minus one, but the remaining sums have different numbers of terms.

**What you need to know**

A limit uses nearby inputs, so a common nonzero factor may be cancelled for inputs different from the approaching value. An initial zero-over-zero form is not the answer.

**Step-by-step solution**

1. **Write the original limit.**

\\[
\\lim_{u\\to1}\\frac{u^4-1}{u^3-1}.
\\]

Direct substitution gives zero divided by zero, so simplify before evaluating.

2. **Factor each difference of powers.**

\\[
u^4-1=(u-1)(u^3+u^2+u+1).
\\]

3. **Factor the cubic difference.**

\\[
u^3-1=(u-1)(u^2+u+1).
\\]

4. **Cancel the common nonzero factor near one.**

\\[
\\frac{u^4-1}{u^3-1}=\\frac{u^3+u^2+u+1}{u^2+u+1}\\quad(u\\ne1).
\\]

5. **Evaluate the remaining sums.**

\\[
\\frac{1+1+1+1}{1+1+1}=\\frac43.
\\]

**Use this method again**

Zero-over-zero → factor every relevant part → cancel only common factors → substitute into the continuous remainder.

**Check**

The alternative factorization verifies the numerator factorization, and at one it gives four while the denominator sum gives three:

\\[
u^3+u^2+u+1=(u+1)(u^2+1).
\\]



\\[
\\frac{(1+1)(1+1)}{1+1+1}=\\frac43.
\\]
:::

:::mcq
id: thomas-2-2-35
title: Thomas §2.2 · Exercise 35
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 35 · PDF p. 72](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(0\\)
- [x] b | \\(\\frac16\\)
- [ ] c | \\(6\\)
- [ ] d | \\(\\frac13\\)
explanation: Rationalization reduces the quotient to 1/(√x+3), which tends to 1/6.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 35 · PDF p. 72](assets/recommended/math/thomas-2-2-35-context-1.webp)

![Thomas §2.2 · Exercise 35 · PDF p. 72](assets/recommended/math/thomas-2-2-35-question.webp)
solution:
**Plan — we are going to…**

1. Recognize the zero-over-zero form caused by a radical difference.
2. Multiply by the matching conjugate.
3. Factor, cancel the vanishing factor, and substitute.

**The trick**

Rationalize the numerator so its difference of squares produces exactly the denominator factor.

**What you need to know**

A conjugate changes the sign between two terms. Multiplying by a conjugate uses the difference-of-squares identity:

\\[
(A-B)(A+B)=A^2-B^2.
\\]

A limit uses nearby inputs, so a common nonzero factor may be cancelled for inputs different from the approaching value. An initial zero-over-zero form is not the answer.

**Step-by-step solution**

1. **Record the original limit and test substitution.**

\\[
\\lim_{x\\to9}\\frac{\\sqrt x-3}{x-9}.
\\]

The numerator and denominator both approach zero.

2. **Multiply numerator and denominator by the numerator’s conjugate.**

\\[
\\frac{\\sqrt x-3}{x-9}\\frac{\\sqrt x+3}{\\sqrt x+3}=\\frac{x-9}{(x-9)(\\sqrt x+3)}.
\\]

3. **Cancel near nine, where the original denominator is nonzero.**

\\[
\\frac{x-9}{(x-9)(\\sqrt x+3)}=\\frac1{\\sqrt x+3}\\quad(x\\ne9).
\\]

4. **Evaluate the reduced expression.**

\\[
\\lim_{x\\to9}\\frac1{\\sqrt x+3}=\\frac1{3+3}=\\frac16.
\\]

**Use this method again**

Radical difference → multiply by conjugate over itself → difference of squares → factor/cancel → substitute.

**Check**

Numerical evaluation of the exactly equivalent reduced expression avoids the original subtraction’s loss of precision:

\\[
x=8.99:\\ \\frac1{\\sqrt x+3}\\approx0.166713,\\qquad x=9.01:\\ \\frac1{\\sqrt x+3}\\approx0.166620.
\\]
:::

:::mcq
id: thomas-2-2-37
title: Thomas §2.2 · Exercise 37
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 37 · PDF p. 72](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(2\\)
- [ ] b | \\(\\frac14\\)
- [ ] c | \\(0\\)
- [x] d | \\(4\\)
explanation: Rationalize the denominator: (x−1)/(√(x+3)−2)=√(x+3)+2 for x≠1. The limit is 4.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 37 · PDF p. 72](assets/recommended/math/thomas-2-2-37-context-1.webp)

![Thomas §2.2 · Exercise 37 · PDF p. 72](assets/recommended/math/thomas-2-2-37-question.webp)
solution:
**Plan — we are going to…**

1. Recognize the zero-over-zero form caused by a radical difference.
2. Multiply by the matching conjugate.
3. Factor, cancel the vanishing factor, and substitute.

**The trick**

Here the radical difference is in the denominator. Its conjugate turns that denominator into x minus one.

**What you need to know**

A conjugate changes the sign between two terms. Multiplying by a conjugate uses the difference-of-squares identity:

\\[
(A-B)(A+B)=A^2-B^2.
\\]

A limit uses nearby inputs, so a common nonzero factor may be cancelled for inputs different from the approaching value. An initial zero-over-zero form is not the answer.

**Step-by-step solution**

1. **Record the original limit and test substitution.**

\\[
\\lim_{x\\to1}\\frac{x-1}{\\sqrt{x+3}-2}.
\\]

The numerator and denominator both approach zero.

2. **Multiply both parts by the denominator’s conjugate.**

\\[
\\frac{x-1}{\\sqrt{x+3}-2}\\frac{\\sqrt{x+3}+2}{\\sqrt{x+3}+2}=\\frac{(x-1)(\\sqrt{x+3}+2)}{x+3-4}.
\\]

3. **Simplify the denominator, then cancel near one.**

\\[
\\frac{(x-1)(\\sqrt{x+3}+2)}{x-1}=\\sqrt{x+3}+2\\quad(x\\ne1).
\\]

4. **Substitute.**

\\[
\\lim_{x\\to1}(\\sqrt{x+3}+2)=\\sqrt4+2=4.
\\]

**Use this method again**

Radical difference → multiply by conjugate over itself → difference of squares → factor/cancel → substitute.

**Check**

Numerical evaluation of the exactly equivalent reduced expression avoids the original subtraction’s loss of precision:

\\[
x=0.99:\\ \\sqrt{x+3}+2\\approx3.99750,\\qquad x=1.01:\\ \\sqrt{x+3}+2\\approx4.00250.
\\]
:::

:::mcq
id: thomas-2-2-39
title: Thomas §2.2 · Exercise 39
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 39 · PDF p. 72](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(0\\)
- [x] b | \\(\\frac12\\)
- [ ] c | \\(2\\)
- [ ] d | \\(\\frac14\\)
explanation: Rationalize to (x²−4)/[(x−2)(√(x²+12)+4)]=(x+2)/(√(x²+12)+4). At x=2 this is 4/8.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 39 · PDF p. 72](assets/recommended/math/thomas-2-2-39-context-1.webp)

![Thomas §2.2 · Exercise 39 · PDF p. 72](assets/recommended/math/thomas-2-2-39-question.webp)
solution:
**Plan — we are going to…**

1. Recognize the zero-over-zero form caused by a radical difference.
2. Multiply by the matching conjugate.
3. Factor, cancel the vanishing factor, and substitute.

**The trick**

After rationalizing, factor the new difference of squares once more. One cancellation step alone is not enough.

**What you need to know**

A conjugate changes the sign between two terms. Multiplying by a conjugate uses the difference-of-squares identity:

\\[
(A-B)(A+B)=A^2-B^2.
\\]

A limit uses nearby inputs, so a common nonzero factor may be cancelled for inputs different from the approaching value. An initial zero-over-zero form is not the answer.

**Step-by-step solution**

1. **Record the original limit and test substitution.**

\\[
\\lim_{x\\to2}\\frac{\\sqrt{x^2+12}-4}{x-2}.
\\]

The numerator and denominator both approach zero.

2. **Multiply by the conjugate.**

\\[
\\frac{\\sqrt{x^2+12}-4}{x-2}\\frac{\\sqrt{x^2+12}+4}{\\sqrt{x^2+12}+4}=\\frac{x^2-4}{(x-2)(\\sqrt{x^2+12}+4)}.
\\]

3. **Factor the numerator.**

\\[
x^2-4=(x-2)(x+2).
\\]

4. **Cancel near two.**

\\[
\\frac{(x-2)(x+2)}{(x-2)(\\sqrt{x^2+12}+4)}=\\frac{x+2}{\\sqrt{x^2+12}+4}\\quad(x\\ne2).
\\]

5. **Evaluate the continuous remainder.**

\\[
\\frac{2+2}{\\sqrt{2^2+12}+4}=\\frac4{4+4}=\\frac12.
\\]

**Use this method again**

Radical difference → multiply by conjugate over itself → difference of squares → factor/cancel → substitute.

**Check**

Numerical evaluation of the exactly equivalent reduced expression avoids the original subtraction’s loss of precision:

\\[
x=1.99:\\ \\frac{x+2}{\\sqrt{x^2+12}+4}\\approx0.49906,\\qquad x=2.01:\\ \\frac{x+2}{\\sqrt{x^2+12}+4}\\approx0.50094.
\\]
:::

:::mcq
id: thomas-2-2-41
title: Thomas §2.2 · Exercise 41
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 41 · PDF p. 72](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(-\\frac32\\)
- [ ] b | \\(\\frac23\\)
- [ ] c | \\(0\\)
- [x] d | \\(\\frac32\\)
explanation: Rationalization gives (9−x²)/[(x+3)(2+√(x²−5))]=(3−x)/(2+√(x²−5)). At x=−3 this is 6/4.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 41 · PDF p. 72](assets/recommended/math/thomas-2-2-41-context-1.webp)

![Thomas §2.2 · Exercise 41 · PDF p. 72](assets/recommended/math/thomas-2-2-41-question.webp)
solution:
**Plan — we are going to…**

1. Recognize the zero-over-zero form caused by a radical difference.
2. Multiply by the matching conjugate.
3. Factor, cancel the vanishing factor, and substitute.

**The trick**

The conjugate produces nine minus x squared, which factors as (3 minus x)(3 plus x). Reversing that order carelessly loses a sign.

**What you need to know**

A conjugate changes the sign between two terms. Multiplying by a conjugate uses the difference-of-squares identity:

\\[
(A-B)(A+B)=A^2-B^2.
\\]

A limit uses nearby inputs, so a common nonzero factor may be cancelled for inputs different from the approaching value. An initial zero-over-zero form is not the answer.

**Step-by-step solution**

1. **Record the original limit and test substitution.**

\\[
\\lim_{x\\to-3}\\frac{2-\\sqrt{x^2-5}}{x+3}.
\\]

The numerator and denominator both approach zero.

2. **Multiply by the conjugate of the numerator.**

\\[
\\frac{2-\\sqrt{x^2-5}}{x+3}\\frac{2+\\sqrt{x^2-5}}{2+\\sqrt{x^2-5}}=\\frac{4-(x^2-5)}{(x+3)(2+\\sqrt{x^2-5})}.
\\]

3. **Simplify and factor the numerator.**

\\[
4-(x^2-5)=9-x^2=(3-x)(3+x).
\\]

4. **Cancel the common factor near negative three.**

\\[
\\frac{(3-x)(x+3)}{(x+3)(2+\\sqrt{x^2-5})}=\\frac{3-x}{2+\\sqrt{x^2-5}}\\quad(x\\ne-3).
\\]

5. **Evaluate the remainder.**

\\[
\\frac{3-(-3)}{2+\\sqrt{(-3)^2-5}}=\\frac6{2+2}=\\frac32.
\\]

**Use this method again**

Radical difference → multiply by conjugate over itself → difference of squares → factor/cancel → substitute.

**Check**

Numerical evaluation of the exactly equivalent reduced expression avoids the original subtraction’s loss of precision:

\\[
x=-3.01:\\ \\frac{3-x}{2+\\sqrt{x^2-5}}\\approx1.49690,\\qquad x=-2.99:\\ \\frac{3-x}{2+\\sqrt{x^2-5}}\\approx1.50315.
\\]
:::

:::mcq
id: thomas-2-2-43
title: Thomas §2.2 · Exercise 43
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 43 · PDF p. 72](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(2\\)
- [x] b | \\(-1\\)
- [ ] c | \\(0\\)
- [ ] d | \\(1\\)
explanation: Sine is continuous at 0, so 2 sin 0−1=−1.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 43 · PDF p. 72](assets/recommended/math/thomas-2-2-43-question.webp)
solution:
**Plan — we are going to…**

1. Use continuity of sine at zero.
2. Evaluate the sine first.
3. Apply the outside multiplication and subtraction.

**The trick**

There is no sine divided by its input here. **This is direct continuity**, not a special indeterminate trigonometric limit.

**What you need to know**

Sine is continuous at every real input. Constants, sums and multiples preserve limits.

\\[
\\lim_{x\\to0}\\sin x=\\sin0=0.
\\]



**Step-by-step solution**

1. **Write the original limit.**

\\[
\\lim_{x\\to0}(2\\sin x-1).
\\]

2. **Substitute into the continuous sine expression.**

\\[
\\lim_{x\\to0}(2\\sin x-1)=2\\sin0-1.
\\]

3. **Evaluate.**

\\[
2(0)-1=-1.
\\]

**Use this method again**

For a trig sum with no vanishing denominator, try continuity before using identities.

**Check**

In radian mode, nearby inputs on opposite sides give:

\\[
2\\sin(0.001)-1\\approx-0.998,\\qquad2\\sin(-0.001)-1\\approx-1.002.
\\]

Both approach negative one.
:::

:::mcq
id: thomas-2-2-45
title: Thomas §2.2 · Exercise 45
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 45 · PDF p. 72](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(0\\)
- [ ] b | \\(-1\\)
- [ ] c | \\(2\\)
- [x] d | \\(1\\)
explanation: sec x=1/cos x, and cos 0=1.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 45 · PDF p. 72](assets/recommended/math/thomas-2-2-45-question.webp)
solution:
**Plan — we are going to…**

1. Write secant as one divided by cosine.
2. Check the denominator at zero.
3. Substitute using continuity.

**The trick**

**Secant is defined at zero.** Cosine of zero is one, so there is no division by zero.

**What you need to know**

Secant is the reciprocal of cosine. The quotient law is valid when the limiting cosine is nonzero.

\\[
\\sec x=\\frac1{\\cos x}.
\\]



**Step-by-step solution**

1. **Check the denominator.**

\\[
\\cos0=1\\ne0.
\\]

2. **Use continuity and evaluate.**

\\[
\\lim_{x\\to0}\\sec x=\\frac1{\\cos0}=\\frac11=1.
\\]

**Use this method again**

Rewrite reciprocal trig functions as quotients, then check the denominator before substitution.

**Check**

Cosine is even and close to one on either side of zero, so secant is slightly above one:

\\[
\\sec(0.001)=\\sec(-0.001)\\approx1.0000005.
\\]

This agrees with a limit of one.
:::

:::mcq
id: thomas-2-2-47
title: Thomas §2.2 · Exercise 47
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 47 · PDF p. 72](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(0\\)
- [x] b | \\(\\frac13\\)
- [ ] c | \\(1\\)
- [ ] d | \\(3\\)
explanation: The numerator tends to 1 and denominator to 3.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 47 · PDF p. 72](assets/recommended/math/thomas-2-2-47-question.webp)
solution:
**Plan — we are going to…**

1. Take the limits of the numerator’s three terms.
2. Check the denominator’s nonzero limit.
3. Divide the two resulting values.

**The trick**

**The numerator contains a constant one.** Sine and the input tend to zero, but the whole numerator tends to one.

**What you need to know**

Sine and cosine are continuous. Apply sum and quotient laws only after checking that the limiting denominator is nonzero.

\\[
\\sin0=0,\\qquad\\cos0=1.
\\]



**Step-by-step solution**

1. **Write the full quotient.**

\\[
\\lim_{x\\to0}\\frac{1+x+\\sin x}{3\\cos x}.
\\]

2. **Evaluate the numerator.**

\\[
1+0+\\sin0=1+0+0=1.
\\]

3. **Evaluate and check the denominator.**

\\[
3\\cos0=3\\ne0.
\\]

4. **Use the quotient law.**

\\[
\\lim_{x\\to0}\\frac{1+x+\\sin x}{3\\cos x}=\\frac13.
\\]

**Use this method again**

For trig quotients, evaluate each complete numerator/denominator, then test the quotient law.

**Check**

At small opposite inputs, the quotient is approximately 0.334000 and 0.332667, bracketing one-third:

\\[
\\frac{1+0.001+\\sin(0.001)}{3\\cos(0.001)}\\approx0.334000.
\\]



\\[
\\frac{1-0.001+\\sin(-0.001)}{3\\cos(-0.001)}\\approx0.332667.
\\]
:::

:::mcq
id: thomas-2-2-49
title: Thomas §2.2 · Exercise 49
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 49 · PDF p. 72](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(0\\)
- [ ] b | \\(-1\\)
- [ ] c | \\(4\\)
- [x] d | \\(\\sqrt{4-\\pi}\\)
explanation: The original limit is x→−π. Direct substitution gives √(4−π) cos0=√(4−π), since 4−π>0.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 49 · PDF p. 72](assets/recommended/math/thomas-2-2-49-question.webp)
solution:
**Plan — we are going to…**

1. Read the approaching input carefully from the original exercise.
2. Check the square-root domain near negative π.
3. Evaluate both continuous factors.

**The trick**

**Negative π lies strictly inside the square-root domain.** Both the root and cosine are continuous there, so evaluate the product directly.

**What you need to know**

A product of continuous functions is continuous wherever each factor is defined. A square root is continuous at a positive radicand.

\\[
4-\\pi>0.
\\]



**Step-by-step solution**

1. **Record the original limit exactly.**

\\[
\\lim_{x\\to-\\pi}\\sqrt{x+4}\\cos(x+\\pi).
\\]

2. **Check the square-root domain.** The domain is all inputs at least negative four. Negative π is strictly inside it:

\\[
-\\pi>-4,\\qquad(-\\pi)+4=4-\\pi>0.
\\]

3. **Evaluate each factor.**

\\[
\\sqrt{x+4}\\longrightarrow\\sqrt{4-\\pi}.
\\]



\\[
\\cos(x+\\pi)\\longrightarrow\\cos(-\\pi+\\pi)=\\cos0=1.
\\]

4. **Multiply the limiting values.**

\\[
\\lim_{x\\to-\\pi}\\sqrt{x+4}\\cos(x+\\pi)=\\sqrt{4-\\pi}\\cdot1=\\sqrt{4-\\pi}.
\\]

**Use this method again**

Copy the approach value exactly → verify the radical domain → use continuity on each factor.

**Check**

A numerical evaluation gives a positive answer, as expected from a positive root and cosine near one:

\\[
\\sqrt{4-\\pi}\\approx0.926503.
\\]

At the target input the product itself is defined and equals this value. Cosine tends to one, so the product tends to the positive square-root factor.
:::

:::mcq
id: thomas-2-2-53
title: Thomas §2.2 · Exercise 53
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 53 · PDF p. 72](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | (a) 3; (b) 6; (c) −1; (d) 5/7
- [ ] b | (a) −10; (b) −20; (c) 11; (d) −5/2
- [ ] c | (a) 10; (b) 20; (c) 1; (d) 7/5
- [x] d | (a) −10; (b) −20; (c) −1; (d) 5/7
explanation: Apply product, scalar, sum and quotient laws to Lf=5 and Lg=−2: 5(−2)=−10; 2(5)(−2)=−20; 5+3(−2)=−1; 5/[5−(−2)]=5/7.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 53 · PDF p. 72](assets/recommended/math/thomas-2-2-53-question.webp)
solution:
**Plan — we are going to…**

1. Record the given two function limits.
2. Apply the matching product, scalar, sum or quotient law to each subpart.
3. Check the denominator in the quotient part.

**The trick**

**Use the given limits, not assumed function values.** In the quotient, subtracting the negative limit makes the denominator seven.

**What you need to know**

Finite limits may be added, multiplied and multiplied by constants. They may be divided when the denominator’s limit is nonzero.

\\[
\\lim_{x\\to c}f(x)=5,\\qquad\\lim_{x\\to c}g(x)=-2.
\\]



**Step-by-step solution**

1. **Part (a): product law.**

\\[
\\lim_{x\\to c}f(x)g(x)=5(-2)=-10.
\\]

2. **Part (b): constant times product.**

\\[
\\lim_{x\\to c}2f(x)g(x)=2(5)(-2)=-20.
\\]

3. **Part (c): sum and constant-multiple laws.**

\\[
\\lim_{x\\to c}\\bigl(f(x)+3g(x)\\bigr)=5+3(-2)=5-6=-1.
\\]

4. **Part (d): check the denominator before dividing.**

\\[
\\lim_{x\\to c}(f(x)-g(x))=5-(-2)=7\\ne0.
\\]



\\[
\\lim_{x\\to c}\\frac{f(x)}{f(x)-g(x)}=\\frac5{5-(-2)}=\\frac57.
\\]

**Use this method again**

Match each operation to its limit law, keeping parentheses around negative limiting values.

**Check**

The second result must be twice the first, which it is. For the quotient, multiplying its value by the limiting denominator recovers the limiting numerator:

\\[
2(-10)=-20,\\qquad\\frac57(7)=5.
\\]
:::

:::mcq
id: thomas-2-2-55
title: Thomas §2.2 · Exercise 55
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 55 · PDF p. 72](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | (a) −4; (b) −10; (c) −12; (d) −7/3
- [x] b | (a) 4; (b) −21; (c) −12; (d) −7/3
- [ ] c | (a) 10; (b) 21; (c) 12; (d) 7/3
- [ ] d | (a) 4; (b) −21; (c) 28; (d) −3/7
explanation: Using Lf=7 and Lg=−3 gives 7−3=4, 7(−3)=−21, 4(−3)=−12 and 7/(−3)=−7/3.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 55 · PDF p. 72](assets/recommended/math/thomas-2-2-55-question.webp)
solution:
**Plan — we are going to…**

1. Substitute the given function limits into each operation.
2. Keep the negative sign of the second limit.
3. Check the quotient’s denominator and list all four results.

**The trick**

**Negative three stays negative in the product, constant multiple and quotient.** Do not replace it by its magnitude.

**What you need to know**

Use sum, product, constant-multiple and quotient laws for finite limits. The quotient requires a nonzero denominator limit.

\\[
\\lim_{x\\to b}f(x)=7,\\qquad\\lim_{x\\to b}g(x)=-3.
\\]



**Step-by-step solution**

1. **Part (a): add.**

\\[
\\lim_{x\\to b}(f(x)+g(x))=7+(-3)=4.
\\]

2. **Part (b): multiply.**

\\[
\\lim_{x\\to b}f(x)g(x)=7(-3)=-21.
\\]

3. **Part (c): multiply the second limit by four.**

\\[
\\lim_{x\\to b}4g(x)=4(-3)=-12.
\\]

4. **Part (d): check and divide.** The denominator limit is negative three, which is nonzero:

\\[
\\lim_{x\\to b}\\frac{f(x)}{g(x)}=\\frac7{-3}=-\\frac73.
\\]

**Use this method again**

Copy signed limits first → identify each requested operation → check any quotient denominator.

**Check**

The sum result minus the first limit recovers the second. The quotient result times the denominator limit recovers the first:

\\[
4-7=-3,\\qquad\\left(-\\frac73\\right)(-3)=7.
\\]
:::

:::mcq
id: thomas-2-2-57
title: Thomas §2.2 · Exercise 57
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 57 · PDF p. 73](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(1\\)
- [ ] b | \\(0\\)
- [ ] c | \\(4\\)
- [x] d | \\(2\\)
explanation: [(x+h)²−x²]/h=2x+h, so at x=1 the limit is 2.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 57 · PDF p. 73](assets/recommended/math/thomas-2-2-57-context-1.webp)

![Thomas §2.2 · Exercise 57 · PDF p. 73](assets/recommended/math/thomas-2-2-57-question.webp)
solution:
**Plan — we are going to…**

1. Insert the squared function into the difference quotient.
2. Expand the shifted square and cancel common terms.
3. Cancel h, then evaluate at the given input.

**The trick**

**Expand the entire shifted square.** It contains the cross term twice the product; omitting it loses the answer.

**What you need to know**

The difference quotient compares the change in output to the small change h in input. The numerator uses the entire value of the function at the shifted input.

\\[
\\lim_{h\\to0}\\frac{f(x+h)-f(x)}h.
\\]

Simplify with nonzero h before letting h approach zero.

**Step-by-step solution**

1. **Insert the given function and input.**

\\[
f(x)=x^2,\\qquad x=1.
\\]



\\[
\\frac{f(x+h)-f(x)}h=\\frac{(x+h)^2-x^2}h.
\\]

2. **Expand before cancelling.**

\\[
(x+h)^2=x^2+2xh+h^2.
\\]



\\[
\\frac{x^2+2xh+h^2-x^2}h=\\frac{2xh+h^2}h.
\\]

3. **Factor h and cancel at nonzero h.**

\\[
\\frac{h(2x+h)}h=2x+h\\quad(h\\ne0).
\\]

4. **Take the limit, then insert the given input.**

\\[
\\lim_{h\\to0}(2x+h)=2x.
\\]



\\[
2(1)=2.
\\]

**Use this method again**

Shift the whole formula → expand → subtract the original output → factor/cancel h → take the limit.

**Check**

At the requested input the exact quotient simplifies to two plus h. Taking equal small positive and negative h gives:

\\[
h=0.001:\\ 2+h=2.001,\\qquad h=-0.001:\\ 2+h=1.999.
\\]

Both approach two.
:::

:::mcq
id: thomas-2-2-59
title: Thomas §2.2 · Exercise 59
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 59 · PDF p. 73](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(6\\)
- [x] b | \\(3\\)
- [ ] c | \\(2\\)
- [ ] d | \\(-4\\)
explanation: [3(x+h)−4−(3x−4)]/h=3 for h≠0. The limit is 3 at x=2.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 59 · PDF p. 73](assets/recommended/math/thomas-2-2-59-context-1.webp)

![Thomas §2.2 · Exercise 59 · PDF p. 73](assets/recommended/math/thomas-2-2-59-question.webp)
solution:
**Plan — we are going to…**

1. Substitute the shifted input into the linear function.
2. Subtract the whole original expression.
3. Cancel h and take its limit.

**The trick**

**Subtract both terms of the original function.** The outside minus sign changes negative four into positive four.

**What you need to know**

The difference quotient compares the change in output to the small change h in input. The numerator uses the entire value of the function at the shifted input.

\\[
\\lim_{h\\to0}\\frac{f(x+h)-f(x)}h.
\\]

Simplify with nonzero h before letting h approach zero.

**Step-by-step solution**

1. **Write the shifted function and the original function.**

\\[
f(x+h)=3(x+h)-4,\\qquad f(x)=3x-4.
\\]

2. **Form and expand the quotient.**

\\[
\\frac{f(x+h)-f(x)}h=\\frac{3x+3h-4-(3x-4)}h.
\\]



\\[
=\\frac{3x+3h-4-3x+4}h=\\frac{3h}h.
\\]

3. **Cancel at nonzero h.**

\\[
\\frac{3h}h=3\\quad(h\\ne0).
\\]

4. **Take the limit at the requested input two.** The simplified quotient does not depend on x:

\\[
\\lim_{h\\to0}\\frac{f(2+h)-f(2)}h=3.
\\]

**Use this method again**

For a linear function, expand the shifted input and distribute the subtraction; the constant terms cancel.

**Check**

Evaluate directly at the requested input:

\\[
f(2)=2,\\qquad f(2+h)=2+3h.
\\]



\\[
\\frac{(2+3h)-2}h=3.
\\]

This is also the slope of the original line.
:::

:::mcq
id: thomas-2-2-61
title: Thomas §2.2 · Exercise 61
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 61 · PDF p. 73](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(\\sqrt7\\)
- [ ] b | \\(\\frac1{\\sqrt7}\\)
- [ ] c | \\(2\\sqrt7\\)
- [x] d | \\(\\frac1{2\\sqrt7}\\)
explanation: Rationalizing [√(x+h)−√x]/h gives 1/[√(x+h)+√x]. At x=7 the limit is 1/(2√7).
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 61 · PDF p. 73](assets/recommended/math/thomas-2-2-61-context-1.webp)

![Thomas §2.2 · Exercise 61 · PDF p. 73](assets/recommended/math/thomas-2-2-61-question.webp)
solution:
**Plan — we are going to…**

1. Insert the square-root function into the difference quotient.
2. Multiply by the numerator’s conjugate.
3. Cancel h and evaluate at the given positive input.

**The trick**

**The conjugate removes the difference of square roots.** Its difference of squares is exactly h.

**What you need to know**

The difference quotient compares the change in output to the small change h in input. The numerator uses the entire value of the function at the shifted input.

\\[
\\lim_{h\\to0}\\frac{f(x+h)-f(x)}h.
\\]

Simplify with nonzero h before letting h approach zero.

\\[
(\\sqrt{x+h}-\\sqrt x)(\\sqrt{x+h}+\\sqrt x)=h.
\\]



**Step-by-step solution**

1. **Write the full difference quotient.**

\\[
f(x)=\\sqrt x,\\qquad x=7.
\\]



\\[
\\frac{f(x+h)-f(x)}h=\\frac{\\sqrt{x+h}-\\sqrt x}h.
\\]

2. **Multiply numerator and denominator by the conjugate.**

\\[
\\frac{\\sqrt{x+h}-\\sqrt x}h\\frac{\\sqrt{x+h}+\\sqrt x}{\\sqrt{x+h}+\\sqrt x}=\\frac{(x+h)-x}{h(\\sqrt{x+h}+\\sqrt x)}.
\\]

3. **Simplify and cancel nonzero h.**

\\[
\\frac h{h(\\sqrt{x+h}+\\sqrt x)}=\\frac1{\\sqrt{x+h}+\\sqrt x}.
\\]

4. **Take the limit, then evaluate at seven.**

\\[
\\lim_{h\\to0}\\frac1{\\sqrt{x+h}+\\sqrt x}=\\frac1{2\\sqrt x}.
\\]



\\[
\\frac1{2\\sqrt7}.
\\]

**Use this method again**

Square-root difference quotient → conjugate → cancel the input change → substitute.

**Check**

At the requested positive input, the denominator tends to two positive copies of the same root, so the result is positive and finite:

\\[
\\frac1{2\\sqrt7}\\approx0.188982.
\\]

Using h equal to 0.001 in the reduced expression gives approximately 0.188976, approaching this result.
:::

:::mcq
id: thomas-2-2-63
title: Thomas §2.2 · Exercise 63
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 63 · PDF p. 73](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(-\\sqrt5\\)
- [x] b | \\(\\sqrt5\\)
- [ ] c | \\(5\\)
- [ ] d | \\(0\\)
explanation: Both bounding functions √(5−2x²) and √(5−x²) tend to √5. The squeeze theorem gives the same limit for f.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 63 · PDF p. 73](assets/recommended/math/thomas-2-2-63-question.webp)
solution:
**Plan — we are going to…**

1. Read the two square-root bounds.
2. Evaluate both bounds at zero.
3. Use their common limit to determine the unknown function’s limit.

**The trick**

**You do not need a formula for the function between the bounds.** Both surrounding functions approach the same height.

**What you need to know**

The squeeze theorem says that if a function stays between two bounds near the input and both bounds approach the same number, the function approaches that number too.

\\[
\\ell(x)\\le f(x)\\le u(x),\\qquad\\ell(x)\\to L,\\quad u(x)\\to L\\quad\\Longrightarrow\\quad f(x)\\to L.
\\]



**Step-by-step solution**

1. **Record the given sandwich near zero.**

\\[
\\sqrt{5-2x^2}\\le f(x)\\le\\sqrt{5-x^2},\\qquad -1\\le x\\le1.
\\]

2. **Evaluate the lower bound’s limit.**

\\[
\\lim_{x\\to0}\\sqrt{5-2x^2}=\\sqrt{5-0}=\\sqrt5.
\\]

3. **Evaluate the upper bound’s limit.**

\\[
\\lim_{x\\to0}\\sqrt{5-x^2}=\\sqrt{5-0}=\\sqrt5.
\\]

4. **Apply the squeeze theorem.** The function cannot approach any other value while staying between these bounds:

\\[
\\lim_{x\\to0}f(x)=\\sqrt5.
\\]

**Use this method again**

Identify lower/upper bounds → calculate their limits → use squeezing only when those limits agree.

**Check**

The gap between the bounds becomes zero. Rationalizing that gap makes the shrinking explicit:

\\[
\\sqrt{5-x^2}-\\sqrt{5-2x^2}=\\frac{x^2}{\\sqrt{5-x^2}+\\sqrt{5-2x^2}}\\longrightarrow0.
\\]

The common height is positive and equals the square root of five.
:::

:::mcq
id: thomas-2-2-65a
title: Thomas §2.2 · Exercise 65a
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 65a · PDF p. 73](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(0\\)
- [ ] b | \\(\\frac12\\)
- [ ] c | \\(2\\)
- [x] d | \\(1\\)
explanation: The lower bound 1−x²/6 tends to 1 and the upper bound is 1. The squeezed expression tends to 1. Only part (a) is assigned.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 65a · PDF p. 73](assets/recommended/math/thomas-2-2-65a-question.webp)
solution:
**Plan — we are going to…**

1. Use only the assigned part (a).
2. Evaluate the two bounds near zero.
3. Apply the squeeze theorem to the entire quotient.

**The trick**

**The numerator and denominator both vanish, but the supplied bounds already solve the problem.** Do not guess from zero divided by zero.

**What you need to know**

The squeeze theorem says that if a function stays between two bounds near the input and both bounds approach the same number, the function approaches that number too.

\\[
\\ell(x)\\le f(x)\\le u(x),\\qquad\\ell(x)\\to L,\\quad u(x)\\to L\\quad\\Longrightarrow\\quad f(x)\\to L.
\\]



**Step-by-step solution**

1. **Record the supplied inequalities.** They hold at nearby nonzero inputs:

\\[
1-\\frac{x^2}{6}<\\frac{x\\sin x}{2-2\\cos x}<1.
\\]

2. **Evaluate the lower and upper limits.**

\\[
\\lim_{x\\to0}\\left(1-\\frac{x^2}{6}\\right)=1,\\qquad\\lim_{x\\to0}1=1.
\\]

3. **Squeeze the quotient.** Both surrounding values approach one:

\\[
\\lim_{x\\to0}\\frac{x\\sin x}{2-2\\cos x}=1.
\\]

This completes the assigned part (a); the plotting part is outside this assignment.

**Use this method again**

When matching bounds are supplied, use them directly instead of adding later derivative rules.

**Check**

The entire gap between the supplied bounds shrinks to zero:

\\[
1-\\left(1-\\frac{x^2}{6}\\right)=\\frac{x^2}{6}\\longrightarrow0.
\\]

Thus the trapped quotient must approach one from within that shrinking gap.
:::

:::mcq
id: thomas-2-2-66a
title: Thomas §2.2 · Exercise 66a
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 66a · PDF p. 73](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(1\\)
- [ ] b | \\(2\\)
- [x] c | \\(\\frac12\\)
- [ ] d | \\(0\\)
explanation: The lower bound 1/2−x²/24 and the upper bound 1/2 both tend to 1/2. Apply the squeeze theorem. Only part (a) is assigned.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 66a · PDF p. 73](assets/recommended/math/thomas-2-2-66a-question.webp)
solution:
**Plan — we are going to…**

1. Use the supplied bounds for assigned part (a).
2. Take the limits of the polynomial lower bound and constant upper bound.
3. Identify their common value.

**The trick**

**Use the bounds for the whole quotient.** Substituting separately into its numerator and denominator gives zero divided by zero, which decides nothing.

**What you need to know**

The squeeze theorem says that if a function stays between two bounds near the input and both bounds approach the same number, the function approaches that number too.

\\[
\\ell(x)\\le f(x)\\le u(x),\\qquad\\ell(x)\\to L,\\quad u(x)\\to L\\quad\\Longrightarrow\\quad f(x)\\to L.
\\]



**Step-by-step solution**

1. **Record the given inequalities near nonzero inputs approaching zero.**

\\[
\\frac12-\\frac{x^2}{24}<\\frac{1-\\cos x}{x^2}<\\frac12.
\\]

2. **Evaluate both bound limits.**

\\[
\\lim_{x\\to0}\\left(\\frac12-\\frac{x^2}{24}\\right)=\\frac12.
\\]



\\[
\\lim_{x\\to0}\\frac12=\\frac12.
\\]

3. **Apply the squeeze theorem.**

\\[
\\lim_{x\\to0}\\frac{1-\\cos x}{x^2}=\\frac12.
\\]

Only part (a) is assigned here.

**Use this method again**

Compare the two supplied bounds first; equal limiting values determine the trapped quotient.

**Check**

The gap to the upper bound tends to zero:

\\[
\\frac12-\\left(\\frac12-\\frac{x^2}{24}\\right)=\\frac{x^2}{24}\\longrightarrow0.
\\]

Both positive and negative inputs give the same shrinking squared gap.
:::

:::mcq
id: thomas-2-2-75
title: Thomas §2.2 · Exercise 75
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 75 · PDF p. 73](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | Only c=−1 and 1, with limits −1 and 1.
- [x] b | c=−1, 0, 1; respective limits 1, 0, 1.
- [ ] c | Only c=0, with limit 0.
- [ ] d | Every real c, with limit c².
explanation: The bounds x² and x⁴ coincide exactly when x²=x⁴, at −1,0,1. Both bounding expressions tend to c² there, so squeezing guarantees the limits 1,0,1. Where the bounds differ, the inequalities alone do not force a limit.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 75 · PDF p. 73](assets/recommended/math/thomas-2-2-75-question.webp)
solution:
**Plan — we are going to…**

1. Find where the two bounding polynomials have equal values.
2. Solve the resulting polynomial equation.
3. Evaluate the common bound at each candidate.

**The trick**

**The bounds swap their lower/upper roles outside the interval, but squeezing only forces a limit where they meet.** Unequal bound limits leave room for different behavior.

**What you need to know**

The squeeze theorem says that if a function stays between two bounds near the input and both bounds approach the same number, the function approaches that number too.

\\[
\\ell(x)\\le f(x)\\le u(x),\\qquad\\ell(x)\\to L,\\quad u(x)\\to L\\quad\\Longrightarrow\\quad f(x)\\to L.
\\]



**Step-by-step solution**

1. **Write the two regions and their bounds.**

\\[
x^4\\le f(x)\\le x^2\\quad(-1\\le x\\le1).
\\]



\\[
x^2\\le f(x)\\le x^4\\quad(x<-1\\ \\text{or}\\ x>1).
\\]

2. **Require the limiting bounds to agree at the approached input c.** Both polynomials are continuous, so:

\\[
c^2=c^4.
\\]

3. **Move everything to one side and factor.**

\\[
c^4-c^2=0\\quad\\Longrightarrow\\quad c^2(c^2-1)=0.
\\]



\\[
c^2(c-1)(c+1)=0.
\\]



\\[
c=-1,\\quad0,\\quad1.
\\]

4. **Evaluate the common height at each point.**

\\[
\\lim_{x\\to-1}f(x)=1,\\qquad\\lim_{x\\to0}f(x)=0,\\qquad\\lim_{x\\to1}f(x)=1.
\\]

At the two boundary points the bounds change order, but on both sides each tends to one. Elsewhere these inequalities alone do not force a limit.

**Use this method again**

For unknown functions between continuous bounds, solve where the bounds meet before applying squeezing.

**Check**

The absolute gap between the two possible bounds is:

\\[
|x^4-x^2|.
\\]

At the three listed inputs this gap tends to zero. At any other input its limiting value is positive, so the same argument cannot pin down a unique limit.
:::

:::mcq
id: thomas-2-2-77
title: Thomas §2.2 · Exercise 77
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 77 · PDF p. 74](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the limit in the original exercise?
- [ ] a | \\(5\\)
- [ ] b | \\(6\\)
- [ ] c | \\(9\\)
- [x] d | \\(7\\)
explanation: Write f(x)=5+(x−2)[(f(x)−5)/(x−2)]. As x→4 the second term tends to 2·1, so the limit is 7.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 77 · PDF p. 74](assets/recommended/math/thomas-2-2-77-question.webp)
solution:
**Plan — we are going to…**

1. Name the given quotient.
2. Rearrange the quotient identity to isolate the function.
3. Apply product and sum laws at input four.

**The trick**

**Here the input approaches four, so x minus two approaches two, not zero.** This is why the answer differs from the similar-looking exercise approaching two.

**What you need to know**

If a quotient has a known finite limit, an exact algebraic identity can recover the numerator’s limit. Use nearby inputs where the denominator is nonzero.

**Step-by-step solution**

1. **Name the known quotient and its limit.**

\\[
Q(x)=\\frac{f(x)-5}{x-2},\\qquad\\lim_{x\\to4}Q(x)=1.
\\]

2. **Multiply the identity by the denominator.**

\\[
f(x)-5=(x-2)Q(x).
\\]

3. **Add five to isolate the original function.**

\\[
f(x)=5+(x-2)Q(x).
\\]

4. **Take the limit at four.**

\\[
\\lim_{x\\to4}f(x)=5+(4-2)(1)=5+2=7.
\\]

**Use this method again**

Known quotient → isolate the requested function by an identity → evaluate every factor at the exact approach value.

**Check**

Put the recovered limit back into the quotient law. Its denominator tends to two, so:

\\[
\\frac{7-5}{4-2}=\\frac22=1.
\\]

This recovers the given quotient limit.
:::

:::mcq
id: thomas-2-2-79
title: Thomas §2.2 · Exercise 79
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 79 · PDF p. 74](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | (a) 6; (b) 4
- [x] b | (a) 5; (b) 5
- [ ] c | (a) 8; (b) 9
- [ ] d | (a) 5; (b) 13
explanation: Both parts approach x→2. Write f(x)=5+(x−2)Q(x). In (a), Q→3, so f→5+0·3=5. In (b), Q→4, so f→5+0·4=5. The original printed answer key confirms 5 for both parts.
hint: Work through every subpart in the original question.
example:
![Thomas §2.2 · Exercise 79 · PDF p. 74](assets/recommended/math/thomas-2-2-79-question.webp)
solution:
**Plan — we are going to…**

1. Name the quotient separately in each part.
2. Rearrange to express the function using that quotient.
3. Use that x minus two tends to zero in both parts.

**The trick**

**Both parts approach two.** The quotient limits are three and four, but multiplying either finite number by the vanishing factor x minus two gives zero.

**What you need to know**

A product of a function tending to zero and a function with a finite limit tends to zero. The exact value of the function at the approached input is not needed.

**Step-by-step solution**

1. **Rearrange the quotient identity at nearby inputs.**

\\[
Q(x)=\\frac{f(x)-5}{x-2}\\quad(x\\ne2).
\\]



\\[
f(x)-5=(x-2)Q(x),\\qquad f(x)=5+(x-2)Q(x).
\\]

2. **Part (a): use the quotient limit three.**

\\[
\\lim_{x\\to2}Q(x)=3,\\qquad\\lim_{x\\to2}(x-2)=0.
\\]



\\[
\\lim_{x\\to2}f(x)=5+0(3)=5.
\\]

3. **Part (b): use the quotient limit four.**

\\[
\\lim_{x\\to2}Q(x)=4.
\\]



\\[
\\lim_{x\\to2}f(x)=5+0(4)=5.
\\]

The answer is **five in both parts**.

**Use this method again**

Recover the function from the given quotient and keep the approach value attached to every factor.

**Check**

Concrete examples verify why different slopes can have the same limiting height:

\\[
f_a(x)=5+3(x-2)\\quad\\Longrightarrow\\quad\\frac{f_a(x)-5}{x-2}=3.
\\]



\\[
f_b(x)=5+4(x-2)\\quad\\Longrightarrow\\quad\\frac{f_b(x)-5}{x-2}=4.
\\]

Both examples approach five as x approaches two, confirming both answers without assuming any value at the missing point.
:::

:::mcq
id: past-calculus-2006-q3-1
title: Past paper · IUG Calculus A 2006 · First midterm · Q3(a) · 2006
kicker: PAST PAPER · The Islamic University of Gaza Calculus A first midterm (5 Nov 2006)
reference: [The Islamic University of Gaza Calculus A first midterm (5 Nov 2006), p. 3](https://www.scribd.com/document/963105786/fm-5-11-2006)
question: Evaluate lim(x→4) (x²−16)/(x−2).
- [x] a | 0
- [ ] b | 4
- [ ] c | 8
- [ ] d | The limit does not exist
explanation: Correct answer: 0
hint: Review the original paper and the lesson concepts before retrying.
solution:
**Plan — we are going to…**

1. Check the denominator at input four.
2. Use direct substitution because it is nonzero.
3. Distinguish zero divided by a nonzero value from an indeterminate form.

**The trick**

**The denominator is x minus two, not x minus four.** Therefore its limit is two and no cancellation is required.

**What you need to know**

Polynomials are continuous. A quotient of continuous functions is continuous wherever its denominator is nonzero. At such an input, substitute directly.

**Step-by-step solution**

1. **Record the original quotient and check its denominator.**

\\[
\\lim_{x\\to4}\\frac{x^2-16}{x-2},\\qquad4-2=2\\ne0.
\\]

2. **Evaluate the numerator.**

\\[
4^2-16=16-16=0.
\\]

3. **Divide the limiting values.**

\\[
\\lim_{x\\to4}\\frac{x^2-16}{x-2}=\\frac02=0.
\\]

A zero numerator divided by nonzero two equals zero; this is not an indeterminate form.

**Use this method again**

Read the denominator exactly → test it at the approaching input → simplify only if substitution fails.

**Check**

Factoring the numerator provides another check:

\\[
\\frac{x^2-16}{x-2}=\\frac{(x-4)(x+4)}{x-2}.
\\]

As x approaches four, the first factor tends to zero while the remaining quotient tends to four, so the product tends to zero.
:::`};export{e as default};