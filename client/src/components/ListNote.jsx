import React, { useState } from "react";

const ListNote = ({ note }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      {note ? (
        <div className="flex items-end text-gray-400">
          <p
            className={`text-xs mt-1 break-all ${showAll ? "" : "line-clamp"}`}
            onClick={() => setShowAll(false)}
          >
            {note}{" "}
            <button className="whitespace-nowrap font-semibold cursor-pointer text-sm hover:text-gray-300">
              {showAll && "Less"}
            </button>
          </p>
          <button
            onClick={() => setShowAll(true)}
            className="whitespace-wrap font-semibold cursor-pointer text-sm hover:text-gray-300"
          >
            {!showAll && "More"}
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ListNote;
