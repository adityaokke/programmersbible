---
id: html
title: "HTML: Structure"
type: concept
part: web
status: published
requires: [what-happens-when-you-type-a-url]
related: [css, javascript, web-browser, browser-devtools, world-wide-web, first-website]
summary: "HTML (HyperText Markup Language) is the language that describes the content and structure of a web page: it marks each part with tags, such as \"this is a heading\", \"this is a paragraph\" or \"this is a link\"."
read_minutes: 6
questions:
  - what is html
  - what does html stand for
  - what are html tags
  - what is an html element
  - how does a browser read html
  - who invented html
aliases: [HTML, HyperText Markup Language, HTML tag, tags, HTML element, elements, attribute, markup, markup language, HTML5, HTML Living Standard, h1, p tag, a tag]
sources:
  - title: "MDN Web Docs: HTML (HyperText Markup Language)"
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
  - title: "MDN Web Docs: HTML (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/HTML
  - title: "MDN Web Docs: Basic HTML syntax"
    url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax
  - title: "MDN Web Docs: The HTML heading elements (h1 to h6)"
    url: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements
  - title: "MDN Web Docs: The anchor element (a)"
    url: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a
  - title: "MDN Web Docs: The unordered list element (ul)"
    url: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul
  - title: "MDN Web Docs: The image embed element (img)"
    url: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img
  - title: "IETF: Introduction to the IETF"
    url: https://www.ietf.org/about/introduction/
  - title: "MDN Web Docs: DOM (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/DOM
  - title: "MDN Web Docs: Populating the page: how browsers work"
    url: https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work
  - title: "Chrome for Developers: Get started viewing and changing the DOM"
    url: https://developer.chrome.com/docs/devtools/dom
  - title: "Firefox DevTools User Docs: Examine and edit HTML"
    url: https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html
  - title: "WHATWG: HTML Living Standard, Parsing (the in body insertion mode)"
    url: https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inbody
  - title: "Microsoft Edge: What is Chromium?"
    url: https://www.microsoft.com/en-us/edge/learning-center/what-is-chromium-how-does-it-enhance-your-browser
  - title: "MDN Web Docs: data: URLs"
    url: https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Schemes/data
  - title: "WHATWG: HTML Living Standard, Introduction (Background and History)"
    url: https://html.spec.whatwg.org/multipage/introduction.html
  - title: "WHATWG: HTML Living Standard, Rendering"
    url: https://html.spec.whatwg.org/multipage/rendering.html
  - title: "Dave Raggett: A history of HTML (W3C)"
    url: https://www.w3.org/People/Raggett/book4/ch02.html
  - title: "WHATWG: FAQ (What does Living Standard mean?)"
    url: https://whatwg.org/faq
  - title: "Mozilla Security Blog: Blocking top-level navigations to data URLs for Firefox 59"
    url: https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/
  - title: "Chrome for Developers: Deprecations and removals in Chrome 60"
    url: https://developer.chrome.com/blog/chrome-60-deprecations
  - title: "Chromium source: blocked_scheme_navigation_throttle.cc"
    url: https://chromium.googlesource.com/chromium/src/+/c46a185e295da40f95c497b5875b95f46bcbb49c/content/browser/renderer_host/blocked_scheme_navigation_throttle.cc
  - title: "Windows Blogs: Microsoft Edge: Making the web better through more open source collaboration (2018)"
    url: https://blogs.windows.com/windowsexperience/2018/12/06/microsoft-edge-making-the-web-better-through-more-open-source-collaboration/
author: ai
reviewed_by: ai
reviewed_at: 2026-10-31
updated: 2026-10-31
---

> **In one sentence:** HTML (HyperText Markup Language) is the language that describes the content and structure of a web page: it marks each part with tags, such as "this is a heading", "this is a paragraph" or "this is a link".

## Why should I care?

In [[what-happens-when-you-type-a-url|What Happens When You Type a URL]], you saw that the first file a server sends is usually an HTML file. Almost every web page you have ever opened started as HTML.

Later in this course, you will build your own website, starting with an HTML file you write yourself.

## Analogy

Imagine you give a friend a page of plain text with small paper labels on it: "title starts here", "title ends here", "this is a list". Your friend reads the labels and knows what each part of the text is.

HTML works like this. The labels are called **tags**, and the browser is the reader. Adding labels like these to text is called **markup**. That is the M in HTML.

**Where the analogy breaks down:** a friend can understand an unclear label. A browser follows exact rules. If you forget an "ends here" label, the browser has to guess, and it may guess differently from what you meant. Also, your friend sees the labels on the paper. On a web page, you do not see the tags. You see only the result.

## How it actually works

### Tags and elements

An HTML file is plain text. Some words in it are **tags**: a name inside angle brackets, `<` and `>`. Here is one line of HTML:

*Diagram: the parts of one HTML element. The line `<p>My cat is very grumpy</p>` is split into three parts: the opening tag `<p>`, the content "My cat is very grumpy", and the closing tag `</p>`. Together, the three parts are one element.*

```
  <p>My cat is very grumpy</p>
  └┬┘└─────────┬──────────┘└┬─┘
   │           │            └── closing tag (with a /)
   │           └── content
   └── opening tag
  └──────────── one element ─────┘
```

The **opening tag** `<p>` says "a paragraph starts here" (`p` is short for paragraph). The **closing tag** `</p>` says "the paragraph ends here". It has a `/` before the name. Between them is the **content**.

Together, these three parts form an **element**: one part of the page. Some elements have only one tag and cannot hold other content, such as `<img>` (a picture).

A few common elements:

- `<h1>` to `<h6>`: six levels of headings. `<h1>` is the highest.
- `<p>`: a paragraph.
- `<ul>` and `<li>`: a list with bullet points (`ul`), and each item in it (`li`).
- `<a>`: a link.

### Attributes: extra information

A tag can carry extra information, called an **attribute**. It is written inside the opening tag, as a name, an equals sign `=`, and a value in quotation marks:

```html
<a href="https://info.cern.ch">Visit CERN</a>
```

The `href` attribute holds the address that the link goes to. The browser shows "Visit CERN" as a link that you can click.

In the same way, `<img src="cat.jpg">` puts a picture on the page. The `src` attribute holds the address of the picture file.

### Elements inside elements

Elements can sit inside other elements. This is called **nesting**. A whole page is nested elements:

*Diagram: a small HTML page and its structure. The html element holds two parts: head and body. Head holds the title, which is shown on the browser tab. Body holds what you see on the page: an h1 heading and a paragraph. The paragraph holds a link.*

```
<!doctype html>
<html>
  <head>
    <title>My page</title>               html
  </head>                                ├── head
  <body>                                 │   └── title
    <h1>Hello</h1>                       └── body
    <p>Visit <a href="...">CERN</a></p>      ├── h1
  </body>                                    └── p
</html>                                          └── a
```

- `<!doctype html>` goes at the very top. MDN says it "needs to be included for everything else to work correctly".
- `<html>` holds everything else.
- `<head>` holds information **about** the page that is not shown in the page itself. For example, `<title>` is the name on the browser tab, not on the page.
- `<body>` holds everything you see on the page.

When the browser reads this file, it builds the structure on the right. It is called a **tree**: one element at the top branches into smaller parts, like a family tree. This tree is called the **DOM** (Document Object Model). The Elements tab of [[browser-devtools|DevTools]] (in Firefox: Inspector) shows it.

### Structure, not looks

HTML says **what** each part is, not exactly how it should look. The browser chooses a default look: the look it uses when you do not choose one. For example, the HTML standard suggests that an `<h1>` heading is bold and twice the normal text size. To choose your own colors, fonts and layout, you use a second language: [[css|CSS]].

## How it came to be

You do not need to remember these names and dates.

In 1990, Tim Berners-Lee at CERN was building the [[world-wide-web|World Wide Web]] around **hypertext**: text with links. The idea of hypertext was not new. Academics had described it as early as the 1940s. His markup for these pages was HTML. It was mainly based on SGML, an older language for marking up documents. In 1991, Berners-Lee wrote down the rules of HTML.

The IETF, a group that develops standards for the internet, released HTML 2.0 in 1995. In 1996, the W3C (World Wide Web Consortium) took over the HTML work. Then the W3C almost stopped working on HTML. So, in 2004, people from Apple, Mozilla and Opera founded a new group, the **WHATWG**, and work on HTML continued. In 2019, the WHATWG and the W3C agreed to work together on a single version of HTML. It is called the **HTML Living Standard**: "living" because it is "continuously updated", says the WHATWG.

## 🧪 Try it in your browser

You will write a tiny web page, with no file. You type the HTML straight into the address bar, after `data:text/html,`. This tells the browser that the page is right inside the address. You need a computer with Chrome, Edge or Firefox. This is safe, and no file is created. (A web page is not allowed to open a `data:` address for you, because such addresses have been used to trick people. When **you** type one, the browser opens it.)

You can type each line or copy and paste it. If the result looks wrong, or your browser searches instead, check that the line starts with `data:text/html,` and try again.

1. Open a new tab. Click the address bar, type this line exactly, and press `Enter`:
   `data:text/html,<h1>Hello</h1><p>This is my first page.</p>`
   **What you should see:** a big, bold **Hello**, and the sentence below it in normal text. You wrote a web page!
2. Click the address bar again. Select all the old text and delete it. Type this new line, and press `Enter`:
   `data:text/html,<h1>Hello</h1><p>I like:</p><ul><li>music</li><li>books</li></ul>`
   **What you should see:** the same heading, then a list with a bullet point before each item.
3. Now make a mistake on purpose. Delete the old text again. Type this line, without the closing tag `</h1>`, and press `Enter`:
   `data:text/html,<h1>Hello<p>This is my first page.</p>`
   **What you should see:** the sentence is now big and bold too. The heading never ended, so the browser had to guess where it stops.

## Common misunderstandings

- **"Tags in capital letters are wrong."** No. Tag names work in capital or small letters: `<H1>` and `<h1>` are the same. Writing them in small letters is the recommended habit.
- **"Extra spaces and empty lines in my HTML will show on the page."** Usually not. In most elements, the browser turns many spaces and line breaks into one space.

## Recap

- HTML is the language for the content and structure of a web page. Almost every page starts as an HTML file.
- An element is an opening tag, content and a closing tag, such as `<p>...</p>`. Attributes like `href` add extra information.
- Elements nest inside each other, and the browser turns them into a tree. HTML gives structure; CSS gives the looks.

## Sources

- MDN Web Docs, HTML (HyperText Markup Language): https://developer.mozilla.org/en-US/docs/Web/HTML
- MDN Web Docs, HTML (glossary): https://developer.mozilla.org/en-US/docs/Glossary/HTML
- MDN Web Docs, Basic HTML syntax: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax
- MDN Web Docs, The HTML heading elements: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements
- MDN Web Docs, The anchor element: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a
- MDN Web Docs, The unordered list element: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul
- MDN Web Docs, The image embed element: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img
- IETF, Introduction to the IETF: https://www.ietf.org/about/introduction/
- MDN Web Docs, DOM (glossary): https://developer.mozilla.org/en-US/docs/Glossary/DOM
- MDN Web Docs, Populating the page: how browsers work: https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work
- Chrome for Developers, Get started viewing and changing the DOM: https://developer.chrome.com/docs/devtools/dom
- Firefox DevTools User Docs, Examine and edit HTML: https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html
- WHATWG, HTML Living Standard, Parsing (the in body insertion mode): https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inbody
- Microsoft Edge, What is Chromium?: https://www.microsoft.com/en-us/edge/learning-center/what-is-chromium-how-does-it-enhance-your-browser
- MDN Web Docs, data: URLs: https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Schemes/data
- WHATWG, HTML Living Standard, Introduction: https://html.spec.whatwg.org/multipage/introduction.html
- WHATWG, HTML Living Standard, Rendering: https://html.spec.whatwg.org/multipage/rendering.html
- Dave Raggett, A history of HTML (W3C): https://www.w3.org/People/Raggett/book4/ch02.html
- WHATWG, FAQ: https://whatwg.org/faq
- Mozilla Security Blog, Blocking top-level navigations to data URLs for Firefox 59: https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/
- Chrome for Developers, Deprecations and removals in Chrome 60: https://developer.chrome.com/blog/chrome-60-deprecations
- Chromium source, blocked_scheme_navigation_throttle.cc: https://chromium.googlesource.com/chromium/src/+/c46a185e295da40f95c497b5875b95f46bcbb49c/content/browser/renderer_host/blocked_scheme_navigation_throttle.cc
- Windows Blogs, Microsoft Edge: Making the web better through more open source collaboration (2018): https://blogs.windows.com/windowsexperience/2018/12/06/microsoft-edge-making-the-web-better-through-more-open-source-collaboration/
