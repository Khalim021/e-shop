import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import BasketItem from './BasketItem';
import {faXmark} from "@fortawesome/free-solid-svg-icons";

function BaksetList(props) {
  const {order, handleBasketShow} = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quentity
  }, 0)

  return (
    <div className="card basket_style text-dark bg-info mb-3">
      <div className="card-header">Header</div>
        {order.length ? order.map(item => {
          return (
            <BasketItem 
            key={item.id} 
            {...item} 
            removeFromBasket={props.removeFromBasket}
            />
          )
        }) : <div className='empty-info'>Cart is empty</div>}
        <div className='total-cost'>Total price: ${totalPrice} </div>
        <span className="x-mark"><FontAwesomeIcon icon={faXmark} onClick={handleBasketShow}/></span>
    </div>
  );
}

export default BaksetList;
