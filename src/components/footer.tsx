import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-black  bg-gray-300 dark:bg-gray-950 dark:text-gray-50   p-4 md:p-6">
      <div className=" container mx-auto ">
        <div className="flex flex-col items-center gap-4">
          <p className="  text-3xl flex   items-center ">
            WP<span className="text-lg">2</span>NextJS
          </p>

          <div className="social text-black">
            <ul className="flex items-center gap-3">
              <li>
                <a aria-label="Facebook" className=" flex justify-center items-center w-[20px] h-[20px]   rounded-full " href="#">
                  <FaFacebookF className="  text-sm  " />
                </a>
              </li>
              <li>
                <a aria-label="Twitter" className=" flex justify-center items-center w-[20px] h-[20px]   rounded-full " href="#">
                  <FaTwitter className="   text-sm    " />
                </a>
              </li>
              <li>
                <a aria-label="Linkedin" className=" flex justify-center items-center w-[20px] h-[20px]   rounded-full " href="#">
                  <FaLinkedinIn className="   text-sm   " />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Second Line */}
        <div className=" my-10 flex flex-col items-center  ">
          <h3 className="   p-1 font-bold m-0 mb-2 !inline-block lg:block self-center   ">Contact Us</h3>
          <p className="text-xs">Email: info@positivus.com</p>
          <p className="my-2 text-xs">Phone: 555-567-8901</p>
          <p className="text-xs">Address: 1234 Main St Moonstone City, Stardust State 12345</p>
        </div>
        {/* Third Line */}
        <div className="text-xs  w-full text-center  ">
          <hr className="h-[2px]   w-full" />
          <div className=" mt-4 ">
            <p>© 2023 Positivus. All Rights Reserved.</p>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
