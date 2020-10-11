import { ApolloServer } from 'apollo-server-micro'
import { schema } from '../../apollo/schema'
import { context } from '../../apollo/context'

const apolloServer = new ApolloServer({ schema, context })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
