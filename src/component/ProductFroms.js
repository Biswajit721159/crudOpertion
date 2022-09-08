import React, { useState } from "react";

export const ProductFrom = () => {
  let [name, setname] = useState("");
  let [updatename, setupdatename] = useState("");
  let [Id, setId] = useState(-1);
  let [arr, setarray] = useState([
    "Biswajit Ghosh",
    "Subhankar Kumar Yadav",
    "SKY",
    "Subhan Senapati",
    "Saroj Kumar Manna",
    "Soumyadip Kar",
    "Indranil Chowdhury",
    "Akshy bera",
    "Arijit Das",
    "krishina Show",
  ]);
  const Add = () => {
    if (name === "") {
      alert("Please Type something");
    } else {
      arr.push(name);
      arr.reverse();
      setarray([...arr]);
      setname("");
    }
  };
  const Delete = (id) => {
    let narr = arr.filter((user, index) => {
      return index !== id;
    });
    setarray([...narr]);
  };

 

  const UpdateUser = (id) => {
    let val1 = arr[id];
    setupdatename(val1);
    let val2 = id;
    setId(val2);
  };


  const Update = () => {


    if (Id === -1) {
      alert("Prease select a person");
    } else {
      arr[Id] = updatename;
      console.log(arr);
      setarray([...arr]);
      setupdatename("");
      setId(-1);
    }
  };



  return (
    <div className="container mt-4">
      <input
        type="text"
        className=""
        placeholder="name"
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <button type="button" className="btn btn-primary mx-2" onClick={Add}>
        Submit
      </button>
      <input
        style={{}}
        type="text"
        className=""
        placeholder="name"
        value={updatename}
        onChange={(e) => {
          setupdatename(e.target.value);
        }}
      />
      <button type="button" className="btn btn-warning mx-2" onClick={Update}>
        Update
      </button>
      <table className="table table-dark table-striped-columns mt-4">
        <thead className="thead-dark">
          <tr>
            <th scope="col">index</th>
            <th scope="col">Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{user}</td>
              <td>
                <button
                  className="btn btn-danger mt-2 mr-2"
                  onClick={(e) => Delete(index)}
                >
                  Delete User
                </button>
                <button
                  style={{ padding: "6px", marginLeft: '20px'}}
                  type="button"
                  className="btn btn-info mt-2"
                  onClick={(e) => UpdateUser(index)}
                >
                  Updata user
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
