import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({selectedCart,selected,setSelected}) => {
      
    const deleteCart=(selectedCart)=>{
        const filterCarts=selected.filter(cart=>cart.name !==selectedCart.name);
        setSelected(filterCarts);
    }
    
    return (
        
           
          <div className='flex justify-between bg-gray-200 p-5 rounded-xl mt-3'>
             <div className='flex gap-3'>
            <img src={selectedCart.image} alt="" className='w-8'/>
            <div >
                <h3 className='text-xl font-semibold'>{selectedCart.name}</h3>
                <p className='text-gray-600 text-lg'>${selectedCart.price}</p>
            </div>
           </div>
           <button onClick={()=>{
            deleteCart(selectedCart);
            toast.warn("Remove From Cart!");
        }
            } className='text-red-500'>Remove</button>
          </div>
          
    );
};

export default Cart;