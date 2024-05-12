// import { VscLocation } from "react-icons/vsc";
// import { MdEmail } from "react-icons/md";

import { NavLink } from "react-router-dom";

// import { HiDownload } from "react-icons/hi";
const Header = () => {
  return (
    <div className="p-8  text-center">
        <div className="space-x-6">
           <NavLink className={"border-b-2 border-gray-400"} to={"/"}>Home</NavLink>
           <NavLink className={"border-b-2 border-gray-400"} to={"/projects"}>Projects</NavLink>
           <NavLink className={"border-b-2 border-gray-400"} to={"blogs"}>Articles</NavLink>
        </div>
    </div>
  );
};

export default Header;
