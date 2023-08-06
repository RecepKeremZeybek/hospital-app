import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"


function AddModal({ show, handleClose, apps, setApps, drName }) {
 

  return (
    <>
      <Modal  >
        <Modal.Header closeButton>
          <Modal.Title>Appointment for </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group className="mb-3" >
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                
                
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Date"
                required
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="success" type="submit" className="me-2">
                Save
              </Button>
              <Button variant="danger" >
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AddModal
