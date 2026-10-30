var e={id:`calculus-2.5`,title:`Thomas Calculus §2.5 Practice`,summary:`Thomas' Calculus §2.5 · original textbook exercises and verified practice.`,subjectId:`mathematics`,reward:0,status:`published`,authoringSource:`:::mcq
id: thomas-2-5-1
title: Thomas §2.5 · Exercise 1
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 1 · PDF p. 99](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | Continuous throughout [−1,3].
- [ ] b | Discontinuous only at x=0.
- [ ] c | Discontinuous at every corner and at both endpoints.
- [x] d | Discontinuous only at x=2, where the graph has a hole.
explanation: The curve has a removable hole at x=2, so f is not defined there and fails continuity. The curve is continuous elsewhere, using one-sided continuity at the endpoints −1 and 3.
hint: Work through every subpart in the original question.
example:
![Thomas §2.5 · Exercise 1 · PDF p. 99](assets/recommended/math/thomas-2-5-1-context-1.webp)

![Thomas §2.5 · Exercise 1 · PDF p. 99](assets/recommended/math/thomas-2-5-1-question.webp)
solution:
**Plan — we are going to…**

1. Find holes or breaks on the closed interval.
2. Check endpoint values using one-sided approaches.
3. Identify the exact point that fails continuity.

**The trick**

The smooth-looking curve still has an open hole at two. A finite limit cannot replace a missing value automatically.

**What you need to know**

Continuity at a point requires a defined function value, an existing finite limit, and equality between them: 

\\[
\\lim_{x\\to c}f(x)=f(c).
\\]

 At a domain endpoint use the available one-sided limit.

**Step-by-step solution**

1. **Inspect the interior.** The only open point is at 

\\[
(2,1).
\\]

 Thus the neighboring curve has limit one, but the function has no value at input two.

2. **Apply the continuity test there.** 

\\[
\\lim_{x\\to2}f(x)=1,\\qquad f(2)\\text{ is undefined}.
\\]

 Continuity fails at two.

3. **Check the rest of the interval.** The curve has no other gaps or jumps. Its filled endpoints agree with their available one-sided limits. Therefore it is continuous everywhere else on the specified interval, but not on the entire interval.

**Use this method again**

Inspect open holes as well as visible jumps; a function must actually include its limiting point to be continuous.

**Check**

Filling only the hole with 

\\[
f(2)=1
\\]

 would produce an unbroken curve. That confirms the discontinuity is removable.
:::

:::mcq
id: thomas-2-5-3
title: Thomas §2.5 · Exercise 3
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 3 · PDF p. 99](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | Discontinuous at the endpoints only.
- [x] b | Continuous throughout [−1,3], including both corners.
- [ ] c | Discontinuous at x=0 and x=1 because of the corners.
- [ ] d | Discontinuous at x=1 and x=2.
explanation: All line segments meet with matching values and there are no holes or jumps. Corners can prevent differentiability but do not prevent continuity. Endpoint continuity is one-sided.
hint: Work through every subpart in the original question.
example:
![Thomas §2.5 · Exercise 3 · PDF p. 99](assets/recommended/math/thomas-2-5-3-context-1.webp)

![Thomas §2.5 · Exercise 3 · PDF p. 99](assets/recommended/math/thomas-2-5-3-question.webp)
solution:
**Plan — we are going to…**

1. Trace the connected line segments.
2. Check their joining heights.
3. Check the two filled endpoints.

**The trick**

A sharp corner affects slope, but it does not by itself break continuity.

**What you need to know**

Continuity at a point requires a defined function value, an existing finite limit, and equality between them: 

\\[
\\lim_{x\\to c}f(x)=f(c).
\\]

 At a domain endpoint use the available one-sided limit.

**Step-by-step solution**

1. **Check the first join.** Both neighboring segments meet at the filled point 

\\[
(1,1).
\\]

 The left limit, right limit and value all equal one.

2. **Check the next join.** At 

\\[
(2,2)
\\]

 the rising segment meets the horizontal segment. Both limits and the function value equal two.

3. **Check endpoints and interiors.** Each line segment is continuous; the filled endpoints at inputs minus one and three agree with their one-sided limits. Hence the graph is continuous on 

\\[
[-1,3].
\\]

**Use this method again**

At every join compare heights, not slopes. Then use one-sided checks at the domain endpoints.

**Check**

You can trace the whole plotted curve from the left filled endpoint to the right filled endpoint without crossing a hole or jump; the two corner heights match exactly.
:::

:::mcq
id: thomas-2-5-5
title: Thomas §2.5 · Exercise 5
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 5 · PDF p. 99](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | (a) No; (b) 0; (c) No; (d) No.
- [ ] b | (a) Yes, f(−1)=−1; (b) 0; (c) No; (d) No.
- [ ] c | (a) Yes, f(−1)=0; (b) DNE; (c) No; (d) No.
- [x] d | (a) Yes, f(−1)=0; (b) 0; (c) Yes; (d) Yes.
explanation: The branch x²−1 includes x=−1, so f(−1)=0. Its right-hand limit there is also 0. The endpoint value and one-sided limit agree, establishing continuity at −1.
hint: Work through every subpart in the original question.
example:
![Thomas §2.5 · Exercise 5 · PDF p. 99](assets/recommended/math/thomas-2-5-5-context-1.webp)

![Thomas §2.5 · Exercise 5 · PDF p. 99](assets/recommended/math/thomas-2-5-5-question.webp)
solution:
**Plan — we are going to…**

1. Evaluate the branch that includes minus one.
2. Take the approach from within the domain.
3. Compare value and right-hand limit.

**The trick**

The left endpoint requires right continuity only. Inputs smaller than minus one are outside the stated domain.

**What you need to know**

Continuity at a point requires a defined function value, an existing finite limit, and equality between them: 

\\[
\\lim_{x\\to c}f(x)=f(c).
\\]

 At a domain endpoint use the available one-sided limit.

**Step-by-step solution**

1. **Part (a), value.** The first branch includes minus one and gives 

\\[
f(-1)=(-1)^2-1=0.
\\]

 So the value exists.

2. **Part (b), right-hand limit.** The same polynomial controls nearby permitted inputs: 

\\[
\\lim_{x\\to-1^+}f(x)=(-1)^2-1=0.
\\]

 The limit exists.

3. **Parts (c), (d).** The right-hand limit equals the function value. Therefore yes, the required equality holds and the function is continuous at this endpoint.

**Use this method again**

At an endpoint, use the formula on the domain side and compare its limit with the included endpoint value.

**Check**

The graph begins at its filled point 

\\[
( -1,0).
\\]

 No alternate branch approaches that endpoint from inside the domain.
:::

:::mcq
id: thomas-2-5-7
title: Thomas §2.5 · Exercise 7
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 7 · PDF p. 99](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | (a) No; (b) Yes, because the limit exists.
- [x] b | (a) No, f(2) is undefined; (b) No, it is not continuous at 2.
- [ ] c | (a) Yes, f(2)=0; (b) Yes.
- [ ] d | (a) Yes, f(2)=1; (b) No.
explanation: Neither 1<x<2 nor 2<x<3 includes x=2. The common limit is 0, but the missing function value prevents continuity.
hint: Work through every subpart in the original question.
example:
![Thomas §2.5 · Exercise 7 · PDF p. 99](assets/recommended/math/thomas-2-5-7-context-1.webp)

![Thomas §2.5 · Exercise 7 · PDF p. 99](assets/recommended/math/thomas-2-5-7-question.webp)
solution:
**Plan — we are going to…**

1. Read the strict inequalities in the piecewise definition.
2. Check the value at two.
3. Compare this with the common neighboring limit.

**The trick**

Neither neighboring branch includes input two. Matching approach values alone do not establish continuity.

**What you need to know**

Continuity at a point requires a defined function value, an existing finite limit, and equality between them: 

\\[
\\lim_{x\\to c}f(x)=f(c).
\\]

 At a domain endpoint use the available one-sided limit.

**Step-by-step solution**

1. **Part (a), inspect the rules.** One branch requires inputs strictly between one and two; the next requires inputs strictly between two and three. Neither permits two. Thus 

\\[
f(2)\\text{ is undefined}.
\\]

2. **Find the neighboring limits.** 

\\[
\\lim_{x\\to2^-}(-2x+4)=0,\\qquad\\lim_{x\\to2^+}0=0.
\\]

 Hence the two-sided limit is zero.

3. **Part (b), apply the test.** The limit exists, but there is no function value to match it. The function is not continuous at two.

**Use this method again**

For a piecewise join, test interval inclusion separately from the neighboring formulas.

**Check**

Assigning just 

\\[
f(2)=0
\\]

 would fill the hole and restore continuity; choosing any other value would leave it discontinuous.
:::

:::mcq
id: thomas-2-5-9
title: Thomas §2.5 · Exercise 9
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 9 · PDF p. 99](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | Define f(2)=1.
- [ ] b | Define f(2)=2.
- [ ] c | No definition can make it continuous.
- [x] d | Define f(2)=0.
explanation: From the left, −2x+4 tends to 0. From the right the branch is 0. Assigning the common limit f(2)=0 fills the removable hole.
hint: Work through every subpart in the original question.
example:
![Thomas §2.5 · Exercise 9 · PDF p. 99](assets/recommended/math/thomas-2-5-9-context-1.webp)

![Thomas §2.5 · Exercise 9 · PDF p. 99](assets/recommended/math/thomas-2-5-9-question.webp)
solution:
**Plan — we are going to…**

1. Evaluate both neighboring formulas at two.
2. Confirm the limits agree.
3. Assign their common value to the missing point.

**The trick**

Only the value at the hole needs changing; the neighboring branches already agree.

**What you need to know**

Continuity at a point requires a defined function value, an existing finite limit, and equality between them: 

\\[
\\lim_{x\\to c}f(x)=f(c).
\\]

 At a domain endpoint use the available one-sided limit.

**Step-by-step solution**

1. **Left side.** 

\\[
\\lim_{x\\to2^-}f(x)=\\lim_{x\\to2^-}(-2x+4)=-4+4=0.
\\]

2. **Right side.** The branch is constantly zero, so 

\\[
\\lim_{x\\to2^+}f(x)=0.
\\]

3. **Fill the hole.** The common limit is zero. Define 

\\[
f(2)=0
\\]

 to make the extended function continuous at two.

**Use this method again**

A removable hole is repaired by assigning the common finite one-sided limit.

**Check**

After this assignment the left limit, right limit and value are all zero, satisfying all parts of the continuity test.
:::

:::mcq
id: thomas-2-5-11
title: Thomas §2.5 · Exercise 11
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 11 · PDF p. 99](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | The graph is continuous at 0 and 1.
- [x] b | x=0 is removable; x=1 is nonremovable.
- [ ] c | x=0 is nonremovable; x=1 is removable.
- [ ] d | Both x=0 and x=1 are removable.
explanation: In the referenced §2.4 graph, the limit at 0 is 0 but f(0)=1; redefining f(0)=0 fixes it. At 1 the one-sided limits 1 and 0 differ, so changing one function value cannot fix the jump. Other points are continuous relative to the shown domain.
hint: Work through every subpart in the original question.
example:
![Thomas §2.5 · Exercise 11 · PDF p. 99](assets/recommended/math/thomas-2-5-11-context-1.webp)

![Thomas §2.5 · Exercise 11 · PDF p. 88](assets/recommended/math/thomas-2-5-11-context-2.webp)

![Thomas §2.5 · Exercise 11 · PDF p. 99](assets/recommended/math/thomas-2-5-11-question.webp)
solution:
**Plan — we are going to…**

1. Return to the graph in §2.4 Exercise 1.
2. Compare limit and value at each special point.
3. Distinguish a misplaced dot from a jump.

**The trick**

A misplaced isolated dot can be repaired; two different neighboring heights cannot be repaired by choosing one dot.

**What you need to know**

Continuity at a point requires a defined function value, an existing finite limit, and equality between them: 

\\[
\\lim_{x\\to c}f(x)=f(c).
\\]

 At a domain endpoint use the available one-sided limit.

**Step-by-step solution**

1. **At zero, compare value and limit.** The curve tends to zero on both sides, but the filled dot is at one: 

\\[
\\lim_{x\\to0}f(x)=0,\\qquad f(0)=1.
\\]

 This discontinuity is removable by redefining the value to zero.

2. **At one, compare the two sides.** 

\\[
\\lim_{x\\to1^-}f(x)=1,\\qquad\\lim_{x\\to1^+}f(x)=0.
\\]

 The jump makes the two-sided limit nonexistent. It is not removable.

3. **Elsewhere.** The other interior points lie on continuous branches, and the domain endpoints have the appropriate one-sided continuity. The only failures are zero and one.

**Use this method again**

At every suspect point, ask first whether the two sides agree; only then decide whether changing a value can repair it.

**Check**

Changing the dot at one cannot make it equal both zero and one. At zero, a single replacement does match both sides, verifying the different classifications.
:::

:::mcq
id: thomas-2-5-13
title: Thomas §2.5 · Exercise 13
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 13 · PDF p. 99](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: At which points is the original function continuous?
- [ ] a | \\(\\mathbb R\\)
- [ ] b | \\((2,\\infty)\\)
- [ ] c | \\(\\mathbb R\\setminus\\{0\\}\\)
- [x] d | \\(\\mathbb R\\setminus\\{2\\}\\)
explanation: The reciprocal term is continuous except where x−2=0. The polynomial term adds no further restriction.
hint: Work through every subpart in the original question.
example:
![Thomas §2.5 · Exercise 13 · PDF p. 99](assets/recommended/math/thomas-2-5-13-context-1.webp)

![Thomas §2.5 · Exercise 13 · PDF p. 99](assets/recommended/math/thomas-2-5-13-question.webp)
solution:
**Plan — we are going to…**

1. Identify the operations in a reciprocal term.
2. Solve any restrictions on those operations.
3. State the complete continuity set.

**The trick**

The reciprocal denominator, not the polynomial term, restricts the input.

**What you need to know**

Polynomials, absolute value, sine, cosine and real odd roots are continuous on their domains. Sums/compositions preserve continuity; quotients require nonzero denominators. Square roots require nonnegative radicands.

**Step-by-step solution**

1. **Write the function.** 

\\[
y=\\frac1{x-2}-3x.
\\]

2. **Apply the relevant restriction.** 

\\[
x-2\\ne0.
\\]

3. **Solve it and state the result.** 

\\[
x\\ne2.
\\]

 The function is continuous at every permitted point: 

\\[
\\mathbb R\\setminus\\{2\\}.
\\]

**Use this method again**

List restrictions from the original operations, solve them together, and use continuity of the allowed composition.

**Check**

Substituting two makes the reciprocal undefined; every other input leaves a continuous reciprocal plus polynomial.
:::

:::mcq
id: thomas-2-5-15
title: Thomas §2.5 · Exercise 15
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 15 · PDF p. 99](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: At which points is the original function continuous?
- [ ] a | \\((1,3)\\)
- [x] b | \\(\\mathbb R\\setminus\\{1,3\\}\\)
- [ ] c | \\(\\mathbb R\\setminus\\{-1\\}\\)
- [ ] d | \\(\\mathbb R\\)
explanation: Factor x²−4x+3=(x−1)(x−3). The rational function is continuous wherever this denominator is nonzero.
hint: Work through every subpart in the original question.
example:
![Thomas §2.5 · Exercise 15 · PDF p. 99](assets/recommended/math/thomas-2-5-15-context-1.webp)

![Thomas §2.5 · Exercise 15 · PDF p. 99](assets/recommended/math/thomas-2-5-15-question.webp)
solution:
**Plan — we are going to…**

1. Identify the operations in a rational function.
2. Solve any restrictions on those operations.
3. State the complete continuity set.

**The trick**

Factor the full denominator; do not exclude the numerator zero.

**What you need to know**

Polynomials, absolute value, sine, cosine and real odd roots are continuous on their domains. Sums/compositions preserve continuity; quotients require nonzero denominators. Square roots require nonnegative radicands.

**Step-by-step solution**

1. **Write the function.** 

\\[
y=\\frac{x+1}{x^2-4x+3}.
\\]

2. **Apply the relevant restriction.** 

\\[
x^2-4x+3=(x-1)(x-3)\\ne0.
\\]

3. **Solve it and state the result.** 

\\[
x\\ne1,\\quad x\\ne3.
\\]

 The function is continuous at every permitted point: 

\\[
\\mathbb R\\setminus\\{1,3\\}.
\\]

**Use this method again**

List restrictions from the original operations, solve them together, and use continuity of the allowed composition.

**Check**

The numerator is nonzero at both excluded inputs, so neither restriction disappears by cancellation.
:::

:::mcq
id: thomas-2-5-17
title: Thomas §2.5 · Exercise 17
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 17 · PDF p. 99](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: At which points is the original function continuous?
- [ ] a | All real x except 1.
- [ ] b | Only x≥1.
- [ ] c | All real x except integer multiples of π.
- [x] d | All real x.
explanation: Both |x−1| and sin x are continuous on the real line, so their sum is continuous everywhere.
hint: Work through every subpart in the original question.
example:
![Thomas §2.5 · Exercise 17 · PDF p. 99](assets/recommended/math/thomas-2-5-17-context-1.webp)

![Thomas §2.5 · Exercise 17 · PDF p. 99](assets/recommended/math/thomas-2-5-17-question.webp)
solution:
**Plan — we are going to…**

1. Identify the operations in an absolute-value sum.
2. Solve any restrictions on those operations.
3. State the complete continuity set.

**The trick**

The corner in the absolute-value term does not break continuity.

**What you need to know**

Polynomials, absolute value, sine, cosine and real odd roots are continuous on their domains. Sums/compositions preserve continuity; quotients require nonzero denominators. Square roots require nonnegative radicands.

**Step-by-step solution**

1. **Write the function.** 

\\[
y=|x-1|+\\sin x.
\\]

2. **Apply the relevant restriction.** 

\\[
|x-1|\\text{ and }\\sin x\\text{ are continuous for every real }x.
\\]

3. **Solve it and state the result.** 

\\[
x\\in\\mathbb R.
\\]

 The function is continuous at every permitted point: 

\\[
\\mathbb R.
\\]

**Use this method again**

List restrictions from the original operations, solve them together, and use continuity of the allowed composition.

**Check**

At the apparent corner one, both sides of the absolute-value term tend to zero and the sine term tends to sine of one.
:::

:::mcq
id: thomas-2-5-19
title: Thomas §2.5 · Exercise 19
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 19 · PDF p. 99](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: At which points is the original function continuous?
- [ ] a | \\(\\mathbb R\\setminus\\{\\pi/2+k\\pi:k\\in\\mathbb Z\\}\\)
- [x] b | \\(\\mathbb R\\setminus\\{0\\}\\)
- [ ] c | \\(\\mathbb R\\)
- [ ] d | \\((0,\\infty)\\)
explanation: Cosine is continuous everywhere, and division is continuous wherever x≠0.
hint: Work through every subpart in the original question.
example:
![Thomas §2.5 · Exercise 19 · PDF p. 99](assets/recommended/math/thomas-2-5-19-context-1.webp)

![Thomas §2.5 · Exercise 19 · PDF p. 99](assets/recommended/math/thomas-2-5-19-question.webp)
solution:
**Plan — we are going to…**

1. Identify the operations in a trigonometric quotient.
2. Solve any restrictions on those operations.
3. State the complete continuity set.

**The trick**

Cosine is continuous everywhere; only division by the input causes a restriction.

**What you need to know**

Polynomials, absolute value, sine, cosine and real odd roots are continuous on their domains. Sums/compositions preserve continuity; quotients require nonzero denominators. Square roots require nonnegative radicands.

**Step-by-step solution**

1. **Write the function.** 

\\[
y=\\frac{\\cos x}{x}.
\\]

2. **Apply the relevant restriction.** 

\\[
x\\ne0.
\\]

3. **Solve it and state the result.** 

\\[
x\\ne0.
\\]

 The function is continuous at every permitted point: 

\\[
(-\\infty,0)\\cup(0,\\infty).
\\]

**Use this method again**

List restrictions from the original operations, solve them together, and use continuity of the allowed composition.

**Check**

At zero the numerator is one while the denominator is zero, confirming a genuine excluded point.
:::

:::mcq
id: thomas-2-5-21
title: Thomas §2.5 · Exercise 21
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 21 · PDF p. 99](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: At which points is the original function continuous?
- [ ] a | All real x except \\(x=\\pi/4+k\\pi/2\\).
- [ ] b | All real x.
- [ ] c | Only x>0.
- [x] d | All real x except \\(x=k\\pi/2\\), k integer.
explanation: csc(2x)=1/sin(2x), so it is continuous exactly when sin(2x)≠0, or x≠kπ/2.
hint: Work through every subpart in the original question.
example:
![Thomas §2.5 · Exercise 21 · PDF p. 99](assets/recommended/math/thomas-2-5-21-context-1.webp)

![Thomas §2.5 · Exercise 21 · PDF p. 99](assets/recommended/math/thomas-2-5-21-question.webp)
solution:
**Plan — we are going to…**

1. Identify the operations in a cosecant composition.
2. Solve any restrictions on those operations.
3. State the complete continuity set.

**The trick**

Cosecant is reciprocal sine, so all zeros of sine of twice the input must be excluded.

**What you need to know**

Polynomials, absolute value, sine, cosine and real odd roots are continuous on their domains. Sums/compositions preserve continuity; quotients require nonzero denominators. Square roots require nonnegative radicands.

**Step-by-step solution**

1. **Write the function.** 

\\[
y=\\csc(2x).
\\]

2. **Apply the relevant restriction.** 

\\[
\\sin(2x)\\ne0.
\\]

3. **Solve it and state the result.** 

\\[
2x\\ne k\\pi,\\quad x\\ne\\frac{k\\pi}2,\\quad k\\in\\mathbb Z.
\\]

 The function is continuous at every permitted point: 

\\[
\\mathbb R\\setminus\\{k\\pi/2:k\\in\\mathbb Z\\}.
\\]

**Use this method again**

List restrictions from the original operations, solve them together, and use continuity of the allowed composition.

**Check**

For instance zero and pi over two both make the sine denominator zero, confirming the spacing of the exclusions.
:::

:::mcq
id: thomas-2-5-23
title: Thomas §2.5 · Exercise 23
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 23 · PDF p. 99](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: At which points is the original function continuous?
- [ ] a | All real x except \\(x=k\\pi\\).
- [x] b | All real x except \\(x=\\pi/2+k\\pi\\), k integer.
- [ ] c | All real x except x=0.
- [ ] d | All real x.
explanation: x²+1 is always positive; only the tangent factor is undefined, where cos x=0.
hint: Work through every subpart in the original question.
example:
![Thomas §2.5 · Exercise 23 · PDF p. 99](assets/recommended/math/thomas-2-5-23-context-1.webp)

![Thomas §2.5 · Exercise 23 · PDF p. 99](assets/recommended/math/thomas-2-5-23-question.webp)
solution:
**Plan — we are going to…**

1. Identify the operations in a tangent quotient.
2. Solve any restrictions on those operations.
3. State the complete continuity set.

**The trick**

The polynomial denominator never vanishes; tangent introduces the actual forbidden inputs.

**What you need to know**

Polynomials, absolute value, sine, cosine and real odd roots are continuous on their domains. Sums/compositions preserve continuity; quotients require nonzero denominators. Square roots require nonnegative radicands.

**Step-by-step solution**

1. **Write the function.** 

\\[
y=\\frac{x\\tan x}{x^2+1}.
\\]

2. **Apply the relevant restriction.** 

\\[
x^2+1>0,\\qquad\\cos x\\ne0.
\\]

3. **Solve it and state the result.** 

\\[
x\\ne\\frac\\pi2+k\\pi,\\quad k\\in\\mathbb Z.
\\]

 The function is continuous at every permitted point: 

\\[
\\mathbb R\\setminus\\{\\pi/2+k\\pi:k\\in\\mathbb Z\\}.
\\]

**Use this method again**

List restrictions from the original operations, solve them together, and use continuity of the allowed composition.

**Check**

Zero is allowed: both the tangent and whole quotient equal zero there. The first forbidden positive input is pi over two.
:::

:::mcq
id: thomas-2-5-25
title: Thomas §2.5 · Exercise 25
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 25 · PDF p. 99](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: At which points is the original function continuous?
- [ ] a | \\((-3/2,\\infty)\\)
- [ ] b | \\([3/2,\\infty)\\)
- [ ] c | \\(\\mathbb R\\)
- [x] d | \\([-3/2,\\infty)\\)
explanation: The square-root argument 2x+3 must be nonnegative. On its domain x≥−3/2 the function is continuous, including right continuity at the endpoint.
hint: Work through every subpart in the original question.
example:
![Thomas §2.5 · Exercise 25 · PDF p. 99](assets/recommended/math/thomas-2-5-25-context-1.webp)

![Thomas §2.5 · Exercise 25 · PDF p. 99](assets/recommended/math/thomas-2-5-25-question.webp)
solution:
**Plan — we are going to…**

1. Identify the operations in a square root.
2. Solve any restrictions on those operations.
3. State the complete continuity set.

**The trick**

A square root permits its radicand to equal zero; the endpoint belongs to the domain.

**What you need to know**

Polynomials, absolute value, sine, cosine and real odd roots are continuous on their domains. Sums/compositions preserve continuity; quotients require nonzero denominators. Square roots require nonnegative radicands.

**Step-by-step solution**

1. **Write the function.** 

\\[
y=\\sqrt{2x+3}.
\\]

2. **Apply the relevant restriction.** 

\\[
2x+3\\ge0.
\\]

3. **Solve it and state the result.** 

\\[
x\\ge-\\frac32.
\\]

 The function is continuous at every permitted point: 

\\[
[-3/2,\\infty).
\\]

**Use this method again**

List restrictions from the original operations, solve them together, and use continuity of the allowed composition.

**Check**

At minus three-halves the root is zero and the right-hand limit is zero; endpoint continuity therefore holds.
:::

:::mcq
id: thomas-2-5-27
title: Thomas §2.5 · Exercise 27
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 27 · PDF p. 99](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: At which points is the original function continuous?
- [ ] a | Only x>0.
- [x] b | All real x.
- [ ] c | Only x≥1/2.
- [ ] d | All real x except 1/2.
explanation: A real cube root is defined and continuous for positive, zero and negative inputs. Composing it with 2x−1 remains continuous everywhere.
hint: Work through every subpart in the original question.
example:
![Thomas §2.5 · Exercise 27 · PDF p. 99](assets/recommended/math/thomas-2-5-27-context-1.webp)

![Thomas §2.5 · Exercise 27 · PDF p. 99](assets/recommended/math/thomas-2-5-27-question.webp)
solution:
**Plan — we are going to…**

1. Identify the operations in a cube root.
2. Solve any restrictions on those operations.
3. State the complete continuity set.

**The trick**

An odd root accepts negative inputs; no nonnegativity restriction is needed.

**What you need to know**

Polynomials, absolute value, sine, cosine and real odd roots are continuous on their domains. Sums/compositions preserve continuity; quotients require nonzero denominators. Square roots require nonnegative radicands.

**Step-by-step solution**

1. **Write the function.** 

\\[
y=(2x-1)^{1/3}.
\\]

2. **Apply the relevant restriction.** 

\\[
2x-1\\in\\mathbb R\\text{ for every real }x.
\\]

3. **Solve it and state the result.** 

\\[
x\\in\\mathbb R.
\\]

 The function is continuous at every permitted point: 

\\[
\\mathbb R.
\\]

**Use this method again**

List restrictions from the original operations, solve them together, and use continuity of the allowed composition.

**Check**

At input zero the radicand is minus one, whose real cube root exists and equals minus one. This rules out the erroneous square-root restriction.
:::

:::mcq
id: thomas-2-5-29
title: Thomas §2.5 · Exercise 29
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 29 · PDF p. 99](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: At which points is the original function continuous?
- [ ] a | All real x except 3.
- [ ] b | Only x>3.
- [ ] c | All real x except −2 and 3.
- [x] d | All real x, including 3.
explanation: For x≠3, (x²−x−6)/(x−3)=x+2. Its limit at 3 is 5, exactly the separately assigned g(3)=5. Thus the extension is continuous everywhere.
hint: Work through every subpart in the original question.
example:
![Thomas §2.5 · Exercise 29 · PDF p. 99](assets/recommended/math/thomas-2-5-29-context-1.webp)

![Thomas §2.5 · Exercise 29 · PDF p. 99](assets/recommended/math/thomas-2-5-29-question.webp)
solution:
**Plan — we are going to…**

1. Factor the rational branch.
2. Compute its missing-point limit.
3. Compare with the separately assigned value.

**The trick**

A cancelled denominator leaves a hole in the original rational rule, but the separate definition may already fill it correctly.

**What you need to know**

Continuity at a point requires a defined function value, an existing finite limit, and equality between them: 

\\[
\\lim_{x\\to c}f(x)=f(c).
\\]

 At a domain endpoint use the available one-sided limit.

**Step-by-step solution**

1. **Factor the numerator.** 

\\[
x^2-x-6=(x-3)(x+2).
\\]

2. **Simplify only away from three.** 

\\[
\\frac{x^2-x-6}{x-3}=x+2\\quad(x\\ne3).
\\]

 Thus 

\\[
\\lim_{x\\to3}g(x)=5.
\\]

3. **Check the assigned point.** The definition gives 

\\[
g(3)=5.
\\]

 It matches the limit. The rational branch is continuous elsewhere, so the extended function is continuous for every real input.

**Use this method again**

Cancel to find a hole limit, then compare with the original separately defined point.

**Check**

The full piecewise function now agrees with the simple line 

\\[
g(x)=x+2
\\]

 at every input, including three; a line is continuous everywhere.
:::

:::mcq
id: thomas-2-5-31
title: Thomas §2.5 · Exercise 31
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 31 · PDF p. 99](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | The limit does not exist.
- [x] b | Limit 0; continuous at the approached point.
- [ ] c | Limit 1; continuous.
- [ ] d | Limit 0; discontinuous.
explanation: All compositions are continuous at x=π. Substitute to obtain sin(π−sinπ)=sinπ=0.
hint: Work through every subpart in the original question.
example:
![Thomas §2.5 · Exercise 31 · PDF p. 99](assets/recommended/math/thomas-2-5-31-context-1.webp)

![Thomas §2.5 · Exercise 31 · PDF p. 99](assets/recommended/math/thomas-2-5-31-question.webp)
solution:
**Plan — we are going to…**

1. Check continuity of the nested sine functions.
2. Substitute into the inner sine.
3. Evaluate the outer sine.

**The trick**

The outer sine receives the difference of the input and its sine; evaluate from the inside outward.

**What you need to know**

Sine is continuous everywhere, and sums and compositions of continuous functions stay continuous.

**Step-by-step solution**

1. **Evaluate the inner sine.** 

\\[
\\sin\\pi=0.
\\]

2. **Evaluate the outer argument.** 

\\[
x-\\sin x\\longrightarrow\\pi-0=\\pi.
\\]

3. **Evaluate the outer sine.** 

\\[
\\lim_{x\\to\\pi}\\sin(x-\\sin x)=\\sin\\pi=0.
\\]

 All operations are defined and continuous at the target, so the function is continuous there.

**Use this method again**

For nested continuous functions, evaluate the innermost expression first and work outward.

**Check**

Directly substituting pi into the original function gives zero, exactly the calculated limit; this also verifies continuity.
:::

:::mcq
id: thomas-2-5-33
title: Thomas §2.5 · Exercise 33
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 33 · PDF p. 99](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | Limit 0; continuous at y=1.
- [ ] b | Limit 1; discontinuous at y=1.
- [ ] c | The limit does not exist.
- [x] d | Limit 1; continuous at y=1.
explanation: Use sec²y−tan²y=1 to write y sec²y−tan²y−1=(y−1)sec²y. Since cos1≠0, the inside tends to 0 and the outer secant tends to sec0=1. The expression is defined and continuous at y=1.
hint: Work through every subpart in the original question.
example:
![Thomas §2.5 · Exercise 33 · PDF p. 99](assets/recommended/math/thomas-2-5-33-context-1.webp)

![Thomas §2.5 · Exercise 33 · PDF p. 99](assets/recommended/math/thomas-2-5-33-question.webp)
solution:
**Plan — we are going to…**

1. Simplify the secant/tangent identity inside the outer secant.
2. Evaluate the simplified argument at one.
3. Check both secants are defined.

**The trick**

The constant minus one combines with tangent squared using the Pythagorean identity; omitting it changes the outer argument.

**What you need to know**

The identity is 

\\[
\\sec^2 y-\\tan^2 y=1.
\\]

 Secant is continuous whenever cosine is nonzero.

**Step-by-step solution**

1. **Replace tangent squared.** 

\\[
y\\sec^2y-\\tan^2y-1=y\\sec^2y-(\\sec^2y-1)-1.
\\]

2. **Collect terms.** 

\\[
y\\sec^2y-\\tan^2y-1=(y-1)\\sec^2y.
\\]

3. **Take the inner limit.** Since cosine of one is nonzero, secant squared stays finite near one, and 

\\[
\\lim_{y\\to1}(y-1)\\sec^2y=0.
\\]

4. **Apply the outer secant.** 

\\[
\\lim_{y\\to1}\\sec(y\\sec^2y-\\tan^2y-1)=\\sec0=1.
\\]

 Both the inner and outer secants are defined nearby; the function is continuous at one.

**Use this method again**

Simplify identities inside a composition before substitution, then check each reciprocal operation is defined.

**Check**

Direct substitution in the unsimplified inner expression gives 

\\[
\\sec^2(1)-\\tan^2(1)-1=0.
\\]

 The outer value is again one.
:::

:::mcq
id: thomas-2-5-35
title: Thomas §2.5 · Exercise 35
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 35 · PDF p. 99](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | No real limit exists.
- [x] b | Limit \\(\\sqrt2/2\\); continuous at t=0.
- [ ] c | Limit 0; continuous at t=0.
- [ ] d | Limit 1; discontinuous at t=0.
explanation: At t=0, sec(2t)=1, so √(19−3sec(2t))=4 and the angle is π/4. The cosine is √2/2. All denominators and the square-root argument remain valid nearby, so the function is continuous there.
hint: Work through every subpart in the original question.
example:
![Thomas §2.5 · Exercise 35 · PDF p. 99](assets/recommended/math/thomas-2-5-35-context-1.webp)

![Thomas §2.5 · Exercise 35 · PDF p. 99](assets/recommended/math/thomas-2-5-35-question.webp)
solution:
**Plan — we are going to…**

1. Evaluate secant at the zero input.
2. Calculate the radicand and denominator.
3. Evaluate the outer cosine and check continuity.

**The trick**

The square root is the denominator of the cosine argument. Check it is positive, not merely defined.

**What you need to know**

Use radians. Secant requires nonzero cosine, a square root requires nonnegative radicand, and division additionally requires a nonzero denominator.

**Step-by-step solution**

1. **Evaluate the inner secant.** 

\\[
\\sec(2\\cdot0)=\\frac1{\\cos0}=1.
\\]

2. **Evaluate the radical.** 

\\[
\\sqrt{19-3\\sec0}=\\sqrt{19-3}=\\sqrt{16}=4.
\\]

 This is strictly positive.

3. **Evaluate the outer function.** 

\\[
\\lim_{t\\to0}\\cos\\left(\\frac\\pi{\\sqrt{19-3\\sec(2t)}}\\right)=\\cos\\left(\\frac\\pi4\\right)=\\frac{\\sqrt2}2.
\\]

4. **Continuity.** Cosine of twice the input remains nonzero near zero, and the radicand remains close to sixteen and positive. Thus the original expression is defined and continuous at zero.

**Use this method again**

For nested radicals in denominators, check positivity and nonzero denominators while evaluating from the inside outward.

**Check**

Direct evaluation of the original expression at zero gives the same cosine of pi over four. This verifies value equals limit, not just a formal substitution.
:::

:::mcq
id: thomas-2-5-37
title: Thomas §2.5 · Exercise 37
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 37 · PDF p. 100](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | g(3)=0
- [ ] b | g(3)=3
- [ ] c | No continuous extension exists.
- [x] d | g(3)=6
explanation: Cancel x−3 from (x²−9)/(x−3), leaving x+3 away from 3. Set g(3) equal to the limit 6.
hint: Work through every subpart in the original question.
example:
![Thomas §2.5 · Exercise 37 · PDF p. 100](assets/recommended/math/thomas-2-5-37-question.webp)
solution:
**Plan — we are going to…**

1. Factor the difference of squares.
2. Cancel the hole factor away from three.
3. Assign the resulting limit as the missing value.

**The trick**

The original denominator is zero at three; simplify to find its extension rather than substituting into the original quotient.

**What you need to know**

Continuity at a point requires a defined function value, an existing finite limit, and equality between them: 

\\[
\\lim_{x\\to c}f(x)=f(c).
\\]

 At a domain endpoint use the available one-sided limit.

**Step-by-step solution**

1. **Factor.** 

\\[
x^2-9=(x-3)(x+3).
\\]

2. **Simplify nearby inputs.** 

\\[
g(x)=\\frac{(x-3)(x+3)}{x-3}=x+3\\quad(x\\ne3).
\\]

3. **Find and assign the limit.** 

\\[
\\lim_{x\\to3}g(x)=3+3=6.
\\]

 Define 

\\[
g(3)=6.
\\]

**Use this method again**

Factor a removable quotient, cancel away from the excluded input, and fill the point with its finite limit.

**Check**

With this definition the extended graph is the full line 

\\[
y=x+3.
\\]

 Its value at three agrees with both neighboring limits.
:::

:::mcq
id: thomas-2-5-39
title: Thomas §2.5 · Exercise 39
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 39 · PDF p. 100](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | No continuous extension exists.
- [x] b | f(1)=3/2
- [ ] c | f(1)=1
- [ ] d | f(1)=2/3
explanation: Factor s³−1 and s²−1, cancel s−1, and take the limit (s²+s+1)/(s+1)→3/2.
hint: Work through every subpart in the original question.
example:
![Thomas §2.5 · Exercise 39 · PDF p. 100](assets/recommended/math/thomas-2-5-39-question.webp)
solution:
**Plan — we are going to…**

1. Factor both the difference of cubes and the difference of squares.
2. Cancel their common linear factor.
3. Evaluate the remaining quotient at one.

**The trick**

The numerator and denominator have different powers, but share the factor corresponding to the hole.

**What you need to know**

The factorization identities are 

\\[
s^3-1=(s-1)(s^2+s+1),\\qquad s^2-1=(s-1)(s+1).
\\]

**Step-by-step solution**

1. **Factor and cancel for inputs different from one.** 

\\[
\\frac{s^3-1}{s^2-1}=\\frac{(s-1)(s^2+s+1)}{(s-1)(s+1)}=\\frac{s^2+s+1}{s+1}.
\\]

2. **Evaluate the finite limit.** 

\\[
\\lim_{s\\to1}\\frac{s^2+s+1}{s+1}=\\frac{1+1+1}{1+1}=\\frac32.
\\]

3. **Define the extension.** Set 

\\[
f(1)=\\frac32.
\\]

 This gives continuity at one.

**Use this method again**

Look for shared factors in power differences; evaluate the quotient only after removing the hole factor.

**Check**

The remaining denominator equals two at the target and stays nonzero nearby. Assigning three-halves therefore matches the two-sided limit exactly.
:::

:::mcq
id: thomas-2-5-41
title: Thomas §2.5 · Exercise 41
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 41 · PDF p. 100](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | \\(a=3/4\\)
- [ ] b | \\(a=4\\)
- [ ] c | \\(a=8\\)
- [x] d | \\(a=4/3\\)
explanation: At the joining point x=3, the left limit is 3²−1=8 and the right value is 6a. Equating them gives a=4/3. Both pieces are already continuous elsewhere.
hint: Work through every subpart in the original question.
example:
![Thomas §2.5 · Exercise 41 · PDF p. 100](assets/recommended/math/thomas-2-5-41-question.webp)
solution:
**Plan — we are going to…**

1. Find the left branch limit at three.
2. Evaluate the branch that includes three.
3. Equate them and solve for the parameter.

**The trick**

Only the join can cause a discontinuity: both formulas are polynomials elsewhere.

**What you need to know**

Continuity at a point requires a defined function value, an existing finite limit, and equality between them: 

\\[
\\lim_{x\\to c}f(x)=f(c).
\\]

 At a domain endpoint use the available one-sided limit.

**Step-by-step solution**

1. **Left-hand limit.** 

\\[
\\lim_{x\\to3^-}(x^2-1)=9-1=8.
\\]

2. **Right-hand limit and value.** The branch at and above three is the linear expression, giving 

\\[
f(3)=2a(3)=6a.
\\]

3. **Match and solve.** 

\\[
6a=8\\quad\\Longrightarrow\\quad a=\\frac43.
\\]

 This makes the function continuous everywhere.

**Use this method again**

At a polynomial piecewise join, equate the approaching branch value with the branch that includes the point.

**Check**

Substitution of the parameter gives 

\\[
2(4/3)(3)=8,
\\]

 matching the left limit and the right limit.
:::

:::mcq
id: thomas-2-5-43
title: Thomas §2.5 · Exercise 43
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 43 · PDF p. 100](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | a=−6
- [x] b | a=3 or a=−2
- [ ] c | a=3
- [ ] d | a=12
explanation: The original right branch is a²x−2a. At x=2 continuity requires 2a²−2a=12. Divide by2, move6 left and factor: (a−3)(a+2)=0. Thus a=3 or a=−2.
hint: Work through every subpart in the original question.
example:
![Thomas §2.5 · Exercise 43 · PDF p. 100](assets/recommended/math/thomas-2-5-43-question.webp)
solution:
**Plan — we are going to…**

1. Read the squared parameter correctly in the first branch.
2. Match the branch values at two.
3. Solve the resulting quadratic equation.

**The trick**

The original rule contains the parameter SQUARED multiplying the input. This produces two parameter values, not the linear equation in the older explanation.

**What you need to know**

Continuity at a point requires a defined function value, an existing finite limit, and equality between them: 

\\[
\\lim_{x\\to c}f(x)=f(c).
\\]

 At a domain endpoint use the available one-sided limit.

**Step-by-step solution**

1. **Left-hand limit.** The branch below two is constant: 

\\[
\\lim_{x\\to2^-}f(x)=12.
\\]

2. **Right-hand limit and value.** The branch at and above two is 

\\[
a^2x-2a.
\\]

 It gives 

\\[
f(2)=2a^2-2a.
\\]

3. **Equate.** 

\\[
2a^2-2a=12.
\\]

 Divide by two and move all terms to one side: 

\\[
a^2-a-6=0.
\\]

4. **Factor and solve.** 

\\[
(a-3)(a+2)=0.
\\]

 Therefore 

\\[
a=3\\quad\\text{or}\\quad a=-2.
\\]

 Both polynomial branches are continuous elsewhere.

**Use this method again**

Copy parameter powers carefully; matching piecewise limits may give a quadratic with more than one valid parameter.

**Check**

For the two candidates, 

\\[
2(3)^2-2(3)=12,\\qquad2(-2)^2-2(-2)=12.
\\]

 Both satisfy the original join equation; six would give sixty and fails.
:::

:::mcq
id: thomas-2-5-45
title: Thomas §2.5 · Exercise 45
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 45 · PDF p. 100](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | a=5/2, b=1/2
- [ ] b | a=1/2, b=−5/2
- [ ] c | a=−5/2, b=1/2
- [x] d | a=5/2, b=−1/2
explanation: Continuity at −1 gives −a−b=−2, or a+b=2. At 1 it gives a−b=3. Solving the two equations yields a=5/2 and b=−1/2.
hint: Work through every subpart in the original question.
example:
![Thomas §2.5 · Exercise 45 · PDF p. 100](assets/recommended/math/thomas-2-5-45-question.webp)
solution:
**Plan — we are going to…**

1. Match the middle line to the left constant at minus one.
2. Match it to the right constant at one.
3. Solve both parameter equations together.

**The trick**

There are two joins and two unknowns. Both joins must match; solving only one leaves infinitely many unsuitable lines.

**What you need to know**

Continuity at a point requires a defined function value, an existing finite limit, and equality between them: 

\\[
\\lim_{x\\to c}f(x)=f(c).
\\]

 At a domain endpoint use the available one-sided limit.

**Step-by-step solution**

1. **Join at minus one.** The middle rule approaches 

\\[
a(-1)-b=-a-b.
\\]

 Match the left value minus two: 

\\[
-a-b=-2\\quad\\Longrightarrow\\quad a+b=2.
\\]

2. **Join at one.** Match the middle line to the right constant three: 

\\[
a-b=3.
\\]

3. **Add the equations.** 

\\[
(a+b)+(a-b)=2+3\\quad\\Longrightarrow\\quad2a=5.
\\]

 Thus 

\\[
a=\\frac52.
\\]

4. **Recover the other parameter.** 

\\[
b=2-\\frac52=-\\frac12.
\\]

 Both joins now match and the function is continuous everywhere.

**Use this method again**

Write one continuity equation per join; solve the resulting simultaneous system.

**Check**

The middle formula becomes 

\\[
\\frac52x+\\frac12.
\\]

 At minus one it equals minus two; at one it equals three, verifying both required joins.
:::

:::mcq
id: thomas-2-5-53
title: Thomas §2.5 · Exercise 53
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 53 · PDF p. 100](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | No roots in [−4,4].
- [ ] b | Exactly one root, at x=0.
- [ ] c | Three roots, all in (0,1).
- [x] d | One root in each of (−4,−3), (0,1), (3,4).
explanation: For p(x)=x³−15x+1, p(−4)=−3, p(−3)=19, p(0)=1, p(1)=−13, p(3)=−17 and p(4)=5. Continuity and the sign changes give a root in each of the three disjoint intervals. A nonzero cubic has at most three real roots, so these account for all three.
hint: Work through every subpart in the original question.
example:
![Thomas §2.5 · Exercise 53 · PDF p. 100](assets/recommended/math/thomas-2-5-53-question.webp)
solution:
**Plan — we are going to…**

1. Choose three disjoint intervals with endpoint sign changes.
2. Use continuity of the cubic on each interval.
3. Apply the Intermediate Value Theorem separately.

**The trick**

A single sign change proves only one root. Three separated sign-changing intervals establish three distinct roots.

**What you need to know**

A polynomial is continuous on every real interval. If a continuous function has opposite signs at two endpoints, the Intermediate Value Theorem guarantees a zero between them.

**Step-by-step solution**

1. **Define the polynomial.** 

\\[
p(x)=x^3-15x+1.
\\]

2. **First sign change.** 

\\[
p(-4)=-64+60+1=-3,\\qquad p(-3)=-27+45+1=19.
\\]

 There is a zero in 

\\[
(-4,-3).
\\]

3. **Second sign change.** 

\\[
p(0)=1,\\qquad p(1)=1-15+1=-13.
\\]

 There is a zero in 

\\[
(0,1).
\\]

4. **Third sign change.** 

\\[
p(3)=27-45+1=-17,\\qquad p(4)=64-60+1=5.
\\]

 There is a zero in 

\\[
(3,4).
\\]

5. **Count.** The intervals are disjoint and all lie inside the required interval. Hence there are at least three distinct real solutions there. A nonzero cubic has at most three real roots, so these are all three.

**Use this method again**

To prove several roots, find that many disjoint sign-changing intervals and apply the theorem in each.

**Check**

The endpoint evaluations alternate negative/positive, positive/negative and negative/positive. None of those endpoint values is zero, so each guaranteed solution lies strictly inside its own interval.
:::

:::mcq
id: thomas-2-5-55
title: Thomas §2.5 · Exercise 55
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 55 · PDF p. 100](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which answer matches the complete original exercise?
- [ ] a | None is necessarily attained.
- [x] b | All three target values are attained.
- [ ] c | Only π and −√3 are attained.
- [ ] d | Only 5,000,000 is attained.
explanation: The polynomial f(x)=x³−8x+10 is continuous and tends to −∞ and +∞ at the two ends of the real line. For each of π, −√3 and 5,000,000, choose endpoints whose function values lie below and above the target; the intermediate value theorem gives a real c attaining it.
hint: Work through every subpart in the original question.
example:
![Thomas §2.5 · Exercise 55 · PDF p. 100](assets/recommended/math/thomas-2-5-55-question.webp)
solution:
**Plan — we are going to…**

1. Bracket the first two target values using finite polynomial outputs.
2. Choose a larger interval for the large target.
3. Use continuity and the Intermediate Value Theorem for each target.

**The trick**

The theorem requires a target between two outputs, not necessarily between the input endpoints. There is no need to solve a cubic explicitly.

**What you need to know**

If a function is continuous on a closed interval, it attains every value between its endpoint outputs.

**Step-by-step solution**

1. **Define and check continuity.** 

\\[
f(x)=x^3-8x+10.
\\]

 This polynomial is continuous everywhere.

2. **Parts (a), (b), bracket both smaller targets.** 

\\[
f(-4)=-64+32+10=-22,\\qquad f(4)=64-32+10=42.
\\]

 Both targets lie strictly between these outputs: 

\\[
-22<-\\sqrt3<\\pi<42.
\\]

 Thus there is an input giving pi and an input giving minus square root of three, each in the open interval from minus four to four.

3. **Part (c), bracket the large target.** 

\\[
f(0)=10,\\qquad f(200)=8{,}000{,}000-1600+10=7{,}998{,}410.
\\]

 Therefore 

\\[
10<5{,}000{,}000<7{,}998{,}410.
\\]

 Continuity gives an input between zero and two hundred with output five million.

**Use this method again**

Bracket the desired output with convenient finite endpoint values, verify continuity, and apply the Intermediate Value Theorem.

**Check**

Every bracketing interval is finite and closed, and each target lies strictly between its endpoint outputs; these verify all hypotheses rather than relying on a distant end-behavior claim.
:::`};export{e as default};