import React from "react";
import { showFormattedDate } from "../utils";
import { DeleteNote } from "./DeleteNote";
import { ICardNote } from "../interface/ICardNote";

export const CardNote = ({
  note,
  onDelete,
  statusName,
  onChangeArchiveStatus,
}: ICardNote) => {
  const { id, title, body, createdAt } = note;

  return (
    <>
      <div className="relative p-7 flex flex-col bg-violet-100 rounded-xl overflow-hidden">
        <h1 className="m-1 px-6 text-center font-bold text-2xl">{title}</h1>
        <DeleteNote id={id} onDelete={onDelete} />
        <div className="flex justify-between my-5">
          <button
            className={`border-none text-white text-base rounded-md px-5 py-2 ${
              statusName === "note" ? "bg-blue-600 hover:bg-blue-300 hover:text-gray-500" : "bg-orange-400 hover:bg-orange-300 hover:text-gray-500"
            }`}
            onClick={() => onChangeArchiveStatus(id)}
          >
            <span>{statusName === "note" ? "Set Archive" : "Set Note"}</span>
          </button>

          <p className="flex text-yellow-700 items-center">
            {showFormattedDate(createdAt)}
          </p>
        </div>
        <p className="text-justify">{body}</p>
      </div>
    </>
  );
};
