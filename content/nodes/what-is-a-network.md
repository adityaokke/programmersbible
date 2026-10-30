---
id: what-is-a-network
title: "What is a Network?"
type: concept
part: network
status: published
requires: [what-is-a-computer]
related: [packets, protocols, router, isp, wifi-and-mobile-networks]
summary: "A network is a group of computers and other devices that are connected, by cables or by radio waves, so they can send information to each other."
read_minutes: 6
questions:
  - what is a network
  - what is a computer network
  - what is the difference between a network and the internet
  - is wi-fi the same as the internet
  - how do computers talk to each other
  - what is a local area network
aliases: [computer network, network, networks, local area network, LAN, network switch, network of networks]
sources:
  - title: "MDN Web Docs: How does the Internet work?"
    url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work
  - title: "Wikipedia: Computer network"
    url: https://en.wikipedia.org/wiki/Computer_network
  - title: "Wikipedia: Local area network"
    url: https://en.wikipedia.org/wiki/Local_area_network
  - title: "Wikipedia: Wi-Fi"
    url: https://en.wikipedia.org/wiki/Wi-Fi
  - title: "Computer History Museum, Internet History: 1960s"
    url: https://www.computerhistory.org/internethistory/1960s/
  - title: "Leonard Kleinrock, The Day the Infant Internet Uttered its First Words"
    url: https://www.lk.cs.ucla.edu/internet_first_words.html
author: ai
reviewed_by: ai
reviewed_at: 2026-10-31
updated: 2026-10-31
---

> **In one sentence:** A network is a group of computers and other devices that are connected, by cables or by radio waves, so they can send information to each other.

## Why should I care?

You are using a network right now. The words on this page were not on your [[what-is-a-computer|computer]] a moment ago. Another computer sent them to you, through a network.

One encyclopedia says that today "almost all computers are connected to a computer network". So before you can build a website, you need to know how computers send information to each other.

## Analogy

Think of the **roads in a town**.

- Each **house** is a device: a computer, a phone or a printer.
- The **roads** are the connections between them.
- You could build a road from every house to every other house. With many houses, you would need a huge number of roads. So the roads meet at one **crossroads** in the middle, and you travel through it.
- Towns are joined by **highways**, so you can travel from a house in one town to a house in another town.

In a network, the crossroads is a device called a **switch**. The highways are like **routers** and the companies that manage them. You will meet both below.

**Where the analogy breaks down:** on a road, a car carries real objects. On a network, no object travels. What travels is a **signal**: a pattern that carries information. It can be electricity in a copper cable, pulses of light in an optical fiber (a cable that carries light), or radio waves through the air. Also, a road must be built. A **wireless** connection (one without a cable) has no road at all.

## How it actually works

**Two computers.** The smallest network is two computers that are connected. MDN, a well-known website that documents how the web works, says you can link them "physically (usually with an Ethernet cable)", or "wirelessly (for example with Wi-Fi or Bluetooth systems)". An **Ethernet cable** is a common kind of network cable. **Wi-Fi** sends information by radio waves, without a cable. Bluetooth is another wireless way to connect devices.

**Many computers.** You can connect more computers. But if every computer has a cable to every other computer, the number of cables grows fast. MDN gives an example: ten computers need 45 cables. (Each computer connects to the 9 others, and each cable joins two computers: 10 × 9 ÷ 2 = 45.)

So networks use a device called a **network switch**. Each computer has one cable to the switch. When computer A sends a message to computer B, A sends it to the switch. The switch passes it on to B. With a switch, ten computers need only 10 cables.

*Diagram: on the left, four computers each have a cable to every other computer, six cables in total. On the right, the same four computers each have one cable to a switch in the middle, four cables in total.*

```
   Without a switch:              With a switch:
   every computer is wired        every computer has one
   to every other one             cable to the switch

     A ─────── B                     A       B
     │ ╲     ╱ │                       ╲   ╱
     │   ╲ ╱   │                       SWITCH
     │   ╱ ╲   │                       ╱   ╲
     │ ╱     ╲ │                     C       D
     C ─────── D

     6 cables                         4 cables
```

**A local network.** A network in a small area, such as a home, a school or an office building, is called a **local area network**, or **LAN**. On a LAN, devices can share things, for example a printer.

**A network of networks.** A switch connects devices inside one network. To reach computers far away, a device called a [[router]] connects one network to other networks. A company called an **Internet Service Provider** ([[isp|ISP]]) manages special routers and links your network to other networks. MDN describes the **internet** as this whole system of connected networks. So the internet is a network of networks, and it links billions of computers.

MDN also says that the box called a "router" in a home is likely a switch, a router and a modem in one device. (A **modem** changes the information from your network into a form that the lines outside, such as telephone lines, can carry, and back again.)

*Diagram: two homes, each with its own local network. Each home connects through its home router to an internet service provider. The providers are connected to each other. Together, all these networks are the internet.*

```
   Home 1 network                         Home 2 network
  (laptop, phone)                        (computer, printer)
         │                                       │
    home router                             home router
         │                                       │
      ISP 1  ◄──────── other networks ────────►  ISP 2
         └──────────── = the internet ───────────┘
```

(This is simplified. Networks also need shared rules, called [[protocols]], and they send information in small pieces, called [[packets]]. You will learn both later.)

## How it came to be

Long before computers, people built networks to send messages over long distances: the telegraph and the telephone. You can read about them in [[telegraph-and-telephone]]. MDN notes that the telephone network "already existed prior to the Internet", and that a modem can connect a computer network to it.

In the 1960s, a research project in the United States began to build a computer network called [[arpanet|ARPANET]]. The Computer History Museum says that the first connection between two host computers was made on October 29, 1969, from UCLA to SRI. (UCLA is a university in Los Angeles. SRI is the Stanford Research Institute. A **host** is a computer on the network.)

The team at UCLA wanted to **log in** to the SRI computer: to start using it from UCLA, over the network. The website of Leonard Kleinrock, who worked on the UCLA side, says that they sent the letters "l" and "o", "and then the system crashed!" (The computer system stopped working.) The next attempt worked.

## 🧪 Try it in your browser

You will see a network bring a page to you. Read all the steps before you start.

1. Click this link: [wikipedia.org](https://www.wikipedia.org/).
2. Wait until the page appears.
3. Come back to this page. On a computer, use your browser's **Back** button (the arrow pointing left, at the top). If the link opened in a new tab, close that tab instead. On a phone, use your phone's usual way to go back.

**What you should see:** a page with the word "Wikipedia" at the top and a list of languages.

**What happened:** when you clicked, your browser asked another computer for that page. The request left your device by cable or by radio waves. It travelled through your local network, then through other networks of the internet, to that computer. That computer sent the page back to you the same way. (How your browser finds that computer is a later topic.)

## Common misunderstandings

- **"A network needs the internet."** No. Two computers connected by one cable are already a network. The internet is one very large network of networks.
- **"Wi-Fi is the internet."** No. Wi-Fi is a way to connect nearby devices by radio waves. One encyclopedia says it is used to connect devices in a local network, and to reach the internet. The internet is the huge network of networks behind it.
- **"Networks are only for computers."** No. A network can connect computers and other devices, such as phones and printers.

## Recap

- A network is a group of devices connected by cables or radio waves, so they can send information to each other.
- A network in one home, school or office is a local area network. Routers join networks together.
- The internet is a network of networks: billions of computers connected through many routers and providers.

## Sources

- MDN Web Docs, How does the Internet work?: https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work
- Wikipedia, Computer network: https://en.wikipedia.org/wiki/Computer_network
- Wikipedia, Local area network: https://en.wikipedia.org/wiki/Local_area_network
- Wikipedia, Wi-Fi: https://en.wikipedia.org/wiki/Wi-Fi
- Computer History Museum, Internet History, 1960s: https://www.computerhistory.org/internethistory/1960s/
- Leonard Kleinrock, The Day the Infant Internet Uttered its First Words: https://www.lk.cs.ucla.edu/internet_first_words.html
