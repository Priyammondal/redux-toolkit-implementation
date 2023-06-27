import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ShowTodo from "./components/ShowTodo";
import EditTodo from "./components/EditTodo";
import AddTodo from "./components/AddTodo";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addtodo" element={<AddTodo />} />
          <Route path="/todos" element={<ShowTodo />} />
          <Route path="/edit/:id" element={<EditTodo />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
