import { useReducer, useState } from "react";
import Header from "./components/Header.jsx"
import Menu from "./components/Menu.jsx";
import ModalContext from "./Store/ModalContext.jsx"; 



function App() {
  const [initialValue,setValue]=useState({
    quantity:0,
    items:{}
  })

  console.log(initialValue)
  
  return (
    <ModalContext.Provider value={{cart:initialValue,
      setCount:setValue,
      total:0
    }}>
      <Header />
      <Menu />
    </ModalContext.Provider>
  );
}

export default App;
