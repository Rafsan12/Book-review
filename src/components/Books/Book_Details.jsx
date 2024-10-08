import { useLoaderData, useParams } from "react-router-dom";

function Book_Details() {
  const books = useLoaderData();
  const { id } = useParams();
  // console.log(books, id);
  const book = books.find((book) => book.id == id);
  // console.log(book);
  return (
    <div>
      <h2 className="text-3xl text-center mt-4 mb-4 ">
        Book details of : {book.name}
      </h2>
      <div className="border mt-4"></div>
      <div className="grid grid-cols-2 gap-4 mt-4 mb-4">
        <div>
          <img src={book.book_img} alt="" />
        </div>
        <div>
          <h2 className="text-2xl">{book.name}</h2>
          <p className="mt-2 text-xl">By : {book.author_name}</p>
          <div className="border mt-4"></div>
          <p className="mt-4 text-xl">Review: {book.review.comments}</p>
          <div className="mt-4 ">
            {book.book_tag.map((tag, index) => (
              <div key={index} className="badge badge-outline gap-4">
                {tag}
              </div>
            ))}
          </div>
          <div className="border mt-4"></div>
          <div className="mt-4 text-xl">
            <p>
              Number of Pages: <span className="ml-10">{book.pages}</span>
            </p>
            <p>
              Publisher: <span className="ml-20">{book.publisher_name}</span>
            </p>
            <p>
              Year of Publishing:{" "}
              <span className="ml-6">{book.publishing_year}</span>
            </p>
            <p>
              Rating: <span className="ml-28">{book.review.rating} </span>
            </p>
          </div>
          <div className="mt-4">
            <button className="mr-4 border py-2 px-6 rounded">Reed</button>
            <button className="border py-2 px-6 bg-purple-400 text-white rounded ">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book_Details;
