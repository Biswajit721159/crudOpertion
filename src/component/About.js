import React, { useState } from "react";

export default function About() {


const [mycolor, setmycolor] = useState({
  color: "green",
  backgroundColor: "white",
  padding: "10px",
  fontFamily: "Arial",
});

const [btnText,setbtnText] = useState("Enable Dark Mode");

  const toggelStyle=()=>{

      if(mycolor.color ==='green')
      {
        setmycolor({
                     color: "red",
                     backgroundColor: "black",
                     padding: "10px",
                     fontFamily: "Arial",
                  });
        setbtnText("Enable dark Mode"); 
      }
      else
      {
        setmycolor({
                    color: "green",
                    backgroundColor: "white",
                    padding: "10px",
                    fontFamily: "Arial",
                  });
        setbtnText("Enable light Mode"); 
      }
  };
 


  return (
    <div  className="container mt-5" >
      <div className="accordion" id="accordionExample">
        <div className="accordion-item"  style={mycolor}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mycolor}
            >
              Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={mycolor}
          >
            <div className="accordion-body"  style={mycolor}>
               <strong>In this project , two sub project are present</strong>
               1.Text change app 
               2.crud operation
            </div>
          </div>
        </div>
        <div className="accordion-item"style={mycolor}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mycolor}
            >
             Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
            style={mycolor}
          >
            <div className="accordion-body"  style={mycolor}>
              <strong>Text change app </strong> 
              in this project  basically we are get some input from user and change something 
              .first section change the uppercase latter .second change the charcter 
              .third section is copy text  ,it is just copy the text ans reused somewhere
              .fourth section is remove space if there space are present(basically more tha one space if one space present than nothing to do)
              .fifth section is just clear the text...............

            </div>
          </div>
        </div>
        <div className="accordion-item"  style={mycolor}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mycolor}
            >
               Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mycolor}  >
              <strong>This section is all about Home page </strong> 
               this section is all about the crud operation basically 
                here are two button first -- AddUser ,second--delete user 
               .first AddUser this buuton add adding a new user in your curd opeartion 
               .Second Delete any user from your crud page .............
            </div>
          </div>
        </div>
      </div>
      <div className="container  my-4 mx-4" >
        <button onClick={toggelStyle} type="button" className="btn btn-dark">{btnText}</button>
      </div>
    </div>
  );
}
