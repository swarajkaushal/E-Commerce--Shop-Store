import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'
const ProductCard = ({product}) => {
    
    const navigate =useNavigate();
    const handleNavigate=()=>{
        navigate(`/product/${product?.id}`)
      }
    return (
        <div onClick={handleNavigate} className='ProductCard w-[15rem] m-3 transition-all cursor-pointer'>
            <div className='h-[20rem]'>
                <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt='' />

            </div>
            <div className='textpart bg-white p-3'>
                <div>
                    <p className='font-bold opacity-50  '>{product.brand}</p>
                    <p>{product.title}</p>

                </div>
                <div className='flex items-center space-x-3'>
                    <p className='font-semibold '>₹{product.discountedPrice}</p>
                    <p className='opacity-50 line-through'>₹{product.price}</p>
                    <p className='text-green-500  opacity-80'>{product.discountPersent}% off</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
