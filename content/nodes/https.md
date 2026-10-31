---
id: https
title: "HTTPS and Encryption Basics"
type: concept
part: network
status: published
requires: [http]
related: [cookies-and-privacy, web-browser, web-hosting]
summary: "HTTPS is HTTP sent inside an encrypted connection, so that other people on the network cannot read or secretly change the messages between your browser and a website."
read_minutes: 6
questions:
  - what is https
  - what is the difference between http and https
  - what is encryption
  - what is a key in encryption
  - what is a certificate on a website
  - does https mean a website is safe
aliases: [hypertext transfer protocol secure, encryption, decryption, tls, transport layer security, ssl, secure sockets layer, certificate, digital certificate, certificate authority, public key, private key, secret key, ciphertext, plaintext, cipher]
sources:
  - title: "MDN Web Docs: HTTPS (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/HTTPS
  - title: "MDN Web Docs: Encryption (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/Encryption
  - title: "MDN Web Docs: Cryptography (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/Cryptography
  - title: "MDN Web Docs: Transport Layer Security (TLS)"
    url: https://developer.mozilla.org/en-US/docs/Web/Security/Transport_Layer_Security
  - title: "MDN Web Docs: TLS (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/TLS
  - title: "MDN Web Docs: Symmetric-key cryptography (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/Symmetric-key_cryptography
  - title: "MDN Web Docs: Public-key cryptography (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/Public-key_cryptography
  - title: "MDN Web Docs: Certificate authority (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/Certificate_authority
  - title: "MDN Web Docs: SSL (glossary)"
    url: https://developer.mozilla.org/en-US/docs/Glossary/SSL
  - title: "RFC 8446, The Transport Layer Security (TLS) Protocol Version 1.3 (August 2018)"
    url: https://www.rfc-editor.org/rfc/rfc8446.html
  - title: "RFC 2818, HTTP Over TLS (May 2000)"
    url: https://www.rfc-editor.org/rfc/rfc2818.html
  - title: "RFC 2246, The TLS Protocol Version 1.0 (January 1999)"
    url: https://www.rfc-editor.org/rfc/rfc2246.html
  - title: "Wikipedia: Caesar cipher"
    url: https://en.wikipedia.org/wiki/Caesar_cipher
  - title: "Google Chrome Help: Check if a site's connection is secure"
    url: https://support.google.com/chrome/answer/95617?hl=en&co=GENIE.Platform%3DDesktop
  - title: "Microsoft Support: Securely browse the web in Microsoft Edge"
    url: https://support.microsoft.com/en-US/edge/securely-browse-the-web-in-microsoft-edge
  - title: "Chrome for Developers: Privacy and security panel"
    url: https://developer.chrome.com/docs/devtools/security
  - title: "Microsoft Edge DevTools: Understand security issues using the Security tool"
    url: https://learn.microsoft.com/en-us/microsoft-edge/devtools/security/
  - title: "Firefox DevTools User Docs: Network request details"
    url: https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html
  - title: "Firefox DevTools User Docs: Network Monitor"
    url: https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html
  - title: "Chrome for Developers: Open Chrome DevTools"
    url: https://developer.chrome.com/docs/devtools/open
author: ai
reviewed_by: ai
reviewed_at: 2026-10-31
updated: 2026-10-31
---

> **In one sentence:** HTTPS is HTTP sent inside an encrypted connection, so that other people on the network cannot read or secretly change the messages between your browser and a website.

## Why should I care?

Many web addresses start with `https://`, such as `https://developer.mozilla.org`. The extra **S** stands for **Secure**.

In [[http]], you saw that requests and responses are lines of text. With plain HTTP, they travel as they are. Chrome's help pages warn that on such a site, "someone may be able to view and change the information you send and get through this site".

## Analogy

Think of sending a message by post.

- **HTTP is like a postcard.** Anyone who handles it on the way can read it. Someone could even change the words.
- **HTTPS is like a letter in a locked box.** Only you and the receiver have the key. People on the way cannot open it. If someone breaks the box, the receiver will notice.

**Where the analogy breaks down:** in HTTPS, the "lock" is mathematics, and a "key" is a number. Also, the two sides never meet to share a key. Your browser and the server agree on a secret key each time they connect, over the network itself, even if someone is listening. How this works is beyond this page.

## How it actually works

### What encryption means

MDN, a website that documents how the web works, calls **cryptography** "the science that studies how to encode and transmit messages securely". **Encryption** turns a readable message (**plaintext**) into scrambled text (**ciphertext**). **Decryption** turns it back. The method is called a **cipher**.

An old example is the **Caesar cipher**, named after Julius Caesar, who used it in his private letters. You move each letter a fixed number of places in the alphabet. With a move of 3, A becomes D, so `HELLO` becomes `KHOOR`. The number 3 is the **key**: the secret you need to scramble and unscramble.

It is weak: with the English alphabet there are only 25 possible moves, so an attacker can try them all. MDN says the cipher is often public, so the key must stay secret. Without the key, decryption is "mathematically hard to perform".

### Two kinds of keys

- **One shared secret key** locks and unlocks. MDN calls this **symmetric-key cryptography** ("symmetric" means the same on both sides). It is "highly efficient".
- **A pair of keys:** a **public** key that anyone may have, and a **private** key that only its owner keeps secret. What one key locks, only the other can unlock. This is **public-key cryptography**. MDN says it is usually much slower.

A key pair can also make a **digital signature**. MDN explains: the owner uses the private key to sign, and anyone can use the public key to check. Only the owner of the private key could have made that signature.

In HTTPS, key pairs help prove who the server is, and help both sides agree on a shared secret key. Then the fast shared key encrypts the messages.

### TLS: the protocol that adds the S

MDN says HTTPS uses a protocol called **TLS** (Transport Layer Security) to encrypt all communication. TLS starts with a **handshake**: setup messages sent before any HTTP message.

*Diagram: a browser on the left and a server on the right. First they exchange handshake messages (single-line arrows): they agree on the TLS version and ciphers, the server sends its certificate, the browser checks it, and both agree on a secret key. After that, the HTTP request and the HTTP response travel between them encrypted (double-line arrows).*

```
 BROWSER (client)                              SERVER
     |                                            |
     |  1. Hello: which TLS version and ciphers?  |
     | -----------------------------------------> |
     |  2. Answer, and the server's certificate   |
     | <----------------------------------------- |
     |  3. Browser checks the certificate.        |
     |     Both sides agree on a secret key.      |
     |                                            |
     |  4. Encrypted HTTP request                 |
     | =========================================> |
     |  5. Encrypted HTTP response                |
     | <========================================= |
```

(This order is simplified.) After the handshake, MDN says, the two sides use the secret key to encrypt "any messages, including HTTP headers as well as bodies".

The 2018 official description of TLS 1.3 lists what it protects:

1. **Confidentiality:** after setup, the data "is only visible to the endpoints": your browser and the server.
2. **Integrity:** the data "cannot be modified by attackers without detection".
3. **Authentication:** the server always proves who it is.

They should hold even against "an attacker who has complete control of the network".

### Certificates: proving who the server is

How does your browser know it reached the real website? The server sends a **digital certificate**. It contains the server's public key and the website's name, such as `developer.mozilla.org`. This lets the browser know "that it really is connecting to" that site, MDN says.

A **certificate authority** (CA) is an organization that signs certificates. Its digital signature says that the information is correct. Browsers come with a built-in list of trusted certificates, called **root certificates**. The website's certificate must be signed by a CA that a root certificate's owner trusts, directly or through other CAs. If something is wrong, Chrome may show a full-page error, "Your connection is not private". Its help pages say this means "a problem with the site, the network, or your device".

## How it came to be

Before TLS came **SSL** (Secure Sockets Layer). MDN says the company Netscape released SSL version 3.0 in 1996.

- **January 1999:** TLS 1.0 was published as RFC 2246. It says it is based on SSL 3.0. (RFCs are numbered internet documents.)
- **May 2000:** RFC 2818, "HTTP Over TLS", described the `https` way of writing web addresses.
- **August 2018:** TLS 1.3 was published as RFC 8446. MDN says it is now the most widely used version.

Let's Encrypt, a nonprofit certificate authority, gives certificates for free.

## 🧪 Try it in your browser

You need a computer with a keyboard. These steps change nothing.

1. Open MDN's page in a new tab: [developer.mozilla.org/en-US/docs/Web/HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP).
2. Open the security details:
   - **Chrome:** press `Ctrl` + `Shift` + `J` (Mac: `Cmd` + `Option` + `J`). Then press `Ctrl` + `Shift` + `P` (Mac: `Cmd` + `Shift` + `P`). A box for typing commands opens. Type `privacy`, select **Show privacy and security**, and press `Enter`. In the panel that opens, go to **Security**, then **Overview**.
   - **Edge:** press `Ctrl` + `Shift` + `I` (Mac: `Cmd` + `Option` + `I`). Click the **Security** tab. If you do not see it, click the **More tools** button and choose **Security**.
   - **Firefox:** press `Ctrl` + `Shift` + `E` (Mac: `Cmd` + `Option` + `E`). Reload the page. Click the first row, then the **Security** tab in the panel that opens.
3. **What you should see:** in Chrome and Edge, the overview does **not** show the warning "This page is not secure". Click the **View certificate** button. Look for the website's name and the certificate authority that signed it. In Firefox, the Security tab shows the protocol, such as **TLS 1.3** or **TLS 1.2**, and the certificate details.
4. Close the certificate window, then close the tab.

## Common misunderstandings

- **"HTTPS means the website is honest."** No. HTTPS protects the connection. Microsoft warns that "even websites with valid certificates may have a poor reputation". Check that the name in the address bar is the website you meant to visit.
- **"Encrypted means nobody can read my data."** Not quite. The website you send it to can read it. Encryption stops people on the way.

## Recap

- Encryption turns readable text into unreadable text with a cipher and a secret key. Only someone with the right key can turn it back.
- HTTPS is HTTP inside TLS. A handshake checks the server's certificate and sets up a secret key. After that, every message is encrypted.
- HTTPS keeps messages private and unchanged on the way, and proves which website you reached. It does not prove that the website is honest.

## Sources

- MDN Web Docs, HTTPS (glossary): https://developer.mozilla.org/en-US/docs/Glossary/HTTPS
- MDN Web Docs, Encryption (glossary): https://developer.mozilla.org/en-US/docs/Glossary/Encryption
- MDN Web Docs, Cryptography (glossary): https://developer.mozilla.org/en-US/docs/Glossary/Cryptography
- MDN Web Docs, Transport Layer Security (TLS): https://developer.mozilla.org/en-US/docs/Web/Security/Transport_Layer_Security
- MDN Web Docs, TLS (glossary): https://developer.mozilla.org/en-US/docs/Glossary/TLS
- MDN Web Docs, Symmetric-key cryptography (glossary): https://developer.mozilla.org/en-US/docs/Glossary/Symmetric-key_cryptography
- MDN Web Docs, Public-key cryptography (glossary): https://developer.mozilla.org/en-US/docs/Glossary/Public-key_cryptography
- MDN Web Docs, Certificate authority (glossary): https://developer.mozilla.org/en-US/docs/Glossary/Certificate_authority
- MDN Web Docs, SSL (glossary): https://developer.mozilla.org/en-US/docs/Glossary/SSL
- RFC 8446, The Transport Layer Security (TLS) Protocol Version 1.3: https://www.rfc-editor.org/rfc/rfc8446.html
- RFC 2818, HTTP Over TLS: https://www.rfc-editor.org/rfc/rfc2818.html
- RFC 2246, The TLS Protocol Version 1.0: https://www.rfc-editor.org/rfc/rfc2246.html
- Wikipedia, Caesar cipher: https://en.wikipedia.org/wiki/Caesar_cipher
- Google Chrome Help, Check if a site's connection is secure: https://support.google.com/chrome/answer/95617?hl=en&co=GENIE.Platform%3DDesktop
- Microsoft Support, Securely browse the web in Microsoft Edge: https://support.microsoft.com/en-US/edge/securely-browse-the-web-in-microsoft-edge
- Chrome for Developers, Privacy and security panel: https://developer.chrome.com/docs/devtools/security
- Microsoft Edge DevTools, Understand security issues using the Security tool: https://learn.microsoft.com/en-us/microsoft-edge/devtools/security/
- Firefox DevTools User Docs, Network request details: https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html
- Firefox DevTools User Docs, Network Monitor: https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html
- Chrome for Developers, Open Chrome DevTools: https://developer.chrome.com/docs/devtools/open
