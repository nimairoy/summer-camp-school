
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// import CheckoutForm from './CheckoutForm';
// import useCart from '../../../hooks/useCart';


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