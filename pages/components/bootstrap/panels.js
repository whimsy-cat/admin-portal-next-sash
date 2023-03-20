import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import PageHeader from "../../../shared/layout-components/pageheader/pageheader";

const Panels = () => {
  return (
    <div>
      <PageHeader titles="Panels" active="Panels" items={["Componets"]} />
      {/* <!-- Row --> */}
      <Row>
        <Col md={12} lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Simple Panels</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="expanel expanel-default">
                <div className="expanel-body">Basic panel example</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!-- Row --> */}
      <Row>
        <Col md={12} lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Panel with heading</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col lg={6}>
                  <div className="expanel expanel-default">
                    <div className="expanel-heading">
                      Panel heading without title
                    </div>
                    <div className="expanel-body">Panel content</div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="expanel expanel-default">
                    <div className="expanel-heading">
                      <h3 className="expanel-title">Panel title</h3>
                    </div>
                    <div className="expanel-body">Panel content</div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!-- Row --> */}
      <Row>
        <Col md={12} lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Panel with footer</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="expanel expanel-default">
                <div className="expanel-body">Panel content</div>
                <div className="expanel-footer">Panel footer</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!--End  Row --> */}

      {/* <!-- Row --> */}
      <Row>
        <Col md={12} lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Panel with color header</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col lg={6}>
                  <div className="expanel expanel-primary">
                    <div className="expanel-heading">
                      <h3 className="expanel-title">Panel title</h3>
                    </div>
                    <div className="expanel-body">Panel content</div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="expanel expanel-secondary">
                    <div className="expanel-heading">
                      <h3 className="expanel-title">Panel title</h3>
                    </div>
                    <div className="expanel-body">Panel content</div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <div className="expanel expanel-success">
                    <div className="expanel-heading">
                      <h3 className="expanel-title">Panel title</h3>
                    </div>
                    <div className="expanel-body">Panel content</div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="expanel expanel-danger">
                    <div className="expanel-heading">
                      <h3 className="expanel-title">Panel title</h3>
                    </div>
                    <div className="expanel-body">Panel content</div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!--End Row --> */}
    </div>
  );
};
Panels.layout = "Contentlayout";
export default Panels;
