import React from 'react';
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