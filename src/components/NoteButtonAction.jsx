import React from "react";

function NoteButtonAction({ id, isArchive, onDelete, onArchive }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>
        Delete
      </button>
      <button
        className="note-item__archive-button"
        onClick={() => onArchive(id)}
      >
        {isArchive ? "Aktif" : "Arsipkan"}
      </button>
    </div>
  );
}

export default NoteButtonAction;
