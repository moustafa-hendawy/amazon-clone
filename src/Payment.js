
import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue, useAuth } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { db } from './firebase';


function Payment() {
    const { user } = useAuth();
    const [{ basket }, dispatch] = useStateValue();
    // console.log("user Moustafa: ", basket);
    const navigate = useNavigate();

    const stripe = useStripe();
    const element = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [succeeded, setSucceed] = useState(false);
    const [processing, setProcessing] = useState("");

    const [clientSecret, setClientSecret] = useState(true);
    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //Stripe expects the total in currencies submits
                url: `http://127.0.0.1:5001/challenge-81c50/us-central1/api/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret()
    }, [basket]);

    const handleSubmit = async (event) => {
        // do all fancy stripe stuff
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: element.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation

            db
                .collection()
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created //Time Of Creation
                })
            setSucceed(true)
            setError(null)
            setProcessing(false)
            navigate.replace('/orders');
            dispatch({
                type: 'EMPTY_BASKET'
            })
        })
    }
    const handleChange = (event) => {
        //Listen changes in the cardElement
        //and display any errors as the customer types their card details 
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className='payment'>
            <div className="payment__container">
                <h1>Checkout (
                    <Link to='/checkout' > {basket?.length} items

                    </Link>
                    ) </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delevery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>test123@gmail.com{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>LOS Angles, CA</p>
                    </div>
                </div>
                {/* payment section - review items */}
                <div className="payment__section">
                    <div className='payment__title'>
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}

                            />
                        )
                        )}
                    </div>
                </div>
                {/* payment section - payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe Magic will go */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="price__container">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>

                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType='text'
                                    thousandSeparator={true}
                                    prefix='$'
                                />

                                <button disabled={processing || succeeded || disabled}>
                                    <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payment
