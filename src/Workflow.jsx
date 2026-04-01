import React from 'react';

const Workflow = () => {
    return (
       <div className='  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] mt-16'>
         <div className=' p-13  max-w-11/12 mx-auto'>
            <h3 className='text-center text-4xl font-bold text-white'>Ready To Transform Your Workflow?</h3>
            <p className='text-center text-gray-600 mt-2.5 mb-3 text-white'>Join thousands of professionals who are already using Digitools to work smarter.<br></br>Start your free trial today.</p>
            <div className='flex gap-1 justify-center'>
                <button className='btn bg-white text-blue-500 rounded-full'>Explore Products</button>
            <br></br>
            <button className='btn bg-white text-blue-500 rounded-full'>View Pricing</button>
            </div>
            <p className='text-center text-gray-500 mt-4 text-white'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
       </div>
    );
};

export default Workflow;