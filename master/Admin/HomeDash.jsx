import React from 'react'

function HomeDash() {
  return (
    <div>
      <div className="flex">
  <aside className="w-64 bg-gray-800 text-white h-screen p-5">
    <h1 className="text-2xl font-bold mb-6">
      Dashboard
    </h1>
    <ul>
      <li className="mb-4">
        <a
          className="text-gray-300 hover:text-white"
          href="#"
        >
          Home
        </a>
      </li>
      <li className="mb-4">
        <a
          className="text-gray-300 hover:text-white"
          href="#"
        >
          Analytics
        </a>
      </li>
      <li className="mb-4">
        <a
          className="text-gray-300 hover:text-white"
          href="#"
        >
          Reports
        </a>
      </li>
      <li className="mb-4">
        <a
          className="text-gray-300 hover:text-white"
          href="#"
        >
          Settings
        </a>
      </li>
    </ul>
  </aside>
  <div className="flex-1">
    <header className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">
          Dashboard Title
        </h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Log Out
        </button>
      </div>
    </header>
    <main className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Card Title 1
          </h2>
          <p className="text-gray-700">
            This is some content inside the card.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Card Title 2
          </h2>
          <p className="text-gray-700">
            This is some content inside the card.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Card Title 3
          </h2>
          <p className="text-gray-700">
            This is some content inside the card.
          </p>
        </div>
      </div>
    </main>
  </div>
</div>
    </div>
  )
}

export default HomeDash
