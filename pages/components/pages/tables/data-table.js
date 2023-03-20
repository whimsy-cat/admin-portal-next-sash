import dynamic from "next/dynamic";
import React from "react";
import PageHeader from "../../../../shared/layout-components/pageheader/pageheader";
const Datatables = dynamic(
  () => import("@/shared/data/pages/tablesdata/datatables"),
  { ssr: false }
);

const DataTable = () => {
  return (
    <div>
      <PageHeader titles="Data Table" active="Data Table" items={["Tables"]} />
      <Datatables />

      {/* <!-- End Row --> */}
    </div>
  );
};
DataTable.layout = "Contentlayout";
export default DataTable;
