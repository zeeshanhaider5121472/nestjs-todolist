"use client";

import { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { TableTasks } from "../../../types/tabledata";
import Modaledit from "./Modaledit";

interface TaskProps {
  task: TableTasks;
}

export const Task: React.FC<TaskProps> = ({ task }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <tr key={task.id}>
      <td className="w-fit">{task.taskNumber}</td>
      <td className="w-full">{task.Description}</td>
      <td className="flex flex-row gap-5">
        <FiEdit
          onClick={() => setModalOpen(true)}
          className="text-blue-500 cursor-pointer"
          size={25}
        />
        <FiTrash className="text-red-500 cursor-pointer" size={25} />
      </td>
      <td>
        <Modaledit
          task={task}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      </td>
    </tr>
  );
};
