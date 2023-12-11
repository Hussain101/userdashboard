import React from 'react'
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
    
  } from "react-icons/md";
import MenuLink from './menulink/MenuLink';
import Image from 'next/image';
const Sidebar = () => {
    const menuItems = [
        {
          title: "Pages",
          list: [
            {
              title: "Dashboard",
              path: "/dashboard",
              icon: <MdDashboard />,
            },
            {
              title: "Users",
              path: "/dashboard/users",
              icon: <MdSupervisedUserCircle />,
            },
            {
              title: "Products",
              path: "/dashboard/products",
              icon: <MdShoppingBag />,
            },
            {
              title: "Transactions",
              path: "/dashboard/transactions",
              icon: <MdAttachMoney />,
            },
          ],
        },
        {
          title: "Analytics",
          list: [
            {
              title: "Revenue",
              path: "/dashboard/revenue",
              icon: <MdWork />,
            },
            {
              title: "Reports",
              path: "/dashboard/reports",
              icon: <MdAnalytics />,
            },
            {
              title: "Teams",
              path: "/dashboard/teams",
              icon: <MdPeople />,
            },
          ],
        },
        {
          title: "User",
          list: [
            {
              title: "Settings",
              path: "/dashboard/settings",
              icon: <MdOutlineSettings />,
            },
            {
              title: "Help",
              path: "/dashboard/help",
              icon: <MdHelpCenter />,
            },
          ],
        },
      ];
  return (
    <div className='bg-slate-700 fixed w-[300px]  h-screen text-white'>
        <div className='flex items-center'>
        <div className='rounded-full  m-2 '>
        <Image
          className="rounded-full"
          src={"/noavatar.png"}
          alt="nvhgv"
          width="50"
          height="50"
        />
        </div>
        <div className='my-6'>
          <p className='font-semibold text-lg'>Hussain Siddiqui</p>
          <p className='text-xs'>MERN STACK DEVELOPING</p>
        </div>
        </div>
        <ul>
            {
                menuItems.map((items,index) =>{
                    return(
                        <div key={index}>
                            <li className='text-white text-xs m-2' key={index}>{items.title}</li>
                            {
                              items.list.map((list,index) =>{
                                return (
                                  <div key={index}>
                                <MenuLink list={list} />
                                </div>
                                )
                              })
                            }
                        </div>
                    )
                })
            }
        </ul>
        <form
        // action={async () => {
        //   "use server";
        //   await signOut();
        // }}
      >
        <button className='flex font-semibold items-center justify-center mx-10'>
          <MdLogout className='mr-2'/>
          Logout
        </button>
      </form>
    </div>
  )
}

export default Sidebar