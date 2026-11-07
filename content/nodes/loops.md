---
id: loops
title: "Loops: Doing Something Again"
type: concept
part: code
status: published
requires: [conditions]
related: [babbage-and-lovelace, browser-devtools]
summary: "A loop runs the same block of code again and again, so you write the steps once and the computer repeats them."
read_minutes: 6
questions:
  - what is a loop in programming
  - what is the difference between for and while
  - what is an infinite loop
  - how do I stop an endless loop in my browser
  - what does break do in a loop
  - what does i++ mean
  - how do I write a loop in python
  - does go have a while loop
  - what does range do in python
aliases: [loop, for loop, while loop, iteration, counter, loop counter, infinite loop, endless loop, break, i++, range]
sources:
  - title: "MDN Web Docs: Loops and iteration"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
  - title: "MDN Web Docs: Looping code"
    url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops
  - title: "MDN Web Docs: while"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
  - title: "MDN Web Docs: for"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
  - title: "MDN Web Docs: break"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break
  - title: "MDN Web Docs: console.log()"
    url: https://developer.mozilla.org/en-US/docs/Web/API/console/log_static
  - title: "MDN Web Docs: Increment (++)"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
  - title: "MDN Web Docs: Less than or equal (<=)"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal
  - title: "Wikipedia: Loop (statement)"
    url: https://en.wikipedia.org/wiki/Loop_(statement)
  - title: "MDN Web Docs: About MDN"
    url: https://developer.mozilla.org/en-US/about
  - title: "Computer History Museum: The Babbage Engine, The Engines"
    url: https://www.computerhistory.org/babbage/engines/
  - title: "MDN Web Docs: Decrement (--)"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement
  - title: "MDN Web Docs: eval()"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
  - title: "Chrome for Developers: Run JavaScript in the Console"
    url: https://developer.chrome.com/docs/devtools/console/javascript
  - title: "Microsoft Edge DevTools: Run JavaScript in the Console"
    url: https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/console-javascript
  - title: "Microsoft Edge: What is Chromium?"
    url: https://www.microsoft.com/en-us/edge/learning-center/what-is-chromium-how-does-it-enhance-your-browser
  - title: "Firefox source: aboutProcesses.ftl (Process Manager labels)"
    url: https://searchfox.org/firefox-main/source/toolkit/locales/en-US/toolkit/about/aboutProcesses.ftl
  - title: "Example Domain"
    url: https://example.com
  - title: "Chromium docs: Process Model and Site Isolation"
    url: https://chromium.googlesource.com/chromium/src/+/main/docs/process_model_and_site_isolation.md
  - title: "Google Chrome Help: Manage tabs in Chrome"
    url: https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DDesktop
  - title: "Microsoft Learn: Fix High CPU or memory usage in Microsoft Edge browser"
    url: https://learn.microsoft.com/en-us/troubleshoot/microsoft-edge/performance/edge-high-cpu-memory
  - title: "Firefox 108.0 release notes"
    url: https://www.firefox.com/en-US/firefox/108.0/releasenotes/
  - title: "Chrome for Developers: Open Chrome DevTools"
    url: https://developer.chrome.com/docs/devtools/open
  - title: "Microsoft Edge DevTools: Keyboard shortcuts"
    url: https://learn.microsoft.com/en-us/microsoft-edge/devtools/shortcuts/
  - title: "Firefox DevTools User Docs: Web Console"
    url: https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html
  - title: "Chrome for Developers: What are self-XSS attacks?"
    url: https://developer.chrome.com/blog/self-xss
  - title: "Python Tutorial: An Informal Introduction to Python"
    url: https://docs.python.org/3/tutorial/introduction.html
  - title: "Python Tutorial: More Control Flow Tools"
    url: https://docs.python.org/3/tutorial/controlflow.html
  - title: "Python documentation: Built-in Types (range)"
    url: https://docs.python.org/3/library/stdtypes.html
  - title: "The Go Programming Language: Effective Go"
    url: https://go.dev/doc/effective_go
  - title: "Go Packages: fmt"
    url: https://pkg.go.dev/fmt
  - title: "The Go Programming Language Specification"
    url: https://go.dev/ref/spec
  - title: "Python Language Reference: Compound statements"
    url: https://docs.python.org/3/reference/compound_stmts.html
  - title: "MDN Web Docs: let"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
  - title: "MDN Web Docs: Strict equality (===)"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
  - title: "MDN Web Docs: ARIA tooltip role"
    url: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tooltip_role
  - title: "MDN Web Docs: Block statement"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block
  - title: "MDN Web Docs: Grammar and types"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types
  - title: "Firefox source: aboutProcesses.js (Process Manager rows)"
    url: https://raw.githubusercontent.com/mozilla-firefox/firefox/main/toolkit/components/aboutprocesses/content/aboutProcesses.js
author: ai
reviewed_by: ai
reviewed_at: 2026-11-07
updated: 2026-11-07
---

> **In one sentence:** A loop runs the same block of code again and again, so you write the steps once and the computer repeats them.

## Why should I care?

In [[conditions|Conditions]], your code learned to make a decision once. Now imagine you want to show the numbers from 1 to 5. Without a loop, you write one line for each number: one line to show 1, another to show 2, and so on.

For 1,000 numbers, you would need 1,000 lines.

MDN Web Docs, a website that documents web technologies, says loops are "all about doing the same thing over and over again".

This page shows loops in [[javascript|JavaScript]], [[python|Python]] and [[go-language|Go]].

## Analogy

Imagine washing plates after a meal. Your rule is: **while there is a dirty plate, wash one.** "Is there a dirty plate?" is the condition. Washing one plate is the block. Each wash leaves one dirty plate fewer, and that is what makes the condition false in the end. You do not count the plates, so this fits a loop that only checks a condition.

**Where the analogy breaks down:** a person notices when something is wrong. A computer does not notice. It checks only the condition you wrote.

## How it actually works

### The `while` loop

A `while` loop has a condition and a block, like an `if`. But after the block, an `if` moves on. A `while` goes back and checks the condition again.

You only need to read one tab.

<!-- tabs -->

### JavaScript

```js
let count = 1;            // The counter starts at 1.

while (count <= 5) {      // Before each round, check: is count 5 or less?
  console.log(count);     // Yes: show the counter.
  count = count + 1;      // Add 1 to the counter.
}

console.log("Done");      // The condition is false now, so the program goes on.
```

### Python

Python marks a block with **indentation**: spaces or a tab at the start of a line. Each line in the block must be indented by the same amount. A line that starts a block, such as `while`, `for` or `if`, ends with `:`.

You make a variable by giving it a value with `=`. `print()` shows a value. `#` starts a comment, a note that Python does not run.

```python
count = 1              # The counter starts at 1.

while count <= 5:      # Before each round, check: is count 5 or less?
    print(count)       # Yes: show the counter.
    count = count + 1  # Add 1 to the counter.

print("Done")          # The condition is false now, so the program goes on.
```

### Go

In Go, this loop is written with `for`, Go's only loop word. Go writes the condition directly after `for`, and the block inside `{ }`. This `for` repeats as long as its condition is true.

`count := 1` creates a variable and gives it a value. `:=` works only inside a function. (Simplified: a function is a block of code with a name.) One `=` gives an existing variable a new value.

The lines around the loop are part of the program. `package main` and `func main()` mark where it starts. `import "fmt"` brings in `fmt`, a package with functions for printing, and `fmt.Println` shows a value. `//` starts a comment, a note for people who read the code.

```go
package main

import "fmt"

func main() {
	count := 1 // The counter starts at 1.

	for count <= 5 { // Before each round, check: is count 5 or less?
		fmt.Println(count) // Yes: show the counter.
		count = count + 1  // Add 1 to the counter.
	}

	fmt.Println("Done") // The condition is false now, so the program goes on.
}
```

<!-- /tabs -->

Each program shows:

```
1
2
3
4
5
Done
```

The variable `count` is a **counter**: a variable the loop uses to count its rounds. One run of the block is called an **iteration**. This page calls it a **round**.

When `count` becomes 6, the condition is false. The loop ends, and the program continues after it.

### The `for` loop

To count its rounds, the loop above uses three things: a counter's start, a condition, and a step that changes the counter.

<!-- tabs -->

### JavaScript

A `for` loop puts all three on one line. Inside these brackets, semicolons have a special use: they separate the three parts.

```js
// Start at 1. Keep going while i is 5 or less. Add 1 after each round.
for (let i = 1; i <= 5; i++) {
  console.log(i);         // Show the counter.
}

console.log("Done");      // Runs once, after the loop has finished.
```

Its three parts:

- `let i = 1` runs once, before the loop begins.
- `i <= 5` is checked before each round. If it is false, the loop ends.
- `i++` runs at the end of each round. It adds 1 to `i`.

```mermaid
flowchart TD
  accTitle: The steps of a for loop
  accDescr: The steps of the for loop on this page. First, the counter is set to 1. Then the condition asks if i is 5 or less. If true, the block runs, 1 is added to i, and the condition is checked again. If false, the program goes on after the loop.
  A["Set the counter: let i = 1"] --> B{"Is i 5 or less?"}
  B -->|true| C[Run the block]
  C --> D["Add 1: i++"]
  D --> B
  B -->|false| E[Go on after the loop]
```

### Python

Python's `for` goes through a sequence of values in order, and runs the block once for each value. Here, you do not write a condition, or a step that changes `i`.

`range(1, 6)` gives the numbers 1, 2, 3, 4 and 5. The end number, 6, is never part of the result, so you write 6 to reach 5. Each round, `i` holds the next number.

```python
# Give i each number from 1 to 5, one number per round.
for i in range(1, 6):
    print(i)           # Show the counter.

print("Done")          # Runs once, after the loop has finished.
```

### Go

Go's `for` can hold all three on one line, directly after the word `for`, with semicolons between them.

```go
package main

import "fmt"

func main() {
	// Start at 1. Keep going while i is 5 or less. Add 1 after each round.
	for i := 1; i <= 5; i++ {
		fmt.Println(i) // Show the counter.
	}

	fmt.Println("Done") // Runs once, after the loop has finished.
}
```

Its three parts:

- `i := 1` runs once, before the loop begins.
- `i <= 5` is checked before each round. If it is false, the loop ends.
- `i++` runs at the end of each round. It adds 1 to `i`.

```mermaid
flowchart TD
  accTitle: The steps of a for loop in Go
  accDescr: The steps of the Go for loop on this page. First, the counter is set to 1. Then the condition asks if i is 5 or less. If true, the block runs, 1 is added to i, and the condition is checked again. If false, the program goes on after the loop.
  A["Set the counter: i := 1"] --> B{"Is i 5 or less?"}
  B -->|true| C[Run the block]
  C --> D["Add 1: i++"]
  D --> B
  B -->|false| E[Go on after the loop]
```

<!-- /tabs -->

Each program shows the same six lines.

In [[variables|Variables]], you learned to choose names that describe a value. `i` is an exception: it is a common short name for a counter.

### Endless loops

If the condition never becomes false, the loop keeps going until something outside it stops it (or a `break`, below). Do not run this loop:

<!-- tabs -->

### JavaScript

```js
let count = 1;

while (count <= 5) {      // count stays 1, so this is true every time.
  console.log(count);     // Nothing here changes count.
}
```

MDN warns: "the loop will go on forever, and either the browser will force it to stop, or it will crash".

### Python

```python
count = 1

while count <= 5:   # count stays 1, so this is true every time.
    print(count)    # Nothing here changes count.
```

Python's documentation says a `while` loop runs "as long as the condition" stays true.

### Go

```go
package main

import "fmt"

func main() {
	count := 1

	for count <= 5 { // count stays 1, so this is true every time.
		fmt.Println(count) // Nothing here changes count.
	}
}
```

Go's specification says this form repeats "as long as a boolean condition evaluates to true". A boolean is a true or false value.

<!-- /tabs -->

This is an **infinite loop**, or endless loop. So before you run a loop, ask: what will make this condition false?

If a loop makes a page in your browser stop responding, browsers have a tool that lists their **processes**: running parts of the browser. Ending one has a cost. Chrome's documentation says it "will also cause the current page to fail and all data you have entered will be lost". Other tabs may share that process. Use **End process** here only because the page is already stuck.

- **Chrome:** click the menu with three dots (**More**), then **More tools**, then **Task manager**. Select the page, then click **End process**.
- **Edge:** press `Shift` + `Esc` to open the Browser Task Manager. Select the process for the stuck tab, then select **End process**.
- **Firefox:** Firefox's version 108 release notes say `Shift` + `Esc` opens the **Process Manager**. Find the stuck page in the list. Rest your pointer on the buttons in that row until a small text bubble (a tooltip) says **Close tab**, then click it.

### Leaving early with `break`

Sometimes you want to stop as soon as you have found what you need. The `break` statement ends the loop immediately.

<!-- tabs -->

### JavaScript

```js
for (let i = 1; i <= 100; i++) {   // Planned: 100 rounds.
  if (i === 4) {                   // In the round where i is 4...
    break;                         // ...leave the loop immediately.
  }
  console.log(i);                  // Show the counter.
}

console.log("Stopped");            // The program goes on from here.
```

### Python

Python compares two values with `==`. One `=` gives a variable a value. `range(1, 101)` gives the numbers 1 to 100, because the end number is never part of the result.

```python
for i in range(1, 101):  # Planned: 100 rounds.
    if i == 4:           # In the round where i is 4...
        break            # ...leave the loop immediately.
    print(i)             # Show the counter.

print("Stopped")         # The program goes on from here.
```

### Go

Go compares two values with `==`. Go writes the condition directly after `if`, and the block inside `{ }`.

```go
package main

import "fmt"

func main() {
	for i := 1; i <= 100; i++ { // Planned: 100 rounds.
		if i == 4 { // In the round where i is 4...
			break // ...leave the loop immediately.
		}
		fmt.Println(i) // Show the counter.
	}

	fmt.Println("Stopped") // The program goes on from here.
}
```

<!-- /tabs -->

Each program shows:

```
1
2
3
Stopped
```

4 is missing because `break` runs before the line that shows the counter in that round.

## How it came to be

In 1834, Charles Babbage first thought of the [[babbage-and-lovelace|Analytical Engine]], a design for a programmable machine. The Computer History Museum says the design included "looping (iteration)", "though Babbage nowhere used these terms". The museum also says none of his designs was fully built in his lifetime.

## 🧪 Try it in your browser

These steps use JavaScript, because they run in your browser's console. `let` creates a variable, and `console.log()` shows a value. `i++` adds 1 to `i`. `===` checks whether two values are equal. In a `for` line, `( )` hold the start, the condition and the step, with `;` between them. `{ }` hold the block. `;` also separates statements. You need a computer with Chrome, Edge or Firefox.

**Safety rule:** only type code in the console that you understand or that comes from a source you trust. Never paste anything a stranger sends you. Typed exactly, the lines below only create variables and show numbers in the console.

Type carefully. A typo such as `i--` (which subtracts 1) instead of `i++` can make a loop endless, with no error message. If the tab freezes, see **Endless loops** above.

1. Open [example.com](https://example.com).
   **What you should see:** a short page of text.
2. Open the **console**:
   - **Windows:** press `Ctrl` + `Shift` + `J` (in Firefox: `Ctrl` + `Shift` + `K`)
   - **Mac:** press `Cmd` + `Option` + `J` (in Firefox: `Cmd` + `Option` + `K`)
3. Ignore any messages already there. Click the empty line at the bottom. **Type** this line yourself (some browsers may block pasting at first), then press `Enter`. The browser may show suggestions, and the line may look different while you type. Keep typing.

   ```
   for (let i = 1; i <= 5; i++) { console.log(i); }
   ```

   **What you should see:** the numbers 1 to 5, each on its own line. The console may also show `undefined`.
4. Type this line and press `Enter`:

   ```
   let n = 1;
   ```

   **What you should see:** no numbers. The console may show `undefined`.
5. Type this `while` loop and press `Enter`. It doubles `n` each round.

   ```
   while (n < 100) { n = n + n; console.log(n); }
   ```

   **What you should see:** 2, 4, 8, 16, 32, 64, 128, each on its own line. The console may also show `undefined`. Look at 128: it is more than 100. When `n` was 64, the check said "true", so one more round ran.
6. Type this line and press `Enter`:

   ```
   for (let i = 1; i <= 100; i++) { if (i === 4) { break; } console.log(i); }
   ```

   **What you should see:** 1, 2, 3. The console may also show `undefined`.

If you see an error message, look for a typo. Then click your browser's reload button and start again from step 3.

## Common misunderstandings

- **"A loop stops at the moment its condition becomes false."** No. The loops on this page that have a condition check it only before each round. A round that has started runs to its end, unless something such as `break` ends it. So a round that doubles a number from 64 to 128 still finishes, even if the limit is 100.
- **"The block always runs at least once."** Not in the loops on this page. If `count` starts at 10 in the first loop on this page, the first check is already false. The block never runs, and only `Done` is shown.

## Recap

- A loop repeats a block. The loops on this page that have a condition check it before each round, and end when it is false.
- With `while` (in Go, a `for` with only a condition), any counter is your job. A counting `for` keeps the counting on one line.
- In a loop with a condition, something must make it false, or `break` must end the loop. Otherwise, it runs until something outside stops it.

## Sources

- MDN Web Docs, Loops and iteration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
- MDN Web Docs, Looping code: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops
- MDN Web Docs, while: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
- MDN Web Docs, for: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
- MDN Web Docs, break: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break
- MDN Web Docs, console.log(): https://developer.mozilla.org/en-US/docs/Web/API/console/log_static
- MDN Web Docs, Increment (++): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
- MDN Web Docs, Less than or equal (<=): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal
- Wikipedia, Loop (statement): https://en.wikipedia.org/wiki/Loop_(statement)
- MDN Web Docs, About MDN: https://developer.mozilla.org/en-US/about
- Computer History Museum, The Babbage Engine, The Engines: https://www.computerhistory.org/babbage/engines/
- MDN Web Docs, Decrement (--): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement
- MDN Web Docs, eval(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
- Chrome for Developers, Run JavaScript in the Console: https://developer.chrome.com/docs/devtools/console/javascript
- Microsoft Edge DevTools, Run JavaScript in the Console: https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/console-javascript
- Microsoft Edge, What is Chromium?: https://www.microsoft.com/en-us/edge/learning-center/what-is-chromium-how-does-it-enhance-your-browser
- Firefox source, aboutProcesses.ftl (Process Manager labels): https://searchfox.org/firefox-main/source/toolkit/locales/en-US/toolkit/about/aboutProcesses.ftl
- Example Domain: https://example.com
- Chromium docs, Process Model and Site Isolation: https://chromium.googlesource.com/chromium/src/+/main/docs/process_model_and_site_isolation.md
- Google Chrome Help, Manage tabs in Chrome: https://support.google.com/chrome/answer/2391819?hl=en&co=GENIE.Platform%3DDesktop
- Microsoft Learn, Fix High CPU or memory usage in Microsoft Edge browser: https://learn.microsoft.com/en-us/troubleshoot/microsoft-edge/performance/edge-high-cpu-memory
- Firefox 108.0 release notes: https://www.firefox.com/en-US/firefox/108.0/releasenotes/
- Chrome for Developers, Open Chrome DevTools: https://developer.chrome.com/docs/devtools/open
- Microsoft Edge DevTools, Keyboard shortcuts: https://learn.microsoft.com/en-us/microsoft-edge/devtools/shortcuts/
- Firefox DevTools User Docs, Web Console: https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html
- Chrome for Developers, What are self-XSS attacks?: https://developer.chrome.com/blog/self-xss
- Python Tutorial, An Informal Introduction to Python: https://docs.python.org/3/tutorial/introduction.html
- Python Tutorial, More Control Flow Tools: https://docs.python.org/3/tutorial/controlflow.html
- Python documentation, Built-in Types (range): https://docs.python.org/3/library/stdtypes.html
- The Go Programming Language, Effective Go: https://go.dev/doc/effective_go
- Go Packages, fmt: https://pkg.go.dev/fmt
- The Go Programming Language Specification: https://go.dev/ref/spec
- Python Language Reference, Compound statements: https://docs.python.org/3/reference/compound_stmts.html
- MDN Web Docs, let: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
- MDN Web Docs, Strict equality (===): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
- MDN Web Docs, ARIA tooltip role: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tooltip_role
- MDN Web Docs, Block statement: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block
- MDN Web Docs, Grammar and types: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types
- Firefox source, aboutProcesses.js (Process Manager rows): https://raw.githubusercontent.com/mozilla-firefox/firefox/main/toolkit/components/aboutprocesses/content/aboutProcesses.js
