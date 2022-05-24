import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import {useContext} from 'react';
import {ShopContext} from '../context';

function Basket() {
    const {order, handleBasketShow = Function.prototype} = useContext(ShopContext);
    const quantity = order.length;
    return (
        <div className='basket-style' onClick={handleBasketShow}>
            <FontAwesomeIcon icon={faCartPlus}/>
            {quantity ? <span className='cart-quantity'> | {quantity}</span> : null}
        </div>
    );
}

export default Basket;