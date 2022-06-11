import React from 'react';

function NoteInputSearch({ keyword, onSearch }) {
  return (
    <div className="note-search">
      <input type="text" placeholder="Cari catatan..." onChange={() => onSearch(keyword)} value={keyword} />
    </div>
  );
}

export default NoteInputSearch;
