"use client";
import React, { useState } from "react";
import cartimage from "@/app/Assets/cart_image/pin.png";
import Image from "next/image";
import Link from "next/link";

export const ShopingCart = () => {
  // ------------------ Quintity Numebr -----------
  const [allItem, setAllItem] = useState([
    {
      id: 1,
      name: "STRUCTURAL H19",
      price: 10,
      quantity: 1,
    },
    {
      id: 2,
      name: "STRUCTURAL H20",
      price: 21,
      quantity: 1,
    },
    {
      id: 3,
      name: "STRUCTURAL H10",
      price: 33,
      quantity: 1,
    },
  ]);
  // Initial quantity set to 1

  const increment = (index: Number) => {
    setAllItem((prevItems) =>
      prevItems.map((item, i) =>
        i === index
          ? {
              ...item,
              quantity: item.quantity < 10 ? item.quantity + 1 : item.quantity,
            }
          : item
      )
    );
  };

  const decrement = (index: number) => {
    setAllItem((prevItems) =>
      prevItems.map((item, i) =>
        i === index
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  return (
    <div>
      <div className="shopingCart md:px-8 px-2">
        {/* --------------progressbar- -------- */}
        <div className=" rounded-lg  block p-x-4">
          <h1 className="pb-3 font-bold">Shopping Cart (3)</h1>
          <div className="w-full h-4  bg-gray-400 rounded-full">
            <div className="w-3/4 h-full text-center flex items-center justify-center text-xs text-white bg-[#1D19FA] rounded-full">
              75%
            </div>
          </div>
          <p className="text-[13px] pt-3 tracking-widest">
            Only $64.00 away from Free Shipping
          </p>
        </div>
        {/* ---------------- all cart --------- */}
        <div className="all-cart-list mt-5 flex flex-col gap-y-8">
          {allItem?.map((item, index) => (
            <div
              key={index}
              className="flex w-[100%] gap-x-5 items-center px-2"
            >
              <div className="w-36 h-20 flex items-center">
                <Image
                  width={0}
                  height={0}
                  className="object-fill w-full h-full"
                  src={cartimage}
                  alt=""
                />
              </div>
              <div className="flex flex-col w-[100%]">
                <div className="flex w-[100%] justify-between">
                  <div>
                    <p className="text-[14px] text-gray-800 font-semibold">
                      {item.name}
                    </p>
                    <p className="text-gray-600 font-semibold tracking-widest text-[12px]">
                      {'  5"/20 PC'}
                    </p>
                    <p className="text-gray-700 font-bold tracking-widest text-[14px]">
                      ${item.price * item.quantity}
                    </p>
                  </div>

                  <span className="flex justify-end">
                    <svg
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
                <div className="flex justify-between items-start gap-2 mt-2">
                  <div className="flex h-[28px] w-[110px] justify-center items-center border-[1px] border-gray-400">
                    <button
                      onClick={() => decrement(index)}
                      className="px-2 py-1 text-[14px] font-bold text-gray-700 border-r-[1px] border-gray-400"
                    >
                      -
                    </button>
                    <span className="px-6 py-2 text-[12px] font-semibold text-gray-700">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increment(index)}
                      className="px-2 py-1 text-[14px] font-bold border-l-[1px] border-gray-400 text-gray-700"
                    >
                      +
                    </button>
                  </div>
                  <button className="border-[1px] tracking-widest hover:bg-[#1D19FA] hover:text-white border-gray-400 text-[11px] font-medium text-gray-700 px-[14px] py-[5px] rounded-[8px]">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="tatal flex gap-2 mt-8 justify-between">
          <h1 className="text-[18px] uppercase font-extrabold text-gray-900">
            SUBTOTAL:
          </h1>
          <h1 className="text-[18px] uppercase font-extrabold text-[#1D19FA]">
            {" $"}
            {allItem.reduce(
              (acc, item) => acc + item?.price * item.quantity,
              0
            )}
          </h1>
        </div>
        <p className="text-[13px] pt-2  font-semibold text-[#8a8a8a] tracking-widest">
          Tax included and shipping <br /> calculated at checkout
        </p>

        <div className="flex flex-wrap   gap-2 justify-start items-center mt-[10px]">
          {" "}
          <button className="border-[1px]  hover:bg-[#1D19FA] hover:text-white border-gray-400 text-[13px] font-medium text-gray-700 px-[15px] py-[12px] p-1 rounded-[10px]">
            CHECK OUT
          </button>
          <Link href={"/"}>
            {" "}
            <button className="border-[1px]  bg-[#e6ce92] text-black border-gray-400 hover:bg-transparent text-[13px] font-medium px-[15px] py-[12px] p-1 rounded-[10px]">
              BUY WITH SHOP
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
