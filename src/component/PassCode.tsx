
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function PassCode() {

    notify();
    function notify() {
        console.log("PassCode")
        toast.success("Success Notification !", {
            position: toast.POSITION.TOP_CENTER
        });


    }



    return (
        <>


            <section>
                <div className="container ">


                    <div className='row d-flex justify-content-center'   >





                        <Card className='shadow-lg p-3 mb-5 bg-white rounded' style={{ width: '25rem', height: '34rem', marginTop: '100px' }}>

                            <Card.Body  >
                                <div className='d-flex justify-content-center'   >  <img style={{ width: "70px", height: '70px' }} src="https://rehntitimage.blob.core.windows.net/rehntitimage/BusinessLogo_4d836a7a-2ec5-43bd-8050-a9e0fbcbe928" alt="..." className="rounded-circle"></img>
                                </div>

                                <div style={{ fontSize: '12px' }} className='mt-3'  >Enter Passcode</div>

                                <small className="col bi bi-circle  mx-1 "   ></small>
                                <small className="col bi bi-circle  "   ></small>
                                <small className="col bi bi-circle mx-1 "   ></small>
                                <small className="col bi bi-circle  "   ></small>
                                <small className="col bi bi-circle mx-1 "   ></small>
                                <small className="col bi bi-circle  "   ></small>








                                {/* </div> */}


                                <div className="row d-flex justify-content-center mt-4 ">

                                    <div className="col-3 border border-grey rounded-circle " style={{ width: "40px", height: '40px', display: 'grid', placeItems: 'center' }}  >1</div>
                                    <div className="col-3 border border-grey rounded-circle  mx-4" style={{ width: "40px", height: '40px', display: 'grid', placeItems: 'center' }}>2</div>
                                    <div className="col-3 border border-grey rounded-circle" style={{ width: "40px", height: '40px', display: 'grid', placeItems: 'center' }}>3</div>
                                </div>
                                <div className="row d-flex justify-content-center mt-3">

                                    <div className="col-3 border border-grey rounded-circle " style={{ width: "40px", height: '40px', display: 'grid', placeItems: 'center' }}  >4</div>
                                    <div className="col-3 border border-grey rounded-circle mx-4" style={{ width: "40px", height: '40px', display: 'grid', placeItems: 'center' }}>5</div>
                                    <div className="col-3 border border-grey rounded-circle" style={{ width: "40px", height: '40px', display: 'grid', placeItems: 'center' }}>6</div>
                                </div>
                                <div className="row d-flex justify-content-center mt-3">

                                    <div className="col-3 border border-grey rounded-circle " style={{ width: "40px", height: '40px', display: 'grid', placeItems: 'center' }}  >7</div>
                                    <div className="col-3 border border-grey rounded-circle mx-4" style={{ width: "40px", height: '40px', display: 'grid', placeItems: 'center' }}>8</div>
                                    <div className="col-3 border border-grey rounded-circle" style={{ width: "40px", height: '40px', display: 'grid', placeItems: 'center' }}>9</div>
                                </div>
                                <div className="row d-flex justify-content-center mt-3 ">

                                    <div className="col-3 text-danger " style={{ display: 'grid', placeItems: 'center', fontSize: '14px' }}    >clear</div>
                                    <div className="col-3 border border-grey rounded-circle mx-2 " style={{ width: "40px", height: '40px', display: 'grid', placeItems: 'center' }}>0</div>
                                    <div className="col-3 text-danger " style={{ display: 'grid', placeItems: 'center', fontSize: '14px' }} >delete</div>
                                </div>


                                <div className="row mt-3">


                                    <div className="col-6    d-flex justify-content-end "><Link to="/"><button type="button" style={{ borderRadius: "20px", fontSize: '12px', width: '75px', backgroundColor: '	#4B0082' }} className="btn btn-danger btn-sm  "> back</button></Link></div>
                                    <div className="col-6    d-flex justify-content-start"><button type="button" style={{ borderRadius: "20px", fontSize: '12px', width: '75px' }} className="btn btn-danger btn-sm  "> Confirm</button></div>

                                </div>


                                <div className='mt-3    text-danger' style={{ fontSize: '14px' }}>Forgot Password?</div>

                                <div className="row mt-4   ">

                                    <div className="col  d-flex justify-content-start   " style={{ fontSize: '13px' }}> <i className="bi bi-envelope mx-1"></i>    Email Login</div>
                                    <div className="col  d-flex justify-content-end   " style={{ color: '#8A2BE2', fontSize: '13px' }}  >Exit Main App</div>
                                </div>





                            </Card.Body>
                        </Card>





                    </div>



                </div>







            </section>


            <ToastContainer />

        </>
    )
}

export default PassCode
