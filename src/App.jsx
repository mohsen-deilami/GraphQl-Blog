import "./App.css";
import BlogsPage from "./component/blogs/BlogsPage";
import Home from "./component/home/Home";
import Layout from "./component/layout/Layout";
import AuthorsPage from "./component/authors/AuthorsPage";
import { Routes , Route , Navigate } from "react-router-dom";
function App() {
 
  
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/homepage" replace />} />
          <Route path="/homepage" element={<Home />} />
          <Route path="/blogs/:slug" element={BlogsPage}/>
          <Route path="authors/:slug" element={AuthorsPage}/>
       
        </Routes>
      </Layout>
    </>
  );
}

export default App;
