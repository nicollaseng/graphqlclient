import React, { Component } from 'react';

import BookList from './components/BookList'
import AddBook from './components/AddBook'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

//apollo client setup ----- graphql API Server running

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})

//----- end -------

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="main">
          <h1> Nicollas Reading List</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
 