import React from 'react';
import FortniteItem from './FortniteItem';
import Loader from './Loader';
import {useContext} from 'react';
import {ShopContext} from '../context';

function FortniteList() {
    const {goods = []} = useContext(ShopContext)

    if(!goods.length) {
        return <Loader />
    }

    return (
        <div className='cards'>
            {goods.map((item) => (
                <FortniteItem key={item.id} {...item}/>
            ))}
        </div>
    );
}

export default FortniteList;