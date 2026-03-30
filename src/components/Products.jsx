import React, { use } from 'react';
import ProductCards from './ProductCards';

const Products = ({cardPromise}) => {
    const datas=use(cardPromise);
    
      
    return (
        <div className='max-w-11/12 mx-auto mt-13'>
            <div className='flex justify-center mb-10'>
                <div >
                <h2 className='text-center text-4xl font-bold mb-2'>Premium digital Tools</h2>
                <p className='text-center text-gray-600 mb-4  '>Choose from our curated collection of premium digital products designed<br></br>to boost your productivity and creativity.</p>
           
           
            <div className='flex justify-center'>
                <button  className='btn btn-primary btn-outline rounded-r-none rounded-2xl'>Products</button>
            <button className='btn btn-primary btn-outline rounded-l-none rounded-2xl'>Carts(0)</button>
            </div>
             </div>
            </div>
            <div className='grid grid-cols-3 gap-5 mb-8'>
                {
                datas.map((data,index)=> <ProductCards data={data} key={index}></ProductCards>)
            }
            
            </div>
        </div>
    );
};

export default Products;