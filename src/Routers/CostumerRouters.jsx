import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../costumer/Pages/HomePage/Homepage'
import Cart from '../costumer/components/Cart/Cart'
import Navigations from '../costumer/components/Navigation/Navigations'
import Footer from '../costumer/components/Footer/Footer'
import Product from '../costumer/components/Product/Product'
import ProductDetails from '../costumer/components/ProductDetails/ProductDetails'
import Checkout from '../costumer/components/Checkout/Checkout'
import Order from '../costumer/components/Orders/Order'
import OrderDetail from '../costumer/components/Orders/OrderDetail'
import PaymentSuccess from '../costumer/components/Payment/PaymentSuccess'
import RateProduct from '../costumer/components/Product/RateProduct'
import About from '../Pages/About'
import PrivacyPolicy from '../Pages/PrivacyPolicy'
import TearmsCondition from '../Pages/TearmsCondition'
import Contact from '../Pages/Contact'
import NotFound from '../Pages/Notfound'
const CostumerRouters = () => {
  return (
    <div>
      <div>
        <Navigations />
      </div>
      <Routes>
        <Route path='/login' element={<Homepage />}></Route>
        <Route path='/register' element={<Homepage />}></Route>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product />}></Route>
        <Route path='/product/:productId' element={<ProductDetails />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/account/order' element={<Order />}></Route>
        <Route path="/account/rate/:productId" element={<RateProduct />}></Route>
        <Route path='/account/order/:orderId' element={<OrderDetail />}></Route>
        <Route path='/payment/:orderId' element={<PaymentSuccess />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/privaciy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/terms-condition" element={<TearmsCondition />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/*" element={<NotFound />}></Route>



        {/* <Checkout/> */}
        {/* <Order/> */}
        {/* <OrderDetail/> */}
        {/* <OrderCard/> */}
        {/* <HomeSectionCard/> */}
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default CostumerRouters
