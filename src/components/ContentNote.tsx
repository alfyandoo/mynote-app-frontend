import React from "react";
import { CardNote } from "./CardNote";
import { SearchNote } from "./SearchNote";

interface Idata {
  id: number;
  title: string;
  body: string;
  archived: boolean;
  createdAt: string;
}

export const ContentNote = ({ data, statusName, onDelete }: any) => {
  const dataNote = data.filter((item: Idata) => item.archived === false);
  const dataArchived = data.filter((item: Idata) => item.archived === true);

  return (
    <>
      <div>
        <div className="flex flex-row items-start my-5">
          <div className="flex">
            <div className="px-10 rounded-md text-gray-600 bg-green-200">
              Note
            </div>

            <div className="mx-3 rounded-md px-10">Archive</div>
          </div>

          <SearchNote />
        </div>
        <div className="grid xl:grid-cols-4 gap-10 md:grid-cols-2 sm:grid-cols-1">
          {statusName === "note" && (
            <>
              {!!dataNote && dataNote.length !== 0 ? (
                dataNote.map((item: Idata, i: number) => (
                  <CardNote
                    key={i}
                    note={item}
                    statusName={statusName}
                    onDelete={onDelete}
                  />
                ))
              ) : (
                <div className="flex flex-col items-center m-5">
                  <img
                    src="images/404_unDraw.svg"
                    alt="not found"
                    className="w-1/2"
                  />
                  <p className="text-center m-3">Note Not Found!</p>
                </div>
              )}
            </>
          )}

          {statusName === "archive" && (
            <>
              {!!dataArchived && dataArchived.length !== 0 ? (
                dataArchived.map((item: Idata, i: number) => (
                  <CardNote
                    key={i}
                    note={item}
                    statusName={statusName}
                    onDelete={onDelete}
                  />
                ))
              ) : (
                <div className="flex flex-col items-center m-5">
                  <img
                    src="images/404_unDraw.svg"
                    alt="not found"
                    className="w-1/2"
                  />
                  <p className="text-center m-3">Note Not Found!</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};
