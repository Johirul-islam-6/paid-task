"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import cartimage from "@/app/Assets/cart_image/pin.png"; // Assuming this is a valid image import
import cartimage1 from "@/app/Assets/cart_image/NEW PRODUCT.png"; // Assuming this is a valid image import
import Link from "next/link";
import { Navbar } from "@/app/components/layout/Navbar/Navbar";

const ProductDetails = () => {
  type CartImage = StaticImageData | { url: string; altText: string };

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
  ];

  //   ------------- active button color set ------------
  const [activeBtn, setActiveBtn] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setActiveBtn(index);
  };

  return (
    <>
      <Navbar />
      {/* ---------------- searching tob yellow bg card ---------- */}
      <div className=" md:py-0 md:pb-4 maxwidth mx-auto">
        <h1 className="text-start text-[12px] text-gray-600 ps-3 md:ps-[355px] font-bold pt-5">
          PREVIOUSLY BOUGHT ON AUG 8 2024
        </h1>

        <div className="mt-2 flex md:flex-row flex-col gap-10 justify-start items-start p-2 md:justify-start">
          <div className="left-site-container md:w-[360px]  md:h-[50vh]  flex justify-start  px-1 md:px-5 relative ">
            <div className="flex justify-start items-start flex-col  ">
              <h1 className="font-bold text-[14px] md:text-[20px] ">
                STRUCTURAL
              </h1>

              <h1 className="text-[14px] md:text-[17px] pt-1 font-semibold">
                Structural F19 <br className="hidden md:flex" /> Structural F23{" "}
                <br className="hidden md:flex" />{" "}
                <span className="text-blue-600">Structural F23-E</span>{" "}
                <br className="hidden md:flex" /> Structural F23-W{" "}
                <br className="hidden md:flex" /> Structural H19{" "}
                <br className="hidden md:flex" /> Structural H23
              </h1>
              <br />
              <h1 className="font-bold text-[14px] md:text-[16px] ">
                CAPTOR®XD CMNTFAST™ DECKFAST® FASCIA SYSTEM HEADCOTE®PRO PLUG®
                SYSTEM
              </h1>
              <br />
              <Link
                href={"/recentview"}
                className="text-[16px] flex justify-start w-[100%] pt-1 hover:underline text-gray-700"
              >
                Recent Viewing
              </Link>
            </div>
          </div>

          <div className="w-[100%] md:flex px-2 md:px-8 pb-6  gap-5 gap-y-10 ">
            {allCartItem.map((item, index) => (
              <div
                key={index}
                className="md:w-[60%]  cursor-pointer rounded-md duration-700 ease-in-out  border-[2px] relative overflow-hidden"
              >
                <div className="relative flex flex-col  justify-center items-center overflow-hidden ">
                  <div className=" flex w-[100%] justify-center items-center">
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
                  <p className="pt-4 text-[15px] hidden md:block">
                    Starborn® Structural F23 screws are designed for heavy duty
                    framing applications including decking, fencing, pergolas,
                    landscape timbers, timber framing, and more. They are fully
                    tested and code compliant alternatives to traditional lag
                    screws and through-bolts, with no pre-drilling required.
                    These versatile screws feature a low-profile flat head
                    design that minimizes interference with connectors and
                    finish materials, a unique Tri-Forge. point for reduced
                    driving torque, and a high-adhesion exterior grade coating.
                    The 4 and 5 lengths are specifically designed for code
                    compliant deck ledger attachments.
                  </p>
                </div>
              </div>
            ))}
            {/* ---------------- product details ------------ */}
            <div className="product-calculation md:w-[40%] md:ps-10">
              <div className="flex flex-col justify-start ">
                <h1 className="font-bold text-[14px] md:text-[20px] ">
                  STRUCTURAL
                </h1>
                <h1 className="font-extrabold text-[14px] md:text-[16px] ">
                  F23
                </h1>
                <div className="cart-text-container mt-5">
                  <div className="flex flex-col justify-start items-start gap-2">
                    <p className="font-semibold text-[12px] text-gray-700 uppercase">
                      Length
                    </p>
                    <div className="flex flex-wrap gap-2 justify-start items-center">
                      {allCartItem[0]?.buttonline1?.map((btnText, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleButtonClick(idx)} // Handle button click
                          className={`border-[1px] border-gray-600 text-[12px] font-medium text-gray-700 px-3 py-[6px] p-1 rounded-[20px] ${
                            activeBtn === idx ? "bg-[#f9f9f8] text-black" : ""
                          }`}
                        >
                          {btnText}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start gap-2 mt-5">
                    <p className="font-semibold text-[12px] text-gray-700 uppercase">
                      Item Package Quantity
                    </p>
                    <div className="flex flex-wrap gap-2 justify-start items-center ">
                      {allCartItem[0]?.buttonline2?.map((btnText, idx) => (
                        <button
                          key={idx}
                          className="border-[1px] border-gray-600 text-[12px] font-medium text-gray-700 px-3 py-[6px] p-1 "
                        >
                          {btnText}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start gap-2 mt-5">
                    <p className="font-semibold text-[12px] text-gray-700 uppercase">
                      Quantity
                    </p>
                    <div className="flex items-center border-[1px] border-black rounded-md">
                      <button className="px-4 py-2 text-[14px] font-semibold text-gray-700 border-black">
                        -
                      </button>
                      <span className="px-6 py-2 text-[14px] font-semibold">
                        1
                      </span>
                      <button className="px-4 py-2 text-[14px] font-semibold text-gray-700 border-black">
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start gap-2 mt-5">
                    <p className=" text-[14px] text-gray-900 uppercase">
                      SKU : XF23CL0400
                    </p>
                    <p className=" text-[14px] text-gray-900 uppercase">
                      Subtotal:
                    </p>
                    <p className=" text-[20px] font-bold text-gray-900 uppercase">
                      $23.38
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-start items-center mt-[8px]">
                    <Link href={"/addtocart"}>
                      {" "}
                      <button className="border-[1px]  hover:bg-[#1D19FA] hover:text-white border-gray-600 text-[14px] font-medium text-gray-700 px-3 py-[8px] p-1 rounded-[15px]">
                        ADD TO CART
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <p className="pt-4 text-[15px] md:hidden ">
                Starborn® Structural F23 screws are designed for heavy duty
                framing applications including decking, fencing, pergolas,
                landscape timbers, timber framing, and more. They are fully
                tested and code compliant alternatives to traditional lag screws
                and through-bolts, with no pre-drilling required. These
                versatile screws feature a low-profile flat head design that
                minimizes interference with connectors and finish materials, a
                unique Tri-Forge. point for reduced driving torque, and a
                high-adhesion exterior grade coating. The 4 and 5 lengths are
                specifically designed for code compliant deck ledger
                attachments.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------Or more cart --------------- */}
    </>
  );
};
export default ProductDetails;
