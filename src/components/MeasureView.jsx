import React from 'react';
import MeasureSequence from './MeasureSequence';
import ControlBar from './ControlBar';

import './../stylesheets/MeasureView.css';

function MeasureView() {
  return (
    <div className="measure-view-container">
      <MeasureSequence />
      <ControlBar />
    </div>
  );
}

export default MeasureView;
