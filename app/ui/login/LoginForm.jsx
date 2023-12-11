"use client";

import { authenticate } from "@/app/lib/actions";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);
  console.log("🚀 ~ file: LoginForm.jsx:8 ~ LoginForm ~ state:", state)

  return (
    <div className="h-screen w-full flex justify-center items-center">
    <form action={formAction} className={" flex flex-col gap-6 bg-slate-700 text-white p-10"}>
      <h1 className="text-xl font-semibold">Login</h1>
      <input className="p-2 text-black" type="text" placeholder="username" name="username" />
      <input className="p-2 text-black" type="password" placeholder="password" name="password" />
      <button className="bg-green-700 p-2">Login</button>
      {state && state}
    </form>
    </div>
  );
};

export default LoginForm;