import { NavLink } from "react-router-dom";

function Process() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 selection:bg-blue-200">
      {/* ================= HERO SECTION ================= */}
      <section className="hero-section relative bg-gradient-to-br from-[#0b1120] via-[#1c4e80] to-[#0b1120] section-padding px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fadeUp">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-300 text-xs font-bold tracking-widest uppercase backdrop-blur-md">
            Workflow & Methodology
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Process</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-light">
            A structured journey from raw data to refined intelligence. We combine
            <span className="text-blue-300 font-medium"> automation</span> with <span className="text-purple-300 font-medium">expert review</span> to ensure precision.
          </p>
        </div>
      </section>

      {/* ================= PROCESS TIMELINE ================= */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="flex flex-col md:block relative">
            {/* Desktop Central Line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 rounded-full opacity-50" />

            {[
              {
                step: 1,
                title: "Requirement Analysis",
                icon: "fa-clipboard-list",
                gradient: "from-blue-500 to-cyan-500",
                shadow: "shadow-blue-500/20",
                desc: "We align with your goals.",
                points: ["Project objectives definition", "Source material audit", "DTD/Schema analysis", "Timeline planning"]
              },
              {
                step: 2,
                title: "Data Conversion",
                icon: "fa-gear",
                gradient: "from-purple-500 to-indigo-500",
                shadow: "shadow-purple-500/20",
                desc: "Automated transformations.",
                points: ["Format normalization", "Automated tagging", "Schema alignment", "Real-time tracking"]
              },
              {
                step: 3,
                title: "Quality Checks",
                icon: "fa-vial-circle-check",
                gradient: "from-amber-400 to-orange-500",
                shadow: "shadow-orange-500/20",
                desc: "Rigorous validation loop.",
                points: ["Automated validation", "Manual expert review", "Integrity testing", "Error resolution"]
              },
              {
                step: 4,
                title: "Client Delivery",
                icon: "fa-rocket",
                gradient: "from-emerald-400 to-teal-500",
                shadow: "shadow-emerald-500/20",
                desc: "Secure deployment.",
                points: ["Secure transfer", "Detailed documentation", "Quality reports", "Post-delivery support"]
              },
            ].map((item, index) => (
              <div key={index} className="relative mb-12 md:mb-24 flex md:items-center w-full group">
                {/* Desktop Center Marker */}
                <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-[6px] border-white shadow-2xl items-center justify-center z-10 group-hover:scale-110 transition-transform duration-500`}>
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-2xl`}>
                    {item.step}
                  </div>
                </div>

                {/* Card Container - Alternating Sides on Desktop, Full Width on Mobile */}
                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                  <div className={`relative bg-slate-50 p-8 md:p-12 rounded-[2.5rem] shadow-xl premium-card border border-slate-100 animate-fadeUp`}>

                    {/* Mobile Step Marker */}
                    <div className={`md:hidden absolute -top-5 -right-2 w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-white font-extrabold shadow-lg ring-8 ring-white`}>{item.step}</div>

                    <div className="flex items-center gap-6 mb-8">
                      <div className={`w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-br ${item.gradient} text-3xl shadow-inner flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                        <i className={`fa-solid ${item.icon}`}></i>
                      </div>
                      <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">{item.title}</h3>
                    </div>
                    <p className="text-slate-600 mb-8 text-lg md:text-xl leading-relaxed font-light">{item.desc}</p>
                    <ul className="space-y-4">
                      {item.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-4 text-slate-700 font-medium text-base md:text-lg">
                          <i className={`fa-solid fa-check-circle text-transparent bg-clip-text bg-gradient-to-br ${item.gradient} mt-1.5 flex-shrink-0`}></i>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= QUALITY GUARANTEES ================= */}
      <section className="section-padding px-6 bg-[#0b1120] text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fadeUp">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Our Quality Guarantees</h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              Reliability, consistency, and transparency are built into our DNA.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { text: "99.9% Data Accuracy", icon: "fa-bullseye", color: "text-red-400" },
              { text: "Dedicated Support Team", icon: "fa-headset", color: "text-blue-400" },
              { text: "Bank-Grade Security", icon: "fa-shield-halved", color: "text-emerald-400" },
              { text: "Scalable Workflows", icon: "fa-chart-column", color: "text-purple-400" },
              { text: "Transparent Updates", icon: "fa-message", color: "text-yellow-400" },
              { text: "Unlimited Revisions*", icon: "fa-rotate", color: "text-pink-400" }
            ].map((item, i) => (
              <div key={i} className="group bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 premium-card hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className={`w-14 h-14 rounded-2xl bg-white/5 ${item.color} text-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner flex-shrink-0`}>
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-slate-100 mb-2 tracking-tight">{item.text}</h4>
                    <p className="text-base text-slate-500 font-light leading-relaxed text-left">Guaranteed excellence in every single delivery.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section-padding px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-[#0b1120] rounded-[4rem] p-12 md:p-24 text-center text-white overflow-hidden shadow-2xl animate-fadeUp">

            {/* Animated Shapes */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>

            <h2 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tight relative z-10 leading-tight">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Start</span>?
            </h2>
            <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-12 text-slate-300 font-light relative z-10 leading-relaxed">
              Let’s define a structured approach for your data goals today.
            </p>
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-full font-extrabold text-xl transition-all duration-300 shadow-xl hover:-translate-y-1 hover:shadow-blue-500/30 hover:brightness-110 relative z-10 group"
            >
              Start Project
              <i className="fa-solid fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Process;
