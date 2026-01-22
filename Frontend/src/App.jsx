import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
import PageTransition from "./Components/PageTransition";
import logo from "./assets/images/logo.png";


import Services from "./Components/Services";
import Process from "./Components/Process";
import Industries from "./Components/Industries";
import Contact from "./Components/Contact";
import AboutUs from "./Components/AboutUs";
import Home from "./Components/Home";
import AccessibilityWidget from "./Components/AccessibilityWidget";
import SmartXMLChatbot from "./Components/Chatbot";

/**
 * Helper to scroll to top on route change,
 * and to specific hash if it exists in the URL.
 */
function ScrollToTopAndHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  const [showButton, setShowButton] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px (past the hero/image area)
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTopAndHash />
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group cursor-pointer">
              <img
                src={logo}
                alt="Smart XML Solutions Logo"
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-500"
              />
              <span className="text-2xl font-bold text-slate-800 tracking-wide group-hover:text-blue-600 transition-all duration-300">
                Smart XML
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm font-medium">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Process", path: "/process" },
                { name: "Industries", path: "/industries" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-3 py-2 transition-all duration-300 hover:text-blue-600 hover:scale-105
                    ${isActive ? "text-blue-600 font-bold" : "text-gray-600 font-medium"}
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left
                    ${isActive ? "after:scale-x-100 after:origin-bottom" : ""}
                    `
                  }
                >
                  {item.name}
                </NavLink>

              ))}
              <div className="lg:ml-4 xl:ml-8">
                <NavLink
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2.5 rounded-full text-white font-semibold shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300"
                >
                  Request a Quote
                </NavLink>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-800 focus:outline-none hover:text-blue-600 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl animate-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col space-y-4 px-6 py-8">
                {[
                  { name: "Home", path: "/" },
                  { name: "About", path: "/about" },
                  { name: "Services", path: "/services" },
                  { name: "Process", path: "/process" },
                  { name: "Industries", path: "/industries" },
                  { name: "Contact", path: "/contact" },
                ].map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-lg font-medium transition-colors duration-300
                      ${isActive ? "text-blue-600 pl-4 border-l-4 border-blue-600" : "text-gray-600 hover:text-blue-600"}
                      `
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <NavLink
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-blue-500/20 active:scale-95 transition-all"
                  >
                    Request a Quote
                  </NavLink>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Routes */}
      <main>
        <Routes>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><AboutUs /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/process" element={<PageTransition><Process /></PageTransition>} />
          <Route path="/industries" element={<PageTransition><Industries /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Routes>
      </main>

      {/* Footer Section */}
      <footer className="bg-[#0b1120] text-white pt-16 pb-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1: Brand */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 group cursor-pointer">
                <img
                  src={logo}
                  alt="Smart XML Solutions Logo"
                  className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <span className="text-xl font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors">
                  Smart XML
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Smart XML Solutions delivers reliable XML conversion, content digitization, and data processing services that help organizations manage structured information with accuracy and consistency.
              </p>
            </div>

            {/* Column 2: Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    XML Conversion Services
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    XML Tagging Services
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    DTD / XSD Validation
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    Content Digitization Services
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    Data Quality & Validation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    About Smart XML Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/process" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link to="/industries" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    Industries We Serve
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Networks */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Networks</h3>
              <p className="text-gray-400 text-sm mb-6">
                Connect with Smart XML Solutions
              </p>
              <div className="flex gap-4">
                {/* LinkedIn */}
                <a href="#" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors group">
                  <i className="fa-brands fa-linkedin-in text-white text-lg"></i>
                </a>
                {/* WhatsApp */}
                <a href="#" className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:brightness-110 transition-all group">
                  <i className="fa-brands fa-whatsapp text-white text-lg"></i>
                </a>
                {/* Facebook */}
                <a href="#" className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:brightness-110 transition-all group">
                  <i className="fa-brands fa-facebook-f text-white text-lg"></i>
                </a>
                {/* Instagram */}
                <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center hover:brightness-110 transition-all group">
                  <i className="fa-brands fa-instagram text-white text-lg"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">
              © 2026 Smart XML Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* ================= ACCESSIBILITY WIDGET ================= */}
      <AccessibilityWidget isVisible={showButton} />

      {/* ================= CHATBOT ================= */}
      <SmartXMLChatbot />

    </BrowserRouter>
  );
}

export default App;