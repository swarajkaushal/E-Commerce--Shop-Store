
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigations from "../costumer/components/Navigation/Navigations";
import Homepage from "../costumer/Pages/HomePage/Homepage";
import About from "../Pages/About";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import TearmsCondition from "../Pages/TearmsCondition";
import Contact from "../Pages/Contact";
import Product from "../costumer/components/Product/Product";
import ProductDetails from "../costumer/components/ProductDetails/ProductDetails";
import Cart from "../costumer/components/Cart/Cart";
import AdminPannel from "../Admin/AdminPannel";


const Routers = () => {
  return (
    <div>
        <div>
             <Navigations/>
        </div>
       <div className="">
        <Routes>

        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/home" element={<Homepage/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/privaciy-policy" element={<PrivacyPolicy/>}></Route>
        <Route path="/terms-condition" element={<TearmsCondition/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/men" element={<Product/>}></Route>
        <Route path="/product/:productId" element={<ProductDetails/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      

        <Route path="/admin" element={<AdminPannel/>}></Route>
        {/* <Route path="/demo" element={<DemoAdmin/>}></Route> */}

      </Routes>
       </div>
      
    </div>
  );
};

export default Routers;
