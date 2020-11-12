import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../pages/home';
import CartPage from '../pages/cart';
import './app.css';
import ShopHeader from '../shop-header/shop-header';

const App = () => {
    return (
        <div>
            <ShopHeader/>
            <Switch>
                <Route
                    path='/'
                    component={HomePage}
                    exact />
                <Route 
                    path='/cart'
                    component={CartPage}/>
            </Switch>
        </div>
    );
};

export default App;