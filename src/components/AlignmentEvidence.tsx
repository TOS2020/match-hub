import React from 'react';
import type { PlanStrategy, Expert } from '../data';

interface EvidenceProps {
  plan: PlanStrategy;
  expert: Expert;
  matchScore: number;
  onClose: () => void;
}

const AlignmentEvidence: React.FC<EvidenceProps> = ({ plan, expert, matchScore, onClose }) => {
  return (
    <div className="modal-overlay evidence-overlay">
      <div className="evidence-container animate-in">
        <header className="evidence-header">
          <div className="header-info">
            <h2>Alignment Verification: {expert.name}</h2>
            <p>Strategic alignment with <strong>{plan.title}</strong> — <span className="match-highlight">{matchScore}% Match Score</span></p>
          </div>
          <button className="close-btn" onClick={onClose}>✕ Close</button>
        </header>

        <div className="evidence-split-view">
          {/* Left Panel: PDF Viewer */}
          <div className="pdf-panel">
            <div className="panel-label">📜 Strategy Document (Overordnet Plan)</div>
            <iframe 
              src={`https://docs.google.com/viewer?url=${encodeURIComponent(plan.link)}&embedded=true`} 
              className="pdf-iframe" 
              title="Portfolio Plan"
              onError={(e) => console.error("Iframe load error", e)}
            />
            <div className="pdf-fallback-link">
              <a href={plan.link} target="_blank" rel="noopener noreferrer">Open Original PDF in New Tab ↗</a>
            </div>
          </div>

          {/* Right Panel: Evidence Snippets */}
          <div className="proof-panel">
            <div className="panel-label">🔍 Strategic Alignment Proof</div>
            <div className="proof-scroll-area">
              <div className="expert-mini-bio">
                <span className="label">Expert Profile:</span>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>{expert.name}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{expert.bio}</p>
              </div>

              <div className="matching-keywords-box">
                <span className="label">Strategic Overlap Detected:</span>
                <div className="plan-keywords" style={{ marginTop: '0.5rem' }}>
                  {expert.expertise.filter(e => 
                    plan.keywords.some(pk => pk.toLowerCase().includes(e.toLowerCase()) || e.toLowerCase().includes(pk.toLowerCase()))
                  ).map(tag => (
                    <span key={tag} className="keyword-tag match-tag-verified">✅ {tag}</span>
                  ))}
                </div>
              </div>

              <h3 style={{ marginTop: '2rem' }}>Verified Contextual Evidence:</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                The following strategic goals from the <strong>{plan.title}</strong> document directly align with the expert's profile:
              </p>
              <div className="quotes-list">
                {plan.evidenceQuotes.map((quote, idx) => (
                  <div key={idx} className="evidence-quote-card">
                    <div className="quote-icon">🎯</div>
                    <div className="quote-text">{quote}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="expert-action-footer">
              <button className="add-btn" style={{ width: '100%' }}>Initiate Strategic Contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlignmentEvidence;
