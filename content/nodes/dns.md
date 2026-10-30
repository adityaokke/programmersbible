---
id: dns
title: "DNS"
type: concept
part: network
status: review
requires: [domain-name, server]
related: [ip-address, url, web-hosting]
year: 1983
summary: "DNS (the Domain Name System) is the worldwide system that finds the IP address that belongs to a domain name."
read_minutes: 7
questions:
  - what is dns
  - how does my computer find a website's ip address
  - what is a dns server
  - what is a root server
  - why does a website not load when dns is down
aliases: [domain name system, dns server, name server, dns lookup, resolver]
sources:
  - title: "RFC 1034, Domain Names: Concepts and Facilities (P. Mockapetris, November 1987)"
    url: https://www.rfc-editor.org/rfc/rfc1034
  - title: "RFC 882, Domain Names: Concepts and Facilities (P. Mockapetris, November 1983)"
    url: https://datatracker.ietf.org/doc/rfc882/
  - title: "RFC 1035, Domain Names: Implementation and Specification (P. Mockapetris, November 1987)"
    url: https://www.rfc-editor.org/rfc/rfc1035
  - title: "Internet Hall of Fame: Paul Mockapetris"
    url: https://www.internethalloffame.org/inductee/paul-mockapetris/
  - title: "IANA: Root Zone Database, .id (Indonesia)"
    url: https://www.iana.org/domains/root/db/id.html
  - title: "IANA: Root Servers"
    url: https://www.iana.org/domains/root/servers
  - title: "Root Server Technical Operations Association: root-servers.org"
    url: https://root-servers.org/
  - title: "MDN Web Docs: Populating the page: how browsers work"
    url: https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work
  - title: "Google Public DNS: Introduction"
    url: https://developers.google.com/speed/public-dns/docs/intro
  - title: "Google Public DNS: Get started"
    url: https://developers.google.com/speed/public-dns/docs/using
  - title: "Google Public DNS: DNS lookup tool"
    url: https://dns.google/
author: ai
updated: 2026-10-30
---

> **In one sentence:** DNS (the Domain Name System) is the worldwide system that finds the IP address that belongs to a domain name.

## Why should I care?

Before your browser can open a website, DNS usually has to do its work. You type a [[domain-name|domain name]] like `wikipedia.org`. But computers on the internet find each other with [[ip-address|IP addresses]], which are numbers. Before your browser can talk to the website's [[server]], it must find that number. DNS is the system that finds it.

You only notice DNS when it breaks: your internet works, but websites "can't be found". One possible reason is that DNS could not find the address.

## Analogy

Imagine you need one book in a huge library with many buildings. You ask a **helper** to find it for you. The helper asks a chain of desks:

1. The **main information desk** does not know where your book is. But it knows which **building** has that kind of book, and tells the helper.
2. The **building's desk** does not know the exact shelf either. But it knows which **room** has the book.
3. The **room's desk** knows the exact shelf, and gives the answer.

The helper brings you the answer. The helper also **writes it down**, so next time someone asks for the same book, there is no need to ask all the desks again.

In DNS, the helper is called a **resolver**. The desks are servers, from the most general to the most specific.

**Where the analogy breaks down:** walking between desks takes minutes. DNS is usually too fast to notice. Also, each "desk" in DNS is not one place. It is copied on many servers in many countries, so one broken server does not stop the system.

## How it actually works

Domain names are organized like a **tree turned upside down**. At the top is the **root**. Below the root are the endings like `.com`, `.org` and `.id` (some endings are for countries: `.id` is Indonesia). Below those are names like `wikipedia.org`, and below those, names like `en.wikipedia.org`.

Two kinds of programs (a program is a set of instructions that a computer runs) do the work:

- **Name servers** hold the information about one part of the tree. The name servers for `wikipedia.org` know the addresses of Wikipedia's computers. The root servers and the `.org` servers are name servers too.
- **Resolvers** ask name servers questions for you. Your internet connection usually comes with a resolver, often run by the company that provides your internet. There are also **public** resolvers that anyone can use, like Google Public DNS.

Here is what happens when your browser needs the address of `wikipedia.org`. (This is simplified.)

1. Your computer asks a **resolver**: "What is the IP address of `wikipedia.org`?"
2. The resolver checks its **cache**: the list of answers it saved earlier. If it has a recent answer, it replies immediately.
3. If not, it asks a **root server**. Resolvers are given the addresses of the root servers in advance: often, this list is built into the resolver software. The root server answers: "I do not know, but here are the addresses of the servers for `.org`."
4. The resolver asks a **`.org` server**. It answers: "I do not know either, but here are the addresses of the name servers for `wikipedia.org`."
5. The resolver asks a **name server for `wikipedia.org`**. It holds the information for `wikipedia.org` and the names under it, and gives the real answer: the IP address.
6. The resolver sends the address to your computer, and saves it in its cache for a limited time.

That time limit is called the **TTL** (time to live). Each answer comes with a TTL, counted in seconds. When the TTL ends, the saved answer expires, and the resolver must ask again.

At the top of the tree are the **root servers**. There are **13 of them**, named with letters from A to M, and they are run by 12 different organizations. But each letter is not one computer. Each is a group of many copies around the world: more than 2,000 copies in total.

## How it came to be

In the early internet, there was no DNS. Instead, one organization, the Network Information Center, kept a single file called **HOSTS.TXT**. It listed the name and address of every computer on the network. Every computer had to download a new copy of this file to stay up to date.

As the network grew quickly, this stopped working. The file kept growing and needed frequent updates. And the work of sending new copies to every computer grew much faster than the network itself: twice as many computers meant about four times as much work.

In **November 1983**, **Paul Mockapetris** published the first description of a new system: the Domain Name System. Its key idea was the tree: different organizations are responsible for different parts of it, so no single list has to contain every name. In **1987**, he published updated descriptions, called RFC 1034 and RFC 1035. (An **RFC** is a public document that describes how a part of the internet works.) With later updates, they are still the foundation of DNS.

## 🧪 Try it in your browser

You will do a DNS lookup yourself, using Google's public resolver. It has a web page where you can type a name.

1. Copy this into your browser's address bar and press `Enter`: `https://dns.google/query?name=wikipedia.org`
2. The page shows the answer as lines of text, with words in quotes and some numbers. Find the part that starts with `"Answer"`.
3. Inside the `"Answer"` part, find a line like `"type": 1 /* A */`. Type **A** means "address record": the answer is an IP address.
   (If you try another name and see `"type": 5` first, that name is an alias: a nickname that points to another name. Look further down for type 1.)
4. Next to it, find `"data"`. The value is the IP address of Wikipedia: four numbers separated by dots.
5. Find `"TTL"`. The number tells you how many seconds this answer may be saved.

**What you did:** you asked a resolver the same question your computer asks before opening Wikipedia.

Now ask about a name that does not exist. In the address bar, replace `wikipedia.org` at the end with `this-name-does-not-exist-12345.com`, and press `Enter`. This time there is no `"Answer"` part. Near the top, you will see `"Status": 3 /* NXDOMAIN */`. NXDOMAIN means "this domain does not exist".

## Common misunderstandings

- **"DNS is one big server."** No. DNS is spread over thousands of servers around the world. No single server knows every name.
- **"DNS sends me the website."** No. DNS only gives the address. Your browser then connects to that address to get the website.
- **"When a website owner changes their DNS, everyone sees it immediately."** No. If a website moves to a server with a new IP address, resolvers around the world keep the old saved answer until its TTL ends, so the change can take as long as the TTL to reach everyone, and a TTL can be a day or more.

## Recap

- DNS turns a domain name into an IP address.
- A resolver asks a chain of name servers (the root, then the ending like `.org`, then the domain's own name server) and saves answers for a time called the TTL.
- DNS replaced one shared file, HOSTS.TXT, and was first described by Paul Mockapetris in 1983.

## Sources

- RFC 1034, Domain Names: Concepts and Facilities (1987): https://www.rfc-editor.org/rfc/rfc1034
- RFC 882, Domain Names: Concepts and Facilities (1983): https://datatracker.ietf.org/doc/rfc882/
- RFC 1035, Domain Names: Implementation and Specification (1987): https://www.rfc-editor.org/rfc/rfc1035
- Internet Hall of Fame, Paul Mockapetris: https://www.internethalloffame.org/inductee/paul-mockapetris/
- IANA, Root Zone Database, .id: https://www.iana.org/domains/root/db/id.html
- IANA, Root Servers: https://www.iana.org/domains/root/servers
- Root Server Technical Operations Association: https://root-servers.org/
- MDN Web Docs, Populating the page: how browsers work: https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work
- Google Public DNS, Introduction: https://developers.google.com/speed/public-dns/docs/intro
- Google Public DNS, Get started: https://developers.google.com/speed/public-dns/docs/using
- Google Public DNS lookup tool: https://dns.google/
