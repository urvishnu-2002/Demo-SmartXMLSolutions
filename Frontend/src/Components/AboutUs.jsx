import React, { useEffect, useState, useRef } from "react";
import aboutImage from "../assets/images/aboutusimage.jpeg";
import axiosInstance from "../api/axiosInstance";

const ServicesPieChart = () => {
  const canvasRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    // Fetch service data from the backend
    axiosInstance.get('/service/get')
      .then(res => {
        setServiceData(res.data);
      })
      .catch(err => {
        console.error('Failed to fetch service data:', err);
        // Fallback to hardcoded data if API fails
        setServiceData({
          xml_conversion: 35,
          tagging_structuring: 25,
          validation: 15,
          digitization: 10,
          quality_services: 15
        });
      });
  }, []);

  const data = serviceData ? {
    "XML Conversion (PDF, DOC, HTML to XML)": serviceData.xml_conversion,
    "XML Tagging & Structuring": serviceData.tagging_structuring,
    "DTD / XSD Validation": serviceData.validation,
    "Content Digitization": serviceData.digitization,
    "Data Quality & Validation Services": serviceData.quality_services
  } : {
    "XML Conversion (PDF, DOC, HTML to XML)": 35,
    "XML Tagging & Structuring": 25,
    "DTD / XSD Validation": 15,
    "Content Digitization": 10,
    "Data Quality & Validation Services": 15
  };

  const colors = ["#2563eb", "#10b981", "#06b6d4", "#f59e0b", "#6366f1"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const total = Object.values(data).reduce((sum, val) => sum + val, 0);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) * 0.8;

    let startAngle = -Math.PI / 2;
    let currentAnimationStep = 0;
    const totalSteps = 60;

    const animate = () => {
      if (currentAnimationStep > totalSteps) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let runningAngle = -Math.PI / 2;

      Object.entries(data).forEach(([label, value], index) => {
        const sliceAngle = (value / total) * 2 * Math.PI;
        const animatedSliceAngle = sliceAngle * (currentAnimationStep / totalSteps);
        const color = colors[index % colors.length];

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, runningAngle, runningAngle + animatedSliceAngle);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Labels (only if animation is nearly complete)
        if (currentAnimationStep === totalSteps) {
          const middleAngle = runningAngle + sliceAngle / 2;
          const labelRadius = radius * 0.7;
          const x = centerX + Math.cos(middleAngle) * labelRadius;
          const y = centerY + Math.sin(middleAngle) * labelRadius;

          ctx.fillStyle = "white";
          ctx.font = "bold 14px sans-serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";

          const percent = ((value / total) * 100).toFixed(0) + "%";
          if (value / total > 0.05) {
            ctx.fillText(percent, x, y);
          }
        }

        runningAngle += sliceAngle;
      });

      currentAnimationStep++;
      requestAnimationFrame(animate);
    };

    animate();
  }, [isVisible]);

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl font-bold text-slate-800">Services Distribution</h2>
        <div className="space-y-3">
          {Object.entries(data).map(([label, value], index) => (
            <div key={label} className="flex items-center gap-3 group">
              <div
                className="w-4 h-4 rounded-full transition-transform group-hover:scale-125"
                style={{ backgroundColor: colors[index % colors.length] }}
              ></div>
              <span className="text-slate-600 font-medium text-sm">{label}</span>
              <span className="ml-auto text-slate-400 text-sm font-semibold">{value}%</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <canvas
          ref={canvasRef}
          width={400}
          height={400}
          className="max-w-full h-auto drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-[#0b1a2a] via-[#1c4e80] to-[#0b1a2a] text-white py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className={`max-w-5xl mx-auto text-center relative z-10 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-blue-200">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Smart XML Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl md:leading-relaxed text-blue-100 max-w-3xl mx-auto font-light">
            A specialized data services company focused on XML processing and content digitization. We structure, validate, and modernize large volumes of information for reliable use across digital systems.
          </p>
        </div>
      </section>

      {/* ================= STORY & IMAGE ================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 transition-all duration-1000 delay-300 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold tracking-wide uppercase">
              How we started
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
              Our Story
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg font-light">
              <p>
                Smart XML Solutions was established to help organizations move from unstructured and legacy content formats to reliable, structured digital data. From the beginning, our focus has been on accuracy, consistency, and practical data usability.
              </p>
              <p>
                As our work evolved, we developed strong expertise in XML processing, content digitization, and data validation. We support organizations that rely on structured information to manage publishing content, financial records, healthcare data, and enterprise documentation.
              </p>
              <p>
                Today, we continue to scale our services while maintaining strict quality controls. Our approach combines technical discipline with clear processes to ensure dependable results across projects of varying size and complexity.
              </p>
            </div>
          </div>

          <div className={`relative group transition-all duration-1000 delay-300 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-opacity"></div>
            <img
              src={aboutImage}
              alt="Professional documentation and digital data"
              className="relative w-full rounded-2xl shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02] z-10"
            />
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="group bg-slate-50 p-12 rounded-[2.5rem] border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 animate-fadeUp">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 text-3xl shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
              🎯
            </div>
            <h3 className="text-3xl font-bold mb-6 text-slate-800">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed text-lg font-light">
              To support organizations with accurate and well-structured data that improves content management, system compatibility, and operational efficiency. We focus on delivering dependable XML and data processing services while maintaining close collaboration with our clients.
            </p>
          </div>

          <div className="group bg-slate-50 p-12 rounded-[2.5rem] border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 animate-fadeUp animation-delay-200">
            <div className="w-16 h-16 bg-purple-600 text-white rounded-2xl flex items-center justify-center mb-8 text-3xl shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
              👁️
            </div>
            <h3 className="text-3xl font-bold mb-6 text-slate-800">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed text-lg font-light">
              To be a trusted global partner for XML processing and content digitization services, helping organizations manage information with clarity, structure, and long-term value in an evolving digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-24 px-6 bg-[#0b1a2a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center mb-20 animate-fadeUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Core Values</h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-xl font-light">The principles that guide our work, decisions, and client relationships.</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Quality First", icon: "🛡️", desc: "Every project follows structured review and validation steps to ensure accuracy, consistency, and dependable output." },
            { title: "Technical Excellence", icon: "⚡", desc: "Our team maintains strong knowledge of XML standards and modern data processing practices to deliver reliable results." },
            { title: "Client Partnership", icon: "🤝", desc: "We work closely with clients to understand their workflows, timelines, and technical requirements ensuring clear communication." },
            { title: "Continuous Improvement", icon: "🔄", desc: "We regularly refine our processes and tools to improve efficiency, accuracy, and overall service quality." },
          ].map((value, idx) => (
            <div key={idx} className={`bg-white/5 backdrop-blur-sm p-10 rounded-[2rem] border border-white/10 hover:border-white/20 transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 animate-fadeUp animation-delay-${idx * 100}`}>
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform shadow-xl">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-white tracking-tight">{value.title}</h4>
              <p className="text-slate-400 leading-relaxed font-light">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES GRAPH ================= */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center animate-fadeUp">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Service Portfolio</h2>
            <p className="text-slate-500 text-lg font-light">A breakdown of our specialized data and XML services</p>
          </div>
          <div className="animate-fadeUp animation-delay-200">
            <ServicesPieChart />
          </div>
        </div>
      </section>

      {/* ================= TECHNICAL EXPERTISE ================= */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="flex-[3] animate-fadeUp">
            <h2 className="text-4xl font-bold text-slate-800 mb-8 leading-tight">Technical Expertise</h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
              Our team applies strong technical knowledge and hands-on experience to enterprise data processing projects. We follow established XML standards and continuously refine our methods.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "XML/SGML Conversion & Transformation",
                "XSLT Stylesheet Development",
                "Legacy Data Migration",
                "High-Volume Batch Processing",
                "DTD/XSD Schema Validation",
                "CMS Integration",
                "Automated Quality Assurance",
                "Custom Workflow Development",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200 hover:border-blue-300 transition-all group hover:shadow-lg hover:-translate-y-1">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-[2] bg-gradient-to-br from-slate-900 to-slate-800 text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col justify-between animate-fadeUp animation-delay-200">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8">Quality Commitment</h3>
              <div className="space-y-10">
                {[
                  { label: "Consistently High Accuracy Levels", val: "99.9%" },
                  { label: "Reliable Project Timelines", val: "98%" },
                  { label: "Strong Client Feedback", val: "97%" },
                ].map((stat, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-slate-300 uppercase tracking-widest text-xs">{stat.label}</span>
                      <span className="text-blue-400 font-bold">{stat.val}</span>
                    </div>
                    <div className="w-full h-3 bg-white/5 rounded-full p-0.5 border border-white/5">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-1500 ease-out shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                        style={{ width: isVisible ? stat.val : "0%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-slate-400 text-sm font-light leading-relaxed italic border-l-2 border-blue-500 pl-4">
                "We regularly refine our processes and tools to improve efficiency and overall service quality as requirements evolve."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
