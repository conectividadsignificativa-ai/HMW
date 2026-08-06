import React, { FormEvent } from "react";
import { User, Building, Compass, MapPin, ArrowRight, Mail, HeartHandshake } from "lucide-react";
import { OrganizationProfile } from "../types";

interface AllyRegistrationProps {
  profile: OrganizationProfile;
  setProfile: React.Dispatch<React.SetStateAction<OrganizationProfile>>;
  onProceed: (e: FormEvent) => void;
  onBackToMethodology: () => void;
  onBackToMap: () => void;
}

export const AllyRegistration: React.FC<AllyRegistrationProps> = ({
  profile,
  setProfile,
  onProceed,
  onBackToMethodology,
  onBackToMap,
}) => {
  return (
    <div className="space-y-10 max-w-3xl mx-auto animate-fade-in" id="ally-registration-step">
      
      {/* Breadcrumb Header */}
      <div className="idtf-breadcrumb justify-center">
        <span className="idtf-breadcrumb__step">03</span>
        <span className="text-[var(--idtf-text-muted)]">/</span>
        <span className="idtf-breadcrumb__section">VENTANA DE CONECTIVIDAD SIGNIFICATIVA</span>
        <span className="text-[var(--idtf-text-muted)]">/</span>
        <span className="idtf-breadcrumb__current">¿CÓMO PODEMOS COLABORAR?</span>
      </div>

      {/* Header Section */}
      <div className="idtf-section-header text-center mb-6">
        <div className="idtf-section-header__number mx-auto">03</div>
        <div>
          <h2 className="idtf-section-header__title">
            ¿CÓMO PODEMOS <span className="accent">COLABORAR?</span>
          </h2>
          <p className="text-xs sm:text-sm text-[var(--idtf-text-secondary)] mt-2 max-w-xl mx-auto">
            Buscamos transformar las barreras de empleabilidad en oportunidades reales. Ingresa tus datos institucionales para registrarte como Aliado Estratégico y consultar los retos de tu región.
          </p>
        </div>
      </div>

      {/* Form Card */}
      <form 
        onSubmit={onProceed}
        className="idtf-card idtf-card--naranja space-y-6 shadow-2xl relative bg-[var(--idtf-navy-light)] p-8 rounded-[var(--idtf-radius-lg)] border border-[var(--idtf-naranja)]/30"
      >
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <div className="w-10 h-10 rounded-full bg-[var(--idtf-naranja)]/20 text-[var(--idtf-naranja)] flex items-center justify-center font-bold shrink-0">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-extrabold text-white">
              Identificación del Aliado Estratégico
            </h3>
            <p className="text-xs text-[var(--idtf-text-secondary)]">
              Forma parte del Ecosistema de Conectividad Significativa OIT · UNFPA · UE
            </p>
          </div>
        </div>

        {/* Contact Name */}
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

        {/* Company Name */}
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-widest text-[var(--idtf-morado)] flex items-center gap-2 font-bold">
            <Building className="w-4 h-4 text-[var(--idtf-naranja)]" />
            Organización / Empresa / Institución *
          </label>
          <input
            type="text"
            required
            value={profile.companyName}
            onChange={(e) => setProfile({ ...profile, companyName: e.target.value })}
            placeholder="Ej. Cámara de Comercio / Globant / IES / Fundación"
            className="w-full px-5 py-3.5 bg-[var(--idtf-navy)] border border-white/15 rounded-[var(--idtf-radius-md)] text-white placeholder:text-white/30 text-base focus:border-[var(--idtf-naranja)] focus:ring-1 focus:ring-[var(--idtf-naranja)] outline-none transition-all"
          />
        </div>

        {/* Role */}
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-widest text-[var(--idtf-morado)] flex items-center gap-2 font-bold">
            <Compass className="w-4 h-4 text-[var(--idtf-naranja)]" />
            Cargo o Rol Institucional
          </label>
          <input
            type="text"
            value={profile.contactRole}
            onChange={(e) => setProfile({ ...profile, contactRole: e.target.value })}
            placeholder="Ej. Directora de Talento Humano / Gerente de Innovación"
            className="w-full px-5 py-3.5 bg-[var(--idtf-navy)] border border-white/15 rounded-[var(--idtf-radius-md)] text-white placeholder:text-white/30 text-base focus:border-[var(--idtf-naranja)] focus:ring-1 focus:ring-[var(--idtf-naranja)] outline-none transition-all"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-widest text-[var(--idtf-morado)] flex items-center gap-2 font-bold">
            <Mail className="w-4 h-4 text-[var(--idtf-naranja)]" />
            Correo Electrónico Institucional
          </label>
          <input
            type="email"
            value={profile.contactEmail}
            onChange={(e) => setProfile({ ...profile, contactEmail: e.target.value })}
            placeholder="ejemplo@organizacion.org"
            className="w-full px-5 py-3.5 bg-[var(--idtf-navy)] border border-white/15 rounded-[var(--idtf-radius-md)] text-white placeholder:text-white/30 text-base focus:border-[var(--idtf-naranja)] focus:ring-1 focus:ring-[var(--idtf-naranja)] outline-none transition-all"
          />
        </div>

        {/* Selected Territory Confirmation Box */}
        <div className="bg-[var(--idtf-navy)] p-4 rounded-[var(--idtf-radius-md)] border border-[var(--idtf-naranja)]/40 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[var(--idtf-naranja)] shrink-0" />
            <div>
              <div className="text-xs font-mono uppercase text-[var(--idtf-text-secondary)] font-bold">
                Zona de Enfoque Seleccionada:
              </div>
              <div className="text-sm font-extrabold text-white">
                {profile.territory}
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onBackToMap}
            className="text-xs text-[var(--idtf-naranja)] font-mono font-bold shrink-0 hover:underline"
          >
            Cambiar Zona
          </button>
        </div>

        {/* Actions */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBackToMethodology}
            className="idtf-btn idtf-btn--secondary py-3 px-5 text-xs w-full sm:w-auto"
          >
            ← Volver a Metodología
          </button>

          <button
            type="submit"
            className="idtf-btn idtf-btn--primary w-full sm:w-auto py-4 px-8 text-base font-extrabold flex items-center justify-center gap-2 shadow-2xl"
          >
            Ver Retos Estratégicos y Asignar Monedas IDTF
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </form>

    </div>
  );
};
