// "use client";
// import { useRouter } from "next/navigation";
// import { FormEventHandler, useState } from "react";
// import { FiEdit, FiTrash } from "react-icons/fi";
// import { deletetabledata, patchtabledata } from "../../../api";
// import { TableTasks } from "../../../types/tabledata";
// import Modaledit from "./Modaledit";

// interface TaskProps {
//   task: TableTasks;
// }

// export const Task: React.FC<TaskProps> = ({ task }) => {
//   const [modalOpen, setModalOpen] = useState<boolean>(false);
//   const [updatedTaskValue, setUpdatedTaskValue] = useState<string>(
//     task.Description
//   );
//   const router = useRouter();

//   const handleUpdateTodo: FormEventHandler<HTMLFormElement> = async (e) => {
//     e.preventDefault();
//     await patchtabledata({
//       id: task.id,
//       taskNumber: task.taskNumber,
//       Description: updatedTaskValue,
//     });
//     console.log(updatedTaskValue);
//     // setUpdatedTaskValue("");
//     setModalOpen(false);
//     router.refresh();
//   };

//   return (
//     <tr key={task.id}>
//       <td className="w-fit">{task.taskNumber}</td>
//       <td className="w-full">{task.Description}</td>
//       <td className="flex flex-row gap-5">
//         <FiEdit
//           onClick={() => setModalOpen(true)}
//           className="text-blue-500 cursor-pointer"
//           size={25}
//         />
//         <FiTrash
//           className="text-red-500 cursor-pointer"
//           size={25}
//           onClick={() => {
//             deletetabledata(task.id);
//             router.refresh();
//           }}
//         />
//       </td>
//       <td>
//         <Modaledit
//           // task={task}
//           modalOpen={modalOpen}
//           setModalOpen={setModalOpen}
//         >
//           <h3 className="font-bold text-lg items-start">Edit Task</h3>
//           <form
//             onSubmit={handleUpdateTodo}
//             className="flex flex-col mt-5 items-center"
//           >
//             <input
//               value={updatedTaskValue}
//               onChange={(e) => setUpdatedTaskValue(e.target.value)}
//               className="input w-full"
//               type="text"
//               placeholder="Edit your task"
//             />
//             <button
//               className="bg-blue-500 text-white btn w-full "
//               type="submit"
//             >
//               Update Task
//             </button>
//           </form>
//         </Modaledit>
//       </td>
//     </tr>
//   );
// };
