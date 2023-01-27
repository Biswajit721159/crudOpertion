import React, { useEffect, useState } from "react";

export const ProductFrom = () => {

  //  for add section 
  let [name, setname] = useState("");
  let [mobile, setmobile] = useState("");
  // update section 
  let [updatename, setupdatename] = useState("");
  let [updatemobile, setupdatemobile] = useState("");
  let [Id, setId] = useState(-1);
  // search section 
  let[searchname,setsearchname]=useState("");
  let[searchmobile,setsearchmobile]=useState("");
  // color section
  let [light, setlight] = useState("dark");
  let [word, setword] = useState("Light mode on");
  //data section
  let [arr, setarray] = useState([
    { name: "Biswajit Ghosh", mobile: "1111111111" },
    { name: "Subhankar Kr Yadav", mobile: "2222222222" },
    { name: "Surya Kumar Yadav", mobile: "3333333333" },
    { name: "Subham Senapati", mobile: "4444444444" },
    { name: "Saroj Kumar Manna", mobile: "5555555555" },
    { name: "Soumyadip Kar", mobile: "6666666666" },
    { name: "Indranil Chowdhury", mobile: "7777777777" },
    { name: "Akshy kumar bera", mobile: "8888888888" },
    { name: "Arijit kumar Das", mobile: "9999999999" },
    { name: "kagiso Rabada", mobile: "1234567891" },
  ]);
 
  let [product,setproduct]=useState([]);
  // color mode section 
  const Colormode = () => {
    if (light == "dark") {
      setlight("light");
      setword("Dark mode on");
    } else {
      setlight("dark");
      setword("Light mode on");
    }
  };
  // Add section 
  const solve1 =(name)=>{
    let  n=name.length;
    if(n==0) return 0;
    else
    {
      for(let i=0;i<n;i++)
      {
        if((name[i]>='a' && name[i]<='z') || (name[i]>='A' && name [i]<='Z') || (name[i]===' '))
        {
          continue;
        }
        else
        {
          return  false;
        }
      }
      return true;
    }
  }
  const solve2=(mobile)=>{
    let  n=mobile.length;
    if(n<10) return false;
    else if(n==10)
    {
      for(let i=0;i<n;i++)
      {
        if(mobile[i]>='0' && mobile[i]<='9')
        {
          continue;
        }
        else
        {
          return false;
        }
      }
      return true;
    }else{
      return false;
    }
  }
  const Add = () => {

    const a=solve1(name);
    const b=solve2(mobile);
    if (a==false) 
    {
      alert("Error in name section ");
    } 
    else if(b==false)
    {
      alert("Error in mobile section ");
    }
    else if(a==true && b==true) 
    {
      arr.push({name,mobile});
      arr.reverse();
      setarray([...arr]);
      setname("");
      setmobile("");
    }
    else
    {
      alert("Error !!");
    }
    
  };
  //delete section 
  const Delete = (name) => {
    let narr = product.filter((user, index) => {
      return user.name !== name;
    });
    setproduct([...narr]);
  };
// update section 
  const UpdateUser = (id) => {
    let val1 = arr[id].name;
    let val3=arr[id].mobile;
    setupdatename(val1);
    setupdatemobile(val3);
    let val2 = id;
    setId(val2);
  };

  const Update = () => {
    if (Id === -1)
    {
      alert("Prease select a person");
    } 
    else 
    {
      const a=solve1(updatename);
      const b=solve2(updatemobile);
      if(a===true  && b===true )
      {
         arr[Id].name = updatename;
         arr[Id].mobile=updatemobile;
         setproduct([...arr]);
         setupdatename("");
         setupdatemobile("");
         setId(-1);
      }
      else
      {
          setupdatename("");
          setupdatemobile("");
          setId(-1);
          if(a===false)
          {
             alert("error in name section !! ");
          }
          else if(b===false)
          {
             alert("error in mobile section !! ");
          }
      }
      
    }
  };
  //searching section 
 useEffect(()=>{
  loaduser();
 },[]);

  useEffect(()=>{
    search1();
  },[searchname]);

  function loaduser()
  {
    setproduct([...arr]);
  }

  const search1=()=>{
   
    console.log(product);

    if(searchname.length==0) {
      setproduct([...product]); 
    }
    
    let narr=arr.filter((user,index)=>{
       let s=user.name;
       let n=searchname.length;
       let x=s.substring(0,n);
       x=x.toLowerCase();
       let y=searchname.toLowerCase();
       return x==y;
    });
    setproduct([...narr]);
  }

  
  return (
    <div className="container  mt-4">
      <div className="row">
        <div className="container col-sm">
        <div className="container">
          <input
            type="text"
            className="col"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          </div>
          <div className="container mt-2">
          <input
            type="text"
            className="col"
            placeholder="mobile number"
            value={mobile}
            onChange={(e) => {
              setmobile(e.target.value);
            }}
          />
          </div>
          <div className="container mt-2">
          <button type="button" className="btn btn-primary " onClick={Add}>
            Submit
          </button>
          </div>
        </div>
        <div className="container col-sm ">
        <div className="container ">
        <input
            // style={{ marginLeft: "100px" }}
            type="text"
            className=""
            placeholder="Setect option"
            value={updatename}
            onChange={(e) => {
              setupdatename(e.target.value);
            }}
          />
          </div>
          <div className="container mt-2">
          <input
            // style={{ marginLeft: "100px" }}
            type="text"
            className=""
            placeholder="Setect option"
            value={updatemobile}
            onChange={(e) => {
              setupdatemobile(e.target.value);
            }}
          />
          </div>
          <div className="container mt-2">
          <buttonn
            // style={{ marginLeft: "215px" }}
            type="button"
            className="btn btn-warning "
            onClick={Update}
          >
            Update
          </buttonn>
          </div>
        </div>
        <div className="container col-sm">
          
        <div className="container">
           <input
            // style={{ marginLeft: "100px" }}
            type="text"
            className=""
            value={searchname}
            onChange={(e) => {
              setsearchname(e.target.value);
            }}
            placeholder="Search name"
          />
          </div>
          <div className="container mt-2">
          
          </div>
        </div>
        <div className="container col-sm">
        <div className="container ">
           <input
            // style={{ marginLeft: "100px" }}
            type="text"
            className=""
            value={searchmobile}
            onChange={(e) => {
              setsearchmobile(e.target.value);
            }}
            placeholder="search mobile number"
          />
          </div>
          <div className="container mt-2">
          </div>
        </div>
      </div>
      <table
        className={
          light == "dark"
            ? "table table-dark table-striped-columns shadow mt-4"
            : "table table-light table-striped-columns shadow mt-4"
        }
      >
        <thead className="thead-light">
          <tr>
            <th scope="col">Index</th>
            <th scope="col">Name</th>
            <th scope="col">Mobile Number</th>
            <th style={{marginLeft:"4"}}>Action</th>
            <th>
              <button
                type="button"
                className="btn btn-light shadow mx-2"
                onClick={Colormode}
              >
                {word}
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {product.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{user.name}</td>
              <td>{user.mobile}</td>
              <td>
                <button
                  className="btn btn-danger mt-2 mr-2"
                  onClick={(e) => Delete(user.name)}
                >
                  Delete User
                </button>
                <button
                  style={{ padding: "6px", marginLeft: "20px" }}
                  type="button"
                  className="btn btn-info mt-2"
                  onClick={(e) => UpdateUser(index)}
                >
                  Updata user
                </button>
                <button
                  style={{ padding: "6px", marginLeft: "20px" }}
                  type="button"
                  className="btn btn-primary mt-2"
                >
                  Edit user
                </button>
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
