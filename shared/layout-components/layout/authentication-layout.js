import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
const Customswitcher = dynamic(() => import("../switcher/landingswitcher"), {
  ssr: false,
});

const Authenticationlayout = ({ children }) => {
  useEffect(() => {
    document
      .querySelector("body")
      .classList.add("ltr", "main-body", "leftmenu", "error-1");
  });
  return (
    <>
      <div className="login-img">
        <div className="page">{children}</div>
      </div>
      <Customswitcher />
    </>
  );
};

export default Authenticationlayout;
