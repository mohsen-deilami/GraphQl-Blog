
import "./App.css";
import { gql, useQuery } from "@apollo/client";
import Header from "./component/header/Header";
const QUERY = gql`
  query {
    Author {
      name
    }
  }
`;
function App() {
  
  return (
    
<Header/>
      

  );
}

export default App;
