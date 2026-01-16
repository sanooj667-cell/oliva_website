import React from 'react'

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md px-12 md:px-32 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <h1 className="text-xl font-bold text-indigo-600">
        OLIVA
      </h1>

      {/* Navigation */}
      <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
        <a href="#" className="hover:text-indigo-600">Home</a>
        <a href="#" className="hover:text-indigo-600">About</a>
        <a href="#" className="hover:text-indigo-600">Services</a>
        <a href="#" className="hover:text-indigo-600">Contact</a>
      </nav>

      {/* Button */}
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
        Login
      </button>

    </header>
  )
}
