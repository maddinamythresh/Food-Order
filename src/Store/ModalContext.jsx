import { createContext } from "react"


const ModalContext = createContext({ 
  
  cartItemsCount: 0,
  itemNames: [],
  
});

export default ModalContext;