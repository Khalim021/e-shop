import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faTrash} from "@fortawesome/free-solid-svg-icons";

function BasketItem(props) {
    const {id, name, price, quentity} = props
    return (
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">x{quentity} = ${price * quentity}</p>
            <span className='trash'>
                <FontAwesomeIcon icon={faTrash} 
                onClick={() => props.removeFromBasket(id)}/>
            </span>
        </div>
    );
}

export default BasketItem;