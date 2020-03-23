import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";

interface IClient {
  uri: string;
}

const client: ApolloClient<IClient> = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

export default client;
