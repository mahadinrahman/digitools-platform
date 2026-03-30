import React from 'react';

const Rating = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-7'>
            <div className='flex   justify-center   '>
                <div className='border-r-1 border-r-white pr-3 md:pr-20'>
                <h2 className='text-white text-5xl font-bold mb-2'>50K+</h2>
                <p className='text-white md:text-center'>Active Users</p>
            </div>
            <div className='border-r-1 border-r-white pr-3 pl-3 md:pr-20 md:pl-20'>
                <h2 className='text-white text-5xl font-bold mb-2'>200+</h2>
                <p className='text-white md:text-center'>Premium Tools</p>
            </div>
            <div className=' pl-3 md:pl-20'>
                <h2 className='text-white text-5xl font-bold mb-2'>4.9</h2>
                <p className='text-white md:text-center'>Rating</p>
            </div>
            </div>
            
            
        </div>
    );
};

export default Rating;