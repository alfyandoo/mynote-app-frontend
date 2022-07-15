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

export const ContentNote = ({ data, statusName }: any) => {
  const dataNote = data.filter((item: Idata) => item.archived === false);
  const dataArchived = data.filter((item: Idata) => item.archived === true);

  return (
    <>
      <SearchNote />
      <div>
        <div className="flex">
            <div>
                Note
            </div>

            <div>
                Archive
            </div>
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
                            />
                        ))
                    ) : (
                        <div>
                            <img src="images/404_unDraw.svg" alt="not found" />
                            <p>Note Not Found!</p>
                        </div>
                    )}
                </>
            )}
        </div>
      </div>
    </>
  );
};
