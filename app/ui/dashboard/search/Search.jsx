"use client";

import { MdSearch } from "react-icons/md";
import React from 'react'

const Search = ({placeholder}) => {
  return (
    <div>
        <div  className="text-white w-fit m-5 flex rounded-lg items-center justify-center bg-slate-500  p-2">
        <MdSearch />
        <input
        type="text"
        placeholder={placeholder}
        className={"bg-transparent "}
        
      />
        </div>
    </div>
  )
}

export default Search