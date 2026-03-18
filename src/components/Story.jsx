import { motion } from 'framer-motion';
import { useState } from 'react';

const Story = () => {
  const [activeCard, setActiveCard] = useState(null);

  const storyPoints = [
    {
      year: '2012',
      title: 'Started in Hospitality',
      description: 'Began career in hospitality service, learning the art of customer satisfaction and operational excellence.',
      icon: '🏨',
      color: 'from-amber-500/20 to-amber-500/5'
    },
    {
      year: '2016',
      title: 'Discovered Technology',
      description: 'Started learning programming while working, building internal tools to improve hotel management systems.',
      icon: '💻',
      color: 'from-blue-500/20 to-blue-500/5'
    },
    {
      year: '2019',
      title: 'First Tech Role',
      description: 'Transitioned fully to technology, leading digital transformation projects for hospitality clients.',
      icon: '🚀',
      color: 'from-purple-500/20 to-purple-500/5'
    },
    {
      year: '2024',
      title: 'Technology Leader',
      description: 'Now helping businesses bridge the gap between service excellence and cutting-edge technology.',
      icon: '🌟',
      color: 'from-[#0D5F58]/20 to-[#0D5F58]/5'
    }
  ];

  return (
    <section id="story" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#0D5F58] text-sm font-['Jost'] tracking-[0.3em] uppercase">
            My Story
          </span>
          <h2 className="text-4xl md:text-5xl font-['Marcellus'] text-[#1A1A1A] mt-4">
            From Hospitality to Tech Leadership
          </h2>
          <p className="text-[#1A1A1A]/70 text-lg mt-6 font-['Jost']">
            Every career path is unique. Here's how service excellence led me to technology innovation.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {storyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div 
                className={`bg-gradient-to-br ${point.color} p-8 rounded-3xl h-full transition-all duration-500 ${
                  activeCard === index ? 'transform -translate-y-2 shadow-2xl' : 'shadow-lg'
                }`}
                style={{
                  border: activeCard === index ? '1px solid rgba(13, 95, 88, 0.2)' : '1px solid rgba(0,0,0,0.05)'
                }}
              >
                {/* Year */}
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl">{point.icon}</span>
                  <span className="text-2xl font-['Marcellus'] text-[#0D5F58]">{point.year}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-['Marcellus'] text-[#1A1A1A] mb-3">{point.title}</h3>
                <p className="text-sm text-[#1A1A1A]/70 font-['Jost'] leading-relaxed">
                  {point.description}
                </p>

                {/* Decorative Line */}
                <div 
                  className={`absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#0D5F58]/30 to-transparent transition-opacity duration-300 ${
                    activeCard === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>

              {/* Connector Line (for desktop) */}
              {index < storyPoints.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#0D5F58]/20">
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#0D5F58] rounded-full" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Personal Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-[#F9F8F6] rounded-3xl max-w-4xl mx-auto"
        >
          <p className="text-xl md:text-2xl font-['Jost'] text-[#1A1A1A]/80 italic text-center">
            "My background in hospitality taught me that great technology, like great service, 
            is about understanding people's needs and exceeding their expectations."
          </p>
          <p className="text-center mt-4 font-['Marcellus'] text-[#0D5F58]">— Sandip Bhattarai</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;