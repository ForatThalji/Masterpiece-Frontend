import { useNavigate } from 'react-router-dom';

function Services() {
  const navigate = useNavigate();

  const handleChange = (event) => {
    const value = event.target.value;
    if (value) {
      navigate(value);
    }
  };

  return (
    // <form className="max-w-sm mx-auto w-[300px]">
    //   <label
    //     htmlFor="services"
    //     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //   >
        
    //   </label>
    //   <select
    //     id="Services"
    //     onChange={handleChange}
    //     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //   >
    //     <option value="">Choose Service</option>
    //     <option value="/Search">Search</option>
    //     <option value="/Consultation">Consultation</option>
    //     <option value="/Delivery">Delivery</option>
    //   </select>
    // </form>
    ا
  );
}

export default Services;
