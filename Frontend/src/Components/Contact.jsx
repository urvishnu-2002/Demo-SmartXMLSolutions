import React, { useState } from "react";
import axiosInstance from "../api/axiosInstance";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState({
    loading: false,
    message: "",
    isSuccess: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", isSuccess: false });

    try {
      const response = await axiosInstance.post("/contact/save", formData);
<<<<<<< Updated upstream
=======

      await emailjs.send(
        "service_gp2k5ab",      // 🔴 replace your service id
        "template_bdbh086",     // 🔴 replace your template id
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message
        },
        "YxL4_gfnrl6pSpFjB"       // 🔴 replace your public key
      );

>>>>>>> Stashed changes
      setStatus({
        loading: false,
        message: response.data.message || "Message sent successfully!",
        isSuccess: true
      });
<<<<<<< Updated upstream
=======

      // Reset form on success
>>>>>>> Stashed changes
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      let errorMessage = "Something went wrong. Please try again.";

      if (!error.response) {
        // Network error / Connection refused
        errorMessage = "Network Error: Could not reach the server. Please ensure the backend is running on port 5000 and you have restarted the frontend dev server.";
      } else {
        // Server responded with an error status (4xx, 5xx)
        const status = error.response.status;
        const data = error.response.data;
        errorMessage = `Server Error (${status}): ${data?.message || data?.error || (typeof data === 'string' ? data : JSON.stringify(data)) || "Unknown Error"}`;
      }

      setStatus({
        loading: false,
        message: errorMessage,
        isSuccess: false
      });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 selection:bg-blue-200">
      {/* ================= HERO SECTION ================= */}
<<<<<<< Updated upstream
      <section className="hero-section relative bg-gradient-to-br from-[#0b1120] via-[#1c4e80] to-[#0b1120] text-white py-16 md:py-24 px-6 overflow-hidden">

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fadeUp">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Touch</span>
=======
      <section className="hero-section relative bg-gradient-to-br from-[#0b1120] via-[#1c4e80] to-[#0b1120] text-white py-12 md:py-24 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fadeUp">
          <h1 className="text-3xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Us</span>
>>>>>>> Stashed changes
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-light">
            Have a project in mind or questions about our services? Our team is available
            to discuss your requirements and provide guidance.
          </p>
        </div>
      </section>

      {/* ================= CONTACT FORM & DETAILS ================= */}
<<<<<<< Updated upstream
      <section className="section-padding px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
=======
      <section className="px-4 md:px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-24 items-start py-12">
>>>>>>> Stashed changes

        {/* Left: Contact Details */}
        <div className="space-y-8 animate-fadeUp">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Let's Talk</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
<<<<<<< Updated upstream
              Whether you need a custom quote, technical consultation, or just want to say hello,
              we're here to help you transform your data.
=======
              Whether you have a specific project in mind or would like to learn more about our services, our team is available to discuss your requirements and provide guidance.
>>>>>>> Stashed changes
            </p>
          </div>

          <div className="space-y-6">
            {[
              { icon: "fa-envelope", title: "Email Us", text: "info@smartxmlsolutions.com", color: "text-blue-600", bg: "bg-blue-50" },
              { icon: "fa-phone", title: "Call Us", text: "+1 (555) 123-4567", color: "text-purple-600", bg: "bg-purple-50" },
              { icon: "fa-location-dot", title: "Visit Us", text: "123 Tech Park Drive, Suite 400, San Francisco, CA 94102", color: "text-pink-600", bg: "bg-pink-50" }
            ].map((item, index) => (
<<<<<<< Updated upstream
              <div key={index} className="flex items-center gap-8 p-8 rounded-3xl bg-white border border-slate-100 shadow-lg premium-card group">
                <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner`}>
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.title}</p>
                  <p className="text-xl font-extrabold text-slate-800 tracking-tight">{item.text}</p>
=======
              <div key={index} className="flex items-center gap-4 md:gap-8 p-4 md:p-6 rounded-3xl bg-white border border-slate-100 shadow-lg group">
                <div className={`w-10 h-10 md:w-14 md:h-14 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} text-xl group-hover:scale-110 transition-all shadow-inner`}>
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.title}</p>
                  <p className="text-base md:text-lg font-extrabold text-slate-800 break-all md:break-words">{item.text}</p>
>>>>>>> Stashed changes
                </div>
              </div>
            ))}
          </div>

          {/* What to Expect */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            <h3 className="text-xl font-bold mb-4 relative z-10">What to Expect</h3>
            <ul className="space-y-3 relative z-10">
              {["Response within 24 hours", "Confidentiality guaranteed", "No-obligation consultation"].map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <i className="fa-solid fa-check-circle text-blue-400"></i>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Contact Form */}
<<<<<<< Updated upstream
        <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 relative animate-fadeUp animation-delay-200">
          <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-[3rem]"></div>
=======
        <div className="bg-white p-5 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-slate-100 relative">
          <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-[2rem] md:rounded-t-[3rem]"></div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 md:mb-8">Send Us a Message</h3>
>>>>>>> Stashed changes

          <h3 className="text-3xl font-extrabold text-slate-900 mb-10 tracking-tight">Send Us a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  pattern="[a-zA-Z]{3,}"
                  required
<<<<<<< Updated upstream
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
=======
                  className="w-full px-3 py-3 md:px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
>>>>>>> Stashed changes
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  pattern="[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,7}"
                  required
<<<<<<< Updated upstream
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
=======
                  className="w-full px-3 py-3 md:px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
>>>>>>> Stashed changes
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                pattern="[6-9][0-9]{9}"
                maxLength={10}
                onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))}
<<<<<<< Updated upstream
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
=======
                className="w-full px-3 py-3 md:px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
>>>>>>> Stashed changes
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Message <span className="text-red-500">*</span></label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project requirements..."
                required
<<<<<<< Updated upstream
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none h-32 resize-none"
=======
                className="w-full px-3 py-3 md:px-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none h-32 resize-none"
>>>>>>> Stashed changes
              />
            </div>

            {status.message && (
              <div className={`p-4 rounded-xl text-sm font-medium ${status.isSuccess ? "bg-green-50 text-green-800 border border-green-100" : "bg-red-50 text-red-800 border border-red-100"}`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={status.loading}
              className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-blue-500/30 hover:brightness-110 hover:-translate-y-1 transition-all duration-300 ${status.loading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {status.loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}

export default Contact;
