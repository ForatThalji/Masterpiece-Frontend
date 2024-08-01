

import './App.css';
import Header from './assets/Header.jsx';
import Home from './pages/Home/Home.jsx';
import Footer from './assets/Footer.jsx';
import Test from './pages/TestSkin/Test.jsx';
import Reg from './pages/Reg/Reg.jsx';
import Login from './pages/Login/Login.jsx'
import TestSkin from './pages/TestSkin/TestSkin.jsx';
import Contact from './pages/Contact/Contact.jsx'
import Products from './pages/Products/Products.jsx';
import Search from './pages/Search/Search.jsx';
import ProdDetails from './pages/ProdDetails/ProdDetails.jsx';
import Cart from'./pages/Cart/Cart.jsx';
import Checkout from './pages/Checkout/Checkout.jsx';
import About from './pages/About/About.jsx';
import Appointment from './pages/Consultation/Appointment.jsx';
import Consuult1 from './pages/Consultation/Consuult1.jsx';
import Services from './pages/Services/Services.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {


  return (
    <>
<BrowserRouter>
    <Header/>
      <div className='root'> 
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Reg" element={<Reg />}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="/Products" element={<Products />}/>
      <Route path="/TestSkin" element={<TestSkin />}/>
      <Route path="/Search" element={<Search />}/>
      <Route path="/Test" element={<Test />}/>
      <Route path="/Services" element={<Services />}/>
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/Search" element={<Search />}/>
      <Route path="/Cart" element={<Cart />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/Appointment" element={<Appointment />}/>
      <Route path="/Checkout" element={<Checkout />}/>
      <Route path="/Consuult1" element={<Consuult1 />}/>
      <Route path="/ProdDetails" element={<ProdDetails />}/>
    
          {/* <Reg /> */}
          {/* <Login />
          <Products />
          <TestSkin />
          <Test />
          <Search /> */}
   
       </Routes>
     
       </div>  <Footer />
</BrowserRouter>

      
    </>
  )
}

export default App

