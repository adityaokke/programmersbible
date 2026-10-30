---
id: text-as-numbers
title: "Text as Numbers: ASCII to Unicode"
type: concept
part: machine
status: published
requires: [byte]
related: [binary, images-as-numbers, sound-as-numbers]
summary: "Computers store text by giving every character a number; ASCII was an early list of 128 characters, and Unicode is today's list for almost every writing system in the world."
read_minutes: 6
questions:
  - how do computers store letters
  - what is ascii
  - what is unicode
  - what is the difference between unicode and utf-8
  - why does text sometimes show strange symbols
  - what number is the letter a
aliases: [ASCII, Unicode, UTF-8, character encoding, encoding, code point, character set, text encoding]
sources:
  - title: "W3C Internationalization: Character encodings for beginners"
    url: https://www.w3.org/International/questions/qa-what-is-encoding
  - title: "W3C Internationalization: Character encodings: Essential concepts"
    url: https://www.w3.org/International/articles/definitions-characters/
  - title: "Wikipedia: ASCII (general background reference)"
    url: https://en.wikipedia.org/wiki/ASCII
  - title: "IEEE Milestones (ETHW): American Standard Code for Information Interchange ASCII, 1963"
    url: https://ethw.org/Milestones:American_Standard_Code_for_Information_Interchange_ASCII,_1963
  - title: "Unicode Consortium: What is Unicode?"
    url: https://www.unicode.org/standard/WhatIsUnicode.html
  - title: "Unicode Consortium: Unicode publication dates"
    url: https://www.unicode.org/history/publicationdates.html
  - title: "Unicode Consortium: Unicode 18.0.0"
    url: https://www.unicode.org/versions/Unicode18.0.0/
  - title: "RFC 3629, UTF-8, a transformation format of ISO 10646"
    url: https://www.rfc-editor.org/rfc/rfc3629
  - title: "Rob Pike, UTF-8 history (email, 2003, hosted by Markus Kuhn, University of Cambridge)"
    url: https://www.cl.cam.ac.uk/~mgk25/ucs/utf-8-history.txt
  - title: "MDN Web Docs: String.prototype.codePointAt()"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt
  - title: "MDN Web Docs: String.fromCodePoint()"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
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

> **In one sentence:** Computers store text by giving every character a number; ASCII was an early list of 128 characters, and Unicode is today's list for almost every writing system in the world.

## Why should I care?

Every message and web page you have ever read was stored as numbers. A computer stores only numbers, in [[binary]]. So for a word, it stores one number for each letter.

You may also have seen text go wrong: a name like "José" shown with a wrong letter or strange symbols in place of the "é". This can happen when two computers do not agree on which number means which letter.

## Analogy

Think of a football team. Every player wears a numbered shirt. With the team list, you know exactly who "number 10" is.

A computer does the same with text. It keeps a list where every **character** has a number. (A character is one letter, digit, sign or symbol, and even a space counts as one.) To store a character, it stores the number.

But another team may have a different number 10. Old computer lists had the same problem: one number meant different letters in different lists.

**Where the analogy breaks down:** on a football field, you can still see the player's face. In a computer, only the number is stored. Without the right list, the number tells you nothing about which character it was.

## How it actually works

### Every character gets a number

The list that gives characters their numbers is called a **character set**. The number of one character is called its **code point**.

When the computer stores the number, it writes it as bits in one or more [[byte|bytes]]. The rules for turning code points into bytes, and back again, are called a **character encoding**.

```
character:     A          a
code point:    65         97
stored byte:   01000001   01100001
```

`A` and `a` have different numbers: to a computer, they are two different characters.

### ASCII: 128 characters

**ASCII** is short for American Standard Code for Information Interchange. It is an early character set. It has **128** code points, numbered 0 to 127, so each one fits in **7 bits**. In an 8-bit byte, the extra bit on the left is 0 (see the table above).

- **95** of them are printable characters: the English letters A to Z and a to z, the digits 0 to 9, a space and signs like `!` and `?`.
- The other **33** are **control characters**: codes meant to control devices, such as printers, not letters or signs.

In ASCII, the digit `0` is 48 and a space is 32. The capital letters are in order: `A` is 65, `B` is 66, and so on up to `Z`, which is 90.

Careful: when you type the character `0`, the computer stores the number 48, not the number 0.

ASCII was made mainly for English: it has no letters with accents, like é.

### One byte, many lists

Before Unicode, there were hundreds of different character encodings, and they often gave different meanings to the same numbers. Many used one byte per character, so each could hold at most 256 characters. In these, a character's number was also its byte.

For example, take two of these lists, **ISO 8859-1** and **ISO 8859-5**. In ISO 8859-1, the number 233 means `é`. In ISO 8859-5, the same number 233 means `щ`, a letter from another alphabet, called Cyrillic. Only the list tells you which letter it is. Use the wrong list, and you see the wrong letters.

### Unicode: one list for the world

**Unicode** solves this with one list that gives a unique number to every character, in any language. Its edition from September 2026, version 18.0, has **172,808** characters.

The first 128 Unicode characters are the ASCII characters, with the same numbers. So `A` is 65 in both.

Unicode numbers are often written in base 16 (you met it in [[counting-systems]]) after the letters `U+`. For example, `A` is written `U+0041`. In base 16, `41` means 4 × 16 + 1 = 65. The zeros in front change nothing.

### UTF-8: turning Unicode numbers into bytes

A Unicode number is not yet bytes. The rules for storing it as bytes are an encoding. The most widely used one for web pages is **UTF-8**.

UTF-8 uses **1 to 4 bytes** per character. ASCII characters use one byte, the same byte as in ASCII. So text written only with ASCII characters is also correct UTF-8. Other characters use more bytes: `é`, for example, takes two.

## How it came to be

In **1963**, a committee of the American Standards Association published the first edition of ASCII. That first edition left 28 code points without a meaning, for later use. ASCII had a major revision in 1967 and more until 1986. This page describes the revised ASCII. ASCII is the basis of most modern character encodings.

The first volume of **Unicode 1.0** was published in **October 1991**.

**UTF-8** was designed around **September 1992** by Ken Thompson, with Rob Pike supporting him. Pike later wrote that Thompson designed it on a placemat in a diner, a type of restaurant, in New Jersey, USA. In December 2007, UTF-8 became more common on the web than ASCII.

## 🧪 Try it in your browser

You will use the browser **console**, the tool from [[counting-systems]] where you type a short instruction and see the answer.

**Safety rule:** only type instructions in the console that you understand or that come from a source you trust. Never paste anything a stranger sends you. The lines on this page are safe.

1. In Chrome, Edge or Firefox, open any ordinary web page, for example `https://example.com`.
2. Open the console:
   - **Windows:** press `Ctrl` + `Shift` + `J` (in Firefox: `Ctrl` + `Shift` + `K`)
   - **Mac:** press `Cmd` + `Option` + `J` (in Firefox: `Cmd` + `Option` + `K`)
3. You may see some messages already. Click the empty line at the bottom.
4. **Type** this line yourself (some browsers block pasting in the console), then press `Enter`:

   ```
   "A".codePointAt(0)
   ```

   The `(0)` means "the first character": in code, counting often starts at 0. If the browser adds a bracket or quote mark by itself, that is fine.

5. You should see `65`: the code point of `A`. Change `"A"` to `"a"` and press `Enter` again. You should see `97`.
6. Now go the other way. Type this line and press `Enter`:

   ```
   String.fromCodePoint(65, 90)
   ```

7. You should see `"AZ"` or `'AZ'`: the characters with the numbers 65 and 90.
8. Now a character outside ASCII. Type `String.fromCodePoint(9731)` and press `Enter`. You should see a snowman, maybe inside quote marks: `'☃'` or `"☃"`.
9. Close the tab when you are done.

**On a phone:** use paper. Capital letters in ASCII go in order from `A` = 65 to `Z` = 90. Write your name in capital letters, then write the number under each letter.

## Common misunderstandings

- **"Computers store letters as small pictures."** No. They store a number for each character. The shape you see comes from a **font**, a collection of letter shapes.
- **"Unicode and UTF-8 are the same thing."** No. Unicode gives every character a number. UTF-8 is one way to store those numbers as bytes.
- **"ASCII is gone."** Not really. ASCII lives on inside Unicode and UTF-8, with the same numbers and bytes.

## Recap

- A computer stores text by giving each character a number, called a code point.
- ASCII (first published in 1963) has 128 code points. Unicode is one list with a unique number for every character in any language.
- An encoding such as UTF-8 turns those numbers into bytes: 1 to 4 bytes per character.

## Sources

- W3C Internationalization, Character encodings for beginners: https://www.w3.org/International/questions/qa-what-is-encoding
- W3C Internationalization, Character encodings: Essential concepts: https://www.w3.org/International/articles/definitions-characters/
- Wikipedia, ASCII (general background reference): https://en.wikipedia.org/wiki/ASCII
- IEEE Milestones (ETHW), ASCII, 1963: https://ethw.org/Milestones:American_Standard_Code_for_Information_Interchange_ASCII,_1963
- Unicode Consortium, What is Unicode?: https://www.unicode.org/standard/WhatIsUnicode.html
- Unicode Consortium, Unicode publication dates: https://www.unicode.org/history/publicationdates.html
- Unicode Consortium, Unicode 18.0.0: https://www.unicode.org/versions/Unicode18.0.0/
- RFC 3629, UTF-8: https://www.rfc-editor.org/rfc/rfc3629
- Rob Pike, UTF-8 history (2003): https://www.cl.cam.ac.uk/~mgk25/ucs/utf-8-history.txt
- MDN Web Docs, String.prototype.codePointAt(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt
- MDN Web Docs, String.fromCodePoint(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
- Chrome for Developers, Open Chrome DevTools: https://developer.chrome.com/docs/devtools/open
- Microsoft Edge DevTools, Keyboard shortcuts: https://learn.microsoft.com/en-us/microsoft-edge/devtools/shortcuts/
- Firefox DevTools User Docs, Web Console: https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html
- Chrome for Developers, Self-XSS protection: https://developer.chrome.com/blog/self-xss
