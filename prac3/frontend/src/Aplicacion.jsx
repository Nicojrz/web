import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import "./styles.css";

function Application() {
  const [form, setForm] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    telefono: '',
    fechaSalida: '',
    fechaRegreso: '',
    destino: '',
    transporte: 'avion'
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      // Backend redirects to /datos.html; navigate there after successful submit
      window.location.href = '/datos.html';
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <div className='background'>
      <div className='form-container'>
        <div className='columns-container'>
          <h2 className='headers'>Datos Generales</h2>
          <canvas id="miCanvas"  className='miCanvas'></canvas>

          <form onSubmit={handleSubmit}>
            <table className='table'>
              <tbody>
                <tr className='row'>
                  <td className='labels'>Nombre:</td>
                  <td><input name="nombre" value={form.nombre} onChange={handleChange} type="text" className='inputs' /></td>
                  <td className='labels'>Apellidos:</td>
                  <td><input name="apellidos" value={form.apellidos} onChange={handleChange} type="text" className='inputs' /></td>
                </tr>
                <tr className='row'>
                  <td className='labels'>Correo:</td>
                  <td><input name="correo" value={form.correo} onChange={handleChange} type="email" className='inputs' /></td>
                  <td className='labels'>Telefono:</td>
                  <td><input name="telefono" value={form.telefono} onChange={handleChange} type="tel" className='inputs' /></td>
                </tr>
              </tbody>
            </table>

            <canvas id="miCanvas" className='miCanvas'></canvas>

            <h2>Itinerario del viaje</h2>

            <table className='table'>
              <tbody>
                <tr className='row'>
                  <td className='labels'>Fecha de salida:</td>
                  <td><input name="fechaSalida" value={form.fechaSalida} onChange={handleChange} type="date" className='inputs' /></td>
                  <td className='labels'>Fecha de regreso:</td>
                  <td><input name="fechaRegreso" value={form.fechaRegreso} onChange={handleChange} type="date" className='inputs' /></td>
                </tr>
                <tr>
                  <td className='labels'>Destino:</td>
                  <td><input name="destino" value={form.destino} onChange={handleChange} type="text" className='inputs' /></td>
                  <td className='labels'>Medio de transporte:</td>
                  <td className='labels'>
                    <select name="transporte" value={form.transporte} onChange={handleChange} id="transporte">
                      <option value="avion">Avión</option>
                      <option value="autobus">Autobús</option>
                      <option value="tren">Tren</option>
                      <option value="barco">Barco</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>

            <br />
            <canvas id="miCanvas" className='miCanvas'></canvas>

            <h3>Requisitos del Viaje</h3>
            <canvas id="miCanvas" className='miCanvas'></canvas>
            <ul>
              <li>Identificación oficial o pasaporte</li>
              <li>Boleto</li>
            </ul>
            <ol>
              <li>Llegar 2 horas antes</li>
              <li>Documentar equipaje</li>
            </ol>

            <canvas id="miCanvas" className='miCanvas'></canvas>
            <h2>Uso y condiciones</h2>
            <pre style = {{backgroundColor: '#7ca8d1', padding: '15px', whiteSpace: 'pre-wrap', frontFamily: 'Arial'}}>
{`Bienvenido a nuestra agencia de viajes.
Al utilizar nuestros servicios, aceptas los siguientes términos y condiciones:

1. Reservas: Todas las reservas están sujetas a disponibilidad.
2. Cancelaciones: Deben realizarse al menos 48 horas antes.
3. Responsabilidad: No nos hacemos responsables por pérdidas o daños.
4. Cambios: Nos reservamos el derecho de realizar ajustes al itinerario.`}
            </pre>

            <button type="submit" style={{ padding: '10px 20px', marginTop: '10px' }}>Enviar registro</button>
            {status === 'sending' && <span style={{marginLeft:10}}>Enviando...</span>}
            {status === 'error' && <span style={{color:'red', marginLeft:10}}>Error al enviar</span>}
          </form>
        </div>

        <div className='columns-container'>
          <h2>Imagenes y videos de nuestros viajes organizados</h2>
          <table className='galery'>
            <tbody>
              <tr>
                <td><img src= 'viaje.jpg' alt='Organigrama'  /></td>
                <td><img src= 'images.jpg' alt='Carretera'  /></td>
              </tr>
              <tr>
                <td><img src= 'mobile.jpg' alt='Lago'  /></td>
                <td><video  controls>
                  <source src='video.mp4' type="video/mp4" />
                    Your browser does not support the video tag.
                </video></td>
              </tr>
            </tbody>
          </table>
          <audio controls>
            <source src="audio.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <br />
          <canvas id="miCanvas" className='miCanvas'></canvas>

          <h2>ubicanos en:</h2>
          <div className='map-container'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.860089118849!2d-99.14889792405678!3d19.50465433837438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f94c06d75fd7%3A0x3fe1567da2190ac9!2sESCOM%20-%20Escuela%20Superior%20de%20C%C3%B3mputo%20-%20IPN!5e0!3m2!1ses-419!2smx!4v1778777547169!5m2!1ses-419!2smx" width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Application;
const rootElement = document.getElementById("Viajes");
const root = createRoot(rootElement);
root.render(<Application />);

