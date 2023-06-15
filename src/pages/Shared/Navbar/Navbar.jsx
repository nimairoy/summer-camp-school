import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'
import useAuth from "../../../hooks/useAuth";
import { Toaster, toast } from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    const { user, signout } = useAuth();

    // handle log out
    const handleLogOut = () => {
        signout()
            .then(result => {
                toast.success('Log out Successfully');
                console.log(result.user);
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    const navLists = <>
        <li><Link className="text-[16px] font-semibold" to='/'>Home</Link></li>
        <li><Link className="text-[16px] font-semibold" to='/instructors'>Instructors</Link></li>
        <li><Link className="text-[16px] font-semibold" to='/classes'>Classes</Link></li>
        <li><span className="text-[16px] font-semibold">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary">+99</div>
       </span></li>
        <li><Link className="text-[16px] font-semibold" to='/secret'>Secret</Link></li>
        {user ?
            <>
                <li><img className="w-16" src={user?.photoURL} alt="" /></li>
                <button onClick={handleLogOut} className="btn btn-warning">Logout</button>
            </> :

            <>
                <li><Link className="text-[16px] bg-warning font-semibold" to='/login'>Login</Link></li>
                <li><Link className="text-[16px] bg-warning font-semibold" to='/signup'>Sign Up</Link></li>
            </>
        }
    </>
    return (
        <div className=" shadow-md bg-base-100">
            <Toaster />
            <div className="navbar max-w-screen-xl">
                <div className="navbar-start w-1/4">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm space-x-1 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLists}
                        </ul>
                    </div>
                    <Link to='/'><img className="w-64" src={logo} alt="" /></Link>
                </div>
                <div className="navbar-end w-3/4 hidden lg:flex">
                    <ul className="menu items-center space-x-1 menu-horizontal px-1">
                        {navLists}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;