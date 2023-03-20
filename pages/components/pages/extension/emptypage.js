import React from "react";
import PageHeader from "../../../../shared/layout-components/pageheader/pageheader";

const EmptyPage = () => {
  return (
    <div>
      <PageHeader titles="Empty" active="Empty" items={["Pages"]} />
      {/* <!-- ROW-1 OPEN --> */}
      {/* <!-- Row --> */}
      <div className="row ">
        <div className="col-md-12"></div>
      </div>
      {/* <!-- /Row --> */}
    </div>
  );
};
EmptyPage.layout = "Contentlayout";
export default EmptyPage;
