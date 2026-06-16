import React, { useState, useEffect } from 'react';
import './Recommendations.css';

type Recommendation = {
  name: string;
  role: string;
  date: string;
  text: string;
};

const Recommendations: React.FC = () => {
  const [recs, setRecs] = useState<Recommendation[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<Recommendation>({
    name: '',
    role: '',
    date: new Date().toLocaleDateString(),
    text: '',
  });

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recommendations');
    if (saved) setRecs(JSON.parse(saved));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('recommendations', JSON.stringify(recs));
  }, [recs]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.text) {
      alert('Name and message are required.');
      return;
    }
    setRecs([form, ...recs]);
    setForm({
      name: '',
      role: '',
      date: new Date().toLocaleDateString(),
      text: '',
    });
    setShowModal(false);
  };

  return (
    <div className="timeline-container">
      <h2 className="timeline-title">🗣️ Recommendations</h2>

      {recs.length === 0 ? (
        <div className="recommendation-card">
          <p>
           Sadly , Nobody has recommended Me yet… 😅 But you can be the first one to do so. It will make me happy 🥺!
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, width: '100%' }}>
          {recs.map((r, i) => (
            <div className="recommendation-card" key={i}>
              <div className="recommendation-header">
                <div>
                  <h3>{r.name}</h3>
                  <p>{r.role}</p>
                  <p className="date">{r.date}</p>
                </div>
              </div>
              <div className="recommendation-body">
                <p>{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <button className="download-btn" onClick={() => setShowModal(true)} style={{ marginTop: '20px' }}>
        ➕ Leave a Recommendation
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Leave a Recommendation</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Your Role (e.g., Collaborator, Client)"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
              />
              <textarea
                placeholder="Write your message..."
                value={form.text}
                onChange={(e) => setForm({ ...form, text: e.target.value })}
              />
              <div className="modal-actions">
                <button type="submit" className="download-btn">Save</button>
                <button type="button" className="view-btn" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recommendations;
