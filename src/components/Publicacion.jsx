import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Publicacion({
  publicacion: { title, description, img, price, user },
}) {
  return (
    <Card className="p-3">
      <Card.Img
        variant="top"
        src={img}
        style={{ height: "270px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="fw-bold">{description}</Card.Text>
        <Card.Text>Precio: {price}</Card.Text>
        <div class="d-flex justify-content-between">
          <Card.Text>Publicado por : {user}</Card.Text>
          <Button variant="secondary">♥</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
