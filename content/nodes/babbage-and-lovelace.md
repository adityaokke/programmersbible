---
id: babbage-and-lovelace
title: "Babbage and Lovelace"
type: event
part: machine
status: published
requires: [before-computers]
led_to: [turing-universal-machine]
year: 1834
era_label: "1830s–1840s"
summary: "In 1834, Charles Babbage began to design the Analytical Engine, a programmable calculating machine that was never finished, and in 1843 Ada Lovelace published notes that explained how it could be programmed."
read_minutes: 6
questions:
  - who was charles babbage
  - who was ada lovelace
  - what was the analytical engine
  - what was the difference engine
  - who was the first programmer
  - did babbage build the first computer
aliases: [charles babbage, ada lovelace, analytical engine, difference engine, note g, first computer program, first programmer]
sources:
  - title: "Computer History Museum, Revolution: The Revolutionary Babbage Engine"
    url: https://www.computerhistory.org/revolution/calculators/1/51
  - title: "Computer History Museum, Babbage Engine: The Engines"
    url: https://www.computerhistory.org/babbage/engines/
  - title: "Computer History Museum, Babbage Engine: Ada Lovelace"
    url: https://www.computerhistory.org/babbage/adalovelace/
  - title: "Computer History Museum, Babbage Engine (overview)"
    url: https://www.computerhistory.org/babbage/
  - title: "Bodleian Libraries (University of Oxford) blog: Ada Lovelace and the Analytical Engine (Hollings, Martin and Rice, 2018)"
    url: https://blogs.bodleian.ox.ac.uk/adalovelace/2018/07/26/ada-lovelace-and-the-analytical-engine/
  - title: "Science Museum Group Collection: Babbage's Analytical Engine, 1834-1871 (Trial model)"
    url: https://collection.sciencemuseumgroup.org.uk/objects/co62245
  - title: "Columbia University Computing History: The Jacquard Loom"
    url: https://www1.columbia.edu/cu/computinghistory/jacquard.html
  - title: "Wikipedia: Loom"
    url: https://en.wikipedia.org/wiki/Loom
author: ai
reviewed_by: ai
reviewed_at: 2026-10-31
updated: 2026-10-31
---

> **In one sentence:** In 1834, Charles Babbage began to design the Analytical Engine, a programmable calculating machine that was never finished, and in 1843 Ada Lovelace published notes that explained how it could be programmed.

## The world before

In [[before-computers]], you met the mechanical calculators of the 1600s. A person had to operate them for every calculation.

In the 1800s, many people needed long lists of calculated numbers, printed in books called **tables**. Sailors used them to find their way at sea. The Computer History Museum calls the tables "error-prone": they often contained mistakes. Engineers, astronomers and bankers had the same problem.

Charles Babbage (1791–1871) was a British mathematician and engineer. He worked on machines to produce accurate tables, calculated and printed automatically.

## What happened

### The Difference Engine (from 1821)

In 1821, Babbage began work on his **Difference Engine No. 1**. It was designed to calculate a series of values and print the results automatically in a table. Its name comes from a mathematical method, "the method of finite differences". The museum explains that this method uses only addition.

The full machine would have needed about 25,000 parts. It was never finished. Work stopped in 1832, after a dispute with the engineer Joseph Clement. Babbage completed only one-seventh of the machine: a demonstration piece of about 2,000 parts, assembled in 1832.

### The Analytical Engine (from 1834)

In 1834, Babbage had a bigger idea: the **Analytical Engine**. It was designed to be **general-purpose**: not built for one kind of calculation, but able to do many different kinds. And it was **programmable**: you could give it a new list of instructions (a program) for each job.

Its instructions were to be given on **punched cards**: stiff cards with holes in them. Babbage borrowed this idea from the **Jacquard loom**. A loom is a device used to weave cloth. In the Jacquard loom, developed in France in 1804–05, punched cards controlled the loom and its woven patterns. To weave a new pattern, you did not rebuild the loom. You gave it different cards. (But the loom's cards only controlled the pattern of the cloth. The loom did not calculate anything.)

The Analytical Engine had two main parts:

- The **Store** held numbers: both the starting numbers and the results of steps along the way.
- The **Mill** did the arithmetic.

Here is how the parts were meant to work together:

```
  PUNCHED CARDS  ─────►  MILL  ─────►  OUTPUT
  (the program)       (does the      (printed pages,
                       arithmetic)     punched cards,
                        ▲   │          drawn graphs)
                        │   ▼
                        STORE
            (holds numbers and results)
```

*Diagram: punched cards give instructions to the Mill. The Mill takes numbers from the Store, calculates, and puts results back in the Store. Results come out as printed pages, punched cards or drawn graphs. (This picture is simplified.)*

The design could also **choose** what to do next, based on a result, and **repeat** a group of steps (a **loop**).

This may remind you of the parts of a computer from [[what-is-a-computer]]. The museum compares the Store to a computer's memory and the Mill to its central processor (CPU). But there is a big difference. The Analytical Engine was made of gears and wheels, not electronic parts. And Babbage never finished it. When he died in 1871, only a small test piece of the Mill (a "trial piece") was being built.

### Ada Lovelace's notes (1843)

Ada Lovelace (1815–1852) was born Augusta Ada Byron. She was the daughter of the poet Lord Byron. Her mother had studied mathematics. She insisted that Ada should study it too. In 1833, when Ada was seventeen, she met Babbage at a party.

In 1840, Italian scientists invited Babbage to the city of Turin, where he gave talks about the Analytical Engine. Luigi Menabrea, an Italian engineer, then wrote an article about it in French. A scientific friend, Charles Wheatstone, asked Lovelace to translate it. Babbage suggested that she add notes of her own. Her translation, with her notes, was published in August 1843. Of its 66 pages, 41 were her notes.

Her last note, **Note G**, showed step by step how the machine could calculate the **Bernoulli numbers**: a series of numbers in which each one is worked out from the ones before. A large table showed the steps, with columns for the starting numbers, the variables (the values in use), and the results along the way. The Computer History Museum calls her notes "the first published description of a stepwise sequence of operations" (a list of steps) for solving certain mathematical problems. The museum adds that she is often called "the first programmer". Historians still discuss how much of this work was hers and how much was Babbage's.

Lovelace also saw something new. She wrote that the machine might work on "things other than number". For example, she suggested it "might compose elaborate and scientific pieces of music".

## Why it mattered

The Computer History Museum calls the Analytical Engine "arguably the world's first programmable computer". "Arguably" means that not everyone agrees.

According to the museum, the Analytical Engine "has many essential features found in the modern digital computer", the kind of computer we use today. These include a memory kept separate from the processor, and steps that can choose and repeat. Lovelace's idea was important too: a machine that follows rules could work with symbols, not only with numbers. The museum says she was "the first to explicitly articulate this notion": the first to say it clearly.

But Babbage's machines were not finished in his lifetime. The museum says his ideas were "revolutionary" but "never built", and calls them "a brilliant dead end". (A dead end is a road that goes nowhere.) In 1847–1849, Babbage also designed an improved **Difference Engine No. 2**. In 2002, a complete one was finished in London, built from his drawings.

The next big idea in this story is about machines that can follow any list of instructions. It continues in [[turing-universal-machine|Turing and the Universal Machine]].

## 🔍 See it for yourself

These pages use harder English. You do not need to read everything. To find a word on a page, press `Ctrl` + `F` (on a Mac, `Command` + `F`), as you did in [[what-is-a-computer]].

1. Open the Computer History Museum's page on [The Engines](https://www.computerhistory.org/babbage/engines/). Search for `Mill`. You will find a description of the Analytical Engine's "Store" and "Mill".
2. Open the museum's page on [Ada Lovelace](https://www.computerhistory.org/babbage/adalovelace/). Search for `first programmer`. You will find the sentence that gives her this name.
3. Open the Science Museum Group's page on [Babbage's Analytical Engine (trial model)](https://collection.sciencemuseumgroup.org.uk/objects/co62245). You will see photos of the small piece of the Mill that was being built when Babbage died.
4. Open the University of Oxford article [Ada Lovelace and the Analytical Engine](https://blogs.bodleian.ox.ac.uk/adalovelace/2018/07/26/ada-lovelace-and-the-analytical-engine/). Search for `Note G`. You will find the part about her famous last note.

## Recap

- From 1821, Charles Babbage designed machines to calculate and print accurate tables of numbers. In 1834 he began the Analytical Engine, a programmable machine with a Store (memory) and a Mill (processor).
- In 1843, Ada Lovelace published notes that showed, step by step, how the machine could calculate the Bernoulli numbers. She is often called "the first programmer".
- The Analytical Engine was never built, but it had many essential features of today's computers.

## Sources

- Computer History Museum, Revolution: The Revolutionary Babbage Engine: https://www.computerhistory.org/revolution/calculators/1/51
- Computer History Museum, Babbage Engine: The Engines: https://www.computerhistory.org/babbage/engines/
- Computer History Museum, Babbage Engine: Ada Lovelace: https://www.computerhistory.org/babbage/adalovelace/
- Computer History Museum, Babbage Engine (overview): https://www.computerhistory.org/babbage/
- Bodleian Libraries (University of Oxford) blog, Ada Lovelace and the Analytical Engine (Hollings, Martin and Rice, 2018): https://blogs.bodleian.ox.ac.uk/adalovelace/2018/07/26/ada-lovelace-and-the-analytical-engine/
- Science Museum Group Collection, Babbage's Analytical Engine, 1834-1871 (Trial model): https://collection.sciencemuseumgroup.org.uk/objects/co62245
- Columbia University Computing History, The Jacquard Loom: https://www1.columbia.edu/cu/computinghistory/jacquard.html
- Wikipedia, Loom: https://en.wikipedia.org/wiki/Loom
