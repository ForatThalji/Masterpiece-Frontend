import React from 'react';
import creamSvg from '../../assets/creamSvg.png';
import facialFoam from '../../assets/facialFoam.png';
import facialMask from '../../assets/facialMask.png';
import sunblock from '../../assets/sunblock.png';
import serum from '../../assets/serum.png';
import { Select, Option } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Search() {
  const navigate = useNavigate();

  const handleChange = (event) => {
    const value = event.target.dataset.path;
        if (value) {
      navigate(value);
    }
  };
  const handleView = () => {
    
      navigate("/Alternative");
    
  };
    const products = [
        {
          name: "Face Moisturizer Face Moisturizer Face Moisturizer",
          skinType: "Dry",
          price: 50.0,
          description: "A rich moisturizer that helps hydrate and soften dry skin.",
          rating: 4.5,
          image:'./src/assets/cream.jpg',
          boycott:true
        },
        {
          name: "Face Moisturizer Face Moisturizer Face Moisturizer",
          skinType: "Dry",
          price: 50.0,
          description: "A rich moisturizer that helps hydrate and soften dry skin.",
          rating: 4.5,
          image:'./src/assets/g4.jpg',
          boycott:false
        },
        {
          name: "Face Moisturizer Face Moisturizer Face Moisturizer",
          skinType: "Dry",
          price: 50.0,
          description: "A rich moisturizer that helps hydrate and soften dry skin.",
          rating: 4.5,
          image:'./src/assets/cream.jpg',
          boycott:false
        }
        ,
        {
          name: "Face Moisturizer Face Moisturizer Face Moisturizer",
          skinType: "Dry",
          price: 50.0,
          description: "A rich moisturizer that helps hydrate and soften dry skin.",
          rating: 4.5,
          image:'./src/assets/g3.jpg',
          boycott:true
        },
        {
          name: "Face Moisturizer Face Moisturizer Face Moisturizer",
          skinType: "Dry",
          price: 50.0,
          description: "A rich moisturizer that helps hydrate and soften dry skin.",
          rating: 4.5,
          image:'./src/assets/g2.jpg',
          boycott:false
        },
        {
          name: "Face Moisturizer Face Moisturizer Face Moisturizer",
          skinType: "Dry",
          price: 50.0,
          description: "A rich moisturizer that helps hydrate and soften dry skin.",
          rating: 4.5,
          image:'./src/assets/cream.jpg',
          boycott:true
        }
      ];

      const ProductCard = ({ product }) => (
        <div className="mb-3 mx-4">
          <div className="relative flex mx-8 w-[300px] h-[450px]  mb-8 max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            {product.boycott ? (
              <>
                <img
                  className="object-cover w-full h-[400px]"
                  src={product.image}
                  alt="product image"
                  
                />
                 <span
        className="absolute top-0 right-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white animate-bounce cursor-pointer"
        data-path="/products" // استخدم data-* attribute
        onClick={handleChange}
      ></span>
                <span
                onClick={handleView} className="absolute top-0 right-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white animate-bounce">
                  <svg
                    width="40px"
                    height="40px"
                    
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--emojione"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path fill="#ed4c5c" d="M32 62L62 2H2z"></path>
                  </svg>
                </span>
              </>
            ) : (
              <>
                <img
                  className="object-cover w-full h-[400px]"
                  src={product.image}
                  alt="product image"
                />
                <span className="absolute top-0 right-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white"></span>
              </>
            )}
      
            <div className="flex-grow p-4">
              <a href="#">
                <h5 className="text-xl font-bold tracking-tight text-slate-900">
                  {product.name}
                </h5>
              </a>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-slate-900">
                    ${product.price}
                  </span>
                  <span className="text-sm text-slate-900 line-through">$699</span>
                </p>
                <div className="flex items-center">
                  {Array.from({ length: 5 }, (_, index) => (
                    <svg
                      key={index}
                      aria-hidden="true"
                      className={`h-5 w-5 ${index < Math.floor(product.rating) ? 'text-yellow-300' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                    {product.rating}
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg><button>
                <Link to="/ProdDetails">Shop Now</Link></button>
              </a>
            </div>
          </div>
        </div>
      );
      
  return (
    <div>
      <>

  
  <div className="icons">
    <img
      src={creamSvg}
      width="130px"
      height="130px"
      className="icon"
    />
    <img
      src={facialMask}
      width="130px"
      height="130px"
      className="icon"
    />
    <img
      src={facialFoam}
      width="130px"
      height="130px"
      className="icon"
    />
    <img
      src={sunblock}
      width="130px"
      height="130px"
      className="icon"
    />
    <img
      src={serum}
      width="130px"
      height="130px"
      className="icon"
    />
    <div className="iconsPara">
      
      <p>Cleanser</p>
      <p>Mask</p>
      <p>Moist</p>
      <p>sunblock</p>
      <p>Serum</p>
      
    </div>
  </div>
 
 
<div className='flex  mx-44 my-60 mb-24 '>
 
    <form className="max-w-sm mx-auto w-[300px]">
    <label
        htmlFor="Skin Type"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
        Skin Type
    </label>
    <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
        <option selected="">Choose Skin Type</option>
        <option selected="">Normal</option>
        <option value="Oily">Oily</option>
        <option value="Combination">Combination</option>
        <option value="Dry">Dry</option>
       
    </select>
    </form>


    <form className="max-w-sm mx-auto w-[300px]">
    <label
        htmlFor="Age"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
        Age
    </label>
    <select
        id="Age"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
        <option selected="">Choose Age</option>
        <option value="1">1 - 10</option>
        <option value="2">11 - 20</option>
        <option value="3">21 - 40</option>
        <option value="4">41 - 60</option>
    </select>
    </form>


    <form className="max-w-sm mx-auto w-[300px]">
    <label
        htmlFor="price"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
       price
    </label>
    <select
        id="price"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
        <option selected="">Choose price</option>
        <option value="1">1 - 10</option>
        <option value="2">10 -20</option>
        <option value="3">20 - 30</option>
        <option value="4">40</option>
    </select>
    </form>

</div>


<div className="flex flex-wrap justify-center ">
    {products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ))}
  </div>
  
 
</>

    </div>
  )
}

export default Search;
