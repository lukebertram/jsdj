# JSDJ

#### A browser-based DAW build with Tone.js, React and Redux, February 23rd, 2018

#### By **Luke Bertram**

## Description

JSDJ aims to be a small-scale digital audio workstation (DAW) that will allow users to compose and play back simple chip-music-style songs in the browser. It is being built as a capstone project for my JavaScript/React studies at Epicodus code school in Portland, OR.

## Project Notes

I've wasted a lot of time thinking about how this project is going to look without even knowing if the Tone.js library is capable of offering the kind of controls necessary for the tracker-style interface I've been considering. In this initial phase of the project, it seems more important to dig into Tone.js and see what it can do. Once I understand how to implement it and provide user controls, I'll have a better idea of what controls are even available to include in the UI. Then I can figure out how to lay them out.

## Capstone Proposal
**Name of Student:** Luke Bertram

**Name of Project:** JSDJ

**Project’s Purpose or Goal:** Provide an interface for composing simple songs

List the absolute minimum features the project requires to meet this purpose or goal:

* Ability to add notes of user specified pitch and envelope to a visual grid or timeline using a mouse or keyboard

* Ability to chain musical phrases together into a longer song

* Ability to play back programmed sequences

What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) will you use to create this MVP? List them all here. Be specific.

* React/Redux

* Tone.js library for music synthesis

* Node.js for allowing users to save song files on their own machine

If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: Be specific.

* Ability to program and play back multiple channels for harmony, bass, percussion

* Ability to sign up for a user account and save files to a database

* Ability to post songs on a publicly viewable list

* Ability to share songs via copy/paste-able link

What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?

* Firebase/firestore/AWS database for user info/file storage

## Tone.js Resources

* [Arpeggiator Tutorial](https://github.com/Tonejs/Tone.js/wiki/Arpeggiator)
