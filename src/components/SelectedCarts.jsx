import React from 'react';
import Cart from './Cart';
import { toast } from 'react-toastify';
import { TriangleAlert } from 'lucide-react';

const SelectedCarts = ({selected,setSelected}) => {

    const totalPrice=selected.reduce((sum,item)=>sum + item.price,0);

    const checkOut=()=>{
      setSelected([]) ; 
    }

    return (
        <div>
            <div className='border-2 rounded-xl border-gray-300 p-6 mb-6'>
            <h1 className='text-3xl font-bold'>Your Cart</h1>
           {
            selected.length===0?
            <div className='bg-gray-100 rounded-xl p-8 mt-5'>
              <h3 className='text-3xl font-bold text-center'>No Carts Availavle</h3>
              <p className='text-lg font-semibold text-center text-gray-500 mt-3 mb-4'>Please Select a Cart</p>
              <TriangleAlert className='mx-auto mb-4 '></TriangleAlert>
            </div>
            : selected.map((selectedCart,index)=><Cart key={index} selectedCart={selectedCart} selected={selected} setSelected={setSelected}></Cart>)
           }
           <div className='flex justify-between mt-2 mb-3'>
            <p className='text-lg text-gray-600'>Total</p>
            <p className='text-xl pr-2'>${totalPrice}</p>
            </div>
            <button onClick={()=>{checkOut();
              toast.info("Proceed To Checkout!");
            }
            } 
            className='btn w-full rounded-full text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>Proceed To Checkout</button>
        </div>
        </div>
    );
};

export default SelectedCarts;