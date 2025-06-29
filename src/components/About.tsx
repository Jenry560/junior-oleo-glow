
import { Shield, Eye, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Seguridad Defensiva",
      description: "Implementación de sistemas de protección y monitoreo de infraestructuras críticas"
    },
    {
      icon: Eye,
      title: "Análisis de Amenazas",
      description: "Identificación y análisis de vulnerabilidades mediante técnicas avanzadas"
    },
    {
      icon: Zap,
      title: "Respuesta Rápida",
      description: "Gestión eficiente de incidentes y recuperación ante ataques cibernéticos"
    }
  ];

  return (
    <section className="py-20 relative" id="about">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Sobre <span className="text-cyber">Mí</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>

            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>
                Soy un profesional apasionado por la ciberseguridad con más de 5 años de experiencia 
                en la protección de activos digitales y la implementación de estrategias de seguridad robustas.
              </p>
              <p>
                Mi experiencia abarca desde auditorías de seguridad hasta la respuesta a incidentes, 
                siempre manteniéndome actualizado con las últimas amenazas y tecnologías de protección.
              </p>
              <p>
                Especializado en crear soluciones integrales que no solo protegen, sino que también 
                educan y empoderan a las organizaciones para enfrentar los desafíos del panorama 
                cibernético actual.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-white/60 text-sm">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-white/60 text-sm">Certificaciones</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-white/60 text-sm">Años Exp.</div>
              </div>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="space-y-6 animate-slide-in-right">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="glow-card p-6 group"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
