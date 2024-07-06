"use client";

import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { posttabledata } from "../../../api";
import { TableTasks } from "../../../types/tabledata";
import { Modal } from "./Modal";

interface TaskProps {
  olddata: TableTasks[];
}
export const AddTask: React.FC<TaskProps> = ({ olddata }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");
  const router = useRouter();

  const handleSubmitTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await posttabledata({
      id: uuidv4(),
      taskNumber: (
        Number(olddata[olddata.length - 1].taskNumber) + 1
      ).toString(),
      Description: newTaskValue,
    });
    console.log(newTaskValue);
    setNewTaskValue("");
    setModalOpen(false);
    router.refresh();
  };
  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-neutral w-full"
      >
        Add New Todo +
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form
          onSubmit={handleSubmitTodo}
          className="flex flex-col mt-5 items-center"
        >
          <h3 className="text-lg font-bold">Add a New Task</h3>
          <input
            value={newTaskValue}
            onChange={(e) => setNewTaskValue(e.target.value)}
            className="input w-full"
            type="text"
            placeholder="Enter your task"
          />
          <button className="bg-blue-500 text-white btn w-full " type="submit">
            Add Task
          </button>
        </form>
      </Modal>
    </div>
  );
};
