import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from './Banner/Banner';
import Employees from './Employees/Employees';

const Home = () => {
    return (
        <div className='bg-black'>
           <Banner />
           <Employees/>
        </div>
    );
};

export default Home;