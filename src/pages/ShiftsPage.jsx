import { Button, Card, Container, Table } from "react-bootstrap";
import { PlusCircleFill } from "react-bootstrap-icons";
import AddShiftModal from "../components/AddShiftModal";
import { useState } from "react";

export default function ShiftsPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="shifts">
      <Container>
        <div className="shifts-content">
          <div className="shifts-content-title">
            <h1>Vagter</h1>
            <Button onClick={handleShow}>
              <PlusCircleFill /> Tilføj vagt
            </Button>
          </div>
          <hr />

          <Card>
            <Card.Body>
              <Table striped responsive>
                <thead>
                  <tr>
                    <th>Dato</th>
                    <th>Timer</th>
                    <th>Type</th>
                    <th>Gårdvagt</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>4. maj</td>
                    <td>3.0</td>
                    <td>Vikar</td>
                    <td>Ja</td>
                  </tr>
                  <tr>
                    <td>4. maj</td>
                    <td>3.0</td>
                    <td>Vikar</td>
                    <td>Nej</td>
                  </tr>
                  <tr>
                    <td>4. maj</td>
                    <td>3.0</td>
                    <td>SFO</td>
                    <td>Ja</td>
                  </tr>
                  <tr>
                    <td>4. maj</td>
                    <td>3.0</td>
                    <td>Vikar</td>
                    <td>Ja</td>
                  </tr>
                  <tr>
                    <td>4. maj</td>
                    <td>3.0</td>
                    <td>Vikar</td>
                    <td>Ja</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
      </Container>

      <AddShiftModal show={show} handleClose={handleClose} />
    </div>
  );
}
