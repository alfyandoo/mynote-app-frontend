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
        <h1 className="m-1 text-center font-bold text-2xl">{note.title}</h1>
        <DeleteNote id={note.id} onDelete={onDelete} />
        <div className="flex justify-between my-5">
          <button
            className={`border-none text-white text-base rounded-md px-5 py-2 ${
              statusName === "note" ? "bg-blue-600 hover:bg-blue-300 hover:text-gray-500" : "bg-orange-400 hover:bg-orange-300 hover:text-gray-500"
            }`}
            onClick={() => onChangeArchiveStatus(note.id)}
          >
            <span>{statusName === "note" ? "Set Archive" : "Set Note"}</span>
          </button>

          <p className="flex justify-end text-yellow-700 items-center">
            {showFormattedDate(note.createdAt)}
          </p>
        </div>
        <p className="text-justify">{note.body}</p>
      </div>
    </>
  );
};
