import { useForm } from '../hooks/useForm';

export const Formularios = () => {

  const {formulario, email, password, onChanges } = useForm({
      email:'test@test.com',
      password:'123456'
  }); 

  return (
    <>
      <h3>Formularios</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={ email }
        onChange = { ({target}) => onChanges( target.value , 'email')}
      >
      </input>
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Password"
        value={ password }
        onChange = { ({target}) => onChanges( target.value , 'password')}
      >
      </input>

      <code>
        <pre>
          {
            JSON.stringify( formulario, null, 2 )
          }
        </pre>
      </code>
    </>
  )
}
