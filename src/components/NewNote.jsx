import React from "react";

function NoteComp(props) {
  return (
    <div>
      <div className="container">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <div>
          <button className="deletButton" onClick={props.onClick}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteComp;
