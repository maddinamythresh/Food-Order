import logo from "../assets/logo.jpg";
import { useContext } from "react";
import ModalContext from "../Store/ModalContext";
import { add } from "../util/reducer.js";
export default function Items({ item }) {
  const cntx = useContext(ModalContext);
  function handleClick(value) {
    cntx.setCount(add(value, item, cntx));
  }

  return (
    <div className="meal-item">
      <article>
        <img src={`http://localhost:3000/${item.image}`} alt="Item Image" />
        <h3>{item.name}</h3>
        <p className="meal-item-price">{item.price}</p>
        <p className="meal-item-description">{item.description}</p>
        <button
          className="button"
          id={item.id}
          onClick={(event) => handleClick(event.target.id)}
        >
          Add to Cart
        </button>
      </article>
    </div>
  );
}
