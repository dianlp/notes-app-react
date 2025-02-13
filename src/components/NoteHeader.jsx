import React from "react";

function NoteHeader({ value, onSearch }) {
    return (
      <div className="note-app__header">
        <h1>Notes</h1>
        <div className="note-search">
          <input
            type="text"
            placeholder="Cari Catatan"
            value={value}
            onChange={onSearch}
          />
        </div>
      </div>
    );
  }

export default NoteHeader;
