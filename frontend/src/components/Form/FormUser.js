import axios from "axios";
import Sidebar from "components/Sidebar";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function FormUser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [role, setRole] = useState()
  const [msg, setMsg] = useState();
  const navigate = useHistory();

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users', {
        name: name,
        email: email,
        password: password,
        confirmpassword: confirmpassword,
        rule: role
      })
      navigate.push("/tables")
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }
  return <>
    <Sidebar />
    <div className="md:ml-60">
      <div className="relative  max-w-screen flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6  m-auto bg-white rounded shadow-lg ring-2 ring-purple-800/50 lg:max-w-xl max-h-screen">
          <div className='justify-center items-center w-full h-auto'>
            <h2 className='justify-center text-center font-bold text-purple-500'>Tambahkan User</h2>
            <p className='mt-3 text-center text-red-600'>{msg}</p>
          </div>
          <form className="mt-6" onSubmit={Register}>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-800">Nama</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
            </div>
            <div className='mt-3'>
              <label htmlFor="email" className="block text-sm text-gray-800">Email</label>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
            </div>
            <div className="mt-4">
              <div>
                <label htmlFor="password" className="block text-sm text-gray-800">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
              </div>
              <div className='mt-3'>
                <label htmlFor="password" className="block text-sm text-gray-800">Konfirmasi Password</label>
                <input onChange={(e) => setConfirmpassword(e.target.value)} value={confirmpassword} type="password" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
              </div>
              <div className='mt-3'>
                <label htmlFor="role" className="block text-sm text-gray-800">Role</label>
                <input onChange={(e) => setRole(e.target.value)} value={role} type="text" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>

              <div className="mt-6">
                <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                  Login
                </button>
              </div>
              {/* <p className="mt-8 text-xs font-light text-center text-gray-700">Sudah Punya Akun? <a href="/login" className="font-medium text-purple-600 hover:underline">Login</a></p> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  </>;
}

export default FormUser;
