import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const Track = () => {
  const { trackingId } = useParams();
  const [trackingData, setTrackingData] = useState(null);

  useEffect(() => {
    // Simulate fetching tracking data
    const dummyData = {
      status: 'In Transit',
      history: [
        { date: '2025-05-15', location: 'New York, USA', event: 'Package received at origin facility' },
        { date: '2025-05-16', location: 'Philadelphia, USA', event: 'Departed facility' },
        { date: '2025-05-17', location: 'Nairobi, Kenya', event: 'Arrived at destination hub' },
      ],
    };

    // Simulate network delay
    setTimeout(() => {
      setTrackingData(dummyData);
    }, 800);
  }, [trackingId]);

  return (
    <section className="bg-gray-900 text-white px-4 py-10 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-6 text-center"
        >
          Track Your Package
        </motion.h2>

        {trackingData ? (
          <div className="bg-gray-800 p-6 rounded-lg shadow">
            <p className="text-lg mb-4">
              <strong>Tracking ID:</strong> {trackingId}
            </p>
            <p className="text-green-400 font-semibold mb-4">
              Current Status: {trackingData.status}
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-2">Tracking History</h3>
              <ul className="space-y-2">
                {trackingData.history.map((event, index) => (
                  <li key={index} className="border-l-4 border-blue-500 pl-4">
                    <p className="text-sm text-gray-400">{event.date} — {event.location}</p>
                    <p>{event.event}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-400">Loading tracking information...</p>
        )}
      </div>
    </section>
  );
};

export default Track;
