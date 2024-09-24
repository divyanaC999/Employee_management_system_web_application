import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setLoginData({ ...loginData, [e.target.name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here, for now, let's navigate to a dummy home page
    navigate("/home");
  };

  const handleClear = (e) => {
    e.preventDefault();
    setLoginData({
      username: "",
      password: "",
    });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Login</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={loginData.username}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          />
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={handleLogin}
            className="rounded text-white font-semibold bg-blue-400 hover:bg-blue-700 py-2 px-6"
          >
            Login
          </button>
          <button
            onClick={handleClear}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6"
          >
            Clear
          </button>
       &nbsp;  &nbsp;  &nbsp;  &nbsp; <Link to="/signup"> Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
