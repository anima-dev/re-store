const booksLoaded = (newBooks) => {
    return {
        type: 'BOOKS_LOADED',
        payload: newBooks
    };
};

const booksRequested = () => {
    return {
        type: 'BOOKS_REQUESTED'
    };
};

const bookFetchError = (error) => {
    return {
        type: 'BOOK_FETCH_ERROR',
        payload: error
    };
};

export {
    booksLoaded,
    booksRequested,
    bookFetchError
};