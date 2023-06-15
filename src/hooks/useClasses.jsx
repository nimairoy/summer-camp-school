// import { useQuery } from "@tanstack/react-query";


// const useClasses = () => {
//     const {isLoading, data:classes=[]} = useQuery({
//         queryKey: ['classes'],
//         queryFn: async () => {
//             const res = await fetch('http://localhost:5000/classes');
//             return res.json();
//         }
//     })
//     return [isLoading, classes];
// };

// export default useClasses;