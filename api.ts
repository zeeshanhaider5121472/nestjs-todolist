import { TableTasks } from "./types/tabledata";

const baseurl = "http://localhost:3001";

// Fetch data from API
export const gettabledata = async (): Promise<TableTasks[]> => {
  const res = await fetch(`${baseurl}/tasks`);
  const data = res.json();
  return data;
};
