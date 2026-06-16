import React, { useEffect, useState } from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaAngular, FaGithub, FaGitlab, FaGoogle, FaJava, FaJenkins, FaMicrosoft, FaPython, FaVuejs } from 'react-icons/fa';
import { SiRubyonrails, SiPostgresql, SiMongodb, SiMaterialdesign, SiHtml5, SiCss3, SiJquery, SiAwsamplify, SiFirebase, SiTerraform, SiArgo } from 'react-icons/si';
import { GrDeploy, GrKubernetes } from "react-icons/gr";

type Project = {
  title: string;
  description: string;
  techUsed: string;
  image: string;
  video?: string; // optional video link for editing projects
};

const techIcons: { [key: string]: JSX.Element } = {
  "ReactJS": <FaReact />,
  "NodeJS": <FaNodeJs />,
  "TypeScript": <FaReact />,
  "GraphQL": <FaDatabase />,
  "Tailwind CSS": <SiCss3 />,
  "AWS": <FaAws />,
  "PostgreSQL": <SiPostgresql />,
  "MongoDB": <SiMongodb />,
  "Java": <FaJava />,
  "Spring Boot": <FaJava />,
  "Python": <FaPython />,
  "Docker": <FaDocker />,
  "GitHub": <FaGithub />,
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // ✅ Replace with actual fetch later if needed
    const data: Project[] = [
      {
        title: "🎬 Netflix-Like Portfolio",
        description:
          "A Netflix-inspired portfolio built with React, TypeScript, Node.js, and GraphQL. Features dynamic browsing, profile system, skills, certifications, and a sleek dark theme with animations.",
        techUsed: "ReactJS, TypeScript, NodeJS, GraphQL, Tailwind CSS",
        image: "/projects/netflix-portfolio.jpg", // ✅ place image in public/projects/
      },
      {
        title: "🎥 Editing Project",
        description:
          "Portfolio-style showcase of my video editing journey. Built with Premiere Pro, After Effects, DaVinci Resolve, and Photoshop. Includes cinematic edits and YouTube-ready content.",
        techUsed: "Premiere Pro, After Effects, Photoshop, DaVinci Resolve",
        image: "/projects/editing-thumbnail.png", // ✅ place thumbnail in public/projects/
        video: "", // replace with your actual editing video
      },
      {
        title: "🚀 More Projects Coming Soon",
        description:
          "Stay tuned for more software projects, web apps, and creative showcases that are currently under development.",
        techUsed: "Java, Python, SQL, AWS",
        image: "/projects/coming-soon.jpeg", // ✅ placeholder image
      },
    ];
    setProjects(data);
  }, []);

  if (projects.length === 0) return <div>Loading...</div>;

  return (
    <div className="projects-container">
      <h2 className="projects-title">📂 My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>
              {project.video && (
                <a
                  href={project.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-btn"
                  style={{ marginTop: '10px', display: 'inline-block' }}
                >
                  ▶ Watch Video
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
