import "./App.css";
import BlogList from "./Component/BlogList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateBlog from "./Component/CreateBlog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogList />} exact />
        <Route path="/create" element={<CreateBlog />} exact />
      </Routes>
    </Router>
  );
}

export default App;
