import { useParams } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";
import events from "../data/events.json" ; 


function EventDetails() {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id));

  if (!event) {
    return <h2 className="text-center mt-5">Événement non trouvé</h2>;
  }

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card style={{ width: "30rem" }}>
        <Card.Img variant="top" src={`/images/${event.img}`} alt={event.name} />
        <Card.Body>
          <Card.Title>{event.name}</Card.Title>
          <Card.Text>{event.description}</Card.Text>
          <p>
            <strong>Prix :</strong> {event.price}dt
          </p>
          <p>
            <strong>Tickets disponibles :</strong> {event.nbTickets}
          </p>
          <p>
            <strong>Participants :</strong> {event.nbParticipants}
          </p>

        </Card.Body>
      </Card>
    </Container>
  );
}

export default EventDetails;
