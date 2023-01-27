
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductFrom } from "./component/ProductFroms";
import Error  from "./component/Error";
import Adduser from "./component/Adduser";

function App() {
  return (
    
      <>
        <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductFrom/>} ></Route>
          <Route path="/adduser"element={<Adduser/>}></Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
        </Router>
      </>
    
  );
}

export default App;
