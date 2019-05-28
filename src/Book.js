import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ListBkResults extends Component {
  static propTypes = {
    onChangeShelf: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      shelf: this.props.book.shelf
    }
  }

  selectShelf = () => {
    const bookShelf = this.props.books.find(book => book.id === this.props.book.id);

    if (bookShelf)
      return bookShelf.shelf;
    else
      return 'none'
  }

  render() {
    const imageUrl = this.props.book.imageLinks && this.props.book.imageLinks.thumbnail
    const authors = this.props.book.authors && this.props.book.authors.join()
    const title = this.props.book.title

    return (
      <div>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageUrl})` }}></div>
            <div className="book-shelf-changer">
              <select
                defaultValue={this.selectShelf()}
                onChange={e => this.props.onChangeShelf(this.props.book, e.target.value)}
              >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </div>
    )
  }
}

export default ListBkResults