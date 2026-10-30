---
id: software
title: "Software and Programs"
type: concept
part: machine
status: published
requires: [programming-languages]
related: [what-is-a-computer, operating-system, storage, ram, web-browser]
summary: "Software means the programs that run on a computer: a program usually waits in storage as a file of instructions, and when you open it, it is copied into memory (RAM) and the CPU carries it out."
read_minutes: 5
questions:
  - what is software
  - what is the difference between software and a program
  - what is an app
  - what is the difference between hardware and software
  - what happens when I open an app
  - where does a program live on my computer
aliases: [software, program, programs, app, apps, application, application software, executable, program file]
sources:
  - title: "Stanford CS101: Running and Operating Systems (Software)"
    url: https://web.stanford.edu/class/cs101/software-1.html
  - title: "Wikipedia: Application software (general background reference)"
    url: https://en.wikipedia.org/wiki/Application_software
  - title: "Apple Newsroom: iPhone 3G on Sale Tomorrow (July 10, 2008)"
    url: https://www.apple.com/newsroom/2008/07/10iPhone-3G-on-Sale-Tomorrow/
  - title: "MDN Web Docs: What is JavaScript?"
    url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript
  - title: "Science News: Software's Origin (Ivars Peterson)"
    url: https://www.sciencenews.org/article/softwares-origin
  - title: "The New York Times obituary, John Tukey, 85, Statistician; Coined the Word 'Software' (David Leonhardt, 2000), at MacTutor, University of St Andrews"
    url: https://mathshistory.st-andrews.ac.uk/Obituaries/Tukey_NYTimes/
  - title: "Chrome for Developers: Fix memory problems (Chrome Task Manager)"
    url: https://developer.chrome.com/docs/devtools/memory-problems
  - title: "Microsoft Edge Learning Center: How to use Edge Task Manager"
    url: https://www.microsoft.com/en-us/edge/learning-center/how-to-use-edge-task-manager
  - title: "Microsoft Learn: Fix high CPU or memory usage in Microsoft Edge browser"
    url: https://learn.microsoft.com/en-us/troubleshoot/microsoft-edge/performance/edge-high-cpu-memory
  - title: "Firefox Source Docs: Process Model (about:processes)"
    url: https://firefox-source-docs.mozilla.org/dom/ipc/process_model.html
  - title: "Firefox source code: aboutProcesses.ftl (labels of the about:processes page)"
    url: https://searchfox.org/firefox-main/source/toolkit/locales/en-US/toolkit/about/aboutProcesses.ftl
author: ai
reviewed_by: ai
reviewed_at: 2026-10-31
updated: 2026-10-31
---

> **In one sentence:** Software means the programs that run on a computer: a program usually waits in storage as a file of instructions, and when you open it, it is copied into memory (RAM) and the CPU carries it out.

## Why should I care?

You use software all day. The web browser you are reading this in is a program. So are the camera, the calculator and the map on a phone. A Stanford computer course gives a short definition: software is "the general category of code which runs on the hardware". (**Hardware** is the physical parts of a computer, the parts you can touch.)

In [[programming-languages]], you saw how people write source code. This lesson shows what a finished program is, where it lives, and what happens when you open it. As a programmer, you will make software.

## Analogy

Think of a **piano** and **sheet music** (printed music that tells a pianist which notes to play). Stanford's course uses a similar picture, with a piano as the hardware and music as the software.

- The piano is the hardware. The sheet music is the software.
- A pianist can play a different piece on the same piano at any time.
- To play new music, you do not need a new piano. To do a new job, a computer usually does not need new hardware. It needs a new program.

**Where the analogy breaks down:** a pianist reads the music and can add feeling or fix a small mistake. A computer has no pianist. The CPU follows each instruction exactly, and understands nothing. Also, music is played from start to end. A program often stops and **waits for you**. Stanford's course describes Firefox's window appearing, then its menus, then: "The cursor blinks waiting for you to type".

## How it actually works

### Software, programs and apps

- A **program** is one piece of software that does a particular job. Stanford's example is Firefox, a web browser.
- **Software** is the general word for all programs together.
- An **app** is another word for a program. "App" is short for "application". The word became popular after Apple opened its App Store in 2008.

### Two main kinds of software

- **Application software** (apps) is made for people to use for their tasks. Examples are web browsers, word processors (programs for writing documents) and media players (programs that play music and video).
- The **[[operating-system|operating system]]** is the main software that manages the computer. Stanford's course calls it a "set of supervisory programs", and gives these examples: Windows, Linux, Android and iOS. It begins running when the computer starts up, and it starts and stops your other programs.

(There are other kinds too, such as compilers.)

### A program is a file

A program usually waits in [[storage]] as a **file**: a named block of information. On Windows, the name of a program file often ends in `.exe`. Stanford's course says the Firefox.exe file is mostly machine code instructions: about 20 million of them, by its estimate.

Other files are not programs. A photo or a letter is **data**: information that a program reads or changes. A photo app is a program; your photos are its data.

### What happens when you open a program

*Diagram: the life of a program, from top to bottom. A programmer writes source code. A compiler turns it into a program file of machine code, kept in storage. When you open the program, its instructions are copied into RAM. The CPU then carries them out, one by one.*

```
  source code, written by a programmer
               │
               ▼   compiler
  program file of machine code ── waits in STORAGE (kept when power is off)
               │
               ▼   you open the program
  copy of the instructions in RAM (memory)
               │
               ▼
  the CPU carries out the instructions, one by one
```

(Programs can also be run by an interpreter. See below.)

Stanford's course describes what happens. When you open a program, for example by double-clicking its file, its instructions are copied from storage into RAM. Then the [[cpu|CPU]] starts carrying them out. "Each program gets its own area of RAM", and a computer "can run multiple programs at the same time".

### Programs that run inside programs

Not every program arrives as a file of machine code. When you open a web page, it can bring JavaScript code with it. MDN Web Docs says the page's code is "downloaded, then run and displayed by the browser". So the browser is a program, and it runs programs from web pages inside itself.

## How it came to be

In January 1958, John W. Tukey published an article in a mathematics journal, the *American Mathematical Monthly*. Tukey was a statistician (an expert in working with data) at Princeton University. In the article, he used the word "software" for programs such as compilers. He wrote that this software was "at least as important" to a computer as its "hardware".

Later, a librarian named Fred R. Shapiro found Tukey's article. Science News says that, until then, the Oxford English Dictionary dated the word "software" to 1960. So Tukey's article is the oldest known use of "software" for computer programs.

In 2000, a New York Times article about Tukey's life called him the man who "Coined the Word 'Software'". To coin a word means to create it.

## 🧪 Try it in your browser

You will watch your browser, a program, running on your computer. A **task manager** is a window or page that lists the parts of a program that are running right now.

**Safety rule:** only look. Do not click **End process** or **Kill process**: that could close one or more tabs.

1. Open two or three tabs with different web pages.
2. Open your browser's task manager:
   - **Chrome:** click the menu with three dots, then **More tools**, then **Task manager**.
   - **Edge:** click the menu with three dots, then **More tools**, then **Browser task manager**.
   - **Firefox:** open a new tab. In its address bar, type `about:processes` and press `Enter`.
3. Look at the list.

**What you should see:** a list. Some rows are your tabs. Other rows have technical names. You can ignore them. Next to each row, you see a number for **memory**: how much RAM that part is using right now. The units (such as K or MB) are explained in [[data-size-units]]. Your browser may also show a **CPU** column. The numbers may change while you watch.

**What happened:** the browser is one program, but it is running as several parts. Every part uses some of your computer's RAM, as the memory column shows.

4. Close the task manager window, or the `about:processes` tab.

**On a phone:** you cannot open a task manager this way. Instead, look at your home screen. Each app icon opens a different program, and they all run on the same hardware.

## Common misunderstandings

- **"Software is the same as a computer."** No. Hardware is the machine. Software is the programs. One computer can run many different programs.
- **"When a program is closed, it is gone."** No. The program file stays in storage. Opening it copies its instructions into memory again.

## Recap

- Software is the general name for all the programs that run on a computer's hardware. "App" is another word for a program.
- A program usually waits in storage as a file, often of machine code. Opening it copies its instructions into RAM, and the CPU carries them out.
- The operating system is the main software that manages the computer and starts your other programs.

## Sources

- Stanford CS101, Running and Operating Systems (Software): https://web.stanford.edu/class/cs101/software-1.html
- Wikipedia, Application software (general background reference): https://en.wikipedia.org/wiki/Application_software
- Apple Newsroom, iPhone 3G on Sale Tomorrow (July 10, 2008): https://www.apple.com/newsroom/2008/07/10iPhone-3G-on-Sale-Tomorrow/
- MDN Web Docs, What is JavaScript?: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript
- Science News, Software's Origin (Ivars Peterson): https://www.sciencenews.org/article/softwares-origin
- The New York Times obituary of John Tukey (David Leonhardt, 2000), at MacTutor, University of St Andrews: https://mathshistory.st-andrews.ac.uk/Obituaries/Tukey_NYTimes/
- Chrome for Developers, Fix memory problems: https://developer.chrome.com/docs/devtools/memory-problems
- Microsoft Edge Learning Center, How to use Edge Task Manager: https://www.microsoft.com/en-us/edge/learning-center/how-to-use-edge-task-manager
- Microsoft Learn, Fix high CPU or memory usage in Microsoft Edge browser: https://learn.microsoft.com/en-us/troubleshoot/microsoft-edge/performance/edge-high-cpu-memory
- Firefox Source Docs, Process Model: https://firefox-source-docs.mozilla.org/dom/ipc/process_model.html
- Firefox source code, aboutProcesses.ftl: https://searchfox.org/firefox-main/source/toolkit/locales/en-US/toolkit/about/aboutProcesses.ftl
