import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
require("bootstrap");

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get(
          "https://library-crud-application-backend.vercel.app/books"
        );
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://library-crud-application-backend.vercel.app/books/${id}`
      );
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Library Management System</h1>
      <div className="books">
        {books.map((book) => (
          <div key={book.id} className="book">
            <img src={book.cover} alt="" />
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <span>{book.price} €</span>
            <button className="update">
              <Link
                to={`/update/${book.id}`}
                style={{
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Update
              </Link>
            </button>
            <button className="delete" onClick={() => handleDelete(book.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>

      <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          + Add new book
        </Link>
      </button>
    </div>
  );
};

export default Books;
