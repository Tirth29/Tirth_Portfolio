import React from 'react';

const Skills = () => {
  const frontendRow1 = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg' },
  ];

  const frontendRow2 = [
    { name: 'Angular', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg'},
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'Material UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg' },
    { name: 'Framer Motion', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg' },
  ];

  const backendRow1 = [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
    { name: 'Django', icon: 'https://www.liblogo.com/img-logo/dj3164d344-django-logo-django-logo-png-transparent-amp-svg-vector-freebie-supply.png' },
    { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
    { name: 'FastAPI', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg'},
  ];

  const backendRow2 = [
    { name: 'Kafka', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg' },
    { name: 'RabbitMQ', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg' },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
    { name: 'Celery', icon: 'https://tse4.mm.bing.net/th/id/OIP.1-9Mz21V2ILccS5zJ5zwjwHaHa?w=1200&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { name: 'REST APIs', icon: 'https://www.iconpacks.net/icons/free-icons-6/free-rest-api-blue-logo-icon-22098.png' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
  ];

  const devOpsRow1 = [
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'Oracle DB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg' },
    { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
    { name: 'AWS', icon:'https://pixelbag.net/wp-content/uploads/2021/12/AWS-Logo-svg.jpg'},
  ];

  const devOpsRow2 = [
     { name:'Docker',icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg'},
     { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg' },
     //{ name: 'Bamboo', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/atlassian/atlassian-original.svg' },
     { name: 'Podman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/podman/podman-original.svg' },
     { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
     { name:'GitHub', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'},
    ];

  const devOpsRow3 = [
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
    { name: 'Playwright', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
    { name: 'AWS S3', icon: 'https://freesvg.org/img/1554216196.png' },
    { name: 'vercel', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg'},
    { name: 'Netlify', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg'},
  ];

  const SkillCard = ({ name, icon }) => (
    <div className="flex items-center space-x-3 dark:bg-white bg-gray-50/50 dark:bg-gray-900/50 px-6 py-3 rounded-xl border border-gray-100 dark:border-gray-800 mx-3 min-w-max hover:bg-white dark:hover:bg-gray-900 hover:shadow-md hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300">
      <img src={icon} alt={name} className="h-6 w-6 object-contain" />
      <span className="text-gray-700 dark:text-gray-600 font-medium text-base">{name}</span>
    </div>
  );

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Skills & <span className="text-indigo-600 dark:text-yellow-500 transition-colors duration-300">Technologies</span>
          </h2>
          <div className="w-24 h-1.5 bg-indigo-600 dark:bg-yellow-500 mx-auto rounded-full mb-6 transition-colors duration-300"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed transition-colors duration-300">
            Crafting responsive, robust, and scalable applications with a modern tech stack.
          </p>
        </div>
      </div>

      <div className="flex flex-col space-y-12 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white dark:from-gray-950 to-transparent z-10 pointer-events-none transition-colors duration-300"></div>
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white dark:from-gray-950 to-transparent z-10 pointer-events-none transition-colors duration-300"></div>

        {/* Frontend Section */}
        <div className="flex flex-col space-y-4">
          <div className="px-4 md:px-8 text-gray-900 dark:text-white font-bold text-lg tracking-wide uppercase mb-2 text-center md:text-left transition-colors duration-300">
            Frontend
          </div>
          
          {/* Frontend Row 1 - Left */}
          <div className="relative w-full overflow-hidden pause-hover py-2">
            <div className="flex w-max animate-scroll">
              {[...frontendRow1, ...frontendRow1, ...frontendRow1, ...frontendRow1].map((skill, index) => (
                <SkillCard key={`f1-${index}`} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>

          {/* Frontend Row 2 - Right */}
          <div className="relative w-full overflow-hidden pause-hover py-2">
            <div className="flex w-max animate-scroll-reverse">
              {[...frontendRow2, ...frontendRow2, ...frontendRow2, ...frontendRow2].map((skill, index) => (
                <SkillCard key={`f2-${index}`} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        </div>

        {/* Backend Section */}
        <div className="flex flex-col space-y-4">
          <div className="px-4 md:px-8 text-gray-900 dark:text-white font-bold text-lg tracking-wide uppercase mb-2 text-center md:text-left transition-colors duration-300">
             Backend & Systems
          </div>

          {/* Backend Row 1 - Left */}
          <div className="relative w-full overflow-hidden pause-hover py-2">
            <div className="flex w-max animate-scroll ">
              {[...backendRow1, ...backendRow1, ...backendRow1, ...backendRow1].map((skill, index) => (
                <SkillCard key={`b1-${index}`} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>

          {/* Backend Row 2 - Right */}
          <div className="relative w-full overflow-hidden pause-hover py-2">
            <div className="flex w-max animate-scroll-reverse">
              {[...backendRow2, ...backendRow2, ...backendRow2, ...backendRow2].map((skill, index) => (
                <SkillCard key={`b2-${index}`} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        </div>

        {/* DevOps Section */}
        <div className="flex flex-col space-y-4">
          <div className="px-4 md:px-8 text-gray-900 dark:text-white font-bold text-lg tracking-wide uppercase mb-2 text-center md:text-left transition-colors duration-300">
             Databases, DevOps & Cloud
          </div>

          {/* DevOps Row 1 - Left */}
          <div className="relative w-full overflow-hidden pause-hover py-2">
            <div className="flex w-max animate-scroll ">
              {[...devOpsRow1, ...devOpsRow1, ...devOpsRow1, ...devOpsRow1].map((skill, index) => (
                <SkillCard key={`d1-${index}`} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>

          {/* DevOps Row 2 - Right */}
          <div className="relative w-full overflow-hidden pause-hover py-2">
            <div className="flex w-max animate-scroll-reverse">
              {[...devOpsRow2, ...devOpsRow2, ...devOpsRow2, ...devOpsRow2].map((skill, index) => (
                <SkillCard key={`d2-${index}`} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>

          {/* DevOps Row 3 - Left */}
          <div className="relative w-full overflow-hidden pause-hover py-2">
            <div className="flex w-max animate-scroll ">
              {[...devOpsRow3, ...devOpsRow3, ...devOpsRow3, ...devOpsRow3].map((skill, index) => (
                <SkillCard key={`d3-${index}`} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;