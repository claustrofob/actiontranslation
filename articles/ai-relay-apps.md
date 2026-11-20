---
layout: article
lang: en
title: "AI-Relay Apps: Why It's Too Early to Bury Apps"
description: "Apps built on someone else's AI model aren't doomed: a model can become the heart of an app, but it won't replace its face."
---

# AI-Relay Apps: Why It's Too Early to Bury Apps

November 20, 2026

In [Fatbobman’s Swift Weekly (issue #158)](https://fatbobman.com/en/weekly/issue-158/), there was a column I can't stop thinking about. The author noticed that many new apps are built the same way: a polished interface, a set of rules and prompts for the model, and someone else's model in the cloud. He calls them “AI-relay apps”: they don't “think” on their own, they just pass the user's request to a model and hand back the answer.

The column's conclusion is unsettling: general-purpose AI assistants like Claude or ChatGPT can already do the same thing, so the main competitor of a relay app is the very company that builds the model. I want to push back on that conclusion — not entirely, but on the main point.

## Where I agree

The definition is accurate, and the idea is right: an AI assistant can often take over the job of such an app at no extra cost. If a product's whole value is a clever prompt, sooner or later someone will repeat it, and there's almost nothing to protect it with. But that doesn't mean apps as such are doomed.

## Apps have been buried before

People have been predicting the death of apps for more than a decade. Remember Google's Chromebooks: the whole idea was that any program could be replaced by a website in a browser. Yet apps didn't go anywhere — eventually even Chromebooks learned to run Android apps. Every new wave of technology promises that “now everything will live in one window,” and every time it turns out people need many different windows.

## An app is, above all, a way to present data

A good specialized app is more than “logic inside.” It's a way to gather data from several sources — the internet, other apps, the phone's sensors — organize it, and present it so the important part is clear at a glance.

And the same data can be organized in very different ways. That's exactly why there are dozens of email clients and note-taking apps: everyone's emails are the same, but ideas of what's convenient differ. People would rather pick an app that shows things the way they like right away than spend time tailoring one “do-everything” tool. A general-purpose AI assistant is exactly that kind of tool: it can do anything, but every time you have to ask, explain, and wait.

## My own example

I'm currently learning Polish and reading books in it, so I constantly need translations and explanations of new words. Modern dictionaries, in my view, are practically dead, while language models translate many times better. First I wrote a skill for Claude — a set of instructions the model applies to every request. It figured out what kind of text it was given and answered differently:

- for a single word — all its meanings with examples;
- for an idiom — its meaning and examples of use in different situations;
- for arbitrary text — just an accurate translation.

The quality was excellent, but every translation took a whole round trip: copy the text, open Claude, paste, wait for the answer, go back to the book. Dozens of times an evening.

So I built exactly that kind of relay app — [Action Translation](https://apps.apple.com/pl/app/action-translation/id6831944064). It gives you a translation in two taps without leaving the book and keeps a history of your translations. Its “brain” is the same as my Claude skill, but now translation is part of reading instead of interrupting it. The value lies not in the model itself, but in how naturally it fits into what you're already doing. The app itself is free: you only pay for tokens, the amount of text the model processes.

## Conclusion

Today AI is the undisputed leader in analyzing and processing data, and building a product on nothing but a clever prompt is risky. But to make that data convenient to use, you still need a well-designed interface: fast, built into the place where the person already is, and showing exactly what's needed. A model can become the heart of an app, but it won't replace its face.
