import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='min-h-[calc(100vh-65px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;