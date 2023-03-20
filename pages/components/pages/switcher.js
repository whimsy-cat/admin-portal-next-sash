import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import PageHeader from "../../../shared/layout-components/pageheader/pageheader";
const Switchers = dynamic(
  () => import("@/shared/data/pages/switcherdata/switchers"),
  { ssr: false }
);

const SwitcherStyle1 = () => {
  return (
    <div className="">
      <PageHeader
        titles="Switcher Style-1"
        active="Switcher Style-1"
        items={["Switcher"]}
      />

      {/* <!--Row--> */}
      <Switchers />

      {/* <!--End Row--> */}
    </div>
  );
};
SwitcherStyle1.layout = "Switcherlayout";
export default SwitcherStyle1;
