import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useClass = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { isLoading: classLoading, refetch, data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/myclasses?email=${user?.email}`);
            console.log('res from axios inside', res)
            return res.data;
        }
    })
    return [classLoading, refetch, classes];
};

export default useClass;