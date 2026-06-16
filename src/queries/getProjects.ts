// src/queries/getProjects.ts
export async function getProjects() {
  return [
    {
      title: "Netflix-Inspired Portfolio",
      description: "A personal portfolio website styled like Netflix.",
      techUsed: "React, Tailwind, TypeScript",
      image: { url: "/images/coming-soon.png" }, // ✅ must be { url: string }
    },
    {
      title: "Backend APIs",
      description: "Spring Boot and Node.js APIs (coming soon).",
      techUsed: "Java, Spring Boot, Node.js",
      image: { url: "/images/coming-soon.png" },
    },
  ];
}
