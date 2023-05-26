import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    const { loginUser, handleGithubProvider, handleGoogleProvider } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setSuccess("");
        setError("");
        loginUser(email, password)
            .then(result => {
                setSuccess("Login Successfully");
                toast.success("Login Successfully");
                form.reset();
                navigate(from);
            })
            .catch(error => {
                setError(error.message);
                toast.error(error.message);
            })

    }

    const handleProviderGithub = () => {
        setSuccess("");
        setError("");
        handleGithubProvider()
            .then(result => {
                setSuccess("Login Successfully");
                toast.success("Login Successfully");
                navigate('/');
            })
            .catch(error => {
                setError(error.message);
                toast.error(error.message);
            })
    }

    const handleProviderGoogle = () => {
        setSuccess("");
        setError("");
        handleGoogleProvider()
            .then(result => {
                setSuccess("Login Successfully");
                toast.success("Login Successfully");
                navigate('/');
            })
            .catch(error => {
                setError(error.message);
                toast.error(error.message);
            })
    }

    return (
        <div className="mx-auto w-full md:w-2/6">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Login!</h1>
                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <p className='text-red-600'>{error && <span>{error}</span>}</p>
                        <p className='text-green-600'>{success && <span>{success}</span>}</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <p className=''>If you new please! <Link className='btn-link no-underline' to="/register">Register</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className='flex justify-center items-center gap-1 mb-6'>
                        <p className='w-1/6 border-t border-gray-400'></p>
                        <p className='text-gray-400'>or use one of these options</p>
                        <p className='w-1/6 border-t border-gray-400'></p>
                    </div>
                    <div className='flex gap-12 justify-center mb-6'>
                        <button onClick={handleProviderGoogle} className="bg-base-200 rounded">
                            <img className='w-28' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
                        </button>
                        <button onClick={handleProviderGithub} className="bg-base-200 rounded w-28 flex justify-center items-center p-4">
                            <img className='w-24' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;