import { NavLink } from "react-router-dom";
import banner1 from "../assets/images/banner1.png";

function Home() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="hero-section relative h-screen flex items-center justify-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center animate-zoomIn"
            style={{ backgroundImage: `url(${banner1})` }}
          ></div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-0"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-4 animate-fadeUp">
            Transform Your Data with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse">
              Accuracy, Structure & Clarity
            </span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-slate-200 text-lg md:text-xl leading-relaxed animate-fadeUp animation-delay-200">
            We help organizations convert unstructured and legacy content into
            clean, well-structured XML and digital formats. Our services enable
            smoother system integration, better data access, and long-term
            content usability.
          </p>

          <div className="mt-8 flex gap-6 flex-wrap justify-center animate-fadeUp animation-delay-400">
            <NavLink
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 px-8 py-4 rounded-full text-white font-semibold shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300"
            >
              Request a Quote →
            </NavLink>

            <NavLink
              to="/services"
              className="border border-[#ffffff4d] bg-[#ffffff1a] backdrop-blur-sm px-8 py-4 rounded-full text-[#ffffff] font-semibold hover:bg-[#ffffff] hover:text-[#0f172a] transition-all duration-300"
            >
              Explore Services
            </NavLink>
          </div>
        </div>
      </section>

      {/* ================= CORE SERVICES ================= */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 animate-fadeUp">
            Our Core Services
          </h2>

          <p className="max-w-2xl mx-auto text-slate-600 text-lg animate-fadeUp animation-delay-200">
            Enterprise-grade XML conversion, content digitization, and data
            validation services built for accuracy and scale.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "fa-file-code",
                title: "XML Conversion Services",
                desc: "Transform PDF, Word, HTML, and legacy documents into structured XML.",
                delay: "0ms"
              },
              {
                icon: "fa-database",
                title: "Content Digitization Services",
                desc: "Convert physical records and legacy files into searchable digital formats.",
                delay: "200ms"
              },
              {
                icon: "fa-clipboard-check",
                title: "DTD / XSD Data Validation",
                desc: "Verify structure, accuracy, and consistency before final delivery.",
                delay: "400ms"
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white border border-slate-100 rounded-3xl p-8 text-left shadow-lg premium-card animate-fadeUp"
                style={{ animationDelay: item.delay }}
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-6 text-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 animate-fadeUp animation-delay-500">
            <NavLink
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-slate-300 text-slate-700 font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
            >
              View All Services →
            </NavLink>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-slate-50 section-padding overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="animate-slideLeft">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
              Why Choose Smart XML <br /> <span className="text-blue-600">Solutions?</span>
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              With proven experience in XML processing and content digitization,
              we support enterprises with reliable data conversion services that
              prioritize accuracy, consistency, and long-term usability.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4">
              {[
                "Standards-based DTD and XSD validation",
                "Multi-level quality checks for accuracy",
                "Scalable workflows for large volumes",
                "Secure handling of sensitive information",
                "dedicated project coordination",
              ].map((text, index) => (
                <li key={index} className="flex items-center gap-4 group">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <i className="fa-solid fa-check text-xs"></i>
                  </span>
                  <span className="text-slate-700 font-medium text-base">{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <NavLink
                to="/about"
                className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all duration-300 border-b-2 border-blue-600 pb-1"
              >
                Learn More About Us <i className="fa-solid fa-arrow-right"></i>
              </NavLink>
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="grid sm:grid-cols-2 gap-4 animate-slideRight">
            {[
              { value: "500+", label: "Projects Delivered", icon: "fa-diagram-project" },
              { value: "99.9%", label: "Data Accuracy", icon: "fa-bullseye" },
              { value: "50+", label: "Enterprise Clients", icon: "fa-building" },
              { value: "15+", label: "Years Experience", icon: "fa-calendar-check" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="text-3xl text-blue-100 mb-3">
                  <i className={`fa-solid ${stat.icon}`}></i>
                </div>
                <div className="text-3xl font-extrabold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <p className="text-slate-500 font-medium text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES WE SERVE ================= */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 animate-fadeUp">
            Industries We Serve
          </h2>

          <p className="max-w-2xl mx-auto text-slate-600 text-lg mb-10 animate-fadeUp animation-delay-200">
            Delivering reliable XML and data processing solutions across multiple industries
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: "fa-book-open", label: "Publishing" },
              { icon: "fa-building-columns", label: "Banking & Finance" },
              { icon: "fa-heart-pulse", label: "Healthcare" },
              { icon: "fa-graduation-cap", label: "Education" },
              { icon: "fa-cart-shopping", label: "E-commerce" },
            ].map((item, index) => (
              <div
                key={index}
                className="group flex flex-col items-center gap-4 px-8 py-8 rounded-[2.5rem]
                           bg-slate-50 border border-slate-100
                           premium-card animate-fadeUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <i className={`fa-solid ${item.icon} text-3xl text-slate-400 group-hover:text-blue-600 transition-colors duration-300`}></i>
                <span className="font-bold text-slate-700 text-base group-hover:text-slate-900">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 animate-fadeUp animation-delay-500">
            <NavLink
              to="/industries"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-semibold hover:brightness-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1"
            >
              Explore Industry Solutions
            </NavLink>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section-padding px-6 text-center text-white bg-[#0b1120] relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 animate-fadeUp tracking-tight">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Transform</span> Your Data?
          </h2>

          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto animate-fadeUp animation-delay-200 font-light leading-relaxed">
            Let’s explore how our XML conversion and data processing services
            can simplify content workflows and improve system compatibility.
          </p>

          <div className="flex flex-wrap justify-center gap-6 animate-fadeUp animation-delay-400">
            <NavLink
              to="/contact"
              className="px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-xl hover:shadow-blue-500/30 hover:brightness-110 hover:-translate-y-1 transition-all duration-300"
            >
              Get Started Now
            </NavLink>

            <NavLink
              to="/process"
              className="px-10 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
            >
              Learn More
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
