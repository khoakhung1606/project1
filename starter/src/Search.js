import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import Book from "./Book";

import * as BooksAPI from "./BooksAPI";

const Search = (props) => {
  const [searchText, setSearchText] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (searchText.length !== 0) {
      BooksAPI.search(searchText).then((searchBooks) => {
        if (!searchBooks.error) {
          BooksAPI.getAll().then((allBooks) => {
            setSearchBooks(setBookShelf(searchBooks, allBooks));
          });
        } else {
          setSearchBooks([]);
        }
      });
    } else {
      setSearchBooks([]);
    }
  }, [searchText]);

  const setBookShelf = (searchBooksLocal, allBooks) => {
    return searchBooksLocal.map((book) => {
      for (let i = 0; i < allBooks.length; i++) {
        if (allBooks[i].id === book.id) {
          return { ...book, shelf: allBooks[i].shelf };
        }
      }
      return { ...book, shelf: "none" };
    });
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search" onClick={() => history.push("/")}>
          Close
        </button>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={(event) => setSearchText(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchBooks &&
            searchBooks.map((book, index) => (
              <Book key={index} book={book} isSearching={true} />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;
