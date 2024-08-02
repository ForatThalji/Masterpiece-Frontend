import React from 'react';
import facial2 from '../../assets/facial2.png'
import { Link } from 'react-router-dom';

function Reg() {
  return (
    <div>
      <>
 
<div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
      >
        <div className="relative">
          <img
            src={facial2}
            alt="img"
            className="w-[400px] h-full hidden rounded-l-2xl md:block object-cover"
          />
          <div
            className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
          >
         
          </div>
        </div>
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Registration</span>
          
          <div className="py-4">
            <span className="mb-2 text-md">Firstname</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="Firstname"
              placeholder="Firstname"
              id="Firstname"
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Lastname</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="Lastname"
              placeholder="Lastname"
              id="Lastname"
            />
          </div>
          <div className="py-4">
          <span className="mb-2 text-md">Email</span>
              <input
                type="text"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              />
            </div>
          <div className="py-4">
            <span className="mb-2 text-md">Password</span>
            <input
              type="password"
              name="pass"
              placeholder="password"
              id="pass"
              
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <div className="mt-5">
              <input type="checkbox" className="border border-gray-400" />
              <span>
                I accept the{" "}
                <a href="#" className="text-purple-500 font-semibold">
                  Terms of Use
                </a>{" "}
                &amp;{" "}
                <a href="#" className="text-purple-500 font-semibold">
                  Privacy Policy
                </a>
              </span>
              <div className='text-sm'>
              <Link 
        to="/Login">
        Or Do You have an account ?you can Login
        </Link>
              </div>
            </div>
          
          <button
            className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-greenRoot hover:text-white mt-3"
          >
            {/* <img src={google} alt="img" className="w-6 h-6 inline mr-2" /> */}
            Register Now
          </button>
          
        </div>
        
      </div>
    </div>
</>

    </div>
  )
}

export default Reg
