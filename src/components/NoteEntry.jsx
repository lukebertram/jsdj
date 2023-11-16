import PropTypes from "prop-types";
import PitchValue from "./PitchValue";
import InstrumentValue from "./InstrumentValue";
import CommandType from "./CommandType";
import CommandValue from "./CommandValue";
import "./../stylesheets/NoteEntry.css";

function NoteEntry(props) {
  const playhead = props.playheadPosition === props.time ? `\u25B6` : ` `;
  return (
    <div className="note-entry">
      <div className="note-position">{props.position + 1}</div>
      <div className="playhead-arrow">{playhead}</div>
      <div className="pitch-value">
        <PitchValue
          position={props.position}
          pitch={props.pitch}
          onPitchValueChange={props.onPitchValueChange}
        />
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
  time: PropTypes.string,
  pitch: PropTypes.string,
  instrument: PropTypes.number,
  commandType: PropTypes.string,
  commandValue: PropTypes.number,
  onPitchValueChange: PropTypes.func,
};

export default NoteEntry;
