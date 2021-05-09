import { useEffect, useRef, useState } from "react";
import { Usuario, ReqResListado } from "../interfaces/reqRes.interface";
import { reqResApi } from "../api/reqRes";

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const paginaRef = useRef(1);

  let numeroPagina = paginaRef.current;

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    // llamado a api
    const resp = await reqResApi.get<ReqResListado>('/users', {
      params: {
        page: paginaRef.current, // con current envío el valor
      },
    });
    // validación
    if (resp.data.data.length > 0) {
      setUsuarios(resp.data.data);
    } else {
      alert('No hay más registros');
    }
  };

  const paginaSiguiente = () => {
    paginaRef.current++;
    cargarUsuarios();
  };

  const paginaAnterior = () => {
    if ( paginaRef.current > 1 ) {
        paginaRef.current--;
        cargarUsuarios();
    }
  };

  return {
    usuarios,
    paginaSiguiente,
    paginaAnterior,
    numeroPagina,
  };
};
