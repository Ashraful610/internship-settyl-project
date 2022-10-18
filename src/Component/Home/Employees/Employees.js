import React, { useEffect, useState } from 'react';
import Employee from '../../Shared/Employee/Employee';

const Employees = () => {
   const[employees , setEmployees] = useState([])

   useEffect(()=>{
    fetch('https://pacific-taiga-93991.herokuapp.com/employees')
    .then(res => res.json())
    .then(data => setEmployees(data))
   },[employees]);
    return (
        <div className='w-full min-h-screen '>
             <h2 className='md:text-5xl sm:text-4xl text-3xl text-center font-serif text-semibold p-5 text-white uppercase'>
                All <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>Employees</span>
             </h2>
             <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 p-5">
                  {
                    employees?.map(employee => <Employee key={employee._id} employee_id={employee._id}/>)
                  }              
             </div>
        </div>
    );
};

export default Employees;