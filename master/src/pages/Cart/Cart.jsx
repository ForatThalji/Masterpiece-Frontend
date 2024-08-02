import React from 'react';
import {Link} from 'react-router-dom';

function Cart() {
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
            <div className="ml-64 mt-10">
                <div className="sm:flex shadow-md my-10 ">
                    <div className="w-full sm:w-3/4 bg-white px-10 py-10 ">
                        <div className="flex justify-between border-b  pb-8">
                            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                            <h2 className="font-semibold text-2xl">{products.length} Items</h2>
                        </div>

                        {products.map((product, index) => (
                            <div key={index} className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
                                <div className="md:w-4/12 2xl:w-1/4 w-full">
                                    <img
                                        alt={product.name}
                                        className="h-full object-center object-cover md:block hidden"
                                        src={product.image}
                                    />
                                    <img
                                        alt={product.name}
                                        className="md:hidden w-full h-full object-center object-cover"
                                        src={product.image}
                                    />
                                </div>
                                <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                                    <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">{product.skinType}</p>
                                    <div className="flex items-center justify-between w-full">
                                        <p className="text-base font-black leading-none text-gray-800">{product.name}</p>
                                        <select
                                            aria-label="Select quantity"
                                            className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
                                        >
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                        </select>
                                    </div>
                                    <p className="text-xs leading-3 text-gray-600 pt-2">{product.description}</p>
                                    <p className="text-xs leading-3 text-gray-600 py-4">Rating: {product.rating}</p>
                                    <div className="flex items-center justify-between pt-5">
                                        <div className="flex items-center">
                                            <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
                                            <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                                        </div>
                                        <p className="text-base font-black leading-none text-gray-800">${product.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
<div className='flex flex-row  '>
                        <Link to="/Products" className="flex font-semibold text-indigo-600 text-lg mt-10 mx-64" href="#">
                            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                            </svg>
                            Continue Shopping
                        </Link>
                        <Link to="/Checkout" className="flex font-semibold text-indigo-600 text-lg mt-10" href="#">
                      

                            Go Payment
                            <svg className="fill-current ml-2 text-indigo-600 w-4" viewBox="0 0 448 512">
    <path d="M313.941 296H12c-6.627 0-12-5.373-12-12v-56c0-6.627 5.373-12 12-12h301.941V169.941c0-21.382 25.851-32.09 40.971-16.971L440.971 239.029c9.373 9.373 9.373 24.569 0 33.941l-86.059 86.059c-15.119 15.119-40.971 4.411-40.971-16.971V296z" />
</svg>
                        </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Cart;
