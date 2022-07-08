import React from 'react'
import CardHotel from './Card/CardHotel'
import About from './users/About'
import ContactUs from './users/ContactUs'
import Footer from './users/Footer'
import Navbar from './users/Navbar'


function Home() {
  return (
    < div className='bg-gray-700 w-full h-full ' >
      <Navbar />

      <div className='py-16 justify-center items-start text-3xl w-full h-full'>
        <h1 className='text-center text-yellow-500 font-bold w-auto min-h-full'>Hotel Populer</h1>
      </div>
      <div className='mt-4 rounded-md justify-center items-center mx-auto grid grid-flow-col gap-2 grid-cols-3 '>
        <CardHotel imageUrl=""
          title="hahah" />
        <CardHotel imageUrl=""
          title="hahah" />
        <CardHotel imageUrl=""
          title="hahah" />
      </div>
      <div className='py-11 justify-center items-center mx-auto'>
        <About />
        <ContactUs />
      </div>
      <div><Footer /></div>
    </div >




  )
}

export default Home






