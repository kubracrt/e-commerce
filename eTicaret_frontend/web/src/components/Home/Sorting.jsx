import React from "react";

const Sorting = ({ setSort }) => {
  return (
    <div className="p-3 flex items-center justify-end font-thin text-xs">
      <select
        className="font-thin text-xs "
        onChange={(e) => setSort(e.target.value)}
      >
        <option className="font-thin text-xs " disabled value="">
          SEÇİNİZ
        </option>
        <option className="font-thin text-xs " value="inc">
          Artan
        </option>
        <option className="font-thin text-xs " value="dec">
          Azalan
        </option>
      </select>
    </div>
  );
};

export default Sorting;
