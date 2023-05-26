import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='bg-[url("https://images.unsplash.com/photo-1503653525408-82f00ad1a5d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1179&q=80")] bg-no-repeat bg-cover h-screen flex flex-col justify-center items-center'>
            <h2 className='text-9xl tracking-wide text-red-400'>4 0 4</h2>
            <h2 className='text-6xl font-bold text-yellow-500 mb-2 pt-8'>Page Not Found</h2>
            <p className='text-xl text-yellow-100'>Why don't you try one of these pages instead</p>
            <Link to='/'><button className='btn btn-primary px-16 mt-8'>Home</button></Link>
        </div>
    );
};

export default ErrorPage;