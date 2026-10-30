---
id: integrated-circuit
title: "The Integrated Circuit"
type: event
part: machine
status: published
requires: [logic-gates]
led_to: [microprocessor]
year: 1958
summary: "On September 12, 1958, Jack Kilby of Texas Instruments showed the first working integrated circuit: several electronic parts made together on one small piece of semiconductor. Soon after, Robert Noyce of Fairchild Semiconductor designed a more practical one, made of silicon."
read_minutes: 7
questions:
  - what is an integrated circuit
  - what is a computer chip
  - who invented the integrated circuit
  - when was the microchip invented
  - what was the tyranny of numbers
  - what is moore's law
aliases: [IC, chip, microchip, computer chip, solid circuit, Jack Kilby, Robert Noyce, Moore's law, tyranny of numbers]
sources:
  - title: "Computer History Museum, The Silicon Engine: 1958 – All Semiconductor \"Solid Circuit\" is Demonstrated"
    url: https://www.computerhistory.org/siliconengine/all-semiconductor-solid-circuit-is-demonstrated/
  - title: "Computer History Museum, The Silicon Engine: 1959 – Practical Monolithic Integrated Circuit Concept Patented"
    url: https://www.computerhistory.org/siliconengine/practical-monolithic-integrated-circuit-concept-patented/
  - title: "Computer History Museum, The Silicon Engine: 1965 – \"Moore's Law\" Predicts the Future of Integrated Circuits"
    url: https://www.computerhistory.org/siliconengine/moores-law-predicts-the-future-of-integrated-circuits/
  - title: "Computer History Museum, Revolution: Jack Kilby's Notebook (replica)"
    url: https://www.computerhistory.org/revolution/artifact/276/1418
  - title: "Engineering and Technology History Wiki: Milestones: First Semiconductor Integrated Circuit (IC), 1958"
    url: https://ethw.org/Milestones:First_Semiconductor_Integrated_Circuit_%28IC%29%2C_1958
  - title: "Wikipedia: Integrated circuit (general background reference)"
    url: https://en.wikipedia.org/wiki/Integrated_circuit
  - title: "Apple Newsroom: Apple introduces M4 chip (May 2024)"
    url: https://www.apple.com/newsroom/2024/05/apple-introduces-m4-chip/
author: ai
reviewed_by: ai
reviewed_at: 2026-10-31
updated: 2026-10-31
---

> **In one sentence:** On September 12, 1958, Jack Kilby of Texas Instruments showed the first working integrated circuit: several electronic parts made together on one small piece of semiconductor. Soon after, Robert Noyce of Fairchild Semiconductor designed a more practical one, made of silicon.

## The world before

You have seen that a [[transistor]] can work as a switch, and that switches can be connected to make [[logic-gates|logic gates]]. A computer needs a very large number of these gates, and so a very large number of transistors.

In the 1950s, each transistor was a separate part. Engineers call such single parts **discrete components**. A circuit also needed other discrete components, such as **resistors** and **capacitors**. (These are basic electronic parts. How they work is outside this page.)

To build a circuit, people connected all these parts with wires. The wires were **soldered** by hand: joined with drops of melted metal. A large system could contain hundreds or thousands of discrete components. Soldering thousands of parts to thousands of pieces of wire was expensive and slow. It was also unreliable: every soldered joint could fail.

This problem was known as the **"tyranny of numbers"**. More powerful machines needed more parts. But more parts meant more wires, more joints and more ways to break.

As early as 1952, G. W. A. Dummer, of a research center in England called the Telecommunications Research Establishment, proposed electronic equipment "in a solid block with no connecting wires". In the 1950s, several projects tried to put many parts together. None of them solved the problem for general use.

## What happened

### Kilby's "solid circuit" (1958)

**Jack Kilby** worked at **Texas Instruments** (TI), an American electronics company. Kilby wanted to make all the parts of a circuit from **semiconductor material**, on one piece.

On **September 12, 1958**, he showed his first working circuit to managers at TI. It was built on a tiny bar of **germanium**, about 11 mm by 1.6 mm (7/16 by 1/16 of an inch). From germanium he formed transistor, capacitor and resistor parts. Together they made an **oscillator** circuit. (What an oscillator does is outside this page.) One week later, he showed an **amplifier**, a circuit that makes a signal stronger.

Kilby's circuit was not perfect. The parts were made together, but they were still connected by very thin gold wires, called "flying wires". These wires were not a practical way to make chips in large numbers.

TI announced Kilby's "solid circuit" idea in **March 1959**. Its first product of this kind went on sale in **March 1960**, for $450 each.

### Noyce's silicon chip (1959)

Another company, **Fairchild Semiconductor**, had a method invented by **Jean Hoerni**, called the **planar process**. (How this method works is outside this page.) **Robert Noyce**, one of the people who started Fairchild, was asked to find other uses for it.

Noyce's answer: use it to make all the parts of a circuit on one **silicon** chip. Then connect the parts with thin lines of **aluminum** metal. These lines were laid down on top of a protective layer on the chip, as part of making it. There were no "flying wires" to attach. He filed a patent for it in **July 1959**. A team of Fairchild engineers made the first working chips of this design in **May 1960**.

According to the Computer History Museum, Kilby built the first working circuit with all its parts made from semiconductor material. Noyce's metal connections on top made the whole chip one single structure. Today both men are celebrated as co-inventors of the integrated circuit. Hoerni's planar method is still the basic way chips are made today.

Kilby received the **Nobel Prize in Physics** in **2000** for his part in the invention. Noyce had died in 1990, so he did not share it. Many people think he would have shared it if he had lived.

### The name

Today this invention is called an **integrated circuit**, or **IC**. It is also called a **chip** or **microchip**. An integrated circuit is a set of electronic circuits on one thin, flat piece of semiconductor, most often silicon. It contains parts such as transistors, resistors and capacitors, and the connections between them.

## Why it mattered

Think of a **small model of a town**. One way to build it is to make each little house and each path separately, then glue them all onto a board, one by one. Another way is to **carve the whole town from one block**, houses and paths together. The second way has no glue joints that can come loose.

An integrated circuit is like the carved town. The parts (the houses) and the connections (the paths) are made together, in one piece, instead of being soldered together one by one.

*(Where the comparison breaks down: chips are not carved by hand. They are made by a different process, which this page does not explain. Also, Kilby's very first chip still used separate wires; Noyce's design removed them.)*

Compared to circuits built from discrete components, integrated circuits are much smaller, faster and cheaper, and they use less energy. Their high reliability also helped them replace discrete circuits.

The number of parts on one chip also grew quickly. In **1965**, **Gordon Moore**, Fairchild Semiconductor's Director of Research and Development, wrote an article in the magazine *Electronics*. He noticed that the number of components on a chip was doubling about **every year**. He predicted about 65,000 components on one chip by 1975. In 1975, he changed his estimate to a doubling **every two years**. This prediction became known as **Moore's law**.

Today, one chip can hold billions of transistors. For example, Apple's M4 chip, announced in 2024, contains **28 billion** transistors. Billions of transistors means room for a very large number of logic gates on one chip. The next step in this story is the [[microprocessor]].

## 🔍 See it for yourself

1. Open the **Computer History Museum** page about [Kilby's notebook](https://www.computerhistory.org/revolution/artifact/276/1418). It shows a copy of page 20 of his notebook, signed "JS Kilby" and dated September 12, 1958. On this page he recorded that his first solid circuit worked.
2. Open the museum's page about [Kilby's 1958 circuit](https://www.computerhistory.org/siliconengine/all-semiconductor-solid-circuit-is-demonstrated/). Look for the photo of Kilby's original germanium oscillator. Notice how small it is. The page also describes the thin gold "flying wires" that joined its parts.
3. Then open the page about [Noyce's design](https://www.computerhistory.org/siliconengine/practical-monolithic-integrated-circuit-concept-patented/). Look for the figure from Noyce's basic patent for the integrated circuit.

Both inventions had the same goal: a whole circuit on one small piece of material, with fewer hand-made connections.

## Recap

- Before the integrated circuit, every transistor was a separate part, and thousands of parts had to be wired by hand. This was called the "tyranny of numbers".
- On September 12, 1958, Jack Kilby at Texas Instruments showed the first working integrated circuit, made on germanium. In 1959, Robert Noyce at Fairchild filed a patent for a silicon chip with metal connections on top.
- Integrated circuits, also called chips, made electronics smaller, faster and cheaper. Today one chip can hold billions of transistors.

## Sources

- Computer History Museum, 1958: All Semiconductor "Solid Circuit" is Demonstrated: https://www.computerhistory.org/siliconengine/all-semiconductor-solid-circuit-is-demonstrated/
- Computer History Museum, 1959: Practical Monolithic Integrated Circuit Concept Patented: https://www.computerhistory.org/siliconengine/practical-monolithic-integrated-circuit-concept-patented/
- Computer History Museum, 1965: "Moore's Law" Predicts the Future of Integrated Circuits: https://www.computerhistory.org/siliconengine/moores-law-predicts-the-future-of-integrated-circuits/
- Computer History Museum, Jack Kilby's Notebook (replica): https://www.computerhistory.org/revolution/artifact/276/1418
- Engineering and Technology History Wiki, Milestones: First Semiconductor Integrated Circuit (IC), 1958: https://ethw.org/Milestones:First_Semiconductor_Integrated_Circuit_%28IC%29%2C_1958
- Wikipedia, Integrated circuit (general background reference): https://en.wikipedia.org/wiki/Integrated_circuit
- Apple Newsroom, Apple introduces M4 chip (May 2024): https://www.apple.com/newsroom/2024/05/apple-introduces-m4-chip/
