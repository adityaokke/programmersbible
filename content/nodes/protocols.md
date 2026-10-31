---
id: protocols
title: "Protocols"
type: concept
part: network
status: published
requires: [what-is-a-network]
related: [packets, tcp-ip, http, arpanet]
summary: "A protocol is a set of rules that computers agree on, so they can send messages to each other and understand them."
read_minutes: 6
questions:
  - what is a protocol
  - what is a network protocol
  - why do computers need protocols
  - what does the p in http mean
  - what does 404 mean
  - who makes the rules of the internet
aliases: [protocol, network protocol, communication protocol, protocol stack, protocol suite, RFC, request for comments, status code]
sources:
  - title: "MDN Web Docs: Protocol (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/Protocol
  - title: "Wikipedia: Communication protocol (general background reference)"
    url: https://en.wikipedia.org/wiki/Communication_protocol
  - title: "MDN Web Docs: HTTP (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/HTTP
  - title: "MDN Web Docs: Overview of HTTP"
    url: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview
  - title: "MDN Web Docs: GET (HTTP method)"
    url: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/GET
  - title: "MDN Web Docs: Host (HTTP header)"
    url: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Host
  - title: "MDN Web Docs: What is a URL?"
    url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL
  - title: "MDN Web Docs: Content-Type (HTTP header)"
    url: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Type
  - title: "MDN Web Docs: HTTP response status codes"
    url: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
  - title: "MDN Web Docs: HTTPS (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/HTTPS
  - title: "MDN Web Docs: Hypertext (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/Hypertext
  - title: "MDN Web Docs: QUIC (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/QUIC
  - title: "MDN Web Docs: TCP (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/TCP
  - title: "MDN Web Docs: IP Address (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/IP_Address
  - title: "IETF: RFCs"
    url: https://www.ietf.org/process/rfcs/
  - title: "Internet Society: A Brief History of the Internet (Leiner, Cerf, Clark, Kahn, Kleinrock, Lynch, Postel, Roberts, Wolff)"
    url: https://www.internetsociety.org/internet/history-internet/brief-history-internet/
  - title: "Chrome for Developers: Inspect network activity"
    url: https://developer.chrome.com/docs/devtools/network
  - title: "Chrome for Developers: Network features reference"
    url: https://developer.chrome.com/docs/devtools/network/reference
  - title: "Microsoft Edge DevTools: Inspect network activity"
    url: https://learn.microsoft.com/en-us/microsoft-edge/devtools/network/
  - title: "Microsoft Edge DevTools, Console overview"
    url: https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/
  - title: "Firefox DevTools User Docs: Network Monitor"
    url: https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html
  - title: "Firefox DevTools User Docs: Network request list"
    url: https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html
author: ai
reviewed_by: ai
reviewed_at: 2026-10-31
updated: 2026-10-31
---

> **In one sentence:** A protocol is a set of rules that computers agree on, so they can send messages to each other and understand them.

## Why should I care?

Look at a full web address, such as `https://developer.mozilla.org`. The first part, `https`, contains the letter **P**. It stands for **protocol**: a set of rules your browser and a website use to talk.

Every time you open a page, your device follows many protocols at once. Without them, two connected computers would not understand each other.

## Analogy

Think of a **phone call**. You and the other person follow rules without thinking about them:

1. One person says "Hello", and the other answers.
2. You take turns to speak, in the same language.
3. If you do not hear something, you say "Sorry, can you repeat that?"
4. You say "Goodbye" before you end the call.

A protocol is a set of rules like this, for computers.

**Where the analogy breaks down:** people can guess. If a friend answers the phone in a strange way, you still understand. Computers do not understand a message the way a person does. Each message has an exact meaning, and both sides must agree on the rules first. Also, the protocols of the internet are written down in exact detail, in public documents.

## How it actually works

### What a protocol says

In [[what-is-a-network]], you saw that a network connects devices. A connection is not enough. The devices must also agree on the format of the information they send. MDN, a website that documents how the web works, calls the set of rules that defines that format a **protocol**.

One encyclopedia says a protocol sets the rules for:

- the **form** of each message (where each part goes),
- the **meaning** of each message,
- the **timing**: when messages are sent,
- and ways to **recover from errors**.

### An example: asking for a web page

Your browser uses a protocol called **HTTP** (HyperText Transfer Protocol) to ask for a web page. (**Hypertext** is text with links to other texts. **HTTPS** is an encrypted, secure version of HTTP.) The computer that stores the page and sends it out is called a **server**.

Like a phone call, it is a question and an answer. MDN shows an example. The browser sends a **request**, a message that asks for something:

*Diagram: the first two lines of an HTTP request. The first line asks for the page at the path /. The second line names the server.*

```
GET / HTTP/1.1
Host: developer.mozilla.org
... (more lines)
```

- `GET /` asks for the page at the path `/`. A **path** says which page or file on the server you want. `/` means the top, or root, of the server.
- `HTTP/1.1` names the version of the protocol.
- `Host:` names the server the request is going to: here, the website developer.mozilla.org.

The server sends back a **response**. Here are two of its lines:

*Diagram: two lines from an HTTP response. The first line says the request succeeded. The second line says what kind of content follows.*

```
HTTP/1.1 200 OK
Content-Type: text/html
... (more lines, then the page itself)
```

The number **200** is a **status code**. It means "the request succeeded". `Content-Type: text/html` says what kind of content follows: a web page. Another status code you may know is **404**. It means the server cannot find the page or file you asked for.

Both sides know these rules before they start. That is why they understand each other.

### Protocols work in layers

Several protocols work together, each with its own job. They are stacked in **layers**, and each layer relies on the one below it. When you open a web page:

*Diagram: three protocols stacked in layers. HTTP is on top, TCP is in the middle, IP is at the bottom, and below them is the network of cables and radio waves.*

```
+-------------------------------------------------+
| HTTP: what the browser and the server say       |
+-------------------------------------------------+
| TCP:  all the pieces arrive, without errors,    |
|       and in the right order                    |
+-------------------------------------------------+
| IP:   addresses that name each device           |
+-------------------------------------------------+
| the network: cables and radio waves             |
+-------------------------------------------------+
```

- **HTTP** is on top. It is usually sent over TCP. (A newer version, HTTP/3, uses a different protocol instead of TCP.)
- **TCP** (Transmission Control Protocol) makes sure the data arrives "reliably" and "error-free", in the same order as it was sent. The data travels in small pieces called [[packets]].
- **IP** (Internet Protocol) uses a number for each device, called an [[ip-address|IP address]], so data can be sent to the right device.

(This is simplified. There are more layers and many more protocols. You will meet TCP and IP again in [[tcp-ip]].)

## How it came to be

[[arpanet|ARPANET]] was an early computer network. In 1969, S. Crocker, then at UCLA, started a series of notes called **Request for Comments**, or **RFC**.

In December 1970, a group led by S. Crocker finished the first protocol for ARPANET computers to talk to each other. It was called the Network Control Protocol (NCP). On January 1, 1983, the ARPANET changed from NCP to TCP/IP (TCP and IP together). All computers on it had to change at the same time.

Today, an organization called the **IETF** (Internet Engineering Task Force) publishes the internet's official protocol rules, called **standards**, as RFCs. Once published, they are free for anyone to read.

## 🧪 Try it in your browser

You will see a status code that a server sends back. You need a computer with a keyboard. These steps change nothing.

1. In Chrome, Edge or Firefox, open this link, a page that does not exist: [developer.mozilla.org/en-US/this-page-does-not-exist](https://developer.mozilla.org/en-US/this-page-does-not-exist). You should see a page with the words "Page not found".
2. Open the network tool:
   - **Chrome and Edge:** press `Ctrl` + `Shift` + `J` (Mac: `Cmd` + `Option` + `J`). A panel of developer tools opens in the browser window, showing a part called the Console. Click the tab named **Network**. In Edge, if you do not see it, click the **More tools** button and choose **Network**.
   - **Firefox:** press `Ctrl` + `Shift` + `E` (Mac: `Cmd` + `Option` + `E`).
3. The list is empty at first. The tool only records while it is open. Reload the page with the browser's reload button.
4. Rows appear. Each row is one request: one file the browser asked for. A page is often made of many files, such as pictures. The first row is usually the page itself.
5. Find the column named **Status**. In the first row, it shows **404**: "not found".
6. Look at the other rows. Many of them show **200**: those files were found. You may also see other numbers. That is normal.
7. When you are done, close the browser tab with the "Page not found" page.

**On a phone:** open the same link. The "Page not found" message is how the website shows you the 404 status code.

## Common misunderstandings

- **"A protocol is a program."** No. A protocol is a set of rules. Programs, such as your browser, follow those rules.
- **"The internet uses one protocol."** No. Many protocols work together in layers.
- **"A cable is enough for two computers to talk."** No. A cable only carries the signal. Both computers must also follow the same protocol to understand the messages.

## Recap

- A protocol is a set of rules for messages: their form, their meaning, when to send them and what to do when something goes wrong.
- Protocols work in layers. For a web page, HTTP usually runs over TCP, and TCP runs over IP.
- Internet protocols are written down in public documents called RFCs, a series that started in 1969.

## Sources

- MDN Web Docs, Protocol (glossary): https://developer.mozilla.org/en-US/docs/Glossary/Protocol
- Wikipedia, Communication protocol (general background reference): https://en.wikipedia.org/wiki/Communication_protocol
- MDN Web Docs, HTTP (glossary): https://developer.mozilla.org/en-US/docs/Glossary/HTTP
- MDN Web Docs, Overview of HTTP: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview
- MDN Web Docs, GET (HTTP method): https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/GET
- MDN Web Docs, Host (HTTP header): https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Host
- MDN Web Docs, What is a URL?: https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL
- MDN Web Docs, Content-Type (HTTP header): https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Type
- MDN Web Docs, HTTP response status codes: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
- MDN Web Docs, HTTPS (glossary): https://developer.mozilla.org/en-US/docs/Glossary/HTTPS
- MDN Web Docs, Hypertext (glossary): https://developer.mozilla.org/en-US/docs/Glossary/Hypertext
- MDN Web Docs, QUIC (glossary): https://developer.mozilla.org/en-US/docs/Glossary/QUIC
- MDN Web Docs, TCP (glossary): https://developer.mozilla.org/en-US/docs/Glossary/TCP
- MDN Web Docs, IP Address (glossary): https://developer.mozilla.org/en-US/docs/Glossary/IP_Address
- IETF, RFCs: https://www.ietf.org/process/rfcs/
- Internet Society, A Brief History of the Internet: https://www.internetsociety.org/internet/history-internet/brief-history-internet/
- Chrome for Developers, Inspect network activity: https://developer.chrome.com/docs/devtools/network
- Chrome for Developers, Network features reference: https://developer.chrome.com/docs/devtools/network/reference
- Microsoft Edge DevTools, Inspect network activity: https://learn.microsoft.com/en-us/microsoft-edge/devtools/network/
- Microsoft Edge DevTools, Console overview: https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/
- Firefox DevTools User Docs, Network Monitor: https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html
- Firefox DevTools User Docs, Network request list: https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html
