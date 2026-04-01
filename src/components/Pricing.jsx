import { Check } from 'lucide-react';
import React from 'react';

const Pricing = () => {
    return (
        <div className='max-w-11/12 mx-auto mt-13 mb-20'>
            <h1 className='text-4xl font-bold text-center mb-5'>Simple, Transparent Pricing</h1>
            <p className='text-lg text-gray-600 text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-7 mt-7'>
                <div className='bg-[#F2F2F2]/20 shadow-xl p-5 rounded-xl'>
                <h2 className='text-2xl font-bold mb-1'>Starter</h2>
                <p className='text-gray-600 mb-4'>Perfect for getting started</p>
                <p className='text-2xl font-semibold mb-3'>$0<span className='text-lg text-gray-600'>/month</span></p>
                <p className='flex gap-2'><Check className='text-green-500'></Check>Access to 10 free tools</p>
                <p className='flex gap-2'><Check className='text-green-500'></Check>Basic templates</p>
                <p className='flex gap-2'><Check className='text-green-500'></Check>Community support</p>
                <p className='flex gap-2'><Check className='text-green-500'></Check>1 project per month</p>
                <div className='mt-11'>
                    <button className='btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white w-full mt-6 rounded-full '>Get Started Free</button>
                </div>
            </div>
                <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] shadow-xl p-5 rounded-xl'>
                    
              <div className='flex'>
                <h2 className='text-2xl text-white font-bold mb-1'>Pro</h2>
                <p className='text-red-600 bg-amber-100 text-center rounded-full w-30 p-1 relative bottom-10 left-17'>Most Popular</p>
              </div>
                <p className=' mb-4 text-white'>Best for professionals</p>
                <p className='text-2xl font-semibold mb-3 text-white'>$29<span className='text-lg '>/month</span></p>
                <p className='flex gap-2 text-white'><Check className='text-white'></Check>Access to all premium tools</p>
                <p className='flex gap-2 text-white'><Check className='text-white'></Check>Unlimited templates</p>
                <p className='flex gap-2 text-white'><Check className='text-white'></Check>Priority support</p>
                <p className='flex gap-2 text-white'><Check className='text-white'></Check>Unlimited projects</p>
                <p className='flex gap-2 text-white'><Check className='text-white'></Check>Cloud sync</p>
                <p className='flex gap-2 text-white'><Check className='text-white'></Check>Advanced analytics</p>
               
                    <button className='btn  bg-white text-blue-500 w-full mt-6 rounded-full mb-6'>Start Pro Trial</button>
               
            </div>
                <div className='bg-[#F2F2F2]/20 shadow-xl p-5 rounded-xl'>
                <h2 className='text-2xl font-bold mb-1'>Enterprise</h2>
                <p className='text-gray-600 mb-4'>For teams and businesses</p>
                <p className='text-2xl font-semibold mb-3'>$99<span className='text-lg text-gray-600'>/month</span></p>
                <p className='flex gap-2'><Check className='text-green-500'></Check>Everything in pro</p>
                <p className='flex gap-2'><Check className='text-green-500'></Check>Team Collaboration</p>
                <p className='flex gap-2'><Check className='text-green-500'></Check>Custom integration</p>
                <p className='flex gap-2'><Check className='text-green-500'></Check>Dedicated support</p>
                <p className='flex gap-2'><Check className='text-green-500'></Check>SLA guarantee</p>
                <p className='flex gap-2'><Check className='text-green-500'></Check>Custom branding</p>
                <button className='btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white w-full mt-6 rounded-full mb-6'>Contact Sales</button>
            </div>
            </div>
        </div>
    );
};

export default Pricing;