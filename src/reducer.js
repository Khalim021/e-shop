import { toast } from "react-toastify";

export function reducer(state, {type, payload}) {
    switch(type) {
        case 'ADD_TO_CART': {
            const itemIndex = state.order.findIndex(
                (orederItem) => orederItem.id === payload.id);
            let newOrders = null;
            if(itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                }
                newOrders = [...state.order, newItem];
            } else{
                newOrders = state.order.map((orederItem, index) => {
                    if(index === itemIndex) {
                        return{
                            ...orederItem,
                            quantity: orederItem.quantity + 1,
                        }
                    } else {
                        return orederItem
                    }
                });
            }
            toast.success('Item added successfully');
                return {
                    ...state,
                    order: newOrders,
                }
        };
        case 'INCREMENT_QUENTITY':
            return {
                ...state,
                order: state.order.map(el => {
                    if(el.id === payload.id) {
                        const newQuentity = el.quantity + 1
                        return{
                            ...el,
                            quantity: newQuentity,
                        }
                    } else {
                        toast.success('Added successfully')
                        return el
                    }
                })
            }
        case 'DECREMENT_QUENTITY':
            return {
                ...state,
                order: state.order.map(el => {
                    if(el.id === payload.id) {
                        const newQuentity = el.quantity - 1
                        return{
                            ...el,
                            quantity: newQuentity >= 0 ? newQuentity : 0,
                        }
                    } else {
                        return el
                    }
                })
            }
        case 'OP_BASKET':
            return {
                ...state,
                basketShow: !state.basketShow,
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                order: state.order.filter(item => item.id !== payload.id),
            }
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false
            }
        default:
            return state
    }
}













