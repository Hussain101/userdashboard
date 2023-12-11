import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import Image from "next/image";
import React from "react";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);
  return (
    <div>
      <div className={"flex relative left-10  w-[90%]"}>
        <div className={"bg-slate-700 p-5 h-fit text-white "}>
          <div className={" "}>
            <Image height={300} width={300} src={"/noavatar.png"} alt="" />
          </div>
          {product?.title}
        </div>
        <div className={" bg-slate-700 ml-3 p-3"}>
          <form
            action={updateProduct}
            className={"flex flex-col w-[500px] text-white "}
          >
            <input
              className="w-full my-3 bg-slate-900 text-white p-2"
              type="hidden"
              name="id"
              value={product?.id}
            />
            <label>Title</label>
            <input
              className="w-full my-3 bg-slate-900 text-white p-2"
              type="text"
              name="title"
              placeholder={product?.title}
            />
            <label>Price</label>
            <input
              className="w-full my-3 bg-slate-900 text-white p-2"
              type="number"
              name="price"
              placeholder={product?.price}
            />
            <label>Stock</label>
            <input
              className="w-full my-3 bg-slate-900 text-white p-2"
              type="number"
              name="stock"
              placeholder={product?.stock}
            />
            <label>Color</label>
            <input
              className="w-full my-3 bg-slate-900 text-white p-2"
              type="text"
              name="color"
              placeholder={product?.color || "color"}
            />
            <label>Size</label>
            <textarea
              className="w-full my-3 bg-slate-900 text-white p-2"
              type="text"
              name="size"
              placeholder={product?.size || "size"}
            />
            <label>Cat</label>
            <select
              className="w-full my-3 bg-slate-900 text-white p-2"
              name="cat"
              id="cat"
            >
              <option value="kitchen">Kitchen</option>
              <option value="computers">Computers</option>
            </select>
            <label>Description</label>
            <textarea
              className="w-full my-3 bg-slate-900 text-white p-2"
              name="desc"
              id="desc"
              rows="10"
              placeholder={product.desc}
            ></textarea>
            <button className="w-full my-3 bg-green-500 text-white p-2">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
