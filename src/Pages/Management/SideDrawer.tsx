import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import menuIcon from "../../assets/menuIcon.svg";


export default function SideDrawer({
  openDrawer,
  setOpenDrawer,
  columnData,
  setColumnsData,
}: {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<boolean>;
  columnData: any;
  setColumnsData: any;
}) {
  const toggleDrawer = () => () => {
    setOpenDrawer(false);
  };
  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    const newItems = Array.from(columnData);
    const [movedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, movedItem);
    setColumnsData(newItems);
  };

  return (
    <div>
      <Drawer open={openDrawer} anchor={"right"} onClose={toggleDrawer()}>
        <div className="w-[390px]  " role="presentation">
          <div className="m-6 flex flex-col relative">
            <p className="font-semibold text-xl">Customize columns</p>
            <p className="text-[#667085]">Select which columns to show or drag them into a different order</p>
            <div className="absolute top-0 right-0 cursor-pointer" onClick={toggleDrawer()}>
              X
            </div>
          </div>
          <>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="droppable">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="bg-white p-2 w-full m-h-[200px] box-border rounded-md"
                  >
                    {columnData.length > 0 &&
                      columnData?.map((item: { header: string }, index: number) => (
                        <Draggable
                          key={item.header}
                          draggableId={item.header}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                userSelect: "none",
                                margin: "0 0 8px 0",
                                backgroundColor: "white",
                                color: "black",
                                fontSize: "16px",
                                ...provided.draggableProps.style,
                              }}
                              className="flex justify-between gap-4 w-full p-4 text-white box-border rounded-xl "
                            >
                              <div className="flex flex-col w-full">
                                <div className="flex gap-4 items-center">
                                  <img src={menuIcon} alt="menuIcon" />
                                  <p className={`text-base`}>
                                    {item.header}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </>
        </div>
      </Drawer>
    </div>
  );
}
