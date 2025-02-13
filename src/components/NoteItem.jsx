import React from "react";
import NoteItemBody from "./NoteItemBody";
import NoteButtonAction from "./NoteButtonAction";

function NoteItem({
  title,
  createdAt,
  body,
  id,
  isArchive,
  nameButton,
  onDelete,
  onArchive,
}) {
  return (
    <div className="note-item">
      <NoteItemBody title={title} createdAt={createdAt} body={body} />
      <NoteButtonAction
        id={id}
        isArchive={isArchive}
        nameButton={nameButton}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </div>
  );
}

export default NoteItem;
