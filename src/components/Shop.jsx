import React, {useState, useEffect} from 'react';
import {api_url, api_key} from '../config';
import BaksetList from './BaksetList';
import Basket from './Basket';
import FortniteList from './FortniteList';
import Loader from './Loader';

function Shop(props) {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(false);
    const [order, setOrder] = useState([]);
    const [basketShow, setBasketShow] = useState(false);

    const addToCart = (item) => {
        const itemIndex = order.findIndex((orederItem) => orederItem.id === item.id);

        if(itemIndex < 0) {
            const newItem = {
                ...item,
                quentity: 1,
            }
            setOrder([...order, newItem])
        } else{
            const newOrder = order.map((orederItem, index) => {
                if(index === itemIndex) {
                    return{
                        ...orederItem,
                        quantity: orederItem.quantity + 1,
                    }
                } else {
                    return item
                }
            });
            setOrder(newOrder)
        }
    }

    const handleBasketShow = () => {
        setBasketShow(!basketShow)
    }

    const removeFromBasket = (itemID) => {
        const newOrder = order.filter(item => item.id !== itemID);
        setOrder(newOrder)
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
            <Basket quantity={order.length} handleBasketShow={handleBasketShow}/>
            {loading ? <Loader /> : <FortniteList goods={goods} addToCart={addToCart} />}
            {basketShow && <BaksetList order={order} 
            handleBasketShow={handleBasketShow} 
            removeFromBasket={removeFromBasket}/>
            }
        </div>
    );
}

export default Shop;