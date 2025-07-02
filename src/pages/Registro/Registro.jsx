import useRegistro from './useRegistro';
import './Registro.css';

const Registro = () => {
  const { mensajeError, registrarUsuario } = useRegistro();

  const manejarEnvio = (e) => {
    e.preventDefault();

    const datosFormulario = {
      username: e.target.first_name.value + " " + e.target.last_name.value,
      password: e.target.password.value,
      email: e.target.email.value,
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      billing: {
        first_name: e.target.first_name.value,
        last_name: e.target.last_name.value,
        address_1: e.target.address.value,
        city: e.target.city.value,
        postcode: e.target.postcode.value,
        state: e.target.state.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
      }
    };

    registrarUsuario(datosFormulario);
  };

  return (
    <div className='registroContainer'>
      <form className='registroFormulario' onSubmit={manejarEnvio}>
        <h1>Registro de usuario</h1>
        {mensajeError && <p className="mensajeError">{mensajeError}</p>}
        <div className='registrocampo'>
          <label htmlFor='first_name'>Nombre</label>
          <input className='registroInput' type='text' name='first_name' />
        </div>
        <div className='registrocampo'>
          <label htmlFor='last_name'>Apellidos</label>
          <input className='registroInput' type='text' name='last_name' />
        </div>
        <div className='registrocampo'>
          <label htmlFor='email'>Correo electrónico</label>
          <input className='registroInput' type='email' name='email' />
        </div>
        <div className='registrocampo'>
          <label htmlFor='password'>Contraseña</label>
          <input className='registroInput' type='password' name='password' />
        </div>
        <div className='registrocampo'>
          <label htmlFor='phone'>Teléfono</label>
          <input className='registroInput' type='number' name='phone' required />
        </div>
        <div className='registrocampo'>
          <label htmlFor='address'>Calle</label>
          <input className='registroInput' type='text' name='address' required />
        </div>
        <div className='registrocampo'>
          <label htmlFor='city'>Ciudad</label>
          <input className='registroInput' type='text' name='city' />
        </div>
        <div className="registrocampo">
          <label htmlFor="state">Provincia</label>
          <input className='registroInput' type='text' name='state' required />
        </div>
        <div className="registrocampo">
          <label htmlFor="postcode">Código postal</label>
          <input className='registroInput' type='number' name='postcode' required />
        </div>
        <input className='registroBoton' type='submit' value='Registro' />
      </form>
    </div>
  );
};

export default Registro;
