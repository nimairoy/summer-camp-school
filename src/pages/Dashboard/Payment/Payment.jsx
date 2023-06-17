
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// import CheckoutForm from './CheckoutForm';
import { Link, useLoaderData } from "react-router-dom";



// const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY)
// // console.log('stripe promise', stripePromise)

// const Payment = () => {
//     const [cart] = useCart();
//     const total = cart.reduce((sum, item) => sum + item.price, 0);
//     const price = parseFloat(total.toFixed(2));

//     return (
//         <div>
//             <Elements stripe={stripePromise}>
//                 <CheckoutForm cart={cart} price={price}></CheckoutForm>
//             </Elements>
//         </div>
//     );
// };

// export default Payment;




const Payment = () => {
    const loadedClass = useLoaderData();
    console.log(loadedClass)
    const { name, price, image, instructor_name, description, enrolled } = loadedClass;
    
    return (
        <div className="md:grid md:grid-cols-2 w-full bg-base-100 shadow-xl">
        <div className="px-10 pt-10">
            <img src={image} alt="img" className="rounded-xl" />
        </div>
        <div className="card-body mb-8">
            <h2 className="text-4xl mb-4">{name}</h2>
            <h4 className="flex justify-between"><span className='text-2xl font-bold'>Price: ${price}</span></h4>
            <hr />
            <p className='mt-6'><strong>Description:</strong> {description}</p>
            <p className=''><strong>Total Enrolled:</strong> {enrolled}</p>
            <p className=''><strong>Instructor Name:</strong> {instructor_name}</p>           
            <Link to={'/dashboard/checkout'} ><button className='btn w-1/2 mt-5 btn-warning'> Pay </button>  </Link>          
        </div>
    </div>
    );
};

export default Payment;