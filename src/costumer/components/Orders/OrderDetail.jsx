import React from 'react'
import { Box, Button, Grid, Typography } from "@mui/material";
import AddressCard from '../AddressCard/AddressCard'
import OrderTraker from './OrderTracker'
import StarIcon from "@mui/icons-material/Star";
import { deepOrange, deepPurple } from '@mui/material/colors';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getOrderById } from '../../../State/Coutumers/Orders/Action';
import { useNavigate, useParams } from "react-router-dom";


const OrderDetail = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { orderId } = useParams();
  const { order } = useSelector((store) => store);

  console.log("order", order.order);

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, []);

  const navigate = useNavigate();



  return (
    // <div className='px-2 lg:px-36 space-y-7 '>
    // <div>
    //     <h1 className='font-bold py-7 text-xl'>Deleviry Address</h1>
    //     <AddressCard/>
    // </div>
    // <div className='py-20'>
    //     <OrderTraker activeStep={3}/>
    // </div>
    //   <Grid container className="space-y-5">
    //   {[1,1,1,1,1].map((item)=>
    //     <Grid  container
    //         item
    //         className="shadow-xl rounded-md p-5 border"
    //         sx={{ alignItems: "center", justifyContent: "space-between" }}>
    //         <Grid item xs={6}>
    //         <div className="flex  items-center ">
    //             <img
    //               className="w-[5rem] h-[5rem] object-cover object-top"
    //               src=""
    //               alt="image"
    //             />
    //             <div className="ml-5 space-y-2">
    //               <p className="">Title</p>
    //               <p className="opacity-50 text-xs font-semibold space-x-5">
    //                 <span>Color: pink</span> <span>Size: M</span>
    //               </p>
    //               <p>Seller: Brand</p>
    //               <p>₹2000 </p>
    //             </div>
    //           </div>
    //         </Grid>
    //         <Grid item>
            
    //             <Box  sx={{ color:deepPurple[500]}} className="flex items-center cursor-pointer">
    //             <StarIcon
    //                 sx={{ fontSize: "2rem" }}
    //                 className="px-2 text-5xl"
    //               />
    //               <span>Rate & Review Product</span>
    //             </Box>
              
    //         </Grid>
    //     </Grid>
    //     )}
    //   </Grid>
    // </div>
    <div className=" px-2 lg:px-36 space-y-7 ">
      <Grid container className="p-3 shadow-lg">
        <Grid xs={12}>
          <p className="font-bold text-lg py-2">Delivery Address</p>
        </Grid>
        <Grid item xs={6}>
          <AddressCard address={order.order?.shippingAddress} />
        </Grid>
      </Grid>
      <Box className="p-5 shadow-lg border rounded-md">
        <Grid
          container
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Grid item xs={9}>
            <OrderTraker
              activeStep={
                order.order?.orderStatus === "PLACED"
                  ? 1
                  : order.order?.orderStatus === "CONFIRMED"
                  ? 2
                  : order.order?.orderStatus === "SHIPPED"
                  ? 3
                  : 5
              }
            />
          </Grid>
          <Grid item>
           {order.order?.orderStatus==="DELIVERED" && <Button sx={{ color: ""}} color="error" variant="text" >
              RETURN
            </Button>}

            {order.order?.orderStatus!=="DELIVERED" && <Button sx={{ color: deepPurple[500] }} variant="text">
              cancel order
            </Button>}
          </Grid>
        </Grid>
      </Box>

    

      <Grid container className="space-y-5">
        {order.order?.orderItems.map((item) => (
          <Grid
            container
            item
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              {" "}
              <div className="flex  items-center ">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src={item?.product.imageUrl}
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p className="">{item.product.title}</p>
                  <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: pink</span> <span>Size: {item.size}</span>
                  </p>
                  <p>Seller: {item.product.brand}</p>
                  <p>₹{item.price} </p>
                </div>
              </div>
            </Grid>
            <Grid item>
              {
                <Box
                  sx={{ color: deepPurple[500] }}
                  onClick={() => navigate(`/account/rate/${item.product.id}`)}
                  className="flex items-center cursor-pointer"
                >
                  <StarIcon
                    sx={{ fontSize: "2rem" }}
                    className="px-2 text-5xl"
                  />
                  <span>Rate & Review Product</span>
                </Box>
              }
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default OrderDetail
