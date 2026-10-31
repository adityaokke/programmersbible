---
id: web-hosting
title: "Web Hosting"
type: concept
part: web
status: published
requires: [server, dns]
related: [cloud-computing, domain-name, first-website]
summary: "Web hosting means keeping a website's files on a server that is connected to the internet, so anyone can visit the website at any time."
read_minutes: 6
questions:
  - what is web hosting
  - where does my website live
  - can i host a website on my own computer
  - is web hosting the same as a domain name
  - is there free web hosting
  - what is the difference between a static and a dynamic website
aliases: [hosting, web host, hosting provider, website hosting, static hosting, shared hosting, dedicated hosting, host a website]
sources:
  - title: "MDN Web Docs: What is a web server?"
    url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server
  - title: "MDN Web Docs: How much does it cost to do something on the Web?"
    url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost
  - title: "Wikipedia: Web hosting service (general background reference)"
    url: https://en.wikipedia.org/wiki/Web_hosting_service
  - title: "GitHub Docs: What is GitHub Pages?"
    url: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
  - title: "GitHub Docs: Creating a GitHub Pages site"
    url: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
  - title: "GitHub Docs: Managing a custom domain for your GitHub Pages site"
    url: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
  - title: "GitHub Docs: About repositories"
    url: https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories
  - title: "MDN Web Docs: HTML (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/HTML
  - title: "MDN Web Docs: Database (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/Database
  - title: "Wikipedia: DNS hosting service"
    url: https://en.wikipedia.org/wiki/DNS_hosting_service
  - title: "Apple Support: Right-click on Mac"
    url: https://support.apple.com/guide/mac-help/right-click-mh35853/mac
  - title: "CERN: A short history of the Web"
    url: https://home.cern/science/computing/the-birth-of-the-web/short-history-web/
  - title: "CERN: info.cern.ch, home of the first website"
    url: https://info.cern.ch/
  - title: "RFC 1035, Domain Names: Implementation and Specification (P. Mockapetris, November 1987)"
    url: https://www.rfc-editor.org/rfc/rfc1035
  - title: "Google Public DNS: Introduction"
    url: https://developers.google.com/speed/public-dns/docs/intro
  - title: "Google Public DNS: Troubleshooting (the dns.google lookup page)"
    url: https://developers.google.com/speed/public-dns/docs/troubleshooting
  - title: "Google Chrome Help: Chrome keyboard shortcuts"
    url: https://support.google.com/chrome/answer/157179?hl=en
  - title: "Microsoft Support: Keyboard shortcuts in Microsoft Edge"
    url: https://support.microsoft.com/en-us/microsoft-edge/keyboard-shortcuts-in-microsoft-edge-50d3edab-30d9-c7e4-21ce-37fe2713cfad
  - title: "Firefox DevTools User Docs: View Source"
    url: https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html
author: ai
reviewed_by: ai
reviewed_at: 2026-10-31
updated: 2026-10-31
---

> **In one sentence:** Web hosting means keeping a website's files on a server that is connected to the internet, so anyone can visit the website at any time.

## Why should I care?

Every website you have visited is stored on a [[server]] somewhere. Keeping a website's files on a server, and keeping that server running, is called **web hosting**. A company that does it for others is called a **web host** or a **hosting provider**.

To let the world see your own web page, you will need hosting.

## Analogy

Think of a **market hall**: one big building, open every day, with many small stalls inside. You rent a stall and put your goods on it. The owner keeps the building working and open. Visitors come to see your goods.

The building is the server computer. Your stall is a part of its storage. Your goods are your website's files. The owner is the hosting provider.

**Where the analogy breaks down:** market visitors take goods away. A server sends each visitor a **copy** of your files, so the files never run out. Also, the same website can be stored on several servers at the same time. A stall can only be in one place.

## How it actually works

### A website is a set of files

A simple website is a group of files: [[html|HTML]] files (plain text files that describe a page's structure), plus images and other files. MDN, a website that documents how the web works, says a web server must store "the website's files".

### Hosting means: stored, connected, always on

MDN says you could host these files on your own computer, but a server from a hosting provider is usually better:

- It is "typically more available": up and running more of the time.
- It is always connected to the internet, except when it has problems.
- It can keep the same [[ip-address|IP address]] all the time. This matters because your domain name will point to your server's IP address. MDN notes that not every internet provider gives homes a fixed IP address.
- Someone else usually looks after it.

### How a visitor reaches your files

A [[domain-name|domain name]] is a name like `wikipedia.org`, typed instead of an IP address. A domain name and hosting are different things. You rent a domain name from a company called a **registrar**. Some hosting providers are also registrars. [[dns|DNS]] connects the two. At your **DNS provider** (a service that runs the DNS servers for your domain; most registrars include one), you add a **record**: one piece of information, such as "this name points to this IP address".

*Diagram: you upload files to a server at a hosting provider, and add a DNS record that points your domain name to the server's IP address. A visitor's browser asks DNS for the address, asks the server for the page, and gets a copy of the files.*

```
  YOU ──── 1. upload your files ────► SERVER at a hosting provider
   │                                     ▲              │
   │ 2. add a record:             4. "send me     5. a copy of
   │    name → server's IP           the page"       the files
   ▼                                     │              ▼
  DNS ◄──── 3. "what is the IP ────── VISITOR'S BROWSER
              address of this name?"
```

1. You **upload** your files (when you have made them): you copy them from your computer to the server.
2. You add a DNS record for your domain.
3. A visitor types your domain name. Their browser asks DNS for the IP address.
4. The browser asks your server for the page.
5. The web server program sends a copy of your files.

### Static and dynamic websites

MDN describes two ways a server can send a website:

- A **static** website is sent "as-is": the server sends the same files to every visitor. MDN suggests that your first site should be a static site.
- A **dynamic** website uses extra programs on the server. They can create a page when a visitor asks for it, for example by filling a page template with data from a **database** (a storage system for organized data). Sites like Wikipedia work this way.

### Kinds of hosting

Wikipedia lists several kinds of hosting. You do not need to remember them all:

- **Shared hosting:** many websites on one server, sharing its CPU and memory. Like the market hall.
- **Dedicated hosting:** you get a whole server for yourself, but usually do not own it.
- **Cloud hosting:** many servers work together, so another one can take over when one breaks. (More in [[cloud-computing]].)
- **Static page hosting:** a service only for static files. Wikipedia names GitHub Pages and Cloudflare Pages as examples.
- **Home server:** you run the server yourself, often on an old personal computer with a home internet connection.

### What it costs

MDN says hosting services "range from free to thousands of dollars per month". Some free hosting providers "may add advertising to your content", MDN warns. Static hosting can be free. GitHub is a website where you can store your code and files. Its GitHub Pages service works with GitHub's free plan, if your files are public (anyone can see them).

## How it came to be

CERN is a laboratory in Geneva, Switzerland, where scientists study the Universe. CERN says the first web server was running there by the end of 1990. The first website and web server had the address `info.cern.ch`, and ran on a NeXT computer.

At first, a website needed its owner's own server. Not every company had the money or skills for that, so web hosting services started to keep other people's websites on their servers. By 1995, companies such as GeoCities, Angelfire and Tripod offered free hosting.

## 🧪 Try it in your browser

You will look at a file that CERN hosts, then find its server. You need a computer, not a phone. This changes nothing.

1. Open `https://info.cern.ch/hypertext/WWW/TheProject.html` in Chrome, Edge or Firefox. You see the heading "World Wide Web". CERN calls this "the first website".
2. Show the file that the server sent. On Windows, press `Ctrl` + `U`. On a Mac, press `Cmd` + `Option` + `U` in Chrome, or `Cmd` + `U` in Firefox. In any browser, you can also right-click an empty part of the page (on a Mac: hold `Control` and click) and choose the item **View page source** (or a similar name).
3. **What you should see:** a new tab with plain text. You see words in angle brackets, like `<TITLE>` and `<H1>`. This is the HTML file that CERN's server sent to your browser. Close this tab when you are done.
4. Now find that server. Open `https://dns.google/query?name=info.cern.ch`. This is Google's public DNS lookup page.
5. Find the part that starts with `"Answer"`. You may see `"type": 5` first. Type 5 means an **alias**: `info.cern.ch` is a nickname for another name. Its `"data"` shows the real name behind the alias.
6. Look further down for `"type": 1`. Type 1 is an address. Its `"data"` is an IP address: four numbers separated by dots. This is the address of the server that hosts the page.

**What you did:** you saw a hosted file and its server's address. The values may change over time.

## Common misunderstandings

- **"My domain name is my hosting."** No. The domain is the name. Hosting is the server that stores the files.
- **"Hosting always costs a lot."** No. A small static site can be hosted for free.

## Recap

- Web hosting means storing a website's files on a server that is always on and connected to the internet.
- A domain name and hosting are separate. A DNS record points the name to the hosting server.
- Hosting comes in many kinds, from free static hosting to whole servers.

## Sources

- MDN Web Docs, What is a web server?: https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server
- MDN Web Docs, How much does it cost to do something on the Web?: https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost
- Wikipedia, Web hosting service (general background reference): https://en.wikipedia.org/wiki/Web_hosting_service
- GitHub Docs, What is GitHub Pages?: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- GitHub Docs, Creating a GitHub Pages site: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- GitHub Docs, Managing a custom domain for your GitHub Pages site: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- GitHub Docs, About repositories: https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories
- MDN Web Docs, HTML (glossary): https://developer.mozilla.org/en-US/docs/Glossary/HTML
- MDN Web Docs, Database (glossary): https://developer.mozilla.org/en-US/docs/Glossary/Database
- Wikipedia, DNS hosting service: https://en.wikipedia.org/wiki/DNS_hosting_service
- Apple Support, Right-click on Mac: https://support.apple.com/guide/mac-help/right-click-mh35853/mac
- CERN, A short history of the Web: https://home.cern/science/computing/the-birth-of-the-web/short-history-web/
- CERN, info.cern.ch: https://info.cern.ch/
- RFC 1035, Domain Names: Implementation and Specification: https://www.rfc-editor.org/rfc/rfc1035
- Google Public DNS, Introduction: https://developers.google.com/speed/public-dns/docs/intro
- Google Public DNS, Troubleshooting: https://developers.google.com/speed/public-dns/docs/troubleshooting
- Google Chrome Help, Chrome keyboard shortcuts: https://support.google.com/chrome/answer/157179?hl=en
- Microsoft Support, Keyboard shortcuts in Microsoft Edge: https://support.microsoft.com/en-us/microsoft-edge/keyboard-shortcuts-in-microsoft-edge-50d3edab-30d9-c7e4-21ce-37fe2713cfad
- Firefox DevTools User Docs, View Source: https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html
