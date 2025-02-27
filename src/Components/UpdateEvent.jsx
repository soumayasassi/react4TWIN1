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
    <></>
  );
}

export default UpdateEvent;
