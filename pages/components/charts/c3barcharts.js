import React from "react";
import PageHeader from "../../../shared/layout-components/pageheader/pageheader";
import { Card, Col, Row } from "react-bootstrap";
import C3Charts from "react-c3js";
import * as c3barcharts1 from "../../../shared/data/chart/c3barcharts1";

const C3barcharts = () => {
  return (
    <div>
      <PageHeader
        titles="c3barcharts"
        active="Charts"
        items={["c3barcharts"]}
      />

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col lg={6} md={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Barchart</h6>
                <p className="text-muted  card-sub-title">
                  Below is the basic Barchart example.
                </p>
              </div>
              <div className="chartjs-wrapper-demo">
                <C3Charts
                  id="barchart"
                  className="chartsh"
                  data={c3barcharts1.BarChart.data}
                  columns={c3barcharts1.BarChart.bar}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">SingleBarchart</h6>
                <p className="text-muted  card-sub-title">
                  Below is the basic SingleBarchart example.
                </p>
              </div>
              <div className="chartjs-wrapper-demo">
                <C3Charts
                  id="singlebar"
                  className="chartsh"
                  data={c3barcharts1.SingleBarchart.data}
                  columns={c3barcharts1.SingleBarchart.bar}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col lg={6} md={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">MultipleBarchart</h6>
                <p className="text-muted  card-sub-title">
                  Below is the basic combinationofbar example.
                </p>
              </div>
              <div className="chartjs-wrapper-demo">
                <C3Charts
                  id="multiplecharbar"
                  className="chartsh"
                  data={c3barcharts1.MultipleBarchart.data}
                  columns={c3barcharts1.MultipleBarchart.bar}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">CombinationofBar</h6>
                <p className="text-muted  card-sub-title">
                  Below is the basic combinationofBar example.
                </p>
              </div>
              <div className="chartjs-wrapper-demo">
                <C3Charts
                  id="chart-combination"
                  className="chartsh"
                  data={c3barcharts1.combinationofbar.data}
                  columns={c3barcharts1.combinationofbar.bar}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="row-sm">
        <Col lg={6} md={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">HorizontalBar</h6>
                <p className="text-muted  card-sub-title">
                  Below are an example of HorizontalBar.
                </p>
              </div>
              <div className="chartjs-wrapper-demo">
                <C3Charts
                  id="horizontal"
                  className="chartsh"
                  data={c3barcharts1.HorizontalBar.data}
                  columns={c3barcharts1.HorizontalBar.bar}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Areaspline</h6>
                <p className="text-muted  card-sub-title">
                  Below are an example of Areaspline.
                </p>
              </div>
              <div className="chartjs-wrapper-demo">
                <C3Charts
                  id="areaspline"
                  className="chartsh"
                  data={c3barcharts1.Areaspline.data}
                  columns={c3barcharts1.Areaspline.bar}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!-- Row --> */}

      {/* <!-- End Row --> */}
    </div>
  );
};
C3barcharts.layout = "Contentlayout";

export default C3barcharts;
