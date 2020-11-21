const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 100
};

const updateCartItems = (items, idx, newItem) => {
    if (idx === -1) {
        return [...items, newItem];
    } else if (newItem.count === 0) {
        return [
            ...items.slice(0, idx), 
            ...items.slice(idx + 1)
        ];
    } else {
        return [
            ...items.slice(0, idx), 
            newItem, 
            ...items.slice(idx + 1)
        ];
    }
};

const updateBookInCart = (book, bookInCart = {}, qty) => {
    const {
        id = book.id,
        title = book.title,
        count = 0,
        total = 0
    } = bookInCart;
    return {
        id,
        title,
        count: count + qty,
        total: total + qty*book.price
    };

};

const updateCart = (state, id, qty) => {
    const {books, cartItems} = state;
    const bookToAdd = books.find((book) => (book.id === id));
    const bookToAddIdx = cartItems.findIndex((item) => item.id === bookToAdd.id);
    const bookInCart = cartItems[bookToAddIdx];

    const addedBook = updateBookInCart(bookToAdd, bookInCart, qty);

    return {
        ...state, 
        cartItems: updateCartItems(cartItems, bookToAddIdx, addedBook)
    };
};

const reducer = (state = initialState, action) => {
    console.log(action.type);

    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            };
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };
        case 'BOOK_ADDED_TO_CART':
            return updateCart(state, action.payload, 1);
        
        case 'BOOK_REMOVED_FROM_CART':
            return updateCart(state, action.payload, -1);
        case 'BOOK_DELETED_FROM_CART':
            const bookToDelete = state.cartItems.find(({id}) => id === action.payload)
            return updateCart(state, action.payload, -bookToDelete.count);
            
        default: 
            return state;
    }
    
};

export default reducer;