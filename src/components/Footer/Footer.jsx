import { MdPhoneForwarded } from "react-icons/md";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div>
      <footer className=" p-5 flex justify-center items-center ">
        <div className="grid grid-cols-1 md:grid-cols-3 bg-gray-100  ">
          <div>
            <p className="flex items-center p-1">
              <MdEmail />: khaledshihab221@gmail.com
            </p>
          </div>
          <div className=" flex justify-center items-center">
            <p className="flex items-center">© - All rights reserved</p>
          </div>

          <div className=" flex justify-center items-center">
            <p className="flex items-center  ">
              <MdPhoneForwarded /> : +8801990637762
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
