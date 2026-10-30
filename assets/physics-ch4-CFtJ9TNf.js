var e={id:`physics-ch4`,title:`Motion in Two Dimensions`,summary:`Serway/Jewett 9e · Chapter 4 · original textbook exercises and verified practice.`,subjectId:`physics`,reward:0,status:`published`,authoringSource:`:::mcq
id: phys-ch4-p1
title: Serway/Jewett · Problem 4.1
reference: [Serway/Jewett 9e · Problem 4.1](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the original problem?
- [ ] a | Displacement (−4.27, −4.87) km; average speed 23.3 m/s; average velocity (−11.9, −13.5) m/s
- [ ] b | Displacement (−3.00, −3.60) km; average speed 13.5 m/s; average velocity (−8.33, −10.0) m/s
- [x] c | Displacement (−4.27, −2.33) km; average speed 23.3 m/s; average velocity (−11.9, −6.46) m/s
explanation: With east +x and north +y, the three displacements are \\((0,-3600),(-3000,0),(-1800/\\sqrt2,+1800/\\sqrt2)\\) m. Their sum is \\((-4272.79,-2327.21)\\) m, magnitude 4.87 km at 28.6° south of west. Total distance is 8400 m in 360 s, giving average speed 23.3 m/s. Divide the vector displacement by 360 s for average velocity; its magnitude is 13.5 m/s.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 4.1 — complete original problem](assets/lessons/physics/recommended/ch4-p1.webp)
solution:
**Plan — we are going to…**

1. Convert all travel times to seconds and draw the three directions.
2. Find the east–west and north–south displacement of each leg.
3. Add the components to find the final displacement.
4. Use total distance for average speed, and displacement for average velocity.

**The trick**

- **Distance** = total path driven.
- **Displacement** = start-to-finish arrow.

Turns make these different, so average speed can exceed average-velocity magnitude.

**What you need to know**

- **i-hat** = unit arrow east (+x); west is negative.
- **j-hat** = unit arrow north (+y); south is negative.
- **Northwest** = 45° between north and west, with equal component magnitudes.

For each constant-speed leg:

\\[
d=vt
\\]

For the whole trip:

\\[
\\text{average speed}=\\frac{\\text{total distance}}{\\text{total time}}
\\]

\\[
\\vec v_{\\mathrm{avg}}=\\frac{\\Delta\\vec r}{\\Delta t}
\\]

**Step-by-step solution**

1. **Convert the three times.** There are 60 seconds in one minute.

\\[
t_1=3.00(60)=180\\ \\mathrm{s}
\\]

\\[
t_2=2.00(60)=120\\ \\mathrm{s}
\\]

\\[
t_3=1.00(60)=60.0\\ \\mathrm{s}
\\]

\\[
\\Delta t=180+120+60=360\\ \\mathrm{s}
\\]

2. **First leg: south.** Its distance is:

\\[
d_1=20.0(180)=3600\\ \\mathrm{m}
\\]

There is no east–west change; all the displacement is toward negative y.

\\[
\\Delta\\vec r_1=(0\\hat i-3600\\hat j)\\ \\mathrm{m}
\\]

3. **Second leg: west.** Its distance is:

\\[
d_2=25.0(120)=3000\\ \\mathrm{m}
\\]

There is no north–south change; all the displacement is toward negative x.

\\[
\\Delta\\vec r_2=(-3000\\hat i+0\\hat j)\\ \\mathrm{m}
\\]

4. **Third leg: northwest.** First find its full length.

\\[
d_3=30.0(60.0)=1800\\ \\mathrm{m}
\\]

Resolve the 45-degree direction into a westward component and a northward component.

\\[
\\Delta x_3=-1800\\cos45^\\circ=-1272.79\\ \\mathrm{m}
\\]

\\[
\\Delta y_3=+1800\\sin45^\\circ=+1272.79\\ \\mathrm{m}
\\]

5. **Part (a): add components, not lengths.**

\\[
\\Delta x=0-3000-1272.79=-4272.79\\ \\mathrm{m}
\\]

\\[
\\Delta y=-3600+0+1272.79=-2327.21\\ \\mathrm{m}
\\]

\\[
\\boxed{\\Delta\\vec r=(-4.27\\hat i-2.33\\hat j)\\ \\mathrm{km}}
\\]

To describe the same vector by length and direction, use Pythagoras and a reference angle.

\\[
|\\Delta\\vec r|=\\sqrt{4272.79^2+2327.21^2}=4865.5\\ \\mathrm{m}\\approx4.87\\ \\mathrm{km}
\\]

\\[
\\alpha=\\tan^{-1}\\!\\left(\\frac{2327.21}{4272.79}\\right)=28.6^\\circ
\\]

Both components are negative, so the direction is **28.6 degrees south of west**.

6. **Part (b): add actual distances for average speed.**

\\[
d_{\\mathrm{total}}=3600+3000+1800=8400\\ \\mathrm{m}
\\]

\\[
\\boxed{v_{\\mathrm{speed,avg}}=\\frac{8400}{360}=23.3\\ \\mathrm{m/s}}
\\]

7. **Part (c): divide each displacement component by the same total time.**

\\[
v_{\\mathrm{avg},x}=\\frac{-4272.79}{360}=-11.9\\ \\mathrm{m/s}
\\]

\\[
v_{\\mathrm{avg},y}=\\frac{-2327.21}{360}=-6.46\\ \\mathrm{m/s}
\\]

\\[
\\boxed{\\vec v_{\\mathrm{avg}}=(-11.9\\hat i-6.46\\hat j)\\ \\mathrm{m/s}}
\\]

Its magnitude is:

\\[
|\\vec v_{\\mathrm{avg}}|=\\frac{4865.5}{360}=13.5\\ \\mathrm{m/s}
\\]

Its direction is also 28.6 degrees south of west because dividing a vector by positive time does not rotate it.

**Use this method again**

Leg lengths → signed components → summed displacement → divide by total time. For average speed, use **total path length** instead.

**Check**

The trip ends west and south of the start, matching both negative components. The displacement length is smaller than the distance travelled, so 13.5 m/s is correctly smaller than 23.3 m/s.
:::

:::mcq
id: phys-ch4-p3
title: Serway/Jewett · Problem 4.3
reference: [Serway/Jewett 9e · Problem 4.3](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the original problem?
- [x] a | Average velocity (1.00, 0.750) m/s; at 2 s, velocity (1.00, 0.500) m/s and speed 1.12 m/s
- [ ] b | Average velocity (1.00, 0.500) m/s; at 2 s, velocity (1.00, 0.750) m/s and speed 1.25 m/s
- [ ] c | Average velocity (2.00, 1.50) m/s; at 2 s, velocity (1.00, 0.500) m/s and speed 1.50 m/s
explanation: \\(\\Delta x/\\Delta t=a=1\\) and \\(\\Delta y/\\Delta t=c(4^2-2^2)/(4-2)=0.750\\). Differentiating gives \\(\\vec v=a\\hat i+2ct\\hat j\\). At 2 s this is \\((1,0.5)\\) m/s, with magnitude \\(\\sqrt{1.25}=1.12\\) m/s.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 4.3 — complete original problem](assets/lessons/physics/recommended/ch4-p3.webp)
solution:
**Plan — we are going to…**

1. Evaluate the position at both ends of the requested interval.
2. Subtract the positions and divide by elapsed time for average velocity.
3. Differentiate each coordinate for the velocity at one instant.
4. Combine the instantaneous components to find speed.

**The trick**

**Average velocity** uses two times; **instantaneous velocity** uses one. Since vertical velocity changes, its value at 2 s is not the average from 2 to 4 s.

**What you need to know**

- **x, y** = position components.
- **b, d** = constant initial-position offsets; they cancel in differences and differentiate to zero.

\\[
x(t)=at+b
\\]

\\[
y(t)=ct^2+d
\\]

Average velocity is:

\\[
\\vec v_{\\mathrm{avg}}=\\frac{\\vec r(t_2)-\\vec r(t_1)}{t_2-t_1}
\\]

**Instantaneous velocity** = position's rate of change at one time.

Derivative rules:

- Constant → 0.
- t → 1.
- t² → 2t.

\\[
v_x=\\frac{dx}{dt},\\qquad v_y=\\frac{dy}{dt}
\\]

**Speed** = velocity-vector length, not the sum of components.

\\[
v=\\sqrt{v_x^2+v_y^2}
\\]

**Step-by-step solution**

1. **Write the given coordinate functions using the supplied constants.** Time is in seconds and positions are in metres.

\\[
x(t)=1.00t+1.00
\\]

\\[
y(t)=0.125t^2+1.00
\\]

2. **Part (a): find the starting position at 2.00 seconds.**

\\[
x(2)=1.00(2)+1.00=3.00\\ \\mathrm{m}
\\]

\\[
y(2)=0.125(2)^2+1.00=0.500+1.00=1.50\\ \\mathrm{m}
\\]

3. **Find the ending position at 4.00 seconds.**

\\[
x(4)=1.00(4)+1.00=5.00\\ \\mathrm{m}
\\]

\\[
y(4)=0.125(4)^2+1.00=2.00+1.00=3.00\\ \\mathrm{m}
\\]

4. **Subtract final minus initial, component by component.**

\\[
\\Delta x=5.00-3.00=2.00\\ \\mathrm{m}
\\]

\\[
\\Delta y=3.00-1.50=1.50\\ \\mathrm{m}
\\]

\\[
\\Delta t=4.00-2.00=2.00\\ \\mathrm{s}
\\]

5. **Divide both changes by that elapsed time.**

\\[
v_{\\mathrm{avg},x}=\\frac{2.00}{2.00}=1.00\\ \\mathrm{m/s}
\\]

\\[
v_{\\mathrm{avg},y}=\\frac{1.50}{2.00}=0.750\\ \\mathrm{m/s}
\\]

\\[
\\boxed{\\vec v_{\\mathrm{avg}}=(1.00\\hat i+0.750\\hat j)\\ \\mathrm{m/s}}
\\]

6. **Part (b): differentiate before substituting the time.** For the x coordinate, the derivative of the constant offset is zero.

\\[
v_x(t)=\\frac{d}{dt}(at+b)=a=1.00\\ \\mathrm{m/s}
\\]

For the y coordinate, bring down the power 2 and reduce that power by 1.

\\[
v_y(t)=\\frac{d}{dt}(ct^2+d)=2ct
\\]

\\[
v_y(t)=2(0.125)t=0.250t
\\]

Now evaluate at 2.00 seconds.

\\[
v_y(2)=0.250(2)=0.500\\ \\mathrm{m/s}
\\]

\\[
\\boxed{\\vec v(2)=(1.00\\hat i+0.500\\hat j)\\ \\mathrm{m/s}}
\\]

7. **Calculate the instantaneous speed.**

\\[
v(2)=\\sqrt{(1.00)^2+(0.500)^2}
\\]

\\[
v(2)=\\sqrt{1.00+0.250}=\\sqrt{1.250}
\\]

\\[
\\boxed{v(2)=1.12\\ \\mathrm{m/s}}
\\]

**Use this method again**

- **Over an interval:** position change ÷ elapsed time.
- **At an instant:** differentiate, then substitute time.
- **Speed:** length of the velocity vector.

**Check**

At 4 seconds the vertical velocity is 1.00 m/s. The interval average of 0.750 m/s lies between the endpoint values 0.500 and 1.00 m/s. The speed 1.12 m/s is larger than either individual component, as a diagonal vector length should be.
:::

:::mcq
id: phys-ch4-p4
title: Serway/Jewett · Problem 4.4
reference: [Serway/Jewett 9e · Problem 4.4](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: What path does the particle follow?
- [ ] a | Circle of radius 4.00 m centered at (0, 5.00 m), initially moving toward +x
- [ ] b | Ellipse centered at the origin with semiaxes 4.00 and 5.00 m
- [x] c | Circle of radius 5.00 m centered at (0, 4.00 m), initially moving toward −x
explanation: Writing the printed angular constant as \\(\\omega\\), \\(\\vec r=-5\\sin(\\omega t)\\hat i+[4-5\\cos(\\omega t)]\\hat j\\) m. Differentiate: \\(\\vec v=-5\\omega\\cos(\\omega t)\\hat i+5\\omega\\sin(\\omega t)\\hat j\\), and \\(\\vec a=5\\omega^2\\sin(\\omega t)\\hat i+5\\omega^2\\cos(\\omega t)\\hat j\\). At t=0, velocity is \\((-5\\omega,0)\\) and acceleration \\((0,5\\omega^2)\\). Eliminating t gives \\(x^2+(y-4)^2=25\\); for positive \\(\\omega\\), the motion is clockwise starting at (0,−1).
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 4.4 — complete original problem](assets/lessons/physics/recommended/ch4-p4.webp)
solution:
**Plan — we are going to…**

1. Differentiate both coordinates once to obtain velocity.
2. Differentiate once more to obtain acceleration.
3. Substitute zero time for the requested initial components.
4. Eliminate time from the position equations to recognize and describe the path.

**The trick**

**Omega is an angular constant, not speed.** Each derivative adds an omega factor. The constant 4 shifts the circle's center upward; it is not the radius.

**What you need to know**

- **i-hat** = unit arrow along +x.
- **j-hat** = unit arrow along +y.
- **Omega** = angular constant, in s⁻¹.

Given coordinates (meters):

\\[
x(t)=-5.00\\sin(\\omega t)
\\]

\\[
y(t)=4.00-5.00\\cos(\\omega t)
\\]

**Chain rule:** differentiate the outside function, then multiply by the inside angle's derivative.

\\[
\\frac{d}{dt}\\sin(\\omega t)=\\omega\\cos(\\omega t)
\\]

\\[
\\frac{d}{dt}\\cos(\\omega t)=-\\omega\\sin(\\omega t)
\\]

We will also use:

\\[
\\sin0=0,\\qquad\\cos0=1
\\]

\\[
\\sin^2u+\\cos^2u=1
\\]

**Step-by-step solution**

1. **Differentiate x to find its velocity component.** Keep the original minus sign and multiply by omega.

\\[
v_x(t)=\\frac{dx}{dt}=-5.00\\omega\\cos(\\omega t)
\\]

2. **Differentiate y to find its velocity component.** The derivative of the constant 4.00 is zero. The minus sign already in y multiplies the minus sign from the cosine derivative, giving a plus.

\\[
v_y(t)=0-5.00[-\\omega\\sin(\\omega t)]
\\]

\\[
v_y(t)=5.00\\omega\\sin(\\omega t)
\\]

3. **Part (a): evaluate velocity at zero time.**

\\[
v_x(0)=-5.00\\omega\\cos0=-5.00\\omega
\\]

\\[
v_y(0)=5.00\\omega\\sin0=0
\\]

\\[
\\boxed{\\vec v(0)=-5.00\\omega\\hat i}
\\]

These components have units of m/s. For positive omega, the initial motion is toward negative x.

4. **Differentiate velocity to obtain acceleration.** For the x component, differentiating cosine produces a minus sign which cancels the existing minus.

\\[
a_x(t)=-5.00\\omega[-\\omega\\sin(\\omega t)]
\\]

\\[
a_x(t)=5.00\\omega^2\\sin(\\omega t)
\\]

For the y component, differentiate sine and multiply by omega again.

\\[
a_y(t)=5.00\\omega[\\omega\\cos(\\omega t)]
\\]

\\[
a_y(t)=5.00\\omega^2\\cos(\\omega t)
\\]

5. **Part (b): evaluate acceleration at zero time.**

\\[
a_x(0)=5.00\\omega^2\\sin0=0
\\]

\\[
a_y(0)=5.00\\omega^2\\cos0=5.00\\omega^2
\\]

\\[
\\boxed{\\vec a(0)=5.00\\omega^2\\hat j}
\\]

These components have units of m/s squared. The initial acceleration points upward.

6. **Part (c): collect the vector expressions for any time.** Position has units of metres:

\\[
\\boxed{\\vec r(t)=-5.00\\sin(\\omega t)\\hat i+[4.00-5.00\\cos(\\omega t)]\\hat j}
\\]

Velocity has units of m/s:

\\[
\\boxed{\\vec v(t)=-5.00\\omega\\cos(\\omega t)\\hat i+5.00\\omega\\sin(\\omega t)\\hat j}
\\]

Acceleration has units of m/s squared:

\\[
\\boxed{\\vec a(t)=5.00\\omega^2\\sin(\\omega t)\\hat i+5.00\\omega^2\\cos(\\omega t)\\hat j}
\\]

7. **Part (d): remove time to find the path.** Move the vertical offset to the left, then square both equations.

\\[
x^2=25.00\\sin^2(\\omega t)
\\]

\\[
(y-4.00)^2=25.00\\cos^2(\\omega t)
\\]

Add and use the sine-squared plus cosine-squared identity.

\\[
x^2+(y-4.00)^2=25.00[\\sin^2(\\omega t)+\\cos^2(\\omega t)]
\\]

\\[
\\boxed{x^2+(y-4.00)^2=(5.00)^2}
\\]

This is a **circle of radius 5.00 m centred at (0, 4.00 m)**. Initially:

\\[
(x(0),y(0))=(0,4.00-5.00)=(0,-1.00)\\ \\mathrm{m}
\\]

That is the bottom of the circle. For positive omega the particle first moves left, so it travels **clockwise**. Negative omega reverses the direction; zero omega leaves it stationary at the initial point.

**Use this method again**

Differentiate each coordinate → differentiate again → evaluate times → eliminate time to identify the path. Keep offsets and chain-rule factors.

**Check**

At the bottom of a circle centred above the particle, inward acceleration must point upward. Our initial acceleration does. The speed is constant with magnitude five times the absolute value of omega, even though its direction changes.
:::

:::mcq
id: phys-ch4-p9
title: Serway/Jewett · Problem 4.9
reference: [Serway/Jewett 9e · Problem 4.9](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the original problem?
- [x] a | Acceleration (0.800, −0.300) m/s²; at 25 s, position (360, −72.8) m, moving 15.2° below +x
- [ ] b | Acceleration (1.20, −0.200) m/s²; at 25 s, position (485, −41.5) m, moving 6.71° below +x
- [ ] c | Acceleration (0.800, +0.300) m/s²; at 25 s, position (360, 115) m, moving 19.5° above +x
explanation: \\(\\vec a=[(20,-5)-(4,1)]/20=(0.800,-0.300)\\) m/s², directed 20.6° below +x. At 25 s, \\(\\vec r=(10,-4)+(4,1)25+\\tfrac12(0.8,-0.3)25^2=(360,-72.75)\\) m. Velocity is \\((24,-6.5)\\) m/s, directed \\(\\tan^{-1}(6.5/24)=15.2°\\) below +x.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 4.9 — complete original problem](assets/lessons/physics/recommended/ch4-p9.webp)
solution:
**Plan — we are going to…**

1. Use the velocity change during the first 20.0 seconds to find both acceleration components.
2. Use their signs to describe the acceleration direction.
3. Start again from the original position and velocity and calculate the position after 25.0 seconds.
4. Calculate the velocity at that time to find the direction of motion.

**The trick**

**Direction of motion comes from velocity**, not position or acceleration. Also, 25.0 s means time since the original start—not another 25 s after the first 20 s.

**What you need to know**

- **Origin:** the rock.
- **+x, +y:** the supplied unit-vector directions.

Initial values:

\\[
\\vec r_0=(10.0\\hat i-4.00\\hat j)\\ \\mathrm{m}
\\]

\\[
\\vec v_0=(4.00\\hat i+1.00\\hat j)\\ \\mathrm{m/s}
\\]

At 20.0 seconds:

\\[
\\vec v_{20}=(20.0\\hat i-5.00\\hat j)\\ \\mathrm{m/s}
\\]

Constant acceleration lets us apply the following equations separately to x and y:

\\[
a=\\frac{v-v_0}{\\Delta t}
\\]

\\[
r=r_0+v_0t+\\frac12at^2
\\]

\\[
v=v_0+at
\\]

A component pair determines direction. If x is positive and y is negative, the arrow points below positive x.

**Step-by-step solution**

1. **Part (a): find the x acceleration using final minus initial velocity.**

\\[
a_x=\\frac{20.0-4.00}{20.0}
\\]

\\[
\\boxed{a_x=0.800\\ \\mathrm{m/s^2}}
\\]

2. **Find the y acceleration, keeping the negative final component.**

\\[
a_y=\\frac{-5.00-(+1.00)}{20.0}
\\]

\\[
a_y=\\frac{-6.00}{20.0}
\\]

\\[
\\boxed{a_y=-0.300\\ \\mathrm{m/s^2}}
\\]

3. **Part (b): determine the acceleration angle.** The positive x acceleration points right; the negative y acceleration points downward. Compute the positive reference angle first.

\\[
\\alpha=\\tan^{-1}\\!\\left(\\frac{|a_y|}{a_x}\\right)
\\]

\\[
\\alpha=\\tan^{-1}\\!\\left(\\frac{0.300}{0.800}\\right)=20.6^\\circ
\\]

The acceleration points **20.6 degrees below positive x**, equivalently 339.4 degrees counterclockwise from positive x.

4. **Part (c): calculate x at 25.0 seconds.** Keep the original position and original velocity as the starting data.

\\[
x(25)=10.0+4.00(25.0)+\\frac12(0.800)(25.0)^2
\\]

\\[
x(25)=10.0+100+0.400(625)
\\]

\\[
x(25)=10.0+100+250=360\\ \\mathrm{m}
\\]

5. **Calculate y at the same time.**

\\[
y(25)=-4.00+1.00(25.0)+\\frac12(-0.300)(25.0)^2
\\]

\\[
y(25)=-4.00+25.0-0.150(625)
\\]

\\[
y(25)=-4.00+25.0-93.75=-72.75\\ \\mathrm{m}
\\]

Thus the position relative to the rock is:

\\[
\\boxed{\\vec r(25)=(360\\hat i-72.8\\hat j)\\ \\mathrm{m}}
\\]

6. **Find the direction of motion from the velocity at 25.0 seconds.**

\\[
v_x(25)=4.00+0.800(25.0)=24.0\\ \\mathrm{m/s}
\\]

\\[
v_y(25)=1.00-0.300(25.0)=-6.50\\ \\mathrm{m/s}
\\]

\\[
\\vec v(25)=(24.0\\hat i-6.50\\hat j)\\ \\mathrm{m/s}
\\]

The velocity has positive x and negative y components, so again the direction is below positive x, but with a different angle.

\\[
\\beta=\\tan^{-1}\\!\\left(\\frac{6.50}{24.0}\\right)=15.2^\\circ
\\]

The fish is moving **15.2 degrees below positive x**.

**Use this method again**

Velocity change → acceleration components → new position/velocity → direction from velocity. Keep one clearly defined starting time.

**Check**

Substituting 20.0 seconds into the velocity equations reproduces the given final components: 20.0 m/s horizontally and −5.00 m/s vertically. At 25 seconds the vertical velocity is more negative, which is consistent with the constant negative y acceleration.
:::

:::mcq
id: phys-ch4-p18
title: Serway/Jewett · Problem 4.18
reference: [Serway/Jewett 9e · Problem 4.18](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the original problem?
- [x] a | \\(\\theta=76.0°\\), \\(R_{\\max}=17R/8\\); the angle is unchanged on another planet
- [ ] b | \\(\\theta=45.0°\\), \\(R_{\\max}=R\\); the angle is unchanged on another planet
- [ ] c | \\(\\theta=63.4°\\), \\(R_{\\max}=5R/4\\); the angle depends on g
explanation: Set \\(v^2\\sin^2\\theta/(2g)=v^2\\sin(2\\theta)/g\\). For the nonzero flight, \\(\\tan\\theta=4\\), hence 75.96°. At this angle \\(\\sin2\\theta=8/17\\), whereas the maximum-range angle gives \\(\\sin2\\theta=1\\), so \\(R_{\\max}=17R/8\\). The same g cancels from the height/range relation, so the angle does not depend on the planet.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 4.18 — complete original problem](assets/lessons/physics/recommended/ch4-p18.webp)
solution:
**Plan — we are going to…**

1. Derive the greatest height from vertical motion and the range from horizontal motion.
2. Set those two lengths equal and solve for the launch angle.
3. Compare the original range with the largest possible range at the same launch speed.
4. Check whether the required angle depends on the planet's gravity.

**The trick**

First use **maximum height = range** to find the original angle. Then launch at 45° with the same speed to maximize range. These are two different launches.

**What you need to know**

**Model:** no air resistance; constant downward gravity; landing at launch height.

- **Origin:** launch point.
- **+x:** horizontal; **+y:** upward.
- **v:** launch speed; **theta:** angle above horizontal.

\\[
v_{0x}=v\\cos\\theta
\\]

\\[
v_{0y}=v\\sin\\theta
\\]

At the highest point only the vertical velocity is zero. The horizontal velocity remains unchanged.

\\[
a_x=0,\\qquad a_y=-g
\\]

**Step-by-step solution**

1. **Find the greatest height H.** Use the vertical equation which does not require time.

\\[
v_y^2=v_{0y}^2+2a_y\\Delta y
\\]

At the top, substitute zero vertical velocity and a height increase H.

\\[
0=v^2\\sin^2\\theta-2gH
\\]

Move the height term to the other side and divide by twice gravity.

\\[
2gH=v^2\\sin^2\\theta
\\]

\\[
H=\\frac{v^2\\sin^2\\theta}{2g}
\\]

2. **Find the nonzero time T at which the rock returns to ground level.**

\\[
0=v\\sin\\theta\\,T-\\frac12gT^2
\\]

Factor out T. The root with zero time is the launch, so use the other factor for landing.

\\[
0=T\\left(v\\sin\\theta-\\frac12gT\\right)
\\]

\\[
T=\\frac{2v\\sin\\theta}{g}
\\]

3. **Find the horizontal range R using that same flight time.**

\\[
R=v_{0x}T
\\]

\\[
R=v\\cos\\theta\\left(\\frac{2v\\sin\\theta}{g}\\right)
\\]

\\[
R=\\frac{2v^2\\sin\\theta\\cos\\theta}{g}=\\frac{v^2\\sin2\\theta}{g}
\\]

4. **Part (a): impose the condition that height equals range.**

\\[
\\frac{v^2\\sin^2\\theta}{2g}=\\frac{2v^2\\sin\\theta\\cos\\theta}{g}
\\]

Multiply both sides by twice gravity and divide by the nonzero squared launch speed.

\\[
\\sin^2\\theta=4\\sin\\theta\\cos\\theta
\\]

For an actual upward flight, sine theta is nonzero. Divide both sides by sine theta, then by cosine theta.

\\[
\\sin\\theta=4\\cos\\theta
\\]

\\[
\\tan\\theta=4
\\]

\\[
\\boxed{\\theta=\\tan^{-1}(4)=76.0^\\circ}
\\]

5. **Part (b): express the original range using this angle.** A right triangle with opposite side 4 and adjacent side 1 has hypotenuse the square root of 17. Therefore:

\\[
\\sin\\theta=\\frac4{\\sqrt{17}},\\qquad\\cos\\theta=\\frac1{\\sqrt{17}}
\\]

\\[
\\sin2\\theta=2\\sin\\theta\\cos\\theta=2\\left(\\frac4{\\sqrt{17}}\\right)\\left(\\frac1{\\sqrt{17}}\\right)=\\frac8{17}
\\]

\\[
R=\\frac{v^2}{g}\\frac8{17}
\\]

6. **Now maximize range while keeping launch speed fixed.** The largest sine value is 1. It occurs when twice the launch angle is 90 degrees, so the optimal launch angle is 45 degrees.

\\[
R_{\\max}=\\frac{v^2}{g}
\\]

From the expression for the original range, multiply both sides by seventeen eighths.

\\[
\\frac{17}{8}R=\\frac{v^2}{g}
\\]

\\[
\\boxed{R_{\\max}=\\frac{17}{8}R=2.125R}
\\]

7. **Part (c): another planet.** Gravity cancels in step 4, so **height = range still requires 76.0°**. This assumes ideal projectile motion and equal launch/landing heights. Gravity changes both lengths, but not this angle.

**Use this method again**

Express both lengths using the same launch data → equate → cancel common factors. For an optimal-angle follow-up, keep speed fixed.

**Check**

A steep launch should give a large height compared with its range, so an angle near 76 degrees is sensible. Changing that angle to 45 degrees increases the range by a factor greater than one, as our factor 2.125 does.
:::

:::mcq
id: phys-ch4-p19
title: Serway/Jewett · Problem 4.19
reference: [Serway/Jewett 9e · Problem 4.19](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the original problem?
- [ ] a | 54.7°
- [ ] b | 30.0°
- [x] c | 67.8°
explanation: At maximum height the speed is \\(v_x\\). At half the maximum height, \\(v_y^2=v_{y0}^2/2\\). The speed condition gives \\(v_x^2=(v_x^2+v_{y0}^2/2)/4\\), hence \\(\\tan^2\\theta=6\\) and \\(\\theta=67.8°\\).
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 4.19 — complete original problem](assets/lessons/physics/recommended/ch4-p19.webp)
solution:
**Plan — we are going to…**

1. Write the horizontal and vertical initial velocity components.
2. Find the vertical speed at half the greatest height.
3. Apply the given relationship between the two total speeds.
4. Solve for the ratio of the initial components, then convert that ratio into a launch angle.

**The trick**

At the top, **vertical velocity = 0; horizontal velocity remains**. At half-height, calculate the vertical speed first, then combine components; neither speed is simply halved.

**What you need to know**

**Model:** no air resistance.

- **Origin:** launch point.
- **+x:** forward horizontally; **+y:** upward.
- **v-zero:** launch speed; **theta:** launch angle.
- **u:** constant horizontal velocity; **w:** initial upward velocity.

\\[
u=v_0\\cos\\theta
\\]

\\[
w=v_0\\sin\\theta
\\]

\\[
\\tan\\theta=\\frac{w}{u}
\\]

At a height y, the vertical speed follows:

\\[
v_y^2=w^2-2gy
\\]

The total speed combines the perpendicular components:

\\[
v=\\sqrt{u^2+v_y^2}
\\]

**Step-by-step solution**

1. **Relate the greatest height H to the initial vertical component.** At the top, the vertical velocity is zero.

\\[
0=w^2-2gH
\\]

\\[
H=\\frac{w^2}{2g}
\\]

2. **Calculate the squared vertical speed at half that height.**

\\[
v_{y,\\mathrm{half}}^2=w^2-2g\\left(\\frac H2\\right)
\\]

\\[
v_{y,\\mathrm{half}}^2=w^2-gH
\\]

Substitute the expression for H.

\\[
v_{y,\\mathrm{half}}^2=w^2-g\\left(\\frac{w^2}{2g}\\right)
\\]

\\[
v_{y,\\mathrm{half}}^2=w^2-\\frac{w^2}{2}=\\frac{w^2}{2}
\\]

The vertical velocity is positive while rising and negative while falling. Its square, and hence the total speed at this height, is the same on both branches.

3. **Write the two total speeds.** At the top there is only the horizontal component.

\\[
v_{\\mathrm{top}}=u
\\]

At half the greatest height, use both components.

\\[
v_{\\mathrm{half}}=\\sqrt{u^2+\\frac{w^2}{2}}
\\]

4. **Use the sentence “the speed at the top is one-half the speed at half height.”**

\\[
u=\\frac12\\sqrt{u^2+\\frac{w^2}{2}}
\\]

Multiply both sides by 2.

\\[
2u=\\sqrt{u^2+\\frac{w^2}{2}}
\\]

Square both sides.

\\[
4u^2=u^2+\\frac{w^2}{2}
\\]

Subtract the single squared horizontal component.

\\[
3u^2=\\frac{w^2}{2}
\\]

Multiply by 2, then divide by the nonzero squared horizontal component.

\\[
6u^2=w^2
\\]

\\[
\\left(\\frac wu\\right)^2=6
\\]

5. **Convert the component ratio into the launch angle.** For an upward forward launch, both initial components are positive, so take the positive square root.

\\[
\\frac wu=\\sqrt6
\\]

\\[
\\tan\\theta=\\sqrt6
\\]

\\[
\\boxed{\\theta=\\tan^{-1}(\\sqrt6)=67.8^\\circ}
\\]

**Use this method again**

Given height → vertical speed → combine with constant horizontal speed → apply the total-speed condition.

**Check**

Our component relation makes the squared half-height speed equal to four times the squared horizontal component.

\\[
v_{\\mathrm{half}}=\\sqrt{u^2+\\frac{6u^2}{2}}=\\sqrt{4u^2}=2u
\\]

The top speed is u, exactly one-half this value, as required.
:::

:::mcq
id: phys-ch4-p23
title: Serway/Jewett · Problem 4.23
reference: [Serway/Jewett 9e · Problem 4.23](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the original problem?
- [ ] a | Clears by 3.94 m while falling
- [x] b | Clears by 0.889 m while falling
- [ ] c | Falls short by 0.889 m while rising
explanation: The flight time to x=36 m is \\(t=36/(20\\cos53°)=2.991\\) s. Its height is \\(20\\sin53°\\,t-4.9t^2=3.939\\) m, so the clearance is 0.889 m. Vertical velocity is \\(20\\sin53°-9.8t=-13.34\\) m/s, so it is falling.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 4.23 — complete original problem](assets/lessons/physics/recommended/ch4-p23.webp)
solution:
**Plan — we are going to…**

1. Resolve the kick into horizontal and vertical velocity components.
2. Find the time when the ball is directly over the crossbar's position.
3. Find its height at that time and subtract the crossbar height.
4. Calculate its vertical velocity there to decide whether it is rising or falling.

**The trick**

**Clearance = ball height − crossbar height.** Then check the sign of vertical velocity: positive = rising; negative = falling.

**What you need to know**

**Axes:** origin at kick; +x toward goal; +y upward.

**Model:** no air resistance; gravity = 9.80 m/s² downward.

\\[
v_0=20.0\\ \\mathrm{m/s},\\qquad\\theta=53.0^\\circ
\\]

\\[
x_{\\mathrm{goal}}=36.0\\ \\mathrm{m},\\qquad h_{\\mathrm{bar}}=3.05\\ \\mathrm{m}
\\]

Horizontal velocity stays constant. Vertical velocity changes because of gravity.

\\[
x=v_{0x}t
\\]

\\[
y=v_{0y}t-\\frac12gt^2
\\]

\\[
v_y=v_{0y}-gt
\\]

Use **degree mode**. Round only the final answers.

**Step-by-step solution**

1. **Find the launch components.** The horizontal side is adjacent to the launch angle, so use cosine. The vertical side is opposite, so use sine.

\\[
v_{0x}=20.0\\cos53.0^\\circ=12.0363\\ \\mathrm{m/s}
\\]

\\[
v_{0y}=20.0\\sin53.0^\\circ=15.9727\\ \\mathrm{m/s}
\\]

2. **Use the horizontal distance to find the time at the goal.**

\\[
36.0=12.0363t
\\]

\\[
t_{\\mathrm{goal}}=\\frac{36.0}{12.0363}=2.99095\\ \\mathrm{s}
\\]

3. **Part (a): use this same time to find the ball's height.** The initial height is zero.

\\[
y_{\\mathrm{goal}}=15.9727(2.99095)-\\frac12(9.80)(2.99095)^2
\\]

\\[
y_{\\mathrm{goal}}\\approx47.7736-43.8344=3.9392\\ \\mathrm{m}
\\]

4. **Subtract the crossbar height.**

\\[
\\text{clearance}=y_{\\mathrm{goal}}-h_{\\mathrm{bar}}
\\]

\\[
\\text{clearance}=3.9392-3.05=0.8892\\ \\mathrm{m}
\\]

\\[
\\boxed{\\text{The ball clears the crossbar by }0.889\\ \\mathrm{m}}
\\]

The positive result means it clears; a negative result would mean it falls short.

5. **Part (b): calculate the vertical velocity at the goal.**

\\[
v_y=15.9727-9.80(2.99095)
\\]

\\[
v_y=15.9727-29.3113=-13.34\\ \\mathrm{m/s}
\\]

Positive y is upward, so negative vertical velocity means the ball is **falling** when it reaches the crossbar.

**Use this method again**

Goal distance → flight time → ball height − bar height. Use vertical velocity's sign for rising/falling.

**Check**

The time to the highest point is found by setting vertical velocity to zero.

\\[
t_{\\mathrm{top}}=\\frac{15.9727}{9.80}=1.63\\ \\mathrm{s}
\\]

The ball reaches the goal later, at 2.99 seconds, confirming that it is descending.
:::

:::mcq
id: phys-ch4-p25
title: Serway/Jewett · Problem 4.25
reference: [Serway/Jewett 9e · Problem 4.25](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the original problem?
- [ ] a | Launch speed 10.9 m/s; clears wall by 1.13 m; lands 2.79 m beyond wall
- [ ] b | Launch speed 18.1 m/s; clears wall by 8.13 m; lands 26.8 m beyond wall
- [x] c | Launch speed 18.1 m/s; clears wall by 1.13 m; lands 2.79 m beyond wall
explanation: \\(v_x=24/2.20=10.909\\) m/s and \\(v_i=v_x/\\cos53°=18.127\\) m/s. At the wall, y=8.133 m, which is 1.133 m above its 7.00 m top. Solve \\(6=v_i\\sin53°\\,t-4.9t^2\\) for the later (descending) time, then subtract 24 m from \\(v_xt\\), giving 2.791 m onto the roof.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 4.25 — complete original problem](assets/lessons/physics/recommended/ch4-p25.webp)
solution:
**Plan — we are going to…**

1. Use the distance and time to the wall to find horizontal velocity, then the full launch speed.
2. Find the ball's height at the wall and subtract the wall-top height.
3. Find when the descending ball reaches roof level.
4. Convert that landing time into a horizontal position, then subtract the distance to the wall.

**The trick**

- **Roof height:** 6.00 m above street.
- **Wall height:** 7.00 m above street.
- **Requested distance:** landing point measured from the wall.

The ball passes roof height twice. Choose the **later, descending** time for landing.

**What you need to know**

**Axes:** origin at street-level launch; +x toward school; +y upward.

**Model:** no air resistance; gravity downward.

\\[
x_{\\mathrm{wall}}=24.0\\ \\mathrm{m}
\\]

\\[
t_{\\mathrm{wall}}=2.20\\ \\mathrm{s}
\\]

\\[
y_{\\mathrm{roof}}=6.00\\ \\mathrm{m},\\qquad y_{\\mathrm{wall\\ top}}=7.00\\ \\mathrm{m}
\\]

**Launch angle:** 53.0°. **Horizontal velocity:** constant. **Vertical acceleration:** downward.

\\[
v_x=v_0\\cos53.0^\\circ
\\]

\\[
v_{0y}=v_0\\sin53.0^\\circ
\\]

\\[
x(t)=v_xt
\\]

\\[
y(t)=v_{0y}t-4.90t^2
\\]

**Step-by-step solution**

1. **Part (a): calculate horizontal velocity from the known trip to the wall.**

\\[
v_x=\\frac{x_{\\mathrm{wall}}}{t_{\\mathrm{wall}}}=\\frac{24.0}{2.20}=10.9091\\ \\mathrm{m/s}
\\]

2. **Convert the horizontal component into the full launch speed.** Divide by the cosine of the launch angle.

\\[
v_x=v_0\\cos53.0^\\circ
\\]

\\[
v_0=\\frac{v_x}{\\cos53.0^\\circ}=\\frac{10.9091}{0.601815}
\\]

\\[
\\boxed{v_0=18.1\\ \\mathrm{m/s}}
\\]

Keep the more precise value 18.127 m/s for the next calculations.

3. **Calculate the initial vertical component.**

\\[
v_{0y}=18.127\\sin53.0^\\circ=14.4769\\ \\mathrm{m/s}
\\]

4. **Part (b): find the height at the wall using 2.20 seconds.**

\\[
y(2.20)=14.4769(2.20)-4.90(2.20)^2
\\]

\\[
y(2.20)=31.8491-23.716=8.1331\\ \\mathrm{m}
\\]

The clearance is measured above the 7.00 m wall top, not above the 6.00 m roof.

\\[
\\text{wall clearance}=8.1331-7.00
\\]

\\[
\\boxed{\\text{wall clearance}=1.13\\ \\mathrm{m}}
\\]

5. **Part (c): set the vertical position equal to the roof height.** The ball lands on the horizontal roof when its height is 6.00 m while it is beyond the wall and descending.

\\[
6.00=14.4769t-4.90t^2
\\]

Move all terms to one side with a positive squared-time coefficient.

\\[
4.90t^2-14.4769t+6.00=0
\\]

6. **Solve the quadratic explicitly.** For a quadratic with coefficients A, B and C:

\\[
t=\\frac{-B\\pm\\sqrt{B^2-4AC}}{2A}
\\]

Here the coefficients are:

\\[
A=4.90,\\qquad B=-14.4769,\\qquad C=6.00
\\]

Substitute them, using the unrounded vertical velocity in the calculation.

\\[
t=\\frac{14.4769\\pm\\sqrt{(14.4769)^2-4(4.90)(6.00)}}{9.80}
\\]

\\[
t\\approx\\frac{14.4769\\pm\\sqrt{91.9793}}{9.80}
\\]

\\[
t\\approx\\frac{14.4769\\pm9.59058}{9.80}
\\]

\\[
t_{\\mathrm{early}}=0.49860\\ \\mathrm{s}
\\]

\\[
t_{\\mathrm{late}}=2.45586\\ \\mathrm{s}
\\]

The early time is before the ball reaches the wall at 2.20 seconds. Use the later time for the landing.

7. **Find the landing position measured from the launch point.**

\\[
x_{\\mathrm{landing}}=v_xt_{\\mathrm{late}}
\\]

\\[
x_{\\mathrm{landing}}=10.9091(2.45586)=26.7912\\ \\mathrm{m}
\\]

8. **Subtract the wall's horizontal position.**

\\[
d_{\\mathrm{onto\\ roof}}=26.7912-24.0
\\]

\\[
\\boxed{d_{\\mathrm{onto\\ roof}}=2.79\\ \\mathrm{m}}
\\]

**Use this method again**

Label surface heights → find launch velocity → solve the target-height quadratic → interpret both roots → measure from the requested reference.

**Check**

The landing time is later than the time at the wall, and its position is beyond the wall. Its vertical velocity is negative:

\\[
v_y(2.45586)=14.4769-9.80(2.45586)\\approx-9.59\\ \\mathrm{m/s}
\\]

So the chosen root does describe a descending landing on the roof.
:::

:::mcq
id: phys-ch4-p29
title: Serway/Jewett · Problem 4.29
reference: [Serway/Jewett 9e · Problem 4.29](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: What are the time and velocity of impact?
- [ ] a | Strikes after 3.19 s at 18.0 m/s, horizontally
- [x] b | Strikes after 3.19 s at 36.1 m/s, 60.1° below horizontal
- [ ] c | Strikes after 5.10 s at 53.2 m/s, 70.2° below horizontal
explanation: Using the origin at the water directly below the cliff: (a) \\((x_0,y_0)=(0,h)\\). (b) \\((v_{x0},v_{y0})=(v_i,0)\\). (c) Vertical motion has constant acceleration −g. (d) Horizontal motion has constant velocity. (e) \\(v_x=v_i,\\ v_y=-gt\\). (f) \\(x=v_it,\\ y=h-gt^2/2\\). (g) \\(t=\\sqrt{2h/g}=3.19\\) s. (h) \\(v=\\sqrt{v_i^2+2gh}=36.1\\) m/s, at \\(\\tan^{-1}(\\sqrt{2gh}/v_i)=60.1°\\) below horizontal.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 4.29 — complete original problem](assets/lessons/physics/recommended/ch4-p29.webp)
solution:
**Plan — we are going to…**

1. Read the origin and axis directions from the figure.
2. Separate the horizontal and vertical launch conditions.
3. Write a velocity equation and a position equation for each axis.
4. Use the water's height to find impact time.
5. Use that time to find the impact velocity components, then combine them into speed and angle.

**The trick**

**Horizontal launch → initial vertical velocity = 0.** Gravity then creates downward velocity. Find flight time from the vertical fall; use that same time for both impact components.

**What you need to know**

**Use the figure's axes:**

- **Origin:** water level below release.
- **+x:** right; **+y:** upward.
- **Cliff top:** positive height.
- **Gravity:** negative y direction.

\\[
h=50.0\\ \\mathrm{m},\\qquad v_i=18.0\\ \\mathrm{m/s},\\qquad g=9.80\\ \\mathrm{m/s^2}
\\]

For each axis with constant acceleration:

\\[
v=v_0+at
\\]

\\[
r=r_0+v_0t+\\frac12at^2
\\]

A zero acceleration on an axis means the velocity on that axis stays constant. A velocity vector's length gives speed; its component ratio gives direction.

**Step-by-step solution**

1. **Part (a): state the initial position.** The stone begins directly above the origin, 50.0 m up.

\\[
\\boxed{x_0=0,\\qquad y_0=h=50.0\\ \\mathrm{m}}
\\]

2. **Part (b): state the initial velocity components.** “Thrown horizontally” means the full initial speed is in the positive x direction, with no upward or downward launch component.

\\[
\\boxed{v_{0x}=v_i=18.0\\ \\mathrm{m/s},\\qquad v_{0y}=0}
\\]

3. **Part (c): choose the vertical analysis model.** Gravity supplies constant downward acceleration, so use the **particle under constant acceleration** model vertically.

\\[
\\boxed{a_y=-g}
\\]

The stone is in free fall after release; free fall does not require zero initial horizontal speed.

4. **Part (d): choose the horizontal analysis model.** With air resistance neglected there is no horizontal acceleration, so use the **particle under constant velocity** model horizontally.

\\[
\\boxed{a_x=0}
\\]

5. **Part (e): write the velocity components at any time.** Substitute the initial values and accelerations into the velocity equation.

\\[
v_x(t)=v_{0x}+a_xt=v_i+0t
\\]

\\[
\\boxed{v_x(t)=v_i}
\\]

\\[
v_y(t)=v_{0y}+a_yt=0-gt
\\]

\\[
\\boxed{v_y(t)=-gt}
\\]

6. **Part (f): write the position components at any time.**

\\[
x(t)=x_0+v_{0x}t+\\frac12a_xt^2
\\]

\\[
x(t)=0+v_it+0
\\]

\\[
\\boxed{x(t)=v_it}
\\]

\\[
y(t)=y_0+v_{0y}t+\\frac12a_yt^2
\\]

\\[
y(t)=h+0t-\\frac12gt^2
\\]

\\[
\\boxed{y(t)=h-\\frac12gt^2}
\\]

7. **Part (g): put the stone at water level to find impact time.** Water level is zero on our y axis.

\\[
0=h-\\frac12gt^2
\\]

Move the gravitational drop to the left and multiply by 2.

\\[
\\frac12gt^2=h
\\]

\\[
gt^2=2h
\\]

Divide by gravity and take the positive square root because impact occurs after release.

\\[
t=\\sqrt{\\frac{2h}{g}}
\\]

\\[
t=\\sqrt{\\frac{2(50.0)}{9.80}}=\\sqrt{10.2041}
\\]

\\[
\\boxed{t_{\\mathrm{impact}}=3.19\\ \\mathrm{s}}
\\]

8. **Part (h): calculate both impact velocity components using that time.**

\\[
v_{x,\\mathrm{impact}}=18.0\\ \\mathrm{m/s}
\\]

\\[
v_{y,\\mathrm{impact}}=-9.80(3.19438)=-31.3\\ \\mathrm{m/s}
\\]

The impact velocity points right and downward.

\\[
\\vec v_{\\mathrm{impact}}=(18.0\\hat i-31.3\\hat j)\\ \\mathrm{m/s}
\\]

9. **Find the impact speed from the perpendicular components.**

\\[
v_{\\mathrm{impact}}=\\sqrt{v_x^2+v_y^2}
\\]

\\[
v_{\\mathrm{impact}}=\\sqrt{(18.0)^2+(31.305)^2}
\\]

\\[
v_{\\mathrm{impact}}=\\sqrt{324+980}=\\sqrt{1304}
\\]

\\[
\\boxed{v_{\\mathrm{impact}}=36.1\\ \\mathrm{m/s}}
\\]

10. **Find the angle below the horizontal.** Use the magnitude of the downward component for the positive reference angle, then state the direction in words.

\\[
\\alpha=\\tan^{-1}\\!\\left(\\frac{|v_y|}{v_x}\\right)
\\]

\\[
\\alpha=\\tan^{-1}\\!\\left(\\frac{31.305}{18.0}\\right)
\\]

\\[
\\boxed{\\alpha=60.1^\\circ\\ \\text{below horizontal}}
\\]

**Use this method again**

Vertical fall → time → impact components → speed/direction. Keep the figure's origin and height signs.

**Check**

The fall time depends on height and gravity, not on the horizontal launch speed. Impact speed is greater than 18.0 m/s because the stone has gained a downward component. The impact angle is downward, agreeing with the negative vertical velocity.
:::

:::mcq
id: phys-ch4-p41
title: Serway/Jewett · Problem 4.41
reference: [Serway/Jewett 9e · Problem 4.41](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the original problem?
- [ ] a | 0.741 m/s², directed purely backward
- [x] b | 1.48 m/s², directed 29.9° backward from the inward radial direction
- [ ] c | 1.29 m/s², directed purely inward
explanation: \\(a_t=[(50-90)/3.6]/15=-0.74074\\) m/s². At 50 km/h, \\(a_r=(50/3.6)^2/150=1.2860\\) m/s² inward. The perpendicular components give magnitude 1.4841 m/s² and \\(\\tan^{-1}(|a_t|/a_r)=29.94°\\) toward the backward tangent from inward.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 4.41 — complete original problem](assets/lessons/physics/recommended/ch4-p41.webp)
solution:
**Plan — we are going to…**

1. Convert both train speeds to metres per second.
2. Find the tangential acceleration from the change in speed.
3. Find the inward radial acceleration using the speed at the requested instant.
4. Combine the perpendicular components to obtain total acceleration and its direction.

**The trick**

**Turning → inward acceleration. Slowing → backward acceleration.** The train has both. Combine these perpendicular components to find the total.

**What you need to know**

- **Tangential:** along the path; forward is positive.
- **Radial:** inward, toward the curve's center.

These directions are perpendicular.

**Given:** radius = 150 m; time = 15.0 s; constant slowing rate.

**km/h → m/s:** divide by 3.6 (1000 m per km; 3600 s per hour).

\\[
v_{\\mathrm{m/s}}=v_{\\mathrm{km/h}}\\frac{1000}{3600}=\\frac{v_{\\mathrm{km/h}}}{3.6}
\\]

Tangential acceleration is the rate of change of speed, with a negative sign when slowing.

\\[
a_t=\\frac{v_f-v_i}{\\Delta t}
\\]

Radial acceleration is always inward on a curved path.

\\[
a_r=\\frac{v^2}{r}
\\]

**Step-by-step solution**

1. **Convert the initial speed.**

\\[
v_i=\\frac{90.0}{3.6}=25.0\\ \\mathrm{m/s}
\\]

2. **Convert the speed at the requested instant.**

\\[
v_f=\\frac{50.0}{3.6}=13.8889\\ \\mathrm{m/s}
\\]

3. **Calculate the tangential acceleration.** Because the slowing rate is constant, the change over the 15.0-second interval gives its instantaneous tangential acceleration too.

\\[
a_t=\\frac{13.8889-25.0}{15.0}
\\]

\\[
a_t=\\frac{-11.1111}{15.0}=-0.740741\\ \\mathrm{m/s^2}
\\]

The negative sign means **0.741 m/s squared backward along the tangent**.

4. **Calculate the radial acceleration at 50.0 km/h.** Use the speed at this instant, not the initial speed or the average speed.

\\[
a_r=\\frac{(13.8889)^2}{150}
\\]

\\[
a_r=\\frac{192.901}{150}=1.28601\\ \\mathrm{m/s^2}
\\]

This is **1.29 m/s squared toward the curve's centre**.

5. **Add the two acceleration vectors using their perpendicular geometry.** Draw one arrow inward and one arrow backward from its tip; the diagonal is the total acceleration.

\\[
a=\\sqrt{a_r^2+a_t^2}
\\]

\\[
a=\\sqrt{(1.28601)^2+(-0.740741)^2}
\\]

\\[
a=\\sqrt{1.65382+0.548697}
\\]

\\[
\\boxed{a=1.48\\ \\mathrm{m/s^2}}
\\]

6. **Find the direction measured from the inward radial direction toward the backward tangent.**

\\[
\\alpha=\\tan^{-1}\\!\\left(\\frac{|a_t|}{a_r}\\right)
\\]

\\[
\\alpha=\\tan^{-1}\\!\\left(\\frac{0.740741}{1.28601}\\right)
\\]

\\[
\\boxed{\\alpha=29.9^\\circ\\ \\text{backward from inward}}
\\]

The total acceleration points inward and backward. The diagram does not specify a compass heading, so describe the answer using these local directions.

**Use this method again**

Speed change → tangential acceleration. Current speed/radius → radial acceleration. Combine perpendicular components with Pythagoras.

**Check**

The total magnitude 1.48 m/s squared is larger than either component, but smaller than their direct sum. The backward component agrees with slowing; the inward component agrees with turning.
:::

:::mcq
id: phys-ch4-p42
title: Serway/Jewett · Problem 4.42
reference: [Serway/Jewett 9e · Problem 4.42](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the original problem?
- [x] a | Radial acceleration 29.7 m/s²; speed 6.67 m/s; velocity (5.33, 4.01) m/s
- [ ] b | Radial acceleration 5.86 m/s²; speed 2.97 m/s; velocity (2.37, 1.78) m/s
- [ ] c | Radial acceleration 30.2 m/s²; speed 6.73 m/s; velocity (−5.38, −4.04) m/s
explanation: At \\(\\theta=36.9°\\), the inward unit vector is \\((-\\sin\\theta,\\cos\\theta)\\), and the forward tangent is \\((\\cos\\theta,\\sin\\theta)\\). Projecting the given acceleration gives \\(a_r=29.663\\) and \\(a_t=-5.864\\) m/s². For the vector sketch draw radial acceleration up-left and tangential acceleration down-left; their sum is the stated \\((-22.5,20.2)\\). The radial vector is approximately (−17.8,23.7), and the tangential vector (−4.69,−3.53). Speed \\(\\sqrt{a_rR}=6.670\\) m/s, and the forward tangent gives velocity (5.334,4.005) m/s.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 4.42 — complete original problem](assets/lessons/physics/recommended/ch4-p42.webp)
solution:
**Plan — we are going to…**

1. Draw where the ball is and identify its inward and forward directions.
2. Split the given total acceleration along those two perpendicular directions.
3. Use the inward acceleration and rope length to calculate speed.
4. Point that speed along the forward tangent to obtain the velocity components.

**The trick**

**x/y directions are not radial/tangential directions.** Project acceleration along the tilted rope first. Use only that inward component—not total acceleration—to find speed.

**What you need to know**

**Axes:** center as origin; +x right; +y up.

**Radius:** rope length. At the stated instant:

\\[
r=1.50\\ \\mathrm{m}
\\]

\\[
\\theta=36.9^\\circ\\ \\text{past the bottom, counterclockwise}
\\]

\\[
\\vec a=(-22.5\\hat i+20.2\\hat j)\\ \\mathrm{m/s^2}
\\]

**At the lower-right position:**

- **Inward:** up-left, toward center.
- **Forward tangent:** up-right, perpendicular to rope.

**Unit vector** = direction arrow of length 1. Here:

\\[
\\hat n=(-\\sin\\theta,\\ \\cos\\theta)
\\]

\\[
\\hat t=(\\cos\\theta,\\ \\sin\\theta)
\\]

**Sign check:** inward is (−x, +y); forward is (+x, +y). At the bottom, these become straight up and right.

**Projection along a unit direction:** multiply matching components, then add. This is a dot product.

\\[
a_r=\\vec a\\cdot\\hat n=a_xn_x+a_yn_y
\\]

\\[
a_t=\\vec a\\cdot\\hat t=a_xt_x+a_yt_y
\\]

The inward radial acceleration relates to speed by:

\\[
a_r=\\frac{v^2}{r}
\\]

**Step-by-step solution**

1. **Part (a): identify the two directions numerically.** Use degree mode.

\\[
\\sin36.9^\\circ=0.600420
\\]

\\[
\\cos36.9^\\circ=0.799685
\\]

\\[
\\hat n=(-0.600420,\\ 0.799685)
\\]

\\[
\\hat t=(0.799685,\\ 0.600420)
\\]

We will calculate the two components before completing the acceleration sketch.

2. **Part (b): project total acceleration along inward.** The negative x component of total acceleration contributes positively because inward also has a negative x component.

\\[
a_r=(-22.5)(-0.600420)+(20.2)(0.799685)
\\]

\\[
a_r=13.5095+16.1536
\\]

\\[
\\boxed{a_r=29.7\\ \\mathrm{m/s^2}\\ \\text{inward}}
\\]

3. **Find the tangential component for the sketch.**

\\[
a_t=(-22.5)(0.799685)+(20.2)(0.600420)
\\]

\\[
a_t=-17.9929+12.1285
\\]

\\[
a_t=-5.8644\\ \\mathrm{m/s^2}
\\]

The negative sign means the tangential acceleration points opposite the forward tangent: **down-left**. The ball is moving up-right but slowing down at this instant.

4. **Part (a), sketch from the ball:**

- **Inward:** up-left.
- **Backward tangent:** smaller arrow down-left.
- **Sum:** up-left; the leftward components add.

\`\`\`text
             inward radial acceleration
                        ↖
                         \\
        total a     ↖     ● ball   ↗ forward velocity
                         /
                        ↙
             backward tangential acceleration
\`\`\`

For a numerical sketch, the component vectors in x–y coordinates are approximately:

\\[
\\vec a_r=a_r\\hat n\\approx(-17.8\\hat i+23.7\\hat j)\\ \\mathrm{m/s^2}
\\]

\\[
\\vec a_t=a_t\\hat t\\approx(-4.69\\hat i-3.52\\hat j)\\ \\mathrm{m/s^2}
\\]

These are vector components along the rope and tangent, not additional accelerations beyond the given total. Add their arrows to recover that total.

5. **Part (c): solve the radial-acceleration equation for speed.** Multiply by radius, then take the positive square root.

\\[
a_r=\\frac{v^2}{r}
\\]

\\[
v^2=a_rr
\\]

\\[
v=\\sqrt{a_rr}
\\]

\\[
v=\\sqrt{29.6631(1.50)}=\\sqrt{44.4946}
\\]

\\[
\\boxed{v=6.67\\ \\mathrm{m/s}}
\\]

6. **Convert speed into the velocity vector.** Velocity follows the forward tangent, not the inward radial direction. Multiply the speed by each component of the forward unit vector.

\\[
\\vec v=v\\hat t
\\]

\\[
v_x=6.67043\\cos36.9^\\circ=5.33424\\ \\mathrm{m/s}
\\]

\\[
v_y=6.67043\\sin36.9^\\circ=4.00506\\ \\mathrm{m/s}
\\]

\\[
\\boxed{\\vec v=(5.33\\hat i+4.01\\hat j)\\ \\mathrm{m/s}}
\\]

The velocity points **36.9 degrees above positive x**.

**Use this method again**

Find inward/tangent directions → project acceleration → use inward component for speed → put velocity along the forward tangent.

**Check**

The component vectors add back to approximately negative 22.5 horizontally and positive 20.2 vertically, matching the given acceleration. The velocity is perpendicular to the inward direction. A negative tangential component agrees with slowing even though the ball still moves counterclockwise.
:::

:::mcq
id: phys-ch4-p43
title: Serway/Jewett · Problem 4.43
reference: [Serway/Jewett 9e · Problem 4.43](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the original problem?
- [ ] a | Both are possible
- [ ] b | Neither is possible
- [x] c | 6.00 m/s² is possible; 4.00 m/s² is impossible
explanation: The radial acceleration is fixed at \\(v^2/r=4.50\\) m/s². Total magnitude cannot be smaller than that. A magnitude of 6.00 is possible with tangential magnitude \\(\\sqrt{6^2-4.5^2}=3.97\\) m/s². A magnitude of 4.00 is impossible.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 4.43 — complete original problem](assets/lessons/physics/recommended/ch4-p43.webp)
solution:
**Plan — we are going to…**

1. Calculate the inward acceleration required by the stated speed and curve radius.
2. Compare each proposed total acceleration with that required minimum.
3. For a possible total, calculate the tangential component that makes it work.

**The trick**

**Speed and radius fix inward acceleration only.** Changing speed adds a perpendicular tangential component. Total acceleration can be larger than the inward component, never smaller.

**What you need to know**

- **Radial:** inward toward the local center of curvature.
- **Tangential:** along the path; perpendicular to radial.
- **Radius of curvature:** radius of the circle matching the curve at this instant. The whole path need not be circular.

Given:

\\[
v=3.00\\ \\mathrm{m/s},\\qquad r=2.00\\ \\mathrm{m}
\\]

The required radial acceleration is:

\\[
a_r=\\frac{v^2}{r}
\\]

Tangential acceleration changes speed. It is perpendicular to the radial acceleration, so Pythagoras gives the total magnitude.

\\[
a^2=a_r^2+a_t^2
\\]

A real squared component cannot be negative. Therefore the smallest possible total magnitude is the radial magnitude, when the tangential component is zero.

**Step-by-step solution**

1. **Calculate the radial acceleration required at this instant.**

\\[
a_r=\\frac{(3.00)^2}{2.00}
\\]

\\[
a_r=\\frac{9.00}{2.00}
\\]

\\[
\\boxed{a_r=4.50\\ \\mathrm{m/s^2}}
\\]

2. **Part (a): test a total magnitude of 6.00 m/s squared.** This is larger than the radial component, so a tangential component may make it possible. Rearrange the perpendicular-component equation.

\\[
a_t^2=a^2-a_r^2
\\]

\\[
a_t^2=(6.00)^2-(4.50)^2
\\]

\\[
a_t^2=36.00-20.25=15.75
\\]

Take the square root for the component's magnitude.

\\[
|a_t|=\\sqrt{15.75}=3.97\\ \\mathrm{m/s^2}
\\]

**Yes, 6.00 m/s² is possible:**

- **Inward component:** 4.50 m/s².
- **Tangential magnitude:** 3.97 m/s².

Forward tangent means speeding up; backward means slowing. Either gives the same total magnitude.

3. **Part (b): test a total magnitude of 4.00 m/s squared.** It is already smaller than the required inward component. The algebra shows the same impossibility.

\\[
a_t^2=(4.00)^2-(4.50)^2
\\]

\\[
a_t^2=16.00-20.25=-4.25
\\]

A real tangential acceleration cannot have a negative square. **No**, a total acceleration of 4.00 m/s squared is impossible at this speed and curvature radius.

**Use this method again**

Find inward acceleration first. A smaller total is impossible; a larger total requires a tangential component found by Pythagoras.

**Check**

Combining the feasible components gives:

\\[
a=\\sqrt{(4.50)^2+(\\sqrt{15.75})^2}=\\sqrt{20.25+15.75}=6.00\\ \\mathrm{m/s^2}
\\]

If speed were momentarily unchanging, the tangential component would be zero and the total would be exactly 4.50 m/s squared, the minimum.
:::

:::mcq
id: phys-ch4-p44
title: Serway/Jewett · Problem 4.44
reference: [Serway/Jewett 9e · Problem 4.44](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the original problem?
- [ ] a | 180 km/h, 45.0° north of west
- [x] b | 153 km/h, 11.3° north of west
- [ ] c | 120 km/h due west
explanation: Vector addition gives ground velocity \\((-150,+30)\\) km/h. Its magnitude is \\(\\sqrt{150^2+30^2}=153\\) km/h and direction is \\(\\tan^{-1}(30/150)=11.3°\\) north of west.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 4.44 — complete original problem](assets/lessons/physics/recommended/ch4-p44.webp)
solution:
**Plan — we are going to…**

1. Name the three reference frames: plane, air, and ground.
2. Add the westward plane velocity and the northward wind velocity as perpendicular components.
3. Find the length and direction of the resulting velocity arrow.

**The trick**

**Heading** = direction through air. **Ground track** = direction after adding wind. A west-pointing plane drifts north with the air.

**What you need to know**

- **P** = plane; **A** = air; **G** = ground.
- **P/G** = plane relative to ground.

Add velocities through the air frame:

\\[
\\vec v_{P/G}=\\vec v_{P/A}+\\vec v_{A/G}.
\\]

**Axes:** +x east; +y north; west negative.

**Speed:** Pythagoras. **Direction:** tangent ratio.

**Step-by-step solution**

1. **Write the plane's velocity relative to the air.** It is 150 km/h west and has no northward component:

\\[
\\vec v_{P/A}=(-150,\\ 0)\\ \\mathrm{km/h}.
\\]

2. **Write the wind's velocity relative to the ground.** It is 30.0 km/h north:

\\[
\\vec v_{A/G}=(0,\\ 30.0)\\ \\mathrm{km/h}.
\\]

3. **Add matching components.** Add horizontal to horizontal and vertical to vertical:

\\[
v_{P/G,x}=-150+0=-150\\ \\mathrm{km/h},
\\]

\\[
v_{P/G,y}=0+30.0=30.0\\ \\mathrm{km/h}.
\\]

So the complete ground velocity, in component form, is:

\\[
\\boxed{\\vec v_{P/G}=(-150\\hat i+30.0\\hat j)\\ \\mathrm{km/h}}.
\\]

4. **Find its speed.** The two component arrows make a right triangle:

\\[
v_{P/G}=\\sqrt{(-150)^2+(30.0)^2}
\\]

\\[
=\\sqrt{22500+900}=\\sqrt{23400}
\\]

\\[
\\boxed{v_{P/G}=153\\ \\mathrm{km/h}}.
\\]

5. **Find the direction.** Measure the small angle northward from west. The northward component is opposite this angle; the westward component is adjacent:

\\[
\\tan\\alpha=\\frac{30.0}{150}=0.200.
\\]

\\[
\\alpha=\\tan^{-1}(0.200)=11.3^\\circ.
\\]

The answer is therefore **153 km/h, 11.3° north of west**.

**Use this method again**

Label frames → add signed components → calculate ground speed and direction.

**Check**

The final arrow must point west and north. Its magnitude is slightly larger than 150 km/h because the wind is perpendicular to the airspeed. Adding the two speeds as ordinary numbers would incorrectly give 180 km/h.
:::

:::mcq
id: phys-ch4-p45
title: Serway/Jewett · Problem 4.45
reference: [Serway/Jewett 9e · Problem 4.45](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the original problem?
- [x] a | Headwind 1.26 h; tailwind 1.13 h; crosswind 1.19 h
- [ ] b | Headwind 1.13 h; tailwind 1.26 h; crosswind 1.19 h
- [ ] c | Headwind 1.26 h; tailwind 1.13 h; crosswind 1.26 h
explanation: For the headwind, ground speed is 630−35=595 km/h and t=750/595=1.2605 h. With tailwind t=750/665=1.1278 h. For the eastward crosswind, point the plane slightly west of north so its westward airspeed component is 35 km/h. Northward ground speed is \\(\\sqrt{630^2-35^2}\\), giving 1.1923 h.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 4.45 — complete original problem](assets/lessons/physics/recommended/ch4-p45.webp)
solution:
**Plan — we are going to…**

1. Find the plane's speed over the ground in each wind.
2. For the crosswind, first cancel the eastward drift so the plane actually reaches the city due north.
3. Divide the same 750 km trip distance by each northward ground speed.

**The trick**

**630 km/h is airspeed**, not ground speed. Aim west of north to cancel the eastward crosswind; pointing north would miss the city.

**What you need to know**

- **P** = plane; **A** = air; **G** = ground.
- **+x** = east; **+y** = north.
- **Units:** km and km/h give time in hours.

\\[
\\vec v_{P/G}=\\vec v_{P/A}+\\vec v_{A/G}.
\\]

For constant speed along a straight route:

\\[
t=\\frac{\\text{distance}}{\\text{ground speed along the route}}.
\\]

**Step-by-step solution**

1. **Part (a): headwind.** The plane moves north through the air at 630 km/h. The air moves south over the ground at 35.0 km/h, so its y component is negative:

\\[
v_{P/G,y}=630+(-35.0)=595\\ \\mathrm{km/h}.
\\]

Now calculate the trip time:

\\[
t_{\\mathrm{head}}=\\frac{750\\ \\mathrm{km}}{595\\ \\mathrm{km/h}}=1.2605\\ \\mathrm{h}.
\\]

\\[
\\boxed{t_{\\mathrm{head}}=1.26\\ \\mathrm{h}}.
\\]

2. **Part (b): tailwind.** Both the plane and air move north, so their northward components add:

\\[
v_{P/G,y}=630+35.0=665\\ \\mathrm{km/h}.
\\]

\\[
t_{\\mathrm{tail}}=\\frac{750}{665}=1.1278\\ \\mathrm{h}.
\\]

\\[
\\boxed{t_{\\mathrm{tail}}=1.13\\ \\mathrm{h}}.
\\]

3. **Part (c): cancel the crosswind.** The air moves east at 35.0 km/h. The plane's total eastward ground component must be zero if it is to travel due north:

\\[
0=v_{P/A,x}+35.0.
\\]

Subtract 35.0 from both sides:

\\[
v_{P/A,x}=-35.0\\ \\mathrm{km/h}.
\\]

The negative sign means the pilot supplies a westward airspeed component.

4. **Find the remaining northward component.** The total airspeed is still 630 km/h. Its westward and northward components form a right triangle:

\\[
630^2=(-35.0)^2+v_{P/A,y}^2.
\\]

Subtract the squared westward component:

\\[
v_{P/A,y}^2=630^2-35.0^2=396900-1225=395675.
\\]

Take the positive square root because the destination is north:

\\[
v_{P/A,y}=\\sqrt{395675}=629.027\\ \\mathrm{km/h}.
\\]

The wind has no northward component, so this is also the northward ground speed.

5. **Calculate the crosswind time.**

\\[
t_{\\mathrm{cross}}=\\frac{750}{629.027}=1.1923\\ \\mathrm{h}.
\\]

\\[
\\boxed{t_{\\mathrm{cross}}=1.19\\ \\mathrm{h}}.
\\]

For orientation, the required heading is slightly west of north:

\\[
\\alpha=\\sin^{-1}\\left(\\frac{35.0}{630}\\right)=3.18^\\circ.
\\]

**Use this method again**

Choose the required ground direction first. Cancel crosswind sideways before finding forward ground speed. Head/tailwinds change forward speed directly.

**Check**

The tailwind gives the shortest time and the headwind the longest. A crosswind takes slightly longer than the no-wind time:

\\[
t_{\\mathrm{no\\ wind}}=\\frac{750}{630}=1.1905\\ \\mathrm{h}.
\\]
:::

:::mcq
id: phys-ch4-p47
title: Serway/Jewett · Problem 4.47
reference: [Serway/Jewett 9e · Problem 4.47](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the original problem?
- [ ] a | Motorist relative to police: 175 km/h east; reverse relative velocity: 175 km/h west; catch-up time 5.14 s
- [x] b | Motorist relative to police: 15.0 km/h east; reverse relative velocity: 15.0 km/h west; catch-up time 60.0 s
- [ ] c | Both relative velocities: 15.0 km/h west; catch-up time 60.0 s
explanation: With east positive, velocities are −80 and −95 km/h. Subtracting gives +15 km/h for the motorist relative to the police, and −15 for the reverse. Closing speed is 15/3.6 m/s; time is \\(250/(15/3.6)=60.0\\) s.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 4.47 — complete original problem](assets/lessons/physics/recommended/ch4-p47.webp)
solution:
**Plan — we are going to…**

1. Put both road velocities on one signed axis.
2. Subtract the observer's velocity to answer each relative-velocity question.
3. Divide the initial gap by the rate at which that gap closes.

**The trick**

Both cars travel west, but the slower motorist moves **east relative to the faster police car**. Relative velocity describes their changing separation.

**What you need to know**

- **M** = motorist; **P** = police; **G** = ground.
- **+x** = east; westward velocities are negative.

**Relative velocity:** object's ground velocity − observer's ground velocity.

\\[
\\vec v_{M/P}=\\vec v_{M/G}-\\vec v_{P/G}.
\\]

For constant closing speed:

\\[
t=\\frac{\\text{initial gap}}{\\text{closing speed}}.
\\]

**Step-by-step solution**

1. **Record the signed road velocities.** The motorist is being chased westward:

\\[
v_{M/G}=-80.0\\ \\mathrm{km/h},
\\]

\\[
v_{P/G}=-95.0\\ \\mathrm{km/h}.
\\]

2. **Part (a): motorist relative to police.** Subtract the police velocity. Notice that subtracting a negative gives a plus:

\\[
v_{M/P}=(-80.0)-(-95.0)
\\]

\\[
=-80.0+95.0=+15.0\\ \\mathrm{km/h}.
\\]

Positive means east:

\\[
\\boxed{v_{M/P}=15.0\\ \\mathrm{km/h\\ east}}.
\\]

3. **Part (b): police relative to motorist.** Reverse the subtraction:

\\[
v_{P/M}=(-95.0)-(-80.0)
\\]

\\[
=-95.0+80.0=-15.0\\ \\mathrm{km/h}.
\\]

Negative means west:

\\[
\\boxed{v_{P/M}=15.0\\ \\mathrm{km/h\\ west}}.
\\]

4. **Part (c): convert the closing speed.** The gap is 250 m, so convert km/h to m/s before dividing:

\\[
15.0\\ \\frac{\\mathrm{km}}{\\mathrm h}
\\times\\frac{1000\\ \\mathrm m}{1\\ \\mathrm{km}}
\\times\\frac{1\\ \\mathrm h}{3600\\ \\mathrm s}
=4.1667\\ \\mathrm{m/s}.
\\]

The separation decreases by 4.1667 m each second.

5. **Find the time needed to remove the whole gap.**

\\[
250=(4.1667)t.
\\]

Divide both sides by 4.1667:

\\[
\\boxed{t=\\frac{250}{4.1667}=60.0\\ \\mathrm s}.
\\]

**Use this method again**

Choose signs → object velocity − observer velocity → initial gap ÷ closing speed. Add speed magnitudes only for opposite-direction approach.

**Check**

In 60.0 s the police car travels about 1583 m and the motorist 1333 m. The difference is 250 m, exactly the initial gap. Reversing observer and object reverses the relative velocity's sign.
:::

:::mcq
id: phys-ch4-p51
title: Serway/Jewett · Problem 4.51
reference: [Serway/Jewett 9e · Problem 4.51](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the original problem?
- [x] a | \\(t=2dc/(c^2-v^2)\\), \\(t_0=2d/c\\); \\(t>t_0\\) for \\(0<v<c\\)
- [ ] b | \\(t=2d/c\\), \\(t_0=2dc/(c^2-v^2)\\); \\(t<t_0\\)
- [ ] c | \\(t=2d/(c+v)\\), \\(t_0=2d/c\\); \\(t<t_0\\)
explanation: Add the two leg times: \\(t=d/(c-v)+d/(c+v)=2dc/(c^2-v^2)\\), assuming c>v. Still-water time is \\(t_0=2d/c\\). Their ratio is \\(1/[1-(v/c)^2]>1\\) for 0<v<c; they are equal for zero current. If v≥c, the swimmer cannot complete the upstream leg.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 4.51 — complete original problem](assets/lessons/physics/recommended/ch4-p51.webp)
solution:
**Plan — we are going to…**

1. Write the upstream and downstream speeds in terms of c and v.
2. Add the two leg times using a common denominator.
3. Compare with the still-water time and state when the trip is physically possible.

**The trick**

- **c** = swimmer's speed relative to water.
- **v** = current speed relative to bank.

An upstream trip is possible only if **c > v**.

**What you need to know**

- **d** = one-leg distance, positive.
- **c** = swimmer's still-water speed, positive.
- **v** = current speed, zero or positive.

Speeds relative to bank:

\\[
u_{\\mathrm{up}}=c-v,
\\qquad
u_{\\mathrm{down}}=c+v.
\\]

A finite upstream trip requires:

\\[
c>v.
\\]

For each leg, time equals distance divided by that leg's speed.

**Step-by-step solution**

1. **Part (a): write both times.**

\\[
t_{\\mathrm{up}}=\\frac{d}{c-v},
\\]

\\[
t_{\\mathrm{down}}=\\frac{d}{c+v}.
\\]

Add them:

\\[
t=\\frac{d}{c-v}+\\frac{d}{c+v}.
\\]

2. **Use a common denominator.** Multiply the first fraction's numerator and denominator by the second denominator, and do the reverse for the second fraction:

\\[
t=\\frac{d(c+v)+d(c-v)}{(c-v)(c+v)}.
\\]

Expand the numerator:

\\[
dc+dv+dc-dv=2dc.
\\]

Expand the denominator:

\\[
(c-v)(c+v)=c^2+cv-cv-v^2=c^2-v^2.
\\]

Therefore:

\\[
\\boxed{t=\\frac{2dc}{c^2-v^2}},\\qquad c>v.
\\]

3. **Part (b): write the still-water time.** With no current the full distance is twice d, and the speed is c throughout:

\\[
\\boxed{t_0=\\frac{2d}{c}}.
\\]

4. **Part (c): compare by taking a ratio.** Dividing by a fraction means multiplying by its reciprocal:

\\[
\\frac{t}{t_0}
=\\frac{2dc}{c^2-v^2}\\times\\frac{c}{2d}
=\\frac{c^2}{c^2-v^2}.
\\]

Divide numerator and denominator by c squared:

\\[
\\frac{t}{t_0}=\\frac{1}{1-(v/c)^2}.
\\]

For **0 < v < c**, both v/c and its square lie between 0 and 1. The denominator is therefore between 0 and 1, making its reciprocal greater than 1:

\\[
\\boxed{t>t_0\\quad\\text{for }0<v<c}.
\\]

5. **Handle the limits explicitly.** If there is no current, substitute zero for v:

\\[
t=\\frac{2dc}{c^2}=\\frac{2d}{c}=t_0.
\\]

- **v = c:** upstream ground speed is zero; no progress.
- **v > c:** the swimmer drifts downstream.

Neither allows a completed round trip. A negative time from the formula is not physical.

**Use this method again**

Define symbols/frames → time for each leg → combine fractions → state allowed values → interpret.

**Check**

As the current approaches the swimming speed from below, the upstream speed approaches zero and the total time grows without bound. That matches the formula's denominator approaching zero from the positive side.
:::

:::mcq
id: phys-ch4-p54
title: Serway/Jewett · Problem 4.54
reference: [Serway/Jewett 9e · Problem 4.54](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the original problem?
- [x] a | Thrown vertically relative to truck at 8.25 m/s; ground initial velocity (9.50, 8.25) m/s
- [ ] b | Thrown vertically relative to truck at 16.5 m/s; ground initial velocity (9.50, 16.5) m/s
- [ ] c | Thrown 49.0° from vertical relative to truck at 12.6 m/s; ground initial velocity (0, 8.25) m/s
explanation: The flight lasts \\(T=16.0/9.50=1.6842\\) s. In the truck frame the can has no horizontal velocity, so (a) launch angle to vertical is zero and (b) vertical speed is gT/2=8.2526 m/s. (c) Its path in that frame is a vertical line. (d) The ground-frame path is a parabola. (e) Initial ground velocity is (9.50,8.25) m/s, magnitude 12.6 m/s, 41.0° above east.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 4.54 — complete original problem](assets/lessons/physics/recommended/ch4-p54.webp)
solution:
**Plan — we are going to…**

1. Use the truck's 16.0 m travel to find how long the can stays in the air.
2. In the truck frame, use the fact that the can returns to the same place to find its launch direction and upward speed.
3. Add the truck's velocity to describe the same throw from the ground.

**The trick**

The can already shares the truck's horizontal velocity. **Boy sees:** straight up/down. **Ground observer sees:** a parabola. Flight time and gravity are the same in both frames.

**What you need to know**

**Model:** no air resistance; release and catch at the same height.

- **+x:** east; **+y:** upward.
- **C** = can; **T** = truck; **G** = ground.

Gravity is downward in both frames:

\\[
a_x=0,\\qquad a_y=-g,\\qquad g=9.80\\ \\mathrm{m/s^2}.
\\]

**Frame velocities add:**

\\[
\\vec v_{C/G}=\\vec v_{C/T}+\\vec v_{T/G}.
\\]

**Step-by-step solution**

1. **Find the flight time from the truck's travel.** The truck moves at a constant 9.50 m/s and advances 16.0 m between release and catch:

\\[
16.0=(9.50)T.
\\]

\\[
T=\\frac{16.0}{9.50}=1.68421\\ \\mathrm s.
\\]

2. **Part (a): use the same-place catch in the truck frame.** The can's horizontal displacement relative to the truck is zero. Its relative horizontal velocity stays constant because horizontal acceleration is zero:

\\[
\\Delta x_{C/T}=v_{C/T,x}T=0.
\\]

The flight time is not zero, so:

\\[
v_{C/T,x}=0.
\\]

The launch is therefore straight upward in the truck frame:

\\[
\\boxed{\\text{Angle to the vertical}=0^\\circ}.
\\]

3. **Part (b): solve the vertical return equation.** The vertical displacement is zero because release and catch are at the same height:

\\[
0=v_{C/T,y}T-\\frac12gT^2.
\\]

Move the gravity term to the other side:

\\[
v_{C/T,y}T=\\frac12gT^2.
\\]

Divide both sides by the nonzero flight time:

\\[
v_{C/T,y}=\\frac{gT}{2}
=\\frac{(9.80)(1.68421)}{2}=8.25263\\ \\mathrm{m/s}.
\\]

There is no relative horizontal component, so the speed relative to the truck is:

\\[
\\boxed{v_{C/T}=8.25\\ \\mathrm{m/s}}.
\\]

4. **Part (c): describe the boy's view.** In the truck frame the can keeps the same horizontal position. It rises and falls along a **vertical straight line**.

5. **Part (d): describe the ground observer's view.** Over the ground the can moves east at the truck's constant horizontal speed while gravity curves its vertical motion. The path is a **parabola**.

6. **Part (e): add the frame velocities at release.** The can's relative launch velocity and the truck's ground velocity are:

\\[
\\vec v_{C/T}=(0,\\ 8.25263)\\ \\mathrm{m/s},
\\]

\\[
\\vec v_{T/G}=(9.50,\\ 0)\\ \\mathrm{m/s}.
\\]

Adding matching components gives:

\\[
\\boxed{\\vec v_{C/G}=(9.50\\hat i+8.25\\hat j)\\ \\mathrm{m/s}}.
\\]

For magnitude and direction:

\\[
v_{C/G}=\\sqrt{9.50^2+8.25263^2}=12.5840\\ \\mathrm{m/s}
\\approx12.6\\ \\mathrm{m/s},
\\]

\\[
\\alpha=\\tan^{-1}\\left(\\frac{8.25263}{9.50}\\right)=41.0^\\circ
\\quad\\text{above east}.
\\]

**Use this method again**

Solve vertical flight → find vehicle-relative horizontal velocity → add vehicle velocity for ground motion.

**Check**

The can's ground horizontal displacement is:

\\[
(9.50)(1.68421)=16.0\\ \\mathrm m.
\\]

It stays horizontally alongside the boy for the entire flight, so he can catch it in the same place on the truck.
:::

:::mcq
id: phys-ch4-p55
title: Serway/Jewett · Problem 4.55
reference: [Serway/Jewett 9e · Problem 4.55](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the original problem?
- [ ] a | 13.6 m/s²
- [ ] b | 6.67 m/s²
- [x] c | 54.4 m/s²
explanation: After release, fall time is \\(\\sqrt{2h/g}\\); horizontal speed is \\(v=2.00/\\sqrt{2(1.20)/g}\\). The preceding radial acceleration is \\(v^2/r=54.4\\) m/s².
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 4.55 — complete original problem](assets/lessons/physics/recommended/ch4-p55.webp)
solution:
**Plan — we are going to…**

1. Treat the ball after the break as a horizontal launch from a height of 1.20 m.
2. Use the vertical fall to find the flight time, then the 2.00 m horizontal travel to find the release speed.
3. Use that speed and the circle's 0.300 m radius to find the radial acceleration just before the string broke.

**The trick**

After the string breaks, **velocity is tangent to the circle**, not curved around it. Use the landing data to find release speed, then recover the earlier circular acceleration.

**What you need to know**

**Model:** no air resistance.

- **Origin:** release point.
- **+x:** along horizontal release velocity; **+y:** upward.
- **Initial vertical velocity:** zero, because the circle is horizontal.

\\[
v_{y0}=0,\\qquad a_y=-g.
\\]

During the flight:

\\[
\\Delta y=v_{y0}t+\\frac12a_yt^2,
\\]

\\[
\\Delta x=v_xt.
\\]

During circular motion the inward radial acceleration has magnitude:

\\[
a_r=\\frac{v^2}{r}.
\\]

**Step-by-step solution**

1. **Use the drop to find the fall time.** The ground is 1.20 m below the release point, so vertical displacement is negative:

\\[
-1.20=0(t)-\\frac12(9.80)t^2.
\\]

\\[
-1.20=-4.90t^2.
\\]

Divide by negative 4.90:

\\[
t^2=\\frac{1.20}{4.90}=0.244898\\ \\mathrm{s^2}.
\\]

Take the positive root because the landing occurs after release:

\\[
t=0.494872\\ \\mathrm s.
\\]

2. **Use the horizontal travel to find the release speed.** The 2.00 m is measured from the point directly below release; it is the flight's horizontal displacement:

\\[
2.00=v_xt.
\\]

\\[
v_x=\\frac{2.00}{0.494872}=4.04145\\ \\mathrm{m/s}.
\\]

At release the velocity is entirely horizontal, so this is the ball's speed just before the break as well.

3. **Find the earlier radial acceleration.** Use the circle's radius, 0.300 m; do not use the 2.00 m flight distance as the radius:

\\[
a_r=\\frac{(4.04145)^2}{0.300}
=\\frac{16.3333}{0.300}.
\\]

\\[
\\boxed{a_r=54.4\\ \\mathrm{m/s^2}}.
\\]

Before the break this acceleration points horizontally inward toward the center of the circle.

**Use this method again**

Tangent gives release direction → solve projectile motion → use release speed in the earlier circular-motion equation.

**Check**

The radial acceleration is about 5.55 times g. This is possible for a fast ball moving around a small circle. After the string breaks, the inward circular acceleration disappears; the remaining acceleration is downward gravity.
:::

:::mcq
id: phys-ch4-p60
title: Serway/Jewett · Problem 4.60
reference: [Serway/Jewett 9e · Problem 4.60](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the original problem?
- [x] a | 9.80 m/s² downward; launch speed 10.7 m/s
- [ ] b | Zero at the top; launch speed 10.7 m/s
- [ ] c | 9.80 m/s² downward; launch speed 8.44 m/s
explanation: Gravity remains downward at 9.80 m/s² even at the highest point. The trajectory relation is \\(1.05=10\\tan40°-g(10)^2/[2v_i^2\\cos^240°]\\). Solving gives \\(v_i=10.665\\) m/s.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 4.60 — complete original problem](assets/lessons/physics/recommended/ch4-p60.webp)
solution:
**Plan — we are going to…**

1. State what gravity does at the top of the basketball's path.
2. Measure the basket's position relative to the release point.
3. Use horizontal motion to express the flight time in terms of the unknown launch speed.
4. Substitute that time into vertical motion and solve for the speed.

**The trick**

- **At the top:** vertical velocity = 0; gravity still acts.
- **Rise to hoop:** 3.05 − 2.00 = **1.05 m**, measured from the hand—not the floor.

**What you need to know**

**Model:** no air resistance.

- **Origin:** hand at release.
- **+x:** toward basket; **+y:** upward.
- **u:** unknown launch speed.
- **Launch angle:** 40.0°.

Initial components:

\\[
v_{x0}=u\\cos40.0^\\circ,
\\]

\\[
v_{y0}=u\\sin40.0^\\circ.
\\]

Horizontal velocity stays constant; vertical acceleration is negative g. Use degree mode for the trigonometric values.

**Step-by-step solution**

1. **Part (a): identify acceleration at the top.** Gravity acts throughout the flight. At the top the ball still has horizontal velocity, while its vertical velocity momentarily vanishes:

\\[
\\boxed{\\vec a=(0,-9.80)\\ \\mathrm{m/s^2}}.
\\]

The acceleration's magnitude is 9.80 m/s², directed downward.

2. **Part (b): record the displacements from release to hoop.**

\\[
\\Delta x=10.0\\ \\mathrm m,
\\]

\\[
\\Delta y=3.05-2.00=1.05\\ \\mathrm m.
\\]

3. **Find an expression for the time.** Horizontal motion has no acceleration:

\\[
10.0=(u\\cos40.0^\\circ)t.
\\]

Divide by the initial horizontal velocity:

\\[
t=\\frac{10.0}{u\\cos40.0^\\circ}.
\\]

4. **Write vertical motion and substitute this same time.** Both components describe one ball, so they must use the same time:

\\[
1.05=(u\\sin40.0^\\circ)t-\\frac12gt^2.
\\]

\\[
1.05=u\\sin40.0^\\circ
\\left(\\frac{10.0}{u\\cos40.0^\\circ}\\right)
-\\frac{g}{2}\\left(\\frac{10.0}{u\\cos40.0^\\circ}\\right)^2.
\\]

The u cancels from the first term. Sine divided by cosine is tangent:

\\[
1.05=10.0\\tan40.0^\\circ
-\\frac{g(10.0)^2}{2u^2\\cos^2 40.0^\\circ}.
\\]

5. **Isolate the unknown speed.** Move the downward-drop term to the left and 1.05 to the right:

\\[
\\frac{g(10.0)^2}{2u^2\\cos^2 40.0^\\circ}
=10.0\\tan40.0^\\circ-1.05.
\\]

Multiply both sides by u squared, then divide by the entire right-side factor:

\\[
u^2=\\frac{g(10.0)^2}
{2\\cos^2 40.0^\\circ\\,[10.0\\tan40.0^\\circ-1.05]}.
\\]

6. **Substitute the numbers.**

\\[
10.0\\tan40.0^\\circ-1.05=8.390996-1.05=7.340996\\ \\mathrm m.
\\]

\\[
u^2=\\frac{(9.80)(100)}{2(0.766044)^2(7.340996)}
\\approx113.75\\ \\mathrm{m^2/s^2}.
\\]

Take the positive root because u is a speed:

\\[
\\boxed{u\\approx10.7\\ \\mathrm{m/s}}.
\\]

**Use this method again**

Displacements from launch → time from x-motion → substitute into y-motion → solve launch speed/angle.

**Check**

Using the unrounded speed, the hoop time is about 1.224 s. The vertical rise at that time is about 1.05 m. The vertical velocity is then about −5.14 m/s, so the ball reaches the hoop while descending, as expected for the shot shown.
:::

:::mcq
id: phys-ch4-p62
title: Serway/Jewett · Problem 4.62
reference: [Serway/Jewett 9e · Problem 4.62](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the original problem?
- [ ] a | \\(t=2h/g\\), \\(v_i=dg/(2h)\\), \\(v_f=v_i\\), angle zero
- [x] b | \\(t=\\sqrt{2h/g}\\), \\(v_i=d\\sqrt{g/(2h)}\\), \\(v_f=\\sqrt{g(d^2+4h^2)/(2h)}\\), angle \\(\\tan^{-1}(2h/d)\\) below horizontal
- [ ] c | \\(t=\\sqrt{h/g}\\), \\(v_i=d\\sqrt{g/h}\\), \\(v_f=\\sqrt{g(d^2+h^2)/h}\\), angle \\(\\tan^{-1}(h/d)\\) below horizontal
explanation: Vertical fall gives \\(h=gt^2/2\\); horizontal motion gives \\(d=v_it\\). At impact, \\(v_x=d\\sqrt{g/(2h)}\\) and \\(v_y=-\\sqrt{2gh}\\). Their squared sum gives the stated speed; \\(|v_y|/v_x=2h/d\\) gives the direction.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 4.62 — complete original problem](assets/lessons/physics/recommended/ch4-p62.webp)
solution:
**Plan — we are going to…**

1. Use the vertical drop h to find the flight time.
2. Use the horizontal travel d and that time to find the initial speed.
3. Find the two impact-velocity components, then combine them for speed and direction.

**The trick**

**Thrown horizontally → initial vertical velocity = 0.** It does not stay zero: gravity creates downward velocity. The fall determines flight time.

**What you need to know**

**Model:** no air resistance; h and d positive.

- **Origin:** cliff edge.
- **+x:** toward landing; **+y:** upward.
- **u:** unknown horizontal launch speed.

\\[
v_{x0}=u,\\qquad v_{y0}=0,
\\]

\\[
a_x=0,\\qquad a_y=-g.
\\]

At landing the displacements are:

\\[
\\Delta x=d,\\qquad \\Delta y=-h.
\\]

**Step-by-step solution**

1. **Part (a): solve vertical motion for time.**

\\[
-h=0(t)-\\frac12gt^2.
\\]

Multiply both sides by negative one, then by two:

\\[
h=\\frac12gt^2,
\\]

\\[
2h=gt^2.
\\]

Divide by g and take the positive square root:

\\[
\\boxed{t=\\sqrt{\\frac{2h}{g}}}.
\\]

2. **Part (b): solve horizontal motion for initial speed.** Horizontal acceleration is zero:

\\[
d=ut.
\\]

Divide by t and insert the time from part (a):

\\[
u=\\frac{d}{t}=\\frac{d}{\\sqrt{2h/g}}.
\\]

Taking the reciprocal of the square root gives:

\\[
\\boxed{u=d\\sqrt{\\frac{g}{2h}}}.
\\]

3. **Part (c): find the impact components first.** The horizontal component does not change:

\\[
v_{xf}=u=d\\sqrt{\\frac{g}{2h}}.
\\]

The vertical component starts at zero and changes under gravity:

\\[
v_{yf}=0-gt=-g\\sqrt{\\frac{2h}{g}}.
\\]

Since g is positive, simplifying the square root gives:

\\[
v_{yf}=-\\sqrt{2gh}.
\\]

The minus sign means downward.

4. **Combine the components for the impact speed.**

\\[
v_f=\\sqrt{v_{xf}^2+v_{yf}^2}.
\\]

Square each component:

\\[
v_f^2=\\frac{gd^2}{2h}+2gh.
\\]

To combine the terms, rewrite the second term with denominator 2h:

\\[
2gh=\\frac{4gh^2}{2h}.
\\]

Therefore:

\\[
v_f^2=\\frac{g(d^2+4h^2)}{2h}.
\\]

\\[
\\boxed{v_f=\\sqrt{\\frac{g(d^2+4h^2)}{2h}}}.
\\]

The equivalent form below is also useful:

\\[
v_f=\\sqrt{u^2+2gh}.
\\]

5. **Part (d): find the direction below horizontal.** Let alpha be a positive downward angle. The vertical speed magnitude is opposite alpha and the horizontal speed is adjacent:

\\[
\\tan\\alpha=\\frac{|v_{yf}|}{v_{xf}}
=\\frac{\\sqrt{2gh}}{d\\sqrt{g/(2h)}}.
\\]

Simplify the ratio of square roots:

\\[
\\frac{\\sqrt{2gh}}{\\sqrt{g/(2h)}}
=\\sqrt{\\frac{2gh}{g/(2h)}}
=\\sqrt{4h^2}=2h.
\\]

Thus:

\\[
\\boxed{\\alpha=\\tan^{-1}\\left(\\frac{2h}{d}\\right)
\\quad\\text{below horizontal}}.
\\]

**Use this method again**

Vertical drop → flight time → horizontal launch speed → impact vertical velocity → speed/direction.

**Check**

The final speed is greater than the initial speed because the fall adds a downward component. A taller cliff at the same landing distance gives a steeper impact angle, matching the ratio of twice h to d.
:::

:::mcq
id: phys-ch4-p64
title: Serway/Jewett · Problem 4.64
reference: [Serway/Jewett 9e · Problem 4.64](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the original problem?
- [ ] a | 122 km/h
- [ ] b | 58.0 km/h
- [x] c | 68.6 km/h
explanation: Car 1 covers 90.0(2.50)=225 km. In the triangle ABL, the included angle at A is 40.0°, so \\(BL=\\sqrt{225^2+80^2-2(225)(80)\\cos40°}=171.602\\) km. Divide by 2.50 h: 68.641 km/h.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 4.64 — complete original problem](assets/lessons/physics/recommended/ch4-p64.webp)
solution:
**Plan — we are going to…**

1. Find how far car 1 travels in 2.50 h.
2. Use the triangle in the figure to find car 2's travel distance.
3. Divide car 2's distance by the same travel time.

**The trick**

**Same travel time, different route lengths.** The 80.0 km is between the towns, not a route to the lake. The 40.0° angle is at town A.

**What you need to know**

**Triangle ABL:**

- **AL:** car 1's route; **BL:** car 2's route.
- **AB:** 80.0 km between towns.

The triangle is not right-angled. Use the **cosine rule**:

\\[
c^2=a^2+b^2-2ab\\cos C.
\\]

Here C must be the angle between the two known sides a and b. We can alternatively resolve the lake's position into horizontal and vertical components.

**Step-by-step solution**

1. **Find side AL from car 1's motion.** Its speed is 90.0 km/h and its travel time is 2.50 h:

\\[
AL=(90.0\\ \\mathrm{km/h})(2.50\\ \\mathrm h)=225\\ \\mathrm{km}.
\\]

2. **Identify the known triangle data.**

\\[
AL=225\\ \\mathrm{km},
\\]

\\[
AB=80.0\\ \\mathrm{km},
\\]

\\[
\\angle LAB=40.0^\\circ.
\\]

The unknown side BL is opposite the 40.0° angle, so it is the side isolated on the left of the cosine rule.

3. **Apply the cosine rule.**

\\[
BL^2=AL^2+AB^2-2(AL)(AB)\\cos40.0^\\circ.
\\]

Insert the lengths in km:

\\[
BL^2=225^2+80.0^2-2(225)(80.0)\\cos40.0^\\circ.
\\]

Calculate the pieces:

\\[
225^2=50625,\\qquad80.0^2=6400,
\\]

\\[
2(225)(80.0)\\cos40.0^\\circ
=36000(0.766044)=27577.6.
\\]

Therefore:

\\[
BL^2=50625+6400-27577.6=29447.4\\ \\mathrm{km^2}.
\\]

Take the positive root because a distance cannot be negative:

\\[
BL=\\sqrt{29447.4}=171.602\\ \\mathrm{km}.
\\]

4. **Find car 2's speed.** Both cars arrive after 2.50 h:

\\[
v_2=\\frac{BL}{2.50\\ \\mathrm h}
=\\frac{171.602\\ \\mathrm{km}}{2.50\\ \\mathrm h}.
\\]

\\[
\\boxed{v_2=68.6\\ \\mathrm{km/h}}.
\\]

**Use this method again**

Speed × time → route length → read figure's angle → solve triangle → convert route length to speed/time.

**Check**

Take A as the origin and B 80.0 km to the right. The lake's coordinates are approximately:

\\[
x_L=225\\cos40.0^\\circ=172.36\\ \\mathrm{km},
\\]

\\[
y_L=225\\sin40.0^\\circ=144.63\\ \\mathrm{km}.
\\]

From B the horizontal difference is 92.36 km. Pythagoras with 92.36 km and 144.63 km gives 171.60 km, confirming car 2's route length.
:::

:::mcq
id: phys-ch4-p70
title: Serway/Jewett · Problem 4.70
reference: [Serway/Jewett 9e · Problem 4.70](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the original problem?
- [ ] a | Radial 25.0 m/s²; tangential zero; total 25.0 m/s² horizontally inward
- [ ] b | Radial 9.80 m/s²; tangential 25.0 m/s²; total 26.9 m/s², 68.6° below the inward horizontal
- [x] c | Radial 25.0 m/s²; tangential 9.80 m/s²; total 26.9 m/s², 21.4° below the inward horizontal
explanation: At either horizontal endpoint, \\(a_r=v^2/r=25.0\\) m/s² points inward along the cord; \\(a_t=g=9.80\\) m/s² points downward. Draw these perpendicular arrows and their down-and-inward sum. Total magnitude is \\(\\sqrt{25^2+9.8^2}=26.85\\) m/s², at \\(\\tan^{-1}(9.8/25)=21.41°\\) below inward. Thus it is down-left at the right side and down-right at the left side.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 4.70 — complete original problem](assets/lessons/physics/recommended/ch4-p70.webp)
solution:
**Plan — we are going to…**

1. Separate acceleration into an inward radial part and a tangential part that changes speed.
2. Calculate each part at the two horizontal positions.
3. Draw their directions and combine the perpendicular components to find total magnitude and angle.

**The trick**

With the cord horizontal:

- **Tension → inward**, along the cord.
- **Gravity → downward**, along the tangent.

These accelerations are perpendicular: combine with Pythagoras, not addition.

**What you need to know**

- **Radial:** inward, toward center.
- **Tangential:** along the path.
- **Radius:** constant cord length r.

\\[
a_r=\\frac{v^2}{r}.
\\]

At a horizontal cord position, tension is radial; gravity is entirely tangential. Gravity changes speed, giving:

\\[
a_t=g.
\\]

**Given:** r = 1.00 m; v = 5.00 m/s at each position; g = 9.80 m/s². The bob is moving, not stopped at a turning point.

**Step-by-step solution**

1. **Part (a): calculate radial acceleration.**

\\[
a_r=\\frac{(5.00)^2}{1.00}
=\\frac{25.0}{1.00}.
\\]

\\[
\\boxed{a_r=25.0\\ \\mathrm{m/s^2}}.
\\]

This magnitude is the same at both horizontal positions because both speed and radius are the same. It points toward the pivot: rightward on the left side, leftward on the right side.

2. **Part (b): calculate tangential acceleration.** At either horizontal position the tangent is vertical. Gravity is entirely along this tangent:

\\[
F_t=mg.
\\]

Newton's law along the tangent gives:

\\[
ma_t=mg.
\\]

Divide by the bob's mass:

\\[
\\boxed{a_t=g=9.80\\ \\mathrm{m/s^2}\\ \\text{downward}}.
\\]

3. **Part (c): draw arrows from the bob.**

- **Bob right of pivot:** inward left + tangent down → sum down-left.
- **Bob left of pivot:** inward right + tangent down → sum down-right.

\`\`\`text
Right of pivot:             Left of pivot:

      ← radial                    radial →
          •                         •
          ↓ tangential              ↓ tangential
       ↙ total                         total ↘
\`\`\`

Both arrows in each construction start at the same bob position. Complete the parallelogram, or place the tangential arrow's tail at the radial arrow's tip; the diagonal gives total acceleration.

4. **Part (d): find the total magnitude.** The radial and tangential directions are perpendicular:

\\[
a=\\sqrt{a_r^2+a_t^2}.
\\]

\\[
a=\\sqrt{25.0^2+9.80^2}
=\\sqrt{625+96.04}
=\\sqrt{721.04}.
\\]

\\[
\\boxed{a=26.9\\ \\mathrm{m/s^2}}.
\\]

5. **Find the direction relative to inward horizontal.** Let alpha measure downward from the inward arrow. Its opposite component is the downward tangential part; its adjacent component is the inward radial part:

\\[
\\tan\\alpha=\\frac{a_t}{a_r}=\\frac{9.80}{25.0}=0.392.
\\]

\\[
\\boxed{\\alpha=\\tan^{-1}(0.392)=21.4^\\circ
\\quad\\text{below the inward horizontal}}.
\\]

Thus the acceleration is 21.4° below leftward at the right position and 21.4° below rightward at the left position.

**Use this method again**

Speed/radius → inward acceleration. Speed change → tangential acceleration. Draw directions, then combine with Pythagoras.

**Check**

The total magnitude, 26.9 m/s², is larger than either component but smaller than their arithmetic sum, 34.8 m/s². Its direction lies closer to inward than downward because the inward component is larger.
:::

:::mcq
id: phys-ch4-p71
title: Serway/Jewett · Problem 4.71
reference: [Serway/Jewett 9e · Problem 4.71](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the original problem?
- [ ] a | Dive speed 46.5 m/s; angle 77.6° below horizontal; mouse fall time 4.34 s
- [x] b | Dive speed 46.5 m/s; angle 77.6° below horizontal; mouse fall time 6.34 s
- [ ] c | Dive speed 32.6 m/s; angle 72.2° below horizontal; mouse fall time 6.34 s
explanation: The mouse falls 197 m, so \\(T=\\sqrt{2(197)/g}=6.34067\\) s. The hawk dives for T−2=4.34067 s. Both have initial horizontal speed 10.0 m/s; to meet, the hawk’s horizontal dive component must remain 10.0 m/s. Its downward component is 197/(T−2)=45.385 m/s. The magnitude is 46.473 m/s and angle \\(\\tan^{-1}(45.385/10)=77.574°\\) below horizontal.
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 4.71 — complete original problem](assets/lessons/physics/recommended/ch4-p71.webp)
solution:
**Plan — we are going to…**

1. Follow the mouse from release until it is 3.00 m above the ground to find the total fall time.
2. Subtract the hawk's 2.00 s waiting time to find its dive duration.
3. Compare the hawk's position at the start of its dive with the mouse's recapture position.
4. Divide those horizontal and vertical displacements by the dive duration, then find the dive's speed and angle.

**The trick**

Use **two times**: the mouse's full fall and the hawk's shorter dive. The mouse keeps moving horizontally at 10.0 m/s, so the hawk must intercept a moving target.

**What you need to know**

**Mouse model:** no air resistance.

- **Origin:** ground directly below release.
- **+x:** original flight direction; **+y:** upward.
- **Initial height:** 200 m for both animals.
- **Initial horizontal speed:** 10.0 m/s for both.
- **Mouse's initial vertical velocity:** zero.

\\[
x_M(t)=10.0t,
\\]

\\[
y_M(t)=200-\\frac12gt^2.
\\]

**T** = time since release. The hawk flies horizontally for 2.00 s, then dives straight at constant velocity.

**Step-by-step solution**

1. **Find the mouse's total fall time.** At recapture its height is 3.00 m:

\\[
3.00=200-\\frac12(9.80)T^2.
\\]

Subtract 3.00 and isolate the fall term:

\\[
\\frac12(9.80)T^2=200-3.00=197.
\\]

\\[
T^2=\\frac{2(197)}{9.80}=40.2041\\ \\mathrm{s^2}.
\\]

Take the positive root:

\\[
\\boxed{T=6.34\\ \\mathrm s}.
\\]

This is the answer to **part (c)**. Keep the unrounded value, 6.34067 s, for the following calculations.

2. **Find the dive duration.** The hawk waits 2.00 s before diving:

\\[
\\tau=T-2.00=6.34067-2.00=4.34067\\ \\mathrm s.
\\]

3. **Find the dive's starting and ending positions.** At the start of the dive, the hawk has traveled horizontally for 2.00 s:

\\[
x_{H,\\mathrm{start}}=(10.0)(2.00)=20.0\\ \\mathrm m,
\\]

\\[
y_{H,\\mathrm{start}}=200\\ \\mathrm m.
\\]

At recapture, the mouse has traveled horizontally for the whole fall time:

\\[
x_{\\mathrm{catch}}=(10.0)(6.34067)=63.4067\\ \\mathrm m,
\\]

\\[
y_{\\mathrm{catch}}=3.00\\ \\mathrm m.
\\]

The hawk's displacement **during its dive** is therefore:

\\[
\\Delta x_H=63.4067-20.0=43.4067\\ \\mathrm m,
\\]

\\[
\\Delta y_H=3.00-200=-197\\ \\mathrm m.
\\]

4. **Find the constant dive-velocity components.** Divide each displacement by the dive duration, not by the full fall time:

\\[
v_{Hx}=\\frac{43.4067}{4.34067}=10.0\\ \\mathrm{m/s},
\\]

\\[
v_{Hy}=\\frac{-197}{4.34067}=-45.385\\ \\mathrm{m/s}.
\\]

The hawk's horizontal component remains 10.0 m/s because it must stay aligned with the mouse horizontally. Its vertical component is negative because it dives downward.

5. **Part (a): combine the components for dive speed.**

\\[
v_H=\\sqrt{10.0^2+(-45.385)^2}
\\]

\\[
=\\sqrt{100+2059.80}
=\\sqrt{2159.80}.
\\]

\\[
\\boxed{v_H=46.5\\ \\mathrm{m/s}}.
\\]

6. **Part (b): find the angle below horizontal.**

\\[
\\tan\\alpha=\\frac{|v_{Hy}|}{v_{Hx}}
=\\frac{45.385}{10.0}=4.5385.
\\]

\\[
\\boxed{\\alpha=77.6^\\circ\\ \\text{below horizontal}}.
\\]

**Use this method again**

Use one target clock → meeting event → pursuer's start position/time → required displacement ÷ pursuer's travel time.

**Check**

During the 4.34067 s dive, the hawk moves 43.4067 m forward and 197 m downward. Adding those displacements to its dive-start position gives the mouse's recapture position exactly. The dive time is shorter than the mouse's 6.34 s fall time.
:::

:::mcq
id: phys-ch4-p84
title: Serway/Jewett · Problem 4.84
reference: [Serway/Jewett 9e · Problem 4.84](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which result matches the original problem?
- [x] a | \\(v_{\\min}=\\sqrt{gR}\\); distance beyond the rock’s edge \\((\\sqrt2-1)R\\)
- [ ] b | \\(v_{\\min}=\\sqrt{2gR}\\); distance beyond the rock’s edge R
- [ ] c | \\(v_{\\min}=\\sqrt{gR}\\); distance beyond the rock’s edge \\(\\sqrt2R\\)
explanation: Near the top, the rock surface is \\(y=\\sqrt{R^2-X^2}\\), whereas the projectile has \\(y=R-gX^2/(2v_i^2)\\). To stay above the surface requires \\(v_i^2\\ge gR\\). At equality, the parabola remains above the circular surface for X>0. Ground is reached after \\(\\sqrt{2R/g}\\), at horizontal distance \\(\\sqrt2R\\) from the center. The requested x in the figure is measured from the rock’s edge, so \\(x=(\\sqrt2-1)R\\).
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 4.84 — complete original problem](assets/lessons/physics/recommended/ch4-p84.webp)
solution:
**Plan — we are going to…**

1. Describe the ball's path and the rock's surface using the same coordinates.
2. Require the ball to remain above the rock at every horizontal position over it.
3. Use that requirement to find the smallest allowed launch speed.
4. Find where the ball lands, then subtract the rock's radius because the figure measures distance from the rock's edge.

**The trick**

**Clear the whole curved surface, not just the edge.** A slow ball hits near the top. Compare ball height with rock height throughout the overlap.

**What you need to know**

**Model:** no air resistance; rock cross-section is an upper semicircle of radius R.

- **Origin:** circle center, at ground level.
- **X:** horizontal position in kick direction; **y:** height.
- **Small x in figure:** gap beyond the rock's edge.
- **Launch height:** R; **u:** horizontal launch speed.

Ball motion:

\\[
X=ut,
\\]

\\[
y_{\\mathrm{ball}}=R-\\frac12gt^2.
\\]

For the rock surface, Pythagoras gives:

\\[
X^2+y_{\\mathrm{rock}}^2=R^2.
\\]

The upper half of the circle therefore has height:

\\[
y_{\\mathrm{rock}}=\\sqrt{R^2-X^2},
\\qquad0\\leq X\\leq R.
\\]

**Step-by-step solution**

1. **Write ball height in terms of horizontal position.** Solve the horizontal equation for time:

\\[
t=\\frac{X}{u}.
\\]

Substitute it into the height equation:

\\[
y_{\\mathrm{ball}}=R-\\frac{gX^2}{2u^2}.
\\]

2. **Part (a): impose clearance at each point over the rock.** The ball must be at least as high as the rock surface:

\\[
R-\\frac{gX^2}{2u^2}\\geq\\sqrt{R^2-X^2}.
\\]

Move the downward-drop term and the surface term to opposite sides:

\\[
\\frac{gX^2}{2u^2}\\leq R-\\sqrt{R^2-X^2}.
\\]

The left side is the ball's drop below launch height. The right side is how far the rock's surface has fallen below its top. The ball's drop must be no greater.

3. **Simplify the rock's height drop without an approximation.** Multiply by the conjugate divided by itself:

\\[
R-\\sqrt{R^2-X^2}
=\\frac{(R-\\sqrt{R^2-X^2})(R+\\sqrt{R^2-X^2})}
{R+\\sqrt{R^2-X^2}}.
\\]

The numerator is a difference of squares:

\\[
R^2-(R^2-X^2)=X^2.
\\]

So the condition becomes:

\\[
\\frac{gX^2}{2u^2}\\leq
\\frac{X^2}{R+\\sqrt{R^2-X^2}}.
\\]

4. **Find the speed condition.** For every point after launch with positive X, divide both sides by the positive quantity X squared:

\\[
\\frac{g}{2u^2}\\leq
\\frac{1}{R+\\sqrt{R^2-X^2}}.
\\]

Multiply by the positive denominators:

\\[
u^2\\geq\\frac{g}{2}\\left(R+\\sqrt{R^2-X^2}\\right).
\\]

As X approaches zero just after launch, the square root approaches R, so the right side approaches:

\\[
\\frac{g}{2}(R+R)=gR.
\\]

At every positive X over the rock, the square root is smaller than R, so that right side is smaller than gR. Thus satisfying the near-top requirement also satisfies every later point:

\\[
u^2\\geq gR.
\\]

The smallest speed is:

\\[
\\boxed{u_{\\min}=\\sqrt{gR}}.
\\]

Any smaller speed fails sufficiently close to the launch point. At the minimum speed, the ball starts on the surface but lies strictly above it for every positive X up to the edge.

5. **Part (b): find the flight time to the ground.** At landing, the ball's height is zero:

\\[
0=R-\\frac12gt^2.
\\]

\\[
\\frac12gt^2=R,
\\qquad
\\boxed{t=\\sqrt{\\frac{2R}{g}}}.
\\]

6. **Find the landing coordinate at the minimum speed.**

\\[
X_{\\mathrm{land}}=u_{\\min}t
=\\sqrt{gR}\\sqrt{\\frac{2R}{g}}
=\\sqrt{2R^2}=\\sqrt2R.
\\]

This distance is measured from the **center of the rock**. The far rock edge is at coordinate R, while the question's figure labels the gap beyond that edge as x:

\\[
x=X_{\\mathrm{land}}-R=\\sqrt2R-R.
\\]

\\[
\\boxed{x=(\\sqrt2-1)R\\approx0.414R}.
\\]

**Use this method again**

Write both heights against one horizontal coordinate → require clearance everywhere → find the limiting speed → solve landing separately.

**Check**

At the minimum speed, the ball's height above the rock's edge is:

\\[
y_{\\mathrm{ball}}(R)=R-\\frac{gR^2}{2gR}=\\frac R2>0.
\\]

It clears the edge and lands beyond it because its landing coordinate is greater than R. The units also work: g times R has units of speed squared.
:::

:::mcq
id: phys-ch4-p86
title: Serway/Jewett · Problem 4.86
reference: [Serway/Jewett 9e · Problem 4.86](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=136372)
kicker: PHYSA1301 · assigned textbook problem
question: Which launch angle gives the greatest distance up the incline, and what is that distance?
- [ ] a | \\(\\theta_i=45°-\\phi/2\\), \\(d_{\\max}=v_i^2/[g(1-\\sin\\phi)]\\)
- [x] b | \\(\\theta_i=45°+\\phi/2\\), \\(d_{\\max}=v_i^2/[g(1+\\sin\\phi)]\\)
- [ ] c | \\(\\theta_i=45°\\), \\(d_{\\max}=v_i^2/g\\)
explanation: The inclined plane has y=x tanφ. Substituting \\(x=v_i\\cos\\theta_i\\,t\\), \\(y=v_i\\sin\\theta_i\\,t-gt^2/2\\) gives the nonzero landing time \\(t=2v_i\\sin(\\theta_i-\\phi)/(g\\cos\\phi)\\). Since \\(d=x/\\cos\\phi\\), this proves the printed formula. Use \\(2\\cos\\theta_i\\sin(\\theta_i-\\phi)=\\sin(2\\theta_i-\\phi)-\\sin\\phi\\). Its maximum occurs at \\(2\\theta_i-\\phi=90°\\), giving \\(d_{\\max}=v_i^2(1-\\sin\\phi)/(g\\cos^2\\phi)=v_i^2/[g(1+\\sin\\phi)]\\).
hint: Solve all parts using the original statement and diagram.
example:
![Serway/Jewett · Problem 4.86 — complete original problem](assets/lessons/physics/recommended/ch4-p86.webp)
solution:
**Plan — we are going to…**

1. Write horizontal and vertical motion from the launch point.
2. Describe landing on the incline by the incline's equation, then solve for the nonzero flight time.
3. Convert horizontal travel into distance along the incline to prove the printed formula.
4. Rewrite the angle dependence as a single sine, maximize it, and simplify the maximum distance.

**The trick**

**Landing is higher than launch**, so the same-height range formula fails. The requested distance is **along the slope**, not horizontal.

**What you need to know**

**Model:** no air resistance; slope rises at angle phi between 0° and 90°.

- **Origin:** launch point.
- **+x:** horizontal toward slope; **+y:** upward.
- **u:** launch speed.
- **theta:** launch angle above horizontal; it must exceed phi and be below 90°.
- **d:** landing distance along slope.

Initial components:

\\[
v_{x0}=u\\cos\\theta,
\\qquad
v_{y0}=u\\sin\\theta.
\\]

The incline is a straight line through the origin:

\\[
y=x\\tan\\phi.
\\]

For a distance d measured along that incline, its horizontal projection is:

\\[
x=d\\cos\\phi.
\\]

We will also use the sine-difference identity:

\\[
\\sin(\\theta-\\phi)
=\\sin\\theta\\cos\\phi-\\cos\\theta\\sin\\phi.
\\]

**Step-by-step solution**

1. **Part (a): write the projectile coordinates.** Horizontal acceleration is zero; vertical acceleration is negative g:

\\[
x=u\\cos\\theta\\,t,
\\]

\\[
y=u\\sin\\theta\\,t-\\frac12gt^2.
\\]

2. **Require the projectile to be on the incline at landing.** Replace y in the incline equation by the projectile height, and replace x by the projectile's horizontal position:

\\[
u\\sin\\theta\\,t-\\frac12gt^2
=u\\cos\\theta\\,t\\tan\\phi.
\\]

Move all terms to the left and factor out t:

\\[
t\\left[u\\sin\\theta-u\\cos\\theta\\tan\\phi-\\frac12gt\\right]=0.
\\]

One solution is zero time, which describes the launch point. For the later landing, set the bracket equal to zero:

\\[
\\frac12gt=u(\\sin\\theta-\\cos\\theta\\tan\\phi).
\\]

Multiply by two and divide by g:

\\[
t=\\frac{2u}{g}(\\sin\\theta-\\cos\\theta\\tan\\phi).
\\]

3. **Simplify the angle expression.** Replace tangent by sine divided by cosine and combine over a common denominator:

\\[
\\sin\\theta-\\cos\\theta\\tan\\phi
=\\frac{\\sin\\theta\\cos\\phi-\\cos\\theta\\sin\\phi}{\\cos\\phi}.
\\]

The numerator is the sine-difference identity:

\\[
\\sin\\theta-\\cos\\theta\\tan\\phi
=\\frac{\\sin(\\theta-\\phi)}{\\cos\\phi}.
\\]

Thus the nonzero flight time is:

\\[
t=\\frac{2u\\sin(\\theta-\\phi)}{g\\cos\\phi}.
\\]

4. **Convert the horizontal range to slope distance.** First insert the time into horizontal motion:

\\[
x=u\\cos\\theta
\\left[\\frac{2u\\sin(\\theta-\\phi)}{g\\cos\\phi}\\right]
=\\frac{2u^2\\cos\\theta\\sin(\\theta-\\phi)}{g\\cos\\phi}.
\\]

Because the horizontal projection of d is d times cosine phi, divide x by cosine phi:

\\[
d=\\frac{x}{\\cos\\phi}.
\\]

\\[
\\boxed{d=\\frac{2u^2\\cos\\theta\\sin(\\theta-\\phi)}{g\\cos^2\\phi}}.
\\]

This proves the formula requested in part (a).

5. **Part (b): isolate the angle dependence.** For a fixed launch speed and fixed incline, only theta varies. Use the product-to-sum identity:

\\[
2\\sin A\\cos B=\\sin(A+B)+\\sin(A-B).
\\]

Here A is theta minus phi, and B is theta:

\\[
2\\cos\\theta\\sin(\\theta-\\phi)
=\\sin(2\\theta-\\phi)+\\sin(-\\phi).
\\]

Sine is odd, so sine of negative phi equals negative sine phi:

\\[
2\\cos\\theta\\sin(\\theta-\\phi)
=\\sin(2\\theta-\\phi)-\\sin\\phi.
\\]

The distance can therefore be written as:

\\[
d=\\frac{u^2}{g\\cos^2\\phi}
\\left[\\sin(2\\theta-\\phi)-\\sin\\phi\\right].
\\]

6. **Choose theta to maximize the sine.** The prefactor is positive and sine phi is fixed. The largest possible value of the remaining sine is one, attained at an angle of 90°:

\\[
2\\theta-\\phi=90^\\circ.
\\]

Add phi to both sides and divide by two:

\\[
2\\theta=90^\\circ+\\phi,
\\]

\\[
\\boxed{\\theta_{\\mathrm{best}}=45^\\circ+\\frac{\\phi}{2}}.
\\]

7. **Insert the maximum sine value.**

\\[
d_{\\max}=\\frac{u^2(1-\\sin\\phi)}{g\\cos^2\\phi}.
\\]

Use the identity below to factor the denominator:

\\[
\\cos^2\\phi=1-\\sin^2\\phi
=(1-\\sin\\phi)(1+\\sin\\phi).
\\]

Cancel the common positive factor for an incline below 90°:

\\[
d_{\\max}
=\\frac{u^2(1-\\sin\\phi)}
{g(1-\\sin\\phi)(1+\\sin\\phi)}.
\\]

\\[
\\boxed{d_{\\max}=\\frac{u^2}{g(1+\\sin\\phi)}}.
\\]

**Use this method again**

Intersect projectile path with slope → reject launch-time root → convert horizontal distance to slope distance → maximize that distance.

**Check**

For level ground, set the incline angle to zero. The results reduce to:

\\[
\\theta_{\\mathrm{best}}=45^\\circ,
\\qquad
d_{\\max}=\\frac{u^2}{g}.
\\]

For a rising incline the best angle is above 45°, and the maximum travel distance is smaller than the level-ground maximum at the same launch speed.
:::

:::mcq
id: past-physics-2007-q6
title: Past paper · IUG PHYSA 1301 2007 final · Q6 · 2007
kicker: PAST PAPER · PHYSA 1301 Final Exam, Islamic University of Gaza (8 Jan 2007)
reference: [PHYSA 1301 Final Exam, Islamic University of Gaza (8 Jan 2007), p. 1](https://studyres.com/doc/10675286/final-exam)
question: A ball is thrown vertically upward from a truck moving at constant speed. Where does it land relative to the truck (neglect air resistance)?
- [ ] a | In front of the truck
- [ ] b | Behind the truck
- [x] c | Back on the truck
- [ ] d | The result depends on the truck speed
explanation: Correct answer: Back on the truck
hint: Review the original paper and the lesson concepts before retrying.
solution:
**Plan — we are going to follow the truck and the ball separately.**

1. Choose an observer standing beside the road.
2. Write the horizontal motion of the truck and the ball.
3. Compare their positions when the ball returns to its starting height.

**The trick**

The ball already has the truck's forward velocity. **Throwing upward adds vertical velocity; it does not remove forward velocity.**

**What you need to know**

- **Horizontal motion:** constant velocity; gravity has no horizontal component.
- **Vertical motion:** accelerated downward by gravity.
- **Truck:** constant speed.

**Step-by-step solution**

1. **Choose coordinates.** Let right be positive horizontal direction. Start the clock at release and put the horizontal origin at the release point. Call the truck's constant speed V.

2. **Write the truck's horizontal position.** Position equals starting position plus velocity times elapsed time. Its starting position is zero.

\\[
x_{\\text{truck}}=0+Vt
\\]

3. **Ball's horizontal motion:** it already shares velocity V with the truck. The upward throw adds no horizontal velocity, and gravity adds no horizontal acceleration.

\\[
a_x=0
\\]

\\[
v_{x,\\text{ball}}=V
\\]

4. **Write the ball's horizontal position.** Its starting horizontal position is also zero.

\\[
x_{\\text{ball}}=0+Vt
\\]

5. **Compare the positions at the same time.** Subtract the truck's position from the ball's position.

\\[
x_{\\text{ball}}-x_{\\text{truck}}=Vt-Vt=0
\\]

The ball stays above the same point on the truck. Vertically: **rises → stops momentarily → falls**. At release height, it lands **back on the truck**.

**Use this method again**

Vehicle velocity + throw velocity → ground velocity. Compare ball and vehicle positions at the **same time**.

**Check**

In the truck's frame, the ball starts with zero horizontal velocity and experiences zero horizontal acceleration. It goes straight up and down in that frame, which agrees with the road-frame calculation.
:::

:::mcq
id: past-physics-2007-q7
title: Past paper · IUG PHYSA 1301 2007 final · Q7 · 2007
kicker: PAST PAPER · PHYSA 1301 Final Exam, Islamic University of Gaza (8 Jan 2007)
reference: [PHYSA 1301 Final Exam, Islamic University of Gaza (8 Jan 2007), p. 1](https://studyres.com/doc/10675286/final-exam)
question: A boat moves 12 m/s at 30° west of north relative to a river flowing 6 m/s east. Its ground velocity is:
- [ ] a | 30° east of north
- [x] b | due north
- [ ] c | 30° west of north
- [ ] d | 45° east of north
explanation: Correct answer: due north
hint: Review the original paper and the lesson concepts before retrying.
solution:
**Plan — we are going to split both velocities into east and north parts, then add matching parts.**

1. Label the observer for each velocity.
2. Find the boat's east and north components relative to the water.
3. Add the river's eastward velocity.
4. Use the resulting components to identify the ground direction.

**The trick**

The angle starts from **north**: westward component uses **sine**; northward component uses **cosine**. Westward boat motion cancels eastward current.

**What you need to know**

- **+x:** east; west negative.
- **+y:** north.
- **B** = boat; **W** = water; **G** = ground.

**Ground velocity = boat-through-water velocity + current velocity.**

\\[
\\vec v_{B/G}=\\vec v_{B/W}+\\vec v_{W/G}
\\]

Add **x to x**, **y to y**. Use **degree mode**.

**Step-by-step solution**

1. **List the given information.** The boat moves at 12 m/s relative to the water, aimed 30 degrees west of north. The river flows east at 6 m/s relative to the ground.

2. **Find the boat's westward component.** In the component triangle, the westward side is opposite the angle measured from north, so use sine. Insert a minus sign because west is negative x.

\\[
v_{B/W,x}=-12\\sin30^\\circ
\\]

\\[
v_{B/W,x}=-12(0.5)=-6\\,\\mathrm{m/s}
\\]

3. **Find the boat's northward component.** The northward side is adjacent to that angle, so use cosine. North is positive y.

\\[
v_{B/W,y}=12\\cos30^\\circ
\\]

\\[
v_{B/W,y}=12(0.8660)=10.392\\,\\mathrm{m/s}
\\]

4. **Write the river components.** The river flows entirely east, with no north or south motion.

\\[
v_{W/G,x}=+6\\,\\mathrm{m/s}
\\]

\\[
v_{W/G,y}=0
\\]

5. **Add the horizontal components.**

\\[
v_{B/G,x}=v_{B/W,x}+v_{W/G,x}
\\]

\\[
v_{B/G,x}=-6+6=0\\,\\mathrm{m/s}
\\]

6. **Add the northward components.**

\\[
v_{B/G,y}=v_{B/W,y}+v_{W/G,y}
\\]

\\[
v_{B/G,y}=10.392+0=10.392\\,\\mathrm{m/s}
\\]

The ground velocity has no east or west component and a positive northward component. Its direction is therefore **due north**. Its speed is about 10.4 m/s.

**Use this method again**

Label frames → check angle's reference axis → assign component signs → add x/y separately → find ground direction.

**Check**

The boat deliberately aims west to compensate for eastward drift. Both horizontal speeds are 6 m/s, so complete cancellation and a due-north path make physical sense.
:::`};export{e as default};