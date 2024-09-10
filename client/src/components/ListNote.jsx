import React, { useState } from "react";

const ListNote = ({ note }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      {note ? (
        <div className="flex items-end text-gray-400">
          <p
            className={`text-xs ${showAll ? "mt-1" : "line-clamp break-all"}`}
            onClick={() => setShowAll(false)}
          >
            {note}{" "}
            {note.length > 50 && (
              <button className="whitespace-nowrap font-semibold cursor-pointer text-sm hover:text-gray-300">
                {showAll && "Less"}
              </button>
            )}
          </p>
          {note.length > 50 && (
            <button
              onClick={() => setShowAll(true)}
              className="whitespace-wrap font-semibold cursor-pointer text-sm hover:text-gray-300"
            >
              {!showAll && "More"}
            </button>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ListNote;
