// declare a new SimpleSynth
var synth = new Tone.Synth();
var isPlaying = false;

//connect synth to the master output so it can be heard
synth.toMaster();

//trigger a C4 note, then trigger release 0.25s later
// synth.triggerAttack("C4", time);
// synth.triggerRelease(time + 0.25);
//do the same with a single command
// synth.triggerAttackRelease('C4', 0.25);

var pattern = new Tone.Pattern(
  function(time, note) {
    synth.triggerAttackRelease(note, '8n');
  },
  ['C4', 'E4', 'G4', 'A4']
);

pattern.start(0);

function togglePlayback() {
  if (isPlaying) {
    console.log('stop playback');
    Tone.Transport.stop();
  } else {
    console.log('start playback');
    Tone.Transport.start();
  }
  isPlaying = !isPlaying;
}

// Tone.Transport.start();
$(document).ready(function() {
  document.getElementById('toggle-play').onclick = togglePlayback;
});
