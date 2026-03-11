import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Products from './pages/products/Products'
import Cart from './pages/cart/Cart'
import MainLayout from './layout/MainLayout'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route element={<MainLayout/>}>
        <Route path='/home' element={<Home/>}/>
      <Route path='/products'  element={<Products/>}/>
      <Route path='/cart'  element={<Cart/>}/>
      </Route>
      


    </Routes>
    </BrowserRouter>

    
  )


 

}

export default App
