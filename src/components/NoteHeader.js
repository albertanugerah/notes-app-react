import React from 'react';
import NoteInputSearch from './NoteInputSearch';

function NoteHeader({ onSearch }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <form>
        <NoteInputSearch onSearch={onSearch} />
      </form>
    </div>
  );
}

export default NoteHeader;
