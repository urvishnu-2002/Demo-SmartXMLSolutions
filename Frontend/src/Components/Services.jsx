import { NavLink } from "react-router-dom";
import pdfToXml from "../assets/images/PdfToXml.png";
import docToXml from "../assets/images/DocToXml.png";
import htmlToXml from "../assets/images/htmlToXml.png";
import validationImg from "../assets/images/Validation.png";
import contentDigitizationImg from "../assets/images/Content Digitization.png";

function Services() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-slate-800">
      {/* ================= HERO SECTION ================= */}
      <section className="hero-section relative bg-gradient-to-br from-[#0b1120] via-[#1c4e80] to-[#0b1120] text-white py-24 px-6 overflow-hidden">

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fadeUp">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto font-light">
            Comprehensive XML and data processing solutions designed to meet enterprise
            requirements with precision, speed, and reliability.
          </p>

          <NavLink
            to="/contact"
            className="inline-block mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300"
          >
            Request a Quote
          </NavLink>
        </div>
      </section>

      {/* ================= XML CONVERSION SECTION ================= */}
      <section className="bg-white section-padding px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-6 mb-10 animate-fadeUp">
            <div className="w-16 h-16 bg-blue-50 flex items-center justify-center rounded-2xl shadow-sm border border-blue-100 rotate-3 group-hover:rotate-12 transition-transform">
              <span className="text-blue-600 text-3xl font-extrabold">⌘</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">XML Conversion</h2>
          </div>

          <p className="text-slate-600 text-lg leading-relaxed mb-16 max-w-4xl animate-fadeUp animation-delay-200 font-light">
            We convert documents from multiple source formats into structured,
            standards-compliant XML while maintaining content accuracy and consistency.
          </p>

          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 animate-fadeUp animation-delay-400">
            {[
              { img: pdfToXml, title: "PDF to XML" },
              { img: docToXml, title: "Word to XML" },
              { img: htmlToXml, title: "HTML to XML" },
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-lg premium-card">
                <div className="absolute inset-0 bg-blue-500/5 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-contain rounded-2xl relative z-10 transition-transform duration-500 group-hover:scale-110"
                />
                <p className="text-center mt-6 font-bold text-xl text-slate-800 group-hover:text-blue-600 transition-colors">{item.title}</p>
              </div>
            ))}
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 animate-fadeUp animation-delay-500">
            {/* Service Scope Card */}
            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 premium-card">
              <h3 className="text-2xl font-bold text-[#0b1120] mb-6 flex items-center gap-3">
                <i className="fa-solid fa-list-check text-blue-600"></i> Service Scope
              </h3>
              <ul className="space-y-4">
                {[
                  "PDF to XML conversion",
                  "Word to XML transformation",
                  "HTML to semantic XML",
                  "Legacy format migration",
                  "Batch XML processing"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-700 text-lg font-light">
                    <span className="mt-2.5 w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 animate-pulse"></span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits Card */}
            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 premium-card">
              <h3 className="text-2xl font-bold text-[#0b1120] mb-6 flex items-center gap-3">
                <i className="fa-solid fa-trophy text-blue-600"></i> Business Benefits
              </h3>
              <ul className="space-y-4">
                {[
                  "Maintain document structure",
                  "Improve searchability",
                  "Enable content reuse",
                  "Simplify long-term storage"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-700 text-lg font-light">
                    <i className="fa-solid fa-check-circle text-blue-600 text-xl"></i>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OTHER SERVICES GRID ================= */}
      <section className="section-padding px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* XML Tagging */}
          <div className="grid lg:grid-cols-2 gap-10 items-center animate-fadeUp">
            <div>
              <div className="w-12 h-12 bg-purple-100 flex items-center justify-center rounded-xl shadow-sm mb-6">
                <i className="fa-solid fa-tags text-purple-600 text-2xl"></i>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                XML Tagging & Structuring
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                We apply structured XML tagging to support semantic consistency,
                content reuse, and system compatibility.
              </p>
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl premium-card">
                <h4 className="font-extrabold text-slate-800 mb-4 text-xl tracking-tight">Key Advantages:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Improve discoverability", "Support automation", "Multi-channel delivery", "Simplify CMS integration"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-base text-slate-600 font-light">
                      <i className="fa-solid fa-check-circle text-purple-500"></i> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Visual/Image Placeholder or abstract shape */}
            <div className="hidden lg:flex items-center justify-center p-10 bg-white rounded-3xl shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="font-mono text-sm text-left bg-gray-900 text-green-400 p-6 rounded-lg shadow-inner w-full max-w-md mx-auto">
                  <p>&lt;article&gt;</p>
                  <p className="pl-4">&lt;title&gt;Smart Data&lt;/title&gt;</p>
                  <p className="pl-4">&lt;meta&gt;</p>
                  <p className="pl-8">&lt;confidentiality&gt;high&lt;/confidentiality&gt;</p>
                  <p className="pl-4">&lt;/meta&gt;</p>
                  <p>&lt;/article&gt;</p>
                </div>
                <p className="mt-4 text-sm text-gray-500 font-medium">Semantic Tagging Example</p>
              </div>
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* DTD / XSD Validation */}
          <div className="grid lg:grid-cols-2 gap-10 items-center animate-fadeUp">
            {/* Swapped order for visual variety */}
            <div className="hidden lg:flex items-center justify-center p-10 bg-white rounded-3xl shadow-lg border border-gray-100 order-last lg:order-first">
              <img src={validationImg} alt="DTD/XSD Validation" className="w-full max-w-md h-auto object-contain" />
            </div>
            <div>
              <div className="w-12 h-12 bg-cyan-100 flex items-center justify-center rounded-xl shadow-sm mb-6">
                <i className="fa-solid fa-check-double text-cyan-600 text-2xl"></i>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                DTD / XSD Validation
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                We validate XML documents against DTD and XSD schemas to ensure
                structural compliance and system reliability.
              </p>
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl premium-card">
                <h4 className="font-extrabold text-slate-800 mb-4 text-xl tracking-tight">Why it matters:</h4>
                <ul className="space-y-4">
                  {["Reduce integration issues", "Improve interoperability", "Ensure schema compliance", "Reduce downstream errors"].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-base text-slate-600 font-light">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Content Digitization */}
          <div className="grid lg:grid-cols-2 gap-10 items-center animate-fadeUp">
            <div>
              <div className="w-12 h-12 bg-orange-100 flex items-center justify-center rounded-xl shadow-sm mb-6">
                <i className="fa-solid fa-print text-orange-600 text-2xl"></i>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Content Digitization
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                We convert print-based materials into searchable, structured digital
                formats with strong quality control.
              </p>
              <div className="bg-orange-50/50 p-6 rounded-xl border border-orange-100">
                <div className="flex flex-wrap gap-3">
                  {["High-res scanning", "OCR verification", "Image cleanup", "Searchable PDF", "Digital archiving"].map((tag, i) => (
                    <span key={i} className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-orange-600 border border-orange-200 shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center p-10 bg-white rounded-3xl shadow-lg border border-gray-100">
              <img src={contentDigitizationImg} alt="Content Digitization" className="w-full max-w-md h-auto object-contain" />
            </div>
          </div>

        </div>
      </section>

      {/* ================= QUALITY SECTION ================= */}
      <section className="section-padding px-6 bg-[#0b1120] text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fadeUp">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/20">
            <i className="fa-solid fa-medal text-3xl"></i>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">Data Quality & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Validation</span></h2>
          <p className="text-gray-400 text-lg md:text-xl mb-16 max-w-3xl mx-auto font-light leading-relaxed">
            Our quality processes combine automation and expert review to ensure
            accurate and reliable structured data. Experience the confidence of 99.9% accuracy.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "High Accuracy", val: "99.9%" },
              { label: "Reduced Rework", val: "↓ 40%" },
              { label: "Reliable Outputs", val: "100%" },
              { label: "Compliance", val: "ISO" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 premium-card group shadow-2xl">
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-2 group-hover:scale-110 transition-transform">{stat.val}</div>
                <div className="text-sm font-bold text-blue-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
