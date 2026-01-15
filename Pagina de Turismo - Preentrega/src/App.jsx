import { useState, useContext } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Bienvenidos from './pages/Bienvenidos'
import NuestrosTours from './pages/NuestrosTours'
import PreguntasFrecuentes from './pages/PreguntasFrecuentes'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'
import Admin from './pages/Admin'
import DetallesProductos from './components/DetallesProductos'
import Login from './pages/Login'
import RutaProtegida from './auth/RutasProtegidas'
import { CartContext } from './context/CartContext'
import Cart from './components/Cart'
import Success from "./pages/Success";



function App() {
  const { cart, productos, cargando, error, handleAddToCart, handleDeleteFromCart, isAuthenticated } = useContext(CartContext)
  const [showCart, setShowCart] = useState(false)

  const toggleCart = () => setShowCart(prev => !prev)

  return (
    <Router>
      <button 
        onClick={toggleCart} 
        style={{ position: 'fixed', top: 20, right: 20, zIndex: 1000 }}
      >
        🛒 ({cart.reduce((acc, item) => acc + item.cantidad, 0)})
      </button>

      {showCart && (
        <Cart
          cartItems={cart} 
          isOpen={showCart} 
          onClose={toggleCart} 
          borrarProducto={handleDeleteFromCart} 
        />
      )}

      <Routes>
        <Route path='/' element={<Bienvenidos borrarProducto={handleDeleteFromCart} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando} />} />
        <Route path='/nuestrostours' element={<NuestrosTours borrarProducto={handleDeleteFromCart} agregarCarrito={handleAddToCart} cart={cart} productos={productos} cargando={cargando} />} />
        <Route path='/productos/:id' element={<DetallesProductos productos={productos} />} />
        <Route path='/preguntasfrecuentes' element={<PreguntasFrecuentes borrarProducto={handleDeleteFromCart} cart={cart} cargando={cargando} />} />
        <Route path='/contacto' element={<Contacto borrarProducto={handleDeleteFromCart} cart={cart} cargando={cargando} />} />
        <Route path="/success" element={<Success />} />
        <Route path='/admin' element={<RutaProtegida isAuthenticated={isAuthenticated}> <Admin /> </RutaProtegida>} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
        
      </Routes>
    </Router>
  )
}

export default App
