import React, { useState } from "react";
import columnIcon from "../../assets/columnIcon.svg";
import searchIcon from "../../assets/searchIcon.svg";
import filterIcon from "../../assets/filterIcon.svg";

function ManagementTableheader({ setOpenDrawer }: { setOpenDrawer: React.Dispatch<boolean> }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: any) => {
    const { value } = event.target;
    setSearchTerm(value);
  };
  return (
    <div className="px-4 py-6 flex justify-between items-center sticky top-0 bg-white z-50 rounded-t-2xl rounded-r-2xl">
      <p className="border border-[#EEEEEE] p-2 rounded-md">All bots</p>
      <div className="flex gap-4 items-center">
        <div className="flex items-center border border-[#EEEEEE] p-2 rounded-md gap-[10px] ">
          <img src={filterIcon} alt="filterIcon" />
          <p className="text-sm">filter</p>
        </div>
        <img src={columnIcon} alt="columnIcon" onClick={() => setOpenDrawer(true)} className="border border-[#EEEEEE] rounded-[50%] p-3" />
        <div className="relative flex items-center justify-center border border-[#EEEEEE] rounded-md">
          <input type="text" className="h-10  ml-10 outline-none" placeholder="Search a bot" name="searchTerm" onChange={handleChange} value={searchTerm} />
          <img src={searchIcon} alt="searchIcon" className="absolute top-3 left-4" />
        </div>
      </div>
    </div>
  );
}

export default ManagementTableheader;
