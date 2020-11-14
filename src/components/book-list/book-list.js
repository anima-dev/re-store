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
        const {
            bookStoreService,
            booksLoaded,
            booksRequested,
            bookFetchError} = this.props;
        booksRequested();
        bookStoreService.getBooks()
            .then((data) => booksLoaded(data))
            .catch((err) => {
                console.dir(err);
                bookFetchError(err)
            })
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

const mapDispatchToProps = {
    booksLoaded,
    booksRequested,
    bookFetchError
};

export default withBooks()(connect(mapStateToProps, mapDispatchToProps)(BookList));


