import { useDispatch, useSelector } from "react-redux";
import { store } from "./redux/store";
import { saveState } from "./redux/localStorage";
import * as types from "./redux/actions/action.types";
import "./App.css";

store.subscribe(() => {
  saveState(store.getState());
});

const foodItems = [
  { name: "Chicken biryani", id: 1, price: 100 },
  { name: "Fish fry", id: 2, price: 200 },
  { name: "Veg Thali", id: 3, price: 90 },
  { name: "Chicken thali", id: 4, price: 190 },
  { name: "Pizza", id: 5, price: 50 },
  { name: "Chole bhature", id: 6, price: 60 },
  { name: "Chole kulche", id: 7, price: 150 },
  { name: "Dahi puri", id: 8, price: 35 },
  { name: "Pani puri", id: 9, price: 30 },
  { name: "Kachori", id: 10, price: 15 },
];

function App() {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch({ type: types.ADD_TO_CART, item });
  };

  const handleRemoveFromCart = (id) => {
    dispatch({ type: types.REMOVE_FROM_CART, id });
  };

  const cartItems = useSelector((state) => {
    console.log(state);
    return state;
  });

  let totalCost = 0;
  cartItems.map((item) => {
    totalCost += item.price * item.quantity;
  });

  return (
    <div className="App">
      <div className="menu-section">
        <h1>Menu</h1>
        <hr />
        {foodItems.map((item) => (
          <div key={item.id.toString()}>
            <div className="item-card">
              <h3>
                {item.name} <span>₹{item.price}</span>
              </h3>
              <div
                onClick={() => handleAddToCart(item)}
                className="add-to-cart-btn"
              >
                Add to cart
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <div className="cart-section">
        <h1>Cart</h1>
        <hr />
        <div className="cart-items-container">
          {cartItems.map((item) => (
            <div key={item.id.toString()}>
              <div className="cart-item-card">
                <h3>
                  <span
                    style={{
                      borderRight: "1px solid black",
                      marginRight: "6px",
                      paddingRight: "10px",
                    }}
                  >
                    {item.name}
                  </span>{" "}
                  <span
                    style={{
                      borderRight: "1px solid black",
                      marginRight: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    Price: {item.price * item.quantity}
                  </span>
                  <span>Quantity: {item.quantity}</span>
                </h3>
                <div
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="remove-from-cart-btn"
                >
                  Remove from cart
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
        <div className="total-cost">
          <h2>Total cost: ₹{totalCost}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
