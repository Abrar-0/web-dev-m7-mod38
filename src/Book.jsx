import Bookstore from "./Bookstore";

export default function Book({books}) {
  return (
    <div>
      <h3>Books:{books.length}</h3>

      {books.map((book) => (
        <Bookstore book={book}></Bookstore>
      ))}
    </div>
  );
}
