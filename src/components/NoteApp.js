import React from 'react';
import NoteList from './NoteList';
import { getInitialData } from '../utils';
import NoteHeader from './NoteHeader';
import NoteInput from './NoteInput';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      keyword: '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const notes = this.state.notes.filter((note) => (note.id !== id));
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    const dates = new Date();
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: `${+dates}`,
          title,
          body,
          archive: false,
          createdAt: dates.toString(),
        },
      ],
    }));
  }

  onSearchHandler(keyword) {
    this.setState((prevState) => ({
      ...prevState,
      notes: prevState.notes.filter((note) => note.title.toLowerCase()
        .includes(keyword.toLowerCase())),
    }));
  }

  render() {
    return (
      <>
        <NoteHeader onSearch={this.onSearchHandler} />
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <h2>Catatan Aktif</h2>
          <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
        </div>
      </>
    );
  }
}

export default NoteApp;
