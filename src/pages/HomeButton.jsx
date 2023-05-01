import React from 'react';
import { Link } from 'react-router-dom'

const HomeButton = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link to="/Para Ti">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-9 rounded-2xl">
          Connect to Embark
        </button>
      </Link>
    </div>
  )
}

export default HomeButton