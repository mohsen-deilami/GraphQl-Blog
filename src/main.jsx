import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://us-west-2.cdn.hygraph.com/content/cm50cdtba06o007vysb8f6n62/master",
  cache: new InMemoryCache(),
});
createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
