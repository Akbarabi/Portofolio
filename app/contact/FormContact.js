"use client";

import React, { useState, useEffect } from "react";

const FormContact = () => {
  const [isSubmiting, setisSubmiting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  return (
    <div className="flex items-center justify-start">
      <div className="w-full max-w-md p-8 space-y-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-black">Email me</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              placeholder="email@example.com"
              className="w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              type="email"
              placeholder="Enter your description"
              className="flex w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 h-[20vh]"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-black rounded-md hover:bg-gray-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormContact;
