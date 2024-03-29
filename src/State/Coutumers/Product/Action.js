import { api } from "../../../config/apiConfig";
import { FIND_PRODUCTS_BY_CATEGORY_FAILURE, FIND_PRODUCTS_BY_CATEGORY_REQUEST, FIND_PRODUCTS_BY_CATEGORY_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
    const {
        colors,
        sizes,
        minPrice,
        maxPrice,
        minDiscount,
        category,
        stock,
        sort,
        pageNumber,
        pageSize,
    } = reqData;
    
    dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_REQUEST });
    try {
        const { data } = await api.get(
            `/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
        );

        console.log("get product by category - ", data);
        dispatch({
            type: FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: FIND_PRODUCTS_BY_CATEGORY_FAILURE,
            payload: error.message
               
        });
    }
};
export const findProductById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST }); 
  const {productId} = reqData;
  console.log("product id",productId)
    try {
      const { data } = await api.get(`/api/products/id/${productId}`);
      console.log("products data by  id : ", data);
      dispatch({
        type: FIND_PRODUCT_BY_ID_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FIND_PRODUCT_BY_ID_FAILURE,
        payload:error.message
      });
    }
  };