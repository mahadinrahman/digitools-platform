import { CircleDotDashed, Play } from 'lucide-react';
import React from 'react';
import banner from '../assets/banner.png';

const Banner = () => {
    return (
        <div className='max-w-11/12 m-auto mt-10 mb-1 '>
        
        <div className="hero ">
  <div className="hero-content gap:0 md:gap-30  flex-col md:flex-row-reverse ">
    <img
      src={banner} alt='banner'
    className='w-100'/>
    <div className='w-1/2 '>
      <p className='bg-[#E1E7FF] text-[#4F39F6]  flex p-2 rounded-full w-70 gap-2 mb-3 '><CircleDotDashed></CircleDotDashed>
                New: AI Power Tools Available</p> 
                <h2 className='text-4xl md:text-5xl font-bold leading-15'>Supercharge Your<br></br> Digital Workflow</h2>
      <p className="py-6 leading-6 text-gray-600">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary rounded-full mr-3 mb-3 md:mb-0">Explore Products</button>
      <button className="btn btn-primary rounded-full btn-outline"><Play></Play>Watch Demo</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;