import React from "react";
import { Row, Button, Card, Col, InputGroup, Form } from "react-bootstrap";
import PageHeader from "../../../shared/layout-components/pageheader/pageheader";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { COLUMNS, DATATABLE } from "../../../shared/data/app/datauserlist";
import Select from "react-select";

const Userlist = () => {
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

  const { globalFilter, pageIndex, pageSize } = state;

  //global filter

  const GlobalFilter = ({ filter, setFilter }) => {
    return (
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="form-control"
        placeholder="Search..."
      />
    );
  };
  return (
    <div>
      <PageHeader titles="User Lists" active="User List" items={["Apps"]} />

      <Row className="row-cards">
        <Col lg={12} xl={12}>
          <InputGroup className="mb-5">
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <InputGroup.Text className="btn btn-primary">
              <i className="fa fa-search" aria-hidden="true"></i>
            </InputGroup.Text>
          </InputGroup>
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
        </Col>
      </Row>
    </div>
  );
};
Userlist.layout = "Contentlayout";
export default Userlist;
