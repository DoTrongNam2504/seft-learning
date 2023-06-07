import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListPosts from "./components/PostsList";
import AddPost from "./components/AddPost";
import ShowPost from "./components/ShowPost";
import EditPost from "./components/EditPost";
import Sidebar from "./layouts/Sidebar";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar />
              <Routes>
                <Route exact path="/" element={<ListPosts />} />
                <Route exact path="/add" element={<AddPost />} />
                <Route exact path="/edit/:id" element={<EditPost />} />
                <Route exact path="/show/:id" element={<ShowPost />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
