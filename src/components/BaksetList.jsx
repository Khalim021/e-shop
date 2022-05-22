import React from 'react';
import BasketItem from './BasketItem';

function BaksetList(props) {
  const {order} = props
  return (
    <div className="card basket_style text-dark bg-info mb-3">
      <div className="card-header">Header</div>
        {order.length ? order.map(item => {
          return (
            <BasketItem key={item.id} {...item} />
          )
        }) : <div className='empty-info'>Cart is empty</div>}
        <div className='total-cost'>Total Cost</div>
    </div>
  );
}

export default BaksetList;