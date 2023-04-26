import React from "react";

import { useState } from "react";
import { supabase } from "../Client/Client";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  console.log(formData);

  const handleChanges = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;
      console.log(data);
      alert("Sign in  successfully!");
      setToken(data);
      navigate("/qrpage");
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChanges}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChanges}
        />
        <button className="btn btn-outline btn-success" type="submit">
          Submit
        </button>
      </form>
      Don't have an account? <Link to={"/signup"}>Sign Up</Link>
    </div>
  );
};

export default Login;
