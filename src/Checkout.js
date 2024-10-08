import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import './CheckoutProduct.js'
import './CheckoutProduct.css'
import { useStateValue, useAuth } from './StateProvider.js'
import CheckoutProduct from './CheckoutProduct.js'


function Checkout() {
    const { user } = useAuth()
    const [{ basket }, dispatch] = useStateValue();
    //npm run build
    //firebase deploy
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad'
                    src="https://images-na.ssl-images-amazon.com/images/G/01/digital/adrive/photos/FDay24/C1_EN_AMZN_3000x180_STATIC_029147_R0.png" />

                <div>
                    <h1>Hello, Moustafa {user?.email}</h1>
                    <h1 className='checkout__title'>Your Shopping Basket</h1>

                    {basket.map((item) =>
                        <CheckoutProduct
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}


                        />
                    )}


                </div>
            </div>
            <div className='checkout__right'>
                <Subtotal />

            </div>
        </div>
    )
}

export default Checkout
