---
id: eniac
title: "ENIAC and Vacuum Tubes"
type: event
part: machine
status: published
requires: [turing-universal-machine, electricity-basics]
led_to: [transistor]
year: 1945
era_label: "1943–1946"
summary: "ENIAC, built in the United States between 1943 and 1945 and shown to the public in February 1946, was a room-sized computer that used about 18,000 vacuum tubes as electronic switches to calculate at electronic speed."
read_minutes: 6
questions:
  - what was eniac
  - what is a vacuum tube
  - who built eniac
  - who programmed eniac
  - how big was eniac
  - why did early computers use vacuum tubes
aliases: [ENIAC, Electronic Numerical Integrator and Computer, vacuum tube, vacuum tubes, ENIAC programmers, ENIAC women]
images:
  - file: eniac-room.jpg
    alt: "ENIAC: tall panels covered in plugged-in cables, and two people at work."
    source: https://commons.wikimedia.org/wiki/File:Glen_Beck_and_Betty_Snyder_program_the_ENIAC_in_building_328_at_the_Ballistic_Research_Laboratory.jpg
    author: Unknown author
    license: Public domain
    labels:
      - { x: 25, y: 33, text: Panels }
      - { x: 15, y: 62, text: Cables }
  - file: changing-a-tube-cropped.jpg
    alt: "A man kneels in front of ENIAC holding a tube, with rows of vacuum tubes behind him."
    source: https://commons.wikimedia.org/wiki/File:ENIAC-changing_a_tube_(cropped).jpg
    author: M. Weik
    license: Public domain
    labels:
      - { x: 28.6, y: 62, text: A tube, side: left }
      - { x: 87, y: 33, text: Tubes, side: right }
sources:
  - title: "Computer History Museum, Revolution: ENIAC"
    url: https://www.computerhistory.org/revolution/birth-of-the-computer/4/78
  - title: "Computer History Museum, Timeline of Computer History: 1946"
    url: https://www.computerhistory.org/timeline/1946/
  - title: "Computer History Museum, Revolution: Digital Logic (relays and vacuum tubes)"
    url: https://www.computerhistory.org/revolution/digital-computers/12/271
  - title: "Computer History Museum, Revolution: Breaking the Code (Colossus)"
    url: https://www.computerhistory.org/revolution/birth-of-the-computer/4/82
  - title: "Computer History Museum blog: Hidden Figures No Longer (Caroline Evans, 2017)"
    url: https://computerhistory.org/blog/hidden-figures-no-longer/
  - title: "Penn Engineering: Celebrating Penn Engineering History: ENIAC"
    url: https://www.engineering.upenn.edu/about/history-heritage/eniac/
  - title: "National Museum of the United States Army: Army Innovations, ENIAC Computer"
    url: https://www.thenmusa.org/armyinnovations/innovationeniaccomputer/
  - title: "Wikipedia: Vacuum tube"
    url: https://en.wikipedia.org/wiki/Vacuum_tube
author: ai
reviewed_by: ai
reviewed_at: 2026-10-31
updated: 2026-10-31
---

> **In one sentence:** ENIAC, built in the United States between 1943 and 1945 and shown to the public in February 1946, was a room-sized computer that used about 18,000 vacuum tubes as electronic switches to calculate at electronic speed.

## The world before

Earlier lessons showed early ideas for machines that follow instructions, such as Turing's [[turing-universal-machine|universal machine]]. Some earlier calculating machines used **relays**. For example, in 1937 George Stibitz used relays to build a demonstration adder (a machine that adds numbers). A relay is a switch that a magnet opens and closes. It has moving metal parts, so it clicks, and it is slow compared with the electronic switches in this lesson.

Then came the Second World War. The United States Army needed **firing tables**. The National Museum of the United States Army describes them as "charts that helped Soldiers determine the best aim for their weapons". A table had to take into account things like wind speed and temperature, so each one needed many calculations.

Those calculations were done by **human computers**: people whose job was to calculate. A team of women did this work at the University of Pennsylvania. According to Penn Engineering, one ballistics calculation (working out the path of a bomb or missile) took 12 hours with a hand calculator. The Army needed more tables than its people could calculate.

## What happened

In 1942, a physicist (a scientist who studies physics) named **John Mauchly** proposed an "all-electronic calculating machine". The work took place at the Moore School of Electrical Engineering, part of the University of Pennsylvania (Penn). **J. Presper Eckert**, a Penn graduate, was the engineer of the project. The U.S. Army agreed to pay for the project.

The machine was called **ENIAC**: the Electronic Numerical Integrator and Computer. It was built between 1943 and 1945.

### The vacuum tube: a switch with no moving parts

For most of its switching, ENIAC used **vacuum tubes** instead of relays. (It still had about 1,500 relays, according to the National Museum of the United States Army.) A vacuum tube is a sealed glass tube with the air removed. (A space with no air is called a vacuum.) Inside are a few metal parts:

1. A metal part is heated until it is hot. (In the simplest tubes, this part is a thin wire.) The hot metal gives off **electrons** (the tiny charged particles from [[electricity-basics]]) into the empty space around it.
2. A metal **plate**, at a higher voltage, pulls those electrons towards it. So a current flows through the empty space, from the hot part to the plate. In an ordinary switch, a gap stops the current. Here, the heat lets electrons leave the metal and cross the gap.
3. Between the hot part and the plate sits a metal **grid**. A voltage on the grid controls the current. One voltage lets a lot of current through. A different voltage reduces it, or stops it completely.

So a small voltage on the grid can turn a larger current **on** or **off**. That makes the tube a **switch**. Early electronic computers used tubes in this way, as switches. In this lesson, **electronic** means that the switching is done by controlling a flow of electrons, with no moving parts. No part inside a tube moves, so it switches much faster than a relay. (This is a simplified picture of how a tube works. You will see how many switches together can calculate in [[logic-gates]].)

### A machine the size of a room

ENIAC was huge. According to Penn Engineering:

- it filled a room 30 by 50 feet (about 9 by 15 metres),
- it weighed 30 tons,
- it had 40 large units called **panels**,
- it used about **18,000** vacuum tubes,
- it had its own power lines and used 150 kilowatts of electricity. (A kilowatt is a unit that measures how much electrical power something uses.)

![ENIAC: tall panels covered in plugged-in cables, and two people at work.](images/eniac-room.jpg)

The tubes were its biggest problem. According to the Computer History Museum, one tube failed roughly every day or two. Finding the broken tube among 18,000 was hard. To make tubes last longer, the engineers ran them at lower voltages than the tubes could take.

![A man kneels in front of ENIAC holding a tube, with rows of vacuum tubes behind him.](images/changing-a-tube-cropped.jpg)

### The first programmers

To give ENIAC a new job, people **plugged in cables and set switches** by hand. The Computer History Museum says designing the setup for each new problem and wiring it "took many days".

This work was done by six women who had been human computers. Penn Engineering names them: Kathleen McNulty Mauchly Antonelli, Jean Jennings Bartik, Frances (Betty) Snyder Holberton, Marlyn Wescoff Meltzer, Frances Bilas Spence, and Ruth Lichterman Teitelbaum. Penn calls them "among the very first programmers anywhere".

ENIAC was **classified** (kept secret by the government) until after the war. It was unveiled at Penn in **February 1946**. On February 15, 1946, the story was on the front page of The New York Times, a United States newspaper. The Computer History Museum says: "To many, this marks the start of the electronic computer age."

## Why it mattered

The Computer History Museum calls ENIAC "the first large-scale computer to run at electronic speed without being slowed by any mechanical parts". The museum's timeline says ENIAC was "over 1,000 times faster than any previous computer" (here, "computer" means a machine). Penn Engineering says the ballistics calculation that took 12 hours with a hand calculator could be done on ENIAC in 30 seconds. (Before each new kind of problem, though, people still had to spend days setting it up.)

ENIAC was not the only early electronic computer. In Britain, a code-breaking machine called **Colossus** was also used during the war. The Computer History Museum calls it "an electronic code-breaking computer that remained classified until the 1970s".

ENIAC kept working for about ten years, until 1955. The museum says that in that time it "may have run more calculations than all mankind had done up to that point."

Penn Engineering says ENIAC's first contribution was that "it proved you could build a computer". It also showed the weak points of vacuum tubes: they were hot, they used a lot of power, and they failed often. The next part of the story is a new kind of switch: [[transistor|the transistor]].

## 🔍 See it for yourself

1. Open the Computer History Museum's [ENIAC page](https://www.computerhistory.org/revolution/birth-of-the-computer/4/78). Scroll down: one photo shows Frances Bilas and Betty Jean Jennings at ENIAC's main control panels. (The caption says they were later called Frances Spence and Jean Bartik.)
2. Open Penn Engineering's [ENIAC history page](https://www.engineering.upenn.edu/about/history-heritage/eniac/). Read about the six programmers. It also says four of ENIAC's 40 original panels are on display in the Moore School Building.

## Recap

- ENIAC was built in the United States between 1943 and 1945 to calculate firing tables for the Army, and shown to the public in February 1946.
- It used about 18,000 vacuum tubes as electronic switches. Tubes had no moving parts, so they were fast, but they were hot, used a lot of power and failed often.
- Six women programmed ENIAC by plugging in cables and setting switches. They were among the very first programmers.

## Sources

- Computer History Museum, Revolution: ENIAC: https://www.computerhistory.org/revolution/birth-of-the-computer/4/78
- Computer History Museum, Timeline of Computer History, 1946: https://www.computerhistory.org/timeline/1946/
- Computer History Museum, Revolution: Digital Logic (relays and vacuum tubes): https://www.computerhistory.org/revolution/digital-computers/12/271
- Computer History Museum, Revolution: Breaking the Code (Colossus): https://www.computerhistory.org/revolution/birth-of-the-computer/4/82
- Computer History Museum blog, Hidden Figures No Longer (Caroline Evans, 2017): https://computerhistory.org/blog/hidden-figures-no-longer/
- Penn Engineering, Celebrating Penn Engineering History: ENIAC: https://www.engineering.upenn.edu/about/history-heritage/eniac/
- National Museum of the United States Army, ENIAC Computer: https://www.thenmusa.org/armyinnovations/innovationeniaccomputer/
- Wikipedia, Vacuum tube: https://en.wikipedia.org/wiki/Vacuum_tube
