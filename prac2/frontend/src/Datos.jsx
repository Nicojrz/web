import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

const espacioLabel = { pequeño: "Pequeño", mediano: "Mediano", grande: "Grande" };
const tiempoLabel = { poco: "3 horas o menos al día", mucho: "Más de 3 horas al día" };
const tipoLabel = { gato: "Gato", perro: "Perro", conejo: "Conejo" };

class Datos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: null,
            error: null
        };
    }

    componentDidMount() {
        this.cargarDatos();
    }

    async cargarDatos() {
        try {
            const res = await fetch("/api/datos");
            if (!res.ok) throw new Error(`Error del servidor: ${res.status}`);
            const datos = await res.json();
            this.setState({ datos });
        } catch (e) {
            this.setState({ error: e.message });
        }
    }

    render() {
        const { datos, error } = this.state;

        if (error) return <p>Error al cargar los datos: {error}</p>;
        if (!datos)  return <p>Cargando...</p>;

        return (
            <div>
                <main>
                    <article>
                        <header>
                            <h2>Resumen de tu solicitud de adopción</h2>
                            <p>Gracias por completar el cuestionario. Aquí está la información que nos proporcionaste:</p>
                        </header>

                        <section>
                            <h2>De ti</h2>
                            <h3>Nombre completo:</h3>
                            <p>{datos.nombre}</p>
                            <h3>Correo de contacto:</h3>
                            <p>{datos.correo}</p>
                            <h3>Espacio disponible para la mascota:</h3>
                            <p>{espacioLabel[datos.espacio]}</p>
                        </section>

                        <section>
                            <h2>Mascotas</h2>
                            <h3>¿Tiene experiencia con mascotas?</h3>
                            <p>{datos.experiencia === "si" ? "Sí" : "No"}</p>
                            <h3>Tiempo que puede dedicarle a su mascota:</h3>
                            <p>{tiempoLabel[datos.tiempo]}</p>
                            <h3>Animal preferido:</h3>
                            <p>{tipoLabel[datos.tipo]}</p>
                        </section>

                        <section>
                            <a href="index.html">Volver al formulario</a>
                        </section>
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

export default Datos;
const rootElement = document.getElementById("Datos");
const root = createRoot(rootElement);
root.render(<Datos />);