"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

import cartimage from "@/app/Assets/cart_image/NEW PRODUCT.png"; // Assuming this is a valid image import
import Link from "next/link";
import { Navbar } from "@/app/components/layout/Navbar/Navbar";

const ProductDetails = () => {
  type CartImage = StaticImageData | { url: string; altText: string };

  // ----------set active bg add to cart -----------
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
    Price: number;
    ProductImage: CartImage;
    ProductCetagory: string;
    buttonline1: string[];
    buttonline2: string[];
    buttonline3: string[];
  };

  const allCartItem: CartItem[] = [
    {
      id: 1,
      ProductName: "Product 2",
      Price: 100,
      ProductImage: { url: cartimage.src, altText: "Product 2 Image" },
      ProductCetagory: "Material",
      buttonline1: ["2-7/8", "4", "5", "6", "8", "10"],
      buttonline2: ["10 PC", "20 PC", "40 PC", "250 PC"],
      buttonline3: [
        "10",
        "12",
        "14",
        "15",
        "20",
        "34",
        "38",
        "40",
        "50",
        "60",
        "70",
        "80",
      ],
    },
  ];

  //   ------------- active button color set ------------

  //   ------------- active card list button1 color set ------------
  const [activeBtns, setActiveBtns] = useState<{
    [key: number]: number | null;
  }>({ 0: 0 });
  const [activeBtns2, setActiveBtns2] = useState<{
    [key: number]: number | null;
  }>({ 0: 0 });
  const [activeBtns3, setActiveBtns3] = useState<{
    [key: number]: number | null;
  }>({ 0: 0 });

  const handleButtonClick = (itemIndex: number, btnIndex: number) => {
    setActiveBtns((prevActiveBtns) => ({
      ...prevActiveBtns,
      [itemIndex]: prevActiveBtns[itemIndex] === btnIndex ? null : btnIndex,
    }));
  };

  const handleButtonClick2 = (itemIndex: number, btnIndex: number) => {
    setActiveBtns2((prevActiveBtns) => ({
      ...prevActiveBtns,
      [itemIndex]: prevActiveBtns[itemIndex] === btnIndex ? null : btnIndex,
    }));
  };
  const handleButtonClick3 = (itemIndex: number, btnIndex: number) => {
    setActiveBtns3((prevActiveBtns) => ({
      ...prevActiveBtns,
      [itemIndex]: prevActiveBtns[itemIndex] === btnIndex ? null : btnIndex,
    }));
  };

  // ------------------ Quintity Numebr -----------
  const [quantity, setQuantity] = useState(1); // Initial quantity set to 1

  const totalPrice = quantity * 30.58;

  const increment = () => {
    if (quantity >= 10) {
      return alert("You Get Max Quantity is 10");
    }
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1)); // Ensures quantity doesn't go below 1
  };

  return (
    <>
      <Navbar />

      <div className="maxwidth mx-auto py-2 md:pt-3 pb-16 px-3 flex lg:flex-row flex-col gap-5 justify-center items-start md:justify-start">
        <div className="left-site-container  lg:w-[220px]  px-1  relative">
          <h1 className="font-bold flex flex-wrap md:block gap-3 text-[13px] md:text-[17px]">
            <Link
              className=" md:pt-2 font-bold  md:text-[19px] text-[13px] hover:underline"
              href={"/"}
            >
              STRUCTURAL
            </Link>{" "}
            <br className="hidden lg:flex" />
            <Link
              className="md:pt-2 hover:underline hover:text-blue-500"
              href={"/"}
            >
              Structural F19
            </Link>{" "}
            <br className="hidden lg:flex" />
            <Link
              className="md:pt-2 hover:underline hover:text-blue-800"
              href={"/"}
            >
              Structural F23
            </Link>{" "}
            <br className="hidden lg:flex" />
            <Link
              className="md:pt-2 hover:underline hover:text-blue-500"
              href={"/"}
            >
              Structural F23-E
            </Link>{" "}
            <br className="hidden lg:flex" />
            <Link
              className="md:pt-2 hover:underline hover:text-blue-500"
              href={"/"}
            >
              {" "}
              Structural F23-W
            </Link>{" "}
            <br className="hidden lg:flex" />
            <Link
              className="md:pt-2 hover:underline hover:text-blue-500"
              href={"/"}
            >
              Structural H19
            </Link>{" "}
            <br className="hidden lg:flex" />
            <Link
              className="md:pt-2 hover:underline hover:text-blue-500"
              href={"/"}
            >
              Structural H23
            </Link>{" "}
            <br className="hidden lg:flex" />
          </h1>
          <h1 className="pt-5 font-bold flex flex-wrap md:block gap-3 text-[13px] md:text-[18px]">
            <Link className="md:pt-2 hover:underline " href={"/"}>
              CAPTOR®XD
            </Link>{" "}
            <br className="hidden lg:flex" />
            <Link className="md:pt-2 hover:underline " href={"/"}>
              CMNTFAST™
            </Link>{" "}
            <br className="hidden lg:flex" />
            <Link className="md:pt-2 hover:underline " href={"/"}>
              DECKFAST®
            </Link>{" "}
            <br className="hidden lg:flex" />
            <Link className="md:pt-2 hover:underline " href={"/"}>
              FASCIA SYSTEM
            </Link>{" "}
            <br className="hidden lg:flex" />
            <Link className="md:pt-2 hover:underline " href={"/"}>
              {" "}
              HEADCOTE®PRO
            </Link>{" "}
            <br className="hidden lg:flex" />
            <Link className="md:pt-2 hover:underline " href={"/"}>
              PLUG® SYSTEM
            </Link>{" "}
          </h1>
          <br />
          <Link
            href={"/recentview"}
            className="text-[12px] md:text-[14px] hover:text-blue-600 text-gray-700 hover:underline"
          >
            RECENT VIEWING
          </Link>
        </div>

        <div className="w-[100%] md:flex px-2 md:px-8  gap-5 gap-y-10 ">
          {allCartItem.map((item, index) => (
            <div
              key={index}
              className="md:w-[60%]  cursor-pointer rounded-md duration-700 ease-in-out  border-[2px] relative overflow-hidden"
            >
              <div className="relative flex flex-col  justify-center items-center overflow-hidden ">
                <div
                  className={`${
                    activeBlueBtn === 0 ? "image-card-div3" : "image-card-div2"
                  }  flex md:w-[100%] md:h-[320px] object-cover lg:w-[100%] lg:h-[450px] justify-center items-center`}
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
                </div>
                <p className="pt-4 text-[16px] text-justify hidden md:block">
                  Starborn® Structural F23 screws are designed for heavy duty
                  framing applications including decking, fencing, pergolas,
                  landscape timbers, timber framing, and more. They are fully
                  tested and code compliant alternatives to traditional lag
                  screws and through-bolts, with no pre-drilling required. These
                  versatile screws feature a low-profile flat head design that
                  minimizes interference with connectors and finish materials, a
                  unique Tri-Forge. point for reduced driving torque, and a
                  high-adhesion exterior grade coating. The 4 and 5 lengths are
                  specifically designed for code compliant deck ledger
                  attachments.
                </p>
              </div>
            </div>
          ))}
          {/* ---------------- product details ------------ */}
          <div className="product-calculation md:w-[40%] md:ps-10">
            <div className="flex flex-col justify-start ">
              <h1 className="font-bold text-[14px] md:text-[19px] ">
                STRUCTURAL
              </h1>
              <h1 className="font-extrabold text-[14px] md:text-[16px] ">
                F23
              </h1>
              <div className="cart-text-container mt-5">
                <div className="flex flex-col justify-start items-start gap-2">
                  <p className="pt-2 font-[600] text-[12px] text-gray-600 uppercase">
                    Length
                  </p>
                  <div className="flex flex-wrap gap-2 justify-start items-center">
                    {allCartItem[0]?.buttonline1.map((btnText, btnIndex) => (
                      <button
                        key={btnIndex}
                        onClick={() => handleButtonClick(0, btnIndex)}
                        className={`border-[1px] border-gray-600 text-[12px] font-medium text-gray-500 px-[15px] py-[8px] p-1 rounded-[20px] ${
                          activeBtns[0] === btnIndex
                            ? "bg-[#e6ce92] text-black"
                            : ""
                        }`}
                      >
                        {btnText}
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-col justify-start items-start gap-2 mt-2">
                    <p className="font-[600] text-[12px] text-gray-600 uppercase">
                      Item Package Quantity
                    </p>
                    <div className="flex flex-wrap gap-2 justify-start items-center">
                      {allCartItem[0]?.buttonline2.map((btnText, btnIndex) => (
                        <button
                          key={btnIndex}
                          onClick={() => handleButtonClick2(0, btnIndex)}
                          className={`border-[1px] border-gray-600 text-[12px] font-medium text-gray-500 px-[15px] py-[8px] p-1 rounded-[20px] ${
                            activeBtns2[0] === btnIndex
                              ? "bg-[#e6ce92] text-black"
                              : ""
                          }`}
                        >
                          {btnText}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start gap-2 mt-2">
                    <p className="font-[600] text-[12px] flex items-center gap-2 text-gray-600 uppercase">
                      Color: <span className="font-[700]">#34 BROWN</span>
                    </p>
                    <div className="flex flex-wrap gap-2 justify-start items-center md:pe-10">
                      {allCartItem[0]?.buttonline3.map((btnText, btnIndex) => (
                        <button
                          key={btnIndex}
                          onClick={() => handleButtonClick3(0, btnIndex)}
                          className={`border-[1px] border-gray-600 text-[12px] font-medium text-gray-500 px-[15px] py-[8px] p-1 rounded-full ${
                            activeBtns3[0] === btnIndex
                              ? "bg-[#794F40] text-white"
                              : ""
                          }`}
                        >
                          {btnText}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start gap-2 mt-3">
                    <p className="font-[600] text-[12px] text-gray-600 uppercase">
                      Quantity
                    </p>
                    <div className="flex items-center border-[1px] border-gray-400  rounded-md">
                      <button
                        onClick={decrement}
                        className="px-2 py-1 text-[17px] font-bold text-gray-700 border-r-[1px] border-gray-400"
                      >
                        -
                      </button>
                      <span className="px-6 py-2 text-[14px] font-semibold text-gray-700">
                        {quantity}
                      </span>
                      <button
                        onClick={increment}
                        className="px-2 py-1 text-[16px] font-bold border-l-[1px] border-gray-400 text-gray-700 "
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col justify-start items-start gap-2 mt-5">
                    <p className=" text-[15px] text-gray-900 uppercase">
                      SKU : XF23CL0400
                    </p>
                    <p className=" text-[15px] text-gray-800  uppercase">
                      Subtotal :
                    </p>
                    <p className=" text-[20px] font-bold text-gray-900 uppercase">
                      {totalPrice.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex flex-wrap   gap-2 justify-start items-center mt-[8px]">
                    {" "}
                    <button
                      onClick={() => activeClickBtn(0)}
                      className="border-[1px]  hover:bg-[#1D19FA] hover:text-white border-gray-400 text-[13px] font-medium text-gray-700 px-[15px] py-[10px] p-1 rounded-[15px]"
                    >
                      ADD TO CART
                    </button>
                    <Link href={"/"}>
                      {" "}
                      <button className="border-[1px]  bg-[#e6ce92] text-black border-gray-400 hover:bg-transparent text-[13px] font-medium px-[15px] py-[10px] p-1 rounded-[15px]">
                        Check Out
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Additional parts of the component */}
              </div>
            </div>

            <p className="pt-4 text-[15px] md:hidden ">
              Starborn® Structural F23 screws are designed for heavy duty
              framing applications including decking, fencing, pergolas,
              landscape timbers, timber framing, and more. They are fully tested
              and code compliant alternatives to traditional lag screws and
              through-bolts, with no pre-drilling required. These versatile
              screws feature a low-profile flat head design that minimizes
              interference with connectors and finish materials, a unique
              Tri-Forge. point for reduced driving torque, and a high-adhesion
              exterior grade coating. The 4 and 5 lengths are specifically
              designed for code compliant deck ledger attachments.
            </p>
          </div>
        </div>
      </div>
      {/* -------------------Or more cart --------------- */}
    </>
  );
};
export default ProductDetails;
