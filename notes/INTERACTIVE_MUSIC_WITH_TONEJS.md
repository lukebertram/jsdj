# Interactive Music with Tone.js

Notes on a [video presentation about Tone.js](https://medias.ircam.fr/x9d4352) by Yotam Man, creator of Tone.js

##Introduction

Tone.js is considered by its creator to be a web audio _framework_ rather than just a JavaScript library, because it seeks to "encompass both sound creation as well as event scheduling."

## Needs for Making Interactive Music

* Needs to speak in **musical terminology** (beats/notes/decibels)
* Familiar DAW metaphors - to onboard musicians in their current working production
* Sequencing & Scheduling Events
* Control Signals (Synchronization)
* Scores/Presets - need to be able to define, tweak and view your music in an intuitive form.

## Foundations of Tone.js

* Tone.Time
* Tone.Transport
* Tone.Signal
  These don't make sound themselves but allow for composition

## Tone.Time

tempo-relative time encoding - allows developers to think in terms of bars and beats instead of seconds

* every method that accepts `time` accepts `Tone.Time`

**Tone.Time Example**

* 1.5 -> 1.5 seconds
* "4n" -> a quarter note _(format borrowed from MAXMSP)_
* "8t" -> an eighth note triplet
* "+1.5" -> 1.5 seconds from now
* "32:2:1" -> bars:beats:sixteenths _(format borrowed from Ableton Live)_
* "4hz" -> 0.25 seconds
* "4n \* (7/4)" -> a quarter note septuplet

These expressions are all relative to the current tempo as defined by the Tone.Transport

## Tone.Transport

the time-keeper, provides `start`, `stop`, `pause` methods

* `Tone.Transport.start()` and `Tone.Transport.stop()`
* `Tone.Transport.setBpm(240,4)` // ramp to 240 bpm over 4sec
* ```
  Tone.Transport.setTimeline(function(time){
    //trigger chorus
  }, "32:0:0");
  ```
  Allows for scheduling events along a seekable, loopable timeline; syncing sources/LFOs/tempos to timeline

## Tone.Signal

control voltage _(?)_

allows users to define their own audio params _(?)_

* ```
  signal.connect(osc0.frequency);
  var mult = new Tone.Multiply(1.5); //a fifth
  signal.chain(mult, osc1.frequency);
  ```
  This creates a two-tone signal whose tones are always a fifth apart.

### Functions

* Add/Subtract/Multiply/Scale functions can be applied to signals
* Also more complex logical operators like `Min`, `Max`, `Clip`, and `Abs` _(absolute value?)_
* GreaterThan/LessThan/Equal/IfThenElse

* an example of **syncing** an LFO to the master tempo:

  ```
    var lfo = new Tone.LFO("4n", 200, 1200);
    lfo.connect(filter.frequency);
    lfo.sync();
  ```

## Synths and Effects

making sounds

### Components:

* Tone.Envelope
* Tone.Gate
* Tone.MultibandSplitter
* Tone.CrossFade
* Tone.FeedbackCombFilter
* Tone.LFO
* and many more

### Effects:

* Tone.AutoFanner
* Tone.Freeverb
* tone.Chebyshev
* tone.PingPongDelay
* tone.StereoWidener
* also more here

### Synthesizers:

all available in monophonic and polyphonic forms

* Tone.AMSynth
* Tone.FMSynth
* Tone.PluckSynth
* Tone.DuoSynth
* Tone.NoiseSynth
* more again

## Making Music

a combination of low-level sound design (at the unit-generator level) and high-level composition happens at the timeline level where events are scheduled and organized.

## JSON Descriptions:

These sorts of JSON-described instruments provide a good way for testing out and dialing in values. These JSON objects can be used in constructors and set methods and provide a simple way to "separate the orchestra from the score."

### Instruments

```
var synth = new tone.MonoSynth({
  "oscillator" : {
    "type" : "pwm"
  },
  "envelope" : {
    "attack" : 0.001,
    "sustain" : 0.2
  },
  "filter" : {
    "type" : "highpass",
    "rolloff" : -24
  }
});
```

### Presets

`synth.setPreset("CoolGuy");`

`chorus.setPreset("rattler");`

### Scores

A JSON-based score format which contains arrays of events with channel names. These channels can then be uniquely routed along with all events that come out of that channel.

```
Tone.Note.parseScore({
  "piano" : [["0:0:0", "C3"], ["0:0:2", "E2"], ...],
  "kick" " ["0:0:0", "0:2:0 + 8t", ...]
});

Tone.Note.route("piano", function(time, note){
  //trigger the piano
});
```

# Yotam Man has already written a tool that converts midi information into a score JSON object! Find this tool!
