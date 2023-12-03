"use client";

import { MdSearch } from "react-icons/md";
import React from 'react'
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Search = ({placeholder}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const {replace} =useRouter();
  const handleSearch =(e) =>{
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      e.target.value.length > 2 && params.set("q",e.target.value)
    } else {
      params.delete("q")
    }
    replace(`${pathname}?${params}`)
  }
  return (
    <div>
        <div  className="text-white w-fit m-5 flex rounded-lg items-center justify-center bg-slate-500  p-2">
        <MdSearch />
        <input
        type="text"
        placeholder={placeholder}
        className={"bg-transparent "}
        onChange={handleSearch}
      />
        </div>
    </div>
  )
}

export default Search