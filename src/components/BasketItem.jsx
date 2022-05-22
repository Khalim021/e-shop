import React from 'react';

function BasketItem(props) {
    const {id, name, price, quentity} = props
    return (
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{quentity}x = ${price}</p>
        </div>
    );
}

export default BasketItem;