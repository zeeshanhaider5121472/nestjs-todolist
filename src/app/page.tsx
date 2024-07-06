import { Toaster } from "react-hot-toast";
// import { gettabledata } from "../../api";
import Table from "./components/Table";
// export const revalidate = 0;
export default async function Home() {
  // const data = await gettabledata();
  // console.log(data);
  return (
    <main className="bg-white">
      <Toaster position="top-center" />

      <div className="max-w-4xl mx-auto mt-4">
        <div className=" font-bold items-center align-middle justify-center mt-3 h-20 flex">
          TodolistApp
        </div>
        {/* <AddTask olddata={data} /> */}
        <Table tasks={[]} />
        {/* <Table tasks={data} /> */}
      </div>
    </main>
  );
}
