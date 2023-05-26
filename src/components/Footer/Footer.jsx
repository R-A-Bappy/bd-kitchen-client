import { EnvelopeIcon, MapIcon, PhoneIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { FaAddressBook, FaFacebook, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[url("https://images.unsplash.com/photo-1630638865523-fd3a48512b0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80")]'>
            <div className=' w-11/12 md:w-10/12 mx-auto md:flex md:gap-32 text-center md:text-left'>
                <div className=''>
                    <h2 className='text-gray-300 text-2xl font-semibold pt-12 pb-6'>Subscribe</h2>
                    <p className='text-gray-300 py-2'>Register and get notified about all the news
                        <br />& updates before it gets too late.</p>
                    <Link to='/register'><button className='btn btn-primary w-28 mt-8 mb-4 md:mb-0'>Register</button></Link>
                </div>
                <div className='border-t border-t-gray-500 md:border-l md:border-l-gray-500 pb-8 md:mr-28'>
                    <h2 className='text-gray-200 text-2xl font-semibold pt-12 pb-6 md:ml-10'>Explore</h2>
                    <p className='text-gray-300 md:ml-10 py-2'>Browse Recipes</p>
                    <p className='text-gray-300 md:ml-10 py-2'>Submit a Recipe</p>
                    <p className='text-gray-300 md:ml-10 py-2'>Our Chefs</p>
                    <p className='text-gray-300 md:ml-10 py-2'>Letast News</p>
                </div>
                <div className='border-t border-t-gray-500 md:border-l md:border-l-gray-500 '>
                    <h2 className='text-gray-300 text-2xl font-semibold pt-12 pb-6 md:ml-10'>Contact</h2>
                    <div className='flex justify-center md:justify-start gap-1 text-gray-300 md:ml-10 py-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                        <p>  12 Mripur, Dhaka, Bangladesh</p>
                    </div>
                    <div className='flex justify-center md:justify-start gap-1 text-gray-300 md:ml-10 py-2'>
                        <EnvelopeIcon className='h-6' />
                        <p>example@gmail.com</p>
                    </div>
                    <div className='flex justify-center md:justify-start gap-1 text-gray-300 md:ml-10 py-2 mb-4 md:mb-0'>
                        <PhoneIcon className='h-6' />
                        <p>(+880) 1974634534</p>
                    </div>
                </div>
            </div>
            <div className='bg-slate-800 py-4'>
                <div className='flex justify-between items-center text-gray-300 w-11/12 md:w-10/12 mx-auto'>
                    <div className=''>
                        <p>&copy; All rights reserved. BD Kitchen.</p>
                    </div>
                    <div className='flex gap-4 text-xl '>
                        <FaGoogle />
                        <FaTwitter />
                        <FaFacebook />
                        <FaInstagram />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;