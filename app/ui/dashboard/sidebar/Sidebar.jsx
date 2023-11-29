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
    <div className='bg-slate-500 h-screen text-white'>
        <div className='flex items-center'>
        <div className='rounded-full  m-2 '>
        <Image
          className=""
          src={"/noavatar.png"}
          alt="nvhgv"
          width="50"
          height="50"
        />
        </div>
        <div>
          <p>Hussain Siddiqui</p>
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
                              items.list.map((list) =>{
                                return (
                                  <div>
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
    </div>
  )
}

export default Sidebar