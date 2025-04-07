import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Book', path: '/book' },
    { name: 'Track', path: '/track' },
  ];

  return (
    <header className="bg-gray-900 text-white px-4 py-3 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-orange-400">TransKargo</Link>

        {/* Desktop */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-orange-400 transition"
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
            Sign In
          </button>
        </nav>

        {/* Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden overflow-hidden bg-gray-800 mt-2 rounded"
          >
            <div className="flex flex-col space-y-3 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="hover:text-orange-400 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 mt-2">
                Sign In
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;