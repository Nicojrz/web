import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
 

class Application extends React.Component {

  render() {

    return (

      <div>
        <main>
          <article>
            <header> 
              <h2>Aquí en segunda oportunidad, buscamos a tu compañero ideal</h2>
              <p>El siguiente cuestionario es para saber que condiciones tienes para ser un buen amigo para tu mascota!!</p>
            </header>

            <form method="post" action="/api/peticion">
              <section>
                <h2>De ti</h2>
                <h3>Nombre completo:</h3>
                <input type="text" id="nombre" name="nombre"/><br/>
                <h3>Correo de contacto:</h3>
                <input type="email" id="correo" name="correo"/><br/>
                <h3>¿Cuánto espacio tienes para tu mascota?</h3>
                <input type="radio" id="pequeño" name="espacio" value="pequeño"/>
                <label for="pequeño">Pequeño</label><br/>
                <input type="radio" id="mediano" name="espacio" value="mediano"/>
                <label for="mediano">Mediano</label><br/>
                <input type="radio" id="grande" name="espacio" value="grande"/>
                <label for="grande">Grande</label><br/>
              </section>
              
              <section>
                <h2>Mascotas</h2>
                <h3>¿Tienes experiencia con mascotas?</h3>
                <input type="radio" id="si" name="experiencia" value="si"/>
                <label for="si">Sí</label><br/>
                <input type="radio" id="no" name="experiencia" value="no"/>
                <label for="no">No</label><br/>
                <h3>¿Cuánto tiempo puedes dedicarle a tu mascota?</h3> 
                <input type="radio" id="poco" name="tiempo" value="poco"/>
                <label for="poco">3 horas o menos al día</label><br/>
                <input type="radio" id="mucho" name="tiempo" value="mucho"/>
                <label for="mucho">Más de 3 horas al día</label><br/>
                <h3>¿Qué animal prefieres?</h3> 
                <input type="radio" id="gato" name="tipo" value="gato"/>
                <label for="gato">Gato</label><br/>
                <input type="radio" id="perro" name="tipo" value="perro"/>
                <label for="perro">Perro</label><br/>
                <input type="radio" id="conejo" name="tipo" value="conejo"/>
                <label for="conejo">Conejo</label><br/><br/><br/>
              </section>

              <section>
                <button type="submit">Enviar al Servidor</button>
              </section>
            </form>

          </article>

          <aside>
              <h2>¿Por qué adoptar?</h2>
              <p>Al adoptar una mascota, no solo esta dandole un hogar a un animal, si no que también esta ganando un miembro de la familia, un amigo incondicional.</p>
          </aside>
        </main>

        <footer>
          <p>Esta pagina es dedicada a buscar apoyo en la adopcion de mascotas.</p>
          <p>Copyright © 2026</p>
        </footer>
      </div>
    );
  }
}

 
export default Application;

//CODIGO ACTUALIZADO PAREA LA NUEVA VERSION DE REACT
const rootElement = document.getElementById("SegundaOportunidad");
const root = createRoot(rootElement);
root.render(<Application />);

