var e={id:`calculus-1.2`,title:`Thomas Calculus §1.2 Practice`,summary:`Thomas' Calculus §1.2 · original textbook exercises and verified practice.`,subjectId:`mathematics`,reward:0,status:`published`,authoringSource:`:::mcq
id: thomas-1-2-1
title: Thomas §1.2 · Exercise 1
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 1 · PDF p. 36](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: For the original Exercise 1, select the domains and ranges of all four functions, in the order \\(f,g,f+g,fg\\). Each pair is (domain; range).
- [ ] a | \\((\\mathbb R;\\mathbb R)\\); \\(([0,\\infty);[0,\\infty))\\); \\(([0,\\infty);[0,\\infty))\\); \\(([0,\\infty);[0,\\infty))\\)
- [ ] b | \\((\\mathbb R;\\mathbb R)\\); \\(([1,\\infty);[1,\\infty))\\); \\(([1,\\infty);[2,\\infty))\\); \\(([1,\\infty);[1,\\infty))\\)
- [ ] c | \\((\\mathbb R;\\mathbb R)\\); \\(([1,\\infty);[0,\\infty))\\); \\((\\mathbb R;\\mathbb R)\\); \\((\\mathbb R;[0,\\infty))\\)
- [x] d | \\((\\mathbb R;\\mathbb R)\\); \\(([1,\\infty);[0,\\infty))\\); \\(([1,\\infty);[1,\\infty))\\); \\(([1,\\infty);[0,\\infty))\\)
explanation: \\(f(x)=x\\) has domain and range \\(\\mathbb R\\). The square root in \\(g(x)=\\sqrt{x-1}\\) requires \\(x\\ge1\\), giving range \\([0,\\infty)\\). Both combinations require \\(x\\ge1\\). On that interval \\(x+\\sqrt{x-1}\\) increases from 1 without bound, while \\(x\\sqrt{x-1}\\) increases from 0 without bound.
hint: Work through every subpart in the original question.
example:
![Thomas §1.2 · Exercise 1 · PDF p. 36](assets/recommended/math/thomas-1-2-1-context-1.webp)

![Thomas §1.2 · Exercise 1 · PDF p. 36](assets/recommended/math/thomas-1-2-1-question.webp)
solution:
**Plan — we are going to…**

1. Find the domain and range of each original function.

2. Intersect the domains for the sum/product and track their smallest outputs.

**The trick**

Combining functions restricts inputs to their common domain. Multiplying these two functions does not mean multiplying their separate ranges as sets.

**What you need to know**

A sum or product requires both original rules to be defined at the same input. A continuous increasing function on a closed starting interval attains its initial value and every larger value if it grows without bound.

**Step-by-step solution**

1. **Original function f.** The identity rule has all real inputs and outputs:

\\[
f(x)=x,\\qquad D_f=\\mathbb R,\\qquad R_f=\\mathbb R.
\\]

2. **Original function g.** The root restriction and its minimum are:

\\[
g(x)=\\sqrt{x-1},\\qquad x-1\\ge0\\Longrightarrow x\\ge1.
\\]



\\[
g(1)=0,\\qquad D_g=[1,\\infty),\\qquad R_g=[0,\\infty).
\\]

3. **Sum.** Both rules must accept the input, so:

\\[
(f+g)(x)=x+\\sqrt{x-1},\\qquad D_{f+g}=[1,\\infty).
\\]

As the input rises from 1, both terms increase continuously. The starting sum is 1 and the sum has no upper bound:

\\[
(f+g)(1)=1,\\qquad R_{f+g}=[1,\\infty).
\\]

4. **Product.** Its domain is the same intersection:

\\[
(fg)(x)=x\\sqrt{x-1},\\qquad D_{fg}=[1,\\infty).
\\]

Both factors are nonnegative and increase on that interval. The product starts at zero, increases continuously and has no upper bound:

\\[
(fg)(1)=0,\\qquad R_{fg}=[0,\\infty).
\\]

**Use this method again**

Find each original domain first. Intersect them for sums/products, then study the actual combined output over that intersection.

**Check**

At input 2 the original outputs are 2 and 1, so the sum and product must be 3 and 2:

\\[
(f+g)(2)=2+1=3,\\qquad(fg)(2)=2(1)=2.
\\]

All lie in the derived ranges; the starting values at input 1 show the finite endpoints are included.
:::

:::mcq
id: thomas-1-2-3
title: Thomas §1.2 · Exercise 3
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 3 · PDF p. 36](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: For Exercise 3, select the domains and ranges of \\(f,g,f/g,g/f\\), in that order. Each pair is (domain; range).
- [ ] a | \\((\\mathbb R;\\{2\\})\\); \\((\\mathbb R;[1,\\infty))\\); \\((\\mathbb R;[1/2,\\infty))\\); \\((\\mathbb R;(0,2])\\)
- [x] b | \\((\\mathbb R;\\{2\\})\\); \\((\\mathbb R;[1,\\infty))\\); \\((\\mathbb R;(0,2])\\); \\((\\mathbb R;[1/2,\\infty))\\)
- [ ] c | \\((\\mathbb R;\\{2\\})\\); \\((\\mathbb R;[1,\\infty))\\); \\((\\mathbb R;[0,2])\\); \\((\\mathbb R;[1/2,\\infty))\\)
- [ ] d | \\((\\mathbb R;\\{2\\})\\); \\((\\mathbb R;[0,\\infty))\\); \\((\\mathbb R\\setminus\\{0\\};(0,\\infty))\\); \\((\\mathbb R;[0,\\infty))\\)
explanation: Here \\(f=2\\) and \\(g=x^2+1\\ge1\\). Neither denominator vanishes. Thus \\(2/(x^2+1)\\) attains 2 but approaches, never reaches, 0; \\((x^2+1)/2\\) has minimum \\(1/2\\).
hint: Work through every subpart in the original question.
example:
![Thomas §1.2 · Exercise 3 · PDF p. 36](assets/recommended/math/thomas-1-2-3-context-1.webp)

![Thomas §1.2 · Exercise 3 · PDF p. 36](assets/recommended/math/thomas-1-2-3-question.webp)
solution:
**Plan — we are going to…**

1. Find each original domain and output bound.

2. Check both quotient denominators and invert/scale the output bound.

**The trick**

The quotient with numerator 2 approaches zero but never reaches it. The upper bound 2 is reached at input zero.

**What you need to know**

A quotient excludes zeros of its denominator. Taking a reciprocal reverses a positive inequality; a fixed nonzero numerator cannot produce output zero.

**Step-by-step solution**

1. **Original function f.** It is the constant 2:

\\[
f(x)=2,\\qquad D_f=\\mathbb R,\\qquad R_f=\\{2\\}.
\\]

2. **Original function g.** A square is nonnegative:

\\[
g(x)=x^2+1\\ge1.
\\]

It attains 1 at zero and all larger values:

\\[
D_g=\\mathbb R,\\qquad R_g=[1,\\infty).
\\]

3. **Quotient f/g.** Its denominator is at least 1, hence never zero. Reciprocation gives:

\\[
0<\\frac2{x^2+1}\\le2.
\\]

The maximum is attained at zero; the output approaches zero for large input magnitude, but never equals zero:

\\[
D_{f/g}=\\mathbb R,\\qquad R_{f/g}=(0,2].
\\]

4. **Quotient g/f.** The denominator is the constant 2, so every real input remains allowed. Divide the square bound by positive 2:

\\[
\\frac{x^2+1}{2}\\ge\\frac12.
\\]



\\[
D_{g/f}=\\mathbb R,\\qquad R_{g/f}=[\\tfrac12,\\infty).
\\]

**Use this method again**

For quotient ranges with a positive square denominator, establish its positive minimum, then distinguish attained bounds from limiting values.

**Check**

At input zero the two quotients are 2 and one half. At input 1 they are both 1:

\\[
\\frac{f(1)}{g(1)}=\\frac22=1,\\qquad\\frac{g(1)}{f(1)}=\\frac22=1.
\\]

For any output between zero and 2 in the first quotient, solving gives a real input:

\\[
x^2=\\frac2y-1\\ge0\\qquad(0<y\\le2).
\\]

This confirms the entire proposed range, not just its endpoints.
:::

:::mcq
id: thomas-1-2-5
title: Thomas §1.2 · Exercise 5
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 5 · PDF p. 36](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: With \\(f(x)=x+5\\) and \\(g(x)=x^2-3\\), which ordered list answers every part (a)–(h)?
- [ ] a | \\(-3\\); \\(25\\); \\(x^2+5\\); \\(x^2+22\\); \\(0\\); \\(1\\); \\(x+10\\); \\(x^4+6\\)
- [ ] b | \\(2\\); \\(22\\); \\(x^2+2\\); \\(x^2+10x+22\\); \\(5\\); \\(-2\\); \\(2x+5\\); \\(x^4-6x^2+9\\)
- [ ] c | \\(22\\); \\(2\\); \\(x^2+10x+22\\); \\(x^2+2\\); \\(5\\); \\(-2\\); \\(x+10\\); \\(x^4-6x^2+6\\)
- [x] d | \\(2\\); \\(22\\); \\(x^2+2\\); \\(x^2+10x+22\\); \\(5\\); \\(-2\\); \\(x+10\\); \\(x^4-6x^2+6\\)
explanation: Evaluate the inner function first: (a) \\(f(g(0))=f(-3)=2\\); (b) \\(g(f(0))=g(5)=22\\); (c) \\(f(g(x))=x^2+2\\); (d) \\(g(f(x))=(x+5)^2-3\\); (e) \\(f(f(-5))=f(0)=5\\); (f) \\(g(g(2))=g(1)=-2\\); (g) \\(f(f(x))=x+10\\); (h) \\(g(g(x))=(x^2-3)^2-3=x^4-6x^2+6\\).
hint: Work through every subpart in the original question.
example:
![Thomas §1.2 · Exercise 5 · PDF p. 36](assets/recommended/math/thomas-1-2-5-question.webp)
solution:
**Plan — we are going to…**

1. Evaluate the inner rule first in each nested expression.

2. Substitute the full inner expression and expand only afterward.

**The trick**

Part (a) is a nested evaluation at zero, not a request for an isolated function value. Composition order matters; keep the inside result in parentheses.

**What you need to know**

The rules are:

\\[
f(x)=x+5,\\qquad g(x)=x^2-3.
\\]

Composition means apply the rightmost/inside function first:

\\[
(f\\circ g)(x)=f(g(x)).
\\]



**Step-by-step solution**

1. **Part (a): evaluate g at zero, then f.**

\\[
g(0)=0^2-3=-3.
\\]



\\[
f(g(0))=f(-3)=-3+5=2.
\\]

2. **Part (b): evaluate f at zero, then g.**

\\[
f(0)=5.
\\]



\\[
g(f(0))=g(5)=5^2-3=22.
\\]

3. **Part (c): put the whole g rule into f.**

\\[
f(g(x))=(x^2-3)+5=x^2+2.
\\]

4. **Part (d): put the whole f rule into g.**

\\[
g(f(x))=(x+5)^2-3.
\\]



\\[
g(f(x))=x^2+10x+25-3=x^2+10x+22.
\\]

5. **Part (e): apply f twice at −5.**

\\[
f(-5)=0,\\qquad f(f(-5))=f(0)=5.
\\]

6. **Part (f): apply g twice at 2.**

\\[
g(2)=1,\\qquad g(g(2))=g(1)=1-3=-2.
\\]

7. **Part (g): compose f with itself.**

\\[
f(f(x))=(x+5)+5=x+10.
\\]

8. **Part (h): compose g with itself.**

\\[
g(g(x))=(x^2-3)^2-3.
\\]



\\[
g(g(x))=x^4-6x^2+9-3=x^4-6x^2+6.
\\]

**Use this method again**

For each composition, write the inner output first, substitute it into every input position of the outer rule, then simplify.

**Check**

The formulas in (c) and (d) reproduce the numerical parts at zero:

\\[
(f\\circ g)(0)=0^2+2=2.
\\]



\\[
(g\\circ f)(0)=0^2+10(0)+22=22.
\\]

The order changes the answer, as the direct calculations require.
:::

:::mcq
id: thomas-1-2-7
title: Thomas §1.2 · Exercise 7
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 7 · PDF p. 36](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: For the three functions in Exercise 7, what is \\((f\\circ g\\circ h)(x)\\)?
- [ ] a | \\(13+3x\\)
- [x] b | \\(13-3x\\)
- [ ] c | \\(15-3x\\)
- [ ] d | \\(5-3x\\)
explanation: Apply \\(h(x)=4-x\\), then \\(g(h(x))=3(4-x)\\), then add 1 using \\(f\\). The result is \\(3(4-x)+1=13-3x\\).
hint: Work through every subpart in the original question.
example:
![Thomas §1.2 · Exercise 7 · PDF p. 36](assets/recommended/math/thomas-1-2-7-context-1.webp)

![Thomas §1.2 · Exercise 7 · PDF p. 36](assets/recommended/math/thomas-1-2-7-question.webp)
solution:
**Plan — we are going to…**

1. Apply the rightmost rule first.

2. Feed its result into the middle rule, then the outer rule.

**The trick**

The composition is read from right to left. Adding 1 occurs after multiplication by 3.

**What you need to know**

The three supplied rules are:

\\[
h(x)=4-x,\\qquad g(x)=3x,\\qquad f(x)=x+1.
\\]

A triple composition is:

\\[
(f\\circ g\\circ h)(x)=f(g(h(x))).
\\]



**Step-by-step solution**

1. **Apply h.**

\\[
h(x)=4-x.
\\]

2. **Apply g to that result.** Replace its entire input by the previous result:

\\[
g(h(x))=3(4-x)=12-3x.
\\]

3. **Apply f last.** Add 1 to the middle output:

\\[
f(g(h(x)))=(12-3x)+1=13-3x.
\\]

All three rules are linear, so the composition is defined for every real input.

**Use this method again**

For a chain of functions, work from the innermost rule outward and write one complete intermediate output per line.

**Check**

At input 2, the original chain gives:

\\[
2\\xrightarrow{h}2\\xrightarrow{g}6\\xrightarrow{f}7.
\\]

The simplified formula agrees:

\\[
13-3(2)=7.
\\]
:::

:::mcq
id: thomas-1-2-9
title: Thomas §1.2 · Exercise 9
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 9 · PDF p. 36](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: For the three functions in Exercise 9, which expression equals \\((f\\circ g\\circ h)(x)\\) wherever the composition is defined?
- [ ] a | \\(\\dfrac{1}{\\sqrt{x+1}+4}\\)
- [ ] b | \\(\\sqrt{\\dfrac{x+1}{4x+1}}\\)
- [ ] c | \\(\\dfrac{\\sqrt{x+1}}{x+4}\\)
- [x] d | \\(\\sqrt{\\dfrac{5x+1}{4x+1}}\\)
explanation: First \\(h(x)=1/x\\). Then \\(g(h(x))=1/(1/x+4)=x/(4x+1)\\). Finally \\(f(g(h(x)))=\\sqrt{x/(4x+1)+1}=\\sqrt{(5x+1)/(4x+1)}\\). The original composition excludes \\(x=0\\), even after simplification; its full domain is \\(({-\\infty},-1/4)\\cup[-1/5,0)\\cup(0,\\infty)\\).
hint: Work through every subpart in the original question.
example:
![Thomas §1.2 · Exercise 9 · PDF p. 36](assets/recommended/math/thomas-1-2-9-context-1.webp)

![Thomas §1.2 · Exercise 9 · PDF p. 36](assets/recommended/math/thomas-1-2-9-question.webp)
solution:
**Plan — we are going to…**

1. Compose the reciprocal and shifted reciprocal before the root.

2. Simplify the formula while preserving every original input restriction.

**The trick**

Simplification cancels a factor of the original input, but does not restore input zero. The simplified root alone would incorrectly permit zero.

**What you need to know**

A composition is defined only when each intermediate output is allowed by the next rule. Even roots need nonnegative radicands and denominators cannot vanish.

**Step-by-step solution**

1. **Start with the inner reciprocal.**

\\[
h(x)=\\frac1x,\\qquad x\\ne0.
\\]

2. **Apply the middle rule.**

\\[
g(u)=\\frac1{u+4}.
\\]



\\[
g(h(x))=\\frac1{1/x+4}=\\frac{x}{4x+1}.
\\]

In addition to the original exclusion, the new denominator excludes input −1/4.

3. **Apply the outer root.**

\\[
f(u)=\\sqrt{u+1}.
\\]



\\[
f(g(h(x)))=\\sqrt{\\frac{x}{4x+1}+1}=\\sqrt{\\frac{5x+1}{4x+1}}.
\\]

4. **Find the real domain.** The numerator changes sign at −1/5 and the denominator at −1/4. Their ratio is positive to the left of −1/4, negative between −1/4 and −1/5, and nonnegative from −1/5 onward. Remove input zero as required by the original inner rule:

\\[
D=(-\\infty,-\\tfrac14)\\cup[-\\tfrac15,0)\\cup(0,\\infty).
\\]

**Use this method again**

Compose from inside outward and record exclusions before algebraic cancellation. Solve the final root inequality without discarding inherited exclusions.

**Check**

At input 1, the original chain gives one, then one fifth, then the root of six fifths:

\\[
f(g(h(1)))=\\sqrt{\\frac15+1}=\\sqrt{\\frac65}.
\\]

The simplified formula gives the same value. At input zero it appears to give 1, but the original first reciprocal is undefined; that input remains excluded.
:::

:::mcq
id: thomas-1-2-11
title: Thomas §1.2 · Exercise 11
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 11 · PDF p. 36](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Using the four named functions in Exercise 11, select a valid list of compositions for all six parts (a)–(f).
- [ ] a | \\(f\\circ g\\); \\(j\\circ g\\); \\(g\\circ g\\); \\(j\\circ j\\); \\(g\\circ f\\circ h\\); \\(h\\circ f\\circ j\\)
- [x] b | \\(f\\circ g\\); \\(j\\circ g\\); \\(g\\circ g\\); \\(j\\circ j\\); \\(g\\circ h\\circ f\\); \\(h\\circ j\\circ f\\)
- [ ] c | \\(g\\circ f\\); \\(j\\circ g\\); \\(g\\circ g\\); \\(j\\circ j\\); \\(g\\circ h\\circ f\\); \\(h\\circ j\\circ f\\)
- [ ] d | \\(f\\circ g\\); \\(g\\circ j\\); \\(h\\circ g\\); \\(j\\circ j\\); \\(h\\circ g\\circ f\\); \\(f\\circ j\\circ h\\)
explanation: Here \\(f(x)=x-3\\), \\(g(x)=\\sqrt{x}\\), \\(h(x)=x^3\\), \\(j(x)=2x\\). Hence (a) \\(f(g(x))=\\sqrt{x}-3\\); (b) \\(j(g(x))=2\\sqrt{x}\\); (c) \\(g(g(x))=x^{1/4}\\); (d) \\(j(j(x))=4x\\); (e) \\(g(h(f(x)))=\\sqrt{(x-3)^3}\\); (f) \\(h(j(f(x)))=(2x-6)^3\\).
hint: Work through every subpart in the original question.
example:
![Thomas §1.2 · Exercise 11 · PDF p. 36](assets/recommended/math/thomas-1-2-11-context-1.webp)

![Thomas §1.2 · Exercise 11 · PDF p. 36](assets/recommended/math/thomas-1-2-11-question.webp)
solution:
**Plan — we are going to…**

1. Identify the operations from the inside outward in each target formula.

2. Match those operations to the four named rules.

**The trick**

An outside square root acts after any inside shift or cube. A shift outside the root is a different composition from a shift inside it.

**What you need to know**

The available operations are:

\\[
f(x)=x-3,\\quad g(x)=\\sqrt{x},\\quad h(x)=x^3,\\quad j(x)=2x.
\\]

In a composition, the rightmost function acts first. A valid expression must reproduce the target on its real domain.

**Step-by-step solution**

1. **Part (a): square root, then subtract 3.**

\\[
f(g(x))=\\sqrt{x}-3.
\\]



\\[
f\\circ g,\\qquad x\\ge0.
\\]

2. **Part (b): square root, then double.**

\\[
j(g(x))=2\\sqrt{x}.
\\]



\\[
j\\circ g,\\qquad x\\ge0.
\\]

3. **Part (c): take two successive square roots.**

\\[
g(g(x))=\\sqrt{\\sqrt{x}}=x^{1/4}.
\\]



\\[
g\\circ g,\\qquad x\\ge0.
\\]

4. **Part (d): double twice.**

\\[
j(j(x))=2(2x)=4x.
\\]



\\[
j\\circ j.
\\]

5. **Part (e): subtract 3, cube, then take the square root.**

\\[
g(h(f(x)))=\\sqrt{(x-3)^3}.
\\]

The cube under the root is nonnegative only when the shifted input is nonnegative:

\\[
g\\circ h\\circ f,\\qquad x\\ge3.
\\]

6. **Part (f): subtract 3, double, then cube.**

\\[
h(j(f(x)))=\\bigl(2(x-3)\\bigr)^3=(2x-6)^3.
\\]



\\[
h\\circ j\\circ f.
\\]

**Use this method again**

Name the target’s innermost operation first, work outward, then write the function names in reverse operation order.

**Check**

For part (e), input 4 follows the chain 4 to 1 to 1 to 1, giving the same output as the root of the cube of 1. For part (f), input 4 follows 4 to 1 to 2 to 8, agreeing with:

\\[
(2(4)-6)^3=2^3=8.
\\]
:::

:::mcq
id: thomas-1-2-13
title: Thomas §1.2 · Exercise 13
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 13 · PDF p. 36](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Complete every missing entry in the Exercise 13 table. Select the entries for rows (a)–(f), in that order.
- [ ] a | \\(\\sqrt{x}-7\\); \\(3x+2\\); \\(x^2\\); \\(x\\); \\(\\dfrac1{x-1}\\); \\(\\dfrac1x\\)
- [ ] b | \\(\\sqrt{x-7}\\); \\(3x+6\\); \\(x\\); \\(\\dfrac{x}{x-2}\\); \\(x-1\\); \\(x\\)
- [ ] c | \\(\\sqrt{x-7}\\); \\(3x+6\\); \\(x^2\\); \\(1\\); \\(\\dfrac1{x+1}\\); \\(-\\dfrac1x\\)
- [x] d | \\(\\sqrt{x-7}\\); \\(3x+6\\); \\(x^2\\); \\(x\\); \\(\\dfrac1{x-1}\\); \\(\\dfrac1x\\)
explanation: (a) Substitute \\(x-7\\) into the square root. (b) \\(3(x+2)=3x+6\\). (c) \\(g(x)=x^2\\) produces \\(\\sqrt{x^2}-5\\). (d) Applying \\(u/(u-1)\\) twice returns \\(x\\), for \\(x\\ne1\\). (e) \\(1+1/g(x)=x\\) gives \\(g(x)=1/(x-1)\\). (f) The reciprocal function composed with itself returns \\(x\\), for \\(x\\ne0\\).
hint: Work through every subpart in the original question.
example:
![Thomas §1.2 · Exercise 13 · PDF p. 36](assets/recommended/math/thomas-1-2-13-question.webp)
solution:
**Plan — we are going to…**

1. Fill known compositions by substitution.

2. For missing functions, solve backward from the supplied composite.

**The trick**

In row (c), −5 is outside the square root. Also, simplifying an identity composition does not remove denominator restrictions from the original functions.

**What you need to know**

To compute the composite, replace each input of the outside rule by the inside rule:

\\[
(f\\circ g)(x)=f(g(x)).
\\]

To recover an unknown rule, treat its output as a temporary quantity and solve the resulting equation.

**Step-by-step solution**

1. **Row (a): substitute the shifted input into the root.**

\\[
g(x)=x-7,\\qquad f(u)=\\sqrt u.
\\]



\\[
(f\\circ g)(x)=\\sqrt{x-7},\\qquad x\\ge7.
\\]

2. **Row (b): multiply the entire input by 3.**

\\[
f(g(x))=3(x+2)=3x+6.
\\]

3. **Row (c): identify the missing root input.** The outside rule subtracts 5 after taking the root:

\\[
f(u)=\\sqrt u-5.
\\]

Choosing the squared input gives the supplied composite:

\\[
g(x)=x^2\\quad\\Longrightarrow\\quad f(g(x))=\\sqrt{x^2}-5=|x|-5.
\\]

This is defined for all real inputs.

4. **Row (d): apply the same rational rule twice.**

\\[
f(g(x))=\\frac{x/(x-1)}{x/(x-1)-1}.
\\]

Combine the denominator first:

\\[
\\frac{x}{x-1}-1=\\frac{x-(x-1)}{x-1}=\\frac1{x-1}.
\\]



\\[
f(g(x))=\\frac{x/(x-1)}{1/(x-1)}=x,\\qquad x\\ne1.
\\]

5. **Row (e): solve for the inside rule.**

\\[
1+\\frac1{g(x)}=x\\quad\\Longrightarrow\\quad\\frac1{g(x)}=x-1.
\\]



\\[
g(x)=\\frac1{x-1},\\qquad x\\ne1.
\\]

6. **Row (f): undo the inner reciprocal.** The missing outside rule must take the reciprocal again:

\\[
f(u)=\\frac1u.
\\]



\\[
f(g(x))=\\frac1{1/x}=x,\\qquad x\\ne0.
\\]

Thus the missing table entries are the six expressions derived above, in row order.

**Use this method again**

When the table supplies both rules, substitute. When it supplies the composite, reverse the outer operation and keep the original domain restrictions.

**Check**

For row (c), use a negative input to check the absolute value:

\\[
x=-2:\\qquad\\sqrt{(-2)^2}-5=2-5=-3.
\\]

Putting −5 inside the radical would instead make that test nonreal, so it cannot be the supplied expression. For row (d), input 2 passes through 2 and then 2, confirming the identity composition.
:::

:::mcq
id: thomas-1-2-15
title: Thomas §1.2 · Exercise 15
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 15 · PDF p. 37](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Using the original value table, which ordered list gives the answers to all parts (a)–(f)?
- [ ] a | \\(2\\); \\(1\\); \\(-2\\); \\(-1\\); \\(0\\); \\(0\\)
- [x] b | \\(1\\); \\(2\\); \\(-2\\); \\(0\\); \\(-1\\); \\(0\\)
- [ ] c | \\(0\\); \\(-2\\); \\(1\\); \\(2\\); \\(1\\); \\(-1\\)
- [ ] d | \\(1\\); \\(2\\); \\(0\\); \\(0\\); \\(-1\\); \\(-2\\)
explanation: Read the inner value before the outer lookup: (a) \\(f(g(-1))=f(1)=1\\); (b) \\(g(f(0))=g(-2)=2\\); (c) \\(f(f(-1))=f(0)=-2\\); (d) \\(g(g(2))=g(0)=0\\); (e) \\(g(f(-2))=g(1)=-1\\); (f) \\(f(g(1))=f(-1)=0\\).
hint: Work through every subpart in the original question.
example:
![Thomas §1.2 · Exercise 15 · PDF p. 37](assets/recommended/math/thomas-1-2-15-question.webp)
solution:
**Plan — we are going to…**

1. Look up each inner value in the given table.

2. Use that output as the input for a second lookup.

**The trick**

The outside function is evaluated at the inner output, not at the original input. A table lookup is not a multiplication.

**What you need to know**

Use the row named by the function and the column named by its input. Nested notation means two separate lookups, starting with the innermost pair of parentheses.

**Step-by-step solution**

1. **Part (a).** From the table, the inner output at −1 is 1; use that as the next input:

\\[
f(g(-1))=f(1)=1.
\\]

2. **Part (b).** The inner output at zero is −2:

\\[
g(f(0))=g(-2)=2.
\\]

3. **Part (c).** The first application at −1 gives zero:

\\[
f(f(-1))=f(0)=-2.
\\]

4. **Part (d).** The first application at 2 gives zero:

\\[
g(g(2))=g(0)=0.
\\]

5. **Part (e).** The first application at −2 gives 1:

\\[
g(f(-2))=g(1)=-1.
\\]

6. **Part (f).** The first application at 1 gives −1:

\\[
f(g(1))=f(-1)=0.
\\]

In the requested order, the outputs are:

\\[
1,\\quad2,\\quad-2,\\quad0,\\quad-1,\\quad0.
\\]

**Use this method again**

For every nested table expression, write the first lookup result before doing the second; never try to perform both mentally in one jump.

**Check**

Retrace part (e) directly in the table: the f row under input −2 contains 1, and the g row under input 1 contains −1. This reproduces the two-stage output without using the selected option.
:::

:::mcq
id: thomas-1-2-17
title: Thomas §1.2 · Exercise 17
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 17 · PDF p. 37](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: For Exercise 17, which choice gives both composition formulas, their domains, and their ranges?
- [ ] a | \\(f\\circ g=\\sqrt{1/x+1}\\): \\(D=(-\\infty,-1]\\cup(0,\\infty)\\), \\(R=[0,\\infty)\\). \\(g\\circ f=1/\\sqrt{x+1}\\): \\(D=[-1,\\infty)\\), \\(R=(0,\\infty)\\).
- [ ] b | \\(f\\circ g=1/\\sqrt{x+1}\\): \\(D=(-1,\\infty)\\), \\(R=(0,\\infty)\\). \\(g\\circ f=\\sqrt{1/x+1}\\): \\(D=(-\\infty,-1]\\cup(0,\\infty)\\), \\(R=[0,1)\\cup(1,\\infty)\\).
- [ ] c | \\(f\\circ g=\\sqrt{1/x+1}\\): \\(D=(0,\\infty)\\), \\(R=(1,\\infty)\\). \\(g\\circ f=1/\\sqrt{x+1}\\): \\(D=(-1,\\infty)\\), \\(R=[0,\\infty)\\).
- [x] d | \\(f\\circ g=\\sqrt{1/x+1}\\): \\(D=(-\\infty,-1]\\cup(0,\\infty)\\), \\(R=[0,1)\\cup(1,\\infty)\\). \\(g\\circ f=1/\\sqrt{x+1}\\): \\(D=(-1,\\infty)\\), \\(R=(0,\\infty)\\).
explanation: For \\(f\\circ g\\), require \\(x\\ne0\\) and \\((x+1)/x\\ge0\\), giving \\(x\\le-1\\) or \\(x>0\\). The negative branch gives outputs \\([0,1)\\); the positive branch gives \\((1,\\infty)\\), and 1 is impossible. For \\(g\\circ f\\), the denominator \\(\\sqrt{x+1}\\) must be positive, so \\(x>-1\\). Its reciprocal takes every positive value.
hint: Work through every subpart in the original question.
example:
![Thomas §1.2 · Exercise 17 · PDF p. 37](assets/recommended/math/thomas-1-2-17-context-1.webp)

![Thomas §1.2 · Exercise 17 · PDF p. 37](assets/recommended/math/thomas-1-2-17-question.webp)
solution:
**Plan — we are going to…**

1. Write both compositions in the correct order.

2. Solve their root/denominator restrictions and determine which outputs each can attain.

**The trick**

The range of the first composition excludes 1 even though values occur on both sides of it. The second composition requires a strictly positive root because that root is a denominator.

**What you need to know**

The original rules are:

\\[
f(x)=\\sqrt{x+1},\\qquad g(x)=\\frac1x.
\\]

A composite needs the inside rule to be defined and its output to be accepted by the outside rule. The principal square root is nonnegative.

**Step-by-step solution**

1. **Form f after g.**

\\[
(f\\circ g)(x)=\\sqrt{\\frac1x+1}=\\sqrt{\\frac{x+1}{x}}.
\\]

The input cannot be zero, and the ratio under the root must be nonnegative. For a negative input, numerator and denominator agree in sign only up to −1. Every positive input works:

\\[
D_{f\\circ g}=(-\\infty,-1]\\cup(0,\\infty).
\\]

2. **Find its range.** On the negative branch, the radicand covers values from zero up to but not including 1. On the positive branch it covers values strictly above 1. Equivalently, solve for an input:

\\[
y^2=1+\\frac1x\\quad\\Longrightarrow\\quad x=\\frac1{y^2-1}.
\\]

Every nonnegative output other than 1 gives an allowed input; output 1 would require an impossible zero reciprocal:

\\[
R_{f\\circ g}=[0,1)\\cup(1,\\infty).
\\]

3. **Form g after f.**

\\[
(g\\circ f)(x)=\\frac1{\\sqrt{x+1}}.
\\]

The root must be real and nonzero, so its radicand must be strictly positive:

\\[
x+1>0\\quad\\Longrightarrow\\quad D_{g\\circ f}=(-1,\\infty).
\\]

4. **Find its range.** Its output is always positive. Every positive output gives an allowed input by solving:

\\[
y=\\frac1{\\sqrt{x+1}}\\quad\\Longrightarrow\\quad x=\\frac1{y^2}-1>-1.
\\]



\\[
R_{g\\circ f}=(0,\\infty).
\\]

**Use this method again**

For compositions, enforce restrictions in their actual order. Find the range by solving for the original input and testing missing output values explicitly.

**Check**

The first composition attains zero at input −1 and exceeds 1 at input 1:

\\[
(f\\circ g)(-1)=0,\\qquad(f\\circ g)(1)=\\sqrt2.
\\]

The second attains output 2 at input −3/4:

\\[
\\frac1{\\sqrt{-3/4+1}}=2.
\\]

Its left boundary −1 remains excluded because the denominator would be zero.
:::

:::mcq
id: thomas-1-2-19
title: Thomas §1.2 · Exercise 19
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 19 · PDF p. 37](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which function \\(g\\) makes \\((f\\circ g)(x)=x\\) for the function in Exercise 19?
- [ ] a | \\(g(x)=\\dfrac{2x}{x+1}\\)
- [x] b | \\(g(x)=\\dfrac{2x}{x-1},\\quad x\\ne1\\)
- [ ] c | \\(g(x)=\\dfrac{x}{x-2}\\)
- [ ] d | \\(g(x)=\\dfrac{x-2}{x}\\)
explanation: Solve \\(u/(u-2)=x\\): \\(u=xu-2x\\), so \\(u(x-1)=2x\\) and \\(u=2x/(x-1)\\). Substitution confirms the composition equals \\(x\\) for \\(x\\ne1\\).
hint: Work through every subpart in the original question.
example:
![Thomas §1.2 · Exercise 19 · PDF p. 37](assets/recommended/math/thomas-1-2-19-question.webp)
solution:
**Plan — we are going to…**

1. Set the outside function of an unknown inner output equal to the original input.

2. Solve for that inner output and verify the resulting composition.

**The trick**

Solve for the entire inner output as one unknown. The missing input 1 belongs to the new function’s domain restriction, not the original denominator restriction at output 2.

**What you need to know**

The supplied outside rule is:

\\[
f(u)=\\frac{u}{u-2},\\qquad u\\ne2.
\\]

To obtain an identity composition, set its result equal to the desired input and solve for the temporary quantity.

**Step-by-step solution**

1. **Introduce the unknown inner output.**

\\[
u=g(x),\\qquad\\frac{u}{u-2}=x.
\\]

2. **Clear the allowed denominator.**

\\[
u=x(u-2)=xu-2x.
\\]

Collect the terms containing the unknown:

\\[
xu-u=2x\\quad\\Longrightarrow\\quad u(x-1)=2x.
\\]

3. **Solve.** The input cannot equal 1, since that would give the contradiction zero equals 2:

\\[
g(x)=\\frac{2x}{x-1},\\qquad x\\ne1.
\\]

4. **Check the outer domain.** Subtract 2 from the inner output:

\\[
g(x)-2=\\frac{2x-2(x-1)}{x-1}=\\frac2{x-1}.
\\]

This is never zero on the proposed domain, so the outside function always accepts it.

**Use this method again**

To construct a right inverse, solve the outside rule’s output equation for its input, then verify both the identity and all denominator restrictions.

**Check**

Substitute directly:

\\[
f(g(x))=\\frac{2x/(x-1)}{2/(x-1)}=x\\qquad(x\\ne1).
\\]

This establishes the required identity for every permitted input.
:::

:::mcq
id: thomas-1-2-21
title: Thomas §1.2 · Exercise 21
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 21 · PDF p. 37](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: For the two shifted parabolas in the original figure, which equations describe positions (a) and (b), respectively?
- [ ] a | (a) \\(y=-(x-7)^2\\); (b) \\(y=-(x+4)^2\\).
- [ ] b | (a) \\(y=-x^2-7\\); (b) \\(y=-x^2+4\\).
- [ ] c | (a) \\(y=(x+7)^2\\); (b) \\(y=(x-4)^2\\).
- [x] d | (a) \\(y=-(x+7)^2\\); (b) \\(y=-(x-4)^2\\).
explanation: The original parabola opens downward. Its vertex moves from \\((0,0)\\) to \\((-7,0)\\) in (a), and to \\((4,0)\\) in (b). Use \\(y=-(x-h)^2\\) with each vertex coordinate \\(h\\).
hint: Work through every subpart in the original question.
example:
![Thomas §1.2 · Exercise 21 · PDF p. 37](assets/recommended/math/thomas-1-2-21-question.webp)
solution:
**Plan — we are going to…**

1. Read the two new vertex positions from the figure.

2. Put each horizontal vertex coordinate into the downward parabola’s shifted formula.

**The trick**

The sign inside the squared bracket is opposite the horizontal movement. A left shift by 7 needs a plus 7 inside.

**What you need to know**

For a horizontal/vertical shift, write the transformed rule as:

\\[
y=F(x-h)+k.
\\]

The original point with coordinates (u,v) moves to (u+h,v+k). A positive horizontal shift moves right; a positive vertical shift moves up. Shape and size are unchanged.

**Step-by-step solution**

1. **Identify the parent parabola.**

\\[
y=-x^2.
\\]

It opens downward and has vertex at the origin.

2. **Part (a): move the vertex left 7.** The new horizontal vertex coordinate is −7, so:

\\[
y=-\\bigl(x-(-7)\\bigr)^2=-(x+7)^2.
\\]

The vertex is (−7,0); the opening remains downward.

3. **Part (b): move the vertex right 4.**

\\[
y=-(x-4)^2.
\\]

The vertex is (4,0), again with a downward opening.

**Use this method again**

For a shifted parabola, identify its vertex first and use the parent’s opening sign; do not read horizontal shifts from the bracket sign alone.

**Check**

At the two proposed vertices, the outputs are zero:

\\[
-(-7+7)^2=0,\\qquad-(4-4)^2=0.
\\]

One unit to either side of either vertex gives height −1, preserving the parent shape.
:::

:::mcq
id: thomas-1-2-23
title: Thomas §1.2 · Exercise 23
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 23 · PDF p. 37](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which positions in the original figure match equations (a), (b), (c), and (d), in that order?
- [ ] a | \\(3\\); \\(1\\); \\(2\\); \\(4\\)
- [x] b | \\(4\\); \\(1\\); \\(2\\); \\(3\\)
- [ ] c | \\(1\\); \\(4\\); \\(3\\); \\(2\\)
- [ ] d | \\(4\\); \\(2\\); \\(1\\); \\(3\\)
explanation: For \\(y=(x-h)^2+k\\), the vertex is \\((h,k)\\). The four equations have vertices \\((1,-4)\\), \\((2,2)\\), \\((-2,2)\\), and \\((-3,-2)\\). These are positions 4, 1, 2, and 3 in the figure.
hint: Work through every subpart in the original question.
example:
![Thomas §1.2 · Exercise 23 · PDF p. 37](assets/recommended/math/thomas-1-2-23-question.webp)
solution:
**Plan — we are going to…**

1. Rewrite each equation in vertex form.

2. Match the resulting vertex to the numbered position in the figure.

**The trick**

The horizontal coordinate has the opposite sign to the constant inside the square. The vertical coordinate has the same sign as the constant outside.

**What you need to know**

An upward parabola in vertex form has its minimum at the shift point:

\\[
y=(x-h)^2+k\\quad\\Longrightarrow\\quad\\text{vertex }(h,k).
\\]



**Step-by-step solution**

1. **Part (a).**

\\[
y=(x-1)^2-4\\quad\\Longrightarrow\\quad(1,-4).
\\]

That vertex is **position 4** in the original figure.

2. **Part (b).**

\\[
y=(x-2)^2+2\\quad\\Longrightarrow\\quad(2,2).
\\]

That vertex is **position 1**.

3. **Part (c).**

\\[
y=(x+2)^2+2\\quad\\Longrightarrow\\quad(-2,2).
\\]

That vertex is **position 2**.

4. **Part (d).**

\\[
y=(x+3)^2-2\\quad\\Longrightarrow\\quad(-3,-2).
\\]

That vertex is **position 3**. The answer order is:

\\[
4,\\quad1,\\quad2,\\quad3.
\\]

**Use this method again**

When matching shifted graphs, compare a unique anchor point such as the vertex before inspecting the rest of the curve.

**Check**

Substituting each horizontal vertex coordinate makes its squared term zero. The four resulting minimum heights are −4, 2, 2 and −2, matching the positions’ vertical coordinates.
:::

:::mcq
id: thomas-1-2-25
title: Thomas §1.2 · Exercise 25
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 25 · PDF p. 38](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: After the shifts in Exercise 25, which equation and graph description are correct?
- [ ] a | \\((x-2)^2+(y-3)^2=49\\): radius 7, center \\((2,3)\\).
- [ ] b | \\((x+3)^2+(y+2)^2=49\\): radius 7, center \\((-3,-2)\\).
- [ ] c | \\((x+2)^2+(y+3)^2=49\\): radius 49, center \\((-2,-3)\\).
- [x] d | \\((x+2)^2+(y+3)^2=49\\): a circle of radius 7 centered at \\((-2,-3)\\).
explanation: The original circle has center \\((0,0)\\) and radius 7. Left 2 and down 3 moves the center to \\((-2,-3)\\), preserving the radius. Replace \\(x\\) by \\(x+2\\) and \\(y\\) by \\(y+3\\).
hint: Work through every subpart in the original question.
example:
![Thomas §1.2 · Exercise 25 · PDF p. 38](assets/recommended/math/thomas-1-2-25-context-1.webp)

![Thomas §1.2 · Exercise 25 · PDF p. 38](assets/recommended/math/thomas-1-2-25-question.webp)
solution:
**Plan — we are going to…**

1. Find the original circle’s center and radius.

2. Move the center left and down without changing the radius.

**The trick**

A shifted circle changes both coordinates in its equation. The constant 49 remains the squared radius, not the radius itself.

**What you need to know**

The standard equation of a circle is:

\\[
(x-h)^2+(y-k)^2=r^2.
\\]

Its center is (h,k) and its radius is the nonnegative number r.

**Step-by-step solution**

1. **Read the original circle.**

\\[
x^2+y^2=49=7^2.
\\]

Its center is the origin and its radius is 7.

2. **Move the center.** Left 2 gives horizontal coordinate −2; down 3 gives vertical coordinate −3. The new center is (−2,−3).

3. **Write the new equation.**

\\[
\\bigl(x-(-2)\\bigr)^2+\\bigl(y-(-3)\\bigr)^2=49.
\\]



\\[
(x+2)^2+(y+3)^2=49.
\\]

Sketch a radius-7 circle around the new center.

**Use this method again**

For a translated circle, move its center and preserve its radius, then substitute the center into the standard squared-distance equation.

**Check**

The original rightmost point (7,0) shifts to (5,−3). Substitute into the proposed equation:

\\[
(5+2)^2+(-3+3)^2=7^2+0=49.
\\]

It remains exactly 7 units from the shifted center.
:::

:::mcq
id: thomas-1-2-27
title: Thomas §1.2 · Exercise 27
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 27 · PDF p. 38](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which equation and graph describe the shifts in Exercise 27?
- [ ] a | \\(y=x^3-2\\): inflection point \\((0,-2)\\).
- [x] b | \\(y=(x+1)^3-1\\): the increasing cubic shifted left 1 and down 1, with inflection point \\((-1,-1)\\).
- [ ] c | \\(y=(x-1)^3-1\\): inflection point \\((1,-1)\\).
- [ ] d | \\(y=(x+1)^3+1\\): inflection point \\((-1,1)\\).
explanation: A horizontal shift left replaces \\(x\\) by \\(x+1\\); a vertical shift down subtracts 1. Thus every point \\((u,u^3)\\) becomes \\((u-1,u^3-1)\\).
hint: Work through every subpart in the original question.
example:
![Thomas §1.2 · Exercise 27 · PDF p. 38](assets/recommended/math/thomas-1-2-27-context-1.webp)

![Thomas §1.2 · Exercise 27 · PDF p. 38](assets/recommended/math/thomas-1-2-27-question.webp)
solution:
**Plan — we are going to…**

1. Translate the cubic’s input left by one.

2. Translate its output down by one and move its central anchor point.

**The trick**

Left one means add one inside the cube; down one means subtract one outside.

**What you need to know**

For a horizontal/vertical shift, write the transformed rule as:

\\[
y=F(x-h)+k.
\\]

The original point with coordinates (u,v) moves to (u+h,v+k). A positive horizontal shift moves right; a positive vertical shift moves up. Shape and size are unchanged.

**Step-by-step solution**

1. **Start from the cubic.**

\\[
F(x)=x^3.
\\]

Its central turning-in-curvature point is the origin.

2. **Shift left, then down.**

\\[
y=F(x+1)-1=(x+1)^3-1.
\\]

3. **Move anchor points.** The point map is:

\\[
(u,u^3)\\longmapsto(u-1,u^3-1).
\\]

In particular:

\\[
(-1,-1)\\mapsto(-2,-2),\\quad(0,0)\\mapsto(-1,-1),\\quad(1,1)\\mapsto(0,0).
\\]

Sketch the same increasing cubic through those shifted points, with its inflection point at (−1,−1).

**Use this method again**

For a translated cubic, move its central anchor point, shift a point on either side and keep its increasing S shape.

**Check**

The shifted formula gives the claimed central height:

\\[
y(-1)=0^3-1=-1.
\\]

It also gives zero at input zero, agreeing with the translated original point (1,1).
:::

:::mcq
id: thomas-1-2-29
title: Thomas §1.2 · Exercise 29
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 29 · PDF p. 38](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which equation and graph describe Exercise 29 after the stated shift?
- [ ] a | \\(y=\\sqrt{x-0.81}\\): endpoint \\((0.81,0)\\).
- [ ] b | \\(y=\\sqrt{x}-0.81\\): endpoint \\((0,-0.81)\\).
- [ ] c | \\(y=\\sqrt{x}+0.81\\): endpoint \\((0,0.81)\\).
- [x] d | \\(y=\\sqrt{x+0.81}\\): endpoint \\((-0.81,0)\\), passing through \\((0,0.9)\\), increasing and concave down.
explanation: Left 0.81 changes the input to \\(x+0.81\\). The root begins where this is zero, at \\(x=-0.81\\), and \\(y(0)=\\sqrt{0.81}=0.9\\).
hint: Work through every subpart in the original question.
example:
![Thomas §1.2 · Exercise 29 · PDF p. 38](assets/recommended/math/thomas-1-2-29-context-1.webp)

![Thomas §1.2 · Exercise 29 · PDF p. 38](assets/recommended/math/thomas-1-2-29-question.webp)
solution:
**Plan — we are going to…**

1. Translate the square-root endpoint left by 0.81.

2. Find a second point and preserve the root curve’s shape.

**The trick**

The decimal is inside the radical because the shift is horizontal. Do not subtract 0.81 from the output.

**What you need to know**

For a horizontal/vertical shift, write the transformed rule as:

\\[
y=F(x-h)+k.
\\]

The original point with coordinates (u,v) moves to (u+h,v+k). A positive horizontal shift moves right; a positive vertical shift moves up. Shape and size are unchanged.

**Step-by-step solution**

1. **Write the translated root.**

\\[
y=\\sqrt{x+0.81}.
\\]

This moves the standard root left 0.81.

2. **Find the endpoint and domain.**

\\[
x+0.81\\ge0\\quad\\Longrightarrow\\quad x\\ge-0.81.
\\]

The root is zero at the left endpoint:

\\[
(-0.81,0),\\qquad D=[-0.81,\\infty).
\\]

3. **Locate an easy point.** At horizontal input zero:

\\[
y(0)=\\sqrt{0.81}=0.9.
\\]

Sketch an increasing, concave-down root curve from its endpoint through (0,0.9). The range remains nonnegative:

\\[
R=[0,\\infty).
\\]

**Use this method again**

For a shifted root, set the radicand equal to zero to find its endpoint, then choose a radicand that is a perfect square.

**Check**

When the input is 0.19, the radicand is exactly 1:

\\[
y(0.19)=\\sqrt{0.19+0.81}=1.
\\]

The standard root point (1,1) has moved left 0.81 to (0.19,1), confirming the direction and size of the shift.
:::

:::mcq
id: thomas-1-2-31
title: Thomas §1.2 · Exercise 31
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 31 · PDF p. 38](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which equation and graph result from the shift in Exercise 31?
- [ ] a | \\(y=9x-7\\): a line of slope 9 with intercept \\(-7\\).
- [x] b | \\(y=2x\\): a line of slope 2 through the origin.
- [ ] c | \\(y=2x-14\\): a line of slope 2 with intercept \\(-14\\).
- [ ] d | \\(y=2x+7\\): a line of slope 2 with intercept 7.
explanation: Shifting \\(y=2x-7\\) up 7 gives \\(y=(2x-7)+7=2x\\). The slope stays 2 and the intercept moves to 0.
hint: Work through every subpart in the original question.
example:
![Thomas §1.2 · Exercise 31 · PDF p. 38](assets/recommended/math/thomas-1-2-31-context-1.webp)

![Thomas §1.2 · Exercise 31 · PDF p. 38](assets/recommended/math/thomas-1-2-31-question.webp)
solution:
**Plan — we are going to…**

1. Add the vertical shift to the original output.

2. Simplify and check whether the slope changes.

**The trick**

A vertical shift changes the intercept but leaves the slope unchanged. Here the old intercept cancels exactly.

**What you need to know**

For a horizontal/vertical shift, write the transformed rule as:

\\[
y=F(x-h)+k.
\\]

The original point with coordinates (u,v) moves to (u+h,v+k). A positive horizontal shift moves right; a positive vertical shift moves up. Shape and size are unchanged.

**Step-by-step solution**

1. **Write the starting line.**

\\[
F(x)=2x-7.
\\]

The original slope is 2 and the vertical intercept is −7.

2. **Shift every output up 7.**

\\[
y=F(x)+7=(2x-7)+7=2x.
\\]

3. **Describe the new graph.** It is a line through the origin with slope 2. For every unit right, it rises by 2.

**Use this method again**

For a vertical shift, add the shift outside the entire original rule, then combine constants.

**Check**

The original point (0,−7) moves to (0,0). The original point (1,−5) moves to (1,2). Both satisfy the new equation:

\\[
y=2x.
\\]
:::

:::mcq
id: thomas-1-2-33
title: Thomas §1.2 · Exercise 33
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 33 · PDF p. 38](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which equation and graph describe all the shifts in Exercise 33?
- [ ] a | \\(y=1+\\dfrac1{x+1}\\): asymptotes \\(x=-1\\), \\(y=1\\).
- [ ] b | \\(y=-1+\\dfrac1{x-1}\\): asymptotes \\(x=1\\), \\(y=-1\\).
- [ ] c | \\(y=1-\\dfrac1{x-1}\\): asymptotes \\(x=1\\), \\(y=1\\); the right branch is below \\(y=1\\).
- [x] d | \\(y=1+\\dfrac1{x-1}\\): asymptotes \\(x=1\\) and \\(y=1\\); the right branch is above \\(y=1\\).
explanation: The reciprocal curve shifts right 1 and up 1. Its vertical and horizontal asymptotes shift with it, from \\(x=0,y=0\\) to \\(x=1,y=1\\). The positive right branch retains its orientation.
hint: Work through every subpart in the original question.
example:
![Thomas §1.2 · Exercise 33 · PDF p. 38](assets/recommended/math/thomas-1-2-33-context-1.webp)

![Thomas §1.2 · Exercise 33 · PDF p. 38](assets/recommended/math/thomas-1-2-33-question.webp)
solution:
**Plan — we are going to…**

1. Translate the reciprocal curve right by one.

2. Raise its outputs by one and move both asymptotes.

**The trick**

The vertical asymptote follows the horizontal shift; the horizontal asymptote follows the vertical shift. Neither asymptote is an attained branch point.

**What you need to know**

For a horizontal/vertical shift, write the transformed rule as:

\\[
y=F(x-h)+k.
\\]

The original point with coordinates (u,v) moves to (u+h,v+k). A positive horizontal shift moves right; a positive vertical shift moves up. Shape and size are unchanged.

**Step-by-step solution**

1. **Apply both shifts.** Start from the reciprocal rule:

\\[
F(x)=\\frac1x.
\\]

Right one and up one give:

\\[
y=1+\\frac1{x-1}.
\\]

2. **Move the asymptotes.** The denominator is zero at input 1, giving the vertical asymptote. Far from that input, the reciprocal term approaches zero, giving the horizontal asymptote:

\\[
x=1,\\qquad y=1.
\\]

3. **Locate the branches.** Right of input 1, the reciprocal term is positive, so the graph is above height 1. Left of input 1 it is below height 1.

\\[
D=\\mathbb R\\setminus\\{1\\},\\qquad R=\\mathbb R\\setminus\\{1\\}.
\\]

The points (2,2) and (0,0) anchor the two branches.

**Use this method again**

Translate a reciprocal by moving its asymptote intersection, then check the sign of the reciprocal term on each side.

**Check**

Use one input on each side of the vertical asymptote:

\\[
y(2)=1+1=2,\\qquad y(0)=1-1=0.
\\]

The branches lie above/right and below/left of the shifted center (1,1), as the parent reciprocal does about the origin.
:::

:::mcq
id: thomas-1-2-37
title: Thomas §1.2 · Exercise 37
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 37 · PDF p. 38](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which description uniquely identifies the graph requested in Exercise 37?
- [ ] a | An upward V with vertex \\((-2,0)\\) and y-intercept 2.
- [ ] b | An upward V with vertex \\((0,-2)\\) and y-intercept \\(-2\\).
- [ ] c | A downward V with vertex \\((2,0)\\) and y-intercept \\(-2\\).
- [x] d | An upward V with vertex \\((2,0)\\), slopes \\(-1\\) on the left and \\(1\\) on the right, and y-intercept 2.
explanation: \\(y=|x-2|\\) shifts the absolute-value graph right 2. Its pieces are \\(y=2-x\\) for \\(x\\le2\\) and \\(y=x-2\\) for \\(x\\ge2\\).
hint: Work through every subpart in the original question.
example:
![Thomas §1.2 · Exercise 37 · PDF p. 38](assets/recommended/math/thomas-1-2-37-context-1.webp)

![Thomas §1.2 · Exercise 37 · PDF p. 38](assets/recommended/math/thomas-1-2-37-question.webp)
solution:
**Plan — we are going to…**

1. Move the absolute-value vertex to input 2.

2. Write the left and right linear pieces and their slopes.

**The trick**

The negative input difference on the left becomes positive after absolute value, producing slope −1 rather than +1.

**What you need to know**

Absolute value reverses a negative argument and preserves a nonnegative one:

\\[
|u|=\\begin{cases}-u,&u\\le0,\\\\u,&u\\ge0.\\end{cases}
\\]



**Step-by-step solution**

1. **Find the vertex.**

\\[
y=|x-2|.
\\]

The smallest possible absolute value is zero, reached when the expression inside is zero:

\\[
x-2=0\\quad\\Longrightarrow\\quad(2,0).
\\]

2. **Write the left branch.** For inputs at most 2, the expression inside is nonpositive:

\\[
y=-(x-2)=2-x,\\qquad x\\le2.
\\]

Its slope is −1.

3. **Write the right branch.** For inputs at least 2:

\\[
y=x-2,\\qquad x\\ge2.
\\]

Its slope is +1.

4. **Sketch the V.** Its vertex is (2,0), it opens upward, and its vertical intercept is:

\\[
y(0)=|-2|=2.
\\]



\\[
D=\\mathbb R,\\qquad R=[0,\\infty).
\\]

**Use this method again**

For an absolute-value graph, find where the inside expression is zero and split there to obtain the two straight branches.

**Check**

Equal distances from the vertex give equal heights:

\\[
y(1)=1=y(3).
\\]

The slope falls toward the vertex on the left and rises away from it on the right.
:::

:::mcq
id: thomas-1-2-39
title: Thomas §1.2 · Exercise 39
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 39 · PDF p. 38](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which description uniquely identifies the graph requested in Exercise 39?
- [ ] a | Endpoint \\((1,1)\\), decreasing to the right; domain \\([1,\\infty)\\), range \\((-\\infty,1]\\).
- [x] b | The square-root curve shifted right 1 and up 1: endpoint \\((1,1)\\), passing through \\((2,2)\\); domain \\([1,\\infty)\\), range \\([1,\\infty)\\).
- [ ] c | Endpoint \\((-1,1)\\), domain \\([-1,\\infty)\\), range \\([1,\\infty)\\).
- [ ] d | Endpoint \\((1,-1)\\), domain \\([1,\\infty)\\), range \\([-1,\\infty)\\).
explanation: In \\(y=1+\\sqrt{x-1}\\), subtracting 1 inside the radical shifts the curve right 1 and adding 1 outside shifts it up 1. It remains increasing and concave down.
hint: Work through every subpart in the original question.
example:
![Thomas §1.2 · Exercise 39 · PDF p. 38](assets/recommended/math/thomas-1-2-39-context-1.webp)

![Thomas §1.2 · Exercise 39 · PDF p. 38](assets/recommended/math/thomas-1-2-39-question.webp)
solution:
**Plan — we are going to…**

1. Find the shifted root’s endpoint.

2. Move standard root anchor points and determine domain/range.

**The trick**

The inside −1 shifts the graph right; the outside +1 shifts it up. The endpoint changes in both coordinates.

**What you need to know**

For a horizontal/vertical shift, write the transformed rule as:

\\[
y=F(x-h)+k.
\\]

The original point with coordinates (u,v) moves to (u+h,v+k). A positive horizontal shift moves right; a positive vertical shift moves up. Shape and size are unchanged.

**Step-by-step solution**

1. **Read the two shifts.**

\\[
y=1+\\sqrt{x-1}.
\\]

This is the standard root shifted right 1 and up 1.

2. **Find the endpoint and domain.** The radicand must be nonnegative:

\\[
x-1\\ge0\\quad\\Longrightarrow\\quad x\\ge1.
\\]

At input 1, the output is 1:

\\[
(1,1),\\qquad D=[1,\\infty).
\\]

3. **Find range and anchor points.** The square root is nonnegative, so the output is at least 1:

\\[
R=[1,\\infty).
\\]



\\[
y(2)=1+\\sqrt1=2,\\qquad y(5)=1+\\sqrt4=3.
\\]

Draw the increasing, concave-down curve through (1,1), (2,2) and (5,3).

**Use this method again**

For a translated square root, set the radicand to zero, add the outside shift to its height, then choose square radicands to plot.

**Check**

The standard points (0,0), (1,1) and (4,2) have each moved right 1 and up 1. Their new coordinates are exactly the three derived anchor points.
:::

:::mcq
id: thomas-1-2-41
title: Thomas §1.2 · Exercise 41
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 41 · PDF p. 38](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which description uniquely identifies the graph requested in Exercise 41?
- [ ] a | An upward cusp at \\((1,0)\\), symmetric about \\(x=1\\).
- [ ] b | An upward cusp at \\((0,1)\\), symmetric about the y-axis; range \\([1,\\infty)\\).
- [ ] c | A downward cusp at \\((-1,0)\\); range \\((-\\infty,0]\\).
- [x] d | An upward cusp at \\((-1,0)\\), symmetric about \\(x=-1\\), passing through \\((-2,1)\\) and \\((0,1)\\); domain \\(\\mathbb R\\), range \\([0,\\infty)\\).
explanation: \\(y=(x+1)^{2/3}=\\bigl(\\sqrt[3]{x+1}\\bigr)^2\\) is the standard \\(x^{2/3}\\) curve shifted left 1. Both sides rise from its cusp, and all real inputs are allowed.
hint: Work through every subpart in the original question.
example:
![Thomas §1.2 · Exercise 41 · PDF p. 38](assets/recommended/math/thomas-1-2-41-context-1.webp)

![Thomas §1.2 · Exercise 41 · PDF p. 38](assets/recommended/math/thomas-1-2-41-question.webp)
solution:
**Plan — we are going to…**

1. Interpret the fractional power using a real cube root.

2. Shift its cusp and mirror the branches about the new vertical center line.

**The trick**

A cube root accepts negative inputs. Squaring that root makes the output nonnegative; it does not restrict inputs to be at least −1.

**What you need to know**

The real two-thirds power is defined by taking a cube root first and squaring it:

\\[
u^{2/3}=(\\sqrt[3]u)^2.
\\]

This parent curve has a cusp at zero and is symmetric about the vertical axis.

**Step-by-step solution**

1. **Write the shifted parent curve.**

\\[
y=(x+1)^{2/3}=(\\sqrt[3]{x+1})^2.
\\]

The parent cusp moves left one unit to (−1,0).

2. **Find the domain and range.** Every real input has a real cube root. Its square is nonnegative, and every nonnegative height occurs:

\\[
D=\\mathbb R,\\qquad R=[0,\\infty).
\\]

3. **Find symmetry and points.** Inputs equally far left and right of −1 make opposite cube-root arguments and equal squared outputs:

\\[
y(-2)=(-1)^{2/3}=1,\\qquad y(0)=1^{2/3}=1.
\\]

Draw both arms rising from the cusp, symmetric about the vertical line:

\\[
x=-1.
\\]

**Use this method again**

For an even numerator over an odd root index, use the real odd root first, square afterward and preserve negative-input branches.

**Check**

The farther symmetric pair −9 and 7 both give height 4:

\\[
(\\sqrt[3]{-9+1})^2=(-2)^2=4.
\\]



\\[
(\\sqrt[3]{7+1})^2=2^2=4.
\\]

This checks both the shifted symmetry line and the real negative-input branch.
:::

:::mcq
id: thomas-1-2-43
title: Thomas §1.2 · Exercise 43
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 43 · PDF p. 38](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which description uniquely identifies the graph requested in Exercise 43?
- [ ] a | A downward cusp at \\((0,-1)\\), with no x-intercepts; range \\((-\\infty,-1]\\).
- [x] b | A downward cusp at \\((0,1)\\), symmetric about the y-axis, crossing the x-axis at \\((-1,0)\\) and \\((1,0)\\); range \\((-\\infty,1]\\).
- [ ] c | An upward cusp at \\((0,1)\\), with no x-intercepts; range \\([1,\\infty)\\).
- [ ] d | A downward cusp at \\((1,0)\\), symmetric about \\(x=1\\); range \\((-\\infty,0]\\).
explanation: For \\(y=1-x^{2/3}\\), reflect the standard cusp across the x-axis, then move it up 1. Since \\(x^{2/3}\\ge0\\), the maximum is 1 at \\(x=0\\). The zeros satisfy \\(x^{2/3}=1\\), giving \\(x=\\pm1\\).
hint: Work through every subpart in the original question.
example:
![Thomas §1.2 · Exercise 43 · PDF p. 38](assets/recommended/math/thomas-1-2-43-context-1.webp)

![Thomas §1.2 · Exercise 43 · PDF p. 38](assets/recommended/math/thomas-1-2-43-question.webp)
solution:
**Plan — we are going to…**

1. Reflect the two-thirds-power cusp vertically.

2. Raise it one unit and find its intercepts and output bound.

**The trick**

The minus is outside the fractional power, so it reverses the outputs. Both sides of the cusp point down from the maximum height 1.

**What you need to know**

The real two-thirds power is the square of a cube root and is nonnegative for every real input:

\\[
x^{2/3}=(\\sqrt[3]x)^2\\ge0.
\\]

Negating reflects a graph across the horizontal axis; adding 1 raises it.

**Step-by-step solution**

1. **Transform the parent curve.**

\\[
y=1-x^{2/3}.
\\]

Reflect the upward cusp downward, then raise it one unit. Its tip is (0,1).

2. **Find domain and range.** The cube root permits every real input, and the subtracted square is nonnegative:

\\[
D=\\mathbb R,\\qquad y\\le1.
\\]

Arbitrarily large input magnitudes make arbitrarily negative outputs:

\\[
R=(-\\infty,1].
\\]

3. **Find the horizontal intercepts.**

\\[
0=1-x^{2/3}\\quad\\Longrightarrow\\quad(\\sqrt[3]x)^2=1.
\\]



\\[
\\sqrt[3]x=\\pm1\\quad\\Longrightarrow\\quad x=\\pm1.
\\]

The graph passes through (−1,0) and (1,0) and is symmetric about the vertical axis.

**Use this method again**

For a reflected power cusp, use its nonnegative parent output to find the maximum, then solve intercept equations with both root signs.

**Check**

At the symmetric inputs ±8:

\\[
y(8)=1-2^2=-3,\\qquad y(-8)=1-(-2)^2=-3.
\\]

Equal heights below the tip confirm the symmetry and downward orientation.
:::

:::mcq
id: thomas-1-2-45
title: Thomas §1.2 · Exercise 45
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 45 · PDF p. 38](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which description uniquely identifies the graph requested in Exercise 45?
- [ ] a | The increasing cube-root curve shifted left 1 and down 1: central point \\((-1,-1)\\), x-intercept \\((0,0)\\).
- [ ] b | The increasing cube-root curve shifted right 1 and up 1: central point \\((1,1)\\), x-intercept \\((0,0)\\).
- [ ] c | A decreasing cube-root curve with central point \\((1,-1)\\), x-intercept \\((0,0)\\).
- [x] d | The increasing cube-root curve shifted right 1 and down 1: vertical-tangent point \\((1,-1)\\), x-intercept \\((2,0)\\), y-intercept \\((0,-2)\\).
explanation: \\(y=\\sqrt[3]{x-1}-1\\) moves each point \\((u,\\sqrt[3]u)\\) to \\((u+1,\\sqrt[3]u-1)\\). Its domain and range remain \\(\\mathbb R\\), and the original vertical tangent moves to \\((1,-1)\\).
hint: Work through every subpart in the original question.
example:
![Thomas §1.2 · Exercise 45 · PDF p. 38](assets/recommended/math/thomas-1-2-45-context-1.webp)

![Thomas §1.2 · Exercise 45 · PDF p. 38](assets/recommended/math/thomas-1-2-45-question.webp)
solution:
**Plan — we are going to…**

1. Translate the cube-root curve right and down.

2. Find the moved central point and both axis intercepts.

**The trick**

This is a cube root, so all real inputs remain allowed. Its center is a vertical-tangent point, not a cusp or endpoint.

**What you need to know**

For a horizontal/vertical shift, write the transformed rule as:

\\[
y=F(x-h)+k.
\\]

The original point with coordinates (u,v) moves to (u+h,v+k). A positive horizontal shift moves right; a positive vertical shift moves up. Shape and size are unchanged. The real cube-root parent is increasing and has domain and range equal to all real numbers.

**Step-by-step solution**

1. **Apply the translations.**

\\[
y=\\sqrt[3]{x-1}-1.
\\]

Move the parent right 1 and down 1. The central vertical-tangent point moves from the origin to (1,−1).

2. **Find the horizontal intercept.** Set the output to zero, add 1 and cube:

\\[
0=\\sqrt[3]{x-1}-1\\quad\\Longrightarrow\\quad\\sqrt[3]{x-1}=1.
\\]



\\[
x-1=1\\quad\\Longrightarrow\\quad x=2.
\\]

The intercept is (2,0).

3. **Find the vertical intercept.**

\\[
y(0)=\\sqrt[3]{-1}-1=-1-1=-2.
\\]

The intercept is (0,−2).

4. **Describe the graph.** Draw an increasing cube-root curve through those points, steepest at (1,−1).

\\[
D=\\mathbb R,\\qquad R=\\mathbb R.
\\]

**Use this method again**

For a shifted cube root, move its central point and use odd-root algebra for intercepts; retain the negative-input branch.

**Check**

The standard cube-root points (−1,−1), (0,0) and (1,1) move to (0,−2), (1,−1) and (2,0), exactly reproducing the intercept and center calculations.
:::

:::mcq
id: thomas-1-2-47
title: Thomas §1.2 · Exercise 47
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 47 · PDF p. 38](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which description uniquely identifies the graph requested in Exercise 47?
- [ ] a | Asymptotes \\(x=2\\), \\(y=0\\); negative to the right, positive to the left; y-intercept \\(1/2\\).
- [x] b | A reciprocal curve with asymptotes \\(x=2\\), \\(y=0\\); positive to the right of \\(x=2\\), negative to the left; y-intercept \\(-1/2\\).
- [ ] c | Asymptotes \\(x=-2\\), \\(y=0\\); positive right branch; y-intercept \\(1/2\\).
- [ ] d | Asymptotes \\(x=0\\), \\(y=-2\\); right branch above \\(y=-2\\).
explanation: \\(y=1/(x-2)\\) shifts \\(1/x\\) right 2. A positive denominator gives a positive right branch; a negative denominator gives a negative left branch. There is no x-intercept; the domain excludes 2 and the range excludes 0.
hint: Work through every subpart in the original question.
example:
![Thomas §1.2 · Exercise 47 · PDF p. 38](assets/recommended/math/thomas-1-2-47-context-1.webp)

![Thomas §1.2 · Exercise 47 · PDF p. 38](assets/recommended/math/thomas-1-2-47-question.webp)
solution:
**Plan — we are going to…**

1. Move the reciprocal pole to input 2.

2. Determine branch signs and intercepts around the new asymptote.

**The trick**

The shift changes only the vertical asymptote. There is no vertical output shift, so the horizontal asymptote remains height zero.

**What you need to know**

A reciprocal curve is undefined when its denominator is zero and never has output zero if its numerator is nonzero. A horizontal shift moves every original input by the same amount.

**Step-by-step solution**

1. **Read the translated rule.**

\\[
y=\\frac1{x-2}.
\\]

It is the standard reciprocal moved right 2.

2. **Find asymptotes and restrictions.**

\\[
x=2\\quad\\text{(vertical)},\\qquad y=0\\quad\\text{(horizontal)}.
\\]



\\[
D=\\mathbb R\\setminus\\{2\\},\\qquad R=\\mathbb R\\setminus\\{0\\}.
\\]

3. **Determine the branches.** To the right of input 2 the denominator and output are positive; to the left they are negative. A nonzero numerator prevents any horizontal-axis intercept.

4. **Find the vertical intercept.**

\\[
y(0)=\\frac1{-2}=-\\frac12.
\\]

Sketch the negative left branch through (0,−1/2) and a positive right branch approaching both asymptotes.

**Use this method again**

For a shifted reciprocal, locate the zero denominator, keep the parent horizontal asymptote unless an outside constant changes it, then use denominator signs.

**Check**

One unit on either side of the pole gives:

\\[
y(1)=-1,\\qquad y(3)=1.
\\]

The two outputs confirm the branch signs and the center of the translation at (2,0).
:::

:::mcq
id: thomas-1-2-49
title: Thomas §1.2 · Exercise 49
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 49 · PDF p. 38](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which description uniquely identifies the graph requested in Exercise 49?
- [ ] a | A reciprocal curve shifted right 2: asymptotes \\(x=2\\), \\(y=0\\).
- [ ] b | A reciprocal curve shifted down 2: asymptotes \\(x=0\\), \\(y=-2\\); x-intercept \\((1/2,0)\\).
- [ ] c | Asymptotes \\(x=0\\), \\(y=2\\); x-intercept \\((1/2,0)\\); right branch below \\(y=2\\).
- [x] d | A reciprocal curve shifted up 2: asymptotes \\(x=0\\), \\(y=2\\); x-intercept \\((-1/2,0)\\); right branch above \\(y=2\\).
explanation: \\(y=1/x+2\\) raises every point of \\(1/x\\) by 2. Setting \\(y=0\\) gives \\(x=-1/2\\). The domain excludes 0 and the range excludes 2.
hint: Work through every subpart in the original question.
example:
![Thomas §1.2 · Exercise 49 · PDF p. 38](assets/recommended/math/thomas-1-2-49-context-1.webp)

![Thomas §1.2 · Exercise 49 · PDF p. 38](assets/recommended/math/thomas-1-2-49-question.webp)
solution:
**Plan — we are going to…**

1. Raise the parent reciprocal by two.

2. Move its horizontal asymptote and calculate the horizontal intercept.

**The trick**

The +2 is outside the fraction. It moves the horizontal asymptote, while the excluded input remains zero.

**What you need to know**

A vertical shift adds the same amount to every output. A reciprocal’s vertical pole comes from its denominator; an unattained output shifts with its horizontal asymptote.

**Step-by-step solution**

1. **Apply the shift.**

\\[
y=\\frac1x+2.
\\]

Raise the ordinary reciprocal two units.

2. **Find asymptotes and restrictions.** The denominator still excludes zero. The reciprocal term never equals zero, so the new output never equals 2:

\\[
x=0\\quad\\text{(vertical)},\\qquad y=2\\quad\\text{(horizontal)}.
\\]



\\[
D=\\mathbb R\\setminus\\{0\\},\\qquad R=\\mathbb R\\setminus\\{2\\}.
\\]

3. **Find the horizontal intercept.**

\\[
0=\\frac1x+2\\quad\\Longrightarrow\\quad\\frac1x=-2\\quad\\Longrightarrow\\quad x=-\\frac12.
\\]

There is no vertical-axis intercept because input zero is excluded.

4. **Describe the branches.** For positive inputs the reciprocal term is positive, so the right branch lies above height 2. For negative inputs the left branch lies below height 2.

**Use this method again**

For an outside vertical shift of a reciprocal, move output values and the horizontal asymptote while retaining the denominator’s input exclusion.

**Check**

At the proposed horizontal intercept:

\\[
\\frac1{-1/2}+2=-2+2=0.
\\]

The parent points (1,1) and (−1,−1) shift to (1,3) and (−1,1), confirming the raised branches.
:::

:::mcq
id: thomas-1-2-51
title: Thomas §1.2 · Exercise 51
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 51 · PDF p. 38](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which description uniquely identifies the graph requested in Exercise 51?
- [ ] a | An inverse-square curve shifted right 1 and up 1: asymptotes \\(x=1\\), \\(y=1\\).
- [x] b | An inverse-square curve shifted right 1: asymptotes \\(x=1\\), \\(y=0\\); both branches positive, symmetric about \\(x=1\\), through \\((0,1)\\) and \\((2,1)\\).
- [ ] c | An inverse-square curve shifted left 1: asymptotes \\(x=-1\\), \\(y=0\\); both branches positive.
- [ ] d | A reciprocal curve with asymptotes \\(x=1\\), \\(y=0\\); left branch negative and right branch positive.
explanation: \\(y=1/(x-1)^2\\) is positive on both sides of its vertical asymptote and tends to \\(+\\infty\\) as \\(x\\to1\\). It approaches 0 from above as \\(|x|\\to\\infty\\); its range is \\((0,\\infty)\\).
hint: Work through every subpart in the original question.
example:
![Thomas §1.2 · Exercise 51 · PDF p. 38](assets/recommended/math/thomas-1-2-51-context-1.webp)

![Thomas §1.2 · Exercise 51 · PDF p. 38](assets/recommended/math/thomas-1-2-51-question.webp)
solution:
**Plan — we are going to…**

1. Recognize the inverse-square parent and shift it right.

2. Use the squared denominator to locate positive branches and symmetry.

**The trick**

The square makes both branches positive, unlike a simple reciprocal. The excluded input 1 is a vertical asymptote, not a point on the curve.

**What you need to know**

The square of a nonzero real number is positive. Its reciprocal is positive, tends upward without bound when the square approaches zero and approaches zero for large input magnitude.

**Step-by-step solution**

1. **Read the translated curve.**

\\[
y=\\frac1{(x-1)^2}.
\\]

This is the inverse-square parent shifted right 1.

2. **Find restrictions and asymptotes.**

\\[
x\\ne1,\\qquad x=1\\quad\\text{(vertical asymptote)}.
\\]

As the denominator grows without bound, the output approaches zero but never reaches it:

\\[
y=0\\quad\\text{(horizontal asymptote)}.
\\]



\\[
D=\\mathbb R\\setminus\\{1\\},\\qquad R=(0,\\infty).
\\]

3. **Find symmetry and anchor points.** Equal distances from input 1 have equal squared denominators. The symmetry line is vertical at input 1:

\\[
y(0)=1,\\qquad y(2)=1.
\\]

Draw two positive branches that rise without bound near the pole and flatten toward zero far from it.

**Use this method again**

For an inverse-square shift, use positivity of the squared denominator and reflect one branch across the vertical line through its pole.

**Check**

Half a unit on either side of the pole gives the same height:

\\[
y\\!\\left(\\frac12\\right)=\\frac1{(-1/2)^2}=4,\\qquad y\\!\\left(\\frac32\\right)=4.
\\]

This confirms both positivity and shifted symmetry.
:::

:::mcq
id: thomas-1-2-53
title: Thomas §1.2 · Exercise 53
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 53 · PDF p. 38](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: Which description uniquely identifies the graph requested in Exercise 53?
- [ ] a | An inverse-square curve shifted right 1: asymptotes \\(x=1\\), \\(y=0\\).
- [ ] b | An inverse-square curve shifted down 1: asymptotes \\(x=0\\), \\(y=-1\\), through \\((\\pm1,0)\\).
- [ ] c | An inverted inverse-square curve shifted up 1: asymptotes \\(x=0\\), \\(y=1\\); both branches below \\(y=1\\).
- [x] d | An inverse-square curve shifted up 1: asymptotes \\(x=0\\), \\(y=1\\); both branches lie above \\(y=1\\), symmetric about the y-axis, through \\((\\pm1,2)\\).
explanation: \\(y=1/x^2+1\\) adds 1 to all ordinates of the inverse-square graph. Its domain is \\(\\mathbb R\\setminus\\{0\\}\\) and its range is \\((1,\\infty)\\); it has no axis intercepts.
hint: Work through every subpart in the original question.
example:
![Thomas §1.2 · Exercise 53 · PDF p. 38](assets/recommended/math/thomas-1-2-53-context-1.webp)

![Thomas §1.2 · Exercise 53 · PDF p. 38](assets/recommended/math/thomas-1-2-53-question.webp)
solution:
**Plan — we are going to…**

1. Raise the inverse-square graph by one.

2. Determine its excluded input, unattained lower output and symmetry.

**The trick**

The graph stays strictly above height 1; it never meets the horizontal asymptote. Adding 1 outside does not fill the original hole at input zero.

**What you need to know**

For any nonzero real input, the inverse square is positive. An outside shift raises every output, including the limiting horizontal height.

**Step-by-step solution**

1. **Read the transformation.**

\\[
y=\\frac1{x^2}+1.
\\]

This is the inverse-square parent moved up 1.

2. **Determine domain and asymptotes.** The denominator is zero at input zero, giving the vertical asymptote. At large input magnitude the inverse square approaches zero, so the output approaches 1:

\\[
x=0\\quad\\text{(vertical)},\\qquad y=1\\quad\\text{(horizontal)}.
\\]



\\[
D=\\mathbb R\\setminus\\{0\\},\\qquad R=(1,\\infty).
\\]

3. **Find symmetry and points.** The square removes the sign of the input, so the graph is symmetric about the vertical axis:

\\[
y(1)=y(-1)=2.
\\]

Both branches lie above height 1 and rise without bound near zero.

4. **Check intercepts.** A zero output is impossible because the output exceeds 1. A vertical-axis intercept is impossible because input zero is excluded. Thus there are **no axis intercepts**.

**Use this method again**

For a vertically shifted inverse square, keep its pole, add the shift to the unattained lower output bound and preserve even symmetry.

**Check**

At opposite inputs ±2:

\\[
y(2)=y(-2)=\\frac14+1=\\frac54>1.
\\]

The unchanged equality of opposite-input outputs confirms symmetry; the strict inequality confirms the open range endpoint.
:::

:::mcq
id: thomas-1-2-55
title: Thomas §1.2 · Exercise 55
kicker: Assigned textbook exercise
reference: [Thomas' Calculus 12e · Exercise 55 · PDF p. 38](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=395608)
question: For all eight transformed graphs (a)–(h) in Exercise 55, select the complete list of (domain; range) pairs. The graph transformations are described in the solution.
- [ ] a | (a) \\([0,2];[2,3]\\), (b) \\([0,2];[-1,0]\\), (c) \\([0,2];[0,2]\\), (d) \\([0,2];[0,1]\\), (e) \\([-2,0];[0,1]\\), (f) \\([1,3];[0,1]\\), (g) \\([-2,0];[-1,0]\\), (h) \\([-1,1];[-1,0]\\).
- [x] b | (a) \\([0,2];[2,3]\\), (b) \\([0,2];[-1,0]\\), (c) \\([0,2];[0,2]\\), (d) \\([0,2];[-1,0]\\), (e) \\([-2,0];[0,1]\\), (f) \\([1,3];[0,1]\\), (g) \\([-2,0];[0,1]\\), (h) \\([-1,1];[0,1]\\).
- [ ] c | (a) \\([2,4];[0,1]\\), (b) \\([-1,1];[0,1]\\), (c) \\([0,4];[0,1]\\), (d) \\([-2,0];[0,1]\\), (e) \\([0,2];[2,3]\\), (f) \\([0,2];[-1,0]\\), (g) \\([0,2];[-1,0]\\), (h) \\([0,2];[0,1]\\).
- [ ] d | (a) \\([0,2];[2,3]\\), (b) \\([0,2];[-1,0]\\), (c) \\([0,2];[0,2]\\), (d) \\([0,2];[-1,0]\\), (e) \\([2,4];[0,1]\\), (f) \\([-1,1];[0,1]\\), (g) \\([-2,0];[0,1]\\), (h) \\([1,3];[0,1]\\).
explanation: Use a point \\((u,v)\\) on the original graph, with \\(0\\le u\\le2\\) and \\(0\\le v\\le1\\). The complete graph point maps are: (a) \\((u,v+2)\\), up 2; (b) \\((u,v-1)\\), down 1; (c) \\((u,2v)\\), vertical stretch by 2; (d) \\((u,-v)\\), reflection in the x-axis; (e) \\((u-2,v)\\), left 2; (f) \\((u+1,v)\\), right 1; (g) \\((-u,v)\\), reflection in the y-axis; (h) \\((u-1,1-v)\\), left 1, reflect in the x-axis, then up 1. Mapping the original domain and range by each rule gives all eight pairs. For (h), the endpoint heights become 1 while the original maximum becomes 0.
hint: Work through every subpart in the original question.
example:
![Thomas §1.2 · Exercise 55 · PDF p. 38](assets/recommended/math/thomas-1-2-55-question.webp)
solution:
**Plan — we are going to…**

1. Map original graph points under each of the eight transformations.

2. Apply each point map to the original domain and range endpoints.

**The trick**

Inside changes move input coordinates in the opposite direction. A reflected output interval reverses order; sort its endpoints before writing the range.

**What you need to know**

The supplied graph has these original input and output intervals:

\\[
0\\le u\\le2,\\qquad0\\le v\\le1.
\\]

Let (u,v) be a point on the original graph. An outside change modifies v; an inside change must be solved to find the new horizontal coordinate. All finite interval endpoints here are attained.

**Step-by-step solution**

1. **Part (a): add 2 to every output.**

\\[
(u,v)\\longmapsto(u,v+2).
\\]

Shift the graph up 2:

\\[
D=[0,2],\\qquad R=[2,3].
\\]

2. **Part (b): subtract 1 from every output.**

\\[
(u,v)\\longmapsto(u,v-1).
\\]

Shift the graph down 1:

\\[
D=[0,2],\\qquad R=[-1,0].
\\]

3. **Part (c): double every height.**

\\[
(u,v)\\longmapsto(u,2v).
\\]

Stretch vertically by a factor of 2; horizontal positions stay fixed:

\\[
D=[0,2],\\qquad R=[0,2].
\\]

4. **Part (d): negate every height.**

\\[
(u,v)\\longmapsto(u,-v).
\\]

Reflect across the horizontal axis. The old height 1 becomes −1 and the old height zero stays zero:

\\[
D=[0,2],\\qquad R=[-1,0].
\\]

5. **Part (e): add 2 inside the input.** To reproduce original input u, solve for the new input:

\\[
x+2=u\\quad\\Longrightarrow\\quad x=u-2.
\\]

The point map shifts left 2:

\\[
(u,v)\\longmapsto(u-2,v).
\\]



\\[
D=[-2,0],\\qquad R=[0,1].
\\]

6. **Part (f): subtract 1 inside the input.**

\\[
x-1=u\\quad\\Longrightarrow\\quad x=u+1.
\\]

Shift right 1:

\\[
(u,v)\\longmapsto(u+1,v).
\\]



\\[
D=[1,3],\\qquad R=[0,1].
\\]

7. **Part (g): negate the input.**

\\[
-x=u\\quad\\Longrightarrow\\quad x=-u.
\\]

Reflect across the vertical axis; the original right endpoint moves to −2:

\\[
(u,v)\\longmapsto(-u,v).
\\]



\\[
D=[-2,0],\\qquad R=[0,1].
\\]

8. **Part (h): shift the input left, reflect heights and raise them.**

\\[
y=-f(x+1)+1.
\\]

The point map is:

\\[
(u,v)\\longmapsto(u-1,1-v).
\\]

Shift left 1, reflect across the horizontal axis, then move up 1. The old zero-height endpoints rise to height 1, and the old maximum drops to zero:

\\[
D=[-1,1],\\qquad R=[0,1].
\\]

**Use this method again**

To transform a whole graph and its intervals, write a point map first; then map endpoints and extrema and sort the new interval bounds.

**Check**

The original endpoints (0,0) and (2,0), and the original peak (1,1), become under part (h):

\\[
(-1,1),\\qquad(1,1),\\qquad(0,0).
\\]

These points check the shifted domain, the unchanged numerical range, and the reversed hump orientation. They also distinguish part (h) from a simple left shift.
:::

:::mcq
id: past-calculus-2013-q4-5
title: Past paper · IUG Calculus A 2013 · First midterm · Q4(5) · 2013
kicker: PAST PAPER · Calculus Exam: Islamic University of Gaza (first midterm, 23 Oct 2013)
reference: [Calculus Exam: Islamic University of Gaza (first midterm, 23 Oct 2013), p. 4](https://studylib.net/doc/25638836/calculus-a-first-2013)
question: The graph h(x)=−x² is obtained from f(x)=x² by reflecting across the:
- [x] a | x-axis
- [ ] b | y-axis
- [ ] c | origin
- [ ] d | line y=x
explanation: Correct answer: x-axis
hint: Review the original paper and the lesson concepts before retrying.
solution:
**Plan — we are going to…**

1. Compare each new output with the original quadratic’s output.

2. Name the axis across which the output sign reverses.

**The trick**

The minus sign is outside the squared input. It changes output signs, so the reflection is vertical across the horizontal axis.

**What you need to know**

A reflection across the horizontal axis sends a point (u,v) to (u,−v). A reflection across the vertical axis instead changes the input sign.

**Step-by-step solution**

1. **Compare the two rules.**

\\[
f(x)=x^2,\\qquad h(x)=-x^2=-f(x).
\\]

The horizontal coordinate remains fixed and the output is negated.

2. **Identify the reflection.** Each point on the upward parabola is reflected to the same input below the horizontal axis. Thus the graph is reflected across the **x-axis**.

**Use this method again**

An outside minus negates heights and reflects across the horizontal axis; an inside minus changes horizontal positions.

**Check**

The original point (2,4) becomes (2,−4):

\\[
h(2)=-(2)^2=-4.
\\]

That point is its reflection across the horizontal axis. Reflecting the original quadratic across the vertical axis would leave it unchanged.
:::

:::mcq
id: past-calculus-2006-q1-5
title: Past paper · IUG Calculus A 2006 · First midterm · Q1(5) · 2006
kicker: PAST PAPER · The Islamic University of Gaza Calculus A first midterm (5 Nov 2006)
reference: [The Islamic University of Gaza Calculus A first midterm (5 Nov 2006), p. 1](https://www.scribd.com/document/963105786/fm-5-11-2006)
question: Relative to f(x)=x², the graph g(x)=(x+3)²−1 is shifted:
- [ ] a | 3 right and 1 up
- [x] b | 3 left and 1 down
- [ ] c | 3 left and 1 up
- [ ] d | 3 right and 1 down
explanation: Correct answer: 3 left and 1 down
hint: Review the original paper and the lesson concepts before retrying.
solution:
**Plan — we are going to…**

1. Match the quadratic to the standard shifted form.

2. Read its vertex movement from the two shifts.

**The trick**

The plus 3 inside means a shift left 3. The minus 1 outside means a shift down 1.

**What you need to know**

For a horizontal/vertical shift, write the transformed rule as:

\\[
y=F(x-h)+k.
\\]

The original point with coordinates (u,v) moves to (u+h,v+k). A positive horizontal shift moves right; a positive vertical shift moves up. Shape and size are unchanged.

**Step-by-step solution**

1. **Rewrite the horizontal bracket.**

\\[
g(x)=(x+3)^2-1=\\bigl(x-(-3)\\bigr)^2-1.
\\]

2. **Read the vertex.** The original quadratic has vertex at the origin. The new horizontal coordinate is −3 and the new vertical coordinate is −1:

\\[
(0,0)\\longmapsto(-3,-1).
\\]

3. **State the movement.** The graph is shifted **3 units left and 1 unit down**, preserving the upward-opening parabola’s shape.

**Use this method again**

For a shifted quadratic, rewrite the input bracket as input minus the horizontal shift, then read the outside vertical shift directly.

**Check**

At input −3 the bracket is zero and the output is −1:

\\[
g(-3)=0^2-1=-1.
\\]

The original point (1,1) moves to (−2,0), which the new rule also satisfies:

\\[
g(-2)=1^2-1=0.
\\]
:::`};export{e as default};