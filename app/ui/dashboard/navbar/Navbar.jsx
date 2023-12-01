"use client";

import { usePathname } from "next/navigation";
import React from "react";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className=" bg-slate-600 rounded-2xl items-center m-8 p-4 flex justify-between">
      <div className="text-white text-lg font-bold">
        {pathname.split("/").pop()}
      </div>
      <div className="flex items-center">
        <div className="flex bg-slate-200 justify-center px-2 rounded-xl items-center">
          <MdSearch />
          <input type="text" placeholder="Search..." className="bg-transparent p-2"/>
        </div>
        <div>
        <div className=" flex items-center justify-center mx-2 text-white" >
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
