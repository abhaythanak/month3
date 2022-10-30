import React, { useState } from "react";
import { Cart } from "./component/Cart";
import Nav from "./component/Navbar"
import Shopping from "./component/Shopping";


function App() {
  const [show ,setShow] = useState(true);
  
  return (
    <div className="App">
      <Nav  setShow={setShow}/>
      {show?<Shopping />:"Cart"}
      {/*<Cart/>*/ }
      
    </div>
  );
}

export default App;
