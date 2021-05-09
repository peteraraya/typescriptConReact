import { useEffect, useReducer } from 'react';

// Interface
interface AuthState {
  validando: Boolean;
  token: string | null;
  username: string;
  nombre: string;
}

// InitialState
const initialState: AuthState = {
  validando: true,
  token: null,
  username: "",
  nombre: "",
};

// Types

type LoginPayload = {
  username: string;
  nombre: string;
};

type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

// Reducers
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  // evaluamos los tipos de las acciones
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        nombre: "",
        username: "",
      };
    case "login":
      const { nombre, username } = action.payload;
      return {
        validando: false,
        token: "ABC123",
        nombre,
        username,
      };
    default:
      return state;
  }
};

// La accion es la modifica el state
export const Login = () => {
  const [{ validando, token, nombre }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: "login",
      payload: {
        nombre: "Pedro",
        username: "peternt",
      },
    });
  };

  const logout = () => {
    dispatch({
      type: 'logout',
    })
  }

  if (validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validando...</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>
      {token ? (
        <div className="alert alert-success">
            Autenticado como {nombre} 
        </div>
      ) : (
        <div className="alert alert-danger">No Autenticado</div>
      )}

      {token ? (
        <button 
              className="btn btn-danger ms-3"
              onClick={ logout }
              >
            LogOut</button>
      ) : (
        <button 
              className="btn btn-primary" 
              onClick={login}
              >
          Login
        </button>
      )}
    </>
  );
};
