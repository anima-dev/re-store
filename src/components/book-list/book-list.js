import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import './book-list.css';
import {connect} from 'react-redux';
import {withBooks} from '../hoc';
import {booksLoaded, booksRequested, bookFetchError} from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

class BookList extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    };

    render() {
        const {books, loading, error} = this.props;

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <ErrorIndicator msg={error.message}/>
        }

        return (
            <ul className='book-list'>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}>
                                <BookListItem book={book}/>
                            </li>
                        );
                    })
                }
            </ul>
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

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchBooks: () => {
            dispatch(booksRequested());
            ownProps.bookStoreService.getBooks()
                .then((data) => dispatch(booksLoaded(data)))
                .catch((err) => {
                    console.dir(err);
                    dispatch(bookFetchError(err))
                });
        }
    };
};

export default withBooks()(connect(mapStateToProps, mapDispatchToProps)(BookList));