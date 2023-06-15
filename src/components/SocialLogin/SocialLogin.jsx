import useAuth from "../../hooks/useAuth";
import googleIcon from '../../assets/google.png'
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const SocialLogin = () => {
    const { signInWithGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    
    const handleSocialLogin = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            toast.success('User Login successfully');
            navigate(from, {replace: true})
        })
    }

    return (
        <div className="px-8">
            <button onClick={handleSocialLogin} className='btn w-full mx-auto mb-10 btn-outline border-yellow-400 hover:border-yellow-400 hover:bg-yellow-300'> <img className='w-6' src={googleIcon} alt="" /> <span className='text-gray-600'>Sign in With Google</span></button>
        </div>
    );
};

export default SocialLogin;