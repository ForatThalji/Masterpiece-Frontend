import React from 'react'
import cream from '../../assets/cream.jpg'
import cream2 from '../../assets/cream2.jpg'
import cream3 from '../../assets/cream3.jpg'
import { useState, useEffect } from 'react';



function Products() {
  const [itemsPerPage] = useState(8);

  const products = [
    {
      name: "Face Moisturizer Face Moisturizer Face Moisturizer",
      skinType: "Dry",
      price: 50.0,
      description: "A rich moisturizer that helps hydrate and soften dry skin.",
      rating: 4.5,
      image:'./src/assets/cream.jpg'
    },
    {
      name: "Face Moisturizer Face Moisturizer Face Moisturizer",
      skinType: "Dry",
      price: 50.0,
      description: "A rich moisturizer that helps hydrate and soften dry skin.",
      rating: 4.5,
      image:'./src/assets/cream.jpg'
    },
    {
      name: "Face Moisturizer Face Moisturizer Face Moisturizer",
      skinType: "Dry",
      price: 50.0,
      description: "A rich moisturizer that helps hydrate and soften dry skin.",
      rating: 4.5,
      image:'./src/assets/cream.jpg'
    },
    {
      name: "Face Moisturizer Face Moisturizer Face Moisturizer",
      skinType: "Dry",
      price: 50.0,
      description: "A rich moisturizer that helps hydrate and soften dry skin.",
      rating: 4.5,
      image:'./src/assets/cream.jpg'
    },
    {
      name: "Face Moisturizer Face Moisturizer Face Moisturizer",
      skinType: "Dry",
      price: 50.0,
      description: "A rich moisturizer that helps hydrate and soften dry skin.",
      rating: 4.5,
      image:'./src/assets/cream.jpg'
    },
    {
      name: "Facial Cleanser",
      skinType: "Oily",
      price: 30.0,
      description: "A cleanser that helps cleanse oily skin and reduce shine.",
      rating: 4.0,image:'./src/assets/cream2.jpg'
    },
    {
      name: "Night Cream",
      skinType: "Combination",
      price: 70.0,
      description: "A nourishing cream used at night to hydrate combination skin.",
      rating: 4.7,image:"./src/assets/cream3.jpg"
    },
    {
      name: "Anti-Aging Serum",
      skinType: "All types",
      price: 120.0,
      description: "A serum that helps reduce the appearance of fine lines and wrinkles.",
      rating: 4.8,image:'./src/assets/cream4.jpg'
    },
    {
      name: "Sunscreen SPF 50",
      skinType: "Sensitive",
      price: 40.0,
      description: "A lightweight sunscreen that protects sensitive skin from harmful UV rays.",
      rating: 4.6,image:'./src/assets/cream5.jpg'
    },
    {
      name: "Exfoliating Scrub",
      skinType: "Normal",
      price: 25.0,
      description: "A gentle scrub that exfoliates normal skin, leaving it smooth and refreshed.",
      rating: 4.3,image:'./src/assets/cream5.jpg'
    }
  ];

const [currentPage, setCurrentPage] = useState(1);
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);


const totalPages = Math.ceil(products.length / itemsPerPage);

const paginate = (pageNumber) => setCurrentPage(pageNumber); 
  return (
    <div>
      <>
      <form className="max-w-md mx-auto mt-4">
  <label
    htmlFor="default-search"
    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
  >
    Search
  </label>
  <div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
    </div>
    <input
      type="search"
      id="default-search"
      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Search Mockups, Logos..."
      required=""
    />
    <button
      type="submit"
      className="text-white absolute end-2.5 bottom-2.5 bg-greenRoot hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Search
    </button>
  </div>
      </form>

  <div className="products-container my-7 ">
  
    {currentItems.map((product, index) => (
        <div key={index} className="wrapper  w-[300px] h-[450px] mb-8 bg-grayRoot">
          <div className="container ">
         
            <div className="top " />
          
            <div className="bottom">
              <div className="left">
             
              <img
                  className="w-[200px] h-[250px] m-12  " 
                  src={product.image}
                  alt={product.name}
                />
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white  mx-2">{product.name}</h5>

              </div>
            </div>
          </div>
          <div className="inside">
          <div className="icon"></div>
              <div className="contents">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>

                  <p>{product.description}</p>
                  
                 
                  <div className="bg-blue-100 text-gray-900 text-2xl font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-gray-900 ms-3">
                    {product.rating} ★
                  </div>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    $599
                  </span>
                    
               
                  
              </div>
          </div>
          
        </div>
      ))}
    </div>
  
 
</>
<Pagination totalPages={totalPages} paginate={paginate} />
    </div>
    
  )
}
function Pagination({ totalPages, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination flex justify-center mt-4">
        {pageNumbers.map(number => (
          <li key={number} className="page-item mx-1">
            <a onClick={() => paginate(number)} href="#!" className="page-link bg-gray-200 px-3 py-1 rounded">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Products;
