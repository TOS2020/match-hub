import React, { useState } from 'react';
import { INITIAL_PLANS } from '../data';
import type { PlanStrategy } from '../data';

const PlanSummaries: React.FC = () => {
  const [plans, setPlans] = useState<PlanStrategy[]>(INITIAL_PLANS);
  const [lang, setLang] = useState<'NO' | 'EN'>('NO');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newPlan, setNewPlan] = useState({ title: '', keywords: '', summary: '' });

  const handleDeletePlan = (id: string) => {
    if (window.confirm('Are you sure you want to delete this portfolio strategy?')) {
      setPlans(plans.filter(p => p.id !== id));
    }
  };

  const filteredData = plans.filter(plan => 
    plan.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plan.keywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleAddPlan = (e: React.FormEvent) => {
    e.preventDefault();
    const plan: PlanStrategy = {
      id: Math.random().toString(36).substr(2, 9),
      title: newPlan.title,
      goal: 'Manually added strategy document',
      summaryNo: newPlan.summary,
      summaryEn: newPlan.summary, // Simple mock for demo
      keywords: newPlan.keywords.split(',').map(s => s.trim()),
      link: '#',
      evidenceQuotes: []
    };
    setPlans([plan, ...plans]);
    setShowAddModal(false);
    setNewPlan({ title: '', keywords: '', summary: '' });
  };

  return (
    <div className="portfolio-registry animate-in">
      <div className="registry-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2>📜 Portfolio Strategies</h2>
          <p>Analyzing the official strategy documents (Overordnede planer) for 2025-2028.</p>
        </div>
        <button className="add-btn" onClick={() => setShowAddModal(true)}>
          ➕ Add New Plan
        </button>
      </div>

      <div className="controls">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="Search plans or keywords..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="lang-toggle-container">
          <button className={`lang-btn ${lang === 'NO' ? 'active' : ''}`} onClick={() => setLang('NO')}>🇳🇴 Norsk</button>
          <button className={`lang-btn ${lang === 'EN' ? 'active' : ''}`} onClick={() => setLang('EN')}>🇬🇧 English</button>
        </div>
      </div>

      <div className="plan-grid">
        {filteredData.map(plan => (
          <div key={plan.id} className="plan-card">
            <div className="plan-card-header">
              <h3>{plan.title}</h3>
              <div className="card-actions">
                {plan.link !== '#' && (
                  <a href={plan.link} target="_blank" rel="noopener noreferrer" className="pdf-link">PDF ↗</a>
                )}
                <button className="delete-card-btn" onClick={() => handleDeletePlan(plan.id)} title="Delete Strategy">
                  🗑️
                </button>
              </div>
            </div>
            <div className="plan-goal"><strong>Goal:</strong> {plan.goal}</div>
            <div className="plan-summary">{lang === 'NO' ? plan.summaryNo : plan.summaryEn}</div>
            <div className="plan-keywords">
              {plan.keywords.map(kw => <span key={kw} className="keyword-tag">#{kw}</span>)}
            </div>
          </div>
        ))}
      </div>

      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Add New Portfolio Plan</h3>
            <form onSubmit={handleAddPlan}>
              <div className="form-group">
                <label>Plan Title</label>
                <input required value={newPlan.title} onChange={e => setNewPlan({...newPlan, title: e.target.value})} placeholder="e.g. Circular Economy Plan 2027" />
              </div>
              <div className="form-group">
                <label>Upload PDF (Simulated)</label>
                <input type="file" multiple={false} accept=".pdf" />
              </div>
              <div className="form-group">
                <label>Extracted Keywords (Comma separated)</label>
                <input required value={newPlan.keywords} onChange={e => setNewPlan({...newPlan, keywords: e.target.value})} placeholder="AI, Sustainability, Arctic..." />
              </div>
              <div className="form-group">
                <label>Brief Summary</label>
                <textarea required value={newPlan.summary} onChange={e => setNewPlan({...newPlan, summary: e.target.value})} rows={3} />
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button type="submit" className="add-btn" style={{ flex: 1 }}>Save Plan</button>
                <button type="button" onClick={() => setShowAddModal(false)} className="cancel-btn" style={{ flex: 1 }}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanSummaries;
