import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RegisterPage from './Pages/RegisterPage'
import LoginPage from './Pages/LoginPage'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Inicio</h1>}></Route>
        <Route path='/Registrar' element={<RegisterPage/>}></Route>
        <Route path='/Login' element={<LoginPage/>}></Route>
        <Route path='/RegistrerProduct' element={<h1>Registrer Product</h1>}></Route>
        <Route path='/VerProductos' element={<h1>Ver Productos</h1>}></Route>
        <Route path='/ActualizarProducto' element={<h1>Actualizar Producto</h1>}></Route>
        <Route path='/VerProductos/:id' element={<h1>VerProductos Por ID</h1>}></Route>
        

      </Routes>
    </BrowserRouter>
  )
}

export default App
