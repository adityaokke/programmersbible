---
id: web-browser
title: "Web Browser"
type: concept
part: network
status: published
requires: [world-wide-web, software]
related: [http, dns, html, css, javascript, browser-devtools, cookies-and-privacy, what-happens-when-you-type-a-url]
summary: "A web browser is a program that asks web servers for pages, receives their files, and puts them together into the page you see and use on your screen."
read_minutes: 6
questions:
  - what is a web browser
  - what does a browser do
  - what is the difference between a browser and a search engine
  - is google a browser
  - how does a browser show a web page
  - what was the first web browser
aliases: [browser, web browser, Chrome, Firefox, Edge, Safari, rendering engine, browser engine, view source, page source, Mosaic, WorldWideWeb browser]
sources:
  - title: "MDN Web Docs: Browser (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/Browser
  - title: "MDN Web Docs: Rendering engine (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/Rendering_engine
  - title: "MDN Web Docs: Search engine (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/Search_engine
  - title: "MDN Web Docs: How the web works"
    url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works
  - title: "MDN Web Docs: How browsers load websites"
    url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites
  - title: "MDN Web Docs: Populating the page: how browsers work"
    url: https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work
  - title: "MDN Web Docs: IP address (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/IP_Address
  - title: "MDN Web Docs: World Wide Web (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/World_Wide_Web
  - title: "MDN Web Docs: What is JavaScript?"
    url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript
  - title: "MDN Web Docs: The HTML heading elements (h1 to h6)"
    url: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements
  - title: "MDN Web Docs: The anchor element (a)"
    url: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a
  - title: "CERN: A short history of the Web"
    url: https://home.cern/science/computing/the-birth-of-the-web/short-history-web/
  - title: "Tim Berners-Lee: The WorldWideWeb browser (W3C)"
    url: https://www.w3.org/People/Berners-Lee/WorldWideWeb.html
  - title: "CERN: The World Wide Web project (preserved early web page)"
    url: https://info.cern.ch/hypertext/WWW/TheProject.html
  - title: "Google Chrome Help: Chrome keyboard shortcuts"
    url: https://support.google.com/chrome/answer/157179?hl=en
  - title: "Microsoft Support: Keyboard shortcuts in Microsoft Edge"
    url: https://support.microsoft.com/en-us/edge/microsoft-edge-keyboard-shortcuts
  - title: "Firefox DevTools User Docs: View Source"
    url: https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html
author: ai
reviewed_by: ai
reviewed_at: 2026-10-31
updated: 2026-10-31
---

> **In one sentence:** A web browser is a program that asks web servers for pages, receives their files, and puts them together into the page you see and use on your screen.

## Why should I care?

You are using a web browser right now. Chrome, Edge, Firefox and Safari are all browsers. MDN, a website that documents how the web works, gives this definition: a browser is "a program that retrieves and displays pages from the web, and lets users access additional pages through hyperlinks". (To retrieve means to fetch. A hyperlink is a link.)

So a browser is [[software]], like other programs on your computer. In [[world-wide-web|The World Wide Web]], you saw that the browser is the **client**: it asks a web server for pages.

## Analogy

Think of **furniture that comes in a flat box**, with parts and a sheet of instructions. Someone follows the instructions and builds it.

A web page arrives in a similar way. The server sends files: instructions that say what the page contains and how it should look, plus parts such as pictures. The browser is the builder. MDN says the browser "assembles" these pieces into a web page. (To assemble means to put parts together.)

**Where the analogy breaks down:** furniture comes in one box, from one shop. A web page often arrives as many files, and they can come from several different servers. Also, furniture stays the same after you build it. A web page can contain code that changes the page after it appears.

## How it actually works

### Three kinds of files

MDN says websites are built mainly from code in three languages: HTML, CSS and JavaScript. Each has its own job:

- **[[html|HTML]]** describes "the web page content and its structure": the text, the headings, the links.
- **[[css|CSS]]** describes "styling and layout": colors, sizes, and where things go.
- **[[javascript|JavaScript]]** describes "the behavior of interactive parts": what happens when you click or type.

Pictures and videos come as separate files too. Remember this: the server sends **code**, and the browser turns it into the page you see.

### From an address to a page

MDN describes these steps (simplified here):

1. **You ask for a page.** You type an address into the address bar, or you click a link.
2. **The browser finds the server.** A web address contains the server's name. In `info.cern.ch/hypertext/WWW/TheProject.html`, the name is `info.cern.ch`. But the browser needs the server's **IP address**: a number that identifies each device on the network. So the browser asks [[dns|DNS]], a kind of address book for the internet. DNS answers with the IP address.
3. **The browser sends a request.** It uses [[http|HTTP]]: the set of rules that browsers and web servers use to send requests and responses. The first request is usually for the HTML file.
4. **The server sends a response.** The response holds the HTML file.
5. **The browser reads the HTML.** Inside, it may find links to more files: CSS files, JavaScript files, and media files such as pictures and video. The browser asks for each of them, with more requests. Some of these files may come from other servers.
6. **The browser draws the page.** It puts all the pieces together. MDN calls this **rendering**. The step where the page appears on the screen is called **painting**.

*Diagram: the browser and a web server. The browser sends a request for a page. The server sends back an HTML file. The browser reads it, asks for more files (CSS, JavaScript, pictures), and then draws the page on the screen. To keep it simple, the diagram shows only one server.*

```
   YOUR BROWSER                               WEB SERVER
        │  1. request: "send me the page"          │
        │ ────────────────────────────────────────►│
        │  2. response: the HTML file              │
        │ ◄────────────────────────────────────────│
        │  3. requests: CSS, JavaScript, pictures  │
        │ ────────────────────────────────────────►│
        │  4. responses: those files               │
        │ ◄────────────────────────────────────────│
        ▼
   5. the browser puts the pieces together
      and paints the page on your screen
```

Inside a browser is a part that turns the HTML and CSS into what you see on the screen. MDN calls it the **rendering engine** (or browser engine).

## How it came to be

Tim Berners-Lee wrote the first web browser in 1990, on a NeXT computer. He called it **WorldWideWeb**. By late 1990, it was running at CERN, where he had invented the web. With it, you could read pages and also edit pages stored on the same computer. Much later, it was renamed **Nexus**, so that people would not confuse the program with the web itself.

CERN says that only a few people had a NeXT computer. So a simpler browser, the **line-mode** browser, was made. It "could run on any system".

In early 1993, the National Center for Supercomputing Applications (NCSA) at the University of Illinois released the first version of its **Mosaic** browser. NCSA then also released versions for PC and Macintosh computers. CERN says these user-friendly browsers had "an immediate impact on the spread of the WWW" (the World Wide Web).

## 🧪 Try it in your browser

You will see the code that a browser receives, before it turns them into a page. You need a computer with Chrome, Edge or Firefox. These steps only look. They change nothing.

1. Open this early CERN web page: [info.cern.ch/hypertext/WWW/TheProject.html](https://info.cern.ch/hypertext/WWW/TheProject.html).
   **What you should see:** a big heading, **World Wide Web**, and text with links, such as **hypermedia**.
2. Open the page's **source**: the HTML code the server sent.
   - **Windows** (all three browsers) or **Linux** (Chrome, Firefox): press `Ctrl` + `U`.
   - **Mac:** in Chrome, press `Cmd` + `Option` + `U`. In Firefox, press `Cmd` + `U`. (Edge's help lists no Mac shortcut for this, so on a Mac use Chrome or Firefox.)

   **What you should see:** the same page as plain text, in a new tab or window. Many words are inside angle brackets, such as `<BODY>` and `<H1>`.
3. Near the top, find the line that starts with `<H1>World Wide Web</H1>`. In HTML, `H1` marks the highest-level heading on a page. The browser followed this instruction and drew the big heading you saw in step 1.
4. Two lines below it, find `hypermedia</A>`. The text before it, from `<A` to `HREF="WhatIs.html">`, starts a link. (In HTML, `A` with `HREF` makes a link, and `HREF` says where the link goes.) The browser drew **hypermedia** as a link that you can click.
5. Close the source tab or window when you are done.

**What happened:** the server did not send a picture of the page. It sent HTML code. Your browser read that code and built the page.

## Common misunderstandings

- **"The browser is the internet."** No. The browser is one program that uses the internet. The web is not the internet either: MDN calls the web "one of many applications built on top of the Internet".
- **"Google is my browser."** Google Search is a **search engine**. MDN describes a search engine as a system that "collects information from the World Wide Web and presents it to users". You visit a search engine *in* a browser, like any other website. Chrome is the browser.
- **"Websites live inside my browser."** No. A website lives on a server. MDN says a copy of the page's code "is downloaded from the server" to your device, and then the browser shows it.

## Recap

- A web browser is a program that fetches web pages from servers and shows them to you. It is the client in the web's client and server system.
- The browser sends HTTP requests, receives HTML, CSS, JavaScript and pictures, and puts them together into a page. This is called rendering.
- Tim Berners-Lee wrote the first browser at CERN in 1990. In 1993, NCSA's Mosaic helped the web spread.

## Sources

- MDN Web Docs, Browser (glossary): https://developer.mozilla.org/en-US/docs/Glossary/Browser
- MDN Web Docs, Rendering engine (glossary): https://developer.mozilla.org/en-US/docs/Glossary/Rendering_engine
- MDN Web Docs, Search engine (glossary): https://developer.mozilla.org/en-US/docs/Glossary/Search_engine
- MDN Web Docs, How the web works: https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works
- MDN Web Docs, How browsers load websites: https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites
- MDN Web Docs, Populating the page: how browsers work: https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work
- MDN Web Docs, IP address (glossary): https://developer.mozilla.org/en-US/docs/Glossary/IP_Address
- MDN Web Docs, World Wide Web (glossary): https://developer.mozilla.org/en-US/docs/Glossary/World_Wide_Web
- MDN Web Docs, What is JavaScript?: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript
- MDN Web Docs, The HTML heading elements: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements
- MDN Web Docs, The anchor element: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a
- CERN, A short history of the Web: https://home.cern/science/computing/the-birth-of-the-web/short-history-web/
- Tim Berners-Lee, The WorldWideWeb browser (W3C): https://www.w3.org/People/Berners-Lee/WorldWideWeb.html
- CERN, The World Wide Web project (preserved early web page): https://info.cern.ch/hypertext/WWW/TheProject.html
- Google Chrome Help, Chrome keyboard shortcuts: https://support.google.com/chrome/answer/157179?hl=en
- Microsoft Support, Keyboard shortcuts in Microsoft Edge: https://support.microsoft.com/en-us/edge/microsoft-edge-keyboard-shortcuts
- Firefox DevTools User Docs, View Source: https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html
