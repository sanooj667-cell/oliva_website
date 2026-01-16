import React from "react";

export default function Poup({handleOpen}) {
    
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      
      {/* Popup Box */}
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Popup Title
          </h2>
          <button className="text-gray-400 hover:text-gray-600 text-xl">
            ×
          </button>
        </div>

        {/* Content */}
        <p className="text-gray-600 mb-6">
          This is a clean popup design using Tailwind CSS.  
          You can place any content here.
        </p>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
            Cancel
          </button>
          <button onClick={handleOpen} className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
            Ok
          </button>
        </div>

      </div>
    </div>
  );
}

