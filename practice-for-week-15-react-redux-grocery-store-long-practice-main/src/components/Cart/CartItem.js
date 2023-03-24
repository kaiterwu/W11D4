import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { populateCart,removeCart } from '../../store/cart';


function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch()

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          // onBlur = {()=>dispatch(populateCart(item.id))}
        />
        <button
          className="cart-item-button"
          onClick = {()=>dispatch(populateCart(item.id))}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick = {()=>dispatch(removeCart(item.id))}
        >
          -
        </button>
        <button
          className="cart-item-button"
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;