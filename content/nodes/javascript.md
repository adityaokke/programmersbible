---
id: javascript
title: "JavaScript: Behavior"
type: concept
part: web
status: published
requires: [html]
related: [programming-languages, browser-devtools, css, first-website]
summary: "JavaScript is the programming language that web browsers run to give a page its behavior: it can change the page while you look at it and react when you click or type."
read_minutes: 6
questions:
  - what is javascript
  - what does javascript do on a website
  - what is the difference between html css and javascript
  - is javascript the same as java
  - where does javascript run
  - what is an event in javascript
aliases: [JS, JavaScript, ECMAScript, script, script element, event, event listener, client-side code, JScript]
sources:
  - title: "MDN Web Docs: What is JavaScript?"
    url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript
  - title: "MDN Web Docs: JavaScript (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/JavaScript
  - title: "MDN Web Docs: DOM (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/DOM
  - title: "MDN Web Docs: Introduction to events"
    url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events
  - title: "MDN Web Docs: EventTarget.addEventListener()"
    url: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
  - title: "MDN Web Docs: Document.querySelector()"
    url: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
  - title: "MDN Web Docs: Node.textContent"
    url: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
  - title: "MDN Web Docs: Window.alert()"
    url: https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
  - title: "MDN Web Docs: About MDN"
    url: https://developer.mozilla.org/en-US/about
  - title: "Ecma International: ECMA-262, ECMAScript language specification"
    url: https://ecma-international.org/publications-and-standards/standards/ecma-262/
  - title: "Wikipedia: JavaScript"
    url: https://en.wikipedia.org/wiki/JavaScript
  - title: "CERN: The World Wide Web project (preserved early web page)"
    url: https://info.cern.ch/hypertext/WWW/TheProject.html
  - title: "Chrome for Developers: Open Chrome DevTools"
    url: https://developer.chrome.com/docs/devtools/open
  - title: "Microsoft Edge DevTools: Keyboard shortcuts"
    url: https://learn.microsoft.com/en-us/microsoft-edge/devtools/shortcuts/
  - title: "Firefox DevTools User Docs: Web Console"
    url: https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html
  - title: "Chrome for Developers: What are self-XSS attacks?"
    url: https://developer.chrome.com/blog/self-xss
author: ai
reviewed_by: ai
reviewed_at: 2026-10-31
updated: 2026-10-31
---

> **In one sentence:** JavaScript is the programming language that web browsers run to give a page its behavior: it can change the page while you look at it and react when you click or type.

## Why should I care?

You have probably used JavaScript many times already. MDN Web Docs, a website that documents web technologies, says that when a web page does more than "sit there and display static information", JavaScript is "probably involved". Its examples include content that updates, interactive maps and animated graphics. (Static means it does not change.)

MDN describes the web as built in three layers, each with its own language. [[html|HTML]] gives a page structure: headings, paragraphs, links. [[css|CSS]] gives it appearance: colors, fonts, layout. JavaScript gives it **behavior**: what happens when you click, type or wait. When you build your own website at the end of this course, JavaScript is how you will make it react.

## Analogy

Think of a building. HTML is the rooms and walls. CSS is the paint and the furniture. JavaScript is the **wiring and switches**: press a switch, and a light turns on. Press the doorbell button, and a bell rings inside.

**Where the analogy breaks down:** a building's wiring is fixed when the building is made. JavaScript can do much more. While you stand inside, it can add rooms, remove walls, and even change the paint (the CSS). Also, here the building is your own copy of the page, inside your browser. The JavaScript arrives with it from the server and runs on **your** computer.

## How it actually works

### The code arrives with the page

A piece of JavaScript in a page is often called a **script**. The HTML can contain it inside a `<script>` tag. Or the `<script>` tag can point to a separate JavaScript file, with `src="..."` (like `href` in a link). Either way, the browser downloads it with the page.

MDN calls this **client-side** code: it is "run on the user's computer". The server only sends the code. Your browser runs it.

### An interpreter runs it

In [[programming-languages|Programming Languages]], you learned that an **interpreter** reads code and carries it out step by step. Every major browser contains one for JavaScript. MDN says the browser "receives the JavaScript code in its original text form and runs the script from that", usually "in order, from top to bottom". (As you learned, modern JavaScript interpreters also compile code while it runs, to make it faster.)

Each browser tab has its own separate space for running code. MDN says that in most cases, code in one tab "cannot directly affect the code in another tab". This is a safety measure. Without it, MDN says, attackers could write code "to steal information from other websites".

### It changes the page

When the browser reads the HTML, it builds a model of the page: a map of all its parts, such as headings, paragraphs and text. This map is called the **DOM**. (You do not need to remember what the letters stand for.) Code running in the browser can add, move and change parts of the DOM. When JavaScript changes the DOM, the page on your screen updates. The HTML file the server sent does not change. Only the DOM in your browser does.

### It reacts to events

An **event** is a signal the browser sends when something happens. MDN's examples include a click, a key press, and a page that "finishes loading". JavaScript code can find one part of the page, such as a button, and attach an **event listener** to it: code that waits for one kind of event. When the event happens, the browser runs that code.

*Diagram: the path from your click to a changed page. You click a button. The browser sends a "click" event. The event listener's code runs and changes the DOM. The page on your screen updates, and you see the change.*

```
  you click ──► browser sends ──► the listener's ──► code changes ──► the page on
  a button      a "click" event   code runs          the DOM          your screen updates
```

## How it came to be

**Brendan Eich** created JavaScript in 1995, while he worked for Netscape, the company that made the Netscape Navigator browser. In September 1995, it first shipped in a test (beta) version of Navigator, under the name LiveScript. It was renamed JavaScript that December. In August 1996, the Internet Explorer 3.0 browser added support for it, under the name JScript.

In November 1996, Netscape began working with Ecma International, an organization that publishes standards, to make JavaScript an industry standard: one shared set of rules for the language. The standard version is called **ECMAScript**. Its first edition was published in June 1997. Ecma still publishes new editions: the 17th came out in June 2026.

## 🧪 Try it in your browser

You need a computer with Chrome, Edge or Firefox. Your changes affect only your own copy of the page, and the lines below are safe.

**Safety rule:** only type code in the console that you understand or that comes from a source you trust. Never paste anything a stranger sends you.

1. Open this early CERN web page: [info.cern.ch/hypertext/WWW/TheProject.html](https://info.cern.ch/hypertext/WWW/TheProject.html).
   **What you should see:** a big heading, **World Wide Web**.
2. Open the **console**, the place where you can type JavaScript:
   - **Windows:** press `Ctrl` + `Shift` + `J` (in Firefox: `Ctrl` + `Shift` + `K`)
   - **Mac:** press `Cmd` + `Option` + `J` (in Firefox: `Cmd` + `Option` + `K`)
3. Click the empty line at the bottom. **Type** this line yourself (browsers may block pasting at first), then press `Enter`:

   ```
   document.querySelector("h1").textContent = "Hello from JavaScript!"
   ```

   **What you should see:** the heading on the page now says **Hello from JavaScript!** Here, `document` means the page. `querySelector("h1")` finds the first `h1` heading. `textContent =` replaces its text. While you type, the browser may add a bracket or quote mark by itself, or show a list of suggestions. Keep typing.
4. Now add behavior. Type this line and press `Enter`:

   ```
   document.querySelector("h1").addEventListener("click", function () { alert("You clicked!") })
   ```

   This attaches an event listener to the heading. `"click"` names the event to wait for. `function () { ... }` holds the code to run on each click: `alert` shows a message. The console may show `undefined`, which means "no value to show". That is normal. If you see a red error instead, look for a typo and type the line again.
5. Click the heading on the page.
   **What you should see:** a small box with the words **You clicked!** Click **OK** to close it.
6. Click your browser's reload button.
   **What you should see:** the heading says **World Wide Web** again, and clicking it does nothing. Your JavaScript lived only in your copy of the page.

## Common misunderstandings

- **"JavaScript and Java are the same."** No. The names are alike, and some code looks a little alike. But MDN says the two languages are "significantly different".
- **"If I change a page with JavaScript, everyone sees it."** No. The code runs in your browser, on your copy of the page. The website on the server stays the same.
- **"JavaScript only runs in browsers."** No. It runs mostly in browsers, but MDN says it is "also often used on the server-side": programs such as Node.js run JavaScript on servers, too.

## Recap

- HTML gives a page structure, CSS gives it appearance, and JavaScript gives it behavior.
- The browser downloads JavaScript with the page and runs it on your computer, with its built-in interpreter.
- JavaScript changes the page through the DOM, and event listeners let it react to clicks, key presses and more.

## Sources

- MDN Web Docs, What is JavaScript?: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript
- MDN Web Docs, JavaScript (glossary): https://developer.mozilla.org/en-US/docs/Glossary/JavaScript
- MDN Web Docs, DOM (glossary): https://developer.mozilla.org/en-US/docs/Glossary/DOM
- MDN Web Docs, Introduction to events: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events
- MDN Web Docs, EventTarget.addEventListener(): https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- MDN Web Docs, Document.querySelector(): https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
- MDN Web Docs, Node.textContent: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
- MDN Web Docs, Window.alert(): https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
- MDN Web Docs, About MDN: https://developer.mozilla.org/en-US/about
- Ecma International, ECMA-262: https://ecma-international.org/publications-and-standards/standards/ecma-262/
- Wikipedia, JavaScript: https://en.wikipedia.org/wiki/JavaScript
- CERN, The World Wide Web project: https://info.cern.ch/hypertext/WWW/TheProject.html
- Chrome for Developers, Open Chrome DevTools: https://developer.chrome.com/docs/devtools/open
- Microsoft Edge DevTools, Keyboard shortcuts: https://learn.microsoft.com/en-us/microsoft-edge/devtools/shortcuts/
- Firefox DevTools User Docs, Web Console: https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html
- Chrome for Developers, What are self-XSS attacks?: https://developer.chrome.com/blog/self-xss
