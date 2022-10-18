import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import {Link, NavLink} from "react-router-dom";
import auth from '../../../firebase.init';
import './Navbar.css'

const Navbar = () => {
  const [user, userLoading, error] = useAuthState(auth);

  const handleSignOut = () => {
            signOut(auth)
            .then(() => {
                toast.success(`${user.email} successfully signed out`,
                {duration: 3000 ,position:'top-right'});
              })
            } 
    return (
  <div className="navbar bg-black lg:px-10 sm:px-6 px-3 border-b-2 border-sky-900">
     {/* ------ small device ---------------- */}
     <div className="navbar-start lg:hidden">
       <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden px-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-[30px] w-[30px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow space-y-2 rounded-box w-52">
            <NavLink to='/home' className='navLinkStyle'>
              Home
            </NavLink>
            {user &&
               <NavLink to='/dashboard' className='navLinkStyle'>
              DashBoard
              </NavLink>
            }
            { user ? <button onClick={handleSignOut} className='navLinkStyle'>
                  Sign Out
                </button> :
               <NavLink to='/signIn' className='navLinkStyle'>
                 Sign In
               </NavLink>
            }
        </ul>
        </div>
      </div>
      {/* ----------- website logo ----------- */}
      <div className='lg:navbar-start navbar-end xl:mr-[600px] lg:mr-[350px]'>
            {/* -------------- website name --------------- */}
         <div>
           <Link to='/home' className='text-white text-3xl font-serif font-semibold'>
              <img src="https://settyl.com/wp-content/uploads/2022/04/settyl.logo_.svg" className='sm:min-w-[200px] min-w-[180px]' alt="" />
           </Link>
         </div>
      </div>
     {/* ------------large device ------------- */}
     <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <NavLink to='/home' className='navLinkStyle'>
            Home
          </NavLink>
          {user &&
               <NavLink to='/dashboard' className='navLinkStyle'>
              DashBoard
              </NavLink>
            }
          { user ? <button onClick={handleSignOut} className='navLinkStyle'>
              Sign Out
            </button> :
             <NavLink to='/signIn' className='navLinkStyle'>
              Sign In
           </NavLink>
          }
       </ul>
     </div>
 </div>
    );
};

export default Navbar;