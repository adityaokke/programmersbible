---
id: microprocessor
title: "The Microprocessor"
type: event
part: machine
status: published
reviewed_by: ai
reviewed_at: 2026-10-31
requires: [integrated-circuit, cpu]
related: [transistor, eniac]
led_to: [personal-computer]
year: 1971
summary: "In 1971, Intel introduced the 4004, a microprocessor: the CPU, the part of a computer that follows a program's instructions, built on a single chip."
read_minutes: 6
questions:
  - what is a microprocessor
  - what was the first microprocessor
  - what was the intel 4004
  - who invented the microprocessor
  - why was the microprocessor important
  - what is the difference between a cpu and a microprocessor
aliases: [microprocessor, microprocessors, MPU, Intel 4004, "4004", CPU on a chip, MCS-4, Busicom]
images:
  - file: busicom-board-4004.jpg
    alt: "A calculator circuit board. The photographer's red arrows point at its MCS-4 chips: a white 4004 in the top row, and dark 4001, 4002 and 4003 chips."
    source: https://commons.wikimedia.org/wiki/File:Intel_4004_on_Busicom_calculator_circuit_board.jpg
    author: "MaltaGC"
    license: CC BY-SA 4.0
  - file: intel-4004-open.jpg
    alt: "An Intel 4004 with its white case opened. In the middle is the small, shiny silicon chip. Thin wires connect it to the pins."
    source: https://commons.wikimedia.org/wiki/File:Intel_4004_open.jpg
    author: "the Science Museum"
    license: CC BY 4.0
    labels:
      - { x: 49, y: 49, text: Chip, side: right, ly: 30 }
      - { x: 12, y: 60, text: Case, side: left }
sources:
  - title: "Computer History Museum, The Silicon Engine: 1971, Microprocessor Integrates CPU Function onto a Single Chip"
    url: https://www.computerhistory.org/siliconengine/microprocessor-integrates-cpu-function-onto-a-single-chip/
  - title: "Computer History Museum, Revolution: Intel's Microprocessor"
    url: https://www.computerhistory.org/revolution/digital-logic/12/285
  - title: "Computer History Museum, Revolution: Busicom 141-PF Printing Calculator Engineering Prototype, 1971"
    url: https://www.computerhistory.org/revolution/artifact/285/1534
  - title: "Computer History Museum, Timeline of Computer History: 1971"
    url: https://www.computerhistory.org/timeline/1971/
  - title: "Computer History Museum catalog: 35th Anniversary of the Intel 4004 Microprocessor, lecture by Federico Faggin et al."
    url: https://www.computerhistory.org/collections/catalog/102695057
  - title: "IEEE Milestones wiki: Milestone Proposal, Intel 4004 Microprocessor"
    url: https://ieeemilestones.org/Milestone-Proposal:Intel_4004_Microprocessor
  - title: "IEEE Milestones wiki: Main Page (what the Milestones program is)"
    url: https://ieeemilestones.org/Main_Page
  - title: "Intel Virtual Vault: The Intel 4004"
    url: https://www.intel.com/content/www/us/en/history/virtual-vault/articles/the-intel-4004.html
  - title: "Penn Engineering: Celebrating Penn Engineering History: ENIAC"
    url: https://www.engineering.upenn.edu/about/history-heritage/eniac/
  - title: "Stanford CS101: Computer Hardware"
    url: https://web.stanford.edu/class/cs101/hardware-1.html
  - title: "Wikipedia: Microprocessor (general background reference)"
    url: https://en.wikipedia.org/wiki/Microprocessor
author: ai
updated: 2026-10-31
---

> **In one sentence:** In 1971, Intel introduced the 4004, a microprocessor: the CPU, the part of a computer that follows a program's instructions, built on a single chip.

## The world before

Every modern computer has a [[cpu|CPU]] (central processing unit). Stanford's CS101 course says the CPU "acts like a brain: follows the instructions in the code". You met programs (lists of instructions) in [[what-is-a-computer]].

A CPU is built from many [[logic-gates|logic gates]], and gates are built from [[transistor|transistors]]. Many transistors can be made together on one [[integrated-circuit|integrated circuit]], also called a **chip**. Stanford's course describes a chip as a "fingernail sized piece of silicon" with microscopic transistors made on its surface. (This is simplified. The full story is in the integrated circuit lesson.)

Before microprocessors, a whole CPU usually did not fit on one chip. According to Wikipedia's article on microprocessors, small computers were built with many separate integrated circuits. So one CPU was spread across many chips.

## What happened

### A calculator order

In 1969, a Japanese calculator maker called **Busicom** asked a company called **Intel** to design a set of chips for its calculators. (The Computer History Museum says Intel was founded in 1968, and that it first made memory chips.)

Busicom's plan needed many **custom** chips: chips made for one product only. Sources give different numbers. A page from IEEE Milestones, a program that honors important technical achievements, says seven chips. Intel's own history page says twelve. In the IEEE version, three of the chips would together do the work of a CPU.

### One general-purpose chip

At Intel, **Ted Hoff** proposed a different plan. The Computer History Museum says he proposed "a general-purpose 4-bit computer" built from four chips.

- **4-bit** means it works on 4 [[bit|bits]] at a time.
- **General-purpose** means it is not built for one job. It does whatever its program tells it to do. So the same chips could run a calculator, or other machines, with a different program.

The main chip of the four was the **Intel 4004**. It was the CPU. The other three chips were for **memory** (keeping information) and for **input and output** (taking information in and giving results out). Together, these four chips were called the **MCS-4**.


![A calculator circuit board. The photographer's red arrows point at its MCS-4 chips: a white 4004 in the top row, and dark 4001, 4002 and 4003 chips.](images/busicom-board-4004.jpg)

According to the museum, Ted Hoff and **Stanley Mazor** came up with the idea for the 4004. **Federico Faggin** was the main designer and the project leader. In 1970, **Masatoshi Shima** of Busicom was given the job of helping Faggin with the 4004 design.

### A whole CPU on one chip

The museum says that new chip-making methods and design advances made it possible to put a CPU on a single chip. Faggin adapted Intel's methods for making memory chips to fit about 2,300 transistors on the 4004. (Different Computer History Museum pages give 2,300 or 2,250.) The museum's timeline says the 4004 could do up to 90,000 operations per second, working on 4 bits at a time.


![An Intel 4004 with its white case opened. In the middle is the small, shiny silicon chip. Thin wires connect it to the pins.](images/intel-4004-open.jpg)

The IEEE page says the 4004 was a complete CPU "on a single silicon chip". It also says that this single-chip design brought "significant cost and performance improvements" over designs that used many chips.

Compare the size with [[eniac|ENIAC]]. ENIAC used about 18,000 vacuum tubes and filled a room. The 4004's whole CPU fit on one small chip. (This compares size only, not how much work each machine could do.)

A chip like this, a whole CPU on one integrated circuit, is called a **microprocessor**, or **MPU** for short. So every microprocessor is a CPU. But a CPU is not always a microprocessor: in the years before microprocessors, a CPU was usually spread over many chips. (Even earlier, before chips existed, it was made of many separate parts, like the vacuum tubes in ENIAC.) Some definitions also count a CPU built on a few chips as a microprocessor.

### Sold to other companies

At first, Busicom had the **exclusive** rights to the chips: only Busicom could buy them. The IEEE page explains the deal that changed this. Intel gave back Busicom's $60,000 payment for the design work. Intel also agreed to sell Busicom the chips at a lower price. In return, Busicom gave up its exclusive rights. Intel's own history page says Intel got the rights "for everything but calculators". So Intel could now sell the 4004 to other companies, for products other than calculators.

Intel introduced the MCS-4 chips to the world in **November 1971**. The museum's timeline says the first advertisement for a microprocessor, the 4004, appeared in a publication called Electronic News.

### Was it the first?

The Computer History Museum's 1971 timeline calls the 4004 "the first microprocessor". But people do not fully agree. The museum's Silicon Engine page lists earlier chips. One is the Four-Phase Systems AL-1 (1969), a chip that did part of a CPU's work and could be joined with others. Wikipedia says people disagree about who invented the microprocessor. But it calls the 4004 "the first commercially available microprocessor": the first one that companies could buy. That is the safest thing to remember.

## Why it mattered

Putting a whole CPU on one or a few chips "greatly reduced the cost of computing", says Wikipedia.

Intel soon made more microprocessors, such as the 8008 (1972) and the 8080 (1974). Other companies made them too. One low-cost microprocessor, the 6502 from a company called MOS Technology, helped Apple, Atari, Commodore and other companies make personal computers and games. (This is from the museum's Silicon Engine page.) The IEEE page says the success of the 4004 led to microprocessors being used in many products, including the [[personal-computer|personal computer]].

Today, Wikipedia says, thousands of things that are not usually thought of as computers contain microprocessors, such as home appliances, vehicles and toys. And transistor counts grew enormously: Stanford's course says "chips can contain billions of transistors".

## 🔍 See it for yourself

1. Open the Computer History Museum's [Busicom 141-PF prototype page](https://www.computerhistory.org/revolution/artifact/285/1534). A **prototype** is an early test version of a product. Read the text under the photo. It says this calculator was the test machine for the first commercial use of the 4004 (the first use in a product for sale). It also says the four MCS-4 chips are visible in the photo.
2. Open the museum's [Silicon Engine page for 1971](https://www.computerhistory.org/siliconengine/microprocessor-integrates-cpu-function-onto-a-single-chip/). Read the photo captions to find a close-up of the 4004 chip. Its caption says the gold lines show how complex the 4004's **layout** is (how its parts are arranged on the chip).

## Recap

- A microprocessor is a whole CPU, the part of a computer that follows a program's instructions, on a single chip.
- The Intel 4004, introduced in November 1971, began as a chip for Busicom calculators. It had about 2,300 transistors. Intel bought back the right to sell it to other companies for products other than calculators.
- Microprocessors made computing much cheaper. They led to the personal computer, and today they are in home appliances, vehicles, toys and much more.

## Sources

- Computer History Museum, The Silicon Engine, 1971: Microprocessor Integrates CPU Function onto a Single Chip: https://www.computerhistory.org/siliconengine/microprocessor-integrates-cpu-function-onto-a-single-chip/
- Computer History Museum, Revolution: Intel's Microprocessor: https://www.computerhistory.org/revolution/digital-logic/12/285
- Computer History Museum, Revolution: Busicom 141-PF Printing Calculator Engineering Prototype, 1971: https://www.computerhistory.org/revolution/artifact/285/1534
- Computer History Museum, Timeline of Computer History, 1971: https://www.computerhistory.org/timeline/1971/
- Computer History Museum catalog, 35th Anniversary of the Intel 4004 Microprocessor (lecture): https://www.computerhistory.org/collections/catalog/102695057
- IEEE Milestones wiki, Milestone Proposal: Intel 4004 Microprocessor: https://ieeemilestones.org/Milestone-Proposal:Intel_4004_Microprocessor
- IEEE Milestones wiki, Main Page: https://ieeemilestones.org/Main_Page
- Intel Virtual Vault, The Intel 4004: https://www.intel.com/content/www/us/en/history/virtual-vault/articles/the-intel-4004.html
- Penn Engineering, Celebrating Penn Engineering History: ENIAC: https://www.engineering.upenn.edu/about/history-heritage/eniac/
- Stanford CS101, Computer Hardware: https://web.stanford.edu/class/cs101/hardware-1.html
- Wikipedia, Microprocessor: https://en.wikipedia.org/wiki/Microprocessor
