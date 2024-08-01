import React from 'react';
import buyremove from "../../assets/buyremove.png";
import brusher from '../../assets/brusher.png';
import { Link } from 'react-router-dom';
import oily from '../../assets/oily.png'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function ProdDetails() {
  const products = [
    {
      name: "Face Moisturizer Face Moisturizer Face Moisturizer",
      skinType: "Dry",
      price: 50.0,
      description: "A rich moisturizer that helps hydrate and soften dry skin.",
      rating: 4.5,
      image: './src/assets/cream.jpg',
      boycott: true
    },
    
  ];

  return (
    <div>
      {products.map((product, index) => (
        <div key={index} className="bg-gray-100 dark:bg-gray-800 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                  <img
                    className="w-full h-full object-cover rounded"
                    src={product.image}
                    alt="Product Image"
                  />
                </div>
             
              </div>
              <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex mb-4 mt-2">
                  <div className="mr-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Price:
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">${product.price}</span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Availability:
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                  </div>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Product Description:
                  </span>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    {product.description}
                  </p>
                </div>
                <div className="mb-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                   Skin Type:
                  </span>
                  <img className='w-[100px]'
                  src={oily}/>
                  <div className="flex items-center mt-2">
                    <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2" />
                    <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2" />
                    <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2" />
                    <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2" />
                  </div>
                </div>
               
               
                <div className="flex -mx-2 mb-4 mt-2">
                  <div className="w-1/2 px-2">
                    <button className="w-full bg-greenRoot dark:bg-gray-600 text-white py-2 px-4 rounded font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                      Add to Cart
                      <Link to="/Cart">Add to Cart</Link>
                    </button>
                  </div>
                  <div>
                <div
  key="1"
  className="py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-700"
  data-hs-input-number=""
>
  <div className="flex items-center gap-x-1.5">
    <button
      aria-label="Decrease"
      className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
      data-hs-input-number-decrement=""
      tabIndex="-1"
      type="button"
    >
      <svg
        className="shrink-0 size-3.5"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 12h14" />
      </svg>
    </button>
    <input
      aria-roledescription="Number field"
      className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:text-white"
      data-hs-input-number-input=""
      defaultValue="0"
      style={{
        MozAppearance: 'textfield'
      }}
      type="number"
    />
    <button
      aria-label="Increase"
      className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
      data-hs-input-number-increment=""
      tabIndex="-1"
      type="button"
    >
      <svg
        className="shrink-0 size-3.5"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    </button>
  </div>
</div>
                  </div>
                </div>
               

              </div>
            </div>
            <div className="text-3xl font-bold text-gray-800 dark:text-white my-8 mb-2"> 
           <h1>you may also like</h1> 
           <Swiper
      spaceBetween={30}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={buyremove}/></SwiperSlide>
      <SwiperSlide><img src={buyremove}/></SwiperSlide>
      <SwiperSlide><img src={brusher}/></SwiperSlide>
      <SwiperSlide><img src={buyremove}/></SwiperSlide>
      <SwiperSlide><img src={brusher}/></SwiperSlide>
      <SwiperSlide><img src={buyremove}/></SwiperSlide>
      <SwiperSlide><img src={brusher}/></SwiperSlide>
      
    </Swiper>
            </div>
          </div>
         
        </div>
        
      ))}
    </div>
  );
}

export default ProdDetails;