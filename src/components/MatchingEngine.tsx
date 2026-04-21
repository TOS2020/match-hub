import React, { useState } from 'react';
import { INITIAL_PLANS, INITIAL_EXPERTS } from '../data';
import type { PlanStrategy, Expert } from '../data';
import AlignmentEvidence from './AlignmentEvidence';

const MatchingEngine: React.FC = () => {
  const [viewMode, setViewMode] = useState<'automated' | 'specialized'>('automated');
  const [selectedPlanId, setSelectedPlanId] = useState<string>(INITIAL_PLANS[0].id);
  const [evidenceData, setEvidenceData] = useState<{ plan: PlanStrategy, expert: Expert, score: number } | null>(null);

  const calculateMatch = (plan: PlanStrategy, expert: Expert) => {
    const planKeywords = plan.keywords.map(k => k.toLowerCase());
    const expertExpertise = expert.expertise.map(e => e.toLowerCase());
    
    const matches = expertExpertise.filter(exp => 
      planKeywords.some(pk => pk.includes(exp) || exp.includes(pk))
    );
    
    const score = Math.round((matches.length / Math.max(planKeywords.length, 1)) * 100);
    return { score, matches };
  };

  const getFilteredMatchesForPlan = (plan: PlanStrategy) => {
    return INITIAL_EXPERTS
      .map(expert => ({ expert, ...calculateMatch(plan, expert) }))
      .filter(m => m.score > 0) // Filter out 0% matches
      .sort((a, b) => b.score - a.score);
  };

  const selectedPlan = INITIAL_PLANS.find(p => p.id === selectedPlanId);
  const specializedMatches = selectedPlan ? getFilteredMatchesForPlan(selectedPlan) : [];

  return (
    <div className="portfolio-registry animate-in">
      <div className="registry-header">
        <h2>🎯 Requirement Matching Engine</h2>
        <p>Aligning strategic portfolio requirements with registered expert profiles.</p>
      </div>

      <div className="view-toggle-container" style={{ marginBottom: '2rem' }}>
        <button 
          className={`tab-btn ${viewMode === 'automated' ? 'active' : ''}`}
          onClick={() => setViewMode('automated')}
        >
          🤖 Automated Alignment
        </button>
        <button 
          className={`tab-btn ${viewMode === 'specialized' ? 'active' : ''}`}
          onClick={() => setViewMode('specialized')}
        >
          🔍 Specialized Selection
        </button>
      </div>

      {viewMode === 'automated' ? (
        <div className="matching-grid">
          {INITIAL_PLANS.map(plan => {
            const results = getFilteredMatchesForPlan(plan);
            if (results.length === 0) return null; // Don't show plans with no matches
            
            return (
              <div key={plan.id} className="match-card multi-match-card">
                <div className="match-card-header">
                  <h4>{plan.title}</h4>
                  <span className="expert-count-tag">{results.length} Matches</span>
                </div>
                
                <div className="auto-matches-list">
                  {results.map(({ expert, score }) => (
                    <div key={expert.id} className="auto-match-row">
                      <div className="auto-match-info">
                        <span className="auto-match-name">{expert.name}</span>
                        <span className="auto-match-score">{score}%</span>
                      </div>
                      <button 
                        className="mini-evidence-btn"
                        onClick={() => setEvidenceData({ plan, expert, score })}
                      >
                        Evidence
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="specialized-container">
          <div className="plan-selector">
            <label>Select Portfolio Plan</label>
            <select value={selectedPlanId} onChange={(e) => setSelectedPlanId(e.target.value)}>
              {INITIAL_PLANS.map(p => (
                <option key={p.id} value={p.id}>{p.title}</option>
              ))}
            </select>
          </div>

          <div className="ranked-experts-list" style={{ marginTop: '2rem' }}>
            <span className="label">Eligible Experts ({specializedMatches.length} Found):</span>
            {specializedMatches.length > 0 ? (
              specializedMatches.map(({ expert, score }) => (
                <div key={expert.id} className="ranked-expert-row simplified-row">
                  <div className="rank-score">{score}%</div>
                  <div className="expert-info">
                    <div className="name">{expert.name}</div>
                  </div>
                  <button 
                    className="add-btn" 
                    style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}
                    onClick={() => setEvidenceData({ plan: selectedPlan!, expert, score })}
                  >
                    Alignment View
                  </button>
                </div>
              ))
            ) : (
              <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                No experts meet the requirements for this portfolio yet.
              </div>
            )}
          </div>
        </div>
      )}

      {evidenceData && (
        <AlignmentEvidence 
          plan={evidenceData.plan}
          expert={evidenceData.expert}
          matchScore={evidenceData.score}
          onClose={() => setEvidenceData(null)}
        />
      )}
    </div>
  );
};

export default MatchingEngine;
