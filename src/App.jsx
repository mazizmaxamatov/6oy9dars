import React, { Children } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import BookList from "./pages/BookList";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import './App.css'

const App = () => {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/add" element={<AddBook />} />
          <Route path="/" element={<BookList />} />
          <Route path="/edit/:id" element={<EditBook />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

