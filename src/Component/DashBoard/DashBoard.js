import React, { useEffect, useState } from 'react';
import { ResponsiveContainer,AreaChart,Area, XAxis, YAxis, Tooltip } from 'recharts';

const DashBoard = () => {
    const[employees , setEmployees] = useState([])

    useEffect(()=>{
     fetch('http://localhost:5000/employees')
     .then(res => res.json())
     .then(data => setEmployees(data))
    },[]);

    return (
 <div className='h-[550px] bg-black '>
     <ResponsiveContainer width='100%' height={500}>
      <AreaChart data={employees} className='mr-24'
      margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
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