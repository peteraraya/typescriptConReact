import { Usuario } from "../interfaces/reqRes.interface";
/// Utilizando hooks
import { useUsuarios } from "../hooks/useUsuarios";

export const Usuarios = () => {
  // utilizando Hooks
  const {
    usuarios,
    paginaSiguiente,
    paginaAnterior,
    numeroPagina,
  } = useUsuarios();

  const renderItem = ({
    id,
    avatar,
    first_name,
    last_name,
    email,
  }: Usuario) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            alt={first_name}
            src={avatar}
            style={{
              width: 35,
              borderRadius: 100,
            }}
          />
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3>Usuarios</h3>
        </div>
        <div className="card-body p-0">
          <table className="table table-striped table-bordered p-0 m-0 text-center">
            <thead>
              <tr className="bg-primary text-light text-uppercase">
                <th>Avatar</th>
                <th>Nombre</th>
                <th>email</th>
              </tr>
            </thead>
            <tbody>{usuarios.map(renderItem)}</tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <div className="card-footer text-center">
          {
            numeroPagina > 1 
            ? (
                <button className="btn btn-secondary mt-2" 
                        onClick={paginaAnterior}
                >
                Anterior
                </button>
            ):(
              null
            )
          }

          <span className="ps-3 pe-3">
            Página <strong>{numeroPagina}</strong>
          </span>
          <button
            className="btn btn-primary mt-2 ms-2 "
            onClick={paginaSiguiente}
          >
            Siguiente
          </button>
        </div>
      </div>
    </>
  );
};
