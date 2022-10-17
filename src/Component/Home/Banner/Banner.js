import React from 'react';
import './Banner.css'
import img from '../../../images/tiger.jpg'

const Banner = () => {
    return (
     <div className='w-full min-h-screen md:flex'>
       <div className='md:w-2/4 sm:order-1 order-0 h-screen md:p-10 p-6 flex items-center'>
          <div className='space-y-5'>
              <h2 className='xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-serif text-semibold text-white '>
                    Welcome to <span className='text-purple-600'>Settyl</span> API
              </h2>
              <p className='text-white font-serif xl:text-lg text-base  xl:px-2 lg:pr-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident explicabo labore rem quae quibusdam aliquam perferendis veritatis optio adipisci!
              </p>
              <input type="text" placeholder='search...' className='px-5 xl:py-1 lg:py-[2px] w-2/4 min-w-[200px] rounded-full placeholder:text-slate-500 font-serif placeholder:font-semibold lg:text-base  outline-none border-2 border-purple-600 bg-white/90'  />
          </div>
       </div>
       <div className='md:w-2/4 sm:order-0 order-2  h-screen lg:p-16 md:p-10 p-6 flex items-center justify-center'>
           <img src={img} className='w-full h-full' alt="" />
       </div>
     </div>
    );
};

export default Banner;