import React from 'react'
import './Subtotal.css'
// import { CurrencyFormat } from 'react-currency-format';
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    const navigate = useNavigate();
    return (
        <div className='subtotal'>
            {/* <CurrencyFormat /> */}
            <p> subtotal({basket?.length} items) : <strong>  $ {getBasketTotal(basket)}</strong></p>
            <small className='subtotal__gift'>
                <input type="checkbox" /> This order contains a gift
            </small>
            <button onClick={(e) => navigate('/payment')}>proceed to checkout</button>
        </div>
    )
}

export default Subtotal
