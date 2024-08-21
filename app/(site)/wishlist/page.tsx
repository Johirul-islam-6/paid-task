"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import cartimage from "@/app/Assets/cart_image/pin.png"; // Assuming this is a valid image import
import cartimage1 from "@/app/Assets/cart_image/NEW PRODUCT.png"; // Assuming this is a valid image import
import addTocardimage from "@/app/Assets/cart_image/addcardimage.png"; // Assuming this is a valid image import

import Link from "next/link";
import { Navbar } from "@/app/components/layout/Navbar/Navbar";

const Wishlist = () => {
  type CartImage = StaticImageData | { url: string; altText: string };

  // ------------- active blue btn -----------
  const [activeBlueBtn, setActiveBlueBtn] = useState<number | null>(null);

  const activeClickBtn = (index: number) => {
    setActiveBlueBtn(index === activeBlueBtn ? null : index);
  };

  function isCustomImage(
    image: CartImage
  ): image is { url: string; altText: string } {
    return (image as { url: string; altText: string }).url !== undefined;
  }

  type CartItem = {
    id: number;
    ProductName: string;
    ProductImage: CartImage;
    ProductCetagory: string;
    buttonline1: string[];
    buttonline2: string[];
  };

  const allCartItem: CartItem[] = [
    {
      id: 1,
      ProductName: "Product 2",
      ProductImage: { url: cartimage.src, altText: "Product 2 Image" },
      ProductCetagory: "Material",
      buttonline1: ["2-7/8", "4", "5", "6", "8"],
      buttonline2: ["10 PC", "40 PC", "250 PC"],
    },
    {
      id: 2,
      ProductName: "Product 2",
      ProductImage: { url: cartimage.src, altText: "Product 2 Image" },
      ProductCetagory: "Material",
      buttonline1: ["2-7/8", "4", "5", "6", "8"],
      buttonline2: ["10 PC", "40 PC", "250 PC"],
    },
    {
      id: 3,
      ProductName: "Product 2",
      ProductImage: { url: cartimage.src, altText: "Product 2 Image" },
      ProductCetagory: "Material",
      buttonline1: ["2-7/8", "4", "5", "6", "8"],
      buttonline2: ["10 PC", "40 PC", "250 PC"],
    },
    {
      id: 4,
      ProductName: "Product 2",
      ProductImage: { url: cartimage.src, altText: "Product 2 Image" },
      ProductCetagory: "Material",
      buttonline1: ["2-7/8", "4", "5", "6", "8"],
      buttonline2: ["10 PC", "40 PC", "250 PC"],
    },
    {
      id: 5,
      ProductName: "Product 2",
      ProductImage: { url: cartimage.src, altText: "Product 2 Image" },
      ProductCetagory: "Material",
      buttonline1: ["2-7/8", "4", "5", "6", "8"],
      buttonline2: ["10 PC", "40 PC", "250 PC"],
    },
    {
      id: 6,
      ProductName: "Product 2",
      ProductImage: { url: cartimage.src, altText: "Product 2 Image" },
      ProductCetagory: "Material",
      buttonline1: ["2-7/8", "4", "5", "6", "8"],
      buttonline2: ["10 PC", "40 PC", "250 PC"],
    },
    {
      id: 7,
      ProductName: "Product 2",
      ProductImage: { url: cartimage.src, altText: "Product 2 Image" },
      ProductCetagory: "Material",
      buttonline1: ["2-7/8", "4", "5", "6", "8"],
      buttonline2: ["10 PC", "40 PC", "250 PC"],
    },
    {
      id: 8,
      ProductName: "Product 2",
      ProductImage: { url: cartimage.src, altText: "Product 2 Image" },
      ProductCetagory: "Material",
      buttonline1: ["2-7/8", "4", "5", "6", "8"],
      buttonline2: ["10 PC", "40 PC", "250 PC"],
    },
  ];

  //   ------------- active card list button1 color set ------------
  const [activeBtns, setActiveBtns] = useState<{
    [key: number]: number | null;
  }>({});

  const handleButtonClick = (itemIndex: number, btnIndex: number) => {
    setActiveBtns((prevActiveBtns) => ({
      ...prevActiveBtns,
      [itemIndex]: prevActiveBtns[itemIndex] === btnIndex ? null : btnIndex,
    }));
  };
  //   ------------- active button color set ------------
  const [activeBtns2, setActiveBtns2] = useState<{
    [key: number]: number | null;
  }>({});
  //   ------------- active card list button2 color set ------------
  const handleButtonClick2 = (itemIndex: number, btnIndex: number) => {
    setActiveBtns2((prevActiveBtns) => ({
      ...prevActiveBtns,
      [itemIndex]: prevActiveBtns[itemIndex] === btnIndex ? null : btnIndex,
    }));
  };

  return (
    <>
      <Navbar />
      <div className="maxwidth  mx-auto   md:pb-4 flex md:flex-row flex-col gap-5 justify-center items-start md:justify-start">
        <div className="left-site-container md:w-[220px] md:h-[100vh] mt-[10] px-1  relative">
          <div className="md:mt-12 mt-3 flex  items-start justify-start  ">
            <h1 className="font-bold flex flex-wrap md:block gap-3 text-[13px] md:text-[17px]">
              WISH LIST
            </h1>
            <Link
              href={"/wishlist"}
              className="text-[16px]  text-gray-400 hover:underline"
            >
              (38)
            </Link>
          </div>
          <br />
          <Link
            href={"/recentview"}
            className="text-[12px] md:text-[14px] hover:text-blue-600 text-gray-700 hover:underline"
          >
            RECENT VIEWING
          </Link>
        </div>
        {/* -------------- maping all product ----------- */}
        <div className="w-[100%] px-2 md:px-8 ">
          <div className="py-5 hidden md:block md:ps-2">
            <h1 className="text-gray-600  font-bold flex flex-wrap md:block gap-3 text-[13px] md:text-[14px] uppercase">
              Lorem ipsum dolor sit.
            </h1>
            <div className="h-[2px] w-[45px]  bg-gray-500"></div>
          </div>

          <div className="w-[100%] pb-8  gap-5 gap-y-10 px-2 md:px-3 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {allCartItem.map((item, index) => (
              <div
                key={index}
                className="cart-box box-shadow p-4 cursor-pointer rounded-md duration-700 ease-in-out  relative overflow-hidden"
              >
                <div className="flex">
                  <div className="d">
                    <h1 className="font-bold text-[16px]">PRODUCT NAME</h1>
                    <p className="text-[12px]">{item.ProductCetagory}</p>
                  </div>
                </div>
                <div
                  className={`${
                    activeBlueBtn !== index
                      ? "image-card-div"
                      : "image-card-div2"
                  }  relative overflow-hidden mt-3`}
                >
                  {isCustomImage(item.ProductImage) ? (
                    <Image
                      width={500}
                      height={500}
                      className="cart-zoom-image w-[100%] rounded-sm h-[100%] object-cover"
                      src={item.ProductImage.url}
                      alt={item.ProductImage.altText}
                    />
                  ) : (
                    <Image
                      width={500}
                      height={500}
                      className="cart-zoom-image w-[100%] rounded-sm h-[100%] object-cover"
                      src={item.ProductImage.src}
                      alt="Default Image" // Replace with a default alt text if necessary
                    />
                  )}
                  <div className="bg-[#0000] w-[100%] h-[100%] top-0 absolute z-1"></div>
                </div>
                <div className="cart-text-container mt-3">
                  <div className="flex flex-wrap gap-2 justify-start items-center">
                    {item.buttonline1.map((btnText, btnIndex) => (
                      <button
                        key={btnIndex}
                        onClick={() => handleButtonClick(index, btnIndex)}
                        className={`border-[1px] border-gray-600 text-[12px] font-medium text-gray-500 px-3 py-[6px] p-1 rounded-[20px] ${
                          activeBtns[index] === btnIndex
                            ? "bg-[#e6ce92] text-black"
                            : ""
                        }`}
                      >
                        {btnText}
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 justify-start items-center mt-[8px]">
                    {item.buttonline1.map((btnText, btnIndex) => (
                      <button
                        key={btnIndex}
                        onClick={() => handleButtonClick2(index, btnIndex)}
                        className={`border-[1px] border-gray-600 text-[12px] font-medium text-gray-500 px-3 py-[6px] p-1  ${
                          activeBtns2[index] === btnIndex
                            ? "bg-[#0947cd] text-white"
                            : ""
                        }`}
                      >
                        {btnText}
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 justify-start items-center mt-[8px]">
                    {" "}
                    <button
                      onClick={() => activeClickBtn(index)}
                      className={`border-[1px] ${
                        activeBlueBtn === index
                          ? ""
                          : "bg-[#1D19FA] text-white "
                      }  hover:text-gray-500 hover:bg-[#fefefe]  border-gray-600 text-[12px] font-medium text-gray-500 px-3 py-[6px] p-1 rounded-[10px]`}
                    >
                      ADD
                    </button>
                    <Link href={"/productDetails"}>
                      {" "}
                      <button className="border-[1px] hover:bg-[#1D19FA] hover:text-white border-gray-600 text-[12px] font-medium text-gray-500 px-3 py-[6px] p-1 rounded-[10px]">
                        SEE MORE
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Wishlist;
