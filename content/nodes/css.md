---
id: css
title: "CSS: Appearance"
type: concept
part: web
status: published
requires: [html]
related: [web-browser, browser-devtools, javascript]
summary: "CSS (Cascading Style Sheets) is the language that tells the browser how the parts of a web page should look: their colors, their sizes and where they go."
read_minutes: 6
questions:
  - what is css
  - what is the difference between html and css
  - what does cascading mean in css
  - how does css work
  - what is a css rule
  - who invented css
aliases: [CSS, Cascading Style Sheets, style sheet, stylesheet, CSS rule, selector, declaration, property, cascade, browser default styles]
sources:
  - title: "MDN Web Docs: CSS (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/CSS
  - title: "MDN Web Docs: What is CSS?"
    url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/What_is_CSS
  - title: "MDN Web Docs: Getting started with CSS"
    url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started
  - title: "MDN Web Docs: Handling conflicts"
    url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts
  - title: "MDN Web Docs: How browsers load websites"
    url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites
  - title: "MDN Web Docs: How the web works"
    url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works
  - title: "MDN Web Docs: Element (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/Element
  - title: "W3C: A brief history of CSS until 2016 (Bert Bos)"
    url: https://www.w3.org/Style/CSS20/history.html
  - title: "Håkon W Lie: Cascading HTML Style Sheets, a proposal (10 Oct 1994)"
    url: https://www.w3.org/People/howcome/p/cascade.html
  - title: "W3C: Cascading Style Sheets, level 1 (W3C Recommendation 17 Dec 1996)"
    url: https://www.w3.org/TR/CSS1/
  - title: "W3C: About us"
    url: https://www.w3.org/about/
  - title: "W3C: Standards"
    url: https://www.w3.org/standards/
  - title: "CERN: A short history of the Web"
    url: https://home.cern/science/computing/the-birth-of-the-web/short-history-web/
  - title: "CERN: The World Wide Web project (preserved early web page)"
    url: https://info.cern.ch/hypertext/WWW/TheProject.html
  - title: "Chrome for Developers: Get started viewing and changing CSS"
    url: https://developer.chrome.com/docs/devtools/css
  - title: "Chrome for Developers: CSS features reference"
    url: https://developer.chrome.com/docs/devtools/css/reference
  - title: "Microsoft Edge DevTools: Get started viewing and changing CSS"
    url: https://learn.microsoft.com/en-us/microsoft-edge/devtools/css/
  - title: "Firefox DevTools User Docs: Examine and edit CSS"
    url: https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html
  - title: "Firefox DevTools User Docs: Keyboard shortcuts"
    url: https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html
author: ai
reviewed_by: ai
reviewed_at: 2026-10-31
updated: 2026-10-31
---

> **In one sentence:** CSS (Cascading Style Sheets) is the language that tells the browser how the parts of a web page should look: their colors, their sizes and where they go.

## Why should I care?

Every website has its own look: its colors, its fonts. MDN (a website about how the web works) describes CSS as a language that "controls how webpages look in the browser".

MDN also says websites are built mainly from three languages. [[html|HTML]] gives the content and its structure. CSS files give "styling and layout information". JavaScript makes the page react when you click or type.

## Analogy

Think of a **house**. The walls and rooms are the structure: a kitchen, a bedroom, a door. That is the job of HTML. The paint and the curtains are the look. That is the job of CSS. You can repaint without moving a wall.

**Where the analogy breaks down:** one CSS file can style many pages at the same time. Also, CSS can do more than paint: it can arrange the parts of a page, for example into several columns.

## How it actually works

### The parts of a page

An HTML page is made of **elements**. MDN says "An element is a part of a webpage": for example, a heading, a paragraph or a link. A heading element is written like this: `<h1>World Wide Web</h1>`. The `h1` is the element's name.

### A CSS rule

CSS is made of **rules**. A set of CSS rules is called a **style sheet**, and it is often kept in its own file. MDN says a rule names some elements and then gives them styles. Here is a rule that makes every `h1` heading red:

*Diagram: one CSS rule, with labels. The selector `h1` chooses which elements to style. Inside the curly braces is one declaration: the property `color` and the value `red`, separated by a colon and ended with a semicolon.*

```
  selector      property   value
     │             │         │
     ▼             ▼         ▼
     h1     {    color   :  red ;    }
            └──────── declaration ────┘
```

- The **selector** (`h1`) chooses the elements. MDN says it "selects the HTML elements that we are going to style".
- Inside the curly braces `{ }` are one or more **declarations**. Each declaration is a **property** and a **value**.
- The **property** is what you want to change, such as `color` (the text color) or `background-color`.
- The **value** is what you change it to, such as `red`.

### Where CSS lives

Usually, CSS is written in its own file, with a name that ends in `.css`. The HTML page then points to that file with one line, like this: `<link rel="stylesheet" href="styles.css" />`. Here, `rel="stylesheet"` tells the browser that the file is a style sheet, and `href` says where to find it. When the browser reads this line, it asks the server for the CSS file too. MDN notes that "You can link a single CSS file to multiple web pages". So one change in that file can change the look of a whole website.

### Default styles

Even a page with no CSS has some style, because browsers have their own **default styles**: MDN describes them as "very basic styling" that makes sure the page "will be readable". For example, MDN says that by default, "Headings will look larger than regular text", and links "are colored and underlined".

### What "cascading" means

Many rules can try to style the same element. Look at this style sheet:

*Diagram: two CSS rules for the same `h1` element. The first makes it red, the second makes it blue.*

```
h1 { color: red; }
h1 { color: blue; }
```

Which one wins? MDN says that "Cascading" refers to the rules the browser uses to decide this. Both rules choose elements in the same way, so the later one wins: MDN says "the one that is defined last in the stylesheet is the one that will be used." The heading is blue. (This is simplified. There are more rules. For example, a selector that chooses elements more exactly usually wins over a more general one.)

## How it came to be

Bert Bos, one of the creators of CSS, wrote its history for W3C (the World Wide Web Consortium). W3C is an international non-profit organization that creates web standards. Bos describes the web in 1994 like this: "There is no way to style documents." HTML did not let page authors choose fonts or colors.

On 10 October 1994, Håkon Wium Lie published a proposal called **Cascading HTML Style Sheets**. He was working at CERN, where the web was invented. Bos, who was building his own browser, responded to the proposal and decided to work with him.

Their idea was that several wishes about how a page looks must be put together: those of the author who wrote it, those of the reader, and also what the browser and the screen can do. Bos writes that "their wishes had to be combined, or cascaded, in some way". That is where the word "cascading" comes from.

In December 1996, CSS level 1 became a **W3C Recommendation**. W3C says its Recommendations "are considered web standards".

## 🧪 Try it in your browser

You need a computer with Chrome, Edge or Firefox. Your change affects only your own copy of the page.

1. Open this early CERN web page: [info.cern.ch/hypertext/WWW/TheProject.html](https://info.cern.ch/hypertext/WWW/TheProject.html).
   **What you should see:** a big heading, **World Wide Web**. This page has no CSS of its own, so you are seeing the browser's default styles.
2. Right-click the heading. Choose **Inspect** (in Firefox, it may say **Inspect Element**).
   **What you should see:** a panel opens, called DevTools (developer tools). One line is highlighted. It contains `h1` (in small or capital letters).
3. In the DevTools panel, below or beside the code, find the styles area. The box at its top holds styles for this one element only.
   - **Chrome and Edge:** it is the **Styles** tab. Near the top, you see `element.style {` and a closing `}` (maybe on the next line). Click between the two curly braces.
   - **Firefox:** it is the **Rules** view. At the top, you see `element {` and a closing `}`. Click the line with the closing brace `}`.

   **What you should see:** a small text box where you can type.
4. Type `color` and press `Enter` (in Firefox, you can also press `Tab`). Then type `red` and press `Enter`. (If a list of suggestions appears, check that your word is highlighted.)
   **What you should see:** the heading **World Wide Web** turns red. You wrote one CSS declaration: the property `color` with the value `red`.
5. Load the page again: click the address bar and press `Enter`.
   **What you should see:** the heading is no longer red. Firefox's documentation says: "reloading the page will restore the original styling."
6. Close DevTools with the **X** (Close) button at the top of the DevTools panel (not the X on the browser tab).

## Common misunderstandings

- **"Without CSS, a page has no style at all."** Not quite. Browsers add their own default styles, so headings are larger and links are underlined. CSS changes or adds to those styles.
- **"If I change the CSS in DevTools, I change the website for everyone."** No. You change only your own copy. Firefox's documentation says: "Any changes you make are temporary".

## Recap

- CSS is the language for the look of a web page: colors, sizes and layout. HTML gives the structure, and CSS gives the appearance.
- A CSS rule has a selector (which elements) and declarations, such as `color: red`.
- "Cascading" means the browser combines many rules and decides which one wins. Håkon Wium Lie proposed CSS in 1994.

## Sources

- MDN Web Docs, CSS (glossary): https://developer.mozilla.org/en-US/docs/Glossary/CSS
- MDN Web Docs, What is CSS?: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/What_is_CSS
- MDN Web Docs, Getting started with CSS: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started
- MDN Web Docs, Handling conflicts: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts
- MDN Web Docs, How browsers load websites: https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites
- MDN Web Docs, How the web works: https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works
- MDN Web Docs, Element (glossary): https://developer.mozilla.org/en-US/docs/Glossary/Element
- W3C, A brief history of CSS until 2016 (Bert Bos): https://www.w3.org/Style/CSS20/history.html
- Håkon W Lie, Cascading HTML Style Sheets, a proposal (1994): https://www.w3.org/People/howcome/p/cascade.html
- W3C, Cascading Style Sheets, level 1: https://www.w3.org/TR/CSS1/
- W3C, About us: https://www.w3.org/about/
- W3C, Standards: https://www.w3.org/standards/
- CERN, A short history of the Web: https://home.cern/science/computing/the-birth-of-the-web/short-history-web/
- CERN, The World Wide Web project (preserved early web page): https://info.cern.ch/hypertext/WWW/TheProject.html
- Chrome for Developers, Get started viewing and changing CSS: https://developer.chrome.com/docs/devtools/css
- Chrome for Developers, CSS features reference: https://developer.chrome.com/docs/devtools/css/reference
- Microsoft Edge DevTools, Get started viewing and changing CSS: https://learn.microsoft.com/en-us/microsoft-edge/devtools/css/
- Firefox DevTools User Docs, Examine and edit CSS: https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html
- Firefox DevTools User Docs, Keyboard shortcuts: https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html
