var e={id:`programming-ch3`,title:`Chapter 3 · Mathematical functions, strings, and objects`,summary:`151–210 · Moodle textbook and lecture-slide MCQ practice.`,subjectId:`programming`,reward:0,status:`published`,authoringSource:`:::mcq
id: prog-ch3-01
title: Chapter 3 · abs
kicker: Choose the correct answer
reference: [Local PDF, p. 152](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392343)
question: What is \`abs(-8)\`?
- [x] a | 8
- [ ] b | -8
- [ ] c | 0
- [ ] d | 64
explanation: abs returns the nonnegative magnitude.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch3-02
title: Chapter 3 · rounding
kicker: Choose the correct answer
reference: [Local PDF, p. 156](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392343)
question: What does \`round(3.14159, 2)\` return?
- [x] a | 3.14
- [ ] b | 3.1
- [ ] c | 3.15
- [ ] d | 3
explanation: The second argument requests two digits after rounding.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch3-03
title: Chapter 3 · string length
kicker: Choose the correct answer
reference: [Local PDF, p. 160](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392343)
question: What is \`len('IUG')\`?
- [x] a | 3
- [ ] b | 2
- [ ] c | 4
- [ ] d | 0
explanation: There are three characters in the string.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch3-04
title: Chapter 3 · slicing
kicker: Choose the correct answer
reference: [Local PDF, p. 164](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392343)
question: What is \`'Python'[1:4]\`?
- [x] a | 'yth'
- [ ] b | 'Pyt'
- [ ] c | 'thon'
- [ ] d | 'Python'
explanation: The start index is included and the stop index is excluded.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch3-05
title: Chapter 3 · concatenation
kicker: Choose the correct answer
reference: [Local PDF, p. 169](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392343)
question: Which expression joins \`IUG\` and \` Gaza\` into one string?
- [x] a | 'IUG' + ' Gaza'
- [ ] b | 'IUG' - ' Gaza'
- [ ] c | 'IUG' / ' Gaza'
- [ ] d | join('IUG', ' Gaza')
explanation: The + operator concatenates strings.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch3-06
title: Chapter 3 · string methods
kicker: Choose the correct answer
reference: [Local PDF, p. 175](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392343)
question: What does \`'  hi  '.strip()\` return?
- [x] a | 'hi'
- [ ] b | '  hi  '
- [ ] c | 'HI'
- [ ] d | ' h i '
explanation: strip removes leading and trailing whitespace.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch3-07
title: Chapter 3 · formatting
kicker: Choose the correct answer
reference: [Local PDF, p. 181](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392343)
question: Which format specifier prints a number with two decimal places?
- [x] a | {:.2f}
- [ ] b | {:.2d}
- [ ] c | {:.2s}
- [ ] d | {:.2i}
explanation: The f format type is for floating-point output.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch3-08
title: Chapter 3 · object identity
kicker: Choose the correct answer
reference: [Local PDF, p. 188](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392343)
question: What does \`is\` test?
- [x] a | Whether two references point to the same object
- [ ] b | Whether two values are numerically equal only
- [ ] c | Whether a string is uppercase
- [ ] d | Whether a function returns a value
explanation: \`==\` compares values; \`is\` compares object identity.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch3-09
title: Chapter 3 · escape sequences
kicker: Choose the correct answer
reference: [Local PDF, p. 194](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392343)
question: What does \`\\n\` represent in a Python string?
- [x] a | A newline
- [ ] b | A tab
- [ ] c | A backslash only
- [ ] d | A null byte
explanation: The escape sequence inserts a line break.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-ch3-10
title: Chapter 3 · membership
kicker: Choose the correct answer
reference: [Local PDF, p. 202](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Moodle activity](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392343)
question: What is the result of \`'py' in 'Python'\`?
- [ ] a | True
- [x] b | False
- [ ] c | 2
- [ ] d | A TypeError
explanation: String membership is case-sensitive: lowercase py does not occur in Python.
hint: Recall the chapter definition, then trace the code carefully.
:::

:::mcq
id: prog-extra-ch3-01
title: Chapter 3 · slicing
kicker: Choose the correct answer
reference: [Liang Python textbook · local PDF p. 165](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Chapter 3 slides · local PDF](../books/392343.pdf#page=1) · [MIT OCW 6.0001 assignments](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/pages/assignments/) · [Berkeley CS 61A exams](https://cs61a.org/exams/)
question: What is \`s = 'computer'; s[2:6]\`?
- [x] a | 'mput'
- [ ] b | 'comp'
- [ ] c | 'puter'
- [ ] d | 'mpute'
explanation: Indices 2, 3, 4, and 5 are included; index 6 is excluded.
hint: Remember that a slice stops immediately before its end index.
:::

:::mcq
id: prog-extra-ch3-02
title: Chapter 3 · string immutability
kicker: Choose the correct answer
reference: [Liang Python textbook · local PDF p. 174](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Chapter 3 slides · local PDF](../books/392343.pdf#page=1) · [MIT OCW 6.0001 assignments](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/pages/assignments/) · [Berkeley CS 61A exams](https://cs61a.org/exams/)
question: What happens after \`s = 'IUG'; s[0] = 'X'\`?
- [x] a | A TypeError is raised
- [ ] b | s becomes 'XUG'
- [ ] c | s becomes 'IUX'
- [ ] d | The assignment is ignored
explanation: Strings are immutable; individual characters cannot be assigned in place.
hint: A string operation must create a new string instead of changing a character.
:::

:::mcq
id: prog-extra-ch3-03
title: Chapter 3 · math function
kicker: Choose the correct answer
reference: [Liang Python textbook · local PDF p. 153](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Chapter 3 slides · local PDF](../books/392343.pdf#page=1) · [MIT OCW 6.0001 assignments](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/pages/assignments/) · [Berkeley CS 61A exams](https://cs61a.org/exams/)
question: What is \`math.floor(-2.1)\`?
- [x] a | -3
- [ ] b | -2
- [ ] c | 2
- [ ] d | 2.1
explanation: Floor means the greatest integer less than or equal to the value, so it is -3.
hint: Flooring a negative number is different from truncating it.
:::

:::mcq
id: prog-extra-ch3-04
title: Chapter 3 · method result
kicker: Choose the correct answer
reference: [Liang Python textbook · local PDF p. 177](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Chapter 3 slides · local PDF](../books/392343.pdf#page=1) · [MIT OCW 6.0001 assignments](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/pages/assignments/) · [Berkeley CS 61A exams](https://cs61a.org/exams/)
question: What does \`'banana'.find('na')\` return?
- [x] a | 2
- [ ] b | 1
- [ ] c | 3
- [ ] d | -1
explanation: The first \`na\` begins at zero-based index 2.
hint: Count from index zero and return the first matching start.
:::

:::mcq
id: prog-extra-ch3-05
title: Chapter 3 · format precision
kicker: Choose the correct answer
reference: [Liang Python textbook · local PDF p. 182](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Chapter 3 slides · local PDF](../books/392343.pdf#page=1) · [MIT OCW 6.0001 assignments](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/pages/assignments/) · [Berkeley CS 61A exams](https://cs61a.org/exams/)
question: What does \`'{:.2f}'.format(3.456)\` produce?
- [x] a | '3.46'
- [ ] b | '3.45'
- [ ] c | '3.456'
- [ ] d | '3.5'
explanation: Formatting to two fractional digits rounds 3.456 to 3.46.
hint: The result is text, and the precision is two digits after the decimal point.
:::

:::mcq
id: prog-extra-ch3-06
title: Chapter 3 · membership case
kicker: Choose the correct answer
reference: [Liang Python textbook · local PDF p. 203](https://moodle.iugaza.edu.ps/mod/resource/view.php?id=392320) · [Chapter 3 slides · local PDF](../books/392343.pdf#page=1) · [MIT OCW 6.0001 assignments](https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/pages/assignments/) · [Berkeley CS 61A exams](https://cs61a.org/exams/)
question: What is the result of \`'Py' in 'Python'\`?
- [x] a | True
- [ ] b | False
- [ ] c | 2
- [ ] d | TypeError
explanation: The exact substring \`Py\` occurs at the beginning; string membership is case-sensitive.
hint: Compare the characters, including their capitalization.
:::

:::mcq
id: prog-book-checkpoint-3-2
title: Chapter 3 · Textbook checkpoint 3.2
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 3.2, p. 67](/library/392320.pdf#page=87)
question: ![Complete original checkpoint 3.2, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-3-2.webp) Select the correct response.
- [x] a | True
- [ ] b | False
explanation: The trigonometric functions in math accept radians.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-3-3
title: Chapter 3 · Textbook checkpoint 3.3
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 3.3, p. 67](/library/392320.pdf#page=87)
question: ![Complete original checkpoint 3.3, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-3-3.webp) Select the correct response.
- [x] a | radians = math.radians(47)
- [ ] b | radians = math.degrees(47)
- [ ] c | radians = 47 * 180 / math.pi
- [ ] d | radians = math.pi / 47
explanation: Degrees are converted to radians by multiplying by π/180.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-3-4
title: Chapter 3 · Textbook checkpoint 3.4
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 3.4, p. 67](/library/392320.pdf#page=87)
question: ![Complete original checkpoint 3.4, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-3-4.webp) Select the correct response.
- [x] a | degrees = math.degrees(math.pi / 7)
- [ ] b | degrees = math.radians(math.pi / 7)
- [ ] c | degrees = math.pi / 7
- [ ] d | degrees = 7 * math.pi / 180
explanation: The converted value is 180/7 degrees.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-3-6
title: Chapter 3 · Textbook checkpoint 3.6
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 3.6, p. 72](/library/392320.pdf#page=92)
question: ![Complete original checkpoint 3.6, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-3-6.webp) Select the correct response.
- [x] a | Prefix each special character with a backslash inside a double-quoted string.
- [ ] b | Use / for a backslash and // for a quote.
- [ ] c | Python cannot display these characters.
- [ ] d | Use the newline escape for both characters.
explanation: Inside a string literal, double the backslash; escape a double quote when the literal is double-quoted.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-3-7
title: Chapter 3 · Textbook checkpoint 3.7
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 3.7, p. 72](/library/392320.pdf#page=92)
question: ![Complete original checkpoint 3.7, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-3-7.webp) Select the correct response.
- [x] a | Use a Unicode escape such as '\\u03B1', or chr with the Unicode code point.
- [ ] b | Only ASCII characters can be written.
- [ ] c | Use /u followed by a decimal number.
- [ ] d | Use a Python keyword for every Unicode character.
explanation: Python strings support Unicode; hexadecimal escape notation can specify a code point.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-3-8
title: Chapter 3 · Textbook checkpoint 3.8
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 3.8, p. 72](/library/392320.pdf#page=92)
question: ![Complete original checkpoint 3.8, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-3-8.webp) Select the correct response.
- [x] a | D
- [ ] b | A
- [ ] c | C
- [ ] d | 68
explanation: ord(A) + 3 corresponds to D; chr converts the code point back to a character.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-3-9
title: Chapter 3 · Textbook checkpoint 3.9
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 3.9, p. 72](/library/392320.pdf#page=92)
question: ![Complete original checkpoint 3.9, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-3-9.webp) Select the correct response.
- [x] a | 25
- [ ] b | 26
- [ ] c | 90
- [ ] d | 65
explanation: ord(Z) − ord(A) = 90 − 65 = 25.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-3-10
title: Chapter 3 · Textbook checkpoint 3.10
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 3.10, p. 72](/library/392320.pdf#page=92)
question: ![Complete original checkpoint 3.10, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-3-10.webp) Select the correct response.
- [x] a | Concatenating str and int raises TypeError; use "Chapter " + str(1).
- [ ] b | The code correctly produces Chapter 1.
- [ ] c | The integer must be replaced by float(1).
- [ ] d | Use "Chapter " - 1.
explanation: String concatenation requires strings on both sides.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-3-11
title: Chapter 3 · Textbook checkpoint 3.11
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 3.11, p. 72](/library/392320.pdf#page=92)
question: ![Complete original checkpoint 3.11, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-3-11.webp) Select the correct response.
- [x] a | 5, then 23 on the next line.
- [ ] b | 23, then 5
- [ ] c | 5, then 5
- [ ] d | 23, then 23
explanation: Numbers add arithmetically; strings concatenate.
hint: Read the complete source prompt and trace the values in order.
:::

:::mcq
id: prog-book-checkpoint-3-12
title: Chapter 3 · Textbook checkpoint 3.12
kicker: Choose the correct answer
reference: [Liang · complete original checkpoint 3.12, p. 76](/library/392320.pdf#page=96)
question: ![Complete original checkpoint 3.12, including all code and continuation](assets/lessons/programming/source-crops/prog-book-checkpoint-3-12.webp) Select the correct response.
- [x] a | An object has identity, type, and value; a method is an operation associated with an object/type.
- [ ] b | An object is always a string; a method is always a variable.
- [ ] c | A method is a CPU component.
- [ ] d | Objects contain only source code.
explanation: Python values are objects, and their types define associated operations.
hint: Read the complete source prompt and trace the values in order.
:::`};export{e as default};