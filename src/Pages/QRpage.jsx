import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import QRCode from "react-qr-code";

const QRpage = ({ token }) => {
  let navigate = useNavigate();
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  function handleLogout() {
    sessionStorage.removeItem("token");
    navigate("/");
  }
  return (
    <div className="text-center">
      <h1 className="mb-4">
        Welcome back,{token.user.user_metadata.full_name}
      </h1>
      <button className="btn btn-outline mb-2" onClick={handleLogout}>
        Logout
      </button>

      <div className="card w-96  bg-blue-200 shadow-xl">
        <figure className="px-10 pt-10">
          <QRCode value={text} />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">QR Code Generator</h2>
          <p>Enter your text here</p>
          <div className="card-actions">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full max-w-xs"
              value={text}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRpage;
