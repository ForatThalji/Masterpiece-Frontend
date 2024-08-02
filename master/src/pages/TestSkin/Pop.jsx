import React, { useState } from 'react';
import quesremove from '../../assets/quesremove.png';
import test2 from '../../assets/test2.jpg';
import { Link } from 'react-router-dom';



function Pop() {
  const [showModal, setShowModal] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    setIsHidden(!isHidden);
    
  };

  return (
    <div>
      <div> <section className="dark:bg-gray-900" style={{ display: isHidden ? 'none' : 'block' }}>
        <div className=" mx-44 gap-16 items-center py-8 px-4  max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
             Lets Know What is Your Skin Type?!</h2>
            <p className="">
            This skin test is not 100% accurate, but it is based on advanced scientific studies and analyses to ensure reliable and comprehensive results. We provide this test as an initial tool to better understand your skin's condition. If you have any additional questions or wish to receive a detailed  analysis, you can 
            
            <Link
            to="../Consuult1"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            <span className='text-greenRoot'>
            book a consultation. </span>
            </Link>
              To view the results and get more details, please click the following linkbutton here.            </p>
              <button
          className="-ml-1 mt-4 block text-white bg-greenRoot hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={toggleModal}
          type="button"
        >
          Show Result
        </button>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg bg-grayRoot -mt-10"
              src={quesremove}
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src={test2}
              alt="office content 2"
            />
          </div>
        </div>
        
      </section>
       
        {showModal && (
          <div
            className="mt-34 mb-44  inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 "
            onClick={toggleModal}
          >
            
            <div className="relative p-4 w-full max-w-2xl max-h-full" onClick={(e) => e.stopPropagation()}>
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Your Skin Type is:
                  </h3>
                  <button
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={toggleModal}
                    type="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div
  role="alert"
  data-dismissible="alert"
  class="relative flex w-full max-w-screen-md px-4 py-4 text-base text-white bg-gray-900 rounded-lg font-regular">
  <div class="shrink-0">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" class="w-6 h-6">
      <path fill-rule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clip-rule="evenodd"></path>
    </svg>
  </div>
  <div class="ml-3 mr-12">
    <h5 class="block font-sans text-xl antialiased font-normal leading-snug tracking-normal text-white">
    
      <details>
              <summary className="text-xl font-sans text- mb-4 text-g group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                Dry
              </summary>
              <div className="px-4 pb-4">
                <p>
                Dry skin is a type of skin that lacks moisture and natural oils, which can make it appear dull and sometimes flaky. People with dry skin may experience tightness or itching, and their skin may be more prone to showing wrinkles and fine lines. To maintain healthy dry skin, it's important to use rich moisturizers and avoid products with harsh ingredients that can strip away additional moisture
                </p>
              </div>
            </details>
      
    </h5>
    
    <p class="block mt- text-pinkRoot font-sans text-base antialiased font-normal leading-relaxed text-white">
    This skin test is not 100% accurate, but it is based on advanced scientific studies.
    </p>
  </div><div>
            <img className=' w-[40%]' src={test2}/>
        </div>
 
</div>
                
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Pop;
