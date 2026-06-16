// src/queries/getTimeline.ts
import { TimelineItem } from '../types';

export async function getTimeline(): Promise<TimelineItem[]> {
  return [
    {
      timelineType: "work",
      name: "Started Editing",
      title: "KineMaster Beginner",
      techStack: "KineMaster Mobile App",
      summaryPoints: [
        "Began editing journey on mobile in 2017.",
        "Experimented with basic cuts, transitions, and effects."
      ],
      dateRange: "2017",
    },
    {
      timelineType: "work",
      name: "Professional Editing Growth",
      title: "Freelance / Creator Projects",
      techStack: "After Effects, Premiere Pro, DaVinci Resolve, Photoshop",
      summaryPoints: [
        "Worked with YouTubers, creators, and ad agencies.",
        "Handled video edits, graphics, and campaigns."
      ],
      dateRange: "2022 – 2024",
    },
    {
      timelineType: "education",
      name: "Board Exams (PCM + CS)",
      title: "12th Standard",
      techStack: "Physics, Chemistry, Math, Computer Science",
      summaryPoints: ["Completed 12th Boards with PCMCAS subjects."],
      dateRange: "March 2025",
    },
    {
      timelineType: "education",
      name: "B.Tech CSE (AI)",
      title: "Starting Engineering",
      techStack: "Java, Python, Node.js",
      summaryPoints: ["Beginning B.Tech with focus on Computer Science and AI."],
      dateRange: "September 2025 – Present",
    },
    {
      timelineType: "work",
      name: "Backend Developer Intern",
      title: "Internship (Coming Soon)",
      techStack: "Java, Node.js",
      summaryPoints: ["Upcoming internship opportunities to gain industry experience."],
      dateRange: "Coming Soon",
    },
  ];
}
