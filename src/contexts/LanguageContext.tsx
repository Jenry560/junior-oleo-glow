
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.workTogether': 'Trabajemos Juntos',
    
    // Hero
    'hero.specialist': 'Cybersecurity Specialist',
    'hero.description': 'Especialista en ciberseguridad con experiencia en protección de infraestructuras digitales, análisis de vulnerabilidades y respuesta a incidentes. Protegiendo el futuro digital.',
    'hero.viewProjects': 'Ver Proyectos',
    'hero.downloadCV': 'Descargar CV',
    
    // About
    'about.title': 'Sobre Mí',
    'about.defensiveSecurity': 'Seguridad Defensiva',
    'about.defensiveDesc': 'Implementación de sistemas de protección y monitoreo de infraestructuras críticas',
    'about.threatAnalysis': 'Análisis de Amenazas',
    'about.threatDesc': 'Identificación y análisis de vulnerabilidades mediante técnicas avanzadas',
    'about.quickResponse': 'Respuesta Rápida',
    'about.quickDesc': 'Gestión eficiente de incidentes y recuperación ante ataques cibernéticos',
    'about.intro1': 'Soy un profesional apasionado por la ciberseguridad con más de 5 años de experiencia en la protección de activos digitales y la implementación de estrategias de seguridad robustas.',
    'about.intro2': 'Mi experiencia abarca desde auditorías de seguridad hasta la respuesta a incidentes, siempre manteniéndome actualizado con las últimas amenazas y tecnologías de protección.',
    'about.intro3': 'Especializado en crear soluciones integrales que no solo protegen, sino que también educan y empoderan a las organizaciones para enfrentar los desafíos del panorama cibernético actual.',
    'about.projects': 'Proyectos',
    'about.certifications': 'Certificaciones',
    'about.experience': 'Años Exp.',
    
    // Skills
    'skills.title': 'Habilidades Técnicas',
    'skills.description': 'Competencias especializadas en ciberseguridad, desde análisis de vulnerabilidades hasta respuesta a incidentes y operaciones SOC.',
    'skills.offensive': 'Seguridad Ofensiva',
    'skills.defensive': 'Seguridad Defensiva',
    'skills.tools': 'Herramientas & Tecnologías',
    'skills.certTitle': 'Certificaciones Profesionales',
    
    // Projects
    'projects.title': 'Proyectos Destacados',
    'projects.description': 'Soluciones innovadoras en ciberseguridad que demuestran expertise técnico y enfoque práctico en la protección digital.',
    'projects.demo': 'Demo',
    'projects.code': 'Código',
    'projects.viewMore': 'Ver Más Proyectos',
    'projects.dashboard.title': 'Security Dashboard',
    'projects.dashboard.description': 'Panel de control en tiempo real para monitoreo de amenazas y análisis de seguridad de red.',
    'projects.scanner.title': 'Vulnerability Scanner',
    'projects.scanner.description': 'Herramienta automatizada para escaneo y detección de vulnerabilidades en aplicaciones web.',
    'projects.incident.title': 'Incident Response Tool',
    'projects.incident.description': 'Sistema de gestión y respuesta automatizada a incidentes de seguridad cibernética.',
    
    // Contact
    'contact.title': 'Hablemos de Seguridad',
    'contact.description': '¿Necesitas fortalecer la seguridad de tu organización? Estoy aquí para ayudarte a proteger lo que más importa.',
    'contact.sendMessage': 'Envía un Mensaje',
    'contact.name': 'Nombre',
    'contact.namePlaceholder': 'Tu nombre',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'tu@email.com',
    'contact.subject': 'Asunto',
    'contact.subjectPlaceholder': '¿En qué puedo ayudarte?',
    'contact.message': 'Mensaje',
    'contact.messagePlaceholder': 'Cuéntame sobre tu proyecto de seguridad...',
    'contact.send': 'Enviar Mensaje',
    'contact.connectWithMe': 'Conecta Conmigo',
    'contact.availability': 'Disponibilidad',
    'contact.status': 'Estado',
    'contact.available': 'Disponible',
    'contact.response': 'Respuesta',
    'contact.responseTime': '24 horas',
    'contact.location': 'Ubicación',
    'contact.locationValue': 'Remote/Global',
    'contact.description2': 'Especializado en crear soluciones de seguridad robustas y escalables. Siempre disponible para discutir nuevos desafíos y oportunidades.',
    
    // Footer
    'footer.description': 'Especialista en ciberseguridad comprometido con la protección de activos digitales y la innovación en seguridad.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.connect': 'Conecta',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.madeWith': 'Hecho con',
    'footer.forSecurity': 'para la seguridad digital'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.workTogether': "Let's Work Together",
    
    // Hero
    'hero.specialist': 'Cybersecurity Specialist',
    'hero.description': 'Cybersecurity specialist with experience in digital infrastructure protection, vulnerability analysis and incident response. Protecting the digital future.',
    'hero.viewProjects': 'View Projects',
    'hero.downloadCV': 'Download CV',
    
    // About
    'about.title': 'About Me',
    'about.defensiveSecurity': 'Defensive Security',
    'about.defensiveDesc': 'Implementation of protection systems and monitoring of critical infrastructures',
    'about.threatAnalysis': 'Threat Analysis',
    'about.threatDesc': 'Identification and analysis of vulnerabilities using advanced techniques',
    'about.quickResponse': 'Quick Response',
    'about.quickDesc': 'Efficient incident management and recovery from cyber attacks',
    'about.intro1': 'I am a professional passionate about cybersecurity with over 5 years of experience in protecting digital assets and implementing robust security strategies.',
    'about.intro2': 'My experience ranges from security audits to incident response, always staying updated with the latest threats and protection technologies.',
    'about.intro3': 'Specialized in creating comprehensive solutions that not only protect, but also educate and empower organizations to face the challenges of the current cyber landscape.',
    'about.projects': 'Projects',
    'about.certifications': 'Certifications',
    'about.experience': 'Years Exp.',
    
    // Skills
    'skills.title': 'Technical Skills',
    'skills.description': 'Specialized cybersecurity competencies, from vulnerability analysis to incident response and SOC operations.',
    'skills.offensive': 'Offensive Security',
    'skills.defensive': 'Defensive Security',
    'skills.tools': 'Tools & Technologies',
    'skills.certTitle': 'Professional Certifications',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.description': 'Innovative cybersecurity solutions that demonstrate technical expertise and practical approach to digital protection.',
    'projects.demo': 'Demo',
    'projects.code': 'Code',
    'projects.viewMore': 'View More Projects',
    'projects.dashboard.title': 'Security Dashboard',
    'projects.dashboard.description': 'Real-time control panel for threat monitoring and network security analysis.',
    'projects.scanner.title': 'Vulnerability Scanner',
    'projects.scanner.description': 'Automated tool for scanning and detecting vulnerabilities in web applications.',
    'projects.incident.title': 'Incident Response Tool',
    'projects.incident.description': 'Automated management and response system for cybersecurity incidents.',
    
    // Contact
    'contact.title': "Let's Talk Security",
    'contact.description': 'Need to strengthen your organization\'s security? I\'m here to help you protect what matters most.',
    'contact.sendMessage': 'Send a Message',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Your name',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.subject': 'Subject',
    'contact.subjectPlaceholder': 'How can I help you?',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell me about your security project...',
    'contact.send': 'Send Message',
    'contact.connectWithMe': 'Connect With Me',
    'contact.availability': 'Availability',
    'contact.status': 'Status',
    'contact.available': 'Available',
    'contact.response': 'Response',
    'contact.responseTime': '24 hours',
    'contact.location': 'Location',
    'contact.locationValue': 'Remote/Global',
    'contact.description2': 'Specialized in creating robust and scalable security solutions. Always available to discuss new challenges and opportunities.',
    
    // Footer
    'footer.description': 'Cybersecurity specialist committed to protecting digital assets and security innovation.',
    'footer.quickLinks': 'Quick Links',
    'footer.connect': 'Connect',
    'footer.rights': 'All rights reserved.',
    'footer.madeWith': 'Made with',
    'footer.forSecurity': 'for digital security'
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über mich',
    'nav.skills': 'Fähigkeiten',
    'nav.projects': 'Projekte',
    'nav.contact': 'Kontakt',
    'nav.workTogether': 'Zusammenarbeiten',
    
    // Hero
    'hero.specialist': 'Cybersecurity-Spezialist',
    'hero.description': 'Cybersecurity-Spezialist mit Erfahrung im Schutz digitaler Infrastrukturen, Schwachstellenanalyse und Vorfallreaktion. Schutz der digitalen Zukunft.',
    'hero.viewProjects': 'Projekte Ansehen',
    'hero.downloadCV': 'Lebenslauf Herunterladen',
    
    // About
    'about.title': 'Über Mich',
    'about.defensiveSecurity': 'Defensive Sicherheit',
    'about.defensiveDesc': 'Implementierung von Schutzsystemen und Überwachung kritischer Infrastrukturen',
    'about.threatAnalysis': 'Bedrohungsanalyse',
    'about.threatDesc': 'Identifikation und Analyse von Schwachstellen mit fortschrittlichen Techniken',
    'about.quickResponse': 'Schnelle Reaktion',
    'about.quickDesc': 'Effizientes Vorfallmanagement und Wiederherstellung nach Cyberangriffen',
    'about.intro1': 'Ich bin ein leidenschaftlicher Cybersecurity-Profi mit über 5 Jahren Erfahrung im Schutz digitaler Assets und der Implementierung robuster Sicherheitsstrategien.',
    'about.intro2': 'Meine Erfahrung reicht von Sicherheitsaudits bis zur Vorfallreaktion und ich bleibe stets auf dem neuesten Stand der aktuellen Bedrohungen und Schutztechnologien.',
    'about.intro3': 'Spezialisiert auf umfassende Lösungen, die nicht nur schützen, sondern auch Organisationen ausbilden und befähigen, den Herausforderungen der aktuellen Cyber-Landschaft zu begegnen.',
    'about.projects': 'Projekte',
    'about.certifications': 'Zertifizierungen',
    'about.experience': 'Jahre Erf.',
    
    // Skills
    'skills.title': 'Technische Fähigkeiten',
    'skills.description': 'Spezialisierte Cybersecurity-Kompetenzen, von Schwachstellenanalyse bis hin zu Vorfallreaktion und SOC-Operationen.',
    'skills.offensive': 'Offensive Sicherheit',
    'skills.defensive': 'Defensive Sicherheit',
    'skills.tools': 'Tools & Technologien',
    'skills.certTitle': 'Berufliche Zertifizierungen',
    
    // Projects
    'projects.title': 'Ausgewählte Projekte',
    'projects.description': 'Innovative Cybersecurity-Lösungen, die technische Expertise und praktischen Ansatz zum digitalen Schutz demonstrieren.',
    'projects.demo': 'Demo',
    'projects.code': 'Code',
    'projects.viewMore': 'Mehr Projekte Ansehen',
    'projects.dashboard.title': 'Security Dashboard',
    'projects.dashboard.description': 'Echtzeit-Kontrollpanel für Bedrohungsüberwachung und Netzwerksicherheitsanalyse.',
    'projects.scanner.title': 'Vulnerability Scanner',
    'projects.scanner.description': 'Automatisiertes Tool zum Scannen und Erkennen von Schwachstellen in Webanwendungen.',
    'projects.incident.title': 'Incident Response Tool',
    'projects.incident.description': 'Automatisiertes Management- und Reaktionssystem für Cybersecurity-Vorfälle.',
    
    // Contact
    'contact.title': 'Sprechen wir über Sicherheit',
    'contact.description': 'Müssen Sie die Sicherheit Ihrer Organisation stärken? Ich bin hier, um Ihnen zu helfen, das zu schützen, was am wichtigsten ist.',
    'contact.sendMessage': 'Nachricht Senden',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Ihr Name',
    'contact.email': 'E-Mail',
    'contact.emailPlaceholder': 'ihre@email.com',
    'contact.subject': 'Betreff',
    'contact.subjectPlaceholder': 'Wie kann ich Ihnen helfen?',
    'contact.message': 'Nachricht',
    'contact.messagePlaceholder': 'Erzählen Sie mir von Ihrem Sicherheitsprojekt...',
    'contact.send': 'Nachricht Senden',
    'contact.connectWithMe': 'Verbinden Sie sich mit mir',
    'contact.availability': 'Verfügbarkeit',
    'contact.status': 'Status',
    'contact.available': 'Verfügbar',
    'contact.response': 'Antwort',
    'contact.responseTime': '24 Stunden',
    'contact.location': 'Standort',
    'contact.locationValue': 'Remote/Global',
    'contact.description2': 'Spezialisiert auf robuste und skalierbare Sicherheitslösungen. Immer verfügbar, um neue Herausforderungen und Möglichkeiten zu besprechen.',
    
    // Footer
    'footer.description': 'Cybersecurity-Spezialist, der sich dem Schutz digitaler Assets und Sicherheitsinnovationen verschrieben hat.',
    'footer.quickLinks': 'Schnelllinks',
    'footer.connect': 'Verbinden',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.madeWith': 'Gemacht mit',
    'footer.forSecurity': 'für digitale Sicherheit'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
