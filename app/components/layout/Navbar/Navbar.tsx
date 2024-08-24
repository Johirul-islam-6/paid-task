"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./Navbar.css";

import logo from "@/app/Assets/navbar/logo.png";
import love from "@/app/Assets/navbar/love.png";
import account from "@/app/Assets/navbar/account.png";

import search from "@/app/Assets/navbar/search.png";
import { ShopingCart } from "./ShopingCart";
import { Account } from "./Account";

export const Navbar: React.FC = () => {
  const [isFixed, setIsFixed] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY >= 1) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ----------searching functionality --------

  const [openSearchingbtn, setSearchingbtn] = useState<boolean>(false);

  const toggleSearchBtn = () => {
    setSearchingbtn(!openSearchingbtn);
  };
  // ----------Card Drawer functionality --------

  const [openDrawerbtn, setDrawerbtn] = useState<boolean>(false);
  const [openDrawerbtnData, setDrawerbtnData] = useState<string>();

  const toggleDrawerBtn = (data: any) => {
    setDrawerbtnData(data);
    setDrawerbtn(!openDrawerbtn);
  };

  return (
    <>
      <div className="">
        <div className={`${isFixed ? "fixed" : ""} navbar-container relative`}>
          <div className="flex maxwidth mx-auto items-center justify-between">
            <div className="flex items-center gap-2 md:gap-5 w-[100%]">
              {/* -------search icon  ------- */}
              {!openSearchingbtn && (
                <div
                  onClick={toggleSearchBtn}
                  className="search-icon ms-0 md:ms-1 cursor-pointer p-1 border-2 border-[#1d19fa] hover:border-[#fff] hover:border-2"
                >
                  <Image
                    src={search}
                    width={0}
                    height={0}
                    className="md:w-[18px] w-[15px]  md:h-[18px] h-[15px] object-fill ms-2 md:ms-0"
                    alt="search"
                  />
                </div>
              )}
              <div className="md:w-[260px] ms-0 md:ms-1 lg:ms-20">
                <Link href="/" className="flex items-center">
                  <div className="logo-bg">
                    <Image
                      src={logo}
                      width={0}
                      height={0}
                      className={`${
                        isFixed
                          ? "md:w-[180px] w-[125px] md:h-[36px] h-[29px]"
                          : "w-[125px] md:w-[200px] lg:w-[280px] h-[30px] md:h-[30px] lg:h-[50px] "
                      } object-contain sm:object-fill ps-1`}
                      alt="Mr.Friends"
                    />
                  </div>
                </Link>
              </div>
            </div>

            {/* -----------------  Right site item list ---------------> */}
            <div className="profile-container md:w-9/12 flex justify-end items-center">
              <ul className="all-link-container items-center flex">
                <li className="link-text py-2 px-[1px] border-b-2 border-[#f6931e] border-opacity-0 hover:border-opacity-100 hover:text-[#f6931e] duration-300 cursor-pointer mx-[6px] md:mx-[10px]">
                  <Link
                    className="navar-text flex flex-col pt-1 justify-center items-center text-white uppercase Navbar-font"
                    href="/wishlist"
                  >
                    <span className="text-[10px] md:text-[12px] pb-[1px] text-gray-300 font-bold">
                      30
                    </span>
                    <Image
                      className="w-[14px] h-[13px] md:w-[16px] md:h-[15px] "
                      width={0}
                      height={0}
                      src={love}
                      alt=""
                    />
                  </Link>
                </li>
                <li className="link-text py-2 px-[1px] border-b-2 border-[#f6931e] border-opacity-0 hover:border-opacity-100 hover:text-[#f6931e] duration-300 cursor-pointer mx-[6px] md:mx-[10px]">
                  <Link
                    onClick={() => toggleDrawerBtn("account")}
                    className="navar-text flex flex-col pt-1 justify-center items-center text-white uppercase Navbar-font"
                    href=""
                  >
                    <span className="text-[10px] md:text-[12px] pb-[1px] text-gray-300 font-bold">
                      Hi
                    </span>
                    <Image
                      className="w-[14px] h-[13px] md:w-[16px] md:h-[15px] "
                      width={0}
                      height={0}
                      src={account}
                      alt=""
                    />
                  </Link>
                </li>
                <li
                  onClick={() => toggleDrawerBtn("cart")}
                  className="link-text py-2 px-[1px] border-b-2 border-[#f6931e] border-opacity-0 hover:border-opacity-100 hover:text-[#f6931e] duration-300 cursor-pointer mx-[6px] md:mx-[10px]"
                >
                  <Link
                    className="navar-text flex flex-col pt-1 justify-center items-center text-white uppercase Navbar-font"
                    href=""
                  >
                    <span className="text-[10px] md:text-[12px]  text-gray-300 font-bold">
                      3
                    </span>
                    <span className="hidden md:flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20px"
                        height="20px"
                        fill="currentColor"
                      >
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 14.4l.24-2H17.6l1.6-8H5.21L4.27 1H1v2h2.17l2.16 11.57L4 18v1h16v-2H7.58l-.42-2.6zM7.33 4h10.11l-1.25 6H7.8l-.47-6z" />
                      </svg>
                    </span>
                    <span className="md:hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="16px"
                        height="16px"
                        fill="currentColor"
                      >
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 14.4l.24-2H17.6l1.6-8H5.21L4.27 1H1v2h2.17l2.16 11.57L4 18v1h16v-2H7.58l-.42-2.6zM7.33 4h10.11l-1.25 6H7.8l-.47-6z" />
                      </svg>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* --------- searching input field open -------- */}
          <div
            className={`bluecolor bg-[#1d19fa01] flex justify-center mx-3 md:mx-0 items-center transition-height duration-300 ease-in-out ${
              openSearchingbtn ? "h-[100px]" : "h-0"
            }`}
          >
            <div className="relative mx-auto flex w-[100%] sm:w-[600px] md:block">
              <input
                className="appearance-none uppercase  placeholder:normal-case placeholder:text-[16px] sm:placeholder:text-[18px] md:placeholder:text-[20px] z-[11px] relative border-b-[1px] border-[#cecece] text-[16px] sm:text-[20px] md:text-[25px]  text-[#fffffff1] bg-[#1d19fa01] 
                 h-[50px] ps-2 md:ps-1  w-[100%] md:w-[600px] md:px-5 focus:outline-none focus:ring-0"
                id="username"
                type="text"
                placeholder="Search..."
              />

              <div className="absolute right-0 cursor-pointer z-[10px] inset-y-0 flex gap-2 items-center">
                <div className="flex gap-x-4  w-[100%] ">
                  <Link href={"/search"}>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 text-white hover:text-gray-400 "
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </Link>
                  {/* -------close ------ */}
                  <span className="">
                    <svg
                      onClick={toggleSearchBtn}
                      xmlns="http://www.w3.org/2000/svg"
                      className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------- Drawer Open Container  -------- */}
          <div
            className={` ${
              isFixed ? "top-[59px]" : ""
            } bg-[#E7DBBD] transition-height duration-300 ease-in-out ${
              openDrawerbtn
                ? "pb-12 md:w-[450px] absolute right-0 top-[92px] z-[10]"
                : "h-0 hidden"
            }`}
          >
            <div className="relative mx-auto top-0">
              <div className=" justify-end right-0 cursor-pointer inset-y-0 flex pt-2">
                <svg
                  width={"85"}
                  height={"85"}
                  onClick={toggleDrawerBtn}
                  xmlns="http://www.w3.org/2000/svg"
                  className="-ml-1 mr-3 h-6 w-6 text-gray-400 hover:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>

              {openDrawerbtnData === "account" && <Account />}
              {openDrawerbtnData === "cart" && <ShopingCart />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
