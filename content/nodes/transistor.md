---
id: transistor
title: "The Transistor: an Electric Switch"
type: event
part: machine
status: review
requires: [eniac, bit]
led_to: [integrated-circuit]
year: 1947
summary: "In December 1947, scientists at Bell Labs made the first transistor: a tiny solid part that controls electricity, and that later replaced the large, hot vacuum tubes in computers."
read_minutes: 6
questions:
  - what is a transistor
  - who invented the transistor
  - when was the transistor invented
  - why is the transistor important for computers
  - how many transistors are in a computer chip
aliases: [transistors, point-contact transistor]
sources:
  - title: "Computer History Museum, The Silicon Engine: 1947 – Invention of the Point-Contact Transistor"
    url: https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/
  - title: "American Physical Society, This Month in Physics History: November 17 – December 23, 1947: Invention of the First Transistor"
    url: https://www.aps.org/apsnews/2000/11/this-month-in-physics-history
  - title: "American Institute of Physics, Oral history interview with Stanley Morgan"
    url: https://www.aip.org/history-programs/niels-bohr-library/oral-histories/4785
  - title: "Engineering and Technology History Wiki: Bell Demonstrates Transistor"
    url: https://ethw.org/Bell_Demonstrates_Transistor
  - title: "W. Buchholz, \"The word 'byte' comes of age...\", BYTE, February 1977 (on IBM Stretch as a transistorized computer)"
    url: https://archive.computerhistory.org/resources/access/text/2016/12/102762489-05-01-acc.pdf
  - title: "Apple Newsroom: Apple introduces M4 chip (May 2024)"
    url: https://www.apple.com/newsroom/2024/05/apple-introduces-m4-chip/
author: ai
updated: 2026-10-30
---

> **In one sentence:** In December 1947, scientists at Bell Labs made the first transistor: a tiny solid part that controls electricity, and that later replaced the large, hot vacuum tubes in computers.

## The world before

In the 1940s, the first electronic computers, like [[eniac]], were built from **vacuum tubes**. A vacuum tube is a glass tube, often about the size of a small light bulb, that can control a flow of electricity. Computers used tubes as **switches**: a tube could be on or off, and that on or off is exactly what a [[bit]] needs.

But vacuum tubes had serious problems. They used a lot of power, they produced a lot of heat, and they took up a lot of space. Like light bulbs, they also burned out and had to be replaced. A computer made of thousands of tubes was huge and hot, and its tubes failed often.

Computers were not the only users of tubes. The American telephone network also used vacuum tubes, and mechanical switches with moving metal parts, to connect calls. The telephone company had its own research center, called **Bell Labs**. Bell Labs wanted to replace the tubes and the mechanical switches with something smaller and more reliable.

## What happened

At Bell Labs, a group of scientists studied **semiconductors**. To understand them, think about two kinds of material:

- A **conductor**, like copper, lets electricity flow through it easily.
- An **insulator**, like rubber, stops electricity.

A **semiconductor** is in between. The useful thing is that you can **control** how much electricity it lets through.

The group was led by **William Shockley** and the chemist Stanley Morgan. Two members of the group, **John Bardeen** and **Walter Brattain**, did the key experiments. Their most intense period of work was from November 17 to December 23, 1947. Because they discovered so much in so few weeks, people later called it the "Miracle Month".

They used a small, flat piece of very pure **germanium**, a type of semiconductor. They pressed two very thin gold contacts onto it, very close together, held in place by a small plastic wedge. On **December 16, 1947**, their experiment worked. A weak electrical **signal** (a small, changing flow of electricity, like the electricity that carries your voice in a telephone line) went into the device. It came out **stronger**. This was the first working transistor. Because it touched the germanium at tiny points, it is called a **point-contact transistor**.

Bell Labs kept it secret for about six months. On **June 30, 1948**, it announced the transistor to the public at a press conference in New York.

In **1956**, Bardeen, Brattain and Shockley received the **Nobel Prize in Physics** for this work.

## Why it mattered

Why does "making a signal stronger" matter for computers? Think of a **water tap**. A small movement of your hand controls a large flow of water. You can open the tap a little or a lot. Or you can turn it fully **open** or fully **closed**.

A transistor works the same way, with electricity: a **small** electrical signal controls a **larger** flow of electricity. That gives it two uses:

- **Amplifying:** a weak signal controls a strong flow, so the signal comes out stronger.
- **Switching:** the small signal turns the large flow fully on or fully off. On or off is a bit.

Computers use transistors as switches. Many switches working together can hold bits and do calculations with them. You will see how in later lessons.

*(Where the tap comparison breaks down: a tap has moving parts. A transistor has none. Electricity controls electricity directly, inside the solid material.)*

Compared to a vacuum tube, a transistor has big advantages:

- It is **much smaller**.
- It uses **much less power** and makes **much less heat**.
- It has **no glass, no vacuum and no hot wire inside** that can burn out.

The first transistors were delicate and hard to make reliably. But engineers improved them, and many thousands were made. In the 1950s, computer makers began to build computers with transistors instead of tubes. IBM's Stretch, for example, was a transistor computer designed in the mid-1950s.

Later, engineers found a way to put many transistors, and the wires between them, on one small piece of material. That invention is the [[integrated-circuit]], also called a **chip**. It is the next step in this story.

Today, transistors are so small that a single chip can hold billions of them. For example, Apple's M4 chip, announced in 2024, contains **28 billion** transistors. They are a much more advanced design than the first one. But each one is still a tiny switch, a distant descendant of the device from December 1947.

## 🔍 See it for yourself

- The **Computer History Museum** has a page about the first transistor, with photos and a short history: https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/ Find the photo labelled "Bardeen and Brattain's first point-contact transistor": a small plastic wedge with gold contacts, resting on a piece of germanium.
- The **American Physical Society** tells the story of the "Miracle Month" day by day. It is a longer article: read the parts about Bardeen and Brattain's experiments: https://www.aps.org/apsnews/2000/11/this-month-in-physics-history

Then look at the device you are reading this on. Somewhere inside it is a chip with millions or billions of transistors.

## Recap

- The first electronic computers used vacuum tubes as switches. Tubes were big, hot, used a lot of power and failed often.
- On December 16, 1947, Bardeen and Brattain at Bell Labs made the first transistor from germanium.
- A transistor uses a small signal to control a larger flow of electricity, so it can work as a switch. Modern chips contain billions of them.

## Sources

- Computer History Museum, The Silicon Engine, 1947: Invention of the Point-Contact Transistor: https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/
- American Physical Society, This Month in Physics History, November 17 – December 23, 1947: https://www.aps.org/apsnews/2000/11/this-month-in-physics-history
- American Institute of Physics, Oral history interview with Stanley Morgan: https://www.aip.org/history-programs/niels-bohr-library/oral-histories/4785
- Engineering and Technology History Wiki, Bell Demonstrates Transistor: https://ethw.org/Bell_Demonstrates_Transistor
- W. Buchholz, "The word 'byte' comes of age...", BYTE, February 1977: https://archive.computerhistory.org/resources/access/text/2016/12/102762489-05-01-acc.pdf
- Apple Newsroom, Apple introduces M4 chip (May 2024): https://www.apple.com/newsroom/2024/05/apple-introduces-m4-chip/
