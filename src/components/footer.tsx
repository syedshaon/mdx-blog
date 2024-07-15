import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="text-xs text-black  bg-gray-300 dark:bg-gray-950 dark:text-gray-50   p-4 md:p-6">
      <div className=" container mx-auto ">
        <div className="flex flex-col items-center gap-2">
          <p className="  text-2xl flex   items-center ">
            WP<span className="text-lg">2</span>NextJS
          </p>

          <div className="social text-black">
            <ul className="flex items-center gap-3">
              <li>
                <a aria-label="Facebook" className=" flex justify-center items-center w-[20px] h-[20px]   rounded-full " href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a aria-label="Twitter" className=" flex justify-center items-center w-[20px] h-[20px]   rounded-full " href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a aria-label="Linkedin" className=" flex justify-center items-center w-[20px] h-[20px]   rounded-full " href="#">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Second Line */}
        <div className=" mb-4 mt-2 flex justify-center flex-wrap gap-5 items-center  ">
          <p className="flex justify-center items-center gap-2">
            <MdMarkEmailUnread /> info@positivus.com
          </p>
          <p className="flex justify-center items-center gap-2">
            <FaPhoneVolume /> 555-567-8901
          </p>
          <p className="flex justify-center items-center gap-2">
            <IoLocationSharp /> 1234 Main St Moonstone City, Stardust State 12345
          </p>
        </div>
        {/* Third Line */}
        <div className="  w-full text-center  ">
          <hr className="h-[2px]   w-full" />
          <div className=" mt-4 flex justify-center gap-5">
            <p>© 2023 Positivus. All Rights Reserved.</p>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
