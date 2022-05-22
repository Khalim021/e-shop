import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus} from "@fortawesome/free-solid-svg-icons"
function Basket(props) {
    const {quantity = 0, handleBasketShow = Function.prototype} = props
    return (
        <div className='basket-style' onClick={handleBasketShow}>
            <FontAwesomeIcon icon={faCartPlus}/>
            {quantity ? <span className='cart-quantity'> | {quantity}</span> : null}
        </div>
    );
}

export default Basket;