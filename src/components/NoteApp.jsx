import React from "react";
import AddNoteItem from "./AddNoteItem";
import NoteList from "./NoteList";
import NoteHeader from "./NoteHeader";
import { getInitialData } from "../utils/index";

function filterSearch(notes, isSearch) {
  return notes.filter((obj) =>
    obj.title
      .split(" ")
      .some((word) => word.toLowerCase().startsWith(isSearch.toLowerCase()))
  );
}

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      cari: "",
    };

    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.addNoteHandler = this.addNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onArchiveHandler(id) {
    const myList = this.state.notes;
    const note = myList.find((obj) => obj.id === id);
    if (!note.archived) {
      note.archived = true;
    } else {
      note.archived = false;
    }
    this.setState({ myList });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  addNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toString(),
          },
        ],
      };
    });
  }

  onSearchHandler(event) {
    this.setState({
      cari: event.target.value,
    });
  }

  render() {
    const notes = filterSearch(this.state.notes, this.state.cari);
    return (
      <>
        <NoteHeader value={this.state.cari} onSearch={this.onSearchHandler} />

        <div className="note-app__body">
          <AddNoteItem addNote={this.addNoteHandler} />
          <h2>Catatan Aktif</h2>
          <NoteList
            notes={notes.filter((note) => note.archived == false)}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
          <h2>Arsip</h2>
          <NoteList
            notes={notes.filter((note) => note.archived == true)}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        </div>
      </>
    );
  }
}

export default NoteApp;
