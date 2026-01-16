import React from "react";

export default function Card({ product, handleOpen }) {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4">
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-4
          sm:gap-6
        "
      >
        {product.map((p) => (
          <div
            key={p.id}
            className="
              w-full
              rounded-xl
              overflow-hidden
              bg-white
              shadow-md
              hover:shadow-xl
              transition
              flex
              flex-col
            "
          >
            {/* Image */}
            <div className="w-full aspect-[4/3] sm:h-44 md:h-48 lg:h-52">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-3 sm:p-4 flex flex-col flex-grow">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                {p.name}
              </h3>

              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                {p.description}
              </p>

              {/* Footer */}
              <div className="mt-auto flex items-center justify-between pt-4">
                <span className="text-lg sm:text-xl font-bold text-blue-600">
                  ₹{p.price}
                </span>

                <button
                  onClick={handleOpen}
                  className="
                    px-4
                    py-2
                    bg-blue-600
                    text-white
                    text-sm
                    rounded-md
                    hover:bg-blue-700
                    active:scale-95
                    transition
                  "
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
