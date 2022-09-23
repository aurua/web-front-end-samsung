import { any, func, number,  shape } from 'prop-types';
import React, { useContext } from 'react';

const CartContext = React.createContext();

export const CartProvider = ({value, children}) => {
    return <CartContext.Provider value = {value}>{children}</CartContext.Provider>
};

CartProvider.propTypes = {
    value: shape ({
        carts: shape({
        products: any,
        totalPrice: number}),
        onCartItemUpdate: func,
    }),
    children: any,
}

export const useCart = () => {
    const value = useContext(CartContext);
    if(!value) {
        throw new Error("cart context error");
    }
    return value;
}
