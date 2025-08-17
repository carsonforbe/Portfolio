import React, { useState } from 'react';
import { motion } from 'framer-motion';
import profilePic from "./assets/profile.jpg";
import { Github, Linkedin, Mail, MapPin, Calendar, Code, Database, Server, Smartphone } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  
  const skills = [
    { name: "Django/DRF", level: 90 },
    { name: "Node.js", level: 80},
    { name: "React", level: 50 },
    { name: "Payment Integrations", level: 70 },
    { name: "Docker", level: 70 },
    { name: "REST APIs", level: 90 },
    { name: "PostgreSQL", level: 85 },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <header className="p-6 flex justify-between items-center sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <img 
            src={profilePic} 
            alt="Charles Makokha" 
            className="w-10 h-10 rounded-full object-cover border-2 border-gray-300 dark:border-gray-700"
          />
          Charles Makokha
        </h1>
        <nav className="flex items-center gap-6">
          <div className="flex gap-4">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <section className="py-20 md:py-28 flex flex-col md:flex-row items-center gap-12" id="hero">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
                <span className="block mb-2">Hi, I'm Charles</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Backend Developer
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
                I build robust backend systems with Django DRF, & Node.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#projects" 
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg"
                >
                  View Projects
                </a>
                <a 
                  href="#contact" 
                  className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <img
                  src={profilePic}
                  alt="Charles Makokha"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                <span>Nairobi, Kenya</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-2">About Me</h3>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="mb-6 text-lg">
                Software Developer with 1+ years of experience designing, building scalable RESTful APIs, 
                and full-stack applications using Django, React, Node and Python. Adept at collaborating in agile teams, 
                leveraging Git for version control, and implementing CI/CD pipelines. 
                Passionate about delivering user-focused, high-quality software solutions to solve real-world problems.
              </p>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8">
                <h4 className="font-bold text-xl mb-4 flex items-center">
                  <Calendar className="mr-2 text-blue-600 dark:text-blue-400" />
                  Experience
                </h4>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
                  <div className="space-y-6 max-w-3xl mx-auto">
                    
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-semibold">Backend Team Lead | AkibaPamoja</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Nairobi, Kenya | June 2025 – August 2025</p>
                      <ul className="list-disc ml-6 mt-2 space-y-2">
                        <li>Led development of a Django-based community savings platform, integrating M-Pesa for secure, real-time payment processing.</li>
                        <li>Designed and implemented RESTful APIs for group management, contribution tracking, and payment verification, improving transaction efficiency by 25%.</li>
                        <li>Collaborated with a team of 7 developers using GitHub for version control and agile workflows.</li>
                      </ul>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-semibold">Backend Developer | Casapay</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Nairobi, Kenya | July 2025 – Present</p>
                      <ul className="list-disc ml-6 mt-2 space-y-2">
                        <li>Developed RESTful API endpoints for a rent automation platform, integrating PayPal, Paystack, Flutterwave, and M-Pesa for seamless payment processing.</li>
                        <li>Implemented API versioning and automated testing, reducing bugs by 30% and ensuring scalability.</li>
                        <li>Configured CI/CD pipelines with GitHub Actions for streamlined deployments.</li>
                      </ul>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-semibold">Freelance Software Developer</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Remote | 2024 – Present</p>
                      <ul className="list-disc ml-6 mt-2 space-y-2">
                        <li>Built multiple full-stack applications, including a social media clone, youth management app, and expense calculators, using Django, React, and PostgreSQL.</li>
                        <li>Utilized Docker for containerized deployments and Git for collaborative development, ensuring clean and maintainable codebases.</li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-4 flex items-center">
                <Code className="mr-2 text-blue-600 dark:text-blue-400" />
                Technical Skills
              </h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <motion.div 
                        className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <h4 className="font-bold text-xl mt-8 mb-4 flex items-center">
                <Database className="mr-2 text-blue-600 dark:text-blue-400" />
                Tools & Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Django', 'DRF', 'React', 'PostgreSQL', 'Docker', 'Celery', 'Paystack', 'Node'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-2">Projects</h3>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          </div>
          
          <div className="grid gap-10 md:grid-cols-2">
            <ProjectCard 
              title="ChamaLink" 
              description="A digital platform for Kenyan chamas with M-Pesa integration and dashboards."
              technologies={['Django', 'DRF', 'M-Pesa API', 'React', 'PostgreSQL']}
              image="chamalink-screenshot"
            />
            
            <ProjectCard 
              title="Property Rental App" 
              description="React + Django app with landlord/tenant roles, payments, and property management."
              technologies={['Django', 'React', 'PayPal API', 'Docker', 'AWS']}
              image="rental-app-screenshot"
            />
            
            <ProjectCard 
              title="E-commerce Payment Gateway" 
              description="Custom payment processing solution supporting M-Pesa, cards, and mobile wallets."
              technologies={['Python', 'Django', 'M-Pesa', 'Stripe', 'React']}
              image="payment-gateway"
            />
            
            <ProjectCard 
              title="Financial Analytics Dashboard" 
              description="Real-time analytics platform for financial institutions with transaction monitoring."
              technologies={['Django', 'React', 'Celery', 'Redis', 'Chart.js']}
              image="analytics-dashboard"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-2">Get In Touch</h3>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="mb-6 text-lg">
                Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:charlesmakokhafort@gmail.com" 
                  className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <Mail className="text-blue-600 dark:text-blue-400 mr-4" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">charlesmakokhafort@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/carsonforbe" 
                  target="_blank"
                  className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <Github className="text-blue-600 dark:text-blue-400 mr-4" />
                  <div>
                    <h4 className="font-semibold">GitHub</h4>
                    <p className="text-gray-600 dark:text-gray-400">github.com/carsonforbe</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/charles-makokha-a31a20368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                  target="_blank"
                  className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <Linkedin className="text-blue-600 dark:text-blue-400 mr-4" />
                  <div>
                    <h4 className="font-semibold">LinkedIn</h4>
                    <p className="text-gray-600 dark:text-gray-400">linkedin.com/in/charles-makokha</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-transparent"
                    placeholder="Your message...(email functionality not implemented yet...)"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-gray-200 dark:border-gray-800 text-center">
        <p>© {new Date().getFullYear()} Charles Makokha. All rights reserved.</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
          Built with React, Tailwind CSS, and passion
        </p>
      </footer>
    </div>
  )
}

function ProjectCard({ title, description, link, technologies, image }) {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
        <div className="bg-gray-200 border-2 border-dashed w-full h-full" />
        <div className="absolute bottom-4 left-4">
          {technologies.slice(0, 3).map((tech, i) => (
            <span 
              key={i}
              className="mr-2 px-2 py-1 bg-blue-600 text-white text-xs rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6">
        <h4 className="font-bold text-xl mb-2">{title}</h4>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        {link && (
          <a 
            href={link} 
            target="_blank"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            View on GitHub
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  )
}
