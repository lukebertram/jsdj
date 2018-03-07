import React from 'react';
import PropTypes from 'prop-types';
import MeasureSequence from './MeasureSequence';
import ControlBar from './ControlBar';

import './../stylesheets/MeasureView.css';

function MeasureView(props) {
  return (
    <div className="measure-view-container">
      <MeasureSequence
        playheadPosition={props.playheadPosition}
        noteArray={props.noteArray}
        onPitchValueChange={props.onPitchValueChange}
        isPlaying={props.isPlaying}/>
      <ControlBar
        onStartMeasurePlayback={props.onStartMeasurePlayback}
        onStopMeasurePlayback={props.onStopMeasurePlayback}
        isPlaying={props.isPlaying}/>
    </div>
  );
}

MeasureView.propTypes = {
  noteArray: PropTypes.arrayOf(PropTypes.object),
  playheadPosition: PropTypes.string,
  isPlaying: PropTypes.bool,
  onStartMeasurePlayback: PropTypes.func,
  onStopMeasurePlayback: PropTypes.func,
  onPitchValueChange: PropTypes.func
}

export default MeasureView;
