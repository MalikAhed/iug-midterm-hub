var e={id:`programming-ch5`,title:`Chapter 5 · Loops`,summary:`271–325 · Moodle textbook and lecture-slide MCQ practice.`,subjectId:`programming`,reward:0,status:`published`,authoringSource:`:::mcq
id: prog-ch5-01
title: Chapter 5 · while
kicker: Choose the correct answer
reference: [Local PDF, p. 272](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392357)
question: A \`while\` loop repeats while its condition is…
- [x] a | True
- [ ] b | False
- [ ] c | a string
- [ ] d | undefined
explanation: The condition is checked before each iteration.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch5-02
title: Chapter 5 · range
kicker: Choose the correct answer
reference: [Local PDF, p. 276](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392357)
question: What values does \`range(3)\` generate?
- [x] a | 0, 1, 2
- [ ] b | 1, 2, 3
- [ ] c | 0, 1, 2, 3
- [ ] d | 3 only
explanation: range starts at zero and excludes the stop value.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch5-03
title: Chapter 5 · for
kicker: Choose the correct answer
reference: [Local PDF, p. 281](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392357)
question: What does \`for ch in 'abc'\` iterate over?
- [x] a | The characters a, b, and c
- [ ] b | The indices 1, 2, and 3
- [ ] c | One whole string only
- [ ] d | Nothing
explanation: Strings are iterable sequences of characters.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch5-04
title: Chapter 5 · accumulator
kicker: Choose the correct answer
reference: [Local PDF, p. 286](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392357)
question: What is the usual purpose of initializing \`total = 0\` before a sum loop?
- [x] a | To accumulate a running sum
- [ ] b | To stop the loop
- [ ] c | To create a file
- [ ] d | To convert strings to lists
explanation: Each iteration can add a value to the accumulator.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch5-05
title: Chapter 5 · break
kicker: Choose the correct answer
reference: [Local PDF, p. 291](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392357)
question: What does \`break\` do inside a loop?
- [x] a | Immediately exits the nearest loop
- [ ] b | Skips only the current statement
- [ ] c | Restarts the loop
- [ ] d | Pauses for input
explanation: break transfers control after the loop.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch5-06
title: Chapter 5 · continue
kicker: Choose the correct answer
reference: [Local PDF, p. 296](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392357)
question: What does \`continue\` do?
- [x] a | Skips to the next iteration
- [ ] b | Exits every enclosing function
- [ ] c | Repeats the current iteration forever
- [ ] d | Deletes the loop variable
explanation: continue jumps to the loop's next condition check.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch5-07
title: Chapter 5 · nested loop
kicker: Choose the correct answer
reference: [Local PDF, p. 301](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392357)
question: How many times does the inner loop run for each outer iteration?
- [x] a | Its own complete iteration count
- [ ] b | Always once
- [ ] c | Never
- [ ] d | Only after break
explanation: A nested loop completes its iterations for each outer iteration unless interrupted.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch5-08
title: Chapter 5 · sentinel
kicker: Choose the correct answer
reference: [Local PDF, p. 307](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392357)
question: A sentinel-controlled loop stops when…
- [x] a | A special terminating value is read
- [ ] b | The counter reaches zero only
- [ ] c | The program imports math
- [ ] d | A list becomes sorted
explanation: The sentinel marks the end of input.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch5-09
title: Chapter 5 · off-by-one
kicker: Choose the correct answer
reference: [Local PDF, p. 313](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392357)
question: Why is \`range(1, 6)\` useful for counting 1 through 5?
- [x] a | The stop value 6 is excluded
- [ ] b | range always includes both ends
- [ ] c | It starts at 6
- [ ] d | It generates random numbers
explanation: The half-open range includes the start and excludes the stop.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch5-10
title: Chapter 5 · loop else
kicker: Choose the correct answer
reference: [Local PDF, p. 320](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392357)
question: When does a loop's \`else\` suite run?
- [x] a | When the loop finishes normally without break
- [ ] b | Only when break executes
- [ ] c | Before the loop starts
- [ ] d | Only for while loops
explanation: A loop else is skipped when break exits the loop.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-extra-ch5-01
title: Chapter 5 · loop trace
kicker: Choose the correct answer
reference: [Liang Python textbook · local PDF p. 277](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Chapter 5 slides · local PDF](../books/392357.pdf) · [MIT OCW 6.0001 assignments](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/pages/assignments/) · [Berkeley CS 61A exams](https://cs61a.org/exams/)
question: What is the final value of \`s\` after \`s=0; for k in range(1,5): s += k\`?
- [x] a | 10
- [ ] b | 15
- [ ] c | 4
- [ ] d | 5
explanation: The loop adds 1+2+3+4 = 10.
hint: \`range(1,5)\` stops before 5.
:::

:::mcq
id: prog-extra-ch5-02
title: Chapter 5 · while update
kicker: Choose the correct answer
reference: [Liang Python textbook · local PDF p. 273](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Chapter 5 slides · local PDF](../books/392357.pdf) · [MIT OCW 6.0001 assignments](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/pages/assignments/) · [Berkeley CS 61A exams](https://cs61a.org/exams/)
question: How many times does \`n=16; while n>1: n//=2\` execute?
- [x] a | 4
- [ ] b | 3
- [ ] c | 5
- [ ] d | 16
explanation: The values are 16, 8, 4, 2, then 1: four loop bodies.
hint: List the value at the start of each iteration.
:::

:::mcq
id: prog-extra-ch5-03
title: Chapter 5 · nested-loop count
kicker: Choose the correct answer
reference: [Liang Python textbook · local PDF p. 303](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Chapter 5 slides · local PDF](../books/392357.pdf) · [MIT OCW 6.0001 assignments](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/pages/assignments/) · [Berkeley CS 61A exams](https://cs61a.org/exams/)
question: How many \`*\` characters are printed by \`for i in range(3): for j in range(2): print('*')\`?
- [x] a | 6
- [ ] b | 5
- [ ] c | 3
- [ ] d | 2
explanation: The inner loop runs twice for each of three outer iterations: 3×2 = 6.
hint: Multiply the independent iteration counts.
:::

:::mcq
id: prog-extra-ch5-04
title: Chapter 5 · continue
kicker: Choose the correct answer
reference: [Liang Python textbook · local PDF p. 297](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Chapter 5 slides · local PDF](../books/392357.pdf) · [MIT OCW 6.0001 assignments](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/pages/assignments/) · [Berkeley CS 61A exams](https://cs61a.org/exams/)
question: What values are added by \`for n in range(1,6): if n%2==0: continue; total += n\`?
- [x] a | 1, 3, and 5
- [ ] b | 2 and 4
- [ ] c | 1 through 5
- [ ] d | 0 only
explanation: \`continue\` skips even values, so only odd values reach the addition.
hint: Find the values that survive the \`continue\` condition.
:::

:::mcq
id: prog-extra-ch5-05
title: Chapter 5 · break
kicker: Choose the correct answer
reference: [Liang Python textbook · local PDF p. 292](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Chapter 5 slides · local PDF](../books/392357.pdf) · [MIT OCW 6.0001 assignments](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/pages/assignments/) · [Berkeley CS 61A exams](https://cs61a.org/exams/)
question: What is \`x\` after \`for x in range(10): if x == 3: break\`?
- [x] a | 3
- [ ] b | 2
- [ ] c | 9
- [ ] d | 10
explanation: The loop assigns 3, then immediately exits when the break executes.
hint: The loop variable keeps the value that triggered \`break\`.
:::

:::mcq
id: prog-extra-ch5-06
title: Chapter 5 · loop else
kicker: Choose the correct answer
reference: [Liang Python textbook · local PDF p. 321](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Chapter 5 slides · local PDF](../books/392357.pdf) · [MIT OCW 6.0001 assignments](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/pages/assignments/) · [Berkeley CS 61A exams](https://cs61a.org/exams/)
question: When does \`for item in items: ... else: ...\` execute its \`else\` suite?
- [x] a | After normal completion without \`break\`
- [ ] b | Whenever an item is found
- [ ] c | Only when \`break\` runs
- [ ] d | Before the first iteration
explanation: Loop \`else\` runs only if the loop is not terminated by \`break\`.
hint: Treat \`else\` as the no-break path.
:::

:::mcq
id: prog-book-checkpoint-5-1
title: Chapter 5 · Textbook checkpoint 5.1
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 5.1, p. 142](/library/392320.pdf#page=162)
question: ![Complete original checkpoint 5.1, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-5-1.webp) Select the correct response.
- [x] a | A: always True; B: sometimes True and sometimes False; C: False.
- [ ] b | A, B, and C are always True.
- [ ] c | A: False; B: False; C: True.
- [ ] d | A: True; B: True; C: True.
explanation: The condition is true on entering the body; the last increment makes it false at B and terminates the loop before C.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-5-3
title: Chapter 5 · Textbook checkpoint 5.3
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 5.3, p. 142](/library/392320.pdf#page=162)
question: ![Complete original checkpoint 5.3, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-5-3.webp) Select the correct response.
- [x] a | (a) and (b): infinite, with no output. (c): 9 iterations, printing 2, 4, 6, 8.
- [ ] b | All three run 9 times.
- [ ] c | (a) and (b) print 1 forever; (c) runs 10 times.
- [ ] d | All three terminate immediately.
explanation: In (a) i is never updated; in (b) the update is inside the never-entered even branch. In (c) i increments on every iteration.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-5-4
title: Chapter 5 · Textbook checkpoint 5.4
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 5.4, p. 143](/library/392320.pdf#page=163)
question: ![Complete original checkpoint 5.4, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-5-4.webp) Select the correct response.
- [x] a | (a) never increments count; (b) decreases count forever; (c) has an unindented loop body.
- [ ] b | All three correctly loop 100 times.
- [ ] c | Only (a) has an error.
- [ ] d | Only (b) has an error.
explanation: (a) and (b) do not reach the stop condition; (c) raises an indentation error.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-5-5
title: Chapter 5 · Textbook checkpoint 5.5
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 5.5, p. 143](/library/392320.pdf#page=163)
question: ![Complete original checkpoint 5.5, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-5-5.webp) Select the correct response.
- [x] a | max is 5; number is 0.
- [ ] b | max is 4; number is 5.
- [ ] c | max is 0; number is 0.
- [ ] d | max is 5; number is 5.
explanation: The sentinel 0 ends the loop and remains in number; the largest input seen is 5.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-5-6
title: Chapter 5 · Textbook checkpoint 5.6
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 5.6, p. 144](/library/392320.pdf#page=164)
question: ![Complete original checkpoint 5.6, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-5-6.webp) Select the correct response.
- [x] a | sum is 14; count is 4.
- [ ] b | sum is 14; count is 5.
- [ ] c | sum is 0; count is 4.
- [ ] d | sum is 20; count is 5.
explanation: The five values sum to 14. range(5) ends with count equal to 4.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-5-7
title: Chapter 5 · Textbook checkpoint 5.7
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 5.7, p. 144](/library/392320.pdf#page=164)
question: ![Complete original checkpoint 5.7, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-5-7.webp) Select the correct response.
- [x] a | Yes. A while loop can reproduce iteration; a for loop expresses traversal and iteration bounds more concisely.
- [ ] b | No, for loops can never be expressed with while.
- [ ] c | Only empty for loops can be converted.
- [ ] d | for loops do not have loop variables.
explanation: Explicit iterator/state management can reproduce a for loop, but the for syntax handles ordinary traversal directly.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-5-8
title: Chapter 5 · Textbook checkpoint 5.8
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 5.8, p. 145](/library/392320.pdf#page=165)
question: ![Complete original checkpoint 5.8, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-5-8.webp) Select the correct response.
- [x] a | Start i = 0 and sum = 0; while i <= 1000, add i to sum and then increment i.
- [ ] b | Start i = 1 and loop while i < 1000.
- [ ] c | Start i = 0 and never increment i.
- [ ] d | Start i = 1001 and increment i each time.
explanation: range(1001) visits every integer from 0 through 1000.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-5-10
title: Chapter 5 · Textbook checkpoint 5.10
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 5.10, p. 145](/library/392320.pdf#page=165)
question: ![Complete original checkpoint 5.10, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-5-10.webp) Assume n is a nonnegative integer; ceil means round upward.
- [x] a | For nonnegative integer n: (a) n; (b) n; (c) max(n−5, 0); (d) max(ceil((n−5)/3), 0).
- [ ] b | (a) n+1; (b) n+1; (c) n; (d) n/3.
- [ ] c | All four execute n times.
- [ ] d | (a) n−1; (b) n−1; (c) 5; (d) 3.
explanation: Each iteration advances the counter toward the excluded bound. The step-3 loop needs ceiling division when n > 5.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-5-12
title: Chapter 5 · Textbook checkpoint 5.12
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 5.12, p. 149](/library/392320.pdf#page=169)
question: ![Complete original checkpoint 5.12, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-5-12.webp) Select the correct response.
- [x] a | The greatest common divisor can be one of the numbers themselves, which the half-size upper bounds exclude.
- [ ] b | A common divisor can never exceed 1.
- [ ] c | The remainder operator cannot be used here.
- [ ] d | The counter must decrease.
explanation: For example, gcd(6, 12) = 6; restricting k to at most 6/2 misses the answer.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-5-13
title: Chapter 5 · Textbook checkpoint 5.13
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 5.13, p. 153](/library/392320.pdf#page=173)
question: ![Complete original checkpoint 5.13, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-5-13.webp) Select the correct response.
- [x] a | (a) terminates with Balance is 1; (b) never terminates. break exits the loop; continue starts its next iteration.
- [ ] b | Both terminate with zero.
- [ ] c | (a) is infinite; (b) prints 1.
- [ ] d | Both print 1000.
explanation: Repeated subtraction of 9 leaves 1. break exits then; continue skips the only update and repeats forever.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: past-prog-fa25-patterned-a
title: Past paper · CS 61A Fall 2025 · patterned digits blank a · 2025
kicker: PAST PAPER · UC Berkeley CS 61A Fall 2025 Midterm 1 Solutions
reference: [UC Berkeley CS 61A Fall 2025 Midterm 1 Solutions, p. 7](https://website.cs61a.org/exam/fa25/mt1/61a-fa25-mt1_sol.pdf)
question: In the \`patterned\` exam function, which statement correctly updates the largest odd digit seen so far?
- [x] a | odd = max(odd, last)
- [ ] b | odd = last
- [ ] c | odd = n % 10
- [ ] d | return False
explanation: Correct answer: odd = max(odd, last)
hint: Review the original paper and the lesson concepts before retrying.
:::

:::mcq
id: past-prog-fa25-patterned-b
title: Past paper · CS 61A Fall 2025 · patterned digits blank b · 2025
kicker: PAST PAPER · UC Berkeley CS 61A Fall 2025 Midterm 1 Solutions
reference: [UC Berkeley CS 61A Fall 2025 Midterm 1 Solutions, p. 7](https://website.cs61a.org/exam/fa25/mt1/61a-fa25-mt1_sol.pdf)
question: For the \`patterned\` function, which condition detects that an even digit \`last\` is larger than the pending odd digit?
- [x] a | last > odd
- [ ] b | last < odd
- [ ] c | n % 2 == 1
- [ ] d | odd == 0
explanation: Correct answer: last > odd
hint: Review the original paper and the lesson concepts before retrying.
:::

:::mcq
id: past-prog-fa25-patterned-d
title: Past paper · CS 61A Fall 2025 · patterned digits result · 2025
kicker: PAST PAPER · UC Berkeley CS 61A Fall 2025 Midterm 1 Solutions
reference: [UC Berkeley CS 61A Fall 2025 Midterm 1 Solutions, p. 7](https://website.cs61a.org/exam/fa25/mt1/61a-fa25-mt1_sol.pdf)
question: What expression is returned at the end of the \`patterned\` function?
- [x] a | odd == 0
- [ ] b | odd > 0
- [ ] c | last % 2 == 0
- [ ] d | True
explanation: Correct answer: odd == 0
hint: Review the original paper and the lesson concepts before retrying.
:::

:::mcq
id: past-prog-fa25-sum-sequence-total
title: Past paper · CS 61A Fall 2025 · sequence accumulator · 2025
kicker: PAST PAPER · UC Berkeley CS 61A Fall 2025 Midterm 1 Solutions
reference: [UC Berkeley CS 61A Fall 2025 Midterm 1 Solutions, p. 8](https://website.cs61a.org/exam/fa25/mt1/61a-fa25-mt1_sol.pdf)
question: In the same function, which expression updates the running total before advancing?
- [x] a | total + t
- [ ] b | total + 1
- [ ] c | total + f
- [ ] d | total + f(t)
explanation: Correct answer: total + t
hint: Review the original paper and the lesson concepts before retrying.
:::`};export{e as default};