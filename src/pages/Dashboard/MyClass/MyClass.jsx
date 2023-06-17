import { Link } from "react-router-dom";
import useClass from "../../../hooks/useClass";

const MyClass = () => {
    const [, , classes] = useClass();
    console.log(classes)
    return (
         <div className='w-3/4'>
         <div className='flex justify-between items-center mt-10 mb-5'>
         <h2 className="text-3xl">My All Classes : {classes?.length}</h2>             
         </div>
         <div className="overflow-x-auto">
             <table className="table w-full">
                 {/* head */}
                 <thead>
                     <tr>
                         <th>#</th>
                         <th>Image</th>
                         <th>Enrolled Students</th>
                         <th>Status</th>
                         <th>Feedback</th>
                         <th>Action</th>
                     </tr>
                 </thead>
                 <tbody>
                     {/* row 1 */}
                     {
                         classes.map((item, index) => <tr
                             key={item._id}
                         >
                             <th>{index + 1}</th>
                             <td><img className='w-20' src={item.image} alt="" /></td>
                             <td>{item.enrolled}</td>
                             <td> {item.status}</td>
                             <td > <Link ><button className='btn btn-sm bg-yellow-500 border-0'>feedback</button></Link></td>
                             <td > <Link ><button className='btn btn-sm bg-yellow-500 border-0'>Update</button></Link></td>
                             
                         </tr>)
                     }
                 </tbody>
             </table>
         </div>
     </div>
    );
};

export default MyClass;