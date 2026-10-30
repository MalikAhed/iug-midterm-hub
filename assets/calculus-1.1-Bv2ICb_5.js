var e={id:`calculus-1.1`,title:`Thomas Calculus §1.1 Practice`,summary:`Thomas' Calculus §1.1 · original textbook exercises and verified practice.`,subjectId:`mathematics`,reward:0,status:`published`,authoringSource:`:::mcq
id: thomas-1-1-1
title: Thomas §1.1 · Exercise 1
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 1 · PDF p. 28](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What are the domain and range of the original function?
- [ ] a | Domain \\([0,\\infty)\\); range \\([1,\\infty)\\)
- [ ] b | Domain \\(\\mathbb R\\); range \\(\\mathbb R\\)
- [ ] c | Domain \\(\\mathbb R\\); range \\((1,\\infty)\\)
- [x] d | Domain \\(\\mathbb R\\); range \\([1,\\infty)\\)
explanation: For f(x)=1+x², every real x is allowed. Since x²≥0, the minimum output is 1 at x=0; all larger values occur.
hint: Work through every subpart in the original question.
example:
![Thomas §1.1 · Exercise 1 · PDF p. 28](assets/recommended/math/thomas-1-1-1-context-1.webp)

![Thomas §1.1 · Exercise 1 · PDF p. 28](assets/recommended/math/thomas-1-1-1-question.webp)
solution:
**Plan — we are going to…**

1. Find which inputs the polynomial accepts.

2. Use the smallest possible square to determine every output.

**The trick**

A square is never negative. The added 1 raises the minimum output to 1; it does not restrict the input.

**What you need to know**

Domain means allowed inputs; range means attained outputs. A polynomial has no real-input restrictions. The key inequality is:

\\[
x^2\\ge0.
\\]



**Step-by-step solution**

1. **Read the function.**

\\[
f(x)=1+x^2.
\\]

There is no denominator or even root, so every real input is allowed.

\\[
D=\\mathbb R.
\\]

2. **Find the lower bound.** Add 1 to the square inequality:

\\[
1+x^2\\ge1.
\\]

Equality occurs at zero.

\\[
f(0)=1.
\\]

3. **Show all larger outputs occur.** Set the output equal to an arbitrary number at least 1, then solve:

\\[
y=1+x^2\\quad\\Longrightarrow\\quad x=\\pm\\sqrt{y-1}.
\\]

These are real inputs for every output at least 1. Thus:

\\[
R=[1,\\infty).
\\]

**Use this method again**

For a shifted square, allow all real inputs, find the minimum, then solve for an input to verify the full range.

**Check**

For example, output 5 is obtained at both inputs 2 and −2:

\\[
f(2)=f(-2)=1+4=5.
\\]

Output 0 is impossible because it would require a negative square.
:::

:::mcq
id: thomas-1-1-3
title: Thomas §1.1 · Exercise 3
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 3 · PDF p. 28](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What are the domain and range of the original square-root function?
- [ ] a | Domain \\(\\mathbb R\\); range \\([0,\\infty)\\)
- [x] b | Domain \\([-2,\\infty)\\); range \\([0,\\infty)\\)
- [ ] c | Domain \\([2,\\infty)\\); range \\([0,\\infty)\\)
- [ ] d | Domain \\([-2,\\infty)\\); range \\(\\mathbb R\\)
explanation: The radicand 5x+10 must be nonnegative, so x≥−2. Its square root equals zero at −2 and increases without bound.
hint: Work through every subpart in the original question.
example:
![Thomas §1.1 · Exercise 3 · PDF p. 28](assets/recommended/math/thomas-1-1-3-context-1.webp)

![Thomas §1.1 · Exercise 3 · PDF p. 28](assets/recommended/math/thomas-1-1-3-question.webp)
solution:
**Plan — we are going to…**

1. Keep the square-root input nonnegative.

2. Find its minimum and show all nonnegative outputs are possible.

**The trick**

The root may equal zero. Include the input −2 and the output zero with square brackets.

**What you need to know**

An even root is real exactly when its radicand is nonnegative. The principal square root has nonnegative outputs.

**Step-by-step solution**

1. **Apply the root restriction.**

\\[
f(x)=\\sqrt{5x+10},\\qquad 5x+10\\ge0.
\\]

2. **Solve the inequality.** Subtract 10, then divide by positive 5, preserving the inequality direction:

\\[
5x\\ge-10\\quad\\Longrightarrow\\quad x\\ge-2.
\\]



\\[
D=[-2,\\infty).
\\]

3. **Determine the range.** At the left endpoint the root is zero. Larger inputs give arbitrarily large radicands:

\\[
f(-2)=0.
\\]

More explicitly, choose any nonnegative output and solve:

\\[
y=\\sqrt{5x+10}\\quad\\Longrightarrow\\quad x=\\frac{y^2-10}{5}\\ge-2.
\\]



\\[
R=[0,\\infty).
\\]

**Use this method again**

Solve the radicand inequality first, then use the nonnegative root and its endpoint to determine the range.

**Check**

An endpoint check gives zero, while an input just below −2 fails:

\\[
5(-2)+10=0,\\qquad 5(-3)+10=-5<0.
\\]

This confirms the endpoint is included and inputs below it are excluded.
:::

:::mcq
id: thomas-1-1-5
title: Thomas §1.1 · Exercise 5
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 5 · PDF p. 28](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What are the domain and range of the original rational function?
- [ ] a | Domain \\(\\mathbb R\\setminus\\{0\\}\\); range \\(\\mathbb R\\setminus\\{3\\}\\)
- [ ] b | Domain \\(\\mathbb R\\); range \\((0,\\infty)\\)
- [ ] c | Domain \\(({-\\infty},3)\\); range \\((0,\\infty)\\)
- [x] d | Domain \\(\\mathbb R\\setminus\\{3\\}\\); range \\(\\mathbb R\\setminus\\{0\\}\\)
explanation: For f(t)=4/(3−t), the denominator excludes t=3. The nonzero numerator means the output cannot be zero. Every nonzero y occurs at t=3−4/y.
hint: Work through every subpart in the original question.
example:
![Thomas §1.1 · Exercise 5 · PDF p. 28](assets/recommended/math/thomas-1-1-5-context-1.webp)

![Thomas §1.1 · Exercise 5 · PDF p. 28](assets/recommended/math/thomas-1-1-5-question.webp)
solution:
**Plan — we are going to…**

1. Exclude the zero denominator.

2. Solve the output equation to identify any missing output.

**The trick**

A nonzero numerator divided by a finite nonzero denominator cannot give zero. Excluding input 3 and excluding output zero are different restrictions.

**What you need to know**

For a rational function, a denominator cannot be zero. To prove a proposed range, solve the output equation for an allowed input.

**Step-by-step solution**

1. **Find the domain.**

\\[
f(t)=\\frac4{3-t}.
\\]

The forbidden denominator equation is:

\\[
3-t=0\\quad\\Longrightarrow\\quad t=3.
\\]



\\[
D=\\mathbb R\\setminus\\{3\\}.
\\]

2. **Test the missing output.** If the output were zero, multiplication by the allowed denominator would give:

\\[
0(3-t)=4\\quad\\Longrightarrow\\quad 0=4.
\\]

This is impossible.

3. **Obtain every other output.** For a nonzero output, rearrange:

\\[
y=\\frac4{3-t}\\quad\\Longrightarrow\\quad y(3-t)=4.
\\]



\\[
3-t=\\frac4y\\quad\\Longrightarrow\\quad t=3-\\frac4y.
\\]

This input never equals 3 when the output is nonzero. Therefore:

\\[
R=\\mathbb R\\setminus\\{0\\}.
\\]

**Use this method again**

Exclude zero denominators for the domain. For the range, solve for the original input and check which outputs permit an allowed input.

**Check**

Substitute the reconstructed input back into the rule:

\\[
\\frac4{3-(3-4/y)}=\\frac4{4/y}=y\\qquad(y\\ne0).
\\]

This verifies every claimed nonzero output.
:::

:::mcq
id: thomas-1-1-7
title: Thomas §1.1 · Exercise 7
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 7 · PDF p. 28](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which of the two original graphs represents a function of x?
- [ ] a | Neither graph
- [x] b | Only graph (b)
- [ ] c | Only graph (a)
- [ ] d | Both graphs
explanation: Graph (a) fails the vertical-line test: some x values have an upper and lower y value. Graph (b) has exactly one y value at each x in its plotted domain, despite its corners and turning points.
hint: Work through every subpart in the original question.
example:
![Thomas §1.1 · Exercise 7 · PDF p. 28](assets/recommended/math/thomas-1-1-7-context-1.webp)

![Thomas §1.1 · Exercise 7 · PDF p. 28](assets/recommended/math/thomas-1-1-7-question.webp)
solution:
**Plan — we are going to…**

1. Apply a vertical line to each pictured relation.

2. Decide whether an input ever has two outputs.

**The trick**

Corners and turning points do not disqualify a function. Two different heights above the same horizontal input do.

**What you need to know**

A function of the horizontal input must assign exactly one output to each allowed input. The vertical-line test checks this directly.

**Step-by-step solution**

1. **Inspect graph (a).** A vertical line to the right of the sideways curve’s leftmost point meets both its upper and lower arms. One input has two different outputs. Graph (a) fails.

2. **Inspect graph (b).** Moving a vertical line from left to right meets its curve at only one height at a time. Its peak and sharp valley do not produce two heights for the same input. Graph (b) passes.

3. **State the answer.** Only **graph (b)** represents a function of the horizontal input.

**Use this method again**

Use vertical lines for functions of the horizontal variable; inspect shared inputs rather than counting bends.

**Check**

An imaginary horizontal line may cross graph (b) more than once. That only means several inputs share an output, which a function is allowed to do. The disqualifying test is vertical.
:::

:::mcq
id: thomas-1-1-15
title: Thomas §1.1 · Exercise 15
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 15 · PDF p. 29](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which description gives the domain and graph of the original function?
- [ ] a | Domain \\(\\mathbb R\\); downward parabola with vertex \\((0,5)\\)
- [x] b | Domain \\(\\mathbb R\\); line through \\((0,5)\\) and \\((5/2,0)\\), slope −2
- [ ] c | Domain \\([0,\\infty)\\); line through \\((0,5)\\), slope −2
- [ ] d | Domain \\(\\mathbb R\\); line through \\((0,-2)\\), slope 5
explanation: f(x)=5−2x is defined for every real number. Its slope is −2, y intercept 5, and x intercept comes from 5−2x=0, giving x=5/2.
hint: Work through every subpart in the original question.
example:
![Thomas §1.1 · Exercise 15 · PDF p. 29](assets/recommended/math/thomas-1-1-15-context-1.webp)

![Thomas §1.1 · Exercise 15 · PDF p. 29](assets/recommended/math/thomas-1-1-15-question.webp)
solution:
**Plan — we are going to…**

1. Recognize a line and its input domain.

2. Find two intercepts and use the slope to sketch it.

**The trick**

The negative coefficient is a downward slope, not a domain restriction.

**What you need to know**

A line in slope-intercept form has slope equal to the input coefficient and vertical intercept equal to the constant:

\\[
y=mx+b.
\\]



**Step-by-step solution**

1. **Read the rule and domain.**

\\[
f(x)=5-2x=-2x+5.
\\]

There is no forbidden input, so:

\\[
D=\\mathbb R.
\\]

2. **Locate the vertical intercept.** Put the horizontal input equal to zero:

\\[
f(0)=5\\quad\\Longrightarrow\\quad (0,5).
\\]

3. **Locate the horizontal intercept.** Set the output equal to zero, subtract 5, then divide by −2:

\\[
5-2x=0\\quad\\Longrightarrow\\quad -2x=-5\\quad\\Longrightarrow\\quad x=\\frac52.
\\]



\\[
\\left(\\frac52,0\\right).
\\]

4. **Draw the line.** Join the two intercepts and extend in both directions. Its slope is −2: one unit right takes the graph two units down.

**Use this method again**

For a linear rule, identify its slope, calculate intercepts and extend the line across its domain.

**Check**

Use a third point:

\\[
f(1)=5-2=3.
\\]

The change from the point (0,5) to (1,3) is one right and two down, confirming slope −2.
:::

:::mcq
id: thomas-1-1-17
title: Thomas §1.1 · Exercise 17
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 17 · PDF p. 29](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which description gives the domain and graph of the original function?
- [ ] a | Domain \\([0,\\infty)\\); only the usual square-root branch
- [ ] b | Domain \\(\\mathbb R\\); graph \\(y=|x|\\)
- [ ] c | Domain \\(({-\\infty},0]\\); graph \\(y=\\sqrt{-x}\\) only
- [x] d | Domain \\(\\mathbb R\\); \\(\\sqrt{x}\\) for x≥0 reflected across the y-axis for x<0
explanation: g(x)=√|x| is real for every x. For x≥0 it is √x; for x<0 it is √(−x). The two branches meet at (0,0), are mirror images in the y-axis, and pass through (±1,1) and (±4,2).
hint: Work through every subpart in the original question.
example:
![Thomas §1.1 · Exercise 17 · PDF p. 29](assets/recommended/math/thomas-1-1-17-context-1.webp)

![Thomas §1.1 · Exercise 17 · PDF p. 29](assets/recommended/math/thomas-1-1-17-question.webp)
solution:
**Plan — we are going to…**

1. Check the square root for both input signs.

2. Split the absolute value into two branches and plot matching points.

**The trick**

The absolute value makes the root’s input nonnegative even when the original input is negative. Do not restrict the domain to the right half-line.

**What you need to know**

Absolute value is the distance from zero:

\\[
|x|=\\begin{cases}x,&x\\ge0,\\\\-x,&x<0.\\end{cases}
\\]

The principal square root gives nonnegative outputs.

**Step-by-step solution**

1. **Find the domain.**

\\[
g(x)=\\sqrt{|x|}.
\\]

Every real input has a nonnegative absolute value, so:

\\[
D=\\mathbb R.
\\]

2. **Write each branch.**

\\[
g(x)=\\begin{cases}\\sqrt{x},&x\\ge0,\\\\\\sqrt{-x},&x<0.\\end{cases}
\\]

The right branch is the usual square-root curve; reflect it across the vertical axis to get the left branch.

3. **Place anchor points.**

\\[
g(0)=0,\\qquad g(1)=g(-1)=1,\\qquad g(4)=g(-4)=2.
\\]

The branches meet at the origin, with no part below the horizontal axis.

\\[
R=[0,\\infty).
\\]

**Use this method again**

For a root of an absolute value, use the positive branch and reflect it across the vertical axis; check the original domain rather than assuming a root excludes negative inputs.

**Check**

The negative input −9 gives a valid point:

\\[
g(-9)=\\sqrt{|-9|}=\\sqrt9=3.
\\]

This confirms the reflected left branch and the unrestricted real domain.
:::

:::mcq
id: thomas-1-1-19
title: Thomas §1.1 · Exercise 19
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 19 · PDF p. 29](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which domain and graph correspond to the original function?
- [ ] a | Domain \\(\\mathbb R\\); y=|t|
- [x] b | Domain \\(\\mathbb R\\setminus\\{0\\}\\); y=−1 for t<0 and y=1 for t>0
- [ ] c | Domain \\(\\mathbb R\\); y=−1 for t<0 and y=1 for t≥0
- [ ] d | Domain \\(\\mathbb R\\setminus\\{0\\}\\); y=1 for every t
explanation: F(t)=t/|t| is undefined at t=0. For positive t, |t|=t and the quotient is 1; for negative t, |t|=−t and the quotient is −1. Draw horizontal half-lines with open endpoints at t=0.
hint: Work through every subpart in the original question.
example:
![Thomas §1.1 · Exercise 19 · PDF p. 29](assets/recommended/math/thomas-1-1-19-context-1.webp)

![Thomas §1.1 · Exercise 19 · PDF p. 29](assets/recommended/math/thomas-1-1-19-question.webp)
solution:
**Plan — we are going to…**

1. Exclude the denominator’s zero.

2. Evaluate the quotient separately for negative and positive inputs.

**The trick**

The fraction is not 1 everywhere: for a negative input, the absolute value reverses the denominator’s sign.

**What you need to know**

An absolute value equals the input on the positive side and its negative on the negative side. A zero denominator is undefined.

**Step-by-step solution**

1. **Find the excluded input.**

\\[
F(t)=\\frac{t}{|t|},\\qquad |t|=0\\Longleftrightarrow t=0.
\\]



\\[
D=\\mathbb R\\setminus\\{0\\}.
\\]

2. **Use a positive input.** Its absolute value equals itself:

\\[
t>0:\\qquad F(t)=\\frac{t}{t}=1.
\\]

3. **Use a negative input.** Its absolute value equals its negative:

\\[
t<0:\\qquad F(t)=\\frac{t}{-t}=-1.
\\]

4. **Draw the graph.** Draw a horizontal half-line at height −1 for negative inputs, and one at height 1 for positive inputs. Both endpoints above zero are open.

\\[
R=\\{-1,1\\}.
\\]

**Use this method again**

Split an absolute-value denominator into sign cases before cancelling; retain any input excluded by the original fraction.

**Check**

Use one input on each side:

\\[
F(-2)=\\frac{-2}{2}=-1,\\qquad F(2)=\\frac22=1.
\\]

At zero the original fraction is undefined, so neither open endpoint is filled.
:::

:::mcq
id: thomas-1-1-21
title: Thomas §1.1 · Exercise 21
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 21 · PDF p. 29](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What is the domain of the original function?
- [ ] a | \\(({-\\infty},-3]\\cup[3,\\infty)\\)
- [ ] b | \\([-3,3]\\setminus\\{-5,5\\}\\)
- [ ] c | \\(\\mathbb R\\setminus\\{-5,5\\}\\)
- [x] d | \\(({-\\infty},-5)\\cup(-5,-3]\\cup[3,5)\\cup(5,\\infty)\\)
explanation: The square root requires x²−9≥0, hence x≤−3 or x≥3. The denominator also must be nonzero: 4−√(x²−9)=0 at x²=25, or x=±5. Those two points must be removed; x=−3 is still allowed even though the numerator is zero.
hint: Work through every subpart in the original question.
example:
![Thomas §1.1 · Exercise 21 · PDF p. 29](assets/recommended/math/thomas-1-1-21-question.webp)
solution:
**Plan — we are going to…**

1. Impose the square-root restriction.

2. Remove the inputs that make the entire denominator zero.

**The trick**

There are two separate restrictions. A zero numerator is allowed; a zero denominator is not. In particular, input −3 remains allowed.

**What you need to know**

A real square root needs a nonnegative radicand. A fraction additionally needs a nonzero denominator. Intersect all restrictions from the original expression.

**Step-by-step solution**

1. **Write the original expression.**

\\[
y=\\frac{x+3}{4-\\sqrt{x^2-9}}.
\\]

2. **Keep the radicand nonnegative.**

\\[
x^2-9\\ge0\\quad\\Longrightarrow\\quad x^2\\ge9.
\\]

This means the input is at least 3 units from zero:

\\[
x\\le-3\\quad\\text{or}\\quad x\\ge3.
\\]

3. **Find the forbidden denominator zeros.**

\\[
4-\\sqrt{x^2-9}=0\\quad\\Longrightarrow\\quad\\sqrt{x^2-9}=4.
\\]

Both sides are nonnegative, so square and solve:

\\[
x^2-9=16\\quad\\Longrightarrow\\quad x^2=25\\quad\\Longrightarrow\\quad x=\\pm5.
\\]

4. **Remove those two points.** The root endpoints −3 and 3 are allowed because the denominator is 4 there. The domain is:

\\[
(-\\infty,-5)\\cup(-5,-3]\\cup[3,5)\\cup(5,\\infty).
\\]

**Use this method again**

For a fraction containing an even root, solve the radicand inequality first and then exclude zeros of the full denominator.

**Check**

Test the easily confused points:

\\[
y(-3)=\\frac0{4-0}=0.
\\]



\\[
4-\\sqrt{5^2-9}=4-4=0.
\\]

Thus −3 is included, while 5 and −5 must be excluded.
:::

:::mcq
id: thomas-1-1-23
title: Thomas §1.1 · Exercise 23
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 23 · PDF p. 29](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which graph descriptions explain why both original relations fail to be functions of x?
- [ ] a | (a) y=x for x≥0; (b) y=−x for x≤0; both fail the vertical-line test
- [x] b | (a) y=±x for x≥0; (b) the two full lines y=±x; each has two y values for some x
- [ ] c | (a) y=|x|; (b) y=x; both pass the vertical-line test
- [ ] d | (a) x=0; (b) y=0; each has two y values for some x
explanation: (a) |y|=x requires x≥0 and gives y=x or y=−x, a sideways V opening right. (b) y²=x² gives both full lines y=x and y=−x. For each relation, any positive x has two different y values, so neither is the graph of a single-valued function of x.
hint: Work through every subpart in the original question.
example:
![Thomas §1.1 · Exercise 23 · PDF p. 29](assets/recommended/math/thomas-1-1-23-question.webp)
solution:
**Plan — we are going to…**

1. Solve each relation for possible output values.

2. Use a positive input to test uniqueness of its output.

**The trick**

Taking a square root introduces both signs when solving an equation for an unknown. Keeping only the positive branch would discard half the relation.

**What you need to know**

A relation is a function of the horizontal input only if it gives at most one output for that input. An absolute value is always nonnegative.

**Step-by-step solution**

1. **Part (a): solve the absolute-value relation.**

\\[
|y|=x.
\\]

The right side must be nonnegative. The two possible outputs are:

\\[
x\\ge0,\\qquad y=x\\quad\\text{or}\\quad y=-x.
\\]

Draw two rays from the origin opening to the right: a sideways V.

2. **Part (b): solve the squared relation.**

\\[
y^2=x^2\\quad\\Longrightarrow\\quad y=\\pm|x|.
\\]

As a set of points this is the pair of complete lines:

\\[
y=x\\quad\\text{or}\\quad y=-x.
\\]

3. **Apply the function test to both.** At positive input 1, either relation permits two distinct outputs:

\\[
x=1:\\qquad y=1\\quad\\text{and}\\quad y=-1.
\\]

Therefore **neither relation is a function of the horizontal input**.

**Use this method again**

When solving a relation for an output, retain all signs and domain conditions, then test whether the same input allows multiple outputs.

**Check**

The difference between the pictures appears on the left: part (a) has no negative inputs, whereas part (b) includes the points (−1,1) and (−1,−1). Both still fail the vertical-line test on the right.
:::

:::mcq
id: thomas-1-1-25
title: Thomas §1.1 · Exercise 25
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 25 · PDF p. 29](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which description matches the complete graph of the original piecewise function?
- [ ] a | Line segments joining (0,0)→(1,2)→(2,0)
- [ ] b | The full graph y=|x−1|
- [ ] c | Line segments joining (0,1)→(1,0)→(2,1), with x=1 excluded
- [x] d | Line segments joining (0,0)→(1,1)→(2,0), with all three points included
explanation: On 0≤x≤1, y=x rises from (0,0) to (1,1). On 1<x≤2, y=2−x falls toward (2,0). The first branch includes x=1, so the vertex is filled; both outer endpoints are included.
hint: Work through every subpart in the original question.
example:
![Thomas §1.1 · Exercise 25 · PDF p. 29](assets/recommended/math/thomas-1-1-25-context-1.webp)

![Thomas §1.1 · Exercise 25 · PDF p. 29](assets/recommended/math/thomas-1-1-25-question.webp)
solution:
**Plan — we are going to…**

1. Graph the first rule only on its given interval.

2. Graph the second rule and mark included endpoints.

**The trick**

The common vertex belongs to the first branch. The second branch excludes that input, but this does not remove the vertex from the combined graph.

**What you need to know**

A piecewise rule applies only on its stated interval. A weak inequality gives a filled endpoint; a strict inequality gives an open endpoint for that branch.

**Step-by-step solution**

1. **Draw the rising branch.**

\\[
y=x,\\qquad 0\\le x\\le1.
\\]

Its endpoint values are:

\\[
(0,0),\\qquad(1,1).
\\]

Join them with a straight segment and fill both endpoints.

2. **Draw the falling branch.**

\\[
y=2-x,\\qquad1<x\\le2.
\\]

At the left boundary its limiting height is 1; at the right endpoint the height is zero:

\\[
2-1=1,\\qquad2-2=0.
\\]

Join the vertex position to (2,0). The first branch already fills the vertex.

3. **Describe the complete graph.** It is a triangular tent made of the segments from (0,0) to (1,1) to (2,0), with all three vertices included.

\\[
D=[0,2],\\qquad R=[0,1].
\\]

**Use this method again**

Graph piecewise branches on their own intervals, then combine their endpoint inclusion rules at shared boundaries.

**Check**

An interior point on each side gives the same height:

\\[
f\\!\\left(\\frac12\\right)=\\frac12,\\qquad f\\!\\left(\\frac32\\right)=2-\\frac32=\\frac12.
\\]

The two slopes are +1 and −1, as the tent requires.
:::

:::mcq
id: thomas-1-1-27
title: Thomas §1.1 · Exercise 27
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 27 · PDF p. 29](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which description matches the two branches of the original function?
- [ ] a | \\(y=4-x^2\\) for x≥1, and \\(y=x^2+2x\\) for x<1
- [x] b | \\(y=4-x^2\\) for x≤1, and \\(y=x^2+2x\\) for x>1, meeting continuously at (1,3)
- [ ] c | \\(y=4-x^2\\) for x<1, and \\(y=x^2+2x\\) for x≥1, with a jump at (1,3)
- [ ] d | \\(y=4+x^2\\) for x≤1, and \\(y=x^2-2x\\) for x>1
explanation: The left branch is the downward parabola 4−x², including its point (1,3) and vertex (0,4). The right branch is (x+1)²−1 restricted to x>1; its open starting point would also be (1,3), already included by the first branch. It increases to the right, so the combined graph is continuous with a corner at x=1.
hint: Work through every subpart in the original question.
example:
![Thomas §1.1 · Exercise 27 · PDF p. 29](assets/recommended/math/thomas-1-1-27-context-1.webp)

![Thomas §1.1 · Exercise 27 · PDF p. 29](assets/recommended/math/thomas-1-1-27-question.webp)
solution:
**Plan — we are going to…**

1. Sketch the restricted downward parabola.

2. Sketch the restricted upward parabola and compare their boundary heights.

**The trick**

Both formulas give height 3 at the joining input, but only the left formula includes that input. The right parabola’s own vertex is outside its permitted branch.

**What you need to know**

Complete the square to identify a parabola’s shift. Always restrict a piecewise branch to its stated interval before drawing its entire parent curve.

**Step-by-step solution**

1. **Graph the first branch.**

\\[
y=4-x^2,\\qquad x\\le1.
\\]

It opens downward, has vertex (0,4), and includes its right endpoint:

\\[
f(1)=4-1=3.
\\]

2. **Rewrite the second branch.**

\\[
y=x^2+2x=(x+1)^2-1,\\qquad x>1.
\\]

Its unrestricted vertex would be (−1,−1), but that input is not in this branch. Draw only the increasing portion to the right of input 1.

3. **Compare at the join.**

\\[
1^2+2(1)=3.
\\]

The right branch begins with an open boundary at (1,3); the first branch fills that same point. The curve therefore meets continuously there, changing from decreasing on the left to increasing on the right.

**Use this method again**

For piecewise parabolas, complete the square, restrict each graph, and compare the two boundary heights and endpoint rules.

**Check**

Near the join, the values approach height 3 from opposite sides:

\\[
4-(0.9)^2=3.19,\\qquad(1.1)^2+2(1.1)=3.41.
\\]

Both branches approach 3, while only the first supplies the actual value at input 1.
:::

:::mcq
id: thomas-1-1-33
title: Thomas §1.1 · Exercise 33
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 33 · PDF p. 29](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: For which x are (a) floor(x)=0 and (b) ceiling(x)=0?
- [ ] a | (a) \\((0,1]\\); (b) \\([-1,0)\\)
- [ ] b | (a) \\([-1,0)\\); (b) \\([0,1)\\)
- [ ] c | (a) \\([0,1]\\); (b) \\([-1,0]\\)
- [x] d | (a) \\([0,1)\\); (b) \\((-1,0]\\)
explanation: The floor is the greatest integer ≤x, giving 0≤x<1. The ceiling is the least integer ≥x, giving −1<x≤0.
hint: Work through every subpart in the original question.
example:
![Thomas §1.1 · Exercise 33 · PDF p. 29](assets/recommended/math/thomas-1-1-33-question.webp)
solution:
**Plan — we are going to…**

1. Translate a floor value of zero into an input interval.

2. Translate a ceiling value of zero into an input interval.

**The trick**

Floor and ceiling put the included endpoint on opposite sides. Test zero and the neighboring integers before choosing brackets.

**What you need to know**

Floor is the greatest integer at or below the input; ceiling is the least integer at or above it:

\\[
\\lfloor x\\rfloor=n\\Longleftrightarrow n\\le x<n+1.
\\]



\\[
\\lceil x\\rceil=n\\Longleftrightarrow n-1<x\\le n.
\\]



**Step-by-step solution**

1. **Part (a): apply the floor rule.** Put the required integer equal to zero:

\\[
\\lfloor x\\rfloor=0\\Longleftrightarrow0\\le x<1.
\\]

The answer is:

\\[
[0,1).
\\]

2. **Part (b): apply the ceiling rule.**

\\[
\\lceil x\\rceil=0\\Longleftrightarrow-1<x\\le0.
\\]

The answer is:

\\[
(-1,0].
\\]

**Use this method again**

Turn a floor or ceiling equation into its defining two-sided inequality; then translate inclusion directly into interval brackets.

**Check**

At zero both functions give zero. At 1 the floor becomes 1, and at −1 the ceiling is −1. Also:

\\[
\\lfloor0.4\\rfloor=0,\\qquad\\lceil-0.4\\rceil=0.
\\]

These tests confirm both intervals and their endpoints.
:::

:::mcq
id: thomas-1-1-35
title: Thomas §1.1 · Exercise 35
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 35 · PDF p. 29](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Does the original ceiling/floor identity hold for every real x?
- [ ] a | Yes, but only when x is an integer
- [x] b | Yes: \\(\\lceil-x\\rceil=-\\lfloor x\\rfloor\\)
- [ ] c | No; it fails for every noninteger
- [ ] d | No; it holds only for nonnegative x
explanation: Let n=floor(x), so n≤x<n+1. Negating gives −n−1<−x≤−n, whose least bounding integer above is −n. Therefore ceil(−x)=−floor(x) for all real x.
hint: Work through every subpart in the original question.
example:
![Thomas §1.1 · Exercise 35 · PDF p. 29](assets/recommended/math/thomas-1-1-35-question.webp)
solution:
**Plan — we are going to…**

1. Name the integer immediately below the original input.

2. Negate its bounding inequality and identify the ceiling of the negative input.

**The trick**

Negating reverses the inequality directions. The strict bound moves to the other end, which is why the ceiling of the negative input matches the negative floor.

**What you need to know**

The definitions identify a unique integer in each unit interval:

\\[
n=\\lfloor x\\rfloor\\Longleftrightarrow n\\le x<n+1.
\\]



\\[
\\lceil u\\rceil=k\\Longleftrightarrow k-1<u\\le k.
\\]



**Step-by-step solution**

1. **Start from the floor definition.** Let the integer be:

\\[
n=\\lfloor x\\rfloor,\\qquad n\\le x<n+1.
\\]

2. **Negate every term.** Multiplication by −1 reverses both inequalities:

\\[
-n\\ge-x>-n-1.
\\]

Write in increasing order:

\\[
-n-1<-x\\le-n.
\\]

3. **Read the ceiling.** The negative input is above the integer just below −n and is at most −n. Therefore its least integer upper bound is −n:

\\[
\\lceil-x\\rceil=-n=-\\lfloor x\\rfloor.
\\]

The identity holds for **every real input**, including integers.

**Use this method again**

Prove floor/ceiling identities by writing their defining inequalities, transforming the whole inequality and reading the new bounding integer.

**Check**

For a noninteger and an integer:

\\[
x=2.3:\\quad\\lceil-2.3\\rceil=-2=-\\lfloor2.3\\rfloor.
\\]



\\[
x=-2:\\quad\\lceil2\\rceil=2=-\\lfloor-2\\rfloor.
\\]

The general inequality proof covers both cases.
:::

:::mcq
id: thomas-1-1-37
title: Thomas §1.1 · Exercise 37
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 37 · PDF p. 29](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What symmetry and monotonicity describe the original graph?
- [ ] a | Y-axis symmetry; increasing on \\(\\mathbb R\\)
- [ ] b | Origin symmetry; increasing on \\(\\mathbb R\\)
- [ ] c | Y-axis symmetry; increasing for x<0, decreasing for x>0
- [x] d | Origin symmetry; decreasing on \\(\\mathbb R\\)
explanation: The graph y=−x³ is the cubic reflected across the x-axis. It passes through (−1,1),(0,0),(1,−1), has f(−x)=−f(x), and strictly decreases as x increases. Its horizontal tangent at zero does not interrupt strict monotonicity.
hint: Work through every subpart in the original question.
example:
![Thomas §1.1 · Exercise 37 · PDF p. 29](assets/recommended/math/thomas-1-1-37-context-1.webp)

![Thomas §1.1 · Exercise 37 · PDF p. 29](assets/recommended/math/thomas-1-1-37-question.webp)
solution:
**Plan — we are going to…**

1. Test the cubic under a sign-reversed input.

2. Use how cubes change with input to determine monotonicity.

**The trick**

A horizontal tangent at the origin does not stop strict decrease. Compare ordered inputs; do not treat a single flat tangent as a constant interval.

**What you need to know**

Origin symmetry corresponds to an odd function. Cubing preserves the order of real numbers; multiplying by −1 reverses that order.

**Step-by-step solution**

1. **Write the rule and sign test.**

\\[
f(x)=-x^3.
\\]



\\[
f(-x)=-(-x)^3=x^3=-f(x).
\\]

The graph has **origin symmetry**.

2. **Determine its direction.** For two inputs in increasing order, cubing preserves their order and negating reverses it:

\\[
x_1<x_2\\Longrightarrow x_1^3<x_2^3\\Longrightarrow -x_1^3>-x_2^3.
\\]

Thus the function is **strictly decreasing on all real numbers**.

3. **Sketch anchor points.**

\\[
(-1,1),\\qquad(0,0),\\qquad(1,-1).
\\]

Draw the ordinary cubic reflected across the horizontal axis through those points.

**Use this method again**

For a signed cubic, test odd symmetry algebraically and use input order to decide increase or decrease.

**Check**

Opposite inputs give opposite outputs:

\\[
f(-2)=8,\\qquad f(2)=-8.
\\]

As the input increases from −2 to 2, the output falls from 8 to −8, agreeing with the order proof.
:::

:::mcq
id: thomas-1-1-39
title: Thomas §1.1 · Exercise 39
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 39 · PDF p. 29](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What symmetry and monotonicity describe the original graph?
- [ ] a | Y-axis symmetry; increasing on all real x
- [x] b | Origin symmetry; increasing separately on \\(({-\\infty},0)\\) and \\((0,\\infty)\\)
- [ ] c | Y-axis symmetry; decreasing separately on those intervals
- [ ] d | Origin symmetry; decreasing separately on those intervals
explanation: For y=−1/x, the domain excludes zero. Its branches lie in quadrants II and IV with both coordinate axes as asymptotes. The function is odd and increases on each side of zero (its derivative is 1/x²>0). It is not increasing across the disconnected domain as one single interval.
hint: Work through every subpart in the original question.
example:
![Thomas §1.1 · Exercise 39 · PDF p. 29](assets/recommended/math/thomas-1-1-39-context-1.webp)

![Thomas §1.1 · Exercise 39 · PDF p. 29](assets/recommended/math/thomas-1-1-39-question.webp)
solution:
**Plan — we are going to…**

1. Find the domain and test odd symmetry.

2. Compare outputs on each side of the excluded input zero.

**The trick**

The function increases on each separate branch. It is not increasing across the gap at zero, where the input domain is disconnected.

**What you need to know**

Odd symmetry requires opposite inputs to have opposite outputs. To compare two outputs, subtract them and determine the sign; do not cross a forbidden input when naming an interval.

**Step-by-step solution**

1. **Find the domain and symmetry.**

\\[
f(x)=-\\frac1x,\\qquad D=\\mathbb R\\setminus\\{0\\}.
\\]



\\[
f(-x)=-\\frac1{-x}=\\frac1x=-f(x).
\\]

The graph has **origin symmetry**.

2. **Compare inputs on one branch.** Suppose the first input is smaller and both have the same sign. Their product is positive, so:

\\[
f(x_2)-f(x_1)=-\\frac1{x_2}+\\frac1{x_1}=\\frac{x_2-x_1}{x_1x_2}>0.
\\]

Therefore the graph is **increasing separately** on:

\\[
(-\\infty,0)\\quad\\text{and}\\quad(0,\\infty).
\\]

3. **Describe the branches.** A negative input gives a positive output in quadrant II; a positive input gives a negative output in quadrant IV. The coordinate axes are asymptotes.

**Use this method again**

For a reciprocal, exclude its pole first, then determine monotonicity separately on each connected domain interval.

**Check**

On the positive side:

\\[
f(1)=-1<f(2)=-\\frac12.
\\]

Across zero, however:

\\[
-1<1,\\qquad f(-1)=1>f(1)=-1.
\\]

That counterexample explains why one cannot claim increase across the entire punctured domain.
:::

:::mcq
id: thomas-1-1-41
title: Thomas §1.1 · Exercise 41
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 41 · PDF p. 29](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What symmetry and monotonicity describe the original graph?
- [ ] a | Origin symmetry; increasing everywhere
- [ ] b | Y-axis symmetry; increasing on \\(({-\\infty},0]\\), decreasing on \\([0,\\infty)\\)
- [ ] c | No symmetry; decreasing everywhere
- [x] d | Y-axis symmetry; decreasing on \\(({-\\infty},0]\\), increasing on \\([0,\\infty)\\)
explanation: For y=√|x|, reflect the ordinary √x branch across the y-axis. The output decreases toward its minimum zero as x approaches zero from the left, then increases to the right. The domain is all real x and the range is nonnegative.
hint: Work through every subpart in the original question.
example:
![Thomas §1.1 · Exercise 41 · PDF p. 29](assets/recommended/math/thomas-1-1-41-context-1.webp)

![Thomas §1.1 · Exercise 41 · PDF p. 29](assets/recommended/math/thomas-1-1-41-question.webp)
solution:
**Plan — we are going to…**

1. Use the absolute value to test symmetry.

2. Track what happens to the distance from zero on each side.

**The trick**

The graph decreases while approaching the origin from the left and increases after leaving it on the right. It is not increasing on the whole real line.

**What you need to know**

Even functions have vertical-axis symmetry. Both absolute value and the square root are nonnegative, and the square root increases when its nonnegative argument increases.

**Step-by-step solution**

1. **Test symmetry.**

\\[
f(x)=\\sqrt{|x|}.
\\]



\\[
f(-x)=\\sqrt{|-x|}=\\sqrt{|x|}=f(x).
\\]

Thus the graph has **vertical-axis symmetry**.

2. **Analyze the left branch.** For nonpositive inputs, increasing the input toward zero decreases its absolute value and hence its root. This branch is decreasing on:

\\[
(-\\infty,0].
\\]

3. **Analyze the right branch.** For nonnegative inputs the rule is the ordinary square root, which increases. This branch is increasing on:

\\[
[0,\\infty).
\\]

4. **Locate the minimum and anchor points.**

\\[
f(0)=0,\\qquad f(-4)=f(4)=2.
\\]

The branches meet at the origin. The domain is all real numbers and the range is nonnegative.

**Use this method again**

For an even rule built from distance to zero, study the right branch and reflect it; reverse monotonic direction on the left.

**Check**

Three ordered inputs show the two directions:

\\[
-4<-1<0,\\quad 2>1>0.
\\]



\\[
0<1<4,\\quad0<1<2.
\\]

These are exactly the left decrease and right increase.
:::

:::mcq
id: thomas-1-1-43
title: Thomas §1.1 · Exercise 43
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 43 · PDF p. 29](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What symmetry and monotonicity describe the original graph?
- [ ] a | Y-axis symmetry; decreasing for x<0 and increasing for x>0
- [x] b | Origin symmetry; increasing on \\(\\mathbb R\\)
- [ ] c | Y-axis symmetry; increasing on \\(\\mathbb R\\)
- [ ] d | Origin symmetry; decreasing on \\(\\mathbb R\\)
explanation: y=x³/8 is a vertical scaling of the cubic, passing through (−2,−1),(0,0),(2,1). It is odd and strictly increasing on all real numbers.
hint: Work through every subpart in the original question.
example:
![Thomas §1.1 · Exercise 43 · PDF p. 29](assets/recommended/math/thomas-1-1-43-context-1.webp)

![Thomas §1.1 · Exercise 43 · PDF p. 29](assets/recommended/math/thomas-1-1-43-question.webp)
solution:
**Plan — we are going to…**

1. Test the cubic scaling for odd symmetry.

2. Check whether the positive scale factor changes its increasing direction.

**The trick**

Dividing a cubic by positive 8 changes its height but preserves both its odd symmetry and its direction of increase.

**What you need to know**

Cubing strictly increases on the real numbers. Multiplying by a positive constant preserves inequalities. An odd function satisfies:

\\[
f(-x)=-f(x).
\\]



**Step-by-step solution**

1. **Test the negative input.**

\\[
f(x)=\\frac{x^3}{8}.
\\]



\\[
f(-x)=\\frac{(-x)^3}{8}=-\\frac{x^3}{8}=-f(x).
\\]

The graph has **origin symmetry**.

2. **Compare increasing inputs.**

\\[
x_1<x_2\\Longrightarrow x_1^3<x_2^3\\Longrightarrow\\frac{x_1^3}{8}<\\frac{x_2^3}{8}.
\\]

It is **strictly increasing on all real numbers**.

3. **Sketch the scaled cubic.** Convenient points are:

\\[
f(-2)=-1,\\qquad f(0)=0,\\qquad f(2)=1.
\\]

Draw a smooth cubic through these points.

**Use this method again**

For a scaled power function, separate the parent function’s behavior from the sign of its scale factor.

**Check**

At opposite inputs 4 and −4 the outputs are 8 and −8:

\\[
f(4)=8,\\qquad f(-4)=-8.
\\]

The scale changes steepness while preserving opposite output signs and increasing order.
:::

:::mcq
id: thomas-1-1-45
title: Thomas §1.1 · Exercise 45
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 45 · PDF p. 29](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: What symmetry and monotonicity describe the original real-valued graph?
- [ ] a | Domain \\(\\mathbb R\\); origin symmetry; decreasing everywhere
- [ ] b | Domain \\([0,\\infty)\\); y-axis symmetry; increasing on its domain
- [ ] c | Domain \\(({-\\infty},0]\\); no symmetry; increasing on its domain
- [x] d | Domain \\([0,\\infty)\\); no y-axis or origin symmetry; decreasing on its domain
explanation: The real power x^(3/2) uses √x, so x≥0. Negating gives y=−x^(3/2), which starts at (0,0), passes through (1,−1),(4,−8), and decreases for x>0. The domain is not symmetric under x↦−x, so the graph is neither even nor odd.
hint: Work through every subpart in the original question.
example:
![Thomas §1.1 · Exercise 45 · PDF p. 29](assets/recommended/math/thomas-1-1-45-context-1.webp)

![Thomas §1.1 · Exercise 45 · PDF p. 29](assets/recommended/math/thomas-1-1-45-question.webp)
solution:
**Plan — we are going to…**

1. Find where the real fractional power is defined.

2. Determine its direction and whether its domain permits symmetry.

**The trick**

The denominator 2 in the exponent requires a square root. Negative real inputs are excluded, so the domain cannot support even or odd symmetry.

**What you need to know**

For the real-valued power here, take the square root and then cube it:

\\[
x^{3/2}=(\\sqrt{x})^3,\\qquad x\\ge0.
\\]

Negating an increasing nonnegative function makes it decrease.

**Step-by-step solution**

1. **Write the rule and domain.**

\\[
y=-x^{3/2}=-(\\sqrt{x})^3,\\qquad D=[0,\\infty).
\\]

2. **Determine monotonicity.** As the input increases, its square root and then its cube both increase. Negating reverses the output order. The graph is **strictly decreasing on its domain**.

3. **Test symmetry eligibility.** For example, input 1 is allowed but input −1 is not. The domain is not symmetric about zero; therefore the graph has **neither vertical-axis nor origin symmetry**.

4. **Place points.**

\\[
(0,0),\\qquad(1,-1),\\qquad(4,-8).
\\]

The curve starts at the origin and continues downward to the right.

\\[
R=(-\\infty,0].
\\]

**Use this method again**

Check real-power domain restrictions before parity. Then apply the sign and scale to the parent power’s direction.

**Check**

At input 4:

\\[
-(\\sqrt4)^3=-(2)^3=-8.
\\]

There is no reflected real point at input −4 under this rule, confirming the absence of either requested symmetry.
:::

:::mcq
id: thomas-1-1-47
title: Thomas §1.1 · Exercise 47
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 47 · PDF p. 29](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Is the original function even, odd, or neither?
- [ ] a | Both even and odd
- [x] b | Even
- [ ] c | Odd
- [ ] d | Neither
explanation: f(x)=3 has f(−x)=3=f(x), and is not odd because 3≠−3.
hint: Work through every subpart in the original question.
example:
![Thomas §1.1 · Exercise 47 · PDF p. 29](assets/recommended/math/thomas-1-1-47-context-1.webp)

![Thomas §1.1 · Exercise 47 · PDF p. 29](assets/recommended/math/thomas-1-1-47-question.webp)
solution:
**Plan — we are going to…**

1. Test a negative input in the constant rule.

2. Compare with the even and odd identities.

**The trick**

A nonzero constant is even; it is not odd. Only the constant zero could satisfy both identities.

**What you need to know**

First check that the domain allows each input together with its negative. Then substitute the negative input everywhere. Even means equal outputs; odd means opposite outputs:

\\[
f(-x)=f(x)\\quad\\text{(even)}.
\\]



\\[
f(-x)=-f(x)\\quad\\text{(odd)}.
\\]



**Step-by-step solution**

1. **State the rule and domain.**

\\[
f(x)=3,\\qquad D=\\mathbb R.
\\]

2. **Replace the input by its negative.** The rule contains no input term, so:

\\[
f(-x)=3=f(x).
\\]

Therefore the function is **even**.

3. **Rule out oddness.**

\\[
-f(x)=-3\\ne3=f(-x).
\\]

The graph is a horizontal line, symmetric about the vertical axis.

**Use this method again**

For a constant function, compare its unchanging value to its own negative.

**Check**

At inputs 2 and −2, both outputs are 3. They match each other, but they are not negatives of one another.
:::

:::mcq
id: thomas-1-1-49
title: Thomas §1.1 · Exercise 49
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 49 · PDF p. 29](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Is the original function even, odd, or neither?
- [ ] a | Odd
- [ ] b | Neither
- [ ] c | Both even and odd
- [x] d | Even
explanation: f(x)=x²+1 has f(−x)=x²+1=f(x).
hint: Work through every subpart in the original question.
example:
![Thomas §1.1 · Exercise 49 · PDF p. 29](assets/recommended/math/thomas-1-1-49-context-1.webp)

![Thomas §1.1 · Exercise 49 · PDF p. 29](assets/recommended/math/thomas-1-1-49-question.webp)
solution:
**Plan — we are going to…**

1. Substitute the negative input into the quadratic.

2. Simplify the even power and compare outputs.

**The trick**

The square removes the input’s sign; the added constant keeps the same sign.

**What you need to know**

First check that the domain allows each input together with its negative. Then substitute the negative input everywhere. Even means equal outputs; odd means opposite outputs:

\\[
f(-x)=f(x)\\quad\\text{(even)}.
\\]



\\[
f(-x)=-f(x)\\quad\\text{(odd)}.
\\]



**Step-by-step solution**

1. **Check the domain.**

\\[
f(x)=x^2+1,\\qquad D=\\mathbb R.
\\]

The domain is symmetric.

2. **Substitute and simplify.**

\\[
f(-x)=(-x)^2+1=x^2+1=f(x).
\\]

The function is **even**.

3. **Interpret the symmetry.** Every point on the right has a point of equal height on the left. The graph has vertical-axis symmetry, not origin symmetry.

**Use this method again**

In an even-power polynomial, replace every input by its negative and simplify powers before comparing.

**Check**

Opposite inputs give the same height:

\\[
f(2)=5=f(-2).
\\]

The nonzero value at zero also rules out oddness:

\\[
f(0)=1\\ne0.
\\]
:::

:::mcq
id: thomas-1-1-51
title: Thomas §1.1 · Exercise 51
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 51 · PDF p. 29](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Is the original function even, odd, or neither?
- [ ] a | Both even and odd
- [x] b | Odd
- [ ] c | Even
- [ ] d | Neither
explanation: g(x)=x³+x has g(−x)=−x³−x=−g(x).
hint: Work through every subpart in the original question.
example:
![Thomas §1.1 · Exercise 51 · PDF p. 29](assets/recommended/math/thomas-1-1-51-context-1.webp)

![Thomas §1.1 · Exercise 51 · PDF p. 29](assets/recommended/math/thomas-1-1-51-question.webp)
solution:
**Plan — we are going to…**

1. Substitute the negative input into both terms.

2. Factor out one minus sign from the whole result.

**The trick**

Both the cube and the linear term change sign. The minus must apply to the entire original function.

**What you need to know**

First check that the domain allows each input together with its negative. Then substitute the negative input everywhere. Even means equal outputs; odd means opposite outputs:

\\[
f(-x)=f(x)\\quad\\text{(even)}.
\\]



\\[
f(-x)=-f(x)\\quad\\text{(odd)}.
\\]



**Step-by-step solution**

1. **Check the domain.**

\\[
g(x)=x^3+x,\\qquad D=\\mathbb R.
\\]

2. **Replace every input.**

\\[
g(-x)=(-x)^3+(-x)=-x^3-x.
\\]

3. **Compare with the negative rule.**

\\[
-x^3-x=-(x^3+x)=-g(x).
\\]

The function is **odd**, so its graph has origin symmetry.

**Use this method again**

For a sum of odd-power terms, change every input’s sign, then factor the common minus from all terms.

**Check**

Use opposite inputs:

\\[
g(2)=8+2=10,\\qquad g(-2)=-8-2=-10.
\\]

They are negatives, as required.
:::

:::mcq
id: thomas-1-1-53
title: Thomas §1.1 · Exercise 53
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 53 · PDF p. 29](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Is the original function even, odd, or neither?
- [ ] a | Odd
- [ ] b | Neither
- [ ] c | Both even and odd
- [x] d | Even
explanation: g(x)=1/(x²−1) has a symmetric domain excluding ±1, and g(−x)=g(x).
hint: Work through every subpart in the original question.
example:
![Thomas §1.1 · Exercise 53 · PDF p. 29](assets/recommended/math/thomas-1-1-53-context-1.webp)

![Thomas §1.1 · Exercise 53 · PDF p. 29](assets/recommended/math/thomas-1-1-53-question.webp)
solution:
**Plan — we are going to…**

1. Find the two excluded inputs.

2. Test the squared denominator under a sign-reversed input.

**The trick**

The holes at inputs −1 and 1 are symmetric. A function may have excluded inputs and still be even.

**What you need to know**

First check that the domain allows each input together with its negative. Then substitute the negative input everywhere. Even means equal outputs; odd means opposite outputs:

\\[
f(-x)=f(x)\\quad\\text{(even)}.
\\]



\\[
f(-x)=-f(x)\\quad\\text{(odd)}.
\\]



**Step-by-step solution**

1. **Determine the domain.**

\\[
g(x)=\\frac1{x^2-1},\\qquad x^2-1\\ne0.
\\]



\\[
D=\\mathbb R\\setminus\\{-1,1\\}.
\\]

Each allowed input has its negative allowed too.

2. **Substitute the negative input.**

\\[
g(-x)=\\frac1{(-x)^2-1}=\\frac1{x^2-1}=g(x).
\\]

3. **Conclude.** The function is **even**, with vertical-axis symmetry. The denominator’s constant −1 does not change under the input substitution.

**Use this method again**

For rational parity, check symmetric exclusions first, then simplify the complete numerator and denominator after substitution.

**Check**

Choose an allowed pair:

\\[
g(2)=\\frac13=g(-2).
\\]

The forbidden pair −1 and 1 is also mirrored, so the domain check agrees.
:::

:::mcq
id: thomas-1-1-55
title: Thomas §1.1 · Exercise 55
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 55 · PDF p. 29](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Is the original function even, odd, or neither?
- [ ] a | Both even and odd
- [x] b | Neither
- [ ] c | Even
- [ ] d | Odd
explanation: h(t)=1/(t−1) does not have a domain symmetric about zero (1 is excluded but −1 is allowed), and neither parity identity holds.
hint: Work through every subpart in the original question.
example:
![Thomas §1.1 · Exercise 55 · PDF p. 29](assets/recommended/math/thomas-1-1-55-context-1.webp)

![Thomas §1.1 · Exercise 55 · PDF p. 29](assets/recommended/math/thomas-1-1-55-question.webp)
solution:
**Plan — we are going to…**

1. Check whether the excluded input has a reflected partner.

2. Compare the substituted formula with both parity identities.

**The trick**

The shifted pole at input 1 breaks domain symmetry about zero. Reflecting across the line through the pole is not the even-function test.

**What you need to know**

First check that the domain allows each input together with its negative. Then substitute the negative input everywhere. Even means equal outputs; odd means opposite outputs:

\\[
f(-x)=f(x)\\quad\\text{(even)}.
\\]



\\[
f(-x)=-f(x)\\quad\\text{(odd)}.
\\]



**Step-by-step solution**

1. **Find the domain.**

\\[
h(t)=\\frac1{t-1},\\qquad D=\\mathbb R\\setminus\\{1\\}.
\\]

Input −1 is allowed, but its opposite 1 is not. This already rules out both even and odd.

2. **Confirm algebraically.**

\\[
h(-t)=\\frac1{-t-1}=-\\frac1{t+1}.
\\]

This is neither of the original parity comparison rules:

\\[
h(t)=\\frac1{t-1},\\qquad-h(t)=-\\frac1{t-1}.
\\]

3. **Conclude.** The function is **neither even nor odd**.

**Use this method again**

A shifted rational function may fail parity at the domain stage; if necessary, confirm by substituting opposite allowed inputs.

**Check**

Even at zero the odd identity fails:

\\[
h(0)=-1\\ne0.
\\]

For a pair of allowed opposite inputs:

\\[
h(2)=1,\\qquad h(-2)=-\\frac13.
\\]

These are neither equal nor opposite.
:::

:::mcq
id: thomas-1-1-57
title: Thomas §1.1 · Exercise 57
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 57 · PDF p. 29](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Is the original function even, odd, or neither?
- [ ] a | Even
- [ ] b | Odd
- [ ] c | Both even and odd
- [x] d | Neither
explanation: h(t)=2t+1 has h(−t)=−2t+1, which is neither h(t) nor −h(t) for all t.
hint: Work through every subpart in the original question.
example:
![Thomas §1.1 · Exercise 57 · PDF p. 29](assets/recommended/math/thomas-1-1-57-context-1.webp)

![Thomas §1.1 · Exercise 57 · PDF p. 29](assets/recommended/math/thomas-1-1-57-question.webp)
solution:
**Plan — we are going to…**

1. Substitute the negative input into the linear rule.

2. Compare the constant term in both proposed identities.

**The trick**

The linear term changes sign but the constant +1 does not. A mixture of these parts is neither even nor odd.

**What you need to know**

First check that the domain allows each input together with its negative. Then substitute the negative input everywhere. Even means equal outputs; odd means opposite outputs:

\\[
f(-x)=f(x)\\quad\\text{(even)}.
\\]



\\[
f(-x)=-f(x)\\quad\\text{(odd)}.
\\]



**Step-by-step solution**

1. **State the domain and rule.**

\\[
h(t)=2t+1,\\qquad D=\\mathbb R.
\\]

2. **Test evenness.**

\\[
h(-t)=-2t+1.
\\]

This differs from the original rule for general inputs:

\\[
-2t+1\\ne2t+1.
\\]

3. **Test oddness.** Negate the entire original output:

\\[
-h(t)=-(2t+1)=-2t-1.
\\]

Its constant differs from that of the substituted rule, so the function is **neither even nor odd**.

**Use this method again**

For a polynomial containing both a nonzero constant and an odd-power term, test both parity identities; changing only the variable term is insufficient.

**Check**

Use input 1 and its negative:

\\[
h(1)=3,\\qquad h(-1)=-1.
\\]

The two outputs are neither equal nor negatives of one another.
:::

:::mcq
id: past-calculus-2006-q1-1
title: Past paper · IUG Calculus A 2006 · First midterm · Q1(1) · 2006
kicker: PAST PAPER · The Islamic University of Gaza Calculus A first midterm (5 Nov 2006)
reference: [The Islamic University of Gaza Calculus A first midterm (5 Nov 2006), p. 1](https://www.scribd.com/document/963105786/fm-5-11-2006)
question: The lines y=2x and 4y+2x=1 are:
- [ ] a | Parallel
- [x] b | Perpendicular
- [ ] c | Neither parallel nor perpendicular
- [ ] d | The same line
explanation: Correct answer: Perpendicular
hint: Review the original paper and the lesson concepts before retrying.
solution:
**Plan — we are going to…**

1. Write both line slopes in slope-intercept form.

2. Multiply the slopes to test perpendicularity.

**The trick**

The second line is not already solved for the vertical variable. Divide its input coefficient by the vertical-variable coefficient before comparing slopes.

**What you need to know**

For two nonvertical lines, equal slopes mean parallel lines; a slope product of −1 means perpendicular lines.

**Step-by-step solution**

1. **Read the first slope.**

\\[
y=2x\\quad\\Longrightarrow\\quad m_1=2.
\\]

2. **Rearrange the second line.** Subtract the horizontal term and divide by 4:

\\[
4y+2x=1\\quad\\Longrightarrow\\quad4y=1-2x.
\\]



\\[
y=\\frac14-\\frac12x\\quad\\Longrightarrow\\quad m_2=-\\frac12.
\\]

3. **Multiply the slopes.**

\\[
m_1m_2=2\\left(-\\frac12\\right)=-1.
\\]

Therefore the lines are **perpendicular**.

**Use this method again**

Solve each nonvertical line for the output variable, read the slopes, then compare equality or a product of −1.

**Check**

Direction vectors are (1,2) and (2,−1). Their scalar product is zero:

\\[
(1)(2)+(2)(-1)=0.
\\]

This independently confirms a right angle.
:::

:::mcq
id: past-calculus-2006-q1-2
title: Past paper · IUG Calculus A 2006 · First midterm · Q1(2) · 2006
kicker: PAST PAPER · The Islamic University of Gaza Calculus A first midterm (5 Nov 2006)
reference: [The Islamic University of Gaza Calculus A first midterm (5 Nov 2006), p. 1](https://www.scribd.com/document/963105786/fm-5-11-2006)
question: Determine the parity of f(x)=(|x|+sec x)/sin x on its domain.
- [x] a | Odd
- [ ] b | Even
- [ ] c | Both odd and even
- [ ] d | Neither
explanation: Correct answer: Odd
hint: Review the original paper and the lesson concepts before retrying.
solution:
**Plan — we are going to…**

1. Check the expression’s domain under opposite inputs.

2. Use the parity of the numerator and denominator.

**The trick**

The numerator is even but the sine denominator is odd. The resulting quotient is odd on its symmetric domain.

**What you need to know**

Absolute value and secant are even; sine is odd. Secant requires nonzero cosine and the quotient requires nonzero sine:

\\[
|-x|=|x|,\\quad\\sec(-x)=\\sec x,\\quad\\sin(-x)=-\\sin x.
\\]



**Step-by-step solution**

1. **State the allowed inputs.**

\\[
f(x)=\\frac{|x|+\\sec x}{\\sin x}.
\\]

Both the secant and the denominator must be defined:

\\[
\\cos x\\ne0,\\qquad\\sin x\\ne0.
\\]

Equivalently exclude integer multiples of a half-turn quarter:

\\[
x\\ne\\frac{n\\pi}{2},\\qquad n\\in\\mathbb Z.
\\]

These exclusions are symmetric about zero.

2. **Substitute the negative input.**

\\[
f(-x)=\\frac{|-x|+\\sec(-x)}{\\sin(-x)}=\\frac{|x|+\\sec x}{-\\sin x}.
\\]

3. **Factor the minus sign.**

\\[
f(-x)=-\\frac{|x|+\\sec x}{\\sin x}=-f(x).
\\]

The function is **odd**.

**Use this method again**

For parity of a trigonometric quotient, check the domain, then use the parity of each complete numerator and denominator.

**Check**

At opposite allowed inputs, using radians:

\\[
f\\!\\left(\\frac\\pi4\\right)=2+\\frac{\\pi\\sqrt2}{4}.
\\]



\\[
f\\!\\left(-\\frac\\pi4\\right)=-2-\\frac{\\pi\\sqrt2}{4}.
\\]

The outputs are opposite, matching the symbolic proof.
:::

:::mcq
id: past-calculus-2006-q1-3
title: Past paper · IUG Calculus A 2006 · First midterm · Q1(3) · 2006
kicker: PAST PAPER · The Islamic University of Gaza Calculus A first midterm (5 Nov 2006)
reference: [The Islamic University of Gaza Calculus A first midterm (5 Nov 2006), p. 1](https://www.scribd.com/document/963105786/fm-5-11-2006)
question: Find the domain of f(x)=sqrt(4−x²)/(x−1).
- [ ] a | (−2,2)
- [ ] b | [−2,2]
- [x] c | [−2,1)∪(1,2]
- [ ] d | (−∞,2]∪[2,∞)
explanation: Correct answer: [−2,1)∪(1,2]
hint: Review the original paper and the lesson concepts before retrying.
solution:
**Plan — we are going to…**

1. Keep the radical real.

2. Remove the denominator zero from the resulting closed interval.

**The trick**

The radical endpoints −2 and 2 are allowed. Input 1 is an interior hole because only it makes the denominator zero.

**What you need to know**

A square-root radicand must be nonnegative; a denominator must be nonzero. Both conditions must hold at the same time.

**Step-by-step solution**

1. **Write the restrictions from the original rule.**

\\[
f(x)=\\frac{\\sqrt{4-x^2}}{x-1}.
\\]



\\[
4-x^2\\ge0,\\qquad x-1\\ne0.
\\]

2. **Solve the radical inequality.**

\\[
x^2\\le4\\quad\\Longrightarrow\\quad-2\\le x\\le2.
\\]

3. **Exclude the denominator zero.**

\\[
x\\ne1.
\\]

Split the permitted interval at this hole. The domain is:

\\[
[-2,1)\\cup(1,2].
\\]

**Use this method again**

For a root over a linear denominator, first find the root’s interval, then remove the denominator’s forbidden input.

**Check**

Both outer endpoints give a defined zero output:

\\[
f(-2)=\\frac0{-3}=0,\\qquad f(2)=\\frac01=0.
\\]

At input 1 the denominator is zero while the numerator is nonzero, so it is excluded.
:::`};export{e as default};