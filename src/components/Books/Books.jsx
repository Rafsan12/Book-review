import { useEffect, useState } from "react";
import Book from "./Book";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const booksData = async () => {
      try {
        const res = await fetch("books.json");
        const result = await res.json();
        setBooks(result);
      } catch (error) {
        console.log(error);
      }
    };
    booksData();
  }, []);

  return (
    <>
      <h1 className="text-6xl text-center mt-6">Books: {books.length}</h1>
      <div className="grid  md:grid-cols-3 gap-4 mt-4 mb-4">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </>
  );
}
