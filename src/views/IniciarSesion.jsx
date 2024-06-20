import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useContext, useState } from "react";

import ContextOrigin from "../Context";
const { Context } = ContextOrigin;

export default function IniciarSesion() {
  const { setSession, users } = useContext(Context);

  const [user, setUser] = useState({});

  const navigate = useNavigate();
  const addUser = async () => {
    const url =
      "https://marketplace-bxnnxromp-adlmarketplaces-projects.vercel.app/login";
    const { data: userExists } = await axios.post(url, user);

    if (userExists) {
      setSession(user);
      alert("Usuario identificado con éxito");
      navigate("/tienda");
    } else {
      alert("Email o contraseña incorrecta");
    }
  };

  return (
    <div className="bg-light vh-100 pt-5">
      <Form className="w-50 mx-auto border p-3 rounded bg-warning ">
        <div>
          <h4>Market Place</h4>
          <h6>Iniciar sesión</h6>
          <hr />
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={({ target }) =>
              setUser({ ...user, ["email"]: target.value })
            }
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={({ target }) =>
              setUser({ ...user, ["password"]: target.value })
            }
            type="password"
            placeholder="******"
          />
        </Form.Group>

        <Button variant="success me-3" onClick={addUser}>
          Iniciar Sesión
        </Button>
        <Link to="/" className="text-decoration-none text-dark">
          <Button variant="light">Volver</Button>
        </Link>
      </Form>
    </div>
  );
}
