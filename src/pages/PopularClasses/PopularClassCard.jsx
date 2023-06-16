import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const PopularClassCard = ({clss}) => {
    const { image, name, enrolled, price,  description, instructor_name, _id } = clss;
    
    const [, , refetch] = useCart();
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSelectClass = () => {
        if(user && user?.email){
            const orderItem = {cartItemID: _id, image, name, enrolled, price,  description, instructor_name, email:user.email}
            fetch('http://localhost:5000/carts',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch();
                    toast.success('Your Class Selected Successfully');
                }
            })
        }
        else{
            toast.error('Please Login First');
            navigate('/login', {state: {from: location}});
        }
    }

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="image" className="rounded-xl" />
            </figure>
            <div className="card-body items-center">
                <div className="flex justify-between w-full items-center mb-4"><h2 className="card-title">{name}</h2> <span>Students: {enrolled}</span></div>
                <p>{description}</p>
                <p className="flex justify-between w-full text-xl"><span> <strong>Instructor:</strong> {instructor_name}</span> <span>${price}</span></p>                
                <div className="card-actions mt-4">
                    <button onClick={handleSelectClass} className="btn btn-primary">Select</button>
                </div>
            </div>
        </div>
    );
};

export default PopularClassCard;