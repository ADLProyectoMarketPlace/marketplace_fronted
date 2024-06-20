import { createContext, useState, useEffect } from "react";

const Context = createContext(null);

function Provider({ children }) {
  const [users, setUsers] = useState([]);
  const [session, setSession] = useState(null);

  const [publicaciones, setPublicaciones] = useState([]);
  useEffect(() => {
    fetch("./publicaciones.json")
      .then((res) => res.json())
      .then((data) => {
        setPublicaciones(data);
      });
  }, [0]);

  const state = {
    users,
    setUsers,
    session,
    setSession,
    publicaciones,
    setPublicaciones
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
}

export default { Provider, Context };
