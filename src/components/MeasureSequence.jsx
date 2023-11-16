import React from "react";
import PropTypes from "prop-types";
import NoteEntry from "./NoteEntry";
import "./../stylesheets/MeasureSequence.css";

function MeasureSequence(props) {
  return (
    <div className="measure-sequence-container">
      <h3>Measure 01</h3>
      <div className="entry-table-header">
        <div className="note-position-header"></div>
        <div className="playhead-arrow-header"></div>
        <div className="pitch-value-header">NOTE</div>
        <div className="instrument-value-header">INSTR</div>
        <div className="command-value-header">CMD</div>
      </div>
      <div className="note-entries">
        {props.noteArray.map((note, index) => (
          <NoteEntry
            onPitchValueChange={props.onPitchValueChange}
            playheadPosition={props.playheadPosition}
            time={note.time}
            position={note.measurePosition}
            pitch={note.pitch}
            instrument={note.instrument}
            commandType={note.commandType}
            commandValue={note.commandValue}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

MeasureSequence.propTypes = {
  noteArray: PropTypes.arrayOf(PropTypes.object),
  playheadPosition: PropTypes.string,
  isPlaying: PropTypes.bool,
  onPitchValueChange: PropTypes.func,
};

export default MeasureSequence;
