import React, { useEffect, useState } from 'react';
import {  useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SignUp = () => {
    const [userError , setUserError] = useState({nameError:'',emailError:'',passwordError:''})

    const [createUserWithEmailAndPassword,createUser,createLoading,createError] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle, gUser, gloading, gError] = useSignInWithGoogle(auth);
    
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      
    let navigate = useNavigate();

     //  handle user sign up
     const handleSignUp = async event => {
        event.preventDefault();
        const name = event.target.name?.value
        const email = event.target.email?.value
        const password = event.target.password?.value
        if(name === '' && email === '' && password === '') {
           setUserError({nameError:'name is required',emailError:'email is required',passwordError:'password is required'})
        }
        else if (name === ''){
            setUserError({nameError:'name is required'})
        }
        else if (email === ''){
            setUserError({emailError:'email is required'})
        }
        else if (password === ''){
            setUserError({passwordError:'password is required'})
        }
        else{
            await  createUserWithEmailAndPassword(email , password)
            await  updateProfile({displayName:name})
            .catch((error) => {
                const errorMessage = error.message
                if(errorMessage.includes('email-already-in-use')){
                    toast.error('The email address is already in use by another account. So please sign in or use another email address',{
                        duration:4000, position:'top-right'
                    });
                }
                else if(errorMessage.includes('weak-password')){
                    toast.error('Please give a strong password');
                }
                else{
                    toast.error(errorMessage);
                }
             });
        }
    }
  
    useEffect(()=>{
        if(createError){
            if(createError?.message){
                toast.error(createError.message);
            }
        }
        if(createUser ){
            toast.success('successfully sign up' , {duration: 3000 ,position: 'top-right'});
            navigate('/home')
         }
         if(gUser){
            toast.success('successfully sign in with google' , {duration: 3000 ,position: 'top-right'});
            navigate('/home')
         }
    },[createError?.message ,createUser , gUser])

   
    return (
     <div className='w-full min-h-[500px] h-fit lg:p-8 md:p-6 p-4 bg-black'>
         <div className=' w-full h-full flex md:flex-row flex-col'>
            <div className="md:w-2/4 w-4/4 lg:h-full h-2/4 md:order-first order-last flex justify-center items-center">
               <img src='https://i.ibb.co/3zGKgFM/undraw-Welcome-re-h3d9-removebg-preview.png' alt="" className='xl:w-[700px] lg:w-[600px] md:w-[350px] w-[600px] lg:h-[500px] h-[400px]' />
             </div>
            {/* ------------------ sign up form ----------------*/}
            <form onSubmit={handleSignUp} className=" md:w-2/4 w-4/4 lg:min-h-[500px] md:h-[400px] h-2/4 p-5 md:order-last order-first flex justify-center items-center">
                 <div className='space-y-4'>
                   {/* ---------- form title */}
                    <h2 className="text-3xl text-center font-semibold font-serif text-white">
                               Sign Up
                    </h2>
                   {/* ---------- name input div   ---------- */}
                   <div className="input  w-full max-w-xs h-full flex items-center rounded-full my-3 hover:shadow-xl">
                       {/*----------- input field -----------  */}
                     <input type="text" placeholder='User name' className="placeholder:italic placeholder:font-semibold lg:min-w-[250px] md:min-w-[200px] min-w-[250px] h-8  border-none focus:ring-0" name='name'/>
                   </div>
                     {
                         userError.nameError && <p className='text-base text-red-500'>{userError.nameError}</p>
                     }
                    {/* ---------- email input div   ---------- */}
                     <div className="input  w-full max-w-xs h-full flex items-center rounded-full my-3 hover:shadow-xl">
                         {/*----------- input field -----------  */}
                         <input type="email" placeholder='User email' className="placeholder:italic placeholder:font-semibold lg:min-w-[250px] md:min-w-[200px] min-w-[250px] h-8  border-none focus:ring-0" name='email'/>
                     </div>
                     {
                        userError.emailError && <p className='text-base text-red-500'>{userError.emailError}</p>
                    }
                    {/* ----------password input div   ---------- */}
                    <div className="input  w-full max-w-xs h-full flex items-center rounded-full  my-3 hover:shadow-xl">
                       {/*----------- input field -----------  */}
                       <input type="password" placeholder='User password' className="lg:min-w-[250px] md:min-w-[200px] min-w-[250px] h-8 placeholder:italic placeholder:font-semibold border-none focus:ring-0" name='password'/>
                     </div>
                     {
                        userError.passwordError && <p className='text-base text-red-500'>{userError.passwordError}</p>
                     }
                     {/* ------------ submit button ----------- */}
                     <div className='w-4/4 flex justify-center'>
                        <button type="submit"  className='sm:w-full w-3/4 navLinkStyle'> Sign Up </button>
                     </div>

                     {/* ------------ divider ----------- */}
                      <div className="divider text-white ">Or continue with</div>

                     {/* ---------------- google button ---------- */}
                     <div className='w-4/4 flex justify-center'>
                       <button className="navLinkStyle sm:w-full w-3/4" onClick={()=>signInWithGoogle()}>
                                    Google
                        </button>
                     </div>
                    
                      {/* ----------link with sign in page ----------- */}
                      <div className='p-5 '>
                        <h2 className='text-white'>Already have a account ?
                         <Link to='/signIn' className='text-blue-500 uppercase'> Sign In </Link>
                        </h2>
                      </div>
                 </div>
            </form>
         </div>
     </div>
    );
};

export default SignUp