import { Button, Form, Modal } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
export default function AddShiftModal({ show, handleClose }) {
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Tilføj vagt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Dato</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ShiftStart">
              <Form.Label>Start tidspunkt</Form.Label>
              <Form.Control type="time" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ShiftEnd">
              <Form.Label>Slut tidspunkt</Form.Label>
              <Form.Control type="time" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="shiftType">
              <Form.Label>Type</Form.Label>
              <Form.Select aria-label="choose shift type">
                <option value="vikar">Vikar</option>
                <option value="sfo">SFO</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="YardGuard">
                <Form.Check type="checkbox" label="Gårdvagt" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Luk
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Gem
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
