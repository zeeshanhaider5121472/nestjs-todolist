import { Toaster } from "react-hot-toast";
import { gettabledata } from "../../api";
import HomeScreen from "./components/HomeScreen";
// export const revalidate = 0;
export default async function Home() {
  const data = await gettabledata();
  // console.log(data);
  return (
    <main className="bg-white">
      <Toaster position="top-center" />

      <div className="max-w-4xl mx-auto mt-4 pl-5 pr-5">
        {/* <span className="loading loading-ball loading-lg text-black-400" /> */}

        <div className=" font-bold items-center align-middle justify-center mt-3 h-20 flex">
          TodolistApp
        </div>
        <HomeScreen data={data}/>
      </div>
    </main>
  );
}
