import { NavLink } from "react-router-dom";
import pdfToXml from "../assets/images/PdfToXml.png";
import docToXml from "../assets/images/DocToXml.png";
import htmlToXml from "../assets/images/htmlToXml.png";
import validationImg from "../assets/images/Validation.png";
import contentDigitizationImg from "../assets/images/Content Digitization.png";
import DataqualityandValidation from "../assets/images/DataQualityandValidation.png";

function Services() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-slate-800">
      {/* ================= HERO SECTION ================= */}
      <section className="hero-section relative bg-gradient-to-br from-[#0b1120] via-[#1c4e80] to-[#0b1120] text-white py-24 px-6 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fadeUp">
          <div className="inline-block px-4 py-1.5 bg-blue-500/10 backdrop-blur-md border border-blue-400/20 text-blue-300 rounded-full text-sm font-semibold tracking-widest uppercase mb-6">
            Expert Solutions
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-[1.1]">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/80 leading-relaxed max-w-2xl mx-auto font-light">
            We provide structured XML conversion and data processing services that help enterprises manage, validate, and modernize content with consistency and technical accuracy.
          </p>

          <NavLink
            to="/contact"
            className="inline-block mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold px-10 py-4 rounded-2xl shadow-2xl shadow-blue-500/20 hover:-translate-y-1.5 transition-all duration-300 group"
          >
            <span className="flex items-center gap-2">
              Request a Quote
              <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </span>
          </NavLink>
        </div>
      </section>

      {/* ================= XML CONVERSION SECTION ================= */}
      <section id="xml-conversion" className="bg-white section-padding px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-6 mb-10 animate-fadeUp">
            <div className="w-16 h-16 bg-blue-50 flex items-center justify-center rounded-2xl shadow-sm border border-blue-100 rotate-3 group-hover:rotate-12 transition-transform">
              <span className="text-blue-600 text-3xl font-extrabold">⌘</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">XML Conversion</h2>
          </div>

          <p className="text-slate-600 text-lg leading-relaxed mb-16 max-w-4xl animate-fadeUp animation-delay-200 font-light">
            We convert documents from multiple source formats into structured, standards-compliant XML. Our XML conversion services focus on maintaining content accuracy while applying consistent tagging and semantic structure suitable for enterprise systems.
          </p>

          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-20 animate-fadeUp animation-delay-400">
            {[
              { img: pdfToXml, title: "PDF to XML", color: "from-blue-500/10" },
              { img: docToXml, title: "Word to XML", color: "from-indigo-500/10" },
              { img: htmlToXml, title: "HTML to XML", color: "from-purple-500/10" },
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-b ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="aspect-square bg-slate-50 rounded-2xl flex items-center justify-center mb-6 overflow-hidden border border-slate-100/50">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <p className="text-center font-bold text-2xl text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 animate-fadeUp animation-delay-500">
            {/* Service Scope Card */}
            <div className="bg-slate-50 p-6 md:p-10 rounded-[2.5rem] border border-slate-100 premium-card">
              <h3 className="text-2xl font-bold text-[#0b1120] mb-6 flex items-center gap-3">
                <i className="fa-solid fa-list-check text-blue-600"></i> Service Scope
              </h3>
              <ul className="space-y-4">
                {[
                  "PDF to XML conversion with structural analysis",
                  "Word document to XML transformation",
                  "HTML to semantic XML conversion",
                  "Legacy format migration including SGML and custom formats",
                  "Batch XML processing for large-volume projects"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-700 text-lg font-light">
                    <span className="mt-2.5 w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 animate-pulse"></span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits Card */}
            <div className="bg-slate-50 p-6 md:p-10 rounded-[2.5rem] border border-slate-100 premium-card">
              <h3 className="text-2xl font-bold text-[#0b1120] mb-6 flex items-center gap-3">
                <i className="fa-solid fa-trophy text-blue-600"></i> Business Benefits
              </h3>
              <ul className="space-y-4">
                {[
                  "Maintain document structure and content consistency",
                  "Support content reuse across platforms and systems",
                  "Improve data searchability and accessibility",
                  "Simplify long-term storage with structured data formats"
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

      <hr className="border-gray-200 dark:border-white/5" />

      {/* ================= OTHER SERVICES GRID ================= */}
      <section className="section-padding px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* XML Tagging */}
          <div id="xml-tagging" className="grid lg:grid-cols-2 gap-16 items-center animate-fadeUp scroll-mt-24">
            <div className="space-y-8">
              <div className="w-16 h-16 bg-purple-100 flex items-center justify-center rounded-2xl shadow-sm border border-purple-200 rotate-3">
                <i className="fa-solid fa-code text-purple-600 text-3xl"></i>
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
                XML Tagging & <span className="text-purple-600">Structuring</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                We apply structured XML tagging to organize content at a granular level. Our XML tagging services focus on consistent semantic markup that supports content reuse, system compatibility, and efficient data processing.
              </p>
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                <h4 className="font-bold text-slate-800 mb-6 text-xl">Key Advantages:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {["Improve discoverability", "Support automation", "Multi-channel delivery", "Simplify CMS integration"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-base text-slate-600 font-medium">
                      <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 text-xs">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Visual: Pro Code Preview */}
            <div className="relative p-2 bg-slate-900 rounded-[2rem] shadow-2xl border-4 border-slate-800 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500 mt-12 lg:mt-0">
              <div className="flex gap-1.5 mb-4 px-4 pt-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="font-mono text-sm leading-8 bg-slate-900 text-blue-300 p-8 rounded-xl overflow-hidden">
                <p className="text-gray-500 italic mb-2">// Semantic XML Sample</p>
                <p><span className="text-pink-400">&lt;article</span> <span className="text-orange-300">class</span>=<span className="text-green-400">"technical"</span><span className="text-pink-400">&gt;</span></p>
                <p className="pl-6"><span className="text-pink-400">&lt;title&gt;</span>Smart Data Architecture<span className="text-pink-400">&lt;/title&gt;</span></p>
                <p className="pl-6"><span className="text-pink-400">&lt;meta</span> <span className="text-orange-300">priority</span>=<span className="text-green-400">"high"</span><span className="text-pink-400">&gt;</span></p>
                <p className="pl-12 text-gray-400">Structured Intelligence Applied</p>
                <p className="pl-6"><span className="text-pink-400">&lt;/meta&gt;</span></p>
                <p><span className="text-pink-400">&lt;/article&gt;</span></p>
              </div>
              {/* Glow */}
              <div className="absolute -inset-4 bg-purple-500/10 blur-2xl -z-10 rounded-full"></div>
            </div>
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
                  "DTD or schema-based XML tagging",
                  "Semantic element identification and structuring",
                  "Metadata extraction and assignment",
                  "Cross-reference and internal link mapping",
                  "Index and table of contents creation"
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
                  "Improve content discoverability and reuse",
                  "Support automated data processing workflows",
                  "Enable multi-channel content delivery",
                  "Simplify integration with content management systems"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-700 text-lg font-light">
                    <i className="fa-solid fa-check-circle text-blue-600 text-xl"></i>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="border-gray-200 dark:border-white/5" />

          {/* DTD / XSD Validation */}
          <div id="dtd-validation" className="grid lg:grid-cols-2 gap-16 items-center animate-fadeUp scroll-mt-24">
            {/* Swapped order for visual variety */}
            <div className="flex items-center justify-center relative p-8 group order-last lg:order-first overflow-hidden rounded-[3rem]">
              <div className="absolute inset-0 bg-cyan-500/5 rounded-[3rem] blur-3xl group-hover:bg-cyan-500/10 transition-colors"></div>
              <img
                src={validationImg}
                alt="DTD/XSD Validation"
                className="relative z-10 w-full max-w-md h-auto object-contain transition-transform duration-700 group-hover:scale-105 scale-[1.01]"
              />
            </div>
            <div className="space-y-8">
              <div className="w-16 h-16 bg-cyan-100 flex items-center justify-center rounded-2xl shadow-sm border border-cyan-200 -rotate-3">
                <i className="fa-solid fa-square-check text-cyan-600 text-3xl"></i>
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
                DTD / XSD <span className="text-cyan-600">Validation</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                We validate XML documents against defined DTD and XSD schemas to identify structural inconsistencies. Our services ensure files align with specifications and function correctly in enterprise systems.
              </p>
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 dark:border-transparent shadow-xl space-y-4">
                <h4 className="font-bold text-slate-800 mb-2 text-xl">Why it matters:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Reduce integration issues", "Improve interoperability", "Ensure schema compliance", "Reduce downstream errors"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-base text-slate-600 font-medium">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
                  "DTD validation with structured error reporting",
                  "XSD schema validation and consistency checks",
                  "Custom validation rule configuration",
                  "Automated validation workflow setup",
                  "Compliance-related documentation support"
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
                  "Support smooth data interoperability across systems",
                  "Reduce schema-related integration issues",
                  "Assist with industry and internal compliance requirements",
                  "Lower the risk of downstream processing errors"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-700 text-lg font-light">
                    <i className="fa-solid fa-check-circle text-blue-600 text-xl"></i>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="border-gray-200 dark:border-white/5" />

          {/* Content Digitization */}
          <div id="content-digitization" className="grid lg:grid-cols-2 gap-16 items-center animate-fadeUp scroll-mt-24">
            <div className="space-y-8">
              <div className="w-16 h-16 bg-orange-100 flex items-center justify-center rounded-2xl shadow-sm border border-orange-200 rotate-6">
                <i className="fa-solid fa-file-pdf text-orange-600 text-3xl"></i>
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
                Content <span className="text-orange-600">Digitization</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                We convert physical documents and print-based materials into searchable, structured digital formats. Our content digitization services combine reliable scanning processes with careful quality review to support long-term access and usability.
              </p>
            </div>
            <div className="flex items-center justify-center relative p-8 group overflow-hidden rounded-[3rem] mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-orange-500/5 rounded-[3rem] blur-3xl group-hover:bg-orange-500/10 transition-colors"></div>
              <img
                src={contentDigitizationImg}
                alt="Content Digitization"
                className="relative z-10 w-full max-w-md h-auto object-contain transition-transform duration-700 group-hover:scale-105 scale-[1.01]"
              />
            </div>
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
                  "High-resolution document scanning",
                  "OCR processing with verification checks",
                  "Image enhancement and cleanup",
                  "Searchable PDF and digital file creation",
                  "Digital archiving for long-term preservation"
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
                  "Preserve important records in digital form",
                  "Enable faster access to digitized content",
                  "Reduce reliance on physical storage",
                  "Support secure remote access and collaboration"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-700 text-lg font-light">
                    <i className="fa-solid fa-check-circle text-blue-600 text-xl"></i>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr className="border-gray-200 dark:border-white/5" />


          {/* Data Quality and Validation */}
          <div id="data-quality" className="grid lg:grid-cols-2 gap-16 items-center animate-fadeUp scroll-mt-24">
            <div className="space-y-8">
              <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-2xl shadow-sm border border-blue-200">
                <i className="fa-solid fa-clipboard-check text-blue-600 text-3xl"></i>
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
                Data Quality & <span className="text-blue-600">Validation</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                We support high data quality through structured validation and review processes. Our data quality services combine automated checks with experienced human review to identify inconsistencies, reduce errors, and improve overall data reliability.
              </p>
            </div>
            <div className="flex items-center justify-center relative p-8 group overflow-hidden rounded-[3rem] mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-blue-500/5 rounded-[3rem] blur-3xl group-hover:bg-blue-500/10 transition-colors"></div>
              <img
                src={DataqualityandValidation}
                alt="Data Quality and Validation"
                className="relative z-10 w-full max-w-md h-auto object-contain transition-transform duration-700 group-hover:scale-105 scale-[1.01]"
              />
            </div>
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
                  "Multi-stage quality review processes",
                  "Automated error detection and consistency checks",
                  "Manual review and proofreading by trained specialists",
                  "Statistical sampling for quality assessment",
                  "Clear error reporting and review summaries"
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
                  "Support high levels of data accuracy",
                  "Reduce rework and correction efforts",
                  "Increase confidence in structured data outputs",
                  "Align with internal and enterprise quality standards"
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


      {/* ================= QUALITY SECTION ================= */}
      <section className="section-padding px-6 bg-[#0b1120] text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fadeUp">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/20">
            <i className="fa-solid fa-medal text-3xl"></i>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">Quality <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Assurance</span></h2>
          <p className="text-gray-400 text-lg md:text-xl mb-16 max-w-3xl mx-auto font-light leading-relaxed">
            We support high data quality through structured validation and review processes.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { label: "High Accuracy", val: "99.9%" },
              { label: "Reduced Rework", val: "↓ 40%" },
              { label: "Reliable Outputs", val: "98.9%" },
              // { label: "Compliance", val: "ISO" }
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
