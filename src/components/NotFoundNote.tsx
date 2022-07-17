import React from "react";

export const NotFoundNote = () => {
  return (
    <div className="absolute lg:w-[95vw]">
      <img
        src="images/404_unDraw.svg"
        alt="not found"
        className="w-full object-fill bg-cover"
      />
      <p className="text-center m-3">Note Not Found!</p>
    </div>
  );
};
