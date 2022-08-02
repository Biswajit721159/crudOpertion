
import React, { useState } from "react";

export default function TextForm(props) {


  const [text, setText] = useState("");


  const changeToUpper = () => {
    let a=text.toUpperCase();
    setText(a);
  };
  const handleOnChange =(event)=>{ 
    setText(event.target.value);
  }
const chnageTolower = () =>{
  let a=text.toLowerCase();
  setText(a);
}
const CopyText = () =>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
}
const Removespace = ()=>{
  
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "));

}
const ClerText = ()=>{
  setText('');
}




  return (
    <div>
     
     <h1 style={{color:"#802525"}}>Enter the Text to analyze below</h1>
      <div className="mb-3">
        <label htmlFor="myBox"  className="form-label"></label>
        <textarea className="form-control"  style={{backgroundColor:   props.mode==='light' ? 'gray' : 'lightgreen'   }} value={text} onChange={handleOnChange} id="myBox" rows="8"> </textarea>
      </div>



      <button type="button" className="btn btn-warning" onClick={changeToUpper}   >Convert to Uppercase </button>
      <button type="button" className="btn btn-primary mx-3" onClick={chnageTolower}>Convert to Lowercase</button>
      <button type="button" className="btn btn-secondary mx-3" onClick={CopyText}>Copy Text</button>
      <button type="button" className="btn btn-success mx-3"  onClick={Removespace}>Remove Space</button>
      <button type="button" className="btn btn-dark mx-3" onClick={ClerText}   >Clear Text</button>


      <h1  style={{color:"#9AFE2E"}}> {text.length}</h1>
      <h2 style={{color:"#9AFE2E"}}>{text}</h2>
    </div>
  );
}
