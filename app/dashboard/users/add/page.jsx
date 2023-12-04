// import { addUser } from "@/app/lib/actions";

const AddUserPage = () => {
  return (
    <div className={"w-[90%] p-5 relative -right-6 bg-slate-600"}>
      <form
        // action={addUser}
        className={"w-full"}
      >
       <div className="w-full flex">
       <input
          className="bg-slate-800 my-2 mr-2 text-white active:outline-none p-2 w-[50%]"
          type="text"
          placeholder="username"
          name="username"
          required
        />
        <input
          className="my-2 ml-2 bg-slate-800 text-white active:outline-none p-2 w-[50%]"
          type="email"
          placeholder="email"
          name="email"
          required
        />
       </div>
       <div className="w-full flex">
       <input
       className="bg-slate-800 w-full my-2 mr-2 text-white active:outline-none p-2 "
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input 
        className="bg-slate-800 my-2 ml-2 w-full text-white active:outline-none p-2 "
        type="phone" placeholder="phone" name="phone" />
       </div>
       <div className="flex">
       <select 
       className="bg-slate-800  text-white active:outline-none p-2 w-full mr-3 my-2"
       name="isAdmin" id="isAdmin">
          <option value={false}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select
         className="bg-slate-800 text-white active:outline-none ml-2 p-2 w-full my-2"
         name="isActive" id="isActive">
        

          <option value={true}>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
       </div>
        <textarea
        className="bg-slate-800 text-white active:outline-none p-2 w-full h-[200px] my-2"
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button className="w-full text-center bg-green-950 text-white font-semibold p-2" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
