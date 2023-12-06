import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Add from "./pages/Add";
import Books from "./pages/Books";
import Update from "./pages/Update";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    setIsAuthenticated(JSON.parse(localStorage.getItem("is_authenticated")));
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {isAuthenticated ? (
            <>
              <Route path="/" element={<Books />} />
              <Route path="/add" element={<Add />} />
              <Route path="/update/:id" element={<Update />} />
            </>
          ) : (
            <Route path="/" element={<Login />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
