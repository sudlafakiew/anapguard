const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">Address: [Your Company Address]</p>
          <p className="text-sm">Phone: [Your Company Phone]</p>
          <p className="text-sm">Email: [Your Company Email]</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-gray-400 text-sm">Facebook</a>
            <a href="#" className="hover:text-gray-400 text-sm">Twitter</a>
            <a href="#" className="hover:text-gray-400 text-sm">LinkedIn</a>
            {/* Replace with actual icons if available */}
          </div>
        </div>
        <div>
          <p className="text-sm">&copy; {new Date().getFullYear()} บริษัท รักษาความปลอดภัย เอ.เอ็น.เอ.พี. จำกัด. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
