import React from 'react';
import facebook from "../assets/Facebook-Icon-PNG.png";
import twitter from "../assets/Twitter-X-Logo-PNG.png";
import insta from "../assets/sllmnhx-instagram-6338393_1920.png";

const Footer = () => {
    return (
        <div className='bg-[#101727] text-white p-10 '>
            <div className='max-w-11/12 mx-auto'>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-7 border-b-1 border-gray-400 pb-10'>
               <div>
                  <h2 className='text-2xl font-bold mb-4'>DigiTools</h2>
                  <p className='text-gray-400'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
               </div>
               <div>
                 <h2 className=' font-medium mb-4'>Product</h2>
                 <p className='text-gray-400 mb-1' >Features</p>
                 <p className='text-gray-400 mb-1'>Pricing</p>
                 <p className='text-gray-400 mb-1'>Templates</p>
                 <p className='text-gray-400'>Integrations</p>
               </div>
               <div>
                 <h2 className=' font-medium mb-4'>Company</h2>
                 <p className='text-gray-400 mb-1'>About</p>
                 <p className='text-gray-400 mb-1'>Careers</p>
                 <p className='text-gray-400 mb-1'>Blog</p>
                 <p className='text-gray-400'>Press</p>
               </div>
               <div>
                 <h2 className=' font-medium mb-4'>Resources</h2>
                 <p className='text-gray-400 mb-1'>Documentation</p>
                 <p className='text-gray-400 mb-1'>Community</p>
                 <p className='text-gray-400 mb-1'>Help Center</p>
                 <p className='text-gray-400'>Contact</p>
               </div>
               <div>
                  <h2 className=' font-medium mb-4'>Social Links</h2>
                  <div className='flex gap-3'>
                    <img src={facebook} alt="Facebook" className='w-7 h-7 ' />
                  <img src={twitter} alt="Twitter" className='w-7 h-7 bg-white rounded-full p-1' />
                  <img src={insta} alt="Instagram" className='w-7 h-7 rounded-full' />
                  </div>

               </div>
            </div>
            <div className='md:flex justify-between'>
                <p className=' text-gray-400 mt-10'>© 2024 DigiTools. All rights reserved.</p>
               <div className='flex gap-5 text-gray-400 mt-10'>
                <p>Privacy policy</p>
                <p>Terms of service</p>
                <p>Cookies</p>
               </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;