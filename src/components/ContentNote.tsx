import React from "react";
import { CardNote } from "./CardNote";
import { SearchNote } from "./SearchNote";
import { NotFoundNote } from "./NotFoundNote";

interface Idata {
  id: number;
  title: string;
  body: string;
  archived: boolean;
  createdAt: string;
}

export const ContentNote = ({
  data,
  statusName,
  onDelete,
  onChangeArchiveStatus,
  onChangeStatusName,
}: any) => {
  const dataNote = data.filter((item: Idata) => item.archived === false);
  const dataArchived = data.filter((item: Idata) => item.archived === true);

  return (
    <>
      <div>
        <div className="flex flex-row items-start my-5">
          <div className="flex">
            <div
              className={`px-10 rounded-md cursor-pointer ${
                statusName === "note"
                  ? "text-gray-600 bg-green-400"
                  : "hover:bg-green-100"
              }`}
              onClick={() => onChangeStatusName("note")}
            >
              Note
            </div>

            <div
              className={`mx-10 px-10 rounded-md cursor-pointer ${
                statusName === "archive"
                  ? "text-gray-600 bg-green-400"
                  : "hover:bg-green-100"
              }`}
              onClick={() => onChangeStatusName("archive")}
            >
              Archive
            </div>
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
                    onChangeArchiveStatus={onChangeArchiveStatus}
                  />
                ))
              ) : (
                <NotFoundNote />
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
                    onChangeArchiveStatus={onChangeArchiveStatus}
                  />
                ))
              ) : (
                <NotFoundNote />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};
