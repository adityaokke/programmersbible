---
id: machine-code
title: "Machine Code"
type: concept
part: machine
status: published
requires: [cpu, binary]
related: [programming-languages, microprocessor, software]
summary: "Machine code is a program written as patterns of bits that a CPU can carry out directly: each pattern is one small instruction, such as \"add two numbers\"."
read_minutes: 6
questions:
  - what is machine code
  - what language does a CPU understand
  - what is an opcode
  - what is assembly language
  - why does a program for one processor not run on another
  - what did the first programmers write
aliases: [machine language, native code, opcode, operand, instruction set, assembly language, assembler, mnemonic]
sources:
  - title: "Stanford CS101: Software"
    url: https://web.stanford.edu/class/cs101/software-1.html
  - title: "Clayton Cafiero, University of Vermont: Fetch, decode, execute (repeat!)"
    url: https://www.uvm.edu/~cbcafier/cs2210/content/02_basics_of_architecture/fetch_decode_execute.html
  - title: "Norbert Landsteiner, masswerk.at: 6502 Instruction Set"
    url: https://www.masswerk.at/6502/6502_instruction_set.html
  - title: "IEEE Spectrum, Chip Hall of Fame: MOS Technology 6502 Microprocessor"
    url: https://spectrum.ieee.org/chip-hall-of-fame-mos-technology-6502-microprocessor
  - title: "Wikipedia: Assembly language (general background reference)"
    url: https://en.wikipedia.org/wiki/Assembly_language
  - title: "University of Manchester: How a 70-year-old 'Baby' changed the face of modern computing"
    url: https://www.manchester.ac.uk/about/news/how-a-70-year-old-baby-changed-the-face-of-modern-computing/
  - title: "University of Manchester, Computer 50: The Manchester Small Scale Experimental Machine, \"The Baby\""
    url: https://curation.cs.manchester.ac.uk/computer50/www.computer50.org/mark1/new.baby.html
  - title: "University of Saskatchewan, Department of Computer Science: Remembering a USask computing pioneer"
    url: https://www.cs.usask.ca/news/2022/remembering-a-usask-computing-pioneer.php
  - title: "MDN Web Docs: Lexical grammar (numeric literals)"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar
  - title: "MDN Web Docs: Number.prototype.toString()"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
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

> **In one sentence:** Machine code is a program written as patterns of bits that a CPU can carry out directly: each pattern is one small instruction, such as "add two numbers".

## Why should I care?

Every app on your laptop or phone runs as machine code in the end. A Stanford course says: "Only machine code runs on the CPU."

Programmers can also write in other languages, such as JavaScript, the language of the browser console. Stanford's course says such code is translated into machine instructions "to actually run on the CPU".

## Analogy

Remember the **worker at a desk** from [[cpu]]. Now the task list contains **only numbers**, and a **code table** hangs on the wall:

- Code **169**: copy the next number in the list onto your note.
- Code **105**: add the next number in the list to your note.

The list says: `169, 2, 105, 3`. The worker reads 169, looks it up, and writes 2. Then the worker reads 105 and adds 3. The note now says 5. These are real 6502 codes, which you will meet below, with one step left out.

**Where the analogy breaks down:** the worker reads a table and understands it. A CPU has no table and understands nothing. Its circuits are built so that each pattern of bits switches on the right parts. Also, a computer stores the numbers as bits, not in decimal.

## How it actually works

### An instruction is a pattern of bits

In [[cpu]], you saw the CPU fetch, decode and execute instructions from memory. Each instruction is stored as a pattern of bits. Those patterns are the **machine code**. Each one is tiny, such as adding two numbers.

### The parts of an instruction

The bits of an instruction are divided into parts, called **fields**:

- The **opcode** (short for "operation code") says which operation to do, for example "add".
- The **operands** are what the operation works on: a number, a register, or a memory address.

During the decode step, the CPU's **control unit** turns these fields into control signals.

### A real example

The **6502** is a [[microprocessor]] released in 1975. The 6502 and chips based on it were used in the Apple II and Commodore 64 computers, and the Nintendo Entertainment System. Its main register is called the **accumulator**, or register **A**.

Here is a short 6502 program that adds 2 and 3. Each group of 8 bits has its own place in memory.

*Diagram: a three-instruction 6502 program. Each row shows one instruction three ways: as bits in memory, as the same bits written in base 16, and what it means.*

```
Bits in memory       Base 16   What it means
10101001 00000010    A9 02     load the number 2 into register A
00011000             18        clear the carry (set it to 0)
01101001 00000011    69 03     add 3, plus the carry, to register A
```

After these three instructions, register A holds 5.

The middle column shows the same bits in base 16, from [[counting-systems]]. Capital letters are used here, but `A` and `a` mean the same. Four bits can show the numbers 0 to 15: 16 values. So one base-16 digit stands for exactly four bits. For example, `1010` is ten, written `A`. `1001` is `9`. Together they make `A9`.

In the first row, `10101001` is the opcode for "load a number into A". The next 8 bits, `00000010`, are the operand: the number 2. "Clear the carry" has an opcode only.

Why clear the carry? You met the **carry** in [[cpu]]. The 6502 keeps one carry bit, called the **carry flag**, from one instruction to the next. Its add instruction adds this bit too. An earlier instruction may have left it at 1. Clearing it first makes sure the answer is 5, not 6.

### Each CPU family has its own machine code

Stanford's course says the language of machine code (which patterns mean which operations) is built into the design of the CPU. A **CPU family** is a group of CPUs that run the same machine code. Each family has its own machine code, "not compatible with the machine code of other CPU families". So a 6502 program cannot run directly on a CPU from a different family.

### Names instead of numbers: assembly language

Codes such as `A9` are hard to remember. So each instruction has a short name, called a **mnemonic** (a word that helps you remember). The program above looks like this in 6502 **assembly language**:

```
LDA #$02
CLC
ADC #$03
```

`LDA` means "Load Accumulator". `CLC` means "Clear Carry". `ADC` means "Add with Carry". The `#` says that the number itself comes next, and `$` says that it is written in base 16.

A program called an **assembler** translates assembly language into machine code. Usually, one line of assembly language becomes one machine code instruction.

## How it came to be

On **21 June 1948**, a computer at the University of Manchester ran its first program. It was called the Small Scale Experimental Machine, or "the Baby". The university names its pioneers as Frederic Williams, Tom Kilburn and Geoff Tootill. According to the university, it was "the first computer in the world to run a program electronically stored in its memory".

People entered programs into the Baby "by setting sequences of bits at chosen addresses using a simple keyboard". So they typed in machine code, bit by bit. In each Baby instruction, 3 bits chose the operation (the opcode), and 13 bits gave a memory address (the operand).

From 1946, Kathleen Booth was Andrew Booth's research assistant at Birkbeck College, University of London. In **1947**, while working on one of their first computers, she created a symbolic language (instructions written with names and symbols) "to simplify the process of programming the machine". The University of Saskatchewan says this "is now recognized as the world's first assembly language."

## 🧪 Try it in your browser

You need a computer with a keyboard.

**Safety rule:** only type instructions in the console that you understand or that come from a source you trust. Never paste anything a stranger sends you. These lines are safe: they only change how a number is written.

1. In Chrome, Edge or Firefox, open any ordinary web page, for example `https://example.com`.
2. Open the console:
   - **Windows:** press `Ctrl` + `Shift` + `J` (in Firefox: `Ctrl` + `Shift` + `K`)
   - **Mac:** press `Cmd` + `Option` + `J` (in Firefox: `Cmd` + `Option` + `K`)
3. Click the empty line at the bottom. **Type** this line yourself (some browsers block pasting in the console), then press `Enter`:

   ```
   (0xA9).toString(2)
   ```

   It starts with a zero, then a small letter x. `0x` tells the browser that `A9` is written in base 16. `toString(2)` writes the number in base 2, as in [[binary]]. You should see `10101001`, maybe inside quote marks: the bits of the 6502's "load" opcode.
4. Now type this line and press `Enter`:

   ```
   (0x18).toString(2)
   ```

   You should see `11000`. The table shows `00011000`. The browser leaves out 0s at the front, which change nothing.
5. Close the tab.

**On a phone:** take the code `69`. Write 6 as four bits (`0110`) and 9 as four bits (`1001`). Put them together and compare with the table.

## Common misunderstandings

- **"Machine code runs on any computer."** No. Each CPU family has its own machine code, and it does not run directly on other families.
- **"What I type in the console is machine code."** No. Stanford's course says: "Javascript is not machine code".

## Recap

- Machine code is a program as patterns of bits. It is the only kind of program a CPU runs directly.
- Each instruction has an opcode (which operation) and often operands (what it works on).
- Each CPU family has its own machine code. Assembly language gives its instructions short names, and an assembler translates them into bits.

## Sources

- Stanford CS101, Software: https://web.stanford.edu/class/cs101/software-1.html
- Clayton Cafiero, University of Vermont, Fetch, decode, execute (repeat!): https://www.uvm.edu/~cbcafier/cs2210/content/02_basics_of_architecture/fetch_decode_execute.html
- Norbert Landsteiner, masswerk.at, 6502 Instruction Set: https://www.masswerk.at/6502/6502_instruction_set.html
- IEEE Spectrum, Chip Hall of Fame: MOS Technology 6502 Microprocessor: https://spectrum.ieee.org/chip-hall-of-fame-mos-technology-6502-microprocessor
- Wikipedia, Assembly language (general background reference): https://en.wikipedia.org/wiki/Assembly_language
- University of Manchester, How a 70-year-old 'Baby' changed the face of modern computing: https://www.manchester.ac.uk/about/news/how-a-70-year-old-baby-changed-the-face-of-modern-computing/
- University of Manchester, Computer 50, The Baby: https://curation.cs.manchester.ac.uk/computer50/www.computer50.org/mark1/new.baby.html
- University of Saskatchewan, Remembering a USask computing pioneer: https://www.cs.usask.ca/news/2022/remembering-a-usask-computing-pioneer.php
- MDN Web Docs, Lexical grammar: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar
- MDN Web Docs, Number.prototype.toString(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
- Chrome for Developers, Open Chrome DevTools: https://developer.chrome.com/docs/devtools/open
- Microsoft Edge DevTools, Keyboard shortcuts: https://learn.microsoft.com/en-us/microsoft-edge/devtools/shortcuts/
- Firefox DevTools User Docs, Web Console: https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html
- Chrome for Developers, Self-XSS protection: https://developer.chrome.com/blog/self-xss
