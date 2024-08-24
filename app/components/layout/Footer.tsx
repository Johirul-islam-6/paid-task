import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="footer  ">
      <div className="md:flex items-center md:h-[260px]  mx-auto">
        <div className="footer-content md:px-10 px-2  bluecolor flex items-center justify-start w-[100%] md:max-w-[30%] md:h-[100%] py-4 sm:py-8 md:py-10">
          <h1 className="font-bold text-gray-300 flex flex-wrap underline md:no-underline md:block gap-2 sm:gap-3 text-[12px] sm:text-[14px] md:text-[17px]">
            <Link className="pt-2 hover:underline" href={"/"}>
              ABOUT US
            </Link>{" "}
            <br className="hidden md:block" />
            <Link className="pt-2 hover:underline" href={"/"}>
              CONTACT US
            </Link>{" "}
            <br className="hidden md:block" />
            <Link className="pt-2 hover:underline" href={"/"}>
              TERMS OF SERVICE
            </Link>{" "}
            <br className="hidden md:block" />
            <Link className="pt-2 hover:underline" href={"/"}>
              REFUND POLICY
            </Link>{" "}
            <br className="hidden md:block" />
            <Link className="pt-2 hover:underline" href={"/"}>
              REFUND POLICY
            </Link>{" "}
            <br className="hidden md:block" />
          </h1>
        </div>
        <div className="footer-container bg-[#E7DBBD] px-2 md:px-10 h-[100%] w-[100%] sm:gap-5 md:gap-28 grid sm:grid-cols-2 justify-center items-center  ">
          <div className="left-content pt-5 md:pt-0">
            <h1 className="font-bold text-[14px] md:text-[17px] uppercase">
              FREE STANDARD SHIPPING WITH $100 PURCHASE
            </h1>
            <p className="text-[12px] md:text-[14px] pt-3 uppercase">
              Join US ON THE SUPERBUILDERS CLUB and{" "}
              <br className="hidden md:block" /> get 5% off WITH EVERY PURCHASE.
            </p>
            <div className="flex flex-1 items-center justify-center mt-3">
              <div className="w-full max-w-lg relative">
                <div className=" flex sm:items-center ">
                  <input
                    id="q"
                    name="q"
                    className="inline w-full justify-center items-center border-[1px] border-gray-400 placeholder:uppercase placeholder:text-[12px] md:placeholder:text-[12px]  bg-transparent pb-1 ps-2 h-[30px] md:h-[37px]  leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter your email.."
                    type="text"
                    // value=""
                  />
                  <button
                    type="submit"
                    className="ml-1 md:ml-2 inline-flex hover:bg-[#1d19fafb] hover:text-white font-normal text-center justify-center text-[10px] sm:text-[12px] md:text-[12px] items-center border-[1px] border-gray-500 text-gray-500 rounded-xl h-[30px] md:h-[37px] w-[110px] md:w-[120px] "
                  >
                    SIGN UP
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="right-content pt-3 md:pt-0 items-center  ">
            <h1 className="font-bold text-[14px] md:text-[17px] uppercase">
              SUPERSTRUCTURING LLC
            </h1>
            <p className="text-[12px] md:text-[14px] pt-2 uppercase">
              2120 S Firelane Rd <br /> Southampton <br /> NJ 08088
            </p>
            <p className="text-[14px] pt-2 uppercase">
              732-773-2949 <br />{" "}
            </p>
            <span className="text-[14px]">hello@superstructuring.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
