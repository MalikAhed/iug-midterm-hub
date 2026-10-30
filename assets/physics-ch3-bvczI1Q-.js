var e={id:`physics-ch3`,title:`Vectors`,summary:`Serway/Jewett 9e · Chapter 3 · original textbook exercises and verified practice.`,subjectId:`physics`,reward:0,status:`published`,authoringSource:`:::mcq
id: phys-ch3-p26
title: Serway/Jewett · Problem 3.26
reference: [Serway/Jewett 9e · Problem 3.26](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the complete original problem?
- [x] a | \\(C=(5,4), D=(-1,8)\\); polar forms (6.40, 38.7°) and (8.06, 97.1°).
- [ ] b | \\(C=(5,4), D=(1,-8)\\); polar forms (6.40, 38.7°) and (8.06, 277.1°).
- [ ] c | \\(C=(-1,8), D=(5,4)\\); polar forms (8.06, 97.1°) and (6.40, 38.7°).
- [ ] d | \\(C=(6,-12), D=(2/3,-3)\\); polar forms (13.4, 296.6°) and (3.07, 282.5°).
explanation: With \\(A=(2,6),B=(3,-2)\\), component addition gives \\(C=(5,4)\\) and subtraction gives \\(D=(-1,8)\\). A tip-to-tail drawing gives the same vectors. Their lengths are √41 and √65.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 3.26 — complete original problem](assets/lessons/physics/recommended/ch3-p26.webp)
solution:
**Plan — we are going to…**

1. Sketch the sum by placing B's tail at A's tip.
2. Sketch the difference by placing the reversed B at A's tip.
3. Calculate both component pairs.
4. Convert each pair to polar form.

**The trick**

**A − B = A + reversed B.** Reverse both components of B, not just x.

**What you need to know**

The given vectors have components:

\\[
\\vec A=(2.00,6.00),\\qquad \\vec B=(3.00,-2.00).
\\]

An arrow's location can be moved for a tip-to-tail drawing without changing its length or direction. Its negative reverses direction:

\\[
-\\vec B=(-3.00,2.00).
\\]

**Step-by-step solution**

1. **Part (a): draw tip-to-tail.**

- **A:** origin → (2,6).
- **B:** from A's tip, move 3 right and 2 down.
- **C:** origin → final tip, (5,4).

2. **Draw the difference.** Start with A again. From (2,6), draw negative B by moving 3 left and 2 up. Draw D from the origin to the new tip, (−1,8).

3. **Part (b): calculate the sum in unit-vector form.**

\\[
C_x=2.00+3.00=5.00
\\]

\\[
C_y=6.00+(-2.00)=4.00
\\]

\\[
\\vec C=5.00\\hat i+4.00\\hat j.
\\]

4. **Calculate the difference in unit-vector form.**

\\[
D_x=2.00-3.00=-1.00
\\]

\\[
D_y=6.00-(-2.00)=8.00
\\]

\\[
\\vec D=-1.00\\hat i+8.00\\hat j.
\\]

5. **Part (c): convert C to polar form.** Both components are positive:

\\[
C=\\sqrt{5.00^2+4.00^2}=\\sqrt{41.0}=6.40
\\]

\\[
\\theta_C=\\tan^{-1}(4.00/5.00)=38.7^\\circ.
\\]

6. **Convert D to polar form.** Its signs (−,+) place it in quadrant II:

\\[
D=\\sqrt{(-1.00)^2+8.00^2}=\\sqrt{65.0}=8.06
\\]

\\[
\\alpha=\\tan^{-1}(8.00/1.00)=82.9^\\circ
\\]

\\[
\\theta_D=180^\\circ-82.9^\\circ=97.1^\\circ.
\\]

Thus the polar answers are **C: 6.40 at 38.7°; D: 8.06 at 97.1°**, counterclockwise from positive x.

**Use this method again**

Tip-to-tail sketch → predict quadrant → component calculation → polar form.

**Check**

Add the sum and difference to recover twice A:

\\[
\\vec C+\\vec D=(5,4)+(-1,8)=(4,12)=2(2,6)=2\\vec A.
\\]

Subtract the difference from the sum to recover twice B:

\\[
\\vec C-\\vec D=(5,4)-(-1,8)=(6,-4)=2(3,-2)=2\\vec B.
\\]

C points right/up and D left/up, agreeing with the reported polar quadrants.
:::

:::mcq
id: phys-ch3-p36
title: Serway/Jewett · Problem 3.36
reference: [Serway/Jewett 9e · Problem 3.36](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the complete original problem?
- [ ] a | (a) √35 m; (b) √38 m
- [ ] b | (a) √155 m; (b) √362 m
- [ ] c | (a) 9 m; (b) 30 m
- [x] d | (a) √35 m; (b) √362 m
explanation: \\(C=A+B=(5,-1,-3)\\), so \\(|C|=\\sqrt{35}\\). \\(D=2A-B=(4,-11,15)\\), so \\(|D|=\\sqrt{362}\\).
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 3.36 — complete original problem](assets/lessons/physics/recommended/ch3-p36.webp)
solution:
**Plan — we are going to…**

1. Put the x, y, and z components in the same order.
2. Add corresponding components for C.
3. Multiply every component of A by 2, then subtract B for D.
4. Use the three-dimensional length formula for each result.

**The trick**

The **2 multiplies every component** of A. Subtracting B's negative z component adds 7.

**What you need to know**

- **i-hat** = unit arrow along +x.
- **j-hat** = unit arrow along +y.
- **k-hat** = unit arrow along +z.

The three axes are perpendicular:

\\[
\\vec A=(3,-4,4)\\ \\mathrm m,\\qquad \\vec B=(2,3,-7)\\ \\mathrm m.
\\]

In three dimensions, the magnitude formula has three squared terms:

\\[
|\\vec R|=\\sqrt{R_x^2+R_y^2+R_z^2}.
\\]

**Step-by-step solution**

1. **Part (a): calculate C's components.**

\\[
C_x=3+2=5\\ \\mathrm m
\\]

\\[
C_y=-4+3=-1\\ \\mathrm m
\\]

\\[
C_z=4+(-7)=-3\\ \\mathrm m.
\\]

2. **Write C in rectangular form and calculate its length.**

\\[
\\vec C=(5\\hat i-\\hat j-3\\hat k)\\ \\mathrm m
\\]

\\[
C=\\sqrt{5^2+(-1)^2+(-3)^2}
\\]

\\[
C=\\sqrt{25+1+9}=\\sqrt{35}\\ \\mathrm m\\approx5.92\\ \\mathrm m.
\\]

3. **Part (b): multiply A by 2 first.**

\\[
2\\vec A=(6,-8,8)\\ \\mathrm m.
\\]

4. **Subtract B component by component.**

\\[
D_x=6-2=4\\ \\mathrm m
\\]

\\[
D_y=-8-3=-11\\ \\mathrm m
\\]

\\[
D_z=8-(-7)=8+7=15\\ \\mathrm m.
\\]

5. **Write D in rectangular form and find its length.**

\\[
\\vec D=(4\\hat i-11\\hat j+15\\hat k)\\ \\mathrm m
\\]

\\[
D=\\sqrt{4^2+(-11)^2+15^2}
\\]

\\[
D=\\sqrt{16+121+225}=\\sqrt{362}\\ \\mathrm m\\approx19.0\\ \\mathrm m.
\\]

**Use this method again**

Use x/y/z columns: apply multipliers → add/subtract → calculate length.

**Check**

Reverse the operations to recover the original A:

\\[
\\vec C-\\vec B=(5,-1,-3)-(2,3,-7)=(3,-4,4)=\\vec A.
\\]

\\[
\\frac{\\vec D+\\vec B}{2}=\\frac{(4,-11,15)+(2,3,-7)}{2}=(3,-4,4)=\\vec A.
\\]

Each calculated length exceeds the magnitude of each of its own components, as required.
:::

:::mcq
id: phys-ch3-p37
title: Serway/Jewett · Problem 3.37
reference: [Serway/Jewett 9e · Problem 3.37](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the complete original problem?
- [ ] a | (a) a=−5, b=−7; (b) the magnitude equation alone fixes both unknowns.
- [ ] b | (a) infinitely many pairs; (b) vectors cannot determine two unknowns.
- [x] c | (a) a=5, b=7; (b) one vector equation represents two independent scalar component equations.
- [ ] d | (a) a=7, b=5; (b) there is only one scalar equation.
explanation: The components give \\(6a-8b+26=0\\) and \\(-8a+3b+19=0\\). Solving yields a=5, b=7; the equation is a vector equality, so each component must vanish.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 3.37 — complete original problem](assets/lessons/physics/recommended/ch3-p37.webp)
solution:
**Plan — we are going to…**

1. Expand the vector equation into separate x and y equations.
2. Eliminate one unknown using ordinary simultaneous-equation algebra.
3. Substitute to get the other unknown.
4. Explain why one vector equation contains two scalar equations.

**The trick**

**Zero vector → every component is zero.** One vector equation therefore gives separate x and y equations.

**What you need to know**

The given component pairs are:

\\[
\\vec A=(6,-8),\\quad \\vec B=(-8,3),\\quad \\vec C=(26,19).
\\]

Multiplying a vector by a number multiplies every component. Vector equality requires equality in each component separately.

**Step-by-step solution**

1. **Part (a): write the x equation.**

\\[
6a-8b+26=0
\\]

Move the constant to the other side:

\\[
6a-8b=-26.\\tag{1}
\\]

2. **Write the y equation.**

\\[
-8a+3b+19=0
\\]

\\[
-8a+3b=-19.\\tag{2}
\\]

3. **Make the b coefficients opposites.** Multiply equation (1) by 3, and equation (2) by 8:

\\[
18a-24b=-78
\\]

\\[
-64a+24b=-152.
\\]

4. **Add the two equations.** The b terms cancel:

\\[
(18a-64a)+(-24b+24b)=-78-152
\\]

\\[
-46a=-230
\\]

\\[
a=\\frac{-230}{-46}=5.
\\]

5. **Substitute into equation (2).**

\\[
-8(5)+3b=-19
\\]

\\[
-40+3b=-19
\\]

Add 40 to both sides, then divide by 3:

\\[
3b=21
\\]

\\[
b=7.
\\]

6. **Part (b): why two equations?** Horizontal cancellation does not guarantee vertical cancellation. The independent x and y conditions give **two scalar equations for two unknowns**.

**Use this method again**

Match each component separately. Count independent scalar equations to check whether the unknowns can be determined.

**Check**

Substitute both values into both components:

\\[
6(5)-8(7)+26=30-56+26=0
\\]

\\[
-8(5)+3(7)+19=-40+21+19=0.
\\]

Both components vanish, so the full vector equation is satisfied.
:::

:::mcq
id: phys-ch3-p41
title: Serway/Jewett · Problem 3.41
reference: [Serway/Jewett 9e · Problem 3.41](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the complete original problem?
- [ ] a | \\(E=(7.72,15.1), F=(15.1,7.72), G=(-15.1,-7.72)\\) cm
- [ ] b | \\(E=(15.1,7.72), F=(-7.72,15.1), G=(7.72,-15.1)\\) cm
- [ ] c | \\(E=(17,17), F=(17,-17), G=(-17,-17)\\) cm
- [x] d | \\(E=(15.1,7.72), F=(-7.72,15.1), G=(-7.72,-15.1)\\) cm
explanation: The respective angles measured counterclockwise from +x are 27°, 117°, and 243°. Apply \\((17\\cos\\theta,17\\sin\\theta)\\).
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 3.41 — complete original problem](assets/lessons/physics/recommended/ch3-p41.webp)
solution:
**Plan — we are going to…**

1. Convert each described direction into an angle measured counterclockwise from positive x.
2. Use cosine and sine to find x and y components.
3. Check the component signs against the direction words.

**The trick**

**27° counterclockwise from +y = 90° + 27°.** That points left/up, so x must be negative.

**What you need to know**

**Reference angles:**

\\[
+x:0^\\circ,\\quad +y:90^\\circ,\\quad -x:180^\\circ,\\quad -y:270^\\circ.
\\]

Counterclockwise means add an angle; clockwise means subtract it. Once the standard angle is known:

\\[
V_x=V\\cos\\theta,\\qquad V_y=V\\sin\\theta.
\\]

**Step-by-step solution**

1. **Part (a): E starts at positive x and rotates counterclockwise by 27°.**

\\[
\\theta_E=0^\\circ+27.0^\\circ=27.0^\\circ.
\\]

2. **Calculate E's components.**

\\[
E_x=17.0\\cos27.0^\\circ=15.1\\ \\mathrm{cm}
\\]

\\[
E_y=17.0\\sin27.0^\\circ=7.72\\ \\mathrm{cm}
\\]

\\[
\\vec E=(15.1\\hat i+7.72\\hat j)\\ \\mathrm{cm}.
\\]

3. **Part (b): F starts at positive y and rotates counterclockwise by 27°.**

\\[
\\theta_F=90^\\circ+27.0^\\circ=117.0^\\circ.
\\]

This is quadrant II: left and up.

4. **Calculate F's components.**

\\[
F_x=17.0\\cos117.0^\\circ=-7.72\\ \\mathrm{cm}
\\]

\\[
F_y=17.0\\sin117.0^\\circ=15.1\\ \\mathrm{cm}
\\]

\\[
\\vec F=(-7.72\\hat i+15.1\\hat j)\\ \\mathrm{cm}.
\\]

5. **Part (c): G starts at negative y and rotates clockwise by 27°.**

\\[
\\theta_G=270^\\circ-27.0^\\circ=243.0^\\circ.
\\]

This is quadrant III: left and down.

6. **Calculate G's components.**

\\[
G_x=17.0\\cos243.0^\\circ=-7.72\\ \\mathrm{cm}
\\]

\\[
G_y=17.0\\sin243.0^\\circ=-15.1\\ \\mathrm{cm}
\\]

\\[
\\vec G=(-7.72\\hat i-15.1\\hat j)\\ \\mathrm{cm}.
\\]

**Use this method again**

Starting axis angle → add counterclockwise/subtract clockwise → calculate signed components.

**Check**

E points right/up, F left/up, and G left/down. All three reconstructed lengths are 17.0 cm, allowing for rounding.
:::

:::mcq
id: phys-ch3-p45
title: Serway/Jewett · Problem 3.45
reference: [Serway/Jewett 9e · Problem 3.45](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the complete original problem?
- [ ] a | \\(1.11\\times10^4\\) m, 43.4° above +x
- [ ] b | \\(1.21\\times10^4\\) m, 0°
- [ ] c | \\(1.90\\times10^4\\) m, 60.0° above +x
- [x] d | \\(1.43\\times10^4\\) m, 32.2° above +x
explanation: The horizontal velocity is \\(8040/30=268\\) m/s. At 45 s, \\(r=(12060,7600)\\) m, giving magnitude 14255 m and angle 32.2°.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 3.45 — complete original problem](assets/lessons/physics/recommended/ch3-p45.webp)
solution:
**Plan — we are going to…**

1. Use the plane's horizontal position after 30 s to find its constant horizontal velocity.
2. Use that velocity to find its horizontal position after 45 s.
3. Keep the height unchanged.
4. Use the resulting right triangle to calculate distance and viewing angle.

**The trick**

The plane's height is a **fixed position**, not a velocity. Horizontal velocity is constant; vertical velocity is zero.

**What you need to know**

At constant horizontal velocity:

\\[
v_x=\\frac{x-x_0}{t},\\qquad x=x_0+v_xt.
\\]

The distance from you to the plane is the position vector's magnitude. The viewing angle above horizontal comes from the right triangle between horizontal distance and height.

**Step-by-step solution**

1. **List the two known positions.** At the start, the plane is directly above the origin:

\\[
x_0=0,\\qquad y_0=7600\\ \\mathrm m.
\\]

After 30.0 s:

\\[
x_{30}=8040\\ \\mathrm m,\\qquad y_{30}=7600\\ \\mathrm m.
\\]

2. **Find the horizontal velocity.**

\\[
v_x=\\frac{8040-0}{30.0}=268\\ \\mathrm{m/s}.
\\]

3. **Find the horizontal position at 45.0 s.**

\\[
x_{45}=0+(268)(45.0)=12060\\ \\mathrm m.
\\]

4. **Keep the height constant and write the position vector.**

\\[
y_{45}=7600\\ \\mathrm m
\\]

\\[
\\vec P_{45}=(12060\\hat i+7600\\hat j)\\ \\mathrm m.
\\]

5. **Find the magnitude of that position vector.**

\\[
P_{45}=\\sqrt{12060^2+7600^2}
\\]

\\[
P_{45}=\\sqrt{145443600+57760000}
\\]

\\[
P_{45}=14255\\ \\mathrm m\\approx1.43\\times10^4\\ \\mathrm m.
\\]

6. **Find its angle above positive x.** Both components are positive, so no quadrant correction is needed:

\\[
\\tan\\theta=\\frac{7600}{12060}
\\]

\\[
\\theta=\\tan^{-1}(7600/12060)=32.2^\\circ.
\\]

The position vector has magnitude **14.3 km** and points **32.2° above positive x**.

**Use this method again**

Separate axes → calculate changing coordinates → retain fixed coordinates → combine for distance or viewing angle.

**Check**

The plane is 12.06 km horizontally away and 7.60 km high, so its straight-line distance must exceed 12.06 km. The viewing angle decreases as it travels farther away.
:::

:::mcq
id: phys-ch3-p57
title: Serway/Jewett · Problem 3.57
reference: [Serway/Jewett 9e · Problem 3.57](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the complete original problem?
- [x] a | (a) (2,1,3); (b) √14; (c) (57.7°,74.5°,36.7°).
- [ ] b | (a) (2,1,3); (b) 6; (c) (30°,60°,90°).
- [ ] c | (a) (3,1,2); (b) √14; (c) (36.7°,74.5°,57.7°).
- [ ] d | (a) (2,1,3); (b) √6; (c) (35.3°,65.9°,0°).
explanation: The component magnitudes are 2,1,3 and \\(|R|=\\sqrt{14}\\). Direction cosines are \\(2/\\sqrt{14},1/\\sqrt{14},3/\\sqrt{14}\\).
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 3.57 — complete original problem](assets/lessons/physics/recommended/ch3-p57.webp)
solution:
**Plan — we are going to…**

1. Read the three components directly from the unit-vector coefficients.
2. Use the three-dimensional length formula.
3. Find one angle to each positive axis using its component divided by the full length.

**The trick**

**Angle to an axis → that component ÷ whole vector length**, then inverse cosine. A ratio of two components gives an angle of a projection instead.

**What you need to know**

**Given vector:**

\\[
\\vec R=2\\hat i+\\hat j+3\\hat k.
\\]

The magnitude of a signed component is its absolute value. If the angles to positive x, y, and z are alpha, beta, and gamma, respectively:

\\[
\\cos\\alpha=\\frac{R_x}{R},\\qquad \\cos\\beta=\\frac{R_y}{R},\\qquad \\cos\\gamma=\\frac{R_z}{R}.
\\]

**Step-by-step solution**

1. **Part (a): read the component magnitudes.** A bare unit vector has coefficient 1:

\\[
|R_x|=2,\\qquad |R_y|=1,\\qquad |R_z|=3.
\\]

2. **Part (b): calculate the full length.**

\\[
R=\\sqrt{2^2+1^2+3^2}
\\]

\\[
R=\\sqrt{4+1+9}=\\sqrt{14}\\approx3.74.
\\]

3. **Part (c): find the angle to positive x.**

\\[
\\cos\\alpha=\\frac{2}{\\sqrt{14}}=0.5345
\\]

\\[
\\alpha=\\cos^{-1}(0.5345)=57.7^\\circ.
\\]

4. **Find the angle to positive y.**

\\[
\\cos\\beta=\\frac{1}{\\sqrt{14}}=0.2673
\\]

\\[
\\beta=\\cos^{-1}(0.2673)=74.5^\\circ.
\\]

5. **Find the angle to positive z.**

\\[
\\cos\\gamma=\\frac{3}{\\sqrt{14}}=0.8018
\\]

\\[
\\gamma=\\cos^{-1}(0.8018)=36.7^\\circ.
\\]

Keep the full square root in the calculator until obtaining each final angle.

**Use this method again**

Signed axis component ÷ vector magnitude → inverse cosine. Repeat for each requested axis.

**Check**

The largest component is along z, so the smallest angle should be to z. Also the squared direction cosines add to 1:

\\[
\\frac4{14}+\\frac1{14}+\\frac9{14}=1.
\\]
:::

:::mcq
id: phys-ch3-p59
title: Serway/Jewett · Problem 3.59
reference: [Serway/Jewett 9e · Problem 3.59](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the complete original problem?
- [ ] a | 178.9°
- [ ] b | 0.573°
- [x] c | 1.15°
- [ ] d | 88.9°
explanation: For equal vector magnitudes, \\(|A+B|/|A-B|=\\cot(\\theta/2)=100\\). Thus \\(\\theta=2\\tan^{-1}(0.01)=1.14588^\\circ\\).
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 3.59 — complete original problem](assets/lessons/physics/recommended/ch3-p59.webp)
solution:
**Plan — we are going to…**

1. Give both equal vector magnitudes the same symbol.
2. Express the squared sum and squared difference using the angle between them.
3. Translate “100 times larger” into an equation and solve for the angle.

**The trick**

A **length ratio of 100 becomes 10 000 when squared**. Nearly aligned vectors have a large sum and a small difference.

**What you need to know**

- **a** = each vector's magnitude (nonzero).
- **theta** = angle between them.

Expand the squared lengths:

\\[
|\\vec A+\\vec B|^2=A^2+B^2+2AB\\cos\\theta
\\]

\\[
|\\vec A-\\vec B|^2=A^2+B^2-2AB\\cos\\theta.
\\]

These follow by multiplying the vectors with the dot product; the difference has a minus cross term.

**Step-by-step solution**

1. **Use the equal magnitudes in both expressions.**

\\[
|\\vec A+\\vec B|^2=2a^2(1+\\cos\\theta)
\\]

\\[
|\\vec A-\\vec B|^2=2a^2(1-\\cos\\theta).
\\]

2. **Write the stated length relationship.**

\\[
|\\vec A+\\vec B|=100|\\vec A-\\vec B|.
\\]

3. **Square both sides.**

\\[
2a^2(1+\\cos\\theta)=10000\\,[2a^2(1-\\cos\\theta)].
\\]

4. **Cancel the common nonzero factor.**

\\[
1+\\cos\\theta=10000(1-\\cos\\theta).
\\]

5. **Expand and collect the cosine terms.**

\\[
1+\\cos\\theta=10000-10000\\cos\\theta
\\]

\\[
10001\\cos\\theta=9999
\\]

\\[
\\cos\\theta=\\frac{9999}{10001}.
\\]

6. **Take inverse cosine in degree mode.**

\\[
\\theta=\\cos^{-1}\\left(\\frac{9999}{10001}\\right)=1.14588^\\circ.
\\]

The angle is **approximately 1.15°**.

**Use this method again**

Square vector-length relations → expand with dot products → solve. Square numerical factors too.

**Check**

Insert the exact cosine into the squared ratio before rounding the angle:

\\[
\\frac{|\\vec A+\\vec B|^2}{|\\vec A-\\vec B|^2}
=\\frac{1+9999/10001}{1-9999/10001}
=\\frac{20000/10001}{2/10001}=10000.
\\]

Taking the positive square root gives the required length ratio 100. The small positive angle also explains near reinforcement in the sum and near cancellation in the difference.
:::

:::mcq
id: phys-ch7-p7
title: Serway/Jewett · Problem 7.7
reference: [Serway/Jewett 9e · Problem 7.7](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which identity follows by expanding the scalar product in Cartesian components?
- [ ] a | \\(\\vec A\\cdot\\vec B=A_xB_y+A_yB_z+A_zB_x\\)
- [ ] b | \\(\\vec A\\cdot\\vec B=|\\vec A|+|\\vec B|\\)
- [x] c | \\(\\vec A\\cdot\\vec B=A_xB_x+A_yB_y+A_zB_z\\)
explanation: Write \\(\\vec A=A_x\\hat i+A_y\\hat j+A_z\\hat k\\) and likewise for B. Distribute the dot product over all nine pairs. Each unit vector dotted with itself gives 1, while distinct perpendicular basis vectors give zero. Only the three matching-component products remain.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 7.7 — complete original problem](assets/lessons/physics/recommended/ch7-p7.webp)
solution:
**Plan — we are going to…**

1. Write each vector as x, y, and z components times unit vectors.
2. Distribute the dot product to get all nine pairs.
3. Show why six perpendicular pairs vanish and three matching pairs remain.

**The trick**

**Dot product → one scalar.** Perpendicular components contribute zero; only matching-axis products remain.

**What you need to know**

**Dot product** = lengths multiplied by cosine of the included angle. For unit vectors:

- Same axis → angle 0° → dot product **1**.
- Different axes → angle 90° → dot product **0**.

\\[
\\hat i\\cdot\\hat i=\\hat j\\cdot\\hat j=\\hat k\\cdot\\hat k=1
\\]

\\[
\\hat i\\cdot\\hat j=\\hat i\\cdot\\hat k=\\hat j\\cdot\\hat k=0.
\\]

The zero results also hold when the order is reversed.

**Step-by-step solution**

1. **Write both vectors in unit-vector notation.**

\\[
\\vec A=A_x\\hat i+A_y\\hat j+A_z\\hat k
\\]

\\[
\\vec B=B_x\\hat i+B_y\\hat j+B_z\\hat k.
\\]

2. **Distribute the x part of A over every part of B.**

\\[
A_xB_x(\\hat i\\cdot\\hat i)+A_xB_y(\\hat i\\cdot\\hat j)+A_xB_z(\\hat i\\cdot\\hat k).
\\]

3. **Do the same for the y part of A.**

\\[
A_yB_x(\\hat j\\cdot\\hat i)+A_yB_y(\\hat j\\cdot\\hat j)+A_yB_z(\\hat j\\cdot\\hat k).
\\]

4. **Do the same for the z part of A.**

\\[
A_zB_x(\\hat k\\cdot\\hat i)+A_zB_y(\\hat k\\cdot\\hat j)+A_zB_z(\\hat k\\cdot\\hat k).
\\]

5. **Add these nine terms, replacing each unit-vector dot product by 1 or 0.**

\\[
\\vec A\\cdot\\vec B=A_xB_x+0+0+0+A_yB_y+0+0+0+A_zB_z.
\\]

6. **Remove the zero terms.**

\\[
\\boxed{\\vec A\\cdot\\vec B=A_xB_x+A_yB_y+A_zB_z}.
\\]

This proves the required identity; no numerical components are needed.

**Use this method again**

Multiply x with x, y with y, z with z → add the three products. The result is a scalar.

**Check**

If both vectors lie along x only, the formula reduces to the product of their x components. If one lies along x and the other along y, it gives zero, as perpendicular vectors should.
:::

:::mcq
id: phys-ch7-p9
title: Serway/Jewett · Problem 7.9
reference: [Serway/Jewett 9e · Problem 7.9](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the complete original problem?
- [ ] a | −16
- [ ] b | 20
- [ ] c | −20
- [x] d | 16
explanation: \\(A-B=(4,-1,-6)\\). Dot with \\(C=(0,2,-3)\\): \\(0-2+18=16\\).
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 7.9 — complete original problem](assets/lessons/physics/recommended/ch7-p9.webp)
solution:
**Plan — we are going to…**

1. Read all three vectors as x, y, z component lists.
2. Calculate the vector inside parentheses first.
3. Dot C with that new vector by multiplying matching components and adding.

**The trick**

**Missing x term → x = 0.** B's x coefficient is −1; subtracting it adds 1.

**What you need to know**

- **Missing component** = 0.
- **Bare unit vector's coefficient** = 1.

Given:

\\[
\\vec A=(3,1,-1),\\quad \\vec B=(-1,2,5),\\quad \\vec C=(0,2,-3).
\\]

For any two component lists:

\\[
\\vec U\\cdot\\vec V=U_xV_x+U_yV_y+U_zV_z.
\\]

**Step-by-step solution**

1. **Subtract the x components.**

\\[
(A-B)_x=3-(-1)=4.
\\]

2. **Subtract the y components.**

\\[
(A-B)_y=1-2=-1.
\\]

3. **Subtract the z components.**

\\[
(A-B)_z=-1-5=-6.
\\]

Thus the vector inside parentheses is:

\\[
\\vec A-\\vec B=(4,-1,-6).
\\]

4. **Write the dot product with matching components.**

\\[
\\vec C\\cdot(\\vec A-\\vec B)=(0)(4)+(2)(-1)+(-3)(-6).
\\]

5. **Calculate each product.** The product of two negatives is positive:

\\[
(0)(4)=0,\\quad (2)(-1)=-2,\\quad (-3)(-6)=18.
\\]

6. **Add the scalar results.**

\\[
\\vec C\\cdot(\\vec A-\\vec B)=0-2+18=16.
\\]

The answer is the scalar **16**, with no unit-vector arrow attached.

**Use this method again**

Parentheses first → matching-axis products → add. Keep negative components in parentheses until each product is evaluated.

**Check**

The distributive form provides a second check:

\\[
\\vec C\\cdot\\vec A=0+2+3=5
\\]

\\[
\\vec C\\cdot\\vec B=0+4-15=-11
\\]

\\[
5-(-11)=16.
\\]
:::

:::mcq
id: phys-ch7-p12
title: Serway/Jewett · Problem 7.12
reference: [Serway/Jewett 9e · Problem 7.12](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the complete original problem?
- [ ] a | (a) 45°; (b) 90°; (c) 135°
- [x] b | (a) 11.3°; (b) 156°; (c) 82.3°
- [ ] c | (a) 168.7°; (b) 24.0°; (c) 116.6°
- [ ] d | (a) 11.3°; (b) 24.0°; (c) 63.4°
explanation: Use \\(\\cos\\theta=A\\cdot B/(|A||B|)\\). The three dot products are 20, −22, and 2, and the respective norm products are \\(\\sqrt{13}\\sqrt{32},\\sqrt{20}\\sqrt{29},3\\sqrt{25}\\).
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 7.12 — complete original problem](assets/lessons/physics/recommended/ch7-p12.webp)
solution:
**Plan — we are going to…**

1. Calculate the dot product for each pair.
2. Calculate both vector lengths for that pair.
3. Divide the dot product by the product of the lengths.
4. Take inverse cosine to get the included angle.

**The trick**

**Negative dot product → obtuse angle.** Keep its minus sign: inverse cosine gives the included angle from 0° to 180°. A missing z component is zero.

**What you need to know**

Start from the definition:

\\[
\\vec A\\cdot\\vec B=AB\\cos\\theta.
\\]

Solve for the angle:

\\[
\\theta=\\cos^{-1}\\left(\\frac{\\vec A\\cdot\\vec B}{AB}\\right).
\\]

Use the square root of the sum of squared components for each length, and use degree mode.

**Step-by-step solution**

1. **Part (a): record the vectors and calculate the dot product.**

\\[
\\vec A=(3,-2,0),\\qquad \\vec B=(4,-4,0)
\\]

\\[
\\vec A\\cdot\\vec B=3(4)+(-2)(-4)+0=12+8=20.
\\]

2. **Calculate both lengths, then the angle.**

\\[
A=\\sqrt{3^2+(-2)^2}=\\sqrt{13}
\\]

\\[
B=\\sqrt{4^2+(-4)^2}=\\sqrt{32}
\\]

\\[
\\theta_a=\\cos^{-1}\\left(\\frac{20}{\\sqrt{13}\\sqrt{32}}\\right)=11.3^\\circ.
\\]

3. **Part (b): record the vectors and calculate the dot product.**

\\[
\\vec A=(-2,4,0),\\qquad \\vec B=(3,-4,2)
\\]

\\[
\\vec A\\cdot\\vec B=(-2)(3)+4(-4)+0(2)=-6-16=-22.
\\]

4. **Calculate both lengths and the angle.**

\\[
A=\\sqrt{(-2)^2+4^2+0^2}=\\sqrt{20}
\\]

\\[
B=\\sqrt{3^2+(-4)^2+2^2}=\\sqrt{29}
\\]

\\[
\\theta_b=\\cos^{-1}\\left(\\frac{-22}{\\sqrt{20}\\sqrt{29}}\\right)=156^\\circ.
\\]

5. **Part (c): record the vectors and calculate the dot product.**

\\[
\\vec A=(1,-2,2),\\qquad \\vec B=(0,3,4)
\\]

\\[
\\vec A\\cdot\\vec B=1(0)+(-2)(3)+2(4)=0-6+8=2.
\\]

6. **Calculate both lengths and the angle.**

\\[
A=\\sqrt{1^2+(-2)^2+2^2}=\\sqrt9=3
\\]

\\[
B=\\sqrt{0^2+3^2+4^2}=\\sqrt{25}=5
\\]

\\[
\\theta_c=\\cos^{-1}\\left(\\frac2{3(5)}\\right)=82.3^\\circ.
\\]

The three angles are **11.3°, 156°, and 82.3°**.

**Use this method again**

Record x/y/z → dot product → both lengths → inverse cosine. Keep the dot product's sign.

**Check**

The positive dot products in (a) and (c) give acute angles. The negative dot product in (b) gives an obtuse angle. Each cosine ratio lies between −1 and 1.
:::

:::mcq
id: phys-ch7-p13
title: Serway/Jewett · Problem 7.13
reference: [Serway/Jewett 9e · Problem 7.13](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the complete original problem?
- [x] a | 7.05 m at 28.4°
- [ ] b | 6.00 m at 60.0°
- [ ] c | 7.05 m at 91.6°
- [ ] d | 6.62 m at 85.0°
explanation: Let \\(\\alpha=\\theta_A-60^\\circ\\). Then \\(A\\cos\\alpha=6\\) and \\(A\\cos(\\alpha+25^\\circ)=7\\). Thus \\(A\\sin\\alpha=(6\\cos 25^\\circ-7)/\\sin 25^\\circ=-3.697\\). The components give A≈7.05 m and θ≈28.4°.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 7.13 — complete original problem](assets/lessons/physics/recommended/ch7-p13.webp)
solution:
**Plan — we are going to…**

1. Describe A's direction relative to B using one unknown angle.
2. Turn each dot product into an equation for a projection of A.
3. Expand the second cosine to find a second perpendicular projection.
4. Combine the two projections to find A's magnitude and direction.

**The trick**

A and C have equal unknown lengths, with C rotated **25° beyond A**. Use B's direction as the reference to obtain two projections of that same length.

**What you need to know**

The scalar product gives:

\\[
\\vec A\\cdot\\vec B=AB\\cos(\\theta_A-\\theta_B).
\\]

Define an angle relative to B:

\\[
\\alpha=\\theta_A-60.0^\\circ.
\\]

We will use the cosine addition identity:

\\[
\\cos(\\alpha+25^\\circ)=\\cos\\alpha\\cos25^\\circ-\\sin\\alpha\\sin25^\\circ.
\\]

The two numbers A cosine alpha and A sine alpha act like perpendicular components in axes rotated to B's direction.

**Step-by-step solution**

1. **Use the first dot product.** B has magnitude 5.00 m:

\\[
5.00A\\cos\\alpha=30.0\\ \\mathrm{m^2}.
\\]

Divide by B's magnitude:

\\[
A\\cos\\alpha=6.00\\ \\mathrm m.\\tag{1}
\\]

2. **Use the second dot product.** C has magnitude A and its angle relative to B is alpha plus 25°:

\\[
5.00A\\cos(\\alpha+25.0^\\circ)=35.0\\ \\mathrm{m^2}.
\\]

Divide by 5.00 m:

\\[
A\\cos(\\alpha+25.0^\\circ)=7.00\\ \\mathrm m.\\tag{2}
\\]

3. **Expand equation (2) using the identity above.**

\\[
A\\cos\\alpha\\cos25^\\circ-A\\sin\\alpha\\sin25^\\circ=7.00\\ \\mathrm m.
\\]

4. **Replace the known projection using equation (1).**

\\[
(6.00\\ \\mathrm m)\\cos25^\\circ-A\\sin\\alpha\\sin25^\\circ=7.00\\ \\mathrm m.
\\]

Move the second projection to the right and 7.00 m to the left, then divide by sine 25°:

\\[
A\\sin\\alpha=\\frac{(6.00\\ \\mathrm m)\\cos25^\\circ-7.00\\ \\mathrm m}{\\sin25^\\circ}.
\\]

5. **Evaluate the second projection.**

\\[
A\\sin\\alpha=\\frac{5.43785-7.00}{0.422618}\\ \\mathrm m=-3.696\\ \\mathrm m.
\\]

6. **Recover the magnitude from the two perpendicular projections.**

\\[
A^2=(A\\cos\\alpha)^2+(A\\sin\\alpha)^2
\\]

\\[
A=\\sqrt{6.00^2+(-3.696)^2}=7.05\\ \\mathrm m.
\\]

7. **Recover the relative angle.** The cosine projection is positive and the sine projection negative, so alpha is a small clockwise angle:

\\[
\\alpha=\\tan^{-1}\\left(\\frac{-3.696}{6.00}\\right)=-31.6^\\circ.
\\]

8. **Return to the standard angle from positive x.**

\\[
\\theta_A=60.0^\\circ+\\alpha=60.0^\\circ-31.6^\\circ=28.4^\\circ.
\\]

Thus **A has magnitude 7.05 m and direction 28.4° counterclockwise from positive x**.

**Use this method again**

Use the known vector as reference → solve two projections → recover magnitude and direction.

**Check**

C's direction is 25° above A's:

\\[
\\theta_C=28.4^\\circ+25.0^\\circ=53.4^\\circ.
\\]

C is closer to B's 60° direction, so its dot product with B should be larger. Using unrounded results recovers both given products:

\\[
5.00A\\cos\\alpha=30.0\\ \\mathrm{m^2}
\\]

\\[
5.00A\\cos(\\alpha+25^\\circ)=35.0\\ \\mathrm{m^2}.
\\]
:::

:::mcq
id: phys-ch11-p1
title: Serway/Jewett · Problem 11.1
reference: [Serway/Jewett 9e · Problem 11.1](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the complete original problem?
- [x] a | \\(\\hat i+8\\hat j+22\\hat k\\)
- [ ] b | \\(-\\hat i-8\\hat j-22\\hat k\\)
- [ ] c | \\(\\hat i-8\\hat j+22\\hat k\\)
- [ ] d | \\(8\\hat i-15\\hat j-2\\hat k\\)
explanation: \\(M\\times N=((−3)(−2)-1(5),1(4)-2(−2),2(5)-(−3)(4))=(1,8,22)\\).
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 11.1 — complete original problem](assets/lessons/physics/recommended/ch11-p1.webp)
solution:
**Plan — we are going to…**

1. Read M and N as three-component lists.
2. Calculate one cross-product component at a time in the required order M cross N.
3. Combine the three results and check that the answer is perpendicular to both inputs.

**The trick**

**Order matters:** reversing M and N reverses the cross product. Calculate each component separately to avoid a y-sign error.

**What you need to know**

The given vectors are:

\\[
\\vec M=(2,-3,1),\\qquad \\vec N=(4,5,-2).
\\]

For M cross N, use these three component formulas:

\\[
(M\\times N)_x=M_yN_z-M_zN_y
\\]

\\[
(M\\times N)_y=M_zN_x-M_xN_z
\\]

\\[
(M\\times N)_z=M_xN_y-M_yN_x.
\\]

A cross product is a vector, perpendicular to both original vectors.

**Step-by-step solution**

1. **Calculate the x component.** Use the y and z components of the inputs:

\\[
(M\\times N)_x=(-3)(-2)-(1)(5)
\\]

\\[
(M\\times N)_x=6-5=1.
\\]

2. **Calculate the y component.** Keep the written order of terms:

\\[
(M\\times N)_y=(1)(4)-(2)(-2)
\\]

\\[
(M\\times N)_y=4-(-4)=8.
\\]

3. **Calculate the z component.**

\\[
(M\\times N)_z=(2)(5)-(-3)(4)
\\]

\\[
(M\\times N)_z=10-(-12)=22.
\\]

4. **Place each answer on its own unit vector.**

\\[
\\boxed{\\vec M\\times\\vec N=\\hat i+8\\hat j+22\\hat k}.
\\]

The coefficient of the first unit vector is 1.

**Use this method again**

Keep input order → calculate x/y/z separately → check zero dot products with both inputs.

**Check**

Dotting the answer with either input must give zero:

\\[
(1,8,22)\\cdot(2,-3,1)=2-24+22=0
\\]

\\[
(1,8,22)\\cdot(4,5,-2)=4+40-44=0.
\\]

Both checks pass.
:::

:::mcq
id: phys-ch11-p3
title: Serway/Jewett · Problem 11.3
reference: [Serway/Jewett 9e · Problem 11.3](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the complete original problem?
- [ ] a | (a) \\(7\\hat k\\); (b) 119.7°
- [ ] b | (a) 4; (b) 29.7°
- [x] c | (a) \\(7\\hat k\\); (b) 60.3°
- [ ] d | (a) \\(-7\\hat k\\); (b) 60.3°
explanation: \\(A\\times B=[1(3)-2(-2)]\\hat k=7\\hat k\\). Also \\(A\\cdot B=4\\), so \\(\\theta=\\cos^{-1}(4/\\sqrt{65})=60.3^\\circ\\).
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 11.3 — complete original problem](assets/lessons/physics/recommended/ch11-p3.webp)
solution:
**Plan — we are going to…**

1. Add zero z components to the two vectors.
2. Calculate the cross product for part (a).
3. Calculate a dot product and the two lengths for part (b).
4. Use inverse cosine to find the included angle.

**The trick**

**Cross product → perpendicular vector. Dot product → angle via cosine.** For two xy-plane vectors, the cross product points along +z or −z.

**What you need to know**

The given vectors are:

\\[
\\vec A=(1,2,0),\\qquad \\vec B=(-2,3,0).
\\]

Their cross product has only a z component:

\\[
\\vec A\\times\\vec B=(A_xB_y-A_yB_x)\\hat k.
\\]

For the included angle:

\\[
\\cos\\theta=\\frac{\\vec A\\cdot\\vec B}{AB}.
\\]

**Step-by-step solution**

1. **Part (a): explain the zero x and y components.** Each would involve a zero z component:

\\[
(A\\times B)_x=2(0)-0(3)=0
\\]

\\[
(A\\times B)_y=0(-2)-1(0)=0.
\\]

2. **Calculate the z component.**

\\[
(A\\times B)_z=1(3)-2(-2)
\\]

\\[
(A\\times B)_z=3-(-4)=7.
\\]

Thus:

\\[
\\vec A\\times\\vec B=7\\hat k.
\\]

3. **Part (b): calculate the dot product.**

\\[
\\vec A\\cdot\\vec B=1(-2)+2(3)+0=-2+6=4.
\\]

4. **Calculate the two lengths.**

\\[
A=\\sqrt{1^2+2^2}=\\sqrt5
\\]

\\[
B=\\sqrt{(-2)^2+3^2}=\\sqrt{13}.
\\]

5. **Substitute into the cosine formula.**

\\[
\\cos\\theta=\\frac4{\\sqrt5\\sqrt{13}}=\\frac4{\\sqrt{65}}.
\\]

6. **Take inverse cosine in degree mode.**

\\[
\\theta=\\cos^{-1}\\left(\\frac4{\\sqrt{65}}\\right)=60.3^\\circ.
\\]

The answers are **7 times the positive-z unit vector** and **60.3°**.

**Use this method again**

- **Perpendicular vector wanted:** cross product.
- **Included angle wanted:** dot-product cosine formula.

**Check**

The positive dot product requires an acute angle. The cross-product magnitude also agrees with the sine definition:

\\[
AB\\sin\\theta=\\sqrt{65}\\sin60.3^\\circ\\approx7.
\\]
:::

:::mcq
id: phys-ch11-p7
title: Serway/Jewett · Problem 11.7
reference: [Serway/Jewett 9e · Problem 11.7](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the complete original problem?
- [ ] a | 135°
- [ ] b | 0°
- [x] c | 45° (for nonzero vectors)
- [ ] d | 90°
explanation: \\(|A\\times B|=AB\\sin\\theta\\) and \\(A\\cdot B=AB\\cos\\theta\\). For nonzero vectors, equality requires sinθ=cosθ and a nonnegative dot product, hence θ=45°. If either vector is zero, its direction angle is undefined.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 11.7 — complete original problem](assets/lessons/physics/recommended/ch11-p7.webp)
solution:
**Plan — we are going to…**

1. Replace the cross-product magnitude with its sine formula.
2. Replace the dot product with its cosine formula.
3. Cancel the common nonzero magnitudes.
4. Solve the trigonometric equation and check which angles are allowed.

**The trick**

**Magnitude cannot be negative.** The equal dot product must be nonnegative, ruling out obtuse angles.

**What you need to know**

For nonzero vectors with included angle between 0° and 180°:

\\[
|\\vec A\\times\\vec B|=AB\\sin\\theta
\\]

\\[
\\vec A\\cdot\\vec B=AB\\cos\\theta.
\\]

Sine describes the perpendicular relationship; cosine describes the parallel relationship.

**Step-by-step solution**

1. **Write the given equality.**

\\[
|\\vec A\\times\\vec B|=\\vec A\\cdot\\vec B.
\\]

2. **Insert the sine and cosine definitions.**

\\[
AB\\sin\\theta=AB\\cos\\theta.
\\]

3. **Divide both sides by the positive quantity AB.** This step assumes both vectors are nonzero:

\\[
\\sin\\theta=\\cos\\theta.
\\]

4. **Restrict the angle.** From 0° to 180°, sine is nonnegative; equality requires cosine nonnegative too. This limits theta to 0°–90°. Exclude 90°: sine = 1 but cosine = 0.

5. **Divide by the nonzero cosine.**

\\[
\\frac{\\sin\\theta}{\\cos\\theta}=1
\\]

\\[
\\tan\\theta=1.
\\]

6. **Solve in the allowed interval.**

\\[
\\theta=45^\\circ.
\\]

For nonzero vectors, the answer is **45°**. If either vector is zero, both products are zero, but that zero vector has no defined direction, so the angle cannot be determined.

**Use this method again**

Replace products by magnitude/angle definitions → check signs and zero-vector cases → cancel nonzero factors.

**Check**

At 45° the sine and cosine are equal:

\\[
\\sin45^\\circ=\\cos45^\\circ=\\frac1{\\sqrt2}.
\\]

Thus both sides have the same positive value.
:::

:::mcq
id: phys-ch11-p10
title: Serway/Jewett · Problem 11.10
reference: [Serway/Jewett 9e · Problem 11.10](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the complete original problem?
- [x] a | No: the proposed product is not perpendicular to the first vector.
- [ ] b | Yes: every vector can be written as a cross product with any other vector.
- [ ] c | No: a cross product must have zero magnitude.
- [ ] d | Yes: the magnitudes of both sides are equal.
explanation: A cross product with \\(B=(2,-3,4)\\) must be perpendicular to B. But \\(B\\cdot(4,3,-1)=8-9-4=-5\\ne0\\), so no such A exists.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 11.10 — complete original problem](assets/lessons/physics/recommended/ch11-p10.webp)
solution:
**Plan — we are going to…**

1. Identify the first vector and the claimed result.
2. Use the fact that a cross product is perpendicular to its first input.
3. Test that necessary perpendicularity with one dot product.
4. Decide whether any unknown A could produce the claimed result.

**The trick**

**Test perpendicularity first.** A cross product must be perpendicular to each input. One nonzero dot product disproves the claim; no unknown vector needs to be solved.

**What you need to know**

- **U** = known first vector.
- **V** = claimed cross-product result.

\\[
\\vec U=(2,-3,4),\\qquad \\vec V=(4,3,-1).
\\]

The claim is:

\\[
\\vec U\\times\\vec A=\\vec V.
\\]

A cross product is perpendicular to both inputs. Two perpendicular vectors have dot product zero.

**Step-by-step solution**

1. **Write the necessary condition for the claim to be possible.** If V really were the cross product, it would have to satisfy:

\\[
\\vec U\\cdot\\vec V=0.
\\]

2. **Calculate that dot product from the original coefficients.**

\\[
\\vec U\\cdot\\vec V=(2)(4)+(-3)(3)+(4)(-1).
\\]

3. **Evaluate the three products.**

\\[
(2)(4)=8,\\qquad (-3)(3)=-9,\\qquad (4)(-1)=-4.
\\]

4. **Add them.**

\\[
\\vec U\\cdot\\vec V=8-9-4=-5.
\\]

5. **Compare with the required zero.**

\\[
-5\\ne0.
\\]

The claimed result is not perpendicular to the first vector.

6. **Answer both parts.**

- **(a) No.**
- **(b)** Every possible cross product with U must be perpendicular to U. The claimed result fails this test, regardless of A.

**Use this method again**

Before solving unknown components, test required properties. For a cross product, check perpendicularity to each known input.

**Check**

The conclusion does not depend on guessing A. The nonzero dot product alone is enough to show the proposed equation has no solution.
:::

:::mcq
id: past-physics-2007-q2
title: Past paper · IUG PHYSA 1301 2007 final · Q2 · 2007
kicker: PAST PAPER · PHYSA 1301 Final Exam, Islamic University of Gaza (8 Jan 2007)
reference: [PHYSA 1301 Final Exam, Islamic University of Gaza (8 Jan 2007), p. 1](https://studyres.com/doc/10675286/final-exam)
question: For A=2i−3j and B=i−2j, what is A−2B?
- [ ] a | −j
- [ ] b | 4i−7j
- [ ] c | 4i+j
- [x] d | j
explanation: Correct answer: j
hint: Review the original paper and the lesson concepts before retrying.
solution:
**Plan — we are going to…**

1. Write A and B as signed component pairs.
2. Multiply every component of B by 2.
3. Subtract the resulting vector from A.
4. Write the answer in unit-vector form.

**The trick**

**Multiply all of B by 2**, then subtract each signed component. Minus a negative becomes plus.

**What you need to know**

The given vectors are:

\\[
\\vec A=2\\hat i-3\\hat j=(2,-3)
\\]

\\[
\\vec B=\\hat i-2\\hat j=(1,-2).
\\]

A scalar multiplies every component. Vector subtraction is carried out separately along x and y.

**Step-by-step solution**

1. **Multiply B by 2.**

\\[
2\\vec B=(2\\cdot1,2\\cdot(-2))=(2,-4).
\\]

2. **Subtract the x components.**

\\[
(A-2B)_x=2-2=0.
\\]

3. **Subtract the y components.**

\\[
(A-2B)_y=-3-(-4)=-3+4=1.
\\]

4. **Combine the results.**

\\[
\\vec A-2\\vec B=0\\hat i+1\\hat j=\\hat j.
\\]

The answer is **the positive-y unit vector**.

**Use this method again**

Multiply all components first → subtract componentwise. Use parentheses around negative entries.

**Check**

Add twice B back to the answer:

\\[
(0,1)+(2,-4)=(2,-3)=\\vec A.
\\]

This recovers the given A.
:::

:::mcq
id: past-physics-2007-q3
title: Past paper · IUG PHYSA 1301 2007 final · Q3 · 2007
kicker: PAST PAPER · PHYSA 1301 Final Exam, Islamic University of Gaza (8 Jan 2007)
reference: [PHYSA 1301 Final Exam, Islamic University of Gaza (8 Jan 2007), p. 1](https://studyres.com/doc/10675286/final-exam)
question: For A=2i+6j−3k and B=4i+2j+k, what is A·B?
- [x] a | 17
- [ ] b | 23
- [ ] c | 12i−14j−20k
- [ ] d | 8i+12j−3k
explanation: Correct answer: 17
hint: Review the original paper and the lesson concepts before retrying.
solution:
**Plan — we are going to…**

1. Read each vector's x, y, and z components.
2. Multiply the two x components, then the two y components, then the two z components.
3. Add those products to obtain one scalar.

**The trick**

**Dot product = one number**, with no unit-vector arrows. Multiply matching components and add; do not use the cross product.

**What you need to know**

The vectors are:

\\[
\\vec A=(2,6,-3),\\qquad \\vec B=(4,2,1).
\\]

Their dot product is the sum of matching-component products:

\\[
\\vec A\\cdot\\vec B=A_xB_x+A_yB_y+A_zB_z.
\\]

**Step-by-step solution**

1. **Calculate the x product.**

\\[
A_xB_x=2(4)=8.
\\]

2. **Calculate the y product.**

\\[
A_yB_y=6(2)=12.
\\]

3. **Calculate the z product.** A's negative sign must stay attached to its component:

\\[
A_zB_z=(-3)(1)=-3.
\\]

4. **Add all three scalar products.**

\\[
\\vec A\\cdot\\vec B=8+12-3=17.
\\]

The answer is **17**, with no unit-vector symbol.

**Use this method again**

Align x/y/z → multiply matching entries → add. A dot product gives one scalar.

**Check**

Reverse the order of the dot product. Its value must be unchanged:

\\[
\\vec B\\cdot\\vec A=4(2)+2(6)+1(-3)=8+12-3=17.
\\]

The result is one scalar, as a dot product requires. The negative z contribution must be retained in either order.
:::`};export{e as default};