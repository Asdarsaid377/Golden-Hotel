import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [msg, setMsg] = useState();
  const navigate = useHistory();

  const Login = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/login', {
        email: email,
        password: password
      });
      navigate.push("/dashboard")
    } catch (error) {
      setMsg(error.response.data.msg)
    }
  }
  return (
    <div>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-gray-700">
        <div className="w-full p-6 m-auto bg-gray-600 rounded shadow-lg ring-2 ring-yellow-500 lg:max-w-md max-h-screen">
          <div className='justify-center items-center w-full h-auto'>
            <h2 className='justify-center text-center font-bold text-yellow-500'>Hotel Name</h2>
            <p className='mt-3 text-center text-red-600'>{msg}</p>
          </div>
          <form className="mt-6" onSubmit={Login}>
            <div>
              <label htmlFor="email" className="block text-sm text-white">Email</label>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40" placeholder='email' required />
            </div>
            <div className="mt-4">
              <div>
                <label htmlFor="password" className="block text-sm text-white">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40" placeholder='password' required />
              </div>
              <a href="#" className="text-xs text-gray-600 hover:underline">Forget Password?</a>
              <div className="mt-6">
                <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-500">
                  Login
                </button>
              </div>
              <p className="mt-8 text-xs font-light text-center text-white"> Don't have an account? <a href="/register" className="font-medium text-yellow-500 hover:underline">Sign up</a></p>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Login