"use client";

import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import toast from "react-hot-toast";
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

    try {
      await posttabledata({
        id: uuidv4(),
        taskNumber:
          olddata.length != 0 ? olddata[olddata.length - 1].taskNumber + 1 : 1,
        Description: newTaskValue,
      });
      toast.success("Task added successfully!");
      // console.log(newTaskValue);
      setNewTaskValue("");

      router.refresh();
    } catch (error) {
      if (error instanceof Error) {
        toast.error("ERROR: " + error.message);
      } else {
        toast.error("An unknown error occurred");
      }
    } finally {
      setModalOpen(false);
    }
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
        <h3 className="text-lg font-bold">Add a New Task</h3>
        <form
          onSubmit={handleSubmitTodo}
          className="flex flex-col mt-5 items-center"
        >
          <input
            value={newTaskValue}
            onChange={(e) => setNewTaskValue(e.target.value)}
            className="input w-full input-bordered mb-5"
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
