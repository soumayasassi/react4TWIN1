import React from "react";
import { useForm } from "react-hook-form";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { editEvent, getallEvents } from "../service/api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function UpdateEvent() {
  const param = useParams();
  const [eventItem, setEventItem] = useState({
    name: "",
    description: "",
    img: "",
    price: 0,
    nbTickets: 0,
    nbParticipants: 0,
    like: false,
  });
  useEffect(() => {
    const fetchEvent = async () => {
      const eventResult = await getallEvents(param.id);
      setEventItem(eventResult.data);
    };
    fetchEvent();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: eventItem,
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const eventData = {
      name: data.name,
      description: data.description,
      price: data.price,
      nbTickets: data.nbTickets,
      img: data.img[0] ? data.img[0].name : null,
    };

    const eventResult = await editEvent(param.id, eventItem);
    if (eventResult.status === 200) {
      navigate("/events/list");
    }
  };

  return (
    <Container style={{ marginTop: "30px" }}>
      <h2>Add a new Event to your Event List</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter a Name"
            value={eventItem.name}
            style={{
              border: "2px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
              width: "100%",
            }}
            {...register("name")}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            value={eventItem.description}
            name="description"
            style={{
              border: "2px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
              width: "100%",
            }}
            {...register("description")}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={eventItem.price}
            style={{
              border: "2px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
              width: "100%",
            }}
            {...register("price")}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Number of Tickets</Form.Label>
          <Form.Control
            type="number"
            name="nbTickets"
            value={eventItem.nbTickets}
            style={{
              border: "2px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
              width: "100%",
            }}
            {...register("nbTickets")}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            name="img"
            style={{
              border: "2px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
              width: "100%",
            }}
            {...register("img")}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update Event
        </Button>

        <Button
          variant="btn btn-secondary"
          type="reset"
          onClick={() => {
            reset();
            navigate("/events/add");
          }}
        >
          Cancel
        </Button>
      </Form>
    </Container>
  );
}

export default UpdateEvent;
