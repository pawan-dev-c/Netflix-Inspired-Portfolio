// src/pages/WorkExperience.tsx
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';

const WorkExperience: React.FC = () => {
  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>

        {/* 🎬 Editing Journey Start */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Started Editing</h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            Began my editing journey in 2017 with KineMaster, experimenting with mobile edits and
            learning the basics of video creation.
          </p>
        </VerticalTimelineElement>

        {/* 🚀 Professional Editing */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2024"
          contentStyle={{ background: 'rgb(240, 240, 240)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(240, 240, 240)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Professional Editing Work</h3>
          <h4 className="vertical-timeline-element-subtitle">YouTubers, Creators & Ad Agencies</h4>
          <p>
            Worked with multiple big creators, YouTubers, and ad agencies.  
            Transitioned to industry-level tools: <strong>After Effects, Premiere Pro, DaVinci Resolve, Photoshop</strong>.
          </p>
        </VerticalTimelineElement>

        {/* 🎓 12th Boards */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="March 2025"
          contentStyle={{ background: 'rgb(255, 224, 230)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(255, 224, 230)' }}
          iconStyle={{ background: 'rgb(255, 160, 200)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">12th Boards (PCMCAS)</h3>
          <h4 className="vertical-timeline-element-subtitle">CBSE</h4>
          <p>
            Completed Class 12 Boards in March 2025 with focus on Physics, Chemistry, Maths, Computer Science.
          </p>
        </VerticalTimelineElement>

        {/* 🎓 BTech */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Sept 2025 - Present"
          contentStyle={{ background: 'rgb(255, 224, 230)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(255, 224, 230)' }}
          iconStyle={{ background: 'rgb(255, 160, 200)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">B.Tech in CSE (AI/ML Specialization)</h3>
          <h4 className="vertical-timeline-element-subtitle">Starting from September 2025</h4>
          <p>
            Beginning my BTech journey in Computer Science & Artificial Intelligence & Machine Learning. Excited to dive deeper into AI, 
            software engineering, and advanced computing.
          </p>
        </VerticalTimelineElement>

        {/* 🛠️ Upcoming Internships */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Coming Soon"
          contentStyle={{ background: 'rgb(240, 240, 240)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(240, 240, 240)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Internships</h3>
          <h4 className="vertical-timeline-element-subtitle">Software / AI / Editing</h4>
          <p>
            Preparing for internships in tech and creative fields.  
            Continuously working on editing projects and software builds to strengthen my portfolio.
          </p>
        </VerticalTimelineElement>

        {/* ⭐ Ending */}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
