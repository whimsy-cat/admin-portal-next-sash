import dynamic from "next/dynamic";
import React from "react";
import PageHeader from "../../../shared/layout-components/pageheader/pageheader";
const Addproducts = dynamic(() => import("@/shared/data/pages/addproducts"), {
  ssr: false,
});

const AddProduct = () => {
  return (
    <div>
      <PageHeader
        titles="Add Product"
        active="Add Product"
        items={["E-Commerce"]}
      />
      {/* <!-- ROW-1 OPEN --> */}
      <Addproducts />
      {/* <!-- /ROW-1 CLOSED --> */}
    </div>
  );
};
AddProduct.layout = "Contentlayout";
export default AddProduct;
