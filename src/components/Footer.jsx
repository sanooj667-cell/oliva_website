import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#556B2F] text-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-semibold tracking-wide">OLIVIA</h2>
          <p className="text-sm mt-3 text-[#E6E6D8]">
            Timeless fashion crafted with elegance and comfort.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-lg font-medium mb-4">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Men</li>
            <li className="hover:text-white cursor-pointer">Women</li>
            <li className="hover:text-white cursor-pointer">New Arrivals</li>
            <li className="hover:text-white cursor-pointer">Sale</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-medium mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Sustainability</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-medium mb-4">Stay Connected</h3>
          <p className="text-sm mb-4 text-[#E6E6D8]">
            Subscribe for exclusive offers and updates.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-sm text-black rounded-l-md outline-none"
            />
            <button className="bg-[#6B8E23] px-4 py-2 text-sm font-medium rounded-r-md hover:bg-[#7BA428] transition">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-[#6B8E23] py-4 text-center text-xs text-[#E6E6D8]">
        © {new Date().getFullYear()} OLIVIA. All rights reserved.
      </div>
    </footer>
  );
}

