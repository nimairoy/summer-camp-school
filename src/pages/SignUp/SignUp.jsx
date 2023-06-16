import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import { toast } from 'react-hot-toast';

const SignUp = () => {
    const { createUser, updateUserProfile } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [error, setError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const onSubmit = data => {
        // console.log(data)
        if (data.password !== data.confirm) {
            console.log('password not matched')
            return setError('Password not matched');
        }
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const savedUser = {name: loggedUser.displayName, email: loggedUser.email};
                        fetch('http://localhost:5000/users',{
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    toast.success('User Created Successfully');
                                    setError('');
                                    reset();
                                    navigate(from, { replace: true })
                                }
                            })

                    })

            })
            .catch(err => setError(err.message))

    }

    return (
        <>
            <div className="min-h-screen py-12 bg-base-200">
                <div className="w-3/4  flex justify-center mx-auto">
                    <div className="card w-full max-w-xl shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-3xl font-bold mb-5">Sign Up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-400'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input {...register("photo", { required: true })} type="text" placeholder="Photo URL" className="input input-bordered" />
                                {errors.photo && <span className='text-red-400'>Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered" />
                                {errors.email && <span className='text-red-400'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} type="password" placeholder="Password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-400'>Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-400'>Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className='text-red-400'>Password must be less then 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-400'>Password must be includes an uppercase, a lowercase, a number and a special character</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input {...register("confirm", {
                                    required: true,
                                })} type="password" placeholder="Confirm Password" className="input input-bordered" />
                                {errors.confirm?.type === 'required' && <p className='text-red-400'>Confirm Password is required</p>}
                                {error && <p className='text-red-400'>Error: {error}</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Sign Up" className="btn btn-warning" />
                            </div>
                        </form>
                        <p className='text-center pb-5'>Already have an account? <Link className='text-warning underline font-bold' to='/login'>Login</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;