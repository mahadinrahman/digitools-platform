import React from 'react';
import user from "../assets/user.png";
import  Package from "../assets/package.png";
import rocket from "../assets/rocket.png";

const GetStarted = () => {
    return (
        <div className='mt-25 bg-[#F9FAFC]'>
            <div className='max-w-11/12 mx-auto p-10'>
                <h2 className='text-center text-5xl font-bold pt-4'>Get Started in 3 Steps</h2>
            <p className='text-center text-gray-600 mt-3'>Start using premium digital tools in minutes, not hours.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-13 gap-5'>
                <div className='bg-white shadow-2xl rounded-lg p-5'>
                    <p className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-7 h-7 text-center items-center text-white ml-65'>01</p>
                    <img src={user} alt="" className='bg-[#4F39F6]/10 rounded-full p-1 w-17 h-17 mt-10  mx-auto '/>
                    <h3 className='text-2xl font-semibold text-center mt-7'>Create Account</h3>
                    <p className='text-lg text-gray-600 text-center mt-3 mb-10'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='bg-white shadow-2xl rounded-lg p-5'>
                    <p className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-7 h-7 text-center items-center text-white ml-65'>02</p>
                    <img src={Package} alt="" className='bg-[#4F39F6]/10 rounded-full p-1 w-17 h-17 mt-10  mx-auto '/>
                    <h3 className='text-2xl font-semibold text-center mt-7'>Choose Products</h3>
                    <p className='text-lg text-gray-600 text-center mt-3 mb-10'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className='bg-white shadow-2xl rounded-lg p-5'>
                    <p className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-7 h-7 text-center items-center text-white ml-65'>03</p>
                    <img src={rocket} alt="" className='bg-[#4F39F6]/10 rounded-full p-1 w-17 h-17 mt-10  mx-auto '/>
                    <h3 className='text-2xl font-semibold text-center mt-7'>Start Creating</h3>
                    <p className='text-lg text-gray-600 text-center mt-3 mb-10'>Download and start using your premium  tools immediately.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default GetStarted;