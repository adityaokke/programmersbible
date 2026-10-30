---
id: logic-gates
title: "Logic Gates: AND, OR, NOT"
type: concept
part: machine
status: published
requires: [transistor, binary]
related: [bit, integrated-circuit, cpu]
summary: "A logic gate is a small circuit, built from switches such as transistors, that takes one or more bits in and gives one bit out by following a fixed rule such as AND, OR or NOT."
read_minutes: 6
questions:
  - what is a logic gate
  - what do AND OR and NOT mean in a computer
  - how do transistors make logic gates
  - how does a computer make decisions with 0 and 1
  - what is a truth table
aliases: [logic gate, gates, AND gate, OR gate, NOT gate, Boolean logic]
sources:
  - title: "Computer History Museum, Revolution: How Do Digital Computers \"Think\"?"
    url: https://www.computerhistory.org/revolution/digital-logic/12/269
  - title: "Georgia Tech ECE 2020: Switches and Wire"
    url: https://ece2020.ece.gatech.edu/new/topics/switchesandwire.php
  - title: "Jim Lesurf, University of St Andrews: The First Eleven, Part 11, Page 4 (transistors as switches)"
    url: https://www.st-andrews.ac.uk/~www_pa/Scots_Guide/first11/part11/page4.html
  - title: "Wikipedia: Logic gate (general background reference)"
    url: https://en.wikipedia.org/wiki/Logic_gate
  - title: "MDN Web Docs: Logical AND (&&)"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
  - title: "MDN Web Docs: Logical OR (||)"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
  - title: "MDN Web Docs: Logical NOT (!)"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
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

> **In one sentence:** A logic gate is a small circuit, built from switches such as transistors, that takes one or more bits in and gives one bit out by following a fixed rule such as AND, OR or NOT.

## Why should I care?

A [[transistor]] can work as a switch. Computers write numbers in [[binary]], with 0s and 1s. But how do switches **work with** 0s and 1s?

The answer is the **logic gate**. Computer circuits are built from these parts.

## Analogy

Think of a **lamp** joined to a battery by a wire. Put **two switches** on the wire, one after the other: this is called **in series**. Electricity can reach the lamp only if switch A **and** switch B are both closed.

Now connect the two switches **side by side**, so electricity has two paths to the lamp. This is called **in parallel**. The lamp is on if switch A **or** switch B is closed (or both).

```
In series (AND):                     In parallel (OR):

battery ──[A]──[B]── lamp            battery ──┬──[A]──┬── lamp
                                               └──[B]──┘
```

*Diagram: on the left, switches A and B sit one after the other on one path. On the right, A and B each sit on their own path, and the two paths join before the lamp. The wire back to the battery is not drawn.*

Call a closed switch 1 and an open switch 0. Call a lamp that is on 1 and a lamp that is off 0. Now the switches and the lamp follow two rules: **AND** and **OR**.

**Where the analogy breaks down:** you move a light switch with your hand. In a gate, the switches are transistors, and electricity controls them. Also, a gate's output is not a light. It is an electrical signal that can control the switches of the next gate.

## How it actually works

### Bits in, one bit out

A **logic gate** takes one or more bits as **inputs** and gives one bit as its **output**. It always follows the same fixed rule.

Inside a gate, 0 and 1 are two different voltages, as in [[electricity-basics]]: a **low** voltage for 0 and a **high** voltage for 1. Modern logic gates use transistors as switches. The input opens or closes these switches, which sets the output.

There are three basic gates: **AND**, **OR** and **NOT**.

### The three basic gates

A **truth table** lists every possible input of a gate and the output for each one.

**AND:** the output is 1 only when **both** inputs are 1.

```
A  B  |  A AND B
0  0  |  0
0  1  |  0
1  0  |  0
1  1  |  1
```

**OR:** the output is 1 when **at least one** input is 1.

```
A  B  |  A OR B
0  0  |  0
0  1  |  1
1  0  |  1
1  1  |  1
```

**NOT:** it has only one input. The output is the **opposite**: 0 becomes 1, and 1 becomes 0. A NOT gate is also called an **inverter**.

```
A  |  NOT A
0  |  1
1  |  0
```

*Diagram: the truth tables of the three basic gates. A and B are the inputs. The column on the right is the output.*

### How transistors make a gate

Here is a simple NOT gate, built with one transistor. The circuit has a **high** side, connected to a high voltage (for example 5 volts), and a **low** side, at 0 volts. The transistor sits between the output and the low side. The output is also connected to the high side, through another part called a **resistor**.

```
   high ──[resistor]──┬── output
                      │
                [transistor]  <── input
                      │
   low ───────────────┘
```

*Diagram: a NOT gate. The input controls a transistor switch. When the switch is closed, it connects the output to "low".*

- When the input is **low** (0), the transistor switch is **open**. The output stays connected to the high side. The output is 1.
- When the input is **high** (1), the switch is **closed**. It connects the output almost directly to the low side. The output is 0. (Why the low side "wins" depends on the resistor. How a resistor works is outside this page.)

AND and OR gates are also built from transistors used as switches. Their circuits are outside this page. This one-transistor NOT gate is only one design. Another, called CMOS, uses two kinds of transistors.

### From gates to computers

The output of one gate can be wired to the inputs of other gates, making long chains. Together, AND, OR and NOT can carry out every logic rule. In other words, any fixed rule that turns 0s and 1s into 0s and 1s can be built from these three gates.

You can combine them. For example, put a NOT after an AND, and you get a gate called **NAND** ("NOT AND"). NAND gates alone can form any computer circuit. How connected gates add numbers comes later, in [[cpu]].

## How it came to be

In his 1847 work, *The Mathematical Analysis of Logic*, the self-taught mathematician **George Boole** laid out the starting point of a logic system now called **Boolean logic**. AND, OR and NOT are operations of Boolean logic. For decades, his ideas had no clear practical use.

In the 1930s, **Claude Shannon** learned about Boole's ideas in a college philosophy class. His **1937** MIT master's thesis, *A Symbolic Analysis of Relay and Switching Circuits*, used Boolean logic to design circuits built from **relays**. A relay is a switch that many calculators and computers of the 1930s and 1940s used. In the late 1950s, transistors took the place of the vacuum tubes used in earlier computers such as [[eniac]].

## 🧪 Try it in your browser

The browser **console**, which you met in [[binary]], understands AND, OR and NOT too. You need a computer with a keyboard.

**Safety rule:** only type instructions in the console that you understand or that come from a source you trust. Never paste anything a stranger sends you. The instructions below are safe: they only work with true and false.

1. In Chrome, Edge or Firefox, open any ordinary web page, for example `https://example.com`.
2. Open the console:
   - **Windows:** press `Ctrl` + `Shift` + `J` (in Firefox: `Ctrl` + `Shift` + `K`)
   - **Mac:** press `Cmd` + `Option` + `J` (in Firefox: `Cmd` + `Option` + `K`)
3. Click the empty line at the bottom. **Type** this line yourself (some browsers block pasting in the console), then press `Enter`:

   ```
   true && false
   ```

   In the console, `&&` means AND. The places of the `&` and `|` keys differ between keyboards. On some keyboards you need `Shift` or `AltGr`. Think of `true` as 1 and `false` as 0. You should see `false`: like the AND table, 1 AND 0 gives 0.
4. Type `true && true` and press `Enter`. You should see `true`.
5. Type `true || false` and press `Enter`. The `|` symbol is called a vertical bar: type it twice. `||` means OR. You should see `true`.
6. Type `!true` and press `Enter`. `!` means NOT. You should see `false`.
7. Try other rows of the truth tables. For example, `false || false` should give `false`, and `!false` should give `true`.
8. Then close the tab.

**On a phone:** cover the output column of each truth table above with your finger. Work out each output yourself, then check.

## Common misunderstandings

- **"A logic gate thinks."** No. A gate always follows the same fixed rule. A computer's power comes from many gates connected together.
- **"OR means one or the other, but not both."** In a computer, OR gives 1 when **both** inputs are 1, too. (A different gate, called XOR, gives 1 only when exactly one input is 1.)

## Recap

- A logic gate takes one or more bits in and gives one bit out, following a fixed rule.
- AND gives 1 only if both inputs are 1. OR gives 1 if at least one input is 1. NOT gives the opposite.
- Gates are built from transistors used as switches, and connected gates make up a computer's circuits.

## Sources

- Computer History Museum, How Do Digital Computers "Think"?: https://www.computerhistory.org/revolution/digital-logic/12/269
- Georgia Tech ECE 2020, Switches and Wire: https://ece2020.ece.gatech.edu/new/topics/switchesandwire.php
- Jim Lesurf, University of St Andrews, The First Eleven, Part 11, Page 4: https://www.st-andrews.ac.uk/~www_pa/Scots_Guide/first11/part11/page4.html
- Wikipedia, Logic gate (general background reference): https://en.wikipedia.org/wiki/Logic_gate
- MDN Web Docs, Logical AND (&&): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
- MDN Web Docs, Logical OR (||): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
- MDN Web Docs, Logical NOT (!): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
- Chrome for Developers, Open Chrome DevTools: https://developer.chrome.com/docs/devtools/open
- Microsoft Edge DevTools, Keyboard shortcuts: https://learn.microsoft.com/en-us/microsoft-edge/devtools/shortcuts/
- Firefox DevTools User Docs, Web Console: https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html
- Chrome for Developers, Self-XSS protection: https://developer.chrome.com/blog/self-xss
