---
id: ip-address
title: "IP Address"
type: concept
part: network
status: published
requires: [tcp-ip]
related: [dns, router, packets, isp]
summary: "An IP address is a number that identifies a device on a network, so that packets can be delivered to that device."
read_minutes: 7
questions:
  - what is an ip address
  - what does an ip address look like
  - what is the difference between ipv4 and ipv6
  - why did the internet run out of ip addresses
  - what is a private ip address
  - does my ip address change
aliases: [IP, IP address, IPv4, IPv6, IPv4 address, IPv6 address, public IP address, private IP address, NAT, DHCP]
sources:
  - title: "MDN Web Docs: IP Address (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/IP_Address
  - title: "RFC 791, Internet Protocol (J. Postel, editor, September 1981)"
    url: https://www.rfc-editor.org/rfc/rfc791
  - title: "RFC 1918, Address Allocation for Private Internets (February 1996)"
    url: https://www.rfc-editor.org/rfc/rfc1918
  - title: "RFC 3022, Traditional IP Network Address Translator (January 2001)"
    url: https://www.rfc-editor.org/rfc/rfc3022
  - title: "RFC 6598, IANA-Reserved IPv4 Prefix for Shared Address Space (April 2012, carrier-grade NAT)"
    url: https://www.rfc-editor.org/rfc/rfc6598
  - title: "RFC 2131, Dynamic Host Configuration Protocol (March 1997)"
    url: https://www.rfc-editor.org/rfc/rfc2131
  - title: "RFC 1883, Internet Protocol, Version 6 (IPv6) Specification (S. Deering, R. Hinden, December 1995)"
    url: https://www.rfc-editor.org/rfc/rfc1883
  - title: "RFC 8200, Internet Protocol, Version 6 (IPv6) Specification (S. Deering, R. Hinden, July 2017)"
    url: https://www.rfc-editor.org/rfc/rfc8200
  - title: "RFC 4291, IP Version 6 Addressing Architecture (February 2006)"
    url: https://www.rfc-editor.org/rfc/rfc4291
  - title: "MDN Web Docs: Port (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/Port
  - title: "RFC 3986, Uniform Resource Identifier (URI): Generic Syntax (section 3.2.2, IPv6 addresses in square brackets)"
    url: https://www.rfc-editor.org/rfc/rfc3986
  - title: "RFC 5952, A Recommendation for IPv6 Address Text Representation (August 2010)"
    url: https://www.rfc-editor.org/rfc/rfc5952
  - title: "MDN Web Docs: DNS (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/DNS
  - title: "IANA: Number Resources"
    url: https://www.iana.org/numbers
  - title: "Number Resource Organization: Free Pool of IPv4 Address Space Depleted (3 February 2011)"
    url: https://www.nro.net/ipv4-free-pool-depleted/
  - title: "ARIN: IPv6 Information"
    url: https://www.arin.net/resources/guide/ipv6/
  - title: "Internet Society: A Brief History of the Internet (Leiner, Cerf, Clark, Kahn, Kleinrock, Lynch, Postel, Roberts, Wolff)"
    url: https://www.internetsociety.org/internet/history-internet/brief-history-internet/
  - title: "Chrome for Developers: Inspect network activity"
    url: https://developer.chrome.com/docs/devtools/network
  - title: "Microsoft Edge DevTools: Inspect network activity"
    url: https://learn.microsoft.com/en-us/microsoft-edge/devtools/network/
  - title: "Firefox DevTools User Docs: Network Monitor"
    url: https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html
  - title: "Chrome for Developers: Network features reference"
    url: https://developer.chrome.com/docs/devtools/network/reference
  - title: "Microsoft Edge DevTools: Network features reference"
    url: https://learn.microsoft.com/en-us/microsoft-edge/devtools/network/reference
  - title: "Firefox DevTools User Docs: Network request list"
    url: https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html
  - title: "Wikipedia: IP address (general background reference)"
    url: https://en.wikipedia.org/wiki/IP_address
author: ai
reviewed_by: ai
reviewed_at: 2026-10-31
updated: 2026-10-31
---

> **In one sentence:** An IP address is a number that identifies a device on a network, so that packets can be delivered to that device.

## Why should I care?

In [[packets]], you saw that every packet header holds the sender's address and the receiver's address. On the internet, those addresses are **IP addresses**. "IP" stands for **Internet Protocol**, one of the protocols of [[tcp-ip|TCP/IP]].

Your phone has an IP address whenever it is online. So does every website's computer. When you type a website's name, a system called [[dns|DNS]] usually finds that computer's IP address.

## Analogy

An IP address is like the **postal address of a house**. A letter needs the receiver's address, or the post office cannot deliver it. A packet needs the receiver's IP address in the same way.

A name and an address are different things. The IP standard from 1981, called RFC 791, says: "A name indicates what we seek. An address indicates where it is." (An **RFC** is a public document that describes how a part of the internet works.) A website name like `wikipedia.org` is a name. An IP address is an address.

**Where the analogy breaks down:** a house keeps its address for years. A device often gets a new IP address when it joins a different network. One device can also have more than one IP address. And many homes use the same "inside" addresses (more on this below), which no real street would allow.

## How it actually works

### What an IP address looks like

When people say "IP address", they usually mean an **IPv4** address (Internet Protocol, version 4). An IPv4 address is 32 [[bit|bits]] long. It is written as four numbers separated by dots, like `192.168.1.10`.

32 bits ÷ 4 = 8 bits, so each number is one [[byte]], between 0 and 255.

How many IPv4 addresses are there? Each extra bit doubles the number of patterns. So 32 bits give 2 × 2 × … × 2 (32 times) = **4,294,967,296** patterns: about **4.3 billion** addresses.

### Addresses inside every packet

The header of each packet holds two IP addresses: the **source address** (the sender) and the **destination address** (the receiver). [[router|Routers]] read the destination address and pass the packet on.

### Who hands out the addresses

Addresses on the internet are handed out in steps:

1. **IANA** (the Internet Assigned Numbers Authority) organizes IP addresses for the whole world. It gives large **blocks** (groups) of addresses to five **Regional Internet Registries**, such as AFRINIC for Africa.
2. The registries give smaller blocks to organizations such as Internet Service Providers ([[isp|ISPs]]): the companies that link your network to the internet.
3. Your ISP gives your network an address.

Inside a network, a device usually gets its IPv4 address automatically, with a protocol such as **DHCP** (Dynamic Host Configuration Protocol). DHCP can give an address for a limited time, so your address can change.

### Public and private addresses

A document from 1996, RFC 1918, set aside three groups of **private addresses**, for use inside a home or office network:

- `10.0.0.0` to `10.255.255.255`
- `172.16.0.0` to `172.31.255.255`
- `192.168.0.0` to `192.168.255.255`

Private addresses have no meaning on the public internet. Packets with a private address are not meant to travel across the internet. So many networks can reuse the same private addresses.

To reach the internet, the router of your network uses **NAT** (Network Address Translation). In each packet that leaves your network, it replaces the private address with the network's **public address**, an address used on the internet. It keeps track of which device sent what, so each answer goes back to the right device. So many devices can share one public address. (This is simplified: an ISP can also share addresses in a similar way.)

*Diagram: a phone and a laptop with private addresses connect to a home router. The router has one public address on the internet.*

```
   HOME NETWORK (private addresses)              THE INTERNET

   phone   192.168.1.10 ---+
                           +--- [router] ------- websites see only
   laptop  192.168.1.11 ---+    one public       the router's public
                                address          address
```

### Running out, and IPv6

On **3 February 2011**, the Number Resource Organization, the group of the five registries, announced that IANA had no more free IPv4 blocks to give out.

The newer version is **IPv6** (Internet Protocol, version 6). An IPv6 address is **128 bits** long instead of 32. That gives 2 to the power of 128 addresses: a number with 39 digits. People write IPv6 addresses in base 16 (see [[counting-systems]]), as up to eight groups separated by colons. Each group has one to four base-16 digits (0 to 9 and A to F). Two colons together (`::`), allowed only once, stand for one or more groups of zeros that were left out. For example: `2001:DB8::8:800:200C:417A`. Today, the recommended way is small letters: `2001:db8::8:800:200c:417a`.

## How it came to be

You do not need to remember these names and numbers. The Internet Protocol, with its 32-bit addresses, was described in **RFC 791** in **September 1981**, edited by Jon Postel. As you saw in [[arpanet]], the ARPANET switched to TCP/IP on **1 January 1983**.

IPv6 was described in RFC 1883, by S. Deering and R. Hinden, in **December 1995**.

## 🧪 Try it in your browser

You will see the IP addresses of the computers that send a web page. You need a computer with a keyboard. These steps change nothing.

1. In Chrome, Edge or Firefox, open a website, for example `wikipedia.org`.
2. Open the network tool:
   - **Chrome and Edge:** press `Ctrl` + `Shift` + `J` (Mac: `Cmd` + `Option` + `J`). This opens the console. Click the tab named **Network**. In Edge, if you do not see it, click the **More tools** button and choose **Network**.
   - **Firefox:** press `Ctrl` + `Shift` + `E` (Mac: `Cmd` + `Option` + `E`).
3. The list is empty at first. Reload the page with the browser's reload button. Rows appear. Each row is one file the browser asked for.
4. Right-click the row of column names at the top of the list. A menu appears.
   - **Chrome and Edge:** click **Remote Address**.
   - **Firefox:** click **Remote IP**.
5. **What you should see:** a new column with an address in each row: the address of the computer that sent that file. It is either four numbers separated by dots (IPv4) or groups separated by colons (IPv6). Rows may differ: a page can come from several computers. If a row is empty or says "unknown", look at another row.
6. An address may end with a colon and a short number, such as `:443`. That number is a **port**: a number for one service on that computer. 443 is the usual port for HTTPS. It is not part of the IP address. An IPv6 address is then put inside square brackets, like `[2001:db8::1]:443`.
7. When you are done, close the tab with the website.

## Common misunderstandings

- **"My device always has the same IP address."** Not usually. It often gets a new address on another network.
- **"Every device on the internet has its own public address."** No. With NAT, many devices in one home share one public address.
- **"An IP address and a website name are the same thing."** No. DNS translates a website name (a domain name) into an IP address.

## Recap

- An IP address identifies a device on a network. Each packet carries a source and a destination address.
- IPv4 addresses are 32 bits, written as four numbers from 0 to 255: about 4.3 billion in total.
- With private addresses and NAT, many devices share one public address. IANA's free IPv4 blocks ran out in 2011; IPv6 uses 128 bits.

## Sources

- MDN Web Docs, IP Address (glossary): https://developer.mozilla.org/en-US/docs/Glossary/IP_Address
- RFC 791, Internet Protocol (1981): https://www.rfc-editor.org/rfc/rfc791
- RFC 1918, Address Allocation for Private Internets (1996): https://www.rfc-editor.org/rfc/rfc1918
- RFC 3022, Traditional IP Network Address Translator (2001): https://www.rfc-editor.org/rfc/rfc3022
- RFC 6598, Shared Address Space (carrier-grade NAT, 2012): https://www.rfc-editor.org/rfc/rfc6598
- RFC 2131, Dynamic Host Configuration Protocol (1997): https://www.rfc-editor.org/rfc/rfc2131
- RFC 1883, IPv6 Specification (1995): https://www.rfc-editor.org/rfc/rfc1883
- RFC 8200, IPv6 Specification (2017): https://www.rfc-editor.org/rfc/rfc8200
- RFC 4291, IP Version 6 Addressing Architecture (2006): https://www.rfc-editor.org/rfc/rfc4291
- MDN Web Docs, Port (glossary): https://developer.mozilla.org/en-US/docs/Glossary/Port
- RFC 3986, URI Generic Syntax: https://www.rfc-editor.org/rfc/rfc3986
- RFC 5952, IPv6 Address Text Representation (2010): https://www.rfc-editor.org/rfc/rfc5952
- MDN Web Docs, DNS (glossary): https://developer.mozilla.org/en-US/docs/Glossary/DNS
- IANA, Number Resources: https://www.iana.org/numbers
- Number Resource Organization, Free Pool of IPv4 Address Space Depleted: https://www.nro.net/ipv4-free-pool-depleted/
- ARIN, IPv6 Information: https://www.arin.net/resources/guide/ipv6/
- Internet Society, A Brief History of the Internet: https://www.internetsociety.org/internet/history-internet/brief-history-internet/
- Chrome for Developers, Inspect network activity: https://developer.chrome.com/docs/devtools/network
- Microsoft Edge DevTools, Inspect network activity: https://learn.microsoft.com/en-us/microsoft-edge/devtools/network/
- Firefox DevTools User Docs, Network Monitor: https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html
- Chrome for Developers, Network features reference: https://developer.chrome.com/docs/devtools/network/reference
- Microsoft Edge DevTools, Network features reference: https://learn.microsoft.com/en-us/microsoft-edge/devtools/network/reference
- Firefox DevTools User Docs, Network request list: https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html
- Wikipedia, IP address (general background reference): https://en.wikipedia.org/wiki/IP_address
