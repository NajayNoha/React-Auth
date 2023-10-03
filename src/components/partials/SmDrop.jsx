// import { NavLink } from "react-router-dom";
import  { useState } from 'react';
// import RdvDrop from "./RdvDrop";
import Menu from '../../assets/menu.png'

const SmDrop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sIsOpen, setSIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const toggleSubDropdown = () => {   
      setSIsOpen(!sIsOpen);
    };

  return (
    <div className="relative">
      {/* <button
        className="hover:bg-pink-500 text-white py-2 px-4 rounded-md"
      >
        Menu
      </button> */}
      <img
          onClick={toggleDropdown}
          src={Menu}
          alt="menuIcom"
          className="h-6 w-6 mr-2" 
        />  
      {isOpen && (
        <div className="absolute right-0 mt-6 w-48 bg-white border border-light-purple rounded shadow-lg z-10 rounded">
          <ul>
            <li className="py-2 px-4 hover:bg-lighter-lilac/75 relative"
                onClick={toggleSubDropdown}
            >
              Option 1
              
              <ul 
                className={`${!sIsOpen ? 'hidden' : ''} absolute left-0 top-full mt-0 bg-white border border-light-purple rounded shadow-lg`}
                >
                <li className="py-2 px-4 hover:bg-lighter-lilac/75">
                  <a href="#">Sub-Option 1</a>
                </li>
                <li className="py-2 px-4 hover:bg-lighter-lilac/75">
                  <a href="#">Sub-Option 2</a>
                </li>
                <li className="py-2 px-4 hover:bg-lighter-lilac/75">
                  <a href="#">Sub-Option 3</a>
                </li>
              </ul>
            </li>
            <li className="py-2 px-4 hover:bg-gray-100" onClick={toggleDropdown}>
              <a href="#">Option 2</a>
            </li>
            <li className="flex-2 hover:bg-[#d2afff] hover:text-base-purple/75 dark:text-light-purple  py-2 px-4 rounded hover:underline" onClick={toggleDropdown}>
              <a href="#">Logout</a>
            </li>
          </ul>
        </div>
      )}
    </div>
    );
}


export default SmDrop;
