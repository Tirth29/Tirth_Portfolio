import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Code, Database, Server, Smartphone, Settings, Award, Users, Coffee, Zap } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Building end-to-end applications using React, Next.js, Angular, and REST APIs to deliver scalable and seamless user experiences.',
      color: 'bg-indigo-600'
    },
    {
      icon: Server,
      title: 'Backend Engineering',
      description: 'Building scalable backend systems using Java, Django, and Node.js with a focus on performance and clean architecture.',
      color: 'bg-emerald-600'
    },
    {
      icon: Database,
      title: 'Database Optimization',
      description: 'Designing efficient database solutions with MySQL, PostgreSQL, and MongoDB to ensure high performance.',
      color: 'bg-purple-600'
    },
    {
      icon: Settings,
      title: 'Automation & DevOps',
      description: 'Implementing CI/CD pipelines, containerization, and automated testing to improve reliability and efficiency.',
      color: 'bg-rose-500'
    }
  ];

  const stats = [
    { icon: Award, number: '1.5+', label: 'Years Experience', color: 'text-blue-600' },
    { icon: Code, number: '10+', label: 'Projects Completed', color: 'text-green-600' }
    // { icon: Users, number: '3+', label: 'Happy Clients', color: 'text-purple-600' },
    // { icon: Coffee, number: '250+', label: 'Cups of Coffee', color: 'text-orange-600' }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-indigo-50 dark:bg-yellow-900/10 rounded-full blur-3xl opacity-60 transition-colors duration-300"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-50 dark:bg-yellow-900/10 rounded-full blur-3xl opacity-60 transition-colors duration-300"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            About Me
          </h2>
          <div className={`w-24 h-1 bg-indigo-600 dark:bg-yellow-500 mx-auto rounded-full transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
          <p className={`text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto text-lg transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={`text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 mb-4 ${stat.color} dark:${stat.color === 'text-purple-600' ? 'text-yellow-400' : 'text-yellow-500'}`}>
                  {/* Note: Specific stat colors might need manual override for pure yellow theme, but keeping slightly varied accents is usually better. 
                      Let's stick to theme request "Yellow" accents. */}
                  <IconComponent className={`h-6 w-6 ${theme === 'dark' ? 'text-yellow-500' : ''}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-300">
                Passionate <span className="text-indigo-600 dark:text-yellow-500 transition-colors duration-300">Fullstack Developer</span>
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                <p>
                  With hands-on experience across backend systems, distributed architectures, and modern frontend frameworks, I specialize in building scalable, high-performance applications that solve real-world problems. From designing Kafka-driven data pipelines to developing full-stack applications using React, Django, and Node.js, I bring both depth and versatility to every project.
                </p>
                <p>
                  My journey began with competitive programming and grew into building production-grade systems from asynchronous data processing engines to containerized CI/CD pipelines and robust automated testing frameworks. I thrive in environments where performance, scalability, and clean architecture are priorities.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">What drives me:</h4>
              <div className="space-y-3">
                {[
                  'Designing scalable backend systems and distributed data pipelines',
                  'Writing optimized, maintainable, production-ready code',
                  'Automating processes to improve efficiency and reliability',
                  'Continuously learning and pushing technical boundaries',
                  'Collaborating to turn complex ideas into impactful products'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 dark:bg-yellow-500 rounded-full transition-colors duration-300"></div>
                    <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Feature cards */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <div className={`w-14 h-14 ${feature.color} dark:bg-yellow-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-7 w-7 text-white dark:text-gray-900" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-yellow-500 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Zap className="h-4 w-4 text-indigo-600 dark:text-yellow-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;