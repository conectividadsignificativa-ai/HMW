import { TriangulatedChallengeData, SynergyCategory } from "../types";
import reto1Img from "../assets/images/reto_1_apple_dark_1785839951713.jpg";
import reto2Img from "../assets/images/reto_2_apple_dark_1785839965483.jpg";
import reto3Img from "../assets/images/reto_3_apple_dark_1785839977139.jpg";
import reto4Img from "../assets/images/reto_4_apple_dark_1785839988655.jpg";

export const SYNERGY_CATEGORIES: { id: SynergyCategory; label: string; icon: string; description: string }[] = [
  {
    id: "Financiera (Co-financiamiento / Becas)",
    label: "Financiera",
    icon: "Coins",
    description: "Co-financiamiento de exención de exámenes de certificación, matching grants, bolsas de incentivos o subsidios de transporte."
  },
  {
    id: "Acompañamiento / Mentoría Senior",
    label: "Acompañamiento / Mentoría",
    icon: "Users",
    description: "Horas de mentoría directa de desarrolladores Senior o Project Managers para guiar la inserción laboral y código práctico."
  },
  {
    id: "Espacios e Infraestructura Física",
    label: "Espacios e Infraestructura",
    icon: "Building2",
    description: "Prestación de sedes, laboratorios de computación, salas de innovación o espacios de coworking comunitarios."
  },
  {
    id: "Equipos y Conectividad (Hardware / Nube)",
    label: "Equipos y Conectividad",
    icon: "Laptop",
    description: "Donación o comodato de computadores (min. 16GB RAM), conectividad satelital o licencias en la nube (AWS/Azure/GCP)."
  },
  {
    id: "Vinculación Laboral / Pasantías / Proyectos",
    label: "Vinculación Laboral",
    icon: "Briefcase",
    description: "Disposición de vacantes de primer empleo Junior, pasantías remuneradas o asignación de células de desarrollo tercerizado."
  },
  {
    id: "Comunicaciones y Visibilidad / Difusión",
    label: "Comunicaciones y Visibilidad",
    icon: "Megaphone",
    description: "Difusión institucional, convocatoria masiva en medios/redes, co-organización de hackatones o eventos de empleabilidad."
  },
  {
    id: "Mapeo Relacional y Ecosistema (Redes)",
    label: "Mapeo Relacional y Ecosistema",
    icon: "Share2",
    description: "Apertura de redes de contactos corporativos, vinculación de proveedores, gremios o clientes de la cadena de valor TIC."
  }
];

export const TRIANGULATED_CHALLENGES: TriangulatedChallengeData[] = [
  {
    id: "Reto A",
    challengeNumber: 1,
    region: "Pacífico",
    image: reto1Img,
    title: "Ruta de Empleabilidad Digital y Conectividad Productiva",
    hmw: "Co-crear un modelo de ruta de empleabilidad digital que, aprovechando la densidad institucional y los servicios de última milla existentes , articule la formación técnica actualizada, la certificación práctica en espacios simulados controlados (Sandboxes), el reconocimiento de trayectorias alternativas y las redes de mentoría para conectar a jóvenes —especialmente población NINI— con el mercado laboral; y que, al mismo tiempo, contenga módulos adaptables (alfabetización digital básica, conectividad productiva y agrotech) para ser implementados en nodo como Pasto, con sus actores locales.",
    painCategory: "Brecha de articulación en formación técnica, Sandboxes y conectividad productiva en Pacífico",
    painDescription: "Inexistencia de rutas integradas que articulen la formación técnica con Sandboxes prácticos y redes de mentoría con pertinencia territorial para jóvenes NINI en nodos como Pasto y Cali.",
    leverCategories: [
      "A. Formación técnica actualizada y Sandboxes prácticos",
      "B. Reconocimiento de trayectorias alternativas y redes de mentoría",
      "C. Módulos adaptables (alfabetización digital, agrotech y conectividad productiva)"
    ],
    potentialActors: [
      "SENA Pacífico",
      "Cámara de Comercio de Pasto",
      "Gobernación de Nariño (Sec. TIC)",
      "Compromiso Valle",
      "Empresas TIC locales y gremios regionales"
    ],
    advantages: [
      "Conecta la formación técnica actualizada con certificación práctica en Sandboxes simulados.",
      "Módulos adaptables para nodos rurales y urbanos (Pasto, Cali, litoral) en agrotech y conectividad productiva."
    ],
    disadvantages: [
      "Requiere alta articulación multisectorial entre actores educativos, gubernamentales y privados.",
      "Infraestructura tecnológica continua para mantener los espacios simulados (Sandboxes)."
    ]
  },
  {
    id: "Reto B",
    challengeNumber: 2,
    region: "Pacífico",
    image: reto2Img,
    title: "Acompañamiento Psicosocial, Mentoría y Referentes Locales",
    hmw: "Diseñar un modelo de acompañamiento psicosocial, mentoría y referentes locales que, en Cali, aborde el síndrome del impostor y la desmotivación de la población NINI y que, en el resto de la región se vincule con referentes regionales y con la apropiación comunitaria de la conectividad.",
    painCategory: "Síndrome del impostor, desmotivación y brecha de apropiación comunitaria",
    painDescription: "Desmotivación y autoexclusión en jóvenes NINI de Cali y municipios del Pacífico por falta de acompañamiento psicosocial, redes de mentoría cercana y referentes locales inspiradores.",
    leverCategories: [
      "A. Mentoría psicosocial y superación del síndrome del impostor",
      "B. Referentes regionales inspiradores",
      "C. Apropiación comunitaria de la conectividad"
    ],
    potentialActors: [
      "Parquesoft Pacífico",
      "Alcaldía de Cali / Secretarías de Juventud",
      "Fundaciones Sociales del Valle y Nariño",
      "Redes de Mentores Locales"
    ],
    advantages: [
      "Atiende las barreras psicosociales y emocionales de autoexclusión en jóvenes NINI.",
      "Fomenta la apropiación comunitaria de la conectividad y el desarrollo de referentes locales inspiradores."
    ],
    disadvantages: [
      "Exige profesionales capacitados en salud mental y facilitación psicosocial comunitaria.",
      "Demanda seguimiento individualizado y cercano en territorio."
    ]
  },
  {
    id: "Reto C",
    challengeNumber: 1,
    region: "Caribe",
    image: reto3Img,
    title: "Fricción de Red, Pasaporte de Habilidades y Selección Ciega",
    hmw: "¿Cómo podríamos diseñar e implementar un ecosistema de “palancas” relacionales y visibilidad meritocrática que conecte las juventudes del Caribe con el mercado laboral TIC, eliminando sesgos de contratación (geográficos, étnicos y de títulos) mediante la articulación de redes de mentoría, un Pasaporte de Habilidades y sistemas de selección a ciegas basados en desempeño técnico u otros mecanismos innovadores que se están gestando en la región?",
    painCategory: "Fricción de red y sesgos de contratación (geográficos, étnicos y de títulos)",
    painDescription: "Ausencia de palancas relacionales y sesgos en los procesos de contratación laboral TIC que excluyen al talento joven del Caribe por origen o falta de credenciales tradicionales.",
    leverCategories: [
      "A. Pasaporte de Habilidades verificable",
      "B. Selección a ciegas basada en desempeño técnico",
      "C. Redes de mentoría y visibilidad meritocrática"
    ],
    potentialActors: [
      "Cámaras de Comercio del Caribe (Barranquilla, Cartagena, Santa Marta)",
      "ProBarranquilla",
      "Universidades del Caribe (Uninorte, UTB)",
      "Plataformas de Talento TIC y Gremios Regionales"
    ],
    advantages: [
      "Elimina sesgos de contratación mediante un Pasaporte de Habilidades y selección a ciegas basada en desempeño.",
      "Construye redes de mentoría y palancas relacionales meritocráticas para los jóvenes del Caribe."
    ],
    disadvantages: [
      "Requiere adopción y cambio cultural en las áreas de selección de talento humano de las empresas.",
      "Estandarización necesaria para la validación del Pasaporte de Habilidades."
    ]
  },
  {
    id: "Reto D",
    challengeNumber: 2,
    region: "Caribe",
    image: reto4Img,
    title: "Acompañamiento Integral y Certificación Socioemocional",
    hmw: "¿Cómo podríamos estructurar un modelo de acompañamiento integral y certificación de habilidades socioemocionales y digitales que fortalezca la autoconfianza y la resiliencia de los jóvenes del Caribe, reduciendo la autoexclusión y mejorando su desempeño en procesos de selección y entornos laborales?",
    painCategory: "Autoexclusión laboral, falta de autoconfianza y resiliencia en jóvenes del Caribe",
    painDescription: "Deserción y baja autoconfianza en jóvenes del Caribe al enfrentarse a procesos de selección laboral por falta de acompañamiento integral y certificación socioemocional.",
    leverCategories: [
      "A. Certificación de habilidades socioemocionales y digitales",
      "B. Fortalecimiento de autoconfianza y resiliencia",
      "C. Acompañamiento continuo pre-empleo y laboral"
    ],
    potentialActors: [
      "OIT / Unión Europea - IDTF Facility",
      "Secretarías de Desarrollo Económico del Caribe",
      "Gremio TIC del Caribe",
      "SENA Regional Caribe"
    ],
    advantages: [
      "Desarrolla autoconfianza, resiliencia y certifica habilidades socioemocionales clave.",
      "Reduce significativamente la autoexclusión y mejora la permanencia en entornos laborales."
    ],
    disadvantages: [
      "Demanda un modelo continuo de seguimiento y coaching socioemocional calificado.",
      "Requiere metodologías de evaluación cualitativas bien estandarizadas."
    ]
  }
];
