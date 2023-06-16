import { AiFillCalendar, AiFillHome, AiFillShop, AiOutlineBars, AiOutlineUsergroupAdd, AiOutlineWallet } from "react-icons/ai";
import { FaBook, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();

    const isAdmin = true;
    const isInstructor = false;

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-yellow-500 text-base-content">
                    {/* Sidebar content here */}
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to='/dashboard/adminhome'><AiFillHome></AiFillHome> Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/additem'><FaUtensils></FaUtensils> Add Items</NavLink></li>
                                <li><NavLink to='/dashboard/manageitems'><AiOutlineBars></AiOutlineBars> Manage Items</NavLink></li>
                                <li><NavLink to='/dashboard/booking'><FaBook></FaBook> Manage Bookings</NavLink></li>
                                <li><NavLink to='/dashboard/allusers'><AiOutlineUsergroupAdd></AiOutlineUsergroupAdd> All Users</NavLink></li>
                            </>
                            :
                            isInstructor ?
                                <>
                                    <li><NavLink to='/dashboard/adminhome'><AiFillHome></AiFillHome> Instructor Home</NavLink></li>
                                    <li><NavLink to='/dashboard/additem'><FaUtensils></FaUtensils> Add Items</NavLink></li>
                                    <li><NavLink to='/dashboard/manageitems'><AiOutlineBars></AiOutlineBars> Manage Items</NavLink></li>
                                    <li><NavLink to='/dashboard/booking'><FaBook></FaBook> Manage Bookings</NavLink></li>
                                    <li><NavLink to='/dashboard/alluser'><AiOutlineUsergroupAdd></AiOutlineUsergroupAdd> All Users</NavLink></li>
                                </>
                                :
                                <>
                                    <li><NavLink to='/dashboard/home'><AiFillHome></AiFillHome> Student Home</NavLink></li>
                                    <li><NavLink to='/dashboard/mycart'><AiFillCalendar></AiFillCalendar> My Selected Class</NavLink></li>
                                    <li><NavLink to='/dashboard/paymenthistory'><AiOutlineWallet></AiOutlineWallet> Payment History</NavLink></li>
                                </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to='/'><AiFillHome></AiFillHome> Home</NavLink></li>
                    <li><NavLink to='/classes'><AiOutlineBars></AiOutlineBars> Popular Classes</NavLink></li>
                    <li><NavLink to='/instructors'><AiFillShop></AiFillShop> Popular Instructor</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;