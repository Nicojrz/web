import React from 'react';
import { createRoot } from 'react-dom/client';

class Application extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
           
        };
    }

  render() {
    return (
      <div>
        <h1>Formulario tienda</h1>
        <form method="post" action="http://localhost:8080/api/regalo">
          <fieldset>
            <legend>Datos generales</legend>
            <label for="compra">Nombre del comprador:</label>
            <input type="text" id="compra" name="nombreComprador" required /><br />
            <label for="destino">Nombre del destinatario:</label>
            <input type="text" id="destino" name="nombreDestinatario" required /><br />
            <label for="correo">Correo electrónico:</label>
            <input type="email" id="correo" name="correo" required /><br />
            <label for="telefono">Teléfono de contacto:</label>
            <input type="tel" id="telefono" name="telefono" required /><br />
          </fieldset>
          <fieldset>
            <legend>El mejor regalo para esa persona especial</legend>
            <label for="regalo">Aquí la selección de nuestros artículos</label>
            <select id="regalo" name="articuloRegalo">
              <optgroup label="Tecnología">
                <option value="celular">Samsung Galaxy</option>
                <option value="audifonos">Airpods</option>
                <option value="consola">Playstation 5</option>
                <option value="television">Televisión 4K</option>
              </optgroup>
              <optgroup label="Peliculas">
                <option value="Lector">Lector Blueray</option>
                <option value="proyector">Proyector láser</option>
                <option value="sonido">Sistema de sonido envolvente</option>
              </optgroup>
            </select>
            <label for="decoracion">¿Qué decoración quieres para el regalo?</label>
            <input list="decoracion" id="decoracion" name="decoracionCaja" />
            <datalist id="decoracion">
              <option value="Globos" />
              <option value="Cintas" />
              <option value="Confeti" />
              <option value="Luces" />
            </datalist>
          </fieldset>
          <fieldset>
            <legend>¿Desea agregar un mensaje para esa persona especial?</legend>
            <label for="nota">Mensaje dedicado:</label>
            <textarea id="nota" name="mensajePersonalizado" rows="2"></textarea>
            <label>
              <input type="checkbox" name="envioRapido" value="si" /> ¿Envío prioritario?
            </label>
          </fieldset>
          <br />
          <button type="submit">Enviar al Servidor</button>
        </form>
      </div>
    );
  }
}

export default Application;
const rootElement = document.getElementById("contenedor");
const root = createRoot(rootElement);
root.render(<Application />);