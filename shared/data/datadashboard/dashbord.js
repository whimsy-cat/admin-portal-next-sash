import React, { useEffect, useState } from "react";
import Link from "next/link";
import PageHeader from "../../layout-components/pageheader/pageheader";
import {
  Card,
  Col,
  OverlayTrigger,
  ProgressBar,
  Row,
  Tooltip,
  Table,
  Tab,
  Nav,
  Form,
  Button,
} from "react-bootstrap";
import {
  AllProduct,
  Worldmap,
  Shipped,
  Pending,
  Cancelled,
  SalesAnalytics,
  RecentOrder,
  TotalUser,
  TotalProfit,
  TotalExpenses,
  TotalCost,
} from "./DashBoardData";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { COLUMNS, DATATABLE } from "../../../shared/data/app/datauserlist";
import Select from "react-select";

import { admin_overview } from "../../../pages/api/dashboard";

const Dashboard = () => {
  const [stats, setStats] = useState({
    total_active_accounts: 0,
    total_active_users: 0,
    total_trials: 0,
    revenue_this_month: 0,
  });
  const [recentOrders, setRecentOrders] = useState({
    ad_spent: 0,
    impressions: 0,
  });
  const tableInstance = useTable(
    {
      columns: COLUMNS,
      data: DATATABLE,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const FormSize = [
    { value: "5", label: "Show 5" },
    { value: "10", label: "Show 10" },
    { value: "15", label: "Show 15" },
  ];

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  useEffect(() => {
    setPageSize(5);
    getAdminOverviewData();
  }, []);

  const getAdminOverviewData = async () => {
    const response = await admin_overview();
    const stats = response.data.stats;
    const sales = response.data.sales;
    const ad_spent = response.data.ad_spent;
    const impressions = response.data.impressions;
    setStats({
      total_active_accounts: stats.total_active_accounts,
      total_active_users: stats.total_active_users,
      total_trials: stats.total_trials,
      revenue_this_month: stats.revenue_this_month,
    });
    setRecentOrders({
      ad_spent: recentOrders.ad_spent,
      impressions: recentOrders.impressions,
    });
  };

  const { globalFilter, pageIndex, pageSize } = state;
  return (
    <div>
      <PageHeader
        titles="Dashboard 01"
        active="Dashboard 01"
        items={["Home"]}
      />

      {/* <!-- ROW-1 --> */}

      <Row>
        <Col lg={12} md={12} sm={12} xl={12}>
          <Row>
            <Col lg={6} md={6} sm={12} xxl={3}>
              <Card className="overflow-hidden">
                <Card.Body>
                  <div className="d-flex">
                    <div className="mt-2">
                      <h6 className="">Total Active Accounts</h6>
                      <h2 className="mb-0 number-font">
                        {stats.total_active_accounts}
                      </h2>
                    </div>
                    <div className="ms-auto">
                      <div className="chart-wrapper mt-1">
                        <TotalUser />
                      </div>
                    </div>
                  </div>
                  <span className="text-muted fs-12">
                    <span className="text-secondary mx-2">
                      <i className="fe fe-arrow-up-circle  text-secondary"></i>{" "}
                      5%
                    </span>
                    Last week
                  </span>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={6} sm={12} xxl={3}>
              <div className="card overflow-hidden">
                <Card.Body>
                  <div className="d-flex">
                    <div className="mt-2">
                      <h6 className="">Total Active Users</h6>
                      <h2 className="mb-0 number-font">
                        {stats.total_active_users}
                      </h2>
                    </div>
                    <div className="ms-auto">
                      <div className="chart-wrapper mt-1">
                        <TotalProfit />
                      </div>
                    </div>
                  </div>
                  <span className="text-muted fs-12">
                    <span className="text-pink mx-2">
                      <i className="fe fe-arrow-down-circle text-pink"></i>{" "}
                      0.75%
                    </span>
                    Last 6 days
                  </span>
                </Card.Body>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xxl={3}>
              <div className="card overflow-hidden">
                <Card.Body>
                  <div className="d-flex">
                    <div className="mt-2">
                      <h6 className="">Total Trials</h6>
                      <h2 className="mb-0 number-font">
                        ${stats.total_trials}
                      </h2>
                    </div>
                    <div className="ms-auto">
                      <div className="chart-wrapper mt-1">
                        <TotalExpenses />
                      </div>
                    </div>
                  </div>
                  <span className="text-muted fs-12">
                    <span className="text-green mx-2">
                      <i className="fe fe-arrow-up-circle text-green"></i> 0.9%
                    </span>
                    Last 9 days
                  </span>
                </Card.Body>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xxl={3}>
              <Card className="overflow-hidden">
                <Card.Body>
                  <div className="d-flex">
                    <div className="mt-2">
                      <h6 className="">Revenue this month</h6>
                      <h2 className="mb-0 number-font">
                        ${stats.revenue_this_month}
                      </h2>
                    </div>
                    <div className="ms-auto">
                      <div className="chart-wrapper mt-1">
                        <TotalCost />
                      </div>
                    </div>
                  </div>
                  <span className="text-muted fs-12">
                    <span className="text-warning mx-2">
                      <i className="fe fe-arrow-up-circle text-warning"></i>{" "}
                      0.6%
                    </span>
                    Last year
                  </span>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <!-- ROW-1 END --> */}

      {/* <!-- ROW-2 --> */}
      <Row>
        <Col sm={12} md={12} lg={12} xl={8} xxl={9}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Sales Analytics</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="chartjs-wrapper-demo myChartSaah">
                <SalesAnalytics />
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
        <Col md={12} sm={12} lg={12} xl={4} xxl={3}>
          <Card className="overflow-hidden">
            <Card.Body className="pb-0 bg-recentorder">
              <Card.Title as="h3" className="text-white">
                Recent Orders
              </Card.Title>
              <div className="chartjs-wrapper-demo">
                <RecentOrder />
              </div>
            </Card.Body>
            <div id="flotback-chart" className="flot-background"></div>
            <Card.Body>
              <div className="d-flex mb-4 mt-3">
                <div className="avatar avatar-md bg-secondary-transparent text-secondary bradius me-3">
                  <i className="fe fe-check"></i>
                </div>
                <div className="">
                  <h6 className="mb-1 fw-semibold">Ad spent</h6>
                  <p className="fw-normal fs-12">
                    {" "}
                    <span className="text-success mx-1">3.5%</span>
                    increased{" "}
                  </p>
                </div>
                <div className=" ms-auto my-auto">
                  <p className="fw-bold fs-20"> {recentOrders.ad_spent} </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="avatar  avatar-md bg-pink-transparent text-pink bradius me-3">
                  <i className="fe fe-x"></i>
                </div>
                <div className="">
                  <h6 className="mb-1 fw-semibold">Impression</h6>
                  <p className="fw-normal fs-12">
                    {" "}
                    <span className="text-success mx-1">1.2%</span>
                    increased{" "}
                  </p>
                </div>
                <div className=" ms-auto my-auto">
                  <p className="fw-bold fs-20 mb-0">
                    {" "}
                    {recentOrders.impressions}{" "}
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- ROW-2 END --> */}

      {/* <!-- ROW-3 --> */}
      <Row>
        <Card>
          <Card.Header className="border-bottom-0 p-4">
            <Card.Title>1 - 30 of 546 users</Card.Title>
            <div className="d-flex page-options ms-auto">
              <Form.Group className="mb-3">
                <Select
                  classNamePrefix="Select"
                  options={FormSize}
                  placeholder="Select"
                  onChange={(e) => setPageSize(Number(e.value))}
                />
              </Form.Group>
            </div>
          </Card.Header>
          <div className="e-table px-5 pb-5">
            <div className="table-responsive ">
              <table
                {...getTableProps()}
                className="table table-bordered text-nowrap mb-0"
              >
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr
                      key={Math.random()}
                      {...headerGroup.getHeaderGroupProps()}
                    >
                      {headerGroup.headers.map((column) => (
                        <th
                          key={Math.random()}
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                          className={column.className}
                        >
                          <span className="tabletitle">
                            {column.render("Header")}
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {page.map((row) => {
                    prepareRow(row);
                    return (
                      <tr
                        key={Math.random()}
                        className="text-center"
                        {...row.getRowProps()}
                      >
                        {row.cells.map((cell) => {
                          return (
                            <td key={Math.random()} {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="d-flex mt-4 ">
                <span className="me-3">
                  Page{" "}
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>{" "}
                </span>
                <span className="ms-auto ">
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}
                  >
                    {" Previous "}
                  </Button>
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => {
                      previousPage();
                    }}
                    disabled={!canPreviousPage}
                  >
                    {" << "}
                  </Button>
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => {
                      previousPage();
                    }}
                    disabled={!canPreviousPage}
                  >
                    {" < "}
                  </Button>
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => {
                      nextPage();
                    }}
                    disabled={!canNextPage}
                  >
                    {" > "}
                  </Button>
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => {
                      nextPage();
                    }}
                    disabled={!canNextPage}
                  >
                    {" >> "}
                  </Button>
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                  >
                    {" Next "}
                  </Button>
                </span>
              </div>
            </div>
          </div>
        </Card>
      </Row>
      {/* <!-- ROW-3 END --> */}
    </div>
  );
};

export default Dashboard;
