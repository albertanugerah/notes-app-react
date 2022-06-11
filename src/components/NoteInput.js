import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => ({
      ...prevState,
      body: event.target.value,
    }));
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <p className="note-input__title__char-limit">
          Sisa karakter:50
        </p>
        <input
          className="note-input__title"
          type="text"
          placeholder="Ini adalah judul ..."
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
          required
        />
        <input
          className="note-input__body"
          type="text"
          placeholder="Tuliskan catatanmu di sini ...."
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
          required
        />
        <button type="submit">Buat</button>
      </form>
    );
  }
}

export default NoteInput;
