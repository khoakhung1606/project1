import "./App.css";
import { useState, useEffect } from "react";
import Bookshelf from "./Bookshelf";
import * as BooksAPI from "./BooksAPI";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [books, setBooks] = useState([]);
  const bookshelftitle = [
    { title: "Currently Reading", shelfName: "currentlyReading" },
    { title: "Want to Read", shelfName: "wantToRead" },
    { title: "Read", shelfName: "read" },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    BooksAPI.getAll().then((booksFromApi) => {
      setBooks(booksFromApi);
    });
  }, []);
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {bookshelftitle.map((bookshelf, index) => (
              <Bookshelf
                key={index}
                title={bookshelf.title}
                books={
                  books &&
                  books.filter(
                    (book) => book && book.shelf === bookshelf.shelfName
                  )
                }
                setBooks={setBooks}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => navigate("/search")}>Add a book</a>
        </div>
      </div>
    </div>
  );
};

export default App;
