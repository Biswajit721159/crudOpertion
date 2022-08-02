import React,{useState} from 'react'

export default function Run() {


const [run,setrun]= useState(0);
const [wicket,setwicket]=useState(0);
const[ind,setind]=useState(0);

const [myArray, setmyArray] = useState([0, 0,0,0,0,0]);


const increment_one=()=>{
  setrun(run+1);
}
const increment_two=()=>{
  setrun(run+2);
}
const increment_three=()=>{
  setrun(run+3);
}
const increment_four=()=>{
  setrun(run+3);
}

const increment_five=()=>{
  setrun(run+5);
}
const increment_six=()=>{
  setrun(run+6);
}
const increment_wicket=()=>{
  if(wicket==10)
  {
    setwicket(0);
  }
  else
  {
    setwicket(wicket+1);
  }
}



 return (
<div>

<div className='container my-3'>
<h1>Run :{run}/{wicket}</h1>
<h2>{  myArray.map( (item) => item+' ')  }</h2>



<div classNameName="row-cols-auto">
<button type="button" className="btn btn-primary mx-2 my-3"  onClick={increment_one}>1</button>
<button type="button" className="btn btn-secondary mx-2 my-3" onClick={increment_two}>2</button>
<button type="button" className="btn btn-success mx-2 my-3"onClick={increment_three} >3</button>
</div>

<div className="row-cols-auto">
<button type="button" className="btn btn-danger mx-2 my-3" onClick={increment_four}>4</button>
<button type="button" className="btn btn-warning mx-2 my-3" onClick={increment_five}>5</button>
<button type="button" className="btn btn-info mx-2 my-3" onClick={increment_six}>6</button>
</div>
<div className ="row-cols-auto">
<button type="button" className="btn btn-primary btn-lg mx-2 my-3" onClick={increment_wicket}>Wicket</button>
</div>




</div>


</div>

  )
}
