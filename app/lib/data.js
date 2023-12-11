 import { Product, User } from "./models";
import { connectToDB } from "./utils";

// export const fetchUsers = async (q, page) => {
//   const regex = new RegExp(q, "i");

//   const ITEM_PER_PAGE = 2;

//   try {
//     connectToDB();
//     const count = await User.find({ username: { $regex: regex } }).count();
//     const users = await User.find({ username: { $regex: regex } })
//       .limit(ITEM_PER_PAGE)
//       .skip(ITEM_PER_PAGE * (page - 1));
//     return { count, users };
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to fetch users!");
//   }
// };



// export const fetchProducts = async (q, page) => {
//   console.log(q);
//   const regex = new RegExp(q, "i");

//   const ITEM_PER_PAGE = 2;

//   try {
//     connectToDB();
//     const count = await Product.find({ title: { $regex: regex } }).count();
//     const products = await Product.find({ title: { $regex: regex } })
//       .limit(ITEM_PER_PAGE)
//       .skip(ITEM_PER_PAGE * (page - 1));
//     return { count, products };
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to fetch products!");
//   }
// };

// export const fetchProduct = async (id) => {
//   try {
//     connectToDB();
//     const product = await Product.findById(id);
//     return product;
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to fetch product!");
//   }
// };

// // DUMMY DATA

// export const cards = [
//   {
//     id: 1,
//     title: "Total Users",
//     number: 10.928,
//     change: 12,
//   },
//   {
//     id: 2,
//     title: "Stock",
//     number: 8.236,
//     change: -2,
//   },
//   {
//     id: 3,
//     title: "Revenue",
//     number: 6.642,
//     change: 18,
//   },
// ];


export const fetchUsers = async (q,page) => {
    
    const regex = new RegExp(q,"i")
    const ITEM_PER_PAGE =2;
    try {
      connectToDB();
 
       const count = await User.find({ username: { $regex: regex } }).count();
        const users = await User.find({username:{$regex:regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));;    
      
        return {count,users};
    } catch (error) {
       
        throw new Error("failed to fetch users")
    }
}
export const fetchUser = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const user = await User.findById(id);
    console.log("🚀 ~ file: data.js:27 ~ fetchUser ~ user:", user)
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};
export const fetchproducts = async (q,page) =>{
  const regex = new RegExp(q,"i");
  const Product_per_page = 2;
    try {
        connectToDB();
        const count = await Product.find({title:{$regex:regex}}).count();
        const product = await Product.find({title:{$regex:regex}}).limit(Product_per_page).skip(Product_per_page * (page - 1));
        
        return {count,product};
    } catch (error) {
      
        throw new Error("failed to fetch products");
    }
}
export const fetchProduct = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const user = await Product.findById(id);
   
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};
