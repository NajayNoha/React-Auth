import { NavLink } from "react-router-dom";
import  { useState } from 'react';
const RdvDrop = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="hover:bg-[#d2afff] hover:text-base-purple py-2 px-4 rounded"
      >
        Rendez-vous
      </button>
      <div
        className={`absolute ${isOpen ? '' : 'hidden'} mt-2 bg-[] border border-gray-300 rounded-lg shadow-md`}
      >
        <NavLink to='/rendez-vous/tous' className="block px-2 py-2 text-gray-800 hover:bg-blue-100 w-[8em] "
        onClick={toggleDropdown}>
            Tous
        </NavLink>
        <NavLink to="/rendez-vous/fixer-rdv" className="block px-2 py-2 text-gray-800 hover:bg-blue-100 w-[8em] "
        onClick={toggleDropdown}>
            Fixer RDV
        </NavLink>
        <NavLink to="/rendez-vous/programmer" className="block px-2 py-2 text-gray-800 hover:bg-blue-100 w-[8em] "
        onClick={toggleDropdown}>
            Programmés
        </NavLink>
        <NavLink to="/rendez-vous/a-programmer" className="block px-2 py-2 text-gray-800 hover:bg-blue-100 w-[8em] "
        onClick={toggleDropdown}>
            A Programmer
        </NavLink>
        <NavLink to="/rendez-vous/a-completer" className="block px-2 py-2 text-gray-800 hover:bg-blue-100 w-[8em] "
        onClick={toggleDropdown}>
            A completer
        </NavLink>
      </div>
    </div>
    );
}

export default RdvDrop;

    // <nav>
    //     {/* <ul className="flex">
    //         <li>
    //             <NavLink to='tous'>
    //             Tous
    //             </NavLink> 
    //         </li>
    //         <li>
    //             <NavLink to='/'>
    //             Programmés
    //             </NavLink> 
    //         </li>
    //         <li>
    //             <NavLink to='/'>
    //             A Programmer
    //             </NavLink> 
    //         </li>
    //         <li>
    //             <NavLink to='/'>
    //             A completer
    //             </NavLink> 
    //         </li>
            
    //         <li>
    //             <NavLink to='/'>
    //             Bloqués
    //             </NavLink> 
    //         </li>
    //     </ul> */}
    //     <div className="relative">
    //         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    //             Dropdown
    //         </button>
    //         <div className="absolute hidden mt-2 bg-white border border-gray-300 rounded-lg shadow-md">
    //             <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Item 1</a>
    //             <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Item 2</a>
    //             <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Item 3</a>
    //         </div>
    //     </div>
    // </nav>