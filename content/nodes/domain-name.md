---
id: domain-name
title: "What is a Domain Name?"
type: concept
part: network
status: published
requires: [ip-address]
related: [dns, url, web-hosting]
summary: "A domain name is a human-readable name, like wikipedia.org, that people use instead of a server's IP address."
read_minutes: 6
questions:
  - what is a domain name
  - why do websites have names like wikipedia.org
  - what does .com mean
  - what is a subdomain
  - can i buy a domain name forever
  - does it matter if i type a website name in capital letters
aliases: [domain, domains, website name, top-level domain, TLD, subdomain, second-level domain, registrar, registry, ccTLD, gTLD]
sources:
  - title: "MDN Web Docs: Domain name (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/Domain_name
  - title: "MDN Web Docs: What is a domain name?"
    url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name
  - title: "MDN Web Docs: TLD (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/TLD
  - title: "RFC 920, Domain Requirements (J. Postel, J. Reynolds, October 1984)"
    url: https://www.rfc-editor.org/rfc/rfc920
  - title: "RFC 3490, Internationalizing Domain Names in Applications (IDNA) (March 2003)"
    url: https://www.rfc-editor.org/rfc/rfc3490
  - title: "RFC 5890, Internationalized Domain Names for Applications (IDNA): Definitions and Document Framework (August 2010)"
    url: https://www.rfc-editor.org/rfc/rfc5890
  - title: "get.gov: Eligibility"
    url: https://get.gov/domains/eligibility/
  - title: "ICANN: Registering Domain Names"
    url: https://www.icann.org/resources/pages/register-domain-name-2017-06-20-en
  - title: "ICANN: FAQs"
    url: https://www.icann.org/resources/pages/faqs-2014-01-21-en
  - title: "IANA: Root Zone Database"
    url: https://www.iana.org/domains/root/db
  - title: "IANA: Root Zone Database, .com"
    url: https://www.iana.org/domains/root/db/com.html
  - title: "IANA: Root Zone Database, .id (Indonesia)"
    url: https://www.iana.org/domains/root/db/id.html
  - title: "IANA: Root Zone Database, .jp (Japan)"
    url: https://www.iana.org/domains/root/db/jp.html
  - title: "Wikimedia Meta-Wiki: List of Wikipedias (language codes used in the address)"
    url: https://meta.wikimedia.org/wiki/List_of_Wikipedias
  - title: "Example Domain (example.com)"
    url: https://example.com/
  - title: "Wikipedia: Domain name (general background reference)"
    url: https://en.wikipedia.org/wiki/Domain_name
author: ai
reviewed_by: ai
reviewed_at: 2026-10-31
updated: 2026-10-31
---

> **In one sentence:** A domain name is a human-readable name, like wikipedia.org, that people use instead of a server's IP address.

## Why should I care?

In [[ip-address]], you saw that computers on the internet find each other with numbers called IP addresses. But you have probably never typed one. You type names like `wikipedia.org` or `example.com`. Those names are **domain names**.

A domain name is the name of a [[server]] on the internet, such as the computer that sends you a website. At the end of this course, you can put your own website online with your own domain name.

## Analogy

Think of the **contacts** on a phone. You do not remember your friend's phone number. You save it under a name, like "Ana", and you tap the name. The phone uses the number for you. If Ana gets a new number, you change the number, but you keep the name.

A domain name is like the contact name. The IP address is like the phone number.

**Where the analogy breaks down:** your contact names are private. Only your phone knows them, and you can choose any name you like. A domain name works for the whole world. Each one is unique, and you must register it before you can use it. And a domain name is only rented, for a limited time.

## How it actually works

### Why names instead of numbers

MDN, a website that explains how the web works, says: "IP addresses are hard to remember and might change over time." A domain name solves both problems. People remember the name. And if a website moves to a server with a new IP address, the name can stay the same.

To find the IP address that belongs to a name, your computer uses a system called [[dns|DNS]]. You will learn how DNS does this in the next lesson.

### The parts of a domain name

A domain name is made of parts called **labels**, separated by dots. You read it **from right to left**: from the biggest group to the smallest one. Each label to the left names a smaller part inside the domain to its right.

*Diagram: the domain name en.wikipedia.org split into its three labels. Reading from right to left: "org" is the top-level domain. "wikipedia" and "org" together are the second-level domain wikipedia.org. "en" in front of it makes the subdomain en.wikipedia.org.*

```
        en   .   wikipedia   .   org
        │         │              │
        │         │              └── org               top-level domain (TLD)
        │         └───────────────── wikipedia.org     second-level domain
        └─────────────────────────── en.wikipedia.org  subdomain

   read from right to left:  org  →  wikipedia.org  →  en.wikipedia.org
                           (biggest group)              (smallest part)
```

- The last label, `org`, is the **top-level domain**, or **TLD**: the ending.
- `wikipedia.org` is a **second-level domain**: one label in front of the TLD. This is usually the kind of name you register.
- `en.wikipedia.org` is a **subdomain**: a smaller domain inside `wikipedia.org`. The owner of a domain can create subdomains, with different content at each. The `www` in `www.example.com` is a subdomain too.

### Kinds of endings

There are two main kinds of top-level domains:

- **Country-code** TLDs usually have two letters. Each one is for a country or territory (a place that is not a full country), like `.id` (Indonesia) or `.jp` (Japan).
- **Generic** TLDs are the ones not made for one country. They usually have three or more letters, like `.com` and `.org`.

Some endings have strict rules about who may use them. For example, only "verified U.S. government organizations" can register a `.gov` name. Others, like `.com` and `.org`, have no such rules.

### The rules for a name

MDN describes the rules for a label like this:

- A label can use the letters A to Z, the digits 0 to 9, and the hyphen (`-`). A hyphen cannot be the first or last character.
- Each label is 1 to 63 characters long.
- **Capital letters do not matter.** `WIKIPEDIA.ORG` and `wikipedia.org` are the same name.

You can also have names in other alphabets, like Arabic or Chinese. Programs such as your browser turn these names into a form that uses only the letters, digits and hyphens above. Each converted label starts with `xn--`. This was first made a standard in 2003.

### Who gives out domain names

1. **ICANN** (the Internet Corporation for Assigned Names and Numbers) coordinates the whole system. It chooses the organizations that manage each TLD.
2. Each TLD has a **registry**: a central list of all the names under that ending. For example, the `.com` registry is run by VeriSign Global Registry Services.
3. You register a name through a **registrar**, a company that sells the right to use domain names. For generic endings like `.com`, registrars must be approved by ICANN. For a country ending, ICANN does not approve the registrars: the organization that runs the ending sets its own rules.

You cannot buy a domain name forever. The correct word is **register**, but it works like renting. MDN says: "you pay for the right to use a domain name for one or more years." You can **renew** it (pay again for more time), but "you never own the domain name." For endings like `.com`, ICANN's rules allow you to pay for at most ten years ahead.

## How it came to be

You do not need to remember these names and dates. In **October 1984**, J. Postel and J. Reynolds published RFC 920. (An **RFC** is a public document that describes how a part of the internet works.) It listed the first top-level domains, including `GOV` (government), `EDU` (education), `COM` (commercial), `MIL` (military) and `ORG` (other organizations), and said countries would get two-letter codes. Many more endings have been added since then. The full list today is kept by IANA (the Internet Assigned Numbers Authority), which you met in [[ip-address]].

## 🧪 Try it in your browser

You will look at the parts of domain names. These steps change nothing. Steps 1 to 3 also work on a phone.

1. Click the address bar, type `en.wikipedia.org` and press `Enter`. **What you should see:** Wikipedia in English. The address may get longer, with the page's name after the domain name. That is normal.
2. Now type `de.wikipedia.org` and press `Enter`. **What you should see:** Wikipedia in German. Both names end in `wikipedia.org`. Only the subdomain is different.
3. Type `EXAMPLE.COM` in capital letters and press `Enter`. **What you should see:** a short page with the title "Example Domain", the same page you get with `example.com`. Capital letters do not matter.
4. Type `https://www.iana.org/domains/root/db/com.html` in the address bar and press `Enter`. **What you should see:** a page with the heading `.com`. It says it is a "Generic top-level domain". It also names the organization that manages it.
5. Now type `https://www.iana.org/domains/root/db/jp.html` and press `Enter`. **What you should see:** the page for `.jp`. This time it says "Country-code top-level domain".

## Common misunderstandings

- **"I can buy a domain name and keep it forever."** No. You pay to use it for one or more years, and you must renew it.
- **"Every website name starts with `www`."** No. `www` is only a subdomain, and a website does not need it. `en.wikipedia.org`, for example, has no `www`.
- **"The ending tells you exactly who runs a website."** Not always. MDN says the TLD is often only "a clue to the purpose, ownership, or nationality" of a website.

## Recap

- A domain name is a name for a server, used instead of its IP address. DNS finds the address that belongs to the name.
- It is read from right to left: the TLD (like `org`), then the second-level domain (like `wikipedia.org`), then subdomains (like `en.wikipedia.org`).
- You register a domain name through a registrar and pay to use it for one or more years; you never own it.

## Sources

- MDN Web Docs, Domain name (glossary): https://developer.mozilla.org/en-US/docs/Glossary/Domain_name
- MDN Web Docs, What is a domain name?: https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name
- MDN Web Docs, TLD (glossary): https://developer.mozilla.org/en-US/docs/Glossary/TLD
- RFC 920, Domain Requirements (1984): https://www.rfc-editor.org/rfc/rfc920
- RFC 3490, Internationalizing Domain Names in Applications (2003): https://www.rfc-editor.org/rfc/rfc3490
- RFC 5890, IDNA: Definitions and Document Framework (2010): https://www.rfc-editor.org/rfc/rfc5890
- get.gov, Eligibility: https://get.gov/domains/eligibility/
- ICANN, Registering Domain Names: https://www.icann.org/resources/pages/register-domain-name-2017-06-20-en
- ICANN, FAQs: https://www.icann.org/resources/pages/faqs-2014-01-21-en
- IANA, Root Zone Database: https://www.iana.org/domains/root/db
- IANA, Root Zone Database, .com: https://www.iana.org/domains/root/db/com.html
- IANA, Root Zone Database, .id: https://www.iana.org/domains/root/db/id.html
- IANA, Root Zone Database, .jp: https://www.iana.org/domains/root/db/jp.html
- Wikimedia Meta-Wiki, List of Wikipedias: https://meta.wikimedia.org/wiki/List_of_Wikipedias
- Example Domain: https://example.com/
- Wikipedia, Domain name (general background reference): https://en.wikipedia.org/wiki/Domain_name
