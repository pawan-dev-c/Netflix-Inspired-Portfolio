import React, { useEffect, useState } from 'react';
import './WorkPermit.css';
import { getWorkPermit } from '../queries/getWorkPermit';
import { WorkPermit as IWorkPermit } from '../types';

const WorkPermit: React.FC = () => {
  const [workPermitData, setWorkPermitData] = useState<IWorkPermit | null>(null);

  useEffect(() => {
    async function fetchWorkPermitData() {
      const data = await getWorkPermit();
      setWorkPermitData(data);
    }
    fetchWorkPermitData();
  }, []);

  if (!workPermitData) return <div>Loading...</div>;

  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">🌍 Work Permit</h2>
        <p className="work-permit-summary">
          I am currently a <strong>citizen of India</strong> 🇮🇳, which allows me to
          work and build my career here. Being born and raised in India has given me
          the opportunity to grow both personally and professionally in this vibrant nation. 🌟
        </p>
        <p className="additional-info">
          At the same time, I am <strong>open to opportunities abroad with sponsorship</strong> ✈️, 
          and willing to contribute my skills and dedication to a foreign nation.  
          My goal is to gain valuable international exposure while continuing to evolve 
          in my career journey. 🚀
        </p>
      </div>
    </div>
  );
};

export default WorkPermit;
