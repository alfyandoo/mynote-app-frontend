import React from "react";
import { IAppendNote } from "../interface/IAppendNote";

export const AppendNote = ({
  newData,
  maxLengthTitle,
  maxLengthBody,
  onTitleChange,
  onBodyChange,
  onSubmitNote,
}: IAppendNote) => {
  return (
    <>
      <form onSubmit={onSubmitNote}>
        <h2 className="mt-5 text-3xl font-bold text-center text-gray-700">Add Note</h2>
        <div className="my-5">
          <p className="flex mr-3 justify-end text-white">
            remaining characters: {maxLengthTitle}
          </p>
          <input
            className="w-full text-xl p-3 rounded-md border-2 border-violet-200"
            type="text"
            name="title"
            placeholder="input your note title.."
            value={newData.title}
            onChange={(event) => onTitleChange(event.target.value)}
            required
          />
        </div>

        <div>
          <p className="flex justify-end text-white">
            remaining characters: {maxLengthBody}
          </p>
          <textarea
            className="w-full h-64 p-3 rounded-md border-2 border-violet-200"
            typeof="text"
            name="body"
            placeholder="input your note body.."
            value={newData.body}
            onChange={(event) => onBodyChange(event.target.value)}
            required
          />
        </div>

        <button className="my-5 p-4 rounded-md group text-white bg-violet-600 hover:bg-gray-600">
          <span className="text-white group-hover:text-yellow-400">Add</span>
        </button>
      </form>
    </>
  );
};
