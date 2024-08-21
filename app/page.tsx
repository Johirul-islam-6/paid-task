"use client";
import React, { useEffect } from "react";
import { Home } from "./components/Home/Home";
import AOS from "aos";

const MyComponent = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div>
      <Home />
    </div>
  );
};

export default MyComponent;
