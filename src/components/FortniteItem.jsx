import React from 'react';
import {useContext} from 'react';
import {ShopContext} from '../context';


function FortniteItem(props) {
  const {id, name, description, price, full_background} = props;

  const {addToCart} = useContext(ShopContext)

  return (
    <div className='card' id={id}>
      <div className="card">
          <img src={full_background} className="card-img-top" alt={name} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <button className='btn btn-primary' onClick={() => addToCart({id, name, price})}>Buy Now</button>
            <span className='price-right' style={{fontSize: '1.6rem'}}>${price}</span>
          </div>
      </div>
    </div>
    );
}

export default FortniteItem;