import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="h-full w-full max-w-[1024px] px-[24px] mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 place-content-center gap-[30px] lg:gap-[120px]">
        {/* col-1  */}
        <div>
          <h1 className="text-2xl font-bold text-red-500">OceanCatch</h1>

          <div className="flex gap-2 mt-11">
            <a href="/">
              <FaFacebook className=" text-tangerine bg-light-tangerine rounded-full p-2 w-[40px] h-[40px]" />
            </a>
            <a href="/">
              <FaTwitter className=" text-tangerine bg-light-tangerine rounded-full p-2 w-[40px] h-[40px]" />
            </a>
            <a href="/">
              <FaLinkedin className=" text-tangerine bg-light-tangerine rounded-full p-2 w-[40px] h-[40px]" />
            </a>
            <a href="/">
              <FaInstagram className=" text-tangerine bg-light-tangerine rounded-full p-2 w-[40px] h-[40px]" />
            </a>{" "}
          </div>
        </div>

        {/* col-2  */}
        <div>
          <h3 className="text-2xl font-bold">Opening Restaurant</h3>
          <p className="text-gray font-inter mt-11 text-base">
            Sat-Wet: 09:00am-10:00PM
          </p>
          <p className="text-gray font-inter mt-1 text-base">
            {" "}
            Thursdayt: 09:00am-11:00PM{" "}
          </p>
          <p className="text-gray font-inter mt-1 text-base">
            Friday: 09:00am-8:00PM
          </p>
        </div>

        {/* col-3  */}
        <ul className="flex flex-col">
          <h3 className="text-2xl font-bold"> User Link</h3>
          <Link href="/" className="text-gray font-inter mt-11 text-base">
            About Us
          </Link>
          <Link href="/" className="text-gray font-inter mt-1 text-base">
            Contact Us
          </Link>
          <Link href="/" className="text-gray font-inter mt-1 text-base">
            Order Delivery
          </Link>
          <Link href="/" className="text-gray font-inter mt-1 text-base">
            Payment & Tex
          </Link>
          <Link href="/" className="text-gray font-inter mt-1 text-base">
            Terms of Services
          </Link>
        </ul>

        {/* col-4  */}
        <div>
          <h3 className="text-2xl font-bold">Contact Us </h3>
          <p className="text-gray font-inter mt-11 text-base">
            1234 Country Club Ave
          </p>
          <p className="text-gray font-inter mt-1 text-base">
            NC 123456, London, UK
          </p>
          <p className="text-gray font-inter mt-1 text-base">+0123 456 7891</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
