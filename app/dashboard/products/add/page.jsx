// import { addUser } from "@/app/lib/actions";

import { addProduct } from "@/app/lib/actions";

const AddProductPage = () => {
  return (
    <div className={"w-[90%] p-5 relative -right-6 bg-slate-600"}>
      <form
         action={addProduct}
        className={"w-full"}
      >
       <div className="w-full flex">
       <input
          className="bg-slate-800 my-2 mr-2 text-white active:outline-none p-2 w-[50%]"
          type="text"
          placeholder="title"
          name="title"
          required
        />
        <input
          className="my-2 ml-2 bg-slate-800 text-white active:outline-none p-2 w-[50%]"
          type="text"
          placeholder="desc"
          name="desc"
          required
        />
       </div>
       <div className="w-full flex">
       <input
       className="bg-slate-800 w-full my-2 mr-2 text-white active:outline-none p-2 "
          type="number"
          placeholder="price"
          name="price"
          required
        />
        <input 
        className="bg-slate-800 my-2 ml-2 w-full text-white active:outline-none p-2 "
        type="text" placeholder="number" name="stock" />
       </div>
       <div className="flex">
       <input
          className="my-2 ml-2 bg-slate-800 text-white active:outline-none p-2 w-[50%]"
          type="text"
          placeholder="size"
          name="size"
          required
        />
       <input
          className="my-2 ml-2 bg-slate-800 text-white active:outline-none p-2 w-[50%]"
          type="text"
          placeholder="color"
          name="color"
          required
        />
       </div>
       <select 
       className="bg-slate-800 text-white active:outline-none p-2 w-full h-[200px] my-2"
       name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
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

export default AddProductPage;
