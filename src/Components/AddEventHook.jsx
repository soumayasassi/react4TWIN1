import React from "react";
import { useForm } from "react-hook-form";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addEvent } from "../service/api";
import { EventSchema } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
function AddEvent() {
 
  const Form = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(EventSchema),
    });
  }

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const eventData = {
      name: data.name,
      description: data.description,
      price: data.price,
      nbTickets: data.nbTickets,
      img: data.img[0] ? data.img[0].name : null,  
    };
    
    const res = await addEvent(eventData);
    if (res.status === 201) {
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
            style={{
              border: "2px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
              width: "100%",
            }}
            register={register}
            error={errors.name}
            
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            name="description"
            style={{
              border: "2px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
              width: "100%",
            }}
            register={register}
            error={errors.description}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            style={{
              border: "2px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
              width: "100%",
            }}
            register={register}
              error={errors.price}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Number of Tickets</Form.Label>
          <Form.Control
            type="number"
            name="nbTickets"
            style={{
              border: "2px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
              width: "100%",
            }}
            register={register}
              error={errors.nbTickets}
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
            register={register}
            error={errors.img}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add an Event
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

export default AddEvent;