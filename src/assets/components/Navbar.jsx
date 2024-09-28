import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between items-center p-6 px-[100px] bg-gray-900 text-white">
      <div className="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" alt="GeekFoods Logo" className="h-12 mr-4" />
        <h1 className="text-2xl font-bold">GeekFoods</h1>
      </div>
      <ul className="hidden md:flex space-x-6">
        <li><a href="#" className="hover:text-blue-400 text-lg">Home</a></li>
        <li><a href="#" className="hover:text-blue-400 text-lg">Quote</a></li>
        <li><a href="#" className="hover:text-blue-400 text-lg">Restaurants</a></li>
        <li><a href="#" className="hover:text-blue-400 text-lg">Foods</a></li>
        <li><a href="#" className="hover:text-blue-400 text-lg">Contact</a></li>
      </ul>
      <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Get Started</button>
    </nav>
  );
};

export default Navbar;
