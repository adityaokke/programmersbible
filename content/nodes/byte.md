---
id: byte
title: "Byte"
type: concept
part: machine
status: review
requires: [bit]
related: [data-size-units, text-as-numbers]
year: 1956
summary: "A byte is a group of 8 bits that computers handle as one unit."
read_minutes: 6
questions:
  - what is a byte
  - how many bits are in a byte
  - why is a byte 8 bits
  - what is the difference between a bit and a byte
  - why do computers count to 255
aliases: [bytes, octet]
sources:
  - title: "W. Buchholz, \"The word 'byte' comes of age...\", BYTE, February 1977, p. 144 (retyped copy, Computer History Museum archive)"
    url: https://archive.computerhistory.org/resources/access/text/2016/12/102762489-05-01-acc.pdf
  - title: "RFC 3629, UTF-8, a transformation format of ISO 10646"
    url: https://www.rfc-editor.org/rfc/rfc3629
  - title: "RFC 5234, Augmented BNF for Syntax Specifications (OCTET = 8 bits of data)"
    url: https://www.rfc-editor.org/rfc/rfc5234
  - title: "WHATWG Encoding Standard (requires UTF-8 for new protocols and formats)"
    url: https://encoding.spec.whatwg.org/
  - title: "Unicode Technical Standard #51: Unicode Emoji"
    url: https://www.unicode.org/reports/tr51/
  - title: "MDN Web Docs: TextEncoder.encode()"
    url: https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder/encode
  - title: "Chrome for Developers: Open Chrome DevTools"
    url: https://developer.chrome.com/docs/devtools/open
  - title: "Microsoft Edge DevTools: Keyboard shortcuts"
    url: https://learn.microsoft.com/en-us/microsoft-edge/devtools/shortcuts/
  - title: "Firefox DevTools User Docs: Web Console"
    url: https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html
  - title: "Chrome for Developers: Self-XSS protection (paste warning in the console)"
    url: https://developer.chrome.com/blog/self-xss
  - title: "NIST: Prefixes for binary multiples"
    url: https://physics.nist.gov/cuu/Units/binary.html
author: ai
updated: 2026-10-30
---

> **In one sentence:** A byte is a group of 8 bits that computers handle as one unit.

## Why should I care?

You have seen bytes many times without knowing it. When a photo is "3 MB", or your phone has "128 GB" of space, the **B** stands for **byte**. (The M and G mean "millions" and "billions", roughly. You will learn them in [[data-size-units]].)

A single [[bit]] can only say one of two things: 0 or 1. That is too small to be useful alone. So computers group bits together. The most important group is the byte.

## Analogy

Think of an egg box with **8 places** in one row. Each place can be **empty** or **full**.

- One place alone has 2 possible states: empty or full. That is one bit.
- The whole box has many more possible patterns. For example: full, empty, empty, full, full, empty, full, empty.

If you count every possible pattern of the 8 places, you get **256** different patterns. One byte works the same way: 8 bits, and 256 possible patterns. The next section shows how to count them.

**Where the analogy breaks down:** you can look at an egg box and see the eggs. Bits inside a computer are not objects you can see. Also, a full place in an egg box always means "an egg is here". The same 8 bits, on the other hand, can mean a number, a letter, or part of a color. The meaning depends on how the computer reads it.

## How it actually works

Start with one place in the egg box: it has 2 patterns (empty, full). Now add a second place. Every old pattern now comes in **two versions**: one with the new place empty, and one with it full. So 2 patterns become 4.

This happens every time you add a place. Every time you add one bit, the number of possible patterns **doubles**:

| Bits | Possible patterns |
|---|---|
| 1 | 2 |
| 2 | 4 |
| 3 | 8 |
| 4 | 16 |
| 5 | 32 |
| 6 | 64 |
| 7 | 128 |
| **8** | **256** |

So one byte has 256 possible patterns. When a byte holds a number, the patterns usually stand for the numbers **0 to 255**. The smallest is `00000000` (zero). The largest is `11111111` (255).

Why does it stop at 255 and not 256? Because counting starts at 0. From 0 to 255 there are exactly 256 numbers.

One byte is enough for one letter of basic English text: the letters A to Z, digits and common signs like `!` or `?`. For example, the capital letter **H** is stored as the number 72, which fits in one byte. (How letters become numbers is the topic of [[text-as-numbers]].)

Other **characters** (a character is one letter, digit, sign or symbol) need more than one byte. The web's Encoding Standard requires a text format called **UTF-8** for new formats. In UTF-8, one character uses **1 to 4 bytes**. Letters from many languages, and emoji, use 2, 3 or 4. (Some emoji, like flags or emoji with a skin color, are made of several characters joined together, so they use even more bytes.)

Bytes are also the basic unit of size. A file of 1,000 bytes is one kilobyte. (Some systems count 1,024 bytes instead. You will see why in [[data-size-units]].)

## How it came to be

The word "byte" was invented at the company **IBM** in **1956**. A team was designing a new computer called **Stretch**. A member of the team, **W. Buchholz**, needed a name for "a group of bits" that the machine handled together.

The earliest use found in Buchholz's files is an internal IBM note from June 1956. At first, a byte was not 8 bits. It could have between one and six bits, depending on the task. In August 1956, bytes of 8 bits were considered, and Stretch soon allowed bytes of up to 8 bits.

The spelling is on purpose. The word comes from "bite", but it was spelled with a **y** so that nobody would accidentally change it into "bit".

In the mid-1960s, IBM's **System/360** computers set the byte at exactly 8 bits and spread 8-bit bytes far and wide. Since then, "byte" has meant 8 bits almost everywhere.

Some technical documents, such as internet standards, use the word **octet** instead. An octet is always exactly 8 bits.

## 🧪 Try it in your browser

Let's see real bytes. You will use a tool built into your browser called the **console**. It lets you type small pieces of code. (You will learn more about these tools in [[browser-devtools]].)

**Safety rule:** only type code in the console that you understand or that comes from a source you trust. Never paste code that a stranger sends you. The code on this page is safe: it only reads text and shows numbers.

You do not need to understand the words in the code yet. You only need to read the result.

1. In Chrome, Edge or Firefox, open any ordinary web page, for example `https://example.com`.
2. Open the console:
   - **Windows:** press `Ctrl` + `Shift` + `J` (in Firefox: `Ctrl` + `Shift` + `K`)
   - **Mac:** press `Cmd` + `Option` + `J` (in Firefox: `Cmd` + `Option` + `K`)
3. You may see some messages already. That is normal. Click on the empty line at the bottom, next to the small arrow sign.
4. **Type** this line exactly (typing is better than pasting: some browsers block pasting in the console), then press `Enter`:

   ```
   new TextEncoder().encode("Hello")
   ```

5. You should see something like `Uint8Array(5) [72, 101, 108, 108, 111]`. The exact look is a little different in each browser.

**What you see:** the word "Hello" stored as **5 bytes**, one for each letter. `Uint8Array(5)` means "a list of 5 bytes". Every number is between 0 and 255, because each one is a single byte. `72` is the "H".

Now try an emoji. Emoji are hard to type in the console, so we use a code for one. `\u{1F600}` is the code for the 😀 emoji. Type this exactly and press `Enter`:

```
new TextEncoder().encode("\u{1F600}")
```

You should see `Uint8Array(4) [240, 159, 152, 128]`: one emoji, **4 bytes**.

## Common misunderstandings

- **"A bit and a byte are the same thing."** No. A byte is 8 bits. A bit is one 0 or 1.
- **"One byte is always one letter."** Only for basic English text. Many characters, such as emoji and letters from many languages, need 2, 3 or 4 bytes in UTF-8, and some emoji are made of several characters.
- **"The biggest number in a byte is 256."** No. A byte has 256 patterns, but they usually mean 0 to 255, because counting starts at 0.

## Recap

- A byte is 8 bits, handled together as one unit.
- 8 bits give 256 patterns, usually the numbers 0 to 255.
- The word was invented at IBM in 1956, and 8 bits became the standard size in the 1960s.

## Sources

- W. Buchholz, "The word 'byte' comes of age...", BYTE, February 1977 (Computer History Museum archive): https://archive.computerhistory.org/resources/access/text/2016/12/102762489-05-01-acc.pdf
- RFC 3629, UTF-8: https://www.rfc-editor.org/rfc/rfc3629
- RFC 5234, Augmented BNF (defines OCTET as 8 bits): https://www.rfc-editor.org/rfc/rfc5234
- WHATWG Encoding Standard: https://encoding.spec.whatwg.org/
- Unicode Technical Standard #51, Unicode Emoji: https://www.unicode.org/reports/tr51/
- MDN Web Docs, TextEncoder.encode(): https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder/encode
- Chrome for Developers, Open Chrome DevTools: https://developer.chrome.com/docs/devtools/open
- Microsoft Edge DevTools, Keyboard shortcuts: https://learn.microsoft.com/en-us/microsoft-edge/devtools/shortcuts/
- Firefox DevTools User Docs, Web Console: https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html
- Chrome for Developers, Self-XSS protection: https://developer.chrome.com/blog/self-xss
- NIST, Prefixes for binary multiples: https://physics.nist.gov/cuu/Units/binary.html
