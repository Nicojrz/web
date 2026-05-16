import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function Datos() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetch('/api/datos')
      .then(res => res.json())
      .then(json => {
        if (mounted) setData(json);
      })
      .catch(err => {
        console.error(err);
        if (mounted) setData(null);
      })
      .finally(() => mounted && setLoading(false));
    return () => { mounted = false };
  }, []);

  if (loading) return <div className='background'><div className='form-container'><p>Cargando datos...</p></div></div>;

  if (!data) return <div className='background'><div className='form-container'><p>No hay datos disponibles.</p></div></div>;

  return (
    <div className='background'>
      <div className='form-container'>
        <div className='columns-container'>
          <h2>Datos del viaje</h2>
          <canvas id="miCanvas" className='miCanvas'></canvas>
          <table className='table'>
            <tbody>
              <tr className='row'>
                <td className='labels'>Nombre:</td>
                <td className='inputs'>{data.nombre || '-'}</td>
                <td className='labels'>Apellidos:</td>
                <td className='inputs'>{data.apellidos || '-'}</td>
              </tr>
              <tr className='row'>
                <td className='labels'>Correo:</td>
                <td className='inputs'>{data.correo || '-'}</td>
                <td className='labels'>Telefono:</td>
                <td className='inputs'>{data.telefono || '-'}</td>
              </tr>
              <tr className='row'>
                <td className='labels'>Fecha de salida:</td>
                <td className='inputs'>{data.fechaSalida || '-'}</td>
                <td className='labels'>Fecha de regreso:</td>
                <td className='inputs'>{data.fechaRegreso || '-'}</td>
              </tr>
              <tr className='row'>
                <td className='labels'>Destino:</td>
                <td className='inputs'>{data.destino || '-'}</td>
                <td className='labels'>Transporte:</td>
                <td className='inputs'>{data.transporte || '-'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Datos;

const rootElement = document.getElementById('Datos');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<Datos />);
}
