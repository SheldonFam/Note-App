import React, { useState } from "react";
import Zoom from "@mui/material/Zoom";
import AddIcon from "@mui/icons-material/Add";

const CreateNote = (props) => {
  const [createNote, setCreateNote] = useState({ title: "", content: "" });
  const [Expanded, setExpanded] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCreateNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAdd(createNote);
    setCreateNote({
      title: "",
      content: "",
    });
    setExpanded(false);
  };

  const expand = () => {
    setExpanded(true);
  };

  return (
    <div>
      <form className="create-note">
        {Expanded && (
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={createNote.title}
          />
        )}

        <textarea
          name="content"
          id=""
          rows={Expanded ? 3 : 1}
          placeholder="Note"
          onClick={expand}
          onChange={handleChange}
          value={createNote.content}
        ></textarea>
        <Zoom in={Expanded}>
          <button onClick={handleSubmit}>
            <AddIcon />
          </button>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateNote;
