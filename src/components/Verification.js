import React from 'react';
import { Modal,Button,Form} from "react-bootstrap"

function Verification(props
) {
  return <div>
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Phone Verification
        </Modal.Title>
      </Modal.Header>
      {/* MODAL BODY */}
      <Modal.Body>
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>USER NAME</Form.Label>
    <Form.Control type="email" placeholder="Enter NAME" />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>PHONE NUMBER</Form.Label>
    <Form.Control type="phonenumber" placeholder="ENTER PHONE NUMBER" />
    
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Send OTP
  </Button>
</Form>
      </Modal.Body>
      {/* MODAL BODY ENDS */}
      <Modal.Footer>
        <Button onClick={props.onHide}>Save</Button>
      </Modal.Footer>
    </Modal>
  </div>;
}

export default Verification;
