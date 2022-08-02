import React, { useState } from "react";

export default function Contact() {
  const [text, settext] = useState("");

  const handleOnChange = (event) => {
    let b = event.target.value;
    b = b.toUpperCase();
    settext(b);
  };

  const submit = () => {};

  return (
    <>
      <div className="container">
        <div className="contact">
          <h1 style={{ color: "#7F1D1D" }}>contact page</h1>

          <div class="mb-3">
            <label
              for="exampleFormControlInput1"
              style={{ color: "#45C820" }}
              class="form-label"
            >
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              autoComplete="off"
              value={text}
              onChange={handleOnChange}
              placeholder="name@example.com"
            />
          </div>
          <button type="button" onClick={submit} class="btn btn-warning">
            Submit here
          </button>
          <h1 style={{ color: "#246412" }}>{text}</h1>
        </div>
      </div>
    </>
  );
}
