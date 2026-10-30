---
id: counting-systems
title: "Counting Systems: Base 10 and Other Bases"
type: concept
part: machine
status: published
requires: []
related: [binary, before-computers]
summary: "A counting system writes any number with a small set of digits, and the position of each digit tells you how much it is worth; we normally count in base 10, but other bases work the same way."
read_minutes: 7
questions:
  - what is base 10
  - what is a number base
  - what is place value
  - why are there 60 minutes in an hour
  - how do you count in another base
  - where do our numbers come from
aliases: [number base, base, radix, decimal, place value, positional notation, numeral system, base 60, sexagesimal]
sources:
  - title: "Wikipedia: Positional notation"
    url: https://en.wikipedia.org/wiki/Positional_notation
  - title: "MacTutor History of Mathematics (University of St Andrews): Babylonian numerals"
    url: https://mathshistory.st-andrews.ac.uk/HistTopics/Babylonian_numerals/
  - title: "MacTutor History of Mathematics (University of St Andrews): A history of Zero"
    url: https://mathshistory.st-andrews.ac.uk/HistTopics/Zero/
  - title: "MacTutor History of Mathematics (University of St Andrews): Indian numerals"
    url: https://mathshistory.st-andrews.ac.uk/HistTopics/Indian_numerals/
  - title: "MacTutor History of Mathematics (University of St Andrews): Leonardo Pisano Fibonacci"
    url: https://mathshistory.st-andrews.ac.uk/Biographies/Fibonacci/
  - title: "University of Nevada, Las Vegas: Babylonian Astronomers and Angular Measure"
    url: https://www.physics.unlv.edu/~jeffery/astro/babylon/angle.html
  - title: "MDN Web Docs: Number.prototype.toString()"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
  - title: "MDN Web Docs: parseInt()"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
  - title: "Chrome for Developers: Keyboard shortcuts (DevTools)"
    url: https://developer.chrome.com/docs/devtools/shortcuts
  - title: "Microsoft Edge DevTools: Keyboard shortcuts"
    url: https://learn.microsoft.com/en-us/microsoft-edge/devtools/shortcuts/
  - title: "Firefox Source Docs: Web Console"
    url: https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html
author: ai
reviewed_by: ai
reviewed_at: 2026-10-31
updated: 2026-10-31
---

> **In one sentence:** A counting system writes any number with a small set of digits, and the position of each digit tells you how much it is worth; we normally count in base 10, but other bases work the same way.

## Why should I care?

Every number you have ever written uses a counting system. When you write `365`, the `3` does not mean three. It means three hundred. Its **position** tells you that.

You already use a second counting system every day: the clock. There are 60 seconds in a minute and 60 minutes in an hour. That habit comes from a system that counted in sixties, thousands of years ago.

Computers use a third system, with only two digits: [[binary]]. It works the same way, with fewer digits.

## Analogy

Imagine you are packing beans. **Each bag holds exactly ten beans**, and each box holds ten bags. At the end, you have 3 boxes, 6 bags and 5 loose beans. You can write that as `365`: the digits count boxes, bags and loose beans.

With five beans per bag and five bags per box, you would be counting in base 5.

**Where the analogy breaks down:** in real life, you could leave 14 loose beans on the table. In a written number, each position holds one digit only, from 0 to 9. When it reaches ten, you must pack them into the next position. Also, you may run out of container sizes, but a number can always add a new position on the left.

## How it actually works

A **digit** is a single symbol for a number, like `7`. The **base** of a counting system is how many different digits it uses, including zero.

Our normal system is **base 10**, also called **decimal**. It has ten digits: `0 1 2 3 4 5 6 7 8 9`.

The value of a digit depends on its **position**. This idea is called **place value**. Each position is worth the base times the worth of the position on its right:

| Position | hundreds | tens | ones |
|---|---|---|---|
| Worth | 10 × 10 = 100 | 10 | 1 |
| Digit in `365` | 3 | 6 | 5 |
| Value | 300 | 60 | 5 |

So `365` means 3 × 100 + 6 × 10 + 5 × 1.

**Counting up.** You count `7`, `8`, `9`. Then there is no digit left for ten. So you write `0` in the ones position and add `1` to the tens position: `10`. This is called **carrying**: a full position goes back to `0`, and you carry 1 to the next position. The same thing happens at `99`, which becomes `100`.

**Zero matters.** Zero marks an empty position. Without it, you could not tell `2106` from `216`.

**Other bases follow the same rules.** Only the number of digits changes. Here is **base 5**. It has five digits, `0` to `4`. Its positions are worth 1, then 5, then 5 × 5 = 25, and so on. Count up and carry as soon as a position reaches five:

| Amount (in base 10) | 4 | 5 | 6 | 9 | 10 | 11 | 24 | 25 |
|---|---|---|---|---|---|---|---|---|
| Written in base 5 | `4` | `10` | `11` | `14` | `20` | `21` | `44` | `100` |

At `44`, both positions are full. Adding one more carries twice, and you get `100`: one twenty-five. So the same digits can mean different amounts, and you always need to know the base.

**Base 2** has only two digits, `0` and `1`. It is used in almost all computers and electronic devices. [[binary]] explains it.

A base bigger than 10 needs more than ten digits. **Base 16** uses the letters `a` to `f` as the extra digits: `a` means ten, `b` means eleven, and so on up to `f`, which means fifteen.

**Base 60 is still with us.** Each degree of an angle is divided into 60 smaller parts (arcminutes), and each of those into 60 again (arcseconds). Time works the same way: 60 seconds in a minute, 60 minutes in an hour.

## How it came to be

**Base 60** most likely started with the **Sumerians**, an ancient people, and the **Babylonians** inherited it. The Babylonians used place value for over 1,000 years without a sign for zero. Readers had to work out empty positions from the context. Only around 400 BC (about 2,400 years ago) did they start to put two small marks in empty positions.

Other people chose other bases. The MacTutor history of mathematics links base 10 to counting on fingers, and base 20 to counting on fingers and toes. By the year 665, the **Maya** of Central America used a place-value system in base 20, with a symbol for zero.

The base-10 system we use today was first developed in **India**. Some evidence suggests it existed as early as the first century AD (about 2,000 years ago). By around 650 AD, zero was also used as a number of its own in Indian mathematics, not only as a mark for an empty position. The system then passed to the **Arabs**, and later to **Europe**.

In **1202**, the Italian mathematician **Fibonacci** published a book called *Liber abaci*. It helped bring this place-value decimal system into Europe. Today it is called the **Hindu–Arabic numeral system**, and it is the most common numeral system (way of writing numbers) used today.

## 🧪 Try it in your browser

Your browser has a hidden tool for programmers called the **console**. You type a short instruction, and it shows the answer. Nothing on your computer changes.

1. Open any website in Chrome, Edge or Firefox, for example `https://example.com`.
2. Open the console:
   - **Chrome or Edge:** press `Ctrl` + `Shift` + `J` (on a Mac: `Cmd` + `Option` + `J`).
   - **Firefox:** press `Ctrl` + `Shift` + `K` (on a Mac: `Cmd` + `Option` + `K`).

   A panel opens. Ignore any messages already in it. Click at the bottom of the panel, where you can type.
3. Type this yourself, exactly as shown, including the brackets and the dot, and press `Enter`: `(25).toString(5)`

   This asks the browser to write 25 as text, in base 5. You will see `100`, maybe in quote marks (they show that the answer is text). It matches the base 5 table.
4. Now type `(25).toString(2)` and press `Enter`. You will see `11001`: twenty-five written in base 2.
5. Go the other way. Type `parseInt("100", 5)` and press `Enter`. This instruction reads `100` as a base 5 number and shows its value in base 10. You will see `25`.
6. Try your own numbers: change `25` and the base in steps 3 and 4. The base must be between 2 and 36.
7. When you are done, close the tab.

On a phone, try it on paper instead: write 0 to 25 in base 5, and check that you reach `100`.

## Common misunderstandings

- **"A number and its digits are the same thing."** No. A number is an amount; digits are symbols that write it. Twenty-five is `25` in base 10, `100` in base 5 and `11001` in base 2.
- **"`10` always means ten."** No. In any base, `10` means "one group the size of the base, and zero ones". In base 2, `10` means two. In base 5, it means five.
- **"Base 10 is the only real way to count."** No. It is one choice. Your clock uses 60, and computers use base 2.

## Recap

- A digit's position tells you how much it is worth. Each position is worth the base times the one on its right.
- Base 10 uses ten digits (0 to 9); base 5 uses five; base 2 uses two. When a position is full, you carry 1 to the next position.
- Base 60 came from the Sumerians and Babylonians and still shapes our clocks; our base-10 system came from India.

## Sources

- Wikipedia, Positional notation: https://en.wikipedia.org/wiki/Positional_notation
- MacTutor, Babylonian numerals: https://mathshistory.st-andrews.ac.uk/HistTopics/Babylonian_numerals/
- MacTutor, A history of Zero: https://mathshistory.st-andrews.ac.uk/HistTopics/Zero/
- MacTutor, Indian numerals: https://mathshistory.st-andrews.ac.uk/HistTopics/Indian_numerals/
- MacTutor, Leonardo Pisano Fibonacci: https://mathshistory.st-andrews.ac.uk/Biographies/Fibonacci/
- University of Nevada, Las Vegas, Babylonian Astronomers and Angular Measure: https://www.physics.unlv.edu/~jeffery/astro/babylon/angle.html
- MDN Web Docs, Number.prototype.toString(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
- MDN Web Docs, parseInt(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
- Chrome DevTools, Keyboard shortcuts: https://developer.chrome.com/docs/devtools/shortcuts
- Microsoft Edge DevTools, Keyboard shortcuts: https://learn.microsoft.com/en-us/microsoft-edge/devtools/shortcuts/
- Firefox, Web Console: https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html
