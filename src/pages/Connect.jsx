import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaLinkedinIn, 
  FaTwitter, 
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPaperPlane,
  FaCheckCircle,
  FaClock,
  FaWhatsapp
} from "react-icons/fa";
import Navbar from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

const Connect = () => {
  usePageTitle('Connect')
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const openWhatsApp = (phone, city) => {
    const message = `Hello! I'm interested in connecting with you regarding your services in ${city}.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          headerRef.current?.classList.add("reveal-visible");
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const locations = [
    {
      city: "Kathmandu",
      address: "Thamel, Kathmandu 44600",
      phones: ["+977 9801067391", "+977 9801072368"],
      email: "kathmandu@sandipbhattarai.com",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM",
      whatsapp: "9779801067391"
    },
    {
      city: "Pokhara",
      address: "Lakeside, Pokhara 33700",
      phones: ["+977 061-501368", "+977 9802835021"],
      email: "pokhara@sandipbhattarai.com",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM",
      whatsapp: "9779802835021"
    }
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "https://www.facebook.com/mesandipb", label: "Facebook", color: "hover:bg-[#1877f2]" },
    { icon: FaInstagram, href: "https://www.instagram.com/mesandipb/", label: "Instagram", color: "hover:bg-[#e4405f]" },
    { icon: FaTwitter, href: "https://x.com/mesandipb", label: "Twitter", color: "hover:bg-[#1da1f2]" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/mesandipb/", label: "LinkedIn", color: "hover:bg-[#0077b5]" },
    { icon: FaYoutube, href: "https://www.youtube.com/@mesandipb", label: "YouTube", color: "hover:bg-[#ff0000]" }
];

  return (
    <>
      <Navbar />
      <section ref={sectionRef} className="py-24 bg-[#F5F0E8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* Header */}
          <div ref={headerRef} className="reveal-init text-center mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#9B8B7A] text-[10px] tracking-[0.6em] uppercase font-bold block mb-4"
            >
              Get In Touch
            </motion.span>
            <h1 className="text-5xl md:text-7xl    text-[#2C2C2C]">
              Let's <span className="italic text-[#9B8B7A]">Connect</span>
            </h1>
            <div className="mt-6 w-24 h-px bg-[#E6B8A2] mx-auto"></div>
            <p className="text-[#5F5B57]    max-w-2xl mx-auto mt-6">
              Have a project in mind or just want to say hello? I'd love to hear from you.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Quote Card */}
              <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-[#9B8B7A]/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E6B8A2]/20 flex items-center justify-center text-2xl flex-shrink-0">
                    💬
                  </div>
                  <div>
                    <h3 className="text-xl    text-[#2C2C2C] mb-2">
                      Start a Conversation
                    </h3>
                    <p className="text-[#5F5B57]    text-sm leading-relaxed">
                      Whether you have a question about my work, want to collaborate on a project, 
                      or just want to chat about technology and innovation — I'm always excited to connect.
                    </p>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className="space-y-6">
                <h3 className="text-2xl    text-[#2C2C2C] flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#9B8B7A]" size={20} />
                  Our Locations
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {locations.map((location, index) => (
                    <div key={index} className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-[#9B8B7A]/10 hover:shadow-lg transition-all duration-300">
                      <h4 className="text-lg    text-[#2C2C2C] mb-3">
                        {location.city} {index === 0 && <span className="text-xs text-[#E6B8A2] ml-2">(Head Office)</span>}
                        {index === 1 && <span className="text-xs text-[#E6B8A2] ml-2">(Branch Office)</span>}
                      </h4>
                      
                      
                      {/* Phone Numbers */}
                      <div className="mb-3">
                        {location.phones.map((phone, i) => (
                          <p key={i} className="text-[#5F5B57] text-sm flex items-center gap-2 mb-1">
                            <FaPhoneAlt size={12} />
                            <Link to={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-[#E6B8A2] transition">
                              {phone}
                            </Link>
                          </p>
                        ))}
                      </div>
                      
                      {/* WhatsApp Button */}
                      <button
                        onClick={() => openWhatsApp(location.whatsapp, location.city)}
                        className="w-full mt-2 py-2 bg-[#25D366] text-white rounded-lg flex items-center justify-center gap-2 text-sm    hover:bg-[#20b859] transition-all duration-300"
                      >
                        <FaWhatsapp size={16} />
                        Message on WhatsApp
                      </button>
                      
                      
                    </div>
                  ))}
                </div>
              </div>

              {/* Email Contact */}
              <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-[#9B8B7A]/10">
                <h3 className="text-lg    text-[#2C2C2C] mb-3 flex items-center gap-2">
                  <FaEnvelope className="text-[#9B8B7A]" size={16} />
                  Email Us
                </h3>
                <div className="space-y-2">
                  <Link to="mailto:info@saitsolution.com.np" className="block text-[#5F5B57] text-sm hover:text-[#E6B8A2] transition break-all">
                    info@saitsolution.com.np
                  </Link>
                  <Link to="mailto:hello@sandipbhattarai.com" className="block text-[#5F5B57] text-sm hover:text-[#E6B8A2] transition break-all">
                    hello@sandipbhattarai.com
                  </Link>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl    text-[#2C2C2C] mb-4">Connect Socially</h3>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      className={`w-12 h-12 rounded-full bg-white/40 backdrop-blur-sm border border-[#9B8B7A]/10 flex items-center justify-center text-[#9B8B7A] hover:text-white ${social.color} transition-all duration-300 `}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>

             
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#9B8B7A]/10"
            >
              <h3 className="text-2xl    text-[#2C2C2C] mb-6">Send a Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <FaCheckCircle className="text-green-500 text-4xl" />
                  </div>
                  <h4 className="text-xl    text-[#2C2C2C] mb-2">Message Sent!</h4>
                  <p className="text-[#5F5B57]    text-sm">
                    Thank you for reaching out. I'll get back to you within 24-48 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm    text-[#2C2C2C] mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/60 border border-[#9B8B7A]/20 rounded-xl focus:outline-none focus:border-[#E6B8A2] transition-colors text-[#2C2C2C]   "
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm    text-[#2C2C2C] mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/60 border border-[#9B8B7A]/20 rounded-xl focus:outline-none focus:border-[#E6B8A2] transition-colors text-[#2C2C2C]   "
                      placeholder="hello@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm    text-[#2C2C2C] mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/60 border border-[#9B8B7A]/20 rounded-xl focus:outline-none focus:border-[#E6B8A2] transition-colors text-[#2C2C2C]   "
                      placeholder="Project Inquiry / Collaboration / Just Saying Hi"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm    text-[#2C2C2C] mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-white/60 border border-[#9B8B7A]/20 rounded-xl focus:outline-none focus:border-[#E6B8A2] transition-colors resize-none text-[#2C2C2C]   "
                      placeholder="Tell me about your project, idea, or what you'd like to discuss..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl    font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? 'bg-[#9B8B7A]/50 cursor-not-allowed text-white'
                        : 'bg-[#2C2C2C] text-white hover:bg-[#9B8B7A] hover:scale-[1.02]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane size={14} />
                        Send Message
                      </>
                    )}
                  </button>
                  
                  <p className="text-center text-[10px] text-[#9B8B7A]    mt-4">
                    I'll get back to you within 24-48 hours. Your privacy is respected.
                  </p>
                </form>
              )}
            </motion.div>
          </div>

          

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-[#9B8B7A] text-sm   ">
              Prefer email? Reach us at <Link to="mailto:info@saitsolution.com.np" className="text-[#E6B8A2] hover:underline">info@saitsolution.com.np</Link>
            </p>
          </motion.div>
        </div>

        <style>{`
          .reveal-init {
            opacity: 0;
            transform: translateY(30px);
            transition: all 1.2s cubic-bezier(0.19, 1, 0.22, 1);
          }
          .reveal-visible {
            opacity: 1;
            transform: translateY(0);
          }
        `}</style>
      </section>
      <Footer />
    </>
  );
};

export default Connect;