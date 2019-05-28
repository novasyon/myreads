import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import ShowBook from './ShowBook'
//import { Link, Route } from 'react-router-dom'

class BookCategoryRow extends Component {
    static propTypes = {
        books: PropTypes.array,
        onUpdateShelf: PropTypes.func,
      }
      
    render() {
      const category = this.props.category;
      return (
        <tr>
          <th colSpan="2">
            {category}
          </th>
        </tr>
      );
    }
  }