import React, { useState } from 'react';
import { INITIAL_EXPERTS } from '../data';
import type { Expert } from '../data';

const ExpertDatabase: React.FC = () => {
  const [experts, setExperts] = useState<Expert[]>(INITIAL_EXPERTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newExpert, setNewExpert] = useState({ name: '', title: '', expertise: '', bio: '' });

  const filteredExperts = experts.filter(exp => 
    exp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.expertise.some(e => e.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleAddExpert = (e: React.FormEvent) => {
    e.preventDefault();
    const expert: Expert = {
      id: Math.random().toString(36).substr(2, 9),
      name: newExpert.name,
      title: newExpert.title,
      expertise: newExpert.expertise.split(',').map(s => s.trim()),
      bio: newExpert.bio
    };
    setExperts([expert, ...experts]);
    setShowAddModal(false);
    setNewExpert({ name: '', title: '', expertise: '', bio: '' });
  };

  return (
    <div className="portfolio-registry animate-in">
      <div className="registry-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2>👥 Expert Database</h2>
          <p>Repository of research specialists, their CVs, and strategic expertise tags.</p>
        </div>
        <button className="add-btn" onClick={() => setShowAddModal(true)}>
          ➕ Register Expert
        </button>
      </div>

      <div className="controls">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="Search experts by name or expertise (e.g. AI, Arctic)..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="plan-grid">
        {filteredExperts.map(expert => (
          <div key={expert.id} className="plan-card expert-card">
            <div className="plan-card-header">
              <h3>{expert.name}</h3>
              <span className="expert-tag-pill">Expert</span>
            </div>
            <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary)' }}>{expert.title}</div>
            <p className="plan-summary" style={{ fontSize: '0.9rem' }}>{expert.bio}</p>
            <div className="plan-keywords">
              {expert.expertise.map(exp => <span key={exp} className="keyword-tag expertise-tag">#{exp}</span>)}
            </div>
          </div>
        ))}
      </div>

      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Register New Research Expert</h3>
            <form onSubmit={handleAddExpert}>
              <div className="form-group">
                <label>Full Name</label>
                <input required value={newExpert.name} onChange={e => setNewExpert({...newExpert, name: e.target.value})} placeholder="e.g. Dr. Jane Smith" />
              </div>
              <div className="form-group">
                <label>Professional Title</label>
                <input required value={newExpert.title} onChange={e => setNewExpert({...newExpert, title: e.target.value})} placeholder="e.g. Senior Researcher, AI & Ethics" />
              </div>
              <div className="form-group">
                <label>Upload CV (PDF/Word)</label>
                <input type="file" multiple={false} accept=".pdf,.doc,.docx" />
              </div>
              <div className="form-group">
                <label>Key Expertise Tags (Comma separated)</label>
                <input required value={newExpert.expertise} onChange={e => setNewExpert({...newExpert, expertise: e.target.value})} placeholder="Climate, Data Science, Norway..." />
              </div>
              <div className="form-group">
                <label>Bio / CV Summary</label>
                <textarea required value={newExpert.bio} onChange={e => setNewExpert({...newExpert, bio: e.target.value})} rows={3} />
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button type="submit" className="add-btn" style={{ flex: 1 }}>Save Profile</button>
                <button type="button" onClick={() => setShowAddModal(false)} className="cancel-btn" style={{ flex: 1 }}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpertDatabase;
