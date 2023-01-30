// import "./App.css";
// import React from "react";
// import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";

// import Main from "./other/Main";
// import Error from "./other/Error";
// import Adduser from "./other/Adduser";
// import Navbar from "./other/Navbar";
// import Updateuser from "./other/Updateuser";



// function App() {
 
//   return (
//     <>
//       <Router>
//         <Navbar/>
//          <Routes>
//            <Route path="/" element={ <Main/>}></Route>
//            <Route path="/adduser" element={ <Adduser/>}></Route>
//            <Route path="/user/:id/edit" element={ <Updateuser/>}></Route>
//            <Route path="*" element={<Error/>}></Route>
//          </Routes>
//       </Router>
//     </>
//   );
// }



import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ProductFrom } from "./component/ProductFroms";
import Error  from "./component/Error";
import Adduser from "./component/Adduser";

function App() {
 
  return (
    <>
      <Router>
        <Navbar/>
         <Routes>
           <Route path="/" element={ <Main/>}></Route>
           <Route path="/adduser" element={ <Adduser/>}></Route>
           <Route path="/user/:id/edit" element={ <Updateuser/>}></Route>
           <Route path="*" element={<Error/>}></Route>
         </Routes>
      </Router>
    </>
  );
}


export default App;
