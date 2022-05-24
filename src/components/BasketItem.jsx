import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {useContext} from 'react';
import {ShopContext} from '../context';

function BasketItem(props) {
    const {id, name, price, quantity} = props;

    const {decrementQuentity, incrementQuentity, removeFromBasket} = useContext(ShopContext)
    

    return (
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{name} x{quantity} = ${price * quantity}</p>
            <button className='btn btn-primary' onClick={() => incrementQuentity(id)}>Add</button>
            <button className='btn btn-danger' onClick={() => decrementQuentity(id)}>Remove</button>
            <span className='trash'>
                <FontAwesomeIcon icon={faTrash} 
                onClick={() => removeFromBasket(id)}/>
            </span>
        </div>
    );
}

export default BasketItem;