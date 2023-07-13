import Card from 'react-bootstrap/Card';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import '../App.css'
import { Modalx } from '../modal/Modalx';
import { useState } from 'react'
import axios from 'axios';


function Login() {
    const [validated, setValidated] = useState(false);
    const [validatede, setValidatede] = useState(false);
    const [modalEmail, setmodalEmail] = useState({


        emailId: ""
    });
    const [modalShow, setModalShow] = useState(false);
    const [InpData, setInpData] = useState({ emailId: "", password: "" });


    const Navigate = useNavigate()




    function onchangeHandler(event: React.ChangeEvent<HTMLInputElement>,) {

        const { value, name } = event.target



        setInpData({ ...InpData, [name]: value })


    }




    async function AxiPayload(userData: any) {

        await axios.post("https://rehntitapistaging.azurewebsites.net/api/Auth/Login", userData).then((res) => {

            return (console.log(res))

        })


    }
    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        } else {


            const userData =



            {
                "businessId": "4",
                "emailId": InpData.emailId,
                "applicationId": "58",
                "password": InpData.password,
                "ipAddress": "string",
                "rememberMe": true,
                "isEmployee": true
            }



            AxiPayload(userData)



            setValidated(true);



            
            Navigate("/passcode")
        }
    };



    const forgotSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidatede(true);
        } else {





            setValidatede(true);
            Navigate("/")
        }
    };



    function ModalChangeHandler(e: any) {

        const { value } = e.target


        setmodalEmail(value)


    }


  
    console.log(modalEmail)

    return (
        <>
            <section>
                <div className="container ">
                    <div className='row d-flex      justify-content-center    '   >
                        <Card className='shadow-lg p-3 mb-5 bg-white rounded' style={{ width: '30rem', height: '28rem', marginTop: '100px' }}>
                            <Card.Body>
                                <div className='d-flex justify-content-center'   >  <img style={{ width: "100px", height: '100px' }} src="https://rehntitimage.blob.core.windows.net/rehntitimage/BusinessLogo_4d836a7a-2ec5-43bd-8050-a9e0fbcbe928" alt="..." className="rounded-circle"></img>
                                </div>
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='d-flex justify-content-start' style={{ color: "black", fontSize: '14px' }}>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" style={{ borderRadius: "50px" }} value={InpData.emailId} name="emailId" onChange={onchangeHandler} required />
                                        <Form.Label className=' d-flex justify-content-start     mt-3' style={{ color: "black", fontSize: '14px' }}   >Password</Form.Label>
                                        <Form.Control type="password" name='password' value={InpData.password} placeholder="Enter password" style={{ borderRadius: "50px" }} onChange={onchangeHandler} required />
                                    </Form.Group>
                                    <div className="row">
                                        <div className="col-6 d-flex">
                                            <Form.Check aria-label="option 1" />
                                            <Form.Text className='ml-2' style={{ color: "black", marginLeft: "8px", fontSize: '14px' }}>Remember me</Form.Text>


                                        </div>
                                        <div className="col-6 d-flex justify-content-end  " >

                                            <div onClick={() => setModalShow(true)} style={{ textDecoration: 'none', color: "red", fontSize: '14px', backgroundColor: 'white', border: '0px', cursor: 'pointer' }} >Forgot Password ?</div>



                                        </div>

                                        <div className="col  d-flex justify-content-end mt-5 ">  <button type="submit" style={{ borderRadius: "20px", fontSize: '12px', width: '75px' }} className="btn btn-danger btn-sm  "> Login</button></div>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>





                    </div>



                </div>







            </section>



            <Modalx
                show={modalShow}
                onHide={() => setModalShow(false)}

                validatede={false}

                handleSubmit={forgotSubmit}

                value={modalEmail.emailId}
                onchangeHandlerr={ModalChangeHandler}
                emailId='emailId'
                email='email'
            />










        </>
    )
}

export default Login
