import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CreateEmployee = () => {
    const navigate = useNavigate()

    const hanldeCreateEmployee = event => {
        event.preventDefault();
        const employeeName = event.target.name.value
        const employeeSalary = event.target.salary.value
        const employeeAge = event.target.age.value
        if(employeeName && employeeSalary && employeeAge){
            const employee = {employee_name: employeeName, employee_salary: employeeSalary, employee_age: employeeAge}
            fetch('https://pacific-taiga-93991.herokuapp.com/employee',{
                method:'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(employee)
            })
            .then(res => res.json())
            .then(result => {
                if(result.insertedId){
                    toast.success('Successfully create a new employee',
                    {duration: 3000,position:'top-right'})
                    navigate('/home')
                }
            })
        }
    }
    return (
        <div className='w-full lg:h-[520px] md:h-[500px] h-[400px] bg-black sm:p-5 p-2'>
            {/* -------- page title ---------- */}
            <h2 className='sm:text-4xl text-2xl text-center font-semibold font-serif text-white'> 
            Create a new     
               <span className='some_text_style'>Employee</span>
            </h2>
            <div className='w-full sm:h-[400px] h-[350px] flex justify-center items-center'>
              <div className='bg-white/20 sm:w-[500px] w-[310px] sm:h-[380px] h-[320px] py-5 sm:px-0 px-5 flex  items-center justify-center'>
                 <form onSubmit={hanldeCreateEmployee} className='space-y-4'>
                    {/* ------- employee name input div ---------- */}
                    <div className='space-y-2'>
                      <label htmlFor="employee name" className='text-white font-serif'>
                        Employee Name
                      </label> <br />
                       <input type="text" name='name' placeholder='employee name' className='px-5 py-1 placeholder:text-slate-800 placeholder:font-semibold font-serif rounded-full sm:min-w-[400px] w-[280px]'/>
                    </div>
                    {/* -----------employee salary input div ---------- */}
                    <div className='space-y-2'>
                       <label htmlFor="employee name" className='text-white font-serif'>
                        Employee Salary
                       </label> <br />
                        <input type="number" name='salary' placeholder='employee salary' className='px-5 py-1 placeholder:text-slate-800 placeholder:font-semibold font-serif rounded-full sm:min-w-[400px] w-[280px]'/>
                    </div>
                    {/* ----------- employee age div -------- */}
                     <div className='space-y-2'>
                       <label htmlFor="employee name" className='text-white font-serif'>
                        Employee Age
                       </label> <br />
                       <input type="number" name='age' placeholder='employee age' className='px-5 py-1 placeholder:text-slate-800 placeholder:font-semibold font-serif rounded-full sm:min-w-[400px] w-[280px]'/>
                     </div>
                     {/* ------------- submit button div ------------ */}
                     <div className='flex justify-center p-5'>
                                <button type='submit' className='navLinkStyle'>create</button>
                     </div>
                 </form>
              </div>
            </div>
        </div>
    );
};

export default CreateEmployee;