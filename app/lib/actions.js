"use server";

import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt"
import { signIn } from "../auth";
export const addUser = async (formData) => {
    const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
    try {
        await connectToDB();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            username,
            email,
            password:hashedPassword,
            phone,
            address,
            isAdmin,
            isActive,
          });
          
          await newUser.save()
    } catch (error) {
        console.log(error);
    throw new Error("Failed to create user!");
    }
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
}

export const updateUser = async (formData) => {
    
    const { id,username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
   
     try {
    await connectToDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)
    const updateFields = {
      username,
      email,
      password:hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    };

  Object.keys(updateFields).forEach(
  (key) =>
     (updateFields[key] === "" || undefined) && delete updateFields[key]
   );

    await User.findByIdAndUpdate(id,updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");

}
export const deleteUser = async (formData) =>{
    const {id} = Object.fromEntries(formData);
    try {
        await connectToDB();
        await User.deleteOne({_id:id});
        //delete user
    } catch (error) {
        console.log("🚀 ~ file: actions.js:68 ~ deleteUser ~ error:", error)
        throw new Error("Failed to delete user!");
        
    };
    revalidatePath("/dashboard/users")
};
export const addProduct = async (formData) => {
  const { title, desc, price, stock, color, size,cat } =
    Object.fromEntries(formData);
  try {
    connectToDB();

    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      cat,
      size,
    });
  

    await newProduct.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
export const updateProduct =  async (formData) => {
    
  const { id,title, desc, price, stock, color, size } =
  Object.fromEntries(formData);
   try {
  await connectToDB();

  const updateFields = {
    title,
    desc,
    price,
    stock,
    color,
    size,
  };

Object.keys(updateFields).forEach(
(key) =>
   (updateFields[key] === "" || undefined) && delete updateFields[key]
 );

  await Product.findByIdAndUpdate(id,updateFields);
} catch (err) {
  console.log(err);
  throw new Error("Failed to update user!");
}

revalidatePath("/dashboard/products");
redirect("/dashboard/products");

};
export const deleteProduct = async (formData) =>{
  const {id} = Object.fromEntries(formData);
  try {
      await connectToDB();
      await Product.deleteOne({_id:id});
      //delete product
  } catch (error) {
      console.log("🚀 ~ file: actions.js:68 ~ deleteUser ~ error:", error)
      throw new Error("Failed to delete user!");
      
  };
  revalidatePath("/dashboard/users")
};

export const authenticate = async (prevState,formDate) =>{
  const {username, password} = Object.fromEntries(formDate);
  console.log("🚀 ~ file: actions.js:155 ~ authenticate ~ password:", password)
  console.log("🚀 ~ file: actions.js:155 ~ authenticate ~ username:", username)
  try {
    await signIn("credentials",{ username, password })
  } catch (error) {
    
  }
 }