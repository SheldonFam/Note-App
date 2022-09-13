import React from "react";
import Note from "./Note";

const NoteList = (props) => {
  return (
    <>
      {props.items.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          onClick={props.onDeleteNote}
        />
      ))}
    </>
  );
};

export default NoteList;
