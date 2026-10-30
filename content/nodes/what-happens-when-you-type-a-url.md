---
id: what-happens-when-you-type-a-url
title: "What Happens When You Type a URL"
type: concept
part: network
status: review
requires: [dns, url, http, https, web-browser]
related: [browser-devtools, html, packets]
summary: "When you type a URL and press Enter, your browser finds the server's address with DNS, opens a connection, asks for the page with HTTP, receives the files, and draws them on your screen."
read_minutes: 8
questions:
  - what happens when i type a url and press enter
  - how does a website get to my screen
  - how does a browser load a web page
  - what happens when i open a website
  - how does the internet show me a website
aliases: [how a web page loads, page load, how websites work]
sources:
  - title: "MDN Web Docs: How the web works"
    url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works
  - title: "MDN Web Docs: Populating the page: how browsers work"
    url: https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work
  - title: "MDN Web Docs: HTTPS (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/HTTPS
  - title: "Chrome for Developers: Inspect network activity"
    url: https://developer.chrome.com/docs/devtools/network
  - title: "Chrome for Developers: Open Chrome DevTools"
    url: https://developer.chrome.com/docs/devtools/open
  - title: "RFC 791, Internet Protocol (September 1981)"
    url: https://datatracker.ietf.org/doc/rfc791/
  - title: "RFC 882, Domain Names: Concepts and Facilities (November 1983)"
    url: https://datatracker.ietf.org/doc/rfc882/
  - title: "CERN: The birth of the Web"
    url: https://home.cern/science/computing/the-birth-of-the-web/
  - title: "CERN: A short history of the Web"
    url: https://home.cern/science/computing/the-birth-of-the-web/short-history-web/
  - title: "RFC 9000, QUIC: A UDP-Based Multiplexed and Secure Transport"
    url: https://www.rfc-editor.org/rfc/rfc9000
  - title: "RFC 9110, HTTP Semantics (default port 443 for https)"
    url: https://www.rfc-editor.org/rfc/rfc9110
author: ai
updated: 2026-10-30
---

> **In one sentence:** When you type a URL and press Enter, your browser finds the server's address with DNS, opens a connection, asks for the page with HTTP, receives the files, and draws them on your screen.

## Why should I care?

You have done this thousands of times: type an address, press Enter, and a page appears. It feels like one action. In fact, it is a chain of many small steps. Each step is one of the topics in this part of the course.

This page puts them all together. When you understand this chain, you understand how the web works. You will also know where to look when something goes wrong: when a page does not load, you can usually find which step failed.

## Analogy

Imagine you want to order a catalogue from a shop in another city, by post.

- You know the **shop's name**, but not its street address. So first you look it up in an **address book**.
- You **contact the shop** to check that it is open and ready. You also agree on a **secret code**: a special way to scramble your letters, so nobody else can read them on the way.
- You send an **order form**: "Please send me your catalogue."
- The shop replies **"OK, here it is"** and sends it in several small parcels. You unpack them and put the pages together.
- The catalogue says "see also: price list, pictures". So you **order those too**.
- When everything has arrived, you **put it all together** and read it.

**Where the analogy breaks down:** by post, this takes days. On the web, it usually happens in a moment. Also, your browser does not order one thing at a time. It asks for many files at the same time, often from several different servers.

## How it actually works

Let's follow one real example. You type `https://en.wikipedia.org/wiki/Computer` and press Enter.

### 1. The browser reads the URL

Your [[web-browser|browser]] splits the [[url|URL]] into parts:

- `https` → use the secure version of HTTP
- `en.wikipedia.org` → the domain name of the server
- `/wiki/Computer` → which page you want from that server

### 2. Find the address (DNS)

Computers connect using IP addresses, not names. So the browser needs the IP address of `en.wikipedia.org`. If your computer looked it up recently, the answer may already be saved on your computer. Otherwise, it asks a resolver, which uses [[dns|DNS]] to find the address.

### 3. Open a connection

Now the browser knows where the server is. It opens a **connection** to it, following the rules of [[tcp-ip|TCP/IP]]. A connection is an agreement between two computers to send data to each other in an organized way. To start it, the two computers exchange a few short messages to check that the other side is there and ready to talk. This is called a **handshake**.

Because the URL starts with `https`, there is a **second handshake**. In it, the browser and the server agree on how to **encrypt** (scramble) everything they send, so that nobody in between can read or change it. The browser also checks that the server really is `en.wikipedia.org`, and not a fake. This is what [[https|HTTPS]] adds.

(Some websites use a newer version of HTTP, called HTTP/3. It runs on a different kind of connection, called QUIC, which combines the two handshakes into one. The idea is the same.)

### 4. Ask for the page (HTTP request)

The browser sends an [[http|HTTP]] **request**. In simple words, it says: "**GET** me `/wiki/Computer`, please." `GET` is the real name of this kind of request: it means "send me this".

### 5. The server answers (HTTP response)

The server finds the page and sends an HTTP **response**. It starts with a **status code**. `200` means "OK, here it is". Then comes the content: an **HTML** file. HTML is the language that describes what is on a page: headings, text, links and pictures.

All the data, in both directions, travels across the internet split into small [[packets]]. Your computer puts the packets back together.

### 6. Get everything else

The HTML file is only the start. Inside it are references to other files that the page needs, for example "use the picture `logo.png`" or "use the style file `style.css`". As the browser reads the HTML, it finds these references and asks for:

- **CSS** files, which describe how the page looks (colors, sizes, positions)
- **images**
- **JavaScript** files, which make the page react to you (for example, a menu that opens when you click it)

For each file, the browser repeats steps 4 and 5. If a file is on a different server, it also repeats steps 2 and 3 first. A single page often needs many files.

### 7. Draw the page

Finally, the browser turns all these files into what you see. In a very simple version, the browser:

1. reads the HTML and builds a list of all the parts of the page (headings, paragraphs, pictures),
2. applies the CSS to decide how each part looks,
3. works out **where** each part goes on the screen and how big it is,
4. **paints** the result on your screen as **pixels** (the tiny colored dots that make up any screen image).

You will learn the three languages of web pages, [[html|HTML]], CSS and JavaScript, in the next part.

## How it came to be

Nobody designed this whole chain at once. Its pieces were invented at different times, by different people:

- **IP**, the rules for addressing and moving packets, was published as a standard in 1981.
- **DNS** was first described in 1983, when one shared list of names became too big.
- The **World Wide Web** was first proposed in 1989 by Tim Berners-Lee at **CERN**, a large science laboratory in Europe. By the end of 1990, the first web server and the first browser were running there.

These pieces work together because each one is an open standard: a public set of rules that anyone can follow. That is why any browser can talk to any web server in the world.

## 🧪 Try it in your browser

Let's watch all of these steps happen. You will use your browser's developer tools. (You will learn them properly in [[browser-devtools]].)

1. Open a new tab in Chrome, Edge or Firefox.
2. Open the developer tools: `F12` or `Ctrl` + `Shift` + `I` on Windows, `Cmd` + `Option` + `I` on Mac. (On some laptops you must hold the `Fn` key while you press `F12`.)
3. Click the **Network** tab. It only records while it is open, so open it **before** you load the page.
4. In the address bar, type `https://en.wikipedia.org/wiki/Computer` and press `Enter`. If the list stays empty, press `Ctrl` + `R` (`Cmd` + `R` on Mac) to load the page again.
5. Watch the list fill up. **Each row is one file the browser asked for.**

Now look closer:

- In the bar at the bottom of the panel, find the number before the word **requests**. That is how many files the page needed.
- Click the **first row** (named `Computer`). This is the HTML page from step 5. A details area opens: click its **Headers** tab.
- Find the **status code**: `200`. (If you visited this page before, you might see `304` instead. It means "not changed, use the copy you already saved".)
- Find the **Remote Address** (in Firefox: **Address**). That is the server's IP address: the answer DNS gave in step 2. It may end with `:443`. That number is a **port**, a kind of door number on the server. 443 is the usual door for HTTPS.

Look at the other rows too. The **Type** column shows what kind of file each one is. Chrome and Edge show words like `stylesheet` (CSS) and `script` (JavaScript). Firefox shows `css`, `js`, and image types like `png`. Can you find CSS, JavaScript and image files? Those are step 6.

## Common misunderstandings

- **"A web page arrives as one file."** No. The browser usually downloads many separate files and puts the page together itself.
- **"The website lives inside my browser."** No. The website lives on a server. Your browser downloads a copy of the files when you visit. It may save some of them, so the next visit is faster.
- **"A URL and a domain name are the same thing."** No. The domain name is only one part of the URL. The URL also says which protocol to use and which page you want.

## Recap

- Typing a URL starts a chain: read the URL, find the address with DNS, connect (plus encryption for HTTPS), send an HTTP request, receive an HTTP response.
- The first file is HTML. It leads the browser to request more files: CSS, images and JavaScript.
- The browser then builds and paints the page. You can watch all of it in the Network tab.

## Sources

- MDN Web Docs, How the web works: https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works
- MDN Web Docs, Populating the page: how browsers work: https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work
- MDN Web Docs, HTTPS: https://developer.mozilla.org/en-US/docs/Glossary/HTTPS
- Chrome for Developers, Inspect network activity: https://developer.chrome.com/docs/devtools/network
- Chrome for Developers, Open Chrome DevTools: https://developer.chrome.com/docs/devtools/open
- RFC 791, Internet Protocol (1981): https://datatracker.ietf.org/doc/rfc791/
- RFC 882, Domain Names: Concepts and Facilities (1983): https://datatracker.ietf.org/doc/rfc882/
- CERN, The birth of the Web: https://home.cern/science/computing/the-birth-of-the-web/
- CERN, A short history of the Web: https://home.cern/science/computing/the-birth-of-the-web/short-history-web/
- RFC 9000, QUIC: https://www.rfc-editor.org/rfc/rfc9000
- RFC 9110, HTTP Semantics: https://www.rfc-editor.org/rfc/rfc9110
