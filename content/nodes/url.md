---
id: url
title: "URL"
type: concept
part: network
status: published
requires: [domain-name, world-wide-web]
related: [http, https, what-happens-when-you-type-a-url, dns]
summary: "A URL (Uniform Resource Locator) is the full address of one thing on the web, such as a page or a picture: it says how to ask for it, which server has it, and where it is on that server."
read_minutes: 6
questions:
  - what is a url
  - what does url stand for
  - what are the parts of a url
  - what is the difference between a url and a domain name
  - what does the question mark in a web address mean
  - what does the hash sign in a web address do
aliases: [web address, link address, uniform resource locator, URI, scheme, path, query, query string, parameters, fragment, anchor, port]
sources:
  - title: "MDN Web Docs: What is a URL?"
    url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL
  - title: "MDN Web Docs: URL (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/URL
  - title: "MDN Web Docs: World Wide Web (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/World_Wide_Web
  - title: "MDN Web Docs: HTTPS (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/HTTPS
  - title: "MDN Web Docs: DNS (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/DNS
  - title: "MDN Web Docs: Encryption (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/Encryption
  - title: "MDN Web Docs: HTTP (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/HTTP
  - title: "RFC 3986, Uniform Resource Identifier (URI): Generic Syntax (T. Berners-Lee, R. Fielding, L. Masinter, January 2005)"
    url: https://www.rfc-editor.org/rfc/rfc3986
  - title: "RFC 1738, Uniform Resource Locators (URL) (T. Berners-Lee, L. Masinter, M. McCahill, editors, December 1994)"
    url: https://www.rfc-editor.org/rfc/rfc1738
  - title: "RFC 1630, Universal Resource Identifiers in WWW (T. Berners-Lee, June 1994)"
    url: https://www.rfc-editor.org/rfc/rfc1630
  - title: "Tim Berners-Lee: Frequently asked questions (W3C)"
    url: https://www.w3.org/People/Berners-Lee/FAQ.html
  - title: "CERN: A short history of the Web"
    url: https://home.cern/science/computing/the-birth-of-the-web/short-history-web/
  - title: "Example Domain (example.com)"
    url: https://example.com/
author: ai
reviewed_by: ai
reviewed_at: 2026-10-31
updated: 2026-10-31
---

> **In one sentence:** A URL (Uniform Resource Locator) is the full address of one thing on the web, such as a page or a picture: it says how to ask for it, which server has it, and where it is on that server.

## Why should I care?

You use URLs all the time. Each link you click leads to a URL, and your browser's address bar shows one. MDN, a website that documents how the web works, says URLs are "commonly called 'web addresses' or 'links'".

In [[world-wide-web]], you saw that the web gives each thing a unique address. A [[domain-name|domain name]] like `wikipedia.org` names a [[server]]. A URL goes further: it points to **one thing** on that server. MDN calls such a thing a **resource**, "such as a web page, image, or video".

## Analogy

MDN compares a URL to a **postal address** on a letter. The domain name is like the town. The path (you will meet it below) is like the building in that town. The parameters are like the apartment number.

**Where the analogy breaks down:** a postal address points to a real building. The path in a URL often does not. MDN says that today, a path is mostly "without any physical reality": the server decides what to send back for each path. Parameters can be any extra information, such as search words. And the post office reads your whole envelope. But one part of a URL, the part after `#`, is never sent to the server at all.

## How it actually works

### The parts of a URL

Here is an example URL, with all its parts. (`example.com` is a domain name made for use in examples like this one.)

*Diagram: the URL https://www.example.com:443/docs/page.html?lang=en&size=big#part2 split into six parts, from left to right: the scheme https, the domain name www.example.com, the port 443, the path /docs/page.html, the parameters lang=en and size=big after the question mark, and the fragment part2 after the hash sign.*

```
 https://www.example.com:443/docs/page.html?lang=en&size=big#part2
 └─┬─┘   └──────┬──────┘ └┬┘└──────┬──────┘ └───────┬──────┘ └─┬─┘
 scheme    domain name   port     path         parameters    fragment
```

You read it from left to right:

1. **Scheme** (`https`, before the `://`): MDN says it "indicates the protocol that the browser must use". A **protocol** is a set of rules that computers agree on to talk to each other. For websites, the scheme is usually `https` or `http`. **HTTP** is the protocol that browsers and servers use to send web pages. **HTTPS** is "an encrypted version" of HTTP: the data is turned into a code that others cannot read. You will learn both in [[http]] and [[https]].
2. **Domain name** (`www.example.com`): which server to ask. A system called DNS finds the IP address that belongs to the domain name. A URL can also contain an IP address instead, but MDN says that is rare.
3. **Port** (`:443`): a number after a colon. MDN calls it the technical "gate" used to reach the resources on the server. You almost never see the port in a URL. It is usually left out when the server uses the usual one: **80** for HTTP and **443** for HTTPS.
4. **Path** (`/docs/page.html`): which resource you want on that server. If there is a path, it starts with `/`. It often looks like folders and a file name, as here.
5. **Parameters** (`?lang=en&size=big`): extra information for the server, after a `?`. Usually, each one is a **key** (a name) and a **value**, joined with `=`. An `&` separates them. Each server has its own rules about them.
6. **Fragment** (`#part2`): a marked spot inside the page (not a saved bookmark in your browser). It tells the browser which part of the page to show. MDN says it "is never sent to the server". Only your browser uses it.

Most URLs you see have only some of these parts. `https://example.com` has only a scheme and a domain name.

### Capital letters

In the domain name lesson, you saw that capital letters do not matter in a domain name. One official standard for URLs says the same about the scheme. For the other parts, they **can** matter: it says these parts "are assumed to be case-sensitive". Case-sensitive means that capital and small letters count as different. So `/Page` and `/page` may lead to different resources.

## How it came to be

You do not need to remember these names and dates. Tim Berners-Lee wrote the first proposal for the web in March 1989. The first web page address was `http://info.cern.ch/hypertext/WWW/TheProject.html`.

At first, these addresses were called **UDIs**: Universal Document Identifiers. In June 1994, Berners-Lee described how the web writes these addresses in RFC 1630. (An **RFC** is a public document that describes how a part of the internet works.) RFC 1630 also uses a wider name, **URI** (then "Universal", today "Uniform" Resource Identifier): a URL is one kind of URI. In December 1994, RFC 1738 defined "Uniform Resource Locators" (URLs) as a standard. Berners-Lee was one of its three editors. A later standard, RFC 3986 from January 2005, describes the general form of these addresses.

Berners-Lee later wrote about the `//` after the scheme. He copied the idea from Apollo, a brand of computer, which wrote `//` before a computer's name in its file names. He wrote that the two slashes could have been left out, and: "I have to say that now I regret that the syntax is so clumsy." (Syntax means the way something is written. Clumsy means awkward.)

## 🧪 Try it in your browser

These steps only open web pages and change nothing. They also work on a phone. Type or paste each URL in the address bar and press `Enter`.

1. Type `https://en.wikipedia.org/w/index.php?search=keyboard&fulltext=1`. **What you should see:** a Wikipedia page with the heading "Search results", listing articles about keyboards. The parameter `search=keyboard` told the server what to search for. (Leave the other parameter, `fulltext=1`, as it is. It is one of Wikipedia's own rules.)
2. Click in the address bar, change only the word `keyboard` to `mouse`, and press `Enter`. **What you should see:** search results for "mouse". You changed one value, and the server sent a different page.
3. Type `https://en.wikipedia.org/wiki/URL#History`. **What you should see:** the Wikipedia article about URLs, opened at the section called **History**, not at the top. The fragment told your browser where to go inside the page.
4. Type `https://example.com:443/`. **What you should see:** the same short "Example Domain" page as `https://example.com/`. 443 is the usual port for HTTPS, so writing it changes nothing. Your browser may even remove `:443` from the address bar. Some browsers also hide the `https://` part there.

## Common misunderstandings

- **"A URL and a domain name are the same thing."** No. The domain name is one part of a URL. The URL also has the scheme and, often, a path and more.
- **"The path is a real folder and file in the server's storage."** Not always. In the early web it often was. Today, the server decides what each path means.
- **"Capital letters never matter in a web address."** They can matter after the domain name.

## Recap

- A URL is the full address of one resource on the web: a page, a picture, a video and more.
- Its parts: scheme (`https`), domain name, an optional port, an optional path, optional parameters after `?`, and an optional fragment after `#`.
- The browser uses the scheme, domain name and port to reach the server, and sends it the path and parameters. The fragment stays in your browser. You will follow every step in [[what-happens-when-you-type-a-url]].

## Sources

- MDN Web Docs, What is a URL?: https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL
- MDN Web Docs, URL (glossary): https://developer.mozilla.org/en-US/docs/Glossary/URL
- MDN Web Docs, World Wide Web (glossary): https://developer.mozilla.org/en-US/docs/Glossary/World_Wide_Web
- MDN Web Docs, HTTPS (glossary): https://developer.mozilla.org/en-US/docs/Glossary/HTTPS
- MDN Web Docs, DNS (glossary): https://developer.mozilla.org/en-US/docs/Glossary/DNS
- MDN Web Docs, Encryption (glossary): https://developer.mozilla.org/en-US/docs/Glossary/Encryption
- MDN Web Docs, HTTP (glossary): https://developer.mozilla.org/en-US/docs/Glossary/HTTP
- RFC 3986, Uniform Resource Identifier (URI): Generic Syntax (2005): https://www.rfc-editor.org/rfc/rfc3986
- RFC 1738, Uniform Resource Locators (URL) (1994): https://www.rfc-editor.org/rfc/rfc1738
- RFC 1630, Universal Resource Identifiers in WWW (1994): https://www.rfc-editor.org/rfc/rfc1630
- Tim Berners-Lee, Frequently asked questions: https://www.w3.org/People/Berners-Lee/FAQ.html
- CERN, A short history of the Web: https://home.cern/science/computing/the-birth-of-the-web/short-history-web/
- Example Domain: https://example.com/
