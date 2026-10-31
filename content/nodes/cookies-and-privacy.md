---
id: cookies-and-privacy
title: "Cookies and Privacy"
type: concept
part: network
status: published
requires: [http, web-browser]
related: [https, browser-devtools]
summary: "A cookie is a small piece of data that a website sends to your browser and that your browser sends back with later requests, so the website can remember you; the same idea also lets some companies follow you across websites."
read_minutes: 6
questions:
  - what is a cookie on a website
  - why do websites ask me to accept cookies
  - how does a website remember that I am logged in
  - what is a third-party cookie
  - can cookies track me
  - how can I see the cookies a website saved
aliases: [cookie, cookies, http cookie, web cookie, browser cookie, third-party cookie, first-party cookie, tracking cookie, session cookie, Set-Cookie, cookie banner]
sources:
  - title: "MDN Web Docs: Using HTTP cookies"
    url: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies
  - title: "MDN Web Docs: Third-party cookies"
    url: https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/Third-party_cookies
  - title: "RFC 6265, HTTP State Management Mechanism (April 2011)"
    url: https://www.rfc-editor.org/rfc/rfc6265.html
  - title: "RFC 2109, HTTP State Management Mechanism (February 1997)"
    url: https://www.rfc-editor.org/rfc/rfc2109.html
  - title: "Lou Montulli: The reasoning behind Web Cookies (2013)"
    url: https://montulli.blogspot.com/2013/05/the-reasoning-behind-web-cookies.html
  - title: "Guinness World Records: First use of cookies on the internet"
    url: https://www.guinnessworldrecords.com/world-records/106750-first-use-of-cookies-on-the-internet
  - title: "US Federal Trade Commission: How To Protect Your Privacy Online"
    url: https://consumer.ftc.gov/articles/how-protect-your-privacy-online
  - title: "Chrome for Developers: Open Chrome DevTools"
    url: https://developer.chrome.com/docs/devtools/open
  - title: "Chrome for Developers: Application panel overview"
    url: https://developer.chrome.com/docs/devtools/application
  - title: "Chrome for Developers: View, add, edit, and delete cookies"
    url: https://developer.chrome.com/docs/devtools/application/cookies
  - title: "Microsoft Edge DevTools: Overview of DevTools"
    url: https://learn.microsoft.com/en-us/microsoft-edge/devtools/overview
  - title: "Microsoft Edge DevTools: View, edit, and delete cookies"
    url: https://learn.microsoft.com/en-us/microsoft-edge/devtools/storage/cookies
  - title: "Firefox DevTools User Docs: Keyboard shortcuts"
    url: https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html
  - title: "Firefox DevTools User Docs: Storage Inspector"
    url: https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html
  - title: "Firefox DevTools User Docs: Cookies (Storage Inspector)"
    url: https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/cookies/index.html
author: ai
reviewed_by: ai
reviewed_at: 2026-10-31
updated: 2026-10-31
---

> **In one sentence:** A cookie is a small piece of data that a website sends to your browser and that your browser sends back with later requests, so the website can remember you; the same idea also lets some companies follow you across websites.

## Why should I care?

You sign in to a website, open another page, and you are still signed in. Cookies make this work.

You have also seen messages like "This website uses cookies". Here you will learn what they mean, so you can choose which cookies to allow.

## Analogy

Think of a **cloakroom ticket** (a coat check). You leave your coat at a counter and get a numbered ticket. Later you show the ticket, and the clerk knows which coat is yours.

A cookie works like that ticket. The website gives your browser a cookie. Your browser shows it again with later requests, so the website knows it is you.

**Where the analogy breaks down:** you decide when to show a ticket. Your browser shows a cookie by itself, and you do not see it. Also, a ticket works at one counter, but a company with content on many websites can receive its cookie on all of them.

## How it actually works

### Why websites need cookies

In [[http|HTTP]], you learned that HTTP is **stateless**: each request stands alone. MDN, a website that documents how the web works, says cookies let websites "remember state information". **State** means what a website needs to remember about you, such as "signed in".

### Set-Cookie and Cookie

A cookie is a **name**, a **value** and a few settings, such as an end date. It is data, not a program. It travels in HTTP headers.

1. The server answers a request and adds a `Set-Cookie` header. It holds the cookie.
2. Your [[web-browser|browser]] stores the cookie on your computer.
3. With later requests to the same website, your browser adds a `Cookie` header with the stored cookies.

*Diagram: a server response with the header Set-Cookie: id=a3fWa, then the browser's next request with the header Cookie: id=a3fWa.*

```
SERVER'S RESPONSE                 HTTP/1.1 200 OK
                                  Set-Cookie: id=a3fWa      <- "keep this"

BROWSER'S NEXT REQUEST            GET /next-page HTTP/1.1
                                  Cookie: id=a3fWa          <- "here it is again"
```

### Signing in

MDN describes how signing in uses a cookie. You type your password once. If it is correct, the server sends a cookie with a **session ID**: a code that means "this browser is signed in". Your browser sends it back with later requests. The server checks it and shows you your own pages.

So a session ID works like a key. MDN warns that a criminal who steals one can pretend to be you and take control of your account.

### How long a cookie lives

A cookie with an end date is a **permanent cookie**: the browser deletes it after that date. A cookie with no end date is a **session cookie**. MDN says the browser deletes it when the "current session" ends, and each browser decides when that is.

### What websites use cookies for

MDN lists three main uses: **session management** (signing in, shopping carts), **personalization** (settings such as language or color theme), and **tracking** (recording and studying what users do).

### Third-party cookies and tracking

A web page can contain content from other websites, such as an advert. That content can also send cookies. A **first-party cookie** comes from the website in your address bar. A **third-party cookie** comes from a different website.

MDN explains the privacy problem. Imagine one advert company with adverts on many websites. Each advert is loaded from the company's server. So on each website, your browser sends the company a request, with its cookie, unless your browser's protections stop this (see below). The company then sees the same browser on all those websites. MDN says it can build "a detailed profile" (a description) of your browsing history and interests.

MDN also lists honest uses, such as staying signed in on several websites that belong together.

### What you can control

- **Laws.** MDN names laws such as the GDPR in the European Union. Such rules can require websites to tell you they use cookies, and to let you refuse some or all of them. So a cookie notice often asks you which cookies the website may use. The US Federal Trade Commission (FTC) says these notices may let you allow "only cookies that are necessary for the site to function".
- **Browsers.** MDN says Firefox and Safari turn on protections against third-party cookies by default. When this was written (October 2026), MDN said Chrome does not block them by default, except in Incognito mode.

## How it came to be

Lou Montulli worked at Netscape, a company that made a web browser. He wrote that in 1994, websites lacked a way "to identify a user individually". Around July 1994, he went to a meeting about a shopping server that needed a shopping cart.

Guinness World Records says cookies were first used on 13 October 1994, on Netscape's website, to see if a visitor was new or had come before. RFC 2109 (February 1997), a technical document by D. Kristol and L. Montulli, described cookies. The current standard is RFC 6265 (April 2011).

Montulli later wrote: "Tracking across websites was certainly not what cookies were designed to do."

## 🧪 Try it in your browser

You need a computer with Chrome, Edge or Firefox. These steps only look at cookies. They change nothing.

1. Open a website that you visit often.
2. Open the cookie viewer:
   These are the same developer tools you used in HTTP.
   - **Chrome or Edge:** press `Ctrl` + `Shift` + `I` (Mac: `Cmd` + `Option` + `I`). Click **Application** in the bar at the top. If you do not see it, click **More panels** (two arrows, `»`, in Chrome) or **More tools** (in Edge), and choose **Application**.
   - **Firefox:** press `Shift` + `F9`. The **Storage** panel opens.
3. On the left, find **Cookies** (Chrome and Edge: in the **Storage** section). Click the small arrow next to it. Then click the website address under it that matches your address bar. Other addresses may belong to content from other websites.
4. **What you should see:** a table, one cookie per row. Look at the **Name** and **Value** columns. Many values look like random letters and numbers.
5. Look at the **Expires / Max-Age** column (the end date). You may need to scroll sideways. A date means a permanent cookie. **Session** means a session cookie.
6. If the table is empty, try another website. Close the tools with the **X** button when you are done.

**Be careful:** these tools can also change and delete cookies, so do not double-click a box in the table or click any delete or clear button. Do not share a picture of this table: a value might be a session ID.

## Common misunderstandings

- **"A cookie is a program that runs on my computer."** No. A cookie is a small piece of data.
- **"All cookies are bad."** No. Cookies keep you signed in. The worry is tracking.
- **"Private browsing makes me invisible."** No. The FTC says private browsing "doesn't block websites from seeing your online activity".

## Recap

- A cookie is a small piece of data that a server sends with `Set-Cookie`, and your browser sends back with `Cookie`.
- Cookies keep you signed in, remember settings, and can also track what you do.
- Third-party cookies can follow you across websites. Laws and browsers give you some control.

## Sources

- MDN Web Docs, Using HTTP cookies: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies
- MDN Web Docs, Third-party cookies: https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/Third-party_cookies
- RFC 6265, HTTP State Management Mechanism (April 2011): https://www.rfc-editor.org/rfc/rfc6265.html
- RFC 2109, HTTP State Management Mechanism (February 1997): https://www.rfc-editor.org/rfc/rfc2109.html
- Lou Montulli, The reasoning behind Web Cookies (2013): https://montulli.blogspot.com/2013/05/the-reasoning-behind-web-cookies.html
- Guinness World Records, First use of cookies on the internet: https://www.guinnessworldrecords.com/world-records/106750-first-use-of-cookies-on-the-internet
- US Federal Trade Commission, How To Protect Your Privacy Online: https://consumer.ftc.gov/articles/how-protect-your-privacy-online
- Chrome for Developers, Open Chrome DevTools: https://developer.chrome.com/docs/devtools/open
- Chrome for Developers, Application panel overview: https://developer.chrome.com/docs/devtools/application
- Chrome for Developers, View, add, edit, and delete cookies: https://developer.chrome.com/docs/devtools/application/cookies
- Microsoft Edge DevTools, Overview of DevTools: https://learn.microsoft.com/en-us/microsoft-edge/devtools/overview
- Microsoft Edge DevTools, View, edit, and delete cookies: https://learn.microsoft.com/en-us/microsoft-edge/devtools/storage/cookies
- Firefox DevTools User Docs, Keyboard shortcuts: https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html
- Firefox DevTools User Docs, Storage Inspector: https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html
- Firefox DevTools User Docs, Cookies (Storage Inspector): https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/cookies/index.html
