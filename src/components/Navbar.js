import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";



export default function Navbar() {
  const { cart } = useCart();
  const count = cart.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border bottom ">
      <div className="container" >
            <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <img
            src="/logo.jpg"  
            width="100"  
          />
        
        </Link>


        <div className="collapse navbar-collapse navbar-toggler ">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><NavLink className="nav-link " to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/books">Books</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
          </ul>
          <NavLink className="btn btn-outline-primary" to="/cart">
            Cart ({count})
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
