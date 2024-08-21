import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type CartImage = StaticImageData | { url: string; altText: string };

type CartItem = {
  id: number;
  ProductName: string;
  ProductImage: CartImage;
  ProductCetagory: string;
  buttonline1: string[];
  buttonline2: string[];
};

type CartDesignProps = {
  allCartItem: CartItem[];
};

const CartDesign: React.FC<CartDesignProps> = ({ allCartItem }) => {
  const [activeBlueBtn, setActiveBlueBtn] = useState<number | null>(null);
  const [activeBtns, setActiveBtns] = useState<{
    [key: number]: number | null;
  }>({});
  const [activeBtns2, setActiveBtns2] = useState<{
    [key: number]: number | null;
  }>({});

  const activeClickBtn = (index: number) => {
    setActiveBlueBtn(index === activeBlueBtn ? null : index);
  };

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

  function isCustomImage(
    image: CartImage
  ): image is { url: string; altText: string } {
    return (image as { url: string; altText: string }).url !== undefined;
  }

  return (
    <>
      {allCartItem.map((item, index) => (
        <div
          key={index}
          className="cart-box box-shadow px-2 py-3 rounded-md cursor-pointer rounded-md duration-700 ease-in-out relative overflow-hidden"
        >
          <div className="flex">
            <div className="d">
              <h1 className="font-bold text-[16px]">{item.ProductName}</h1>
              <p className="text-[12px]">{item.ProductCetagory}</p>
            </div>
          </div>
          <div
            className={`${
              activeBlueBtn === index ? "image-card-div" : "image-card-div2"
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
                alt="Default Image"
              />
            )}
            <div className="bg-[#0000] w-[100%] h-[100%] top-0 absolute z-1">
              <div className="flex justify-between px-3 py-2">
                {index === 0 ? (
                  <h1 className="text-[#ffffffb2] text-[20px] font-bold">
                    NEW
                  </h1>
                ) : (
                  <p></p>
                )}
                {activeBlueBtn === index ? null : (
                  <Link href={"/wishlist"}>
                    <p className="text-gray-400 hover:underline hover:text-[#1d19fa] text-[12px] hidden add-to-card-btn">
                      ADD TO WISHLIST
                    </p>
                  </Link>
                )}
              </div>
            </div>
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
              {item.buttonline2.map((btnText, btnIndex) => (
                <button
                  key={btnIndex}
                  onClick={() => handleButtonClick2(index, btnIndex)}
                  className={`border-[1px] border-gray-600 text-[12px] font-medium text-gray-500 px-3 py-[6px] p-1 ${
                    activeBtns2[index] === btnIndex
                      ? "bg-[#e6ce92] text-black"
                      : ""
                  }`}
                >
                  {btnText}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 justify-start items-center mt-[8px]">
              <button
                onClick={() => activeClickBtn(index)}
                className={`border-[1px] ${
                  activeBlueBtn === index ? "bg-[#1D19FA] text-white" : ""
                } border-gray-600 hover:bg-[#1D19FA] hover:text-white text-[12px] text-gray-500 font-medium  px-3 py-[6px] p-1 rounded-[8px]`}
              >
                ADD
              </button>

              <Link href="/productDetails">
                <button className="border-[1px] hover:bg-[#1D19FA] hover:text-white border-gray-600 text-[12px] font-medium text-gray-500 px-3 py-[6px] p-1 rounded-[8px]">
                  SEE MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartDesign;
