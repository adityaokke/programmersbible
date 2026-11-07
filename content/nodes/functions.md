---
id: functions
title: "Functions: Naming a Block of Code"
type: concept
part: code
status: published
requires: [loops]
related: [javascript, python, go-language, callbacks, errors]
summary: "A function is a block of code that runs when called, and it can take values in and give one value back."
read_minutes: 6
questions:
  - what is a function in programming
  - what is the difference between a parameter and an argument
  - what does return do in javascript
  - why does my function return undefined
  - what does it mean to call a function
  - why can i not use a variable from inside a function
  - what does def mean in python
  - what does func mean in go
aliases: [function, call a function, function call, function definition, parameter, argument, return, return value, local variable, subroutine, def, func]
sources:
  - title: "MDN Web Docs: Functions, reusable blocks of code"
    url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Functions
  - title: "MDN Web Docs: Function return values"
    url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Return_values
  - title: "MDN Web Docs: Functions (JavaScript guide)"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
  - title: "MDN Web Docs: Functions (JavaScript reference)"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
  - title: "MDN Web Docs: return"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
  - title: "MDN Web Docs: Default parameters"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
  - title: "MDN Web Docs: Grouping operator"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping
  - title: "MDN Web Docs: Local variable (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/Local_variable
  - title: "MDN Web Docs: ReferenceError: \"x\" is not defined"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined
  - title: "MDN Web Docs: throw"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
  - title: "MDN Web Docs: Error"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
  - title: "MDN Web Docs: ReferenceError"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError
  - title: "Think Python, 2nd edition: The way of the program"
    url: https://greenteapress.com/thinkpython2/html/thinkpython2002.html
  - title: "MDN Web Docs: console"
    url: https://developer.mozilla.org/en-US/docs/Web/API/console
  - title: "MDN Web Docs: console.log()"
    url: https://developer.mozilla.org/en-US/docs/Web/API/console/log_static
  - title: "MDN Web Docs: Window.alert()"
    url: https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
  - title: "MDN Web Docs: EventTarget.addEventListener()"
    url: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
  - title: "ECMAScript language specification (ECMA-262)"
    url: https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html
  - title: "Wikipedia: Function (computer programming)"
    url: https://en.wikipedia.org/wiki/Function_(computer_programming)
  - title: "Wikipedia: The Preparation of Programs for an Electronic Digital Computer"
    url: https://en.wikipedia.org/wiki/The_Preparation_of_Programs_for_an_Electronic_Digital_Computer
  - title: "Wikipedia: EDSAC"
    url: https://en.wikipedia.org/wiki/EDSAC
  - title: "Wikipedia: Punched tape"
    url: https://en.wikipedia.org/wiki/Punched_tape
  - title: "Wikipedia: V8 (JavaScript engine)"
    url: https://en.wikipedia.org/wiki/V8_(JavaScript_engine)
  - title: "Example Domain (example.com)"
    url: https://example.com/
  - title: "Chrome for Developers: Open Chrome DevTools"
    url: https://developer.chrome.com/docs/devtools/open
  - title: "Chrome for Developers: Run JavaScript in the Console"
    url: https://developer.chrome.com/docs/devtools/console/javascript
  - title: "Microsoft Edge DevTools: Keyboard shortcuts"
    url: https://learn.microsoft.com/en-us/microsoft-edge/devtools/shortcuts/
  - title: "Microsoft Edge DevTools: Run JavaScript in the Console"
    url: https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/console-javascript
  - title: "Firefox DevTools User Docs: Web Console"
    url: https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html
  - title: "Firefox DevTools User Docs: The JavaScript input interpreter"
    url: https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html
  - title: "Chrome for Developers: What are self-XSS attacks?"
    url: https://developer.chrome.com/blog/self-xss
  - title: "Python Tutorial: More Control Flow Tools"
    url: https://docs.python.org/3/tutorial/controlflow.html
  - title: "Python Tutorial: An Informal Introduction to Python"
    url: https://docs.python.org/3/tutorial/introduction.html
  - title: "Python Tutorial: Errors and Exceptions"
    url: https://docs.python.org/3/tutorial/errors.html
  - title: "Python Language Reference: Simple statements"
    url: https://docs.python.org/3/reference/simple_stmts.html
  - title: "Python Language Reference: Expressions"
    url: https://docs.python.org/3/reference/expressions.html
  - title: "Python Language Reference: Execution model"
    url: https://docs.python.org/3/reference/executionmodel.html
  - title: "Python documentation: Programming FAQ"
    url: https://docs.python.org/3/faq/programming.html
  - title: "The Go Programming Language Specification"
    url: https://go.dev/ref/spec
  - title: "The Go Programming Language: Effective Go"
    url: https://go.dev/doc/effective_go
  - title: "Go Packages: fmt"
    url: https://pkg.go.dev/fmt
  - title: "Go Packages: Command go"
    url: https://pkg.go.dev/cmd/go
  - title: "Go Packages: internal/types/errors"
    url: https://pkg.go.dev/internal/types/errors
  - title: "Python Tutorial: Whetting Your Appetite"
    url: https://docs.python.org/3/tutorial/appetite.html
  - title: "Python Language Reference: Compound statements"
    url: https://docs.python.org/3/reference/compound_stmts.html
  - title: "Python documentation: Built-in Constants"
    url: https://docs.python.org/3/library/constants.html
  - title: "MDN Web Docs: const"
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
  - title: "MDN Web Docs: Compile (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/Compile
author: ai
reviewed_by: ai
reviewed_at: 2026-11-07
updated: 2026-11-07
---

> **In one sentence:** A function is a block of code that runs when called, and it can take values in and give one value back.

## Why should I care?

You have used functions already. In [[javascript|JavaScript]], the browser provides `console.log`, which shows a value, and `alert`, so you did not have to write them. When round brackets follow a function's name, as in `console.log("Hi")`, that function is being called, which means run.

In [[loops|Loops]], you repeated code in one place. With a function, you write the code once and give it a name. Then you can run it from many places, without typing it again. To change that code, you change it in one place.

You also saw `function () { ... }` in JavaScript. That function has no name, and the browser called it on each click. On this page, every function has a name.

## Analogy

In [[what-is-programming|What is Programming]], your whole program was a recipe. A function is a smaller recipe inside it, with its own name, such as "make the sauce". The big recipe can say "make the sauce" wherever it needs to.

The ingredient list is like the function's parameters. The real ingredients you bring are like its arguments. The finished sauce is like the value it gives back. Writing the recipe cooks nothing.

**Where the analogy breaks down:** a cook can guess and adapt, but code means exactly what it says. And a recipe always gives you food, while a function may have no value to give back.

## How it actually works

### Define it, then call it

**Defining** a function means writing it down and naming it. **Calling** a function means running it.

The main examples come in JavaScript, [[python|Python]] and [[go-language|Go]]. You only need to read one tab.

<!-- tabs -->

### JavaScript

```js
// Define a function named greet. Nothing runs yet.
function greet() {
  console.log("Hello!"); // this line is the body
}

// Call the function two times. Now the body runs, two times.
greet();
greet();
```

This shows:

```
Hello!
Hello!
```

The word `function` starts the definition. Next comes the name, then round brackets. The code between `{` and `}` is the **body**. To call the function, write its name followed by round brackets. The round brackets in the definition line do not call anything. Round brackets have other uses too, as in `if (...)` and `(2 + 3) * 4`.

### Python

```python
# Define a function named greet. Nothing runs yet.
def greet():
    print("Hello!")  # this line is the body

# Call the function two times. Now the body runs, two times.
greet()
greet()
```

This shows:

```
Hello!
Hello!
```

The word `def` starts the definition. Next comes the name, then round brackets and a colon. A comment in Python starts with `#`, and `print` shows a value.

The lines below the `def` line are the **body**. They must be **indented**, which means moved to the right with spaces. The indentation shows where the body starts and ends.

To call the function, write its name followed by round brackets. The round brackets in the definition line do not call anything.

### Go

```go
// A Go program starts in the package named main.
package main

// Bring in fmt, a package for showing text.
import "fmt"

// Define a function named greet. Nothing runs yet.
func greet() {
	fmt.Println("Hello!") // this line is the body
}

// Go calls the function named main when the program starts.
func main() {
	// Call greet two times. Now its body runs, two times.
	greet()
	greet()
}
```

This shows:

```
Hello!
Hello!
```

The word `func` starts the definition. Next comes the name, then round brackets. The code between `{` and `}` is the **body**. To call the function, write its name followed by round brackets. The round brackets in the definition line do not call anything.

A package is a named group of Go code. `fmt.Println` runs the function `Println` from the package `fmt`, and it shows a value. Go starts a program by calling `main`, so the calls to `greet` go inside `main`.

<!-- /tabs -->

### Parameters and arguments

A function can take values in, so each call can do something a little different. Each example on this page is a separate program.

A **parameter** is a variable listed in the definition. An **argument** is the value you **pass**, which means the value you hand over in the call. With several parameters, separated by commas, the first argument goes to the first parameter, and so on.

<!-- tabs -->

### JavaScript

```js
// name is a parameter: a name for a value that will arrive later.
function greet(name) {
  console.log("Hello, " + name);
}

greet("Ana");  // the argument is "Ana"
greet("Budi"); // the argument is "Budi"
greet();       // no argument, so name is undefined
```

This shows:

```
Hello, Ana
Hello, Budi
Hello, undefined
```

A parameter needs no `let`. For the functions on this page, a parameter with no argument holds `undefined`. (A parameter can also have a default value. This page does not use that.)

### Python

```python
# name is a parameter: a name for a value that will arrive later.
def greet(name):
    print("Hello, " + name)

greet("Ana")   # the argument is "Ana"
greet("Budi")  # the argument is "Budi"
greet()        # no argument, so this call is an error
```

This shows the lines below. Then the program stops with an error message, a `TypeError`.

```
Hello, Ana
Hello, Budi
```

For the functions on this page, each parameter needs an argument. (A parameter can also have a default value, and you can pass an argument by the parameter's name. This page does not use those.)

### Go

```go
package main

import "fmt"

// name is a parameter: a name for a value that will arrive later.
// string says that this value must be a string (text).
func greet(name string) {
	fmt.Println("Hello, " + name)
}

func main() {
	greet("Ana")  // the argument is "Ana"
	greet("Budi") // the argument is "Budi"
}
```

This shows:

```
Hello, Ana
Hello, Budi
```

In Go, each parameter needs a **type**, which says what kind of value it holds. The type comes after the parameter's name.

For the functions on this page, each parameter needs an argument. If you add `greet()` to this program, the compiler, which translates Go code before it runs, reports an error. Then the program does not run.

<!-- /tabs -->

### Giving a value back with return

The word `return` ends the function and gives a value to the code that made the call. That value appears at the place where the call was written.

<!-- tabs -->

### JavaScript

```js
// This function gives a value back to the code that called it.
function add(a, b) {
  return a + b;
}

const total = add(2, 3);  // the call add(2, 3) gives 5
console.log(total);       // shows 5
console.log(add(10, 20)); // shows 30
```

In the last line, `add(10, 20)` runs first and gives 30. Then `console.log` shows that 30.

If a function ends without returning a value, the call gives `undefined`:

```js
// This function shows text, but it has no return.
function sayHi(name) {
  console.log("Hi, " + name);
}

const answer = sayHi("Ana"); // shows Hi, Ana
console.log(answer);         // shows undefined
```

### Python

```python
# This function gives a value back to the code that called it.
def add(a, b):
    return a + b

total = add(2, 3)   # the call add(2, 3) gives 5
print(total)        # shows 5
print(add(10, 20))  # shows 30
```

The line `total = add(2, 3)` creates a variable named `total`. In the last line, `add(10, 20)` runs first and gives 30. Then `print` shows that 30.

If a function ends without returning a value, the call gives `None`. This is a real value in Python, and it stands for "no value here". So a function with nothing to give back still gives this stand-in:

```python
# This function shows text, but it has no return.
def say_hi(name):
    print("Hi, " + name)

answer = say_hi("Ana")  # shows Hi, Ana
print(answer)           # shows None
```

### Go

```go
package main

import "fmt"

// int is the type for whole numbers.
// The int after the brackets says that add gives back an int.
func add(a int, b int) int {
	return a + b
}

func main() {
	total := add(2, 3)       // the call add(2, 3) gives 5
	fmt.Println(total)       // shows 5
	fmt.Println(add(10, 20)) // shows 30
}
```

The sign `:=` creates a new variable and gives it a value. You can use it only inside a function. In the last line, `add(10, 20)` runs first and gives 30. Then `fmt.Println` shows that 30.

A Go function can also give back more than one value. The examples on this page give back one.

If no type comes after the brackets, the function gives no value back. The call has no value, so there is nothing to store:

```go
package main

import "fmt"

// This function shows text. It has no type after its brackets.
func sayHi(name string) {
	fmt.Println("Hi, " + name)
}

func main() {
	sayHi("Ana") // shows Hi, Ana
}
```

<!-- /tabs -->

The call `add(2, 3)`, step by step:

```mermaid
flowchart TD
  accTitle: What happens when you call add(2, 3)
  accDescr: The code calls add with 2 and 3. Inside the function, the parameter a becomes 2 and b becomes 3. The body works out a plus b. Then return gives back 5, and 5 appears at the place where the call was written.
  A["Code calls add(2, 3)"] --> B["a becomes 2, b becomes 3"]
  B --> C["Body works out a + b"]
  C --> D["return gives back 5"]
  D --> E["5 appears where the call was"]
```

Once a `return` runs, the rest of the function does not run:

<!-- tabs -->

### JavaScript

```js
function larger(a, b) {
  if (a > b) {
    return a; // when this line runs, the function ends here
  }
  return b;
}

console.log(larger(9, 4)); // shows 9
console.log(larger(3, 7)); // shows 7
```

In `larger(9, 4)`, the condition is true, so `return a` runs and `return b` never does. In `larger(3, 7)`, the condition is false. The program skips the block and reaches `return b`.

### Python

```python
def larger(a, b):
    if a > b:
        return a  # when this line runs, the function ends here
    return b

print(larger(9, 4))  # shows 9
print(larger(3, 7))  # shows 7
```

The word `if` starts a condition, which ends with a colon. The indented line below it is its block: it runs only when the condition is true.

In `larger(9, 4)`, the condition is true, so `return a` runs and `return b` never does. In `larger(3, 7)`, the condition is false. The program skips the block and reaches `return b`.

### Go

```go
package main

import "fmt"

func larger(a int, b int) int {
	if a > b {
		return a // when this line runs, the function ends here
	}
	return b
}

func main() {
	fmt.Println(larger(9, 4)) // shows 9
	fmt.Println(larger(3, 7)) // shows 7
}
```

The word `if` comes before a condition. The code between `{` and `}` is its block: it runs only when the condition is true.

In `larger(9, 4)`, the condition is true, so `return a` runs and `return b` never does. In `larger(3, 7)`, the condition is false. The program skips the block and reaches `return b`.

<!-- /tabs -->

### Variables inside stay inside

A variable created inside a function, in the way this page shows, is a **local variable**. Code outside the function cannot reach it, and the same goes for parameters. The other way works: code inside a function can read a variable created outside all functions.

<!-- tabs -->

### JavaScript

Here, that means a variable created with `const` or `let`. This is the scope rule you met in [[conditions|Conditions]].

```js
function add(a, b) {
  const sum = a + b; // sum exists only inside add
  return sum;
}

console.log(add(2, 3)); // shows 5
console.log(sum);       // error: sum is not defined
```

This shows `5`. Then the program stops with an error. In Chrome, Edge and Firefox, it says `sum is not defined`.

Each call to `add` creates a new `sum`, so `const` causes no problem when you call it again.

Here, code inside a function reads a variable from outside:

```js
const greeting = "Hello"; // defined outside the function

function greet(name) {
  console.log(greeting + ", " + name); // shows Hello, Ana
}

greet("Ana");
```

### Python

Here, that means a variable you give a value to inside the function.

```python
def add(a, b):
    result = a + b  # result exists only inside add
    return result

print(add(2, 3))  # shows 5
print(result)     # error: result is not defined
```

This shows `5`. Then the program stops with an error. The last line of the message is `NameError: name 'result' is not defined`.

Here, code inside a function reads a variable from outside:

```python
greeting = "Hello"  # created outside the function

def greet(name):
    print(greeting + ", " + name)  # shows Hello, Ana

greet("Ana")
```

### Go

Here, that means a variable created with `:=` inside the function.

```go
package main

import "fmt"

func add(a int, b int) int {
	sum := a + b // sum exists only inside add
	return sum
}

func main() {
	fmt.Println(add(2, 3)) // this line never runs
	fmt.Println(sum)       // not allowed: sum does not exist here
}
```

This shows no `5`. Go compiles the whole program before it runs. Here the compiler reports an error, because `sum` was not created in that place. So the program never starts.

Here, code inside a function reads a variable from outside. The sign `:=` works only inside a function, so outside one, the word `var` creates the variable:

```go
package main

import "fmt"

var greeting = "Hello" // created outside the function

func greet(name string) {
	fmt.Println(greeting + ", " + name) // shows Hello, Ana
}

func main() {
	greet("Ana")
}
```

<!-- /tabs -->

## How it came to be

Another name for this idea is **subroutine**. Others discussed it earlier. But Wikipedia reports that Maurice Wilkes, David Wheeler and Stanley Gill are "generally credited with the formal invention" of the idea.

In 1951, these three published a book based on their work with EDSAC, one of the first practical computers. It explained the EDSAC **library**, a collection of reusable code: more than eighty subroutines. The library was a real object, a filing cabinet of punched paper tape. That is a long strip of paper with small holes.

## 🧪 Try it in your browser

These steps use JavaScript, the language the browser's console runs. In JavaScript, `function` starts a definition, `const` creates a variable, `console.log` shows a value, and `undefined` means no value to show. You need a computer with Chrome, Edge or Firefox.

**Safety rule:** only type code in the console that you understand or that comes from a source you trust. Never paste anything a stranger sends you.

1. Open [example.com](https://example.com/).
   **What you should see:** a short page. It says the domain is for use in documentation examples.
2. Open the **console**:
   - **Windows:** press `Ctrl` + `Shift` + `J` (in Firefox: `Ctrl` + `Shift` + `K`)
   - **Mac:** press `Cmd` + `Option` + `J` (in Firefox: `Cmd` + `Option` + `K`)
3. Click the empty line at the bottom. **Type** this line yourself (some browsers may block pasting at first), then press `Enter`.

   ```
   function add(a, b) { const sum = a + b; return sum }
   ```

   **What you should see:** the console may also show `undefined`. That is normal. You have defined the function but not called it. The browser may show suggestions, and the line may look different while you type. Keep typing.

   **If something goes wrong:** for an error message, look for a typo and type the line again. If `Enter` gives a new line and no answer, a bracket is probably still open. Reload the page and start again here.
4. Now call it:

   ```
   add(2, 3)
   ```

   **What you should see:** `5`. Showing each line's result is a feature of the console, so here it shows what the call gave back. If you see `add is not defined`, go back to step 3.
5. Call it again with other arguments:

   ```
   add(10, 20)
   ```

   **What you should see:** `30`.
6. Define a function with no `return`:

   ```
   function sayHi(name) { console.log("Hi, " + name) }
   ```

   **What you should see:** the console may also show `undefined`. That is normal.
7. Call it:

   ```
   sayHi("Ana")
   ```

   **What you should see:** `Hi, Ana`, from `console.log`. The console may also show `undefined`, because the call gave back no value.
8. Try to reach the local variable from outside:

   ```
   sum
   ```

   **What you should see:** an error message that says `sum is not defined`.

## Common misunderstandings

- **"Writing a function runs it."** No. MDN says that defining a function "does not execute it". A named function on this page runs when you call it. A nameless one, like the click example, can be called by something else.
- **"Showing a value and `return` do the same thing."** No. `console.log` in JavaScript, `print` in Python and `fmt.Println` in Go show a value to you. `return` gives a value to your code, so your code can store or use it.

## Recap

- You define a function once. Its code runs only when it is called, and you call a named function with its name and round brackets.
- Parameters receive the arguments you pass, and `return` gives a value back. Without a returned value, what the call gives depends on the language.
- Local variables, created inside a function, cannot be reached by code outside it.

## Sources

- MDN Web Docs, Functions, reusable blocks of code: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Functions
- MDN Web Docs, Function return values: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Return_values
- MDN Web Docs, Functions (JavaScript guide): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
- MDN Web Docs, Functions (JavaScript reference): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
- MDN Web Docs, return: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
- MDN Web Docs, Default parameters: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
- MDN Web Docs, Grouping operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping
- MDN Web Docs, Local variable (glossary): https://developer.mozilla.org/en-US/docs/Glossary/Local_variable
- MDN Web Docs, ReferenceError: "x" is not defined: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined
- MDN Web Docs, throw: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
- MDN Web Docs, Error: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
- MDN Web Docs, ReferenceError: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError
- Think Python, 2nd edition, The way of the program: https://greenteapress.com/thinkpython2/html/thinkpython2002.html
- MDN Web Docs, console: https://developer.mozilla.org/en-US/docs/Web/API/console
- MDN Web Docs, console.log(): https://developer.mozilla.org/en-US/docs/Web/API/console/log_static
- MDN Web Docs, Window.alert(): https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
- MDN Web Docs, EventTarget.addEventListener(): https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- ECMAScript language specification (ECMA-262): https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html
- Wikipedia, Function (computer programming): https://en.wikipedia.org/wiki/Function_(computer_programming)
- Wikipedia, The Preparation of Programs for an Electronic Digital Computer: https://en.wikipedia.org/wiki/The_Preparation_of_Programs_for_an_Electronic_Digital_Computer
- Wikipedia, EDSAC: https://en.wikipedia.org/wiki/EDSAC
- Wikipedia, Punched tape: https://en.wikipedia.org/wiki/Punched_tape
- Wikipedia, V8 (JavaScript engine): https://en.wikipedia.org/wiki/V8_(JavaScript_engine)
- Example Domain: https://example.com/
- Chrome for Developers, Open Chrome DevTools: https://developer.chrome.com/docs/devtools/open
- Chrome for Developers, Run JavaScript in the Console: https://developer.chrome.com/docs/devtools/console/javascript
- Microsoft Edge DevTools, Keyboard shortcuts: https://learn.microsoft.com/en-us/microsoft-edge/devtools/shortcuts/
- Microsoft Edge DevTools, Run JavaScript in the Console: https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/console-javascript
- Firefox DevTools User Docs, Web Console: https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html
- Firefox DevTools User Docs, The JavaScript input interpreter: https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html
- Chrome for Developers, What are self-XSS attacks?: https://developer.chrome.com/blog/self-xss
- Python Tutorial, More Control Flow Tools: https://docs.python.org/3/tutorial/controlflow.html
- Python Tutorial, An Informal Introduction to Python: https://docs.python.org/3/tutorial/introduction.html
- Python Tutorial, Errors and Exceptions: https://docs.python.org/3/tutorial/errors.html
- Python Language Reference, Simple statements: https://docs.python.org/3/reference/simple_stmts.html
- Python Language Reference, Expressions: https://docs.python.org/3/reference/expressions.html
- Python Language Reference, Execution model: https://docs.python.org/3/reference/executionmodel.html
- Python documentation, Programming FAQ: https://docs.python.org/3/faq/programming.html
- The Go Programming Language Specification: https://go.dev/ref/spec
- The Go Programming Language, Effective Go: https://go.dev/doc/effective_go
- Go Packages, fmt: https://pkg.go.dev/fmt
- Go Packages, Command go: https://pkg.go.dev/cmd/go
- Go Packages, internal/types/errors: https://pkg.go.dev/internal/types/errors
- Python Tutorial, Whetting Your Appetite: https://docs.python.org/3/tutorial/appetite.html
- Python Language Reference, Compound statements: https://docs.python.org/3/reference/compound_stmts.html
- Python documentation, Built-in Constants: https://docs.python.org/3/library/constants.html
- MDN Web Docs, const: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
- MDN Web Docs, Compile (glossary): https://developer.mozilla.org/en-US/docs/Glossary/Compile
