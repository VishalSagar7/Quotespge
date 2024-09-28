import React from 'react';
import 'remixicon/fonts/remixicon.css'


function Footer() {
    return (
        <footer className="flex flex-col justify-around items-center text-gray-800 py-8 h-[400px] bg-gray-200 ">

            <div className="mr-4">
                <h1 className='text-3xl text-sky-600 font-bold'>LOGOIPSUM</h1>
            </div>
            <div className="flex flex-col md:flex-row items-center text-center">
                <div className="text-lg ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt <br/> consequuntur amet culpa cum itaque neque.

                </div>
            </div>
            <nav className="flex space-x-4">
                <a href="#" className="hover:text-teal-500">About</a>
                <a href="#" className="hover:text-teal-500">Careers</a>
                <a href="#" className="hover:text-teal-500">History</a>
                <a href="#" className="hover:text-teal-500">Services</a>
                <a href="#" className="hover:text-teal-500">Projects</a>
                <a href="#" className="hover:text-teal-500">Blog</a>
            </nav>
            <div className="flex space-x-4 text-3xl">
                <i className="ri-facebook-circle-fill hover:text-sky-500"></i>
                <i className="ri-instagram-fill hover:text-sky-500"></i>
                <i className="ri-twitter-fill hover:text-sky-500"></i>
                <i className="ri-github-fill hover:text-sky-500"></i>
            </div>


            <div className="mt-4 text-center text-sm">
                &copy; 2023 logoipsum. All rights reserved.
            </div>

        </footer>
    );
}

export default Footer;