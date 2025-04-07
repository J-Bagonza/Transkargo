import { useState } from 'react';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

const App = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const openRegisterModal = () => setIsRegisterModalOpen(true);
  const closeModal = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />

      {/* Modals */}
      {isLoginModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center"
        >
          <div className="bg-white rounded-lg p-6 w-96">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-600">X</button>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-semibold mb-4 text-center"
            >
              Login
            </motion.h2>
            {/* Add the Login Form Here */}
          </div>
        </motion.div>
      )}

      {isRegisterModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center"
        >
          <div className="bg-white rounded-lg p-6 w-96">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-600">X</button>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-semibold mb-4 text-center"
            >
              Register
            </motion.h2>
            {/* Add the Register Form Here */}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default App;