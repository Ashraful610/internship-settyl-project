import React, { useState } from 'react';
import img from '../../../images/tiger.jpg'

const Employee = ({employee}) => {
    const {employee_name , employee_salary , employee_age}= employee;
    const [update , setUpdate]= useState(false);

    const handleUpdate = (event) => {
        event.preventDefault()
        console.log(employee_name, employee_salary , employee_age)
    }
    return (
    <div className='p-5 bg-white/20 hover:bg-white/30'>
        <div className='flex justify-center'>
             <img src={img} className='rounded-full xl:w-[100px] lg:w-[90px] w-[80px] xl:h-[100px] lg:h-[90px] h-[80px]' alt="" />
        </div>
        <div className='text-white text-center'>
              <h2>Employee name : {employee_name}</h2>
              <h2>Employee salary : ${ employee_salary}</h2>
              <h2>Employee age : {employee_age}</h2>
             {!update && 
             <button onClick={()=>setUpdate(!update)} className='hover:scale-1 bg-purple-600 px-10 py-1 rounded-full mt-5 font-semibold transition-all duration-300 ease-in-out  hover:scale-125'>
                Update
             </button>}
           {
              update &&
               <form onSubmit={handleUpdate} className='p-5 space-y-1'>
                   <input type="text" name='name' className='w-full rounded-full outline-purple-500 bg-white/90 text-slate-600 px-3 font-semibold italic' defaultValue={employee_name}/>

                   <input type="number" name='salary' className='w-full rounded-full outline-purple-500 bg-white/90 text-slate-600 px-3 font-semibold italic' defaultValue={ employee_salary}/>

                   <input type="number" name='age' className='w-full rounded-full outline-purple-500 bg-white/90 text-slate-600 px-3 font-semibold italic' defaultValue={employee_age}/>

                    <div className='py-2 flex justify-between'>
                       <button onClick={()=>setUpdate(!update)} className='bg-slate-600 font-semibold px-5 py-1 rounded-full'>
                          back
                       </button>
                       <button type='submit' className='font-semibold bg-purple-600 px-5 py-1 rounded-full'>
                          Update
                      </button>
                    </div>
              </form>
           }

        </div>
     </div>    
    );
};

export default Employee;