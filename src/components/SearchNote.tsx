import React from "react";
import { ISearchNote } from "../interface/ISearchNote";

export const SearchNote = ({ search, onSearch }: ISearchNote) => {
  return (
    <>
      <div className="flex lg:justify-end md:justify-center sm:justify-center">
        <form>
          <input
            type="search"
            className="w-full text-xl p-3 rounded-md border-2 border-violet-200"
            placeholder="Search by title.."
            name="search"
            value={search}
            onChange={(event) => onSearch(event.target.value)}
            maxLength={50}
          />
        </form>
      </div>
    </>
  );
};
