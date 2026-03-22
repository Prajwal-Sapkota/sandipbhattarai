import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaUser, FaArrowRight, FaClock } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navigation";
import usePageTitle from "../hooks/usePageTitle";

const Blogs = () => {
  usePageTitle('Blogs')
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const blogs = [
    {
      id: 1,
      slug: "can-ai-chatbots-replace-customer-service",
      title: "Can AI chatbots completely replace customer service representatives?",
      date: "April 23, 2021",
      image: "/images/blog1.jpg",
      category: "Artificial Intelligence",
      description: "Exploring the boundary between automated efficiency and the irreplaceable human touch in hospitality.",
      readTime: "8 min read",
      author: "Sandip Bhattarai"
    },
    {
      id: 2,
      slug: "cyber-hygiene-practices-digital-assets",
      title: "Cyber Hygiene – Practices to protect the health of Digital Assets",
      date: "May 23, 2021",
      image: "/images/blog2.jpg",
      category: "Cybersecurity",
      description: "Essential protocols to safeguard your business infrastructure in an increasingly complex digital landscape.",
      readTime: "10 min read",
      author: "Sandip Bhattarai"
    },
    {
      id: 3,
      slug: "digital-journeys-online-travel-booking-revolution",
      title: "Digital Journeys: The Tech-Powered Revolution of Online Travel Booking",
      date: "August 16, 2024",
      image: "/images/blog3.jpg",
      category: "Digital Transformation",
      description: "How OTA systems and integrated tech are redefining the modern guest experience.",
      readTime: "12 min read",
      author: "Sandip Bhattarai"
    }
  ];

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

  return (
    <>
    <Navbar/>
    <section ref={sectionRef} className="py-24 bg-[#F5F0E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div ref={headerRef} className="reveal-init text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#9B8B7A] text-[10px] tracking-[0.6em] uppercase font-bold block mb-4"
          >
            Knowledge Hub
          </motion.span>
          <h1 className="text-5xl md:text-7xl    text-[#2C2C2C]">
            Latest <span className="italic text-[#9B8B7A]">Insights</span>
          </h1>
          <div className="mt-6 w-24 h-px bg-[#E6B8A2] mx-auto"></div>
          <p className="text-[#5F5B57]    max-w-2xl mx-auto mt-6">
            Exploring technology, cybersecurity, and the future of digital transformation
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#9B8B7A]/10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#E6B8A2] text-[#2C2C2C] text-xs rounded-full font-bold">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-[#9B8B7A] mb-3">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt size={10} /> {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock size={10} /> {blog.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl    text-[#2C2C2C] mb-3 line-clamp-2">
                  {blog.title}
                </h3>
                
                <p className="text-[#5F5B57]    text-sm mb-4 line-clamp-3">
                  {blog.description}
                </p>
                
                <Link
                  to={`/blog/${blog.slug}`}
                  className="inline-flex items-center gap-2 text-[#9B8B7A] hover:text-[#E6B8A2] transition-colors group-hover:gap-3 text-sm font-medium"
                >
                  Read Article <FaArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
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
    <Footer/>
    </>
  );
};

export default Blogs;