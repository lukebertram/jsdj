import React from 'react';

function PitchValue(props) {
  const pitch = props.pitch ? props.pitch : '--';
  return <div className="drop-field">{pitch}</div>;
}

export default PitchValue;
