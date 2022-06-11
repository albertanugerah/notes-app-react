import React from 'react';
import NoteList from './NoteList';
import { getInitialData } from '../utils';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onDeleteHandler(id) {
    // eslint-disable-next-line react/destructuring-assignment,react/no-access-state-in-setstate
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  render() {
    return (
      <div className="note-app__body">
        <h2>Catatan Aktif</h2>
        {/* eslint-disable-next-line react/destructuring-assignment */}
        <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}

export default NoteApp;
