import './App.css';
import React from 'react';
//import Producto from './Componentes/Producto';
//import { Container, Row } from 'reactstrap';
import CrearProducto from './Componentes/CrearProducto';
import { BrowserRouter as Router, Route} from  'react-router-dom';
import ListarProductos from './Componentes/ListarProductos';
import Navegacion from './Componentes/Navegacion';
import Principal from './Componentes/Principal';
import CrearUsuario from './Componentes/CrearUsuario';



class App extends React.Component {
  render() {
    return (
      <Router>
        <Navegacion />
        <Route path="/crear" component =  {CrearProducto} />
        <Route path="/listar" component = {ListarProductos} />
        <Route path="/" exact component = {Principal} />
        <Route path="/crearUsuario" component = {CrearUsuario} />
     
      </Router>
    );
  }
  
}



export default App;
