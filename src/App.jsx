import { useEffect, useState } from "react";
import "./App.css";
import QRCode from "react-qr-code";
import { Login, QRpage, SignUp } from "./Pages";
import { Routes, Route } from "react-router-dom";

function App() {
  const [text, setText] = useState("");
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <Routes>
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/"} element={<Login setToken={setToken} />} />
        {token ? (
          <Route path={"/qrpage"} element={<QRpage token={token} />} />
        ) : (
          ""
        )}
      </Routes>
    </>
  );
}

export default App;
