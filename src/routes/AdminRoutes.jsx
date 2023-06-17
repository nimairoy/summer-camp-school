import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Blocks } from "react-loader-spinner";
import useAdmin from "../hooks/useAdmin";

const AdminRoutes = ({ children }) => {

    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className="absolute mx-auto top-1/4">
            <Blocks
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
            />
        </div>
    }

    if (user && isAdmin) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;