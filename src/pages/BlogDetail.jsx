import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaUser, FaClock, FaArrowLeft, FaShareAlt, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { useState, useEffect } from "react";
import Navbar from "../components/Navigation";
import Footer from "../components/Footer";
import usePageTitle from "../hooks/usePageTitle";

const BlogDetail = () => {

  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [showShare, setShowShare] = useState(false);

  const blogsData = {
    "can-ai-chatbots-replace-customer-service": {
      id: 1,
      title: "Can AI chatbots completely replace customer service representatives?",
      date: "April 23, 2021",
      image: "/images/blog1.jpg",
      category: "Artificial Intelligence",
      readTime: "8 min read",
      author: "Sandip Bhattarai",
      content: `
        <p>The emergence of artificial intelligence (AI) has generated discussions over its potential to transform several businesses in the rapidly evolving field of technology. Customer service is one sector that has seen tremendous change. AI-powered chatbots have become a viable substitute for human customer support professionals and are gaining traction more quickly than ever.</p>

        <p>Proponents of AI claim that technology can transform customer service, while skeptics point out that depending only on AI has limits and downsides. Yet, as we delve more into this budding narrative, it becomes evident that the interaction between AI chatbots and human representatives is less of a competition for attention and more of a delicate duet.</p>

        <h2>Pros of AI Chatbots</h2>

        <h3>1. 24/7 Availability</h3>
        <p>The indisputable advantages of AI chatbots are portrayed in the act of this technical drama. Imagine a flawless, round-the-clock service where clients can get prompt answers to their questions at any time of day. The AI chatbot is a relentless worker that is very skilled at efficiency.</p>

        <p>Chatbots are more accessible and responsive than human representatives because they may answer to client inquiries at any time, unlike human representatives who have set working hours. This feature allows chatbots to accommodate consumers with diverse schedules or in different time zones. Routine, mundane questions take on a virtuoso quality, freeing up human agents to concentrate on the most complex facets of consumer interaction.</p>

        <h3>2. Efficiency and Speed</h3>
        <p>AI chatbot proponents frequently emphasize how well they handle a huge volume of simple, repetitive activities, which enables them to respond to frequently asked client questions with precision and speed. Because chatbots don't get tired as people do, they can provide consistent, high-quality service all day long. This effectiveness may lead to more rapid resolution of problems, which will increase customer satisfaction and loyalty.</p>

        <h3>3. Cost Effectiveness and Scalability</h3>
        <p>The affordability of AI chatbots is a significant advantage from a business standpoint. Compared to the continuous expenditures of salary, training, and other human resource expenses associated with keeping a team of customer support professionals, chatbots require less money once they are built and put into use.</p>

        <p>Companies rejoice in the cost-effectiveness of this digital talent as AI chatbots take center stage in a performance where time is of the essence. An initial investment in AI has the potential to replace a battalion of human representatives, saving both money and time. Furthermore, chatbots are simple to scale up to handle a rising amount of client inquiries, giving businesses the flexibility to keep up with demand.</p>

        <h2>Considerations and Cons of AI Chatbots</h2>

        <h3>1. The Human Touch</h3>
        <p>It becomes clear that AI chatbots struggle in the emotional intricacies of customer support. Here comes the human proxies, the seasoned emotional intelligence and empathy players. Here, agents skillfully handle the delicate nuances of clients' emotions, demonstrating the value of human touch and offering a degree of comprehension that AI chatbots find difficult to match.</p>

        <p>When dealing with complicated problems or sensitive concerns, customers frequently look for certainty, compassion, and a tailored response. Human agents may perform better than chatbots when managing emotionally charged scenarios or situations that call for empathy. This makes the human touch irreplaceable in customer service.</p>

        <h3>2. Complex Problem-Solving and Adaptability</h3>
        <p>Although AI excels at everyday activities, it may find it difficult to solve complicated problems that need for a sophisticated knowledge or original problem-solving techniques. AI chatbots now lack the ability to solve complicated problems and adapt, which is a skill that customer support personnel possess.</p>

        <p>Human delegates are able to handle challenging conditions and adjust to unanticipated events. They are able to offer customized solutions, particularly where a thorough comprehension of the demands of the client is essential. Human agents are equally capable of using judgment, navigating ambiguous circumstances, and customizing solutions to fit the demands of each particular client. AI systems find it difficult to be as flexible as this since they are limited by pre-programmed algorithms.</p>

        <h3>3. Building Relationships</h3>
        <p>Certain clients might want interpersonal interaction, particularly when handling delicate or complex issues. A total switch to AI chatbots can make some customers discontented. A crucial component of providing excellent customer service is building deep relationships with clients. Long-term client loyalty may be fostered by human representatives' ability to establish rapport, comprehend individual preferences, and provide a more personalized experience.</p>

        <h3>4. Initial Setup and Maintenance Costs</h3>
        <p>AI chatbot implementation necessitates a large initial investment in infrastructure and technology. The system must also receive regular upgrades and maintenance in order to remain updated and functional.</p>

        <h2>The Balanced Approach</h2>
        <p>The harmony between AI chatbots and human representatives is a dynamic work of art that is always changing. AI chatbots' remarks will continue to be refined by technological breakthroughs, expanding their capabilities as human interaction adjusts to match.</p>

        <p>To find the ideal balance between AI and human engagement that aligns with their brand values and customer service goals, businesses must carefully evaluate their own requirements and customer expectations. The efficiency, affordability, and scalability of AI chatbots are indisputable; nonetheless, the complexity and flexibility of human emotions continue to be a difficulty.</p>

        <p>A thoughtful combination of AI and human customer care agents could be the best course of action rather than an either-or choice. Envision a disgruntled client navigating the intricate maze of a complicated problem. Here, the human representative takes on a heroic role, equipped with the capacity to solve problems and adjust to changing conditions.</p>

        <p>The complexities of human emotion are like a complicated melody, and the human touch is the essential conductor in this symphony. In order to provide customers with a smooth and customized experience in the digital age, customer service is changing, necessitating a balanced strategy that makes use of both AI and human skills. Additionally, keep track of feedback from customers and AI chatbot performance to make appropriate improvements. The best of both worlds should be provided by a well-considered combination of AI and human components in customer service, exceeding consumer expectations and upholding a high standard of service quality.</p>
      `
    },
    "cyber-hygiene-practices-digital-assets": {
      id: 2,
      title: "Cyber Hygiene – Practices to protect the health of Digital Assets",
      date: "May 23, 2021",
      image: "/images/blog2.jpg",
      category: "Cybersecurity",
      readTime: "10 min read",
      author: "Sandip Bhattarai",
      content: `
        <p>The idea of cyber hygiene arises as a key component of our online safety and security in today's hyper connected digital world, when our lives are inextricably linked to technology. Cyber hygiene is the aggregate term for the routines, behaviors, and procedures designed to strengthen our online defenses against an array of cyber threats.</p>

        <p>Cyber hygiene is a set of preventive steps intended to shield our digital identities, sensitive data, and networked systems from hostile actors looking to take advantage of weaknesses, just like personal hygiene protects our physical health. This essay aims to shed light on the vital significance of cyber hygiene by examining how it may reduce risks, strengthen digital resilience, and enable people and organizations to securely negotiate the complexity of the online environment.</p>

        <p>Adopting strong cyber hygiene habits becomes not only necessary, but essential to our digital life as the digital ecosystem changes and threats get more complex. Come along on this adventure as we explore the foundations of cyber security and how important it is to strengthen our digital defenses in a constantly changing cyber environment.</p>

        <h2>Why is Cyber Hygiene important?</h2>
        <p>Cyber hygiene is essential because it lowers the risk of data breaches and cyberattacks by putting best practices and measures in place for cyber threat prevention. In our globally linked environment, it strengthens digital resilience against emerging cyber threats, protects sensitive data, and maintains online privacy.</p>

        <h3>Key Benefits of Cyber Hygiene:</h3>
        <ul>
          <li><strong>Risk Mitigation:</strong> Using cyber hygiene guidelines lowers your chances of being a victim of ransomware, phishing, malware, and data breaches.</li>
          <li><strong>Sensitive Data Protection:</strong> One of the key data protection measures is to limit unwanted access or leaks, good cyber hygiene protects sensitive data, such as financial information, personal information, and proprietary company information.</li>
          <li><strong>Preserving Online Privacy:</strong> People may safeguard their online privacy and maintain the confidentiality and security of their personal information by following cyber hygiene guidelines.</li>
          <li><strong>Preserving System Integrity:</strong> Cyber hygiene guards against interruptions brought on by malware infections or cyberattacks, preserving the operation and integrity of digital systems.</li>
          <li><strong>Enhancing Digital Resilience:</strong> By implementing robust cyber hygiene procedures, people and organizations may increase their ability to withstand potential cyber threats and quickly recover from any possible security mishaps.</li>
          <li><strong>Legal and Compliance Requirements:</strong> Adhering to cyber hygiene measures is frequently in line with regulatory compliance standards, guaranteeing legal compliance and averting fines or other legal ramifications.</li>
          <li><strong>Safeguarding Reputation:</strong> Practicing good cyber hygiene helps individuals and organizations retain credibility and trust by shielding their reputations from online mishaps that could negatively affect public opinion.</li>
        </ul>

        <h2>Core elements of Cyber Hygiene</h2>
        <p>The core elements of cyber hygiene make up the actions that support digital security protocols against cyberattacks. These elements comprise:</p>
        <ul>
          <li><strong>Robust Password Management:</strong> The cornerstone of cyber hygiene is the creation, use, and frequent updating of strong, one-of-a-kind passwords for every account.</li>
          <li><strong>Frequent Software Updates:</strong> To fix vulnerabilities and bolster defenses against cyber-attacks, it's essential to keep operating systems, apps, and software updated with the newest security patches.</li>
          <li><strong>Awareness and Education:</strong> People who get ongoing instruction and training on identifying and handling cyber threats are better equipped to make wise decisions and fend off frauds and assaults.</li>
          <li><strong>Secure Network Configurations:</strong> Strengthening the entire defense against unwanted access or data breaches requires configuring networks with strong security features like firewalls and encryption.</li>
          <li><strong>Data Backups and Recovery Plans:</strong> Ensuring that important information can be recovered quickly is ensured by regularly backing up data and creating recovery plans in the event of cyber-attacks or system failures.</li>
          <li><strong>Multifactor Authentication (MFA):</strong> By demanding extra verification in addition to passwords, MFA adds an extra layer of protection and drastically lowers the possibility of illegal access.</li>
          <li><strong>Secure Online Conduct:</strong> Promoting secure surfing practices reduces the risk of encountering online risks. These practices include staying away from dubious sites, utilizing HTTPS connections, and exercising caution while downloading files.</li>
        </ul>

        <h2>Best Practices for Cyber Hygiene</h2>
        <ul>
          <li><strong>Frequent System Updates and Patching:</strong> Applying the most recent security updates to software, operating systems, and apps reduces vulnerabilities and fortifies defenses against online attacks.</li>
          <li><strong>Password Strength and Management:</strong> Using password managers and creating strong, one-of-a-kind passwords improves overall security posture.</li>
          <li><strong>Employee Training and Awareness Programs:</strong> By regularly holding training sessions and awareness campaigns on social engineering techniques, phishing efforts, and safe online activities, people are better equipped to see and avoid any dangers.</li>
          <li><strong>Data Encryption and Secure Backups:</strong> Protecting sensitive data from theft or loss and ensuring frequent backups enable quick recovery in the event of an emergency.</li>
          <li><strong>Multifactor Authentication (MFA):</strong> By requiring other means of authentication in addition to passwords, enforcing MFA across accounts adds an extra layer of protection.</li>
          <li><strong>Firewall and Antivirus Protection:</strong> Networks and devices are protected from a variety of cyber dangers by deploying strong firewalls and dependable antivirus software.</li>
          <li><strong>Regular Security Assessments and Audits:</strong> By carrying out regular security assessments and audits, cybersecurity best practices are adhered to, and vulnerabilities are found.</li>
        </ul>

        <p>To sum up, cyber hygiene is an essential defense against the numerous risks that threaten our digitally linked world. It is important because it protects private data, strengthens our digital life, and makes sure that our online presence is resilient. Strong cybersecurity procedures help people and organizations lower the risks of cyberattacks by strengthening defenses and minimizing vulnerabilities.</p>

        <p>This proactive strategy maintains the integrity of digital operations and protects against possible breaches and data intrusions while also protecting privacy. The importance of cyber hygiene is growing as technology develops, underscoring our shared need to prioritize and put these principles into action.</p>

        <p>Maintaining a commitment to ongoing education, keeping up with emerging threats, and cultivating a cyber-aware culture are critical in the ongoing fight against cyber attackers. To protect our digital environment and stave off cyberattacks, let's all make cyber hygiene a top priority. Your proactive actions now will ensure tomorrow's digital environment is more secure and robust.</p>
      `
    },
    "digital-journeys-online-travel-booking-revolution": {
      id: 3,
      title: "Digital Journeys: The Tech-Powered Revolution of Online Travel Booking",
      date: "August 16, 2024",
      image: "/images/blog3.jpg",
      category: "Digital Transformation",
      readTime: "12 min read",
      author: "Sandip Bhattarai",
      content: `
        <p>Online travel agencies (OTA) are now crucial in today's travel industry, having completely changed the way we organize and start our trips. The ease of use and accessibility of OTAs have revolutionized the way that adventure seekers plan and book their trips in today's globalized world.</p>

        <p>Some platforms like booking.com, agoda.com, expedia.com, and goibibo.com make use of cutting-edge technology infrastructure, simplify the entire vacation planning process by providing a wide range of services including flights, lodging, vehicle rentals, and carefully selected activities. Their easily navigable interfaces make it simple for consumers to compare costs, read real user reviews, and customize their vacation packages.</p>

        <p>These digital platforms represent the perfect union of technology and wanderlust at a time when convenience is king, giving consumers all around the world access to a plethora of possibilities. In addition to completely redefining travel booking, the rise of OTAs has caused a profound shift in consumer behavior as people come to value the simplicity, openness, and affordability of these platforms.</p>

        <p>Travelers' desire for smooth experiences and well-planned itineraries will likely lead to OTAs increasing importance, which will represent a significant turning point in the evolving story of contemporary travel.</p>

        <h2>Evolution of Online Travel Agencies</h2>
        <p>Have you ever had the hustle of booking your vacation packages going door-to-door of travel agencies to get the best travel deals? When was the last time you did that? Ever thought if the hustle of visiting travel agency offices would go away? All thanks to Online travel agencies (OTAs) development, which is a reflection of the travel industry's swift digital transition, which has been sparked by advances in technology and shifting customer expectations.</p>

        <p>OTAs began as straightforward online booking platforms and have evolved into all-inclusive hubs providing a wide range of travel-related services. By employing state-of-the-art technology to expedite processes, these platforms have improved accessibility and user experience throughout time. Now that more people are using mobile apps and the internet, travelers can easily plan, book, and manage their travel schedule from the convenience of their gadgets.</p>

        <p>The travel industry's dynamics have undergone a significant upheaval due to the convergence of convenience and innovation. This has had catastrophic effects for conventional travel firms operating in physical locations. Travelers looking for convenience and value now consider online travel agencies (OTA) to be essential resources due to their wide range of services, which include smooth online reservations choices, personalized suggestions, and low pricing.</p>

        <h2>Services and Features</h2>
        <p>The wide range of services and features provided by OTAs is designed to satisfy the various demands of contemporary travelers. These platforms ease the entire trip planning process by seamlessly integrating a range of travel-related services. They do this through the application of cutting-edge technology and user-centered design.</p>

        <h3>Key Features of OTAs:</h3>
        <ul>
          <li><strong>Booking flights:</strong> Online travel agencies offer a plethora of travel choices, enabling customers to evaluate costs, itineraries, and timetables offered by different airlines.</li>
          <li><strong>Hotel Accommodations:</strong> A wide range of hotels throughout the world are offered by OTAs. Users may filter results by price range, location, and facilities to further narrow down their options along with seasonal travel deals.</li>
          <li><strong>Car Rentals:</strong> OTAs provide hassle-free car rental arrangements, with options ranging from economical to premium automobiles, adding convenience beyond travel and lodging.</li>
          <li><strong>Activities and Experiences:</strong> To meet the interests and preferences of tourists looking for adventure, sightseeing, or cultural immersion, these platforms curate a wide variety of activities and experiences.</li>
          <li><strong>User-Friendly Interfaces:</strong> OTAs place a high priority on user-friendly interfaces, which guarantee simple online reservations procedures, smooth navigation, and tailored suggestions.</li>
          <li><strong>Price Comparison Tools:</strong> OTAs' potent algorithms allow consumers to compare rates instantly, giving them the opportunity to take advantage of the greatest offers.</li>
        </ul>

        <h2>Benefits of Online Travel Agencies</h2>
        <ul>
          <li><strong>Convenience and accessibility:</strong> Online travel agencies offer a one-stop shop that is open around-the-clock, enabling customers to plan and reserve travel from any location and do away with the limitations of regular business hours.</li>
          <li><strong>Competitive Pricing and Deals:</strong> By utilizing large databases and sophisticated algorithms, these platforms provide passengers with cost savings travel deals on airfare, lodging, and packaged travel.</li>
          <li><strong>Comprehensive Options:</strong> OTAs provide a wide range of options to suit different budgets and tastes, thanks to their enormous inventory of flights, hotels, rental cars, and activities.</li>
          <li><strong>Customer Support and Assistance:</strong> To guarantee a flawless travel experience, several OTAs offer extensive customer support services, including assistance prior to, during, and after the trip.</li>
          <li><strong>User Reviews and Ratings:</strong> User reviews and ratings are a characteristic of OTAs, which enable users to make well-informed selections by drawing on the experiences of other travelers.</li>
        </ul>

        <h2>Challenges and Concerns</h2>
        <ul>
          <li><strong>Security and Trust:</strong> Data security continues to be a top priority for user transactions conducted online, demanding strong security measures to protect sensitive personal and financial data.</li>
          <li><strong>Overwhelming Choices:</strong> The OTAs' profusion of possibilities may exhaust the user and make it difficult to choose the finest travel-related goods or services.</li>
          <li><strong>Problems with Customer Service:</strong> Poor customer service or a lack of prompt attention to inquiries and grievances can affect user happiness and confidence in the OTA brand.</li>
          <li><strong>Competitive Industry:</strong> To differentiate themselves from rivals and hold onto market share, OTAs must constantly innovate and adapt in the fiercely competitive Internet industry.</li>
          <li><strong>Dependency on Technological Infrastructure:</strong> OTAs that rely heavily on technology run the risk of experiencing service delivery and user experience disruptions due to system malfunctions, bugs, or cyberattacks.</li>
        </ul>

        <h2>Future of Online Travel Agencies</h2>
        <p>Online travel agencies have an exciting future ahead of them, one that will be characterized by innovation, flexibility, and changing customer needs. The following are important considerations when imagining the future of OTAs:</p>
        <ul>
          <li><strong>Technological Advancements:</strong> To personalize user experiences, expedite reservations, and provide customized suggestions, OTAs are well-positioned to use cutting-edge technologies like artificial intelligence, machine learning, and augmented reality.</li>
          <li><strong>Sustainability Initiatives:</strong> As the emphasis on ecologically friendly travel grows, OTAs are anticipated to emphasize eco-friendly lodging and transportation alternatives, assist with carbon offset programs, and promote eco-friendly travel options.</li>
          <li><strong>Enhanced Personalization:</strong> Hyper-personalization will be given top priority by future OTAs, who will employ data analytics to comprehend user preferences and provide highly tailored travel booking recommendations and packages.</li>
          <li><strong>Mobile-Centric Approach:</strong> As long as mobile platforms remain dominant, OTAs will be forced to improve their offerings for smooth mobile experiences, which may include including more user-friendly applications and mobile-specific features.</li>
          <li><strong>Global Expansion and Localization:</strong> OTAs will increase their global reach by concentrating on localization to accommodate a range of cultural subtleties and preferences as travel becomes more accessible.</li>
          <li><strong>Community-Driven Travel Experiences:</strong> Upcoming OTAs may place a strong emphasis on community-driven travel experiences that foster relationships between visitors and local hosts as well as chances for cultural immersion.</li>
        </ul>

        <p>In summary, it is imperative to acknowledge the significance of online travel agents as significant players in the constantly evolving travel sector. They are redefining the trip planning and reservation process by utilizing cutting edge technology and user-focused strategies. Leveraging search engine optimization tactics becomes essential as these platforms develop to ensure exposure, relevance, and engagement in the highly competitive online marketplace.</p>

        <p>The trajectory of OTAs in the future is contingent upon their capacity to adjust to technological progress, meet changing customer needs, and tackle relevant issues. The next stage of OTA Innovation will be driven by sustainability efforts, strong cybersecurity safeguards, tailored suggestions, and seamless user experiences.</p>
      `
    }
  };
  useEffect(() => {
    const blogData = blogsData[slug];
    setBlog(blogData);
    window.scrollTo(0, 0);
  }, [slug]);

  usePageTitle(blog ? blog.title : "Blog");

  useEffect(() => {
    setBlog(blogsData[slug]);
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#F5F0E8] flex items-center justify-center">
        <p className="text-[#5F5B57]">Loading...</p>
      </div>
    );
  }

  const shareUrl = window.location.href;

  return (
    <>
      <Navbar />
      <div className="bg-[#F5F0E8] min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F5F0E8] via-[#F5F0E8]/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="max-w-5xl mx-auto">

              <h1 className="text-3xl md:text-5xl lg:text-6xl    text-[#2C2C2C] leading-tight max-w-4xl">
                {blog.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 pb-8 mb-8 border-b border-[#9B8B7A]/20">
            <div className="flex items-center gap-2 text-[#9B8B7A]">
              <FaCalendarAlt size={14} />
              <span className="text-sm">{blog.date}</span>
            </div>
            <div className="flex items-center gap-2 text-[#9B8B7A]">
              <FaUser size={14} />
              <span className="text-sm">By {blog.author}</span>
            </div>
            <div className="flex items-center gap-2 text-[#9B8B7A]">
              <FaClock size={14} />
              <span className="text-sm">{blog.readTime}</span>
            </div>
            <div className="ml-auto relative">
              <button
                onClick={() => setShowShare(!showShare)}
                className="flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full text-[#9B8B7A] hover:text-[#E6B8A2] transition-colors text-sm"
              >
                <FaShareAlt size={12} /> Share
              </button>
              {showShare && (
                <div className="absolute right-0 top-full mt-2 bg-white shadow-xl rounded-xl p-3 flex gap-3 z-10">
                  <Link to={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <FaFacebook className="text-[#1877f2]" size={18} />
                  </Link>
                  <Link to={`https://twitter.com/intent/tweet?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <FaTwitter className="text-[#1da1f2]" size={18} />
                  </Link>
                  <Link to={`https://www.linkedin.com/shareArticle?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <FaLinkedin className="text-[#0077b5]" size={18} />
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Blog Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-[#9B8B7A]/10">
            <div className="flex items-center justify-center gap-4">

              <div>
                <h4 className="   text-[#2C2C2C] text-lg">{blog.author}</h4>
                <p className="text-[#5F5B57] text-sm">Technology Leader & Founder at S.A.I.T Solution</p>
                <p className="text-[#9B8B7A] text-xs mt-1">Bridging hospitality excellence with technology innovation</p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
        .prose {
          color: #5F5B57;
          font-family: 'Jost', sans-serif;
        }
        .prose h1, .prose h2, .prose h3, .prose h4 {
          font-family: 'Marcellus', serif;
          color: #2C2C2C;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose h2 {
          font-size: 1.8rem;
          border-left: 4px solid #E6B8A2;
          padding-left: 1rem;
        }
        .prose p {
          margin-bottom: 1.25rem;
          line-height: 1.7;
        }
        .prose ul, .prose ol {
          margin: 1rem 0;
          padding-left: 1.5rem;
        }
        .prose li {
          margin: 0.5rem 0;
        }
        .prose strong {
          color: #2C2C2C;
        }
        .prose a {
          color: #E6B8A2;
          text-decoration: underline;
        }
        .prose blockquote {
          border-left: 4px solid #E6B8A2;
          padding-left: 1.5rem;
          font-style: italic;
          margin: 1.5rem 0;
          color: #9B8B7A;
        }
      `}</style>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;