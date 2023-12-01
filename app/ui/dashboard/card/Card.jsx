import { MdSupervisedUserCircle } from "react-icons/md";
import React from "react";

const Card = () => {
  return (
    <div className="flex py-12 bg-slate-700 w-full px-2 rounded-lg">
      <div className="">
      <MdSupervisedUserCircle size={32} />
      </div>
      <div className="mx-1 flex flex-col">
        <span>Total user</span>
        <span className="my-2 text-xl font-medium">10.928</span>
        <span className="text-xs">
            <span>12%</span>
            <span>more than the previous week</span>
        </span>
      </div>
    </div>
  );
};

export default Card;
