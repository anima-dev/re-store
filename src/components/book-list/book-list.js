import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import './book-list.css';
import {connect} from 'react-redux';
import {withBooks} from '../hoc';
import {fetchBooks, bookAddedToCart} from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/error-indicator';


const BookList = ({books, onAddToCart}) => {
    return (
        <ul className='book-list'>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}>
                                <BookListItem book={book} onAddToCart={() => onAddToCart(book.id)}/>
                            </li>
                        );
                    })
                }
            </ul>
    );
}

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    };

    render() {
        const {books, loading, error, onAddToCart} = this.props;

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <ErrorIndicator msg={error.message}/>
        }

        return (
            <BookList books={books} onAddToCart={onAddToCart}/>
        );
    };

};

const mapStateToProps = ({books, loading, error}) => {
    return {
        books,
        loading,
        error
    };
};

const mapDispatchToProps = (dispatch, {bookStoreService}) => {
    return {
        fetchBooks: fetchBooks(bookStoreService, dispatch),
        onAddToCart: (id) => dispatch(bookAddedToCart(id))
    };
};

export default withBooks()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));