// Interfaz Principal
interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direcion;
}
// Interfaz secundarias
interface Direcion {
  pais: string;
  calle: string;
  numero: number;
}

export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: "Pedro",
    edad: 34,
    direccion: {
      pais: "Chile",
      calle: "Antoni Gaudí",
      numero: 1128,
    },
  };

  return (
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>
          {JSON.stringify(persona, null, 2)}
        </pre>
      </code>
    </>
  );
};
