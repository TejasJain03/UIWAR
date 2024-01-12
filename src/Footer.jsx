
const Footer = () => {
  return (
    <footer className="bg-black text-white p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Hemisphere</h3>
            <p className="text-sm">
              Your destination for exquisite timepieces.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2">Contact Us</h4>
            <p className="text-sm mb-2">Email: info@hemisphere.com</p>
            <p className="text-sm mb-2">Phone: +1 (555) 123-4567</p>
            <a href="/contact" className="text-blue-400 hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
