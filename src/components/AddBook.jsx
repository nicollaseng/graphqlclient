import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { getAuthorsQuery, addBookMutation } from '../queries/queries'

class AddBook extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      name: '',
      authorId: '',
      genre: ''
    }
  }

  displayAuthors(){
    var data = this.props.getAuthorsQuery
    if(data.loading){
      return (
        <option disabled> Loading authors.... </option>
      )
    } else {
      return data.authors.map(author => {
        return (
          <option key = { author.id } value = { author.id }> {author.name} </option>
        )
      })
    }
  }

  onSubmitForm(event){
    event.preventDefault()
    this.props.addBookMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId
      }
    })
  }
  render() {
    return (
      <form id="add-book" onSubmit={this.onSubmitForm.bind(this)}>
        <div className="field">
          <label> Book name: </label>
          <input type="text" onChange={(event) => this.setState({ name: event.target.value })} value={this.state.name} />
        </div>

        <div className="field">
          <label> Genre: </label>
          <input type="text" onChange={(event) => this.setState({ genre: event.target.value })} value={this.state.genre}/>
        </div>

        <div className="field">
          <label> Author: </label>
          <select onChange={(event) => this.setState({ authorId: event.target.value })} >
            {this.displayAuthors()}
          </select>
        </div>

        <button>+</button>
      
      </form>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery"}),
  graphql(addBookMutation, { name: "addBookMutation"})
)(AddBook);
