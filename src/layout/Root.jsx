import { Outlet } from "react-router-dom";

import Header from "../Components/Header/Header";

const Root = () => {
  return (
    <div className="bg-indigo-500 h-[100vh] pt-6">
      <div className="relative md:w-4/5 mx-auto min-h-[600px] bg-indigo-600 rounded-lg ">
        <Header></Header>
        <div className="h-[500px] flex justify-center items-center">
          <Outlet></Outlet>
        </div>

        <div className="absolute p-5 bg-white w-24  h-24 rounded-full left-60 top-28 opacity-5"></div>
        <div className="absolute p-5 bg-indigo-500 w-40 h-40 rounded-full left-5 top-1/2 opacity-30"></div>
        <div className="absolute p-5 bg-red-500 w-24 h-24 rounded-full right-60 top-28 opacity-30"></div>
        <div className="absolute p-5 bg-gray-100 w-24 h-24 rounded-full right-60 bottom-20 opacity-5"></div>
        <div className="absolute p-5 bg-blue-500 w-40 h-40 hover:bg-blue-600 rounded-full right-5 bottom-1/2 opacity-30"></div>
        <div className="absolute p-5 bg-pink-500 w-24 h-24 rounded-full left-60 bottom-20 opacity-30"></div>
      </div>
    </div>
  );
};

export default Root;
