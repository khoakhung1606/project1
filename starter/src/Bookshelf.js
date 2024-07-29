import "./App.css";
import Book from "./Book";

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

export default Bookshelf;
