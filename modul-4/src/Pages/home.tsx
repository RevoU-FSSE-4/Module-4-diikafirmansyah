import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  function onChangeEmail(event: any) {
    console.log(event.target.value);
    setEmail(event.target.value);
  }

  function onChangePass(event: any) {
    console.log(event.target.value);
    setPass(event.target.value);
  }

  function onClick(event: any) {
    event.preventDefault();
  }

  const navigate = useNavigate()

  const handleLogin = async () => {
    const response = await fetch('https://library-crud-sample.vercel.app/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password: pass })
    })

    const result = await response.json()

    try {
      if (!response.ok) {
        alert('Login failed')
      }
      else {
        console.log('response success', result)
        alert('Login success')
        navigate('/dashboard')
      }

    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 w-96 border-solid border-2 border-grey-200">
        <h1 className="font-mono text-4xl mb-8 text-center my-5">My Florist</h1>
        <form className="flex flex-col mt-20">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-2 mb-4 rounded-md"
            onChange={onChangeEmail}
          />
          <input
            type="password"
            placeholder="Password..."
            className="border border-gray-300 p-2 mb-4 rounded-md"
            onChange={onChangePass}
          />
          <button className="bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            onClick={() => handleLogin()}
          >
            Login
          </button>
        </form>
        <hr className="border-t-2 border-black mt-12" />
        <div className="text-center mb-4 font-semibold mt-1">OR</div>
        <div className="text-center mt-10 font-semibold">
          Log in using{" "}
          <a href="#" className="text-blue-500 hover:underline">
            G-Mail
          </a>
        </div>

        <div className="mt-8">
          <p className="text-center">
            Don't have an account?{" "}
            <a onClick={() => navigate('/signup')} className="text-blue-500 hover:underline gap-10">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
