import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faTrash} from "@fortawesome/free-solid-svg-icons";

function BasketItem(props) {
    const {id, name, price, quantity, decrementQuentity, incrementQuentity} = props
    return (
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{name} x{quantity} = ${price * quantity}</p>
            <button className='btn btn-primary' onClick={() => incrementQuentity(id)}>Add</button>
            <button className='btn btn-danger' onClick={() => decrementQuentity(id)}>Remove</button>
            <span className='trash'>
                <FontAwesomeIcon icon={faTrash} 
                onClick={() => props.removeFromBasket(id)}/>
            </span>
        </div>
    );
}

export default BasketItem;