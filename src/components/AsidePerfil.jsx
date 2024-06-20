import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function AsideMenu() {
  return (
    <aside className="bg-warning text-center">
      <div>
        <Link to="/perfil" className="text-dark text-decoration-none">
          <h5 className="mb-3">Mis datos</h5>
        </Link>
        <Link to="/mispublicaciones" className="text-dark text-decoration-none">
          <h5 className="mb-3">Mis publicaciones</h5>
        </Link>
        <Link to="/misfavoritos" className="text-dark text-decoration-none">
          <h5 className="mb-5">Mis Favoritos</h5>
        </Link>
        <Link to="/tienda">
          <Button variant="light">Volver a la tienda 🛒</Button>
        </Link>
      </div>
    </aside>
  );
}
