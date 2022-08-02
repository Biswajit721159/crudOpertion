import React, { useState } from "react";

export default function About() {



 const [mode ,setmode]=useState("light");
 const [btnText,setbtnText] = useState("Dark Mode on");

  const toggelStyle=()=>{

      if(mode==="light")
      {
        setmode("dark");
        document.body.style.backgroundColor='#848484';
        setbtnText('Light mode on');
      }
      else if(mode==="dark")
      {
        setmode("light");
        document.body.style.backgroundColor='rgb(255,255,255)';
        setbtnText('Dark mode on');
      }
  };
 

  return (
    <div  className="container my-0 mx-0" >
      
        <button onClick={toggelStyle} type="button" className="btn btn-info">{btnText}</button>
      
    </div>
  );
}
