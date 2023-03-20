import React, { useState } from "react";
import Link from "next/link";
import { Col, Tabs, Form, Tab, Button } from "react-bootstrap";
import { Password } from "../../../shared/data/authenticatepage/dataauthentication";
import { useRouter } from "next/router";

// import Auth API
import { admin_login } from "../../api/auth";

const Login = () => {
  const [err, setError] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isPasswordShown, setPasswordVisibility] = useState("");
  const { email, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };
  let navigate = useRouter();

  // User POST admin_login to login
  const loginAdmin = async () => {
    const email = data.email;
    const password = data.password;
    const loginSuccess = await admin_login(email, password);

    console.log(loginSuccess.success);
    if (loginSuccess.success) {
      let path = `/components/dashboard/dashboard/`;
      navigate.push(path);
    } else {
      setError(loginSuccess.message);
    }
  };

  const Login = (e) => {
    console.log(data);
    if (data.email != "" && data.password != "") {
      loginAdmin();
    } else {
      setError("Please input email and password");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordShown);
  };

  const Log = () => {
    let Rightside = document.querySelector(".mobile-num");
    Rightside.style.display = "none";
    let Rightsides = document.querySelector(".login-otp");
    Rightsides.style.display = "flex";
  };

  return (
    <div>
      {/* <!-- CONTAINER OPEN --> */}
      <Col className="col-login mx-auto mt-7">
        <div className="text-center">
          <img
            src={"../../../assets/images/brand/logo-white.png"}
            className="header-brand-img"
            alt=""
          />
        </div>
      </Col>
      <div className="container-login100">
        <div className="wrap-login100 p-6">
          <form className="login100-form validate-form">
            <span className="login100-form-title pb-5"> Login</span>

            <div className="panel panel-primary">
              <div className="tab-menu-heading border-0">
                <div className="tabs-menu1">
                  {/* <!-- Tabs --> */}
                  <Tabs
                    defaultActiveKey="Email"
                    id="uncontrolled-tab-example"
                    className="tab-content"
                  >
                    <Tab eventKey="Email" title="Email" className="p-0 pt-5">
                      <div
                        className="wrap-input100 validate-input input-group"
                        data-bs-validate="Valid email is required: ex@abc.xyz"
                      >
                        <Link
                          href="#"
                          className="input-group-text bg-white text-muted"
                        >
                          <i
                            className="zmdi zmdi-email text-muted"
                            aria-hidden="true"
                          ></i>
                        </Link>
                        <input
                          className="input100 border-start-0 form-control ms-0"
                          type="email"
                          placeholder="Email"
                          name="email"
                          value={email}
                          onChange={changeHandler}
                          required
                        />
                      </div>
                      <div
                        className="wrap-input100 validate-input input-group"
                        data-bs-validate="Valid email is required: ex@abc.xyz"
                      >
                        <Link
                          href="#"
                          onClick={togglePasswordVisibility}
                          className="input-group-text bg-white text-muted"
                        >
                          <i
                            className={`zmdi ${
                              isPasswordShown ? "zmdi-eye" : "zmdi-eye-off"
                            } text-muted`}
                            aria-hidden="true"
                          ></i>
                        </Link>
                        <input
                          className="input100 border-start-0 form-control ms-0"
                          type={isPasswordShown ? "text" : "password"}
                          placeholder="Password"
                          name="password"
                          value={password}
                          onChange={changeHandler}
                          required
                        />
                      </div>
                      <div className="text-start text-err">{err}</div>
                      <div className="text-end pt-4">
                        <p className="mb-0 fs-13">
                          <Link
                            href={`/components/authentication/forgot-password`}
                            className="text-primary ms-1"
                          >
                            Forgot Password?
                          </Link>
                        </p>
                      </div>
                      <div className="container-login100-form-btn">
                        <Button
                          onClick={Login}
                          className="login100-form-btn btn-primary"
                        >
                          Login
                        </Button>
                      </div>
                      <div className="text-center pt-3">
                        <p className="text-dark mb-0 fs-13 mx-3">
                          Not a member?
                          <Link
                            href={`/components/authentication/register`}
                            className="text-primary ms-1"
                          >
                            Sign UP
                          </Link>
                        </p>
                      </div>
                      <label className="login-social-icon">
                        <span>Login with Social</span>
                      </label>
                      <div className="d-flex justify-content-center">
                        <Link href="#">
                          <div className="social-login text-center">
                            <i className="fa fa-google"></i>
                          </div>
                        </Link>
                      </div>
                    </Tab>
                    <Tab eventKey="Mobile" title="Mobile">
                      <div className="tab-pane pt-5" id="tab6">
                        <div
                          id="mobile-num"
                          className="wrap-input100 mobile-num validate-input input-group mb-4"
                        >
                          <Link
                            href="#"
                            className="input-group-text bg-white text-muted"
                          >
                            <span>+91</span>
                          </Link>
                          <Form.Control
                            className="input100 border-start-0 ms-0"
                            type="number"
                          />
                        </div>
                        <div
                          id="login-otp"
                          className="justify-content-around login-otp mt-5 mb-5"
                        >
                          <Form.Control
                            className="text-center w-15"
                            id="txt1"
                            maxLength={1}
                          />
                          <Form.Control
                            className="text-center w-15"
                            id="txt2"
                            maxLength={1}
                          />
                          <Form.Control
                            className="text-center w-15"
                            id="txt3"
                            maxLength={1}
                          />
                          <Form.Control
                            className="text-center w-15"
                            id="txt4"
                            maxLength={1}
                          />
                        </div>
                        <small>
                          Note : Login with registered mobile number to generate
                          OTP.
                        </small>
                        <div className="container-login100-form-btn ">
                          <Link
                            href="#"
                            className="login100-form-btn btn-primary"
                            id="generate-otp"
                            onClick={() => Log()}
                          >
                            Proceed
                          </Link>
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* // <!-- CONTAINER CLOSED --> */}
    </div>
  );
};

Login.layout = "Authenticationlayout";
export default Login;
