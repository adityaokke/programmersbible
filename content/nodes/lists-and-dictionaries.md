---
id: lists-and-dictionaries
title: "Lists and Dictionaries: Keeping Many Values"
type: concept
part: code
status: published
requires: [variables]
related: [javascript, programming-languages]
summary: "A list keeps many values in order and finds them by position number. A dictionary keeps values under names called keys."
read_minutes: 6
questions:
  - what is an array in programming
  - why do arrays start at 0
  - what is a dictionary in programming
  - what is the difference between a list and a dictionary
  - what is a method in javascript
  - why can I change an array declared with const
aliases: [list, array, index, length, push, method, dictionary, object, key, key-value pair, associative array, dict, slice, map]
sources:
  - title: "MDN Web Docs: Arrays"
    url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Arrays
  - title: "MDN Web Docs: Array"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  - title: "MDN Web Docs: Array.prototype.push()"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
  - title: "MDN Web Docs: JavaScript object basics"
    url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Object_basics
  - title: "MDN Web Docs: Working with objects"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects
  - title: "MDN Web Docs: Property accessors"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
  - title: "MDN Web Docs: Object initializer"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
  - title: "MDN Web Docs: console"
    url: https://developer.mozilla.org/en-US/docs/Web/API/Window/console
  - title: "MDN Web Docs: const"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
  - title: "MDN Web Docs: TypeError: invalid assignment to const"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_const_assignment
  - title: "MDN Web Docs: ReferenceError: x is not defined"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined
  - title: "MDN Web Docs: Storing the information you need — Variables"
    url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables
  - title: "MDN Web Docs: console.log()"
    url: https://developer.mozilla.org/en-US/docs/Web/API/console/log_static
  - title: "MDN Web Docs: Assignment (=)"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment
  - title: "MDN Web Docs: eval()"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
  - title: "MDN Web Docs: About MDN"
    url: https://developer.mozilla.org/en-US/about
  - title: "Python documentation: An Informal Introduction to Python"
    url: https://docs.python.org/3/tutorial/introduction.html
  - title: "Python documentation: Data Structures"
    url: https://docs.python.org/3/tutorial/datastructures.html
  - title: "The Go Programming Language Specification"
    url: https://go.dev/ref/spec
  - title: "Wikipedia: Associative array"
    url: https://en.wikipedia.org/wiki/Associative_array
  - title: "Oracle: FORTRAN 77 Language Reference, Arrays"
    url: https://docs.oracle.com/cd/E19957-01/805-4939/6j4m0vn6r/index.html
  - title: "Wikipedia: Zero-based numbering"
    url: https://en.wikipedia.org/wiki/Zero-based_numbering
  - title: "Edsger W. Dijkstra: Why numbering should start at zero (EWD 831)"
    url: https://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD831.html
  - title: "Microsoft Edge DevTools: Run JavaScript in the Console"
    url: https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/console-javascript
  - title: "Chrome for Developers: Open Chrome DevTools"
    url: https://developer.chrome.com/docs/devtools/open
  - title: "Microsoft Edge DevTools: Keyboard shortcuts"
    url: https://learn.microsoft.com/en-us/microsoft-edge/devtools/shortcuts/
  - title: "Firefox DevTools User Docs: Web Console"
    url: https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html
  - title: "Chrome for Developers: What are self-XSS attacks?"
    url: https://developer.chrome.com/blog/self-xss
  - title: "Example Domain"
    url: https://example.com
author: ai
reviewed_by: ai
reviewed_at: 2026-11-07
updated: 2026-11-07
---

> **In one sentence:** A list keeps many values in order and finds them by position number. A dictionary keeps values under names called keys.

## Why should I care?

In [[variables|Variables]], one name held one value. Now imagine a game with 100 players. With one variable per score, you would need 100 names. A list needs one name for all the scores.

Sometimes position does not help. To find Sam's score, you want to ask for "Sam", and not for "player number 57". A dictionary lets you do that.

## Analogy

Think of a wall of mailboxes in a post office. One row has numbers on its boxes: 0, 1, 2. That row is a list. Another row has names on its boxes. That row is a dictionary.

**Where the analogy breaks down:** a real mailbox can hold many letters, but each place in a list or dictionary holds one value.

## How it actually works

### A list: many values, in order

[[javascript|JavaScript]] calls a list an **array**. You write it with square brackets, and commas between the items. The whole array counts as one value, so one variable can hold it.

Each item has an **index**: its position number. The first item has index 0, the second has index 1, and so on. To read an item, write the array's name, then the index in square brackets.

```js
// An array of three strings.
const fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]);     // Shows: apple
console.log(fruits[2]);     // Shows: cherry
// .length tells you how many items there are.
console.log(fruits.length); // Shows: 3
// There is no item at index 3.
console.log(fruits[3]);     // Shows: undefined
```

The last index is the length minus 1. Reading an index with no item gives the value `undefined`, not an error. Here `undefined` is the value you asked for: that item does not exist.

### `.push` and methods

A **method** is a named action that belongs to a value. You write the value, a dot, the method's name, then round brackets around whatever it needs. You have used one already: `console` is a value, and `log` is one of its methods. (This is simplified.)

The method `.push` adds an item to the end of an array. It also gives back the new length. The word `.length` has no round brackets, because it is not an action.

```js
const fruits = ["apple", "banana"];
// Add one item to the end.
fruits.push("cherry");
// Give the item at index 0 a new value.
fruits[0] = "mango";

console.log(fruits.length); // Shows: 3
console.log(fruits[2]);     // Shows: cherry
console.log(fruits[0]);     // Shows: mango
```

### `const` keeps the name, not the contents

Look again: `fruits` was made with `const`, and its contents still changed. The topic "Variables" promised to show you this. `const` stops you from assigning a new value to the name. `fruits[0] = "mango"` is allowed, because it changes an item, not the name.

```js
const scores = [10, 20];
// Allowed: this changes the contents of the same array.
scores.push(30);
console.log(scores.length); // Shows: 3

// Not allowed: this assigns a new array to the name.
// This line stops with an error.
scores = [1, 2];
```

MDN Web Docs, a website that documents web technologies, says `const` does "not mean the value it holds is immutable". (Immutable means it cannot change.)

### A dictionary: values under names

A **dictionary** keeps pairs. Each pair has a **key**, which is a name, and a value. JavaScript uses a kind of value called an **object** for this. Curly brackets create it: the key, a colon, then the value, with commas between pairs. A dot or square brackets read from it.

```js
const ages = { Mira: 30, Sam: 25 };

// With a dot.
console.log(ages.Mira);    // Shows: 30
// In square brackets, with a string.
console.log(ages["Sam"]);  // Shows: 25

// In square brackets, with a variable that holds the key.
const person = "Sam";
console.log(ages[person]); // Shows: 25

// Change a value, and add a new pair.
ages.Mira = 31;
ages.Zoe = 40;
console.log(ages.Mira);    // Shows: 31
console.log(ages.Zoe);     // Shows: 40

// There is no key called Ann.
console.log(ages.Ann);     // Shows: undefined
```

`Mira` has no quote marks in `{ Mira: 30 }` or `ages.Mira`. In these two places, the word is the key's name, and JavaScript does not read it as a variable. Inside square brackets, JavaScript does read a word without quote marks as a variable name. So `ages["Sam"]` needs its quote marks, and `ages[person]` reads the variable `person`.

MDN says the dot is generally preferred. Use square brackets when a variable holds the key.

`ages.Mira = 31` is allowed under `const`, because it changes a value inside, not the name. `=` adds the key if it does not exist. If you write one key twice inside the curly brackets, the second value overwrites the first.

A missing key gives `undefined`, as a missing index does. A missing variable is different: it gives an error message with the word `ReferenceError`.

(This is simplified. In some languages, a key can be a number or another kind of value.)

This diagram shows `fruits` from the first example and `ages` as they start, before any changes:

```mermaid
flowchart TD
  accTitle: An array and a dictionary
  accDescr: The starting state, before any changes. The array fruits has three places. Index 0 holds apple, index 1 holds banana and index 2 holds cherry. The dictionary ages has two pairs. The key Mira holds 30 and the key Sam holds 25.
  A[fruits] --> B["Index 0: apple"]
  A --> C["Index 1: banana"]
  A --> D["Index 2: cherry"]
  E[ages] --> F["Key Mira: 30"]
  E --> G["Key Sam: 25"]
```

### Other names in other languages

| Idea | JavaScript | Python | Go |
|---|---|---|---|
| Values in numbered order | array | list | slice |
| Values under keys | object | dictionary (`dict`) | map |

Remember the JavaScript names for now. You can ignore the Python and Go names until you meet those languages. Details differ. In Go, for example, a slice is declared with one type (kind of value) for all its items.

## How it came to be

Not every language starts at 0. Fortran's index numbers start at 1 by default. Wikipedia says Martin Richards designed arrays that start at 0 for his language BCPL, and it cites his 1967 manual.

In a note dated 11 August 1982, Edsger W. Dijkstra argued for starting at 0. With that numbering, he wrote, an item's number equals the number of items before it.

## 🧪 Try it in your browser

You need a computer with Chrome, Edge or Firefox.

**Safety rule:** only type code in the console that you understand or that comes from a source you trust. Never paste anything a stranger sends you. The lines below only create, read and change an array and a dictionary, and show results or an expected error.

1. Open [example.com](https://example.com).
   **What you should see:** a short page of text.
2. Open the **console**:
   - **Windows:** press `Ctrl` + `Shift` + `J` (in Firefox: `Ctrl` + `Shift` + `K`)
   - **Mac:** press `Cmd` + `Option` + `J` (in Firefox: `Cmd` + `Option` + `K`)
3. Click the line where you can type, below any messages. In each step below, **type** the line yourself (some browsers may block pasting at first), then press `Enter`. The browser may show suggestions, and the line may look different while you type. Keep typing.

   ```
   const fruits = ["apple", "banana"]
   ```

   **What you should see:** the console may show `undefined`. As in [[what-is-programming|What is Programming, Really?]], it means there is no result to show, and it is normal.
4. Read the first item:

   ```
   fruits[0]
   ```

   **What you should see:** `apple`. If it has quote marks around it, they mark a string.
5. Read the length:

   ```
   fruits.length
   ```

   **What you should see:** `2`.
6. Add an item:

   ```
   fruits.push("cherry")
   ```

   **What you should see:** `3`, the new length.
7. Read an index with no item:

   ```
   fruits[5]
   ```

   **What you should see:** `undefined`, because that item does not exist.
8. Make a mistake on purpose:

   ```
   fruits = []
   ```

   **What you should see:** an error message with the word `TypeError`. This error is expected, because `fruits` was made with `const`.
9. Check that the array still holds its items:

   ```
   fruits[2]
   ```

   **What you should see:** `cherry`.
10. Create a dictionary:

    ```
    const ages = { Mira: 30, Sam: 25 }
    ```

    **What you should see:** again, the console may show `undefined`.
11. Read with a dot:

    ```
    ages.Mira
    ```

    **What you should see:** `30`.
12. Read with square brackets:

    ```
    ages["Sam"]
    ```

    **What you should see:** `25`.
13. Change a value:

    ```
    ages.Mira = 31
    ```

    **What you should see:** `31`. An assignment has a result: the value that was assigned.
14. Read it again:

    ```
    ages.Mira
    ```

    **What you should see:** `31`.

If you see an error message at any other step, reload the page, delete anything left on the typing line, and start again from step 3.

**On a phone:** suppose `const letters = ["a", "b", "c"]`. Say out loud what `letters[1]` and `letters.length` show. The answers are `b` and `3`.

## Common misunderstandings

- **"An array made with `const` can never change."** No. You can add and change its items.
- **"`ages[Sam]` and `ages["Sam"]` are the same."** No. Without quote marks, JavaScript reads `Sam` as a variable name, and that variable may not exist.

## Recap

- An array keeps values in order. Its indexes start at 0, `.length` gives the number of items, and `.push` adds one to the end.
- A dictionary keeps values under keys. In JavaScript it is an object, read with a dot or square brackets.
- `const` stops you assigning a new value to the name. The contents of an array or object can still change.

## Sources

- MDN Web Docs, Arrays: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Arrays
- MDN Web Docs, Array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
- MDN Web Docs, Array.prototype.push(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
- MDN Web Docs, JavaScript object basics: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Object_basics
- MDN Web Docs, Working with objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects
- MDN Web Docs, Property accessors: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
- MDN Web Docs, Object initializer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
- MDN Web Docs, console: https://developer.mozilla.org/en-US/docs/Web/API/Window/console
- MDN Web Docs, const: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
- MDN Web Docs, TypeError: invalid assignment to const: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_const_assignment
- MDN Web Docs, ReferenceError: x is not defined: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined
- MDN Web Docs, Storing the information you need — Variables: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables
- MDN Web Docs, console.log(): https://developer.mozilla.org/en-US/docs/Web/API/console/log_static
- MDN Web Docs, Assignment (=): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment
- MDN Web Docs, eval(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
- MDN Web Docs, About MDN: https://developer.mozilla.org/en-US/about
- Python documentation, An Informal Introduction to Python: https://docs.python.org/3/tutorial/introduction.html
- Python documentation, Data Structures: https://docs.python.org/3/tutorial/datastructures.html
- The Go Programming Language Specification: https://go.dev/ref/spec
- Wikipedia, Associative array: https://en.wikipedia.org/wiki/Associative_array
- Oracle, FORTRAN 77 Language Reference, Arrays: https://docs.oracle.com/cd/E19957-01/805-4939/6j4m0vn6r/index.html
- Wikipedia, Zero-based numbering: https://en.wikipedia.org/wiki/Zero-based_numbering
- Edsger W. Dijkstra, Why numbering should start at zero (EWD 831): https://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD831.html
- Microsoft Edge DevTools, Run JavaScript in the Console: https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/console-javascript
- Chrome for Developers, Open Chrome DevTools: https://developer.chrome.com/docs/devtools/open
- Microsoft Edge DevTools, Keyboard shortcuts: https://learn.microsoft.com/en-us/microsoft-edge/devtools/shortcuts/
- Firefox DevTools User Docs, Web Console: https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html
- Chrome for Developers, What are self-XSS attacks?: https://developer.chrome.com/blog/self-xss
- Example Domain: https://example.com
