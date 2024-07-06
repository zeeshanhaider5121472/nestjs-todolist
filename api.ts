import { TableTasks } from "./types/tabledata";

const baseurl = "http://localhost:3001";

// Fetch data from API
export const gettabledata = async (): Promise<TableTasks[]> => {
  const res = await fetch(`${baseurl}/tasks`, { cache: "no-store" });
  const data = res.json();
  return data;
};

//Post API
export const posttabledata = async (todo: TableTasks): Promise<TableTasks> => {
  const res = await fetch(`${baseurl}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();
  return newTodo;
};

//Patch API
export const patchtabledata = async (todo: TableTasks): Promise<TableTasks> => {
  const res = await fetch(`${baseurl}/tasks/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const updatedTodo = await res.json();
  return updatedTodo;
};
