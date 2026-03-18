import { motion } from 'framer-motion';
import { useState } from 'react';
import MagneticButton from './MAgneticButton';

const Connect = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const locations = [
    { city: 'Kathmandu', address: 'Thamel, Kathmandu 44600', phone: '+977 9841234567' },
    { city: 'Pokhara', address: 'Lakeside, Pokhara 33700', phone: '+977 9847654321' }
  ];

  return (
    <section id="connect" className="py-24 bg-[#F0F4F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Contact Info */}
          <div>
            <span className="text-[#0D5F58] text-sm font-['Jost'] tracking-[0.3em] uppercase">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-['Marcellus'] text-[#1A1A1A] mt-4 mb-6">
              Let's Create Something Extraordinary
            </h2>
            <p className="text-[#1A1A1A]/70 text-lg font-['Jost'] mb-8">
              Whether you have a project in mind or just want to chat about technology and hospitality, I'd love to hear from you.
            </p>

            {/* Locations */}
            <div className="space-y-6 mb-8">
              {locations.map((location) => (
                <div key={location.city} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-[#0D5F58]">📍</span>
                  </div>
                  <div>
                    <h3 className="font-['Marcellus'] text-[#1A1A1A] text-lg">{location.city}</h3>
                    <p className="text-[#1A1A1A]/60 font-['Jost'] text-sm">{location.address}</p>
                    <p className="text-[#0D5F58] font-['Jost'] text-sm mt-1">{location.phone}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-[#0D5F58]">✉️</span>
              </div>
              <div>
                <p className="text-[#1A1A1A]/60 font-['Jost'] text-sm">Email</p>
                <a href="mailto:sandip@bhattarai.com" className="text-[#0D5F58] font-['Jost'] hover:underline">
                  sandip@bhattarai.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-2xl"
          >
            <h3 className="text-2xl font-['Marcellus'] text-[#1A1A1A] mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full py-3 bg-transparent border-b border-stone-200 focus:border-[#0D5F58] outline-none transition-colors font-['Jost']"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-3 bg-transparent border-b border-stone-200 focus:border-[#0D5F58] outline-none transition-colors font-['Jost']"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full py-3 bg-transparent border-b border-stone-200 focus:border-[#0D5F58] outline-none transition-colors resize-none font-['Jost']"
                />
              </div>

              <MagneticButton>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#0D5F58] text-white rounded-full hover:bg-[#0D5F58]/90 transition-all font-['Jost'] text-lg"
                >
                  Send Message
                </button>
              </MagneticButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Connect;