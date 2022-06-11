import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {
                notes.map((note) => (
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  <NoteItem
                    key={note.id}
                    onDelete={onDelete}
                    onArchive={onArchive}
                    {...note}
                  />
                ))
            }
    </div>
  );
}

export default NoteList;
