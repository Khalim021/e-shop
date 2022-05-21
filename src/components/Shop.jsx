import React, {useState, useEffect} from 'react';
import {api_url, api_key} from '../config';
import FortniteList from './FortniteList';
import Loader from './Loader';

function Shop(props) {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(false);

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
            {loading ? <Loader /> : <FortniteList goods={goods} />}
        </div>
    );
}

export default Shop;