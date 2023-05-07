import { Card, Col, Container, Form, Row, Table } from "react-bootstrap";
import { Cash, HourglassSplit } from "react-bootstrap-icons";

export default function DashboardPage() {
  return (
    <div className="dashboard">
      <Container>
        <div className="dashboard-content">
          <div className="dashboard-content-title">
            <h1>Overblik</h1>
            <Col lg="6" className="dashboard-selectors">
              <Col lg="6">
                <Form.Select size="lg">
                  <option>20. dec {"->"} 20. jan</option>
                  <option value="1">20. jan {"->"} 20. feb</option>
                  <option value="2">20. feb {"->"} 20. mar</option>
                  <option value="3">20. mar {"->"} 20. apr</option>
                  <option value="4">20. apr {"->"} 20. maj</option>
                  <option value="5">20. maj {"->"} 20. jun</option>
                  <option value="6">20. jun {"->"} 20. jul</option>
                  <option value="7">20. jul {"->"} 20. aug</option>
                  <option value="8">20. aug {"->"} 20. sep</option>
                  <option value="9">20. sep {"->"} 20. okt</option>
                  <option value="10">20. okt {"->"} 20. nov</option>
                  <option value="11">20. nov {"->"} 20. dec</option>
                </Form.Select>
              </Col>
              <Col lg="2">
                <Form.Select size="lg">
                  <option value="1">2022</option>
                  <option value="2">2023</option>
                </Form.Select>
              </Col>
            </Col>
          </div>

          <hr />

          <Row className="g-4">
            <Col lg="6">
              <Card>
                <Card.Body>
                  <div className="card-content">
                    <div className="card-text">
                      <h3>0</h3>
                      <p>Timer i perioden</p>
                    </div>
                    <div className="card-icon">
                      <HourglassSplit />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Card.Body>
                  <div className="card-content">
                    <div className="card-text">
                      <h3>0,-</h3>
                      <p>I løn (før skat) i perioden</p>
                    </div>
                    <div className="card-icon">
                      <Cash />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Card className="mt-4">
            <Card.Header>Vagter i perioden</Card.Header>
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
    </div>
  );
}
