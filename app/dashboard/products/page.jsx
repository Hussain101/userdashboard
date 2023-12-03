import { fetchproducts } from "@/app/lib/data";
import Footer from "@/app/ui/dashboard/footer/Footer";
import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import Search from "@/app/ui/dashboard/search/Search";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductPage = async () => {
  const placeholder = "Search for user";
  const products = await fetchproducts()
  const users = [
    {
      id: 1,
      username: "Hussain",
      email: "hussain@gmail.com",
      createdAt: "11.11.11",
      isAdmin: "Admin",
      isActive: "active",
    },
    {
      id: 1,
      username: "Hussain",
      email: "hussain@gmail.com",
      createdAt: "11.11.11",
      isAdmin: "Admin",
      isActive: "active",
    },
  ];
  return (
    <div>
    <div className="bg-slate-700 my-6 p-3 mx-7 rounded-xl">
      <div className="text-white flex justify-between items-center">
        <Search placeholder={placeholder} />
        <Link href="/dashboard/users/add">
          <button className={"bg-black p-3 rounded-lg"}>Add New</button>
        </Link>
      </div>
      <table className={"w-full my-3 text-white"}>
        <thead className="font-semibold my-3">
        <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody className="my-3">
          {products?.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={"flex items-center"}>
                  <Image
                    src={ "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={" mr-1 rounded-full"}
                  />
                  {user.title}
                </div>
              </td>
              <td>{user.desc}</td>
              <td>{user.price}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.stock}</td>
              <td>
                <div className={"flex items-center"}>
                  <Link 
                  href={"#"}
                  // href={`/dashboard/users/${user.id}`}
                  >
                    <button className={`bg-green-700 py-1 px-2 rounded-md mx-1`}>
                      View
                    </button>
                  </Link>
                  <form 
                  // action={deleteUser}
                  >
                    <input type="hidden" name="id" value={user.id} />
                    <button className={`bg-red-600 px-2 rounded-md  py-1`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
    <Footer  />
    </div>
  );
};

export default ProductPage;
