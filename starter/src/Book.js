import "./App.css";
import * as BooksAPI from "./BooksAPI";

const Book = (props) => {
  const { book, setBooks, isSearching } = props;

  const handleChange = (event) => {
    if (!isSearching) {
      if (event !== "shelf") {
        BooksAPI.update(book, event).then(() => {
          setBooks((prevBooks) => [
            ...prevBooks.filter((b) => b.id !== book.id),
            { ...book, shelf: event },
          ]);
        });
      }
    } else {
      if (event !== "shelf") {
        BooksAPI.update(book, event);
      }
    }
  };
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${
              book.imageLinks && book.imageLinks.thumbnail
            }")`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            onChange={(event) => handleChange(event.target.value)}
            defaultValue={book.shelf}
          >
            <option value="shelf" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors &&
          book.authors.map((ath) => (
            <span>
              {ath}
              <br />
            </span>
          ))}
      </div>
    </div>
  );
};

export default Book;
