import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import PropTypes from 'prop-types'

class SearchBar extends Component {
static propTypes = {
  onChangeShelf: PropTypes.func.isRequired,
  categorizedBooks: PropTypes.array.isRequired
}

  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState({query})

    if(query) {
      BooksAPI.search(query).then((books) => {
        if(books.constructor === Array) {
          this.setState({ books: books })
        }
        else {
          this.setState({ books: [] })
        }
      })
    }
    else {
      this.setState({ books: [] })
    }
  }

  render() {
    const { onChangeShelf, categorizedBooks } = this.props
    const { query, books } = this.state

    return (
      <div>

        <div className="search-books">
          <div className="search-books-bar">
            <Link to='/' className='close-search'>Close</Link>

            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={(e) => this.updateQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="search-books-results">
            <ol className="books-grid">
              {books.map((book) => (
                <li key={book.id}>
                  <Book
                    onChangeShelf={onChangeShelf}
                    book={book}
                    books={categorizedBooks}
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar