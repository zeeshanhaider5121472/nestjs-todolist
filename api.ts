import { TableTasks } from "./types/tabledata";

const baseurl = "http://localhost:3001";

// // Fetch data from API
export const gettabledata = async (): Promise<TableTasks[]> => {
  const res = await fetch(`${baseurl}/tasks`, { cache: "no-store" });
  const data = res.json();
  return data;
};

// //Post API
// export const posttabledata = async (todo: TableTasks): Promise<TableTasks> => {
//   if (!todo.Description || todo.Description.trim() === "") {
//     throw new Error("Task cannot be empty");
//   }

//   const res = await fetch(`${baseurl}/tasks`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(todo),
//   });

//   if (!res.ok) {
//     throw new Error(`HTTP error! status: ${res.status}`);
//   }

//   const newTodo = await res.json();
//   return newTodo;
// };

// //Patch API
// export const patchtabledata = async (todo: TableTasks): Promise<TableTasks> => {
//   const res = await fetch(`${baseurl}/tasks/${todo.id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(todo),
//   });
//   const updatedTodo = await res.json();
//   return updatedTodo;
// };

// //Delete API and update tasknumbers
// export const deletetabledata = async (id: string): Promise<void> => {
//   await fetch(`${baseurl}/tasks/${id}`, {
//     method: "DELETE",
//   });

//   const res = await fetch(`${baseurl}/tasks`, { cache: "no-store" });
//   let remainingTasks: TableTasks[] = await res.json();

//   remainingTasks = remainingTasks
//     // .sort((a, b) => a.taskNumber - b.taskNumber)
//     .map((task, index) => ({
//       ...task,
//       taskNumber: index + 1,
//     }));

//   remainingTasks.map((task) => {
//     console.log(task);
//     patchtabledata(task);
//   });
//   // patchtabledata(remainingTasks);

//   // const updatedTodo = await res.json();
//   // return updatedTodo;
// };
