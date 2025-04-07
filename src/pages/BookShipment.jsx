import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const BookShipment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    senderName: '',
    senderPhone: '',
    recipientName: '',
    recipientPhone: '',
    packageDescription: '',
    pickupAddress: '',
    deliveryAddress: '',
    paymentMethod: 'mpesa',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // In a real app, you'd send this to the backend here
    console.log('Submitted:', formData);

    // Simulate redirect to success page
    navigate('/success');
  };

  return (
    <section className="bg-gray-900 text-white px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-6 text-center"
        >
          Book Your Shipment
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Sender Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm">Sender Name</label>
              <input
                type="text"
                name="senderName"
                required
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 border border-gray-700"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Sender Phone (+254)</label>
              <input
                type="tel"
                name="senderPhone"
                required
                pattern="\+254[0-9]{9}"
                placeholder="+2547XXXXXXXX"
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 border border-gray-700"
              />
            </div>
          </div>

          {/* Recipient Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm">Recipient Name</label>
              <input
                type="text"
                name="recipientName"
                required
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 border border-gray-700"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Recipient Phone (+254)</label>
              <input
                type="tel"
                name="recipientPhone"
                required
                pattern="\+254[0-9]{9}"
                placeholder="+2547XXXXXXXX"
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 border border-gray-700"
              />
            </div>
          </div>

          {/* Package Description */}
          <div>
            <label className="block mb-1 text-sm">Package Description</label>
            <textarea
              name="packageDescription"
              rows="3"
              required
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            ></textarea>
          </div>

          {/* Pickup & Delivery */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm">Pickup Address (USA)</label>
              <input
                type="text"
                name="pickupAddress"
                required
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 border border-gray-700"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Delivery Address (Kenya)</label>
              <input
                type="text"
                name="deliveryAddress"
                required
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 border border-gray-700"
              />
            </div>
          </div>

          {/* Payment Options */}
          <div>
            <label className="block mb-2 text-sm">Select Payment Method</label>
            <div className="flex gap-6 items-center">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="mpesa"
                  checked={formData.paymentMethod === 'mpesa'}
                  onChange={handleChange}
                />
                M-Pesa
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank"
                  onChange={handleChange}
                />
                Bank Transfer
              </label>
            </div>
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white transition"
            >
              Proceed to Pay & Track
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookShipment;