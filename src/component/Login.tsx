import Card from "react-bootstrap/Card";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { toast, ToastContainer } from "react-toastify";
import { Formik, Form as FormikForm } from "formik";
import Spinner from "react-bootstrap/Spinner";
import * as Yup from "yup";
import Button from "./Button";
const SignupSchema = Yup.object().shape({
  emailId: Yup.string().email("Invalid email").required("Required"),
});
const SignupSchemaa = Yup.object().shape({
  emailId: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()

    .min(8, "Too Short!")
    .max(11, "Too Long!")
    .required("Please provide a valid password"),
});

function Login() {
  const [showLoader, setShowLoader] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const Navigate = useNavigate();
  const handleSubmit = (values: any) => {
    const userData = {
      businessId: "4",
      emailId: values.emailId,
      applicationId: "58",
      password: values.password,
      ipAddress: "string",
    };

    setShowLoader(true);

    axios
      .post(
        "https://rehntitapistaging.azurewebsites.net/api/Auth/Login",
        userData
      )
      .then((res: any) => {
        debugger;

        localStorage.setItem("firstLogin", res.data.responseMessage);

        Navigate("/passcode");
      })
      .catch((err: any) => {
        setShowLoader(false);

        toast.error(err.response.data.responseMessage, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };

  const forgotSubmit = (values: any) => {
    setShowLoader(true);

    const payload = {
      businessId: "4",
      emailId: values.emailId,
    };

    axios
      .post(
        "https://rehntitapistaging.azurewebsites.net/api/Auth/ForgotPassword",
        payload
      )
      .then((res) => {
        toast.success(res.data.responseMessage, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });

        setModalShow(false);
        setShowLoader(false);
      })
      .catch((err) => {
        toast.error(err.response.data.responseMessage, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });

        console.log(err);
        setShowLoader(false);
      });
  };

  return (
    <>
      <section>
        <div className="container ">
          <div className="row d-flex      justify-content-center    ">
            <Card
              className="shadow-lg p-3 mb-5 bg-white rounded"
              style={{ width: "30rem", height: "32rem", marginTop: "100px" }}
            >
              <Card.Body>
                <div className="d-flex justify-content-center">
                  {" "}
                  <img
                    style={{ width: "100px", height: "100px" }}
                    src="https://rehntitimage.blob.core.windows.net/rehntitimage/BusinessLogo_4d836a7a-2ec5-43bd-8050-a9e0fbcbe928"
                    alt="..."
                    className="rounded-circle"
                  ></img>
                </div>
                <Formik
                  initialValues={{
                    emailId: "",
                    password: "",
                  }}
                  validationSchema={SignupSchemaa}
                  onSubmit={handleSubmit}
                >
                  {({ handleChange, values, errors }) => (
                    <FormikForm>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label
                          className="d-flex justify-content-start"
                          style={{ color: "black", fontSize: "14px" }}
                        >
                          Email
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          style={{ borderRadius: "50px" }}
                          value={values.emailId}
                          name="emailId"
                          onChange={handleChange}
                          required
                        />
                        <div className="d-flex justify-content-start text-danger  ">
                          {errors.emailId}
                        </div>
                        <Form.Label
                          className=" d-flex justify-content-start     mt-3"
                          style={{ color: "black", fontSize: "14px" }}
                        >
                          Password
                        </Form.Label>

                        <Form.Control
                          type="password"
                          name="password"
                          value={values.password}
                          placeholder="Enter password"
                          style={{ borderRadius: "50px" }}
                          onChange={handleChange}
                          required
                        />
                        <div className="d-flex justify-content-start text-danger  ">
                          {errors.password}
                        </div>
                      </Form.Group>
                      <div className="row">
                        <div className="col-6 d-flex">
                          <Form.Check aria-label="option 1" />
                          <Form.Text
                            className="ml-2"
                            style={{
                              color: "black",
                              marginLeft: "8px",
                              fontSize: "14px",
                            }}
                          >
                            Remember me
                          </Form.Text>
                        </div>
                        <div className="col-6 d-flex justify-content-end  ">
                          <div
                            onClick={() => setModalShow(true)}
                            style={{
                              textDecoration: "none",
                              color: "red",
                              fontSize: "14px",
                              backgroundColor: "white",
                              border: "0px",
                              cursor: "pointer",
                            }}
                          >
                            Forgot Password ?
                          </div>
                        </div>

                        <div className="col  d-flex justify-content-end mt-5  ">
                          <Button
                            loading={showLoader}
                            disabled={showLoader}
                            text="Login"
                          />
                        </div>
                      </div>
                    </FormikForm>
                  )}
                </Formik>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>

      <Modal
        className="popupHeader"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            reset Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              emailId: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={forgotSubmit}
          >
            {({ handleChange, values, errors }) => (
              <FormikForm>
                <Form.Label
                  className="d-flex justify-content-start"
                  style={{ color: "black", fontSize: "14px" }}
                >
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  value={values.emailId}
                  name="emailId"
                  onChange={handleChange}
                  placeholder="Enter email"
                  style={{ borderRadius: "50px" }}
                />
                <div style={{ color: "red" }}>{errors.emailId}</div>

                <button
                  type="submit"
                  style={{
                    borderRadius: "20px",
                    fontSize: "12px",
                    width: "75px",
                  }}
                  className="btn btn-danger btn-sm mt-5 "
                >
                  {!showLoader ? (
                    <span>Send</span>
                  ) : (
                    <Spinner animation="border" size="sm" variant="light" />
                  )}
                </button>
              </FormikForm>
            )}
          </Formik>
        </Modal.Body>
      </Modal>

      <ToastContainer />
    </>
  );
}

export default Login;
