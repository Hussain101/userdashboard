"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const MenuLink = ({ list }) => {
    const pathname = usePathname();
    
  return (
    <div className={`text-white mx-4 flex font-medium ${pathname === list.path ?"bg-slate-400":""} hover:bg-slate-400`}>
      <Link
        href={list.path}
        
        // className={`${styles.container} ${
        //   pathname === item.path && styles.active
        // }`}
      >
        <div className="flex items-center">
        <p className="ml-6 my-3  mr-2">{list.icon} </p>
        {list.title}
        </div>
      </Link>
    </div>
  );
};

export default MenuLink;
