import React from "react";
import { showFormattedDate } from "../utils";
import { DeleteNote } from "./DeleteNote";

export const CardNote = ({
  note,
  onDelete,
  statusName,
  onChangeArchiveStatus,
}: any) => {
  return (
    <>
      <div className="relative p-5 bg-violet-100 rounded-xl">
        <h1 className="m-1 text-center font-bold">{note.title}</h1>
        <DeleteNote id={note.id} onDelete={onDelete} />
        <div className="flex justify-between my-3">
          <button
            className={`border-none text-white rounded-md px-5 ${
              statusName === "note" ? "bg-blue-600" : "bg-orange-400"
            }`}
            onClick={() => onChangeArchiveStatus(note.id)}
          >
            <span>{statusName === "note" ? "Set Archive" : "Set Note"}</span>
          </button>
          <p className="flex justify-end text-yellow-600">
            {showFormattedDate(note.createdAt)}
          </p>
        </div>
        <p className="text-justify">{note.body}</p>
      </div>
    </>
  );
};
