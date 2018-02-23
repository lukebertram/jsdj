// declare a new SimpleSynth
var synth = new Tone.Synth();

//connect synth to the master output so it can be heard
synth.toMaster();

//trigger a C4 note, then trigger release 0.25s later
// synth.triggerAttack("C4", time);
// synth.triggerRelease(time + 0.25);
//do the same with a single command
synth.triggerAttackRelease("C4", 0.25);

var pattern = new Tone.Pattern(function(time, note){
  synth.triggerAttackRelease(note, 0.25);
}, ['C4', 'E4', 'G4', 'A4']);

pattern.start(0);

// Tone.Transport.start();
