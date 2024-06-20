import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useContext, useState } from "react";

import ContextOrigin from "../Context";
const { Context } = ContextOrigin;

export default function Registrarse() {
  const { setUsers, users, session } = useContext(Context);

  const [user, setUser] = useState({});

  const updateUser = () => {
    const { user_id } = session;
    const userFoundIndex = users.findIndex((u) => u.user_id === user_id);
    users[userFoundIndex] = user;
    setUsers([...users]);
    alert("Datos actualizados con éxito");
  };

  return (
    <div className="bg-light vh-100 pt-5">
      <Form className="w-50 mx-auto border p-3 rounded bg-success text-white ">
        <div>
          <h4>Datos de Perfil</h4>
          <hr />
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            disabled
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
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Avatar URL</Form.Label>
          <Form.Control
            onChange={({ target }) =>
              setUser({ ...user, ["picture"]: target.value })
            }
            type="text"
          />
        </Form.Group>

        <Button variant="warning me-3" onClick={updateUser}>
          Actualizar
        </Button>
      </Form>
    </div>
  );
}
