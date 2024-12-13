import { ApolloProvider } from "@apollo/client";
import Principal from "./pages/principal";
import client from "./config/apollo";

function App() {
  return (
    <ApolloProvider client={client}>
      <Principal />;
    </ApolloProvider>
  );
}

export default App;
