// import { VscLocation } from "react-icons/vsc";
// import { MdEmail } from "react-icons/md";

import { NavLink } from "react-router-dom";
import './Header.css'

// import { HiDownload } from "react-icons/hi";
const Header = () => {
  return (
    <div className="p-8  text-center">
        <div className="space-x-6 nav-link">
           {/* <NavLink className={"border-b-2 border-gray-400"} to={"/"}>Home</NavLink> */}
           <NavLink to={"/"}>Home</NavLink>
           <NavLink  to={"/projects"}>Projects</NavLink>
           <NavLink to={"blogs"}>Articles</NavLink>
        </div>
    </div>
  );
};

export default Header;
