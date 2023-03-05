import React, { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  phonenumber: "",
  profession: "",
}
const Signup = () => {
  let [input, setInput] = useState(initialState);
  const navigate = useNavigate();

  let getdata = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  let submitHandler = (e) => {
    localStorage.setItem('userData', JSON.stringify(input));
    e.preventDefault();
    navigate('/Login')
    
  };

  const profession = [
    { id: "1", value: "Developer" },
    { id: "2", value: "Designer" },
    { id: "2", value: "Teacher" },
    { id: "2", value: "Others" },
  ];

  return (
    <div className="container">
      <div className="form">
        <h1>Sign Up</h1>
        <form id="signup-form" onSubmit={submitHandler}>
          <label for="name">Name:</label>
          <input
            onChange={getdata}
            type="text"
            id="name"
            name="name"
            value={input.name} required
          />
          <br />
          <label for="email">Email:</label>
          <input
            onChange={getdata}
            type="email"
            id="email"
            name="email"
            value={input.email} required
          />
          <br />
          <label for="password">Password:</label>
          <input
            onChange={getdata}
            type="password"
            id="password"
            name="password"
            value={input.password} required
          />
          <br />
          <label for="phone">Phone number:</label>
          <input
            onChange={getdata}
            type="tel"
            id="phone"
            name="phonenumber"
            value={input.phonenumber} required
          />
          <br />
          <label for="profession">Profession:</label>
          <select id='profession'name="profession" value={input.role} onChange={getdata} required>
            {profession.map((role) => (
              <option key={role.id} value={role.value}>
                {role.value} 
              </option>
            ))}
          </select>
          <br />
          <input type="submit" value="Sign Up" id="btnsubmit" />
        </form>
        <p>
          I already have an account ?<NavLink to="/Login">Login</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

//  const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     email:"",
//     phone:"",
//     role: "Developer",
//   });

//   const roles = [
//     { id: "1", value: "Developer" },
//     { id: "2", value: "Designer" },
//     { id: "2", value: "Teacher" },
//     { id: "2", value: "Others" },
//   ];

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem("userData", JSON.stringify(formData));
//     setFormData({
//       username: "",
//       password: "",
//       email:"",
//       phone:"",
//       role: "Developer",
//     });
//     console.log(formData);
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//         />
//         <br />
//         <input
//           type="email"
//           placeholder="Enter email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <br />
//         <input
//           type="tel"
//           name="phone"
//           placeholder="Mobile number"
//           value={formData.phone}
//           onChange={handleChange}
//         />
//         <br />
//         <input
//           type="password"
//           placeholder="Password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />{" "}
//         <br />
//         <select name="role" value={formData.role} onChange={handleChange}>
//           {roles.map((role) => (
//             <option key={role.id} value={role.value}>
//               {role.value}
//             </option>
//           ))}
//         </select>
//         <br />
//         <button type="submit">Signup</button>
//         <p>
//           If already have an Account? <NavLink to="login">Login</NavLink>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Signup
