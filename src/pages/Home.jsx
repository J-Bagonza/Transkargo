import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-gray-900 text-white px-4 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Seamless Shipping from the USA to Kenya
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl mb-8 text-gray-300"
        >
          Book, track, and receive goods from overseas with automated status updates and instant M-Pesa payments.
        </motion.p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/book"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
          >
            Book Shipment
          </Link>
          <Link
            to="/track"
            className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-xl transition"
          >
            Track Goods
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;