// src/pages/Skills.tsx
import React, { useEffect, useState } from 'react';
import './Skills.css';
import { getSkills } from '../queries/getSkills';

import { 
  FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaJava, FaPython 
} from 'react-icons/fa';
import { 
  SiRubyonrails, SiTypescript, SiPostgresql, SiMysql, 
  SiKubernetes, SiGooglecloud, SiSpringboot, SiPhp, 
  SiNetlify, SiHeroku, SiHtml5, SiCss3, SiCplusplus, 
  SiAdobeaftereffects, SiAdobepremierepro, 
  SiMicrosoftword, SiMicrosoftexcel, SiMicrosoftpowerpoint 
} from 'react-icons/si';

import { Skill } from '../types';

const iconMap: { [key: string]: JSX.Element } = {
  // Programming
  FaJava: <FaJava />,
  FaPython: <FaPython />,
  SiCplusplus: <SiCplusplus />,
  SiPhp: <SiPhp />,
  FaGitAlt: <FaGitAlt />,
  SiTypescript: <SiTypescript />,

  // Frontend
  FaReact: <FaReact />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <SiCss3 />,

  // Backend
  FaNodeJs: <FaNodeJs />,
  SiSpringboot: <SiSpringboot />,
  SiRubyonrails: <SiRubyonrails />,

  // Database
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,

  // Cloud & DevOps
  FaAws: <FaAws />,
  FaDocker: <FaDocker />,
  SiKubernetes: <SiKubernetes />,
  SiGooglecloud: <SiGooglecloud />,
  SiHeroku: <SiHeroku />,
  SiNetlify: <SiNetlify />,

  // Creative
  SiAdobeaftereffects: <SiAdobeaftereffects />,
  SiAdobepremierepro: <SiAdobepremierepro />,

  // Productivity (MS Office apps)
  SiMicrosoftword: <SiMicrosoftword />,
  SiMicrosoftexcel: <SiMicrosoftexcel />,
  SiMicrosoftpowerpoint: <SiMicrosoftpowerpoint />,
};

const Skills: React.FC = () => {
  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  useEffect(() => {
    async function fetchSkills() {
      const data = await getSkills();

      // 🔥 Augment fetched skills with your custom ones
      const customSkills: Skill[] = [
        // Programming
        { name: "Java", description: "OOP, backend apps", category: "Programming", icon: "FaJava" },
        { name: "Python", description: "Automation, ML, scripting", category: "Programming", icon: "FaPython" },
        { name: "C++", description: "High-performance apps", category: "Programming", icon: "SiCplusplus" },
        { name: "PHP", description: "Backend web apps", category: "Programming", icon: "SiPhp" },

        // Frontend
        { name: "React", description: "Frontend library", category: "Frontend", icon: "FaReact" },
        { name: "HTML5", description: "Structure of web", category: "Frontend", icon: "SiHtml5" },
        { name: "CSS3", description: "Styling the web", category: "Frontend", icon: "SiCss3" },

        // Backend
        { name: "Node.js", description: "JS runtime for backend", category: "Backend", icon: "FaNodeJs" },
        { name: "Spring Boot", description: "Java backend framework", category: "Backend", icon: "SiSpringboot" },
        { name: "Ruby on Rails", description: "Rapid web backend", category: "Backend", icon: "SiRubyonrails" },

        // Database
        { name: "PostgreSQL", description: "Relational database", category: "Database", icon: "SiPostgresql" },
        { name: "MySQL", description: "Popular SQL database", category: "Database", icon: "SiMysql" },

        // Creative
        { name: "Premiere Pro", description: "Video editing", category: "Creative", icon: "SiAdobepremierepro" },
        { name: "After Effects", description: "Motion graphics", category: "Creative", icon: "SiAdobeaftereffects" },

        // Productivity
        { name: "Word", description: "Docs and reports", category: "Productivity", icon: "SiMicrosoftword" },
        { name: "Excel", description: "Data analysis", category: "Productivity", icon: "SiMicrosoftexcel" },
        { name: "PowerPoint", description: "Presentations", category: "Productivity", icon: "SiMicrosoftpowerpoint" },

        // Web Development (new category)
        { name: "Full-stack Web Dev", description: "Frontend + backend projects", category: "Web Development", icon: "FaReact" },
      ];

      setSkillsData([...data, ...customSkills]);
    }

    fetchSkills();
  }, []);

  if (skillsData.length === 0) return <div>Loading...</div>;

  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter: any, i: number) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
