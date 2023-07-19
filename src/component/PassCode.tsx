import Card from "react-bootstrap/Card";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import Spinner from "react-bootstrap/Spinner";

interface passcodeRequest {
  businessId: number;
  passcode: string;
}

function PassCode() {
  const [showLoader, setShowLoader] = useState(false);

  let passcodeVal: string = "";
  const [passCode, setPassCode] = useState("");

  const location = useLocation();

  console.log("location.key", location);

  let b = localStorage.getItem("firstLogin");
  useEffect(() => {
    toast.success(b, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    localStorage.clear();
  }, []);

  const Navigate = useNavigate();

  const [confirmation, setConfirmation] = useState(true);

  function handleSubmit() {
    const payload: passcodeRequest = {
      businessId: 4,
      passcode: passCode,
    };
    setShowLoader(true);
   
    axios
      .post(
        "https://rehntitapistaging.azurewebsites.net/api/Auth/Passcode",
        payload
      )
      .then((res) => {
        console.log(res);

        toast.success(res.data.responseMessage, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        setTimeout(() => {
          Navigate("/dashboard");
        }, 2000);
      })

      .catch((error) => {
        console.log(error);

        if (error) {
          setShowLoader(false);

          toast.error(error.response.data.responseMessage, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      });
  }

  const handleClickBtn = (val: string) => {
    if (passCode.length > 5) return;
    passcodeVal = passCode + val;
    setPassCode(passcodeVal);
  };

  const passcodeTemplate = [];
  for (let i = 1; i <= 6; i++) {
    const length = passCode.length;
    console.log(passCode, length);
    let addClass = "";
    if (i === length || i < length) {
      addClass = "active";
    } else {
      addClass = "";
    }
    passcodeTemplate.push(<small className={`circle ${addClass}`}></small>);
  }

  const reset = () => {
    setPassCode("");
  };

  const handleClick = () => {
    setConfirmation(false);
  };

  useEffect(() => {
    if (!confirmation) {
      alert("Are you sure you want to go back?");

      Navigate("/");
    }
  }, [confirmation]);

  return (
    <>
      <section>
        <div className="container ">
          <div className="row d-flex justify-content-center">
            <Card
              className="shadow-lg p-3 mb-5 bg-white rounded"
              style={{ width: "25rem", height: "34rem", marginTop: "100px" }}
            >
              <Card.Body>
                <div className="d-flex justify-content-center">
                  {" "}
                  <img
                    style={{ width: "70px", height: "70px" }}
                    src="https://rehntitimage.blob.core.windows.net/rehntitimage/BusinessLogo_4d836a7a-2ec5-43bd-8050-a9e0fbcbe928"
                    alt="..."
                    className="rounded-circle"
                  ></img>
                </div>

                <div style={{ fontSize: "17px" }} className="mt-3">
                  Enter Passcode
                </div>

                <div className="row">
                  <div className="col d-flex justify-content-center  gap-2">
                    {passcodeTemplate}
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-4 ">
                  <div className="col-3     ">
                    <button
                      name="1"
                      onClick={() => handleClickBtn("1")}
                      className="passBtn"
                    >
                      1
                    </button>
                  </div>
                  <div className="col-3   ">
                    {" "}
                    <button
                      name="2"
                      onClick={() => handleClickBtn("2")}
                      className="passBtn "
                    >
                      2
                    </button>
                  </div>
                  <div className="col-3 ">
                    {" "}
                    <button
                      name="3"
                      onClick={() => handleClickBtn("3")}
                      className="passBtn"
                    >
                      3
                    </button>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-3">
                  <div className="col-3   ">
                    {" "}
                    <button
                      name="4"
                      onClick={() => handleClickBtn("4")}
                      className="passBtn"
                    >
                      4
                    </button>
                  </div>
                  <div className="col-3   ">
                    {" "}
                    <button
                      name="5"
                      onClick={() => handleClickBtn("5")}
                      className="passBtn"
                    >
                      5
                    </button>
                  </div>
                  <div className="col-3 ">
                    {" "}
                    <button
                      name="6"
                      onClick={() => handleClickBtn("6")}
                      className="passBtn"
                    >
                      6
                    </button>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-3">
                  <div className="col-3  ">
                    {" "}
                    <button
                      name="7"
                      onClick={() => handleClickBtn("7")}
                      className="passBtn"
                    >
                      7
                    </button>
                  </div>
                  <div className="col-3 ">
                    {" "}
                    <button
                      name="8"
                      onClick={() => handleClickBtn("8")}
                      className="passBtn"
                    >
                      8
                    </button>
                  </div>
                  <div className="col-3  ">
                    {" "}
                    <button
                      name="9"
                      onClick={() => handleClickBtn("9")}
                      className="passBtn"
                    >
                      9
                    </button>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-3 ">
                  <div
                    className="col-3 "
                    onClick={() => reset()}
                    style={{ color: "red", cursor: "pointer" }}
                  >
                    clear
                  </div>
                  <div className="col-3 ">
                    {" "}
                    <button
                      name="0"
                      onClick={() => handleClickBtn("0")}
                      className="passBtn"
                    >
                      0
                    </button>
                  </div>
                  <div
                    className="col-3 "
                    style={{ color: "red", cursor: "pointer" }}
                  >
                    delete
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-6    d-flex justify-content-end ">
                    <button
                      type="button"
                      onClick={handleClick}
                      style={{
                        borderRadius: "20px",
                        fontSize: "12px",
                        width: "75px",
                        backgroundColor: " rgb(0 9 130)",
                        height: "35px",
                        border: "none",
                      }}
                      className="btn btn-danger btn-sm  "
                    >
                      {" "}
                      back
                    </button>
                  </div>
                  <div className="col-6    d-flex justify-content-start">
                    <button
                      type="button"
                      onClick={() => handleSubmit()}
                      style={{
                        borderRadius: "20px",
                        fontSize: "12px",
                        width: "75px",
                      }}
                      className="btn btn-danger btn-sm  "
                    >
                      {!showLoader ? (
                        <span>Confirm</span>
                      ) : (
                        <Spinner animation="border" size="sm" variant="light" />
                      )}
                    </button>
                  </div>
                </div>

                <div
                  className="mt-3    text-danger"
                  style={{ fontSize: "14px" }}
                >
                  Forgot Password?
                </div>

                <div className="row mt-4   ">
                  <div
                    className="col  d-flex justify-content-start   "
                    style={{ fontSize: "13px" }}
                  >
                    {" "}
                    <i className="bi bi-envelope mx-1"></i> Email Login
                  </div>
                  <div
                    className="col  d-flex justify-content-end   "
                    style={{ color: "#8A2BE2", fontSize: "13px" }}
                  >
                    Exit Main App
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>

      <ToastContainer />
    </>
  );
}

export default PassCode;
