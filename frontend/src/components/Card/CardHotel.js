import React from 'react'
import gambar from "../../assets/img/image4.jpg"

function CardHotel() {
  return (
    <div className=' items-center flex  p-5 card'>
      <a href="#" className="flex flex-col   items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
        <img className="w-69 h-76  mb-6 ml-4 rounded-md md:h-auto md:w-48 hover:shadow-xl" src={gambar} alt="akaskjdka" />
        <div className="flex flex-col justify-between p-4 leading-normal ">
          <h5 className="mb-2 text-2xl  font-bold tracking-tight text-yellow-500 dark:text-yellow-500">Hotel Grand Bintang 5</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <button className='flex justify-center items-center shadow-md bg-gray-500  rounded-lg w-20 text-white hover:text-yellow-500'>Pilih</button>
        </div>
      </a>
    </div>
  )
}

export default CardHotel