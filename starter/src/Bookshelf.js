import "./App.css";
import Book from "./Book";
import PropTypes from "prop-types";

const Bookshelf = (props) => {
  const { title, books, setBooks } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books &&
            books.map((book, index) => (
              <li key={index}>
                <Book book={book} setBooks={setBooks} />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  books: PropTypes.array.isRequired,
  book: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default Bookshelf;
