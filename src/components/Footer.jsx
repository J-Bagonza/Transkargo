const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-300 py-6 px-4">
        <div className="max-w-7xl mx-auto text-center text-sm">
          &copy; {new Date().getFullYear()} TransKargo. All rights reserved. |
          Built for Kenya–USA shipping convenience.
        </div>
      </footer>
    );
  };
  
  export default Footer;