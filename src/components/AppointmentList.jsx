import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {RiDeleteBinLine} from "react-icons/ri"

const AppointmentList = ({ app }) => {
  console.log(app);
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
      {app.map(({ id, patient, consulted, doctor, day }) => (
        <div key={id} className={consulted ? "appointments consulted": "appointments"}>
          <Row>
            <Col>
              <h4>{patient}</h4>
              <h5>{doctor}</h5>
            </Col>
            <Col>{day}</Col>
            <Col><RiDeleteBinLine className="text-danger fs-2"/></Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default AppointmentList;
