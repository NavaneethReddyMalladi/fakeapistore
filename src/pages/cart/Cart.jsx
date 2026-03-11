import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>My Cart</h1>

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />

          <div>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>

            <button onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}

      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;   