import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-hot-toast';

const Register = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const { createUser, handleGithubProvider, handleGoogleProvider } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        setError("");
        setSuccess("");

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccess("Register successfully");
                toast.success("Register Successfully");
                profileUpdate(result.user, name, photoUrl);
                form.reset();
            })
            .catch(error => {
                setError(error.message);
                toast.error(error.message);
            })
    }

    const profileUpdate = (user, name, photoUrl) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photoUrl
        })
            .then(() => {
            })
            .catch(error => {
                setError(error.message);
            })
    }


    return (
        <div className="mx-auto w-full md:w-2/6">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Register!</h1>
                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <p className='text-red-600'>{error && <span>{error}</span>}</p>
                        <p className='text-green-600'>{success && <span>{success}</span>}</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoUrl</span>
                            </label>
                            <input type="text" placeholder="photourl" name='photourl' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <p className=''>You already register please! <Link className='btn-link' to="/login">Login</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;