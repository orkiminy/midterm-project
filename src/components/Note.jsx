import React, { useState } from "react";

import NoteComp from "./NewNote";

function Note() {
  const [notes, setNotes] = useState([
    { id: 0, title: "test", content: "data structor" }
  ]);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [id, setId] = useState(2);

  function addNote(e) {
    e.preventDefault();
    setNotes([...notes, { id: id, title: newTitle, content: newContent }]);
    setId(id + 1);
    setNewTitle("");
    setNewContent("");
  }

  function onDelete(id) {
    setNotes((notes) => notes.filter((note) => note.id !== id));
  }

  /*  function createNote(note) {
    return (
      <div className="container">
        <h2>{note.title}</h2>
        <p>{note.content}</p>
        <div className="containerBottom">
          <button className="deletButton" onClick={() => onDelete(note.id)}>
            Delete
          </button>
        </div>
      </div>
    );
  }*/

  return (
    <div>
      <div className="note">
        <form onSubmit={addNote}>
          <h1>
            <input
              placeholder="title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </h1>
          <p>
            <input
              placeholder="Take a note... "
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
            />
          </p>
          <button className="addButton">add note</button>
        </form>
      </div>
      {/* {notes.map(createNote)} */}
      {notes.map((item) => (
        <NoteComp
          title={item.title}
          content={item.content}
          onClick={() => onDelete(item.id)}
        />
      ))}
    </div>
  );

  /*return (
    <div className="note">
      <form onSubmit={AddNote}>
        <h1>
          <input
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </h1>
        <p>
          <input
            placeholder="Take a note... "
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </p>
        <button>+</button>
      </form>

      <ul>
      {
        notes.map(notes=> <li>{notes.title} {notes.content}</li>
        )}      
      </ul>
    </div>
  );*/
}
export default Note;
