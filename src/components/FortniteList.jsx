import React from 'react';
import FortniteItem from './FortniteItem';
import Loader from './Loader';

function FortniteList(props) {
    const {goods = [], addToCart} = props

    if(!goods.length) {
        return <Loader />
    }

    return (
        <div className='cards'>
            {goods.map((item) => (
                <FortniteItem key={item.id} {...item} addToCart={addToCart}/>
            ))}
        </div>
    );
}

export default FortniteList;