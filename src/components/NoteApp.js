import React from 'react';
import NoteList from './NoteList';
import { getInitialData } from '../utils';
import NoteHeader from './NoteHeader';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      keyword: '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const notes = this.state.notes.filter((note) => {
      if (note.id) {
        return note.id !== id;
      }
      return 'tidak ada catatan';
    });
    this.setState({ notes });
  }

  onSearchHandler(event) {
    this.setState({
      keyword: event.target.value,
    });
  }

  render() {
    return (
      <>
        <NoteHeader keyword={this.state.keyword} onSearch={this.onSearchHandler} />
        <div className="note-app__body">

          <h2>Catatan Aktif</h2>
          <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
        </div>
      </>
    );
  }
}

export default NoteApp;
