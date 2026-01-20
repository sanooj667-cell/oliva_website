import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md px-12 md:px-32 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <h1 className="text-xl font-bold text-indigo-600">
        OLIVA
      </h1>

      {/* Navigation */}
      <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
        <Link to={"/"}><p href="#" className="hover:text-indigo-600">Home</p></Link>
        <p href="#" className="hover:text-indigo-600">About</p>
        <p href="#" className="hover:text-indigo-600">Services</p>
        <p href="#" className="hover:text-indigo-600">Contact</p>
      </nav>

      {/* Button */}
      <Link to={"/login"}>  
      <p className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
        Login
      </p>
      </Link>

    </header>
  )
}
