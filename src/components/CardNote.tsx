import React from 'react';
import { showFormattedDate } from '../utils';

export const CardNote = ({ note }: any) => {
  return (
    <>
      <div className="relative p-5 bg-violet-100 rounded-xl">
        <h1 className="m-1 text-center font-bold">{note.title}</h1>
        <button className="w-5 absolute m-3 top-2 right-2 rounded-md group bg-red-400 hover:bg-gray-500">
          <span className="text-white group-hover:text-yellow-400">x</span>
        </button>
        <p className="my-2 flex justify-end text-yellow-600">{showFormattedDate(note.createdAt)}</p>
        <p className="text-justify">{note.body}</p>
      </div>
    </>
  );
};
