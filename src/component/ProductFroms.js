import React, { useState } from "react";

export const ProductFrom = () => {
  let [name, setname] = useState("");
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
                  className="btn btn-danger mt-2"
                  onClick={(e) => Delete(index)}
                >
                  Delete User
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
