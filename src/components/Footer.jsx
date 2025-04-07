const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} TransKargo. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-orange-400">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;