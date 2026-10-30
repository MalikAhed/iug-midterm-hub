var e={id:`programming-ch2`,title:`Chapter 2 · Elementary programming`,summary:`91–150 · Moodle textbook and lecture-slide MCQ practice.`,subjectId:`programming`,reward:0,status:`published`,authoringSource:`:::mcq
id: prog-ch2-01
title: Chapter 2 · assignment
kicker: Choose the correct answer
reference: [Local PDF, p. 93](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392334)
question: After \`x = 5; x = x + 2\`, what is x?
- [x] a | 7
- [ ] b | 5
- [ ] c | 2
- [ ] d | 25
explanation: The right-hand expression is evaluated using the old x, then assigned.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch2-02
title: Chapter 2 · augmented assignment
kicker: Choose the correct answer
reference: [Local PDF, p. 97](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392334)
question: Which statement adds 3 to \`count\`?
- [x] a | count += 3
- [ ] b | count =+ 3
- [ ] c | count ++ 3
- [ ] d | add(count, 3)
explanation: \`+=\` combines addition and assignment.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch2-03
title: Chapter 2 · conversion
kicker: Choose the correct answer
reference: [Local PDF, p. 101](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392334)
question: What does \`float('7')\` produce?
- [x] a | 7.0
- [ ] b | '7'
- [ ] c | True
- [ ] d | An error because 7 is not numeric
explanation: The numeric text is converted to a floating-point value.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch2-04
title: Chapter 2 · remainder
kicker: Choose the correct answer
reference: [Local PDF, p. 105](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392334)
question: What is \`29 % 6\`?
- [x] a | 5
- [ ] b | 4
- [ ] c | 6
- [ ] d | 0
explanation: 29 = 4×6 + 5, so the remainder is 5.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch2-05
title: Chapter 2 · exponentiation
kicker: Choose the correct answer
reference: [Local PDF, p. 109](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392334)
question: Which operator performs exponentiation in Python?
- [x] a | **
- [ ] b | ^
- [ ] c | ^^
- [ ] d | //
explanation: Python uses ** for powers; ^ is bitwise XOR.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch2-06
title: Chapter 2 · formatted output
kicker: Choose the correct answer
reference: [Local PDF, p. 116](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392334)
question: What does \`print('A', 'B')\` display by default?
- [x] a | A B
- [ ] b | AB
- [ ] c | A,B
- [ ] d | ['A','B']
explanation: print separates multiple arguments with a space by default.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch2-07
title: Chapter 2 · numeric precision
kicker: Choose the correct answer
reference: [Local PDF, p. 121](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392334)
question: Why can \`0.1 + 0.2\` display as \`0.30000000000000004\`?
- [x] a | Binary floating-point cannot represent some decimal fractions exactly
- [ ] b | Python randomly changes decimal digits
- [ ] c | The + operator rounds toward infinity
- [ ] d | 0.1 is a string
explanation: The representation uses finite binary fractions, so a tiny rounding error can appear.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch2-08
title: Chapter 2 · string indexing
kicker: Choose the correct answer
reference: [Local PDF, p. 127](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392334)
question: What is \`'Python'[0]\`?
- [x] a | 'P'
- [ ] b | 'y'
- [ ] c | 'n'
- [ ] d | 'Python'
explanation: Python sequences are zero-indexed.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch2-09
title: Chapter 2 · math module
kicker: Choose the correct answer
reference: [Local PDF, p. 133](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392334)
question: Which call returns the square root of 25?
- [x] a | math.sqrt(25)
- [ ] b | math.root(25)
- [ ] c | sqrt.math(25)
- [ ] d | math.square(25)
explanation: The math module provides sqrt().
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch2-10
title: Chapter 2 · immutable assignment
kicker: Choose the correct answer
reference: [Local PDF, p. 142](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392334)
question: In \`a, b = b, a\`, what happens?
- [x] a | The two values are exchanged
- [ ] b | Both become zero
- [ ] c | A syntax error always occurs
- [ ] d | Only a changes
explanation: Tuple unpacking evaluates the right side before assigning both names.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-extra-ch2-01
title: Chapter 2 · assignment trace
kicker: Choose the correct answer
reference: [Liang Python textbook · local PDF p. 94](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Chapter 2 slides · local PDF](../books/392334.pdf) · [MIT OCW 6.0001 assignments](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/pages/assignments/) · [Berkeley CS 61A exams](https://cs61a.org/exams/)
question: After \`x = 4; y = x + 3; x = y * 2\`, what are \`(x, y)\`?
- [x] a | (14, 7)
- [ ] b | (7, 14)
- [ ] c | (8, 7)
- [ ] d | (14, 4)
explanation: \`y\` becomes 7, then the final assignment makes \`x\` equal to 14.
hint: Execute assignments in order; an assignment does not change older variables unless written.
:::

:::mcq
id: prog-extra-ch2-02
title: Chapter 2 · remainder trace
kicker: Choose the correct answer
reference: [Liang Python textbook · local PDF p. 106](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Chapter 2 slides · local PDF](../books/392334.pdf) · [MIT OCW 6.0001 assignments](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/pages/assignments/) · [Berkeley CS 61A exams](https://cs61a.org/exams/)
question: What does \`38 % 7\` return?
- [x] a | 3
- [ ] b | 5
- [ ] c | 6
- [ ] d | 7
explanation: 38 = 5×7 + 3, so the remainder is 3.
hint: Write the dividend as quotient × divisor + remainder.
:::

:::mcq
id: prog-extra-ch2-03
title: Chapter 2 · formatted output
kicker: Choose the correct answer
reference: [Liang Python textbook · local PDF p. 118](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Chapter 2 slides · local PDF](../books/392334.pdf) · [MIT OCW 6.0001 assignments](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/pages/assignments/) · [Berkeley CS 61A exams](https://cs61a.org/exams/)
question: What is printed by \`print(f"{5/2:.1f}")\`?
- [x] a | 2.5
- [ ] b | 2.50
- [ ] c | 2
- [ ] d | 5.0
explanation: 5/2 is 2.5 and \`.1f\` requests one digit after the decimal point.
hint: Evaluate the expression before applying the format specification.
:::

:::mcq
id: prog-extra-ch2-04
title: Chapter 2 · integer conversion
kicker: Choose the correct answer
reference: [Liang Python textbook · local PDF p. 102](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Chapter 2 slides · local PDF](../books/392334.pdf) · [MIT OCW 6.0001 assignments](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/pages/assignments/) · [Berkeley CS 61A exams](https://cs61a.org/exams/)
question: What value does \`int(6.9)\` produce?
- [x] a | 6
- [ ] b | 7
- [ ] c | 6.9
- [ ] d | An error
explanation: Converting a positive float to int discards the fractional part rather than rounding.
hint: \`int()\` truncates toward zero for a finite float.
:::

:::mcq
id: prog-extra-ch2-05
title: Chapter 2 · simultaneous assignment
kicker: Choose the correct answer
reference: [Liang Python textbook · local PDF p. 143](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Chapter 2 slides · local PDF](../books/392334.pdf) · [MIT OCW 6.0001 assignments](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/pages/assignments/) · [Berkeley CS 61A exams](https://cs61a.org/exams/)
question: After \`a, b = 2, 5; a, b = b - a, a + b\`, what is \`(a, b)\`?
- [x] a | (3, 7)
- [ ] b | (5, 7)
- [ ] c | (3, 5)
- [ ] d | (7, 3)
explanation: The right side is evaluated first using the old values: (5−2, 2+5) = (3,7).
hint: Both right-hand expressions see the original pair.
:::

:::mcq
id: prog-extra-ch2-06
title: Chapter 2 · numeric function
kicker: Choose the correct answer
reference: [Liang Python textbook · local PDF p. 137](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Chapter 2 slides · local PDF](../books/392334.pdf) · [MIT OCW 6.0001 assignments](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/pages/assignments/) · [Berkeley CS 61A exams](https://cs61a.org/exams/)
question: For \`math.ceil(3.01)\`, which value is returned?
- [x] a | 4
- [ ] b | 3
- [ ] c | 3.01
- [ ] d | 0
explanation: \`ceil\` returns the least integer greater than or equal to its argument.
hint: Ceiling moves upward even when the fractional part is small.
:::

:::mcq
id: prog-book-checkpoint-2-1
title: Chapter 2 · Textbook checkpoint 2.1
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 2.1, p. 34](/library/392320.pdf#page=54)
question: ![Complete original checkpoint 2.1, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-2-1.webp) Select the correct response.
- [x] a | area is 11.0
- [ ] b | area is 11
- [ ] c | area is 7.5
- [ ] d | area is 5.52
explanation: 5.5 × 2 is the float 11.0; print inserts a separating space.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-2-2
title: Chapter 2 · Textbook checkpoint 2.2
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 2.2, p. 34](/library/392320.pdf#page=54)
question: ![Complete original checkpoint 2.2, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-2-2.webp) Select the correct response.
- [x] a | miles = 100; kilometers = miles * 1.609; print(kilometers), displaying 160.9.
- [ ] b | kilometers = 100 / 1.609, displaying about 62.15.
- [ ] c | kilometers = miles + 1.609, displaying 101.609.
- [ ] d | kilometers = 1.609, displaying 1.609.
explanation: The conversion multiplies the original miles by 1.609.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-2-3
title: Chapter 2 · Textbook checkpoint 2.3
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 2.3, p. 35](/library/392320.pdf#page=55)
question: ![Complete original checkpoint 2.3, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-2-3.webp) Select the correct response.
- [x] a | value = float(input("Enter a number: "))
- [ ] b | value = input + 1
- [ ] c | value = float("Enter a number: ")
- [ ] d | input(value, float)
explanation: input reads text, then float converts numeric text to a number. This avoids evaluating arbitrary entered expressions.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-2-4
title: Chapter 2 · Textbook checkpoint 2.4
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 2.4, p. 35](/library/392320.pdf#page=55)
question: ![Complete original checkpoint 2.4, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-2-4.webp) Select the correct response.
- [x] a | A SyntaxError occurs because 5a is not a valid expression.
- [ ] b | The value is 5.
- [ ] c | The value is the string 5a.
- [ ] d | The value is zero.
explanation: eval attempts to parse 5a as Python code, which is invalid.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-2-5
title: Chapter 2 · Textbook checkpoint 2.5
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 2.5, p. 35](/library/392320.pdf#page=55)
question: ![Complete original checkpoint 2.5, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-2-5.webp) Select the correct response.
- [x] a | Continue within parentheses, brackets, or braces, or use an explicit backslash at the line end.
- [ ] b | Insert a semicolon anywhere inside a word.
- [ ] c | Break a quoted string at any position without syntax.
- [ ] d | Indentation alone always continues an expression.
explanation: Implicit continuation inside delimiters and explicit backslash continuation preserve a logical statement.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-2-6
title: Chapter 2 · Textbook checkpoint 2.6
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 2.6, p. 36](/library/392320.pdf#page=56)
question: ![Complete original checkpoint 2.6, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-2-6.webp) Select the correct response.
- [x] a | Valid non-keywords: miles, Test, apps, x, y, radius. Keywords: if, elif.
- [ ] b | Valid: a+b, b−a, 4#R; keywords: miles and Test.
- [ ] c | All listed names are valid non-keywords.
- [ ] d | Only x and y are valid; if and elif are normal names.
explanation: Operators, punctuation, and a leading digit invalidate the other proposed identifiers.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-2-7
title: Chapter 2 · Textbook checkpoint 2.7
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 2.7, p. 39](/library/392320.pdf#page=59)
question: ![Complete original checkpoint 2.7, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-2-7.webp) Choose the naming convention used in this textbook.
- [x] a | Use descriptive variable names beginning with lowercase; the book uses camelCase for multiple words.
- [ ] b | Begin every variable with a digit.
- [ ] c | Use Python keywords as names.
- [ ] d | Every name must be a single uppercase letter.
explanation: This is the chapter naming convention, not a restriction on legal Python identifiers.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-2-8
title: Chapter 2 · Textbook checkpoint 2.8
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 2.8, p. 39](/library/392320.pdf#page=59)
question: ![Complete original checkpoint 2.8, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-2-8.webp) Select the correct response.
- [x] a | A literal cannot be an assignment target; write a = 2.
- [ ] b | The statement correctly stores 2 in a.
- [ ] c | Use 2 == a to assign the value.
- [ ] d | Only the spaces are wrong.
explanation: Assignment binds a target name to a value; it cannot assign into the literal 2.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-2-9
title: Chapter 2 · Textbook checkpoint 2.9
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 2.9, p. 39](/library/392320.pdf#page=59)
question: ![Complete original checkpoint 2.9, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-2-9.webp) Select the correct response.
- [x] a | x = 0, y = 0, z = 0
- [ ] b | x = 0, y = 1, z = 2
- [ ] c | Only x is assigned.
- [ ] d | A syntax error occurs.
explanation: Chained assignment binds all three names to zero.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-2-10
title: Chapter 2 · Textbook checkpoint 2.10
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 2.10, p. 39](/library/392320.pdf#page=59)
question: ![Complete original checkpoint 2.10, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-2-10.webp) Select the correct response.
- [x] a | a = 2, b = 1
- [ ] b | a = 1, b = 2
- [ ] c | a = 2, b = 2
- [ ] d | a = 1, b = 1
explanation: The right-hand values are evaluated before assignment, so the names exchange values.
hint: Read the complete source prompt and trace the values in order.
:::`};export{e as default};