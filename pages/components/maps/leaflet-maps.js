import dynamic from "next/dynamic";
const Lefletmap = dynamic(() => import("@/shared/data/datamaps/lefletmap"), {
  ssr: false,
});
import React from "react";
import PageHeader from "../../../shared/layout-components/pageheader/pageheader";

const LeafletMaps = () => {
  return (
    <div>
      <PageHeader titles="Maps" active="Maps" items={["Home"]} />
      {/* <!-- Row --> */}
      <Lefletmap />
      {/* <!-- /Row --> */}
    </div>
  );
};

LeafletMaps.layout = "Contentlayout";
export default LeafletMaps;
