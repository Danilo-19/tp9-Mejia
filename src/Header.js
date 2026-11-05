import React from 'react';

function Header({ cambiarPagina }) {
  return (
    <header style={{ backgroundColor: '#282c34', padding: '20px', color: 'white' }}>
      <h1>Hotel React UCASAL</h1>
      <nav>
        <button onClick={() => cambiarPagina('inicio')} style={{ margin: '0 10px' }}>Inicio</button>
        <button onClick={() => cambiarPagina('acerca')} style={{ margin: '0 10px' }}>Acerca de nosotros</button>
        <button onClick={() => cambiarPagina('reservas')} style={{ margin: '0 10px' }}>Reservas</button>
      </nav>
    </header>
  );
}

export default Header;