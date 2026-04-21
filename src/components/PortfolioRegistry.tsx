import React from 'react';

interface Portfolio {
  title: string;
  requirements: string;
  reports: string;
  link: string;
}

const PORTFOLIOS: Portfolio[] = [
  {
    title: "Banebrytande forsking",
    requirements: "Investment Plan 2026-2028: Focused on high-quality, long-term international research.",
    reports: "Portfolio Analysis 2025: Emphasis on researcher-led innovation and scientific excellence.",
    link: "https://www.forskningsradet.no/portefoljer/banebrytende-forskning/"
  },
  {
    title: "Demokrati og global utvikling",
    requirements: "Portfolio Plan 2025: Strengthening democratic resilience and handling global crises.",
    reports: "Portfolio Analysis 2025: Analysis of international relations and democratic stability.",
    link: "https://www.forskningsradet.no/portefoljer/demokrati-global-utvikling/"
  },
  {
    title: "Energi og transport",
    requirements: "Investment Plan 2026-2028: Green competitiveness and sustainable resource use.",
    reports: "Portfolio Analysis 2025: Focus on low-emission technologies and maritime transition.",
    link: "https://www.forskningsradet.no/portefoljer/energi-transport/"
  },
  {
    title: "Helse",
    requirements: "Investment Plan 2026-2028: Sustainability of municipal services and women's health.",
    reports: "Portfolio Analysis 2024: Review of diagnostics, treatment, and digitalization in health.",
    link: "https://www.forskningsradet.no/portefoljer/helse/"
  },
  {
    title: "Innovasjon",
    requirements: "Investment Plan 2026-2028: Sustainable innovation across public and private sectors.",
    reports: "Portfolio Analysis 2025: Review of value creation and regional transition capabilities.",
    link: "https://www.forskningsradet.no/portefoljer/innovasjon/"
  },
  {
    title: "Klima og miljø",
    requirements: "New 2026 Mandates: Direct alignment with UN SDGs and climate adaptation strategies.",
    reports: "Past Reports: Environmental monitoring and early-stage biodiversity studies.",
    link: "https://www.forskningsradet.no/portefoljer/klima-miljo/"
  },
  {
    title: "Mat og bioressursar",
    requirements: "2026 Targets: Sustainable food production and land-based bio-economy.",
    reports: "Past Analysis: Focus on agricultural efficiency and marine resource management.",
    link: "https://www.forskningsradet.no/portefoljer/mat-bioressurser/"
  },
  {
    title: "Mogleggjerande teknologiar",
    requirements: "2025-2027 Goals: Responsible IKT, Nano-, and Biotechnology integration.",
    reports: "Past Reports: Technical capacity building and cross-disciplinary research reviews.",
    link: "https://www.forskningsradet.no/portefoljer/muliggjorende-teknologier/"
  },
  {
    title: "Samisk samfunn og kultur",
    requirements: "Mandate Sept 24: Language preservation and indigenous cultural development.",
    reports: "Analysis 2024: Review of Sami history and identity research impacts.",
    link: "https://www.forskningsradet.no/portefoljer/samisk/"
  },
  {
    title: "Velferd og utdanning",
    requirements: "2026 Requirements: Higher service quality and learning outcome optimization.",
    reports: "Past Analysis: Review of social welfare systems and primary education levels.",
    link: "https://www.forskningsradet.no/portefoljer/velferd-utdanning/"
  },
  {
    title: "Forskingssystemet",
    requirements: "2026 Infrastructure: Quality driven national research infrastructure projects.",
    reports: "Past Reports: System-wide review of research quality and institutional capacity.",
    link: "https://www.forskningsradet.no/portefoljer/forskningssystemet/"
  },
  {
    title: "Forsvarsevne og sikkerheit",
    requirements: "New 2026 Mandate: National security, preparedness, and crisis management.",
    reports: "Past Reports: Defense technology and early-stage societal security studies.",
    link: "https://www.forskningsradet.no/portefoljer/forsvarsevne-sikkerhet-beredskap/"
  }
];

const PortfolioRegistry: React.FC = () => {
  return (
    <div className="portfolio-registry">
      <header className="intro-header">
        <div className="section-tag">Comparative Analysis</div>
        <h1>Portfolio Registry</h1>
        <p>A systematic overview of Research Council portfolios, mandates, and historical reports.</p>
      </header>

      <div className="guideline-card" style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Executive Summary: Mandate Evolution</h2>
        <div style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '1rem' }}>
            The shift in portfolios from 2024/2025 analyses to the 2026-2028 investment plans marks a clear transition from "foundational capacity building" to "mission-oriented impact and green transition." 
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Early reports heavily focused on establishing robust research systems and basic infrastructure. For instance, the <strong>Banebrytande forsking</strong> analysis of 2025 emphasized international quality and researcher-led ideas. However, the new <strong>2026-2028 Investment Plan</strong> pushes for even greater integration with global challenges. Similarly, in the <strong>Helse</strong> portfolio, past analyses centered on service organization and digitalization, while the new mandates highlight "sustainability of municipal health services" and "women's health" as critical, targeted requirements.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            In the <strong>Energi og transport</strong> and <strong>Innovasjon</strong> sectors, the evolution is even more pronounced. Past reports documented early-stage green tech development. The new 2026-2028 requirements now demand "green competitiveness" and "circular value chains" as mandatory outcomes. This indicates a tightening of requirements around the UN's Sustainable Development Goals (SDGs), moving from passive alignment to active, measurable contribution.
          </p>
          <p>
            Overall, the old requirements often prioritized "scientific excellence" in isolation, whereas the new 2025-2028 mandates consistently pair excellence with "societal transformation" and "cross-sectoral collaboration." This reflects a strategic narrowing of focus towards high-impact areas that address immediate crises, such as energy independence and climate adaptation.
          </p>
        </div>
      </div>

      <div className="table-container">
        <table className="premium-table">
          <thead>
            <tr>
              <th>Portfolio Title</th>
              <th>New Requirements (2025-2028)</th>
              <th>Past Report / Analysis</th>
              <th>Reference</th>
            </tr>
          </thead>
          <tbody>
            {PORTFOLIOS.map((item, idx) => (
              <tr key={idx}>
                <td className="portfolio-title">{item.title}</td>
                <td>{item.requirements}</td>
                <td>{item.reports}</td>
                <td>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="table-link">Official Link</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PortfolioRegistry;
