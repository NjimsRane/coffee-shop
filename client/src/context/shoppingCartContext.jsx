import { createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components";


// create the context
export const ShoppingCartContext = createContext({});

// get the provider


export const ShoppingCartProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const getItemtQuantity = (id) => {
        return (cartItems.find(item => item.id === id))
            ?.quantity
            || 0;

    };
    const increaseCartQuantity = (id) => {
        setCartItems(currentItems => {
            // if the items are empty , add 1 item in it
            if (currentItems.find(item => item.id === id) == null) {
                return ([...currentItems, { id, quantity: 1 }]);
            } else {
                // if the have an item already just increase for each item by the id
                return currentItems.map(item => {
                    return (item.id === id)
                        ? { ...item, quantity: item.quantity + 1 }
                        : item;
                });
            }


        });
    };
    const decreaseCartQuantity = (id) => {
        setCartItems(currentItems => {
            // if the quantity is equal to 1 or does not exist , filter the list and return the items and remove the item we pass the id on
            if (currentItems.find(item => item.id === id)?.quantity === 1) {
                return currentItems.filter(item => item.id !== id);
            } else {
                // if  have an item already just decrease for each item by the id
                return currentItems.map(item => {
                    return (item.id === id)
                        ? { ...item, quantity: item.quantity - 1 }
                        : item;
                });
            }


        });
    };
    const removeFromCart = (id) => {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id);
        });
    };




    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);
    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    return (
        <ShoppingCartContext.Provider
            value={{
                getItemtQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                openCart,
                closeCart,
                cartItems,
                cartQuantity,

            }}>
            {children}
            <ShoppingCart />
        </ShoppingCartContext.Provider>
    );
};



// get the context
export const useShoppingCart = () => {
    return useContext(ShoppingCartContext);
};

