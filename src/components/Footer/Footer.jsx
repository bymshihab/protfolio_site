import { MdPhoneForwarded } from "react-icons/md";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div>
      <footer className=" p-5 flex justify-center items-center">
        <div className="flex space-x-4">
          <p className="flex items-center"><MdPhoneForwarded /> : +8801990637762</p>
          <p className="flex items-center"><MdEmail />: khaledshihab221@gmail.com</p>
          <p>© 2024 - All right reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
