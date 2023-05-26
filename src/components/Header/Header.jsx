import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => navigate('/'))
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className='flex justify-between items-center w-11/12 md:w-10/12 mx-auto p-2'>
                <div>
                    <Link className='text-4xl font-bold text-red-500' to='/'>BD kitchen</Link>
                </div>
                <div>
                    <ul className="md:flex hidden items-center gap-4 text-xl font-medium ">
                        <li><NavLink
                            to='/'
                            className={({ isActive }) => isActive ?
                                "text-red-500 px-4 py-4" : "hover:text-red-500 px-4 py-4"
                            }
                        > Home
                        </NavLink></li>
                        <li><NavLink
                            to='/blog'
                            className={({ isActive }) => isActive ?
                                "text-red-500 px-4 py-4" : "hover:text-red-500 px-4 py-4"
                            }
                        > Blog
                        </NavLink></li>
                        <li>
                            {user ? <button onClick={handleLogout} className='hover:text-red-500 px-4 py-4'>Sign Out</button> : <NavLink
                                to='/login'
                                className={({ isActive }) => isActive ?
                                    "text-red-500 px-4 py-4" : "hover:text-red-500 px-4 py-4"
                                }
                            > Login
                            </NavLink>}
                        </li>
                        <li>
                            {user ?
                                <div className="px-4">
                                    <img className='rounded-full w-10' title={user?.displayName} src={user?.photoURL} />
                                </div>
                                :
                                <NavLink
                                    to='/register'
                                    className={({ isActive }) => isActive ?
                                        "text-red-500 px-4 py-4 rounded" : "hover:text-red-500 px-4 py-4 rounded"
                                    }
                                > Register
                                </NavLink>
                            }
                        </li>
                    </ul>
                    <div className='md:hidden'>
                        {/* Dropdown Open Button */}
                        <button
                            aria-label='Open Menu'
                            title='Open Menu'
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Bars3Icon className='w-10 text-gray-600' />
                        </button>
                        {isMenuOpen && (
                            <div className='absolute top-0 left-0 w-full z-10'>
                                <div className='p-5 bg-white border rounded shadow-sm'>
                                    {/* Logo & Button section */}
                                    <div className='flex items-center justify-between mb-4'>
                                        {/* Dropdown menu close button */}
                                        <div>
                                            <button
                                                aria-label='Close Menu'
                                                title='Close Menu'
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <XMarkIcon className='w-5 text-gray-600' />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Mobile Nav Items Section */}
                                    <nav>
                                        <ul className='space-y-4 text-xl font-semibold'>
                                            <li>
                                                <NavLink to="/" className={({ isActive }) => isActive ? "font-bold text-xl text-red-500 " : " font-bold text-xl hover:text-red-500"}> Home </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/blog" className={({ isActive }) => isActive ? "font-bold text-xl text-red-500 " : " font-bold text-xl hover:text-red-500"}> Blog </NavLink>
                                            </li>
                                            <li>
                                                {user ? <Link>Sign Out</Link> : <NavLink to="/login" className={({ isActive }) => isActive ? "font-bold text-xl text-red-500 " : " font-bold text-xl hover:text-red-500"}> Login </NavLink>}
                                            </li>
                                            <li>
                                                {user ? <div className="">
                                                    <img className='rounded-full w-10' title={user?.displayName} src={user?.photoURL} />
                                                </div> : <NavLink to="/register" className={({ isActive }) => isActive ? "font-bold text-xl text-red-500 " : " font-bold text-xl hover:text-red-500"}> Register </NavLink>}
                                            </li>

                                        </ul>
                                    </nav>

                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;


/*
<div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="flex-none gap-2">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='blog'>Blog</Link></li>
                    <li>
                        {user ? <Link>Signout</Link> : <Link to='login'>Login</Link>}
                    </li>
                </ul>
                {user ? <div className="dropdown dropdown-end">
                    <label className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                </div> :
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                }
            </div>
        </div>

*/