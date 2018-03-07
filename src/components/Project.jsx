import React from 'react';
import Tone from 'tone';
import MeasureView from './MeasureView';

class Project extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isPlaying: false,
      transportBpm: 100,
      currentMeasure: null,
      playheadPosition: null,
      playheadScheduleId: null,
      measureArray: [
        {"measurePosition" : 0, "time" : "0:0:0", "pitch" : "C3", "velocity": 0.9},
        {"measurePosition" : 1, "time" : "0:0:1", "pitch" : "D3", "velocity": 0.9},
        {"measurePosition" : 2, "time" : "0:0:2", "pitch" : "E3", "velocity": 0.9},
        {"measurePosition" : 3, "time" : "0:0:3", "pitch" : "G3", "velocity": 0.9},
        {"measurePosition" : 4, "time" : "0:1:0", "pitch" : "C4", "velocity": 0.9},
        {"measurePosition" : 5, "time" : "0:1:1", "pitch" : "D4", "velocity": 0.9},
        {"measurePosition" : 6, "time" : "0:1:2", "pitch" : "E4", "velocity": 0.9},
        {"measurePosition" : 7, "time" : "0:1:3", "pitch" : "G4", "velocity": 0.9},
        {"measurePosition" : 8, "time" : "0:2:0", "pitch" : "C5", "velocity": 0.9},
        {"measurePosition" : 9, "time" : "0:2:1", "pitch" : "D5", "velocity": 0.9},
        {"measurePosition" : 10, "time" : "0:2:2", "pitch" : "E5", "velocity": 0.9},
        {"measurePosition" : 11, "time" : "0:2:3", "pitch" : "G5", "velocity": 0.9},
        {"measurePosition" : 12, "time" : "0:3:0", "pitch" : "C6", "velocity": 0.9},
        {"measurePosition" : 13, "time" : "0:3:1", "pitch" : "D6", "velocity": 0.9},
        {"measurePosition" : 14, "time" : "0:3:2", "pitch" : "E6", "velocity": 0.9},
        {"measurePosition" : 15, "time" : "0:3:3", "pitch" : "G6", "velocity": 0.9}
      ],
    };
    this.transport = Tone.Transport;
    this.transport.bpm.value = this.state.transportBpm;
    this.transport.setLoopPoints("0:0:0", "1:0:0");
    this.transport.loop = true;

    //this.harpPart0 =
    new Tone.Part(function(time, value) {
    	//the value is an object which contains both the note and the velocity
      const synth = new Tone.Synth();
      synth.toMaster();
    	synth.triggerAttackRelease(value.pitch, "16n", time, value.velocity);
    }, this.state.measureArray.filter((note) => note.pitch)
    ).start("0:0:0");
    // console.log(this.state.measureArray);

    this.handleStartMeasurePlayback = this.handleStartMeasurePlayback.bind(this);
    this.handleStopMeasurePlayback = this.handleStopMeasurePlayback.bind(this);
    this.handlePitchValueChange = this.handlePitchValueChange.bind(this);
  }

  handlePitchValueChange(newPitch, notePosition){
    console.log(`newPitch: ${newPitch}`);
    console.log(`notePosition: ${notePosition}`);
    const newMeasureArray = this.state.measureArray.slice();
    newMeasureArray[notePosition].pitch = newPitch;

    this.setState({ measureArray: newMeasureArray });
  }

  handleStartMeasurePlayback(){
    // console.log(`Start playback pressed`);

    //set playhead to update position with every 16th note
    const playheadSchedule = this.transport.scheduleRepeat(()=> {
      this.setState({ playheadPosition: this.transport.position });
      // console.log(`scheduleRepeat for playheadPosition is still running!`);
    }, "16n");
    this.transport.start("+0.1", "0:0:0");
    this.setState({
      isPlaying: true,
      playheadScheduleId: playheadSchedule
    });
    // setTimeout(()=>{console.log(`State of isPlaying: ${this.state.isPlaying}`)}, 0);
  };

  handleStopMeasurePlayback(){
    console.log(`Stop playback pressed`);
    this.transport.stop();
    this.transport.clear(this.state.playheadScheduleId);
    this.setState({
      isPlaying: false,
      playheadPosition: null,
      playheadScheduleId: null
    });
    // setTimeout(()=>{console.log(`State of isPlaying: ${this.state.isPlaying}`)}, 0);
  }

  render(){
    return (
      <div>
        <button onClick={this.handleStartMeasurePlayback}>Temporary<br/>Playback<br/>Start</button>
        <button onClick={this.handleStopMeasurePlayback}>Temporary<br/>Playback<br/>Stop</button>
        <MeasureView
          playheadPosition={this.state.playheadPosition}
          noteArray={this.state.measureArray}
          onStartMeasurePlayback={this.handleStartMeasurePlayback}
          onStopMeasurePlayback={this.handleStopMeasurePlayback}
          onPitchValueChange={this.handlePitchValueChange}
          isPlaying={this.state.isPlaying}/>
      </div>
    );
  }

}

export default Project;
