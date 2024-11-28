import { CDN_URL } from '../utils/constants';
import React from 'react'
import { addItems } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const ItemList = ({ items }) => {

  const dispatch = useDispatch()
const handleItem = (item)=>{
  //Dispatch an action
dispatch(addItems(item))
}

  return (
    <div>

      {items.map(item => (
        <div key={item.card.info.id} className='text-left text-blance border-b-2 p-4 m-2 flex justify-between'>
         
          <div className='w-9/12'>
            <div className=''>
              <span className='font-regular'>{item.card.info.name}</span>
              <span className=''> - ₹{item.card.info.price / 100}</span></div>
            <p className='text-xs text-gray-600 '>{item.card.info.description}</p>
          </div>
          <div className='w-2/12'>
          <div className='absolute bg-black text-white rounded-lg border border-white mx-8'>
            <button onClick={()=>{handleItem(item)}}>Add +</button>
          </div>
          <img src={CDN_URL + item.card.info.imageId} className='w-full rounded-lg' />

          </div>
        </div>
      ))}

      {console.log(items)}
    </div>
  )
}

export default ItemList;