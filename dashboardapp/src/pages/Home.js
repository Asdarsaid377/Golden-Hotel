import React from 'react'
import CardHotel from '../components/Card/CardHotel'
import About from './About'
import ContactUs from './ContactUs'
import Footer from '../components/Footer'
import Navbar from './Navbar'

function Home() {
  return (
    < div className='bg-gray-600 w-full h-full ' >
      <Navbar />
      <div className='py-16 justify-center items-center text-3xl w-full h-full'>
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






