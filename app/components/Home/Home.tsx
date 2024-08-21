"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";
import { Navbar } from "../layout/Navbar/Navbar";
import CartDesign from "../CartDesign/CartDesign";
import cartimage from "@/app/Assets/cart_image/pin.png";
import cartimage1 from "@/app/Assets/cart_image/NEW PRODUCT.png";

type CartImage = StaticImageData | { url: string; altText: string };

type CartItem = {
  id: number;
  ProductName: string;
  ProductImage: CartImage;
  ProductCetagory: string;
  buttonline1: string[];
  buttonline2: string[];
};

export const Home = () => {
  const allCartItem: CartItem[] = [
    {
      id: 1,
      ProductName: "Product 1",
      ProductImage: { url: cartimage1.src, altText: "Product 1 Image" }, // Use the src from imported image
      ProductCetagory: "Material",
      buttonline1: ["305 Stainless", "306 Stainless"],
      buttonline2: ["12 strips", "50 strips"],
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
    {
      id: 9,
      ProductName: "Product 2",
      ProductImage: { url: cartimage.src, altText: "Product 2 Image" },
      ProductCetagory: "Material",
      buttonline1: ["2-7/8", "4", "5", "6", "8"],
      buttonline2: ["10 PC", "40 PC", "250 PC"],
    },
    {
      id: 10,
      ProductName: "Product 2",
      ProductImage: { url: cartimage.src, altText: "Product 2 Image" },
      ProductCetagory: "Material",
      buttonline1: ["2-7/8", "4", "5", "6", "8"],
      buttonline2: ["10 PC", "40 PC", "250 PC"],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="maxwidth mx-auto py-2 md:py-5 md:pb-4 flex md:flex-row flex-col gap-5 justify-center items-start md:justify-start">
        <div className="left-site-container md:w-[220px] md:h-[100vh]  px-1  relative">
          <h1 className="font-bold flex flex-wrap md:block gap-3 text-[13px] md:text-[17px]">
            <Link className="pt-2 hover:underline" href={"/"}>
              STRUCTURAL
            </Link>{" "}
            <br className="hidden md:flex" />
            <Link className="pt-2 hover:underline" href={"/"}>
              CAPTOR®XD
            </Link>{" "}
            <br className="hidden md:flex" />
            <Link className="pt-2 hover:underline" href={"/"}>
              CMNTFAST™
            </Link>{" "}
            <br className="hidden md:flex" />
            <Link className="pt-2 hover:underline" href={"/"}>
              DECKFAST®
            </Link>{" "}
            <br className="hidden md:flex" />
            <Link className="pt-2 hover:underline" href={"/"}>
              {" "}
              FASCIA SYSTEM
            </Link>{" "}
            <br className="hidden md:flex" />
            <Link className="pt-2 hover:underline" href={"/"}>
              HEADCOTE®PRO
            </Link>{" "}
            <br className="hidden md:flex" />
            <Link className="pt-2 hover:underline" href={"/"}>
              PLUG® SYSTEM
            </Link>{" "}
            <br className="hidden md:flex" />
          </h1>
          <br />
          <Link
            href={"/recentview"}
            className="text-[12px] md:text-[14px] hover:text-blue-600 text-gray-700 hover:underline"
          >
            RECENT VIEWING
          </Link>
        </div>

        <div className="w-[100%] pb-8  gap-5 gap-y-10 px-2 md:px-3 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
          <CartDesign allCartItem={allCartItem} />
        </div>
      </div>
    </>
  );
};
