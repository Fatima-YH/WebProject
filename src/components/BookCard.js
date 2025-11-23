export default function BookCard({ book, onAdd }) {
  return (
    <div className="card h-100">
      <img src={book.image} className="card-img-top" alt={book.title}
        style={{ height: "350px", objectFit: "cover" }}

 />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text text-muted">{book.author}</p>
        <p className="fw-bold">${book.price}</p>
        <button className="btn btn-primary mt-auto" onClick={() => onAdd(book)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}