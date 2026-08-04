import { useState, FormEvent } from "react";
import { 
  Coins, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Flame, 
  Zap, 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  RefreshCw, 
  Info,
  Compass,
  MapPin,
  Building,
  User,
  ChevronRight,
  DollarSign,
  GraduationCap,
  Laptop,
  Briefcase,
  Megaphone,
  Handshake
} from "lucide-react";
import { TRIANGULATED_CHALLENGES } from "./data/simulatorData";
import { Territory, OrganizationProfile, CollaborationCategoryId, ChallengeSynergiesRecord } from "./types";

const COLLABORATION_CATEGORIES: {
  id: CollaborationCategoryId;
  title: string;
  description: string;
  icon: typeof DollarSign;
  chipClass: string;
}[] = [
  {
    id: "financieros",
    title: "Financieros",
    description: "Puede aportar con económico para la implementación de los startups / ruta de empleabilidad, ya sea en su fase inicial o en una etapa posterior de escalamiento.",
    icon: DollarSign,
    chipClass: "idtf-chip--naranja"
  },
  {
    id: "acompanamiento",
    title: "Acompañamiento",
    description: "Puede aportar con Disposición de talento especializado para ejercer mentorías y orientar a los equipos de startups / buscadores a lo largo del proceso o contar con oferta educativa para el fortalecimiento de los startups (cursos rápidos)",
    icon: GraduationCap,
    chipClass: "idtf-chip"
  },
  {
    id: "espacios",
    title: "Espacios",
    description: "Puede aportar con Habilitación de laboratorios e instalaciones físicas para el desarrollo de actividades en las regiones del Pacífico y el Caribe.",
    icon: Building,
    chipClass: "idtf-chip--verde"
  },
  {
    id: "dotacion",
    title: "Dotación",
    description: "Suministro de equipos y soluciones de conectividad para los equipos juveniles, incluyendo computadores, tablets y acceso a internet",
    icon: Laptop,
    chipClass: "idtf-chip--naranja"
  },
  {
    id: "vinculacion",
    title: "Vinculación",
    description: "Contratación de los y las jóvenes participantes en las entidades aliadas una vez concluido el proceso, como reconocimiento a su trayectoria y formación.",
    icon: Briefcase,
    chipClass: "idtf-chip"
  },
  {
    id: "comunicaciones",
    title: "Comunicaciones",
    description: "Apoyo en estrategias de difusión y publicidad para dar a conocer el proceso, sus resultados y el impacto de los startups. Uso de plataformas existentes de marketing para posicionar a los startups.",
    icon: Megaphone,
    chipClass: "idtf-chip--verde"
  }
];

const createEmptySynergies = (): ChallengeSynergiesRecord => ({
  financieros: "",
  acompanamiento: "",
  espacios: "",
  dotacion: "",
  vinculacion: "",
  comunicaciones: ""
});

export default function App() {
  // Navigation steps: 1: Identificación, 2: Lista de Retos por Región, 3: Detalle e Inversión, 4: Pacto Final
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);

  // Active Challenge ID for Step 3
  const [selectedChallengeId, setSelectedChallengeId] = useState<string>("Reto A");

  // Profile Form State
  const [profile, setProfile] = useState<OrganizationProfile>({
    companyName: "",
    actorType: "Empresa de Software / TI",
    contactName: "",
    contactRole: "",
    contactEmail: "",
    territory: "Pacífico (Cali, Pasto, Buenaventura, etc.)"
  });

  // Coin Allocation (Total 10 Coins)
  const [coins, setCoins] = useState<Record<string, number>>({
    "Reto A": 0,
    "Reto B": 0,
    "Reto C": 0,
    "Reto D": 0
  });

  // Mandatory structured synergy contributions per challenge
  const [synergies, setSynergies] = useState<Record<string, ChallengeSynergiesRecord>>({
    "Reto A": createEmptySynergies(),
    "Reto B": createEmptySynergies(),
    "Reto C": createEmptySynergies(),
    "Reto D": createEmptySynergies()
  });

  // Pact signed state
  const [isPactSigned, setIsPactSigned] = useState<boolean>(false);

  // Coins Calculation
  const totalCoinsSpent = (Object.values(coins) as number[]).reduce((a, b) => a + b, 0);
  const remainingCoins = 10 - totalCoinsSpent;

  // Filter challenges according to location selected in step 1
  const getFilteredChallenges = () => {
    if (profile.territory.includes("Pacífico")) {
      return TRIANGULATED_CHALLENGES.filter(c => c.region === "Pacífico");
    } else if (profile.territory.includes("Caribe")) {
      return TRIANGULATED_CHALLENGES.filter(c => c.region === "Caribe");
    } else {
      return TRIANGULATED_CHALLENGES;
    }
  };

  const filteredChallenges = getFilteredChallenges();

  // Form Submit Handler (Step 1 -> Step 2)
  const handleStartIdentification = (e: FormEvent) => {
    e.preventDefault();
    if (!profile.contactName || !profile.companyName) {
      alert("Por favor completa tu nombre y el de tu organización para continuar.");
      return;
    }

    const available = getFilteredChallenges();
    if (available.length > 0) {
      setSelectedChallengeId(available[0].id);
    }
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Adjust Coin Allocation
  const handleCoinChange = (challengeId: string, delta: number) => {
    const current = coins[challengeId] || 0;
    const nextVal = current + delta;
    if (nextVal < 0) return;
    if (delta > 0 && remainingCoins <= 0) return;

    setCoins(prev => ({
      ...prev,
      [challengeId]: nextVal
    }));
  };

  // Update specific category text for a challenge
  const handleCategorySynergyChange = (challengeId: string, catId: CollaborationCategoryId, value: string) => {
    setSynergies(prev => ({
      ...prev,
      [challengeId]: {
        ...(prev[challengeId] || createEmptySynergies()),
        [catId]: value
      }
    }));
  };

  // Open Challenge Detail View
  const openChallengeDetail = (challengeId: string) => {
    setSelectedChallengeId(challengeId);
    setCurrentStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentChallenge = TRIANGULATED_CHALLENGES.find(c => c.id === selectedChallengeId) || TRIANGULATED_CHALLENGES[0];

  return (
    <div className="min-h-screen bg-[var(--idtf-navy)] text-[var(--idtf-white)] flex flex-col font-sans relative overflow-x-hidden selection:bg-[var(--idtf-naranja)] selection:text-[var(--idtf-navy)]" id="app-root">
      
      {/* IDTF Corner Accent Bar (top right) */}
      <div className="idtf-corner-accent" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      {/* IDTF Side Accent Bar (bottom left) */}
      <div className="idtf-side-accent" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      {/* Header with IDTF FACILITY Brand Wordmark & Budget HUD */}
      <header className="sticky top-0 z-40 bg-[var(--idtf-navy)]/90 backdrop-blur-md border-b border-white/10" id="app-header">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          
          {/* IDTF Brand Header */}
          <div className="flex items-center gap-4">
            <div className="idtf-isologo shrink-0" aria-label="Facility Logo">
              <div className="idtf-isologo__bar idtf-isologo__bar--1" />
              <div className="idtf-isologo__bar idtf-isologo__bar--2" />
              <div className="idtf-isologo__bar idtf-isologo__bar--3" />
            </div>

            <div>
              <div className="text-xs font-mono tracking-widest text-[var(--idtf-morado)] uppercase font-bold">
                IDTF · FACILITY
              </div>
              <h1 className="text-sm font-extrabold text-white tracking-tight uppercase">
                Pacto por la Conectividad Significativa
              </h1>
            </div>
          </div>

          {/* Persistent Budget HUD in Header */}
          {currentStep > 1 && (
            <div className="flex items-center gap-3 bg-[var(--idtf-navy-light)] border border-[var(--idtf-morado)]/30 px-4 py-2 rounded-full shadow-lg">
              <Coins className="w-4 h-4 text-[var(--idtf-naranja)]" />
              <div className="text-xs font-mono">
                <span className="text-[var(--idtf-text-secondary)] hidden sm:inline">Monedas Libres: </span>
                <span className="font-extrabold text-[var(--idtf-naranja)]">{remainingCoins}</span>
                <span className="text-[var(--idtf-text-muted)]"> / 10</span>
              </div>
            </div>
          )}

        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-10 sm:py-16 flex flex-col justify-center relative z-10" id="app-main">

        {/* ========================================================= */}
        {/* PASO 1: FORMULARIO DE IDENTIFICACIÓN (IDTF FACILITY BRAND) */}
        {/* ========================================================= */}
        {currentStep === 1 && (
          <div className="space-y-10 max-w-3xl mx-auto" id="step-1-identification">
            
            {/* Breadcrumb Header */}
            <div className="idtf-breadcrumb">
              <span className="idtf-breadcrumb__step">01</span>
              <span className="text-[var(--idtf-text-muted)]">/</span>
              <span className="idtf-breadcrumb__section">TRANSFORMACIÓN DIGITAL</span>
              <span className="text-[var(--idtf-text-muted)]">/</span>
              <span className="idtf-breadcrumb__current">IDENTIFICACIÓN</span>
            </div>

            {/* IDTF Section Header */}
            <div className="idtf-section-header">
              <div className="idtf-section-header__number">01</div>
              <div>
                <h2 className="idtf-section-header__title">
                  IDENTIFICACIÓN DEL <span className="accent">ALIADO</span>
                </h2>
                <p className="text-base text-[var(--idtf-text-secondary)] mt-2">
                  Ingresa tus datos institucionales para consultar y co-diseñar los retos de conectividad y empleabilidad en tu región.
                </p>
              </div>
            </div>

            {/* IDTF Card Form */}
            <form 
              onSubmit={handleStartIdentification}
              className="idtf-card idtf-card--naranja space-y-6 shadow-2xl relative"
            >
              
              {/* Nombre */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-[var(--idtf-morado)] flex items-center gap-2 font-bold">
                  <User className="w-4 h-4 text-[var(--idtf-naranja)]" />
                  Tu Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  value={profile.contactName}
                  onChange={(e) => setProfile({ ...profile, contactName: e.target.value })}
                  placeholder="Ej. Sofía Valenzuela"
                  className="w-full px-5 py-3.5 bg-[var(--idtf-navy)] border border-white/15 rounded-[var(--idtf-radius-md)] text-white placeholder:text-white/30 text-base focus:border-[var(--idtf-naranja)] focus:ring-1 focus:ring-[var(--idtf-naranja)] outline-none transition-all"
                />
              </div>

              {/* Organización */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-[var(--idtf-morado)] flex items-center gap-2 font-bold">
                  <Building className="w-4 h-4 text-[var(--idtf-naranja)]" />
                  Organización / Empresa *
                </label>
                <input
                  type="text"
                  required
                  value={profile.companyName}
                  onChange={(e) => setProfile({ ...profile, companyName: e.target.value })}
                  placeholder="Ej. Cámara de Comercio / Globant / IES"
                  className="w-full px-5 py-3.5 bg-[var(--idtf-navy)] border border-white/15 rounded-[var(--idtf-radius-md)] text-white placeholder:text-white/30 text-base focus:border-[var(--idtf-naranja)] focus:ring-1 focus:ring-[var(--idtf-naranja)] outline-none transition-all"
                />
              </div>

              {/* Rol */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-[var(--idtf-morado)] flex items-center gap-2 font-bold">
                  <Compass className="w-4 h-4 text-[var(--idtf-naranja)]" />
                  Cargo o Rol Institucional
                </label>
                <input
                  type="text"
                  value={profile.contactRole}
                  onChange={(e) => setProfile({ ...profile, contactRole: e.target.value })}
                  placeholder="Ej. Directora de Talento Humano / Innovación"
                  className="w-full px-5 py-3.5 bg-[var(--idtf-navy)] border border-white/15 rounded-[var(--idtf-radius-md)] text-white placeholder:text-white/30 text-base focus:border-[var(--idtf-naranja)] focus:ring-1 focus:ring-[var(--idtf-naranja)] outline-none transition-all"
                />
              </div>

              {/* Ubicación */}
              <div className="space-y-3 pt-2">
                <label className="text-xs font-mono uppercase tracking-widest text-[var(--idtf-morado)] flex items-center gap-2 font-bold">
                  <MapPin className="w-4 h-4 text-[var(--idtf-naranja)]" />
                  Ubicación Principal *
                </label>

                <div className="grid grid-cols-1 gap-3">
                  {[
                    { val: "Pacífico (Cali, Pasto, Buenaventura, etc.)", title: "Pacífico (Retos 1 y 2)", desc: "Cali, Pasto, Buenaventura, Tumaco, Quibdó" },
                    { val: "Caribe (Barranquilla, Cartagena, etc.)", title: "Caribe (Retos 3 y 4)", desc: "Barranquilla, Cartagena, Santa Marta, Montería" },
                    { val: "Ambos / Cobertura Nacional", title: "Ambos Territorios / Nacional", desc: "Cobertura simultánea en Caribe y Pacífico" }
                  ].map((loc) => {
                    const isSelected = profile.territory === loc.val;
                    return (
                      <button
                        key={loc.val}
                        type="button"
                        onClick={() => setProfile({ ...profile, territory: loc.val as Territory })}
                        className={`p-4 rounded-[var(--idtf-radius-md)] border text-left transition-all flex items-center justify-between gap-4 ${
                          isSelected
                            ? "bg-[var(--idtf-navy)] border-[var(--idtf-naranja)] text-white shadow-md"
                            : "bg-[var(--idtf-navy)]/60 border-white/10 text-[var(--idtf-text-secondary)] hover:border-white/25 hover:text-white"
                        }`}
                      >
                        <div>
                          <div className={`font-bold text-base ${isSelected ? "text-[var(--idtf-naranja)]" : "text-white"}`}>
                            {loc.title}
                          </div>
                          <div className="text-xs text-[var(--idtf-text-secondary)] mt-0.5">
                            {loc.desc}
                          </div>
                        </div>

                        {isSelected && (
                          <div className="w-6 h-6 rounded-full bg-[var(--idtf-naranja)] text-[var(--idtf-navy)] flex items-center justify-center shrink-0">
                            <Check className="w-4 h-4 stroke-[3]" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="idtf-btn idtf-btn--primary w-full py-4 text-base flex items-center justify-center gap-2"
                >
                  Ver Retos de mi Región
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

            </form>

          </div>
        )}

        {/* ========================================================= */}
        {/* PASO 2: RETOS DE ACUERDO A SU UBICACIÓN (IDTF CARDS)       */}
        {/* ========================================================= */}
        {currentStep === 2 && (
          <div className="space-y-10" id="step-2-challenges-list">
            
            {/* Breadcrumb Header */}
            <div className="idtf-breadcrumb">
              <span className="idtf-breadcrumb__step">02</span>
              <span className="text-[var(--idtf-text-muted)]">/</span>
              <span className="idtf-breadcrumb__section">{profile.territory}</span>
              <span className="text-[var(--idtf-text-muted)]">/</span>
              <span className="idtf-breadcrumb__current">RETOS REGIONALES</span>
            </div>

            {/* Section Header */}
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-white/10 pb-6">
              <div className="idtf-section-header mb-0">
                <div className="idtf-section-header__number">02</div>
                <div>
                  <h2 className="idtf-section-header__title">
                    RETOS <span className="accent">ESTRATÉGICOS</span>
                  </h2>
                  <p className="text-sm text-[var(--idtf-text-secondary)] mt-1">
                    Organización: <strong className="text-white">{profile.companyName}</strong> • {profile.territory}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="text-xs font-mono text-[var(--idtf-naranja)] hover:underline shrink-0"
              >
                ← Cambiar ubicación
              </button>
            </div>

            {/* Challenge Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="challenges-grid">
              {filteredChallenges.map((ch) => {
                const allocated = coins[ch.id] || 0;

                return (
                  <div
                    key={ch.id}
                    onClick={() => openChallengeDetail(ch.id)}
                    className="idtf-card idtf-card--verde cursor-pointer hover:scale-[1.01] transition-transform duration-300 flex flex-col justify-between group space-y-4"
                  >
                    {/* Image Header */}
                    <div className="relative aspect-16/10 rounded-[var(--idtf-radius-sm)] overflow-hidden bg-[var(--idtf-navy)]">
                      <img 
                        src={ch.image} 
                        alt={ch.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      
                      {/* Region Tag */}
                      <div className="absolute top-3 left-3">
                        <span className="idtf-chip idtf-chip--verde shadow-md">
                          Reto {ch.challengeNumber} • {ch.region}
                        </span>
                      </div>

                      {/* Coins Badge */}
                      {allocated > 0 && (
                        <div className="absolute top-3 right-3 bg-[var(--idtf-naranja)] text-[var(--idtf-navy)] font-mono text-xs font-extrabold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                          <Coins className="w-3.5 h-3.5" />
                          {allocated} Monedas
                        </div>
                      )}
                    </div>

                    {/* Challenge Info */}
                    <div className="space-y-3 flex-1 flex flex-col justify-between pt-2">
                      <div className="space-y-2">
                        <div className="idtf-card__eyebrow">Categoría territorial</div>
                        <h3 className="text-xl font-extrabold text-white group-hover:text-[var(--idtf-morado)] transition-colors leading-snug">
                          {ch.title}
                        </h3>
                        <p className="text-xs text-[var(--idtf-text-secondary)] line-clamp-3 leading-relaxed">
                          "{ch.hmw}"
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                        <span className="text-[var(--idtf-text-muted)]">
                          {allocated > 0 ? `${allocated} de 10 Monedas` : "Sin monedas asignadas"}
                        </span>

                        <span className="text-[var(--idtf-naranja)] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Ver e Invertir
                          <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Bottom Status Box */}
            <div className="idtf-card idtf-card--naranja flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-xs font-mono uppercase text-[var(--idtf-naranja)] font-bold">
                  Presupuesto Total de Monedas IDTF
                </div>
                <div className="text-base font-bold text-white">
                  {remainingCoins === 0 ? (
                    <span className="text-[var(--idtf-verde)] flex items-center gap-2 justify-center sm:justify-start">
                      <CheckCircle2 className="w-5 h-5" />
                      ¡10 Monedas totalmente invertidas!
                    </span>
                  ) : (
                    <span>Tienes <strong className="text-[var(--idtf-naranja)]">{remainingCoins} monedas libres</strong> por distribuir.</span>
                  )}
                </div>
              </div>

              {remainingCoins === 0 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(4)}
                  className="idtf-btn idtf-btn--primary py-3 px-6 text-sm shrink-0 flex items-center gap-2"
                >
                  Ir al Pacto por la Conectividad
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="text-xs text-[var(--idtf-text-secondary)] font-mono text-center sm:text-right">
                  Selecciona un reto para asignar tu presupuesto.
                </div>
              )}
            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* PASO 3: DESCRIPCIÓN DEL RETO, MONEDAS Y CATEGORÍAS         */}
        {/* ========================================================= */}
        {currentStep === 3 && currentChallenge && (
          <div className="space-y-8" id="step-3-challenge-detail">
            
            {/* Breadcrumb Header */}
            <div className="idtf-breadcrumb">
              <span className="idtf-breadcrumb__step">03</span>
              <span className="text-[var(--idtf-text-muted)]">/</span>
              <span className="idtf-breadcrumb__section">{currentChallenge.region}</span>
              <span className="text-[var(--idtf-text-muted)]">/</span>
              <span className="idtf-breadcrumb__current">RETO {currentChallenge.challengeNumber}</span>
            </div>

            {/* Back Navigation Button */}
            <div>
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="idtf-btn idtf-btn--secondary text-xs py-2 px-4"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Volver a la Lista de Retos
              </button>
            </div>

            {/* Main Detail Card */}
            <div className="idtf-card idtf-card--naranja space-y-8 p-6 sm:p-10">
              
              {/* Hero Image */}
              <div className="relative aspect-16/9 sm:aspect-21/9 rounded-[var(--idtf-radius-md)] overflow-hidden bg-[var(--idtf-navy)]">
                <img 
                  src={currentChallenge.image} 
                  alt={currentChallenge.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--idtf-navy)] via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="idtf-chip idtf-chip--naranja">
                    Reto {currentChallenge.challengeNumber} • {currentChallenge.region}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {currentChallenge.title}
                  </h2>
                </div>
              </div>

              {/* HMW Box */}
              <div className="bg-[var(--idtf-navy)] p-6 rounded-[var(--idtf-radius-md)] border-l-4 border-[var(--idtf-naranja)] space-y-2">
                <p className="text-xs font-mono uppercase text-[var(--idtf-naranja)] font-bold">
                  Pregunta Central de Innovación (HMW):
                </p>
                <p className="text-base sm:text-lg text-white italic font-medium leading-relaxed">
                  "{currentChallenge.hmw}"
                </p>
              </div>

              {/* Pain & Advantage Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="bg-[var(--idtf-navy)]/80 border border-white/10 p-5 rounded-[var(--idtf-radius-md)] space-y-2">
                  <div className="flex items-center gap-2 text-[var(--idtf-naranja)] font-mono text-xs uppercase font-bold">
                    <Flame className="w-4 h-4" />
                    Dolor Territorial Mapeado
                  </div>
                  <p className="text-[var(--idtf-text-secondary)]">
                    {currentChallenge.painDescription}
                  </p>
                </div>

                <div className="bg-[var(--idtf-navy)]/80 border border-white/10 p-5 rounded-[var(--idtf-radius-md)] space-y-2">
                  <div className="flex items-center gap-2 text-[var(--idtf-verde)] font-mono text-xs uppercase font-bold">
                    <Zap className="w-4 h-4" />
                    Impacto y Ventajas
                  </div>
                  <ul className="idtf-values-list text-xs">
                    {currentChallenge.advantages.map((adv, idx) => (
                      <li key={idx}><strong>{adv}</strong></li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Rules Banner */}
              <div className="bg-[var(--idtf-morado)]/10 border border-[var(--idtf-morado)]/30 p-5 rounded-[var(--idtf-radius-md)] text-xs space-y-1">
                <div className="flex items-center gap-2 font-mono uppercase text-[var(--idtf-morado)] font-bold">
                  <Info className="w-4 h-4" />
                  Inversión de Presupuesto Simbólico
                </div>
                <p className="text-[var(--idtf-text-secondary)] leading-relaxed">
                  Dispones de <strong className="text-white">10 Monedas IDTF</strong> para asignar entre los retos priorizados. Puedes modificar tus inversiones en cualquier momento.
                </p>
              </div>

              {/* INVESTMENT INTERACTIVE BOX */}
              <div className="bg-[var(--idtf-navy)] border border-white/15 p-6 sm:p-8 rounded-[var(--idtf-radius-md)] space-y-8">
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                      <Coins className="w-5 h-5 text-[var(--idtf-naranja)]" />
                      Inversión en Reto {currentChallenge.challengeNumber}
                    </h3>
                    <p className="text-xs text-[var(--idtf-text-secondary)] mt-0.5">
                      Asigna tus monedas para priorizar este reto
                    </p>
                  </div>

                  <div className="font-mono text-right">
                    <div className="text-xs text-[var(--idtf-text-muted)]">Presupuesto Libre:</div>
                    <div className="text-xl font-extrabold text-[var(--idtf-naranja)]">
                      {remainingCoins} Monedas
                    </div>
                  </div>
                </div>

                {/* Coin Controller */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-[var(--idtf-navy-light)] p-5 rounded-[var(--idtf-radius-md)] border border-white/10">
                  <div className="text-center sm:text-left">
                    <span className="text-xs font-mono uppercase text-[var(--idtf-text-secondary)] block font-bold">
                      Monedas Asignadas a este Reto:
                    </span>
                    <span className="text-4xl font-extrabold text-white font-mono mt-1 block">
                      {coins[currentChallenge.id] || 0}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => handleCoinChange(currentChallenge.id, -1)}
                      disabled={(coins[currentChallenge.id] || 0) <= 0}
                      className="w-12 h-12 rounded-full bg-[var(--idtf-navy)] text-white font-extrabold text-xl hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed border border-white/20 flex items-center justify-center transition-all"
                    >
                      -
                    </button>

                    <button
                      type="button"
                      onClick={() => handleCoinChange(currentChallenge.id, 1)}
                      disabled={remainingCoins <= 0}
                      className="w-12 h-12 rounded-full bg-[var(--idtf-naranja)] text-[var(--idtf-navy)] font-extrabold text-xl hover:bg-[var(--idtf-naranja-dark)] disabled:opacity-20 disabled:cursor-not-allowed flex items-center justify-center transition-all shadow-md"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* CATEGORÍAS DE COLABORACIÓN INSTITUCIONAL (FORMULARIO ESTRUCTURADO) */}
                <div className="space-y-6 pt-4 border-t border-white/10">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Handshake className="w-5 h-5 text-[var(--idtf-naranja)]" />
                      <h4 className="text-base font-extrabold text-white uppercase tracking-wide">
                        Aportes y Capacidades de Colaboración Institucional *
                      </h4>
                    </div>
                    <p className="text-xs text-[var(--idtf-text-secondary)] leading-relaxed">
                      Detalla la capacidad o recurso específico que tu organización puede aportar en cada una de las 6 categorías para este reto:
                    </p>
                  </div>

                  <div className="space-y-6">
                    {COLLABORATION_CATEGORIES.map((cat) => {
                      const Icon = cat.icon;
                      const currentVal = synergies[currentChallenge.id]?.[cat.id] || "";

                      return (
                        <div 
                          key={cat.id} 
                          className="bg-[var(--idtf-navy-light)] border border-white/15 p-5 rounded-[var(--idtf-radius-md)] space-y-3 transition-colors focus-within:border-[var(--idtf-naranja)]"
                        >
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-2">
                              <span className={`${cat.chipClass} flex items-center gap-1.5 py-1 px-3 text-xs`}>
                                <Icon className="w-3.5 h-3.5" />
                                Categoría: {cat.title}
                              </span>
                            </div>
                            <p className="text-xs text-[var(--idtf-text-secondary)] leading-relaxed">
                              {cat.description}
                            </p>
                          </div>

                          <div>
                            <textarea
                              rows={2}
                              value={currentVal}
                              onChange={(e) => handleCategorySynergyChange(currentChallenge.id, cat.id, e.target.value)}
                              placeholder={`Escribe aquí el aporte en ${cat.title.toLowerCase()}... (Ej. Disponibilidad de 5 mentores en software / 10 computadores / laboratorios habilitados)`}
                              className="w-full px-4 py-3 bg-[var(--idtf-navy)] border border-white/15 rounded-[var(--idtf-radius-sm)] text-white placeholder:text-white/30 text-sm focus:border-[var(--idtf-naranja)] focus:ring-1 focus:ring-[var(--idtf-naranja)] outline-none resize-y min-h-[85px]"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Bottom Nav CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="idtf-btn idtf-btn--secondary w-full sm:w-auto"
                >
                  ← Volver a Retos
                </button>

                {remainingCoins === 0 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(4)}
                    className="idtf-btn idtf-btn--primary w-full sm:w-auto flex items-center gap-2"
                  >
                    Ir al Pacto por la Conectividad
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="idtf-btn idtf-btn--primary w-full sm:w-auto flex items-center gap-2"
                  >
                    Seguir Invirtiendo Monedas ({remainingCoins} libres)
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>

            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* PASO 4: PÁGINA FINAL - PACTO POR LA CONECTIVIDAD          */}
        {/* ========================================================= */}
        {currentStep === 4 && (
          <div className="space-y-10 text-center max-w-3xl mx-auto" id="step-4-pact-final">
            
            {/* Breadcrumb Header */}
            <div className="idtf-breadcrumb justify-center">
              <span className="idtf-breadcrumb__step">04</span>
              <span className="text-[var(--idtf-text-muted)]">/</span>
              <span className="idtf-breadcrumb__section">PACTO POR LA CONECTIVIDAD</span>
              <span className="text-[var(--idtf-text-muted)]">/</span>
              <span className="idtf-breadcrumb__current">ADHESIÓN INSTITUCIONAL</span>
            </div>

            {/* Header */}
            <div className="space-y-3">
              <span className="idtf-chip idtf-chip--verde">
                FACILITY • OIT / UNIÓN EUROPEA
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
                Pacto por la Conectividad <span className="text-[var(--idtf-morado)]">Significativa</span>
              </h2>

              <p className="text-[var(--idtf-text-secondary)] text-base max-w-xl mx-auto leading-relaxed">
                Gracias a la organización <strong className="text-white">{profile.companyName || "Aliada"}</strong> por priorizar e invertir oficialmente sus 10 monedas de presupuesto en el territorio.
              </p>
            </div>

            {/* Summary Card */}
            <div className="idtf-card idtf-card--verde p-6 sm:p-8 text-left space-y-6">
              
              <div className="border-b border-white/10 pb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-white">Resumen de Adhesión</h3>
                  <p className="text-xs text-[var(--idtf-text-secondary)]">{profile.contactName} ({profile.contactRole})</p>
                </div>

                <span className="idtf-chip idtf-chip--naranja">
                  {profile.territory}
                </span>
              </div>

              {/* Investments & Collaboration Categories Breakdown */}
              <div className="space-y-6">
                <div className="text-xs font-mono uppercase text-[var(--idtf-naranja)] font-bold">
                  Inversiones y Categorías de Colaboración por Reto:
                </div>

                {TRIANGULATED_CHALLENGES.map((ch) => {
                  const invested = coins[ch.id] || 0;
                  if (invested === 0) return null;

                  const challengeSynergies = synergies[ch.id] || createEmptySynergies();
                  const filledCategories = COLLABORATION_CATEGORIES.filter(cat => (challengeSynergies[cat.id] || "").trim() !== "");

                  return (
                    <div key={ch.id} className="bg-[var(--idtf-navy)] border border-white/10 p-5 rounded-[var(--idtf-radius-md)] space-y-4">
                      
                      {/* Challenge Header */}
                      <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                        <div>
                          <div className="font-extrabold text-white text-base">
                            Reto {ch.challengeNumber}: {ch.title}
                          </div>
                          <div className="text-xs text-[var(--idtf-text-muted)] font-mono">
                            Región {ch.region}
                          </div>
                        </div>

                        <div className="font-mono font-extrabold text-sm bg-[var(--idtf-naranja)] text-[var(--idtf-navy)] px-4 py-2 rounded-full shrink-0 flex items-center gap-1.5 shadow-md">
                          <Coins className="w-4 h-4" />
                          {invested} Monedas
                        </div>
                      </div>

                      {/* Detailed Categories */}
                      <div className="space-y-3">
                        <div className="text-xs font-mono text-[var(--idtf-morado)] font-bold uppercase">
                          Aportes de Colaboración Registrados:
                        </div>

                        {filledCategories.length > 0 ? (
                          <div className="grid grid-cols-1 gap-2.5">
                            {filledCategories.map((cat) => {
                              const val = challengeSynergies[cat.id];
                              const Icon = cat.icon;

                              return (
                                <div key={cat.id} className="bg-[var(--idtf-navy-light)] border border-white/10 p-3.5 rounded-[var(--idtf-radius-sm)] text-xs space-y-1">
                                  <div className="flex items-center gap-1.5 font-bold text-white">
                                    <Icon className="w-3.5 h-3.5 text-[var(--idtf-naranja)]" />
                                    <span>{cat.title}</span>
                                  </div>
                                  <p className="text-[var(--idtf-text-secondary)] leading-snug">
                                    "{val}"
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="text-xs text-[var(--idtf-text-muted)] italic">
                            (Sin aportes específicos ingresados para este reto)
                          </div>
                        )}
                      </div>

                    </div>
                  );
                })}

                {totalCoinsSpent === 0 && (
                  <div className="text-sm text-[var(--idtf-text-secondary)] italic py-2 text-center">
                    No has asignado monedas aún.
                  </div>
                )}
              </div>

              {/* Signing CTA or Status */}
              {isPactSigned ? (
                <div className="bg-[var(--idtf-verde)]/15 border border-[var(--idtf-verde)] p-6 rounded-[var(--idtf-radius-md)] text-center space-y-2 animate-fadeIn">
                  <Award className="w-10 h-10 text-[var(--idtf-verde)] mx-auto" />
                  <h4 className="text-xl font-extrabold text-white uppercase">¡Pacto Firmado Oficialmente!</h4>
                  <p className="text-xs text-[var(--idtf-text-secondary)] max-w-md mx-auto">
                    Tu compromiso ha sido registrado en la alianza OIT - Unión Europea en el marco del IDTF Facility. Recibirás invitación para los próximos talleres de co-diseño regional.
                  </p>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsPactSigned(true)}
                  className="idtf-btn idtf-btn--primary w-full py-4 text-base flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  Firmar y Unirme al Pacto
                </button>
              )}

            </div>

            {/* Restart options */}
            <div className="flex items-center justify-center gap-4 text-xs font-mono text-[var(--idtf-text-secondary)]">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="hover:text-white underline transition-colors"
              >
                Ajustar mi asignación
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => {
                  setIsPactSigned(false);
                  setCoins({ "Reto A": 0, "Reto B": 0, "Reto C": 0, "Reto D": 0 });
                  setSynergies({
                    "Reto A": createEmptySynergies(),
                    "Reto B": createEmptySynergies(),
                    "Reto C": createEmptySynergies(),
                    "Reto D": createEmptySynergies()
                  });
                  setCurrentStep(1);
                }}
                className="hover:text-white underline transition-colors flex items-center gap-1"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Iniciar nueva consulta
              </button>
            </div>

          </div>
        )}

      </main>

      {/* IDTF Partner Bar Footer (ONU, UE, OIT, PNUD, Joint SDG Fund) */}
      <footer className="bg-[var(--idtf-navy-light)] border-t border-white/10 py-8 relative z-10" id="app-footer">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          <div className="idtf-partner-bar">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--idtf-text-muted)] font-extrabold mr-2">
              Alianza Estratégica
            </span>
            <span className="text-xs font-mono text-[var(--idtf-morado)] font-bold">OIT COLOMBIA</span>
            <div className="idtf-partner-bar__divider" />
            <span className="text-xs font-mono text-[var(--idtf-naranja)] font-bold">UNIÓN EUROPEA</span>
            <div className="idtf-partner-bar__divider" />
            <span className="text-xs font-mono text-[var(--idtf-verde)] font-bold">IDTF · FACILITY</span>
            <div className="idtf-partner-bar__divider" />
            <span className="text-xs font-mono text-white/70 font-semibold">JOINT SDG FUND</span>
          </div>

          <div className="text-center text-xs text-[var(--idtf-text-muted)] font-mono">
            IDTF Facility • Transformación Digital Inclusiva • Caribe &amp; Pacífico Colombiano 2026
          </div>
        </div>
      </footer>

    </div>
  );
}
