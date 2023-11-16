import React from "react";
import PropTypes from "prop-types";
import "./../stylesheets/BPMAdjust.css";

function BPMAdjust(props) {
  return (
    <div className="BPM-adjust-container">
      <div className="BPM-adjust-display">{props.currentBPM}</div>
      <div className="BPM-adjust-buttons">
        <button
          className="BPM-button"
          onClick={props.onIncrementBPM}
        >{`\u25B2`}</button>
        <button
          className="BPM-button"
          onClick={props.onDecrementBPM}
        >{`\u25BC`}</button>
      </div>
    </div>
  );
}

BPMAdjust.propTypes = {
  currentBPM: PropTypes.number,
  onIncrementBPM: PropTypes.func,
  onDecrementBPM: PropTypes.func,
};

export default BPMAdjust;
