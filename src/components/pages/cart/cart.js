import React from 'react';
import ShoppingCartTable from '../../shopping-cart-table';

import './cart.css';

const CartPage = () => {
    return (
        <>
            <h2>My Cart</h2>
             <ShoppingCartTable />
        </>
    );
};

export default CartPage;