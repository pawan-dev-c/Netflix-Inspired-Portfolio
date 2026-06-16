// src/queries/getProfileBanner.ts
export async function getProfileBanner() {
  return {
    backgroundImage: { url: "/images/banner-bg.jpg" }, // put an image in public/images
    headline: "Pawan Choudhary-Backend Developer",
    resumeLink: { url: "/resume.pdf" }, // put resume.pdf in public/
    linkedinLink: "https://www.linkedin.com/in/pawan-choudhary-a61a61383/",
   profileSummary: `I’m Pawan Choudhary, an aspiring Backend Developer and future Full Stack Software Engineer
with a deep passion for problem-solving and building scalable applications.  

I love working with Java, Node.js, SQL, and exploring AI projects like my own Jarvis assistant.  
This portfolio is not just my code, but my story, vision, and ambition.`

  };
}
