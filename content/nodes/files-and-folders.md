---
id: files-and-folders
title: "Files and Folders"
type: concept
part: machine
status: published
requires: [operating-system, storage]
related: [software, data-size-units, text-as-numbers]
summary: "A file is a named collection of data kept in storage; a folder (or directory) is a list of files and other folders, and a path is the list of folder names that leads to one file."
read_minutes: 6
questions:
  - what is a file
  - what is a folder
  - what is the difference between a folder and a directory
  - what is a file path
  - what is a file extension
  - what is the root directory
aliases: [file, files, folder, folders, directory, directories, file system, path, file path, file extension, extension, root directory, subfolder, subdirectory]
sources:
  - title: "Microsoft Learn: Naming Files, Paths, and Namespaces"
    url: https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file
  - title: "Microsoft Learn: KNOWNFOLDERID (default paths of standard Windows folders)"
    url: https://learn.microsoft.com/en-us/windows/win32/shell/knownfolderid
  - title: "Microsoft Support: Common file name extensions in Windows"
    url: https://support.microsoft.com/en-us/windows/common-file-name-extensions-in-windows-da4a4430-8e76-89c5-59f7-1cdbbc75cb01
  - title: "Apple Support, Mac User Guide: Folders that come with your Mac"
    url: https://support.apple.com/guide/mac-help/mchlp1143/mac
  - title: "Apple Developer: File System Programming Guide, File System Basics"
    url: https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html
  - title: "R. C. Daley and P. G. Neumann: A General-Purpose File System For Secondary Storage (1965), at Multicians.org"
    url: https://multicians.org/fjcc4.html
  - title: "D. M. Ritchie and K. Thompson: The UNIX Time-Sharing System"
    url: https://plan9.io/cm/cs/who/dmr/cacm.html
  - title: "Wikipedia: Directory (computing) (general background reference)"
    url: https://en.wikipedia.org/wiki/Directory_(computing)
  - title: "MDN Web Docs: <input type=\"file\">"
    url: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file
author: ai
reviewed_by: ai
reviewed_at: 2026-10-31
updated: 2026-10-31
---

> **In one sentence:** A file is a named collection of data kept in storage; a folder (or directory) is a list of files and other folders, and a path is the list of folder names that leads to one file.

## Why should I care?

The photos, songs and documents on your computer are kept in **files**. The [[software|programs]] you install are stored in files too. Your files sit in **folders**, such as Documents, Downloads and Pictures. As a programmer, you will create, name and organize many files and folders.

## Analogy

Think of a **filing cabinet** in an office. Each sheet of paper holds information. You put the sheets in **folders** with names on their labels. To find a letter, you read the labels until you find the right folder, and then the letter inside it.

(In this lesson, a **file** always means the computer kind, not a paper one.)

**Where the analogy breaks down:** a paper folder holds the paper itself. A computer folder does not hold the data of its files. It is a list of names, and for each name, the computer can find where that file's data is in storage. Also, a computer folder can hold other folders, and those can hold more folders, many levels deep.

## How it actually works

### A file is named data

A **file** is a collection of data in [[storage]], with a name. Inside, it is a series of [[byte|bytes]]. A Unix paper by D. M. Ritchie and K. Thompson says: "A file contains whatever information the user places on it". A file of text, they say, is "a string of characters": characters in a row, one after another.

### The name and the extension

Microsoft says Windows file names "have two parts separated by a period". (Microsoft also says the second part is optional.) In `holiday.jpg`, the first part is `holiday`. The part after the period, `jpg`, is the **file extension**: a short code for the type of file. Some examples:

| Extension | Microsoft's description | In plain words |
|---|---|---|
| `.txt` | Unformatted text file | text only, with no bold or colors |
| `.jpg`, `.jpeg` | Joint Photographic Experts Group photo file | a photo (JPEG) |
| `.png` | Portable Network Graphics file | an image (PNG) |
| `.exe` | Executable program file | a program you can run |

The extension is a **label**. Microsoft says it tells the computer which app can open the file, and which icon to show for it. The real content is in the bytes.

### A folder is a list of names

A **folder** is also called a **directory**. The two words mean the same thing: a Wikipedia article says that on many computers, directories are known as folders.

A 1965 paper about a computer system called **Multics** says: "A directory is a special file which is maintained by the file system, and which contains a list of entries." So a folder is itself stored as a special kind of file. The **file system** is the way files are organized in storage, and the software that manages them. It keeps track of where each file is.

A folder inside another folder is called a **subfolder** (or subdirectory).

### Folders form a tree

Folders inside folders make a shape like an upside-down **tree**. At the top is a folder that is not inside any other folder: the **root**. On Windows, each drive, such as `C:`, has its own root.

*Diagram: a tree of folders, drawn as an indented list. At the top is the root of drive C: on Windows. Inside it is the Users folder, inside that a folder for the user Ana, and inside that the folders Documents and Pictures. Documents holds the file letter.txt, and Pictures holds holiday.jpg.*

```
C:\                       (the root of drive C:)
└── Users
    └── Ana
        ├── Documents
        │   └── letter.txt
        └── Pictures
            └── holiday.jpg
```

### A path is the way to a file

A **path** is the list of folder names that leads to a file, ending with the file's name. A character called a **separator** goes between the names.

- **Windows** uses a backslash `\`. The path to the letter above is `C:\Users\Ana\Documents\letter.txt`. Microsoft lists a Users folder as the default place for each user's own folder.
- **Unix** uses a forward slash `/`. Ritchie and Thompson describe a path name as "a sequence of directory names separated by slashes". A path that starts with `/` starts at the root. Apple says that on a Mac, the Users folder holds each user's **home folder**, named with the user's name. Its path is `/Users`. So the same letter could be at `/Users/Ana/Documents/letter.txt`.

So how does the computer find `letter.txt`? The [[operating-system|operating system]] starts at the root. It looks in the root's list for `Users`, then in that list for `Ana`, and so on, until it finds the file's entry. That entry leads to where the file's bytes are in storage. (This is simplified: file systems also keep extra information, such as each file's size.)

## How it came to be

In 1965, R. C. Daley and P. G. Neumann presented their paper about the file system of **Multics**. It describes "a basic tree hierarchy of files", with a "root directory" at the top.

Unix also used a tree. Ritchie and Thompson's paper, first published in 1974, describes a "rooted tree" of directories and paths written with slashes, such as `/alpha/beta/gamma`.

## 🧪 Try it in your browser

Web pages can ask you to choose a file, for example a photo. You will open a file chooser and look at your folders, without choosing anything.

1. In Chrome, Edge or Firefox, open this MDN Web Docs page (a website that explains web technology): `https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file`
2. Near the top (scroll a little if needed), find the example box with the words **Choose a profile picture**. Click the button in that box. Its label is different in each browser.
3. A window opens: a **file picker**. You should see folder names, such as Documents, Downloads or Pictures. Double-click a folder to see what is inside it. This example asks for PNG and JPEG images, so other files may be hidden or grey.
4. **Click Cancel** (or press `Esc`). Do not choose a file. When you cancel, no file is chosen.

**What you should see:** a list of folders and files on your device. The window looks different in each browser and operating system.

**On a phone:** tapping the button also opens a file picker, but it may look very different. Tap Cancel or go back without choosing anything.

## Common misunderstandings

- **"Renaming `photo.jpg` to `photo.png` changes the file into a PNG."** No. Microsoft says changing an extension "won't convert the file to another format". The bytes stay the same. Only the label changes.
- **"When I open a file picker, the website can look through all my folders."** No. You choose the file. MDN says the website does not even see the real path of a file you choose: it sees `C:\fakepath\` before the file name, "to prevent malicious software from guessing the user's file structure". (Malicious means harmful.)

## Recap

- A file is a named collection of data (bytes) in storage. The extension at the end of its name, such as `.jpg`, is a label that tells the computer which app to use.
- A folder, or directory, is a list of names of files and other folders. Folders inside folders form a tree, with the root at the top.
- A path, such as `C:\Users\Ana\Documents\letter.txt` or `/Users/Ana/Documents/letter.txt`, is the way from the root to one file.

## Sources

- Microsoft Learn, Naming Files, Paths, and Namespaces: https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file
- Microsoft Learn, KNOWNFOLDERID: https://learn.microsoft.com/en-us/windows/win32/shell/knownfolderid
- Microsoft Support, Common file name extensions in Windows: https://support.microsoft.com/en-us/windows/common-file-name-extensions-in-windows-da4a4430-8e76-89c5-59f7-1cdbbc75cb01
- Apple Support, Mac User Guide, Folders that come with your Mac: https://support.apple.com/guide/mac-help/mchlp1143/mac
- Apple Developer, File System Programming Guide, File System Basics: https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html
- R. C. Daley and P. G. Neumann, A General-Purpose File System For Secondary Storage (1965): https://multicians.org/fjcc4.html
- D. M. Ritchie and K. Thompson, The UNIX Time-Sharing System (first published 1974; this link is the revised 1978 version): https://plan9.io/cm/cs/who/dmr/cacm.html
- Wikipedia, Directory (computing) (general background reference): https://en.wikipedia.org/wiki/Directory_(computing)
- MDN Web Docs, `<input type="file">`: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file
