const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    };
};

const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    };
};

const bookFetchError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    };
};

export const bookAddedToCart = (bookID) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookID
    };
};

export const bookDel = (bookID) => {
    return {
        type: 'BOOK_DELETED_FROM_CART',
        payload: bookID
    };
}

export const bookInc = (bookID) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookID
    };
};

export const bookDec = (bookId) => {
    return {
        type: 'BOOK_REMOVED_FROM_CART',
        payload: bookId
    };
};

const fetchBooks = (bookStoreService, dispatch) => () => {
    dispatch(booksRequested());
    bookStoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => {
            console.dir(err);
            dispatch(bookFetchError(err))
        });
};

export {
    fetchBooks
};