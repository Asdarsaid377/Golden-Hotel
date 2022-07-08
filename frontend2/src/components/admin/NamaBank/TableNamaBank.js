import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../../users/Navbar';

function TableNamaBank() {
  const [bank, setBank] = useState([]);
  const getBank = async () => {
    let response = await axios.get("http://localhost:5000/namabank");
    setBank(response.data);
  }
  useEffect(() => {
    getBank();
  }, [getBank]);
  return (
    <div>
      <Navbar />
      <div className='bg-gray-700 w-full h-full'>
        <div>
          <div className="bg-gray-700 p-8 w-full content-center justify-center items-center">
            <div className=" flex items-center justify-between pb-6">
              <div className='bg-gray-700'>
                <h2 className="text-gray-700 font-semibold">Products Oder</h2>
                <span className="text-xs text-white">All products item</span>
              </div>
              <div className="flex items-center justify-between ">
                <div className="flex bg-gray-700 items-center p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                  <input className="bg-gray-700  outline-none ml-9 block hover:border-purple-500 " type="text" name id placeholder="search..." />
                </div>
                <div className=" ml-10 space-x-8">
                  <button className="bg-yellow-500 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Tambah Metode Pembayaran</button>
                </div>
              </div>
            </div>
            <div>
              <div className="sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto bg-gray-700 h-full w-full">
                <div className="inline-block min-w-full bg-gray-700 overflow-hidden justify-center text-center items-center">
                  <table className="min-w-full leading-normal p-3">
                    <thead className='border-b text-semibold'>
                      <tr className=''>
                        <th className="px-5 py-3  border-gray-200 bg-gray-700 text-xs font-semibold text-white tracking-wider">
                          No
                        </th>
                        <th className="px-5 py-3  border-gray-200 bg-gray-700 text-xs font-semibold text-white tracking-wider">
                          Kode Bank
                        </th>
                        <th className="px-5 py-3  border-gray-200 bg-gray-700 text-xs font-semibold text-white tracking-wider">
                          No Rekening
                        </th>
                        <th className="px-5 py-3  border-gray-200 bg-gray-700 text-xs font-semibold text-white tracking-wider">
                          Nama Bank
                        </th>
                        <th className="px-5 py-3  border-b border-gray-200 bg-gray-700 text-xs font-semibold text-white tracking-wider">
                          Atas Nama
                        </th>
                      </tr>
                    </thead>
                    <tbody className='text-white justify-between mr-8'>
                      {
                        bank.map((banks, index) => (
                          <tr className='border-b' key={banks.id}>
                            <td>{index + 1}</td>
                            <td>{banks.kode_bank}</td>
                            <td>{banks.nomor_rekening}</td>
                            <td>{banks.nama_bank}</td>
                            <td>{banks.atas_nama}</td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                  <div className="px-5 py-5 bg-gray-700 border-t flex flex-col xs:flex-row items-center xs:justify-between">
                    <span className="text-xs xs:text-sm text-white">
                      Showing 1 to 4 of 50 Entries
                    </span>
                    <div className="inline-flex mt-2 xs:mt-0">
                      <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-yellow-500 font-semibold py-2 px-4 rounded-l">
                        Prev
                      </button>
                      &nbsp; &nbsp;
                      <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-yellow-500 font-semibold py-2 px-4 rounded-r">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableNamaBank
