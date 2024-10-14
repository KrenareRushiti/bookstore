import Home from "./Pages/Home.js";
import Layout from "./Pages/Layout.js";
import Contact from "./Pages/Contact.js";
import AboutUs from "./Pages/AboutUs.js";
import NotFound from "./Pages/NotFound.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './My-sass.scss';
import Categories from "./Pages/Categories.js";
import Quotes from "./Pages/Quotes.js";


function App () {
  return (
    <BrowserRouter>
      <Routes>
          <Route path = "/" element = {<Layout/>}>
            <Route index element = {<Home/>}/>
            <Route path = "Contact" element = {<Contact/>}/>
            <Route path = "AboutUs" element = {<AboutUs/>}/>
            <Route path = "Categories" element = {<Categories/>}/>
            <Route path = "Quotes" element = {<Quotes/>}/>
            </Route>
            <Route path = "*" element = {<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
} 

export  default App;
    
