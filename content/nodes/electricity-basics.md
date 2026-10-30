---
id: electricity-basics
title: "Electricity Basics: Current, Voltage, On and Off"
type: concept
part: machine
status: published
requires: []
related: [transistor, logic-gates, bit]
summary: "Electricity is a flow of electric charge, carried in a wire by tiny particles called electrons: voltage is the push, current is how much flows, and a computer chip uses high and low voltages as its 1s and 0s."
read_minutes: 7
questions:
  - what is electricity
  - what is the difference between voltage and current
  - what is a volt and what is an amp
  - what is a circuit
  - how does a switch turn electricity on and off
  - how does a computer use electricity to store 0 and 1
aliases: [electricity, current, voltage, electric current, volt, ampere, amp, circuit]
sources:
  - title: "SparkFun Learn: What is Electricity?"
    url: https://learn.sparkfun.com/tutorials/what-is-electricity/all
  - title: "SparkFun Learn: Voltage, Current, Resistance, and Ohm's Law"
    url: https://learn.sparkfun.com/tutorials/voltage-current-resistance-and-ohms-law/all
  - title: "SparkFun Learn: What is a Circuit?"
    url: https://learn.sparkfun.com/tutorials/what-is-a-circuit/all
  - title: "SparkFun Learn: Logic Levels"
    url: https://learn.sparkfun.com/tutorials/logic-levels/all
  - title: "SparkFun Learn: What is a Battery?"
    url: https://learn.sparkfun.com/tutorials/what-is-a-battery/all
  - title: "Wikipedia: Electric current (general background reference)"
    url: https://en.wikipedia.org/wiki/Electric_current
  - title: "Wikipedia: Switch"
    url: https://en.wikipedia.org/wiki/Switch
  - title: "SparkFun Learn: Transistors"
    url: https://learn.sparkfun.com/tutorials/transistors/all
  - title: "Engineering and Technology History Wiki: Milestones: Volta's Electrical Battery Invention, 1799"
    url: https://ethw.org/Milestones:Volta%27s_Electrical_Battery_Invention,_1799
  - title: "Apple Newsroom: Apple introduces M4 chip (May 2024)"
    url: https://www.apple.com/newsroom/2024/05/apple-introduces-m4-chip/
  - title: "PhET Interactive Simulations, University of Colorado: Circuit Construction Kit: DC"
    url: https://phet.colorado.edu/en/simulations/circuit-construction-kit-dc
  - title: "PhET: About PhET"
    url: https://phet.colorado.edu/en/about
  - title: "PhET Help Center: Running sims (system requirements)"
    url: https://phet.colorado.edu/en/help-center/running-sims
author: ai
reviewed_by: ai
reviewed_at: 2026-10-31
updated: 2026-10-31
---

> **In one sentence:** Electricity is a flow of electric charge, carried in a wire by tiny particles called electrons: voltage is the push, current is how much flows, and a computer chip uses high and low voltages as its 1s and 0s.

## Why should I care?

The device you are reading this on runs on electricity. A computer works with information written as 0s and 1s. Inside its chips, each 0 or 1 is an electrical signal.

You may also have seen "1.5 V" printed on a battery. V stands for **volts**. This page explains what volts measure, what **amps** measure, and how "on" and "off" become 0s and 1s.

## Analogy

Think of water in a loop of pipes, with a **pump** and a **tap**.

- The pump pushes the water. How hard it pushes is like **voltage**.
- The amount of water flowing past one point each second is like **current**.
- The tap can stop the flow or let it run. It is like a **switch**.

**Where the analogy breaks down:**

- If you cut a water pipe, water pours out. If you cut a wire, electricity does not pour out into the air. It stops moving.
- The words "open" and "closed" work the other way round. An **open** tap lets water flow. An **open** switch stops the flow. A **closed** switch lets it flow.
- Each electron in a wire moves very slowly. But the wire is already full of electrons that can move, so the push reaches the whole loop almost instantly.

## How it actually works

### Electrons and charge

Matter (the stuff that things are made of) is built from **atoms**: tiny basic building blocks. An atom is built from three kinds of **particles** (very small pieces): **electrons**, protons and neutrons. Electrons carry a **negative electric charge**. (Charge is something some particles have. It comes in two types: positive and negative.)

**Electricity** is the flow of electric charge. In a metal wire, the charge is carried by electrons that move from atom to atom.

Some materials let electrons move easily. They are called **conductors**. Metals like copper, silver and gold are good conductors. Other materials stop the flow. They are called **insulators**: glass, rubber, plastic and air are common ones.

### Current: how much flows

**Current** is how fast charge flows: how much charge passes one point in the wire each second. It is measured in **amperes**, usually called **amps** (A).

### Voltage: the push

**Voltage** is the electric "pressure" between two points, for example between the two ends of a battery. It is what pushes charge around the loop. It is measured in **volts** (V). For example, an alkaline AA battery is listed as **1.5 V**.

### A circuit is a closed loop

Electricity only flows if it has a complete path that starts and ends at the same place. This loop is called a **circuit**. If the loop is broken anywhere, no current flows. A broken loop is called an **open circuit**.

A **switch** is a part that connects or disconnects the path in a circuit. When the switch is **closed**, its metal **contacts** (the parts that meet) touch and current can flow. When it is **open**, a gap of air separates the contacts. Air is an insulator, so no current flows.

```
   Switch CLOSED: current flows          Switch OPEN: no current

   +----[battery]----+                   +----[battery]----+
   |                 |                   |                 |
   |                 |                   |                 |
 [bulb] ON        ---+                 [bulb] OFF       / gap
   |                 |                   |                 |
   +-----------------+                   +-----------------+
```

*Diagram: two copies of the same circuit: a battery, a light bulb and a switch joined by wires in one loop. On the left the switch is closed, the loop is complete and the bulb is on. On the right the switch is open, there is a gap in the loop and the bulb is off.*

### On and off become 0 and 1

A computer uses the same idea: a voltage can be **high** or **low**, like a switch that is on or off.

A computer **chip** is a tiny part that holds many electronic parts. Inside a chip, a **1** is shown by a high voltage and a **0** by a low voltage. A single 0 or 1 is called a [[bit]]. Any voltage in a "high" range counts as 1, and any voltage in a "low" range counts as 0. For example, one kind of chip that works at 5 V reads any voltage up to 0.8 V as 0, and any voltage from 2 V up as 1. Voltages in between have no agreed meaning: they count as neither 0 nor 1.

The switches inside a chip are not moved by a finger. They are tiny electronic parts called **transistors**. A voltage on one of a transistor's pins (its connection points) turns it on or off. You will meet them in [[transistor]]. Thousands, millions or even billions of transistors are joined together on one chip. For example, Apple's M4 chip, announced in 2024, has 28 billion transistors.

## How it came to be

In 1799 (some sources say 1800), the Italian physicist **Alessandro Volta** developed the first electrical battery. It was the first source of a steady electric current that could be repeated. The unit of voltage, the **volt**, is named after him.

The unit of current, the **ampere**, is named after **André-Marie Ampère**.

## 🧪 Try it in your browser

You will build a circuit in a free simulation from PhET, a University of Colorado project. It cannot affect your computer.

1. Open [the Circuit Construction Kit: DC simulation](https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html). PhET officially supports Chrome, Edge and Firefox on Windows, and Chrome and Safari on a Mac.
2. Choose the **Intro** screen.
3. From the box of parts at the side, drag out a **battery**, a **light bulb** and a **switch**. Drag out **wires** too.
4. Join the parts into one loop: drag the end of one part onto the end of another until they connect. Battery to wire, wire to bulb, bulb to wire, wire to switch, switch to wire, wire back to the battery.
5. Click the switch. If it does not close, click the **Close Switch** button that appears. You should see the bulb light up, and small dots moving through the wires. The dots are a drawing of electrons flowing around the loop.
6. Click the switch again (or the **Open Switch** button). The bulb goes dark and the dots stop. You opened the circuit: there is a gap, so no current flows.

**On a phone:** PhET does not list phones as supported. Instead, look at a wall light switch: switching it on closes a circuit, and off opens it.

## Common misunderstandings

- **"Electrons move through the wire as fast as light."** No. Each electron moves very little: after one second of current, only a fraction of a centimetre. But the push spreads through the whole circuit almost instantly, so the light comes on at once.
- **"An open switch lets electricity through."** No. "Open" means there is a gap. An open switch stops the current, and a closed switch lets it flow.

## Recap

- Electricity is a flow of charge, carried by electrons in a wire. Voltage (volts) is the push. Current (amps) is how much flows.
- Current only flows around a closed loop called a circuit. A switch opens or closes the loop.
- A computer shows 1 as a high voltage and 0 as a low voltage, using many tiny switches (billions, in modern chips).

## Sources

- SparkFun Learn, What is Electricity?: https://learn.sparkfun.com/tutorials/what-is-electricity/all
- SparkFun Learn, Voltage, Current, Resistance, and Ohm's Law: https://learn.sparkfun.com/tutorials/voltage-current-resistance-and-ohms-law/all
- SparkFun Learn, What is a Circuit?: https://learn.sparkfun.com/tutorials/what-is-a-circuit/all
- SparkFun Learn, Logic Levels: https://learn.sparkfun.com/tutorials/logic-levels/all
- SparkFun Learn, What is a Battery?: https://learn.sparkfun.com/tutorials/what-is-a-battery/all
- Wikipedia, Electric current (general background reference): https://en.wikipedia.org/wiki/Electric_current
- Wikipedia, Switch: https://en.wikipedia.org/wiki/Switch
- SparkFun Learn, Transistors: https://learn.sparkfun.com/tutorials/transistors/all
- Engineering and Technology History Wiki, Milestones: Volta's Electrical Battery Invention, 1799: https://ethw.org/Milestones:Volta%27s_Electrical_Battery_Invention,_1799
- Apple Newsroom, Apple introduces M4 chip (May 2024): https://www.apple.com/newsroom/2024/05/apple-introduces-m4-chip/
- PhET Interactive Simulations, Circuit Construction Kit: DC: https://phet.colorado.edu/en/simulations/circuit-construction-kit-dc
- PhET, About PhET: https://phet.colorado.edu/en/about
- PhET Help Center, Running sims: https://phet.colorado.edu/en/help-center/running-sims
