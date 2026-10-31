---
id: cloud-computing
title: "Cloud Computing: What \"the Cloud\" Really Is"
type: concept
part: web
status: published
requires: [server, physical-internet]
related: [web-hosting, client-and-server]
summary: "Cloud computing means using a company's servers, storage and programs over the internet when you need them, and usually paying only for what you use."
read_minutes: 6
questions:
  - what is the cloud
  - what is cloud computing
  - where is the cloud
  - is the cloud in the sky
  - what are iaas paas and saas
  - is the cloud the same as the internet
aliases: [the cloud, cloud, cloud services, cloud provider, cloud storage, cloud hosting, IaaS, PaaS, SaaS, virtual machine, public cloud, private cloud]
sources:
  - title: "NIST SP 800-145, The NIST Definition of Cloud Computing (P. Mell, T. Grance, September 2011)"
    url: https://csrc.nist.gov/pubs/sp/800/145/final
  - title: "NIST Computer Security Resource Center: Glossary, cloud computing"
    url: https://csrc.nist.gov/glossary/term/cloud_computing
  - title: "Microsoft Azure: What is cloud computing?"
    url: https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-computing
  - title: "Microsoft Azure: What is a virtual machine?"
    url: https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-a-virtual-machine
  - title: "Wikipedia: Cloud computing (general background reference)"
    url: https://en.wikipedia.org/wiki/Cloud_computing
  - title: "MIT Technology Review: Who Coined 'Cloud Computing'? (2011)"
    url: https://www.technologyreview.com/2011/10/31/257406/who-coined-cloud-computing/
  - title: "AWS What's New: Announcing Amazon S3, Simple Storage Service (March 14, 2006)"
    url: https://aws.amazon.com/about-aws/whats-new/2006/03/announcing-amazon-s3---simple-storage-service
  - title: "AWS: Regions and Availability Zones"
    url: https://aws.amazon.com/about-aws/global-infrastructure/regions_az/
  - title: "AWS documentation: AWS Regions"
    url: https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html
  - title: "AWS documentation: AWS IP address ranges"
    url: https://docs.aws.amazon.com/vpc/latest/userguide/aws-ip-ranges.html
  - title: "AWS documentation: Syntax for AWS IP address range JSON"
    url: https://docs.aws.amazon.com/vpc/latest/userguide/aws-ip-syntax.html
  - title: "Google Cloud documentation: Outbound IP addresses for App Engine services (mentions cloud.json)"
    url: https://docs.cloud.google.com/appengine/docs/legacy/standard/java/outbound-ip-addresses
  - title: "Microsoft Edge documentation: View a JSON file or server response with formatting"
    url: https://learn.microsoft.com/en-us/microsoft-edge/web-platform/json-viewer
  - title: "Firefox DevTools User Docs: JSON viewer"
    url: https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html
author: ai
reviewed_by: ai
reviewed_at: 2026-10-31
updated: 2026-10-31
---

> **In one sentence:** Cloud computing means using a company's servers, storage and programs over the internet when you need them, and usually paying only for what you use.

## Why should I care?

You have probably heard "it's saved in the cloud". Microsoft's guide to cloud computing names web mail, streaming video and office software as examples of services that people use this way.

The word "cloud" makes it sound like something in the sky. It is not. Later, when you put your own website online, you may use a cloud service to do it.

## Analogy

Think of **electricity at home**. You do not build a power station. You plug in a lamp, the power is there, and you pay for the amount you used.

Cloud computing works in a similar way. You do not buy your own [[server|server computers]] and take care of them. You use a company's servers over the internet, when you need them. Microsoft's guide says you "typically pay only for cloud services you use".

**Where the analogy breaks down:** electricity is used up and gone. In the cloud, your files stay stored on the company's computers. So the company keeps your data, and you need an internet connection to reach it. Also, the power from a socket is one kind of thing. Cloud services are many different things, from a whole rented computer to a finished app.

## How it actually works

### Real computers in real buildings

Microsoft describes the cloud as "an extensive network of remote servers around the world". **Remote** means far away from you. These servers sit in **data centers**: buildings full of computers.

Amazon Web Services (AWS), one cloud company, groups its data centers by place. It calls each group a **region**: "a physical location around the world where we cluster data centers". (The cables and buildings that carry the internet are the topic of [[physical-internet]].)

*Diagram: your laptop and phone, on the left, send requests through the internet to server computers in a cloud company's data centers, in two regions, on the right, and get answers.*

```
  YOU                      THE INTERNET               A CLOUD COMPANY
                                              ┌──────────────────────────┐
  laptop ───┐                                 │ region A: data centers   │
            ├──── requests and answers ──────►│  [server][server][server]│
  phone ────┘                                 │ region B: data centers   │
                                              │  [server][server][server]│
                                              └──────────────────────────┘
```

### One computer, shared by many

Wikipedia says the main technology behind cloud computing is **virtualization**: software that divides one physical computer into several "virtual" ones. A **virtual machine** is one of these: a computer made of software. Microsoft says each one gets "specific portions of CPU, memory, and storage" from the real computer. Each acts as a separate computer, independent of the others. So several customers can share one real computer.

### What makes it "cloud"

In September 2011, NIST (the US National Institute of Standards and Technology) published a definition. It describes network access to a "shared pool" of **computing resources**: things like servers, storage and programs. NIST lists five essential features. In plain words:

1. **Self-service:** you get computing power or storage yourself, without asking a person at the company.
2. **Network access:** you reach it over the network.
3. **Shared pool:** many customers share the company's computers.
4. **Grows and shrinks fast:** you can get more storage or computers, or give some back, quickly. Sometimes this happens automatically.
5. **Measured:** your use is measured, so you can see it and pay for it.

### Three ways to use it

NIST also names three "service models". They go from the most work for you to the least:

- **IaaS (Infrastructure as a Service):** **infrastructure** means the basic equipment: computers, storage and networks. You rent virtual machines and storage, and you put your own programs on them.
- **PaaS (Platform as a Service):** a **platform** is a ready place to run programs. You give the company your program, and it runs it. You do not manage the computers and storage below it.
- **SaaS (Software as a Service):** you use a finished program over the internet, such as web mail. Microsoft says it is often paid by "subscription": a regular payment.

(This is simplified. NIST also describes four "deployment models": who a cloud is for, for example one organization only, or the public.)

## How it came to be

You do not need to remember these names and dates.

Before the term "cloud computing" existed, engineers already drew networks as clouds. MIT Technology Review says that "in engineering drawings, a cloud represented the network".

The earliest known printed use of "cloud computing" is in a Compaq business plan dated November 14, 1996. It is still uncertain who invented the term: George Favaloro, who worked at Compaq, or Sean O'Sullivan, founder of a company called NetCentric.

On March 14, 2006, Amazon announced Amazon S3, "storage for the Internet", for developers (people who write programs). In the same year, it also released Amazon EC2.

## 🧪 Try it in your browser

AWS publishes a list of its internet addresses. This is only one example: Google, for instance, publishes a similar list. This only looks and changes nothing. Use a computer. On a phone, the large list is slow and hard to read.

1. In Chrome, Edge or Firefox, open `https://ip-ranges.amazonaws.com/ip-ranges.json`. It may take a few seconds. You will see many words you do not know. That is fine.
2. Find the first group under `prefixes`.
   - **If you see plain text** (Edge shows it this way): a group is the lines between a `{` and the next `}`.
   - **If you see a tidy list** (Firefox shows it this way): if there is a small `+` or arrow next to `prefixes`, click it. Then click the `+` or arrow next to the first entry under it.
3. **What you should see:** `ip_prefix` is a block of [[ip-address|IP addresses]], written in a short form with a slash, like `3.2.58.0/24`. `region` is a code, such as `eu-west-1` or `us-east-1`. Write down the region code. You can ignore the other lines, like `service`. If the region says `GLOBAL`, or starts with `us-gov` or `cn-`, look at the next group instead. (`GLOBAL` addresses can be used in many places.)
4. Open AWS's list of regions: `https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html`. Scroll to the table and find your code in the **Code** column.

**What you should see:** a name and a country for your code. For example, `us-east-1` is "US East (N. Virginia)", in the United States of America. Each region is a real place with data centers. Close both tabs when you are done.

## Common misunderstandings

- **"The cloud is in the sky" or "it is wireless".** No. It is servers in data centers, connected to the internet.
- **"The cloud is the same as the internet."** No. The internet is the network that carries the data. The cloud is the services and computers that you reach through it.

## Recap

- "The cloud" is real server computers in data centers, run by a company, that you use over the internet.
- You get what you need when you need it, share the computers with others, and usually pay for what you use.
- You can rent computers (IaaS), run your program on a platform (PaaS), or use finished software (SaaS).

## Sources

- NIST SP 800-145, The NIST Definition of Cloud Computing: https://csrc.nist.gov/pubs/sp/800/145/final
- NIST CSRC Glossary, cloud computing: https://csrc.nist.gov/glossary/term/cloud_computing
- Microsoft Azure, What is cloud computing?: https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-computing
- Microsoft Azure, What is a virtual machine?: https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-a-virtual-machine
- Wikipedia, Cloud computing (general background reference): https://en.wikipedia.org/wiki/Cloud_computing
- MIT Technology Review, Who Coined 'Cloud Computing'?: https://www.technologyreview.com/2011/10/31/257406/who-coined-cloud-computing/
- AWS What's New, Announcing Amazon S3: https://aws.amazon.com/about-aws/whats-new/2006/03/announcing-amazon-s3---simple-storage-service
- AWS, Regions and Availability Zones: https://aws.amazon.com/about-aws/global-infrastructure/regions_az/
- AWS documentation, AWS Regions: https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html
- AWS documentation, AWS IP address ranges: https://docs.aws.amazon.com/vpc/latest/userguide/aws-ip-ranges.html
- AWS documentation, Syntax for AWS IP address range JSON: https://docs.aws.amazon.com/vpc/latest/userguide/aws-ip-syntax.html
- Google Cloud documentation, Outbound IP addresses for App Engine services: https://docs.cloud.google.com/appengine/docs/legacy/standard/java/outbound-ip-addresses
- Microsoft Edge documentation, View a JSON file with formatting: https://learn.microsoft.com/en-us/microsoft-edge/web-platform/json-viewer
- Firefox DevTools User Docs, JSON viewer: https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html
