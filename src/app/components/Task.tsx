import { TableTasks } from "../../../types/tabledata";

interface TaskProps {
  task: TableTasks;
}

export const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <tr key={task.id}>
      <td>{task.taskName}</td>
      <td>{task.Description}</td>
    </tr>
  );
};
