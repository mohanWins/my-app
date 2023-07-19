// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import "../index.css";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
//  import axios from 'axios';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

type ModalxProps = {
  onHide: () => void;

  show: boolean;

  forgotSubmit: (event: any) => void;

  validatede: boolean;

  value: string;
  onchangeHandlerr: (e: any) => void;
  emailId: string;
  email: string;
};

export default function Modalx(props: ModalxProps) {
  return (
    <Modal
      className="popupHeader"
      {...props}
      size="sm"
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
          onSubmit={props.forgotSubmit}
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
              <div>{errors.emailId}</div>

              <button
                type="submit"
                style={{
                  borderRadius: "20px",
                  fontSize: "12px",
                  width: "75px",
                }}
                className="btn btn-danger btn-sm mt-5 "
              >
                {" "}
                Login
              </button>
            </FormikForm>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
}
