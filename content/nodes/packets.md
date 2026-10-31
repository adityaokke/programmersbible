---
id: packets
title: "Packets"
type: concept
part: network
status: published
requires: [what-is-a-network, byte]
related: [arpanet, protocols, router]
summary: "A packet is a small piece of data that travels across a network on its own, together with the delivery information it needs."
read_minutes: 6
questions:
  - what is a packet
  - what is a network packet
  - why is data split into packets
  - what is packet switching
  - what happens if a packet is lost
  - how big is a packet
aliases: [packet, network packet, data packet, packet switching]
sources:
  - title: "MDN Web Docs: Packet (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/Packet
  - title: "RFC 894, A Standard for the Transmission of IP Datagrams over Ethernet Networks"
    url: https://www.rfc-editor.org/rfc/rfc894
  - title: "RFC 791, Internet Protocol"
    url: https://www.rfc-editor.org/rfc/rfc791
  - title: "Wikipedia: Packet switching (general background reference)"
    url: https://en.wikipedia.org/wiki/Packet_switching
  - title: "Wikipedia: Ethernet (general background reference)"
    url: https://en.wikipedia.org/wiki/Ethernet
  - title: "Internet Society: A Brief History of the Internet (Leiner, Cerf, Clark, Kahn, Kleinrock, Lynch, Postel, Roberts, Wolff)"
    url: https://www.internetsociety.org/internet/history-internet/brief-history-internet/
  - title: "IEEE Computer Society: Computer Pioneers, Donald W. Davies"
    url: https://history.computer.org/pioneers/davies.html
  - title: "Computer History Museum: Internet History, 1960s"
    url: https://www.computerhistory.org/internethistory/1960s/
  - title: "Chrome for Developers: Inspect network activity"
    url: https://developer.chrome.com/docs/devtools/network
  - title: "Chrome for Developers: Network features reference"
    url: https://developer.chrome.com/docs/devtools/network/reference
  - title: "Microsoft Edge DevTools: Inspect network activity"
    url: https://learn.microsoft.com/en-us/microsoft-edge/devtools/network/
  - title: "Microsoft Edge DevTools: Network features reference"
    url: https://learn.microsoft.com/en-us/microsoft-edge/devtools/network/reference
  - title: "Firefox DevTools User Docs: Network Monitor"
    url: https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html
  - title: "Firefox DevTools User Docs: Network Monitor toolbar"
    url: https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/toolbar/index.html
  - title: "Firefox DevTools User Docs: Network request list"
    url: https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html
  - title: "Firefox source: Network Monitor text labels (netmonitor.ftl, the \"transferred\" summary)"
    url: https://raw.githubusercontent.com/mozilla-firefox/firefox/main/devtools/client/locales/en-US/netmonitor.ftl
  - title: "Firefox source: Network Monitor text labels (netmonitor.properties, the \"Reload the page\" notice)"
    url: https://raw.githubusercontent.com/mozilla-firefox/firefox/main/devtools/client/locales/en-US/netmonitor.properties
  - title: "NIST: Prefixes for binary multiples"
    url: https://physics.nist.gov/cuu/Units/binary.html
author: ai
reviewed_by: ai
reviewed_at: 2026-10-31
updated: 2026-10-31
---

> **In one sentence:** A packet is a small piece of data that travels across a network on its own, together with the delivery information it needs.

## Why should I care?

When you open a web page or send a photo, the data does not travel as one big block. It is cut into small pieces called **packets**. Each packet travels across the network by itself. At the other end, the pieces are put back together.

The internet is built for this. The Internet Protocol, a set of rules for the internet, was designed for networks that send data in packets.

## Analogy

Imagine you must send a whole book to a friend, but only on **postcards**. So you copy one small part of the book onto each postcard.

On every postcard you write three things:

- your friend's address,
- your own address,
- a number, like "card 3 of 40".

The postcards may travel on different trucks and arrive in a mixed order. Your friend sorts them by number. If card 17 is missing, or arrives wet and unreadable, your friend can ask you for it again.

**Where the analogy breaks down:** a postcard carries handwriting, but a packet carries [[byte|bytes]]. Packets travel far faster than any postcard. And nobody writes the postcards by hand: your computer cuts the data into packets, numbers them and puts them back together by itself, without you seeing it.

## How it actually works

### What is inside a packet

A packet has two main parts:

- The **header**: the delivery information. It holds the address of the sender, the address of the receiver, and information about the order of the pieces.
- The **payload**: the actual data being sent, such as a small piece of a photo.

A packet also carries a **check value**: a small number calculated from its contents. The receiver calculates it again. If the two numbers differ, the packet was damaged on the way.

An **address** here is a number that names one computer on the network, like a house address. (You will learn the real details in [[ip-address]].)

### How big is a packet

**Ethernet** is a family of standards (shared technical rules) for wired computer networks. On standard Ethernet, one packet can be at most **1,500 bytes** long. Those 1,500 bytes include the header, so the data in each packet is a little less. Other kinds of networks have their own limits. On Ethernet, a photo of 3 million bytes needs at least 2,000 packets.

*Diagram: one packet as a box: the header with the delivery information on the left, the payload with the data on the right.*

```
+----------------------------------+--------------------------------+
| HEADER                           | PAYLOAD                        |
| to: receiver's address           | the data itself, for example   |
| from: sender's address           | a small piece of a photo       |
| order information, damage check  |                                |
+----------------------------------+--------------------------------+
```

### The journey

1. The sender cuts the data into packets and adds a header to each one.
2. Each packet goes out on the network. Devices along the way, such as [[router|routers]], receive it, look at the receiver's address, and pass it on, one step closer to the receiver.
3. Each packet is sent on its own. Packets from the same message can take **different paths**, so they may arrive **out of order**.
4. The receiver uses the order information to put the pieces back in order. If a packet is missing or damaged, it can be sent again.

*Diagram: four numbered packets travel through routers by different paths, arrive as 1, 3, 2, 4, and are put back as 1, 2, 3, 4.*

```
 SENDER                                              RECEIVER

 message                                            arrives as   put back
 cut into   [1][2][3][4]                            [1][3][2][4] in order
 packets          |                                      ^       [1][2][3][4]
                  |                                      |
                  +--> router --> router ----------------+
                  |                                      |
                  +--> router --------> router ----------+
```

### Sharing the connections

Many computers send packets over the same connections. Because each packet is small, packets from other computers can go in between, so they take turns. This way of moving data is called **packet switching**.

An older way, **circuit switching**, sets up a fixed path and reserves a share of each connection along it for one session, from start to end. Nobody else can use that reserved share, even when almost nothing is being sent.

(This is simplified. The rules that number, check and re-send packets are called protocols. You will meet them in [[protocols]] and [[tcp-ip]].)

## How it came to be

Two researchers had the idea of sending data in small blocks separately, without knowing about each other's work:

- In the early 1960s, **Paul Baran** at the RAND Corporation in the United States.
- In **1965**, **Donald Davies** at the National Physical Laboratory (NPL) in the United Kingdom. He gave the idea the name "packet switching".

In the United States, the [[arpanet|ARPANET]] became an early packet-switching network. Its planners took the word "packet" from the work at NPL. Its first connection from one computer to another, from UCLA to SRI, was made on **29 October 1969**.

## 🧪 Try it in your browser

Your browser cannot show single packets. But it can show how much data a page needs. From that, you can calculate the smallest possible number of packets. You need a computer with a keyboard. These steps only look; they change nothing.

1. In Chrome, Edge or Firefox, open a web page with pictures, for example a news site.
2. Open the network tool:
   - **Chrome and Edge:** press `Ctrl` + `Shift` + `J` (Mac: `Cmd` + `Option` + `J`). This opens the browser's developer tools. Click the tab named **Network**. In Edge, if you do not see that tab, Microsoft's guide says to click the **More tools** button.
   - **Firefox:** press `Ctrl` + `Shift` + `E` (Mac: `Cmd` + `Option` + `E`).
3. The list is empty at first. The tool only records while it is open. Reload the page with the browser's reload button.
4. Rows appear. Each row is one **request**: one thing the browser asked for, such as a picture.
5. Look at the bar at the very bottom of the tool. It shows how many requests there were, and the size of the data, such as "850 kB" or "2.3 MB". kB means kilobytes and MB means megabytes. If you see two sizes, use the one marked **transferred**.
6. Now a small calculation. 1 kB is about 1,000 bytes and 1 MB is about 1,000,000 bytes. So 2.3 MB is about 2.3 × 1,000,000 = 2,300,000 bytes. Divide by 1,500, the Ethernet packet limit: 2,300,000 ÷ 1,500 is about 1,533.3. If it all came over Ethernet, that is **at least 1,534 packets**. The real number is higher, because each packet also carries a header.
7. When you are done, close the browser tab with the news site.

**On a phone:** if your photo app shows a photo's size in its details, change it to bytes and divide by 1,500 in the same way.

## Common misunderstandings

- **"A file travels across the network in one piece."** No. A file that is bigger than one packet is cut into more than one packet.
- **"All packets of a message follow the same path."** Not always. Each packet is sent on its own, so packets can take different paths and arrive out of order.
- **"If one packet is lost, the whole download fails."** Not usually. Often, the missing packet is noticed and sent again.

## Recap

- A packet is a small piece of data with a header: who it is for, who sent it, and where it fits.
- Big messages are cut into many packets. They travel on their own and are put back in order at the other end.
- Packet switching lets many computers share the same connections. The idea came from the 1960s, and the ARPANET used it from 1969.

## Sources

- MDN Web Docs, Packet (glossary): https://developer.mozilla.org/en-US/docs/Glossary/Packet
- RFC 894, IP Datagrams over Ethernet Networks: https://www.rfc-editor.org/rfc/rfc894
- RFC 791, Internet Protocol: https://www.rfc-editor.org/rfc/rfc791
- Wikipedia, Packet switching (general background reference): https://en.wikipedia.org/wiki/Packet_switching
- Wikipedia, Ethernet (general background reference): https://en.wikipedia.org/wiki/Ethernet
- Internet Society, A Brief History of the Internet: https://www.internetsociety.org/internet/history-internet/brief-history-internet/
- IEEE Computer Society, Computer Pioneers: Donald W. Davies: https://history.computer.org/pioneers/davies.html
- Computer History Museum, Internet History 1960s: https://www.computerhistory.org/internethistory/1960s/
- Chrome for Developers, Inspect network activity: https://developer.chrome.com/docs/devtools/network
- Chrome for Developers, Network features reference: https://developer.chrome.com/docs/devtools/network/reference
- Microsoft Edge DevTools, Inspect network activity: https://learn.microsoft.com/en-us/microsoft-edge/devtools/network/
- Microsoft Edge DevTools, Network features reference: https://learn.microsoft.com/en-us/microsoft-edge/devtools/network/reference
- Firefox DevTools User Docs, Network Monitor: https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html
- Firefox DevTools User Docs, Network Monitor toolbar: https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/toolbar/index.html
- Firefox DevTools User Docs, Network request list: https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html
- Firefox source, Network Monitor text labels (netmonitor.ftl): https://raw.githubusercontent.com/mozilla-firefox/firefox/main/devtools/client/locales/en-US/netmonitor.ftl
- Firefox source, Network Monitor text labels (netmonitor.properties): https://raw.githubusercontent.com/mozilla-firefox/firefox/main/devtools/client/locales/en-US/netmonitor.properties
- NIST, Prefixes for binary multiples: https://physics.nist.gov/cuu/Units/binary.html
