import logo from "../assets/logo.jpg";
import { useContext, useState, useRef } from "react";
import ModalContext from "../Store/ModalContext";
import Cart from "./cart";

import Forms from "./Forms.jsx"

export default function Header() {
  const dialog = useRef(null);
  const formRef=useRef();
  const[forms,setForm]=useState(false)
  const cntx = useContext(ModalContext);
  const [modal, setModal] = useState(false);
  function handleClick() {
    if (modal) {
      dialog.current.close();
      
    }
    setModal((prev) => !prev);
  }
  function handleForm(){
    dialog.current.close();
    if(forms){
      formRef.current.close();
    }
    setForm((prev) => !prev)
    
  }
  if (modal) {
    dialog.current.showModal();
  }

  if(forms){
    formRef.current.showModal();
  }


  

  return (
    <header id="main-header">
      <Cart ref={dialog} onSelect={handleClick} onForm={handleForm}/>
      <Forms ref={formRef} onSelect={handleForm}/>
      <div id="title">
        <img src={logo} />
        <h1>React Food</h1>
      </div>
      <button onClick={handleClick}>Cart({cntx.cart.quantity})</button>
    </header>
  );
}
