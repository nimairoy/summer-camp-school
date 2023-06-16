// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';
// import useAuth from '../../../hooks/useAuth';
// // import Swal from 'sweetalert2';

// const CheckoutForm = ({ cart, price }) => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const [axiosSecure] = useAxiosSecure();
//     const {user} = useAuth();
//     const [cardError, setCardError] = useState('');
//     const [clientSecret, setClientSecret] = useState('');
//     const [processing, setProcessing] = useState(false);
//     const [transactionId, setTransactionId] = useState('');
 
//     useEffect(() => {
//        if(price > 0){
//             axiosSecure.post('create-payment-intent', { price })
//             .then(res => {
//                 console.log(res.data.clientSecret);
//                 setClientSecret(res.data.clientSecret)
//             })
//        }
//     }, [price, axiosSecure])


//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         if (!stripe || !elements) {
//             return
//         }

//         const card = elements.getElement(CardElement);
//         if (card === null) {
//             return;
//         }

//         const { error } = await stripe.createPaymentMethod({
//             type: 'card',
//             card
//         })

//         if (error) {
//             // console.log('error', error)
//             setCardError(error.message);
//         }
//         else {
//             setCardError('');
//             // console.log('paymentMethod', paymentMethod)
//         }

//         setProcessing(true);

//         const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//                 card: card, 
//                 billing_details: {
//                     email: user?.email || 'unknown',
//                     name: user?.displayName || 'anonymus',
//                 }
//             }
//         })

//         if(confirmError){
//             console.log(confirmError)
//             // setCardError(confirmError.message)
//         }

//         console.log(paymentIntent)
//         setProcessing(false);
//         if(paymentIntent.status==='succeeded'){
//             const transactionId = paymentIntent.id;
//             setTransactionId(transactionId);
            
//             // save payment information to the server 
//           const payment = {
//             email: user?.email,
//             transactionId: paymentIntent.id,
//             price,
//             date: new Date(),
//             quantity: cart.length,
//             cartItems: cart.map(item => item._id),
//             menuItems: cart.map(item => item.foodId),
//             status: 'service pending',
//             itemNames: cart.map(item => item.name)
//           } 
//           axiosSecure.post('/payments', payment)
//           .then(res => {
//             console.log(res.data)
//             // if(res.data.insertResult.insertedId){
               
//             // }
//           })

//         }

//     }

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <CardElement
//                     options={{
//                         style: {
//                             base: {
//                                 fontSize: '16px',
//                                 color: '#424770',
//                                 '::placeholder': {
//                                     color: '#aab7c4',
//                                 },
//                             },
//                             invalid: {
//                                 color: '#9e2146',
//                             },
//                         },
//                     }}
//                 />
//                 <button type="submit" disabled={!stripe || !clientSecret || processing} className='btn btn-primary btn-sm mt-4'>Pay</button>
//             </form>
//             {cardError && <p className='text-red-400 my-4'>{cardError}</p>}
//             {transactionId && <p className='text-success my-4'>Transaction completed with transaction Id: {transactionId}</p>}
//         </>
//     );
// };

// export default CheckoutForm;