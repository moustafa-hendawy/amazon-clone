import React from 'react'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, image, title, price, rating, hiddenButton }) {
    let [{ basket }, dispatch] = useStateValue();

    let removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return (
        <div className='CheckoutProduct'>
            <div className='checkoutProduct__image'>
                <img src={image} alt='' />
            </div>
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((_, i) => (<p>⭐</p>))
                    }
                </div>
                {/* <button onClick={removeFromBasket} >Remove From Basket</button> */}
                {!hiddenButton && (
                    <button onClick={removeFromBasket} >Remove From Basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
