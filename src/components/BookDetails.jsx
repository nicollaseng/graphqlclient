import React, { Component } from "react";
import { graphql } from "react-apollo";
import _ from 'lodash'

import { getBookQuerie } from '../queries/queries'


class BookDetails extends Component {
    bookDetails(){
        const { book } = this.props.data
        if(book){
            return(
                <div>
                    <p>Book Genre: {book.genre}</p>
                    <p>Author Name: {book.author.name}</p>
                    <p>Author Age: {book.author.age}</p>
                    <p>Author books:</p>
                    {_.map(book.author.book, books => (
                        <ul>
                            <li>{books.name}</li>
                        </ul>
                    ))}
                </div>
            )
        } else {
            <p> Não há atividade </p>
        }
    }
  render() {
      console.log(this.props)
    return (
      <div id="book-details">
        <p> Output book details here</p>
        {this.bookDetails()}
      </div>
    );
  }
}

export default graphql(getBookQuerie, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails)