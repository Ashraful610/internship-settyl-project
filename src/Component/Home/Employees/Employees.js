import React, { useEffect, useState } from 'react';
import Employee from '../../Shared/Employee/Employee';

const Employees = () => {
   const[employees , setEmployees] = useState([])

   useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setEmployees(data))
   },[])
    return (
        <div className='w-full min-h-screen '>
             <h2 className='md:text-5xl sm:text-4xl text-3xl text-center font-serif text-semibold p-5 text-white'>
                All Employees
             </h2>
             <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 p-5">
                  {
                    employees?.map(employee => <Employee key={employee.id} employee={employee}/>)
                  }              
             </div>
        </div>
    );
};

export default Employees;