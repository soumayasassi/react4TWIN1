import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Alert, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getallEvents } from "../service/api";

export default function EventDetails() {
  const [event, setEvent] = useState({});
 const navigate= useNavigate() ; 
  const param = useParams() ; 
   
  useEffect(() => {
    const fetchEvent = async ( ) => {
      const eventResult = await getallEvents(param.id);
      setEvent(eventResult.data);
    };
    fetchEvent();
  }, []);
  return (
    <Container style={{ marginTop: "30px" }}>
      {event.id === undefined ? (
        <Alert className="alert alert-danger"> Event Does Not Exist </Alert>
      ) : (
        <Row>
          <Col md={4}>
            <Card.Img
              variant="top"
              src={`/images/${event.img}`}
              alt="Product Img"
              height="300"
            />
          </Col>
          <Col md={8}>
            <Row>
              <Col md={12}>
                <h1>{event.name}</h1>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h5>Description</h5>
              </Col>
              <Col>
                <p style={{ marginLeft: "50px" }}>{event.description}</p>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h5>Price</h5>
              </Col>
              <Col>
                <p style={{ marginLeft: "50px" }}>{event.price} DT</p>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
       <Button
          variant="btn btn-secondary"
          type="reset"
          onClick={() => navigate(-1)}
        >
          Go Back 
        </Button>
    </Container>
  );
}
