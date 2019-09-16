import gql from 'graphql-tag'

// Please note that the term "ClientState"
// refers to the ApolloClient. In oder to fully render
// a react application we need the state on the server
// and on the client. Otherwise our react components
// might throw because they can't reach specified values
// in the Schema.
// Therefor the @client targets the react app as a whole (Server&Client).

export const typeDefs = gql`
  extend type Post {
    renderedOn: String!
  }
`

export const resolvers = {
  Post: {
    renderedOn: () => {
      return typeof window === 'undefined' ? 'Server' : 'Client'
    }
  }
}
