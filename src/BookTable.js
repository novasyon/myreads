import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookTableRow from './BookTableRow'
import {Link} from 'react-router-dom'
//import Route from 'react-router-dom'

class BookTable extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }
  render() {
    const { books, onChangeShelf } = this.props
    const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading')
    const wantToRead = books.filter((book) => book.shelf === 'wantToRead')
    const read = books.filter((book) => book.shelf === 'read')

    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <BookTableRow
              key="currentlyReadingShelf"
              shelfCategory="currentlyReading"
              title="Currently Reading"
              books={currentlyReading}
              onChangeShelf={onChangeShelf}
            />

            <BookTableRow
              key="wantToReadShelf"
              shelfCategory="wantToRead"
              title="Want to Read"
              books={wantToRead}
              onChangeShelf={onChangeShelf}
            />

            <BookTableRow
              key="readShelf"
              shelfCategory="read"
              title="Read"
              books={read}
              onChangeShelf={onChangeShelf}
            />
          </div>
          <div className="open-search">
          <Link to='/search'><button></button></Link>
        </div>

        </div>
      </div>
    );
  }
}

export default BookTable