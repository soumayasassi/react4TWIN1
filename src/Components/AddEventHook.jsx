import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useEventStore from "../stores/useEventStore";
import { schema } from "../schema";

function AddEvent() {
  const { addEvent } = useEventStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
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

    await addEvent(eventData);
    navigate("/events/list");
  };

  return (
    <Container style={{ marginTop: "30px" }}>
      <h2>Add a new Event to your Event List</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter a Name" {...register("name")} />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter description" {...register("description")} />
          {errors.description && <p style={{ color: "red" }}>{errors.description.message}</p>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" {...register("price", { valueAsNumber: true })} />
          {errors.price && <p style={{ color: "red" }}>{errors.price.message}</p>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Number of Tickets</Form.Label>
          <Form.Control type="number" {...register("nbTickets", { valueAsNumber: true })} />
          {errors.nbTickets && <p style={{ color: "red" }}>{errors.nbTickets.message}</p>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" {...register("img")} />
          {errors.img && <p style={{ color: "red" }}>{errors.img.message}</p>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Add an Event
        </Button>

        <Button
          variant="secondary"
          type="reset"
          onClick={() => {
            reset();
            navigate("/events/add");
          }}
          style={{ marginLeft: "10px" }}
        >
          Cancel
        </Button>
      </Form>
    </Container>
  );
}

export default AddEvent;
