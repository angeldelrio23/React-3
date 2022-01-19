import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { TitulosTablaJuegos, DatosTablaJuegos } from '../data/DatosJuegos';
class Juegos extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main-site">
        <h1>Juegos</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>{TitulosTablaJuegos.id}</th>
                    <th>{TitulosTablaJuegos.field1}</th>
                    <th>{TitulosTablaJuegos.field2}</th>
                    <th>{TitulosTablaJuegos.field3}</th>
                  </tr>
                </thead>
                <tbody>
                  {DatosTablaJuegos.map((item) => {
                    return (
                      <tr>
                        <td>{item.posicion} </td>
                        <td>{item.nombre} </td>
                        <td>{item.desarroladora} </td>
                        <td>{item.pegi} </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={DatosTablaJuegos[0].imagen} />
                <Card.Body>
                  <Card.Title>{DatosTablaJuegos[0].nombre}</Card.Title>
                  <Card.Text>
                    Desarrolladora: {DatosTablaJuegos[0].desarroladora}
                    <p />
                    {DatosTablaJuegos[0].descripción}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Juegos;
