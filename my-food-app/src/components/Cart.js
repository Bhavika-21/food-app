import { clearCart, removeItems } from '../utils/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

import ItemList from './ItemList';
import React from 'react'

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch()
  const handleClearCart = () => {
    dispatch(clearCart())
  }
  const handleRemoveCart = () => {
    dispatch(removeItems())
  }
  return (
    <div className='text-center m-10 p-7'>
      <h1 className='font-semibold text-2xl'>{cartItems.length ===0?  "Looks like you're cart is empty 😓":"You're Food Cart🛒" }</h1>

      <div className='w-7/12 m-auto' >
        < button
          className='bg-black text-white border px-3 rounded-lg my-3'
          onClick={handleClearCart}

        > Clear Cart</button>
        < button
          className='bg-black text-white border px-3 rounded-lg my-3'
          onClick={handleRemoveCart}

        > Remove Item</button>
      
          <ItemList items={cartItems} />
        

        
      </div>
    </div>
  )
}

export default Cart