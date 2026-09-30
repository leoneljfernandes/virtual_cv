import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      "nav.home": "Inicio",
      "nav.profile": "Perfil",
      "nav.skills": "Capacidades",
      "nav.experience": "Experiencia",
      "nav.projects": "Proyectos",
      
      "hero.title": "Software seguro, escalable y de impacto real",
      "hero.subtitle": "Leonel Julián Fernandes - Full Stack Developer",
      "hero.location": "Buenos Aires, Argentina",
      
      "profile.title": "Acerca de mí",
      "profile.desc": "Ingeniero informático apasionado por el desarrollo de software, la tecnología, la infraestructura y el trabajo con datos. Soy un aprendiz de por vida que cree que explorar nuevos conocimientos es indispensable para el crecimiento profesional, con un fuerte interés actual en la ciberseguridad, que complemento con la Carrera de Seguridad Informática en Educación IT, y en la resolución analítica de problemas.",
      "profile.offer.title": "Lo que ofrezco:",
      "profile.offer.1": "Soluciones: Enfoque analítico para resolver problemas complejos eficientemente.",
      "profile.offer.2": "Mentalidad Ágil: Orientado a la mejora continua, documentación, testing y calidad.",
      "profile.offer.3": "Trabajo en Equipo: Valoración del ambiente de trabajo positivo y colaboración eficaz en entornos dinámicos.",
      "profile.seek.title": "Lo que busco:",
      "profile.seek.desc": "Trabajar como desarrollador en una empresa que valore las mejores prácticas de programación (documentación, pruebas, pipeline DevSecOps). Busco retos emocionantes y la oportunidad de crear software seguro y escalable.",
      
      "skills.title": "Capacidades Destacadas",
      "skills.fullstack": "Desarrollo Full Stack",
      "skills.db": "Bases de Datos",
      "skills.infra": "Infraestructura y Sistemas",
      "skills.hardware": "Hardware e IoT",
      "skills.cyber": "Ciberseguridad",
      "skills.crypto": "Criptografía",
      
      "skills.cybersecurity.items": "Gestión de riesgos; Amenazas y ataques; Gestión de identidad y autenticación; Monitoreo y logs; Evaluación de vulnerabilidades; Seguridad en el SDLC",
      "skills.cryptography.items": "Cifrado simétrico y asimétrico; Funciones hash; Firmas digitales",
      "skills.networks.extra": "Subnetting",
      
      "exp.title": "Experiencia Laboral",
      "exp.1.date": "Mayo 2025 – Agosto 2026",
      "exp.1.role": "Encargado de Infraestructura IT, Sistemas y Operaciones",
      "exp.1.company": "AutoSalerno",
      "exp.1.d1": "Administró despliegue y monitoreo de red local, switches, routers e IP.",
      "exp.1.d2": "Mantenimiento de estaciones de trabajo, servidores y videovigilancia IP.",
      "exp.1.d3": "Configuración y soporte de ERP y control de stock.",
      "exp.1.d4": "Lideró la transición digital integrando e-commerce y automatizando procesos.",
      "exp.1.d5": "Soporte técnico Nivel 1 y 2.",
      
      "exp.2.date": "Abril 2024 – Abril 2025",
      "exp.2.role": "Analista Funcional & QA",
      "exp.2.company": "Acción Point",
      "exp.2.d1": "Mantenimiento de ambientes de prueba para core bancario Bantotal.",
      "exp.2.d2": "Diseño y ejecución de casos de prueba integrales, funcionales y de integración.",
      "exp.2.d3": "Detección y reporte de fallas, colaborando con desarrolladores (resolución de bugs).",
      "exp.2.d4": "Relevamiento de requerimientos y documentación técnica para integraciones.",

      "projects.title": "Últimos Proyectos",
      "projects.p2.name": "notifications_challenge",
      "projects.p2.desc": "Servicio backend para el manejo y distribución de notificaciones (Desafío técnico).",
      "projects.p3.name": "AutosalernoWeb",
      "projects.p3.desc": "Plataforma e-commerce y catálogo digital desarrollado para la concesionaria Autosalerno.",
      "projects.p4.name": "FastAPI-Blog",
      "projects.p4.desc": "Implementación práctica de APIs RESTful de alto rendimiento utilizando Python y FastAPI.",
      "projects.p5.name": "waterMarkRemoverMeli",
      "projects.p5.desc": "Herramienta automatizada para procesar y remover marcas de agua en imágenes de MercadoLibre.",
      "projects.repo": "Ir al repo",
      
      "education.title": "Formación Académica",
      "education.complementary.title": "Formación Complementaria",
      "education.1": "Ingeniería Informática: Universidad Nacional de La Matanza (2022 – Actualidad) - En curso",
      "education.2": "Carrera de Seguridad Informática (Ciberseguridad): Educación IT (2025 – Actualidad) - En curso",
      "education.3": "Ingeniería Electrónica: Universidad Nacional de La Matanza (2018 – 2021) - Abandonado",
      
      "footer.role": "Software Developer"
    }
  },
  en: {
    translation: {
      "nav.home": "Home",
      "nav.profile": "Profile",
      "nav.skills": "Skills",
      "nav.experience": "Experience",
      "nav.projects": "Projects",
      
      "hero.title": "Secure, scalable software with real-world impact",
      "hero.subtitle": "Leonel Julián Fernandes - Full Stack Developer",
      "hero.location": "Buenos Aires, Argentina",
      
      "profile.title": "About me",
      "profile.desc": "Computer Engineer passionate about software development, technology, infrastructure, and data. A lifelong learner who believes exploring new knowledge is essential for professional growth, with a strong current interest in cybersecurity, which I complement with the Cybersecurity Program at Educación IT, and in analytical problem solving.",
      "profile.offer.title": "What I offer:",
      "profile.offer.1": "Solutions: Analytical approach to efficiently solve complex problems.",
      "profile.offer.2": "Agile Mindset: Oriented towards continuous improvement, documentation, testing, and quality.",
      "profile.offer.3": "Teamwork: Valuing a positive work environment and effective collaboration in dynamic settings.",
      "profile.seek.title": "What I seek:",
      "profile.seek.desc": "To work as a developer in a company that values programming best practices (documentation, testing, DevSecOps pipeline). Looking for exciting challenges and the opportunity to create secure and scalable software.",
      
      "skills.title": "Featured Skills",
      "skills.fullstack": "Full Stack Development",
      "skills.db": "Databases",
      "skills.infra": "Infrastructure & Systems",
      "skills.hardware": "Hardware & IoT",
      "skills.cyber": "Cybersecurity",
      "skills.crypto": "Cryptography",
      
      "skills.cybersecurity.items": "Risk management; Threats and attacks; Identity and authentication management; Monitoring and logs; Vulnerability assessment; Security in the SDLC",
      "skills.cryptography.items": "Symmetric and asymmetric encryption; Hash functions; Digital signatures",
      "skills.networks.extra": "Subnetting",
      
      "exp.title": "Work Experience",
      "exp.1.date": "May 2025 – August 2026",
      "exp.1.role": "IT Infrastructure, Systems & Operations Manager",
      "exp.1.company": "AutoSalerno",
      "exp.1.d1": "Managed deployment and monitoring of local network, switches, routers, and IP.",
      "exp.1.d2": "Maintenance of workstations, servers, and IP video surveillance.",
      "exp.1.d3": "Configuration and support of ERP and stock control.",
      "exp.1.d4": "Led digital transition integrating e-commerce and automating processes.",
      "exp.1.d5": "Level 1 & 2 technical support.",
      
      "exp.2.date": "April 2024 – April 2025",
      "exp.2.role": "Functional Analyst & QA",
      "exp.2.company": "Acción Point",
      "exp.2.d1": "Maintenance of test environments for Bantotal banking core.",
      "exp.2.d2": "Design and execution of comprehensive, functional, and integration test cases.",
      "exp.2.d3": "Defect detection and reporting, collaborating with developers (bug resolution).",
      "exp.2.d4": "Requirements gathering and technical documentation for integrations.",

      "projects.title": "Latest Projects",
      "projects.p2.name": "notifications_challenge",
      "projects.p2.desc": "Backend service for handling and distributing notifications (Technical take-home challenge).",
      "projects.p3.name": "AutosalernoWeb",
      "projects.p3.desc": "E-commerce platform and digital catalog developed for the Autosalerno car dealership.",
      "projects.p4.name": "FastAPI-Blog",
      "projects.p4.desc": "Practical implementation of high-performance RESTful APIs using Python and FastAPI.",
      "projects.p5.name": "waterMarkRemoverMeli",
      "projects.p5.desc": "Automated tool to process and remove watermarks from MercadoLibre product images.",
      "projects.repo": "Go to repo",
      
      "education.title": "Education",
      "education.complementary.title": "Complementary Education",
      "education.1": "Computer Engineering: National University of La Matanza (2022 – Present) - Ongoing",
      "education.2": "Cybersecurity Program: Educación IT (2025 – Present) - In progress",
      "education.3": "Electronic Engineering: National University of La Matanza (2018 – 2021) - Abandoned",
      
      "footer.role": "Software Developer"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", // default language
    fallbackLng: "es",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
