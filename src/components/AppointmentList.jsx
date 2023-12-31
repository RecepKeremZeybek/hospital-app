import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { RiDeleteBinLine } from "react-icons/ri";

const AppointmentList = ({ app, setApp }) => {
  const handleDelete = (id) => {
    setApp(app.filter((item) => item.id !== id));
  };
  console.log(app);

  const handleDoubleClick = (id) => {
    setApp(
      app.map((item) =>
        item.id === id ? { ...item, consulted: !item.consulted } : item
      )
    );
  };
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
      {app.length < 1 && <img src="./img/appointment.jpg" alt="" width="70%" />}
      {app.map(({ id, patient, consulted, doctor, day }) => (
        <div
          key={id}
          className={consulted ? "appointments consulted" : "appointments"}
          onDoubleClick={() => handleDoubleClick(id)}
        >
          <Row className="justify-content-between align-items-center">
            <Col xs={12} sm={12} md={6}>
              <h4>{patient}</h4>
              <h5>{doctor}</h5>
            </Col>
            <Col>
              <h5>{day}</h5>
            </Col>
            <Col className="text-end">
              <RiDeleteBinLine
                className="text-danger fs-2"
                type="button"
                onClick={() => handleDelete(id)}
              />
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default AppointmentList;
