
import "./App.css";
import { gql, useQuery } from "@apollo/client";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
const QUERY = gql`
  query {
    Author {
      name
    }
  }
`;
function App() {
  
  return (
    <>
<Header/>
<Home/>
    </>
      

  );
}

export default App;
