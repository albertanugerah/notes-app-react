import React from 'react';
import NoteInputSearch from './NoteInputSearch';

function NoteHeader({ keyword }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <NoteInputSearch onSearch={keyword} />
    </div>
  );
}

export default NoteHeader;
