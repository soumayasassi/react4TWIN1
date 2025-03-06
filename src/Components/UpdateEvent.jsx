import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import useEventStore from "../stores/useEventStore";
import { schema } from "../schema";

function UpdateEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { events, fetchEvents, editEvent } = useEventStore();
  
  const event = events.find((e) => e.id === id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (!event) {
      fetchEvents();
    } else {
      reset(event);
    }
  }, [event, fetchEvents, reset]);

  const onSubmit = async (data) => {
    const updatedEvent = {
      name: data.name,
      description: data.description,
      price: data.price,
      nbTickets: data.nbTickets,
      img: data.img && data.img[0] ? data.img[0].name : event?.img,
    };

    await editEvent(id, updatedEvent);
    navigate("/events/list");
  };

  if (!event) return <p>Loading...</p>;

  return (
    <Container style={{ marginTop: "30px" }}>
      <h2>Update Event</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" {...register("name")} />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} {...register("description")} />
          {errors.description && (
            <p style={{ color: "red" }}>{errors.description.message}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" {...register("price", { valueAsNumber: true })} />
          {errors.price && (
            <p style={{ color: "red" }}>{errors.price.message}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Number of Tickets</Form.Label>
          <Form.Control type="number" {...register("nbTickets", { valueAsNumber: true })} />
          {errors.nbTickets && (
            <p style={{ color: "red" }}>{errors.nbTickets.message}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" {...register("img")} />
          {errors.img && <p style={{ color: "red" }}>{errors.img.message}</p>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Update Event
        </Button>
        <Button
          variant="secondary"
          onClick={() => navigate("/events/list")}
          style={{ marginLeft: "10px" }}
        >
          Cancel
        </Button>
      </Form>
    </Container>
  );
}

export default UpdateEvent;
