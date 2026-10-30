---
id: sound-as-numbers
title: "Sound as Numbers"
type: concept
part: machine
status: published
requires: [byte]
related: [what-is-information, images-as-numbers, text-as-numbers, data-size-units]
summary: "A computer stores sound by measuring the sound wave thousands of times every second and saving each measurement as a number."
read_minutes: 6
questions:
  - how does a computer store sound
  - how is music stored as numbers
  - what is a sample rate
  - what does 44.1 kHz mean
  - what is bit depth in audio
  - why are music files compressed
aliases: [digital audio, audio sampling, sample rate, bit depth, PCM, pulse code modulation]
sources:
  - title: "MDN Web Docs: Digital audio concepts"
    url: https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Audio_concepts
  - title: "MDN Web Docs: AudioContext() constructor"
    url: https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/AudioContext
  - title: "MDN Web Docs: BaseAudioContext.sampleRate"
    url: https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/sampleRate
  - title: "ETHW (IEEE History Center): Pulse Code Modulation"
    url: https://ethw.org/Pulse_Code_Modulation
  - title: "ETHW (IEEE History Center): Milestones: Compact Disc Audio Player, 1979"
    url: https://ethw.org/Milestones:Compact_Disc_Audio_Player,_1979
  - title: "MDN Web Docs: Autoplay guide for media and Web Audio APIs"
    url: https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Autoplay
  - title: "Chrome for Developers: Autoplay policy in Chrome"
    url: https://developer.chrome.com/blog/autoplay
  - title: "NIST: Prefixes for binary multiples"
    url: https://physics.nist.gov/cuu/Units/binary.html
  - title: "Chrome for Developers: Open Chrome DevTools"
    url: https://developer.chrome.com/docs/devtools/open
  - title: "Microsoft Edge DevTools: Keyboard shortcuts"
    url: https://learn.microsoft.com/en-us/microsoft-edge/devtools/shortcuts/
  - title: "Firefox DevTools User Docs: Web Console"
    url: https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html
  - title: "Chrome for Developers: Self-XSS protection (paste warning in the console)"
    url: https://developer.chrome.com/blog/self-xss
author: ai
reviewed_by: ai
reviewed_at: 2026-10-31
updated: 2026-10-31
---

> **In one sentence:** A computer stores sound by measuring the sound wave thousands of times every second and saving each measurement as a number.

## Why should I care?

On a computer or a phone, songs and voice messages are stored as numbers, made of [[byte|bytes]]. This page shows how. It also explains labels like "44.1 kHz" or "16-bit".

## Analogy

Imagine you see a smooth, curvy line drawn on paper, like a row of hills. You want to send it to a friend using only numbers.

Every 1 centimeter, you measure how high the line is, round it to whole centimeters, and write it down: 2, 5, 7, 5, 2, 0... Your friend draws a dot at each height, at the same distances, and joins the dots. Now they have a copy of your line.

The more often and the more exactly you measure, the closer the copy is to the original.

**Where the analogy breaks down:** your friend joins the dots with straight lines. Real devices use filters that make the wave smooth again. Also, a computer measures an electrical signal from a microphone, **tens of thousands of times every second**.

## How it actually works

### Sound is a wave

Sound is a **vibration**. When something makes a sound, such as a speaker, it vibrates. This makes the tiny particles of the material around it vibrate too, and they pass it on. The vibration travels outward as a **wave**.

A wave has two important features:

- **Amplitude:** how far it moves away from its resting position (the middle line in the diagram below). A bigger amplitude means a **louder** sound.
- **Frequency:** how many peaks of the wave pass each second. A higher frequency means a **higher** sound. Frequency is measured in **hertz** (Hz), which means "per second".

### From wave to numbers

A **microphone** turns the sound wave into an **electrical signal**: electricity that gets stronger and weaker in the same pattern as the wave.

Then a small electronic **circuit** (a set of connected electronic parts) measures the strength of that signal at regular moments. It saves each measurement as a number. Each measurement is called a **sample**.

```
height
  ^
  |        *   *
  |     *         *
  |   *              *
  +--*-----------------*------------------*--> time
  |                       *              *
  |                          *        *
  |                             *  *
  |
  each * is one sample: one measurement saved as a number
```

*Diagram: a sound wave goes up and down over time. Stars mark the moments when the computer measures it. Each star becomes one number.*

So a sound becomes a list of numbers, one for each moment. (Points below the middle line get numbers too. This page leaves out how.) Sound stored as numbers like this is called **digital** sound.

To play the sound back, a device uses the numbers to rebuild a smooth wave, close to the original. A speaker turns it into vibrations again.

### Two settings decide the quality

**1. Sample rate: how often you measure.** The sample rate is the number of samples per second. Music on a CD uses **44,100 samples every second**. This is often written **44.1 kHz** ("kilo" means 1,000, so 44.1 kHz is 44,100 Hz).

To capture a sound correctly, the sample rate must be **more than twice** its highest frequency. Humans hear up to about 20,000 Hz. Twice that is 40,000, and 44,100 is more, so it can capture every frequency people can hear.

**2. Bit depth: how exactly you measure.** Bit depth is how many bits each sample uses. Each measurement must be saved as one of a fixed set of **levels**. More bits means more levels, like a ruler with finer marks. With 8 bits (one byte), there are 256 levels. CD music uses **16 bits** (2 bytes) per sample. That gives 65,536 levels (2 multiplied by itself 16 times), so each measurement is much more exact.

### Stereo: two lists

**Stereo** sound has two **channels** (separate sound lists): one for the left ear and one for the right ear. That is why headphones can play different sounds in each ear.

### How big is it?

Let's count the bytes for one second of CD music:

44,100 samples × 2 bytes × 2 channels = **176,400 bytes**

One minute is 60 times that: more than 10 million bytes. So most music files are **compressed**: a program makes them smaller. Some methods, called **lossless**, keep every detail. **Lossy** methods throw away some detail. Lossy files can be 5 to 20% of the original size.

## How it came to be

In **1937**, Alec Reeves came up with the idea of **Pulse Code Modulation (PCM)**. He wanted to use a binary form of sound to overcome **noise** (unwanted interference that spoils the signal) on long-distance telephone lines. With PCM, a voice is sent as coded on-off pulses, like 1s and 0s, instead of a smooth signal.

PCM later changed how people record and listen to music. On 8 March 1979, the company Philips showed reporters from around the world a **Compact Disc (CD)** audio player. It played sound that had been recorded digitally. Philips then worked with Sony on the system, and the CD became a worldwide standard. The finished CD standard stores stereo sound with 16-bit samples, 44,100 times per second, without compression.

## 🧪 Try it in your browser

Let's ask your browser how many samples per second it uses. You met the browser **console** in [[counting-systems]].

**Safety rule:** only type instructions in the console that you understand or that come from a source you trust. Never paste anything a stranger sends you. The lines on this page are safe: they play no sound and change nothing.

1. In Chrome, Edge or Firefox, open any ordinary web page, for example `https://example.com`.
2. Open the console:
   - **Windows:** press `Ctrl` + `Shift` + `J` (in Firefox: `Ctrl` + `Shift` + `K`)
   - **Mac:** press `Cmd` + `Option` + `J` (in Firefox: `Cmd` + `Option` + `K`)
3. You may see some messages already. Click the empty line at the bottom.
4. **Type** this line exactly, with the same capital letters (some browsers block pasting in the console), then press `Enter`. You do not need to understand the words in it:

   ```
   new AudioContext().sampleRate
   ```

5. You should see a number, often `44100` or `48000`. This is how many samples per second your browser uses for your device's sound output. Yours depends on your device. Other messages may also appear in the console. You can ignore them: this line creates no sound.
6. Now count the bytes for one second of CD music. In the console, `*` means "multiply". Type this line and press `Enter`:

   ```
   44100 * 2 * 2
   ```

7. You should see `176400`: 44,100 samples, 2 bytes each, for 2 channels.
8. When you are done, close the tab.

**On a phone:** use a calculator to multiply 44,100 × 2 × 2.

## Common misunderstandings

- **"Digital sound has steps in it."** If you joined the samples with flat steps, the sound would be unpleasant. Modern devices use filters to make the wave smooth again.
- **"More samples per second is always better."** Not for listening. Rates like 96,000 or 192,000 are more than needed for the sounds people can hear.
- **"A music file keeps every sample exactly."** Often it does not. Most sound compression methods are lossy: they throw away some detail.

## Recap

- A computer stores sound as a list of numbers, called samples: measurements of the sound wave.
- The sample rate (how often) and the bit depth (how exactly) decide the quality. CD music uses 44,100 samples per second and 16 bits per sample.
- Sound files get large fast, so they are often compressed.

## Sources

- MDN Web Docs, Digital audio concepts: https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Audio_concepts
- MDN Web Docs, AudioContext() constructor: https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/AudioContext
- MDN Web Docs, BaseAudioContext.sampleRate: https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/sampleRate
- ETHW (IEEE History Center), Pulse Code Modulation: https://ethw.org/Pulse_Code_Modulation
- ETHW (IEEE History Center), Milestones: Compact Disc Audio Player, 1979: https://ethw.org/Milestones:Compact_Disc_Audio_Player,_1979
- MDN Web Docs, Autoplay guide for media and Web Audio APIs: https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Autoplay
- Chrome for Developers, Autoplay policy in Chrome: https://developer.chrome.com/blog/autoplay
- NIST, Prefixes for binary multiples: https://physics.nist.gov/cuu/Units/binary.html
- Chrome for Developers, Open Chrome DevTools: https://developer.chrome.com/docs/devtools/open
- Microsoft Edge DevTools, Keyboard shortcuts: https://learn.microsoft.com/en-us/microsoft-edge/devtools/shortcuts/
- Firefox DevTools User Docs, Web Console: https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html
- Chrome for Developers, Self-XSS protection: https://developer.chrome.com/blog/self-xss
