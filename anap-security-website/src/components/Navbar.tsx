import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">ANAP Security</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/about" className="hover:text-gray-400">About Us</Link>
          <Link href="/services" className="hover:text-gray-400">Services</Link>
          <Link href="/news" className="hover:text-gray-400">News/Activities</Link>
          <Link href="/careers" className="hover:text-gray-400">Careers</Link>
          <Link href="/gallery" className="hover:text-gray-400">Gallery</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact Us</Link>
        </div>
        <div className="hidden md:block">
          <span className="cursor-pointer hover:text-gray-400">TH | EN</span>
        </div>
        <div className="md:hidden">
          {/* Hamburger menu button */}
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu - can be hidden or shown based on state */}
      {/*
      <div className="md:hidden mobile-menu hidden">
        <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-700">Home</Link>
        <Link href="/about" className="block py-2 px-4 text-sm hover:bg-gray-700">About Us</Link>
        <Link href="/services" className="block py-2 px-4 text-sm hover:bg-gray-700">Services</Link>
        <Link href="/news" className="block py-2 px-4 text-sm hover:bg-gray-700">News/Activities</Link>
        <Link href="/careers" className="block py-2 px-4 text-sm hover:bg-gray-700">Careers</Link>
        <Link href="/gallery" className="block py-2 px-4 text-sm hover:bg-gray-700">Gallery</Link>
        <Link href="/contact" className="block py-2 px-4 text-sm hover:bg-gray-700">Contact Us</Link>
        <div className="py-2 px-4 text-sm hover:bg-gray-700 cursor-pointer">TH | EN</div>
      </div>
      */}
    </nav>
  );
};

export default Navbar;
