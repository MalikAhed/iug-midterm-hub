var e={id:`physics-ch6`,title:`Circular Motion and Other Applications of Newton’s Laws`,summary:`Serway/Jewett 9e · Chapter 6 · original textbook exercises and verified practice.`,subjectId:`physics`,reward:0,status:`published`,authoringSource:`:::exam-question
id: phys-ch6-p1
title: Serway/Jewett · Problem 6.1
question: Serway/Jewett · Problem 6.1
reference: [Serway/Jewett 9e · Problem 6.1](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
answer-label: Show answer
body:
Serway/Jewett · Problem 6.1

![Serway/Jewett · Problem 6.1 — complete original problem](assets/lessons/physics/recommended/ch6-p1.webp)
solution:
**Plan — we are going to…**

1. Convert the supported hanging load into the string’s maximum tension.
2. Identify the inward force on the object on the table.
3. Solve the tension inequality for speed.

**The trick**

The 25.0 kg is a **test load for the string**, not the mass rotating on the table. The rotating object has mass 3.00 kg. A mass in kilograms must first be converted to a force in newtons.

**What you need to know**

The table is frictionless. Weight is downward, the table’s normal force is upward, and string tension is horizontal toward the center. The vertical forces cancel; tension alone supplies the net inward force. For circular motion:

\\[
a_r=\\frac{v^2}{r},\\qquad \\sum F_{\\mathrm{in}}=\\frac{mv^2}{r}.
\\]

Use Earth gravity:

\\[
g=9.80\\ \\frac{\\mathrm m}{\\mathrm{s^2}}.
\\]

**Step-by-step solution**

1. **Find the breaking threshold.** A stationary supported load has zero acceleration, so its tension equals its weight.

\\[
T_{\\max}=(25.0)(9.80)=245\\ \\mathrm N.
\\]

2. **Write the radial equation for the 3.00 kg object.** The radius is 0.800 m.

\\[
T=\\frac{(3.00)v^2}{0.800}.
\\]

3. **Keep tension below the threshold.** Multiply by the positive radius and divide by the positive mass.

\\[
\\frac{mv^2}{r}\\le T_{\\max}
\\]

\\[
v^2\\le\\frac{T_{\\max}r}{m}=\\frac{245(0.800)}{3.00}=65.333\\ \\frac{\\mathrm{m^2}}{\\mathrm{s^2}}.
\\]

4. **Take the nonnegative square root.** Speed cannot be negative.

\\[
v_{\\max}=\\sqrt{65.333}=8.08\\ \\frac{\\mathrm m}{\\mathrm s}.
\\]

The limiting interval is **0 to 8.08 m/s**. Zero is the stationary limiting case; for actual rotation the speed is positive. For a margin against breaking, remain below the upper threshold.

**Use this method again**

Load rating → maximum force → identify the real radial force → solve the speed inequality. Do not substitute the test-load mass as the moving mass.

**Check**

Putting the unrounded threshold speed back into the tension equation gives:

\\[
T=\\frac{(3.00)(65.333)}{0.800}=245\\ \\mathrm N.
\\]

This equals the string’s supported-load limit. A smaller speed gives a smaller tension because tension is proportional to speed squared.
:::

:::exam-question
id: phys-ch6-p8
title: Serway/Jewett · Problem 6.8
question: Serway/Jewett · Problem 6.8
reference: [Serway/Jewett 9e · Problem 6.8](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
answer-label: Show answer
body:
Serway/Jewett · Problem 6.8

![Serway/Jewett · Problem 6.8 — complete original problem](assets/lessons/physics/recommended/ch6-p8.webp)
solution:
**Plan — we are going to…**

1. Draw the bob’s weight and string tension.
2. Resolve the tension using the angle measured from vertical.
3. Use vertical equilibrium, then find inward acceleration.

**The trick**

The bob moves around a **horizontal** circle, so its vertical acceleration is zero even though its horizontal acceleration is not. Because the angle starts from vertical, cosine gives the vertical tension component.

**What you need to know**

The bob’s mass is 80.0 kg and the string makes 5.00° with vertical. Tension points up and inward along the string; weight points down. Resolve the one tension force into two components, rather than adding a separate “centripetal force.”

\\[
T_y=T\\cos\\theta,\\qquad T_r=T\\sin\\theta.
\\]

Use degree mode.

**Step-by-step solution**

1. **Part (a): balance vertical forces.** The bob stays at the same height.

\\[
T\\cos5.00^\\circ-mg=0.
\\]

\\[
T_y=mg=(80.0)(9.80)=784\\ \\mathrm N\\quad\\text{upward}.
\\]

2. **Find the horizontal component.** Divide horizontal tension by vertical tension; the unknown total tension cancels.

\\[
\\frac{T_r}{T_y}=\\tan5.00^\\circ.
\\]

\\[
T_r=784\\tan5.00^\\circ=68.6\\ \\mathrm N\\quad\\text{inward}.
\\]

3. **Part (b): use Newton’s second law inward.**

\\[
a_r=\\frac{T_r}{m}=\\frac{68.591}{80.0}=0.857\\ \\frac{\\mathrm m}{\\mathrm{s^2}}\\quad\\text{inward}.
\\]

The 10.0 m string length is not needed for these requested force components and acceleration.

**Use this method again**

For a conical pendulum, balance vertical forces first, then use the inward component for radial acceleration. Divide component equations to obtain the tangent relation.

**Check**

An independent geometric check uses the actual circle radius and predicted speed:

\\[
r=L\\sin5.00^\\circ=0.872\\ \\mathrm m.
\\]

\\[
v=\\sqrt{a_r r}=\\sqrt{(0.85739)(0.87156)}=0.864\\ \\frac{\\mathrm m}{\\mathrm s}.
\\]

Then speed squared divided by radius returns 0.857 m/s². Also the tension is slightly greater than 784 N, as required to have an upward component of 784 N while tilted.
:::

:::exam-question
id: phys-ch6-p9
title: Serway/Jewett · Problem 6.9
question: Serway/Jewett · Problem 6.9
reference: [Serway/Jewett 9e · Problem 6.9](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
answer-label: Show answer
body:
Serway/Jewett · Problem 6.9

![Serway/Jewett · Problem 6.9 — complete original problem](assets/lessons/physics/recommended/ch6-p9.webp)
solution:
**Plan — we are going to…**

1. Identify the real force that can pull the coin inward.
2. Convert centimeters to meters.
3. Use the just-slipping condition to find the static-friction coefficient.

**The trick**

The coin is moving relative to the room but **not sliding relative to the turntable** before the threshold. The force is therefore static friction, not kinetic friction. Its direction is inward.

**What you need to know**

Weight and the vertical normal force balance. Static friction can adjust up to a maximum:

\\[
N=mg,\\qquad f_s\\le\\mu_sN.
\\]

At the first slip threshold, the required inward force equals that maximum:

\\[
\\frac{mv^2}{r}=\\mu_smg.
\\]

**Step-by-step solution**

1. **Part (a): draw the forces.** Draw weight down, normal force up, and static friction horizontally toward the center. The inward friction changes the velocity’s direction. There is no additional outward force in the ground-frame diagram.

2. **Convert the data.**

\\[
r=30.0\\ \\mathrm{cm}=0.300\\ \\mathrm m.
\\]

\\[
v=50.0\\ \\frac{\\mathrm{cm}}{\\mathrm s}=0.500\\ \\frac{\\mathrm m}{\\mathrm s}.
\\]

3. **Part (b): cancel the coin’s mass.**

\\[
\\mu_smg=\\frac{mv^2}{r}
\\]

\\[
\\mu_s=\\frac{v^2}{rg}=\\frac{(0.500)^2}{(0.300)(9.80)}=0.0850.
\\]

The coefficient is dimensionless.

**Use this method again**

No relative sliding → static friction. At impending slip, set its maximum equal to the required inward force, then solve for the unknown.

**Check**

The required acceleration and the friction limit per unit mass agree:

\\[
\\frac{v^2}{r}=\\frac{0.250}{0.300}=0.8333\\ \\frac{\\mathrm m}{\\mathrm{s^2}}.
\\]

\\[
\\mu_sg=(0.085034)(9.80)=0.8333\\ \\frac{\\mathrm m}{\\mathrm{s^2}}.
\\]

A slightly greater speed would demand more friction than this surface can supply.
:::

:::exam-question
id: phys-ch6-p10
title: Serway/Jewett · Problem 6.10
question: Serway/Jewett · Problem 6.10
reference: [Serway/Jewett 9e · Problem 6.10](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
answer-label: Show answer
body:
Serway/Jewett · Problem 6.10

![Serway/Jewett · Problem 6.10 — complete original problem](assets/lessons/physics/recommended/ch6-p10.webp)
solution:
**Plan — we are going to…**

1. Use the two equal strings to find the orbit radius.
2. Resolve both tensions vertically and inward.
3. Test whether both string tensions can be nonnegative on Earth and on another planet.

**The trick**

A string can **pull but cannot push**. A negative calculated tension disproves the assumption that both strings remain taut. Also the lower string pulls downward, so it subtracts from the upper string’s upward component.

**What you need to know**

The object lies halfway between the attachment points because both strings have the same length. Let upper and lower tensions be named separately. Each string has length 2.00 m, and half the vertical attachment separation is 1.50 m. The mass is 4.00 kg; speed is 3.00 m/s. Use inward horizontal and upward vertical axes.

**Step-by-step solution**

1. **Find the radius using the right triangle.**

\\[
r^2=\\ell^2-\\left(\\frac d2\\right)^2=(2.00)^2-(1.50)^2=1.75\\ \\mathrm{m^2}.
\\]

\\[
r=1.323\\ \\mathrm m.
\\]

2. **Resolve the radial components.** Both string forces point inward; each has horizontal fraction equal to radius divided by string length.

\\[
(T_u+T_l)\\frac r\\ell=\\frac{mv^2}{r}.
\\]

\\[
T_u+T_l=\\frac{mv^2\\ell}{r^2}=\\frac{(4.00)(3.00)^2(2.00)}{1.75}=41.143\\ \\mathrm N.
\\]

3. **Balance vertical forces.** The upper string pulls up and lower string pulls down.

\\[
(T_u-T_l)\\frac{d/2}{\\ell}=mg.
\\]

\\[
T_u-T_l=\\frac{mg\\ell}{d/2}=\\frac{(4.00)(9.80)(2.00)}{1.50}=52.267\\ \\mathrm N.
\\]

4. **Solve for the two tensions.** Add and subtract the equations.

\\[
T_u=\\frac{41.143+52.267}{2}=46.7\\ \\mathrm N.
\\]

\\[
T_l=\\frac{41.143-52.267}{2}=-5.56\\ \\mathrm N.
\\]

The lower string would have to push. That is impossible, so the described two-taut-string motion cannot occur on Earth.

5. **What if: find the planetary-gravity condition.** The lower tension must be nonnegative.

\\[
T_l=\\frac12\\left(\\frac{mv^2\\ell}{r^2}-\\frac{mg\\ell}{d/2}\\right)\\ge0.
\\]

\\[
g\\le\\frac{v^2(d/2)}{r^2}=\\frac{(3.00)^2(1.50)}{1.75}=7.71\\ \\frac{\\mathrm m}{\\mathrm{s^2}}.
\\]

Yes, smaller planetary gravity can allow the situation. Both tensions are strictly positive below this value; equality is the zero-lower-tension threshold.

**Use this method again**

Use geometry → write vertical difference and inward sum of tensions → solve → reject any negative tension. For another planet, solve the same nonnegative-tension condition for gravity.

**Check**

For an illustrative planet with gravity 5.00 m/s², the tension difference is 26.667 N while the sum stays 41.143 N. This gives upper tension 33.905 N and lower tension 7.238 N, both positive. The vertical resultant is:

\\[
(33.905-7.238)\\frac{1.50}{2.00}=20.0\\ \\mathrm N=mg.
\\]

This demonstrates that reduced gravity really can satisfy both equations.
:::

:::exam-question
id: phys-ch6-p11
title: Serway/Jewett · Problem 6.11
question: Serway/Jewett · Problem 6.11
reference: [Serway/Jewett 9e · Problem 6.11](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
answer-label: Show answer
body:
Serway/Jewett · Problem 6.11

![Serway/Jewett · Problem 6.11 — complete original problem](assets/lessons/physics/recommended/ch6-p11.webp)
solution:
**Plan — we are going to…**

1. Identify the inward force keeping the crate with the truck.
2. Use the maximum static friction at the no-slip threshold.
3. Solve for the largest truck speed.

**The trick**

Although the truck is moving, the crate does not slide on the bed at the safe speeds. **Static friction** supplies its inward acceleration. The crate’s mass cancels.

**What you need to know**

The flatbed is horizontal, so its normal force balances weight. At impending sliding:

\\[
N=mg,\\qquad f_{s,\\max}=\\mu_smg.
\\]

The horizontal net force required for a turn is:

\\[
F_{\\mathrm{in}}=\\frac{mv^2}{R}.
\\]

**Step-by-step solution**

1. **Draw the crate’s forces.** Weight points down, the bed’s normal force points up, and static friction points toward the center of the curve. Neither weight nor normal force contributes inward.

2. **Set the required friction equal to the maximum.**

\\[
\\frac{mv_{\\max}^2}{R}=\\mu_smg.
\\]

Cancel the positive mass and multiply by radius:

\\[
v_{\\max}^2=\\mu_sgR.
\\]

3. **Insert the data and take the square root.**

\\[
v_{\\max}=\\sqrt{(0.600)(9.80)(35.0)}=14.3\\ \\frac{\\mathrm m}{\\mathrm s}.
\\]

\\[
v_{\\max}=14.346(3.60)=51.6\\ \\frac{\\mathrm{km}}{\\mathrm h}.
\\]

The truck must stay at or below this ideal threshold to avoid sliding.

**Use this method again**

For an unbanked turn, static friction is the inward force. Set the required friction no greater than its maximum and solve for speed.

**Check**

At the unrounded threshold:

\\[
\\frac{v_{\\max}^2}{R}=\\frac{205.8}{35.0}=5.88\\ \\frac{\\mathrm m}{\\mathrm{s^2}}=\\mu_sg.
\\]

The result has speed units because gravity times radius has units of speed squared. A larger turn radius permits a larger safe speed.
:::

:::exam-question
id: phys-ch6-p15
title: Serway/Jewett · Problem 6.15
question: Serway/Jewett · Problem 6.15
reference: [Serway/Jewett 9e · Problem 6.15](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
answer-label: Show answer
body:
Serway/Jewett · Problem 6.15

![Serway/Jewett · Problem 6.15 — complete original problem](assets/lessons/physics/recommended/ch6-p15.webp)
solution:
**Plan — we are going to…**

1. Draw forces on the child at the lowest point.
2. Use the massless seat to relate seat force to the two chain tensions.
3. Solve the radial equation for the child’s speed.

**The trick**

There are **two chains**, each with tension equal to the stated value. At the bottom, the inward direction is upward. The seat’s upward force is the sum of the chain tensions, not that sum minus the child’s weight.

**What you need to know**

Let the child’s mass be m, each chain tension be T, and the swing radius be R. The seat is massless. The seat pushes up on the child with a contact force N; gravity pulls the child down. At the lowest point, both chain tensions point up.

**Step-by-step solution**

1. **Relate seat force to chain force.** For the massless seat, net force must be zero even though it moves. The child pushes down on the seat with the same magnitude as the seat pushes up on the child.

\\[
T+T-N=0\\quad\\Longrightarrow\\quad N=2T.
\\]

2. **Part (a): write Newton’s second law for the child, inward upward.**

\\[
N-mg=\\frac{mv^2}{R}.
\\]

\\[
2T-mg=\\frac{mv^2}{R}.
\\]

3. **Isolate the speed.** Multiply by radius and divide by mass before taking the positive square root.

\\[
v^2=\\frac{R(2T-mg)}{m}.
\\]

\\[
\\boxed{v=\\sqrt{\\frac{R(2T-mg)}{m}}}.
\\]

This requires the expression under the root to be nonnegative; positive-speed bottom passage requires total chain tension greater than the child’s weight.

4. **Part (b): report the seat’s force on the child.**

\\[
\\boxed{N=2T\\quad\\text{upward}.}
\\]

The net force on the child is smaller than this seat force because gravity also acts downward.

**Use this method again**

Separate the child and massless seat into two force diagrams → add both chain tensions → write the child’s inward net-force equation.

**Check**

Substitute the speed back into the radial-force expression:

\\[
\\frac{mv^2}{R}=\\frac mR\\frac{R(2T-mg)}m=2T-mg=N-mg.
\\]

If the speed tends to zero, the total chain tension tends to the weight, giving zero radial acceleration as expected.
:::

:::exam-question
id: phys-ch6-p16
title: Serway/Jewett · Problem 6.16
question: Serway/Jewett · Problem 6.16
reference: [Serway/Jewett 9e · Problem 6.16](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
answer-label: Show answer
body:
Serway/Jewett · Problem 6.16

![Serway/Jewett · Problem 6.16 — complete original problem](assets/lessons/physics/recommended/ch6-p16.webp)
solution:
**Plan — we are going to…**

1. At the valley, choose inward upward and solve for track force.
2. At the hilltop, choose inward downward.
3. Set the hilltop contact force to zero to find the limiting speed.

**The trick**

The circle’s center lies **above the car at A** but **below the car at B**. The radial positive direction therefore reverses. The track’s normal force is not automatically equal to weight.

**What you need to know**

The car’s mass is 500 kg. At A the speed is 20.0 m/s and radius is 10.0 m. At B the radius is 15.0 m. Weight acts down; the track’s support force acts up at these valley/crest positions. Ordinary contact cannot supply a negative normal force.

**Step-by-step solution**

1. **Part (a): write the valley equation.** Upward is inward at A.

\\[
N_A-mg=\\frac{mv_A^2}{r_1}.
\\]

\\[
N_A=m\\left(g+\\frac{v_A^2}{r_1}\\right).
\\]

2. **Calculate the track force.**

\\[
N_A=(500)\\left(9.80+\\frac{(20.0)^2}{10.0}\\right).
\\]

\\[
\\boxed{N_A=24900\\ \\mathrm N=24.9\\ \\mathrm{kN}\\quad\\text{upward}.}
\\]

3. **Part (b): write the hilltop equation.** Downward is now inward, so weight is positive and normal force negative.

\\[
mg-N_B=\\frac{mv_B^2}{r_2}.
\\]

\\[
N_B=m\\left(g-\\frac{v_B^2}{r_2}\\right).
\\]

4. **Find the contact threshold.** At the greatest speed still compatible with contact, the normal force reaches zero.

\\[
0=g-\\frac{v_{\\max}^2}{r_2}.
\\]

\\[
\\boxed{v_{\\max}=\\sqrt{gr_2}=\\sqrt{(9.80)(15.0)}=12.1\\ \\frac{\\mathrm m}{\\mathrm s}.}
\\]

**Use this method again**

Draw the local radius toward the center before choosing signs. At a crest, contact loss occurs when the upward support force reaches zero.

**Check**

At A, the upward net force is 24900 minus 4900, or 20000 N. Dividing by 500 kg gives 40.0 m/s², exactly the required speed squared divided by 10.0 m. At B’s limiting speed, gravity alone supplies the required 9.80 m/s² downward acceleration.
:::

:::exam-question
id: phys-ch6-p17
title: Serway/Jewett · Problem 6.17
question: Serway/Jewett · Problem 6.17
reference: [Serway/Jewett 9e · Problem 6.17](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
answer-label: Show answer
body:
Serway/Jewett · Problem 6.17

![Serway/Jewett · Problem 6.17 — complete original problem](assets/lessons/physics/recommended/ch6-p17.webp)
solution:
**Plan — we are going to…**

1. Use the specified top acceleration to determine the teardrop radius.
2. Resolve weight and rail force at the top.
3. Repeat for a 20.0 m circular top and test whether contact is possible.

**The trick**

The car rides on the **inside of the loop**. At the top, both gravity and a possible rail normal force point inward, downward. A negative required normal force means ordinary inside contact cannot be maintained.

**What you need to know**

Let the combined mass of car and riders be M. At the loop top, inward is downward. The radial acceleration is speed squared divided by radius. Normal force is the track’s push, not an extra force added to “centripetal force.”

\\[
Mg+N=\\frac{Mv^2}{r}.
\\]

**Step-by-step solution**

1. **Part (a): use the given inward acceleration.** At speed 13.0 m/s the acceleration is twice gravity.

\\[
\\frac{v^2}{r}=2g.
\\]

\\[
\\boxed{r=\\frac{(13.0)^2}{2(9.80)}=8.62\\ \\mathrm m.}
\\]

2. **Part (b): calculate the rail force at the teardrop top.**

\\[
Mg+N=M(2g).
\\]

\\[
\\boxed{N=Mg\\quad\\text{downward}.}
\\]

3. **Part (c): use the alternative circular-loop radius.**

\\[
a_r=\\frac{(13.0)^2}{20.0}=8.45\\ \\frac{\\mathrm m}{\\mathrm{s^2}}=0.862g\\quad\\text{downward}.
\\]

4. **Part (d): test the circular loop’s required rail force.**

\\[
N=M(a_r-g)=M(8.45-9.80).
\\]

\\[
N=-1.35M\\ \\frac{\\mathrm m}{\\mathrm{s^2}}<0.
\\]

A pushing rail cannot supply this upward “negative inward” force. The car loses ordinary inside contact unless an additional restraint holds it to the track. A tighter teardrop top supplies enough inward acceleration at modest speed; a broader bottom reduces the large support forces there.

**Use this method again**

Use the required acceleration to find local curvature. Then test the normal-force sign. Loop geometry matters locally, not just through the loop’s overall height.

**Check**

The contact speed for a 20.0 m top would be:

\\[
v_{\\min}=\\sqrt{gr}=\\sqrt{(9.80)(20.0)}=14.0\\ \\frac{\\mathrm m}{\\mathrm s}.
\\]

The actual 13.0 m/s is below this value, independently confirming the contact problem. For the teardrop radius, the sum of weight and rail force is twice weight, giving the stipulated twice-gravity acceleration.
:::

:::exam-question
id: phys-ch6-p18
title: Serway/Jewett · Problem 6.18
question: Serway/Jewett · Problem 6.18
reference: [Serway/Jewett 9e · Problem 6.18](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
answer-label: Show answer
body:
Serway/Jewett · Problem 6.18

![Serway/Jewett · Problem 6.18 — complete original problem](assets/lessons/physics/recommended/ch6-p18.webp)
solution:
**Plan — we are going to…**

1. Resolve acceleration into inward radial and downhill tangential components.
2. Use the radial force equation to find the tension.
3. Combine the perpendicular acceleration components and test reversed motion.

**The trick**

Reversing the velocity at the same position and speed does **not** reverse acceleration. Radial acceleration depends on speed squared; tangential gravity depends on position. While the bob rises, downhill gravity slows it; while it descends, the same gravity speeds it up.

**What you need to know**

The mass is 0.500 kg, radius 2.00 m, speed 8.00 m/s, and angle 20.0° from the downward vertical. Choose inward toward the pivot as the radial positive direction, and downhill toward the lowest point as the tangential positive direction. Tension is purely radial. Gravity has outward radial component and downhill tangential component.

\\[
a_r=\\frac{v^2}{R},\\qquad a_t=g\\sin\\theta.
\\]

**Step-by-step solution**

1. **Part (a): write the radial force equation.** Gravity’s component opposes the inward tension.

\\[
T-mg\\cos20.0^\\circ=\\frac{mv^2}{R}.
\\]

2. **Isolate and evaluate the tension.**

\\[
T=m\\left(\\frac{v^2}{R}+g\\cos20.0^\\circ\\right).
\\]

\\[
T=(0.500)\\left(\\frac{(8.00)^2}{2.00}+9.80\\cos20.0^\\circ\\right).
\\]

\\[
\\boxed{T=20.6\\ \\mathrm N.}
\\]

3. **Part (b): calculate the two accelerations.**

\\[
a_r=\\frac{64.0}{2.00}=32.0\\ \\frac{\\mathrm m}{\\mathrm{s^2}}\\quad\\text{toward the pivot}.
\\]

\\[
a_t=9.80\\sin20.0^\\circ=3.35\\ \\frac{\\mathrm m}{\\mathrm{s^2}}\\quad\\text{toward the lowest point}.
\\]

4. **Part (c): combine perpendicular components.** Add squares, not the component magnitudes.

\\[
a=\\sqrt{a_r^2+a_t^2}=\\sqrt{(32.0)^2+(3.3518)^2}=32.2\\ \\frac{\\mathrm m}{\\mathrm{s^2}}.
\\]

Measure the direction from the inward radius toward the downhill tangent:

\\[
\\phi=\\tan^{-1}\\left(\\frac{a_t}{a_r}\\right)=\\tan^{-1}\\left(\\frac{3.3518}{32.0}\\right)=5.98^\\circ.
\\]

5. **Parts (d) and (e): reverse the motion.** The angle and speed magnitude have not changed. Thus the same tension, radial component, tangential component, total magnitude and direction apply. Only the relation between velocity and downhill acceleration changes: they oppose during ascent and align during descent.

**Use this method again**

For nonuniform circular motion, solve radial forces for tension and tangential forces for speeding up/slowing down. Combine the acceleration components only after calculating them separately.

**Check**

The net radial force from the calculated tension is:

\\[
20.6045-(0.500)(9.80)\\cos20.0^\\circ=16.0\\ \\mathrm N.
\\]

Dividing by 0.500 kg gives 32.0 m/s². The tangential force is 1.6759 N, giving 3.3518 m/s². The total acceleration is only slightly larger than 32.0 because the tangential part is much smaller.
:::

:::exam-question
id: phys-ch6-p21
title: Serway/Jewett · Problem 6.21
question: Serway/Jewett · Problem 6.21
reference: [Serway/Jewett 9e · Problem 6.21](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
answer-label: Show answer
body:
Serway/Jewett · Problem 6.21

![Serway/Jewett · Problem 6.21 — complete original problem](assets/lessons/physics/recommended/ch6-p21.webp)
solution:
**Plan — we are going to…**

1. Draw the hanging mass’s forces in the ground frame.
2. Resolve tension into horizontal and vertical components.
3. Divide the equations to get the tilt, then find the tension.

**The trick**

The bob is stationary **relative to the truck**, but it accelerates horizontally relative to the ground. The string leans backward while its tension pulls the bob forward and upward. The angle is measured from vertical.

**What you need to know**

The mass is 0.500 kg and the truck accelerates to the right at 3.00 m/s². Use right as positive horizontal and up as positive vertical. The bob has no vertical acceleration. The only forces are tension along the string toward its ceiling attachment, and weight downward.

**Step-by-step solution**

1. **Write the horizontal equation.** The horizontal tension component produces the truck’s acceleration.

\\[
T\\sin\\theta=ma.
\\]

2. **Write the vertical equation.** Vertical acceleration is zero.

\\[
T\\cos\\theta=mg.
\\]

3. **Part (a): divide the first equation by the second.** Both the tension and mass cancel.

\\[
\\tan\\theta=\\frac ag=\\frac{3.00}{9.80}.
\\]

\\[
\\boxed{\\theta=\\tan^{-1}(0.306122)=17.0^\\circ\\quad\\text{from vertical}.}
\\]

The bob lies behind the ceiling attachment, opposite the truck’s acceleration.

4. **Part (b): find the tension.** The two perpendicular force components give its magnitude.

\\[
T=\\sqrt{(ma)^2+(mg)^2}=m\\sqrt{a^2+g^2}.
\\]

\\[
\\boxed{T=(0.500)\\sqrt{(3.00)^2+(9.80)^2}=5.12\\ \\mathrm N.}
\\]

**Use this method again**

Choose an inertial ground frame → write horizontal acceleration and vertical equilibrium → divide to find the angle → recover tension.

**Check**

Using the unrounded result, the tension’s vertical component is 4.90 N, exactly the weight. Its horizontal component is 1.50 N; dividing by 0.500 kg returns the given 3.00 m/s². Total tension exceeds the weight because it must also pull horizontally.
:::

:::exam-question
id: phys-ch6-p23
title: Serway/Jewett · Problem 6.23
question: Serway/Jewett · Problem 6.23
reference: [Serway/Jewett 9e · Problem 6.23](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
answer-label: Show answer
body:
Serway/Jewett · Problem 6.23

![Serway/Jewett · Problem 6.23 — complete original problem](assets/lessons/physics/recommended/ch6-p23.webp)
solution:
**Plan — we are going to…**

1. Translate the two scale readings into Newton’s second-law equations.
2. Add the equations to isolate true weight.
3. Subtract them to find the acceleration magnitude and infer the travel direction.

**The trick**

The scale reads **normal force**, not automatically true weight. The stated equal acceleration magnitudes at starting and stopping are what let us eliminate acceleration by adding the readings.

**What you need to know**

Let N be the upward scale force, m the person’s mass, and a the common positive acceleration magnitude. Use up as positive. True weight is constant throughout the trip. The start reading is 591 N, above the stop reading of 391 N.

**Step-by-step solution**

1. **Write the start and stop equations.** The larger start reading corresponds to upward acceleration, and the smaller stop reading to downward acceleration.

\\[
591-mg=ma.
\\]

\\[
391-mg=-ma.
\\]

2. **Part (a): add the equations.** The acceleration terms cancel.

\\[
591+391-2mg=0.
\\]

\\[
\\boxed{mg=\\frac{982}{2}=491\\ \\mathrm N.}
\\]

3. **Part (b): divide weight by gravity.**

\\[
\\boxed{m=\\frac{491}{9.80}=50.1\\ \\mathrm{kg}.}
\\]

4. **Part (c): subtract the stop equation from the start equation.**

\\[
591-391=2ma.
\\]

\\[
ma=100\\ \\mathrm N.
\\]

\\[
\\boxed{a=\\frac{100}{50.102}=2.00\\ \\frac{\\mathrm m}{\\mathrm{s^2}}.}
\\]

Acceleration is upward while starting and downward while stopping. Starting upward and then braking downward means the elevator’s trip is upward.

**Use this method again**

For equal-magnitude start/stop accelerations, average the two normal forces to find weight and use half their difference to find mass times acceleration.

**Check**

Reconstruct both readings using the derived weight and force difference:

\\[
N_{\\mathrm{start}}=491+100=591\\ \\mathrm N.
\\]

\\[
N_{\\mathrm{stop}}=491-100=391\\ \\mathrm N.
\\]

Both reproduce the measurements. True weight remains 491 N in each case.
:::

:::exam-question
id: phys-ch6-p37
title: Serway/Jewett · Problem 6.37
question: Serway/Jewett · Problem 6.37
reference: [Serway/Jewett 9e · Problem 6.37](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
answer-label: Show answer
body:
Serway/Jewett · Problem 6.37

![Serway/Jewett · Problem 6.37 — complete original problem](assets/lessons/physics/recommended/ch6-p37.webp)
solution:
**Plan — we are going to…**

1. Locate A and B relative to the curve’s center.
2. Draw clockwise tangents for velocity.
3. Draw inward radii for acceleration.

**The trick**

**Constant speed does not mean zero acceleration.** The velocity direction keeps turning. Velocity is tangent to the road; acceleration points toward the center, not in the direction of travel.

**What you need to know**

The diagram is an aerial view with north up and east right. A is at the upper part of the arc and B at its rightmost part. Constant-speed circular motion has no tangential acceleration; its radial acceleration is nonzero:

\\[
a_t=0,\\qquad a_r=\\frac{v^2}{R}.
\\]

**Step-by-step solution**

1. **Part (a): draw the velocity at A.** At the top of a clockwise turn, the next position is to the right. The tangent therefore points **east**.

2. **Draw the acceleration at A.** The center of curvature lies below A in the diagram. Inward is **south**.

3. **Part (b): draw the velocity at B.** At the rightmost point, clockwise travel continues downward on the diagram. The tangent points **south**.

4. **Draw the acceleration at B.** The center lies to the left of B. Inward is **west**.

The result is **A: velocity east, acceleration south; B: velocity south, acceleration west**.

**Use this method again**

First trace the direction of travel to choose the tangent. Then ignore the travel direction and point acceleration toward the center.

**Check**

At both locations the chosen velocity and acceleration directions are perpendicular. That is required for constant speed: perpendicular acceleration changes direction without changing the speed. An outward acceleration would turn the car away from the curve’s center and cannot describe the road shown.
:::

:::exam-question
id: phys-ch6-p39
title: Serway/Jewett · Problem 6.39
question: Serway/Jewett · Problem 6.39
reference: [Serway/Jewett 9e · Problem 6.39](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
answer-label: Show answer
body:
Serway/Jewett · Problem 6.39

![Serway/Jewett · Problem 6.39 — complete original problem](assets/lessons/physics/recommended/ch6-p39.webp)
solution:
**Plan — we are going to…**

1. Use the first circular-motion state to determine the rock’s mass.
2. Use the same mass in the breaking state.
3. Compare the new tension with the initial tension.

**The trick**

**Tension scales with speed squared and inversely with radius.** The speed becomes 2.50 times larger, while the radius becomes 2.50 times smaller; both changes increase the needed tension.

**What you need to know**

The surface is frictionless and horizontal. Weight and table normal cancel, so the string provides the inward force. In the problem’s circular-motion model at the compared states:

\\[
T=\\frac{mv^2}{r}.
\\]

The same rock has the same mass before and at breaking.

**Step-by-step solution**

1. **Identify the initial state.**

\\[
T_i=50.0\\ \\mathrm N,\\qquad r_i=2.50\\ \\mathrm m,\\qquad v_i=20.4\\ \\frac{\\mathrm m}{\\mathrm s}.
\\]

2. **Find the mass from the initial radial equation.**

\\[
m=\\frac{T_i r_i}{v_i^2}=\\frac{(50.0)(2.50)}{(20.4)^2}=0.300365\\ \\mathrm{kg}.
\\]

3. **Use the breaking radius and speed.**

\\[
r_f=1.00\\ \\mathrm m,\\qquad v_f=51.0\\ \\frac{\\mathrm m}{\\mathrm s}.
\\]

\\[
T_f=\\frac{mv_f^2}{r_f}=\\frac{(0.300365)(51.0)^2}{1.00}.
\\]

4. **Round the breaking strength.**

\\[
\\boxed{T_f=781\\ \\mathrm N.}
\\]

This is the tension threshold at which the string breaks in the stated model.

**Use this method again**

When the same object appears in two circular-motion states, divide the radial equations to cancel its mass, or find mass from the first state and reuse it.

**Check**

The ratio gives an independent calculation:

\\[
\\frac{T_f}{T_i}=\\left(\\frac{v_f}{v_i}\\right)^2\\frac{r_i}{r_f}=(2.50)^2(2.50)=15.625.
\\]

\\[
T_f=(50.0)(15.625)=781.25\\ \\mathrm N.
\\]

This agrees with the mass-based calculation.
:::

:::exam-question
id: phys-ch6-p40
title: Serway/Jewett · Problem 6.40
question: Serway/Jewett · Problem 6.40
reference: [Serway/Jewett 9e · Problem 6.40](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
answer-label: Show answer
body:
Serway/Jewett · Problem 6.40

![Serway/Jewett · Problem 6.40 — complete original problem](assets/lessons/physics/recommended/ch6-p40.webp)
solution:
**Plan — we are going to…**

1. Convert the speed to SI units.
2. Resolve the forces at the highest point with downward as inward.
3. Find the normal force, then the contact-loss speed.

**The trick**

At the top of the hump, the inward direction is **downward**. Weight helps produce the required radial acceleration while the road’s upward normal force opposes it. Convert km/h before squaring speed.

**What you need to know**

The mass is 1800 kg and local radius of curvature is 20.4 m. At the crest, draw weight downward and normal force upward. Ordinary road contact can push upward but cannot pull the car downward. Thus the normal force must be nonnegative.

**Step-by-step solution**

1. **Convert the given speed.**

\\[
v=30.0\\ \\frac{\\mathrm{km}}{\\mathrm h}\\times\\frac{1000\\ \\mathrm m}{1\\ \\mathrm{km}}\\times\\frac{1\\ \\mathrm h}{3600\\ \\mathrm s}=8.3333\\ \\frac{\\mathrm m}{\\mathrm s}.
\\]

2. **Part (a): write Newton’s second law inward.**

\\[
mg-N=\\frac{mv^2}{R}.
\\]

\\[
N=m\\left(g-\\frac{v^2}{R}\\right).
\\]

3. **Evaluate the road force.**

\\[
N=(1800)\\left(9.80-\\frac{(8.3333)^2}{20.4}\\right).
\\]

\\[
\\boxed{N=1.15\\times10^4\\ \\mathrm N=11.5\\ \\mathrm{kN}\\quad\\text{upward}.}
\\]

4. **Part (b): impose the contact condition.** The largest speed has zero normal force.

\\[
0=g-\\frac{v_{\\max}^2}{R}.
\\]

\\[
\\boxed{v_{\\max}=\\sqrt{gR}=\\sqrt{(9.80)(20.4)}=14.1\\ \\frac{\\mathrm m}{\\mathrm s}.}
\\]

\\[
v_{\\max}=14.1393(3.60)=50.9\\ \\frac{\\mathrm{km}}{\\mathrm h}.
\\]

**Use this method again**

At a crest, choose down as inward, subtract the upward support force, and enforce nonnegative contact force to obtain a speed limit.

**Check**

The weight is 17640 N. Subtracting the unrounded normal force of 11512.55 N gives 6127.45 N downward. Dividing by 1800 kg gives 3.40414 m/s², equal to speed squared divided by radius. The normal force is less than weight, as expected at a crest.
:::

:::exam-question
id: phys-ch6-p42
title: Serway/Jewett · Problem 6.42
question: Serway/Jewett · Problem 6.42
reference: [Serway/Jewett 9e · Problem 6.42](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
answer-label: Show answer
body:
Serway/Jewett · Problem 6.42

![Serway/Jewett · Problem 6.42 — complete original problem](assets/lessons/physics/recommended/ch6-p42.webp)
solution:
**Plan — we are going to…**

1. Find the horizontal radius from the wedge geometry.
2. Resolve the normal force vertically and inward.
3. Eliminate the normal force and simplify the speed formula.

**The trick**

The distance up the wedge is **not** the horizontal orbit radius. The radius is its horizontal projection. Also the surface is frictionless, so only weight and the normal force act on the object.

**What you need to know**

The wedge rises at angle theta above horizontal. The object stays at a fixed height and at distance L along the slope while rotating with the wedge. The normal force tilts inward by the same angle from vertical. Choose inward horizontal and upward vertical axes. Assume a nonzero circular radius.

**Step-by-step solution**

1. **Use the right triangle in the figure.** The distance along the slope is L, so its horizontal projection is:

\\[
r=L\\cos\\theta.
\\]

2. **Balance the vertical forces.** The object does not rise or fall.

\\[
N\\cos\\theta=mg.
\\]

3. **Write the radial equation.** The normal force’s inward component changes the direction of the velocity.

\\[
N\\sin\\theta=\\frac{mv^2}{r}.
\\]

4. **Divide the radial equation by the vertical equation.**

\\[
\\frac{N\\sin\\theta}{N\\cos\\theta}=\\frac{mv^2/r}{mg}.
\\]

\\[
\\tan\\theta=\\frac{v^2}{rg}.
\\]

\\[
v^2=rg\\tan\\theta.
\\]

5. **Replace the radius and simplify the trigonometric factor.**

\\[
v^2=(L\\cos\\theta)g\\frac{\\sin\\theta}{\\cos\\theta}=gL\\sin\\theta.
\\]

\\[
\\boxed{v=\\sqrt{gL\\sin\\theta}.}
\\]

**Use this method again**

Find the actual horizontal radius first. For fixed-height circular motion, balance vertical forces and use the horizontal component inward; dividing the equations eliminates the normal force.

**Check**

Substitution gives the required radial acceleration:

\\[
\\frac{v^2}{r}=\\frac{gL\\sin\\theta}{L\\cos\\theta}=g\\tan\\theta.
\\]

Meanwhile the force equations give the same acceleration as the horizontal normal component divided by mass. The quantity under the root has units of speed squared, and the speed tends to zero as the wedge angle tends to zero.
:::

:::exam-question
id: phys-ch6-p45
title: Serway/Jewett · Problem 6.45
question: Serway/Jewett · Problem 6.45
reference: [Serway/Jewett 9e · Problem 6.45](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
answer-label: Show answer
body:
Serway/Jewett · Problem 6.45

![Serway/Jewett · Problem 6.45 — complete original problem](assets/lessons/physics/recommended/ch6-p45.webp)
solution:
**Plan — we are going to…**

1. Identify the real forces throughout the vertical circle.
2. Choose the inward direction separately at the top and bottom.
3. Use the top speed to find tension and the bottom tension limit to find speed.

**The trick**

There is **no separate centripetal force** to add to the diagram. The inward resultant of tension and gravity equals mass times radial acceleration. Gravity points down everywhere; tension points toward the circle’s center.

**What you need to know**

The ball has mass 0.275 kg and the string length, also the radius, is 0.850 m. At the top, inward is down; at the bottom, inward is up. The string can pull only.

\\[
\\sum F_{\\mathrm{in}}=\\frac{mv^2}{L}.
\\]

**Step-by-step solution**

1. **Part (a): list forces at any point.** Draw the string tension along the string toward the center and weight vertically down. Ignore air resistance. The phrase “centripetal” describes their net radial effect.

2. **Part (b): draw the two requested diagrams.** At the bottom: tension up, weight down. At the top: both tension and weight down. The arrows for gravity keep the same direction even though the inward axis reverses.

3. **Part (c): write the top equation.**

\\[
T_{\\mathrm{top}}+mg=\\frac{mv_{\\mathrm{top}}^2}{L}.
\\]

\\[
T_{\\mathrm{top}}=m\\left(\\frac{v_{\\mathrm{top}}^2}{L}-g\\right).
\\]

\\[
\\boxed{T_{\\mathrm{top}}=(0.275)\\left(\\frac{(5.20)^2}{0.850}-9.80\\right)=6.05\\ \\mathrm N.}
\\]

4. **Part (d): write the bottom equation at the tension limit.**

\\[
T_{\\max}-mg=\\frac{mv_{\\mathrm{bottom}}^2}{L}.
\\]

\\[
v_{\\mathrm{bottom}}^2=L\\left(\\frac{T_{\\max}}m-g\\right).
\\]

\\[
\\boxed{v_{\\mathrm{bottom},\\max}=\\sqrt{0.850\\left(\\frac{22.5}{0.275}-9.80\\right)}=7.82\\ \\frac{\\mathrm m}{\\mathrm s}.}
\\]

Stay below this limiting speed to remain below the stated breaking tension at the bottom.

**Use this method again**

For a vertical circle, draw gravity down at every position, tension toward the center, then assign signs using the local inward direction. Solve the correct equation at the specified point.

**Check**

At the top, the unrounded tension plus weight is 6.05324 plus 2.695, or 8.74824 N. This equals mass times speed squared divided by radius. At the bottom threshold, the inward resultant is 22.5 minus 2.695, or 19.805 N; using the unrounded speed in the radial expression gives the same value.
:::

:::exam-question
id: phys-ch6-p54
title: Serway/Jewett · Problem 6.54
question: Serway/Jewett · Problem 6.54
reference: [Serway/Jewett 9e · Problem 6.54](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
answer-label: Show answer
body:
Serway/Jewett · Problem 6.54

![Serway/Jewett · Problem 6.54 — complete original problem](assets/lessons/physics/recommended/ch6-p54.webp)
solution:
**Plan — we are going to…**

1. Use equilibrium of the hanging mass to find the string tension.
2. Apply the same tension to the puck’s radial equation.
3. Explain the initial response when hanging mass is added or removed.

**The trick**

The hanging mass sets the tension **while it remains in equilibrium**. That tension supplies the puck’s inward force; the puck’s own weight is balanced by the table and does not provide its horizontal radial acceleration.

**What you need to know**

Use an ideal light string and frictionless hole. The puck has mass named m-one, and the suspended load has mass named m-two. Initially the puck moves in a circle of radius R while the load stays at rest. The same ideal-string tension acts on both objects.

**Step-by-step solution**

1. **Part (a): draw the hanging load’s forces.** Tension acts up and weight down. Its initial acceleration is zero.

\\[
T-m_2g=0.
\\]

\\[
\\boxed{T=m_2g.}
\\]

2. **Part (b): draw the puck’s forces.** Its weight and table normal balance vertically. The string tension points horizontally inward.

\\[
\\boxed{F_{\\mathrm{radial}}=T=m_2g.}
\\]

3. **Part (c): find its initial circular speed.**

\\[
\\frac{m_1v^2}{R}=m_2g.
\\]

\\[
v^2=\\frac{m_2gR}{m_1}.
\\]

\\[
\\boxed{v=\\sqrt{\\frac{m_2gR}{m_1}}.}
\\]

4. **Part (d): add a small hanging load.** Increasing the suspended mass makes it initially pull the puck inward. The radius starts to decrease, and the puck’s tangential speed increases as its orbit contracts. The load is no longer assumed to remain in its original equilibrium during this change.

5. **Part (e): remove a small hanging load.** Reducing the suspended mass initially reduces the inward pull. The puck moves outward, its radius increases, and its tangential speed decreases. With no damping, the coupled motion may oscillate radially rather than immediately settle into a new circle.

**Use this method again**

Draw each connected object separately. Use equilibrium only for an object actually at rest, transfer the ideal tension to the other object, then write its radial equation. For a changed load, distinguish the initial response from a new steady circle.

**Check**

For the original steady state, putting the speed expression back gives:

\\[
\\frac{m_1}{R}\\left(\\frac{m_2gR}{m_1}\\right)=m_2g=T.
\\]

For the change in motion, a central string force has no turning effect about the hole, so the product of radius and tangential speed remains constant. This confirms increasing tangential speed during contraction and decreasing tangential speed during expansion; it does not imply that the new radius is instantly constant.
:::

:::exam-question
id: phys-ch6-p57
title: Serway/Jewett · Problem 6.57
question: Serway/Jewett · Problem 6.57
reference: [Serway/Jewett 9e · Problem 6.57](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
answer-label: Show answer
body:
Serway/Jewett · Problem 6.57

![Serway/Jewett · Problem 6.57 — complete original problem](assets/lessons/physics/recommended/ch6-p57.webp)
solution:
**Plan — we are going to…**

1. Find the seat’s radius about the ride’s central axis.
2. Resolve chain tension to calculate the seat speed.
3. Add the child’s mass for the force diagram and chain tension.

**The trick**

The orbit radius includes **both half the platform diameter and the chain’s outward horizontal extension**. Do not use the chain length alone. The speed relation cancels mass; the tension relation does not.

**What you need to know**

The platform diameter is 8.00 m, chain length 2.50 m, empty seat mass 10.0 kg, and chain angle 28.0° from vertical. The later child has mass 40.0 kg. The seat moves at constant height. Chain tension acts up and inward, and weight acts down.

**Step-by-step solution**

1. **Part (a): find the horizontal orbit radius.**

\\[
r=\\frac D2+d\\sin\\theta.
\\]

\\[
r=\\frac{8.00}{2}+2.50\\sin28.0^\\circ=5.17368\\ \\mathrm m.
\\]

2. **Write the vertical and horizontal equations.** For the mass moving on the ride:

\\[
T\\cos\\theta=mg.
\\]

\\[
T\\sin\\theta=\\frac{mv^2}{r}.
\\]

3. **Divide to eliminate tension and mass.**

\\[
\\tan\\theta=\\frac{v^2}{rg}.
\\]

\\[
\\boxed{v=\\sqrt{rg\\tan\\theta}=\\sqrt{(5.17368)(9.80)\\tan28.0^\\circ}=5.19\\ \\frac{\\mathrm m}{\\mathrm s}.}
\\]

4. **Part (b): draw forces on child and seat together.** Treat them as one system of total mass 50.0 kg. Draw the total weight vertically down and the chain tension up/inward along the chain. The contact forces between child and seat are internal to this combined system.

5. **Part (c): calculate the loaded chain tension.**

\\[
m_{\\mathrm{total}}=10.0+40.0=50.0\\ \\mathrm{kg}.
\\]

\\[
T\\cos28.0^\\circ=(50.0)(9.80).
\\]

\\[
\\boxed{T=\\frac{490}{\\cos28.0^\\circ}=555\\ \\mathrm N.}
\\]

**Use this method again**

Build the radius from the central support outward. Then divide horizontal and vertical force equations for speed; use the full supported mass to calculate tension.

**Check**

Using the loaded tension, the inward component is approximately 260.5 N. The radial acceleration is speed squared divided by 5.17368 m, or 5.2108 m/s²; multiplying by 50.0 kg gives the same 260.5 N. The vertical component is exactly 490 N before rounding.
:::

:::exam-question
id: phys-ch6-p59
title: Serway/Jewett · Problem 6.59
question: Serway/Jewett · Problem 6.59
reference: [Serway/Jewett 9e · Problem 6.59](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
answer-label: Show answer
body:
Serway/Jewett · Problem 6.59

![Serway/Jewett · Problem 6.59 — complete original problem](assets/lessons/physics/recommended/ch6-p59.webp)
solution:
**Plan — we are going to…**

1. Separate the wall-normal radial force from the vertical friction force.
2. Use the no-fall friction condition and speed-period relation.
3. Explain what changes above and below the threshold rotation rate.

**The trick**

The wall normal force is **horizontal inward**. It is not the person’s weight. Static friction acts upward and adjusts to equal weight while the person stays at a fixed height; it is not automatically at its maximum at every rotation rate.

**What you need to know**

The person has mass m, the cylinder radius is R, the static-friction coefficient is named mu-s, and the rotation period is T. Use inward horizontal and upward vertical axes. With no vertical slipping, upward static friction balances weight.

\\[
v=\\frac{2\\pi R}{T},\\qquad N=\\frac{mv^2}{R},\\qquad f_s\\le\\mu_sN.
\\]

**Step-by-step solution**

1. **Part (a): express the normal force in terms of period.**

\\[
N=\\frac mR\\left(\\frac{2\\pi R}{T}\\right)^2=\\frac{4\\pi^2mR}{T^2}.
\\]

2. **Require enough static friction to prevent falling.** The needed actual friction is the weight.

\\[
mg=f_s\\le\\mu_sN.
\\]

\\[
mg\\le\\mu_s\\frac{4\\pi^2mR}{T^2}.
\\]

3. **Cancel mass and solve for the greatest period.** Multiply by the positive period squared and divide by gravity.

\\[
T^2\\le\\frac{4\\pi^2R\\mu_s}{g}.
\\]

\\[
\\boxed{T_{\\max}=2\\pi\\sqrt{\\frac{R\\mu_s}{g}}.}
\\]

A larger period means slower rotation, so preventing falling requires a period at or below this maximum.

4. **Part (b): increase the rotation rate.** The period decreases, speed increases, and the inward normal force increases. Weight stays fixed. The maximum available static friction increases, but actual static friction stays equal to weight once the person circles steadily at the same height. The person remains up and circles faster.

5. **Part (c): decrease the rate below the no-fall threshold.** The normal force and maximum available static friction decrease. Friction can no longer balance weight, so the person slides downward while circling. Weight remains unchanged. Once sliding starts, friction is kinetic; its numerical magnitude would require the kinetic coefficient, which is not given.

**Use this method again**

Use the wall normal force for radial motion and friction for vertical support. Apply the static-friction inequality before replacing speed with the period relation. Distinguish actual static friction from its maximum.

**Check**

At the derived threshold:

\\[
N=\\frac{4\\pi^2mR}{4\\pi^2R\\mu_s/g}=\\frac{mg}{\\mu_s}.
\\]

\\[
\\mu_sN=mg.
\\]

Thus the maximum friction is exactly enough to support the person. Increasing the coefficient allows a longer period, consistent with a grippier wall permitting slower rotation.
:::

:::exam-question
id: phys-ch6-p61
title: Serway/Jewett · Problem 6.61
question: Serway/Jewett · Problem 6.61
reference: [Serway/Jewett 9e · Problem 6.61](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
answer-label: Show answer
body:
Serway/Jewett · Problem 6.61

![Serway/Jewett · Problem 6.61 — complete original problem](assets/lessons/physics/recommended/ch6-p61.webp)

![Original Figure 6.5 — banked road and force diagram](assets/lessons/physics/recommended/support-figure-6-5.webp)
solution:
**Plan — we are going to…**

1. Determine the friction direction at the high-speed and low-speed limits.
2. Resolve normal and friction forces inward and vertically for each limit.
3. Solve the speed bounds and find when zero speed is allowed.

**The trick**

Friction reverses direction between the two limits. At **high speed** the car tends to slide up/outward, so friction acts down the bank. At **low speed** it tends to slide down/inward, so friction acts up the bank. Do not reuse one force equation for both cases.

**What you need to know**

Assume a bank angle between 0° and 90°, with the road rising outward. Let R be the horizontal curve radius and let the coefficient of static friction be named mu-s. The normal force tilts inward from vertical by the bank angle. At impending slip, friction has magnitude equal to coefficient times normal force. The car has no vertical acceleration.

\\[
f_{s,\\max}=\\mu_sN,\\qquad \\sum F_{\\mathrm{in}}=\\frac{mv^2}{R},\\qquad \\sum F_y=0.
\\]

**Step-by-step solution**

1. **Part (a), upper speed: draw friction down the slope.** It contributes inward horizontally and downward vertically.

\\[
N\\sin\\theta+\\mu_sN\\cos\\theta=\\frac{mv_{\\max}^2}{R}.
\\]

\\[
N\\cos\\theta-\\mu_sN\\sin\\theta=mg.
\\]

2. **Divide the equations and isolate the upper speed.**

\\[
\\frac{v_{\\max}^2}{Rg}=\\frac{\\sin\\theta+\\mu_s\\cos\\theta}{\\cos\\theta-\\mu_s\\sin\\theta}.
\\]

\\[
\\boxed{v_{\\max}=\\sqrt{Rg\\frac{\\sin\\theta+\\mu_s\\cos\\theta}{\\cos\\theta-\\mu_s\\sin\\theta}}}.
\\]

This finite bound applies only when its denominator is positive. If the coefficient is at least the cotangent of the bank angle, the ideal friction/contact model permits arbitrarily large speeds; there is no finite upper bound from these equations.

3. **Lower speed: reverse the friction arrow up the bank.** Friction now points outward horizontally and upward vertically.

\\[
N\\sin\\theta-\\mu_sN\\cos\\theta=\\frac{mv_{\\min}^2}{R}.
\\]

\\[
N\\cos\\theta+\\mu_sN\\sin\\theta=mg.
\\]

4. **Divide and isolate the lower speed.**

\\[
v_{\\min}^2=Rg\\frac{\\sin\\theta-\\mu_s\\cos\\theta}{\\cos\\theta+\\mu_s\\sin\\theta}.
\\]

If the numerator is positive, take its positive square root for the nonzero lower bound. If the numerator is zero or negative, the car can remain at rest on the bank, so the physical lower bound is zero. A negative speed squared is not an allowed answer.

5. **State the complete range.** For positive denominators, define the upper speed by the formula above and the lower speed by:

\\[
\\boxed{v_{\\min}=\\sqrt{Rg\\,\\max\\!\\left(0,\\frac{\\sin\\theta-\\mu_s\\cos\\theta}{\\cos\\theta+\\mu_s\\sin\\theta}\\right)}}.
\\]

The allowed speeds lie between these bounds. Use no finite upper bound in the high-friction case identified above.

6. **Part (b): impose zero minimum speed.** The lower numerator must be nonpositive.

\\[
\\sin\\theta-\\mu_s\\cos\\theta\\le0.
\\]

\\[
\\mu_s\\ge\\tan\\theta.
\\]

\\[
\\boxed{\\mu_{s,\\min}=\\tan\\theta.}
\\]

**Use this method again**

Predict the direction of possible sliding before drawing friction. Resolve both forces along inward/vertical axes, divide out the normal force, then check denominator and nonnegative-speed conditions.

**Check**

With no friction, both bounds become the same familiar banked-road speed:

\\[
\\mu_s=0\\quad\\Longrightarrow\\quad v=\\sqrt{Rg\\tan\\theta}.
\\]

For a flat road, the upper formula reduces to the usual friction-limited speed and the lower speed is zero:

\\[
\\theta=0\\quad\\Longrightarrow\\quad v_{\\max}=\\sqrt{\\mu_sRg},\\qquad v_{\\min}=0.
\\]

Finally, at zero speed the ordinary incline condition is friction at least weight times sine divided by normal weight component; this independently gives the tangent condition in part (b).
:::

:::exam-question
id: phys-ch6-p68
title: Serway/Jewett · Problem 6.68
question: Serway/Jewett · Problem 6.68
reference: [Serway/Jewett 9e · Problem 6.68](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
answer-label: Show answer
body:
Serway/Jewett · Problem 6.68

![Serway/Jewett · Problem 6.68 — complete original problem](assets/lessons/physics/recommended/ch6-p68.webp)
solution:
**Plan — we are going to…**

1. Describe a fixed bead position using its height and horizontal orbit radius.
2. Project forces along the hoop to obtain every equilibrium possibility.
3. Evaluate the two periods and distinguish exact equilibrium from stable equilibrium.

**The trick**

Do **not cancel the sine factor before checking its zeros**. The bottom and top are always exact axial equilibria. Cancelling that factor would lose both. An off-axis equilibrium exists only when the calculated cosine lies in its allowed range.

**What you need to know**

The hoop radius is 15.0 cm, or 0.150 m. Let theta be measured from the downward vertical as in the figure, and let omega be the hoop’s angular speed. A bead fixed relative to the hoop describes a horizontal circle about the vertical rotation axis, not a circle of radius equal to the whole hoop radius.

\\[
\\rho=R\\sin\\theta,\\qquad z=-R\\cos\\theta,\\qquad \\omega=\\frac{2\\pi}{T}.
\\]

The wire force is perpendicular to the hoop’s tangent because friction is negligible. Projecting along that tangent eliminates the unknown wire force.

**Step-by-step solution**

1. **Derive the tangential equilibrium condition.** In the frame rotating steadily with the hoop, gravity points down and the centrifugal term points horizontally away from the rotation axis. Their tangent components must cancel. The latter has magnitude mass times angular speed squared times horizontal radius.

\\[
m\\omega^2(R\\sin\\theta)\\cos\\theta-mg\\sin\\theta=0.
\\]

\\[
\\sin\\theta\\left(\\omega^2R\\cos\\theta-g\\right)=0.
\\]

The same relation follows in the ground frame by projecting the required horizontal centripetal acceleration along the hoop tangent; the rotating-frame term is a calculation device, not an extra ground-frame force.

2. **Keep both branches.** The zero-sine branch gives the exact bottom and top positions. The other branch gives possible off-axis positions.

\\[
\\theta=0^\\circ\\quad\\text{or}\\quad180^\\circ.
\\]

\\[
\\cos\\theta=\\frac{g}{\\omega^2R}=\\frac{gT^2}{4\\pi^2R}.
\\]

3. **Part (a): use the 0.450 s period.**

\\[
\\cos\\theta=\\frac{(9.80)(0.450)^2}{4\\pi^2(0.150)}=0.33512.
\\]

\\[
\\boxed{\\theta=\\cos^{-1}(0.33512)=70.4^\\circ.}
\\]

There are symmetric off-axis positions on the two sides of the hoop at this angle from the downward vertical. The exact axial bottom and top positions also satisfy equilibrium.

4. **Part (b): use the 0.850 s period.**

\\[
\\cos\\theta=\\frac{(9.80)(0.850)^2}{4\\pi^2(0.150)}=1.1957>1.
\\]

No real off-axis angle exists. The bottom and top remain exact equilibria; the bottom is the stable resting location.

5. **Part (c): explain the difference.** At slower rotation, the outward rotational effect is too weak to balance the tangential gravity component away from the axis. The stable bead position is the bottom. At faster rotation, the stable positions shift to the two off-axis locations. The top is unstable; the fast-rotation bottom is unstable too, although an exactly placed bead can mathematically remain there.

6. **Part (d): answer whether an equilibrium always exists.** Yes. At least the bottom and top make the sine factor zero for any rotation period. Exact existence does not mean the bead stays there after a small disturbance.

7. **Part (e): determine when there are more than two equilibrium positions.** The off-axis cosine must be less than one.

\\[
\\frac{gT^2}{4\\pi^2R}<1.
\\]

\\[
\\boxed{T<2\\pi\\sqrt{\\frac Rg}=2\\pi\\sqrt{\\frac{0.150}{9.80}}=0.777\\ \\mathrm s.}
\\]

Below this period there are four positions: bottom, top and two symmetric off-axis points. They correspond to three angle magnitudes measured from the downward vertical. At the threshold, the off-axis positions merge into the bottom; above it only the two axial equilibria remain.

**Use this method again**

Write horizontal orbit radius from the geometry → project along the frictionless wire tangent → factor the equilibrium condition → retain zero factors → check inverse-trigonometric existence and stability separately.

**Check**

Insert the 0.450 s result into the force balance. Its angular speed is about 13.96 rad/s, and:

\\[
\\omega^2R\\cos\\theta\\approx(13.96)^2(0.150)(0.33512)=9.80\\ \\frac{\\mathrm m}{\\mathrm{s^2}}.
\\]

This cancels gravity in the factored off-axis condition. At the bottom, a small angular displacement is restored when gravity exceeds the rotational coefficient, and amplified when the coefficient exceeds gravity. Their equality gives exactly the 0.777 s threshold derived above.
:::`};export{e as default};