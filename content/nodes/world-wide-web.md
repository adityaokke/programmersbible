---
id: world-wide-web
title: "The World Wide Web"
type: event
part: network
status: published
requires: [tcp-ip, client-and-server]
related: [url, http, html, web-browser, what-is-information]
year: 1989
era_label: "1989–1991"
summary: "Tim Berners-Lee proposed the World Wide Web, a system of pages joined by links, at CERN in March 1989, and the first web server and browser were running there by the end of 1990."
read_minutes: 6
questions:
  - who invented the world wide web
  - when was the world wide web invented
  - what is the difference between the web and the internet
  - what was the first website
  - why was the web invented at cern
  - what is hypertext
aliases: [WWW, W3, the Web, web, Tim Berners-Lee, Berners-Lee, CERN, first website, info.cern.ch, hypertext, WorldWideWeb]
sources:
  - title: "CERN: A short history of the Web"
    url: https://home.cern/science/computing/the-birth-of-the-web/short-history-web/
  - title: "CERN: The birth of the Web"
    url: https://home.cern/science/computing/the-birth-of-the-web/
  - title: "CERN: About CERN"
    url: https://home.cern/about
  - title: "Tim Berners-Lee, Information Management: A Proposal (CERN, March 1989, May 1990), copy kept by W3C"
    url: https://www.w3.org/History/1989/proposal.html
  - title: "W3C: Tim Berners-Lee"
    url: https://www.w3.org/People/Berners-Lee/
  - title: "MDN Web Docs: World Wide Web (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/World_Wide_Web
  - title: "MDN Web Docs: Internet (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/Internet
  - title: "CERN: info.cern.ch, home of the first website"
    url: https://info.cern.ch/
  - title: "CERN: The World Wide Web project (preserved early web page)"
    url: https://info.cern.ch/hypertext/WWW/TheProject.html
  - title: "CERN: WWW Project History (preserved early web page)"
    url: https://info.cern.ch/hypertext/WWW/History.html
  - title: "The Register: CERN recreates first webpage (30 April 2013)"
    url: https://www.theregister.com/2013/04/30/cern_recreates_first_webpage/
  - title: "Wikipedia: World Wide Web (general background reference)"
    url: https://en.wikipedia.org/wiki/World_Wide_Web
author: ai
reviewed_by: ai
reviewed_at: 2026-10-31
updated: 2026-10-31
---

> **In one sentence:** Tim Berners-Lee proposed the World Wide Web, a system of pages joined by links, at CERN in March 1989, and the first web server and browser were running there by the end of 1990.

## The world before

By the late 1980s, the **internet** already existed. MDN, a website that documents how the web works, describes it as "a worldwide network of networks" that uses [[tcp-ip|TCP/IP]]. But there was no World Wide Web yet: no web pages and no websites.

**CERN** is a physics laboratory near Geneva, on the border between France and Switzerland. Scientists there study the tiny particles that everything is made of.

Sharing information was hard. In March 1989, Tim Berners-Lee, a British scientist at CERN, described the problem in a written proposal. People often stay at CERN for about two years. He wrote: "When two years is a typical length of stay, information is constantly being lost."

You do not need to remember all the names.

## What happened

### The proposal (1989–1990)

CERN says Berners-Lee invented the World Wide Web in 1989, while working at CERN. It was made to share information between scientists in universities and institutes around the world.

His proposal was called "Information Management: A Proposal". Its main idea was **hypertext**. The proposal explains hypertext as "Human-readable information linked together in an unconstrained way". In plain words: text that people can read, joined to other text by **links**, in any way the writer chooses. A link is a piece of text that you can click to go to other information.

The proposal compared links to references. (In a book, a reference is a note such as "see page 42".) It called this a "web" of notes, and said it is far more useful than a fixed system of folders inside folders. In folders, each note sits in one place. With links, one note can point to many others, and many notes can point to it.

**Where the comparison breaks down:** a reference in a book only tells you where to look. You still have to find the page yourself. A web link takes you there when you click it. And the page it opens can be on a computer on the other side of the world.

CERN describes the basic idea as a way to "merge the evolving technologies of computers, data networks and hypertext": to join these three things into one system. In November 1990, Berners-Lee wrote a new version of the proposal with Robert Cailliau, an engineer from Belgium.

### The first web server and browser (1990)

By the end of 1990, Berners-Lee had the first web server and the first web browser running at CERN. The **web server** was a server program, as you learned in [[client-and-server]]. It waited for requests and sent back pages. The **web browser** was the client: the program that asked for pages and showed them.

The server ran on a computer called a NeXT, in his office. CERN says it had a label: "This machine is a server. DO NOT POWER IT DOWN!!" (To power down means to turn off.)

The first **website** (a group of web pages that belong together) was at the address `info.cern.ch`. CERN says it "was dedicated to the World Wide Web project itself".

*Diagram: a browser on one computer and the web server at CERN, joined through the internet. The browser sends a request for a page. The server sends back the page, which contains links to more pages.*

```
  BROWSER (client)                              WEB SERVER at CERN
  on a scientist's computer                     (info.cern.ch)

        │   request: "send me this page"            │
        │ ─────────────────────────────────────────►│
        │                                           │
        │   response: the page, with links         │
        │ ◄───────────────────────────────────────── │
                       (the internet)
```

CERN says that "only a few users" had a NeXT computer, and the first browser ran on that kind of computer. So work started on a simpler browser, the **line-mode** browser, which "could run on any system". Nicola Pellow wrote it. She was a student, working at CERN for a short time as part of her studies.

The web works with three pieces. MDN lists them:

- [[http|HTTP]]: the rules that a client and a server follow to send data to each other.
- [[url|URL]]: a unique address for each thing on the web, such as a page.
- [[html|HTML]]: the most common format for writing web pages.

(This is simplified. You will learn each piece in its own page.)

### Out into the world (1991)

In 1991, Berners-Lee made his web software available to others. In August 1991, he announced it on internet **newsgroups**: online discussion boards of that time. MDN says this was the moment the web was first made public.

In December 1991, the first web server in the United States started working. It was at the Stanford Linear Accelerator Center (SLAC) in California.

## Why it mattered

On 30 April 1993, CERN made the web software available "on a royalty-free basis": anyone could use it without paying. CERN says: "These actions allowed the web to flourish." (To flourish means to grow well.)

The numbers grew fast. CERN says that by late 1993 there were over 500 known web servers. By the end of 1994, the web had 10,000 servers and 10 million users. In 1994, Berners-Lee founded the World Wide Web Consortium (W3C), a group that works on standards: shared rules for the web.

The web and the internet are not the same thing. MDN says: "The Web is not the same as the Internet: the Web is one of many applications built on top of the Internet." (MDN writes it with a capital I.) In other words, the web is one way of using the internet.

## 🔍 See it for yourself

In 2013, CERN put a copy of the first website back online at `info.cern.ch`. The copy is from November 1992. The team said it "may be the earliest copy we can find". This works on a computer or a phone. You only look; you change nothing.

1. Open this page: [info.cern.ch/hypertext/WWW/TheProject.html](https://info.cern.ch/hypertext/WWW/TheProject.html). **What you should see:** a big heading, **World Wide Web**, and plain text below it. The first sentence starts: "The WorldWideWeb (W3) is a wide-area hypermedia information retrieval initiative". W3 is a short name for the World Wide Web. In plain words: a project to find information across many computers.
2. Below that sentence is a list of links. Find the link **History** and click it. **What you should see:** a new page with the heading **History to date**. Its first entry is **March 1989**: "First project proposal written and circulated for comment" (sent to people so they could give their opinion).
3. On the same page, look down to the entry for **August 1991**. **What you should see:** the word "alt.hypertext". That is the name of one of the newsgroups where the web was announced.
4. To come back here, use your browser's **Back** button, or close the tab if a new one opened.

## Recap

- In March 1989, Tim Berners-Lee at CERN proposed a system of information joined by links, called hypertext. It grew into the World Wide Web.
- By the end of 1990, the first web server (`info.cern.ch`) and the first browser were running at CERN. The web was announced to the public in August 1991.
- The web is not the internet. It is one of many applications that run on the internet. CERN made its software free to use in 1993, and the web spread quickly.

## Sources

- CERN, A short history of the Web: https://home.cern/science/computing/the-birth-of-the-web/short-history-web/
- CERN, The birth of the Web: https://home.cern/science/computing/the-birth-of-the-web/
- CERN, About CERN: https://home.cern/about
- Tim Berners-Lee, Information Management: A Proposal: https://www.w3.org/History/1989/proposal.html
- W3C, Tim Berners-Lee: https://www.w3.org/People/Berners-Lee/
- MDN Web Docs, World Wide Web (glossary): https://developer.mozilla.org/en-US/docs/Glossary/World_Wide_Web
- MDN Web Docs, Internet (glossary): https://developer.mozilla.org/en-US/docs/Glossary/Internet
- CERN, info.cern.ch: https://info.cern.ch/
- CERN, The World Wide Web project (preserved early web page): https://info.cern.ch/hypertext/WWW/TheProject.html
- CERN, WWW Project History (preserved early web page): https://info.cern.ch/hypertext/WWW/History.html
- The Register, CERN recreates first webpage (2013): https://www.theregister.com/2013/04/30/cern_recreates_first_webpage/
- Wikipedia, World Wide Web: https://en.wikipedia.org/wiki/World_Wide_Web
