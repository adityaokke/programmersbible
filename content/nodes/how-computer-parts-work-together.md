---
id: how-computer-parts-work-together
title: "How the Parts Work Together"
type: concept
part: machine
status: published
requires: [cpu, ram, storage, input-output]
related: [operating-system, what-is-a-computer, personal-computer]
summary: "A computer's parts work as a team: the CPU follows instructions that wait in memory (RAM), storage keeps programs and files for later, input and output devices connect the computer with you, and groups of wires called buses carry bits between them."
read_minutes: 6
questions:
  - how do the parts of a computer work together
  - what happens when I open an app
  - what is a bus in a computer
  - what is a motherboard
  - what happens when I press a key
  - what is an interrupt
aliases: [bus, system bus, motherboard, interrupt, interrupt request, stored-program computer, address bus, data bus]
sources:
  - title: "Stanford CS101: Computer Hardware"
    url: https://web.stanford.edu/class/cs101/hardware-1.html
  - title: "Stanford CS101: Running and Operating Systems"
    url: https://web.stanford.edu/class/cs101/software-1.html
  - title: "Emory University CS255: The operations that the CPU can perform on the memory"
    url: https://cs.emory.edu/~cheung/Courses/255/Syllabus/4-intro/SLIDES/s14a.html
  - title: "Wikipedia: Bus (computing) (general background reference)"
    url: https://en.wikipedia.org/wiki/Bus_(computing)
  - title: "Douglas W. Jones, University of Iowa: 22C:18, Lecture 35 (interrupts)"
    url: https://homepage.cs.uiowa.edu/~jones/assem/summer97/notes/35.html
  - title: "Robert G. Plantz: Introduction to Computer Organization, Section 17.3 Interrupts"
    url: https://bob.cs.sonoma.edu/testing/sec-inters.html
  - title: "Computer History Museum, Revolution: Birth of the Computer (EDVAC report)"
    url: https://www.computerhistory.org/revolution/birth-of-the-computer/4/88
  - title: "Computer History Museum: This Day in History, June 30"
    url: https://www.computerhistory.org/tdih/june/30/
  - title: "MDN Web Docs: Element keydown event"
    url: https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
  - title: "MDN Web Docs: KeyboardEvent.key"
    url: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
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

> **In one sentence:** A computer's parts work as a team: the CPU follows instructions that wait in memory (RAM), storage keeps programs and files for later, input and output devices connect the computer with you, and groups of wires called buses carry bits between them.

## Why should I care?

You have met the main parts of a computer one by one: the [[cpu|CPU]], [[ram|memory (RAM)]], [[storage]], and [[input-output|input and output devices]]. But no part can do much alone. A CPU with no memory has no instructions to follow. Memory with no CPU only holds bits.

This page follows one app and one key press through the computer.

## Analogy

Go back to the **kitchen**. The **cook** is the CPU. The **table** is memory (RAM): the recipe and the food in use right now. The **fridge** is storage: everything kept for later. The **window** to the dining room is input and output: orders come in, and dishes go out. **Hallways** connect them all, like the buses you will meet below.

Food moves from the fridge to the table before cooking. When a new order arrives, a bell rings, and the cook stops for a moment to read it.

**Where the analogy breaks down:** a cook walks to the fridge and understands the recipe and the orders. In a computer, nothing walks and nothing understands. Bits travel as electrical signals along wires. When the "bell" rings, the CPU does not read anything: it jumps to other instructions.

## How it actually works

### The motherboard and the buses

In a desktop computer, the main parts, such as the CPU and the RAM, plug into a flat board called the **motherboard**. Other parts, such as a drive, can connect to it with a cable.

A group of wires that carries bits between parts of a computer is called a **bus**. In the simple model taught in one Emory University course, each wire carries a 1 as a high voltage, or a 0 as a low voltage. The bus between the CPU and memory has three groups of wires:

- **Address wires** say which place the CPU wants. (Each cell of RAM has a number, its **address**.)
- **Data wires** carry the bits that are being moved.
- **Control wires** carry the command, such as "read" or "write". In that model, one control signal also says whether the CPU wants memory or an input or output device.

*Diagram: the CPU at the top, connected by one long bus to memory (RAM), storage, and input and output devices. Bits can travel along the bus in both directions.*

```
                 ┌───────────┐
                 │    CPU    │
                 └─────┬─────┘
                       │
 ══════╤═══════════════╪══════════════╤══════════  BUS (groups of wires)
       │               │              │
 ┌─────┴─────┐   ┌─────┴─────┐   ┌────┴──────────────┐
 │  MEMORY   │   │  STORAGE  │   │ INPUT and OUTPUT  │
 │   (RAM)   │   │ (SSD/HDD) │   │ keyboard, screen  │
 └───────────┘   └───────────┘   └───────────────────┘
```

(This picture is simplified. A real computer has several buses. For example, external devices often connect through USB, a different bus.)

### Opening an app

1. **Input.** You click or tap the app's icon.
2. **From storage to memory.** The app's instructions are kept in storage, in a file. The computer copies them into RAM.
3. **The CPU runs the app.** The CPU is told to start at the app's first instruction. It fetches each instruction from RAM over the bus, decodes it, and executes it.
4. **Output.** Some instructions send bits to an output device, and the app's window appears on the screen.

Steps 2 and 3 are started by the **operating system**: a program that starts running when the computer starts up, and that manages the other programs. See [[operating-system]].

Why copy the app at all? Stanford's course says flash storage "is much slower than RAM, so it is not a good replacement for RAM".

### Pressing a key

Nobody can know when you will press a key. So how does the CPU notice?

1. A helper chip, such as a **keyboard controller**, sends an **interrupt request** to the CPU: a signal that asks the CPU to stop for a moment.
2. The CPU saves its place: the address in its program counter. Then it runs a small set of instructions that handle the key. The operating system put these instructions in memory.
3. The CPU goes back to the work it was doing before.
4. The app's instructions work with the key, and a letter may appear on the screen.

## How it came to be

[[eniac|ENIAC]], as it was first built, did not keep its program in memory. The Computer History Museum says its builders, Eckert and Mauchly, saw the "shortcomings" (weak points) of rewiring ENIAC for each problem.

The museum says John von Neumann, a mathematician who "consulted on ENIAC" (gave advice), wrote a report about the next computer, called EDVAC. It was the "First Draft of a Report on the EDVAC", dated June 30, 1945. The museum quotes Brian Randell: "It is generally accepted" that this was the "first documented discussion" of the advantages of one large memory for both instructions and data.

The museum says the report set out the main ideas for **stored-program computers**: computers that keep their program in memory. Today, RAM still "stores both code and data", says Stanford's course.

## 🧪 Try it in your browser

You will follow one key press through every part. You need a computer with a keyboard. You may know the line below from [[input-output]]. This time, trace each part. You do not need to understand every word of it yet.

**Safety rule:** only type instructions in the console that you understand or that come from a source you trust. Never paste anything a stranger sends you. The line below only shows the name of each key you press on this one tab.

1. In Chrome, Edge or Firefox, open `https://example.com` in a **new** tab.
2. Open the console:
   - **Windows:** press `Ctrl` + `Shift` + `J` (in Firefox: `Ctrl` + `Shift` + `K`)
   - **Mac:** press `Cmd` + `Option` + `J` (in Firefox: `Cmd` + `Option` + `K`)
3. Click the empty line at the bottom. **Type** this line yourself (some browsers block pasting in the console), then press `Enter`:

   ```
   addEventListener("keydown", e => console.log(e.key))
   ```

   You may see the word `undefined`. That is normal.
4. Click once on an empty white part of the page, away from the text and the link.
5. Press a letter key, then the left arrow key.

**What you should see:** a new line in the console for each key: the letter (such as `a`), then `ArrowLeft`.

**What happened:** when you opened the browser, its instructions were copied from **storage** into **RAM**. Your key press caused an **interrupt request**. The **CPU** handled it, then ran the browser's instructions, fetching them from RAM over a **bus**. The key name appeared on the screen: **output**. Close the tab when you are done.

**On a phone:** take a photo, and name each part that helps: camera (input), CPU, RAM, storage (when the photo is saved), and screen (output).

## Common misunderstandings

- **"The CPU runs programs straight from storage."** No. A program's instructions are copied from storage into RAM first. The CPU fetches them from RAM.
- **"The CPU checks the keyboard all the time."** No. A helper chip waits for keys and interrupts the CPU when one arrives. In between, the CPU can do other work.

## Recap

- To run an app, the computer copies it from storage into RAM, and the CPU follows its instructions there.
- Buses are groups of wires that carry bits, such as addresses, data and commands, between the parts.
- Input devices can interrupt the CPU when something happens, such as a key press.

## Sources

- Stanford CS101, Computer Hardware: https://web.stanford.edu/class/cs101/hardware-1.html
- Stanford CS101, Running and Operating Systems: https://web.stanford.edu/class/cs101/software-1.html
- Emory University CS255, The operations that the CPU can perform on the memory: https://cs.emory.edu/~cheung/Courses/255/Syllabus/4-intro/SLIDES/s14a.html
- Wikipedia, Bus (computing) (general background reference): https://en.wikipedia.org/wiki/Bus_(computing)
- Douglas W. Jones, University of Iowa, 22C:18 Lecture 35: https://homepage.cs.uiowa.edu/~jones/assem/summer97/notes/35.html
- Robert G. Plantz, Introduction to Computer Organization, Section 17.3 Interrupts: https://bob.cs.sonoma.edu/testing/sec-inters.html
- Computer History Museum, Revolution: Birth of the Computer: https://www.computerhistory.org/revolution/birth-of-the-computer/4/88
- Computer History Museum, This Day in History, June 30: https://www.computerhistory.org/tdih/june/30/
- MDN Web Docs, Element: keydown event: https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
- MDN Web Docs, KeyboardEvent.key: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
- Chrome for Developers, Open Chrome DevTools: https://developer.chrome.com/docs/devtools/open
- Microsoft Edge DevTools, Keyboard shortcuts: https://learn.microsoft.com/en-us/microsoft-edge/devtools/shortcuts/
- Firefox DevTools User Docs, Web Console: https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html
- Chrome for Developers, Self-XSS protection: https://developer.chrome.com/blog/self-xss
