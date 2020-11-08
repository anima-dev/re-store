import React from 'react';
import {BookServiceConsumer} from '../bookstore-service-context';

const withBooks = () => (Wrapped) => {
    return (props) => {
        return (
            <BookServiceConsumer>
                {
                    (books) => {
                        <Wrapped {...props} bookStoreService={books}/>
                    }
                }
            </BookServiceConsumer>
        );
    };
};

export default withBooks;