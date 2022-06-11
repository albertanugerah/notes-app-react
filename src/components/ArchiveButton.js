import React from 'react';

export default function ArchiveButton({ id, onArchive }) {
  return <button type="button" className="note-item__archive-button" onClick={() => onArchive(id)}>Arsipkan</button>;
}
