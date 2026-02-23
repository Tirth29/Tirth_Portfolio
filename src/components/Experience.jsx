import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'E2open',
    role: 'Associate Software Engineer',
    duration: '08/2025 - 01/2026',
    points: [
      'Enhanced a Java and FastAPI backend, handling feature requests, bug fixes, and system improvements; managed Kafka-driven distributed data pipelines to ensure high-throughput and data integrity for ETL processes.',
      'Designed and implemented an end-to-end automated testing framework (API + UI) using PyTest and Playwright, covering 200+ unique test cases across 5 browsers and 6 user roles, eliminating 90% manual testing effort.',
      'Built a fully containerized test execution flow with automated setup and teardown, running locally via Podman + PowerShell Script and in Jenkins CI/CD using Docker and Groovy pipelines.',
    ],
  },
  {
    company: 'Augean Enterprise Solution',
    role: 'Backend Developer',
    duration: '01/2025 - 07/2025',
    points: [
      'Developed a high-performance data migration engine using Django, Celery and Redis for asynchronous processing, enabling bulk import of 10,000+ records with automated validation and real-time error logging.',
      'Architected a full-scale procurement and inventory lifecycle system using Django REST Framework, managing complex flows for orders, GRNs, and returns while tracking stock at both packet and piece levels.',
      'Diagnosed and resolved 10+ high-priority production bugs and generated 15+ analytical reports to drive data-informed business decisions.',
      'Optimized database performance by implementing select_related/prefetch_related to eliminate N+1 query problems, significantly reducing latency for complex transaction and report queries.',
    ],
  },
  {
    company: 'Quantasis Solution',
    role: 'Frontend Developer Intern',
    duration: '06/2024 - 08/2024',
    points: [
      'Engineered a responsive, end-to-end e-commerce platform using Angular, integrating complex state management for shopping carts and order tracking to enhance user conversion rates.',
    ],
  },
  {
    company: 'WictroniX',
    role: 'Web Developer Intern',
    duration: '10/2023 - 01/2024',
    points: [
      'Atlanz web application: Developed both the frontend and backend of a traffic analysis web application using React, Django, and connected machine learning models to the backend.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Work <span className="text-[rgba(79,70,229,0.8)] dark:text-[#f5c518]">Experience</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          My professional journey building scalable systems and impactful products
        </p>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-[rgba(79,70,229,0.2)] dark:bg-[#f5c518]/30" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-start mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[rgba(79,70,229,0.8)] dark:bg-[#f5c518] rounded-full border-4 border-background z-10" />

              <div
                className={`ml-8 md:ml-0 md:w-[45%] ${
                  index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'
                }`}
              >
                <div className="bg-card border border-border rounded-xl p-6 hover:border-[rgba(79,70,229,0.4)] dark:hover:border-[#f5c518]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(79,70,229,0.1)] dark:hover:shadow-[#f5c518]/5">
                  <div className="flex items-center gap-2 text-[rgba(79,70,229,0.8)] dark:text-[#f5c518] text-sm font-medium mb-2">
                    <Calendar size={14} />
                    <span>{exp.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Briefcase size={14} />
                    <span>{exp.company}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                        <span className="text-[rgba(79,70,229,0.8)] dark:text-[#f5c518] mt-1.5 shrink-0">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;