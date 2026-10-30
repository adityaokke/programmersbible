---
id: client-and-server
title: "Client and Server"
type: concept
part: network
status: published
requires: [what-is-a-network]
related: [server, http, web-browser, world-wide-web]
summary: "On a network, a client is a program that asks for something, and a server is a program that waits for requests and answers them."
read_minutes: 6
questions:
  - what is a client and a server
  - what is the client-server model
  - what is the difference between a client and a server
  - is my browser a client
  - can a computer be a client and a server at the same time
  - who starts the conversation, the client or the server
aliases: [client, clients, client-server, client-server model, client–server model, request and response, peer-to-peer]
sources:
  - title: "MDN Web Docs: How the web works"
    url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works
  - title: "MDN Web Docs: Server (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/Server
  - title: "MDN Web Docs: World Wide Web (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/World_Wide_Web
  - title: "MDN Web Docs: HTTP"
    url: https://developer.mozilla.org/en-US/docs/Web/HTTP
  - title: "MDN Web Docs: 404 Not Found"
    url: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/404
  - title: "RFC 9110, HTTP Semantics (section 3.3, Connections, Clients, and Servers)"
    url: https://www.rfc-editor.org/rfc/rfc9110.html
  - title: "RFC 5, DEL (Jeff Rulifson, June 1969)"
    url: https://www.rfc-editor.org/rfc/rfc5.html
  - title: "Wikipedia: Client–server model (general background reference)"
    url: https://en.wikipedia.org/wiki/Client%E2%80%93server_model
  - title: "RFC Editor (home page)"
    url: https://www.rfc-editor.org/
  - title: "Wikipedia: Help:Random article"
    url: https://en.wikipedia.org/wiki/Help:Random_article
  - title: "MediaWiki: Help:Random page"
    url: https://www.mediawiki.org/wiki/Help:Random_page
  - title: "MediaWiki (about the software)"
    url: https://www.mediawiki.org/wiki/MediaWiki
  - title: "MDN Web Docs: Redirections in HTTP"
    url: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Redirections
  - title: "Computer History Museum, Revolution: The Xerox Alto"
    url: https://www.computerhistory.org/revolution/input-output/14/347
author: ai
reviewed_by: ai
reviewed_at: 2026-10-31
updated: 2026-10-31
---

> **In one sentence:** On a network, a client is a program that asks for something, and a server is a program that waits for requests and answers them.

## Why should I care?

You have used clients and servers many times today. Your web browser is a client. When you open a web page, your browser asks another computer for it. A program on that computer, the server, answers by sending the page.

The same pattern is behind much of what you do on a [[what-is-a-network|network]]. Wikipedia's article on the client–server model names email and the [[world-wide-web|World Wide Web]] (a system of connected web pages that you reach through the internet) as examples. When you build a website, you will put it on a server, and your visitors' browsers will be the clients.

## Analogy

Think of the **help desk in a library**.

- You walk to the desk and **ask** for a book. You are like the **client**.
- The librarian **waits** at the desk for people to come. When you ask, the librarian looks for the book and **gives you an answer**: the book, or "sorry, we do not have it". The librarian is like the **server**.
- You always speak first. The librarian does not call you at home to offer books.

**Where the analogy breaks down:** a librarian lends you the book itself, and you must bring it back. A server sends you a **copy** of the information and keeps the original, so many people can get the same page. A server can also answer many clients at almost the same time. And "client" and "server" are not people. They are **roles**: jobs that programs do.

## How it actually works

A **client** is a program that asks for something. A **server** is a program that offers something and answers. The question is called a **request**, and the answer is called a **response**.

Here is what happens, step by step:

1. **The server waits.** A server program runs on a computer and waits for requests. The Wikipedia article says that clients start the communication, and servers wait for requests to come in.
2. **The client sends a request.** For example, your browser sends a message that asks for one web page. (How your browser finds the right computer is a later topic: [[dns]].)
3. **The server looks for the answer.** For example, it looks for the page in its storage.
4. **The server sends a response.** If it has the page, it sends a copy. MDN, a website that documents how the web works, says the client gets a copy of the page from the server. If the server cannot find the page, it says so. You may have seen this as a "404 Not Found" page. MDN explains that this means the server cannot find what was asked for.
5. **The client uses the response.** Your browser shows the page on your screen.

*Diagram: on the left, a client (your browser). On the right, a server program on another computer. An arrow from left to right is labelled "1. request: please send this page". An arrow from right to left is labelled "2. response: here is a copy". The network is between them.*

```
   CLIENT                                      SERVER
 (your browser)                         (a program on another
                                          computer, waiting)

     │      1. request: "please send this page"     │
     │ ───────────────────────────────────────────► │
     │                                               │
     │      2. response: "here is a copy"           │
     │ ◄─────────────────────────────────────────── │
                      (the network)
```

**One server, many clients.** The Wikipedia article says a server may get requests from many different clients in a short time.

**Programs, not computers.** The words client and server describe **programs**. Browsers and web servers talk to each other with a set of rules called [[http|HTTP]]. The official description of HTTP says this clearly. A client is a program that contacts a server to send requests. A server is a program that accepts this contact and sends responses. It also says: "The same program might act as a client on some connections and a server on others." For example, a program might answer requests from browsers, and at the same time ask another server for something it needs.

People also use the word "server" for the computer that runs a server program. MDN calls this a **hardware server**: a shared computer on a network, usually a powerful one. You will learn more about these computers in [[server]].

(This is simplified. Requests and responses follow shared rules, called [[protocols]].)

## How it came to be

The idea is older than the web. In 1969, researchers building [[arpanet|ARPANET]], the early computer network you read about before, used the words "server-host" and "user-host" for the two sides. A **host** is a computer on the network. One example is RFC 5, written by Jeff Rulifson in June 1969. (**RFCs** are documents that describe how computer networks and the internet work.)

The word "client" came later. The Wikipedia article says that an early use of it was in a 1978 paper (a written research report). Its writers were three computer scientists at Xerox PARC (Palo Alto Research Center): Howard Sturgis, James Mitchell and Jay Israel.

## 🧪 Try it in your browser

You will act as a client and see the server's answers. This works on a computer or a phone. It only looks. It changes nothing.

1. Click this link: [en.wikipedia.org/wiki/Special:Random](https://en.wikipedia.org/wiki/Special:Random).
2. Wait for the page to appear. Note the title of the article. On a computer, the address at the top has changed to that article's address.
3. Come back to this page. On a computer, use your browser's **Back** button, or close the new tab if one opened. On a phone, use your phone's usual way to go back.
4. Click the same link again.

**What you should see:** each time, a Wikipedia article appears. The two articles are most likely different. Wikipedia's help pages say this link is used "to access a random article". Wikipedia runs on a program called MediaWiki. Its help pages add: "Users will be redirected to the selection." (**Redirected** means sent on to another address.)

**What happened:** your browser, the client, sent the same request twice, to the same address. The request did not say which article to send. Wikipedia picked an article and answered with a redirect: "go to this article instead". MDN explains that a server sends this kind of response, and the browser then loads the new address. So the client asks, and the server decides what to send back.

## Common misunderstandings

- **"A server is a special kind of computer."** Not necessarily. A server is a program that answers requests. People also call the computer that runs it a server, and those computers are usually powerful. But the Wikipedia article says that client and server "may be on the same device".
- **"The server sends me pages whenever it wants."** No. In the client–server way of working, the client starts. The server waits and answers.
- **"Every network works with clients and servers."** No. In another design, called **peer-to-peer**, the computers are equals, called **peers**. The Wikipedia article says that "peers communicate with each other directly".

## Recap

- A client is a program that sends a request. A server is a program that waits for requests and sends responses.
- The client starts the conversation. The server decides what to answer, and one server can answer many clients.
- Client and server are roles. The same program can be a client in one connection and a server in another.

## Sources

- MDN Web Docs, How the web works: https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works
- MDN Web Docs, Server (glossary): https://developer.mozilla.org/en-US/docs/Glossary/Server
- MDN Web Docs, World Wide Web (glossary): https://developer.mozilla.org/en-US/docs/Glossary/World_Wide_Web
- MDN Web Docs, HTTP: https://developer.mozilla.org/en-US/docs/Web/HTTP
- MDN Web Docs, 404 Not Found: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/404
- RFC 9110, HTTP Semantics, section 3.3: https://www.rfc-editor.org/rfc/rfc9110.html
- RFC 5, DEL (Jeff Rulifson, June 1969): https://www.rfc-editor.org/rfc/rfc5.html
- Wikipedia, Client–server model: https://en.wikipedia.org/wiki/Client%E2%80%93server_model
- RFC Editor: https://www.rfc-editor.org/
- Wikipedia, Help:Random article: https://en.wikipedia.org/wiki/Help:Random_article
- MediaWiki, Help:Random page: https://www.mediawiki.org/wiki/Help:Random_page
- MediaWiki: https://www.mediawiki.org/wiki/MediaWiki
- MDN Web Docs, Redirections in HTTP: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Redirections
- Computer History Museum, Revolution: https://www.computerhistory.org/revolution/input-output/14/347
