"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { patchtabledata } from "../../../api";
import { TableTasks } from "../../../types/tabledata";
import LoaderModal from "./LoaderModal";
import { Task } from "./Task";

interface TodoList {
  tasks: TableTasks[];
}

const Table: React.FC<TodoList> = ({ tasks }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  tasks.sort((a, b) => a.taskNumber - b.taskNumber);

  useEffect(() => {
    // setIsBrowser(typeof window!== "undefined" && window.document && window.document.createElement);
    if (typeof window !== "undefined") {
      setIsBrowser(true);
    }
  }, []);

  const onDragEnd = async (result: DropResult) => {
    setIsLoading(true);
    if (!result.destination) return;

    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // Update taskNumbers sequentially
    const updatedItems = items.map((item, index) => ({
      ...item,
      taskNumber: index + 1,
    }));

    // Update each task individually
    for (const item of updatedItems) {
      try {
        await patchtabledata(item);
      } catch (error) {
        console.error(`Failed to update task ${item.id}:`, error);
        // Optionally, show an error message to the user
      }
    }

    // Update your local state
    // setTasks(updatedItems);

    // Optionally, refresh the page or refetch data
    router.refresh();
    setIsLoading(false);
  };
  // const onDragEnd = (result: DropResult) => {
  //   // Handle the end of drag operation here
  //   // For example, reorder the tasks array
  //   if (!result.destination) return;
  //   const items = Array.from(tasks);
  //   const [reorderedItem] = items.splice(result.source.index, 1);
  //   items.splice(result.destination.index, 0, reorderedItem);
  //   console.log(reorderedItem);
  //   console.log(items);
  //   // Update your state with the new order
  //   // setTasks(items);
  //   items.map((item) => patchtabledata(item));
  // };

  return (
    <div className="overflow-x-auto">
      {isLoading && <LoaderModal />}
      <DragDropContext onDragEnd={onDragEnd}>
        <table className="table">
          <thead>
            <tr>
              <th></th>
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
                    <Task key={task.id} task={task} index={index} setIsLoading={setIsLoading}/>
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
