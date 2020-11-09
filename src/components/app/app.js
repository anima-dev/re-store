import React from 'react';
import {withBooks} from '../hoc';
import './app.css';

const App = ({bookStoreService}) => {
    console.log(bookStoreService.getBooks());
    return (
        <div>
            <h2>This is my App</h2>
        </div>
    );
};

export default withBooks()(App);