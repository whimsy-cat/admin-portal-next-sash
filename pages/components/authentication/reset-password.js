import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Col, Button } from "react-bootstrap";
import { useRouter } from "next/router";

// import Auth API
import { reset_password } from "../../api/auth";
import url from "url";

const ResetPassword = () => {
  const [err, setError] = useState("");
  const [data, setData] = useState({
    password: "",
    rpassword: "",
  });
  const { password, rpassword } = data;
  const [isPasswordShown, setPasswordVisibility] = useState("");
  const [isRPasswordShown, setRPasswordVisibility] = useState("");
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };
  let navigate = useRouter();
  useEffect(() => {
    const { query } = url.parse(navigate.asPath, true);
    const { token, email } = query;
    console.log(token, email); // replace with your logic
  }, [navigate.asPath]);
  // User POST admin_login to login
  const resetPassword = async () => {
    const token = "token";
    const email = "daxter1987@gmail.com";
    const password = data.password;
    const rpassword = data.rpassword;
    const resetSuccess = await reset_password(
      token,
      email,
      password,
      rpassword
    );
    console.log(resetSuccess.success);
    if (resetSuccess.success) {
      let path = `/components/dashboard/dashboard/`;
      navigate.push(path);
    } else {
      setError(resetSuccess.message);
    }
  };

  const PasswordReset = async (e) => {
    console.log(data);
    if (data.password == data.rpassword && data.password != "") {
      resetPassword();
    } else {
      setError("The password does not match");
      setData({
        password: "", // daxter1987@gmail.com
        rpassword: "",
      });
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordShown);
  };

  const toggleRPasswordVisibility = () => {
    setRPasswordVisibility(!isRPasswordShown);
  };
  return (
    <div>
      {/* <!-- CONTAINER OPEN --> */}
      <Col className="col-login mx-auto">
        <div className="text-center">
          <img
            src={"../../../assets/images/brand/logo-white.png"}
            className="header-brand-img m-0"
            alt=""
          />
        </div>
      </Col>

      {/* <!-- CONTAINER OPEN --> */}
      <div className="container-login100">
        <div className="wrap-login100 p-6">
          <form className="login100-form validate-form">
            <span className="login100-form-title pb-5">Reset Password</span>
            <p className="text-muted">Reset your account password</p>
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
            <div
              className="wrap-input100 validate-input input-group"
              data-bs-validate="Valid email is required: ex@abc.xyz"
            >
              <Link
                href="#"
                onClick={toggleRPasswordVisibility}
                className="input-group-text bg-white text-muted"
              >
                <i
                  className={`zmdi ${
                    isRPasswordShown ? "zmdi-eye" : "zmdi-eye-off"
                  } text-muted`}
                  aria-hidden="true"
                ></i>
              </Link>
              <input
                className="input100 border-start-0 form-control ms-0"
                type={isRPasswordShown ? "text" : "password"}
                placeholder="Password Confirm"
                name="rpassword"
                value={rpassword}
                onChange={changeHandler}
                required
              />
            </div>
            <div className="text-start text-err">{err}</div>

            <div className="submit">
              <Button
                className="login100-form-btn btn-primary"
                onClick={PasswordReset}
              >
                Submit
              </Button>
            </div>
            <div className="text-center mt-4">
              <p className="text-dark mb-0 mx-2">
                <Link
                  className="text-primary ms-1"
                  href={`/components/dashboard/dashboard`}
                >
                  Send me Back
                </Link>
              </p>
            </div>
            <label className="login-social-icon">
              <span>OR</span>
            </label>
            <div className="d-flex justify-content-center">
              <Link href="#">
                <div className="social-login text-center">
                  <i className="fa fa-google"></i>
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
ResetPassword.layout = "Authenticationlayout";
export default ResetPassword;
