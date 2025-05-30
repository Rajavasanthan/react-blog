import { Route, Routes } from "react-router";
import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Home from "./Home";
import Service from "./Service";
import TopBar from "./TopBar";
import BlogList from "./BlogList";
import Blog from "./Blog";

function App() {
  return (
    <div>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
