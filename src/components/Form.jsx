import React, { useRef } from "react";



export default function Form({}) {
    const referal = useRef()
    const handrefaral = () => {
        let a = referal.current
        if (a) {
            if (a.type === "password") {
                a.type = "text"
            } else
                a.type = "password"
        }


    }
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4 z-50">

            {/* Popup Box */}
            <form className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl relative">

                {/* Header */}
                <div className="mb-6 text-center">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Contact Form
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        We’ll get back to you shortly
                    </p>
                </div>

                {/* Name */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"

                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-1 ">
                        <span>Password</span>
                    </label>
                    <div className="flex justify-between">
                        <input
                            ref={referal}
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"

                        />
                        <button type="button" onClick={handrefaral}
                         className="w-1/2 bg-indigo-600 text-white py-2 rounded-lg
                                     hover:bg-indigo-700 transition font-medium">show</button>
                    </div>
                </div>


                {/* Actions */}
                <div className="flex gap-3">
                    <button
                        type="button"
                        className="w-1/2 py-2 rounded-lg border border-gray-300
                       text-gray-700 hover:bg-gray-100 transition"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="w-1/2 bg-indigo-600 text-white py-2 rounded-lg
                       hover:bg-indigo-700 transition font-medium"
                    >
                        Submit
                    </button>
                </div>

            </form>
        </div>
    );
}
