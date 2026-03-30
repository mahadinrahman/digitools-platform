import React from 'react';
import Feature from './Feature';

const ProductCards = ({data}) => {
    const {features}=data;
    return (
        <div className=''>
            <div className='shadow-lg rounded-xl p-4 h-full mb-6 mt-5'>
            <p className='p-1 bg-[#E1E7FF] rounded-full text-blue-500 text-center w-25 items-end ml-60'>{data.tag}</p>
            <img src={data.image} alt="image"  />
            <h1 className='text-2xl font-semibold mt-6'>{data.name}</h1>
            <p className='text-gray-500 mt-2 mb-3'>{data.description}</p>
            <p ><span className='text-xl font-semibold'>${data.price}</span>/<span className='text-gray-500'>{data.period}</span></p>
            {
                features.map((feature,index)=><Feature feature={feature} key={index}></Feature>)
            }
            <button className='btn btn-primary w-full rounded-full mt-2 bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>Buy Now</button>
        </div>
        
        </div>
    );
};

export default ProductCards;