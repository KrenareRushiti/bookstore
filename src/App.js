import Home from "./Pages/Home.js";
import Layout from "./Pages/Layout.js";
import Contact from "./Pages/Contact.js";
import AboutUs from "./Pages/AboutUs.js";
import NotFound from "./Pages/NotFound.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pages/My-sass.scss';
import Categories from "./Pages/Categories.js";
import Quotes from "./Pages/Quotes.js";
import Shopping from "./Pages/Shopping Card.js";
import { useState} from "react";

function App () {
  const [cart, setCart] = useState([]);
 
  const addtoCart = (book) => {
      setCart ([...cart,book]);
  };

  return (
    <BrowserRouter>
      <Routes>
          <Route path = "/" element = {<Layout/>}>
            <Route index element={<Home addtoCart={addtoCart}/>}/>
            <Route path="Contact" element={<Contact/>}/>
            <Route path="AboutUs" element = {<AboutUs/>}/>
            <Route path="Categories" element = {<Categories addtoCart={addtoCart}/>}/>
            <Route path="Quotes" element = {<Quotes/>}/>
            <Route path="ShoppingCard" element = {<Shopping cart={cart}/>}/>
            </Route>
            <Route path = "*" element = {<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
} 

export  default App;
    
