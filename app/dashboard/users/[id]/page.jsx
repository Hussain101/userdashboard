// import { updateUser } from "@/app/lib/actions";
 import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
// import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {
  
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className={"flex relative left-10  w-[90%]"}>
      <div className={"bg-slate-700 p-5 h-fit  text-white "}>
        <div className={" "}>
          <Image  height={300} width={300} src={"/noavatar.png"} alt=""  />
        </div> 
        {user.username}
      </div>
      <div className={" bg-slate-700 ml-3 p-3"}>
        <form 
         action={updateUser} 
        className={"flex flex-col w-[500px] text-white "}>
          <input className="w-full my-3 bg-slate-900 text-white p-2"  type="hidden" name="id" value={user.id}/>
          <label>Username</label>
          <input  className="w-full my-3 bg-slate-900 text-white p-2" type="text" name="username" placeholder={user.username} />
          <label>Email</label>
          <input  className="w-full my-3 bg-slate-900 text-white p-2" type="email" name="email" placeholder={user.email} />
          <label>Password</label>
          <input  className="w-full my-3 bg-slate-900 text-white p-2" type="password" name="password" />
          <label>Phone</label>
          <input  className="w-full my-3 bg-slate-900 text-white p-2" type="text" name="phone" placeholder={user.phone} />
          <label>Address</label>
          <textarea  className="w-full my-3 bg-slate-900 text-white p-2" type="text" name="address" placeholder={user.address} />
          <label>Is Admin?</label>
          <select  className="w-full my-3 bg-slate-900 text-white p-2" name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>Yes</option>
            <option value={false} selected={!user.isAdmin}>No</option>
          </select>
          <label>Is Active?</label>
          <select  className="w-full my-3 bg-slate-900 text-white p-2" name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>Yes</option>
            <option value={false} selected={!user.isActive}>No</option>
          </select>
          <button className="w-full my-3 bg-green-500 text-white p-2" >Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;