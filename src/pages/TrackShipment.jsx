import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const stages = [
  { status: 'Picked Up', delay: 0 },
  { status: 'Packed & Labeled', delay: 1 },
  { status: 'In USA Customs', delay: 3 },
  { status: 'In Transit (Air)', delay: 5 },
  { status: 'Arrived in Kenya', delay: 7 },
  { status: 'In Kenya Customs', delay: 8 },
  { status: 'Out for Delivery', delay: 9 },
  { status: 'Delivered', delay: 10 },
];

const TrackShipment = () => {
  const [trackingId, setTrackingId] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    if (submitted) {
      const interval = setInterval(() => {
        setCurrentStage((prev) => {
          if (prev < stages.length - 1) return prev + 1;
          clearInterval(interval);
          return prev;
        });
      }, 1000 * 60 * 60); // simulate one stage per hour
    }
  }, [submitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setCurrentStage(0); // start fresh tracking
  };

  return (
    <section className="bg-gray-900 text-white px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-6 text-center"
        >
          Track Your Shipment
        </motion.h2>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
            <input
              type="text"
              placeholder="Enter Tracking ID or Phone Number"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              className="w-full md:w-2/3 p-2 rounded bg-gray-800 border border-gray-700"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition"
            >
              Track Shipment
            </button>
          </form>
        ) : (
          <div className="mt-8 space-y-4">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: index <= currentStage ? 1 : 0.5, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-md border-l-4 ${
                  index === currentStage
                    ? 'border-blue-500 bg-blue-900'
                    : index < currentStage
                    ? 'border-green-500 bg-green-900'
                    : 'border-gray-600 bg-gray-800'
                }`}
              >
                <strong>{stage.status}</strong>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TrackShipment;