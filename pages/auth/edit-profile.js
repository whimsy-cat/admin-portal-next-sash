import React, { useEffect, useState } from "react";
import PageHeader from "../../shared/layout-components/pageheader/pageheader";
import Link from "next/link";
import { Row, Col, Card, Form, InputGroup, ListGroup } from "react-bootstrap";
import { Current } from "../../shared/data/pages/dataeditprofile";
import Select from "react-select";
import { current_user } from "../api/auth";
import { addYears } from "date-fns";

const Editprofile = () => {
  const [account, setAccount] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact_number: "",
    password: "",
  });

  useEffect(() => {
    getCurrentUserProfile();
  }, []);

  const getCurrentUserProfile = async () => {
    const response = await current_user();
    const data = response.data;
    const fullname = data.name;
    const [firstName, lastName] = fullname.split(" ");

    const email = data.email;
    setAccount({ first_name: firstName, last_name: lastName, email: email });
  };

  return (
    <div>
      <PageHeader
        titles="Edit Profile"
        active="Edit Profile"
        items={["Pages"]}
      />
      {/* <!-- ROW-1 OPEN --> */}
      <Row>
        <Col xl={4}>
          <Card>
            <Card.Header>
              <Card.Title>Edit Password</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-center chat-image mb-5">
                <div className="avatar avatar-xxl chat-profile mb-3 brround">
                  <Link className="" href={`/components/pages/profile/`}>
                    <img
                      alt="avatar"
                      src={"../../../assets/images/users/7.jpg"}
                      className="brround"
                    />
                  </Link>
                </div>
                <div className="main-chat-msg-name">
                  <Link href={`/components/pages/profile/`}>
                    <h5 className="mb-1 text-dark fw-semibold">
                      Percy Kewshun
                    </h5>
                  </Link>
                  <p className="text-muted mt-0 mb-0 pt-0 fs-13">
                    Web Designer
                  </p>
                </div>
              </div>
              <Current />
              <Form.Group>
                <Form.Label>New Password</Form.Label>
                <InputGroup
                  className="wrap-input100 validate-input"
                  id="Password-toggle1"
                >
                  <Link
                    href="#"
                    className="input-group-text bg-white text-muted"
                  >
                    <i
                      className="zmdi zmdi-eye text-muted"
                      aria-hidden="true"
                    ></i>
                  </Link>
                  <Form.Control
                    className="input100"
                    type="password"
                    placeholder="New Password"
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <InputGroup
                  className="wrap-input100 validate-input"
                  id="Password-toggle2"
                >
                  <Link
                    href="#"
                    className="input-group-text bg-white text-muted"
                  >
                    <i
                      className="zmdi zmdi-eye text-muted"
                      aria-hidden="true"
                    ></i>
                  </Link>
                  <Form.Control
                    className="input100"
                    type="password"
                    placeholder="Confirm Password"
                  />
                </InputGroup>
              </Form.Group>
            </Card.Body>
            <Card.Footer className="text-end">
              <Link href="#" className="btn btn-primary me-2">
                Update
              </Link>
              <Link href="#" className="btn btn-danger me-2">
                Cancel
              </Link>
            </Card.Footer>
          </Card>
        </Col>
        <Col xl={8}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Edit Profile</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col lg={6} md={12}>
                  <Form.Group>
                    <Form.Label htmlFor="exampleInputname">
                      First Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="exampleInputname"
                      placeholder="First Name"
                      value={account.first_name}
                    />
                  </Form.Group>
                </Col>
                <div className="col-lg-6 col-md-12">
                  <Form.Group>
                    <Form.Label htmlFor="exampleInputname1">
                      Last Name
                    </Form.Label>

                    <Form.Control
                      type="text"
                      id="exampleInputname1"
                      placeholder="Enter Last Name"
                      value={account.last_name}
                    />
                  </Form.Group>
                </div>
              </Row>
              <Form.Group>
                <Form.Label htmlFor="exampleInputEmail1">
                  Email address
                </Form.Label>

                <Form.Control
                  type="email"
                  id="exampleInputEmail1"
                  placeholder="Email address"
                  value={account.email}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="exampleInputnumber">
                  Contact Number
                </Form.Label>

                <Form.Control
                  type="number"
                  id="exampleInputnumber"
                  placeholder="Contact number"
                />
              </Form.Group>
            </Card.Body>
            <Card.Footer className="text-end">
              <Link href="#" className="btn btn-success me-2">
                Save
              </Link>
              <Link href="#" className="btn btn-danger me-2">
                Cancel
              </Link>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      {/* <!-- ROW-1 CLOSED --> */}
    </div>
  );
};
Editprofile.layout = "Contentlayout";
export default Editprofile;
