import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
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

      {/* How It Works Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl font-semibold mb-4"
              >
                Step 1: Book Shipment
              </motion.h3>
              <p>
                Fill out the shipment details and choose your preferred shipping option. It’s that simple!
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-2xl font-semibold mb-4"
              >
                Step 2: Pay via M-Pesa or Bank
              </motion.h3>
              <p>
                Securely pay for your shipment using M-Pesa or choose a bank transfer, whichever works for you.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-2xl font-semibold mb-4"
              >
                Step 3: Track Your Shipment
              </motion.h3>
              <p>
                Stay updated with automated status updates and track your shipment all the way to its destination.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;