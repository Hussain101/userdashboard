import Link from "next/link";
import React from "react";

const MenuLink = ({ list }) => {
    console.log("🚀 ~ file: MenuLink.jsx:4 ~ MenuLink ~ item:", list)
    
  return (
    <div className="text-white flex">
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
