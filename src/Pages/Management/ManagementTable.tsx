import React, { useState } from "react";
import ManagementTableheader from "./ManagementTableheader";
import Table from "../../Component/Table";
import { botsManagementRows } from "../../assets/Constant/data";
import SideDrawer from "./SideDrawer";
const columns = [
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Category",
    accessorKey: "category",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: (props: any) => {
      const { status } = props.row.original
      return (
        <span className="capitalize p-2 rounded-lg" style={{ backgroundColor: status === "active" ? "#D1FADF" : status === "draft" ? "#FEF0C7" : "#EAECF0" }}>
          {status}
        </span>
      )
    },
  },
  {
    header: "Last activity",
    accessorKey: "last_activity",
  },

];
function ManagementTable() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [columnData, setColumnsData] = useState(columns);

  return (
    <div className="border border-[#EEEEEE] rounded-2xl mb-[82px]" >
      <ManagementTableheader setOpenDrawer={setOpenDrawer} />
      <Table data={botsManagementRows} columns={columnData} />
      <SideDrawer
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        columnData={columnData}
        setColumnsData={setColumnsData}
      />
    </div>
  );
}

export default ManagementTable;
