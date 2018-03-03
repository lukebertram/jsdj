import React from 'react';
import PropTypes from 'prop-types';
import PitchValue from './PitchValue';
import InstrumentValue from './InstrumentValue';
import CommandType from './CommandType';
import CommandValue from './CommandValue';
import './../stylesheets/NoteEntry.css';

function NoteEntry(props) {
  return (
    <div className="note-entry">
      <div className="note-position">{props.position + 1}</div>
      <div className="playhead-arrow">&#9654;</div>
      <div className="pitchValue">
        <PitchValue pitch={props.pitch} />
      </div>
      <div className="I-label">I</div>
      <div className="instrument-value">
        <InstrumentValue instrument={props.instrument} />
      </div>
      <div className="command-type">
        <CommandType type={props.commandType} />
      </div>
      <div className="command-value">
        <CommandValue value={props.commandValue} />
      </div>
    </div>
  );
}

NoteEntry.propTypes = {
  position: PropTypes.number,
  pitch: PropTypes.string,
  instrument: PropTypes.number,
  commandType: PropTypes.string,
  commandValue: PropTypes.number
};

export default NoteEntry;
