import React from "react";

export const DeleteNote = ({ id, onDelete }: any) => {
  return (
    <>
      <button
        className="w-5 absolute m-3 top-2 right-2 rounded-md group bg-red-400 hover:bg-gray-500"
        onClick={() => onDelete(id)}
      >
        <span className="text-white group-hover:text-yellow-400">X</span>
      </button>
    </>
  );
};
