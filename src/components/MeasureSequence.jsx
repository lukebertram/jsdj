import React from 'react';
import PropTypes from 'prop-types';
import NoteEntry from './NoteEntry';

function MeasureSequence(props) {
  const entriesPerMeasure = 16;
  const notes = [];
  for (var i = 0; i < entriesPerMeasure; i++) {
    notes.push({
      position: i,
      pitch: 'C4',
      instrument: null,
      commandType: null,
      commandValue: null
    });
  }
  return (
    <div>
      <h3>Measure ID Here</h3>
      <div className='entry-table-header'>
        <div className='note-position-header'></div>
        <div className='playhead-arrow-header'></div>
        <div className='pitch-value-header'></div>
        <div className='instrument-value-header'></div>
        <div className='command-value-header'></div>
      </div>
      <div className="note-entries">
        {props.noteArray.map((note, index) => (
          <NoteEntry
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
  noteArray: PropTypes.arrayOf(PropTypes.Object),
  playheadPosition: PropTypes.string
}

export default MeasureSequence;
