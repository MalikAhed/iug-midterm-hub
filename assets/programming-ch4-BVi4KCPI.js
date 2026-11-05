var e={id:`programming-ch4`,title:`Chapter 4 · Selections`,summary:`211–270 · Moodle textbook and lecture-slide MCQ practice.`,subjectId:`programming`,reward:0,status:`published`,authoringSource:`:::mcq
id: prog-ch4-01
title: Chapter 4 · if
kicker: Choose the correct answer
reference: [Local PDF, p. 212](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392349)
question: When is the body of an \`if\` statement executed?
- [x] a | When its condition evaluates to True
- [ ] b | When its condition is any number
- [ ] c | Only when input is used
- [ ] d | Before the condition is evaluated
explanation: The suite is selected only for a true condition.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch4-02
title: Chapter 4 · comparison
kicker: Choose the correct answer
reference: [Local PDF, p. 216](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392349)
question: What is the result of \`5 != 5\`?
- [x] a | False
- [ ] b | True
- [ ] c | 5
- [ ] d | None
explanation: != means not equal; equal operands make it false.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch4-03
title: Chapter 4 · chained comparison
kicker: Choose the correct answer
reference: [Local PDF, p. 220](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392349)
question: What does \`1 < x < 10\` mean?
- [x] a | x is greater than 1 and less than 10
- [ ] b | x is less than 1 or greater than 10
- [ ] c | x equals 1 or 10
- [ ] d | It compares strings only
explanation: Python supports chained comparisons as a conjunction.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch4-04
title: Chapter 4 · logical and
kicker: Choose the correct answer
reference: [Local PDF, p. 225](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392349)
question: When is \`a and b\` true?
- [x] a | Only when both a and b are true
- [ ] b | When either is true
- [ ] c | When both are false
- [ ] d | Only when a is a number
explanation: and requires both operands to be truthy.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch4-05
title: Chapter 4 · logical or
kicker: Choose the correct answer
reference: [Local PDF, p. 229](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392349)
question: When is \`a or b\` false?
- [x] a | When both a and b are false
- [ ] b | When either is false
- [ ] c | When both are true
- [ ] d | Never
explanation: or is false only if neither operand is truthy.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch4-06
title: Chapter 4 · nested selection
kicker: Choose the correct answer
reference: [Local PDF, p. 235](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392349)
question: Why can an \`elif\` chain avoid testing later conditions?
- [x] a | The first true branch is selected and the rest are skipped
- [ ] b | All branches execute simultaneously
- [ ] c | elif always runs before if
- [ ] d | Conditions are ignored
explanation: An if/elif/else chain selects at most one branch.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch4-07
title: Chapter 4 · conditional expression
kicker: Choose the correct answer
reference: [Local PDF, p. 241](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392349)
question: What is \`'even' if n % 2 == 0 else 'odd'\`?
- [x] a | A conditional expression
- [ ] b | A loop
- [ ] c | A function definition
- [ ] d | A list slice
explanation: It chooses one of two values from a condition.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch4-08
title: Chapter 4 · truthiness
kicker: Choose the correct answer
reference: [Local PDF, p. 247](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392349)
question: Which value is false in a Boolean context?
- [x] a | 0
- [ ] b | -1
- [ ] c | 'hello'
- [ ] d | [1]
explanation: Numeric zero is false; nonzero numbers and nonempty containers are true.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch4-09
title: Chapter 4 · precedence
kicker: Choose the correct answer
reference: [Local PDF, p. 253](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392349)
question: In \`not a and b\`, which operation occurs first?
- [x] a | not a
- [ ] b | a and b
- [ ] c | assignment
- [ ] d | comparison after and
explanation: not has higher Boolean precedence than and.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch4-10
title: Chapter 4 · defensive branch
kicker: Choose the correct answer
reference: [Local PDF, p. 261](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392349)
question: Which branch handles every case not matched earlier?
- [x] a | else
- [ ] b | elif
- [ ] c | default()
- [ ] d | finally
explanation: else is the fallback suite in a selection statement.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-extra-ch4-01
title: Chapter 4 · branch trace
kicker: Choose the correct answer
reference: [Liang Python textbook · local PDF p. 214](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Chapter 4 slides · local PDF](../books/392349.pdf#page=1) · [MIT OCW 6.0001 assignments](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/pages/assignments/) · [Berkeley CS 61A exams](https://cs61a.org/exams/)
question: If \`score = 72\`, which branch runs in \`if score >= 90: A elif score >= 60: B else: C\`?
- [x] a | B
- [ ] b | A
- [ ] c | C
- [ ] d | Both A and B
explanation: 72 is below 90 but at least 60, so the \`elif\` suite runs.
hint: Check conditions from top to bottom.
:::

:::mcq
id: prog-extra-ch4-02
title: Chapter 4 · logical precedence
kicker: Choose the correct answer
reference: [Liang Python textbook · local PDF p. 226](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Chapter 4 slides · local PDF](../books/392349.pdf#page=1) · [MIT OCW 6.0001 assignments](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/pages/assignments/) · [Berkeley CS 61A exams](https://cs61a.org/exams/)
question: What is the value of \`not (2 > 1 and 4 < 3)\`?
- [x] a | True
- [ ] b | False
- [ ] c | 2
- [ ] d | None
explanation: The inner \`and\` is false because 4<3 is false; \`not False\` is true.
hint: Evaluate the parenthesized expression before applying \`not\`.
:::

:::mcq
id: prog-extra-ch4-03
title: Chapter 4 · leap-year pattern
kicker: Choose the correct answer
reference: [Liang Python textbook · local PDF p. 238](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Chapter 4 slides · local PDF](../books/392349.pdf#page=1) · [MIT OCW 6.0001 assignments](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/pages/assignments/) · [Berkeley CS 61A exams](https://cs61a.org/exams/)
question: Which condition correctly identifies a leap year \`y\` under the Gregorian rule?
- [x] a | y % 400 == 0 or (y % 4 == 0 and y % 100 != 0)
- [ ] b | y % 4 == 0 and y % 100 == 0
- [ ] c | y % 100 == 0 or y % 400 == 0
- [ ] d | y % 4 != 0
explanation: Years divisible by 400 are leap years; other century years are excluded, while multiples of 4 are included.
hint: Keep the century exception inside the non-400 branch.
:::

:::mcq
id: prog-extra-ch4-04
title: Chapter 4 · conditional expression
kicker: Choose the correct answer
reference: [Liang Python textbook · local PDF p. 243](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Chapter 4 slides · local PDF](../books/392349.pdf#page=1) · [MIT OCW 6.0001 assignments](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/pages/assignments/) · [Berkeley CS 61A exams](https://cs61a.org/exams/)
question: What is the value of \`'pass' if mark >= 50 else 'fail'\` when \`mark = 49\`?
- [x] a | 'fail'
- [ ] b | 'pass'
- [ ] c | 49
- [ ] d | None
explanation: The condition is false, so the expression selects the value after \`else\`.
hint: A conditional expression has the form true-value if condition else false-value.
:::

:::mcq
id: prog-extra-ch4-05
title: Chapter 4 · range selection
kicker: Choose the correct answer
reference: [Liang Python textbook · local PDF p. 255](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Chapter 4 slides · local PDF](../books/392349.pdf#page=1) · [MIT OCW 6.0001 assignments](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/pages/assignments/) · [Berkeley CS 61A exams](https://cs61a.org/exams/)
question: Which test accepts an integer \`n\` in the inclusive range 10 through 20?
- [x] a | 10 <= n <= 20
- [ ] b | 10 < n < 20
- [ ] c | n <= 10 and n >= 20
- [ ] d | n == 10 or n == 20 only
explanation: The chained comparison includes both endpoints.
hint: Use \`<=\` when the boundary values are valid.
:::

:::mcq
id: prog-extra-ch4-06
title: Chapter 4 · truthy strings
kicker: Choose the correct answer
reference: [Liang Python textbook · local PDF p. 249](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Chapter 4 slides · local PDF](../books/392349.pdf#page=1) · [MIT OCW 6.0001 assignments](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/pages/assignments/) · [Berkeley CS 61A exams](https://cs61a.org/exams/)
question: What does \`if ''\` do in Python?
- [x] a | It skips the branch because the empty string is false
- [ ] b | It always enters the branch
- [ ] c | It raises a syntax error
- [ ] d | It converts the string to zero
explanation: An empty string is falsy in a Boolean context.
hint: Remember the truthiness of empty strings and empty containers.
:::

:::mcq
id: prog-book-checkpoint-4-1
title: Chapter 4 · Textbook checkpoint 4.1
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 4.1, p. 93](/library/392320.pdf#page=113)
question: ![Complete original checkpoint 4.1, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-4-1.webp) Select the correct response.
- [x] a | <, <=, >, >=, ==, !=
- [ ] b | +, −, *, /, //, %
- [ ] c | and, or, not, in, is, def
- [ ] d | =, +=, -=, *=, /=, %=
explanation: Comparison operators compare operand values.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-4-2
title: Chapter 4 · Textbook checkpoint 4.2
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 4.2, p. 93](/library/392320.pdf#page=113)
question: ![Complete original checkpoint 4.2, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-4-2.webp) Select the correct response.
- [x] a | i = 1, j = 0, b1 = True, b2 = False
- [ ] b | i = 0, j = 1, b1 = False, b2 = True
- [ ] c | All four conversions raise errors.
- [ ] d | i = True, j = False, b1 = 4, b2 = 0
explanation: True and False convert to 1 and 0; nonzero numbers are truthy and zero is falsy.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-4-3
title: Chapter 4 · Textbook checkpoint 4.3
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 4.3, p. 95](/library/392320.pdf#page=115)
question: ![Complete original checkpoint 4.3, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-4-3.webp) Select the correct response.
- [x] a | random.randrange(20)
- [ ] b | random.randint(0, 20)
- [ ] c | random.randrange(1, 20)
- [ ] d | random.randrange(19)
explanation: randrange excludes its stop, so the possible values are 0 through 19.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-4-4
title: Chapter 4 · Textbook checkpoint 4.4
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 4.4, p. 95](/library/392320.pdf#page=115)
question: ![Complete original checkpoint 4.4, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-4-4.webp) Select the correct response.
- [x] a | random.randrange(10, 20)
- [ ] b | random.randint(10, 20)
- [ ] c | random.randrange(20, 10)
- [ ] d | random.randrange(10, 19)
explanation: The result includes 10 and excludes 20.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-4-5
title: Chapter 4 · Textbook checkpoint 4.5
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 4.5, p. 95](/library/392320.pdf#page=115)
question: ![Complete original checkpoint 4.5, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-4-5.webp) Select the correct response.
- [x] a | random.randint(10, 50)
- [ ] b | random.randrange(10, 50)
- [ ] c | random.randint(11, 50)
- [ ] d | random.randint(10, 49)
explanation: randint includes both endpoints.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-4-6
title: Chapter 4 · Textbook checkpoint 4.6
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 4.6, p. 95](/library/392320.pdf#page=115)
question: ![Complete original checkpoint 4.6, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-4-6.webp) Select the correct response.
- [x] a | random.randrange(2)
- [ ] b | random.randrange(1)
- [ ] c | random.randint(1, 2)
- [ ] d | random.randrange(0)
explanation: The possible values of range(2) are 0 and 1.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-4-7
title: Chapter 4 · Textbook checkpoint 4.7
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 4.7, p. 96](/library/392320.pdf#page=116)
question: ![Complete original checkpoint 4.7, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-4-7.webp) Select the correct response.
- [x] a | if y > 0: x = 1
- [ ] b | if x > 0: y = 1
- [ ] c | if y >= 0: x = 1
- [ ] d | if y < 0: x = 1
explanation: The condition is strictly y > 0; x is the assignment target.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-4-8
title: Chapter 4 · Textbook checkpoint 4.8
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 4.8, p. 96](/library/392320.pdf#page=116)
question: ![Complete original checkpoint 4.8, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-4-8.webp) Select the correct response.
- [x] a | if score > 90: pay *= 1.03
- [ ] b | if score >= 90: pay *= 0.03
- [ ] c | if pay > 90: score *= 1.03
- [ ] d | if score > 90: pay += 3
explanation: A 3% increase multiplies the original pay by 1.03.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-4-9
title: Chapter 4 · Textbook checkpoint 4.9
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 4.9, p. 101](/library/392320.pdf#page=121)
question: ![Complete original checkpoint 4.9, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-4-9.webp) Select the correct response.
- [x] a | Multiply pay by 1.03 when score > 90; otherwise multiply it by 1.01.
- [ ] b | Multiply pay by 0.03 or 0.01.
- [ ] c | Add 3 or 1 currency units.
- [ ] d | Increase pay only if score equals 90.
explanation: Percentage increases include the original amount plus the stated fraction.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-4-10
title: Chapter 4 · Textbook checkpoint 4.10
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 4.10, p. 102](/library/392320.pdf#page=122)
question: ![Complete original checkpoint 4.10, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-4-10.webp) Read (b) exactly as printed, including its punctuation.
- [x] a | (a), with 30: prints both even and odd messages. (b) as printed: SyntaxError, because else lacks a colon.
- [ ] b | Both versions print only the even message.
- [ ] c | Both versions print only the odd message.
- [ ] d | (a) prints nothing; (b) prints 35 is even.
explanation: The second print in (a) is unconditional. The source image omits the colon after else in (b); Python requires it.
hint: Read the complete source prompt and trace the values in order.
:::`};export{e as default};