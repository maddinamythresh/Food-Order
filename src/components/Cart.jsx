import { useContext, useRef,useState } from "react";
import { createPortal } from "react-dom";
import { forwardRef } from "react";
import ModalContext from "../Store/ModalContext";
import {add, subtract,calculate} from "../util/reducer"
const Cart =forwardRef(function Cart({ onSelect,onForm }, ref) {
  const cntx = useContext(ModalContext);
 
  const item = Object.entries(cntx.cart.items);
  const total = calculate(item);
  cntx.total=total;
  function handleform(){
    onSelect()
    onForm()
  }

  function handleO(value,index) {
    let p = (
      <li className="cart-item" key={index}>
        <p>
          {" "}
          {value[1].name}-{value[1].quantity}x{value[1].price}
        </p>
        <div className="cart-item-actions">
          <button
            onClick={() =>
              cntx.setCount(subtract(value[0], cntx.cart.items[value[0]], cntx))
            }
          >
            -
          </button>
          <p>{value[1].quantity}</p>
          <button
            onClick={() =>
              cntx.setCount(add(value[0], cntx.cart.items[value[0]], cntx))
            }
          >
            +
          </button>
        </div>
      </li>
    );
    return p;
  }

  return createPortal(
    <dialog className="cart" ref={ref}>
        
      <div>
        <h2>Your Cart</h2>
        {item.length===0 && <p> You had empty cart.Order your favourite food at our restraunt</p>}
        <ul>{item.map((arr,index) => handleO(arr,index))}</ul>

        <div className="cart-total">{total}</div>
        <div className="cart-end">
            <button id="cart-end-button" onClick={onSelect}>Close</button>
            <button id="cart-end-checkout" onClick={handleform}>Go to checkout</button>
        </div>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Cart;
