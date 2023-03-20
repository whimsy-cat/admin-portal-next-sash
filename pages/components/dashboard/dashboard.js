import dynamic from "next/dynamic";
import React from "react";
const Dashboard = dynamic(
  () => import("../../../shared/data/datadashboard/dashbord"),
  { ssr: false }
);

const DashboardCom = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

DashboardCom.layout = "Contentlayout";
export default DashboardCom;
