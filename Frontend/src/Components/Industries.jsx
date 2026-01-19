import { NavLink } from "react-router-dom";
import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";
import img4 from "../assets/images/img4.jpeg";
import img5 from "../assets/images/img5.jpeg";

function Industries() {
  const industries = [
    {
      id: 1,
      title: "Banking & Finance",
      icon: "fa-building-columns",
      desc: "We support banking and financial organizations by structuring, validating, and digitizing data to improve reporting accuracy, regulatory readiness, and long-term information management.",
      image: img1,
      stats: { clients: "25+", projects: "5,000+" },
      color: "blue"
    },
    {
      id: 2,
      title: "Healthcare",
      icon: "fa-heart-pulse",
      desc: "We assist healthcare organizations in organizing, structuring, and digitizing medical and research-related content to support efficient data access and operational workflows.",
      image: img5,
      stats: { clients: "30+", projects: "8,000+" },
      color: "emerald"
    },
    {
      id: 3,
      title: "Publishing",
      icon: "fa-book-open",
      desc: "We help publishing teams modernize their content by converting legacy materials into structured digital formats that support efficient workflows and multi-channel distribution.",
      image: img2,
      stats: { clients: "50+", projects: "10,000+" },
      color: "purple"
    },
    {
      id: 4,
      title: "Education",
      icon: "fa-graduation-cap",
      desc: "We support educational publishers and institutions by converting learning materials into structured, digital formats that improve accessibility, usability, and content management.",
      image: img4,
      stats: { clients: "40+", projects: "15,000+" },
      color: "orange"
    },
    {
      id: 5,
      title: "E-Commerce",
      icon: "fa-cart-shopping",
      desc: "We support e-commerce platforms by structuring product data and catalogs to enhance searchability, consistency, and user experience across digital storefronts.",
      image: img3,
      stats: { clients: "20+", projects: "2,000+" },
      color: "pink"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 selection:bg-blue-200">
      {/* ================= HERO SECTION ================= */}
      <section className="hero-section relative bg-gradient-to-br from-[#0b1120] via-[#1c4e80] to-[#0b1120] text-white py-10 md:py-20 px-6 overflow-hidden">

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fadeUp">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-semibold tracking-wide uppercase backdrop-blur-md">
            Sectors We Empower
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Serve</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
            We support organizations across multiple industries by delivering reliable
            XML conversion, content digitization, and data processing services tailored
            to sector-specific requirements.
          </p>
        </div>
      </section>

      {/* ================= INDUSTRIES SECTION ================= */}
      <section className="section-padding px-6 space-y-32 max-w-7xl mx-auto">
        {industries.map((item, index) => (
          <div key={item.id} className="group relative flex flex-col md:flex-row gap-8 md:gap-16 items-center">

            {/* Image Side - Alternating */}
            <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? "md:order-2" : "md:order-1"}`}>
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl premium-card group">
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity duration-700`}></div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 md:h-[28rem] object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                {/* Floating Icon */}
                <div className={`absolute bottom-8 left-8 z-20 w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center justify-center text-white text-4xl shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? "md:order-1" : "md:order-2"}`}>
              <div className="animate-fadeUp">
                <h3 className={`text-4xl md:text-5xl font-extrabold mb-8 text-slate-900 flex items-center gap-4 tracking-tight`}>
                  {item.title}
                  <div className={`h-1.5 flex-grow bg-gradient-to-r from-blue-500 to-transparent rounded-full opacity-20`}></div>
                </h3>

                <p className="text-xl text-slate-600 leading-relaxed mb-10 border-l-4 border-blue-500 pl-8 font-light italic">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-10">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-all duration-500`}>
                      <i className="fa-solid fa-briefcase"></i>
                    </div>
                    <div>
                      <p className={`text-3xl font-extrabold text-slate-800 tracking-tight`}>{item.stats.clients}</p>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Clients</p>
                    </div>
                  </div>
                  <div className="w-px h-16 bg-slate-100 hidden sm:block"></div>
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-all duration-500`}>
                      <i className="fa-solid fa-layer-group"></i>
                    </div>
                    <div>
                      <p className={`text-3xl font-extrabold text-slate-800 tracking-tight`}>{item.stats.projects}</p>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        ))}
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="relative section-padding bg-white border-t border-slate-100 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute -left-20 top-20 w-96 h-96 bg-blue-50 rounded-full blur-[100px] opacity-40 pointer-events-none animate-pulse"></div>
        <div className="absolute -right-20 bottom-20 w-96 h-96 bg-purple-50 rounded-full blur-[100px] opacity-40 pointer-events-none animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto text-center px-6 relative z-10 animate-fadeUp">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-16 text-slate-900 tracking-tight">
            Why Choose Smart XML Solutions?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: "fa-lightbulb", title: "Expertise & Innovation", desc: "Industry solutions tailored to your needs.", color: "text-yellow-500", bg: "bg-yellow-50" },
              { icon: "fa-shield-halved", title: "Scalable & Secure", desc: "Robust and compliant XML frameworks.", color: "text-emerald-500", bg: "bg-emerald-50" },
              { icon: "fa-chart-line", title: "Proven Results", desc: "Driving success across sectors.", color: "text-blue-500", bg: "bg-blue-50" },
            ].map((item, idx) => (
              <div key={idx} className="group p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl premium-card">
                <div className={`w-24 h-24 mx-auto rounded-[2rem] ${item.bg} flex items-center justify-center text-4xl mb-8 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <i className={`fa-solid ${item.icon} ${item.color}`}></i>
                </div>
                <h4 className="font-extrabold text-2xl text-slate-800 mb-4 tracking-tight">{item.title}</h4>
                <p className="text-slate-500 text-lg font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section-padding px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-[#0b1120] rounded-[4rem] p-12 md:p-24 text-center text-white overflow-hidden shadow-2xl animate-fadeUp">

            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 relative z-10 tracking-tight leading-tight">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Transform</span> Your Data?
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-slate-300 relative z-10 font-light leading-relaxed">
              Join thousands of clients who trust us for their data conversion and digitization needs.
            </p>
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-full font-extrabold text-xl transition-all duration-300 shadow-xl hover:shadow-blue-500/30 hover:brightness-110 hover:scale-105 relative z-10"
            >
              Get Started
              <i className="fa-solid fa-arrow-right"></i>
            </NavLink>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Industries;
