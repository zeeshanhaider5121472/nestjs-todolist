"use client";

import { useState } from "react";
import { TableTasks } from "../../../types/tabledata";
import { AddTask } from "./AddTask";
import Table from "./Table";

interface HomeScreenProps {
  data: TableTasks[];
}
const HomeScreen: React.FC<HomeScreenProps> = ({ data }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      {/* <LoaderModal /> */}
      <AddTask olddata={data} setIsLoading={setIsLoading} />
      <Table tasks={data} setIsLoading={setIsLoading} isLoading={isLoading} />
    </div>
  );
};

export default HomeScreen;
