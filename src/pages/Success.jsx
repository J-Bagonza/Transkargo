import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Success = () => {
  return (
    <section className="bg-gray-900 text-white px-4 py-12 min-h-[70vh] flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-8 rounded-lg shadow-lg text-center max-w-lg"
      >
        <h2 className="text-3xl font-bold mb-4 text-green-400">Success!</h2>
        <p className="text-lg mb-6">
          Your shipment has been booked successfully. Tracking has started.
        </p>
        <Link
          to="/track"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition"
        >
          Track My Shipment
        </Link>
      </motion.div>
    </section>
  );
};

export default Success;