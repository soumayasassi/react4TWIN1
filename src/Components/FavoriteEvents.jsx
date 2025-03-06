import React from "react";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Event from "./Event";
import useFavoriteStore from "../stores/useFavoriteStore";

export default function FavoriteEvents() {
  const { favoriteEvents } = useFavoriteStore();

  return (

    <div>
        <br></br>
        <h2>⭐ Mes Favoris</h2>
        <br></br>
      {favoriteEvents.length === 0 ? (
        <p variant="info">Aucun événement en favori.</p>
      ) : (
        <Row className="mt-4">
          {favoriteEvents.map((fav) => (
            <Event key={fav.id} event={fav} />
          ))}
        </Row>
      )}
    </div>
  );
}
