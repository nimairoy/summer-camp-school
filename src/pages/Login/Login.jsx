import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Login = () => {
    const { signIn } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [error, setError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                toast.success('User Login Successfully');
                setError('');
                reset();
                navigate(from, {replace: true})
            })
    }

    return (
        <>
            <div className="min-h-screen py-12 bg-base-200">
                <div className="w-3/4  flex justify-center mx-auto">
                    <div className="card w-full max-w-xl shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-3xl font-bold mb-5">Login</h1>
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
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className="btn btn-warning" />
                            </div>
                        </form>
                        <p className="text-center pb-5">Don't have an Account ? <Link className="text-warning underline font-bold" to="/signup">Create An Account</Link></p>
                        {error && <p className='text-red-400 pb-8 pl-6'>Error: {error}</p>}
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;