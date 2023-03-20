import React from "react";
import PageHeader from "../../../shared/layout-components/pageheader/pageheader";
import { Card, Col, Row } from "react-bootstrap";
import ReactEcharts from "echarts-for-react";
import * as echarts from "../../../shared/data/chart/echarts";

const Echart = () => {
  return (
    <div>
      <PageHeader titles="Echart" active="Charts" items={["ECharts"]} />

      {/* <!-- Row --> */}
      <Row className=" row-sm">
        <Col md={12} lg={6}>
          <Card className=" custom-card overflow-hidden">
            <Card.Header>
              <h6 className="main-content-label mb-1">Line Chart</h6>
            </Card.Header>
            <Card.Body>
              <div>
                <ReactEcharts
                  className="chartsh"
                  option={echarts.echart2.option}
                  series={echarts.echart2.series}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6}>
          <Card className=" custom-card overflow-hidden">
            <Card.Header>
              <h6 className="main-content-label mb-1">
                Combination line & Bar Chart
              </h6>
            </Card.Header>
            <Card.Body>
              <div>
                <ReactEcharts
                  id="echart2"
                  className="chartsh"
                  option={echarts.echart1.option}
                  series={echarts.echart1.series}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col md={12} lg={6}>
          <Card className=" custom-card overflow-hidden">
            <Card.Header>
              <h6 className="main-content-label mb-1">
                Horizonatal Line Chart
              </h6>
            </Card.Header>
            <Card.Body>
              <div>
                <ReactEcharts
                  id="echart1"
                  className="chartsh"
                  option={echarts.echart4.option}
                  series={echarts.echart4.series}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6}>
          <Card className=" custom-card overflow-hidden">
            <Card.Header>
              <h6 className="main-content-label mb-1">
                Horizonatal Combination line & Bar Chart
              </h6>
            </Card.Header>
            <Card.Body>
              <div>
                <ReactEcharts
                  id="echart1"
                  className="chartsh"
                  option={echarts.echart3.option}
                  series={echarts.echart3.series}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col md={12} lg={6}>
          <Card className=" custom-card overflow-hidden">
            <Card.Header>
              <h6 className="main-content-label mb-1">Stacked Bar Chart</h6>
            </Card.Header>
            <Card.Body>
              <div>
                <ReactEcharts
                  id="echart5"
                  className="chartsh"
                  option={echarts.echart5.option}
                  series={echarts.echart5.series}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6}>
          <Card className=" custom-card overflow-hidden">
            <Card.Header>
              <h6 className="main-content-label mb-1">
                Horizonatal Stacked Bar Chart
              </h6>
            </Card.Header>
            <Card.Body>
              <div>
                <ReactEcharts
                  id="echart6"
                  className="chartsh"
                  option={echarts.echart6.option}
                  series={echarts.echart6.series}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* <!-- End Row --> */}
    </div>
  );
};
Echart.layout = "Contentlayout";

export default Echart;
