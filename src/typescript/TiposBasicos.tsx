
export const TiposBasicos = () => {
  // Beneficiis TS

  let nombre:string | number = 'Pedro';
  // mutaciones dependiendo el tipo --> nombre = 123;

  const apellido:string = 'Araya';

  const edad:number = 34;

  const estaActivo:boolean = true;

  const poderes:string[] = ['Velocidad','Volar','Respirar bajo el agua'];

  const poderes2:any[] = [1,'2', true];
  
  return (
    <>
      <h3>Tipos básicos</h3>
      { nombre } {apellido} tiene {edad} años
      <br />

      { (estaActivo) ? 'activo': 'no está activo' }
      <br />

      { poderes.join(', ')}
      <br />

      { poderes2.join(', ')}



      
    </>
  )
}
