import React, { useState } from 'react';
import Header from './Header';
import Inicio from './Inicio';
import Acerca from './Acerca';
import Reservas from './Reservas';
import './App.css'; // Asegúrate de tener este archivo o ajusta los estilos a tu gusto

function App() {
  const [paginaActual, setPaginaActual] = useState('inicio');

  const renderizarPagina = () => {
    switch (paginaActual) {
      case 'inicio':
        return <Inicio />;
      case 'acerca':
        return <Acerca />;
      case 'reservas':
        return <Reservas />;
      default:
        return <Inicio />;
    }
  };

  return (
    <div className="App">
      <Header cambiarPagina={setPaginaActual} />
      <div className="contenido-principal">
        {renderizarPagina()}
      </div>
    </div>
  );
}

export default App;