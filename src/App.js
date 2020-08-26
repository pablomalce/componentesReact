import React, { Fragment, useState } from 'react';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Producto from './componentes/Producto';
import Carrito from './componentes/Carrito';

function App() {

// crear listado de productos 
const [ productos, guardarProductos ] = useState([
  { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
  { id: 2, nombre: 'Camisa VueJS', precio: 40 },
  { id: 3, nombre: 'Camisa NodeJS', precio: 30 },
  { id: 4, nombre: 'Camisa AngularJS', precio: 20 },
]);

//state para un carrito de compras 
const [  carrito, agregarProducto ] = useState([]);

    //Obetener feccha
    const fecha = new Date().getFullYear();

  return (
    <Fragment>
     <Header 
     titulo='Tienda Virtual'
     />

     <h1>Lista de Productos</h1>
     {productos.map(producto => (
        <Producto 
          key={producto.id}
          producto={producto}
          carrito={carrito}
          productos={productos}
          agregarProducto={agregarProducto}
        />
     ))}

     <Carrito 
        carrito={carrito}
        agregarProducto={agregarProducto}
     />
        
     <Footer 
     fecha={fecha}/>
    </Fragment>
  );
}

export default App;
