import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import ShowBook from './ShowBook'
//import { Link, Route } from 'react-router-dom'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array,
    onUpdateShelf: PropTypes.func,
  }
  // state = {
  //   query: ''
  // }

  // updateQuery = (query) => {
  //   this.setState(() => ({
  //     query: query.trim()
  //   }))
  // }
  // clearQuery = () => {
  //   this.updateQuery('')
  // }


  render() {
   // const { query } = this.state
    const { books, onUpdateShelf } = this.props

    // const showingBooks = query === ''
    //   ? books
    //   : books.filter((b) => (
    //     b.title.toLowerCase().includes(query.toLowerCase())
    //   ))

    return (
      <ol className='books-grid'>
      {books.map((Book) => (
        <li key={Book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${Book.imageLinks.smallThumbnail})` }}></div>
              <div className="book-shelf-changer">
              
                <select value={Book.shelf} onChange={(event) => onUpdateShelf(Book, event.target.value)}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading" >Currently Reading</option>
                  <option value="wantToRead" >Want to Read</option>
                  <option value="read" >Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{Book.title}</div>
            <div className="book-authors">{Book.authers}</div>
          </div>
        </li>
      ))}
    </ol>
    )
  }
}
export default ListBooks