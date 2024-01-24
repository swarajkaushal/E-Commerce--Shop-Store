import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getOrderById } from '../../../State/Coutumers/Orders/Action'
import { useLocation, useNavigate } from 'react-router-dom'
import { createPayment } from '../../../State/Coutumers/Payment/Action'

const OrderSummary = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  const { order } = useSelector(state => state)

  console.log("orderId ", order.order)

  useEffect(() => {
    dispatch(getOrderById(orderId))
  }, [orderId])

  const handleCreatePayment = () => {
    // const data = { orderId: order.order?.id }
    dispatch(createPayment(orderId))
  }
  return (
    <div>
      <div className="p-4 shadow-lg rounded-md border ">
        <AddressCard address={order.order?.shippingAddress} />
      </div>
      <div className='py-4'>
        <div className="lg:grid grid-cols-3 relative">
          <div className="lg:col-span-2 lg:px-5 bg-white">
            <div className=" space-y-3">
              {order.order?.orderItems.map((item) => (

                <CartItem item={item} showButton={false} />
              ))}
            </div>
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
            <div className="border p-5 bg-white shadow-lg rounded-md">
              <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
              <hr />

              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black ">
                  <span>Price {order.order?.totalItem} </span>
                  <span>₹{order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-green-700">-₹{order.order?.discounte}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="text-green-700">Free</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span className="text-green-700">₹{order.order?.totalDiscountedPrice}</span>
                </div>
              </div>

              <Button

                variant="contained"
                type="submit"
                sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
                onClick={handleCreatePayment}
              >
                Payment now
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default OrderSummary