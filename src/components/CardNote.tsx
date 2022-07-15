import React from 'react';
import { showFormattedDate } from '../utils';
import { DeleteNote } from './DeleteNote';

export const CardNote = ({ note, onDelete }: any) => {
  return (
    <>
      <div className="relative p-5 bg-violet-100 rounded-xl">
        <h1 className="m-1 text-center font-bold">{note.title}</h1>
        <DeleteNote id={note.id} onDelete={onDelete} />
        <p className="my-2 flex justify-end text-yellow-600">
          {showFormattedDate(note.createdAt)}
        </p>
        <p className="text-justify">{note.body}</p>
      </div>
    </>
  );
};
