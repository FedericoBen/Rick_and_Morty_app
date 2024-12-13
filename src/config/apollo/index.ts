import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_URL_RICK_AND_MORTY,
  }),
  cache: new InMemoryCache(),
});

export default client;
