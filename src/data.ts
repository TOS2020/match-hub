export interface PlanStrategy {
  id: string;
  title: string;
  goal: string;
  summaryNo: string;
  summaryEn: string;
  keywords: string[];
  link: string;
  evidenceQuotes: string[]; // Added for Phase 5 alignment proof
}

export interface Expert {
  id: string;
  name: string;
  title: string;
  expertise: string[];
  bio: string;
}

export const INITIAL_PLANS: PlanStrategy[] = [
  {
    id: "helse",
    title: "Helse",
    goal: "Fornye og øke kvaliteten i forskning som bidrar til god folkehelse, treffsikker behandling og bærekraftige helse- og omsorgstjenester.",
    summaryNo: "Investeringsplanen for helse (2026-2028) prioriterer fem hovedområder: bærekraftig helse- og omsorgssektor, god folkehelse, treffsikker behandling, økt verdiskaping og innovasjon i næringslivet, samt styrket internasjonalt samarbeid.",
    summaryEn: "The Health Investment Plan (2026-2028) focuses on sustainable health services, public health, precision medicine, industry innovation, and international collaboration.",
    keywords: ["Folkehelse", "Bærekraft", "Treffsikker behandling", "Kvinnehelse", "AI", "Innovasjon"],
    link: "https://www.forskningsradet.no/siteassets/portefoljer/helse/investeringsplan-helse-2026-2028.pdf",
    evidenceQuotes: [
      "Satsing på kunstig intelligens (KI) for å effektivisere tjenestene og bedre treffsikkerhet i behandlingen.",
      "Utvikle bærekraftige helse- og omsorgstjenester gjennom innovasjon i både offentlig og privat sektor.",
      "Styrke internasjonalt samarbeid gjennom EP PerMED og Horizon Europe satsinger."
    ]
  },
  {
    id: "banebrytende",
    title: "Banebrytande forsking",
    goal: "Styrke norsk forsknings kvalitet og internasjonale konkurransekraft gjennom langsiktig, grunnleggende finansiering.",
    summaryNo: "Denne planen (2026–2028) legger vekt på å utvikle verdensledende forskningsmiljøer. En sentral endring er økt fokus på 'kunnskapsmobilisering'.",
    summaryEn: "Focuses on world-class research environments through fundamental research funding. Strategic shift includes 'knowledge mobilization'.",
    keywords: ["Grunnforskning", "ERC", "Talentutvikling", "Kunnskapsdeling", "Tverrfaglighet"],
    link: "https://www.forskningsradet.no/siteassets/portefoljer/banebrytende-forskning/investeringsplan-banebrytende-forskning-2026-2028.pdf",
    evidenceQuotes: [
      "Støtte dristige prosjekter som kan flytte den vitenskapelige fronten og utvikle verdensledende miljøer.",
      "Økt fokus på kunnskapsmobilisering slik at resultatene fra grunnforskning tas i bruk i samfunnet.",
      "Prioritering av talenter og unge forskere gjennom målrettede virkemidler."
    ]
  },
  {
    id: "klima",
    title: "Klima og miljø",
    goal: "Bidra til kunnskap som belyser muligheter og dilemmaer i den grønne omstillingen og bevarer naturmangfold.",
    summaryNo: "Prioriterer forskning på utslippsreduksjon, klimatilpasning og sirkulær økonomi. Forsterket fokus på naturbaserte løsninger.",
    summaryEn: "Develops knowledge for a just green transition and biodiversity. Prioritizes emission reduction, climate adaptation, and circular economy.",
    keywords: ["Klimatilpasning", "Naturmangfold", "Sirkulær økonomi", "Parisavtalen", "Naturbaserte løsninger", "Oceanography", "Marine Ecology", "Climate Change"],
    link: "https://www.forskningsradet.no/siteassets/portefoljer/klima-og-miljo/portefoljeplan-klima-og-miljo.pdf",
    evidenceQuotes: [
      "Forskning på marine økosystemer og havmiljøet som preges av klimaendringer og tap av naturmangfold.",
      "Kunnskap som muliggjør en rettferdig og effektiv grønn omstilling i tråd med Parisavtalen.",
      "Naturbaserte løsninger (NBS) for å håndtere klimatilpasning og bevaring av økosystemer."
    ]
  },
  {
    id: "teknologi",
    title: "Muliggjørende teknologier",
    goal: "Bidra til utvikling og bruk av banebrytende teknologier som IKT, nano- og bioteknologi for å løse store samfunnsutfordringer.",
    summaryNo: "Fokuserer på IKT, biotek og nanotek som drivere for omstilling. Særskilt fokus 2025-2028 på KI, kvanteteknologi og avanserte materialer.",
    summaryEn: "Focuses on ICT, biotech, and nanotech. 2025-2028 highlights AI, quantum tech, and advanced materials.",
    keywords: ["AI", "Kvanteteknologi", "Bioteknologi", "Digital suverenitet", "Numerical Modeling", "Fluid Dynamics", "Arctic", "Data Processing"],
    link: "https://www.forskningsradet.no/siteassets/portefoljer/muliggjorende-teknologier/2025-portefoljeplan-for-muliggjorende-teknologier.pdf",
    evidenceQuotes: [
      "Utvikling av avanserte numeriske modeller og algoritmer for å simulere komplekse fysiske prosesser.",
      "Styrke norsk kompetanse på kunstig intelligens og digital infrastruktur for forskning.",
      "Bruk av autonome systemer (AUV/Droner) og stordataanalyser i miljøovervåking."
    ]
  },
  // Adding placeholders for others to ensure the array is complete but focus evidence on demos
  {
    id: "demokrati",
    title: "Demokrati og global utvikling",
    goal: "Bidra til et velfungerende demokrati og en rettferdig og bærekraftig global utvikling gjennom forskningsbasert kunnskap.",
    summaryNo: "Planen for 2025 adresserer geopolitisk uro og autoritære trender.",
    summaryEn: "Responds to geopolitical instability and authoritarian trends.",
    keywords: ["Demokrati", "Global utvikling", "Geopolitikk", "Migrasjon", "Misjonsorientert"],
    link: "https://www.forskningsradet.no/siteassets/portefoljer/demokrati-og-global-utvikling/portefoljeplan-demokrati-og-global-utvikling-2025.pdf",
    evidenceQuotes: ["Styrke demokratiske institusjoners motstandskraft mot desinformasjon og geopolitisk press."]
  },
  {
    id: "energi",
    title: "Energi og transport",
    goal: "Fremme bærekraftig verdiskaping og omstilling i energi-, petroleums-, maritim- og transportsektoren.",
    summaryNo: "Planen styrer innsatsen mot grønn omstilling og digitalisering.",
    summaryEn: "Directs R&I toward the green transition and digitalization.",
    keywords: ["Grønn omstilling", "Lavutslipp", "CCS", "Energisikkerhet", "Digitalisering", "Maritime"],
    link: "https://www.forskningsradet.no/siteassets/portefoljer/energi-og-transport/portefoljeplan-energi-og-transport.pdf",
    evidenceQuotes: ["Innovasjon innen maritim sektor for lavutslippsløsninger og energieffektivisering."]
  },
  {
    id: "innovasjon",
    title: "Innovasjon",
    goal: "Fremme bærekraftig innovasjon, verdiskaping og omstilling i næringsliv og offentlig sektor.",
    summaryNo: "Fokuserer på å utløse økt FoU, styrke bærekraftig omstilling i hele landet.",
    summaryEn: "Catalyzes R&D for sustainable transitions and economic value.",
    keywords: ["SMB", "Bærekraftig innovasjon", "Offentlig sektor", "Grønt skifte", "FoU"],
    link: "https://www.forskningsradet.no/siteassets/portefoljer/innovasjon/investeringsplan-innovasjon-2026-2028.pdf",
    evidenceQuotes: ["Skal stimulere til økt forskningsinnsats i næringslivet gjennom rettede programmer."]
  },
  {
    id: "mat",
    title: "Mat og bioressurser",
    goal: "Bidra til bærekraftig produksjon og utnyttelse av fornybare bioressurser fra hav og land.",
    summaryNo: "Sikrer kunnskapsbasert forvaltning for matsikkerhet og verdiskaping.",
    summaryEn: "Sustainable bioresource management for food security.",
    keywords: ["Matsikkerhet", "Bioøkonomi", "Landbruk", "Havbruk", "Restråstoff", "Marine Science"],
    link: "https://www.forskningsradet.no/siteassets/portefoljer/mat-og-bioressurser/portefoljeplan-mat-og-bioressurser.pdf",
    evidenceQuotes: ["Bærekraftig forvaltning av marine ressurser og bioressurser for økt verdiskaping."]
  },
  {
    id: "samisk",
    title: "Samisk samfunn og kultur",
    goal: "Sikre og utvikle samiske språk, kultur og samfunnsliv i tråd med Norges urfolksansvar.",
    summaryNo: "Sentralt skifte er forankringen i Sannhets- og forsoningskommisjonens rapport.",
    summaryEn: "Strategic shift toward reconciliation research (Truth Commission findings).",
    keywords: ["Urfolk", "Sápmi", "Forsoning", "Språk", "Kulturarv"],
    link: "https://www.forskningsradet.no/siteassets/portefoljer/samisk-samfunn-og-kultur/investeringsplan-samisk-samfunn-og-kultur-2026-2028.pdf",
    evidenceQuotes: ["Forskning på samiske språk og tradisjonell kunnskap i møte med samfunnsendinger."]
  },
  {
    id: "velferd",
    title: "Velferd og utdanning",
    goal: "Bidra til bærekraftige velferdstjenester, inkluderende arbeidsliv og utdanningskvalitet.",
    summaryNo: "Adresserer demografiske endringer og press på velferdsstaten.",
    summaryEn: "Demographic shifts and welfare sustainability.",
    keywords: ["Velferdsstat", "Inkludering", "Utdanningskvalitet", "Digital transformasjon", "KI"],
    link: "https://www.forskningsradet.no/siteassets/portefoljer/velferd-og-utdanning/portefoljeplan-for-velferd-og-utdanning-2025.pdf",
    evidenceQuotes: ["Tjenesteinnovasjon og digital transformasjon for å sikre velferdsstatens bærekraft."]
  },
  {
    id: "system",
    title: "Forskningssystemet",
    goal: "Sikre et robust og velfungerende forskningssystem som fremmer vitenskapelig kvalitet og tillit.",
    summaryNo: "Markant skifte til åpen forskning (Open Science) som standard.",
    summaryEn: "Structural foundations focus: Open Science, modern infrastructure.",
    keywords: ["Open Science", "Infrastruktur", "Horisont Europa", "Forskningsetikk", "Karriereveier"],
    link: "https://www.forskningsradet.no/siteassets/portefoljer/forskningssystemet/sak-ps-fs-11_26-vedlegg-1-investeringsplan-forskningssystemstyret-2026-2028.pdf",
    evidenceQuotes: ["Videreutvikle veikartet for nasjonal forskningsinfrastruktur."]
  },
  {
    id: "forsvar",
    title: "Forsvarsevne og sikkerhet",
    goal: "Styrke Norges forsvarsevne, samfunnssikkerhet og beredskap gjennom strategisk forskning.",
    summaryNo: "Svarer på skjerpet sikkerhetsbilde. Nytt fokus på 'totalforsvarsperspektivet'.",
    summaryEn: "Heightened focus on the 'Total Defense' perspective.",
    keywords: ["Totalforsvar", "Beredskap", "Hybride trusler", "Kritisk infrastruktur", "Nasjonal sikkerhet"],
    link: "https://www.forskningsradet.no/siteassets/portefoljer/forsvarsevne-sikkerhet-og-beredskap/mandat-forsvarsevne-sikkerhet-beredskap.pdf",
    evidenceQuotes: ["Beskyttelse av kritisk infrastruktur og sårbarhetsanalyser i et moderne trusselbilde."]
  }
];

export const INITIAL_EXPERTS: Expert[] = [
  {
    id: "paul-renaud",
    name: "Paul E. Renaud",
    title: "Research Manager, Climate and Ecosystems",
    expertise: ["Marine Ecology", "Arctic Biology", "Climate Change", "Biodiversity", "Marine Science", "Environmental Monitoring"],
    bio: "Senior scientist at Akvaplan-niva with extensive experience in Arctic marine ecosystems, benthic-pelagic coupling, and the impacts of climate change on polar seas. PI for multiple NFR and EU Horizon projects."
  },
  {
    id: "achim-randelhoff",
    name: "Achim Randelhoff",
    title: "Scientist, Physical Oceanography",
    expertise: ["Physical Oceanography", "Arctic Geophysics", "Numerical Modeling", "AUV", "Open Science", "Marine Science", "Data Processing"],
    bio: "Specialist in modeling biological-physical coupling in Arctic waters. Experienced with Hugin AUV infrastructure and BGC Argo float data analysis. Strong advocate for Open Science and software development."
  },
  {
    id: "qin-zhou",
    name: "Qin Zhou",
    title: "Senior Scientist",
    expertise: ["Oceanography", "Sea Ice", "Climate Change", "Numerical Modeling", "Marine Ecosystems", "Fluid Dynamics", "High Resolution Modeling", "Arctic Research"],
    bio: "Expert in ocean-sea ice interaction and high-resolution numerical modeling. Extensive research on the Petermann ice shelf and Northern Norway fjords. Contributor to major NFR projects."
  }
];
