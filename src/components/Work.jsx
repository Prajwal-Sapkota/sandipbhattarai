import { motion } from 'framer-motion';
import { useState } from 'react';

const Work = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: 'Hotel Management System',
      client: 'Luxury Hotel Chain',
      description: 'Complete digital transformation for a 5-star hotel chain, integrating PMS, booking, and customer experience.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      tags: ['React', 'Node.js', 'Hospitality'],
      year: '2024',
      link: '#'
    },
    {
      title: 'Restaurant Booking Platform',
      client: 'Food & Beverage Group',
      description: 'Online reservation system with real-time availability, waitlist management, and customer insights.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      tags: ['Next.js', 'PostgreSQL', 'Restaurant'],
      year: '2023',
      link: '#'
    },
    {
      title: 'Travel Agency Portal',
      client: 'Adventure Travel Co.',
      description: 'Custom booking engine for tour operators with dynamic packaging and payment integration.',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1121&q=80',
      tags: ['Vue.js', 'AWS', 'Travel'],
      year: '2023',
      link: '#'
    },
    {
      title: 'Staff Training Platform',
      client: 'Hospitality Academy',
      description: 'E-learning solution for hotel staff training with progress tracking and certification.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      tags: ['React', 'MongoDB', 'Education'],
      year: '2022',
      link: '#'
    }
  ];

  return (
    <section id="work" className="py-24 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#0D5F58] text-sm font-['Jost'] tracking-[0.3em] uppercase">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-['Marcellus'] text-[#1A1A1A] mt-4">
            Projects I'm Proud Of
          </h2>
          <p className="text-[#1A1A1A]/70 text-lg mt-6 font-['Jost']">
            Real solutions for real businesses - from hospitality to healthcare.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Year Badge */}
                  <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-['Jost']">
                    {project.year}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-['Marcellus'] text-[#1A1A1A]">
                      {project.title}
                    </h3>
                    <a 
                      href={project.link}
                      className="w-10 h-10 bg-[#F9F8F6] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    >
                      <span className="text-[#0D5F58]">→</span>
                    </a>
                  </div>
                  
                  <p className="text-[#0D5F58] font-['Jost'] mb-3">{project.client}</p>
                  <p className="text-[#1A1A1A]/70 font-['Jost'] mb-4">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-[#F9F8F6] text-sm text-[#1A1A1A]/70 rounded-full font-['Jost']"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-[#0D5F58] hover:gap-4 transition-all font-['Jost']"
          >
            View All Projects
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;