import Sidebar from "../ui/dashboard/sidebar/Sidebar";
import Navbar from "../ui/dashboard/navbar/Navbar";

const Layout = ({children}) =>{
    return(
        <div className="flex ">
            <div className="w-[30%]">
                <Sidebar />
            </div>
            <div className="w-[106%]">
                <Navbar />
                {children}
            </div>
        </div>
    )
};
export default Layout; 