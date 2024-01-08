import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CardComponent({ item }) {
  console.log(item);
  return (
    <>
      <Link
        to={`/city/${item.city}/${item.country}/${item.lat}/${item.lon}/${item.id}`}
      >
        <Card
          style={{
            width: "18rem",
            display: "inline-block",
            backgroundColor: "lightgray",
            marginRight: '.5rem',
            backgroundColor: '#5a6a7a',
            color: 'white'
          }}
        >
          <Card.Body>
            <Card.Title>{item.city}</Card.Title>
            <Card.Text>{item.country}</Card.Text>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
}
