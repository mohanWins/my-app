
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import '../index.css';


type ModalxProps = {
  onHide: () => void;


  show: boolean
  handleSubmit:(event:any)=>void;

validatede:boolean

value:string
onchangeHandlerr:(e:any)=>void
emailId:string
email:string
}




export function Modalx(props: ModalxProps) {
  return (
    <Modal className='popupHeader'
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
        <Form   validated={props.validatede} onSubmit={props.handleSubmit}  >


          <Form.Label className='d-flex justify-content-start' style={{ color: "black", fontSize: '14px' }}>Email</Form.Label>
          <Form.Control type={props.email}     value={props.value}  name={props.emailId}   onChange={props.onchangeHandlerr}     placeholder="Enter email" style={{ borderRadius: "50px" }} required/>


          <button type="submit" style={{ borderRadius: "20px", fontSize: '12px', width: '75px' }} className="btn btn-danger btn-sm mt-5 "> Login</button>
        </Form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>









  );
}
