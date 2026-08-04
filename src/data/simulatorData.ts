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
    title: "Auditorías de Talento y Selección Ciega",
    hmw: "¿Cómo podríamos diseñar un sistema de selección 'a ciegas' y meritocrático, basado en torneos de código en Sandboxes seguros, que elimine los sesgos geográficos y étnicos, y garantice a las empresas el cumplimiento de estándares de ciberseguridad?",
    painCategory: "Crítica M (Cat. 13): Prejuicios empresariales territoriales y recelo por ciberseguridad",
    painDescription: "Riesgo corporativo de incumplir auditorías internacionales de seguridad (Compliance) al contratar remotamente, sumado a sesgos geográficos y étnicos que bloquean el talento regional.",
    leverCategories: [
      "C. Inexistencia de Sandboxes regulados",
      "E. Sesgo de credenciales tradicionales",
      "R. Gobernanza e institucionalidad"
    ],
    potentialActors: [
      "Tecnalia",
      "Empresas de Ciberseguridad Aliadas",
      "MinTIC",
      "Torre / SUMMA Capital",
      "Compromiso Valle (Cámara de Comercio Cali)",
      "Gobernación de Nariño (Sec. TIC)",
      "Colombina S.A."
    ],
    advantages: [
      "Contratación 100% meritocrática y libre de sesgos inconscientes (origen, género, universidad).",
      "Garantiza a clientes internacionales (ej. Europa) que el código producido es seguro, auditable y compliant."
    ],
    disadvantages: [
      "Resistencia cultural de departamentos tradicionales de Gestión Humana.",
      "Costo de infraestructura inicial para mantener simuladores VPN encriptados de alto nivel."
    ]
  },
  {
    id: "Reto B",
    challengeNumber: 2,
    region: "Pacífico",
    image: reto2Img,
    title: "Células Satélite de Desarrollo Productivo",
    hmw: "¿Cómo podríamos co-crear e implementar 'Células Satélite de Desarrollo' en Pacífico y Caribe, con infraestructura autónoma, que permitan a jóvenes talentos trabajar en proyectos sin que migren, reduciendo costos e impulsando el desarrollo territorial?",
    painCategory: "Crítica F (Cat. 6): Concentración física de ofertas TI en capitales",
    painDescription: "Altos sobrecostos operativos y guerra caníbal por talento en Bogotá/Medellín (alta rotación de desarrolladores), mientras el talento periférico del Caribe y Pacífico queda aislado.",
    leverCategories: [
      "O. Inestabilidad de infraestructura eléctrica y hardware",
      "P. Sostenibilidad de redes comunitarias",
      "A. Mallas curriculares ágiles"
    ],
    potentialActors: [
      "Parquesoft Pacífico",
      "Cámaras de Comercio locales (Barranquilla, Cartagena, Cali, Pasto)",
      "Empresas de Software Nacional (Fedesoft)",
      "EnlazaNet"
    ],
    advantages: [
      "Reduce drásticamente los costos operativos corporativos de las capitales (Nearshoring interno).",
      "Frena la fuga de cerebros y retiene el valor económico y tributario en el territorio de origen."
    ],
    disadvantages: [
      "Exige que la empresa contratante tenga una cultura organizacional de trabajo remoto asincrónico muy madura.",
      "Dependencia crítica del desempeño del operador local de internet satelital/fibra."
    ]
  },
  {
    id: "Reto C",
    challengeNumber: 3,
    region: "Caribe",
    image: reto3Img,
    title: "Fondo de Padrinazgo y Co-Certificación",
    hmw: "¿Cómo podríamos estructurar un programa tipo 'Padrinazgo y Co-Certificación' con profesionales Senior de empresas aliadas que sean mentores de jóvenes y docentes, para aumentar la construcción de redes de contacto e inserción laboral exitosa?",
    painCategory: "Crítica G (Cat. 7): Escasez de capital relacional y redes de mentoría senior",
    painDescription: "El talento junior de regiones tiene conocimientos teóricos pero fracasa en el onboarding corporativo por falta de 'palanca' (networking), desconocimiento del ritmo ágil y aislamiento de contactos.",
    leverCategories: [
      "D. Limitante por costos de credenciales Big Tech",
      "B. Déficit pedagógico y docentes conectados"
    ],
    potentialActors: [
      "Red CIDESCO",
      "Organización de Estados Iberoamericanos (OEI)",
      "Multinacionales Tecnológicas",
      "Cora (Plataforma de Talento)",
      "Fundación ANDI"
    ],
    advantages: [
      "Construye el networking corporativo del joven de manera orgánica antes de su primera entrevista formal.",
      "Disminuye casi a cero el riesgo de deserción o fracaso del joven durante sus primeros 90 días de empleo."
    ],
    disadvantages: [
      "Dificultad para garantizar la constancia y disponibilidad de tiempo de los desarrolladores Senior corporativos.",
      "Requiere un esfuerzo de coordinación logística, emparejamiento y seguimiento semanal intensivo."
    ]
  },
  {
    id: "Reto D",
    challengeNumber: 4,
    region: "Caribe",
    image: reto4Img,
    title: "Células de Código 100% Asincrónicas",
    hmw: "¿Cómo podríamos diseñar modelos de evaluación y primer empleo 100% asincrónicos, basados en entregables y provistos de hardware, que eliminen las barreras de horario y conciliación con la economía del cuidado, para atraer y retener talento femenino en el sector TI?",
    painCategory: "Crítica Q (Cat. 17): Vulnerabilidad socio-digital y brechas de las mujeres en TI",
    painDescription: "Incumplimiento de metas corporativas ESG de paridad de género porque las jóvenes mujeres desertan de los procesos al chocar con cargas no remuneradas de cuidado en el hogar.",
    leverCategories: [
      "A. Flexibilidad operativa y entregables",
      "C. Simulación de rendimiento",
      "O. Hardware disponible en el hogar"
    ],
    potentialActors: [
      "OIT / UNFPA",
      "Secretarías de la Mujer (Cali, Valle, Nariño, Atlántico, Bolívar)",
      "Empresas TIC con compromisos ESG",
      "Bizlab",
      "Ministerio del Trabajo"
    ],
    advantages: [
      "Materializa las métricas ESG corporativas atrayendo talento femenino altamente fidelizado.",
      "Evita la precarización al pagar por valor del entregable validado y no por marcación de horas síncronas."
    ],
    disadvantages: [
      "Trabajar 100% asíncronamente requiere un nivel de disciplina y madurez técnica muy alto en el talento Junior.",
      "Mayor dificultad para evaluar y desarrollar habilidades blandas interpersonales sin interacción en vivo."
    ]
  }
];
