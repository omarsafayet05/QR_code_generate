import React from "react";
import { useState } from "react";
import { supabase } from "../Client/Client";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullname: "",
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
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullname,
          },
        },
      });
      if (error) throw error;
      console.log(data);
      alert("Check your email for verification link");
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Fullname"
          name="fullname"
          onChange={handleChanges}
        />
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
        <button className="btn btn-outline btn-primary" type="submit">
          Submit
        </button>
      </form>
      Already have an account? <Link to={"/"}>Login</Link>
    </div>
  );
};

export default SignUp;
// import { useState } from "react";
// import "./App.css";
// import QRCode from "react-qr-code";
// import { supabase } from "./Client/Client";

// function App() {
//   const [text, setText] = useState("");
//   const [formData, setFormData] = useState({
//     fullname: "",
//     email: "",
//     password: "",
//   });
//   console.log(formData);
//   const handleChange = (event) => {
//     setText(event.target.value);
//   };

//   const handleChanges = (event) => {
//     setFormData((prevFormData) => {
//       return {
//         ...prevFormData,
//         [event.target.name]: event.target.value,
//       };
//     });
//   };

//   async function handleSubmit(e) {
//     e.preventDefault();
//     try {
//       const { data, error } = await supabase.auth.signUp({
//         email: formData.email,
//         password: formData.password,
//         options: {
//           data: {
//             full_name: formData.fullname,
//           },
//         },
//       });
//       if (error) throw error;
//       alert("Check your email for verification link");
//     } catch (error) {
//       alert(error);
//     }
//   }
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Fullname"
//           name="fullname"
//           onChange={handleChanges}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           onChange={handleChanges}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           name="password"
//           onChange={handleChanges}
//         />
//         <button type="submit">Submit</button>
//       </form>
//       <div className="card w-96  bg-blue-200 shadow-xl">
//         <figure className="px-10 pt-10">
//           <QRCode value={text} />
//         </figure>
//         <div className="card-body items-center text-center">
//           <h2 className="card-title">QR Code Generator</h2>
//           <p>Enter your text here</p>
//           <div className="card-actions">
//             <input
//               type="text"
//               placeholder="Type here"
//               className="input input-bordered input-info w-full max-w-xs"
//               value={text}
//               onChange={(e) => handleChange(e)}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
