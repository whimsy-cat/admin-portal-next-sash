import React, { useEffect } from "react";
import Head from "next/head";
import { Helmet } from "react-helmet";
import dynamic from "next/dynamic";
const LandingSwitcher = dynamic(() => import("../switcher/landingswitcher"), {
  ssr: false,
});

const Landingpagelayout = ({ children }) => {
  const Add = () => {
    document.querySelector("body").classList.add("landing-page", "horizontal");
    document
      .querySelector("body")
      .classList.remove("sidebar-mini", "transparent-mode", "layout-boxed");
  };
  useEffect(() => {
    Add();
  }, []);
  return (
    <div>
      <LandingSwitcher />
      {children}
    </div>
  );
};

export default Landingpagelayout;
