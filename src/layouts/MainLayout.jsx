import { Outlet } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import Bookmarks from "../components/Bookmarks/Bookmarks";
import Home from "../components/Home/Home";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className='h-16'>
              <Nav></Nav>          
            </div>
            <div className="min-h-[calc(100vh-116px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;