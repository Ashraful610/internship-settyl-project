import React, { useEffect, useState } from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const[employees , setEmployees] = useState([])

   //  load employees
    useEffect(()=>{
     fetch('https://pacific-taiga-93991.herokuapp.com/employees')
     .then(res => res.json())
     .then(data => setEmployees(data))
    },[employees]);

    return (
   <div className='h-[550px] bg-black '>
     <ResponsiveContainer width='100%' height={500}>
      <AreaChart data={employees} className='mr-24'
      margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
               <stop offset="5%" stopColor="#ffffff" stopOpacity={0.8}/>
               <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
            </linearGradient>
       </defs>
      <XAxis dataKey="employee_name"/>
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="employee_salary" stroke="#277BC0" fillOpacity={1} fill="url(#colorPv)"  />
      </AreaChart>
    </ResponsiveContainer>
   </div>
 
    )
};

export default DashBoard