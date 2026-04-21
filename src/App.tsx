import { useState } from 'react'
import PlanSummaries from './components/PlanSummaries'
import ExpertDatabase from './components/ExpertDatabase'
import MatchingEngine from './components/MatchingEngine'

function App() {
  const [activeTab, setActiveTab] = useState<'plans' | 'experts' | 'matching'>('plans')

  return (
    <div className="app-container">
      <nav className="sidebar">
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: 'var(--primary)' }}>#</span> MatchHub
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Research Strategy & Experts</p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <p style={{ textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '1rem', letterSpacing: '0.05em' }}>Matching Suite</p>
          <div 
            className={`nav-item ${activeTab === 'plans' ? 'active' : ''}`}
            onClick={() => setActiveTab('plans')}
          >
            📜 Portfolio Strategies
          </div>
          <div 
            className={`nav-item ${activeTab === 'experts' ? 'active' : ''}`}
            onClick={() => setActiveTab('experts')}
          >
            👥 Expert Database
          </div>
          <div 
            className={`nav-item ${activeTab === 'matching' ? 'active' : ''}`}
            onClick={() => setActiveTab('matching')}
          >
            🎯 Matching Engine
          </div>
        </div>

        <div style={{ padding: '1rem', background: 'var(--accent-soft)', borderRadius: '1rem', fontSize: '0.8rem', marginTop: 'auto' }}>
          <p style={{ color: 'var(--primary)', fontWeight: 600 }}>v1.3.0 MatchHub</p>
          <p style={{ color: 'var(--text-muted)' }}>Automated Alignment System</p>
        </div>
      </nav>

      <main className="main-content">
        {activeTab === 'plans' ? (
          <PlanSummaries />
        ) : activeTab === 'experts' ? (
          <ExpertDatabase />
        ) : (
          <MatchingEngine />
        )}
      </main>
    </div>
  )
}

export default App
