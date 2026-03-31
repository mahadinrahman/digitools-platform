import React from 'react';

const Nav = ({selected}) => {
    return (
        <div className=''>
            <div className="navbar max-w-11/12 m-auto mt-1 mb-1">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
         
                <p>Products</p>
                <p>Features</p>
                <p>Pricing</p>
                <p>Testimonials</p>
                <p>FAQ</p>
               
      </ul>
    </div>
    <h2 className='font-bold text-3xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h2>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1">
      <div className='flex gap-5 pt-2'>
                <p>Products</p>
                <p>Features</p>
                <p>Pricing</p>
                <p>Testimonials</p>
                <p>FAQ</p>
               </div>
    </ul>
  </div>
  <div className="navbar-end">
     <div className='flex gap-3'>
                   <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                    <span className="badge badge-sm indicator-item">{selected.length}</span>
                    </div>
                    </div>
                <button>Login</button>
                <button className='btn rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white'>Get Started</button>
               </div>
  </div>
</div>
        </div>
    );
};

export default Nav;