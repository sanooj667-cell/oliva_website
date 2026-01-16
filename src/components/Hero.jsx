import React, { useRef, useState } from 'react'
import productData from "./data.json"
import Poup from './Poup'
import toast from 'react-hot-toast';
import Form from './Form';
import Card from './card';


export default function Hero() {
          
  const [data, setData] = useState(productData)
  const [open, setOpen] = useState("hidden")

  const handleOpen = () => {
    if (open === "hidden") {
      setOpen("flex")
    }else{
      setOpen("hidden")
    }
  }





  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-66 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            We Build Custom Solutions <br />
            That Grow Your Business
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            From design to development, we create powerful, modern and reliable
            websites tailored exactly to your needs.
          </p>

          <div className="flex gap-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
              Get Started
            </button>
            <button onClick={handleOpen} className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-clothing-store-logo-design_23-2149499193.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Website Illustration"
            className="w-full max-w-md rounded-md"
          />
        </div>

      </div>

<div className='my-6'>
  <h1 className='text-center font-bold text-3xl my-8'>Latest Prouduct</h1>
   <Card product={data} handleOpen={handleOpen} />

   <div className={`${open}`} >
    <Poup handleOpen={handleOpen} /> 
    </div>
    <div className={`${open}`} >
      <Form />
    </div>

</div>
     
    </section>
  )
}
