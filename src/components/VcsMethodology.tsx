import React, { FormEvent } from "react";
import { 
  Sparkles, 
  Users, 
  Target, 
  BookOpen, 
  Award, 
  Briefcase, 
  HeartHandshake, 
  AlertCircle, 
  MapPin, 
  ArrowRight, 
  User, 
  Building, 
  Compass, 
  Check, 
  ShieldCheck,
  Globe,
  Layers,
  Puzzle
} from "lucide-react";
import { PuzzleInfographic } from "./PuzzleInfographic";
import { OrganizationProfile } from "../types";

interface VcsMethodologyProps {
  profile: OrganizationProfile;
  setProfile: React.Dispatch<React.SetStateAction<OrganizationProfile>>;
  onProceed: () => void;
  onBackToMap: () => void;
}

export const VcsMethodology: React.FC<VcsMethodologyProps> = ({
  profile,
  setProfile,
  onProceed,
  onBackToMap
}) => {
  const territoryLower = profile.territory.toLowerCase();
  const isPacificoOnly = (territoryLower.includes("pacífico") || territoryLower.includes("pacifico")) && !territoryLower.includes("nacional") && !territoryLower.includes("ambos");
  const isCaribeOnly = territoryLower.includes("caribe") && !territoryLower.includes("nacional") && !territoryLower.includes("ambos");

  const showCaribe = isCaribeOnly || (!isPacificoOnly);
  const showPacifico = isPacificoOnly || (!isCaribeOnly);

  return (
    <div className="space-y-12 max-w-4xl mx-auto animate-fade-in" id="vcs-methodology-step">
      
      {/* Breadcrumb Header */}
      <div className="idtf-breadcrumb justify-center">
        <span className="idtf-breadcrumb__step">02</span>
        <span className="text-[var(--idtf-text-muted)]">/</span>
        <span className="idtf-breadcrumb__section">VENTANA DE CONECTIVIDAD SIGNIFICATIVA</span>
        <span className="text-[var(--idtf-text-muted)]">/</span>
        <span className="idtf-breadcrumb__current">METODOLOGÍA Y DIAGNÓSTICO</span>
      </div>

      {/* Main Header Card with UN / ILO / EU Logos */}
      <div className="idtf-card idtf-card--morado p-8 rounded-[var(--idtf-radius-lg)] space-y-6 shadow-2xl relative overflow-hidden bg-gradient-to-br from-[#181333] via-[#10142b] to-[#0a0e20]">
        
        {/* Institutional Backing Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[var(--idtf-morado)]/20 border border-[var(--idtf-morado)]/40 text-xs font-mono font-bold text-[var(--idtf-morado)] uppercase tracking-wider flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[var(--idtf-naranja)]" />
              OIT · UNFPA · UNIÓN EUROPEA
            </span>
            <span className="text-xs text-[var(--idtf-text-secondary)] font-mono">
              Iniciativa Regional Colombia
            </span>
          </div>

          <button
            type="button"
            onClick={onBackToMap}
            className="text-xs font-mono text-[var(--idtf-naranja)] hover:underline flex items-center gap-1"
          >
            ← Cambiar ubicación ({profile.territory.split(' ')[0]})
          </button>
        </div>

        {/* Welcome Headline */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
            ¡Bienvenido a los retos de empleabilidad de la <span className="text-[var(--idtf-naranja)]">Ventana de Conectividad Significativa (VCS)</span>!
          </h2>
          <p className="text-sm sm:text-base text-[var(--idtf-text-secondary)] leading-relaxed">
            Esta iniciativa, liderada por la <strong>Organización Internacional del Trabajo (OIT)</strong> y el <strong>Fondo de Población de las Naciones Unidas (UNFPA)</strong> en Colombia, con el respaldo de la <strong>Unión Europea</strong>, busca conectar a las juventudes de las regiones Caribe y Pacífico con las oportunidades de la economía digital, promoviendo el trabajo decente, la igualdad de género y el desarrollo sostenible.
          </p>
        </div>

      </div>

      {/* Nuestro Desafío: El Componente de Empleabilidad Digital */}
      <div className="space-y-6">
        <div className="idtf-section-header">
          <div className="idtf-section-header__number">01</div>
          <div>
            <h3 className="idtf-section-header__title">
              NUESTRO DESAFÍO: <span className="accent">EMPLEABILIDAD DIGITAL</span>
            </h3>
            <p className="text-xs sm:text-sm text-[var(--idtf-text-secondary)] mt-1">
              Co-diseño de retos de innovación e impulso al Pacto por las Habilidades.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Highlight Goal 1200 Youth */}
          <div className="idtf-card idtf-card--naranja p-6 rounded-[var(--idtf-radius-md)] md:col-span-1 flex flex-col justify-between space-y-4 bg-[var(--idtf-navy-light)]">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-[var(--idtf-naranja)]/20 text-[var(--idtf-naranja)] flex items-center justify-center font-bold">
                <Target className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-[var(--idtf-naranja)] font-mono">
                1,200
              </div>
              <div className="text-sm font-extrabold text-white uppercase tracking-wider font-mono">
                Jóvenes Impactados
              </div>
            </div>
            <p className="text-xs text-[var(--idtf-text-secondary)] leading-relaxed">
              Meta prioritaria para participar en la implementación de soluciones y acceder a empleos decentes en el sector TIC.
            </p>
          </div>

          {/* Rutas de Empleabilidad TIC Pillars with Puzzle Visualization */}
          <div className="idtf-card idtf-card--verde p-6 sm:p-8 rounded-[var(--idtf-radius-md)] md:col-span-2 space-y-6 bg-[var(--idtf-navy-light)] flex flex-col justify-between border border-white/10 shadow-xl relative overflow-hidden">
            
            {/* Background Puzzle watermark decoration */}
            <div className="absolute -right-8 -bottom-8 opacity-5 pointer-events-none text-white">
              <svg width="220" height="220" viewBox="0 0 100 100" fill="currentColor">
                <path d="M 10 10 H 40 C 40 20 50 20 50 10 H 90 V 40 C 80 40 80 50 90 50 V 90 H 50 C 50 80 40 80 40 90 H 10 V 50 C 20 50 20 40 10 40 Z" />
              </svg>
            </div>

            <div className="space-y-3 relative z-10">
              <div className="text-xs font-mono uppercase text-[var(--idtf-verde)] font-extrabold tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-[var(--idtf-verde)]" />
                RUTAS DE EMPLEABILIDAD TIC DEL TERRITORIO
              </div>
              
              <h4 className="text-xl sm:text-2xl font-black text-white leading-tight">
                Retos para fortalecer las Rutas de Empleabilidad TIC del Territorio
              </h4>

              <p className="text-sm font-extrabold text-[var(--idtf-naranja)] font-mono flex items-center gap-2">
                <Puzzle className="w-4 h-4 text-[var(--idtf-naranja)] shrink-0" />
                Ningún actor tiene todas las piezas; juntos podemos construir la solución
              </p>

              <p className="text-xs sm:text-sm text-[var(--idtf-text-secondary)] leading-relaxed">
                Convocamos a empresas, gremios e instituciones a cocrear respuestas innovadoras que fortalezcan las rutas de empleabilidad y consoliden un ecosistema continuo de apoyo para las juventudes del territorio.
              </p>
            </div>

            {/* Unified 8-Piece Assembled Puzzle Infographic */}
            <PuzzleInfographic />

          </div>

        </div>
      </div>

      {/* El Diagnóstico: Barreras Críticas Caribe & Pacífico */}
      <div className="space-y-6">
        <div className="idtf-section-header">
          <div className="idtf-section-header__number">02</div>
          <div>
            <h3 className="idtf-section-header__title">
              EL DIAGNÓSTICO: <span className="accent">¿QUÉ FRENA EL TALENTO?</span>
            </h3>
            <p className="text-xs sm:text-sm text-[var(--idtf-text-secondary)] mt-1">
              {showCaribe && showPacifico 
                ? "Analizamos el ecosistema laboral digital en el Caribe y el Pacífico colombiano a través de espacios participativos."
                : showCaribe 
                  ? "Analizamos el ecosistema laboral digital en la Región Caribe a través de espacios participativos."
                  : "Analizamos el ecosistema laboral digital en la Región Pacífico a través de espacios participativos."
              }
            </p>
          </div>
        </div>

        <div className={`grid grid-cols-1 ${showCaribe && showPacifico ? "md:grid-cols-2" : "md:grid-cols-1"} gap-6`}>
          
          {/* Región Caribe */}
          {showCaribe && (
            <div className="idtf-card idtf-card--verde p-6 rounded-[var(--idtf-radius-md)] space-y-4 bg-[var(--idtf-navy-light)]">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[var(--idtf-verde)] font-extrabold flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[var(--idtf-verde)]" />
                  REGIÓN CARIBE — BARRERAS Y BRECHAS IDENTIFICADAS
                </span>
                <span className="text-[10px] font-mono bg-white/10 text-white/80 px-2 py-0.5 rounded">
                  Barranquilla & Cartagena
                </span>
              </div>

              <div className="space-y-3">
                <div className="bg-[var(--idtf-navy)] p-3.5 rounded-[var(--idtf-radius-sm)] border border-white/10 space-y-1">
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <AlertCircle className="w-3.5 h-3.5 text-[var(--idtf-naranja)] shrink-0" />
                    Falta de redes de oportunidad y fricción de red
                  </div>
                  <p className="text-xs text-[var(--idtf-text-secondary)] pl-5">
                    Desconexión entre lo que requiere el mercado laboral y las juventudes del Caribe, agravado por sesgos de contratación (geográficos, étnicos y de títulos) e inexistencia de pasaportes de habilidades meritocráticos.
                  </p>
                </div>

                <div className="bg-[var(--idtf-navy)] p-3.5 rounded-[var(--idtf-radius-sm)] border border-white/10 space-y-1">
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <AlertCircle className="w-3.5 h-3.5 text-[var(--idtf-naranja)] shrink-0" />
                    Brecha en habilidades socioemocionales, digitales y autoexclusión
                  </div>
                  <p className="text-xs text-[var(--idtf-text-secondary)] pl-5">
                    Amplificada por desinformación, falta de resiliencia y ausencia de acompañamiento integral que fortalezca la autoconfianza de los jóvenes en procesos de selección.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Región Pacífico */}
          {showPacifico && (
            <div className="idtf-card idtf-card--naranja p-6 rounded-[var(--idtf-radius-md)] space-y-4 bg-[var(--idtf-navy-light)]">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[var(--idtf-naranja)] font-extrabold flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[var(--idtf-naranja)]" />
                  REGIÓN PACÍFICO — BARRERAS Y BRECHAS IDENTIFICADAS
                </span>
                <span className="text-[10px] font-mono bg-white/10 text-white/80 px-2 py-0.5 rounded">
                  Cali, Pasto & Buenaventura
                </span>
              </div>

              <div className="space-y-3">
                <div className="bg-[var(--idtf-navy)] p-3.5 rounded-[var(--idtf-radius-sm)] border border-white/10 space-y-1">
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <AlertCircle className="w-3.5 h-3.5 text-[var(--idtf-naranja)] shrink-0" />
                    Ecosistema de empleabilidad y formación desarticulado
                  </div>
                  <p className="text-xs text-[var(--idtf-text-secondary)] pl-5">
                    Falta de articulación entre formación técnica actualizada, certificación en Sandboxes simulados y módulos adaptables (alfabetización digital, agrotech y conectividad productiva) para nodos como Pasto y Cali.
                  </p>
                </div>

                <div className="bg-[var(--idtf-navy)] p-3.5 rounded-[var(--idtf-radius-sm)] border border-white/10 space-y-1">
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <AlertCircle className="w-3.5 h-3.5 text-[var(--idtf-naranja)] shrink-0" />
                    Síndrome del impostor, desmotivación y brecha de apropiación comunitaria
                  </div>
                  <p className="text-xs text-[var(--idtf-text-secondary)] pl-5">
                    Desmotivación de la población NINI en Cali y el resto de la región por falta de acompañamiento psicosocial, mentorías cercanas y vinculación con referentes locales inspiradores.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* CTA Button to Proceed to Page 3 (Colaboración y Registro) */}
      <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
        <button
          type="button"
          onClick={onBackToMap}
          className="idtf-btn idtf-btn--secondary py-3.5 px-6 text-sm flex items-center gap-2"
        >
          ← Volver al Mapa 3D
        </button>

        <button
          type="button"
          onClick={onProceed}
          className="idtf-btn idtf-btn--primary w-full sm:w-auto py-4 px-8 text-base font-extrabold flex items-center justify-center gap-2 shadow-2xl"
        >
          Continuar a Registro de Aliado y Opciones de Colaboración
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
};
