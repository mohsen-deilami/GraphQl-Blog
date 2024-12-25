
import "./App.css";
import { gql, useQuery } from "@apollo/client";
import Home from "./component/home/Home";
import Layout from "./component/layout/Layout";
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
<Layout>

<Home/>
</Layout>
    </>
      

  );
}

export default App;
