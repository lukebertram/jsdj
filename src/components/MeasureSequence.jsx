import React from 'react';
import NoteEntry from './NoteEntry';

function MeasureSequence() {
  const entriesPerMeasure = 16;
  const notes = [];
  for (var i = 0; i < entriesPerMeasure; i++) {
    notes.push({
      position: i,
      pitch: null,
      instrument: null,
      commandType: null,
      commandValue: null
    });
  }
  return (
    <div>
      <h3>Measure ID Here</h3>
      <div className="note-entries">
        {notes.map((note, index) => (
          <NoteEntry
            position={note.position}
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

export default MeasureSequence;
