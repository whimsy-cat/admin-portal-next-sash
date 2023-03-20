import dynamic from "next/dynamic";
import React from "react";
import PageHeader from "../../../shared/layout-components/pageheader/pageheader";
const Widget = dynamic(() => import("@/shared/data/app/widget"), {
  ssr: false,
});

const Widgets = () => {
  return (
    <div>
      <PageHeader titles="Widgets" active="Widgets" items={["Home"]} />
      <Widget />
    </div>
  );
};
Widgets.layout = "Contentlayout";
export default Widgets;
