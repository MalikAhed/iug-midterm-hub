var e={id:`physics-ch5`,title:`The Laws of Motion`,summary:`Serway/Jewett 9e · Chapter 5 · original textbook exercises and verified practice.`,subjectId:`physics`,reward:0,status:`published`,authoringSource:`:::exam-question
id: phys-ch5-p15
title: Serway/Jewett · Problem 5.15
question: Serway/Jewett · Problem 5.15
reference: [Serway/Jewett 9e · Problem 5.15](../books/136372.pdf#page=176)
answer-label: Show answer
body:
Serway/Jewett · Problem 5.15

![Serway/Jewett · Problem 5.15 — complete original problem](assets/lessons/physics/recommended/ch5-p15.webp)
solution:
**Plan — we are going to…**

1. Add the two forces component by component.
2. Divide by mass, then use constant-acceleration motion.
3. Find the direction, displacement and final position.

**The trick**

**Displacement is not final position.** Add the original coordinates only after finding the displacement. The negative horizontal force also puts the motion in quadrant II.

**What you need to know**

Newton's second law applies separately to each axis. Starting from rest with constant acceleration:

\\[
\\vec a=\\frac{\\sum\\vec F}{m}
\\]

\\[
\\vec v=\\vec a t
\\]

\\[
\\Delta\\vec r=\\frac12\\vec a t^2,qquad \\vec r_f=\\vec r_i+\\Delta\\vec r.
\\]

Use degree mode to find the direction.

**Step-by-step solution**

1. **Add forces.** Keep each sign attached to its component:

\\[
\\sum F_x=-6.00-3.00=-9.00\\ \\mathrm N
\\]

\\[
\\sum F_y=-4.00+7.00=3.00\\ \\mathrm N.
\\]

2. **Find acceleration.** Divide both components by the same mass:

\\[
a_x=\\frac{-9.00}{2.00}=-4.50\\ \\frac{\\mathrm m}{\\mathrm{s^2}}
\\]

\\[
a_y=\\frac{3.00}{2.00}=1.50\\ \\frac{\\mathrm m}{\\mathrm{s^2}}.
\\]

3. **Part (a): calculate velocity after 10.0 seconds.**

\\[
v_x=0+(-4.50)(10.0)=-45.0\\ \\frac{\\mathrm m}{\\mathrm s}
\\]

\\[
v_y=0+(1.50)(10.0)=15.0\\ \\frac{\\mathrm m}{\\mathrm s}.
\\]

4. **Part (b): select the correct quadrant.** Left and up means quadrant II. Find the small angle above west, then measure counterclockwise from positive x:

\\[
\\alpha=\\tan^{-1}\\!\\left(\\frac{15.0}{45.0}\\right)=18.4^\\circ
\\]

\\[
\\theta=180^\\circ-18.4^\\circ=161.6^\\circ.
\\]

The direction is **18.4° north of west**, or **161.6° from positive x**.

5. **Part (c): calculate displacement.**

\\[
\\Delta x=\\frac12(-4.50)(10.0)^2=-225\\ \\mathrm m
\\]

\\[
\\Delta y=\\frac12(1.50)(10.0)^2=75.0\\ \\mathrm m.
\\]

6. **Part (d): add the initial coordinates.**

\\[
x_f=-2.00-225=-227\\ \\mathrm m
\\]

\\[
y_f=4.00+75.0=79.0\\ \\mathrm m.
\\]

**Use this method again**

Signed forces → acceleration components → motion components → quadrant → add initial position.

**Check**

For constant acceleration from rest, average velocity is half the final velocity:

\\[
\\Delta\\vec r=\\frac{\\vec v_i+\\vec v_f}{2}t
=\\frac{(-45.0,15.0)}2(10.0)=(-225,75.0)\\ \\mathrm m.
\\]

This independently reproduces the displacement. Both velocity and displacement point left and up.
:::

:::exam-question
id: phys-ch5-p21
title: Serway/Jewett · Problem 5.21
question: Serway/Jewett · Problem 5.21
reference: [Serway/Jewett 9e · Problem 5.21](../books/136372.pdf#page=176)
answer-label: Show answer
body:
Serway/Jewett · Problem 5.21

![Serway/Jewett · Problem 5.21 — complete original problem](assets/lessons/physics/recommended/ch5-p21.webp)
solution:
**Plan — we are going to…**

1. Balance vertical forces while the block still touches the floor.
2. Find the rope tension from the hanging object's equilibrium.
3. Test whether floor contact can continue.

**The trick**

**A floor can push upward but cannot pull downward.** A negative calculated normal force means the block lifts off; it does not mean the floor exerts a downward force.

**What you need to know**

Here pounds measure weight, so no conversion to kilograms is needed. At rest, upward forces equal downward forces. The normal force must satisfy:

\\[
N\\ge0.
\\]

A light rope over an ideal pulley has the same tension along it.

**Step-by-step solution**

1. **Part (a): no rope.** The floor's upward normal force balances the 15.0-lb downward weight:

\\[
N-15.0=0
\\]

\\[
N=15.0\\ \\mathrm{lb}\\quad\\text{upward}.
\\]

2. **Part (b): attach the 10.0-lb object.** While everything remains at rest, its upward tension equals its weight:

\\[
T=10.0\\ \\mathrm{lb}.
\\]

On the floor block, tension and normal act up, weight acts down:

\\[
N+10.0-15.0=0
\\]

\\[
N=5.00\\ \\mathrm{lb}\\quad\\text{upward}.
\\]

3. **Part (c): replace it by a 20.0-lb object.** A proposed stationary state would require:

\\[
N+20.0-15.0=0
\\]

\\[
N=-5.00\\ \\mathrm{lb}.
\\]

That violates the contact condition. The heavier object pulls the floor block up, contact is lost, and the actual floor force becomes **zero**. Do not continue using the stationary tension of 20.0 lb after the system starts accelerating.

**Use this method again**

Assume contact → balance forces → test normal force. If it would be negative, remove the contact force and analyze the separated motion.

**Check**

For part (b), the upward forces really total the weight:

\\[
5.00+10.0=15.0\\ \\mathrm{lb}.
\\]

For part (c), a freely moving ideal two-mass system has tension:

\\[
T=\\frac{2(15.0)(20.0)}{15.0+20.0}=17.1\\ \\mathrm{lb}.
\\]

This exceeds the lighter block's 15.0-lb weight, confirming upward lift and zero floor contact.
:::

:::exam-question
id: phys-ch5-p23
title: Serway/Jewett · Problem 5.23
question: Serway/Jewett · Problem 5.23
reference: [Serway/Jewett 9e · Problem 5.23](../books/136372.pdf#page=176)
answer-label: Show answer
body:
Serway/Jewett · Problem 5.23

![Serway/Jewett · Problem 5.23 — complete original problem](assets/lessons/physics/recommended/ch5-p23.webp)
solution:
**Plan — we are going to…**

1. Apply Newton's second law separately to the car and trailer.
2. Use the trailer's force to find the road's traction on the car.
3. Reverse the road-on-car force to obtain car-on-road force.

**The trick**

**Net force on the car is smaller than traction.** Traction must accelerate the car and overcome the trailer's backward pull. Action–reaction forces act on different objects.

**What you need to know**

Take forward as positive x and up as positive y. The car has no vertical acceleration. Newton's second and third laws give:

\\[
\\sum F_x=ma
\\]

\\[
\\vec F_{A\\text{ on }B}=-\\vec F_{B\\text{ on }A}.
\\]

**Step-by-step solution**

1. **Part (a): car net force.** The car's mass is 1 000 kg:

\\[
F_{\\text{net,car}}=(1000)(2.15)=2150\\ \\mathrm N
\\]

That is **2.15 kN forward**.

2. **Part (b): trailer net force.** Ignoring trailer friction, its only horizontal force is the car's forward pull:

\\[
T=(300)(2.15)=645\\ \\mathrm N.
\\]

3. **Part (c): reverse the interaction.** The trailer pulls the car with **645 N backward**, equal and opposite to the car's pull on the trailer.

4. **Part (d): find the road's horizontal force on the car.** On the car, traction acts forward and the trailer pulls backward:

\\[
f-645=2150
\\]

\\[
f=2795\\ \\mathrm N.
\\]

The vertical road force supports the car:

\\[
N=(1000)(9.80)=9800\\ \\mathrm N.
\\]

5. **Find the car's force on the road.** Reverse both components:

\\[
\\vec F_{\\text{car on road}}=(-2795\\hat i-9800\\hat j)\\ \\mathrm N.
\\]

Its magnitude is:

\\[
F=\\sqrt{2795^2+9800^2}=1.019\\times10^4\\ \\mathrm N
\\]

That is **10.2 kN, backward and downward**, about **15.9° backward from vertical downward**.

**Use this method again**

Separate objects → calculate their net forces → restore internal interaction on the chosen object → reverse the specified action–reaction pair.

**Check**

For car and trailer treated together, their mutual pull cancels internally:

\\[
F_{\\text{external},x}=(1000+300)(2.15)=2795\\ \\mathrm N.
\\]

This matches traction, while the car alone still has the smaller 2150-N net force.
:::

:::exam-question
id: phys-ch5-p28
title: Serway/Jewett · Problem 5.28
question: Serway/Jewett · Problem 5.28
reference: [Serway/Jewett 9e · Problem 5.28](../books/136372.pdf#page=177)
answer-label: Show answer
body:
Serway/Jewett · Problem 5.28

![Serway/Jewett · Problem 5.28 — complete original problem](assets/lessons/physics/recommended/ch5-p28.webp)
solution:
**Plan — we are going to…**

1. Find the tension needed to hold one 5.00-kg mass.
2. Decide whether each scale measures one tension or supports two rope segments.
3. Resolve the weight along the incline for the last scale.

**The trick**

**A scale in a rope reads the tension, not the sum of opposite pulls.** The support scale in part (c) is different: two downward rope forces act on its pulley.

**What you need to know**

Equilibrium means zero net force. An ideal rope over ideal pulleys has uniform tension. A frictionless incline has downslope weight component:

\\[
W_\\parallel=mg\\sin\\theta.
\\]

**Step-by-step solution**

1. **Find the hanging-mass tension.** Its upward rope force balances weight:

\\[
T-mg=0
\\]

\\[
T=(5.00)(9.80)=49.0\\ \\mathrm N.
\\]

2. **Part (a): scale in the horizontal rope.** Each end pulls the scale with the same tension in opposite directions. The reading is **49.0 N**, not 98.0 N.

3. **Part (b): one end fixed to the wall.** The stationary 5.00-kg mass again fixes rope tension at **49.0 N**. The wall provides the balancing opposite pull.

4. **Part (c): scale supports the pulley.** Two rope segments pull downward on the pulley, each with 49.0 N:

\\[
S-T-T=0
\\]

\\[
S=2T=98.0\\ \\mathrm N.
\\]

5. **Part (d): scale along the slope.** Resolve gravity parallel to the 30.0° incline. With no friction, tension balances that component:

\\[
T-mg\\sin30.0^\\circ=0
\\]

\\[
T=(5.00)(9.80)(0.500)=24.5\\ \\mathrm N.
\\]

The four readings are **49.0 N, 49.0 N, 98.0 N and 24.5 N**.

**Use this method again**

Isolate the scale or supported pulley → count forces acting on that object → use equilibrium. Never add forces that act on different objects.

**Check**

In part (c), the scale supports both hanging masses, whose combined weight is:

\\[
(5.00+5.00)(9.80)=98.0\\ \\mathrm N.
\\]

In part (d), the reading is half the weight because sine of 30° is one half.
:::

:::exam-question
id: phys-ch5-p29
title: Serway/Jewett · Problem 5.29
question: Serway/Jewett · Problem 5.29
reference: [Serway/Jewett 9e · Problem 5.29](../books/136372.pdf#page=177)
answer-label: Show answer
body:
Serway/Jewett · Problem 5.29

![Serway/Jewett · Problem 5.29 — complete original problem](assets/lessons/physics/recommended/ch5-p29.webp)
solution:
**Plan — we are going to…**

1. Treat all three blocks as one system to find acceleration.
2. Isolate the 3.0-kg block to find rope tension.
3. Isolate the 2.0-kg block to find its contact force.

**The trick**

**The rope joins the 1.0-kg and 3.0-kg blocks.** The middle 2.0-kg block moves because the 1.0-kg block pushes it, not because rope tension acts directly on it.

**What you need to know**

On the frictionless horizontal surface, normal forces balance weights. Internal rope/contact forces cancel when the whole system is used:

\\[
F_{\\text{external}}=m_{\\text{total}}a.
\\]

**Step-by-step solution**

1. **Part (a): combine masses.** Right is positive:

\\[
42=(1.0+2.0+3.0)a
\\]

\\[
a=\\frac{42}{6.0}=7.0\\ \\frac{\\mathrm m}{\\mathrm{s^2}}\\quad\\text{rightward}.
\\]

2. **Part (b): isolate the 3.0-kg block.** It has the 42-N pull right and rope tension left:

\\[
42-T=(3.0)(7.0)
\\]

\\[
T=42-21=21\\ \\mathrm N.
\\]

3. **Part (c): isolate the 2.0-kg block.** Its only horizontal force is contact from the 1.0-kg block:

\\[
F_{1\\text{ on }2}=(2.0)(7.0)=14\\ \\mathrm N\\quad\\text{rightward}.
\\]

**Use this method again**

Whole system for acceleration → individual block for unknown rope/contact force. Draw only forces actually attached to that block.

**Check**

On the 1.0-kg block, tension pulls right and the 2.0-kg block pushes left:

\\[
T-F_{2\\text{ on }1}=21-14=7\\ \\mathrm N=(1.0)(7.0).
\\]

All three separate block equations therefore give the same acceleration.
:::

:::exam-question
id: phys-ch5-p31
title: Serway/Jewett · Problem 5.31
question: Serway/Jewett · Problem 5.31
reference: [Serway/Jewett 9e · Problem 5.31](../books/136372.pdf#page=177)
answer-label: Show answer
body:
Serway/Jewett · Problem 5.31

![Serway/Jewett · Problem 5.31 — complete original problem](assets/lessons/physics/recommended/ch5-p31.webp)
solution:
**Plan — we are going to…**

1. Draw the bird's weight and two symmetric wire tensions.
2. Find each wire segment's small angle using half the pole spacing.
3. Balance the upward tension components against the bird's weight.

**The trick**

**Use half the 50.0-m span.** Each segment has a 25.0-m horizontal run. Almost all the tension is horizontal, so a small bird can produce a large tension.

**What you need to know**

A tension pulls along its wire away from the bird. Symmetry makes the two tensions equal and cancels their horizontal components. For an angle measured from horizontal, the vertical component is:

\\[
T_y=T\\sin\\alpha.
\\]

**Step-by-step solution**

1. **Part (a): describe the free-body diagram.** Draw one downward weight arrow and two tension arrows from the bird toward the poles, one up-left and one up-right. Each tension makes the same small angle with horizontal.

2. **Find the angle from geometry.** The sag is 0.200 m and half the horizontal span is 25.0 m:

\\[
\\tan\\alpha=\\frac{0.200}{25.0}=0.00800
\\]

\\[
\\alpha=\\tan^{-1}(0.00800)=0.458^\\circ.
\\]

3. **Part (b): balance vertical forces.** Two upward components share the bird's weight:

\\[
2T\\sin\\alpha-mg=0
\\]

\\[
T=\\frac{mg}{2\\sin\\alpha}.
\\]

4. **Insert the bird's mass and angle.**

\\[
T=\\frac{(1.00)(9.80)}{2\\sin(0.458^\\circ)}=612.5\\ \\mathrm N.
\\]

Keeping the unrounded angle gives **613 N** to three significant figures.

**Use this method again**

Symmetry → half-span triangle → resolve tension components → balance weight. Check whether the angle begins at horizontal or vertical.

**Check**

One segment supplies only:

\\[
T\\sin\\alpha=(612.5)(0.00800)\\approx4.90\\ \\mathrm N.
\\]

Two such vertical contributions supply the 9.80-N weight. The large horizontal components cancel each other.
:::

:::exam-question
id: phys-ch5-p33
title: Serway/Jewett · Problem 5.33
question: Serway/Jewett · Problem 5.33
reference: [Serway/Jewett 9e · Problem 5.33](../books/136372.pdf#page=177)
answer-label: Show answer
body:
Serway/Jewett · Problem 5.33

![Serway/Jewett · Problem 5.33 — complete original problem](assets/lessons/physics/recommended/ch5-p33.webp)
solution:
**Plan — we are going to…**

1. Find the vertical wire tension from the bag's weight.
2. Write horizontal and vertical equilibrium at the three-wire junction.
3. Eliminate one tension and solve for the other.

**The trick**

**Both given angles start at horizontal.** Cosine gives horizontal components and sine gives vertical components. The two upper tensions need not be equal because their angles differ.

**What you need to know**

The massless junction is stationary, so each component of its net force is zero:

\\[
\\sum F_x=0,\\qquad\\sum F_y=0.
\\]

The vertical wire pulls down on the junction but up on the bag.

**Step-by-step solution**

1. **Isolate the bag.** Its upward wire tension balances the 325-N weight:

\\[
T_3=325\\ \\mathrm N.
\\]

2. **Resolve forces at the junction.** Take right and up positive. The left wire pulls up-left at 60.0°; the right wire pulls up-right at 40.0°:

\\[
-T_1\\cos60.0^\\circ+T_2\\cos40.0^\\circ=0
\\]

\\[
T_1\\sin60.0^\\circ+T_2\\sin40.0^\\circ=325.
\\]

3. **Solve the horizontal equation for the right tension.**

\\[
T_2=\\frac{T_1\\cos60.0^\\circ}{\\cos40.0^\\circ}.
\\]

4. **Substitute into vertical balance.**

\\[
T_1\\left(\\sin60.0^\\circ+\\frac{\\cos60.0^\\circ\\sin40.0^\\circ}{\\cos40.0^\\circ}\\right)=325
\\]

\\[
T_1=\\frac{325\\cos40.0^\\circ}{\\sin60.0^\\circ\\cos40.0^\\circ+\\cos60.0^\\circ\\sin40.0^\\circ}
\\]

\\[
T_1=\\frac{325\\cos40.0^\\circ}{\\sin100.0^\\circ}=252.8\\ \\mathrm N.
\\]

5. **Find the right tension.**

\\[
T_2=\\frac{252.8\\cos60.0^\\circ}{\\cos40.0^\\circ}=165.0\\ \\mathrm N.
\\]

The results are **253 N left, 165 N right and 325 N vertical**.

**Use this method again**

Bag balance first → junction components → eliminate one unknown → back-substitute. Never assume equal tensions in separate wires.

**Check**

The horizontal components are equal:

\\[
252.8\\cos60^\\circ\\approx165.0\\cos40^\\circ\\approx126.4\\ \\mathrm N.
\\]

The vertical components add to the load:

\\[
252.8\\sin60^\\circ+165.0\\sin40^\\circ\\approx325\\ \\mathrm N.
\\]
:::

:::exam-question
id: phys-ch5-p40
title: Serway/Jewett · Problem 5.40
question: Serway/Jewett · Problem 5.40
reference: [Serway/Jewett 9e · Problem 5.40](../books/136372.pdf#page=178)
answer-label: Show answer
body:
Serway/Jewett · Problem 5.40

![Serway/Jewett · Problem 5.40 — complete original problem](assets/lessons/physics/recommended/ch5-p40.webp)
solution:
**Plan — we are going to…**

1. Draw separate force diagrams for the table mass and hanging mass.
2. Add their motion equations to eliminate tension.
3. Substitute acceleration back to find tension.

**The trick**

**The hanging weight accelerates both masses.** Tension is smaller than the hanging weight because that mass is accelerating downward.

**What you need to know**

A taut, inextensible rope gives both masses the same acceleration magnitude. A light rope and ideal pulley give the same tension on both sides. Choose the table block's motion toward the pulley and the hanging block's motion downward as positive.

**Step-by-step solution**

1. **Part (a): draw forces.** On the 5.00-kg table block: weight down, normal up, tension horizontally toward the pulley. There is no friction. On the 9.00-kg hanging block: weight down and tension up.

2. **Write Newton's law along the rope.** The table block has:

\\[
T=m_1a.
\\]

The hanging block has:

\\[
m_2g-T=m_2a.
\\]

3. **Part (b): add the equations.** The internal tension cancels:

\\[
m_2g=(m_1+m_2)a
\\]

\\[
a=\\frac{m_2g}{m_1+m_2}
=\\frac{(9.00)(9.80)}{5.00+9.00}
=6.30\\ \\frac{\\mathrm m}{\\mathrm{s^2}}.
\\]

The hanging object moves down; the table block moves toward the pulley.

4. **Part (c): substitute into the table-block equation.**

\\[
T=(5.00)(6.30)=31.5\\ \\mathrm N.
\\]

**Use this method again**

Force diagram for each object → one shared acceleration → add equations → solve one object again for tension.

**Check**

On the hanging object:

\\[
m_2g-T=88.2-31.5=56.7\\ \\mathrm N
\\]

\\[
m_2a=(9.00)(6.30)=56.7\\ \\mathrm N.
\\]

Tension is positive and less than the 88.2-N weight, as downward acceleration requires.
:::

:::exam-question
id: phys-ch5-p42
title: Serway/Jewett · Problem 5.42
question: Serway/Jewett · Problem 5.42
reference: [Serway/Jewett 9e · Problem 5.42](../books/136372.pdf#page=178)
answer-label: Show answer
body:
Serway/Jewett · Problem 5.42

![Serway/Jewett · Problem 5.42 — complete original problem](assets/lessons/physics/recommended/ch5-p42.webp)
solution:
**Plan — we are going to…**

1. Compare the downhill weight component with the hanging weight.
2. Choose motion signs and write one equation for each mass.
3. Find acceleration, tension and speed after two seconds.

**The trick**

**Compare the slope component, not the full slope-block weight.** The 6.00-kg block wins this comparison and moves downhill; the 2.00-kg mass rises.

**What you need to know**

Gravity acts vertically. With axes parallel and perpendicular to the incline, the gravity components are:

\\[
W_\\parallel=mg\\sin\\theta
\\]

\\[
W_\\perp=mg\\cos\\theta.
\\]

No friction acts. Both masses share an acceleration magnitude while the rope is taut.

**Step-by-step solution**

1. **Part (a): draw force diagrams.** The hanging mass has tension up and weight down. The incline mass has tension uphill, weight straight down, and normal perpendicular to the slope. There is no force called “motion” on either diagram.

2. **Choose positive along the actual motion.** The incline's driving component exceeds the hanging weight:

\\[
m_2g\\sin55.0^\\circ=(6.00)(9.80)\\sin55.0^\\circ=48.17\\ \\mathrm N
\\]

\\[
m_1g=(2.00)(9.80)=19.60\\ \\mathrm N.
\\]

Choose incline downhill and hanging upward as their respective positive directions.

3. **Part (b): write and add equations.**

\\[
m_2g\\sin55.0^\\circ-T=m_2a
\\]

\\[
T-m_1g=m_1a
\\]

\\[
a=\\frac{m_2g\\sin55.0^\\circ-m_1g}{m_1+m_2}
=\\frac{48.17-19.60}{8.00}
=3.57\\ \\frac{\\mathrm m}{\\mathrm{s^2}}.
\\]

4. **Part (c): use the hanging mass for tension.**

\\[
T=m_1(g+a)=(2.00)(9.80+3.57077)=26.7\\ \\mathrm N.
\\]

5. **Part (d): start from rest and use constant acceleration.**

\\[
v=v_0+at=0+(3.57077)(2.00)=7.14\\ \\frac{\\mathrm m}{\\mathrm s}.
\\]

Both objects have this speed; their directions are along their own rope segments.

**Use this method again**

Resolve slope weight → predict the motion → choose consistent signs for connected objects → add equations → use kinematics.

**Check**

The slope-block net downhill force is:

\\[
48.17-26.74=21.43\\ \\mathrm N\\approx(6.00)(3.57077).
\\]

The hanging mass has upward net force of 7.14 N, equal to its mass times the same acceleration.
:::

:::exam-question
id: phys-ch5-p43
title: Serway/Jewett · Problem 5.43
question: Serway/Jewett · Problem 5.43
reference: [Serway/Jewett 9e · Problem 5.43](../books/136372.pdf#page=178)
answer-label: Show answer
body:
Serway/Jewett · Problem 5.43

![Serway/Jewett · Problem 5.43 — complete original problem](assets/lessons/physics/recommended/ch5-p43.webp)
solution:
**Plan — we are going to…**

1. Isolate the lower block to find lower-string tension.
2. Treat both blocks together to find upper-string tension.
3. Set the larger tension equal to the breaking limit.

**The trick**

**The upper string accelerates and supports both blocks.** It carries twice the lower tension and therefore reaches the shared breaking strength first.

**What you need to know**

Choose up positive. Each block accelerates upward with the elevator. An upward acceleration requires upward force exceeding weight:

\\[
T-mg=ma.
\\]

**Step-by-step solution**

1. **Part (a): lower string.** The lower block has tension up and weight down:

\\[
T_2-mg=ma
\\]

\\[
T_2=m(g+a)=(3.50)(9.80+1.60)=39.9\\ \\mathrm N.
\\]

2. **Upper string.** Treat both blocks as one 7.00-kg system; their mutual lower-string force cancels:

\\[
T_1-2mg=2ma
\\]

\\[
T_1=2m(g+a)=2(3.50)(11.40)=79.8\\ \\mathrm N.
\\]

3. **Part (b): find maximum upward acceleration.** The upper string reaches 85.0 N first:

\\[
85.0=2(3.50)(9.80+a_{\\max})
\\]

\\[
\\frac{85.0}{7.00}=9.80+a_{\\max}
\\]

\\[
a_{\\max}=\\frac{85.0}{7.00}-9.80=2.34\\ \\frac{\\mathrm m}{\\mathrm{s^2}}\\quad\\text{upward}.
\\]

**Use this method again**

Start at the lowest suspended object → accumulate supported mass upward → compare tensions with each strength limit.

**Check**

At the limiting acceleration, the lower tension is:

\\[
T_2=m(g+a_{\\max})=\\frac{85.0}{2}=42.5\\ \\mathrm N.
\\]

It is still safely below 85.0 N while the upper string is exactly at its limit.
:::

:::exam-question
id: phys-ch5-p44
title: Serway/Jewett · Problem 5.44
question: Serway/Jewett · Problem 5.44
reference: [Serway/Jewett 9e · Problem 5.44](../books/136372.pdf#page=178)
answer-label: Show answer
body:
Serway/Jewett · Problem 5.44

![Serway/Jewett · Problem 5.44 — complete original problem](assets/lessons/physics/recommended/ch5-p44.webp)

![Original Problem 5.43 — referenced context](assets/lessons/physics/recommended/ch5-p43.webp)
solution:
**Plan — we are going to…**

1. Write force balance with acceleration for the lower block.
2. Include the lower string's downward pull on the upper block.
3. Compare tensions, then set free-fall acceleration for a broken elevator cable.

**The trick**

**Upward acceleration is a signed quantity.** When the elevator falls freely, substitute negative gravitational acceleration into the upward-positive equations.

**What you need to know**

The upper block feels the lower string pulling down, even though that same string pulls the lower block up. Those are an action–reaction pair acting on different blocks.

**Step-by-step solution**

1. **Part (a): isolate the lower block.** With up positive:

\\[
T_2-mg=ma
\\]

\\[
T_2=m(g+a).
\\]

2. **Isolate the upper block.** Upper tension acts up; its weight and lower tension act down:

\\[
T_1-T_2-mg=ma.
\\]

Insert the lower-string expression:

\\[
T_1=m(g+a)+m(g+a)=2m(g+a).
\\]

3. **Part (b): compare.**

\\[
T_1=2T_2.
\\]

For strings with equal breaking strengths, the **upper string breaks first** as upward acceleration increases.

4. **Part (c): elevator cable breaks.** Before any contact with the elevator or ground, the blocks and elevator fall with downward gravitational acceleration:

\\[
a=-g.
\\]

Therefore:

\\[
T_2=m(g-g)=0
\\]

\\[
T_1=2m(g-g)=0.
\\]

Both strings have **zero tension** during ideal free fall.

**Use this method again**

Signed Newton equations → lower object first → upper object next → substitute the actual signed acceleration for special cases.

**Check**

If the elevator instead has zero acceleration, the formulas give:

\\[
T_2=mg,\\qquad T_1=2mg.
\\]

Those are exactly the weights each string supports. Free-fall zero tension also leaves gravity alone to produce downward gravitational acceleration.
:::

:::exam-question
id: phys-ch5-p45
title: Serway/Jewett · Problem 5.45
question: Serway/Jewett · Problem 5.45
reference: [Serway/Jewett 9e · Problem 5.45](../books/136372.pdf#page=178)
answer-label: Show answer
body:
Serway/Jewett · Problem 5.45

![Serway/Jewett · Problem 5.45 — complete original problem](assets/lessons/physics/recommended/ch5-p45.webp)
solution:
**Plan — we are going to…**

1. Write coupled equations while the rope is taut.
2. Find when the hanging object rises and when tension reaches zero.
3. Replace the coupled equation by the free-table-block equation after the rope goes slack.

**The trick**

**A rope can pull but cannot push.** A formula predicting negative tension has passed outside its valid range; the acceleration graph changes at zero tension.

**What you need to know**

Choose table-block right and hanging-block up as positive. While the rope is taut they have the same signed acceleration. Physical tension obeys:

\\[
T\\ge0.
\\]

**Step-by-step solution**

1. **Write Newton's equations for the taut rope.** The table block has applied force right and tension left; the hanging block has tension up and weight down:

\\[
F_x-T=8.00a
\\]

\\[
T-(2.00)(9.80)=2.00a.
\\]

2. **Add equations and solve.**

\\[
F_x-19.6=10.00a
\\]

\\[
a=\\frac{F_x-19.6}{10.00}.
\\]

Use the hanging block to find tension:

\\[
T=19.6+2.00\\left(\\frac{F_x-19.6}{10.00}\\right)
=\\frac{F_x+78.4}{5.00}.
\\]

3. **Part (a): hanging object accelerates upward.** Its acceleration must be positive:

\\[
F_x>19.6\\ \\mathrm N.
\\]

4. **Part (b): locate loss of tension.**

\\[
T=0\\quad\\Longrightarrow\\quad F_x=-78.4\\ \\mathrm N.
\\]

For more negative forces the rope is slack, so it has **zero tension throughout that range**. The hanging mass falls freely while the table block moves under its applied force alone.

5. **Part (c): draw the table-block acceleration graph.** In SI units the two formulas are:

\\[
a(F_x)=
\\begin{cases}
\\dfrac{F_x}{8.00},&-100\\le F_x\\le-78.4,\\\\
\\dfrac{F_x-19.6}{10.00},&-78.4\\le F_x\\le100.
\\end{cases}
\\]

Put force in newtons on the horizontal axis and acceleration in meters per second squared on the vertical axis. Plot these points and join each adjacent pair by a straight line:

\\[
\\begin{array}{c|rrrr}
F_x\\ (\\mathrm N)&-100&-78.4&19.6&100\\\\
\\hline
a\\ (\\mathrm{m/s^2})&-12.5&-9.80&0&8.04
\\end{array}
\\]

The graph has a corner at **−78.4 N**; it does not continue the taut-rope slope into the slack region.

**Use this method again**

Solve connected motion → impose nonnegative tension → split parameter ranges → use the correct free-body equation in each range.

**Check**

At the join, both branches agree:

\\[
\\frac{-78.4}{8.00}=-9.80
\\]

\\[
\\frac{-78.4-19.6}{10.00}=-9.80.
\\]

At zero applied force, the taut solution gives negative acceleration, correctly showing the hanging weight pulls the table block left.
:::

:::exam-question
id: phys-ch5-p46
title: Serway/Jewett · Problem 5.46
question: Serway/Jewett · Problem 5.46
reference: [Serway/Jewett 9e · Problem 5.46](../books/136372.pdf#page=179)
answer-label: Show answer
body:
Serway/Jewett · Problem 5.46

![Serway/Jewett · Problem 5.46 — complete original problem](assets/lessons/physics/recommended/ch5-p46.webp)
solution:
**Plan — we are going to…**

1. Use each rope's fixed length to relate the accelerations.
2. Balance forces on the massless movable pulley to relate tensions.
3. Solve the two mass equations with those constraints.

**The trick**

**The table block moves twice as far as the movable pulley.** The two objects do not have equal accelerations. The movable pulley is also pulled by two segments of the second rope.

**What you need to know**

Each separate light rope has one uniform tension. A massless pulley has zero net force. Choose hanging mass downward and table block rightward as positive; call the first-rope tension T₁ and second-rope tension T₂.

**Step-by-step solution**

1. **Part (a): first-rope length.** When the hanging mass moves down by a distance, the first rope's horizontal segment shortens by that same distance. Thus the movable pulley moves right by the same amount as the hanging mass moves down.

2. **Second-rope length.** Both rope segments run leftward from the movable pulley. Moving that pulley right lengthens two segments, so the table block must move twice as far right:

\\[
x_2=2x_1+\\text{constant}
\\]

\\[
a_2=2a_1.
\\]

3. **Relate tensions at the massless movable pulley.** The first rope pulls it right; the two second-rope segments each pull left:

\\[
T_1-2T_2=0
\\]

\\[
T_1=2T_2.
\\]

4. **Write Newton's law for each mass.**

\\[
m_1g-T_1=m_1a_1
\\]

\\[
T_2=m_2a_2=2m_2a_1.
\\]

5. **Part (c): eliminate the tensions.**

\\[
T_1=2T_2=4m_2a_1
\\]

\\[
m_1g-4m_2a_1=m_1a_1
\\]

\\[
a_1=\\frac{m_1g}{m_1+4m_2}\\quad\\text{downward}
\\]

\\[
a_2=\\frac{2m_1g}{m_1+4m_2}\\quad\\text{rightward}.
\\]

6. **Part (b): substitute to obtain both tensions.**

\\[
T_2=\\frac{2m_1m_2g}{m_1+4m_2}
\\]

\\[
T_1=\\frac{4m_1m_2g}{m_1+4m_2}.
\\]

**Use this method again**

Rope lengths before dynamics → massless-pulley force balance → separate mass equations → eliminate constraints.

**Check**

The hanging-mass equation is recovered exactly:

\\[
m_1g-T_1
=m_1g\\left(1-\\frac{4m_2}{m_1+4m_2}\\right)
=\\frac{m_1^2g}{m_1+4m_2}=m_1a_1.
\\]

The hanging acceleration is less than gravitational acceleration for positive masses, and the two-tension balance is satisfied.
:::

:::exam-question
id: phys-ch5-p47
title: Serway/Jewett · Problem 5.47
question: Serway/Jewett · Problem 5.47
reference: [Serway/Jewett 9e · Problem 5.47](../books/136372.pdf#page=179)
answer-label: Show answer
body:
Serway/Jewett · Problem 5.47

![Serway/Jewett · Problem 5.47 — complete original problem](assets/lessons/physics/recommended/ch5-p47.webp)
solution:
**Plan — we are going to…**

1. Find the constant acceleration down the frictionless slope.
2. Choose uphill positive so the acceleration is negative.
3. Use the zero speed at the turning point to find distance.

**The trick**

**The block can be moving uphill while accelerating downhill.** Its velocity reaches zero at the top, but gravity's slope component does not disappear.

**What you need to know**

The normal force cancels the perpendicular weight component. Along a frictionless incline, Newton's second law gives:

\\[
a=-g\\sin\\theta
\\]

with uphill positive. When time is not requested, use:

\\[
v_f^2=v_i^2+2a\\Delta s.
\\]

**Step-by-step solution**

1. **Resolve gravity along the slope.**

\\[
-mg\\sin20.0^\\circ=ma
\\]

Cancel the nonzero mass:

\\[
a=-(9.80)\\sin20.0^\\circ=-3.3518\\ \\frac{\\mathrm m}{\\mathrm{s^2}}.
\\]

2. **Use the turning-point speed.** The initial uphill speed is 5.00 m/s and final speed is zero:

\\[
0=(5.00)^2+2(-3.3518)s.
\\]

3. **Solve for the uphill distance.**

\\[
2(3.3518)s=25.0
\\]

\\[
s=\\frac{25.0}{6.7036}=3.73\\ \\mathrm m.
\\]

**Use this method again**

Resolve the driving force → fix a sign convention → use the stopping speed in the time-free kinematics equation.

**Check**

The stopping time from velocity is:

\\[
t=\\frac{0-5.00}{-3.3518}=1.492\\ \\mathrm s.
\\]

Average speed during constant deceleration gives:

\\[
s=\\frac{5.00+0}{2}(1.492)=3.73\\ \\mathrm m.
\\]

This agrees without reusing the squared-speed equation.
:::

:::exam-question
id: phys-ch5-p49
title: Serway/Jewett · Problem 5.49
question: Serway/Jewett · Problem 5.49
reference: [Serway/Jewett 9e · Problem 5.49](../books/136372.pdf#page=179)
answer-label: Show answer
body:
Serway/Jewett · Problem 5.49

![Serway/Jewett · Problem 5.49 — complete original problem](assets/lessons/physics/recommended/ch5-p49.webp)
solution:
**Plan — we are going to…**

1. Choose the heavier block's downhill motion as positive.
2. Write force equations along each slope.
3. Add to find acceleration, then substitute to find tension.

**The trick**

**Both slopes have the same angle, but their weight components differ because the masses differ.** The rope tension opposes motion for one block and assists it for the other.

**What you need to know**

On each frictionless slope, only tension and the parallel weight component contribute along the motion. A taut ideal rope gives equal acceleration magnitudes and equal tensions.

**Step-by-step solution**

1. **Identify the motion.** The 8.00-kg block moves down its slope; the 3.50-kg block moves up its slope. Choose those directions as positive for each block.

2. **Write the two equations.**

\\[
T-m_1g\\sin35.0^\\circ=m_1a
\\]

\\[
m_2g\\sin35.0^\\circ-T=m_2a.
\\]

3. **Part (a): add to cancel tension.**

\\[
(m_2-m_1)g\\sin35.0^\\circ=(m_1+m_2)a
\\]

\\[
a=\\frac{(8.00-3.50)(9.80)\\sin35.0^\\circ}{3.50+8.00}
=2.20\\ \\frac{\\mathrm m}{\\mathrm{s^2}}.
\\]

4. **Part (b): use the lighter block's equation.**

\\[
T=m_1\\left(g\\sin35.0^\\circ+a\\right)
\\]

\\[
T=3.50\\left(9.80\\sin35.0^\\circ+2.19954\\right)=27.4\\ \\mathrm N.
\\]

**Use this method again**

Compare parallel weights → choose compatible positive directions → add coupled equations → recover tension from either block.

**Check**

Use the heavier block independently:

\\[
T=m_2\\left(g\\sin35.0^\\circ-a\\right)
\\]

\\[
T=8.00\\left(9.80\\sin35.0^\\circ-2.19954\\right)=27.4\\ \\mathrm N.
\\]

The tension lies between the two downhill weight components, allowing the lighter mass to go up and the heavier mass to go down.
:::

:::exam-question
id: phys-ch5-p55
title: Serway/Jewett · Problem 5.55
question: Serway/Jewett · Problem 5.55
reference: [Serway/Jewett 9e · Problem 5.55](../books/136372.pdf#page=180)
answer-label: Show answer
body:
Serway/Jewett · Problem 5.55

![Serway/Jewett · Problem 5.55 — complete original problem](assets/lessons/physics/recommended/ch5-p55.webp)
solution:
**Plan — we are going to…**

1. Find the normal force on the horizontal block.
2. Use the starting threshold to find static friction coefficient.
3. Use constant-speed sliding to find kinetic friction coefficient.

**The trick**

**Use 75.0 N for the maximum static friction and 60.0 N for kinetic friction.** Ordinary static friction is not always its maximum; the starting threshold is what makes equality valid here.

**What you need to know**

The applied force is horizontal, so normal force equals weight. Friction laws are:

\\[
f_s\\le\\mu_sN
\\]

\\[
f_k=\\mu_kN.
\\]

Constant speed means zero acceleration and therefore zero net horizontal force.

**Step-by-step solution**

1. **Balance vertical forces.**

\\[
N-mg=0
\\]

\\[
N=(25.0)(9.80)=245\\ \\mathrm N.
\\]

2. **Part (a): motion just begins.** The required 75.0-N pull equals the maximum static friction:

\\[
75.0=\\mu_s(245)
\\]

\\[
\\mu_s=\\frac{75.0}{245}=0.306.
\\]

3. **Part (b): sliding at constant speed.** The 60.0-N pull balances kinetic friction:

\\[
60.0-\\mu_k(245)=0
\\]

\\[
\\mu_k=\\frac{60.0}{245}=0.245.
\\]

Both coefficients are **dimensionless**.

**Use this method again**

Find normal force from perpendicular balance → identify friction type from the motion condition → use equality only at a static threshold or during kinetic sliding.

**Check**

Recover the given forces from the coefficients:

\\[
(0.30612)(245)=75.0\\ \\mathrm N
\\]

\\[
(0.24490)(245)=60.0\\ \\mathrm N.
\\]

The static coefficient exceeds the kinetic coefficient, consistent with the greater force needed to start motion.
:::

:::exam-question
id: phys-ch5-p60
title: Serway/Jewett · Problem 5.60
question: Serway/Jewett · Problem 5.60
reference: [Serway/Jewett 9e · Problem 5.60](../books/136372.pdf#page=180)
answer-label: Show answer
body:
Serway/Jewett · Problem 5.60

![Serway/Jewett · Problem 5.60 — complete original problem](assets/lessons/physics/recommended/ch5-p60.webp)
solution:
**Plan — we are going to…**

1. Draw all four forces on the suitcase.
2. Use horizontal balance to find the strap angle.
3. Use vertical balance to find how much weight the floor still supports.

**The trick**

**Constant speed means zero net force, not zero pulling force.** The strap's upward component reduces the normal force below the suitcase's weight.

**What you need to know**

The angle is measured above horizontal, so tension components are:

\\[
T_x=T\\cos\\theta
\\]

\\[
T_y=T\\sin\\theta.
\\]

Both acceleration components are zero.

**Step-by-step solution**

1. **Part (a): force diagram.** Draw weight straight down, normal straight up, strap tension forward and upward at the given angle, and friction backward along the floor.

2. **Part (b): horizontal equilibrium.**

\\[
35.0\\cos\\theta-20.0=0
\\]

\\[
\\cos\\theta=\\frac{20.0}{35.0}
\\]

\\[
\\theta=\\cos^{-1}\\!\\left(\\frac{20.0}{35.0}\\right)=55.2^\\circ.
\\]

3. **Part (c): vertical equilibrium.** The normal and strap's upward component share the task of supporting the weight:

\\[
N+35.0\\sin\\theta-(20.0)(9.80)=0
\\]

\\[
N=196-35.0\\sin55.15^\\circ=167.3\\ \\mathrm N.
\\]

The floor's normal force is **167 N**.

**Use this method again**

Resolve the angled pull → use motion-axis balance for angle → use perpendicular balance for normal force.

**Check**

The vertical tension component can also be found by a right triangle:

\\[
T_y=\\sqrt{35.0^2-20.0^2}=28.72\\ \\mathrm N.
\\]

Then:

\\[
N=196-28.72=167.28\\ \\mathrm N.
\\]

This confirms the result without using the rounded angle.
:::

:::exam-question
id: phys-ch5-p63
title: Serway/Jewett · Problem 5.63
question: Serway/Jewett · Problem 5.63
reference: [Serway/Jewett 9e · Problem 5.63](../books/136372.pdf#page=180)
answer-label: Show answer
body:
Serway/Jewett · Problem 5.63

![Serway/Jewett · Problem 5.63 — complete original problem](assets/lessons/physics/recommended/ch5-p63.webp)

![Original shared Figure P5.40](assets/lessons/physics/recommended/figure-ch5-p40.webp)
solution:
**Plan — we are going to…**

1. Find kinetic friction on the table block.
2. Write one motion equation for each connected mass.
3. Eliminate tension to find acceleration, then recover tension.

**The trick**

**The table-block friction opposes the hanging mass's driving weight.** Do not set rope tension equal to the hanging weight while the system accelerates.

**What you need to know**

The shared Figure P5.40 shows a 5.00-kg block on the table and a 9.00-kg mass hanging. On the table, vertical balance gives:

\\[
N=m_1g.
\\]

Kinetic friction is:

\\[
f_k=\\mu_kN.
\\]

**Step-by-step solution**

1. **Find the friction magnitude.**

\\[
f_k=(0.200)(5.00)(9.80)=9.80\\ \\mathrm N.
\\]

Choose table-block motion toward the pulley and hanging-mass motion down as positive.

2. **Write force equations.**

\\[
T-9.80=5.00a
\\]

\\[
(9.00)(9.80)-T=9.00a.
\\]

3. **Add to cancel tension.**

\\[
88.2-9.80=(5.00+9.00)a
\\]

\\[
a=\\frac{78.4}{14.00}=5.60\\ \\frac{\\mathrm m}{\\mathrm{s^2}}.
\\]

4. **Find the requested tension from the table block.**

\\[
T=5.00a+9.80=(5.00)(5.60)+9.80=37.8\\ \\mathrm N.
\\]

**Use this method again**

Normal force → kinetic friction → coupled Newton equations → cancel internal tension → recover it afterward.

**Check**

Use the hanging mass instead:

\\[
T=m_2(g-a)=9.00(9.80-5.60)=37.8\\ \\mathrm N.
\\]

The acceleration is smaller than the frictionless value of 6.30 m/s², and the table block needs more tension relative to its acceleration because friction must also be overcome.
:::

:::exam-question
id: phys-ch5-p64
title: Serway/Jewett · Problem 5.64
question: Serway/Jewett · Problem 5.64
reference: [Serway/Jewett 9e · Problem 5.64](../books/136372.pdf#page=180)
answer-label: Show answer
body:
Serway/Jewett · Problem 5.64

![Serway/Jewett · Problem 5.64 — complete original problem](assets/lessons/physics/recommended/ch5-p64.webp)
solution:
**Plan — we are going to…**

1. Predict motion and place friction opposite the table block's motion.
2. Add three Newton equations to find common acceleration.
3. Find each separate rope tension and compare with the frictionless case.

**The trick**

**There are two different ropes and generally two different tensions.** Removing table friction increases acceleration, which lowers the descending mass's tension but raises the ascending mass's tension.

**What you need to know**

The 4.00-kg left mass pulls down more strongly than the 2.00-kg right mass. The 1.00-kg table block slides left, so kinetic friction points right. Choose left-mass down, table-block left and right-mass up as positive.

**Step-by-step solution**

1. **Part (a): force diagrams.** Each hanging mass has tension up and weight down. The table block has normal up, weight down, left tension left, right tension right, and friction right. Vertical balance on the table gives:

\\[
N=m_2g.
\\]

2. **Find kinetic friction.**

\\[
f_k=(0.350)(1.00)(9.80)=3.43\\ \\mathrm N.
\\]

3. **Part (b): write the three motion equations.**

\\[
4.00g-T_1=4.00a
\\]

\\[
T_1-T_3-3.43=1.00a
\\]

\\[
T_3-2.00g=2.00a.
\\]

Add all three:

\\[
(4.00-2.00)g-3.43=7.00a
\\]

\\[
a=\\frac{19.60-3.43}{7.00}=2.31\\ \\frac{\\mathrm m}{\\mathrm{s^2}}.
\\]

The left mass moves down, the table block left and the right mass up.

4. **Part (c): find the two tensions.**

\\[
T_1=4.00(g-a)=4.00(9.80-2.31)=29.96\\ \\mathrm N
\\]

\\[
T_3=2.00(g+a)=2.00(9.80+2.31)=24.22\\ \\mathrm N.
\\]

5. **Part (d): set friction to zero.**

\\[
a_0=\\frac{(4.00-2.00)(9.80)}{7.00}=2.80\\ \\frac{\\mathrm m}{\\mathrm{s^2}}.
\\]

Then:

\\[
T_{1,0}=4.00(9.80-2.80)=28.0\\ \\mathrm N
\\]

\\[
T_{3,0}=2.00(9.80+2.80)=25.2\\ \\mathrm N.
\\]

The **left tension decreases**, and the **right tension increases**.

**Use this method again**

Treat each rope separately → choose motion-compatible signs → add equations for acceleration → use each hanging mass for its own tension.

**Check**

Check the table-block equation numerically:

\\[
29.96-24.22-3.43=2.31\\ \\mathrm N=(1.00)(2.31).
\\]

The left tension is below the descending mass's weight; the right tension exceeds the rising mass's weight. Both directions are consistent.
:::

:::exam-question
id: phys-ch5-p65
title: Serway/Jewett · Problem 5.65
question: Serway/Jewett · Problem 5.65
reference: [Serway/Jewett 9e · Problem 5.65](../books/136372.pdf#page=181)
answer-label: Show answer
body:
Serway/Jewett · Problem 5.65

![Serway/Jewett · Problem 5.65 — complete original problem](assets/lessons/physics/recommended/ch5-p65.webp)
solution:
**Plan — we are going to…**

1. Draw friction and tension on each block.
2. Use both blocks as one system to find acceleration.
3. Isolate the left block to find rope tension.

**The trick**

**Friction acts on both blocks.** The same coefficient does not mean equal friction forces, because their normal forces depend on their different masses.

**What you need to know**

The rope and applied force are horizontal, so each normal equals that block's weight. Both blocks slide right, making both kinetic-friction forces point left:

\\[
f_{k,i}=\\mu_km_ig.
\\]

**Step-by-step solution**

1. **Part (a): force diagrams.** Each block has weight down and normal up. The 12.0-kg block has tension right and friction left. The 18.0-kg block has applied 68.0-N force right, tension left and friction left.

2. **Calculate both friction forces.**

\\[
f_{k,1}=(0.100)(12.0)(9.80)=11.76\\ \\mathrm N
\\]

\\[
f_{k,2}=(0.100)(18.0)(9.80)=17.64\\ \\mathrm N.
\\]

3. **Part (b): combine both blocks.** Internal tension cancels:

\\[
68.0-11.76-17.64=(12.0+18.0)a
\\]

\\[
a=\\frac{38.60}{30.0}=1.29\\ \\frac{\\mathrm m}{\\mathrm{s^2}}\\quad\\text{rightward}.
\\]

4. **Part (c): isolate the left block.**

\\[
T-f_{k,1}=m_1a
\\]

\\[
T=(12.0)(1.28667)+11.76=27.2\\ \\mathrm N.
\\]

**Use this method again**

Include friction on every sliding contact → sum the system to eliminate tension → return to one block for tension.

**Check**

For the right block independently:

\\[
F-T-f_{k,2}=68.0-27.2-17.64=23.16\\ \\mathrm N
\\]

\\[
m_2a=(18.0)(1.28667)=23.16\\ \\mathrm N.
\\]

The force balance agrees for each block.
:::

:::exam-question
id: phys-ch5-p66
title: Serway/Jewett · Problem 5.66
question: Serway/Jewett · Problem 5.66
reference: [Serway/Jewett 9e · Problem 5.66](../books/136372.pdf#page=181)
answer-label: Show answer
body:
Serway/Jewett · Problem 5.66

![Serway/Jewett · Problem 5.66 — complete original problem](assets/lessons/physics/recommended/ch5-p66.webp)
solution:
**Plan — we are going to…**

1. Resolve the applied push into wall-normal and upward components.
2. Allow static friction to point either upward or downward.
3. Solve both limiting inequalities at each requested angle.

**The trick**

**Static friction can reverse direction.** Too little push lets the block slip down; a sufficiently steep, strong push can make it slip up. At 13°, the available friction grows fast enough that there is no upper push limit.

**What you need to know**

The wall's normal is horizontal, and the applied force makes its given angle above horizontal. With up positive, equilibrium requires:

\\[
N=P\\cos\\theta
\\]

\\[
f_s=mg-P\\sin\\theta.
\\]

The sign of static friction is free, but its magnitude is bounded:

\\[
|f_s|\\le\\mu_sN.
\\]

**Step-by-step solution**

1. **Combine equilibrium and the static bound.**

\\[
|mg-P\\sin\\theta|\\le\\mu_sP\\cos\\theta.
\\]

This gives two inequalities:

\\[
mg\\le P(\\sin\\theta+\\mu_s\\cos\\theta)
\\]

\\[
P(\\sin\\theta-\\mu_s\\cos\\theta)\\le mg.
\\]

2. **Part (a): use 50.0°.** Here both bracketed factors are positive, so division preserves the inequality directions:

\\[
\\frac{mg}{\\sin50.0^\\circ+\\mu_s\\cos50.0^\\circ}
\\le P\\le
\\frac{mg}{\\sin50.0^\\circ-\\mu_s\\cos50.0^\\circ}.
\\]

Insert the 3.00-kg mass and coefficient 0.250:

\\[
P_{\\min}=\\frac{(3.00)(9.80)}{\\sin50.0^\\circ+0.250\\cos50.0^\\circ}=31.7\\ \\mathrm N
\\]

\\[
P_{\\max}=\\frac{(3.00)(9.80)}{\\sin50.0^\\circ-0.250\\cos50.0^\\circ}=48.6\\ \\mathrm N.
\\]

3. **Part (b): interpret the limits.** Below **31.7 N**, the upward component plus maximum upward friction cannot support the weight: the block slips **down**. Above **48.6 N**, even maximum downward friction cannot oppose the large upward component: it slips **up**.

4. **Part (c): repeat at 13.0°.** The lower bound remains:

\\[
P\\ge\\frac{29.4}{\\sin13.0^\\circ+0.250\\cos13.0^\\circ}=62.7\\ \\mathrm N.
\\]

But now:

\\[
\\sin13.0^\\circ-0.250\\cos13.0^\\circ\\approx-0.01864<0.
\\]

For any positive push, the second inequality is automatically satisfied; dividing it as though the factor were positive would invent a false upper bound. Thus the allowed range is **62.7 N and above**, with **no finite upper limit**. Below that threshold the block slips down.

**Use this method again**

Write equilibrium with signed friction → impose its magnitude limit → check signs before dividing each inequality → interpret each boundary physically.

**Check**

At the two 50° boundaries, equilibrium uses opposite limiting friction directions:

\\[
mg-P_{\\min}\\sin50^\\circ=+\\mu_sP_{\\min}\\cos50^\\circ
\\]

\\[
mg-P_{\\max}\\sin50^\\circ=-\\mu_sP_{\\max}\\cos50^\\circ.
\\]

At 13°, the downward-friction capacity per newton of push exceeds the upward component per newton, which confirms why increasing the push cannot force upward slip.
:::

:::exam-question
id: phys-ch5-p70
title: Serway/Jewett · Problem 5.70
question: Serway/Jewett · Problem 5.70
reference: [Serway/Jewett 9e · Problem 5.70](../books/136372.pdf#page=181)
answer-label: Show answer
body:
Serway/Jewett · Problem 5.70

![Serway/Jewett · Problem 5.70 — complete original problem](assets/lessons/physics/recommended/ch5-p70.webp)
solution:
**Plan — we are going to…**

1. Draw forces separately on the held upper block and moving lower block.
2. Use upper-block equilibrium to find string tension.
3. Subtract both friction forces from the lower block's applied force.

**The trick**

**The lower block rubs against two surfaces.** Its floor normal supports both masses, while the interblock normal supports only the top mass. The top block stays fixed, but kinetic friction acts because the lower surface slides under it.

**What you need to know**

Kinetic friction opposes relative sliding. Newton's third-law pairs act on different objects, with equal magnitudes and opposite directions.

**Step-by-step solution**

1. **Part (a): upper-block free-body diagram.** Draw weight down, contact normal up, string tension left, and friction from the sliding lower block right. The upper block is stationary.

The lower block has its own weight down, upper-block normal force down, floor normal up, applied force right, upper-block friction left and floor friction left.

The **opposite interblock normals** form one action–reaction pair. The **opposite interblock friction forces** form another. Weight and normal on the same block are not an action–reaction pair.

2. **Find both normal forces.**

\\[
N_{\\text{between}}=(5.00)(9.80)=49.0\\ \\mathrm N
\\]

\\[
N_{\\text{floor}}=(5.00+10.0)(9.80)=147\\ \\mathrm N.
\\]

3. **Part (b): upper-block horizontal equilibrium gives tension.**

\\[
f_{\\text{between}}=(0.200)(49.0)=9.80\\ \\mathrm N
\\]

\\[
f_{\\text{between}}-T=0
\\]

\\[
T=9.80\\ \\mathrm N.
\\]

4. **Find floor friction and lower-block acceleration.**

\\[
f_{\\text{floor}}=(0.200)(147)=29.4\\ \\mathrm N
\\]

\\[
45.0-9.80-29.4=(10.0)a
\\]

\\[
a=\\frac{5.80}{10.0}=0.580\\ \\frac{\\mathrm m}{\\mathrm{s^2}}\\quad\\text{rightward}.
\\]

**Use this method again**

Identify relative motion at each contact → calculate each normal separately → use held-block balance → use moving-block dynamics.

**Check**

Treat both blocks together horizontally. The interblock friction cancels internally, but the wall's string force remains external:

\\[
F-T-f_{\\text{floor}}=45.0-9.80-29.4=5.80\\ \\mathrm N.
\\]

Only the 10.0-kg block accelerates, so this equals its mass times 0.580 m/s², not the total mass times that acceleration.
:::

:::exam-question
id: phys-ch5-p83
title: Serway/Jewett · Problem 5.83
question: Serway/Jewett · Problem 5.83
reference: [Serway/Jewett 9e · Problem 5.83](../books/136372.pdf#page=183)
answer-label: Show answer
body:
Serway/Jewett · Problem 5.83

![Serway/Jewett · Problem 5.83 — complete original problem](assets/lessons/physics/recommended/ch5-p83.webp)
solution:
**Plan — we are going to…**

1. Draw each block's external and contact forces.
2. Find the common acceleration from the whole system.
3. Isolate trailing blocks to find contact forces and explain the heavy backing block.

**The trick**

**A contact force is not usually the applied force.** Each contact transmits only the force needed to accelerate the blocks beyond that interface.

**What you need to know**

All three blocks share acceleration while contact is maintained on the frictionless floor. Their vertical normal and weight forces balance. Internal contact forces cancel for the complete system.

**Step-by-step solution**

1. **Part (a): separate free-body diagrams.** Each block has weight down and floor normal up. Horizontally, block 1 has applied force right and contact from block 2 left. Block 2 has contact from block 1 right and contact from block 3 left. Block 3 has only contact from block 2 right.

2. **Part (b): whole-system acceleration.**

\\[
F=(m_1+m_2+m_3)a
\\]

\\[
a=\\frac{18.0}{2.00+3.00+4.00}=2.00\\ \\frac{\\mathrm m}{\\mathrm{s^2}}\\quad\\text{rightward}.
\\]

3. **Part (c): resultant force on each block.**

\\[
F_{\\text{net},1}=(2.00)(2.00)=4.00\\ \\mathrm N
\\]

\\[
F_{\\text{net},2}=(3.00)(2.00)=6.00\\ \\mathrm N
\\]

\\[
F_{\\text{net},3}=(4.00)(2.00)=8.00\\ \\mathrm N.
\\]

All point rightward.

4. **Part (d): contact between blocks 2 and 3.** It is the only horizontal force accelerating block 3:

\\[
F_{2\\text{ on }3}=m_3a=8.00\\ \\mathrm N.
\\]

The contact between blocks 1 and 2 accelerates blocks 2 and 3 together:

\\[
F_{1\\text{ on }2}=(m_2+m_3)a=(3.00+4.00)(2.00)=14.0\\ \\mathrm N.
\\]

Each interface also has an equal force in the opposite direction on its other block.

5. **Part (e): heavy backing block.** In the given model, identify the partition with block 1, inserted wood with block 2 and the person with block 3. For the same applied hammer force:

\\[
F_{\\text{on person}}=m_3a=\\frac{m_3F}{m_1+m_2+m_3}.
\\]

Increasing the inserted middle mass increases the denominator, reducing acceleration and the force transmitted to the person. This explains the benefit within this simplified model.

**Use this method again**

Whole-system acceleration → isolate the blocks beyond each contact → multiply their total mass by shared acceleration → interpret parameter changes.

**Check**

Check all horizontal balances:

\\[
18.0-14.0=4.00\\ \\mathrm N
\\]

\\[
14.0-8.00=6.00\\ \\mathrm N
\\]

\\[
8.00=8.00\\ \\mathrm N.
\\]

The resultant forces add to the applied 18.0 N.
:::

:::exam-question
id: phys-ch5-p85
title: Serway/Jewett · Problem 5.85
question: Serway/Jewett · Problem 5.85
reference: [Serway/Jewett 9e · Problem 5.85](../books/136372.pdf#page=183)
answer-label: Show answer
body:
Serway/Jewett · Problem 5.85

![Serway/Jewett · Problem 5.85 — complete original problem](assets/lessons/physics/recommended/ch5-p85.webp)
solution:
**Plan — we are going to…**

1. Balance the hanging mass to find the connecting tension.
2. Balance the lower pulley to find the continuous-rope tension.
3. Count all downward pulls on the upper pulley assembly to find its support tension.

**The trick**

**Follow the continuous rope.** Its three labeled segments have equal tension. The ceiling support also carries the downward pull at the rope's attachment point, not only the two rim pulls.

**What you need to know**

The mass and pulleys remain at rest. The pulleys and rope are massless and frictionless. Along one continuous ideal rope, tension is uniform; separate support strings need not have that same tension.

**Step-by-step solution**

1. **Part (a): force diagrams.** On the lower pulley, the two continuous-rope tensions point up and the short mass-connecting string pulls down. On the upper pulley/support assembly, the two rim tensions and the attached rope segment pull down, while the ceiling support pulls up.

2. **Part (b): isolate the hanging mass.**

\\[
T_5-Mg=0
\\]

\\[
T_5=Mg.
\\]

3. **Use the lower-pulley balance.** The same continuous rope has:

\\[
T_1=T_2=T_3=T.
\\]

The lower pulley therefore gives:

\\[
T_2+T_3-T_5=0
\\]

\\[
2T=Mg
\\]

\\[
T_1=T_2=T_3=\\frac{Mg}{2}.
\\]

4. **Balance the upper assembly.** Count the left rim segment, right rim segment and attached middle segment:

\\[
T_4-T_1-T_3-T_2=0
\\]

\\[
T_4=3T=\\frac{3Mg}{2}.
\\]

5. **Part (c): applied force.** The hand pulls the free rope end, so its force magnitude equals that rope's tension:

\\[
F=T_1=\\frac{Mg}{2}.
\\]

**Use this method again**

Trace continuous ropes → isolate load → balance movable pulley → count every attachment and rim force on fixed support.

**Check**

For the entire apparatus including mass, the external upward support balances both downward weight and the hand's downward force:

\\[
T_4=Mg+F=Mg+\\frac{Mg}{2}=\\frac{3Mg}{2}.
\\]

This independently confirms the less obvious ceiling-support tension.
:::

:::exam-question
id: phys-ch5-p88
title: Serway/Jewett · Problem 5.88
question: Serway/Jewett · Problem 5.88
reference: [Serway/Jewett 9e · Problem 5.88](../books/136372.pdf#page=183)
answer-label: Show answer
body:
Serway/Jewett · Problem 5.88

![Serway/Jewett · Problem 5.88 — complete original problem](assets/lessons/physics/recommended/ch5-p88.webp)
solution:
**Plan — we are going to…**

1. Solve the frictionless equilibrium from the lower incline block upward.
2. Double the hanging mass and solve the coupled acceleration and tensions.
3. Reverse limiting friction for the maximum and minimum hanging masses.

**The trick**

**Static friction reverses between the two limiting cases.** Maximum hanging mass tends to pull incline blocks uphill; minimum hanging mass lets them tend downhill. Keep the two separate rope tensions distinct.

**What you need to know**

Take uphill positive for both incline blocks and down positive for the hanging mass. Write sine and cosine of the incline angle explicitly. The lower block has mass twice the reference mass; the upper block has the reference mass. On the slope:

\\[
W_\\parallel=mg\\sin\\theta,qquad N=mg\\cos\\theta.
\\]

**Step-by-step solution**

1. **Parts (a) and (b): frictionless equilibrium.** Balance the lower incline block:

\\[
T_1-2mg\\sin\\theta=0
\\]

\\[
T_1=2mg\\sin\\theta.
\\]

Balance the upper incline block:

\\[
T_2-T_1-mg\\sin\\theta=0
\\]

\\[
T_2=3mg\\sin\\theta.
\\]

The hanging mass is also stationary:

\\[
Mg=T_2
\\]

\\[
M=3m\\sin\\theta.
\\]

2. **Part (c): double the hanging mass.** Its new mass is:

\\[
M'=6m\\sin\\theta.
\\]

The increased hanging weight pulls the incline blocks up. Add all three Newton equations; tensions cancel:

\\[
M'g-3mg\\sin\\theta=(M'+3m)a.
\\]

Insert the doubled mass and simplify:

\\[
a=\\frac{6mg\\sin\\theta-3mg\\sin\\theta}{6m\\sin\\theta+3m}
=\\frac{g\\sin\\theta}{1+2\\sin\\theta}.
\\]

Both incline blocks accelerate **uphill**; the hanging mass accelerates **down** with this magnitude.

3. **Part (d): moving-system tensions.** For the lower block:

\\[
T_1-2mg\\sin\\theta=2ma
\\]

\\[
T_1=2m(g\\sin\\theta+a)
=\\frac{4mg\\sin\\theta(1+\\sin\\theta)}{1+2\\sin\\theta}.
\\]

For both incline blocks together:

\\[
T_2-3mg\\sin\\theta=3ma
\\]

\\[
T_2=3m(g\\sin\\theta+a)
=\\frac{6mg\\sin\\theta(1+\\sin\\theta)}{1+2\\sin\\theta}.
\\]

4. **Part (e): maximum hanging mass with static friction.** At impending uphill motion, friction on both incline blocks points downhill. Their combined normal is:

\\[
N_{\\text{total}}=3mg\\cos\\theta.
\\]

Balance both incline blocks at limiting friction:

\\[
T_{2,\\max}=3mg\\sin\\theta+3\\mu_smg\\cos\\theta.
\\]

Because the hanging mass is at rest:

\\[
M_{\\max}=3m(\\sin\\theta+\\mu_s\\cos\\theta).
\\]

5. **Part (f): minimum hanging mass.** At impending downhill motion, friction points uphill:

\\[
T_{2,\\min}=3mg\\sin\\theta-3\\mu_smg\\cos\\theta.
\\]

When this is nonnegative:

\\[
M_{\\min}=3m(\\sin\\theta-\\mu_s\\cos\\theta).
\\]

If that expression is negative, friction can hold the slope blocks even with no hanging load. The physical minimum is then zero:

\\[
M_{\\min}=\\max\\!\\left(0,3m(\\sin\\theta-\\mu_s\\cos\\theta)\\right).
\\]

6. **Part (g): compare upper tensions.** At either static endpoint the hanging mass requires:

\\[
T_2=Mg.
\\]

Hence the maximum-mass case has the larger upper tension:

\\[
T_{2,\\max}=3mg(\\sin\\theta+\\mu_s\\cos\\theta)
\\]

\\[
T_{2,\\min}=\\max\\!\\left(0,3mg(\\sin\\theta-\\mu_s\\cos\\theta)\\right).
\\]

For zero friction the two endpoint values coincide.

**Use this method again**

Solve equilibrium from the outer block inward → use system forces for acceleration → recover separate tensions → reverse friction at opposite static thresholds.

**Check**

For the doubled mass, the hanging equation independently gives:

\\[
T_2=M'(g-a)
\\]

\\[
T_2=6m\\sin\\theta\\left(g-\\frac{g\\sin\\theta}{1+2\\sin\\theta}\\right)
=\\frac{6mg\\sin\\theta(1+\\sin\\theta)}{1+2\\sin\\theta}.
\\]

This agrees with the incline-system result. Setting the friction coefficient to zero also reduces both equilibrium bounds to the original equilibrium mass.
:::

:::exam-question
id: phys-ch5-p89
title: Serway/Jewett · Problem 5.89
question: Serway/Jewett · Problem 5.89
reference: [Serway/Jewett 9e · Problem 5.89](../books/136372.pdf#page=183)
answer-label: Show answer
body:
Serway/Jewett · Problem 5.89

![Serway/Jewett · Problem 5.89 — complete original problem](assets/lessons/physics/recommended/ch5-p89.webp)
solution:
**Plan — we are going to…**

1. Find how the downward push changes the normal force.
2. Equate horizontal push to limiting static friction.
3. Solve for the threshold force and determine when no positive finite threshold exists.

**The trick**

**Pushing harder also increases friction capacity.** A sufficiently steep downward push adds normal force faster than useful horizontal force, so no push magnitude can start sliding.

**What you need to know**

The applied force is directed below horizontal. Its vertical component points down and its horizontal component points forward. At impending sliding:

\\[
f_s=\\mu_sN.
\\]

Vertical acceleration remains zero.

**Step-by-step solution**

1. **Find the normal force.** The floor supports both weight and the push's downward component:

\\[
N-F_g-P\\sin\\theta=0
\\]

\\[
N=F_g+P\\sin\\theta.
\\]

2. **Part (a): write the horizontal threshold equation.**

\\[
P\\cos\\theta=\\mu_sN
\\]

\\[
P\\cos\\theta=\\mu_s(F_g+P\\sin\\theta).
\\]

3. **Collect the force terms on one side.**

\\[
P\\cos\\theta-\\mu_sP\\sin\\theta=\\mu_sF_g
\\]

\\[
P(\\cos\\theta-\\mu_s\\sin\\theta)=\\mu_sF_g.
\\]

For a positive denominator:

\\[
P_{\\min}=\\frac{\\mu_sF_g}{\\cos\\theta-\\mu_s\\sin\\theta}.
\\]

Divide the numerator and denominator by cosine to obtain the requested form:

\\[
P_{\\min}=\\frac{\\mu_sF_g\\sec\\theta}{1-\\mu_s\\tan\\theta}.
\\]

4. **Part (b): test the denominator.** For the shown downward angles between horizontal and vertical, a finite positive threshold requires:

\\[
\\cos\\theta-\\mu_s\\sin\\theta>0
\\]

\\[
\\tan\\theta<\\frac{1}{\\mu_s}.
\\]

Thus, for positive static friction coefficient, motion cannot be initiated by any magnitude of this push when:

\\[
\\theta\\ge\\tan^{-1}\\!\\left(\\frac1{\\mu_s}\\right).
\\]

At equality, the extra friction capacity exactly matches the useful horizontal push per unit force, leaving the weight's contribution uncompensated.

**Use this method again**

Resolve angled force → recalculate normal → write limiting friction → collect the unknown force → check the denominator's physical sign.

**Check**

A horizontal push is the special case with zero angle:

\\[
P_{\\min}=\\frac{\\mu_sF_g}{1}=\\mu_sF_g.
\\]

As the downward angle increases toward the critical angle, the denominator tends to zero from above, so the required force grows without bound, matching the physical obstruction.
:::

:::exam-question
id: phys-ch5-p93
title: Serway/Jewett · Problem 5.93
question: Serway/Jewett · Problem 5.93
reference: [Serway/Jewett 9e · Problem 5.93](../books/136372.pdf#page=184)
answer-label: Show answer
body:
Serway/Jewett · Problem 5.93

![Serway/Jewett · Problem 5.93 — complete original problem](assets/lessons/physics/recommended/ch5-p93.webp)
solution:
**Plan — we are going to…**

1. Keep the original figure's labels: the hanging block is mass m₁ and the top block is mass m₂.
2. Balance the hanging block vertically and accelerate the top block horizontally.
3. Apply the required acceleration to the complete three-mass system.

**The trick**

**Stationary relative to the large block does not mean stationary relative to the ground.** All three masses accelerate horizontally together. The original figure places m₂ on top and m₁ at the side; do not interchange them.

**What you need to know**

Use the ground as an inertial frame. The hanging block has zero vertical acceleration, but its horizontal normal force from the side of the large block gives it the common horizontal acceleration. The top block has no friction, so tension is its only horizontal force.

**Step-by-step solution**

1. **Balance the hanging block vertically.** The hanging block is mass m₁. Tension acts up and weight acts down:

\\[
T-m_1g=0
\\]

\\[
T=m_1g.
\\]

2. **Accelerate the top block horizontally.** Its mass is m₂ and its only horizontal force is tension:

\\[
T=m_2a.
\\]

Combine with the vertical balance:

\\[
m_2a=m_1g
\\]

\\[
a=\\frac{m_1g}{m_2}.
\\]

The hanging block also shares this horizontal acceleration; the side of the large block supplies its horizontal normal force.

3. **Treat the entire apparatus as one system.** Rope tensions and contact forces are internal. The only external horizontal driving force accelerates all three masses:

\\[
F=(M+m_1+m_2)a.
\\]

4. **Substitute the required acceleration.**

\\[
\\boxed{F=(M+m_1+m_2)\\frac{m_1g}{m_2}}.
\\]

The applied force points **rightward**, as shown in the figure.

**Use this method again**

Choose an inertial frame → distinguish zero relative motion from zero acceleration → use the hanging vertical balance → use top-block horizontal dynamics → accelerate the whole system.

**Check**

The hanging block's required side normal is:

\\[
N_{\\text{side}}=m_1a.
\\]

On the large block, top-rope reaction and side contact oppose the external force. Its horizontal equation becomes:

\\[
F-T-N_{\\text{side}}=Ma.
\\]

Since the top mass requires tension equal to its mass times acceleration:

\\[
F-m_2a-m_1a=Ma,
\\]

which reproduces the whole-system result. If the hanging mass tends to zero, the required acceleration and applied force tend to zero, as the formula predicts.
:::

:::exam-question
id: phys-ch5-p101
title: Serway/Jewett · Problem 5.101
question: Serway/Jewett · Problem 5.101
reference: [Serway/Jewett 9e · Problem 5.101](../books/136372.pdf#page=185)
answer-label: Show answer
body:
Serway/Jewett · Problem 5.101

![Serway/Jewett · Problem 5.101 — complete original problem](assets/lessons/physics/recommended/ch5-p101.webp)
solution:
**Plan — we are going to…**

1. Use Newton's law along the frictionless incline.
2. Find speed and time at the table edge.
3. Treat the flight from the edge as a separate projectile stage and add the two times.

**The trick**

**The block leaves the incline moving downward at 30°, not horizontally.** The two stages have different accelerations, so one kinematics equation cannot cover the whole trip.

**What you need to know**

On the slope, gravity's parallel component supplies constant acceleration. In flight, horizontal velocity stays constant and vertical acceleration is downward gravitational acceleration. Choose downward positive for the flight's vertical equation.

**Step-by-step solution**

1. **Part (a): incline acceleration.** Normal cancels perpendicular gravity; along the slope:

\\[
mg\\sin\\theta=ma
\\]

\\[
a=g\\sin30.0^\\circ=(9.80)(0.500)=4.90\\ \\frac{\\mathrm m}{\\mathrm{s^2}}.
\\]

2. **Part (b): distance and exit speed.** The slope's vertical drop is 0.500 m:

\\[
s=\\frac{h}{\\sin\\theta}=\\frac{0.500}{0.500}=1.00\\ \\mathrm m.
\\]

Starting from rest:

\\[
v^2=2as=2(4.90)(1.00)=9.80
\\]

\\[
v=3.13\\ \\frac{\\mathrm m}{\\mathrm s}.
\\]

The velocity is **3.13 m/s, 30.0° below horizontal**. Its components, with right and up positive, are:

\\[
v_x=v\\cos30.0^\\circ=2.71\\ \\frac{\\mathrm m}{\\mathrm s}
\\]

\\[
v_y=-v\\sin30.0^\\circ=-1.57\\ \\frac{\\mathrm m}{\\mathrm s}.
\\]

3. **Find time on the slope.**

\\[
t_1=\\frac{v}{a}=\\frac{3.13050}{4.90}=0.639\\ \\mathrm s.
\\]

4. **Part (c): find the flight time.** Restart the flight clock at the edge and choose down positive. The drop to the floor is 2.00 m:

\\[
2.00=(v\\sin30.0^\\circ)t_2+\\frac12gt_2^2
\\]

\\[
4.90t_2^2+1.56525t_2-2.00=0.
\\]

Use the positive quadratic root:

\\[
t_2=\\frac{-1.56525+\\sqrt{1.56525^2+4(4.90)(2.00)}}{2(4.90)}
=0.499\\ \\mathrm s.
\\]

The negative root corresponds to an extrapolated time before the block left the edge and is discarded.

5. **Calculate the horizontal range from the table.**

\\[
R=(v\\cos30.0^\\circ)t_2=(2.71109)(0.49884)=1.35\\ \\mathrm m.
\\]

6. **Part (d): add the separate times.**

\\[
t_{\\text{total}}=t_1+t_2=0.63888+0.49884=1.14\\ \\mathrm s.
\\]

7. **Part (e): mass dependence.** The mass cancelled from the incline equation, and it does not appear in projectile kinematics. All the requested results are **independent of the block's mass** under the stated ideal conditions.

**Use this method again**

Split motion when contact conditions change → solve the first stage → pass its full velocity into the next stage → add elapsed times, not accelerations.

**Check**

Substitute the flight time back into the vertical drop:

\\[
(1.56525)(0.49884)+4.90(0.49884)^2\\approx2.00\\ \\mathrm m.
\\]

An independent speed check at the edge uses the vertical drop:

\\[
v^2=2gh=2(9.80)(0.500)=9.80.
\\]

Both agree with the two-stage solution.
:::

:::exam-question
id: phys-ch5-p103
title: Serway/Jewett · Problem 5.103
question: Serway/Jewett · Problem 5.103
reference: [Serway/Jewett 9e · Problem 5.103](../books/136372.pdf#page=185)
answer-label: Show answer
body:
Serway/Jewett · Problem 5.103

![Serway/Jewett · Problem 5.103 — complete original problem](assets/lessons/physics/recommended/ch5-p103.webp)
solution:
**Plan — we are going to…**

1. Find equal and opposite friction forces between the blocks.
2. Calculate each block's acceleration in the ground frame.
3. Use relative motion to find when the top block crosses the lower one, then calculate the lower block's displacement.

**The trick**

**The 3.00-m distance is relative to the moving lower block.** Use the difference of accelerations to find crossing time. Using only the top block's ground displacement gives the wrong time.

**What you need to know**

Both blocks start from rest. The top block slides right relative to the bottom block, so kinetic friction acts left on the top and right on the bottom. The floor is frictionless. For initially zero relative velocity:

\\[
\\Delta x_{\\text{relative}}=\\frac12(a_m-a_M)t^2.
\\]

**Step-by-step solution**

1. **Find contact normal and kinetic friction.** Vertical acceleration of the top block is zero:

\\[
N=mg=(2.00)(9.80)=19.6\\ \\mathrm N
\\]

\\[
f_k=\\mu_kN=(0.300)(19.6)=5.88\\ \\mathrm N.
\\]

2. **Top-block horizontal acceleration.** Applied force is right and friction is left:

\\[
F-f_k=ma_m
\\]

\\[
a_m=\\frac{10.0-5.88}{2.00}=2.06\\ \\frac{\\mathrm m}{\\mathrm{s^2}}.
\\]

3. **Lower-block horizontal acceleration.** Its only horizontal force is the top block's friction reaction:

\\[
f_k=Ma_M
\\]

\\[
a_M=\\frac{5.88}{8.00}=0.735\\ \\frac{\\mathrm m}{\\mathrm{s^2}}.
\\]

4. **Part (a): use relative acceleration.**

\\[
a_{\\text{relative}}=2.06-0.735=1.325\\ \\frac{\\mathrm m}{\\mathrm{s^2}}.
\\]

The top block's leading edge must advance 3.00 m relative to the lower block:

\\[
3.00=\\frac12(1.325)t^2
\\]

\\[
t^2=\\frac{6.00}{1.325}=4.52830\\ \\mathrm{s^2}
\\]

\\[
t=2.13\\ \\mathrm s.
\\]

5. **Part (b): lower-block ground displacement.**

\\[
\\Delta x_M=\\frac12a_Mt^2
=\\frac12(0.735)(4.52830)=1.66\\ \\mathrm m\\quad\\text{rightward}.
\\]

**Use this method again**

Separate block accelerations → subtract for relative acceleration → solve the relative-distance condition → use the same time in ground-frame kinematics.

**Check**

The top block's ground displacement at that time is:

\\[
\\Delta x_m=\\frac12(2.06)(4.52830)=4.66\\ \\mathrm m.
\\]

Subtract the lower block's displacement:

\\[
4.66-1.66=3.00\\ \\mathrm m,
\\]

which is exactly the required relative crossing distance. The total horizontal force also checks:

\\[
(2.00)(2.06)+(8.00)(0.735)=10.0\\ \\mathrm N.
\\]
:::`};export{e as default};