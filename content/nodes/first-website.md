---
id: first-website
title: "Milestone: Your First Website on Your Own Domain"
type: project
part: web
status: review
requires: [css, javascript, web-hosting]
related: [domain-name, dns, https, what-happens-when-you-type-a-url]
summary: "Build a small web page with HTML, CSS and JavaScript, publish it for free with GitHub Pages, and connect it to your own domain name."
read_minutes: 9
questions:
  - how do i make my first website
  - how do i put a website online for free
  - how do i connect my domain to my website
  - how do i use github pages
  - how do i publish an html page
aliases: [first website, github pages, publish a website]
sources:
  - title: "GitHub Docs: Quickstart for GitHub Pages"
    url: https://docs.github.com/en/pages/quickstart
  - title: "GitHub Docs: Creating a GitHub Pages site"
    url: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
  - title: "GitHub Docs: Configuring a publishing source for your GitHub Pages site"
    url: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
  - title: "GitHub Docs: Creating new files"
    url: https://docs.github.com/en/repositories/working-with-files/managing-files/creating-new-files
  - title: "GitHub Docs: Managing a custom domain for your GitHub Pages site"
    url: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
  - title: "GitHub Docs: Verifying your custom domain for GitHub Pages"
    url: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages
  - title: "GitHub Docs: Securing your GitHub Pages site with HTTPS"
    url: https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https
  - title: "GitHub Docs: What is GitHub Pages?"
    url: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
author: ai
updated: 2026-10-30
---

> **In one sentence:** Build a small web page with HTML, CSS and JavaScript, publish it for free with GitHub Pages, and connect it to your own domain name.

## Goal

At the end of this project, anyone in the world can type an address into their browser and see **a web page that you made**.

You will do it in two parts:

- **Part A (free):** build the page and publish it at an address like `https://yourname.github.io`. When Part A is done, your site is fully online.
- **Part B (optional, costs money):** connect it to **your own domain name**, like `www.yourname.com`.

Everything happens in your browser. You do not need to install anything.

## What you'll need

- A computer with a browser. (A phone works, but a computer is much more comfortable.)
- An **email address**, to create a free account.
- About **one hour** for Part A. Part B takes about 30 minutes of work, plus waiting time (up to a day).
- For Part B only: a **domain name**. You rent it from a company called a **registrar**, which sells domain names. You pay the registrar, usually once per year. Prices are different for each name and ending, so check the price before you buy.

You will use **GitHub**, a website where people store and share code. GitHub has a free service called **GitHub Pages**, which [[web-hosting|hosts]] simple websites made of HTML, CSS and JavaScript files. "Hosts" means: GitHub keeps your files on its servers and sends them to anyone who visits your site.

A few new words:

- A **repository** (or "repo") is a project folder on GitHub.
- A **commit** is a saved change, with a short message that describes it. "Commit changes" means "save my changes".
- A **README** is a short text file that describes a project. The `.md` at the end of `README.md` means it is written in a simple text format called Markdown.
- A **branch** is one version of the files in a repository. Your repository starts with one branch, called **main**. You do not need more for this project.

## Steps

### Part A: publish your page

**1. Create a GitHub account.** Go to `https://github.com` and sign up. GitHub will ask you to confirm your email address, and may ask you to solve a small puzzle to prove you are a person. That is normal. Choose your **username** carefully: it will be part of your website's address.

**2. Create a repository.**

- Click the **+** icon in the top-right corner, then **New repository**.
- As the repository name, type **`yourusername.github.io`**, using your real username. For example, if your username is `sari-dev`, type `sari-dev.github.io`. GitHub uses this exact name to know that this repository is your website.
- Choose **Public**. This means anyone can see the files. With a free account, GitHub Pages needs a public repository.
- Turn on **Add README**.
- Click **Create repository**.

✅ **Checkpoint:** you see your new repository, with one file: `README.md`.

**3. Create your web page.**

- Click **Add file**, then **Create new file**.
- In the file name field, type **`index.html`** (all small letters). The `.html` at the end says that this is an HTML file. GitHub Pages looks for a file with this name as your site's start page.
- Now you will add code to the big text box. **You do not need to understand every line yet.** It is a small, complete page, so you can see the result first. Select all the code below with your mouse, copy it, and paste it into the text box:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My first website</title>
  <style>
    body { font-family: sans-serif; max-width: 600px; margin: 40px auto; padding: 0 16px; }
    h1 { color: darkblue; }
    button { font-size: 18px; padding: 8px 16px; }
  </style>
</head>
<body>
  <h1>Hello, world!</h1>
  <p>This is my first website. I built it myself.</p>
  <button onclick="sayHello()">Click me</button>
  <p id="message"></p>
  <script>
    function sayHello() {
      document.getElementById("message").textContent = "You clicked the button. JavaScript works!";
    }
  </script>
</body>
</html>
```

The code has three parts:

- The [[html|HTML]] (the words inside `<` and `>`, called **tags**) gives the structure: a heading (`<h1>`), text (`<p>`) and a button.
- The [[css|CSS]] inside `<style>` sets the look: the font, the blue heading and the button size.
- The [[javascript|JavaScript]] inside `<script>` makes the button do something: when you click it, a message appears.

- Click the green **Commit changes...** button. A small window opens. Write a short message like `Add my first page`, then click **Commit changes** in that window.

✅ **Checkpoint:** your repository now has two files: `README.md` and `index.html`.

**4. Turn on GitHub Pages.**

- Click **Settings** (at the top of your repository). If you cannot see it, click the menu with three dots first.
- In the list on the left, click **Pages**.
- Under **Build and deployment**, set **Source** to **Deploy from a branch**. ("Deploy" means "publish".)
- Under **Branch**, choose **main**. Next to it, keep the folder as **/ (root)**, which means "the main folder of the repository". Click **Save**.

✅ **Checkpoint:** the Pages settings now show that your site is being built. After a few minutes, reload the page: you should see a message with your site's address, such as "Your site is live at…".

**5. Visit your site.** It can take **up to 10 minutes** the first time. Then go to `https://yourusername.github.io`.

✅ **Checkpoint:** you see "Hello, world!". Click the button.

### Part B: connect your own domain

**6. Rent a domain.** Choose a [[domain-name|domain name]] and rent it from any registrar. In this example, your domain is `yourname.com`, and your website will be at `www.yourname.com`.

**7. Recommended: verify your domain.** GitHub recommends that you prove the domain is yours **before** you connect it. This stops other people from using your domain on their GitHub site. Follow GitHub's guide "Verifying your custom domain for GitHub Pages" (linked in the sources below). You do this in your **profile** settings (click your picture in the top-right corner, then **Settings**, then **Pages**), not in the repository. It asks you to add one DNS record, in the same place as step 9.

**8. Tell GitHub your domain.** In your repository, go to **Settings**, then **Pages**. Under **Custom domain**, type `www.yourname.com` and click **Save**.

**9. Tell DNS where your site is.** Log in to your registrar and open the **DNS settings** for your domain. In the [[dns|DNS]] lesson you **read** DNS records. Now you will **create** one. Add this record:

| Type | Name (host) | Value (points to) |
|---|---|---|
| `CNAME` | `www` | `yourusername.github.io` |

A **CNAME** record says that one name is another name for a second name. Here it says: "`www.yourname.com` is another name for `yourusername.github.io`". So when a browser looks up `www.yourname.com`, DNS leads it to the GitHub Pages servers.

Every registrar's page looks a little different. Some ask for `www` as the name, and some for the full `www.yourname.com`. If a `www` record already exists, edit it instead of adding a second one.

*Optional:* to make the address **without** `www` (`yourname.com`) work too, create four **A** records. In most registrars, the name `@` means "the domain itself, with nothing in front". GitHub's documentation lists these four values: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. Add all four.

**10. Wait, then turn on HTTPS.** DNS changes can take **up to 24 hours** to reach everyone. When your site works at your domain, go back to **Settings**, then **Pages**, and select **Enforce HTTPS**. This makes every visitor use the secure, encrypted version of your site. The option can take up to 24 hours to become available.

## It works!

You are done when:

- `https://yourusername.github.io` (Part A) or `https://www.yourname.com` (Part B) shows your page,
- the button shows the message when you click it, and
- the browser shows a **padlock** (or a similar "secure" sign) next to the address. This means [[https|HTTPS]] is working. GitHub turns on HTTPS automatically for `github.io` addresses. For your own domain, it works after step 10.

Send the link to a friend. Your website is on the internet.

## If it doesn't work

Problems like these happen to every programmer. Finding and fixing them is a normal part of the work.

- **GitHub shows a "404" page** ("There isn't a GitHub Pages site here" or "File not found"). 404 is the HTTP status code for "not found". Wait 10 minutes and reload. Then check that the repository name is exactly `yourusername.github.io`, and the file name is exactly `index.html` (all small letters).
- **The page shows, but the button does nothing:** compare your `<script>` part with the code above. One missing bracket or quote can stop JavaScript from working. Copying the whole code again is often the fastest fix.
- **Your domain does not show the site:** check your CNAME record with the DNS lookup tool from the DNS lesson: `https://dns.google/query?name=www.yourname.com&type=CNAME`. In the `"Answer"` part, the `"data"` should be `yourusername.github.io.`. If you made the change recently, wait a few hours.
- **"Enforce HTTPS" cannot be selected:** wait. It can take up to 24 hours after the domain starts working.

## What you learned

This one project used almost everything in the course so far:

- You wrote [[html|HTML]], [[css|CSS]] and [[javascript|JavaScript]], the three languages of web pages.
- You put your files on a [[server]] through a [[web-hosting|web hosting]] service: GitHub's servers now send your page to every visitor.
- In Part B, you rented a [[domain-name|domain name]] and connected it to your site with a [[dns|DNS]] record.
- Your site uses [[https|HTTPS]], so visitors connect securely.

And when a friend opens your link, every step from "What Happens When You Type a URL" ([[what-happens-when-you-type-a-url]]) happens, ending with **your** page on **their** screen.

## Sources

- GitHub Docs, Quickstart for GitHub Pages: https://docs.github.com/en/pages/quickstart
- GitHub Docs, Creating a GitHub Pages site: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- GitHub Docs, Configuring a publishing source for your GitHub Pages site: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- GitHub Docs, Creating new files: https://docs.github.com/en/repositories/working-with-files/managing-files/creating-new-files
- GitHub Docs, Managing a custom domain for your GitHub Pages site: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- GitHub Docs, Verifying your custom domain for GitHub Pages: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages
- GitHub Docs, Securing your GitHub Pages site with HTTPS: https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https
- GitHub Docs, What is GitHub Pages?: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
