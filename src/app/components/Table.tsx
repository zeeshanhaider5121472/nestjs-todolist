import { TableTasks } from "../../../types/tabledata";
import { Task } from "./Task";

interface TodoList {
  tasks: TableTasks[];
}

const Table: React.FC<TodoList> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
