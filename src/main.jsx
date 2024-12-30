import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://ap-south-1.cdn.hygraph.com/content/cm57jbz9403z007weri7eesbu/master",
  cache: new InMemoryCache(),
});
createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </ApolloProvider>
);
