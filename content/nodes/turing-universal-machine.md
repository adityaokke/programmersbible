---
id: turing-universal-machine
title: "Turing and the Universal Machine"
type: event
part: machine
status: published
requires: [babbage-and-lovelace]
related: [what-is-a-computer, binary]
led_to: [eniac]
year: 1936
era_label: "1930s"
summary: "In 1936, the mathematician Alan Turing described an imaginary machine that follows simple rules on a long strip of paper, and showed that one single machine, the universal machine, could do the work of any other such machine."
read_minutes: 6
questions:
  - who was alan turing
  - what is a turing machine
  - what is a universal turing machine
  - what did turing write in 1936
  - did turing invent the computer
  - what is the entscheidungsproblem
aliases: [turing machine, universal turing machine, alan turing, on computable numbers, entscheidungsproblem, decision problem]
sources:
  - title: "Andrew Hodges, Alan Turing Scrapbook: Turing's Universal Machine"
    url: https://www.turing.org.uk/scrapbook/machine.html
  - title: "Stanford Encyclopedia of Philosophy: Turing Machines"
    url: https://plato.stanford.edu/entries/turing-machine/
  - title: "Stanford Encyclopedia of Philosophy: Alan Turing"
    url: https://plato.stanford.edu/entries/turing/
  - title: "MacTutor (University of St Andrews): Alan Turing, Oxford Dictionary of National Biography entry by Andrew Hodges"
    url: https://mathshistory.st-andrews.ac.uk/DNB/Turing.html
  - title: "Centre for Computing History: Alan Turing invents the principle of the modern computer"
    url: https://www.computinghistory.org.uk/det/6028/Alan-Turing-invents-the-principle-of-the-modern-computer/
  - title: "Science Museum blog: 1930s, Turing's Universal Machine (2013)"
    url: https://blog.sciencemuseum.org.uk/1930s-turings-universal-machine/
  - title: "Computer History Museum, Babbage Engine: The Engines"
    url: https://www.computerhistory.org/babbage/engines/
author: ai
reviewed_by: ai
reviewed_at: 2026-10-31
updated: 2026-10-31
---

> **In one sentence:** In 1936, the mathematician Alan Turing described an imaginary machine that follows simple rules on a long strip of paper, and showed that one single machine, the universal machine, could do the work of any other such machine.

## The world before

In the 1800s, Charles Babbage designed calculating machines made of gear wheels ([[babbage-and-lovelace|Babbage and Lovelace]]).

In the 1930s, as you saw in [[what-is-a-computer]], the word "computer" still meant a **person** who did calculations by hand, following fixed instructions.

Mathematicians were also asking a big question, raised by the German mathematician David Hilbert. It is known as the **Entscheidungsproblem**. That is German for "decision problem". In plain words, it asked:

> Is there a method that can decide, for any mathematical statement, whether it can be proved or not?

A mathematical **statement** is a sentence in mathematics that is either true or false, such as "2 + 2 = 4". To **prove** a statement means to show that it is true, using careful logical steps. A **method** here means a fixed list of steps that anyone could follow without any creative ideas.

To answer this, someone first had to say exactly what "a method" is. Alan Turing did that.

## What happened

Alan Turing was born in London on 23 June 1912. From 1931, he studied at King's College, Cambridge, in England. In 1935, the college made him a fellow (a member who does research there).

Turing asked: what does a person do when following a method? He imagined a human computer working with pencil and paper. Then he broke that work down into a few very simple actions. The result was an imaginary machine that we now call a **Turing machine**.

### How a Turing machine works

A Turing machine has a few parts:

- A **tape**: a strip of paper divided into squares. In Turing's idea, the tape has no end, so the machine never runs out of space. Each square holds one **symbol** (a written mark, such as `0` or `1`), or it is blank.
- A **head** that looks at one square at a time. It can read the symbol, write a new one, and move one square left or right.
- A **state**: a note of which step the machine is on, like a bookmark in its list of rules.
- A **table of rules**. Each rule says: "If you are in this state and you see this symbol, write this symbol, move left or right, and go to this state."

Here is a tiny example (made up for this page) that flips every [[bit]] (a single `0` or `1`) on the tape: each `0` becomes `1`, and each `1` becomes `0`. It has one state, called A. It starts in state A, with the head on the first square. When it sees a blank square, it stops.

| In state | You see | Write | Move | Next state |
|---|---|---|---|---|
| A | `0` | `1` | right | A |
| A | `1` | `0` | right | A |
| A | blank | (nothing) | (none) | stop |

```
Before:   [1][0][1][1][ ]
           ^ head starts here
After:    [0][1][0][0][ ]
                       ^ head stops on the blank square
```

*Alt text: a tape with the squares 1, 0, 1, 1 and a blank. After the machine runs, the squares read 0, 1, 0, 0, and the head is on the blank square.*

Each Turing machine has its own table of rules, so it does one job.

### The universal machine

Then Turing described something more. He wrote: "It is possible to invent a single machine which can be used to compute any computable sequence." In plain words: one machine can do the work of every other Turing machine.

He called it the **universal machine**. You write the table of rules of another Turing machine onto its tape, as symbols (letters that stand for the rules). The universal machine reads that description and does what the other machine would have done.

**An analogy:** think of a cook who can follow any recipe you hand them. You change the recipe, not the cook. The recipe is like the rules on the tape.

**Where the analogy breaks down:** a cook understands food and can notice a bad recipe. A Turing machine understands nothing. It follows its rules exactly. Also, its tape has no end. A real cook, and a real computer, always has limits.

### The answer and the paper

Using his machines, Turing showed that the answer to Hilbert's question is **no**. No such general method can exist. To show this, he first described numbers that no Turing machine can calculate. The full proof is long, and you do not need it to continue.

Alonzo Church was an American logician at Princeton. A logician is an expert in the rules of correct reasoning. In April 1936, Turing found out that Church had already reached the same answer. Church used a different way to describe what a method is. Turing's paper was published anyway. He showed that his way and Church's way give the same mathematical results.

Turing's paper is called *On Computable Numbers, with an Application to the Entscheidungsproblem*. The London Mathematical Society published it in its journal in two parts, on 30 November and 23 December 1936.

## Why it mattered

In 1936, nobody built a Turing machine. The writer Andrew Hodges says that the universal machine was then "only possible in Turing's imagination".

In the universal machine, the rules of another machine are symbols on the tape. So the machine treats instructions as **data**: information it reads and works on. Hodges calls this "the principle of the modifiable stored program on which all computing now depends". (Modifiable means changeable.) A **stored program** means that a computer keeps its instructions in its memory, next to its data. To do a new job, such a computer gets a new program, not new parts.

After the Second World War, Turing worked at the National Physical Laboratory in England. There he designed the Automatic Computing Engine, or ACE. The Science Museum calls it "one of the first practical designs for a stored-program computer".

Turing's paper became the foundation of the theory of computation: the study of what machines can and cannot calculate.

But be careful with one claim. Some people say that Turing invented the modern computer. The Stanford Encyclopedia of Philosophy warns that such claims give "a distorted and biased picture". The story of real machines continues with [[eniac|ENIAC]].

## 🔍 See it for yourself

1. Open Andrew Hodges's page [Turing's Universal Machine](https://www.turing.org.uk/scrapbook/machine.html). Scroll down to the photograph of Turing with the caption "Passport photograph, 1936".
2. Try the tape example from this page with pencil and paper. Draw five boxes. Write `0`, `1`, `1`, `0` in the first four and leave the last one empty. Start in state A at the first box, and follow the table one box at a time. You should end with `1001`, with the head on the empty box.

## Recap

- In 1936, Alan Turing described an imaginary machine that reads and writes symbols on a tape, one square at a time, following a table of rules.
- His **universal machine** can read the rules of any other such machine from its tape and do the same work. Hodges sees this as the principle behind the stored program.
- With these machines, Turing showed that no general method can decide, for every mathematical statement, whether it can be proved. Alonzo Church reached the same answer in a different way.

## Sources

- Andrew Hodges, Alan Turing Scrapbook, Turing's Universal Machine: https://www.turing.org.uk/scrapbook/machine.html
- Stanford Encyclopedia of Philosophy, Turing Machines: https://plato.stanford.edu/entries/turing-machine/
- Stanford Encyclopedia of Philosophy, Alan Turing: https://plato.stanford.edu/entries/turing/
- MacTutor (University of St Andrews), Alan Turing, Oxford Dictionary of National Biography entry by Andrew Hodges: https://mathshistory.st-andrews.ac.uk/DNB/Turing.html
- Centre for Computing History, Alan Turing invents the principle of the modern computer: https://www.computinghistory.org.uk/det/6028/Alan-Turing-invents-the-principle-of-the-modern-computer/
- Science Museum blog, 1930s, Turing's Universal Machine (2013): https://blog.sciencemuseum.org.uk/1930s-turings-universal-machine/
- Computer History Museum, Babbage Engine: The Engines: https://www.computerhistory.org/babbage/engines/
