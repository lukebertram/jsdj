import PropTypes from "prop-types";
import BPMAdjust from "./BPMAdjust";
import "./../stylesheets/ControlBar.css";

function ControlBar(props) {
  let togglePlayButton;
  if (props.isPlaying) {
    togglePlayButton = (
      <button className="toggle-play-btn" onClick={props.onStopMeasurePlayback}>
        stop
      </button>
    );
  } else {
    togglePlayButton = (
      <button
        className="toggle-play-btn"
        onClick={props.onStartMeasurePlayback}
      >
        start
      </button>
    );
  }
  return (
    <div className="control-bar-container">
      <p>Controls</p>
      <BPMAdjust
        currentBPM={props.currentBPM}
        onIncrementBPM={props.onIncrementBPM}
        onDecrementBPM={props.onDecrementBPM}
      />
      {togglePlayButton}
    </div>
  );
}

ControlBar.propTypes = {
  onStartMeasurePlayback: PropTypes.func,
  onStopMeasurePlayback: PropTypes.func,
  isPlaying: PropTypes.bool,
};

export default ControlBar;
