
import { Shield, Code, Link, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/50 backdrop-blur-lg border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-accent">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white font-['Orbitron']">
                JUNIOR DE OLEO
              </span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Especialista en ciberseguridad comprometido con la protección 
              de activos digitales y la innovación en seguridad.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Enlaces Rápidos</h3>
            <div className="space-y-2">
              {['Sobre Mí', 'Habilidades', 'Proyectos', 'Contacto'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="block text-white/70 hover:text-primary transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Conecta</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Link className="w-4 h-4 text-primary" />
                <span className="text-white/70">LinkedIn</span>
              </div>
              <div className="flex items-center space-x-3">
                <Code className="w-4 h-4 text-primary" />
                <span className="text-white/70">GitHub</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-white/70">junior@example.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {currentYear} Junior de Oleo. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-white/60 text-sm">Hecho con</span>
            <div className="w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
            <span className="text-white/60 text-sm">para la seguridad digital</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
