import React from 'react';
import FortniteItem from './FortniteItem';

function FortniteList(props) {
    const {goods = []} = props

    if(!goods.length) {
        return <h3>there is nothing here</h3>
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