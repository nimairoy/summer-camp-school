import { AiFillCalendar, AiFillHome, AiFillSchedule, AiFillShop, AiOutlineBars, AiOutlineUsergroupAdd, AiOutlineWallet } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

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
                <ul className="menu p-4 w-80 h-full bg-yellow-500 text-[15px] text-base-content">
                    {/* Sidebar content here */}
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to='/dashboard/adminhome'><AiFillHome></AiFillHome> Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/manageclasses'><AiOutlineBars></AiOutlineBars> Manage Classes</NavLink></li>
                                <li><NavLink to='/dashboard/allusers'><AiOutlineUsergroupAdd></AiOutlineUsergroupAdd> Manage Users</NavLink></li>
                            </>
                            :
                            isInstructor ?
                                <>
                                    <li><NavLink to='/dashboard/instructorhome'><AiFillHome></AiFillHome> Instructor Home</NavLink></li>
                                    <li><NavLink to='/dashboard/addclass'><AiFillSchedule></AiFillSchedule> Add a Class</NavLink></li>
                                    <li><NavLink to='/dashboard/myclass'><AiOutlineBars></AiOutlineBars> My Classes</NavLink></li>                                                                      
                                </>
                                :
                                <>
                                    <li><NavLink to='/dashboard/studenthome'><AiFillHome></AiFillHome> Student Home</NavLink></li>
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