import React from 'react';

function NoteInputSearch({ onSearch }) {
  return (
    <div className="note-search">
      <input type="text" placeholder="Cari catatan..." onChange={(event) => onSearch(event.target.value)} />
    </div>
  );
}

export default NoteInputSearch;
