import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
  return (
    // <div className=" h-screen md:w-2/4 border m-auto ">
    //     <Header></Header>
    //     <Outlet></Outlet>
    //     <Footer></Footer>
    // </div>

    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="overflow-y-auto h-[50rem]  md:w-2/4  border mx-auto"  style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
