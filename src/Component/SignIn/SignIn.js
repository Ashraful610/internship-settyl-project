import React from 'react'
import auth from '../../firebase.init.js'
import { useAuthState,useSignInWithEmailAndPassword,useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const SignIn = () => {
    //  ----------- user --------------
    const [user, userLoading, error] = useAuthState(auth);
    const [signInWithGoogle, gUser, loading, gError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword,signInUser,signInLoading,signInError] = useSignInWithEmailAndPassword(auth);

    let navigate = useNavigate();

    // handle user sign  in
    const handleSignIn = event => { 
        event.preventDefault();
        const email = event.target.email?.value
        const password = event.target.password?.value
        signInWithEmailAndPassword( email, password)
    }

    useEffect(()=>{
      if(signInError?.message){
        const errorMessage = signInError?.message
        if(errorMessage.includes('user-not-found')){
            toast.error('You have a no account, Please sign up');
        }
        else if(errorMessage.includes('wrong-password')){
         toast.error('please provide a correct password');
       }
       else if(errorMessage.includes('invalid-email')){
        toast.error('please provide a valid email')
       }
       else{
           toast.error(errorMessage);
       }
     }
    },[signInError?.message])
   
    useEffect(()=>{
        if(user){
            toast.success('successfully signed  in',{
                duration:2000, position:'top-right'
            })
            navigate('/home')
          }
    },[user])

    return (
    <div className='w-full min-h-[500px] h-fit  bg-black'>
        <div className='backdrop-blur-sm  md:flex  w-full min-h-full h-full '>
             {/* ----------- sing in form ----------- */}
             <form onSubmit={handleSignIn} className=" md:w-2/4 w-4/4 lg:min-h-[500px] md:h-[400px] h-2/4 p-5 flex justify-center items-center">
                  <div className=''>
                      {/* ---------- form title */}
                       <h2 className="text-3xl text-center font-semibold font-serif text-white">
                               Sign In
                      </h2>
                      {/* ---------- email input div   ---------- */}
                      <div className="input  w-full max-w-xs h-full flex items-center rounded-full my-5 hover:shadow-xl">
                          {/*----------- input field -----------  */}
                         <input type="email" placeholder='User email' name='email' className="placeholder:italic placeholder:font-semibold lg:min-w-[250px] md:min-w-[200px] min-w-[250px] h-8 border-none focus:ring-0"/>
                      </div>
                      {/* ----------password input div   ---------- */}
                      <div className="input  w-full max-w-xs h-full flex items-center rounded-full my-5 hover:shadow-xl">
                            {/*----------- input field -----------  */}
                           <input type="password" placeholder='User password' className="lg:min-w-[250px] md:min-w-[200px] min-w-[250px] h-8 placeholder:italic placeholder:font-semibold border-none focus:ring-0" name='password'/>
                      </div>
                      {/* ------------ submit button ----------- */}
                      <div className='w-4/4 '>
                          <input type="submit" value="Sign In" className='navLinkStyle w-full'/>
                      </div>

                      {/* ---------- divider ---------- */}
                      <div className="divider text-white ">Or continue with</div>
                      {/* ---------------- google button ---------- */}
                      <button className="navLinkStyle w-full" onClick={()=>signInWithGoogle()}>
                                Google
                      </button>
                      {/* ----------link with sign up page ----------- */}
                      <div className='p-5 '>
                        <h2 className='text-white'>Need an account ?
                         <Link to='/signup' className='text-blue-500 uppercase'> Sign Up </Link>
                        </h2>
                      </div>
                   </div>
             </form>               
             <div className="md:w-2/4 w-4/4 lg:h-full h-2/4 flex justify-center items-center">
                    <img src='https://i.ibb.co/99NGQ1s/undraw-Access-account-re-8spm-removebg-preview.png' alt="" className='xl:w-[700px] lg:w-[600px] md:w-[350px] w-[600px] lg:h-[500px] h-[400px]' />
             </div>
        </div>
     </div>
    );
};

export default SignIn;