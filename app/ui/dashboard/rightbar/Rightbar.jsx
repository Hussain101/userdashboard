import Image from "next/image";

import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={"w-[300px]    right-0   text-white "}>
      <div className={"bg-slate-700 p-5  rounded-xl my-3"}>
        {/* <div className={""}>
          <Image className={""} src="/astronaut.png" alt="" fill />
        </div> */}
        <div className={""}>
          <span className={" font-semibold text-xl my-2"}>🔥 Available Now</span>
          <h3 className={" text-lg my-2 font-semibold"}>
            How to use the new version of the admin dashboard?
          </h3>
          <span className={"my-8 text-xs"}>Takes 4 minutes to learn</span>
          <p className={"my-8 text-xs"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className={"w-full rounded-xl flex items-center bg-black p-3 justify-center my-3 hover:bg-slate-800 transition-all ease-in-out delay-75 "}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={"bg-slate-700 p-5  rounded-xl my-3"}>
        {/* <div className={""}>
          <Image className={""} src="/astronaut.png" alt="" fill />
        </div> */}
        <div className={""}>
          <span className={" font-semibold text-xl my-2"}>🚀 Coming Soon</span>
          <h3 className={" text-lg my-2 font-semibold"}>
          New server actions are available, partial pre-rendering is coming
            up
          </h3>
          <span className={"my-8 text-xs"}>Boost your productivity</span>
          <p className={"my-8 text-xs"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className={"w-full rounded-xl flex items-center bg-black p-3 justify-center my-3 hover:bg-slate-800 transition-all ease-in-out delay-75 "}>
          <MdReadMore />
            Learn
          </button>
        </div>
      </div>
     
    </div>
  );
};

export default Rightbar;