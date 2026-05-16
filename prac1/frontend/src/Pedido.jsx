import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

class Pedido extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pedido: null
        };
    }

    componentDidMount() {
        this.cargarPedido();
    }

    async cargarPedido() {
        const res = await fetch("/api/pedido");
        const pedido = await res.json();
        this.setState({ pedido });
    }

    render() {
        const { pedido } = this.state;
        return (
            <div>
                <h1>Último pedido</h1>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Comprador</th>
                            <th>Destinatario</th>
                            <th>Correo</th>
                            <th>Teléfono</th>
                            <th>Artículo</th>
                            <th>Decoración</th>
                            <th>Mensaje</th>
                            <th>Envío rápido</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pedido ? (
                            <tr>
                                <td>{pedido.nombreComprador}</td>
                                <td>{pedido.nombreDestinatario}</td>
                                <td>{pedido.correo}</td>
                                <td>{pedido.telefono}</td>
                                <td>{pedido.articuloRegalo}</td>
                                <td>{pedido.decoracionCaja}</td>
                                <td>{pedido.mensajePersonalizado}</td>
                                <td>{pedido.envioRapido}</td>
                            </tr>
                        ) : (
                            <tr>
                                <td colSpan="8">No hay pedidos aún</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Pedido;
const rootElement = document.getElementById("tabla");
const root = createRoot(rootElement);
root.render(<Pedido />);
