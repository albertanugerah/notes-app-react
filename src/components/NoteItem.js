import React from 'react';
import NoteItemBody from './NoteItemBody';
import NoteActions from './NoteActions';

function NoteItem({
  title, body, createdAt, id, onArchive, onDelete,
}) {
  return (
    <div className="note-item">
      <NoteItemBody title={title} body={body} createdAt={createdAt} />
      <NoteActions id={id} onDelete={onDelete} onArchive={onArchive} />
    </div>
  );
}

export default NoteItem;
