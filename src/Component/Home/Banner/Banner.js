import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
     <div className='w-full min-h-[500px] md:max-h-[550px] h-fit flex md:flex-row flex-col '>
        {/* ---------- text div ------------- */}
       <div className='md:w-3/5 sm:order-first order-last md:p-10 p-6 flex items-center'>
          <div className='space-y-5'>
              <h2 className='xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-serif text-semibold text-white uppercase'>
                    Welcome to <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>Settyl</span> API
              </h2>
              <p className='text-white font-serif xl:text-lg text-base  xl:px-2 lg:pr-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident explicabo labore rem quae quibusdam aliquam perferendis veritatis optio adipisci!
              </p>
                 <button className='navLinkStyle'>
                  <Link to='/createEmployee'>create api</Link>
                 </button>
          </div>
       </div>
       {/* ---------- img div ----------- */}
       <div className='md:w-2/5 sm:order-last order-first p-5 flex items-center justify-center'>
           <img src='https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-1/305616377_101465389390529_2009171116005346258_n.png?stp=c106.0.320.320a_dst-png_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=c6021c&_nc_eui2=AeGSZngBjBFTysSo6AAxaay5W7Ckba-ZGMBbsKRtr5kYwFYw-yt95zPD6zoB6lMrZNEhf0wBITyJ3_bLCRK9TIK5&_nc_ohc=kIJpkLY05O0AX_rQAY1&_nc_ht=scontent.fdac80-1.fna&oh=00_AT-lqddFm_5Wx3lt4EKl9xMU8n8gt8yX3hnLwN5ldZSMjQ&oe=6353F8CF'
            className='xl:w-[400px] xl:h-[400px] lg:w-[350px] lg:h-[350px] sm:w-[320px] sm:h-[320px] w-[220px] h-[220px]  rounded-full ' alt="" />
       </div>
     </div>
    );
};

export default Banner;