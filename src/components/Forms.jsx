import { forwardRef } from "react";
import { createPortal } from "react-dom";
import ModalContext from "../Store/ModalContext";
import { useContext } from "react";

const Forms = forwardRef(function Forms({ onSelect }, ref) {
  const cntx = useContext(ModalContext);
  
  async function handleOrder(event){
    event.preventDefault()
    const fd=new FormData(event.target)
    const data=Object.fromEntries(fd);
    
    data.items=Object.entries(cntx.cart.items)
    console.log(data)
    try{
      const response= await fetch("http://localhost:3000/orders",{
      method:"POST",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify({
        order:data
      })
    })
    console.log(response)

    }
    catch(error){
      console.log(error.message)
    }
    
  }
  return createPortal(
    <form onSubmit={handleOrder}>
      <dialog ref={ref}>
        <h2>Checkout</h2>
        <p>Total Amount:${cntx.total}</p>
        <div className="control">
          <div>
            <label>Full Name</label><br/>
            <input name="name" type="text" required/>
          </div>
          <div>
            <label>E-mail Adreess</label><br/>
            <input name="email"type="email" required />
          </div>
          <div>
            <label>Street</label><br/>
            <input name="street"type="text" required/>
          </div>
          <div className="control-row">
            <div>
              <label>Postal Code</label>
              <input name="PostalCode" type="number"  maxLength={5} required />
            </div>
            <div>
              <label>City</label>
              <input name="City" type="text" required />
            </div>
          </div>
        </div>
        <div className="button-container"> 
          <button  onClick={onSelect}>Close</button>
          <button className="button" name="submit" type="submit" >Submit Order</button>
        </div>
      </dialog>
    </form>,
    document.getElementById("modal")
  );
});
export default Forms;
