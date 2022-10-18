// import {  signOut } from 'firebase/auth';
// import { NavLink} from "react-router-dom";
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../../firebase.init'
// import Loading from '../Loading/Loading';

// const Navbar = () => {
//     const [user, userLoading, error] = useAuthState(auth);

//     //  handle sign out
//     const handleSignOut = () => {
//         signOut(auth)
//         .then(() => {
//             // toast.success(`${user.email} successfully signed out`,);
//             localStorage.removeItem('accessToken')
//           })
//         .catch((error) => {
//             // toast.error(error.message, );
//           });
//         }        

//     if(userLoading){
//         return <Loading></Loading>
//     }

//     return (
//    <div className="sticky top-0 left-0 z-50">
//      <div className="navbar bg-black/90 relative sm:px-5 px-2 sm:py-3 py-1 w-full shadow-lg border-b-2 border-green-500 ">
//        <div className="navbar-start lg:w-5/6  md:w-3/6 w-4/6 ">
//          {/* -------------- small navigation -------------------- */}
//            <div className="dropdown">
//             <label tabIndex="0" className="btn btn-ghost xl:hidden p-0 pr-2 text-white">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//                     </svg>
//             </label>
//             <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
//               <NavLink to='/home' className='text-base text-white style border-x-4 border-white px-8 py-2 common-bg '>
//                         Home
//              </NavLink>
//              <NavLink to='/dashboard' className='text-base text-white style  px-8 py-2 common-bg'>
//                         dashboard
//              </NavLink>
//               <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//             </label>              
//             </ul>
//             </div>
//             {/*  ---------- website name ----------- */}
//            <h2 className='text-white text-3xl'>
//                Settyl 
//            </h2>
//            {/*  ------------ large device block -------- */}
//            <div className="navbar-center hidden xl:flex ">
//          <ul className="menu menu-horizontal">
//              <NavLink to='/home' className='text-white px-8 py-2'>
//                         Home
//              </NavLink>
//              <NavLink to='/dashboard' className='text-white px-8 py-2'>
//                         DashBoard
//              </NavLink>
//          </ul>
//           </div>
//        </div>  
//     </div>
//    </div>
 
//     );
// };

// export default Navbar;
import React from 'react';
import {Link, NavLink} from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
  <div className="navbar bg-black lg:px-10 sm:px-6 px-3 border-b-2 border-sky-900">
     {/* ------ small device ---------------- */}
     <div className="navbar-start lg:hidden">
       <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-[30px] w-[30px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow space-y-2 rounded-box w-52">
            <NavLink to='/home' className='navLinkStyle'>
              Home
            </NavLink>
            <NavLink to='/dashboard' className='navLinkStyle'>
              DashBoard
            </NavLink>
            <NavLink to='/signInSignUp' className='navLinkStyle'>
                Sign In
            </NavLink>
        </ul>
        </div>
      </div>
      <div className='lg:navbar-start navbar-end xl:mr-[600px] lg:mr-[350px]'>
            {/* -------------- website name --------------- */}
         <div>
           <Link to='/home' className='text-white text-3xl font-serif font-semibold'>
              <img src="https://settyl.com/wp-content/uploads/2022/04/settyl.logo_.svg" className='min-w-[200px]' alt="" />
           </Link>
         </div>
      </div>
     {/* ------------large device ------------- */}
     <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <NavLink to='/home' className='navLinkStyle'>
            Home
          </NavLink>
          <NavLink to='/dashboard' className='navLinkStyle'>
            DashBoard
          </NavLink>
          <NavLink to='/signInSignUp' className='navLinkStyle'>
              Sign In
         </NavLink>
       </ul>
     </div>
 </div>
    );
};

export default Navbar;