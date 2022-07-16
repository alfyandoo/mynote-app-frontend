import React from "react";

export const NotFoundNote = () => {
  return (
    <div className="flex flex-col items-center absolute lg:left-1/4 right-auto">
      <img
        src="images/404_unDraw.svg"
        alt="not found"
        className="w-full object-fill bg-cover"
      />
      <p className="text-center m-3">Note Not Found!</p>
    </div>
  );
};
