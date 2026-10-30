---
id: programming-languages
title: "Programming Languages"
type: concept
part: machine
status: published
requires: [machine-code]
related: [software, javascript, cpu]
summary: "A programming language lets people write a program in words and symbols they can read; then a compiler translates it into machine code, or an interpreter reads it and carries it out."
read_minutes: 6
questions:
  - what is a programming language
  - why do programmers not write in 0s and 1s
  - what is a compiler
  - what is an interpreter
  - what is source code
  - can a computer understand JavaScript or Python directly
aliases: [programming language, coding language, source code, compiler, interpreter, assembly language, high-level language, Fortran]
sources:
  - title: "Stanford CS101: Software (part 2)"
    url: https://web.stanford.edu/class/cs101/software-2.html
  - title: "Stanford CS101: Software (part 1)"
    url: https://web.stanford.edu/class/cs101/software-1.html
  - title: "University of Washington CSE 390B: Assembly Languages & Machine Code"
    url: https://courses.cs.washington.edu/courses/cse390b/22wi/readings/assembly.html
  - title: "MDN Web Docs: Compile (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/Compile
  - title: "MDN Web Docs: What is JavaScript?"
    url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript
  - title: "MDN Web Docs: JavaScript"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - title: "MDN Web Docs: About MDN"
    url: https://developer.mozilla.org/en-US/about
  - title: "IBM: Fortran"
    url: https://www.ibm.com/history/fortran
  - title: "MDN Web Docs: Multiplication (*)"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication
  - title: "MDN Web Docs: String length"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
  - title: "MDN Web Docs: SyntaxError"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError
  - title: "Chrome for Developers: Open Chrome DevTools"
    url: https://developer.chrome.com/docs/devtools/open
  - title: "Microsoft Edge DevTools: Keyboard shortcuts"
    url: https://learn.microsoft.com/en-us/microsoft-edge/devtools/shortcuts/
  - title: "Firefox DevTools User Docs: Web Console"
    url: https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html
  - title: "Chrome for Developers: Self-XSS protection (paste warning in the console)"
    url: https://developer.chrome.com/blog/self-xss
author: ai
reviewed_by: ai
reviewed_at: 2026-10-31
updated: 2026-10-31
---

> **In one sentence:** A programming language lets people write a program in words and symbols they can read; then a compiler translates it into machine code, or an interpreter reads it and carries it out.

## Why should I care?

A [[cpu|CPU]] can only carry out [[machine-code|machine code]]: instructions written as patterns of 0s and 1s. Stanford's introductory computer course says: "It's very rare for a person to write machine code directly".

Instead, programmers write in a **programming language**. Stanford's course gives these examples: Java, JavaScript, Python, C and C++. (Java and JavaScript sound alike, but they are two different languages.) As a programmer, you will write in one or more languages like these. Later on this site, you will meet JavaScript, the language that web browsers run.

## Analogy

Imagine you wrote a letter, but its reader understands only another language. You need a **translator**, and there are two kinds:

- One translates the whole letter first. The reader can then read the translation again and again, without the translator.
- The other stands next to the reader and reads your letter aloud in the reader's language, one sentence at a time.

Here, your letter is your program, and the reader is the CPU. The first translator is a **compiler**. The second is an **interpreter**.

**Where the analogy breaks down:** a human translator understands what you mean and can guess past small mistakes. Compilers and interpreters are programs that follow fixed rules. They never guess, so one wrong symbol can stop them. Also, one line of a program often becomes many machine code instructions, as you will see below.

## How it actually works

### Source code

A program written in a programming language is called **source code**. It is text that a person can read and change. Each language has its own words and its own strict rules for writing them, called its **syntax**.

Stanford's course says that source code does not run on the CPU directly. Only machine code can run on the CPU.

### Two ways to run source code

- A **compiler** is a program that translates source code into machine code, usually **ahead of time**, before the program runs. The result is a program made of machine code, ready to run later. For example, MDN Web Docs (a guide to web technologies, run by the company Mozilla) says C and C++ are compiled into machine code.
- An **interpreter** is a program that reads your code and carries it out right away, step by step. MDN says you do not have to change the code into a different form first. The interpreter is itself a program, like any app. So, in the end, the CPU still runs only machine code. (This is simplified; see below.)

*Diagram: source code can go two ways. On the left, a compiler translates it into machine code, and the CPU runs that machine code. On the right, an interpreter reads the source code and carries it out step by step, while the CPU runs the interpreter's own machine code.*

```
               source code (words and symbols people can read)
                 │                                 │
                 ▼                                 ▼
   COMPILER: translates the whole       INTERPRETER: reads your code
   program, usually before it runs      and carries it out, step by step
                 │                                 │
                 ▼                                 │
   machine code (0s and 1s)                        │
                 │                                 │
                 ▼                                 ▼
   the CPU runs your program's          the CPU runs the interpreter,
   machine code                         which is made of machine code
```

The two methods can be mixed. MDN says that most modern JavaScript interpreters also compile your code while it runs, into a faster binary form.

### High-level and low-level

Stanford's course calls machine code a **low-level** language. Each machine code instruction is "extremely simple": for example, add two numbers.

Programming languages have **high-level** features: bigger building blocks. Stanford's course uses a `print` command that shows text, and says there is no single machine code instruction that prints. One print command must become many machine code instructions (Stanford writes "say, 10" only as an example). So one line you write can become many instructions for the CPU.

### Assembly language: between the two

**Assembly language** sits between machine code and high-level languages. A University of Washington course calls it "a human readable format of those 1s and 0s". Every line of assembly translates "roughly into one binary instruction". A program called an **assembler** does this translation.

Different families of CPUs use different machine code, so assembly language is different for each kind of CPU, too.

## How it came to be

IBM, a computer company, says that before Fortran, programming was done by "a small group of specialists who wrote code in machine language". It calls machine language "a complex and cumbersome set of instructions" (cumbersome means hard to handle). John Backus, "Fortran's primary author", described the work as "hand-to-hand combat with the machine": a close fight.

In 1957, IBM released **Fortran**, short for "formula translation". IBM soon made the first Fortran compiler available for its IBM 704 computer. According to IBM, a task that once meant typing in "as many as a thousand program instructions" could be "reduced to only 47 in Fortran". IBM says Fortran is "still in use decades after its release".

## 🧪 Try it in your browser

Your browser contains a JavaScript interpreter. You will give it three short lines. You need a computer with a keyboard.

**Safety rule:** only type code in the console that you understand or that comes from a source you trust. Never paste anything a stranger sends you. The lines below are safe.

1. In Chrome, Edge or Firefox, open any ordinary web page, for example `https://example.com`.
2. Open the console:
   - **Windows:** press `Ctrl` + `Shift` + `J` (in Firefox: `Ctrl` + `Shift` + `K`)
   - **Mac:** press `Cmd` + `Option` + `J` (in Firefox: `Cmd` + `Option` + `K`)

   Ignore any messages already there.
3. Click the empty line at the bottom. **Type** this line yourself (some browsers block pasting in the console), then press `Enter`:

   ```
   (2 + 3) * 4
   ```

   If the browser adds a bracket or a quote mark by itself while you type, that is fine. The answer may appear in grey before you press `Enter`. After you press `Enter`, you should see `20`. The `*` symbol means "multiply". The interpreter read your line and carried it out.
4. Type this line, with the quote marks, and press `Enter`:

   ```
   "Hello".length
   ```

   `.length` asks for the length of the text in quote marks. You should see `5`. For plain text like this, that is the number of characters in "Hello". (This is simplified: some symbols, such as some emoji, can count as 2.)
5. Now make a mistake on purpose. Type this line and press `Enter`:

   ```
   2 + * 3
   ```

   You should see a red error message. It contains the word `SyntaxError`, plus some other words. This line breaks JavaScript's rules, so the interpreter cannot carry it out. Mistakes like this are normal: you fix the line and try again.
6. Close the tab.

**On a phone:** say out loud what a compiler and an interpreter each do, then check your answer against the diagram.

## Common misunderstandings

- **"The CPU understands Python or JavaScript."** No. Stanford's course says: "Only machine code can actually run on the CPU". A compiler or an interpreter is always needed.
- **"The computer will understand what I mean."** No. It follows the language's syntax exactly, as step 5 showed.
- **"Programmers write 0s and 1s all day."** No. Programmers write source code. Compilers and assemblers produce the machine code.

## Recap

- A CPU can only run machine code, but people write programs as source code in a programming language.
- A compiler translates the whole program into machine code, usually ahead of time. An interpreter reads the program and carries it out step by step.
- In a high-level language, one line you write can stand for many machine code instructions.

## Sources

- Stanford CS101, Software (part 2): https://web.stanford.edu/class/cs101/software-2.html
- Stanford CS101, Software (part 1): https://web.stanford.edu/class/cs101/software-1.html
- University of Washington CSE 390B, Assembly Languages & Machine Code: https://courses.cs.washington.edu/courses/cse390b/22wi/readings/assembly.html
- MDN Web Docs, Compile (glossary): https://developer.mozilla.org/en-US/docs/Glossary/Compile
- MDN Web Docs, What is JavaScript?: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript
- MDN Web Docs, JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- MDN Web Docs, About MDN: https://developer.mozilla.org/en-US/about
- IBM, Fortran: https://www.ibm.com/history/fortran
- MDN Web Docs, Multiplication (*): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication
- MDN Web Docs, String length: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
- MDN Web Docs, SyntaxError: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError
- Chrome for Developers, Open Chrome DevTools: https://developer.chrome.com/docs/devtools/open
- Microsoft Edge DevTools, Keyboard shortcuts: https://learn.microsoft.com/en-us/microsoft-edge/devtools/shortcuts/
- Firefox DevTools User Docs, Web Console: https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html
- Chrome for Developers, Self-XSS protection: https://developer.chrome.com/blog/self-xss
