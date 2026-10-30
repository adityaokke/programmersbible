---
id: bit
title: "Bit"
type: concept
part: machine
status: published
requires: [what-is-information, binary]
related: [byte, data-size-units]
summary: "A bit is one binary digit, a 0 or a 1: the smallest thing a computer can store, and also the unit used to measure information."
read_minutes: 6
questions:
  - what is a bit
  - what does bit stand for
  - is a bit a 0 or a 1
  - how many values can 8 bits hold
  - what is the difference between a bit of data and a bit of information
  - who named the bit
aliases: [bits, binary digit, b]
sources:
  - title: "Stanford CS101: Bits and Bytes"
    url: https://web.stanford.edu/class/cs101/bits-bytes.html
  - title: "Wikipedia: Bit (general background reference)"
    url: https://en.wikipedia.org/wiki/Bit
  - title: "Wikipedia: Shannon (unit)"
    url: https://en.wikipedia.org/wiki/Shannon_(unit)
  - title: "David Wilton, Wordorigins.org: bit / byte"
    url: https://www.wordorigins.org/big-list-entries/bit-byte
  - title: "MDN Web Docs: Exponentiation (**)"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation
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

> **In one sentence:** A bit is one binary digit, a 0 or a 1: the smallest thing a computer can store, and also the unit used to measure information.

## Why should I care?

Every message, photo and song on your computer or phone is stored as bits.

You have met the word twice already. In [[what-is-information]], a bit was a unit of information: the answer to one yes-or-no question. In [[binary]], a bit was one binary digit: a single 0 or 1. This page shows how those two ideas fit together.

## Analogy

Think of one ordinary **light switch** on a wall. It is either **down** or **up**. It stays in that position until someone moves it. So it "remembers" one choice.

Now agree on a meaning: down means 0, up means 1. One switch can now hold one binary digit.

**Where the analogy breaks down:** you can see and touch a light switch. A bit inside a computer is not a switch you can see. It is a physical state, such as a level of electric charge. Also, unlike a light with a dimmer, a bit has no in-between values. Finally, as with the window light in [[what-is-information]], the switch means nothing until people agree what "up" and "down" stand for.

## How it actually works

### A bit is a binary digit

The word **bit** is short for **binary digit**. A bit has exactly two possible values. We write them as **0** and **1**.

A bit is the smallest thing a computer can store. Anything with two separate states can store one bit. In the electronic chips inside a computer, the two states can be two levels of electric charge. Some storage devices use tiny magnetic areas that point one of two ways.

People agree which state means 0 and which means 1, and what each one stands for: "no" or "yes", "off" or "on", "false" or "true". Such an agreement is called a **convention**.

### One word, two meanings

People use the word "bit" in two related ways:

1. **A stored bit:** one place that holds a 0 or a 1.
2. **A bit of information:** the amount of information in the answer to one yes-or-no question, when both answers were equally likely. This is the meaning from [[what-is-information]].

How are they connected? **On average, one stored bit can hold at most one bit of information.**

Before you look at a stored bit, ask yourself: "Could it be 0 or 1, with the same chance?" If yes, reading it gives you one full bit of information. If you already knew the value, reading it tells you nothing new. That is like the light that is always on: no uncertainty is removed. (If one value was more likely, you learn less than one bit on average, over many readings. The details are outside this page.)

So think of the stored 0 or 1 as a **box**. The information is what the box tells you that you did not know before.

### Storing answers as bits

Remember the guessing game from [[what-is-information]]. Your friend thought of a number from 1 to 8. You found it with three yes-or-no answers: Yes, No, No.

Write each answer as one bit: Yes = 1, No = 0. The three answers become `100`. Three stored bits hold the whole result.

(Here `100` is not a binary number. It is three answers in a row. As [[binary]] showed, the same 0s and 1s can mean different things. It depends on what was agreed.)

### More bits, more patterns

One bit can make only 2 patterns: `0` and `1`. When you add one more bit, you can put a 0 or a 1 in front of every old pattern. So each extra bit **doubles** the number of patterns:

```
1 bit:   0  1                                        ->   2 patterns
2 bits:  00  01  10  11                              ->   4 patterns
3 bits:  000 001 010 011 100 101 110 111             ->   8 patterns
4 bits:  each pattern above twice: with 0 in front,
         and with 1 in front                         ->  16 patterns
```

*Diagram: every pattern that 1, 2 and 3 bits can make. Each extra bit doubles the count: 2, 4, 8, 16.*

To find the number of patterns, write one 2 for every bit, then multiply them together. For 8 bits: 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 = **256** patterns. This is called "2 to the power of 8".

This matches the guessing game. There were 8 possible numbers, and 3 bits make exactly 8 patterns. So 3 yes-or-no answers were enough: each number got its own pattern.

**Careful:** 8 patterns is not the same as the number 8. If you read the 8 patterns as binary numbers, they go from `000` (zero) to `111` (seven). Zero takes one of the patterns, so the number 8 itself needs a fourth bit: `1000`.

## How it came to be

In **1948**, Claude Shannon published "A Mathematical Theory of Communication", the paper you met in [[what-is-information]]. In it he wrote that units of information "may be called binary digits, or more briefly bits, a word suggested by J. W. Tukey."

John W. Tukey was a mathematician and Shannon's colleague at Bell Labs (Bell Laboratories). Shannon's paper is the first known printed text that uses the word "bit" to mean a binary digit.

## 🧪 Try it in your browser

You met the browser **console** in [[binary]]: a tool where you type a short instruction and see the answer. You need a computer with a keyboard.

**Safety rule:** only type instructions in the console that you understand or that come from a source you trust. Never paste anything a stranger sends you. The instructions below are safe: they only do arithmetic.

1. In Chrome, Edge or Firefox, open any ordinary web page, for example `https://example.com`.
2. Open the console:
   - **Windows:** press `Ctrl` + `Shift` + `J` (in Firefox: `Ctrl` + `Shift` + `K`)
   - **Mac:** press `Cmd` + `Option` + `J` (in Firefox: `Cmd` + `Option` + `K`)
3. Click the empty line at the bottom. **Type** this line yourself (some browsers block pasting in the console), then press `Enter`:

   ```
   2 ** 3
   ```

   `*` is the star key. The `**` means "to the power of". You should see `8`: the number of patterns 3 bits can make.
4. Type `2 ** 8` and press `Enter`. You should see `256`: the number of patterns 8 bits can make.
5. Type `(7).toString(2)` and press `Enter`. You should see `111`, maybe inside quote marks. Read as a binary number, seven is the biggest number 3 bits can hold.
6. Type `(8).toString(2)` and press `Enter`. You should see `1000`. The number 8 needs a fourth bit, as you saw above.
7. When you are done, close the tab.

**On a phone:** on paper, write all 8 patterns of 3 bits, from `000` to `111`. Then write each pattern twice more: once with a 0 in front, once with a 1 in front. Count the new patterns: you get 16.

## Common misunderstandings

- **"One bit can hold a number like 5."** No. One bit holds only a 0 or a 1. Bigger numbers need more bits. Read as a binary number, `101` is 5, so 5 needs 3 bits.
- **"Every stored bit gives you one bit of information."** Not always. On average, a stored bit holds at most one bit of information. If you already knew its value, reading it tells you nothing new.

## Recap

- A bit is one binary digit: a 0 or a 1. It is the smallest thing a computer can store.
- On average, one stored bit holds at most one bit of information: the answer to one yes-or-no question.
- Each extra bit doubles the number of patterns: so 8 bits make 256 patterns.

## Sources

- Stanford CS101, Bits and Bytes: https://web.stanford.edu/class/cs101/bits-bytes.html
- Wikipedia, Bit (general background reference): https://en.wikipedia.org/wiki/Bit
- Wikipedia, Shannon (unit): https://en.wikipedia.org/wiki/Shannon_(unit)
- David Wilton, Wordorigins.org, bit / byte: https://www.wordorigins.org/big-list-entries/bit-byte
- MDN Web Docs, Exponentiation (**): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation
- MDN Web Docs, Number.prototype.toString(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
- Chrome for Developers, Open Chrome DevTools: https://developer.chrome.com/docs/devtools/open
- Microsoft Edge DevTools, Keyboard shortcuts: https://learn.microsoft.com/en-us/microsoft-edge/devtools/shortcuts/
- Firefox DevTools User Docs, Web Console: https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html
- Chrome for Developers, Self-XSS protection: https://developer.chrome.com/blog/self-xss
