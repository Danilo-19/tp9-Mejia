import React, { useState } from 'react';

function Reservas() {
  const [habitacionSeleccionada, setHabitacionSeleccionada] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');

  const manejarReserva = (e) => {
    e.preventDefault(); 
    if (!habitacionSeleccionada || !fechaInicio || !fechaFin) {
      alert("Por favor, completa todos los campos para tu reserva.");
      return;
    }
    
    alert(`¡Reserva confirmada!\nHabitación: ${habitacionSeleccionada}\nDesde: ${fechaInicio}\nHasta: ${fechaFin}`);
  };

  const habitaciones = [
    { id: '1', nombre: 'Habitación Simple', precio: '$50/noche' },
    { id: '2', nombre: 'Habitación Doble', precio: '$80/noche' },
    { id: '3', nombre: 'Suite Ejecutiva', precio: '$120/noche' },
    { id: '4', nombre: 'Suite Presidencial', precio: '$200/noche' },
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Realiza tu Reserva</h2>
      
      <form onSubmit={manejarReserva} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <div>
          <label>Selecciona una habitación: </label>
          <select 
            value={habitacionSeleccionada} 
            onChange={(e) => setHabitacionSeleccionada(e.target.value)}
            style={{ padding: '5px' }}
          >
            <option value="">-- Elige una opción --</option>
            {habitaciones.map(hab => (
              <option key={hab.id} value={hab.nombre}>
                {hab.nombre} - {hab.precio}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Fecha de llegada: </label>
          <input 
            type="date" 
            value={fechaInicio} 
            onChange={(e) => setFechaInicio(e.target.value)} 
          />
        </div>

        <div>
          <label>Fecha de salida: </label>
          <input 
            type="date" 
            value={fechaFin} 
            onChange={(e) => setFechaFin(e.target.value)} 
          />
        </div>

        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
          Confirmar Reserva
        </button>

      </form>
    </div>
  );
}

export default Reservas;