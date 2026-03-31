import React, { use, useState } from 'react';
import ProductCards from './ProductCards';
import SelectedCarts from './SelectedCarts';

const Products = ({cardPromise,selected,setSelected}) => {
    const datas=use(cardPromise);

    const [isSelected,setIsSelected]=useState(true);
    
    
      
    return (
        <div className='max-w-11/12 mx-auto mt-13'>
            <div className='flex justify-center mb-10'>
                <div >
                <h2 className='text-center text-4xl font-bold mb-2'>Premium digital Tools</h2>
                <p className='text-center text-gray-600 mb-4  '>Choose from our curated collection of premium digital products designed<br></br>to boost your productivity and creativity.</p>
           
           
            <div className='flex justify-center'>
                <button onClick={()=>setIsSelected(true)} className={`btn ${isSelected==true?"btn-primary" :""}  rounded-r-none rounded-2xl`}>Products</button>
            <button onClick={()=>setIsSelected(false)} className={`btn ${isSelected==false?"btn-primary" :""}  rounded-l-none rounded-2xl`}>Carts ({selected.length})</button>
            </div>
             </div>
            </div>
            <div className={isSelected? "grid grid-cols-1 md:grid-cols-3 gap-5 mb-8" :"block mt-5"}>
                {
                isSelected==true ? datas.map((data,index)=> <ProductCards data={data} key={index} selected={selected} setSelected={setSelected}></ProductCards>):<SelectedCarts selected={selected} setSelected={setSelected}></SelectedCarts>
            }
            
            </div>
        </div>
    );
};

export default Products;