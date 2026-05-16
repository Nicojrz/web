import React, {Component} from 'react';
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
 import "./styles.css";


class Application extends React.Component {

  render() {
    return (
      <div className='background'>
      <div className='form-container'>
        
        <div className='columns-container'>
          <h2 className='headers'>Datos Generales</h2>
          <canvas id="miCanvas"  className='miCanvas'></canvas>
        
          <table className='table'>
          <tr className='row'>
            <td className='labels'>Nombre:</td>
            <td><input type="text" className= 'inputs' /></td>
            <td className='labels'>Apellidos:</td>
            <td><input type="text" className='inputs' /></td>
          </tr>
          <tr className='row'>
            <td className='labels'>Correo:</td>
            <td><input type="text" className='inputs' /></td>
            <td className='labels'>Telefono:</td>
            <td><input type="number" className='inputs' /></td>
          </tr>
        </table>
        <canvas id="miCanvas" className='miCanvas'></canvas>
        
        <h2>Itinerario del viaje</h2>
        
        <table className='table'>
          <tr className='row'>
            <td className='labels'>Fecha de salida:</td>
            <td><input type="date" className='inputs' /></td> 
            <td className='labels'>Fecha de regreso:</td>
            <td> <input type="date" className='inputs' /></td>
          </tr>
          <tr>
            <td className='labels'>Destino:</td>
            <td><input type="text" className='inputs' /></td>
            <td className='labels'>Medio de transporte:</td>
            <td className='labels'><select name="transporte" id="transporte">
                  <option value="avion">Avión</option>
                  <option value="autobus">Autobús</option>
                  <option value="tren">Tren</option>
                  <option value="barco">Barco</option>
                </select></td>
          </tr>
        <br />
        <canvas id="miCanvas" className='miCanvas'></canvas>
        </table>
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
        </div>
        <div className='columns-container'>
        <h2>Imagenes y videos de nuestros viajes organizados</h2>
        <table className='galery'>
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
        </table>
        <audio controls>
          <source src="audio.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <br />
        <canvas id="miCanvas" className='miCanvas'></canvas>
       
        <h2>ubicanos en:</h2>
        <div className='map-container'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.860089118849!2d-99.14889792405678!3d19.50465433837438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f94c06d75fd7%3A0x3fe1567da2190ac9!2sESCOM%20-%20Escuela%20Superior%20de%20C%C3%B3mputo%20-%20IPN!5e0!3m2!1ses-419!2smx!4v1778777547169!5m2!1ses-419!2smx" width="100%"     // Puedes usar 100% para que sea responsivo
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
}

 
export default Application;

//CODIGO ACTUALIZADO PAREA LA NUEVA VERSION DE REACT
const rootElement = document.getElementById("Viajes");
const root = createRoot(rootElement);
root.render(<Application />);

