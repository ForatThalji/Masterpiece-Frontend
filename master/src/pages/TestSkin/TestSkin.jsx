import React from 'react'
import brusher from '../../assets/brusher.png';
import girl from '../../assets/girl.png';
import { Link } from 'react-router-dom';



function TestSkin() {
  return (
    <div>
  <div className="flex">
    <div className="flex-1 w-64">
      <p className='d' >
        Want to improve your skincare routine? Find out your skin type first with our personalized skin test!
      </p>
    </div>
    <div className="flex-1 w-32">
      <img className='' src={brusher} />
      <img className='girl'
        alt=""
        src={girl}
      />
    </div>
  </div>
  <button   type="button" className="ms-72 mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
  
  <Link
  to="/Test"
  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
>
    Start Test
    </Link>
  </button>

</div>
  )
}

export default TestSkin;
