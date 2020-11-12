import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import './book-list.css';
import {connect} from 'react-redux';
import {withBooks} from '../hoc';
import {booksLoaded} from '../../actions';

class BookList extends Component {

    componentDidMount() {
        const {bookStoreService, booksLoaded} = this.props;
        const data = bookStoreService.getBooks();
        console.log(data);
        booksLoaded(data);

    };

    render() {
        const {books} = this.props;
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

const mapStateToProps = ({books}) => {
    return {
        books
    };
};

const mapDispatchToProps = {
    booksLoaded
};

export default withBooks()(connect(mapStateToProps, mapDispatchToProps)(BookList));


