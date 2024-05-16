import React from "react";
import carrierIcon from "../../assets/carrierIcon.svg";
function Sidebar() {
  return (
    <div className="bg-[#EEEEEE] min-w-[275px] h-full">
      <div className="flex gap-2 pl-6 pt-[27px]">
        <img src={carrierIcon} alt="carrierIcon" />
        <p className="px-2 py-[6px]">Bot Management</p>
      </div>
      <div className="w-full h-[1px] bg-[#EEEEEE]"></div>
    </div>
  );
}

export default Sidebar;
