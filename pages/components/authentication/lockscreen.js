import React from "react";
import Link from "next/link";
import { Password } from "../../../shared/data/authenticatepage/dataauthentication";
import { Form } from "react-bootstrap";

const LockScreen = () => {
  return (
    <div>
      {/* <!-- CONTAINER OPEN --> */}
      <div className="container-login100">
        <div className="wrap-login100 p-6">
          <Form className="login100-form validate-form">
            <div className="text-center mb-4">
              <img
                src={"../../../assets/images/users/21.jpg"}
                alt="lockscreen pic"
                className="avatar avatar-xxl brround mb-2"
              />
              <h4>Percy Kewshun</h4>
            </div>

            <Password />

            <div className="container-login100-form-btn pt-0">
              <Link
                href={`/components/dashboard/dashboard/`}
                className="login100-form-btn btn-primary"
              >
                Unlock
              </Link>
            </div>
            <div className="text-center pt-2">
              <span className="txt1 me-3">I Forgot Password</span>
              <Link
                className="mx-2"
                href={`/components/authentication/forgot-password`}
              >
                Give me a Hint
              </Link>
            </div>
            <label className="login-social-icon">
              <span>OR</span>
            </label>
            <div className="d-flex justify-content-center">
              <Link href="#">
                <div className="social-login me-4 text-center">
                  <i className="fa fa-google"></i>
                </div>
              </Link>
              <Link href="#">
                <div className="social-login me-4 text-center">
                  <i className="fa fa-facebook"></i>
                </div>
              </Link>
              <Link href="#">
                <div className="social-login text-center">
                  <i className="fa fa-twitter"></i>
                </div>
              </Link>
            </div>
          </Form>
        </div>
      </div>
      {/* <!-- CONTAINER CLOSED --> */}
    </div>
  );
};
LockScreen.layout = "Authenticationlayout";
export default LockScreen;
