"use client";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { FiEdit, FiTrash } from "react-icons/fi";
import { MdDragIndicator } from "react-icons/md";
import { deletetabledata, patchtabledata } from "../../../api";
import { TableTasks } from "../../../types/tabledata";
import Modaledit from "./Modaledit";

interface TaskProps {
  task: TableTasks;
  index: number;
}

export const Task: React.FC<TaskProps> = ({ task, index }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [deleteLoader, setDeleteLoader] = useState<boolean>(false);
  const [updatedTaskValue, setUpdatedTaskValue] = useState<string>(
    task.Description
  );
  const router = useRouter();

  const handleUpdateTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await patchtabledata({
      id: task.id,
      taskNumber: task.taskNumber,
      Description: updatedTaskValue,
    });
    // console.log(updatedTaskValue);
    // setUpdatedTaskValue("");
    setModalOpen(false);
    router.refresh();
  };

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided, snapshot) => (
        <tr
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          style={{
            ...provided.draggableProps.style,
            backgroundColor: snapshot.isDragging ? "lightblue" : "white",
          }}
        >
          <td
            className="w-fit p-0"
            {...provided.dragHandleProps}
            // style={{ width: "18px", height: "18px" }}
          >
            <div className="flex items-center justify-center w-full h-full">
              <MdDragIndicator
                className="text-blue-500 cursor-pointer bg-slate-400"
                size={18}
              />
            </div>
          </td>
          <td className="w-fit">{task.taskNumber}</td>
          <td className="w-full">{task.Description}</td>
          <td className="flex flex-row gap-5 w-fit justify-evenly">
            <FiEdit
              onClick={() => setModalOpen(true)}
              className="text-blue-500 cursor-pointer"
              size={25}
            />
            <FiTrash
              className="text-red-500 cursor-pointer"
              size={25}
              onClick={async () => {
                setDeleteLoader(true);
                try {
                  await deletetabledata(task.id);
                  // Update your local state with updatedTasks
                  // setTask1(updatedTasks); // Assuming you have a setTasks function from useState
                  router.refresh();
                } catch (error) {
                  console.error("Failed to delete task:", error);
                  // Show an error message to the user
                } finally {
                  setDeleteLoader(false);
                }
              }}
            />
            <Modaledit
              // task={task}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
            >
              <h3 className="font-bold text-lg ">Edit Task</h3>
              <form
                onSubmit={handleUpdateTodo}
                className="flex flex-col mt-5 items-center"
              >
                <input
                  value={updatedTaskValue}
                  onChange={(e) => setUpdatedTaskValue(e.target.value)}
                  className="input w-full input-bordered mb-5"
                  type="text"
                  placeholder="Edit your task"
                />
                <button
                  className="bg-blue-500 text-white btn w-full "
                  type="submit"
                >
                  Update Task
                </button>
              </form>
            </Modaledit>
            {/* <FiTrash
            className="text-red-500 cursor-pointer"
            size={25}
            onClick={() => {
              deletetabledata(task.id);
              router.refresh();
            }}
          /> */}
          </td>
          <td className={`${deleteLoader ? "" : "hidden"}`}>
            {deleteLoader ? (
              <span className="loading loading-ball loading-lg" />
            ) : (
              <></>
            )}
          </td>
        </tr>
      )}
    </Draggable>
  );
};
