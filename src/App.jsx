import React from 'react';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default App;