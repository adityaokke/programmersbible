---
id: isp
title: "Internet Service Provider (ISP)"
type: concept
part: network
status: published
requires: [router]
related: [ip-address, wifi-and-mobile-networks, physical-internet]
summary: "An Internet Service Provider (ISP) is a company that connects your home or phone to the internet, through its own network of routers and its links to other networks."
read_minutes: 6
questions:
  - what is an isp
  - what does an internet service provider do
  - who gives me my ip address
  - how does my home connect to the internet
  - is my isp the internet
  - what is an internet exchange point
aliases: [ISP, ISPs, internet service provider, internet provider, internet exchange point, IXP, peering, transit, DSL, fiber, cable internet, autonomous system, ASN]
sources:
  - title: "MDN Web Docs: ISP (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/ISP
  - title: "MDN Web Docs: How does the Internet work?"
    url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work
  - title: "Texas Comptroller of Public Accounts: Broadband Technology"
    url: https://comptroller.texas.gov/programs/broadband/about/what/technology.php
  - title: "IANA: Number Resources"
    url: https://www.iana.org/numbers
  - title: "RFC 3022, Traditional IP Network Address Translator (January 2001)"
    url: https://www.rfc-editor.org/rfc/rfc3022
  - title: "RFC 6598, IANA-Reserved IPv4 Prefix for Shared Address Space (April 2012)"
    url: https://www.rfc-editor.org/rfc/rfc6598
  - title: "Internet Society: Policy Brief, Internet Exchange Points and Local Interconnection Ecosystems"
    url: https://www.internetsociety.org/policybriefs/ixps/
  - title: "ARIN: Autonomous System Numbers"
    url: https://www.arin.net/resources/guide/asn/
  - title: "Internet Society: A Brief History of the Internet (Leiner, Cerf, Clark, Kahn, Kleinrock, Lynch, Postel, Roberts, Wolff)"
    url: https://www.internetsociety.org/internet/history-internet/brief-history-internet/
  - title: "Computer History Museum, Internet History: 1980s"
    url: https://www.computerhistory.org/internethistory/1980s/
  - title: "RIPEstat Data API: What's My IP"
    url: https://stat.ripe.net/docs/data-api/api-endpoints/whats-my-ip
  - title: "RIPEstat Data API: Prefix Overview"
    url: https://stat.ripe.net/docs/data-api/api-endpoints/prefix-overview
  - title: "Firefox DevTools User Docs: JSON viewer"
    url: https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html
author: ai
reviewed_by: ai
reviewed_at: 2026-10-31
updated: 2026-10-31
---

> **In one sentence:** An Internet Service Provider (ISP) is a company that connects your home or phone to the internet, through its own network of routers and its links to other networks.

## Why should I care?

In [[router]], you saw that your home router connects your home network to an **Internet Service Provider** (ISP). Without an ISP, your devices can talk to each other at home, but not to the rest of the world.

You probably pay an ISP: for internet at home, or for mobile data on your phone. Every web page you open travels through your ISP's network.

## Analogy

An ISP is like a **water company**. Your house has its own pipes inside. The water company lays a pipe from the street to your house and links it to a much larger system of pipes. You pay for that link.

In the same way, your home network has its own devices and router. The ISP brings a line to your home and links it to its network of routers, and from there to the rest of the internet.

**Where the analogy breaks down:** water flows only into your house. Data flows both ways: you send packets out and receive packets back. A water company also supplies the water itself. An ISP does not make the web pages you see. It carries them. And unlike one water company, many ISPs join their networks, so your packets often cross several of them.

## How it actually works

### The line to your home

Your ISP reaches your home over a line. Common kinds of line are:

- **DSL** (Digital Subscriber Line): data travels over copper telephone lines.
- **Cable:** data travels over the same cables that bring television to your home.
- **Fiber:** data travels through glass fibers as thin as a hair. It is usually faster than the other kinds.
- **Wireless:** a radio link instead of a cable. It can stay at one building, or be mobile (more in [[wifi-and-mobile-networks]]).
- **Satellite:** useful in remote areas, where few people live.

At your end, a **modem** turns the data from your network into signals for the line, and back. As you saw in [[router]], the box at home often holds a modem, a switch and a router in one.

### Your public address

As you saw in [[ip-address]], addresses are handed out in steps. IANA gives large blocks of addresses to the regional registries. ISPs get their blocks through these registries. And IANA says: "Users are assigned IP addresses by Internet service providers (ISPs)."

So your ISP usually gives your home router a **public address**. With IPv4 and NAT (Network Address Translation), all the devices in your home can share that one address. Some ISPs go further: many of their customers share one public IPv4 address. Then your router does not hold the public address itself.

### A network of networks

MDN describes an ISP as "a company that manages some special routers that are all linked together and can also access other ISPs' routers." Your packets go to your ISP's routers first. Those routers pass them on, often to another ISP, until they reach the network of the website you asked for.

The data that travels over networks is called **traffic**. The Internet Society names a few ways for networks to exchange it:

- **Transit:** "One network pays another network to carry traffic to destinations across the broader Internet."
- **Peering:** two separate networks exchange traffic directly with each other.
- **Internet exchange points** (IXPs): places where many networks meet and peer, through shared equipment.

With an IXP, traffic between two networks in the same country can stay in that country. Without one, the Internet Society says, it may travel abroad and back.

*Diagram: a laptop sends a packet through the home router and a line to ISP A. ISP A passes it, at an internet exchange point, to ISP B, which delivers it to the website's network.*

```
 [laptop] -> [home router + modem] ==line==> [ISP A's routers]
                                                    |
                                       internet exchange point
                                                    |
                    [website's network] <- [ISP B's routers]
```

## How it came to be

You do not need to remember these names and dates.

In 1985, the US started NSFNET, a network for research and education. Its national-scale part was called the **backbone**. A rule for the backbone banned uses "not in support of Research and Education." So **commercial** traffic (for business, to earn money) was not allowed there.

In 1988, a group called CNRI got permission to connect MCI Mail, a commercial email service, to the internet. The Computer History Museum says: "This was the start of commercial Internet services in the United States (and possibly the world)."

The NSF, which ran NSFNET, also asked NSFNET's smaller regional networks to find business customers. Together with the backbone rule, this was meant to help private, long-distance networks grow, such as PSI and UUNET. In April 1995, the NSFNET backbone lost its government funding.

## 🧪 Try it in your browser

You will see your public address, and the name of the network it belongs to. These steps change nothing.

1. Open this address: `https://stat.ripe.net/data/whats-my-ip/data.json`. It belongs to RIPE NCC, one of the regional registries.
2. **What you should see:** a short page of data. Some browsers show plain text with `{ }` brackets and `" "` quote marks. Others show a tidy list. If you see a small `+` or arrow, click it to open the data.
3. Near the end, find `data`. If you see a `+` or arrow next to it, click it. Inside `data` is `ip`. (Other words above it, such as `whats-my-ip`, are not the address.) Next to this `ip` is your public address: four numbers separated by dots (IPv4), or groups separated by colons (IPv6). Copy only the address, without the quote marks.
4. Open this address, with your address in place of `YOUR-ADDRESS`: `https://stat.ripe.net/data/prefix-overview/data.json?resource=YOUR-ADDRESS`
5. **What you should see:** find `asns` (inside `data`, near the end). Near it are `asn`, a number, and `holder`, a name. (A "warning" near the top may say "not announced" and "aligned". That is normal.)

What do these mean? An **autonomous system** is a network, such as an ISP's network, that is run with one set of rules for routing. Its number is the **ASN**. ARIN, another regional registry, says network operators need these numbers to exchange routing information with other ISPs.

So the `holder` is the network your address belongs to. At home, this is usually your ISP. On mobile data, it is usually your mobile company. The name may also look different from the brand name you know.

## Common misunderstandings

- **"My ISP is the internet."** No. Your ISP is one network among many. Your packets often cross the networks of several ISPs.
- **"Each of my devices gets its own public IPv4 address from my ISP."** Not usually. With NAT, your home devices usually share one public IPv4 address.
- **"My ISP stores the websites I visit."** Usually not. Websites are on computers in other networks. Your ISP carries the packets between you and them.

## Recap

- An ISP connects your home or phone to the internet, over a line such as DSL, cable, fiber, radio or satellite.
- Your ISP usually gives your network its public IP address.
- ISPs join their networks through transit, peering and internet exchange points, so the internet is a network of networks.

## Sources

- MDN Web Docs, ISP (glossary): https://developer.mozilla.org/en-US/docs/Glossary/ISP
- MDN Web Docs, How does the Internet work?: https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work
- Texas Comptroller of Public Accounts, Broadband Technology: https://comptroller.texas.gov/programs/broadband/about/what/technology.php
- IANA, Number Resources: https://www.iana.org/numbers
- RFC 3022, Traditional IP Network Address Translator (2001): https://www.rfc-editor.org/rfc/rfc3022
- RFC 6598, Shared Address Space (2012): https://www.rfc-editor.org/rfc/rfc6598
- Internet Society, Policy Brief: Internet Exchange Points and Local Interconnection Ecosystems: https://www.internetsociety.org/policybriefs/ixps/
- ARIN, Autonomous System Numbers: https://www.arin.net/resources/guide/asn/
- Internet Society, A Brief History of the Internet: https://www.internetsociety.org/internet/history-internet/brief-history-internet/
- Computer History Museum, Internet History, 1980s: https://www.computerhistory.org/internethistory/1980s/
- RIPEstat Data API, What's My IP: https://stat.ripe.net/docs/data-api/api-endpoints/whats-my-ip
- RIPEstat Data API, Prefix Overview: https://stat.ripe.net/docs/data-api/api-endpoints/prefix-overview
- Firefox DevTools User Docs, JSON viewer: https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html
