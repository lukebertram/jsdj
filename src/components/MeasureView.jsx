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
        noteArray={props.noteArray}/>
      <ControlBar />
    </div>
  );
}

MeasureView.propTypes = {
  noteArray: PropTypes.arrayOf(PropTypes.Object),
  playheadPosition: PropTypes.string
}

export default MeasureView;
