
import { api } from '../../../config/apiConfig';
import {
    
    CREATE_PAYMENT_SUCCESS,
    CREATE_PAYMENT_FAILURE,
    UPDATE_PAYMENT_REQUEST,
    UPDATE_PAYMENT_SUCCESS,
    UPDATE_PAYMENT_FAILURE,
    CREATE_PAYMENT_REQUEST,
  } from './ActionType';
  
 
  
  export const createPayment = (orderId) => async (dispatch) => {
    dispatch({
        type: CREATE_PAYMENT_REQUEST,
      });
    console.log("create payment reqData ",orderId)
    try {
      const { data } = await api.post(`/api/payments/${orderId}`,{});
  console.log("datta",data)
  if(data.payment_link_url){
    window.location.href=data.payment_link_url;
  }
      dispatch({
        type: CREATE_PAYMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_PAYMENT_FAILURE,
        payload
          : error.message,
      });
    }
  };
  



  export const updatePayment = (reqData) => {
    return async (dispatch) => {
      console.log("update payment reqData ",reqData)
      dispatch(UPDATE_PAYMENT_REQUEST());
      try {
       
        const response = await api.get(`/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`);
        console.log("updated data",response.data)
        dispatch(UPDATE_PAYMENT_SUCCESS(response.data));
      } catch (error) {
        dispatch(UPDATE_PAYMENT_FAILURE(error.message));
      }
    };
  };

// export const updatePaymentRequest = () => {
//   return {
//     type: UPDATE_PAYMENT_REQUEST,
//   };
// };

// export const updatePaymentSuccess = (payment) => {
//   return {
//     type: UPDATE_PAYMENT_SUCCESS,
//     payload: payment,
//   };
// };

// export const updatePaymentFailure = (error) => {
//   return {
//     type: UPDATE_PAYMENT_FAILURE,
//     payload: error,
//   };
// };

 
  