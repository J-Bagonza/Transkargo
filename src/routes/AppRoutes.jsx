import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Track from '../pages/TrackShipment';
import BookShipment from '../pages/BookShipment';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Success from '../pages/Success';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/track" element={<Track />} />
      <Route path="/book" element={<BookShipment />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
};

export default AppRoutes;