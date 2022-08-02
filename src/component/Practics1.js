
import React, { useState } from "react";

export default function TextForm(props) {


  const [text, setText] = useState("");
  const [Result, setResult] = useState("");

  const handleOnChange =(event)=>{
    setText(event.target.value);
  }

  const check = () => {
    let a=text;
    let i=0;
    let j=a.length-1;
    let count=0;

    while(i<j)
    {
      if(a[i]!==a[j])
      {
        count++;
        break;
      }
      i++;
      j--;
    }

    if(count===1)
    {
      setResult('Not palindromic');
    }
    else
    {
       setResult('Yes palimdromic');
    }
    setText('');
  };
  


  return (
    <div>
     
     <h1>{props.string}</h1>
      <div className="mb-3">
        <label htmlFor="myBox"  className="form-label"></label>
        <textarea className="form-control"  style={{backgroundColor:   props.mode==='light' ? 'rgb(250, 128, 114)' : 'rgb(235,235,235)'   }} value={text} onChange={handleOnChange} id="myBox" rows="5"> </textarea>
      </div>
      <button type="button" className="btn btn-warning" onClick={check}   >Submit</button>
      
      <h1>{text.length}</h1>
      <h1>{text}</h1>
      <h1>{Result}</h1>
    </div>
  );
}
