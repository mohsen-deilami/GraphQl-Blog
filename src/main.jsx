
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { ApolloClient , InMemoryCache , ApolloProvider } from '@apollo/client';
const client = new ApolloClient({
  uri: 'https://api-us-west-2.hygraph.com/v2/cl5ex4xej1o9h01ug1jevguyc/master',
  cache: new InMemoryCache(),
});
createRoot(document.getElementById('root')).render(
 <ApolloProvider client={client}>
  
    <App />
 </ApolloProvider>
 
)
