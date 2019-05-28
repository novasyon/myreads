
import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import BookTable from './BookTable'
import SearchBar from './SearchBar'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      books: [],
      currentlyReading: [],
      read: [],
      wantToRead: [],
    }
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((response) => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
    })
  }

  render() {
    const changeShelf = this.updateBook

    return (
      <div className="app">
        <Route exact path='/search' render={() => (
          <SearchBar
            onChangeShelf={changeShelf}
            categorizedBooks={this.state.books}
          />
        )} />

        <Route exact path='/' render={() => (
          <BookTable
            books={this.state.books}
            onChangeShelf={changeShelf}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp