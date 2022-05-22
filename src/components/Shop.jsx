import React, {useState, useEffect} from 'react';
import {api_url, api_key} from '../config';
import Basket from './Basket';
import FortniteList from './FortniteList';
import Loader from './Loader';

function Shop(props) {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(false);
    const [order, setOrder] = useState([]);

    const addToCart = (item) => {
        const itemIndex = order.findIndex((orederItem) => orederItem.id === item.id);

        if(itemIndex < 0) {
            const newItem = {
                ...item,
                quentity: 1
            }
            setOrder([...order, newItem])
        } else{
            const newOrder = order.map((orederItem, index) => {
                if(index === itemIndex) {
                    return{
                        ...orederItem,
                        quantity: orederItem.quantity + 1
                    }
                } else {
                    return item
                }
            });
            setOrder(newOrder)
        }
    }

    useEffect(() => {
        fetch(api_url, {
            headers: {
                Authorization: api_key
            }
        }).then((res) => res.json())
        .then((data) => {data.featured && setGoods(data.featured)})
    }, [])

    return (
        <div className='content container'>
            <Basket quantity={order.length} />
            {loading ? <Loader /> : <FortniteList goods={goods} addToCart={addToCart} />}
        </div>
    );
}

export default Shop;