import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, total } = useCart();

  return (
    <div className="container py-4">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-muted">Cart is empty.</p>
        
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdate={updateQuantity}
              onRemove={removeFromCart}
            />
          ))}
          
          <h4>Total: ${total.toFixed(2)}</h4>
        </>
      )}
    </div>
  );
}