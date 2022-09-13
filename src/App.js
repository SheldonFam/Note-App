import React, { useState } from "react";
import Header from "./components/Header";
import CreateNote from "./components/CreateNote";
import NoteList from "./components/NoteList";

function App(props) {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    newNote.id = notes.length + 1;
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((notes) => notes.id !== id));
  };

  // const addNote = (newNote) => {
  //   setNotes((prevNotes) => {
  //     return [...prevNotes, newNote];
  //   });
  // };

  // const deleteNote = (id) => {
  //   setNotes((prevNotes) => {
  //     return prevNotes.filter((noteItem, index) => {
  //       return index !== id;
  //     });
  //   });
  // };

  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      <NoteList items={notes} onDeleteNote={deleteNote} />
    </div>
  );
}

export default App;
