---
id: images-as-numbers
title: "Images as Numbers"
type: concept
part: machine
status: published
requires: [byte]
related: [text-as-numbers, sound-as-numbers, data-size-units]
year: 1957
summary: "A digital image is a grid of tiny colored squares called pixels, and each pixel's color is stored as numbers, usually three numbers for red, green and blue."
read_minutes: 6
questions:
  - how are images stored in a computer
  - what is a pixel
  - what is rgb
  - how does a computer store colors
  - why can a computer show 16 million colors
  - what was the first digital image
aliases: [pixel, pixels, rgb, rgb color, digital image, color as numbers, colour as numbers]
sources:
  - title: "Stanford CS101: Image Introduction"
    url: https://web.stanford.edu/class/cs101/image-1-introduction.html
  - title: "Wikipedia: RGB color model (general background reference)"
    url: https://en.wikipedia.org/wiki/RGB_color_model
  - title: "MDN Web Docs: rgb()"
    url: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb
  - title: "MDN Web Docs: ImageData"
    url: https://developer.mozilla.org/en-US/docs/Web/API/ImageData
  - title: "MDN Web Docs: Image file type and format guide"
    url: https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types
  - title: "NIST: Fiftieth Anniversary of First Digital Image Marked (2007)"
    url: https://www.nist.gov/news-events/news/2007/05/fiftieth-anniversary-first-digital-image-marked
  - title: "MDN Web Docs: console (Styling console output)"
    url: https://developer.mozilla.org/en-US/docs/Web/API/console
  - title: "Chrome for Developers: Format and style messages in the Console"
    url: https://developer.chrome.com/docs/devtools/console/format-style
  - title: "Microsoft Edge DevTools: Log messages in the Console tool"
    url: https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/console-log
  - title: "Chrome for Developers: Open Chrome DevTools"
    url: https://developer.chrome.com/docs/devtools/open
  - title: "Firefox DevTools User Docs: Web Console"
    url: https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html
  - title: "Chrome for Developers: Console features reference (Up Arrow history)"
    url: https://developer.chrome.com/docs/devtools/console/reference
  - title: "Microsoft Edge DevTools: Console features reference (Up Arrow history)"
    url: https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/reference
  - title: "Firefox DevTools User Docs: Keyboard shortcuts (command history)"
    url: https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html
  - title: "Chrome for Developers: Self-XSS protection (paste warning in the console)"
    url: https://developer.chrome.com/blog/self-xss
author: ai
reviewed_by: ai
reviewed_at: 2026-10-31
updated: 2026-10-31
---

> **In one sentence:** A digital image is a grid of tiny colored squares called pixels, and each pixel's color is stored as numbers, usually three numbers for red, green and blue.

## Why should I care?

Every photo on your phone, every picture on a web page and what you see on this screen now are all stored as numbers. A computer can only store bits, grouped into [[byte|bytes]]. So a picture has to be turned into numbers first.

This explains why photos have a size in bytes, and why a picture can show small squares when you zoom in very far.

## Analogy

Think of a **mosaic**: a picture made of many small tiles, each tile one color. Up close, you see separate squares. From further away, the squares look like one picture.

A digital image works the same way. The tiles are called **pixels**. Now imagine that, instead of painting each tile, you write down its color as numbers. That is what a computer does.

**Where the analogy breaks down:** a real tile is an object you can touch. A computer stores no tiles, only the numbers. Also, paint comes in endless shades. A pixel can only have one of a limited (though very large) number of colors.

## How it actually works

### A grid of pixels

A digital image is a grid of **pixels**. Each pixel is a small square of one color. The pixels are arranged in rows and columns, so every pixel has a position in the grid. An image that is 800 pixels wide and 600 pixels high has 800 × 600 = 480,000 pixels.

### Colors made of light

How do you describe a color with numbers? Screens make colors by mixing **red, green and blue light**. This is called **RGB**. On a screen, each pixel is really three tiny lights close together: red, green and blue. Each of the three lights usually gets a number from **0 to 255**:

- 0 means that light is turned off.
- 255 means that light is at its maximum brightness.

Some colors and their numbers:

| Color | Red | Green | Blue |
|---|---|---|---|
| red | 255 | 0 | 0 |
| yellow | 255 | 255 | 0 |
| dark yellow | 100 | 100 | 0 |
| purple | 255 | 0 | 255 |
| white | 255 | 255 | 255 |
| black | 0 | 0 | 0 |

Yellow is full red light plus full green light. Light mixes differently from paint. With light, all three at full brightness give white, and all three turned off give black.

### One byte per color

Does 0 to 255 look familiar? It is exactly the range of one byte. Today, each color (red, green or blue) usually gets **8 bits**, which is one byte. So one pixel uses **3 bytes**.

With 256 possible values for each of the three lights, there are 256 × 256 × 256 = **16,777,216** possible colors.

### Putting it together

Here is a tiny image, 2 pixels wide and 2 pixels high, written as numbers:

```
row 1:  [255, 0, 0]      [255, 255, 0]
row 2:  [0, 0, 0]        [255, 255, 255]
```

Each pair of square brackets is one pixel: red, green, blue. This image is red and yellow on top, black and white below.

Before any compression (see below), the computer can keep these 12 numbers in one long list, as 12 bytes. The list usually goes row by row, from the top-left pixel to the bottom-right one. The computer also keeps the width and height of the image, so it knows where each row ends.

The 800 × 600 image above has 480,000 pixels. At 3 bytes each, that is 1,440,000 bytes: about 1.4 million.

### Making files smaller

To save space, common image files, such as PNG and JPEG, are **compressed**: the numbers are written in a shorter form. There are two kinds of compression:

- **Lossless** compression makes the file smaller and gives back exactly the original numbers. **PNG** image files work this way.
- **Lossy** compression throws away some of the image data, to make the file much smaller. The picture is then no longer exactly the original. **JPEG** image files work this way.

(This is simplified. Some images also store a fourth number for each pixel, which says how see-through, or **transparent**, it is.)

## How it came to be

In **1957**, at the US National Bureau of Standards (today called the National Institute of Standards and Technology, or NIST), **Russell Kirsch** and his colleagues built a scanner with a rotating drum (a turning cylinder) for a computer called **SEAC**. A scanner reads a paper picture and turns it into numbers.

The first image they scanned was a photo of Kirsch's three-month-old son, **Walden**. It was black and white, and only **176 pixels** on each side. NIST calls it the first digital image made on a computer.

## 🧪 Try it in your browser

You will type three numbers and see the color they make. You will use the **console**, the tool you met in [[counting-systems]].

**Safety rule:** only type instructions in the console that you understand or that come from a source you trust. Never paste anything a stranger sends you. The instruction on this page is safe: it only shows a colored message. You do not need to understand the words in the code yet.

1. In Chrome, Edge or Firefox, open any ordinary web page, for example `https://example.com`.
2. Open the console:
   - **Windows:** press `Ctrl` + `Shift` + `J` (in Firefox: `Ctrl` + `Shift` + `K`)
   - **Mac:** press `Cmd` + `Option` + `J` (in Firefox: `Cmd` + `Option` + `K`)
3. You may see some messages already. Click the empty line at the bottom.
4. **Type** this line yourself (some browsers block pasting in the console), then press `Enter`:

   ```
   console.log("%cHello", "background: rgb(255, 0, 0); font-size: 40px")
   ```

   If the browser adds a bracket or a quote mark by itself while you type, make sure the line still looks exactly like the one above.

5. You should see the word **Hello** in large letters on a **red** background. Other words may also appear. That is normal.
6. Press the `↑` (up arrow) key. The same line comes back. Move inside it with the `←` and `→` keys. Change only the three numbers inside `rgb( )` to `255, 255, 0`, then press `Enter`. The background is now **yellow**: red light plus green light.
7. Try `100, 100, 0` (dark yellow), `255, 255, 255` (white) and `0, 0, 0` (black). With white or black, the word may be hard to see: the text can be the same color as the background. That is expected. Then try your own numbers between 0 and 255.
8. When you are done, close the tab.

**On a phone:** on paper, draw 2 × 2 squares and write three numbers for each square's color.

## Common misunderstandings

- **"The computer stores the picture itself."** No. It stores numbers: how wide and high the image is, and the color numbers of each pixel.
- **"Mixing red and green gives brown, like paint."** Not with light. Red light plus green light gives yellow. With light, all three colors at full brightness give white.
- **"More pixels always means a bigger file."** Not always. More pixels means more numbers, but compression changes the file size a lot. The number of pixels alone does not tell you the file size.

## Recap

- A digital image is a grid of pixels, each one small square of one color.
- Each color is usually three numbers for red, green and blue light, each from 0 to 255: one byte each, 3 bytes per pixel.
- NIST calls a 1957 scan by Russell Kirsch's team the first digital image made on a computer: a photo of his baby son, 176 pixels on each side.

## Sources

- Stanford CS101, Image Introduction: https://web.stanford.edu/class/cs101/image-1-introduction.html
- Wikipedia, RGB color model (general background reference): https://en.wikipedia.org/wiki/RGB_color_model
- MDN Web Docs, rgb(): https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb
- MDN Web Docs, ImageData: https://developer.mozilla.org/en-US/docs/Web/API/ImageData
- MDN Web Docs, Image file type and format guide: https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types
- NIST, Fiftieth Anniversary of First Digital Image Marked: https://www.nist.gov/news-events/news/2007/05/fiftieth-anniversary-first-digital-image-marked
- MDN Web Docs, console (Styling console output): https://developer.mozilla.org/en-US/docs/Web/API/console
- Chrome for Developers, Format and style messages in the Console: https://developer.chrome.com/docs/devtools/console/format-style
- Microsoft Edge DevTools, Log messages in the Console tool: https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/console-log
- Chrome for Developers, Open Chrome DevTools: https://developer.chrome.com/docs/devtools/open
- Firefox DevTools User Docs, Web Console: https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html
- Chrome for Developers, Console features reference: https://developer.chrome.com/docs/devtools/console/reference
- Microsoft Edge DevTools, Console features reference: https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/reference
- Firefox DevTools User Docs, Keyboard shortcuts: https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html
- Chrome for Developers, Self-XSS protection: https://developer.chrome.com/blog/self-xss
