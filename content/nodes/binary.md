---
id: binary
title: "Binary"
type: concept
part: machine
status: published
requires: [counting-systems]
related: [bit, byte]
summary: "Binary is a way of writing numbers with only two digits, 0 and 1, and almost all modern computers use it."
read_minutes: 6
questions:
  - what is binary
  - why do computers use 0 and 1
  - how do you count in binary
  - how do you read a binary number
  - how do I convert a number to binary
  - who invented binary
aliases: [binary numbers, base 2, base-2, binary system, ones and zeros]
sources:
  - title: "Wikipedia: Binary number (general background reference)"
    url: https://en.wikipedia.org/wiki/Binary_number
  - title: "Intro CS Textbook (textbooks.cs.ksu.edu): Binary Numbers"
    url: https://textbooks.cs.ksu.edu/cc110/i-concepts/07-encoding/03-binary/index.html
  - title: "Computer History Museum, Revolution: How Do Digital Computers \"Think\"?"
    url: https://www.computerhistory.org/revolution/digital-logic/12/269
  - title: "Yves Serra, \"Le manuscrit De progressione dyadica de Leibniz\", BibNum (OpenEdition Journals)"
    url: https://journals.openedition.org/bibnum/553
  - title: "Stanford CS101: Bits and Bytes"
    url: https://web.stanford.edu/class/cs101/bits-bytes.html
  - title: "MDN Web Docs: Number.prototype.toString()"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
  - title: "MDN Web Docs: parseInt()"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
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

> **In one sentence:** Binary is a way of writing numbers with only two digits, 0 and 1, and almost all modern computers use it.

## Why should I care?

You have probably seen pictures of screens full of 0s and 1s. They come from a real idea: **binary**. Almost all modern computers and computer-based devices use binary.

## Analogy

Think of four **lamps** in a row, each with its own light switch. Each lamp is either **off** or **on**. Nothing in between.

Give each lamp a value. From left to right, the lamps are worth **8, 4, 2 and 1**. Each lamp is worth twice the lamp on its right.

To show a number, turn on the lamps that add up to it. To show 5, turn on the 4 lamp and the 1 lamp (4 + 1 = 5). Write "1" for each lamp that is on and "0" for each lamp that is off, from left to right: off, on, off, on becomes `0101`. That is 5 in binary. A 0 at the front changes nothing, like in decimal, so 5 is usually written `101`.

**Where the analogy breaks down:** you can see lamps. Inside a computer, the 0s and 1s are not things you can see. They are physical states, such as electrical signals. Also, a row of lamps does not "mean" a number by itself. It means 5 only because we agreed on the values 8, 4, 2 and 1. In a computer, too, the same pattern of 0s and 1s can mean a number or something else, such as a letter. You will see how in [[text-as-numbers]].

## How it actually works

### Binary is base 2

In [[counting-systems]], you saw that our normal numbers are **base 10** (decimal). Each position is worth 10 times the position on its right: ones, tens, hundreds, and so on.

**Binary**, or **base 2**, follows the same rules, with two changes:

1. It uses only **two digits**: 0 and 1.
2. Each position is worth **2 times** the position on its right: 1, 2, 4, 8, 16, 32, 64, 128, and so on.

Each binary digit is called a **bit** (short for "binary digit"). You will learn more about it in [[bit]].

### Reading a binary number

Take the binary number `1101`. Write the worth of each position above the digits, starting with 1 on the right:

```
worth:         8   4   2   1
binary digit:  1   1   0   1
```

Now add the worths that have a 1 under them: 8 + 4 + 1 = **13**. So `1101` in binary is 13 in decimal.

`1101` in binary is read digit by digit: "one, one, zero, one", not "one thousand one hundred and one".

### Writing a number in binary

To turn 13 into binary:

1. List the worths, starting at 1 and doubling: 1, 2, 4, 8, 16. Stop before the first one that is bigger than your number. 16 is bigger than 13, so you use **8, 4, 2, 1**.
2. Start with the biggest. Is 8 bigger than 13? No. Write **1**. 13 − 8 = 5 is left.
3. Is 4 bigger than 5? No. Write **1**. 5 − 4 = 1 is left.
4. Is 2 bigger than 1? Yes. Write **0**.
5. Is 1 bigger than 1? No. Write **1**. Nothing is left.

Read the digits in order: `1101`.

### Counting in binary

Counting uses the carrying you know from decimal. In decimal, a position goes back to 0 after 9, and you carry 1 to the next position (9 becomes 10). In binary, this happens after 1. So 1 becomes `10`.

| Decimal | Binary |
|---|---|
| 0 | 0 |
| 1 | 1 |
| 2 | 10 |
| 3 | 11 |
| 4 | 100 |
| 5 | 101 |
| 6 | 110 |
| 7 | 111 |
| 8 | 1000 |

### Why computers use binary

A computer can store a 0 or a 1 in many physical ways. Early machines used the position of a wheel or a lever. Electronic chips use electric charge or electrical signals, and hard drives use tiny spots of magnetism. Anything with two separate states, like a switch that is off or on, can store one binary digit.

The reason usually given for binary is that it is straightforward to build with electronic parts. (This is simplified. How those parts work comes later, in [[logic-gates]].)

## How it came to be

Ideas close to binary are old. For example, the Indian scholar **Pingala** (around the 2nd century BC) used a binary system to describe patterns of short and long syllables in poetry.

In Europe, **Thomas Harriot** studied binary and other ways of writing numbers, but he did not publish his results. They were found later among his papers. Decades later, **Gottfried Leibniz** worked on binary. He is the person usually given the credit for inventing the modern binary system.

Leibniz described binary counting in a handwritten paper dated **15 March 1679**, called *De progressione dyadica*. He never published it. In **1703**, he sent a paper on binary to the Academy of Sciences in Paris. Its title begins *Explication de l'arithmétique binaire*, "Explanation of binary arithmetic", and it says that the system uses only the characters 0 and 1.

In **1937**, **Claude Shannon**, a student at MIT (the Massachusetts Institute of Technology), wrote a long research paper for his degree, called a master's thesis. It showed how switches connected together could do binary arithmetic.

## 🧪 Try it in your browser

You met the browser **console** in [[counting-systems]].

**Safety rule:** only type instructions in the console that you understand or that come from a source you trust. Never paste anything a stranger sends you. The instructions on this page are safe: they only do arithmetic.

1. In Chrome, Edge or Firefox, open any ordinary web page, for example `https://example.com`.
2. Open the console:
   - **Windows:** press `Ctrl` + `Shift` + `J` (in Firefox: `Ctrl` + `Shift` + `K`)
   - **Mac:** press `Cmd` + `Option` + `J` (in Firefox: `Cmd` + `Option` + `K`)
3. You may see some messages already. Click the empty line at the bottom.
4. **Type** this line yourself (some browsers block pasting in the console), then press `Enter`:

   ```
   (13).toString(2)
   ```

   If the browser adds a bracket or a quote mark by itself while you type, that is fine. Make sure the line looks exactly like the one above.

5. You should see `1101`, maybe inside quote marks, like `'1101'` or `"1101"`. The quote marks mean the answer is text. This is 13 in binary.
6. Now go the other way. Type this line and press `Enter`:

   ```
   parseInt("1101", 2)
   ```

7. You should see `13`, without quote marks: this answer is a number. The `2` in both lines means "base 2".
8. Try your own numbers: change `13` in step 4 to 255. You get `11111111`: eight 1s.
9. When you are done, close the tab.

**On a phone:** write the worths 8, 4, 2, 1 on paper and convert a few numbers by hand.

## Common misunderstandings

- **"Binary is a special computer language."** No. Binary is a way of writing numbers. The number 13 is the same amount whether you write it `13` or `1101`.
- **"`10` always means ten."** Only in decimal. In binary, `10` means two.
- **"Inside the computer there are tiny 0s and 1s."** No. The 0s and 1s are how we write down two physical states, such as two kinds of electrical signal.

## Recap

- Binary (base 2) writes numbers with only two digits, 0 and 1.
- Each position is worth twice the position on its right: 1, 2, 4, 8, 16 and so on.
- Almost all modern computers use binary. The reason usually given: it is straightforward to build with electronic parts.

## Sources

- Wikipedia, Binary number (general background reference): https://en.wikipedia.org/wiki/Binary_number
- Intro CS Textbook (textbooks.cs.ksu.edu), Binary Numbers: https://textbooks.cs.ksu.edu/cc110/i-concepts/07-encoding/03-binary/index.html
- Computer History Museum, How Do Digital Computers "Think"?: https://www.computerhistory.org/revolution/digital-logic/12/269
- Yves Serra, "Le manuscrit De progressione dyadica de Leibniz", BibNum: https://journals.openedition.org/bibnum/553
- Stanford CS101, Bits and Bytes: https://web.stanford.edu/class/cs101/bits-bytes.html
- MDN Web Docs, Number.prototype.toString(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
- MDN Web Docs, parseInt(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
- Chrome for Developers, Open Chrome DevTools: https://developer.chrome.com/docs/devtools/open
- Microsoft Edge DevTools, Keyboard shortcuts: https://learn.microsoft.com/en-us/microsoft-edge/devtools/shortcuts/
- Firefox DevTools User Docs, Web Console: https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html
- Chrome for Developers, Self-XSS protection: https://developer.chrome.com/blog/self-xss
