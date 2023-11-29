import Sidebar from "../ui/dashboard/sidebar/Sidebar";
import Navbar from "../ui/dashboard/navbar/Navbar";

const Layout = ({children}) =>{
    return(
        <div className="flex flex-1">
            <div className="w-[20%]">
                <Sidebar />
            </div>
            <div>
                <Navbar />
                {children}
            </div>
        </div>
    )
};
export default Layout; 