---
id: data-size-units
title: "KB, MB, GB: Measuring Data"
type: concept
part: machine
status: published
requires: [byte]
related: [bit, storage, ram]
summary: "Kilobytes (kB), megabytes (MB), gigabytes (GB) and terabytes (TB) are bigger units for counting bytes; each step is usually 1,000 times bigger, but some systems use 1,024 instead."
read_minutes: 6
questions:
  - how many bytes are in a kilobyte
  - how many MB are in a GB
  - is a kilobyte 1000 or 1024 bytes
  - why does my drive show less space than it says on the box
  - what is the difference between MB and Mb
  - what is a gibibyte
aliases: [kilobyte, megabyte, gigabyte, terabyte, KB, MB, GB, TB, kibibyte, mebibyte, gibibyte, KiB, MiB, GiB]
sources:
  - title: "NIST: Prefixes for binary multiples"
    url: https://physics.nist.gov/cuu/Units/binary.html
  - title: "NIST: Metric (SI) prefixes"
    url: https://www.nist.gov/pml/owm/metric-si-prefixes
  - title: "Apple Support: How iOS and macOS report storage capacity"
    url: https://support.apple.com/en-us/102119
  - title: "Seagate Support: Storage capacity measurement standards"
    url: https://www.seagate.com/support/kb/storage-capacity-measurement-standards-002046en/
  - title: "MDN Web Docs: Glossary, Bandwidth"
    url: https://developer.mozilla.org/en-US/docs/Glossary/Bandwidth
  - title: "MDN Web Docs: Exponentiation (**)"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation
  - title: "MDN Web Docs: Operator precedence"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
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

> **In one sentence:** Kilobytes (kB), megabytes (MB), gigabytes (GB) and terabytes (TB) are bigger units for counting bytes; each step is usually 1,000 times bigger, but some systems use 1,024 instead.

## Why should I care?

You see these units every day. A phone has "128 GB" of space. An app download is "50 MB". A photo might be "3 MB". All of these are ways of counting [[byte|bytes]].

Bytes are small, so the numbers get very long. 128 GB is 128,000,000,000 bytes. So we use bigger units, the same way we say "3 kilometers" instead of "3,000 meters".

## Analogy

Think of weighing food. A **gram** is a small unit. For bigger amounts you use a **kilogram**, which is 1,000 grams. "Kilo" means "thousand".

Data works the same way. A **byte** is the small unit. A **kilobyte** is 1,000 bytes. A **megabyte** is 1,000 kilobytes, and so on.

**Where the analogy breaks down:** a kilogram is always exactly 1,000 grams. In computers, "kilo" sometimes means **1,024** instead of 1,000. The next section explains why.

## How it actually works

### The bigger units

The names come from the same prefixes used in science: kilo, mega, giga and tera. Each one is **1,000 times** the one before it.

| Unit | Symbol | Bytes |
|---|---|---|
| byte | B | 1 |
| kilobyte | kB | 1,000 (a thousand) |
| megabyte | MB | 1,000,000 (a million) |
| gigabyte | GB | 1,000,000,000 (a billion) |
| terabyte | TB | 1,000,000,000,000 (a trillion) |

So 1 GB is 1,000 MB, and 2 GB is 2,000 MB. To change a bigger unit into the next smaller one (for example GB into MB), multiply by 1,000. To change a smaller unit into the next bigger one, divide by 1,000.

The official symbol for kilo is a small **k**, so the official way to write kilobyte is **kB**. You will also see **KB** with a capital K, as in the title of this page. Both mean kilobyte.

### The second meaning: 1,024

In [[binary]], each position is worth twice the one before: 1, 2, 4, 8, 16, and so on. Start at 1 and double ten times, and you reach **1,024**. That is very close to 1,000. Early computer professionals noticed this and started using "kilo" to mean 1,024. Some software counts in steps of 1,024:

| Name | Symbol | Bytes |
|---|---|---|
| kibibyte | KiB | 1,024 |
| mebibyte | MiB | 1,048,576 (1,024 × 1,024) |
| gibibyte | GiB | 1,073,741,824 (1,024 × 1,024 × 1,024) |

The names **kibi**, **mebi** and **gibi** exist so that nobody has to guess. "Kibi" comes from "kilo binary". A kibibyte (KiB) is always 1,024 bytes.

The problem: some programs count in steps of 1,024 but still write "KB", "MB" or "GB". Then the same letters can mean two different sizes.

### Why your drive looks smaller

Companies that make [[storage]] devices, such as the drive in a computer or the memory card in a camera, measure in steps of 1,000. On the box of a drive, **1 TB** means 1,000,000,000,000 bytes.

Some apps and other software count in steps of 1,024. They show the same drive as about **931 GB** (here, "GB" really means GiB). No space is missing. The same number of bytes is written in a different unit.

The space you can actually use is even a little lower. Preparing a drive for use (called formatting) takes up some room.

### Bits per second

Internet speed tells you how many bits arrive each second. It is usually measured in **bits** per second, not bytes. "100 Mbps" means 100 **megabits** per second. The small **b** means bits. The big **B** means bytes.

A byte is 8 [[bit|bits]]. So 100 megabits per second is 12.5 megabytes per second (100 ÷ 8).

## How it came to be

Early on, computer professionals noticed that 1,024 was very close to 1,000. So they started using "kilo" to mean 1,024. Among these professionals, this worked.

When computers reached many more people, it became confusing, because for most people "kilo" means 1,000. Different companies also chose differently. Makers of computer memory ([[ram]], a different part from storage) mostly use "megabyte" for 1,048,576 bytes. Makers of storage devices usually use it for 1,000,000 bytes.

In **December 1998**, the **International Electrotechnical Commission** (IEC), an organization that writes international technical standards, approved the names kibi, mebi, gibi and others. Today both systems are still in use.

## 🧪 Try it in your browser

You met the browser **console** in [[byte]]. Here you use it as a calculator. In the console, `**` means "to the power of": `2 ** 10` means ten 2s multiplied together (2 × 2 × 2 and so on). The sign `/` means "divided by".

**Safety rule:** only type code in the console that you understand or that comes from a source you trust. Never paste code that a stranger sends you. The code on this page is safe: it only does arithmetic.

1. In Chrome, Edge or Firefox, open any ordinary web page, for example `https://example.com`.
2. Open the console:
   - **Windows:** press `Ctrl` + `Shift` + `J` (in Firefox: `Ctrl` + `Shift` + `K`)
   - **Mac:** press `Cmd` + `Option` + `J` (in Firefox: `Cmd` + `Option` + `K`)
3. You may see some messages already. That is normal. Click the empty line at the bottom. **Type** this line yourself (some browsers block pasting in the console), then press `Enter`:

   ```
   2 ** 10
   ```

   You should see `1024`. That is ten 2s multiplied together.
4. Now count the bytes in a gigabyte, both ways. Type each line and press `Enter`:

   ```
   1000 ** 3
   1024 ** 3
   ```

   You should see `1000000000` (a billion) and then `1073741824`. The second number is about 7% bigger (1,073,741,824 ÷ 1,000,000,000 is about 1.07).
5. Now take a 1 TB drive (1,000 to the power of 4 bytes) and divide by the bytes in one GiB (`1024 ** 3`). The console does the `**` parts first, then the `/`:

   ```
   1000 ** 4 / 1024 ** 3
   ```

   You should see `931.3225746154785`. That is the "about 931 GB" from above.
6. When you are done, close the tab.

**On a phone:** use the calculator app. Multiply 1,024 × 1,024 × 1,024 and compare it with 1,000,000,000. Then divide 1,000,000,000,000 by your answer. You get about 931.

## Common misunderstandings

- **"My new drive is missing space."** Usually not. The box counts in steps of 1,000, and your device may count in steps of 1,024.
- **"MB and Mb are the same."** No. MB is megabytes, Mb is megabits. A byte is 8 bits, so 1 MB is 8 times bigger than 1 Mb.
- **"A kilobyte is always 1,024 bytes."** Not always. Officially, kilo means 1,000. The unit that is always 1,024 bytes is the kibibyte (KiB).

## Recap

- kB, MB, GB and TB are bigger units for bytes. Officially, each step is 1,000 times bigger.
- Some systems use steps of 1,024 instead. The exact names for these are KiB, MiB and GiB.
- A small b means bits, a big B means bytes. Internet speeds use bits.

## Sources

- NIST, Prefixes for binary multiples: https://physics.nist.gov/cuu/Units/binary.html
- NIST, Metric (SI) prefixes: https://www.nist.gov/pml/owm/metric-si-prefixes
- Apple Support, How iOS and macOS report storage capacity: https://support.apple.com/en-us/102119
- Seagate Support, Storage capacity measurement standards: https://www.seagate.com/support/kb/storage-capacity-measurement-standards-002046en/
- MDN Web Docs, Glossary: Bandwidth: https://developer.mozilla.org/en-US/docs/Glossary/Bandwidth
- MDN Web Docs, Exponentiation (**): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation
- MDN Web Docs, Operator precedence: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
- Chrome for Developers, Open Chrome DevTools: https://developer.chrome.com/docs/devtools/open
- Microsoft Edge DevTools, Keyboard shortcuts: https://learn.microsoft.com/en-us/microsoft-edge/devtools/shortcuts/
- Firefox DevTools User Docs, Web Console: https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html
- Chrome for Developers, Self-XSS protection: https://developer.chrome.com/blog/self-xss
