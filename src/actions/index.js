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