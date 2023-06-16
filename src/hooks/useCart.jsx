import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useCart = () => {
    const {user} = useAuth();
    const {isLoading, refetch, data: cart = []} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`);
            return res.json();
        }
    })
    return [cart, isLoading, refetch];
};

export default useCart;