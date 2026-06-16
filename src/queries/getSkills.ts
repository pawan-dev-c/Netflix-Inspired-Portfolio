// src/queries/getSkills.ts
export async function getSkills() {
  return [
    { name: "Java", category: "Programming", description: "Backend development, OOP, Spring Boot", icon: "java" },
    { name: "Node.js", category: "Backend", description: "Building REST APIs with Express", icon: "node" },
    { name: "React", category: "Frontend", description: "Component-based UI development", icon: "react" },
    { name: "Tailwind CSS", category: "Frontend", description: "Utility-first CSS framework", icon: "tailwind" },
    { name: "Python", category: "Programming", description: "Automation & ML basics", icon: "python" },
    { name: "C++", category: "Programming", description: "Problem-solving & DSA", icon: "cpp" },
    { name: "SQL", category: "Database", description: "Database design & queries", icon: "sql" },
    { name: "Editing", category: "Creative", description: "Video editing & graphic design", icon: "edit" },
  ];
}
