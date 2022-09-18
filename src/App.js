
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ProductFrom } from "./component/ProductFroms";

function App() {
  return (
    
      <>
        <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductFrom/>} >
          </Route>
        </Routes>
        </Router>
      </>
    
  );
}

export default App;
