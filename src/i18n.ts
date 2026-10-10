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
      "exp.1.date": "Agosto 2024 – Actualidad",
      "exp.1.mode": "Remoto",
      "exp.1.role": "Full Stack Developer",
      "exp.1.company": "Fractalia",
      "exp.1.d1": "Lideré el desarrollo y la creación de un MVP participando con el equipo de diseño y el arquitecto de software.",
      "exp.1.d2": "Desarrollé APIs RESTful con FastAPI y React.",
      "exp.1.d3": "Configuré flujos CI/CD en Git, desarrollando pipelines automáticos para pruebas unitarias y de integración (Pytest).",
      "exp.1.d4": "Integré servicios AWS (S3) para el almacenamiento de archivos del sistema.",
      "exp.1.d5": "Gestioné la preparación del entorno, configuración de la infraestructura, despliegues y mantenimiento en producción usando Docker y Linux.",
      
      "exp.2.date": "Abril 2022 – Julio 2024",
      "exp.2.mode": "Híbrido",
      "exp.2.role": "Full Stack Developer",
      "exp.2.company": "Globant",
      "exp.2.d1": "Mantuve y escalé APIs en FastAPI y paneles en React JS, desarrollando nuevos módulos end-to-end.",
      "exp.2.d2": "Migré procesos a microservicios.",
      "exp.2.d3": "Optimicé consultas en bases de datos PostgreSQL (vía SQLAlchemy), implementando paginación eficiente para reducir tiempos de respuesta.",
      "exp.2.d4": "Construí pipelines automáticos para pruebas unitarias y de integración, garantizando la estabilidad del código previo al despliegue.",

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
      "exp.1.date": "August 2024 – Present",
      "exp.1.mode": "Remote",
      "exp.1.role": "Full Stack Developer",
      "exp.1.company": "Fractalia",
      "exp.1.d1": "Led the development of an MVP, working with the design team and the software architect.",
      "exp.1.d2": "Developed RESTful APIs with FastAPI and React.",
      "exp.1.d3": "Set up CI/CD flows in Git, building automated pipelines for unit and integration tests (Pytest).",
      "exp.1.d4": "Integrated AWS (S3) services for system file storage.",
      "exp.1.d5": "Managed environment readiness, infrastructure configuration, deployment and production maintenance using Docker and Linux.",
      
      "exp.2.date": "April 2022 – July 2024",
      "exp.2.mode": "Hybrid",
      "exp.2.role": "Full Stack Developer",
      "exp.2.company": "Globant",
      "exp.2.d1": "Maintained and scaled FastAPI APIs and React.js panels, developing new end-to-end modules.",
      "exp.2.d2": "Migrated processes to microservices.",
      "exp.2.d3": "Optimized queries in PostgreSQL databases (via SQLAlchemy), implementing efficient pagination to reduce response times.",
      "exp.2.d4": "Built automated pipelines for unit and integration tests, ensuring code stability prior to deployment.",

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
