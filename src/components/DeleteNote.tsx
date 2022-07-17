import React from "react";
import { IDeleteNote } from "../interface/IDeleteNote";

export const DeleteNote = ({ id, onDelete }: IDeleteNote) => {
  return (
    <>
      <button
        className="w-6 absolute box-border m-3 top-4 right-2 rounded-md group bg-red-400 hover:bg-gray-500"
        onClick={() => onDelete(id)}
      >
        <span className="text-white group-hover:text-yellow-400">X</span>
      </button>
    </>
  );
};
