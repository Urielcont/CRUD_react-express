import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage'
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from "./protectedroute.jsx";


import RegisterProducts from './Pages/RegisterProducts';
import RegisterProvedor from './Pages/RegisterProvedor';
import MostrarProductosPage from './Pages/VerProductos.jsx';
function App() {
  return (
   <AuthProvider>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Inicio</h1>}></Route>
        <Route path='/Registrar' element={<RegisterPage/>}></Route>
        <Route path='/Login' element={<LoginPage/>}></Route>
        <Route path='/ActualizarProducto' element={<h1>Actualizar Producto</h1>}></Route>
        <Route path='/VerProductos/:id' element={<h1>VerProductos Por ID</h1>}></Route>
        {/* Ruta para Registrar provedores */}
        <Route path='/RegistrarProvedor' element={<RegisterProvedor/>}></Route> 
        <Route element={<ProtectedRoute />}>
        <Route path='/RegistrarProducto' element={<RegisterProducts/>}></Route>
        <Route path='/VerProductos' element={<MostrarProductosPage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
   </AuthProvider>
  )
}

export default App
