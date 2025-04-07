import { Link } from 'react-router-dom';
import { FaShip } from 'react-icons/fa';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-950 text-white px-4 py-3 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <FaShip className="text-blue-400" />
          TransKargo
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/book" className="hover:text-blue-400 transition">Book</Link>
          <Link to="/track" className="hover:text-blue-400 transition">Track</Link>
          <Link to="/login" className="hover:text-blue-400 transition">Login</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col gap-3 px-4 mt-2"
        >
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/book" onClick={() => setOpen(false)}>Book</Link>
          <Link to="/track" onClick={() => setOpen(false)}>Track</Link>
          <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;