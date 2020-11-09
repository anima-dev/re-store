import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import {BookStoreService} from './services';
import {BookServiceProvider} from './components/bookstore-service-context';
import store from './store';

const bookStoreService = new BookStoreService();


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookServiceProvider value={bookStoreService}>
                <Router>
                    <App/>
                </Router>
            </BookServiceProvider>
        </ErrorBoundry>
    </Provider>, document.getElementById('root'));