import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Book({ book }) {
  const { id, name, book_img, book_tag, author_name } = book;
  return (
    <>
      <div className="card card-compact bg-base-100  shadow-xl">
        <figure>
          <img className="w-44" src={book_img} alt="Shoes" />
        </figure>
        <div className="card-actions mt-2">
          {book_tag.map((tag, index) => (
            <div key={index} className="badge badge-outline">
              {tag}
            </div>
          ))}
        </div>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>By : {author_name}</p>
          <div className="card-actions ">
            <Link to={`/details/${id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
