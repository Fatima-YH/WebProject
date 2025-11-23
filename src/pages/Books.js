import booksData from "../data/booksData";
import BookCard from "../components/BookCard";
import { useCart } from "../context/CartContext";

export default function Books() {
  const { addToCart } = useCart();

  return (
    <div className="container py-1">
      <h1 className="text-center my-3 fst-italic  ">
  Our Books
</h1>
      <div className="row g-5">
        {booksData.map((book) => (
          <div className="col-md-3" key={book.id}>
            <BookCard book={book} onAdd={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}