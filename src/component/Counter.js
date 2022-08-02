import React, { useState } from "react";

export default function Counter() {

const checkPositive=()=>{
setCount(Count+1);
}
const checkNegative=()=>{
    if(Count===0)
    {
        setCount(0);
    }
    else
    {
        setCount(Count-1);
    }
}
const [Count,setCount] = useState(1);




   return (
    <>



<h1  className="container my-3 mx-4"  style={{color:"#9AFE2E"}}  >{Count}</h1>
<div  className="container my-3 mx-4"  >
      <button type="button"  onClick={checkPositive}  className="btn btn-info">Like  </button>
</div>
<div  className="container my-3 mx-4"  >
      <button  type="button" onClick={checkNegative} className="btn btn-info">Dislike</button>
</div>



    </>


  )
}

