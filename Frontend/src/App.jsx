import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import PageTransition from "./Components/PageTransition";

import Services from "./Components/Services";
import Process from "./Components/Process";
import Industries from "./Components/Industries";
import Contact from "./Components/Contact";
import AboutUs from "./Components/AboutUs";
import Home from "./Components/Home";
import AccessibilityWidget from "./Components/AccessibilityWidget";

function App() {
  const [showButton, setShowButton] = useState(false);

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
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                X
              </div>
              <span className="text-2xl font-bold text-slate-800 tracking-wide group-hover:text-blue-600 transition-all duration-300">
                Smart XML
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
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
              <NavLink
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2.5 rounded-full text-white font-semibold shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300"
              >
                Request a Quote
              </NavLink>
            </div>

            {/* Mobile Menu Button (Placeholder) */}
            <div className="md:hidden flex items-center">
              <button className="text-white focus:outline-none">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
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
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:rotate-12 transition-transform duration-300">
                  X
                </div>
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
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                {/* X / Twitter */}
                <a href="#" className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center hover:bg-cyan-600 transition-colors group">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </a>
                {/* Facebook */}
                <a href="#" className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition-colors group">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center hover:opacity-90 transition-opacity group">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">
              © 2026 Smart XML Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      {/* ================= GLOBAL FLOATING CONTACT BUTTON ================= */}
      <div className={`fixed bottom-10 right-0 z-50 transition-all duration-500 ${showButton ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
        <NavLink
          to="/contact"
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center gap-0 group-hover:gap-3 px-4 py-3 rounded-l-full shadow-2xl hover:brightness-110 transition-all duration-300 group overflow-hidden max-w-[70px] hover:max-w-[170px] whitespace-nowrap"
          aria-label="Contact Us"
        >
          <div className="w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <i className="fa-regular fa-comment text-xl"></i>
          </div>
          <span className="font-bold text-lg tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-10 group-hover:translate-x-0">Contact</span>
        </NavLink>
      </div>

      {/* ================= ACCESSIBILITY WIDGET ================= */}
      <AccessibilityWidget isVisible={showButton} />

    </BrowserRouter>
  );
}

export default App;
