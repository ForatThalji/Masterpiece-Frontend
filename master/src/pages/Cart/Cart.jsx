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
            <div className="mx-44 mt-10">
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

                        <Link to="/Products" className="flex font-semibold text-indigo-600 text-sm mt-10" href="#">
                            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                            </svg>
                            Continue Shopping
                        </Link>
                    </div>
                    <div className="w-full border bg-grayRoot  sm:w-1/4 md:w-1/2 px-8 py-10" id="summary">
                        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">Items {products.length}</span>
                            <span className="font-semibold text-sm">${products.reduce((total, product) => total + product.price, 0)}</span>
                        </div>
                        <div>
                            <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                            <select className="block p-2 text-gray-600 w-full text-sm">
                                <option>Standard shipping - $10.00</option>
                            </select>
                        </div>
                        <div className="py-10">
                            <label className="font-semibold inline-block mb-3 text-sm uppercase" htmlFor="promo">Promo Code</label>
                            <input className="p-2 text-sm w-full" id="promo" placeholder="Enter your code" type="text" />
                        </div>
                        <button className="bg-greenRoot rounded hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>${products.reduce((total, product) => total + product.price, 0) + 10}</span>
                            </div>
                            <button className="bg-pinkRoot rounded font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
