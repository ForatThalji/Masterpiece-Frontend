// import React from 'react';
// import Header from '../../assets/Header.jsx';
// import Footer from '../../assets/Footer.jsx';




// function Test() {
//   return (
//     <div className=''>
//      {/* <Header /> */}
        
// <form className="Door  text-wrap  w-[700px] h-[540px]  m-auto rounded-lg bg-cover bg-center bg-no-repeat  text-black  " >
//   <fieldset>
//   <div className='font-bold'>
//     <legend className="px-4 py-4 mt-28 ">Question 1:</legend>
    
//     <h1 className='px-5 text-lg w-[500px] '>
//     What does your skin typically look like at the end of the day? </h1>
//           <div className='px-6 py-3  text-black'>
//           <div className="flex items-center mb-4  ">
//             <input
//               id="country-option-1"
//               type="radio"
//               name="countries"
//               defaultValue="USA"
//               className="w-4 h-4  border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
//               defaultChecked=""
//             />
//             <label
//               htmlFor="country-option-1"
//               className="block ms-2 text-black  text-sm font-medium text-gray-900 dark:text-gray-300"
//             >
//              Oily and Shiny
//             </label>
//           </div>
//           <div className="flex items-center mb-4">
//             <input
//               id="country-option-2"
//               type="radio"
//               name="countries"
//               defaultValue="Germany"
//               className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
//             />
//             <label
//               htmlFor="country-option-2"
//               className="block ms-2 text-black text-sm font-medium text-gray-900 dark:text-gray-300"
//             >
//               Dull and Tired
//             </label>
//           </div>
//           <div className="flex items-center mb-4">
//             <input
//               id="country-option-3"
//               type="radio"
//               name="countries"
//               defaultValue="Spain"
//               className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
//             />
//             <label
//               htmlFor="country-option-3"
//               className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//             >
//               Normal and Even
//             </label>
//           </div>
//           <div className="flex items-center mb-4">
//             <input
//               id="country-option-4"
//               type="radio"
//               name="countries"
//               defaultValue="United Kingdom"
//               className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
//             />
//             <label
//               htmlFor="country-option-4"
//               className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//             >
//              Dry and Flaky
//             </label>
//           </div>
//           </div>
//           <div className="flex justify-center mx-auto ">
//           <button className="bg-grayRoot hover:bg-gray-400 text-gray-800 font-bold me-7 mb-4 py-2 px-10 rounded-l">
//             Prev
//           </button>
//           <button className="bg-grayRoot hover:bg-gray-400 text-gray-800 font-bold mb-4 py-2 px-10 rounded-r">
//             Next
//           </button>
//         </div>
//         </div>
//   </fieldset>
// </form>


//      <Footer />
//     </div>

   
//   )
// }

// export default Test;








import React, { useState } from 'react';
import Header from '../../assets/Header.jsx';
import Footer from '../../assets/Footer.jsx';
import { Link } from 'react-router-dom';


const questions = [
  {
    question: "What does your skin typically look like at the end of the day?",
    options: [
      "Oily and Shiny",
      "Dull and Tired",
      "Normal and Even",
      "Dry and Flaky"
    ]
  },
  {
    question: "What is your skin type?",
    options: [
      "Dry",
      "Oily",
      "Combination",
      "Sensitive"
    ]
  },
  {
    question: "Wat the end of the day?",
    options: [
      "Oily and Shiny",
      "Dull and Tired",
      "Normal and Even",
      "Dry and Flaky"
    ]
  },
  // Add more questions as needed
];

function Test() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      
    }
  };

  return (
    <div>
      {/* <Header /> */}
       <form className="Door  text-wrap  w-[700px] h-[540px]  m-auto rounded-lg bg-cover bg-center bg-no-repeat  text-black  " >
      <fieldset>
          <div className='font-bold'>
            <legend className="px-4 py-4 mt-28">Question {currentStep + 1}:</legend>
            <h1 className='px-5 text-lg w-[500px]'>
              {questions[currentStep].question}
            </h1>
            <div className='px-6 py-3 text-black'>
              {questions[currentStep].options.map((option, index) => (
                
                <div className="flex items-center mb-4" key={index}>
                  <input
                    id={`option-${index}`}
                    type="radio"
                    name="options"
                    value={option}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                  />
                  <label
                    htmlFor={`option-${index}`}
                    className="block ms-2 text-sm font-medium text-gray-900"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
            <div className="flex justify-center mx-auto">
             

                 <button
                  type="button"
                  onClick={handlePrev}
                  className="bg-grayRoot hover:bg-gray-400 text-gray-800 font-bold me-7 mb-4 py-2 px-10 rounded-l hidden"
                >
                  Prev
                </button>

            
              
              {currentStep < questions.length - 1 && (
            <button  type="button"  onClick={handleNext} className="bg-grayRoot hover:bg-gray-400 text-gray-800 font-bold mb-4 py-2 px-10 rounded-r">
              Next
            </button>
              
              )}
               {currentStep === questions.length - 1 && (
            <button  type="button"   className="bg-grayRoot hover:bg-gray-400 text-gray-800 font-bold mb-4 py-2 px-10 rounded-r">
              <Link to="/Pop">Finish</Link>
            </button>
              
              )}
              
            </div>
          </div>
        </fieldset>
      </form>
      <Footer />
    </div>
  );
}

export default Test;
