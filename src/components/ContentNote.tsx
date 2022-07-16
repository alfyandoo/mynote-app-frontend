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
  search,
  onSearch,
}: any) => {
  const dataNote = data.filter((item: Idata) => item.archived === false);
  const dataArchived = data.filter((item: Idata) => item.archived === true);

  return (
    <>
      <div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 my-5">
          <div className="flex flex-row">
            <button
              className={`px-10 rounded-md cursor-pointer ${
                statusName === "note"
                  ? "text-gray-600 bg-green-400"
                  : "hover:bg-green-100"
              }`}
              onClick={() => onChangeStatusName("note")}
            >
              <span className="text-xl">Note</span>
            </button>

            <button
              className={`mx-10 px-10 rounded-md cursor-pointer ${
                statusName === "archive"
                  ? "text-gray-600 bg-green-400"
                  : "hover:bg-green-100"
              }`}
              onClick={() => onChangeStatusName("archive")}
            >
              <span className="text-xl">Archive</span>
            </button>
          </div>

          <SearchNote search={search} onSearch={onSearch} />
        </div>
        <div className="grid xl:grid-cols-4 gap-10 md:grid-cols-2 sm:grid-cols-1">
          {statusName === "note" && (
            <>
              {!!dataNote && dataNote.length !== 0 ? (
                dataNote
                  .filter((data: Idata) => {
                    if (search !== "") {
                      return data.title
                        .toLowerCase()
                        .includes(search.toLowerCase());
                    } else {
                      return data;
                    }
                  })
                  .map((item: Idata, i: number) => (
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
                dataArchived
                  .filter((data: Idata) => {
                    if (search !== "") {
                      return data.title
                        .toLowerCase()
                        .includes(search.toLowerCase());
                    } else {
                      return data;
                    }
                  })
                  .map((item: Idata, i: number) => (
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
