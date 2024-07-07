"use client";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { TableTasks } from "../../../types/tabledata";
import { Task } from "./Task";

interface TodoList {
  tasks: TableTasks[];
}

const Table: React.FC<TodoList> = ({ tasks }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    // setIsBrowser(typeof window!== "undefined" && window.document && window.document.createElement);
    if (typeof window !== "undefined") {
      setIsBrowser(true);
    }
  }, []);

  const onDragEnd = (result: DropResult) => {
    // Handle the end of drag operation here
    // For example, reorder the tasks array
    if (!result.destination) return;
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    console.log(reorderedItem);
    // Update your state with the new order
    // setTasks(items);
    // patchtabledata(items);
  };

  return (
    <div className="overflow-x-auto">
      <DragDropContext onDragEnd={onDragEnd}>
        <table className="table">
          <thead>
            <tr>
              <th>TaskNo.</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>

          {isBrowser ? (
            <Droppable droppableId="tabletasks">
              {(provided) => (
                <tbody ref={provided.innerRef} {...provided.droppableProps}>
                  {tasks.map((task, index) => (
                    <Task key={task.id} task={task} index={index} />
                  ))}
                  {provided.placeholder}
                </tbody>
              )}
            </Droppable>
          ) : null}
        </table>
      </DragDropContext>
    </div>
  );
};

export default Table;
