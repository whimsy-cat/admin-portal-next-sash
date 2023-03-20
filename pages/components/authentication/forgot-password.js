import React, { useState } from "react";
import Link from "next/link";
import { Col, Button } from "react-bootstrap";
import { useRouter } from "next/router";

// import Auth API
import { send_reset_email } from "../../api/auth";

const ForgotPassword = () => {
  const [err, setError] = useState("");
  const [data, setData] = useState({
    email: "",
  });
  const { email } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };
  let navigate = useRouter();

  // User POST admin_login to login
  const submitResetEmail = async () => {
    const email = data.email;
    const for_admin = "true";
    const submitSuccess = await send_reset_email(email, for_admin);

    console.log(submitSuccess.success);
    if (submitSuccess.success) {
      let path = `/components/dashboard/dashboard/`;
      navigate.push(path);
    } else {
      setError(submitSuccess.message);
    }
  };

  const PasswordResetEmail = async (e) => {
    console.log(data);
    if (data.email != "") {
      submitResetEmail();
    } else {
      setError("Please input your email");
      setData({
        email: "", // daxter1987@gmail.com
      });
    }
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
            <span className="login100-form-title pb-5">Forgot Password</span>
            <p className="text-muted">
              Enter the email address registered on your account
            </p>
            <div
              className="wrap-input100 validate-input input-group"
              data-bs-validate="Valid email is required: ex@abc.xyz"
            >
              <Link href="#" className="input-group-text bg-white text-muted">
                <i className="zmdi zmdi-email" aria-hidden="true"></i>
              </Link>
              <input
                className="input100 border-start-0 ms-0 form-control"
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={changeHandler}
                required
              />
            </div>
            <div className="text-start text-err">{err}</div>

            <div className="submit">
              <Button
                className="login100-form-btn btn-primary"
                onClick={PasswordResetEmail}
              >
                Submit
              </Button>
            </div>

            <div className="text-center mt-4">
              <p className="text-dark mb-0 mx-2">
                Forgot It?
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
ForgotPassword.layout = "Authenticationlayout";
export default ForgotPassword;
