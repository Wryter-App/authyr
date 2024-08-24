import BookIcon from "../BookIcon";

const BookList = ({ books, className = "" }) => {
  return (
    <div className={`booklist ${className}`}>
      {books.map((book) => (
        <BookIcon key={book.id} {...book} />
      ))}
    </div>
  );
};

export default BookList;
