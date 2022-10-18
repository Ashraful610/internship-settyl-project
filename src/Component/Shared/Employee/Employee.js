import React, { useEffect, useState } from 'react';
import img from '../../../images/tiger.jpg'

const Employee = ({employee_id}) => {
     const [employee , setEmployee] = useState({})
     const {employee_name , employee_salary , employee_age , _id}= employee;
     const [update , setUpdate]= useState(false);

    useEffect(()=>{
      fetch(`http://localhost:5000/employee/${employee_id}`)
      .then(res => res.json())
      .then(result => setEmployee(result))
    },[employee])

    const handleUpdate = (event) => {
        event.preventDefault()
        const name = event.target.name.value || employee_name
        const salary = event.target.salary.value || employee_salary
        const age = event.target.age.value || employee_age
        const newEmployee = {employee_name: name, employee_salary: salary, employee_age: age}
     
        fetch(`http://localhost:5000/employee/${_id}`, {
        method: 'PUT',
        body: JSON.stringify(newEmployee),
        headers: {
          'Content-type': 'application/json',
        },
      })
      .then((response) => response.json())
      .then(result => {
          console.log(result.modifiedCount)
          if(result.modifiedCount > 0){
            setUpdate(!update)
          }
      });
    }
    return (
  <div className='p-5 bg-white/20 hover:bg-white/30'>
    {/* --------img div --------- */}
    <div className='flex justify-center'>
       <img src='https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-1/305616377_101465389390529_2009171116005346258_n.png?stp=c106.0.320.320a_dst-png_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=c6021c&_nc_eui2=AeGSZngBjBFTysSo6AAxaay5W7Ckba-ZGMBbsKRtr5kYwFYw-yt95zPD6zoB6lMrZNEhf0wBITyJ3_bLCRK9TIK5&_nc_ohc=kIJpkLY05O0AX_rQAY1&_nc_ht=scontent.fdac80-1.fna&oh=00_AT-lqddFm_5Wx3lt4EKl9xMU8n8gt8yX3hnLwN5ldZSMjQ&oe=6353F8CF' className='rounded-full xl:w-[100px] lg:w-[90px] w-[80px] xl:h-[100px] lg:h-[90px] h-[80px]' alt="" />
    </div>
    {/* -------------- employee details ------------ */}
    <div className='text-white '>
       <h2> name : {employee_name}</h2>
       <h2>Employee salary : ${ employee_salary}</h2>
       <h2>Employee age : {employee_age}</h2>
       {!update && 
        <div className="flex justify-center">
         <button onClick={()=>setUpdate(!update)} className='hover:scale-1 bg-purple-600 px-10 py-1 rounded-full mt-5 font-semibold transition-all duration-300 ease-in-out  hover:scale-125'>
               Update
         </button>  
        </div>
      }
      {/* ------------ update form ------------- */}
      {
        update &&
         <form onSubmit={handleUpdate} className=''>
            <div className='space-y-2 p-2'>
               <input type="text" name='name' className='w-full rounded-full outline-purple-500 bg-white/90 text-slate-600 px-3 font-semibold italic' defaultValue={employee_name}/>

               <input type="number" name='salary' className='w-full rounded-full outline-purple-500 bg-white/90 text-slate-600 px-3 font-semibold italic' defaultValue={ employee_salary}/>

               <input type="number" name='age' className='w-full rounded-full outline-purple-500 bg-white/90 text-slate-600 px-3 font-semibold italic' defaultValue={employee_age}/>
            </div>

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