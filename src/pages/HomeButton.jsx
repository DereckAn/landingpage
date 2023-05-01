import React from 'react';
import { Link } from 'react-router-dom'

const HomeButton = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link to="/ecommerce">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to Dashboard
        </button>
      </Link>
    </div>
  )
}

export default HomeButton