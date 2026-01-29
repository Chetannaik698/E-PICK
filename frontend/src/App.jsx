import { React } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Collection from './Pages/Collection'
import Contact from './pages/Contact'
import Cart from './Pages/Cart'
import ProductDetails from './pages/ProductDetails'
import Admin from './AdminPage/Admin'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
