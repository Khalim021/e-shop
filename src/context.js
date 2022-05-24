import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: false,
    order: [],
    basketShow: false
}

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.addToCart = (item) => {
        dispatch({type: "ADD_TO_CART", payload: item})
    }

    value.incrementQuentity = (itemID) => {
        dispatch({type: "INCREMENT_QUENTITY", payload: {id: itemID}})
    }

    value.decrementQuentity = (itemID) => {
        dispatch({type: "DECREMENT_QUENTITY", payload: {id: itemID}})
    }

    value.handleBasketShow = () => {
        dispatch({type: "OP_BASKET"})
    }

    value.removeFromBasket = (itemID) => {
        dispatch({type: "REMOVE_ITEM", payload: {id: itemID}})
    }

    value.setGoods = (data) => {
        dispatch({type: "SET_GOODS", payload: data})
    }

    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}












