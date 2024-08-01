import React from 'react';
import drOnline from '../../assets/drOnline.jpg';
import bookNow from '../../assets/bookNow.jpg';



function Appointment() {
  return (
    <div>
  
      <div className="w-screen ">
  <div className="relative border-8 border-grayRoot mx-auto mt-20 mb-3 max-w-screen-lg overflow-hidden rounded-t-xl bg-emerald-400/60 py-32 text-center shadow-xl shadow-gray-300">
    <h1 className="mt-2 px-8 text-3xl font-bold text-white md:text-5xl">
      Book an appointment
    </h1>
    
    <img
      className="absolute top-0 left-0 -z-10 w-[260px] h-[340px] object-cover"
      src={bookNow}
      alt=""
    />
    <p>sxdcfghb</p>
  </div>
  
  <div className="mx-auto grid max-w-screen-lg px-6 pb-20 border-8 border-grayRoot">
    <div className="">
      <p className="font-serif text-xl font-bold text-blue-900">
        Select a service
      </p>
      <div className="mt-4 grid max-w-3xl gap-x-4 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
        <div className="relative">
          <input
            className="peer hidden"
            id="radio_1"
            type="radio"
            name="radio"
            defaultChecked=""
          />
          <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-grayRoot bg-white peer-checked:border-emerald-400" />
          <label
            className="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-emerald-600 peer-checked:text-white"
            htmlFor="radio_1"
          >
            <span className="mt-2- font-medium">Financial Planning</span>
            <span className="text-xs uppercase">1 Hour</span>
          </label>
        </div>
        <div className="relative">
          <input
            className="peer hidden"
            id="radio_2"
            type="radio"
            name="radio"
          />
          <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-emerald-400" />
          <label
            className="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-emerald-600 peer-checked:text-white"
            htmlFor="radio_2"
          >
            <span className="mt-2 font-medium">Retirement Planning</span>
            <span className="text-xs uppercase">1 Hour</span>
          </label>
        </div>
        <div className="relative">
          <input
            className="peer hidden"
            id="radio_3"
            type="radio"
            name="radio"
          />
          <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-emerald-400" />
          <label
            className="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-emerald-600 peer-checked:text-white"
            htmlFor="radio_3"
          >
            <span className="mt-2 font-medium">Investment Advice</span>
            <span className="text-xs uppercase">1 Hour</span>
          </label>
        </div>
      </div>
    </div>
    <div className="">
      <p className="mt-8 font-serif text-xl font-bold text-blue-900">
        Select a date
      </p>
      <div className="relative mt-4 w-56">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          datepicker=""
          datepicker-orientation="bottom"
          autofocus="autofocus"
          type="text"
          className="datepicker-input block w-full rounded-lg border border-emerald-300 bg-emerald-50 p-2.5 pl-10 text-emerald-800 outline-none ring-opacity-30 placeholder:text-emerald-800 focus:ring focus:ring-emerald-300 sm:text-sm"
          placeholder="Select date"
        />
      </div>
    </div>
    <div className="">
      <p className="mt-8 font-serif text-xl font-bold text-blue-900">
        Select a time
      </p>
      <div className="mt-4 grid grid-cols-4 gap-2 lg:max-w-xl">
        <button className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">
          12:00
        </button>
        <button className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">
          14:00
        </button>
        <button className="rounded-lg bg-emerald-700 px-4 py-2 font-medium text-white active:scale-95">
          09:00
        </button>
        <button className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">
          12:00
        </button>
        <button className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">
          15:00
        </button>
        <button className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">
          12:00
        </button>
        <button className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">
          14:00
        </button>
        <button className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">
          12:00
        </button>
      </div>
    </div>
    <button className="bg-greenRoot w-[300px] rounded hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
      Book Now
    </button>
  </div>
</div>



    </div>
  )
}

export default Appointment;
