export async function getContactMe() {
  return {
    profilePicture: { url: "/images/profile.jpg" }, // ✅ must be { url: string }
    name: "Pawan Choudhary",
    title: "Backend Developer (Aspiring)",
    summary: "Passionate about Java, Node.js, and backend systems.",
    companyUniversity: "Future B.Tech CSE (AI) College",
    linkedinLink: "https://www.linkedin.com/in/pawan-choudhary-a61a61383/",
    githubLink: "https://github.com/pawan-dev-c", // ✅ Added GitHub
    email: "sendmethosebuck@gmail.com",
    phoneNumber: "+91 7982970464",
  };
}
