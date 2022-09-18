import React, { useState } from "react";

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
  

  let [light, setlight] = useState("dark");
  let [word, setword] = useState("Light mode on");


  //data section
  let [arr, setarray] = useState([
    { name: "Biswajit Ghosh", mobile: "1111111111" },
    { name: "Subhankar Kumar Yadav", mobile: "2222222222" },
    { name: "SKY", mobile: "3333333333" },
    { name: "Subhan Senapati", mobile: "4444444444" },
    { name: "Saroj Kumar Manna", mobile: "5555555555" },
    { name: "Soumyadip Kar", mobile: "6666666666" },
    { name: "Indranil Chowdhury", mobile: "777777777" },
    { name: "Akshy bera", mobile: "8888888888" },
    { name: "Arijit Das", mobile: "9999999999" },
    { name: "krishina Show", mobile: "1234567891" },
  ]);



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
    if (a==false) {
      alert("Error in name section ");
    } 
    else if(b==false)
    {
      alert("Error in mobile section ");
    }
    else if(a==true && b==true) {
      arr.push({name,mobile});
      arr.reverse();
      setarray([...arr]);
      setname("");
      setmobile("");
    }
    else{
      alert("Error !!");
    }
  };








  //delete section 
  const Delete = (id) => {
    let narr = arr.filter((user, index) => {
      return index !== id;
    });
    setarray([...narr]);
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
         setarray([...arr]);
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


  const search1=()=>{

    let count=0;
   for(let i=0;i<arr.length;i++)
   {
      if(arr[i].name==searchname)
      {
        count++;
        break;
      }
   }

   if(count==1)
   {
     alert(" yes found "+ searchname);
     setsearchname("");
   }
   else
   {
     alert("sorry !! not Found "+searchname);
     setsearchname("");
   }

  }

  const search2=()=>{

 let count=0;
   for(let i=0;i<arr.length;i++)
   {
      if(arr[i].mobile==searchmobile)
      {
        count++;
        break;
      }
   }

   if(count==1)
   {
     alert(" yes found "+ searchmobile);
     setsearchmobile("");
   }
   else
   {
     alert("sorry !! not Found "+searchmobile);
     setsearchmobile("");
   }

  



  }






  return (
    <div className="container  mt-4">
      <div className="container ">
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
          <input
            style={{ marginLeft: "100px" }}
            type="text"
            className=""
            placeholder="Setect option"
            value={updatename}
            onChange={(e) => {
              setupdatename(e.target.value);
            }}
          />
          <input
            style={{ marginLeft: "100px" }}
            type="text"
            className=""
            value={searchname}
            onChange={(e) => {
              setsearchname(e.target.value);
            }}
            placeholder="Search name"
          />
          {/* this is name section */}
          <input
            style={{ marginLeft: "100px" }}
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
          <input
            type="text"
            className="col"
            placeholder="mobile number"
            value={mobile}
            onChange={(e) => {
              setmobile(e.target.value);
            }}
          />
          <input
            style={{ marginLeft: "100px" }}
            type="text"
            className=""
            placeholder="Setect option"
            value={updatemobile}
            onChange={(e) => {
              setupdatemobile(e.target.value);
            }}
          />
          <button
            style={{ marginLeft: "100px" }}
            type="button"
            className="btn btn-success"
            onClick={search1}
          >
            Search
          </button>
          {/* this is searching  section */}
          <button
            style={{ marginLeft: "215px" }}
            type="button"
            className="btn btn-success"
            onClick={search2}
          >
            Search
          </button>
        </div>
        <div className="container mt-2 ">
          <button type="button" className="btn btn-primary " onClick={Add}>
            Submit
          </button>
          <button
            style={{ marginLeft: "215px" }}
            type="button"
            className="btn btn-warning "
            onClick={Update}
          >
            Update
          </button>
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
            <th>Action</th>
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
          {arr.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{user.name}</td>
              <td>{user.mobile}</td>
              <td>
                <button
                  className="btn btn-danger mt-2 mr-2"
                  onClick={(e) => Delete(index)}
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
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
