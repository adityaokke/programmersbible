---
id: tcp-ip
title: "TCP/IP"
type: event
part: network
status: review
requires: [protocols, arpanet]
related: [packets, ip-address, router]
led_to: [world-wide-web]
year: 1974
era_label: "1974–1983"
summary: "TCP/IP is the family of protocols that lets many different networks work together as one big network: the internet."
read_minutes: 7
questions:
  - what is tcp/ip
  - who invented tcp/ip
  - when was tcp/ip invented
  - what is the difference between tcp and ip
  - why was tcp/ip created
  - when did the arpanet switch to tcp/ip
aliases: [TCP/IP, TCP, IP, Transmission Control Protocol, Internet Protocol, internet protocol suite, Cerf and Kahn, flag day 1983, gateway]
sources:
  - title: "Internet Society: A Brief History of the Internet (Leiner, Cerf, Clark, Kahn, Kleinrock, Lynch, Postel, Roberts, Wolff)"
    url: https://www.internetsociety.org/internet/history-internet/brief-history-internet/
  - title: "Computer History Museum: Internet History, 1970s"
    url: https://www.computerhistory.org/internethistory/1970s/
  - title: "Computer History Museum: Born in a Van: Happy 40th Birthday to the Internet!"
    url: https://computerhistory.org/blog/born-in-a-van-happy-40th-birthday-to-the-internet/
  - title: "DARPA: ARPANET"
    url: https://www.darpa.mil/news/features/arpanet
  - title: "RFC 791, Internet Protocol"
    url: https://www.rfc-editor.org/rfc/rfc791
  - title: "RFC 793, Transmission Control Protocol"
    url: https://www.rfc-editor.org/rfc/rfc793
  - title: "MDN Web Docs: TCP (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/TCP
  - title: "MDN Web Docs: Overview of HTTP"
    url: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview
  - title: "MDN Web Docs: QUIC (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/QUIC
  - title: "RFC Editor: Internet Experiment Notes (IEN) index (IEN 40, 41, 54 and 55, 1978)"
    url: https://history.rfc-editor.org/ien/ien-index.txt
  - title: "CERN: The birth of the Web"
    url: https://home.cern/science/computing/the-birth-of-the-web/
  - title: "Wikipedia: Internet protocol suite (general background reference)"
    url: https://en.wikipedia.org/wiki/Internet_protocol_suite
author: ai
updated: 2026-10-31
---

> **In one sentence:** TCP/IP is the family of protocols that lets many different networks work together as one big network: the internet.

## The world before

In [[arpanet]], you saw an early computer network that used [[packets]]. Its computers talked with a [[protocols|protocol]] called NCP (Network Control Protocol). A protocol is a set of rules that computers agree on, so they can understand each other's messages.

The ARPANET was one network. But by 1973, researchers paid by DARPA had come up with four different packet-switching technologies: ways to build packet networks. Some of them sent packets by radio or by satellite. These networks could not talk to each other.

NCP could not solve this. A history published by the Internet Society, written by several of the people who built the internet, explains why. NCP had no way to notice and fix lost packets itself. It trusted the ARPANET to deliver every packet, because "the ARPANET was to be the only network in existence." But the radio network needed a protocol that kept working when the radio signal was disturbed or broke off for a moment. So a new protocol was needed.

## What happened

### The idea: a network of networks (1972–1973)

Bob Kahn moved from the company BBN to DARPA, the U.S. research agency that paid for the ARPANET. (In [[arpanet]] you met it under its older name, ARPA.) His first task was to connect the ARPANET with other networks. He asked Vint Cerf, who was teaching at Stanford University, to help design the protocol.

The Internet Society history lists the rules of Kahn's plan. Here are the main ones:

- Each network keeps working its own way. "No internal changes could be required to any such network."
- Special machines connect the networks and pass packets from one network to the next. The history says these "would later be called gateways and routers". In this node, we call them **gateways**. (You will meet [[router|routers]] later.)
- The gateways keep no record of the packets that pass through them.
- If a packet does not arrive, the sender sends it again.
- Nobody controls the whole system from one central place.

At the time, this work of joining networks was called "Internetting".

### The paper (1973–1974)

In September 1973, Cerf and Kahn presented their first paper on the new **Transmission Control Protocol (TCP)** at a meeting in England. In May 1974, they published an improved version, "A Protocol for Packet Network Intercommunication".

A protocol is only a set of rules, so someone must write programs that follow it. DARPA paid three groups to write such programs: at Stanford, at BBN and at University College London. The first one ran at Stanford in 1975.

### The test with a van (1977)

On November 22, 1977, a team sent data in one trip across three different kinds of networks: a packet radio network, a satellite network, and the ARPANET. The data started in a van with a radio antenna, in the San Francisco Bay Area, in California. It traveled all the way to England and back, and arrived at the University of Southern California in Los Angeles.

### One protocol becomes two (1978–1981)

At first, TCP did everything. Then the designers saw that "in some cases packet losses should not be corrected by TCP". Their example was voice sent in packets. For cases like this, the program that uses the data should decide what to do about a lost packet. So in 1978, the protocol was split in two, and separate documents described IP and TCP:

- **IP (Internet Protocol)** gives every computer an address and carries each packet, one step at a time, toward that address. You will learn more in [[ip-address]]. IP does not check that packets arrive: its rules say it does not provide reliable communication.
- **TCP** runs on top of IP. It numbers the data, checks what arrived, and sends again what was lost or damaged. It puts the pieces back in the right order.

Together they are called **TCP/IP**. The name is also used for the whole family of protocols that grew around them. Their official rules were published in September 1981, as RFC 791 (IP) and RFC 793 (TCP).

*Diagram: TCP/IP connecting three networks. Computer A, on a radio network, sends packets through a gateway to the ARPANET, then through another gateway to a third network, where computer B is. IP runs on the computers and on every gateway. TCP runs only on the two computers at the ends.*

```
 [computer A]                                                  [computer B]
  TCP                                                           TCP
  IP -- radio network -- [gateway] -- ARPANET -- [gateway] -- third network -- IP
        (network 1)         IP       (network 2)    IP        (network 3)
```

A way to picture it: think of the postcards from [[packets]]. IP is the address written on each postcard. Each postal service on the way is like a gateway: it reads only the address and passes the card on. TCP is the number on each card ("card 3 of 40"). The receiver uses the numbers to sort the cards and to tell the sender which ones arrived. The sender sends again any card that went missing.

**Where the picture breaks down:** a postal service tries to deliver every card. IP does not promise delivery: a packet can be lost on the way, and only TCP, on the two computers at the ends, notices and sends it again.

### The switch (1983)

On **January 1, 1983**, the ARPANET switched from NCP to TCP/IP. All host computers on it had to change at the same time.

## Why it mattered

TCP/IP made it possible to join many different networks without changing them. The Internet Society history calls this idea "open architecture networking", and says it is the "key underlying technical idea" of the internet. According to DARPA, by January 1983 so many networks were connected to each other that the ARPANET had grown into the internet.

TCP/IP is still in use today. When you open a web page, your browser uses HTTP, and MDN says HTTP is sent over TCP. (A newer version of HTTP uses a different protocol instead of TCP, as you saw in [[protocols]].) Web pages are part of the [[world-wide-web|World Wide Web]]. Tim Berners-Lee invented it in 1989, while working at CERN, a research organization in Geneva, Switzerland.

**A common misunderstanding:** "TCP/IP is only two protocols." No. It is a whole family of protocols. TCP and IP are two of its foundational protocols.

## 🔍 See it for yourself

1. Open the Computer History Museum article [Born in a Van: Happy 40th Birthday to the Internet!](https://computerhistory.org/blog/born-in-a-van-happy-40th-birthday-to-the-internet/). **What you should see:** photos of the van from the 1977 test, and its story.
2. Open [RFC 791](https://www.rfc-editor.org/rfc/rfc791), the official rules for IP. **What you should see:** a page of plain, typewriter-style text. Near the top, it says "September 1981" and "INTERNET PROTOCOL". You do not need to understand the rest. On a phone, the text may be small, and you may need to scroll sideways.

## Recap

- By 1973 there were several packet networks that could not talk to each other. Vint Cerf and Bob Kahn designed a new protocol to join them, and published it in 1974.
- In 1978 it was split in two: IP addresses and carries each packet, and TCP makes sure all the data arrives, in order.
- On January 1, 1983, the ARPANET switched to TCP/IP. The internet still uses it today.

## Sources

- Internet Society, A Brief History of the Internet: https://www.internetsociety.org/internet/history-internet/brief-history-internet/
- Computer History Museum, Internet History, 1970s: https://www.computerhistory.org/internethistory/1970s/
- Computer History Museum, Born in a Van: Happy 40th Birthday to the Internet!: https://computerhistory.org/blog/born-in-a-van-happy-40th-birthday-to-the-internet/
- DARPA, ARPANET: https://www.darpa.mil/news/features/arpanet
- RFC 791, Internet Protocol: https://www.rfc-editor.org/rfc/rfc791
- RFC 793, Transmission Control Protocol: https://www.rfc-editor.org/rfc/rfc793
- MDN Web Docs, TCP (glossary): https://developer.mozilla.org/en-US/docs/Glossary/TCP
- MDN Web Docs, Overview of HTTP: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview
- MDN Web Docs, QUIC (glossary): https://developer.mozilla.org/en-US/docs/Glossary/QUIC
- RFC Editor, Internet Experiment Notes (IEN) index (IEN 40, 41, 54 and 55, 1978): https://history.rfc-editor.org/ien/ien-index.txt
- CERN, The birth of the Web: https://home.cern/science/computing/the-birth-of-the-web/
- Wikipedia, Internet protocol suite (general background reference): https://en.wikipedia.org/wiki/Internet_protocol_suite
